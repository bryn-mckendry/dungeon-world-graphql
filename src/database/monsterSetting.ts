import db from '.';
import { ErrorMessages } from './constants';
import {
  MonsterDetailResponse,
  MonsterDetailArrayResponse,
  MonsterDetailQueryResult
} from './database.type';


export const addMonsterSetting = async (setting: { name: string, description: string }): MonsterDetailResponse => {
  try {
    const res: MonsterDetailQueryResult = await db.query(`
      INSERT INTO monster_settings (name, description)
        VALUES
      ($1, $2)
      RETURNING *;
    `, [setting.name, setting.description]);
    return res.rows[0];
  } catch (e) {
    console.log(e);
    return ErrorMessages.BAD_REQUEST;
  }
}

export const getMonsterSettings = async (): MonsterDetailArrayResponse => {
  try {
    const res: MonsterDetailQueryResult = await db.query('SELECT * FROM monster_settings');
    return res.rows;
  } catch (e) {
    console.log(e);
    return ErrorMessages.BAD_REQUEST;
  }
}

export const getMonsterSettingById = async (id: number): MonsterDetailResponse => {
  try {
    const res: MonsterDetailQueryResult = await db.query('SELECT * FROM monster_settings WHERE id = $1', [id]);
    return res.rows[0];
  } catch (e) {
    console.log(e);
    return ErrorMessages.BAD_REQUEST;
  }
}

export const removeMonsterSettingById = async (id: number): MonsterDetailResponse => {
  try {
    const res: MonsterDetailQueryResult = await db.query(`
      DELETE FROM monster_settings WHERE id = $1 RETURNING *;
    `, [id]);
    return res.rowCount > 0 ? res.rows[0] : ErrorMessages.NOT_FOUND;
  } catch (e) {
    console.log(e);
    return ErrorMessages.BAD_REQUEST;
  }
}

export const updateMonsterSetting = async (setting: { id: number, name: string, description: string }) => {
  try {
    const res: MonsterDetailQueryResult = await db.query(`
      UPDATE monster_settings SET
        name = COALESCE($1, name),
        description = COALESCE($2, description)
      WHERE id = $3
      RETURNING *;
    `, [setting.name, setting.description, setting.id]);
    return res.rowCount > 0 ? res.rows[0] : ErrorMessages.NOT_FOUND;
  } catch (e) {
    console.log(e);
    return ErrorMessages.BAD_REQUEST;
  }
}