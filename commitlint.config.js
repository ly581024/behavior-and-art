import { RuleConfigSeverity } from '@commitlint/types'

/** @type { import('@commitlint/types').UserConfig }**/
const Configuration = {
  extends: ['@commitlint/config-conventional'],
  // parserPreset: 'conventional-changelog-atom',
  helpUrl: 'https://github.com/conventional-changelog/commitlint/#what-is-commitlint',
  rules: {
    'type-enum': [RuleConfigSeverity.Error, 'always', [
      'build',
      'chore',
      'ci',
      'docs',
      'feat',
      'fix',
      'perf',
      'refactor',
      'revert',
      'style',
      'test'
    ]]
  }
}

module.exports = Configuration
