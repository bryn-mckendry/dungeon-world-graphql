import db from './';


export const getMonsters = async () => {
  try {
    const res = await db.query('SELECT * FROM monsters');
    return res.rows;
  } catch (e) {
    console.log(e);
  }
}

export const getMonster = async (id: number) => {
  try {
    const res = await db.query('SELECT * FROM monsters WHERE id = $1', [id])
    return res.rows[0];
  } catch (e) {
    console.log(e);
  }
}
