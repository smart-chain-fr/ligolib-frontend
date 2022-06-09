import { Link } from 'react-router-dom'
import { HomeCard, HomeCardBottom, HomeCardComing, HomeCardMiddle, HomeCardTop, HomeGrid, HomeStyled } from './Home.style'

export const HomeView = () => {
  return (
    <HomeStyled>
      <h1>Prod-ready smart contracts for Tezos</h1>
      <HomeGrid>
        <HomeCard>
          <HomeCardTop>
            <svg>
              <use xlinkHref="/icons/sprites.svg#sign" />
            </svg>
            <h2>Multisig</h2>
          </HomeCardTop>
          <HomeCardMiddle>The Multisig contract requires multiple people's signature for a transaction to be executed.</HomeCardMiddle>
          <HomeCardBottom>
            <a href="https://github.com/smart-chain-fr/Ligolib/tree/main/multisig" target="_blank" rel="noreferrer">
              Source
            </a>
            <Link to="/multisig">Demo</Link>
          </HomeCardBottom>
        </HomeCard>

        <HomeCard>
          <HomeCardTop>
            <svg>
              <use xlinkHref="/icons/sprites.svg#help" />
            </svg>
            <h2>Advisor</h2>
          </HomeCardTop>
          <HomeCardComing>Coming soon</HomeCardComing>
        </HomeCard>

        <HomeCard>
          <HomeCardTop>
            <svg>
              <use xlinkHref="/icons/sprites.svg#money" />
            </svg>
            <h2>Escrow</h2>
          </HomeCardTop>
          <HomeCardComing>Coming soon</HomeCardComing>
        </HomeCard>

        <HomeCard>
          <HomeCardTop>
            <svg>
              <use xlinkHref="/icons/sprites.svg#scissors" />
            </svg>
            <h2>Shifumi</h2>
          </HomeCardTop>
          <HomeCardMiddle>The Shifumi contract allows people to play SHIFUMI (stone paper , scisors).</HomeCardMiddle>
          <HomeCardBottom>
            <a href="https://github.com/smart-chain-fr/ligolib/tree/main/shifumi" target="_blank" rel="noreferrer">
              Source
            </a>
            <Link to="/shifumi">Play</Link>
          </HomeCardBottom>
        </HomeCard>
      </HomeGrid>
    </HomeStyled>
  )
}
