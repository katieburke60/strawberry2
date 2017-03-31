$(() => {
  loadStates()
  $('#queryForm').on('submit', function(event){
    event.preventDefault()
    debugger
    store.summaries.length=0
    $('ul.billQuery').empty()
    $('ul.billDetails').empty()
    let query = $(this).find('#query').val()
    let state = $(this).find('#state').val()
    Bill.all(query, state)
    .then(function({searchresult}) {
      delete searchresult.summary
      let summaryResults = Object.values(searchresult)
      return summaryResults
      // new BillSummary (klh, fdfhk, )  --> put into a store (constructor)
    }).then((summaryResults) => {
      let $target = $('ul.billQuery')
      let $detailTarget = $('ul.billDetails')
      let detailController = new BillShowController($detailTarget)
      let listController = new BillListController($target, summaryResults, detailController)
  })
})
})
