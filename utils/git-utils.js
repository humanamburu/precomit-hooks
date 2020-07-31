const fs = require('fs');
const path = require('path');

const PATH_TO_GIT = path.join(process.cwd(), '.git')

const getBranchName = () => {
    return fs.readFileSync(`${PATH_TO_GIT}/HEAD`, 'utf8').toString().trim();
}

module.exports = {
    getBranchName,
}
