import db from '.';
import {
  MonsterDetailArrayResponse,
  MonsterDetailQueryResult,
  MonsterDetailResponse
} from './database.type';


export const getMonsterTags = async (): MonsterDetailArrayResponse => {
  try {
    const res: MonsterDetailQueryResult = await db.query('SELECT * FROM monster_tags');
    return res.rows;
  } catch (e) {
    console.log(e);
    return { status: 400, message: 'Bad request.' }
  }
}

export const getMonsterTagById = async (id: number): MonsterDetailResponse => {
  try {
    const res: MonsterDetailQueryResult = await db.query('SELECT * FROM monster_tags WHERE id = $1', [id]);
    return res.rows[0];
  } catch (e) {
    console.log(e);
    return { status: 400, message: 'Bad request.' }
  }
}

export const getMonsterTagsByMonsterId = async (id: number): MonsterDetailArrayResponse => {
  try {
    const res: MonsterDetailQueryResult = await db.query(`
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
    return { status: 400, message: 'Bad request.' }
  }
}
