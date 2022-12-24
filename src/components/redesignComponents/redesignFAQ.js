import React, { useState } from 'react'
import Footer from './redesignFooter'
import Navbar from './redesignNavbar'

const redesignFAQ = () => {
  const faqQuestions = [
    {
      'serialNumber': '01',
      'question': 'Who is Shecluded?',
      'answer': 'Shecluded grows women\'s role in financial services by addressing your needs across the loan and insurance value chain.',
    },
    {
      'serialNumber': '02',
      'question': 'What are the criteria for a loan?',
      'answer': 'Shecluded grows women\'s role in financial services by addressing your needs across the loan and insurance value chain.',
    },
    {
      'serialNumber': '03',
      'question': 'Why do I have to add my card to access a loan?',
      'answer': 'Shecluded grows women\'s role in financial services by addressing your needs across the loan and insurance value chain.',
    },
    {
      'serialNumber': '04',
      'question': 'May I know the interest rate?',
      'answer': 'Shecluded grows women\'s role in financial services by addressing your needs across the loan and insurance value chain.',
    },
    {
      'serialNumber': '05',
      'question': 'What makes Shecluded loans better?',
      'answer': 'Shecluded grows women\'s role in financial services by addressing your needs across the loan and insurance value chain.',
    },
    {
      'serialNumber': '06',
      'question': 'How can I create a Shecluded account?',
      'answer': 'Shecluded grows women\'s role in financial services by addressing your needs across the loan and insurance value chain.',
    }
  ]

  const [search, setSearch] = useState('')
  const [selected, setSelected] = useState(null);
  console.log(search)

 
  const toggle = (i) => {
    if(selected === i){
      return setSelected(null)
    }
    setSelected(i);
    console.log(setSelected(i))
  }
  return (
    <>
      <div className="faq-header d-flex flex-column align-items-center">
          <Navbar />
          <div className="faq-header-content d-flex flex-column align-items-center justify-contents-between">
            <h1 className='faq-title'>Frequently Asked Questions</h1>
            <div className="search-box-div ">
              <input type='search' placeholder='search for any question' onChange={(e) => setSearch(e.target.value)}/>
              <span className="search d-flex justify-content-end align-items-center">
                <i className="uil uil-search search-icon"></i>
              </span>
            </div> 
          </div>
      </div>
      {/* <div className="faq-wrapper">
         */}

        <div className="faq-body py-4 px-4 px-lg-5 py-lg-5 my-5">
          {
              faqQuestions.filter(item => {
                return(
                  search.toLowerCase() ==='' ? item : item.question.toLowerCase().includes(search) || item.answer.toLowerCase().includes(search)
                )
              }).map((eachQuestion, i) => 
                (
                  <div className="each-faq-div py-3 py-lg-5 d-flex justify-content-between align-items-start border-bottom" key={eachQuestion.serialNumber}>
                      <div className="question-number d-flex justify-content-start align-items-start">
                        <h1 className='faq-number d-flex justify-content-start align-items-start'>{eachQuestion.serialNumber}</h1>
                        <div className="question-answer-div pl-3 pl-md-5 d-flex flex-column justify-content-center align-items-start" >
                          <h2 className='faq-question ' onClick={() => toggle(i)}>{eachQuestion.question}</h2>
                          <h3 className={selected === i ? 'faq-answer show' : 'faq-answer '}>{eachQuestion.answer}</h3>
                        </div>
                      </div>
                  
                        
                          {selected === i
                          ?
                            <div className="expand-div close-div d-flex align-items-center justify-content-center">
                              <i className="uil uil-times close-icon" onClick={() => toggle(i)} ></i>
                            </div>
                          : 
                            
                            <div className="expand-div open-div d-flex align-items-center justify-content-center">
                              <i className="uil uil-plus open-icon" onClick={() => toggle(i)}></i>
                            </div>
                          }
                      
                  </div>
                )
              )
          }

        </div>

      {/* </div> */}
      <Footer />
    </>
  )
}

export default redesignFAQ