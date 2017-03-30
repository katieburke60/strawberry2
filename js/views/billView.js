//title, description, sponsors (role, name, district, party), subjects, committee name)
class BillView {
  static renderDetails($detailTarget, bill) {
    $detailTarget.html(this.detailTemplate(bill))
  }

  static detailTemplate(bill) {
    return `
    <h1>${bill.title}<h1>
    <ul>
    <li>
    </li>
    </ul>
    `
  }

}
