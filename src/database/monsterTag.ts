import db from './';

export const getMonsterTagsByMonsterId = async (id: number) => {
  try {
    const res = await db.query(`
      SELECT
        name
      FROM monster_tags AS mt

      INNER JOIN monsters_monster_tags AS mmt
        ON mmt.monster_tag_id = mt.id
      
      WHERE
        mmt.monster_id = $1
    `, [id])
    return res.rows.map(val => val.name );
  } catch (e) {
    console.log(e);
  }
}