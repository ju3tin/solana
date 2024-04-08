import { NextPage } from "next"
import styles from "../styles/Home.module.css"
import { AppBar1 } from "../components/AppBar1"
import { useWallet } from "@solana/wallet-adapter-react"
import { Increment } from "../components/Increment"
import { Initialize } from "../components/Initialize"
import { useState, useEffect } from "react"
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

const Home: NextPage = (props) => {
  const [counter, setCounter] = useState("")
  const [transactionUrl, setTransactionUrl] = useState("")
  const wallet = useWallet()
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className={styles.App}>
      <Head>
        <title>Map Example</title>
        <script
      src="https://unpkg.com/jquery@3.6.0/dist/jquery.min.js"
      integrity="sha384-vtXRMe3mGCbOeY7l30aIg8H9p3GdeSe4IFlP6G8JMa7o7lXvnz3GFKzPxzJdPfGK"
      crossOrigin="anonymous"
    ></script>
    <script
      src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js"
      integrity="sha384-RFZC58YeKApoNsIbBxf4z6JJXmh+geBSgkCQXFyh+4tiFSJmJBt+2FbjxW7Ar16M"
      crossOrigin="anonymous"
    ></script>
      </Head>
      <Box h="calc(100vh)" w="full">
        <Stack w="full" h="calc(100vh)" justify="center">
          <AppBar1 />
          <div className={styles.AppBody}>
            {wallet.connected ? (
              counter ? (
                <VStack>
                  <Increment
                    counter={counter}
                    setTransactionUrl={setTransactionUrl}
                  />
                </VStack>
              ) : (
                <Initialize
                  setCounter={setCounter}
                  setTransactionUrl={setTransactionUrl}
                />
              )
            ) : (
              <Text color="white">Connect Wallet</Text>
              
            )}
           
    <div className="container">
      <h1>Hello Next.js</h1>
      <p>Let's explore different ways to style Next.js apps</p>
      
      <style jsx>{`
        .container {
          margin: 50px;
        }
        p {
          color: blue;
        }
      `}</style>
      <div id="map"></div>
    <script src="/js/TileLayer.Grayscale.js"></script>
    <script type='text/javascript' src='/js/markers1.js'></script>
    <script type='text/javascript' src='/js/leaf-demo1.js'></script>
    </div>

            <Spacer />
            {transactionUrl && (
              <Link href={transactionUrl} color="white" isExternal margin={8}>
                View most recent transaction
              </Link>
            )}
          </div>
      
        </Stack>
      </Box>
    </div>
    
  )
}

export default Home
