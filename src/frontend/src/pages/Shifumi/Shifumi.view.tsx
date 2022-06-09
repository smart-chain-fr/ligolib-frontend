import { Button } from 'app/App.components/Button/Button.view'
import { Input } from 'app/App.components/Input/Input.view'
import { useState } from 'react'

// prettier-ignore
import { ShifumiStyled } from './Shifumi.style'

type ShifumiViewProps = {
  tempTxCallback: (amount: number) => void
  loading: boolean
}

export const ShifumiView = ({ tempTxCallback, loading }: ShifumiViewProps) => {
  const [inputAmount, setInputAmount] = useState(0)

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
    </ShifumiStyled>
  )
}
