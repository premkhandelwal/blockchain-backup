import React, { useState } from 'react'
import * as xlsx from 'xlsx'
import './Home.css'
import { sha256 } from 'crypto-hash'
import HashComponent from './HashComponent/HashComponent'


function Home() {
  
  const [excelData, setExcelData] = useState(null)
  const readExcel = async (e) => {
    const file = e.target.files[0]
    const data = await file.arrayBuffer(file)
    const excelfile = await xlsx.read(data)
    const excelsheet = excelfile.Sheets[excelfile.SheetNames[0]]
    //    const exceljson= xlsx.utils.sheet_to_json(excelsheet);
    let dataExcel = ''
    for (const cell in excelsheet) {
      dataExcel += excelsheet[cell].v
    }

    const hash = await sha256(dataExcel)
    console.log(hash)
    setExcelData(hash)
  }
  return (
    <>
      {excelData ? (
        <HashComponent bHash={excelData}></HashComponent>
      ): (
        <div>
          <div className="content">
            <input
              type="file"
              className="form-control"
              onChange={(e) => readExcel(e)}
            />
            <h3 className="mt-3">Fetch Excel File </h3>
          </div>
        </div>
      ) }

      
    </>
  )
}
export default Home
