import db from '.';
import { ErrorMessages } from './constants';
import {
  MonsterDetailArrayResponse,
  MonsterDetailQueryResult,
  MonsterDetailResponse
} from './database.type';


export const addMonsterTag = async (tag: { name: string, description: string }): MonsterDetailResponse => {
  try {
    const res: MonsterDetailQueryResult = await db.query(`
      INSERT INTO monster_tags (name, description)
        VALUES
      ($1, $2)
      RETURNING *;
    `, [tag.name, tag.description]);
    return res.rows[0];
  } catch (e) {
    console.log(e);
    return ErrorMessages.BAD_REQUEST;
  }
}


export const getMonsterTags = async (): MonsterDetailArrayResponse => {
  try {
    const res: MonsterDetailQueryResult = await db.query('SELECT * FROM monster_tags');
    return res.rows;
  } catch (e) {
    console.log(e);
    return ErrorMessages.BAD_REQUEST;
  }
}

export const getMonsterTagById = async (id: number): MonsterDetailResponse => {
  try {
    const res: MonsterDetailQueryResult = await db.query('SELECT * FROM monster_tags WHERE id = $1', [id]);
    return res.rows[0];
  } catch (e) {
    console.log(e);
    return ErrorMessages.BAD_REQUEST;
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
    return ErrorMessages.BAD_REQUEST;
  }
}

export const removeMonsterTagById = async (id: number): MonsterDetailResponse => {
  try {
    const res: MonsterDetailQueryResult = await db.query(`
      DELETE FROM monster_tags
        WHERE id = $1
      RETURNING *;
    `, [id]);
    return res.rowCount > 0 ? res.rows[0] : ErrorMessages.NOT_FOUND;
  } catch (e) {
    console.log(e);
    return ErrorMessages.BAD_REQUEST;
  }
}

export const updateMonsterTag = async (tag: { id: number, name?: string, description?: string }): MonsterDetailResponse => {
  try {
    const res: MonsterDetailQueryResult = await db.query(`
      UPDATE monster_tags SET
        name = COALESCE($1, name),
        description = COALESCE($2, description)
      WHERE id = $3
      RETURNING *;
    `, [tag.name, tag.description, tag.id]);
    return res.rowCount > 0 ? res.rows[0] : ErrorMessages.NOT_FOUND;
  } catch (e) {
    console.log(e);
    return ErrorMessages.BAD_REQUEST;
  }
}
