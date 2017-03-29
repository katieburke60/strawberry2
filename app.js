var bill_result1 = {}

$(() => {
  $('#queryForm').on('submit', function(event){
    event.preventDefault()
    let query = $(this).find('input#query').val()
    let state = $(this).find('input#state').val()
    Bill.all(query, state)
<<<<<<< HEAD
    .then(function({searchresult}) {
      delete searchresult.summary
      return Object.values(searchresult)
    }).then((results) => {
      let $target = $('ul.billQuery')
      let listController = new BillListController($target, results)

=======
    .then(function(billList) {
      let result = billList.searchresult
       for(var element in result) {
        var title = result[element].title
        var bill_id = result[element].bill_id
        var number = result[element].bill_number
        var research_url = result[element].research_url
        var last_action = result[element].last_action
        }
        let $target = $('ul.billQuery')
        let billListController = new BillListController($target, result)
>>>>>>> 9087b182830341394eddb98310316712256d28b3
    // $(this).find('input#firstQuery').val('')
    // $(this).find('input#state').val('')
  })
})
})
