const {Guidance, flags} = require('guidancejs')

class HOUSTON extends Guidance {
  async run() {
    const {flags} = this.parse(HOUSTON)
    const code = parseInt(flags.code || '1')
    this.log(`exiting with code ${code}`)
    this.exit(code)
  }
}

HOUSTON.flags = {
  code: flags.string(),
}

module.exports = HOUSTON
