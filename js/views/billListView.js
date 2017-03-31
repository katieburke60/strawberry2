class BillListView {
    static renderBillListItems($target, result){
      let bill_list = result.summaries
      let billListItems = bill_list.map(this.listItemTemplate)
      $target.append(billListItems)
    }

    static listItemTemplate(bill){
      return `<li class = "billQuery" data-id="${bill.id}">
      <a href="#">
        <h5>${bill.number}</h5>
        </a>
        <p>${bill.title.trunc(77)}</p>
      </li>
      `
    }
  }
//       return `<li class = "billQuery" data-id="${bill.bill_id}">
//       <a href="#"><strong>${bill.bill_number}:</strong> ${bill.title}</a>
