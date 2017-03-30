class BillListView {
    static renderBillListItems($target, result){
      let billListItems = result.map(this.listItemTemplate)
      $target.append(billListItems)
    }

    static listItemTemplate(bill){
      return `<li class = "billQuery" data-id="${store.summaries[0].id}">
      <a href="#">#</a>
      <p> #</p>
      </div>
      </li>
      `
    }
  }
