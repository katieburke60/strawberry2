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
    console.log(searchresult)
  })
}
