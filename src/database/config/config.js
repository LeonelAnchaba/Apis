module.exports = {
  "development": {
    "username": process.env.DB.USERNAME,
    "password": process.env.DB.PASSWORD,
    "database": process.env.DB.NAME,
    "host": process.env.DB.HOST,
    "dialect": process.env.DB.DIALECT
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
