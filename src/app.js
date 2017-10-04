import EventEmitter from 'events'
import components from 'marko/components'
import homePage from './components/home'

class App extends EventEmitter {

  init(opts) {
    components.init()

    const container = document.getElementById('page-container')

    homePage
      .render(opts)
      .then(res =>
        res.replaceChildrenOf(container)
      )

    this.on('test-event', () => console.log('test-event received'))
  }
}

export default new App()
