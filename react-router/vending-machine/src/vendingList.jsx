import { Link } from 'react-router-dom'


function VendingList() {
  return (
    <>
       <h1>Vending Machine</h1>
        <p><Link to='/cookie'>Cookie</Link></p>
        <p><Link to='/soda'>Soda</Link></p>
        <p><Link to='/chips'>Chips</Link></p>

    </>
  )
}

export default VendingList