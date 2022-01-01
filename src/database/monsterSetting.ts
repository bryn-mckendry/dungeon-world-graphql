import db from '.';
import {
  MonsterDetailResponse,
  MonsterDetailArrayResponse,
  MonsterDetailQueryResult
} from './database.type';


export const getSettings = async (): MonsterDetailArrayResponse => {
  try {
    const res: MonsterDetailQueryResult = await db.query('SELECT * FROM monster_settings');
    return res.rows;
  } catch (e) {
    console.log(e);
    return { status: 400, message: 'Bad request.' }
  }
}

export const getSettingById = async (id: number): MonsterDetailResponse => {
  try {
    const res: MonsterDetailQueryResult = await db.query('SELECT * FROM monster_settings WHERE id = $1', [id]);
    return res.rows[0];
  } catch (e) {
    console.log(e);
    return { status: 400, message: 'Bad request.' }
  }
}