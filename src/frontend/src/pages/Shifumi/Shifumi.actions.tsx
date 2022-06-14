import { TezosToolkit } from '@taquito/taquito'
import { showToaster } from 'app/App.components/Toaster/Toaster.actions'
import { ERROR, INFO, SUCCESS } from 'app/App.components/Toaster/Toaster.constants'
import { State } from 'reducers'

export const GET_SHIFUMI_STORAGE = 'GET_SHIFUMI_STORAGE'
export const getShifumiStorage = (accountPkh?: string) => async (dispatch: any, getState: any) => {
  const state: State = getState()

  if (!accountPkh) {
    dispatch(showToaster(ERROR, 'Public address not found', 'Make sure your wallet is connected'))
    return
  }

  const contract = accountPkh
    ? await state.wallet.tezos?.wallet.at('KT1N3FyTF4XVTwz4przoLeMdtQCGpL5gzudB')
    : await new TezosToolkit((process.env.REACT_APP_RPC_PROVIDER as any) || 'https://ithacanet.smartpy.io').contract.at(
      'KT1N3FyTF4XVTwz4przoLeMdtQCGpL5gzudB',
    )

  const shifumiStorage = await (contract as any).storage()
  console.log(shifumiStorage)
  dispatch({
    type: GET_SHIFUMI_STORAGE,
    shifumiStorage,
  })
}

export const TEMP_TX_REQUEST = 'TEMP_TX_REQUEST'
export const TEMP_TX_RESULT = 'TEMP_TX_RESULT'
export const TEMP_TX_ERROR = 'TEMP_TX_ERROR'
export const tempTx = (amount: number) => async (dispatch: any, getState: any) => {
  const state: State = getState()

  if (!state.wallet.ready) {
    dispatch(showToaster(ERROR, 'Please connect your wallet', 'Click Connect in the left menu'))
    return
  }

  if (!(amount > 0)) {
    dispatch(showToaster(ERROR, 'Incorrect amount', 'Please enter an amount superior to zero'))
    return
  }

  if (state.loading) {
    dispatch(showToaster(ERROR, 'Cannot send transaction', 'Previous transaction still pending...'))
    return
  }

  try {
    const contract = await state.wallet.tezos?.wallet.at('KT1N3FyTF4XVTwz4przoLeMdtQCGpL5gzudB')
    console.log('contract', contract)
    const transaction = await contract?.methods.tempTx(amount * 1000000).send()
    console.log('transaction', transaction)

    dispatch({
      type: TEMP_TX_REQUEST,
      amount,
    })
    dispatch(showToaster(INFO, 'Processing...', 'Please wait 30s'))

    const done = await transaction?.confirmation()
    console.log('done', done)
    dispatch(showToaster(SUCCESS, 'Transation done', 'All good :)'))

    dispatch({
      type: TEMP_TX_RESULT,
    })

    dispatch(getShifumiStorage(state.wallet.accountPkh))
  } catch (error: any) {
    console.error(error)
    dispatch(showToaster(ERROR, 'Error', error.message))
    dispatch({
      type: TEMP_TX_ERROR,
      error,
    })
  }
}

export const CREATE_SESSION_REQUEST = 'CREATE_SESSION_REQUEST'
export const CREATE_SESSION_RESULT = 'CREATE_SESSION_RESULT'
export const CREATE_SESSION_ERROR = 'CREATE_SESSION_ERROR'
export const createSession = (sessionPlayers: Array<string>, sessionNumberOfRounds: number) => async (dispatch: any, getState: any) => {
  const state: State = getState()

  console.log('storage', state.shifumi.shifumiStorage)

  if (!state.wallet.ready) {
    dispatch(showToaster(ERROR, 'Please connect your wallet', 'Click Connect in the left menu'))
    return
  }

  if (!(sessionPlayers.length == 2)) {
    dispatch(showToaster(ERROR, 'Incorrect players', 'Please enter only two player addresses'))
    return
  }
  if (!(sessionNumberOfRounds > 0)) {
    dispatch(showToaster(ERROR, 'Incorrect rounds', 'Please enter a number of rounds greater than zero'))
    return
  }
  if (state.loading) {
    dispatch(showToaster(ERROR, 'Cannot send transaction', 'Previous transaction still pending...'))
    return
  }

  try {
    const contract = await state.wallet.tezos?.wallet.at('KT1N3FyTF4XVTwz4przoLeMdtQCGpL5gzudB')
    console.log('contract', contract)
    const transaction = await contract?.methods.createSession(sessionPlayers, sessionNumberOfRounds).send()
    console.log('transaction', transaction)

    dispatch({
      type: CREATE_SESSION_REQUEST,
      sessionNumberOfRounds,
      sessionPlayers,
    })
    dispatch(showToaster(INFO, 'Processing...', 'Please wait 30s'))

    const done = await transaction?.confirmation()
    console.log('done', done)
    dispatch(showToaster(SUCCESS, 'Transation done', 'All good :)'))

    dispatch({
      type: CREATE_SESSION_RESULT,
    })

    dispatch(getShifumiStorage(state.wallet.accountPkh))
  } catch (error: any) {
    console.error(error)
    dispatch(showToaster(ERROR, 'Error', error.message))
    dispatch({
      type: CREATE_SESSION_ERROR,
      error,
    })
  }

}