$(() => {
  $('#queryForm').on('submit', function(event){
    event.preventDefault()
    let query = $(this).find('input#query').val()
    let state = $(this).find('input#state').val()
    Bill.all(query, state)
    .then(function(billList) {
      let result = billList.searchresult
       for(var element in result) {
        var title = result[element].title
        var bill_id = result[element].bill_id
        var number = result[element].bill_number
        var research_url = result[element].research_url
        var last_action = result[element].last_action
        }
    // $(this).find('input#firstQuery').val('')
    // $(this).find('input#state').val('')
    //want to have ready for the next search query?
  })
})
})

// const detailedSearchApi = (billId) => {
//   $.get(`https://api.legiscan.com/?key=1da8e9a29801464091ed4d9ba6e595f4&op=getBill&${billId}`)
//   .then(function({searchresult}) {
//     console.log(searchresult)
//   }
// }

// $('.container ul').empty() || $('.container ul').innerHtml = ''
