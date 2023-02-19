export const handleFormSubmit = data => {
  
  return dispatch => {
    dispatch({
      type: 'ON_FORM_SUBMIT',
      data
    })
    }
}
export const slidingFrameFormula = data => {
  
  return dispatch => {
    dispatch({
      type: 'ON_FORMULA_CHANGE',
      data
    })
    }
}
export const handleDeleteCalculation = (data) => {
    return dispatch => {
    dispatch({
      type: 'ON_DELETE_CALCULATION',
      data
    })
  }
}

// ** Handle User Logout
// export const handleLogout = () => {
//   return dispatch => {
//     dispatch({ type: 'LOGOUT', [config.storageTokenKeyName]: null, [config.storageRefreshTokenKeyName]: null })
//     // ** Remove user, accessToken & refreshToken from localStorage
//     localStorage.removeItem('userData')
//     localStorage.removeItem(config.storageTokenKeyName)
//     localStorage.removeItem(config.storageRefreshTokenKeyName)
//   }
// }
