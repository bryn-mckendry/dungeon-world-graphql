import db from './';

export const getMonsterQualitiesByMonsterId = async (id: number) => {
  try {
    const res = await db.query(`
      SELECT
        name
      FROM monster_qualities AS q

      INNER JOIN monsters_monster_qualities AS mmq
        ON mmq.monster_quality_id = q.id

      WHERE
        q.id = $1
    `, [id]);
    return res.rows.map(val => val.name );
  } catch (e) {
    console.log(e);
  }
}