const db = require('../util/database');

module.export.insert = async ({name, email, password, remark}) => {
    try {
        let query = "INSERT INTO USERS ('name', 'email', 'password', 'remark') VALUES (?, ?, ?, ?)";
        let result = await db.execute(query, [name, email, password, remark]);
    } catch (error) {
        console.log(error)
        return false;
    }
    
    return true;
}