//title, description, sponsors (role, name, district, party), subjects, committee name)
class BillView {
  static renderDetails($detailTarget, bill) {
    $detailTarget.html(this.detailTemplate(bill))
  }

  static detailTemplate(bill) {
    // debugger
    return `
    <h3>${bill.bill_number}</h3>
    <p>${bill.description}</p>
    <p><b>Committee:</b> ${bill.committee.name} </p>
    <a href=${bill.url}> Link to ${bill.bill_number} Text</a>
    <br>
    <a href=${bill.state_link}> Link to Legiscan Research </a>
    <br>
    <ul class="sponsors">
    ${this.sponsors(bill)}
    </ul>
    `
  }

  static sponsors(bill){
    return bill.sponsors.map(sponsor=>{
      return `
      <br>
      <li>Sponsor Name: ${sponsor.name}
        <ul>
          <li>District: ${sponsor.district}</li>
          <li>Party: ${sponsor.party}</li>
        </ul>
      </li>
      `
    })
  }

}
