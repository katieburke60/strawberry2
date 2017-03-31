class Store {
  constructor() {
    this.state = {}
    this.summary = []
    this.bills = []
  }

  add(resource, object){
    this.state[resource] = this.state[resource] || {}
    this.state[resource][object.bill_id] = object
  }

  look(resource, id){
    this.state[resource] = this.state[resource] || {}
    return this.state[resource][id]
  }
}


//functionality: look it up or add something to it
