import { FC } from "react"
import styles from "../styles/Home.module.css"
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui"
import Image from "next/image"

export const AppBar: FC = () => {
  return (
    // <div className={styles.AppHeader}>
    <div className={styles.AppHeader}>
      <Image alt="" src="/images/logo.png" height={30} width={200} />
      <span>Anchor Frontend Example</span>
      <WalletMultiButton />
    </div>
  )
}
