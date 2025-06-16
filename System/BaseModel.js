const Db = require('../System/Db_conn');

class BaseModel {
    /**
     * BaseModel class for database interactions.
     * This class provides a basic structure for database operations.
     */
    constructor() {
        try {
            this.db_conn = new Db();
            this.db_conn.pool.getConnection((err, connection) => {
                if (err) {
                    console.error('Database connection error:', err.message);
                    throw new Error('Failed to establish database connection');
                }
                // console.log('Database connection established successfully');
                connection.release();
            });
        } catch (error) {
            console.error('Error initializing BaseModel:', error.message);
            throw error;
        }
    }

    select(query, where) {
        return new Promise((resolve, reject) => {
            this.db_conn.pool.query(query, where, (error, results) => {
                if (error) {
                    return reject(error);
                }
                resolve(results);
            });
        });
    }

}

module.exports = BaseModel;
