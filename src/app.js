import EventEmitter from 'events'
import components from 'marko/components'
import homePage from './components/home'

class App extends EventEmitter {
  constructor() {
    super()

    this._user = {}
  }

  get user() {
    return this._user
  }

  init(opts) {
    this._user = opts.user
    components.init()

    const container = document.getElementById('page-container')

    homePage.render({}).then(res => res.replaceChildrenOf(container))

    this.on('test-event', () => console.log('test-event received'))
  }
}

export default new App()
