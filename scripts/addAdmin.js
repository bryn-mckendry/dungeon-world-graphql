// Script to quickly add an admin account for development.
const bcrypt =  require('bcryptjs');
const { Client } = require('pg');


console.log('Running script - Add Admin')

const username = 'admin';
const password = bcrypt.hashSync('password', 10);

const client = new Client();
client.connect()
  .then(() => {
    client.query(
      'INSERT INTO admins (username, password_hash) VALUES ($1, $2)',
      [username, password]
    ).then(res => {
      if (res.rowCount === 1) {
        console.log('Script complete - Admin added');
      } else {
        console.log('Script complete - Something went wrong, admin not inserted')
      }
      process.exit();
    })
  })
  .catch (err => {
    console.log(err);
    process.exit();
  });
