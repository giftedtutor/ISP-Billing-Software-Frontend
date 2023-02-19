export const ON_FORMULA_CHANGE = (data, formulaName = null, rowIndex) => {
  // console.log(data)
  return (dispatch) => {
    dispatch({
      type: "ON_FORMULA_CHANGE",
      data,
      formulaName,
      rowIndex
    })
  }
}
