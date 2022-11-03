import mysql from 'mysql2';

const pool = mysql.createPool({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'ghfkddl2792@',
    database: 'week10',
});

const promisePool = pool.promise();

export const selectSql = {
    getUsers: async () => {
        const sql = `select * from user`;
        const [result] = await promisePool.query(sql);

        return result;
    },

    getDepartment: async () => {
        const sql = `select * from department`;
        const [result] = await promisePool.query(sql);

        return result
    }
}

export const deleteSql = {
    deleteDepartment: async (data) => {
        console.log("deleteSql.deleteDepartment:", data.Dnumber);
        const sql = `delete from department where Dnumber=${data.Dnumber}`
        
        await promisePool.query(sql);
    }
}