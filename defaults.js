var conventionalCommitTypes = require('./types');

module.exports = {
  types: conventionalCommitTypes,
  jiraMode: true,
  skipScope: false,
  maxHeaderWidth: 100,
  minHeaderWidth: 2,
  maxLineWidth: 100,
  jiraPrefix: 'DAZ'
};
