import db from '.';


export const addMonsterAttackTag = async (name: string, description: string) => {
  try {
    const res = await db.query(
      'INSERT INTO monster_attack_tags (name, description) VALUES ($1, $2) RETURNING *',
      [name, description]
    );
    return res.rows[0];
  } catch (e) {
    console.log(e);
  }
}

export const getMonsterAttackTags = async () => {
  try {
    const res = await db.query('SELECT * FROM monster_attack_tags');
    return res.rows;
  } catch (e) {
    console.log(e);
  }
}

export const getMonsterAttackTagById = async (id: number) => {
  try {
    const res = await db.query('SELECT * FROM monster_attack_tags WHERE id = $1', [id]);
    return res.rows[0];
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