class BillShowController {
  constructor($detailTarget) {
    this.$detailTarget = $detailTarget
  }

  setCurrent(bill){
    BillView.renderDetails(this.$detailTarget, bill)
  }
}
