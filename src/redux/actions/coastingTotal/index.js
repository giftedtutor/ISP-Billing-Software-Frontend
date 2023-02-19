export const ON_COASTING_TOTAL_CHANGE = (data) => {
    // console.log(data)
    return (dispatch) => {
        dispatch({
            type: "ON_COASTING_TOTAL_CHANGE",
            data
        })
    }
}
