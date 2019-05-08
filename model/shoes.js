const conn = require('./databaseConfig');

const shoesDb = {
    getShoes : (callback) => {
        conn.getConnection((err, con) => {
            if (err) {
                console.log(err);
                return callback(err, null);
            }
            console.log('Connected');
            const sql = 'SELECT * FROM shoes';
            con.query(sql, null, (err, res) => {
                con.release();
                if (err) {
                    console.log(err);
                    return callback(err, null);
                }
                return callback(null, res);
            });
        });
    },
    getShoesId : (id, callback) => {
        conn.getConnection((err, con) => {
            if (err) {
                console.log(err);
                return callback(err, null);
            }
            console.log('Connected');
            const sql = 'SELECT * FROM shoes WHERE id=?';
            con.query(sql, [id], (err, res) => {
                con.release();
                if (err) {
                    console.log(err);
                    return callback(err, null);
                }
                return callback(null, res);
            });
        });
    },
    addShoes: (name, description, images, price, quantity, item_code, callback) => {
        conn.getConnection((err, con) => {
            if (err) {
                console.log(err);
                return callback(err, null);
            }
            console.log('Connected');
            const shortid = require('shortid');
            const id = shortid.generate();
            const sql = 'INSERT INTO shoes (id, name, description, images, price, quantity, item_code) values (?, ?, ?, ?, ?, ?, ?)';
            con.query(sql, [id, name, description, images, price, quantity, item_code], (err, res) => {
                con.release();
                if (err) {
                    console.log(err);
                    return callback(err, null);
                }
                return callback(null, res);
            });
        });
    },
    updateShoes: (id, name, description, images, price, quantity, item_code, callback) => {
        conn.getConnection((err, con) => {
            if (err) {
                console.log(err);
                return callback(err, null);
            }
            console.log('Connected');
            const sql = 'UPDATE shoes SET nama=?, lokasi=?, kuantitas=?, tanggal=?, kategori=? WHERE id=?';
            con.query(sql, [name, description, images, price, quantity, item_code, id], (err, res) => {
                con.release();
                if (err) {
                    console.log(err);
                    return callback(err, null);
                }
                return callback(null, res);
            });
        });
    },
    deleteShoes: (id, callback) => {
        conn.getConnection((err, con) => {
            if (err) {
                console.log(err);
                return callback(err, null);
            }
            console.log('Connected');
            const sql = 'DELETE FROM shoes WHERE id=?';
            con.query(sql, [id], (err, res) => {
                con.release();
                if (err) {
                    console.log(err);
                    return callback(err, null);
                }
                return callback(null, res);
            });
        });
    }

}

module.exports = shoesDb;
