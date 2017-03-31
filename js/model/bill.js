class Bill {
  static all(query, state){
    return Api.getQuery(query, state)
  }

  static find(id) {
    return Api.getBill(id)
  }

  static search(id){
    if (store.look("bills", id)){
      return new Promise ((resolve) => {
        resolve(store.look("bills", id))
      })
    }else{
      return Api.getBill(id)
      .then((bill) => {
        store.add("bills", bill.bill)
        return bill.bill
      })
    }
  }

}
let store = new Store() // allows Store instance methods to be called anywhere
