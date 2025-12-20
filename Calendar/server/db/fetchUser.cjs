const User = require('../server.cjs').User; // we'll fix this below

async function fetchUser(email) {
    return await User.findOne({ email });
}

module.exports = fetchUser;