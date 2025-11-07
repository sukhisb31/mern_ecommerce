import database from "../database/db.js";

export async function createUserTable () {
    try {
        const query = `
            CREATE TABLE IF NOT EXISTS users (
                id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
                name VARCHAR(255) NOT NULL CHECK (char_length(name) >= 3),
                email VARCHAR(255) UNIQUE NOT NULL,
                password TEXT NOT NULL,
                   
            )
        `
        
    } catch (error) {
        console.error("Error creating user table :", error);
        process.exit(1);
    }
}