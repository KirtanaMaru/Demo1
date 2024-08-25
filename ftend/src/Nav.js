import React from 'react'
import {Link} from 'react-router-dom'

const Nav = () => {
  return (
    <div>
      <Link to="/">GetData</Link>&nbsp;
      <Link to="/add">AddResult</Link>&nbsp;
      <Link to="/getbyid">GetById</Link>
    </div>
  )
}

export default Nav
