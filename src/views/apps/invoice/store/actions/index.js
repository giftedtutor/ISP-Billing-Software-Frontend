import axios from 'axios'

// ** Get data
export const getData = params => {
  return dispatch => {
    axios.get('/ISPBS/apps/invoice/invoices', params).then(response => {
      dispatch({
        type: 'GET_DATA',
        allData: response.data.allData,
        data: response.data.invoices,
        totalPages: response.data.total,
        params
      })
    })
  }
}

// ** Delete Invoice
export const deleteInvoice = id => {
  return (dispatch, getStore) => {
    axios
      .delete('/ISPBS/apps/invoice/delete', { id })
      .then(response => {
        dispatch({
          type: 'DELETE_INVOICE'
        })
      })
      .then(() => dispatch(getData(getStore().invoice.params)))
  }
}
