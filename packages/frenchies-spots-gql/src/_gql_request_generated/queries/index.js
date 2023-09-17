const fs = require('fs');
const path = require('path');

module.exports.chatByPk = fs.readFileSync(path.join(__dirname, 'chatByPk.gql'), 'utf8');
module.exports.chats = fs.readFileSync(path.join(__dirname, 'chats.gql'), 'utf8');
module.exports.getLoginUser = fs.readFileSync(path.join(__dirname, 'getLoginUser.gql'), 'utf8');
module.exports.profiles = fs.readFileSync(path.join(__dirname, 'profiles.gql'), 'utf8');
module.exports.spotByPk = fs.readFileSync(path.join(__dirname, 'spotByPk.gql'), 'utf8');
module.exports.spots = fs.readFileSync(path.join(__dirname, 'spots.gql'), 'utf8');
module.exports.spotsFavorite = fs.readFileSync(path.join(__dirname, 'spotsFavorite.gql'), 'utf8');
module.exports.tagByPk = fs.readFileSync(path.join(__dirname, 'tagByPk.gql'), 'utf8');
module.exports.tags = fs.readFileSync(path.join(__dirname, 'tags.gql'), 'utf8');
