const db = require('./db');

function createUser(username, password) {
  return new Promise((resolve, reject) => {
    db.query('INSERT INTO users (username, password) VALUES (?, ?)', [username, password], (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
}

module.exports = {
    createUser
};
