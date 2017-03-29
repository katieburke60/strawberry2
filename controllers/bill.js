let stores = [{ bills: [], categories: [], sponsors: [], comments: [] }]

function store() {
  return stores[stores.length - 1]
  //return the last store in the array
}

let Bill = (function createBill () {
  var id = 0
  //way to make private variables in JS
  //is the only reason we're doing this for the id? otherwise what would we do?
  class {
    constructor(title, number) {
      this.id = id++
      this.title = title
      this.number = number
      stores.push(Object.assign({}, {bills: [...store().bills, this]}))
      // explaination of interaction between push and Object.assign
      //benefit is being able to log every single addition to the database
    }
    comments() {
      return store().comments.filter((comment) => {
        return comment.bill_id === this.id
      })
    }
  }
}())

let Comment = (function createComment () {
   class {
    constructor(content, bill_id) {
      this.content = content
      this.bill_id = bill_id
    }
    bill() {
     return store().bills.filter((bill) => {
       return bill.id === this.bill_id
     })
   }
  }
}())

// let Sponsor = (function createSponsor () {
//   var id = 0
//   class {
//     constructor(first_name, last_name, party, district, votesmart) {
//     this.id = id++
//     this.first_name = first_name
//     this.last_name  = last_name
//     this.party = party
//     this.district = district
//     this.votesmart = votesmart
//     stores.push(Object.assign({}, {sponsors: [...store().sponsors, this]}))
//     }
//   }
// })
