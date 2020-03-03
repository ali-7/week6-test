const { Pool } = require('pg');

require('env2')('config.env');

let dbUrl = '';
if (process.env.NODE_ENV === 'test') {
  dbUrl = process.env.TEST_DB;
} else if (process.env.NODE_ENV === 'production') {
  dbUrl = process.env.DATABASE_URL;
} else {
  dbUrl = process.env.DEV_DB;
}
const options = {
  connectionString: dbUrl,
  ssl: true,
};
module.exports = new Pool(options);
