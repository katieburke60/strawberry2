$(() => {
  loadStates()

  // $('#datesort').on('click', function(event){
  //   debugger
  //   event.preventDefault()
  //
  //   $('ul.billQuery').empty()
  //   let $target = $('ul.billQuery')
  //   let sorted_bills = store.summaries.sort((a,b)=>{
  //     a.last_action_date - b.last_action_date
  //   })
  //   let listController = new BillListController($target, sortedBills)
  // })


  $('#queryForm').on('submit', function(event){
    event.preventDefault()
    store.summaries.length=0
    $('ul.billQuery').empty()
    $('ul.billDetails').empty()
    $('.sort-options').empty()
    let query = $(this).find('#query').val()
    let state = $(this).find('#state').val()
    Bill.all(query, state)
    .then(function({searchresult}) {
      delete searchresult.summary
      let summaryResults = Object.values(searchresult)
      return summaryResults
      // new BillSummary (klh, fdfhk, )  --> put into a store (constructor)
    }).then((summaryResults) => {
      if (summaryResults.length === 0){
        $('ul.billQuery').append("Sorry.  No Search Results")
      }else{
        let $target = $('ul.billQuery')
        let $detailTarget = $('ul.billDetails')
        let detailController = new BillShowController($detailTarget)
        let listController = new BillListController($target, summaryResults, detailController)
        // $('.sort-options').append(`<a href="#" id="datesort">Sort by Date</a>`)
      }
    })
  })
})
