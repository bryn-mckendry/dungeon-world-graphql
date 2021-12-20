import db from '.';

export const getPasswordByUsername = async (username: string) => {
  try {
    const res = await db.query(
      'SELECT password_hash FROM admins WHERE username = $1',
      [username]
    );
    return res.rows[0]?.password_hash;
  } catch (e) {
    console.log(e);
  }
}

export const insertAdmin = async (username: string, passwordHash: string) => {
  try {
    const res = await db.query(
      'INSERT INTO admins (username, password_hash) VALUES ($1, $2) RETURNING username',
      [username, passwordHash]
    )
    return res.rows[0];
  } catch (e) {
    console.log(e);
  }
}
