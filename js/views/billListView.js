class BillListView {
    static renderBillListItems($target, result){
      let bill_list = result.summaries
      let billListItems = bill_list.map(this.listItemTemplate)
      $target.append(billListItems)
    }

    static listItemTemplate(bill){
      // debugger
      return `<li class = "billQuery" data-id="${bill.id}">
      <a href="#">
        <h4>${bill.number}</h4>
        </a>
        <p><b>Summary:</b>  ${bill.title.trunc(77)}</p>
        <p><b>Last Action:</b>  ${bill.last_action}</p>
        <p><b>Last Date:</b>  ${bill.last_action_date}</p>
      </li>
      `
    }
  }
//       return `<li class = "billQuery" data-id="${bill.bill_id}">
//       <a href="#"><strong>${bill.bill_number}:</strong> ${bill.title}</a>
