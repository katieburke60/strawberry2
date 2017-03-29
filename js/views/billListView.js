class BillListView {
    static renderBillListItems($target, result){
      debugger
      let billListItems = result.map(function(bill) {
        listItemTemplate
      })
      $target.append(billListItems)
    }

    static listItemTemplate(bill){
      return `<li class = "billQuery">
      <a href="#"> ${bill.number}: ${bill.title}</a>
      </li>
      `
    }
}
