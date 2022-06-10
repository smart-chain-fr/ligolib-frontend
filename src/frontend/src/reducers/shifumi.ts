import { GET_SHIFUMI_STORAGE, TEMP_TX_REQUEST, TEMP_TX_RESULT, TEMP_TX_ERROR } from 'pages/Shifumi/Shifumi.actions'

export interface ShifumiState {
  tempInput: number
  shifumiStorage: any
  error?: any
}

const shifumiDefaultState: ShifumiState = {
  tempInput: 0,
  shifumiStorage: {},
  error: undefined,
}

export function shifumi(state = shifumiDefaultState, action: any): ShifumiState {
  switch (action.type) {
    case GET_SHIFUMI_STORAGE:
      return {
        ...state,
        shifumiStorage: action.shifumiStorage,
      }
    case TEMP_TX_REQUEST:
      return {
        ...state,
        tempInput: action.tempInput,
        error: undefined,
      }
    case TEMP_TX_RESULT:
      return {
        ...state,
        tempInput: 0,
        error: undefined,
      }
    case TEMP_TX_ERROR:
      return {
        ...state,
        tempInput: 0,
        error: action.error,
      }

    default:
      return state
  }
}
