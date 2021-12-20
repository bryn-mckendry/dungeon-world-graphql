import db from '.';


export const getMonsterQualitiesByMonsterId = async (id: number) => {
  try {
    const res = await db.query(`
      SELECT
        q.id,
        q.name
      FROM monster_qualities AS q

      WHERE
        q.monster_id = $1
    `, [id]);
    return res.rows;
  } catch (e) {
    console.log(e);
  }
}