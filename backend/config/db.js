import sql from 'mssql';
import dotenv from 'dotenv';

dotenv.config();

const dbConfig = {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    server: process.env.DB_SERVER,
    database: process.env.DB_NAME,
    options: {
        encrypt: false, 
        trustServerCertificate: true
    }
};

export const poolPromise = new sql.ConnectionPool(dbConfig)
    .connect()
    .then(pool => {
        console.log('SQL Server Connected: ERP_SYSTEM');
        return pool;
    })
    .catch(err => {
        console.error('Connection Failed: ', err.message);
    });