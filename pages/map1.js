import dynamic from 'next/dynamic'
import { NextPage } from "next"
import styles from "../styles/Home.module.css"
import { AppBar1 } from "../components/AppBar1"
import { useWallet } from "@solana/wallet-adapter-react"
import { Increment } from "../components/Increment"
import { Initialize } from "../components/Initialize"
import { useState } from "react"
import Head from "next/head"
import {
  Spacer,
  VStack,
  Text,
  Button,
  Box,
  Stack,
  Link,
} from "@chakra-ui/react"
// import OpenStreetMap from '../component/OpenStreetMap'
const OpenStreetMap = dynamic(() => import('../components/OpenStreetMap'), {
  ssr: false,
})
const map1 = () => {
  return (
    <>
     <AppBar1 />
       <OpenStreetMap />
    </>
  )
}
export default map1