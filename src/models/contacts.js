import db from '../configs/db.js';

export function getContacts() {
    return new Promise((resolve, reject) => {
        db.query("SELECT * FROM contacts", function (err, result, fields) {
            if (err) {
                reject(err);
            }
            resolve(result);
        });
    });
}

export function getContactById(id) {
    return new Promise((resolve, reject) => {
        db.query("SELECT * FROM contacts WHERE id = ?", id, function (err, result, fields) {
            if (err) {
                reject(err);
            }
            resolve(result);
        });
    });
}

export function createContact(data) {
    return new Promise((resolve, reject) => {
        db.query("INSERT INTO contacts SET ?", data, function (err, result, fields) {
            if (err) {
                reject(err);
            }
            
            // Get last inserted data to return
            console.log("inserted ID : ", result.insertId);
            getContactById(result.insertId).then(data => {
                resolve(data);
            }).catch(err => {
                resolve(result);
            });
        });
    });
}