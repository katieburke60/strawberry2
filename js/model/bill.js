let store = {summaries: [], bills: []}
//store will clear each time
let detail_store = new Store() // allows Store instance methods to be called anywhere

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
    if (detail_store.look("bills", id)){
      return new Promise ((resolve) => {
        resolve(detail_store.look("bills", id))
      })
    }else{
      return Api.getBill(id)
      .then((bill) => {
        detail_store.add("bills", bill.bill)
        return bill.bill
      })
    }
  }

}
