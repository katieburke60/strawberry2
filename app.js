var bill_result1 = {}

$(() => {
  $('#queryForm').on('submit', function(event){
    event.preventDefault()
    let query = $(this).find('input#query').val()
    let state = $(this).find('input#state').val()
    searchApi(query, state)
  })
})

const searchApi = (query, state) => {
  $.get(`https://api.legiscan.com/?key=1da8e9a29801464091ed4d9ba6e595f4&op=search&state=${state}&query=${query}`)
  .then(function({searchresult}) {
    bill_result1 = searchresult
  })
}

const stateArray = new Array("AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "FL", "GA", "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY")

bill_result1.map(() => {

})
