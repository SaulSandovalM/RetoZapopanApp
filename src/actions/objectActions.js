export function loadPeopleSuccess(people) {
  return {type: "LOAD_PROJECTS_SUCCESS", projects};
}
//este es un thunk porque es asincrono
export function loadPeople() {
  return function(dispatch) {
    return fetch("http://pelusina.fixter.org/projects/").then(r => r.json()).then(data => {
      return dispatch(loadPeopleSuccess(data.results));
    }).catch(e => {
      throw(e)
    });
  }
}
