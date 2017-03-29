

$(() => {
  $('#queryForm').on('submit', function(event){
    event.preventDefault()
    let query = $(this).find('input#query').val()
    let state = $(this).find('input#state').val()
    Bill.all(query, state)
    .then(function({searchresult}) {
      debugger
      delete searchresult.summary
      return Object.values(searchresult)
    }).then((results) => {
      let $target = $('ul.billQuery')
      let listController = new BillListController($target, results)

    // $(this).find('input#firstQuery').val('')
    // $(this).find('input#state').val('')
    //want to have ready for the next search query?
  })
})
})
