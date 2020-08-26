import React, { Component } from "react"
import { render } from "react-dom"
import styled from "@emotion/styled"

const GlobalContainer = styled.div`
  background-color: #222222;
  display: flex;
  flex: 1;
  align-self: stretch;
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
        <ul>
          {this.state.data.map((champ) => {
            return <li key={champ.id}>{champ.name}</li>
          })}
        </ul>
      </GlobalContainer>
    )
  }
}

export default App

const container = document.getElementById("app")

render(<App />, container)
