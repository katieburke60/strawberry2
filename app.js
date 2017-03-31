

$(() => {
  loadStates()
  $('#queryForm').on('submit', function(event){
    event.preventDefault()
    let query = $(this).find('#query').val()
    let state = $(this).find('#state').val()
    Bill.all(query, state)
    .then(function({searchresult}) {
      delete searchresult.summary
      return Object.values(searchresult)
    }).then((results) => {
      let $target = $('ul.billQuery')
      let $detailTarget = $('ul.billDetails')
      let detailController = new BillShowController($detailTarget)
      let listController = new BillListController($target, results, detailController)
      // bill.bill_id === e.currentTarget.dataset.id
      //currentTarget = li.billQuery
  })
})
})
