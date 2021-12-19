import db from '.';


export const getSettings = async () => {
  try {
    const res = await db.query('SELECT * FROM monster_settings');
    return res.rows;
  } catch (e) {
    console.log(e);
  }
}

export const getSettingById = async (id: number) => {
  try {
    const res = await db.query('SELECT * FROM monster_settings WHERE id = $1', [id]);
    return res.rows[0];
  } catch (e) {
    console.log(e);
  }
}

export const getMonstersBySettingId = async (id: number) => {
  try {
    const res = await db.query('SELECT * FROM monsters WHERE setting_id = $1', [id]);
    return res.rows;
  } catch (e) {
    console.log(e);
  }
}