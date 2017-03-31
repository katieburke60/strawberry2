class BillListController {
  constructor ($target, bills, detailController) {
    this.$target = $target
    this.bills = bills
    this.detailController = detailController
    this.billSummaryArray()
    this.render()
    this.attachListeners()
  }

  render() {
    BillListView.renderBillListItems(this.$target, store)
  }
  //$target = place in HTML where information is going
  //bills = the array of bills
  billSummaryArray() {
    this.bills.forEach((bill) => {
      store.summaries.push(new BillSummary(bill.bill_number, bill.bill_id, bill.relevance, bill.title,
                            bill.last_action, bill.last_action_date, bill.state))
    })
  }

  attachListeners() {
    this.$target.on('click', 'li.billQuery', (e) => {
      e.preventDefault()
      let id = $(e.currentTarget).data('id')
      Bill.search(id)
      .then((bill) => {
      this.detailController.setCurrent(bill)
    })
  })
}
}
