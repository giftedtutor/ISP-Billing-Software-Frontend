// **  Initial State

const initialState = {
  upvcCalculationsData: {
    clientId: "",
    qutationDate:"",
    salesRep:"",
    qty: "",
    width: "",
    height: "",
    totalMm: "",
    totalSft: "",
    installation: "",
    windowType: "",
    profileTypee: "",
    doorBase: "",
    inwardOutward: "",
    panelLeaf: "",
    slidingPanel: "",
    openableLeafCut: "",
    topHungCut: "",
    beading: "",
    multiLockingSystem: "",
    profileType: ""
  },
  upvcAllCalculations:[]
} 
const upvcCalculationsReducer = (state = initialState, action) => {
    switch (action.type) {
    case 'ON_FORM_SUBMIT':
      let upvcAllCal = [] 
      upvcAllCal = state.upvcAllCalculations
      upvcAllCal.push(action.data)
      return {
        ...state,
        upvcCalculationsData: action.data,
        upvcAllCalculations: upvcAllCal
      }

    case 'ON_DELETE_CALCULATION':
     let cal = []
      cal = state.upvcAllCalculations
      cal = cal.slice(0, action.data).concat(cal.slice(-action.data))
     
return { ...state, upvcAllCalculations: cal }
    default:
      return state
  }
}
export default upvcCalculationsReducer