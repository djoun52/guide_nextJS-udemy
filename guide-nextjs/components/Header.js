import React from 'react'

export function Header(){
  const style = {
    nav: {
      margin: "20px",
      padding: "20px",
      border: "1px solid #ddd",
    },

  link: {
    margin: "15px"
  }
  }

  return (
    <nav style={style.nav}>
        <a style={style.link} href="">Home</a>
        <a style={style.link} href="">Blog</a>
        <a style={style.link} href="">Profile</a>
        <a style={style.link} href="">Items</a>
        <a style={style.link} href="">Categories</a>
    </nav>
  ) 
}
