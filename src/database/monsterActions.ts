import db from '.';


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