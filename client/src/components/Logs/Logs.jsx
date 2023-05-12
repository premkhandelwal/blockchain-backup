import React from 'react'
import Block from '../Block/Block'
import useEth from '../../contexts/EthContext/useEth'
import { useEffect } from 'react'



const Logs = () => {
  const [visible, setVisible] = React.useState(false)
  const {
    state: { transactionMap },
  } = useEth()
  useEffect(() => {
    // This code will run once when the component mounts
  console.log(transactionMap);
  },);


  return (
    <div className="box">
      {/* <Navbar></Navbar>  */}

      <div className="buttonmain">
        <button onClick={() => setVisible(!visible)}>
          {visible ? 'Hide Transaction' : 'Display Transaction'}
        </button>
      </div>
      {visible ?[...transactionMap].map(([transactionHash, transactionData]) => (
        <Block key={transactionHash} transactionHash={transactionHash} transactionData = {transactionData} />
         
        )): <div />}
      {/* {visible ? BlockData.map((block) => <Block transactionHash={transactionHash} transactionData = {transactionData}  />) : <div />} */}
    </div>
  )
}
export default Logs
