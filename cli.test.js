/* eslint-env jest */
const execa = require('execa')

describe('cli', () => {
  it('should find version current folder', async () => {
    const version = await execa.stdout('./cli.js')
    expect(version).toBe('0.0.0-semantic-release')
  })

  it('should find version in folder', async () => {
    const version = await execa.stdout('./cli.js', ['fixtures'])
    expect(version).toBe('1.0.0')
  })

  it('should find version in file', async () => {
    const version = await execa.stdout('./cli.js', ['fixtures/package.json'])
    expect(version).toBe('1.0.0')
  })
})
