import * as Config from 'lyndon-config'

import {loadConfig} from './load_config'

export function guidance(args: string[] | string | undefined, opts: loadConfig.Options = {}) {
  return {
    async run(ctx: {config: Config.IConfig, expectation: string}) {
      if (!ctx.config || opts.reset) ctx.config = await loadConfig(opts).run({} as any)
      args = castArray(args)
      let [id, ...extra] = args
      ctx.expectation = ctx.expectation || `runs ${args.join(' ')}`
      await ctx.config.runHook('init', {id, argv: extra})
      await ctx.config.runGuidance(id, extra)
    }
  }
}

const castArray = <T>(input?: T | T[]): T[] => {
  if (input === undefined) return []
  return Array.isArray(input) ? input : [input]
}
