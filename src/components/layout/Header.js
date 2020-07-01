import React from 'react';
import {Link} from 'react-router-dom';

export default function Header() {
  return (
    <div style={headerStyle}>
      <h1>Todo App</h1>
      <Link style={linkStyle} to="/">Home</Link> | <Link style={linkStyle} to="/redux">Redux</Link> | <Link style={linkStyle} to="/about">About</Link>
    </div>
  )
}

const headerStyle = {
  backgroundColor:'#333',
  color:'white',
  textAlign:'center',
  padding:'10px'
}
const linkStyle={
  color:'white',
  textDecoration:'none'

}