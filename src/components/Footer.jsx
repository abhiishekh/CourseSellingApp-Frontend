import React from 'react'
import '../styles/footer.css'
const Footer = () => {
  return (
    <>
      <div className="footer-body">
        <div className="developer">
        <h1>Developer-Abhishek Maurya</h1>
        <p>email - abhishekmaurya.webdev@gmail.com</p>
        <p>github - @abhiishekh</p>
        </div>
        <div className="contact">
            <input type="text" placeholder='Send us message'/>
            <div className="send-email">
                <div className="nothing"></div>
                <div className="send-button">
                    <button>send message</button>
                </div>
            </div>

        </div>
      </div>
    </>
  )
}

export default Footer
