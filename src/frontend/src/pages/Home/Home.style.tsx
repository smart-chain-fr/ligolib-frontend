import styled from 'styled-components/macro'
import { backgroundColor, FullPage, gradColor } from 'styles'

export const HomeStyled = styled(FullPage)`
  margin-top: 120px;
  background-image: url('/images/bg.jpg');
  background-size: contain;
  background-repeat: no-repeat;

  @media (max-width: 700px) {
    background-size: cover;
    background-position: center center;
  }

  > h1 {
    padding-top: 100px;
    text-align: center;
    width: 80%;
    font-size: 90px;
    margin: 0 auto 150px auto;

    @media (max-width: 700px) {
      font-size: 42px;
    }
  }
`

export const HomeGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;

  @media (max-width: 700px) {
    grid-template-columns: auto;
    padding: 0 20px;
  }
`

export const HomeCard = styled.div`
  background: ${backgroundColor};
  border: 2px solid rgba(255, 255, 255, 0.05);
  box-sizing: border-box;
  box-shadow: -5px -5px 10px rgba(8, 21, 45, 0.6), 5px 5px 10px rgba(5, 12, 27, 0.6);
  border-radius: 8px;
  padding: 20px;
`

export const HomeCardTop = styled.div`
  display: grid;
  grid-template-columns: 24px auto;
  grid-gap: 20px;
  margin-bottom: 20px;

  svg {
    width: 24px;
    height: 24px;
    stroke: #fff;
  }
`
export const HomeCardMiddle = styled.div`
  text-align: justify;
  /* word-break: break-all; */
  hyphens: auto;
  margin-bottom: 20px;
`

export const HomeCardBottom = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;

  > a {
    padding: 10px;
    background-color: ${gradColor};
    border-radius: 6px;
    text-align: center;
    font-weight: bold;

    /* &:nth-child(2) {
      background-color: ${backgroundColor};
      border: 2px solid ${gradColor};
    } */
  }
`

export const HomeCardComing = styled.div`
  padding-top: 10px;
  text-align: center;
`
