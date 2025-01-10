import React from 'react'
import './Question.css'


const Question = () => {
  return (
    <section className='question'>
        <div className="container">
            <div className="question__wrapper">
               <div className="question__content">
               <h2 className="question__title">Have Question in Mind? Let us help you</h2>
                
                <div className="info">
                    <input type="number" placeholder='Your phone number'  className='number'/>
                    <input type="text" placeholder='Question type'  className='type'/>
                </div>
                <form action="" className='question__form'>
                    <input className='question__input' placeholder='Your question'></input>
                    <button className='question__btn'>Submit</button>
                </form>
               </div>
            </div>
        </div>
    </section>
  )
}

export default Question