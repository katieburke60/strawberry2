class BillListView {
    static renderBillListItems($target, result){
      let billListItems = result.map(this.listItemTemplate)
      $target.append(billListItems)
    }

    static listItemTemplate(bill){
      return `<li class = "billQuery">
      <a href="#"> ${bill.number}: ${bill.title}</a>
      </li>
      `
    }
  }
