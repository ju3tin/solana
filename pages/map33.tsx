import dynamic from 'next/dynamic'
import { NextPage } from "next"
import styles from "../styles/Home.module.css"
import { AppBar1 } from "../components/AppBar1"
import { useWallet } from "@solana/wallet-adapter-react"
import { Increment } from "../components/Increment"
import { Initialize } from "../components/Initialize"
import { useState } from "react"
import Head from "next/head"
import idl from "../idl.json"
import { useAnchorWallet, useConnection } from "@solana/wallet-adapter-react"
import {
  Program,
  Idl,
  AnchorProvider,
  setProvider,
} from "@coral-xyz/anchor"

const { connection } = useConnection()
const wallet = useWallet()

//const provider = new AnchorProvider(connection, wallet, {})
//setProvider(provider)

//const programId = new PublicKey("JPLockxtkngHkaQT5AuRYow3HyUv5qWzmhwsCPd653n")
//const program = new Program(idl as Idl, programId)  
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
const map33: NextPage = (props) => {
  return (
    <>
     <AppBar1 />
       <OpenStreetMap />
    </>
  )
}
export default map33