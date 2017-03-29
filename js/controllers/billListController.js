//Where will you render? What will you render

class BillDetailsController {
  constructor ($target, bills) {
    this.$target = $target
    this.bills = bills
    this.render()
  }

  render() {
    this.$target.append("<li>beef</li>")
  }
}
