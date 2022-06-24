import { GET_MULTISIG_STORAGE, TEMP_TX_REQUEST, TEMP_TX_RESULT, TEMP_TX_ERROR } from 'pages/Multisig/Multisig.actions'

export interface MultisigState {
  tempInput: number
  multisigStorage: any
  error?: any
}

const multisigDefaultState: MultisigState = {
  tempInput: 0,
  multisigStorage: {},
  error: undefined,
}

export function multisig(state = multisigDefaultState, action: any): MultisigState {
  switch (action.type) {
    case GET_MULTISIG_STORAGE:
      return {
        ...state,
        multisigStorage: action.multisigStorage,
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
