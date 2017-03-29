//Where will you render? What will you render
class BillListController {
  constructor ($target, bills, detailController) {
    this.$target = $target
    this.bills = bills
    this.detailController = detailController
    this.render()
  }

  render() {
    BillListView.renderBillListItems(this.$target, this.bills)
  }

}
