import { Link } from 'react-router-dom'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Cookie from './cookie'
import Soda from './soda'
import Chips from './chips'
import VendingList from './vendingList'

function VendingMachine() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<VendingList/>}/>
        <Route path='/cookie' element={<Cookie/>} />
        <Route path='/soda' element={<Soda/>} />
        <Route path='/chips' element={<Chips/>} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default VendingMachine