$(() => {
  $('#queryForm').on('submit', function(event){
    event.preventDefault()
    let query = $(this).find('input#firstQuery').val()
    let state = $(this).find('input#state').val()
    searchApi(query, state)
    // $(this).find('input#firstQuery').val('')
    // $(this).find('input#state').val('')
    //want to have ready for the next search query?
  })
})

const searchApi = (query, state) => {
  $.get(`https://api.legiscan.com/?key=1da8e9a29801464091ed4d9ba6e595f4&op=search&state=${state}&query=${query}`)
  .then(function({searchresult}) {
    debugger
    searchresult.forEach(function(element){

        console.log(element.title)
    })
    // {
    //   var title = searchresult[i].title
    //   var bill_id = searchresult[i].bill_id
    //   var number = searchresult[i].bill_number
    //   var research_url = searchresult[i].research_url
    //   var last_action = searchresult[i].last_action }
      // $('billBasicInfo').empty()
      // $('billBasicInfo').append(`<li>${title} ${number}</li>`)
      //is this going to work since it's a hash not an array?
      //need to incorporate Bill instances (versus just taking data directly)
    //need to add functionality to check if the bill already exists in memory

  })
}

// const detailedSearchApi = (billId) => {
//   $.get(`https://api.legiscan.com/?key=1da8e9a29801464091ed4d9ba6e595f4&op=getBill&${billId}`)
//   .then(function({searchresult}) {
//     console.log(searchresult)
//   }
// }

// $('.container ul').empty() || $('.container ul').innerHtml = ''
