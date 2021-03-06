import db from '.';
import { ErrorMessages } from './constants';
import {
  MonsterDetailQueryResult,
  MonsterDetailResponse,
  MonsterDetailArrayResponse
} from './database.type';


export const addMonsterAttackTag = async (monsterAttackTag: { name: string, description: string }): MonsterDetailResponse => {
  try {
    let { name, description } = monsterAttackTag;
    const res: MonsterDetailQueryResult = await db.query(
      'INSERT INTO monster_attack_tags (name, description) VALUES ($1, $2) RETURNING *',
      [name, description]
    );
    return res.rows[0];
  } catch (e) {
    console.log(e);
    return ErrorMessages.BAD_REQUEST;
  }
}

export const getMonsterAttackTags = async (): MonsterDetailArrayResponse => {
  try {
    const res: MonsterDetailQueryResult = await db.query('SELECT * FROM monster_attack_tags');
    return res.rows;
  } catch (e) {
    console.log(e);
    return ErrorMessages.BAD_REQUEST;
  }
}

export const getMonsterAttackTagById = async (id: number): MonsterDetailResponse => {
  try {
    const res: MonsterDetailQueryResult = await db.query('SELECT * FROM monster_attack_tags WHERE id = $1', [id]);
    return res.rows[0];
  } catch (e) {
    console.log(e);
    return ErrorMessages.BAD_REQUEST;
  }
}

export const getMonsterAttackTagsByMonsterId = async (id: number): MonsterDetailArrayResponse => {
  try {
    const res: MonsterDetailQueryResult = await db.query(`
      SELECT
        mt.id,
        mt.name
      FROM monster_attack_tags AS mt

      INNER JOIN monsters_monster_attack_tags AS mmat
        ON mmat.monster_attack_tag_id = mt.id

      WHERE
        mmat.monster_id = $1
    `, [id]);
    return res.rows;
  } catch (e) {
    console.log(e);
    return ErrorMessages.BAD_REQUEST;
  }
}

export const removeMonsterAttackTagById = async (id: number): MonsterDetailResponse => {
  try {
    const res: MonsterDetailQueryResult = await db.query(`
      DELETE FROM monster_attack_tags
      WHERE
        id = $1
      RETURNING *;
    `, [id]);
    return res.rowCount > 0 ? res.rows[0] : ErrorMessages.NOT_FOUND;
  } catch (e) {
    console.log(e);
    return ErrorMessages.BAD_REQUEST;
  }
}

export const updateMonsterAttackTag = async(monsterAttackTag: { id: number, name?: string, description?: string }): MonsterDetailResponse => {
  try {
    const res: MonsterDetailQueryResult = await db.query(`
      UPDATE monster_attack_tags SET
        name = COALESCE($1, name),
        description = COALESCE($2, description)
      WHERE id = $3
      RETURNING *;
    `, [monsterAttackTag.name, monsterAttackTag.description, monsterAttackTag.id]);
    return res.rowCount > 0 ? res.rows[0] : ErrorMessages.NOT_FOUND;
  } catch (e) {
    console.log(e);
    return ErrorMessages.BAD_REQUEST;
  }
}