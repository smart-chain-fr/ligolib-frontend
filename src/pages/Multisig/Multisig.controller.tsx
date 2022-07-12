import * as React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { State } from 'reducers'
import { tempTx } from './Multisig.actions'
import { MultisigView } from './Multisig.view'

export const Multisig = () => {
  const dispatch = useDispatch()
  const loading = useSelector((state: State) => state.loading)
  // const { wallet, ready, tezos, accountPkh } = useSelector((state: State) => state.wallet)

  const tempTxCallback = (amount: number) => {
    dispatch(tempTx(amount))
  }

  return <MultisigView tempTxCallback={tempTxCallback} loading={loading} />
}
