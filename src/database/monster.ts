import db from '.';

export const addMonster = async (monster: {
  name: string,
  tags?: string[],
  attack?: string,
  damage?: string,
  hp?: number,
  armor?: number,
  attackTags?: string[],
  qualities?: string[],
  description?: string,
  instinct?: string,
  actions?: string[]
}) => {
  try {
    let { name, attack, damage, hp, armor, description, instinct } = monster;
    let res = await db.query(`
      INSERT INTO
        monsters
      (name, attack, damage, hp, armor, description, instinct)
      
      VALUES
      ($1, $2, $3, $4, $5, $6, $7)
      RETURNING id
    `, [name, attack, damage, hp, armor, description, instinct]);
    let id = +res.rows[0].id;

    if (monster.tags) {
      for (let tag of monster.tags) {
        let cleanTag: string = tag.toLowerCase().trim();
        let res = await db.query(
          `SELECT * FROM monster_tags WHERE LOWER(name) = $1`,
          [cleanTag]
        );
        let tagId: number;
        if (res.rowCount === 0) {
          let res = await db.query('INSERT INTO monster_tags (name) VALUES ($1) RETURNING *', [tag]);
          tagId = +res.rows[0].id;
        } else {
          tagId = +res.rows[0].id;
        }
        await db.query(
          `INSERT INTO monsters_monster_tags (monster_id, monster_tag_id) VALUES ($1, $2)`,
          [id, tagId]
        );
      }
    }

    if (monster.attackTags) {
      for (let tag of monster.attackTags) {
        let cleanTag: string = tag.toLowerCase().trim();
        let res = await db.query(
          `SELECT * FROM monster_attack_tags WHERE LOWER(name) = $1`,
          [cleanTag]
        );
        let tagId: number;
        if (res.rowCount === 0) {
          let res = await db.query('INSERT INTO monster_attack_tags (name) VALUES ($1) RETURNING *', [tag]);
          tagId = +res.rows[0].id;
        } else {
          tagId = +res.rows[0].id;
        }
        await db.query(
          `INSERT INTO monsters_monster_attack_tags (monster_id, monster_attack_tag_id) VALUES ($1, $2)`,
          [id, tagId]
        )
      }
    }

    if (monster.qualities) {
      for (let quality of monster.qualities) {
          await db.query('INSERT INTO monster_qualities (name) VALUES ($1) RETURNING *', [quality]);
      }
    }

    if (monster.actions) {
      for (let action of monster.actions) {
        await db.query('INSERT INTO monster_actions (name, monster_id) VALUES ($1, $2)', [action, id]);
      }
    }

    return { id, ...monster }
  } catch (e) {
    console.log(e);
  }
}

export const removeMonster = async (id: number) => {
  try {
    const res = await db.query('DELETE FROM monsters WHERE id = $1 RETURNING *', [id]);
    return res.rows[0];
  } catch (e) {
    console.log(e);
  }
}

export const updateMonster = async (monster: {
  id: number,
  name?: string,
  tags?: string[],
  attack?: string,
  damage?: string,
  hp?: number,
  armor?: number,
  attackTags?: string[],
  qualities?: string[],
  description?: string,
  instinct?: string,
  actions?: string[],
  setting?: string
}) => {
  try {
    // Validate that the monster tags provided already exist.
    let tags;
    if (monster.tags) {
      tags = (await db.query(
        `SELECT * FROM monster_tags WHERE LOWER(name) IN (${monster.tags.map((_, i) => `$${i+1}`)})`,
        monster.tags.map(val => val.toLowerCase())
      )).rows;
      for (let t of monster.tags) {
        if (!tags.map(val => val.name.toLowerCase()).includes(t.toLowerCase())) {
          return { message: `Monster tag '${t}' does not exist.` }
        }
      }
    }

    // Validate that the monster attack tags provided already exist.
    let attackTags;
    if (monster.attackTags) {
      attackTags = (await db.query(
        `SELECT * FROM monster_attack_tags WHERE LOWER(name) IN (${monster.attackTags.map((_, i) => `$${i+1}`)})`,
        monster.attackTags.map(val => val.toLowerCase())
      )).rows;
      for (let t of monster.attackTags) {
        if (!attackTags.map(val => val.name.toLowerCase().includes(t.toLowerCase()))) {
          return { message: `Monster attack tag '${t}' does not exist.`}
        }
      }
    }

    if (monster.setting) {
      // Validate that the monster setting provided already exists.
      let res = await db.query('SELECT * FROM monster_settings WHERE LOWER(name) = $1', [monster.setting.toLowerCase()]);
      if (res.rowCount === 0) {
        return { message: `Monster settings '${monster.setting}' does not exist.`}
      }
      // Update monster setting
      await db.query('UPDATE monsters SET setting_id = $1 WHERE id = $2', [res.rows[0].id, monster.id]);
    }


    // Update the monster rows
    let res = await db.query (`
      UPDATE monsters SET
        name = COALESCE($1, name),
        attack = COALESCE($2, attack),
        damage = COALESCE($3, damage),
        hp = COALESCE($4, hp),
        armor = COALESCE($5, armor),
        description = COALESCE($6, description),
        instinct = COALESCE($7, instinct)
      WHERE id = $8
      RETURNING *;
    `, [
      monster.name,
      monster.attack,
      monster.damage,
      monster.hp,
      monster.armor,
      monster.description,
      monster.instinct,
      monster.id
    ]);
    let updatedMonster = res.rows[0];

    if (!updatedMonster) return { message: `Monster with id ${monster.id} does not exist.` }

    // Update monster tags
    if (tags) {
      // Delete any tags not in the provided array.
      await db.query(`
        DELETE FROM
          monsters_monster_tags
        WHERE
            monster_id = $1
        AND monster_tag_id NOT IN (${tags.map((_, i) => `$${i+2}`).join(',')})
      `, [monster.id, ...tags.map(val => val.id)]);

      res = await db.query(`
        SELECT
          *
        FROM monsters_monster_tags
        WHERE
            monster_id = $1
        AND monster_tag_id IN (${tags.map((_, i) => `$${i+2}`).join(',')})
      `, [monster.id, ...tags.map(val => val.id)]);

      tags = tags.filter(tag => !res.rows.map(val => val.id).includes(tag.id));

      res = await db.query(`
        INSERT INTO
          monsters_monster_tags
          (monster_id, monster_tag_id)
        VALUES
        ${tags.map((_, i) => `($${i+1}, $${i+2})`).join(',')}
      `, tags.map(val => `${monster.id},${val.id}`).join(',').split(','));
    }


    // Update monster attack tags
    if (attackTags) {
      await db.query(`
        DELETE FROM
          monsters_monster_attack_tags
        WHERE
            monster_id = $1
        AND monster_attack_tag_id NOT IN (${attackTags.map((_, i) => `$${i+2}`).join(',')})
      `, [monster.id, ...attackTags.map(val => val.id)])

      res = await db.query(`
        SELECT
          *
        FROM monsters_monster_attack_tags
        WHERE
            monster_id = $1
        AND monster_attack_tag_id IN (${attackTags.map((_, i) => `$${i+2}`).join(',')})
      `, [monster.id, ...attackTags.map(val => val.id)])

      res = await db.query(`
        INSERT INTO
          monsters_monster_attack_tags
          (monster_id, monster_attack_tag_id)
        VALUES
        ${attackTags.map((_, i) => `($${i+1}, $${i+2})`).join(',')}
      `, attackTags.map(val => `${monster.id},${val.id}`).join(',').split(','))
    }

    // Update monster qualities
    if (monster.qualities) {
      await db.query('DELETE FROM monster_qualities WHERE monster_id = $1', [monster.id]);
      await db.query(`
        INSERT INTO
          monster_qualities
          (monster_id, name)
        VALUES
        ${monster.qualities.map((_, i) => `($${i+1}, $${i+2})`).join(',')}
      `, monster.qualities.map(val => `${monster.id},${val}`).join(',').split(','))
    }

    // Update monster actions
    if (monster.actions) {
      await db.query('DELETE FROM monster_actions WHERE monster_id = $1', [monster.id]);
      await db.query(`
        INSERT INTO
          monster_actions
          (monster_id, name)
        VALUES
        ${monster.actions.map((_, i) => `($${i+1}, $${i+2})`).join(',')}
      `, monster.actions.map(val => `${monster.id},${val}`).join(',').split(','))
    }

    return updatedMonster;
  } catch (e) {
    console.log(e);
  }
}

export const getMonsters = async () => {
  try {
    const res = await db.query('SELECT * FROM monsters');
    return res.rows;
  } catch (e) {
    console.log(e);
  }
}

export const getMonsterById = async (id: number) => {
  try {
    const res = await db.query('SELECT * FROM monsters WHERE id = $1', [id])
    return res.rows[0];
  } catch (e) {
    console.log(e);
  }
}

export const getMonsterByName = async (name: string) => {
  try {
    const res = await db.query('SELECT * FROM monsters WHERE LOWER(name) = $1', [name]);
    return res.rows[0];
  } catch (e) {
    console.log(e);
  }
}

export const getMonstersByMonsterAttackTagId = async (id: number) => {
  try {
    const res = await db.query(`
      SELECT
        m.*
      FROM monsters AS m

      INNER JOIN monsters_monster_attack_tags AS mmat
        ON mmat.monster_id = m.id

      WHERE
        mmat.monster_attack_tag_id = $1
    `, [id]);
    return res.rows;
  } catch (e) {
    console.log(e);
  }
}

export const getMonstersByMonsterQualityId = async (id: number) => {
  try {
    const res = await db.query(`
      SELECT
        m.*
      FROM monsters as m

      INNER JOIN monsters_monster_qualities AS mmq
        ON mmq.monster_id = m.id
      
      WHERE
        mmq.monster_quality_id = $1
    `, [id]);
    return res.rows;
  } catch (e) {
    console.log(e);
  }
}

export const getMonstersByMonsterTagId = async (id: number) => {
  try {
    const res = await db.query(`
      SELECT
        m.*
      FROM monster_tags AS mt
      
      INNER JOIN monsters_monster_tags AS mmt
        ON mmt.monster_tag_id = mt.id
      
      INNER JOIN monsters AS m
        ON m.id = mmt.monster_id

      WHERE
        mt.id = $1
    `, [id]);
    return res.rows;
  } catch (e) {
    console.log(e);
  }
}

