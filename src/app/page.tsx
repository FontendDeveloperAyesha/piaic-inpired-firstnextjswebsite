'use client'
import React from 'react'
import Image from 'next/image'
import Main from "./download.jpg"

const Clicked = () => {
  return (
      alert("PIAIC COURSE FULL DETAILS ")
  )
}
function page() {
  return (
    <div className='main-home'>
      <div className='home-context'>
        <h1 >GENERATIVE AI  <br />META VERSE 3.O <br /> FULL COURSE</h1>
        <div className='main-p'>
          Unlock your creative potential with Generative AI! Explore the cutting-edge world  <br />of artificial intelligenceand learn to create stunning digital art, lifelike simulations, <br />and more. Join our Generative AI  program to harness the power of {`tomorrow's`} <br />technology today. Enroll now and be at the forefront of innovation!
        </div>
        <div className='btn'>
          <button className='btn1' onClick={Clicked}>Learn More</button>
        </div>

        <div className='main-img'><Image src={Main} alt='Main' height={500} width={500} /></div>
      </div>
      <section className='middle'>
        <div className='section-centre'>
          <h1 className='middle-h1'>OUR PROGRAMS</h1>
          <p className='middle-p'> <span className='s1'>O</span>ur program offers a comprehensive educational experience focused on cutting-edge technology. With a strong emphasis on Generative AI, AI, and Cloud Computing, we provide participants with the skills and knowledge needed to excel in these rapidly evolving fields. Our Generative AI course delves into the fascinating world of artificial intelligence, enabling learners to understand and harness the potential of generative models, neural networks, and more. The AI course empowers students with the ability to design and deploy intelligent systems, making them proficient in machine learning and deep learning. Additionally, our Cloud Computing course equips individuals with the expertise to manage and optimize cloud-based solutions, a crucial skill in the modern digital landscape. With a combination of theoretical foundations and practical hands-on experience, our program aims to cultivate the next generation of tech leaders and innovators. Join us on this exciting educational journey to unlock the vast opportunities presented by Generative AI, AI, and Cloud Computing. </p>

        </div>
      </section>

        <div className='footer-main'>
          <h1 className='f-h1'> THANK YOU DEAR USER FOR VISITING OUT SITE</h1>
          <p className='f-p'>Thank you for visiting our website! We appreciate your time and interest in exploring what we have to offer. If you have any questions or if {`there's`}anything specific {`you're`} looking for, please feel free to reach out. Our team is here to assist you. We hope you found valuable information and look forward to serving you in the future</p>

        </div>
   
    </div>
    

  )
}

export default page