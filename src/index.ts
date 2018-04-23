import {expect, fancy, FancyTypes} from 'fancy-test'
import * as Config from 'lyndon-config'

import exit from './exit'
import {guidance} from './guidance'
import hook from './hook'
import {loadConfig} from './load_config'

loadConfig.root = module.parent!.filename

export const test = fancy
.register('loadConfig', loadConfig)
.register('guidance', guidance)
.register('exit', exit)
.register('hook', hook)

export default test

export {
  expect,
  FancyTypes,
  Config,
  guidance,
}
