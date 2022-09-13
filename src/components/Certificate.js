import React from 'react'

function Certificate() {
    return (
      <div>
        <h1 className='certificateTitle'>CERTIFICATES</h1>
        <section className='container-fluid row'>
            <div className='codecademy col-lg-6'>
                <img className='codecademyLogo' src='https://upload.wikimedia.org/wikipedia/commons/8/87/Codecademy_logo.png'/>
            <div className='codacademyCertificate'>
                <ul className='listCodecademy'>
                <img alt='JavaScript' className='certificateItems big' src='./images/JavaScript.jpg'/>
                <img alt='Intermediate CSS' className='certificateItems big' src='./images/intCSS.jpg'/>
                <img alt='CSS' className='certificateItems big' src='./images/CSS.jpg'/>
                <img alt='HTML' className='certificateItems big' src='./images/HTML.jpg'/>
                <img alt='NameCheap' className='certificateItems big' src='./images/NameCheap.jpg'/>
                </ul>
            </div>
            </div>
            <div className='udemy col-lg-6'>
                <img className='udemyLogo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Udemy_logo.svg/640px-Udemy_logo.svg.png'/>
            <div className='udemyCertificate'>
            <ul className='listUdemy'>
                    <img alt='Project Management' className='certificateItems big' src='./images/ProjectM.jpg'/>
                    <img alt='Agile Project Management' className='certificateItems big' src='./images/Agile.jpg'/>
                </ul>
            </div>
            </div>
        </section>
        </div>
        )
}

export default Certificate