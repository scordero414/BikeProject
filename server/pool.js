const util = require('util')
const mysql = require('mysql')

const pool = mysql.createPool({
    connectionLimit:10,
    user: "root",
    host: "localhost",
    port: 3306,
    password: '',
    database: "porjectbicis",
});

pool.getConnection((err, connection)=> {
    if (err)
        console.log("Algo ha fallado al conectar con la base de datos...")
    if (connection)
        connection.release();
    return;
})

pool.query = util.promisify(pool.query);

module.exports = pool;