class BillListView {
    static renderBillListItems($target, result){
      let billListItems = result.map(this.listItemTemplate)
      $target.append(billListItems)
    }

    static listItemTemplate(bill){
      return `<li class = "billQuery">
      <a href="#">${bill.bill_id}</a>
      <p> ${bill.bill_number}: ${bill.title}</p>
      </div>
      </li>
      `
    }
  }
