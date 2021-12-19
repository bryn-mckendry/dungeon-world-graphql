import db from '.';


export const getMonsterQualities = async () => {
  try {
    const res = await db.query(`SELECT * FROM monster_qualities`);
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