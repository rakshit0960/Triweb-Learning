const db = require('../util/database');

module.exports.insert = async ({name, email, password, remark}) => {
    const id = 0;
    try {
        let query = "INSERT INTO USERS ('name', 'email', 'password', 'remark') VALUES (?, ?, ?, ?)";
        let result = await db.execute(query, [name, email, password, remark]);
        id = result[0].insertId
    } catch (error) {
        console.log(error)
        return false;
    }
    return id;
}



module.exports.get = async (userData) => {
    try {
        let query = "SELECT * FROM USER WHERE id=?";
        let result = await db.execute(query, [userData.id]);
        return result;
    } catch (error) {
        console.log(error)
    }
    return ''
}

module.exports.update = async (userData) => {
    try {
        let query = "UPDATE 'users' SET 'password'=? WHERE id=?";
        let result = await db.execute(query, [userData.password, userData.id]);
        return true;
    } catch (error) {
        console.log(error)
    }
    return false;   
}

module.exports.delete = async (userData) => {
    try {
        let query = "DELETE FROM users WHERE id=?";
        let result = await db.execute(query, [userData.id]);
        return true;
    } catch (error) {
        console.log(error)
    }
    return false;   
}