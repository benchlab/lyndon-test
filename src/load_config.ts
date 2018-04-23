import * as Config from 'lyndon-config'

/**
 * loads HOUSTON plugin/multi config
 */
export function loadConfig(opts: loadConfig.Options = {}) {
  return {
    async run(ctx: {config: Config.IConfig}) {
      ctx.config = await Config.load(opts.root || loadConfig.root)
      return ctx.config
    }
  }
}

export namespace loadConfig {
  export let root: string
  export interface Options {
    root?: string
    reset?: boolean
  }
}
