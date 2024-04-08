import { FC } from "react"
import styles from "../styles/Home.module.css"
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui"
import Image from "next/image"

export const AppBar1: FC = () => {
  return (
    // <div className={styles.AppHeader}>
    <div className={styles.AppHeader}>
      <Image src="/solanaLogo.png" height={30} width={200} />
      <span>Map Example</span>
      <WalletMultiButton />
    </div>
  )
}
