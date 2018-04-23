import {expect} from 'chai'

/**
 * ensures that a lyndon guidance or hook exits
 *
 * @param code - expected code
 * @default 0
 */
export default (code = 0) => ({
  run() {
    expect(process.exitCode).to.equal(code)
    throw new Error(`Expected to exit with code ${code} but it ran without exiting`)
  },
  catch(ctx: {error: any}) {
    if (!ctx.error.lyndon || ctx.error.lyndon.exit === undefined) throw ctx.error
    expect(ctx.error.lyndon.exit).to.equal(code)
  },
})
