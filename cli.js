#!/usr/bin/env node

const path = require('path')
const meow = require('meow')

const cli = meow(`
  Usage
    $ npm-version-cli <folder|file>
  Examples
    $ npm-version-cli
    $ npm-version-cli module
    $ npm-version-cli module/package.json
`)

const { input } = cli

const folder = input.length === 0
  ? process.cwd()
  : input[0]

const pathToPackageJSON = folder.endsWith('package.json')
  ? folder
  : path.join(folder, 'package.json')

try {
  const pkg = require(path.resolve(pathToPackageJSON))
  console.log(pkg.version)
  process.exit(0)
} catch (err) {
  console.error(err)
  process.exit(1)
}
