
$(() => {
  $('#queryForm').on('submit', function(event){
    event.preventDefault()
    let query = $(this).find('input#query').val()
    let state = $(this).find('input#state').val()
    Bill.all(query, state)

    .then(function({searchresult}) {
      delete searchresult.summary
      return Object.values(searchresult)
    }).then((results) => {
      let $target = $('ul.billQuery')
      let listController = new BillListController($target, results)

  })
})
})

const stateArray = new Array("AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "FL", "GA", "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY")


