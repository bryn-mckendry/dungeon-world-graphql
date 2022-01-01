import db from '.';
import { RequestError } from './database.type';


export const getMonsterQualitiesByMonsterId = async (id: number): Promise<{ id: number; name: string }[] | RequestError> => {
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
    return { status: 400, message: 'Bad request.' }
  }
}