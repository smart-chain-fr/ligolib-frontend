import { Button } from 'app/App.components/Button/Button.view'
import { Input } from 'app/App.components/Input/Input.view'

import { useState } from 'react'

// prettier-ignore
import { ShifumiStyled } from './Shifumi.style'

type ShifumiViewProps = {
  tempTxCallback: (amount: number) => void
  createSessionCallback: (sessionId: number, sessionPlayers: string, sessionNumberOfRounds: number) => void
  loading: boolean
}

export const ShifumiView = ({ tempTxCallback, createSessionCallback, loading }: ShifumiViewProps) => {
  const [inputAmount, setInputAmount] = useState(0)
  const [sessionId, setSessionId] = useState(1)
  const [sessionPlayers, setSessionPlayers] = useState<string>("")
  const [sessionNumberOfRounds, setSessionNumberOfRounds] = useState(3)


  return (
    <ShifumiStyled>
      <h1>Under development!</h1>
      <Input
        icon="user"
        name="username"
        placeholder="Test input"
        type="text"
        onChange={(value: any) => setInputAmount(value)}
        value={inputAmount}
        onBlur={() => { }}
        inputStatus={undefined}
        errorMessage={undefined}
      />

      <Button icon="in" loading={loading} clickCallback={() => tempTxCallback(inputAmount)}>
        Submit
      </Button>

      <Input
        icon="user"
        name="sessionPlayers"
        placeholder="Session players"
        type="text"
        onChange={(value: any) => setSessionPlayers(value.target.value)}
        value={sessionPlayers}
        onBlur={() => { }}
        inputStatus={undefined}
        errorMessage={undefined}
      />
      <Input
        icon="user"
        name="sessionRounds"
        placeholder="Session number of rounds"
        type="text"
        onChange={(value: any) => setSessionNumberOfRounds(value)}
        value={sessionNumberOfRounds}
        onBlur={() => { }}
        inputStatus={undefined}
        errorMessage={undefined}
      />

      <Button icon="in" loading={loading} clickCallback={() => createSessionCallback(sessionId, sessionPlayers, sessionNumberOfRounds)}>
        CreateSession
      </Button>
    </ShifumiStyled>
  )
}
