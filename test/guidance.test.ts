import * as path from 'path'

import {expect, test} from '../src'

const root = path.join(__dirname, 'fixtures/multi')

describe('guidance', () => {
  test
  .loadConfig({root})
  .stdout()
  .guidance(['foo:bar'])
  .do(output => expect(output.stdout).to.equal('hello world!\n'))
  .it()

  test
  .loadConfig({root})
  .stdout()
  .guidance(['foo:bar', '--name=foo'])
  .do(output => expect(output.stdout).to.equal('hello foo!\n'))
  .it()

  test
  .loadConfig({root})
  .stdout()
  .guidance(['foo:bar', '--name=foo'])
  .do(output => expect(output.stdout).to.equal('hello foo!\n'))
  .it()
})
