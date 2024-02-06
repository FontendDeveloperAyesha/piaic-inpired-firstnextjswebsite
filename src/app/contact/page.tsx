import React from 'react'
import ContactForm from '../contact'
import Link from 'next/link'
function CONTACT() {
  return (
    <div className='contact-main'>
      <div className='contact-context'>
        <h1 className='contact-h1'>CONTACT US TODAY !</h1>
        <p className='contact-p'>Experience seamless communication by filling out our contact <br /> form. Your inquiries and feedback are important to us, and we  <br />are here to assist you.

Alternatively, visit our official page for <br /> more information and detailed insights into our offerings <br /> <Link href="https://www.piaic.org">PIAIC OFFICIAL</Link>.

We look forward to hearing from you and <br />forward to connecting with you!</p>
      </div>
      <div className='contact-form'>
       <ContactForm/>
      </div>
    </div>
  )
}

export default CONTACT