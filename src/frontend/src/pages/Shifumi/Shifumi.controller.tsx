import * as React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { State } from 'reducers'
import { tempTx } from './Shifumi.actions'
import { ShifumiView } from './Shifumi.view'

export const Shifumi = () => {
  const dispatch = useDispatch()
  const loading = useSelector((state: State) => state.loading)
  // const { wallet, ready, tezos, accountPkh } = useSelector((state: State) => state.wallet)
  //dispatch(getShifumiStorage())

  const tempTxCallback = (amount: number) => {
    dispatch(tempTx(amount))
  }

  return <ShifumiView tempTxCallback={tempTxCallback} loading={loading} />
}
