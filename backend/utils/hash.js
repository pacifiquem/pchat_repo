const bcrypt = require('bcrypt');

const hash = async(password) => {

    const salt =await bcrypt.genSalt(10);
    const hashedPassword =await bcrypt.hash(password, salt);
    password = hashedPassword;

    
    return password;
}


module.exports = hash;