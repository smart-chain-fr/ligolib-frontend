import * as React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { State } from 'reducers'
import { tempTx, createSession } from './Shifumi.actions'
import { ShifumiView } from './Shifumi.view'

export const Shifumi = () => {
  const dispatch = useDispatch()
  const loading = useSelector((state: State) => state.loading)
  // const { wallet, ready, tezos, accountPkh } = useSelector((state: State) => state.wallet)
  //dispatch(getShifumiStorage())

  const tempTxCallback = (amount: number) => {
    dispatch(tempTx(amount))
  }

  const createSessionCallback = (sessionId: number, sessionPlayers: string, sessionNumberOfRounds: number) => {
    var players: Array<string> = []
    const addresses = sessionPlayers.split(",")
    addresses.forEach(elt => { players.push(elt) })
    console.log("createSession", players, sessionNumberOfRounds)
    dispatch(createSession(players, sessionNumberOfRounds))

  }

  return <ShifumiView tempTxCallback={tempTxCallback} createSessionCallback={createSessionCallback} loading={loading} />
}
