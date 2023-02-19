const initialState = {
  upvcAllKeys: [
    'jaliWheel',
    'windBreakingBlock',
    'netFeet',
    'fixMulion',
    'steelJali',
    'steelFrameSash',
    'rubber667',
    'slidingSash',
    'screenSash',
    'interLock',
    'sgBeading',
    'dgBeading',
    'slidingFrame',
    'aluminiumTrack',
    'fixSgBead',
    'fixDgBead',
    'fixFrame',
    'transmission400',
    'transmission600',
    'transmission800',
    'transmission1200',
    'transmission1600',
    'transmission1800',
    'transmission2000',
    'doorSteel',
    'beading667',
    'dummyWheel',
    'buffer',
    'brush88',
    'jaliRubber',
    'stopperStrikeSash',
    'smallShaftMoon',
    'longShaftMoon',
    'VcutPulley',
    'slidingHandle',
    'screw416',
    'screw420',
    'screw425',
    'screw430',
    'siliconeWhite',
    'screw210',
    'rawalPluge',
    'openableFrame',
    'sashOutward',
    'mulion',
    'openableScreen',
    'outwardSashDoor',
    'inwardSashDoor',
    'doubleDoorMulion',
    'doublePanel',
    'sashInward',
    'jaliHinge',
    'windowHinge',
    'openableHandle',
    'jaliLockOpenable',
    'FrictionHinge',
    'stay',
    'openableHardware',
    'anchorCap',
    'drainageCap',
    'cornerForAluminiumSpacer',
    'desicentForDoubleGlass',
    'spacerForDoubleGlass',
    'blackSilicone',
    'glassCleaner',
    'doorCornerHingeMiddle',
    'doorCornerHingeDown',
    'doorCornerHingeTop',
    'doorLock',
    'doorBolt',
    'burshiDoor'
  ],
  jaliWheel: {
    jaliWheel: 0
  },
  wind: {
    windBreakingBlock: 0
  },
  net: {
    netFeet: 0
  },
  fixMulion: {
    fixMulion: 0
  },
  steelJali: {
    steelJali: 0
  },
  steelFrame: {
    steelFrameSash: 0
  },
  rubber667: {
    rubber667: 0
  },
  slidingSection: {
    slidingSash: 0,
    screenSash: 0,
    interLock: 0,
    sgBeading: 0,
    dgBeading: 0,
    slidingFrame: 0
  },
  aluminiumTrack: {
    aluminiumTrack: 0
  },
  fixSection: {
    fixSgBead: 0,
    fixDgBead: 0,
    fixFrame: 0
  },
  transmission: {
    transmission400: 0,
    transmission600: 0,
    transmission800: 0,
    transmission1200: 0,
    transmission1600: 0,
    transmission1800: 0,
    transmission2000: 0
  },
  steel: {
    doorSteel: 0
  },
  slidingHardware: {
    beading667: 0,
    dummyWheel: 0,
    buffer: 0,
    brush88: 0,
    jaliRubber: 0,
    stopperStrikeSash: 0,
    // windBreakingBlock: 0,
    smallShaftMoon: 0,
    longShaftMoon: 0,
    VcutPulley: 0,
    slidingHandle: 0
  },
  screw: {
    screw416: 0,
    screw420: 0,
    screw425: 0,
    screw430: 0,
    siliconeWhite: 0,
    screw210: 0,
    rawalPluge: 0
  },
  openableFrame: {
    openableFrame: 0 //21.04
  },
  sashOutward: {
    sashOutward: 0
  },
  mulion: {
    mulion: 0
  },
  openableScreen: {
    openableScreen: 0
  },
  outwardSashDoor: {
    outwardSashDoor: 0
  },
  inwardSashDoor: {
    inwardSashDoor: 0
  },
  doubleDoorMulion: {
    doubleDoorMulion: 0
  },
  doublePanel: {
    doublePanel: 0//29.22
  },
  sashDetail: {
    sashInward: 0
  },
  jaliHinge: {
    jaliHinge: 0
  },
  windowHinge: {
    windowHinge: 0
  },
  openableHandle: {
    openableHandle: 0
  },
  jaliLockOpenable: {
    jaliLockOpenable: 0
  },
  FrictionHinge: {
    FrictionHinge: 0
  },
  stay: {
    stay: 0
  },
  openableHardware: {
    dastyAluminium: 0
  },
  Misc: {
    anchorCap: 0,
    drainageCap: 0

  },
  cornerForAluminiumSpacer: {
    cornerForAluminiumSpacer: 0

  },
  desicentForDoubleGlass: {
    desicentForDoubleGlass: 0

  },
  spacerForDoubleGlass: {
    spacerForDoubleGlass: 0

  },
  blackSilicone: {
    blackSilicone: 0

  },
  doubleGlazing: {
    glassCleaner: 0
  },
  doorHardware1: {
    doorCornerHingeMiddle: 0
  },
  doorHardware2: {
    doorCornerHingeDown: 0
  },
  doorHardware3: {
    doorCornerHingeTop: 0
  },
  doorHardware4: {
    doorBolt: 0
  },
  doorHardware5: {
    burshiDoor: 0
  },
  doorHardware: {
    doorLock: 0
  },
  upvcAllFormulas: [],
  upvcAllCalculatedFormulas: {
    doorHardware: {},
    screw: {},
    slidingSection: {},
    slidingHardware: {}
    // doubleGlazing,
    // blackSilicone,
    // spacerForDoubleGlass,
    // desicentForDoubleGlass,
    // cornerForAluminiumSpacer,
    // Misc,
    // openableHardware,
    // stay,
    // FrictionHinge,
    // jaliLockOpenable,
    // openableHandle,
    // windowHinge,
    // jaliHinge,
    // sashDetail,
    // doublePanel,
    // doubleDoorMulion,
    // inwardSashDoor,
    // outwardSashDoor,
    // openableScreen,
    // mulion,
    // sashOutward,
    // openableFrame,
    // screw,
    // slidingHardware,
    // steel,
    // transmission,
    // fixSection,
    // aluminiumTrack,
    // slidingSection,
    // rubber667,
    // steelFrame,
    // steelJali,
    // fixMulion,
    // net,
    // wind,
    // upvcCalculatedData
  }
}
const upvcAllCal = []
const upvcCalculatedReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ON_FORMULA_CHANGE':
      //upvcAllCal = state.upvcAllFormulas

      if (action.formulaName === 'slidingSection') {
        // let upvcAllCal = []; upvcAllCal = state.upvcAllFormulas
        // upvcAllCal[action.rowIndex].push(action.data)
        if (upvcAllCal[action.rowIndex] !== undefined && upvcAllCal[action.rowIndex].length > 0) {
          upvcAllCal[action.rowIndex].push(action.data)
          
        } else {
          upvcAllCal[action.rowIndex] = []
          upvcAllCal[action.rowIndex].push(action.data)
        }
        // upvcAllCal.splice(action.rowIndex, 0, action.data)
        return {
          ...state,
          slidingSection: action.data,
          // upvcAllCalculatedFormulas: tests,
          upvcAllFormulas: upvcAllCal


        }
      } else if (action.formulaName === 'aluminiumTrack') {
        
        if (upvcAllCal[action.rowIndex] !== undefined && upvcAllCal[action.rowIndex].length > 0) {
          upvcAllCal[action.rowIndex].push(action.data)
        } else {
          upvcAllCal[action.rowIndex] = []
          upvcAllCal[action.rowIndex].push(action.data)
        }
        return {
          ...state,
          aluminiumTrack: action.data,
          upvcAllFormulas: upvcAllCal

        }
      } else if (action.formulaName === 'wind') {
        if (upvcAllCal[action.rowIndex] !== undefined && upvcAllCal[action.rowIndex].length > 0) {
          upvcAllCal[action.rowIndex].push(action.data)
        } else {
          upvcAllCal[action.rowIndex] = []
          upvcAllCal[action.rowIndex].push(action.data)
        }

        return {
          ...state,
          wind: action.data,
          upvcAllFormulas: upvcAllCal
        }
      } else if (action.formulaName === 'doublePanel') {
        if (upvcAllCal[action.rowIndex] !== undefined && upvcAllCal[action.rowIndex].length > 0) {
          upvcAllCal[action.rowIndex].push(action.data)
        } else {
          upvcAllCal[action.rowIndex] = []
          upvcAllCal[action.rowIndex].push(action.data)
        }

        return {
          ...state,
          doublePanel: action.data,
          upvcAllFormulas: upvcAllCal
        }
      } else if (action.formulaName === 'doubleDoorMulion') {
        if (upvcAllCal[action.rowIndex] !== undefined && upvcAllCal[action.rowIndex].length > 0) {
          upvcAllCal[action.rowIndex].push(action.data)
        } else {
          upvcAllCal[action.rowIndex] = []
          upvcAllCal[action.rowIndex].push(action.data)
        }

        return {
          ...state,
          doubleDoorMulion: action.data,
          upvcAllFormulas: upvcAllCal
        }
      } else if (action.formulaName === 'inwardSashDoor') {
        if (upvcAllCal[action.rowIndex] !== undefined && upvcAllCal[action.rowIndex].length > 0) {
          upvcAllCal[action.rowIndex].push(action.data)
        } else {
          upvcAllCal[action.rowIndex] = []
          upvcAllCal[action.rowIndex].push(action.data)
        }

        return {
          ...state,
          inwardSashDoor: action.data,
          upvcAllFormulas: upvcAllCal
        }
      } else if (action.formulaName === 'outwardSashDoor') {
        if (upvcAllCal[action.rowIndex] !== undefined && upvcAllCal[action.rowIndex].length > 0) {
          upvcAllCal[action.rowIndex].push(action.data)
        } else {
          upvcAllCal[action.rowIndex] = []
          upvcAllCal[action.rowIndex].push(action.data)
        }

        return {
          ...state,
          outwardSashDoor: action.data,
          upvcAllFormulas: upvcAllCal
        }
      } else if (action.formulaName === 'openableScreens') {
        if (upvcAllCal[action.rowIndex] !== undefined && upvcAllCal[action.rowIndex].length > 0) {
          upvcAllCal[action.rowIndex].push(action.data)
        } else {
          upvcAllCal[action.rowIndex] = []
          upvcAllCal[action.rowIndex].push(action.data)
        }

        return {
          ...state,
          openableScreen: action.data,
          upvcAllFormulas: upvcAllCal
        }
      } else if (action.formulaName === 'mulion') {
        if (upvcAllCal[action.rowIndex] !== undefined && upvcAllCal[action.rowIndex].length > 0) {
          upvcAllCal[action.rowIndex].push(action.data)
        } else {
          upvcAllCal[action.rowIndex] = []
          upvcAllCal[action.rowIndex].push(action.data)
        }

        if (upvcAllCal[action.rowIndex] !== undefined && upvcAllCal[action.rowIndex].length > 0) {
          upvcAllCal[action.rowIndex].push(action.data)
        } else {
          upvcAllCal[action.rowIndex] = []
          upvcAllCal[action.rowIndex].push(action.data)
        }
        return {
          ...state,
          mulion: action.data,
          upvcAllFormulas: upvcAllCal
        }
      } else if (action.formulaName === 'sashOutward') {
        if (upvcAllCal[action.rowIndex] !== undefined && upvcAllCal[action.rowIndex].length > 0) {
          upvcAllCal[action.rowIndex].push(action.data)
        } else {
          upvcAllCal[action.rowIndex] = []
          upvcAllCal[action.rowIndex].push(action.data)
        }

        return {
          ...state,
          sashOutward: action.data,
          upvcAllFormulas: upvcAllCal
        }
      } else if (action.formulaName === 'openableFrame') {
        if (upvcAllCal[action.rowIndex] !== undefined && upvcAllCal[action.rowIndex].length > 0) {
          upvcAllCal[action.rowIndex].push(action.data)
        } else {
          upvcAllCal[action.rowIndex] = []
          upvcAllCal[action.rowIndex].push(action.data)
        }

        return {
          ...state,
          openableFrame: action.data,
          upvcAllFormulas: upvcAllCal
        }
      } else if (action.formulaName === 'stay') {
        if (upvcAllCal[action.rowIndex] !== undefined && upvcAllCal[action.rowIndex].length > 0) {
          upvcAllCal[action.rowIndex].push(action.data)
        } else {
          upvcAllCal[action.rowIndex] = []
          upvcAllCal[action.rowIndex].push(action.data)
        }

        return {
          ...state,
          stay: action.data,
          upvcAllFormulas: upvcAllCal
        }
      } else if (action.formulaName === 'FrictionHinge') {
        if (upvcAllCal[action.rowIndex] !== undefined && upvcAllCal[action.rowIndex].length > 0) {
          upvcAllCal[action.rowIndex].push(action.data)
        } else {
          upvcAllCal[action.rowIndex] = []
          upvcAllCal[action.rowIndex].push(action.data)
        }

        return {
          ...state,
          FrictionHinge: action.data,
          upvcAllFormulas: upvcAllCal
        }
      } else if (action.formulaName === 'jaliLockOpenable') {
        if (upvcAllCal[action.rowIndex] !== undefined && upvcAllCal[action.rowIndex].length > 0) {
          upvcAllCal[action.rowIndex].push(action.data)
        } else {
          upvcAllCal[action.rowIndex] = []
          upvcAllCal[action.rowIndex].push(action.data)
        }

        return {
          ...state,
          jaliLockOpenable: action.data,
          upvcAllFormulas: upvcAllCal
        }
      } else if (action.formulaName === 'openableHandle') {
        if (upvcAllCal[action.rowIndex] !== undefined && upvcAllCal[action.rowIndex].length > 0) {
          upvcAllCal[action.rowIndex].push(action.data)
        } else {
          upvcAllCal[action.rowIndex] = []
          upvcAllCal[action.rowIndex].push(action.data)
        }

        return {
          ...state,
          openableHandle: action.data,
          upvcAllFormulas: upvcAllCal
        }
      } else if (action.formulaName === 'windowHinge') {
        if (upvcAllCal[action.rowIndex] !== undefined && upvcAllCal[action.rowIndex].length > 0) {
          upvcAllCal[action.rowIndex].push(action.data)
        } else {
          upvcAllCal[action.rowIndex] = []
          upvcAllCal[action.rowIndex].push(action.data)
        }

        return {
          ...state,
          windowHinge: action.data,
          upvcAllFormulas: upvcAllCal
        }
      } else if (action.formulaName === 'jaliHinge') {
        if (upvcAllCal[action.rowIndex] !== undefined && upvcAllCal[action.rowIndex].length > 0) {
          upvcAllCal[action.rowIndex].push(action.data)
        } else {
          upvcAllCal[action.rowIndex] = []
          upvcAllCal[action.rowIndex].push(action.data)
        }
        return {
          ...state,
          jaliWheel: action.data,
          upvcAllFormulas: upvcAllCal
        }
      } else if (action.formulaName === 'jaliWheel') {
        if (upvcAllCal[action.rowIndex] !== undefined && upvcAllCal[action.rowIndex].length > 0) {
          upvcAllCal[action.rowIndex].push(action.data)
        } else {
          upvcAllCal[action.rowIndex] = []
          upvcAllCal[action.rowIndex].push(action.data)
        }
        return {
          ...state,
          jaliWheel: action.data,
          upvcAllFormulas: upvcAllCal
        }
      } else if (action.formulaName === 'blackSilicone') {
        if (upvcAllCal[action.rowIndex] !== undefined && upvcAllCal[action.rowIndex].length > 0) {
          upvcAllCal[action.rowIndex].push(action.data)
        } else {
          upvcAllCal[action.rowIndex] = []
          upvcAllCal[action.rowIndex].push(action.data)
        }

        return {
          ...state,
          blackSilicone: action.data,
          upvcAllFormulas: upvcAllCal
        }
      } else if (action.formulaName === 'spacerForDoubleGlass') {
        if (upvcAllCal[action.rowIndex] !== undefined && upvcAllCal[action.rowIndex].length > 0) {
          upvcAllCal[action.rowIndex].push(action.data)
        } else {
          upvcAllCal[action.rowIndex] = []
          upvcAllCal[action.rowIndex].push(action.data)
        }

        return {
          ...state,
          spacerForDoubleGlass: action.data,
          upvcAllFormulas: upvcAllCal
        }
      } else if (action.formulaName === 'desicentForDoubleGlass') {
        if (upvcAllCal[action.rowIndex] !== undefined && upvcAllCal[action.rowIndex].length > 0) {
          upvcAllCal[action.rowIndex].push(action.data)
        } else {
          upvcAllCal[action.rowIndex] = []
          upvcAllCal[action.rowIndex].push(action.data)
        }

        return {
          ...state,
          desicentForDoubleGlass: action.data,
          upvcAllFormulas: upvcAllCal
        }
      } else if (action.formulaName === 'cornerForAluminiumSpacer') {
        if (upvcAllCal[action.rowIndex] !== undefined && upvcAllCal[action.rowIndex].length > 0) {
          upvcAllCal[action.rowIndex].push(action.data)
        } else {
          upvcAllCal[action.rowIndex] = []
          upvcAllCal[action.rowIndex].push(action.data)
        }

        return {
          ...state,
          cornerForAluminiumSpacer: action.data,
          upvcAllFormulas: upvcAllCal
        }
      } else if (action.formulaName === 'rubber667') {
        if (upvcAllCal[action.rowIndex] !== undefined && upvcAllCal[action.rowIndex].length > 0) {
          upvcAllCal[action.rowIndex].push(action.data)
        } else {
          upvcAllCal[action.rowIndex] = []
          upvcAllCal[action.rowIndex].push(action.data)
        }

        return {
          ...state,
          rubber667: action.data,
          upvcAllFormulas: upvcAllCal
        }
      } else if (action.formulaName === 'fixMulion') {
        if (upvcAllCal[action.rowIndex] !== undefined && upvcAllCal[action.rowIndex].length > 0) {
          upvcAllCal[action.rowIndex].push(action.data)
        } else {
          upvcAllCal[action.rowIndex] = []
          upvcAllCal[action.rowIndex].push(action.data)
        }

        return {
          ...state,
          fixMulion: action.data,
          upvcAllFormulas: upvcAllCal
        }
      } else if (action.formulaName === 'steelJali') {
        if (upvcAllCal[action.rowIndex] !== undefined && upvcAllCal[action.rowIndex].length > 0) {
          upvcAllCal[action.rowIndex].push(action.data)
        } else {
          upvcAllCal[action.rowIndex] = []
          upvcAllCal[action.rowIndex].push(action.data)
        }

        return {
          ...state,
          steelJali: action.data,
          upvcAllFormulas: upvcAllCal
        }
      } else if (action.formulaName === 'steelFrame') {
        if (upvcAllCal[action.rowIndex] !== undefined && upvcAllCal[action.rowIndex].length > 0) {
          upvcAllCal[action.rowIndex].push(action.data)
        } else {
          upvcAllCal[action.rowIndex] = []
          upvcAllCal[action.rowIndex].push(action.data)
        }

        return {
          ...state,
          steelFrame: action.data,
          upvcAllFormulas: upvcAllCal
        }
      } else if (action.formulaName === 'net') {
        if (upvcAllCal[action.rowIndex] !== undefined && upvcAllCal[action.rowIndex].length > 0) {
          upvcAllCal[action.rowIndex].push(action.data)
        } else {
          upvcAllCal[action.rowIndex] = []
          upvcAllCal[action.rowIndex].push(action.data)
        }

        return {
          ...state,
          net: action.data,
          upvcAllFormulas: upvcAllCal
        }
      } else if (action.formulaName === 'fixSection') {
        if (upvcAllCal[action.rowIndex] !== undefined && upvcAllCal[action.rowIndex].length > 0) {
          upvcAllCal[action.rowIndex].push(action.data)
        } else {
          upvcAllCal[action.rowIndex] = []
          upvcAllCal[action.rowIndex].push(action.data)
        }


        return {
          ...state,
          fixSection: action.data,
          upvcAllFormulas: upvcAllCal
        }
      } else if (action.formulaName === 'transmission') {
        if (upvcAllCal[action.rowIndex] !== undefined && upvcAllCal[action.rowIndex].length > 0) {
          upvcAllCal[action.rowIndex].push(action.data)
        } else {
          upvcAllCal[action.rowIndex] = []
          upvcAllCal[action.rowIndex].push(action.data)
        }

        return {
          ...state,
          transmission: action.data,
          upvcAllFormulas: upvcAllCal
        }
      } else if (action.formulaName === 'steel') {
        if (upvcAllCal[action.rowIndex] !== undefined && upvcAllCal[action.rowIndex].length > 0) {
          upvcAllCal[action.rowIndex].push(action.data)
        } else {
          upvcAllCal[action.rowIndex] = []
          upvcAllCal[action.rowIndex].push(action.data)
        }


        return {
          ...state,
          steel: action.data,
          upvcAllFormulas: upvcAllCal,
          upvcAllFormulas: upvcAllCal

        }
      } else if (action.formulaName === 'slidingHardware') {
        const slidingHardware = state.slidingHardware
        Object.assign(slidingHardware, action.data)
        // tests = state.upvcAllCalculatedFormulas
        // tests.slidingHardware = action.data
        // upvcAllCal.push(tests)
        // console.log('sliding hardware ar', upvcAllCal)
        // upvcAllCal.push(action.data)
        if (upvcAllCal[action.rowIndex] !== undefined && upvcAllCal[action.rowIndex].length > 0) {
          upvcAllCal[action.rowIndex].push(action.data)
        } else {
          upvcAllCal[action.rowIndex] = []
          upvcAllCal[action.rowIndex].push(action.data)
        }

        return {
          ...state,
          slidingHardware,
          upvcAllFormulas: upvcAllCal
          // upvcAllCalculatedFormulas: tests

        }
      } else if (action.formulaName === 'screw') {
        if (upvcAllCal[action.rowIndex] !== undefined && upvcAllCal[action.rowIndex].length > 0) {
          upvcAllCal[action.rowIndex].push(action.data)
        } else {
          upvcAllCal[action.rowIndex] = []
          upvcAllCal[action.rowIndex].push(action.data)
        }


        return {
          ...state,
          screw: action.data,
          upvcAllFormulas: upvcAllCal
          // upvcAllCalculatedFormulas: tests

        }
      } else if (action.formulaName === 'sashDetail') {
        if (upvcAllCal[action.rowIndex] !== undefined && upvcAllCal[action.rowIndex].length > 0) {
          upvcAllCal[action.rowIndex].push(action.data)
        } else {
          upvcAllCal[action.rowIndex] = []
          upvcAllCal[action.rowIndex].push(action.data)
        }

        return {
          ...state,
          sashDetail: action.data,
          upvcAllFormulas: upvcAllCal
        }
      } else if (action.formulaName === 'openableHardware') {
        if (upvcAllCal[action.rowIndex] !== undefined && upvcAllCal[action.rowIndex].length > 0) {
          upvcAllCal[action.rowIndex].push(action.data)
        } else {
          upvcAllCal[action.rowIndex] = []
          upvcAllCal[action.rowIndex].push(action.data)
        }

        return {
          ...state,
          openableHardware: action.data,
          upvcAllFormulas: upvcAllCal
        }
      } else if (action.formulaName === 'Misc') {
        if (upvcAllCal[action.rowIndex] !== undefined && upvcAllCal[action.rowIndex].length > 0) {
          upvcAllCal[action.rowIndex].push(action.data)
        } else {
          upvcAllCal[action.rowIndex] = []
          upvcAllCal[action.rowIndex].push(action.data)
        }

        return {
          ...state,
          Misc: action.data,
          upvcAllFormulas: upvcAllCal
        }
      } else if (action.formulaName === 'doubleGlazing') {
        if (upvcAllCal[action.rowIndex] !== undefined && upvcAllCal[action.rowIndex].length > 0) {
          upvcAllCal[action.rowIndex].push(action.data)
        } else {
          upvcAllCal[action.rowIndex] = []
          upvcAllCal[action.rowIndex].push(action.data)
        }

        return {
          ...state,
          doubleGlazing: action.data,
          upvcAllFormulas: upvcAllCal
        }
      } else if (action.formulaName === 'doorHardware') {
        if (upvcAllCal[action.rowIndex] !== undefined && upvcAllCal[action.rowIndex].length > 0) {
          upvcAllCal[action.rowIndex].push(action.data)
        } else {
          upvcAllCal[action.rowIndex] = []
          upvcAllCal[action.rowIndex].push(action.data)
        } 
        return {
          ...state,
          doorHardware: action.data,
          upvcAllFormulas: upvcAllCal
        }

      } else if (action.formulaName === 'doorHardware1') {
        if (upvcAllCal[action.rowIndex] !== undefined && upvcAllCal[action.rowIndex].length > 0) {
          upvcAllCal[action.rowIndex].push(action.data)
        } else {
          upvcAllCal[action.rowIndex] = []
          upvcAllCal[action.rowIndex].push(action.data)
        } 
        return {
          ...state,
          doorHardware1: action.data,
          upvcAllFormulas: upvcAllCal
        }

      } else if (action.formulaName === 'doorHardware2') {
        if (upvcAllCal[action.rowIndex] !== undefined && upvcAllCal[action.rowIndex].length > 0) {
          upvcAllCal[action.rowIndex].push(action.data)
        } else {
          upvcAllCal[action.rowIndex] = []
          upvcAllCal[action.rowIndex].push(action.data)
        } 
        return {
          ...state,
          doorHardware2: action.data,
          upvcAllFormulas: upvcAllCal
        }

      } else if (action.formulaName === 'doorHardware3') {
        if (upvcAllCal[action.rowIndex] !== undefined && upvcAllCal[action.rowIndex].length > 0) {
          upvcAllCal[action.rowIndex].push(action.data)
        } else {
          upvcAllCal[action.rowIndex] = []
          upvcAllCal[action.rowIndex].push(action.data)
        } 
        return {
          ...state,
          doorHardware3: action.data,
          upvcAllFormulas: upvcAllCal
        }

      } else if (action.formulaName === 'doorHardware4') {
        if (upvcAllCal[action.rowIndex] !== undefined && upvcAllCal[action.rowIndex].length > 0) {
          upvcAllCal[action.rowIndex].push(action.data)
        } else {
          upvcAllCal[action.rowIndex] = []
          upvcAllCal[action.rowIndex].push(action.data)
        } 
        return {
          ...state,
          doorHardware4: action.data,
          upvcAllFormulas: upvcAllCal
        }

      } else if (action.formulaName === 'doorHardware5') {
        if (upvcAllCal[action.rowIndex] !== undefined && upvcAllCal[action.rowIndex].length > 0) {
          upvcAllCal[action.rowIndex].push(action.data)
        } else {
          upvcAllCal[action.rowIndex] = []
          upvcAllCal[action.rowIndex].push(action.data)
        } 
        return {
          ...state,
          doorHardware5: action.data,
          upvcAllFormulas: upvcAllCal
        }

      } else if (action.formulaName === 'steelFrame') {
        if (upvcAllCal[action.rowIndex] !== undefined && upvcAllCal[action.rowIndex].length > 0) {
          upvcAllCal[action.rowIndex].push(action.data)
        } else {
          upvcAllCal[action.rowIndex] = []
          upvcAllCal[action.rowIndex].push(action.data)
        } 


        return {
          ...state,
          doorHardware: action.data,
          upvcAllFormulas: upvcAllCal
        }
      }
      return {
        ...state,
        upvcCalculatedData: action.data,
        upvcAllFormulas: upvcAllCal
      }
    default:
      return state

  }
}
export default upvcCalculatedReducer