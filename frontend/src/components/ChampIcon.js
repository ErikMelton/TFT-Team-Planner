import React from "react"
import styled from "@emotion/styled"
import { ahriIm } from "../assets/images/Images"
import { getChampImageFromId } from "../utils/ImageUtils"

const ChampTitle = styled.h6``
const Container = styled.div``
const Image = styled.img`
  width: 3em;
  height: auto;
`

export const ChampIcon = ({ champData }) => {
  const champImages = require.context("../assets/images/champions", true)
  const champImg = getChampImageFromId(champData.championId)

  return (
    <>
      {/* <ChampTitle>{champData.name}</ChampTitle> */}
      <Image src={champImg} />
    </>
  )
}
