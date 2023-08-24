import mysql from "mysql2";
import config from "../../config.json";

export default mysql.createPool({
    host: config.database.host,
    port: config.database.port,
    user: config.database.username,
    password: config.database.password,
    database: config.database.database,
});
