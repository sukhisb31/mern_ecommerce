import pkg from "pg"
const { Client } = pkg;

const database = new Client({
    user: "postgres",
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: "@sukhi07#",
    port: process.env.DB_PORT,
});

try {
    await database.connect();
    console.log("database connected successfull");

} catch (error) {
    console.error('database connected failed :', error);
    process.exit(1);
};

export default database;