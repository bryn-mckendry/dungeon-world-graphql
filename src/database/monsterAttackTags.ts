import db from './';

export const getMonsterAttackTagsByMonsterId = async (id: number) => {
  try {
    const res = await db.query(`
      SELECT
        name
      FROM monster_attack_tags AS mt

      INNER JOIN monsters_monster_attack_tags AS mmat
        ON mmat.monster_attack_tag_id = mt.id

      WHERE
        mmat.monster_id = $1
    `, [id]);
    return res.rows.map(val => val.name);
  } catch (e) {
    console.log(e);
  }
}