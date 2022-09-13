import React from 'react'

function ContactMe() {
  return (
    <div>
      <section className='container-fluid row'>
      <h1 className='contactme'>CONTACT ME</h1>
      <div className='contactdetails'>
        <div className='contactbox' id='dwhatsapp'>
          <p className='ctext'>Text Me on<br></br> Whatsapp</p>
          <a href='https://wa.me/393462219046' target="_blank">
            <img id='cwhatsapp' className='whatsapp' src='./images/whatsapp.png' alt='whatsapp'></img>
          </a>
          <p className='link'>
            <a id='linkwa' href='https://wa.me/393462219046' target='_blank'>+393462219046</a>
          </p>
          </div>
          <div className='contactbox' id='demail'>
          <p className='ctext'>Send me an<br></br> Email</p>
          <a href='mailto:andrea.tricerri@outlook.com' target="_blank">
            <img id='cemail' className='email' src='./images/mail.png' alt='mail'></img>
          </a>
          <p className='link' id='mail'>
            <a href='mailto:andrea.tricerri@outlook.com' target='_blank'>andrea.tricerri@<br></br>outlook.com</a>
          </p>
          </div>
          <div className='contactbox' id='dcall'>
          <p className='ctext'>Give me a<br></br> Call</p>
          <a href='tel:+34637518737' target="_blank">
            <img id='call' className='call' src='./images/call.png' alt='call'></img>
          </a>
          <p className='link'>
            <a id='linkwa' href='tel:+34637518737' target='_blank'>+34637518737</a>
          </p>
          </div>
          <div className='contactbox' id='dlinkedin'>
          <p className='ctext'>Connect on<br></br> LinkedIn</p>
          <a href='https://www.linkedin.com/in/andreatricerri/' target="_blank">
            <img id='clinkedin' className='linkedin' src='./images/linkedin.png' alt='linkedin'></img>
          </a>
          <p className='link'>
            <a href='https://www.linkedin.com/in/andreatricerri/' target='_blank'>My LinkedIn Profile</a>
          </p>
          </div>
          <div className='contactbox' id='dgithub'>
          <p className='ctext'>See you on <br></br>GitHub</p>
          <a href='https://github.com/andreatricerri' target="_blank">
            <img id='cgithub' className='github' src='./images/github.png' alt='github'></img>
          </a>
          <p className='link'>
            <a href='https://github.com/andreatricerri' target='_blank'>Check my Profile</a>
          </p>
          </div>
      </div>
      </section>
      </div>


  )
}

export default ContactMe