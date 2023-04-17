import React from 'react'

function Footer() {
    const footerStyle = {
        textAlign: "center",
        paddingTop: "15px",
        paddingBottom: "15px",
        color: "white",
        position: "relative",
        marginTop: "35vh"
    }
    return (
        <div className='bg-dark' style={footerStyle}>
            @CopyRight Todo_App 2023
        </div>
    )
}

export default Footer
