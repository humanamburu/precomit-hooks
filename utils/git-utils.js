const fs = require('fs');
const path = require('path');

const PATH_TO_GIT = path.join(process.cwd(), '.git');

const getBranchName = () => {
    return fs.readFileSync(`${PATH_TO_GIT}/HEAD`, 'utf8').toString().trim();
};

const getCommitMessage = () => {
    return fs.readFileSync(`${PATH_TO_GIT}/COMMIT_EDITMSG`, 'utf8').toString().trim();
};

const writeToCommitMessage = (message) => {
    fs.writeFileSync(`${PATH_TO_GIT}/COMMIT_EDITMSG`, message);
};

module.exports = {
    getBranchName,
    getCommitMessage,
    writeToCommitMessage,
};
