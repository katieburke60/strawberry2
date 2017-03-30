class Api {
  static getQuery(query, state){
    return $.get(`https://api.legiscan.com/?key=1da8e9a29801464091ed4d9ba6e595f4&op=search&state=${state}&query=${query}`)
  }
  static getBill(id){
    return $.get(`https://api.legiscan.com/?key=1da8e9a29801464091ed4d9ba6e595f4&op=getBill&id=${id}`)
  }
}
