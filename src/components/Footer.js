import React from 'react'

const Footer = () => {
  let footerStyle = {
    position: "relative",
    top: "30vh",
    width: "100%",
  }
  return (
    <div className="text-center bg-dark text-light py-3 my-3" style={footerStyle}>
      Copyright &copy; MyTodoslist
    </div>
  )
}
                              
export default Footer
