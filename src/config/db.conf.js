import pg from "pg";

const client = new pg.Client({
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
});

client.connect()
    .then(() => {console.log("Database Connected");})
    .catch((err) => {console.error("Error in connecting DB" + err);});

export default client;