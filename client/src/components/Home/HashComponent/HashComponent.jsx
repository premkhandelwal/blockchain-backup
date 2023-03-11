import React from 'react'
import useEth from '../../../contexts/EthContext/useEth'
import { useState, useEffect, useCallback } from 'react'
import NoticeNoArtifact from './NoticeNoArtifact'
import NoticeWrongNetwork from './NoticeWrongNetwork'

export default function HashComponent(props) {
  const { state } = useEth()
  const [value, setValue] = useState('?')
  const {
    state: { contract, accounts },
  } = useEth()
  function delay(ms) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms)
    })
  }
  
  const requestVolumeData = async () => {
    try {
      // var contact = contract.new(abi,{from: web3.eth.accounts[0], data: bc});
      await contract.methods
        .requestVolumeData()
        .send({ from: accounts[0], gas: 2000000 })
      console.log('Started Brum bum')
      await delay(10000)

      const value = await contract.methods.read().call({ from: accounts[0] })
      console.log(value)
      setValue(value)
    } catch (error) {
      console.log(error)
    }
  }

  const tryInit = async () => {
    await requestVolumeData()
  }
  useEffect(() => {
    tryInit()
  }, [value])

  return (
    <>
      <div
        className="HashCodeBlockChain"
        style={{ color: props.bHash === props.eHash ? 'green' : 'red' }}
      >
        <h3 style={{ color: 'white' }}>B.HASH</h3>
        <span className="neon"> {props.bHash}</span>
      </div>
      <div
        className="HashCodeExcel"
        style={{ color: props.bHash === props.eHash ? 'green' : 'red' }}
      >
        <h3 style={{ color: 'white' }}>E.HASH</h3>
        {!state.artifact ? (
          <NoticeNoArtifact />
        ) : !state.contract ? (
          <NoticeWrongNetwork />
        ) : value === "?" ? (
          <button onClick={requestVolumeData}>requestVolumeData()</button>
        ) : (
          <span className="neon">{value}</span>
        )}
      </div>
    </>
  )
}
