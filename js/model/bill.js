store = {summaries: [], bills: []}
//store will clear each time

class BillSummary {
  constructor (number, id, relevance, title, last_action, last_action_date,
              state) {
                this.number = number
                this.id = id
                this.relevance = relevance
                this.title = title
                this.last_action = last_action
                this.last_action_date = last_action_date
                this.state = state
                store.summaries.push(this)
              }
}
//
// class BillDetail {
//   //separate file
//   constructor (state) {
//     this.state = state
//   }
// }

class Bill {
//how does this relate to the BillSummary?

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

