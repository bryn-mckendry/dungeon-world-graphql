import db from '.';


export const getMonsterTags = async () => {
  try {
    const res = await db.query('SELECT * FROM monster_tags');
    return res.rows;
  } catch (e) {
    console.log(e);
  }
}

export const getMonsterTagById = async (id: number) => {
  try {
    const res = await db.query('SELECT * FROM monster_tags WHERE id = $1', [id]);
    return res.rows[0];
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
