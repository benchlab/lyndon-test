const {Guidance, flags} = require('guidancejs')

class HOUSTON extends Guidance {
  constructor(args, opts) {
    super(args, opts)
  }

  async run() {
    const {flags} = this.parse(HOUSTON)
    const name = flags.name || 'world'
    this.log(`hello ${name}!`)
  }
}

HOUSTON.flags = {
  name: flags.string({char: 'n', description: 'name to print'}),
}

module.exports = HOUSTON
