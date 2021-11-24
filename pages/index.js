import { useWeb3React } from "@web3-react/core"
import { injected } from "../connectors"
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  const { active, account, library, connector, activate, deactivate } = useWeb3React()

  async function connect() {
    try {
      await activate(injected)
    } catch (ex) {
      console.log(ex)
    }
  }

  async function disconnect() {
    try {
      deactivate()
    } catch (ex) {
      console.log(ex)
    }
  }

  return (

      <div className={styles.container}>
        <Head>
          <title>K-atomic swap</title>
          <meta name="description" content="test atomic swap" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
          <h1 className={styles.title}>
            Welcome to <a href="http://localhost:3000">test atomic swap!</a>
          </h1>

          <p className={styles.description}>
            Get started by connect your METAMASK wallet
          </p>
          {active ? <span>Connected with <b>{account}</b></span> : <span>Not connected</span>}

          <div className={styles.grid}>

            <a onClick={connect} className={styles.card}>
              <h2>Connect &rarr;</h2>
              <p>Connect</p>
            </a>
            <a onClick={disconnect} className={styles.card}>
              <h2>Disconnect &rarr;</h2>
              <p>Disconnect</p>
            </a>
          </div>
        </main>
      </div>
  )
}
