const fs = require('fs');
const path = require('path');

const PATH_TO_GIT = path.join(process.cwd())

const getBranchName = () => {
    return fs.readFileSync('./.git/HEAD', 'utf8');
}

module.exports = {
    getBranchName,
}
