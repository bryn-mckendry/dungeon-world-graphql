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
        let cleanQuality: string = quality.toLowerCase().trim();
        let res = await db.query(`SELECT * FROM monster_qualities WHERE LOWER(name) = $1`, [cleanQuality]);
        let qualityId: number;
        if (res.rowCount === 0) {
          let res = await db.query('INSERT INTO monster_qualities (name) VALUES ($1) RETURNING *', [quality]);
          qualityId = +res.rows[0].id;
        } else {
          qualityId = +res.rows[0].id;
        }
        await db.query(
          'INSERT INTO monsters_monster_qualities (monster_id, monster_quality_id) VALUES ($1, $2)',
          [id, qualityId]
        );
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

export const getMonsterActionsByMonsterId = async (id: number) => {
  try {
    const res = await db.query(`
      SELECT
        ma.id,
        ma.name
      FROM monster_actions as ma

      WHERE
        ma.monster_id = $1
    `, [id]);
    return res.rows;
  } catch (e) {
    console.log(e);
  }
}


export const getMonsterAttackTagsByMonsterId = async (id: number) => {
  try {
    const res = await db.query(`
      SELECT
        mt.id,
        mt.name
      FROM monster_attack_tags AS mt

      INNER JOIN monsters_monster_attack_tags AS mmat
        ON mmat.monster_attack_tag_id = mt.id

      WHERE
        mmat.monster_id = $1
    `, [id]);
    return res.rows;
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


export const getMonsterQualitiesByMonsterId = async (id: number) => {
  try {
    const res = await db.query(`
      SELECT
        q.id,
        q.name
      FROM monster_qualities AS q

      INNER JOIN monsters_monster_qualities AS mmq
        ON mmq.monster_quality_id = q.id

      WHERE
        mmq.monster_id = $1
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


export const getMonsterTagsByMonsterId = async (id: number) => {
  try {
    const res = await db.query(`
      SELECT
        mt.*
      FROM monster_tags AS mt

      INNER JOIN monsters_monster_tags AS mmt
        ON mmt.monster_tag_id = mt.id
      
      WHERE
        mmt.monster_id = $1
    `, [id])
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


export const getMonsterTags = async () => {
  try {
    const res = await db.query('SELECT * FROM monster_tags');
    return res.rows;
  } catch (e) {
    console.log(e);
  }
}