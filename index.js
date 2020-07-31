const { getBranchName } = require('./utils/git-utils');

const currentBranch = getBranchName();
const correctBranchNames = new RegExp('fix|feature|hotfix');

console.log(
    correctBranchNames.test(currentBranch)
);

if (!correctBranchNames.test(currentBranch)) {
    throw new Error('Branch name is incorrect');
}
