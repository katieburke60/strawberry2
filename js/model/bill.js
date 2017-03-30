class Bill {
  static all(query, state){
    return Api.getQuery(query, state)
  }
  static find(id) {
    return Api.getBill(id)
  }
}
