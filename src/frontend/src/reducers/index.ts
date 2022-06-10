import { combineReducers } from 'redux'

import { loading, LoadingState } from './loading'
import { multisig, MultisigState } from './multisig'
import { shifumi, ShifumiState } from './shifumi'
import { popup, PopupState } from './popup'
import { progressBar, ProgressBarState } from './progressBar'
import { toaster, ToasterState } from './toaster'
import { wallet, WalletState } from './wallet'

export const reducers = combineReducers({
  loading,
  progressBar,
  toaster,
  popup,
  multisig,
  shifumi,
  wallet,
})

export interface State {
  loading: LoadingState
  progressBar: ProgressBarState
  toaster: ToasterState
  popup: PopupState
  multisig: MultisigState
  shifumi: ShifumiState
  wallet: WalletState
}
