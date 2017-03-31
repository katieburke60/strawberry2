//title, description, sponsors (role, name, district, party), subjects, committee name)
class BillView {
  static renderDetails($detailTarget, bill) {
    $detailTarget.html(this.detailTemplate(bill))
  }

  static detailTemplate(bill) {
    return `
    <h2>${bill.bill.title}<h2>
    <h5><em>${bill.bill.description}<em><h5>
    `
  }

}
