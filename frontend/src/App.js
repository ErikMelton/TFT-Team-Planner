import React, { Component } from "react"
import { render } from "react-dom"
import styled from "@emotion/styled"
import { ChampIcon } from "./components/ChampIcon"
import { Hexagon } from "./components/Hexagon"

const GlobalContainer = styled.div`
  background-color: #222222;
  height: 100vh;
  width: auto;
`
const ChampContainer = styled.div`
  flex: 1;
  flex-direction: row;
  width: 30%;
  height: auto;
`
const HexagonGrid = styled.ul`
  position: relative;
  width: 20%;
  margin: 0 auto;
  padding: 0;
  &:after {
    content: "";
    display: block;
    clear: both;
  }
`

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
      loaded: false,
      placeholder: "Loading",
    }
  }

  componentDidMount() {
    fetch("api/champ")
      .then((response) => {
        if (response.status > 400) {
          return this.setState({ placeholder: "Something went wrong!" })
        }

        return response.json()
      })
      .then((data) => {
        this.setState({ data, loaded: true })
      })
  }

  render() {
    return (
      <GlobalContainer>
        <ChampContainer>
          {this.state.data.map((champ) => {
            return <ChampIcon champData={champ} />
          })}
        </ChampContainer>
        <HexagonGrid>
          <Hexagon />
          <Hexagon />
          <Hexagon />
          <Hexagon />
          <Hexagon />
          <Hexagon />
          <Hexagon />
          <Hexagon />
          <Hexagon />
          <Hexagon />
          <Hexagon />
          <Hexagon />
          <Hexagon />
          <Hexagon />
          <Hexagon />
          <Hexagon />
          <Hexagon />
          <Hexagon />
        </HexagonGrid>
      </GlobalContainer>
    )
  }
}

export default App

const container = document.getElementById("app")

render(<App />, container)
