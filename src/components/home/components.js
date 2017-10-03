import app from '../../app'

export default class {
  onCreate() {
    this.state = {
      name: app.user.name,
      items: [{
        name:'vehicles',
        subitems:[{
          name:'cars',
          subitems:[{
            name:'elantra'
          }]
        },{
          name:'trucks',
          subitems:[{
            name:'f150',
          }, {
            name:'tacoma'
          }]
        }]
      }, {
        name:'foods',
        subitems:[{
          name:'pizza'
        },{
          name:'wings'
        }]
      }]
    }
  }

  onMount() {
    app.emit('test-event')
  }
}
