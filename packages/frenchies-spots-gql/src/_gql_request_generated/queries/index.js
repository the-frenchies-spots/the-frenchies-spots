const fs = require('fs');
const path = require('path');

module.exports.getLoginUser = fs.readFileSync(path.join(__dirname, 'getLoginUser.gql'), 'utf8');
module.exports.spotByPk = fs.readFileSync(path.join(__dirname, 'spotByPk.gql'), 'utf8');
module.exports.spots = fs.readFileSync(path.join(__dirname, 'spots.gql'), 'utf8');
module.exports.spotsProfile = fs.readFileSync(path.join(__dirname, 'spotsProfile.gql'), 'utf8');
module.exports.tagByPk = fs.readFileSync(path.join(__dirname, 'tagByPk.gql'), 'utf8');
module.exports.tags = fs.readFileSync(path.join(__dirname, 'tags.gql'), 'utf8');
