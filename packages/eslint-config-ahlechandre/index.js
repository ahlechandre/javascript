module.exports = {
  extends: [
    './rules/best-pratices',
    './rules/errors',
    './rules/es6',
    './rules/imports',
    './rules/node',
    './rules/strict',
    './rules/style',
    './rules/variables',
  ].map(require.resolve),
}
