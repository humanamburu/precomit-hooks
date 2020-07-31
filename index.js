const { getBranchName, getCommitMessage, writeToCommitMessage } = require('./utils/git-utils');

const currentBranch = getBranchName();
const correctNames = new RegExp('fix|feat|hotfix');

if (!correctNames.test(currentBranch)) {
    throw new Error('Branch name is incorrect');
}

if (!correctNames.test(getCommitMessage())) {
    writeToCommitMessage(getBranchName(), getCommitMessage())
}
