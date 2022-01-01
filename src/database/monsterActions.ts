import db from '.';
import { RequestError } from './database.type';


export const getMonsterActionsByMonsterId = async (id: number): Promise<{ id: number; name: string }[] | RequestError> => {
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
    return { status: 400, message: 'Bad request.' }
  }
}