const config = require('./config')

var mysql = require('mysql');

// create the connection to the mySQL DB
connection = mysql.createPool({
    host: process.env.DB_HOST || config.DB_HOST,
    port: process.env.DB_PORT || config.DB_PORT,
    user: process.env.DB_USER || config.DB_USER,
    password: process.env.DB_PASSWORD || config.DB_PASSWORD,
    database: process.env.DB_NAME || config.DB_NAME,
});

// create all routes
function createRoutes(app) {

    //////////////////////////////////////////////////////////////////////////
    // GET /api/city
    //////////////////////////////////////////////////////////////////////////
    app.get('/api/city', (req, res) => {
    
        var sql = `SELECT * FROM city`;

        connection.query(sql, [], (error, results, fields) => {
            if (error) {
                console.log(error.message);
                res.status(500).send(error.message)
            }
            else {
                res.send(results)
            }
        })
    })

    //////////////////////////////////////////////////////////////////////////
    // Add more routes ...
    //////////////////////////////////////////////////////////////////////////

}

module.exports.createRoutes = createRoutes;