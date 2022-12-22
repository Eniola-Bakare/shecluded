import React from 'react'
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
      'question': 'Who is Shecluded?',
      'answer': 'Shecluded grows women\'s role in financial services by addressing your needs across the loan and insurance value chain.',
    },
    {
      'serialNumber': '03',
      'question': 'Who is Shecluded?',
      'answer': 'Shecluded grows women\'s role in financial services by addressing your needs across the loan and insurance value chain.',
    },
    {
      'serialNumber': '04',
      'question': 'Who is Shecluded?',
      'answer': 'Shecluded grows women\'s role in financial services by addressing your needs across the loan and insurance value chain.',
    },
    {
      'serialNumber': '05',
      'question': 'Who is Shecluded?',
      'answer': 'Shecluded grows women\'s role in financial services by addressing your needs across the loan and insurance value chain.',
    },
    {
      'serialNumber': '06',
      'question': 'Who is Shecluded?',
      'answer': 'Shecluded grows women\'s role in financial services by addressing your needs across the loan and insurance value chain.',
    }
  ]
  return (
    <>
      <div className="faq-wrapper">
        <div className="faq-header">
          <Navbar />
          <div className="faq-header-content">
            <h1>Frequently Asked Questions</h1>
            <div className="search-box-div">
              <img src={require ('../../assets/newRedesign-assets/search-image.png')} alt="search-icon" />
              <input type='search' placeholder='search for any question' />
            </div>
          </div>
        </div>

        <div className="faq-body">
          {
            faqQuestions.map(eachQuestion => 
              (
                <div className="each-faq-div" key={eachQuestion.serialNumber}>
                  <div className="question-div">
                    <h1>{eachQuestion.serialNumber}</h1>
                    <div className="question-answer-div">
                      <h2>{eachQuestion.question}</h2>
                      <h3>{eachQuestion.answer}</h3>
                    </div>
                    <div className="expand-btn">
                      <img src={require ('../../components/assets/newRedesign-assets/open-icon.png')} alt="open botton" />
                    </div>
                    <div className="expand-btn">
                      <img src={require ('../../components/assets/newRedesign-assets/close-icon.png')} alt="close botton" />
                    </div>
                  </div>
                  
                  
                </div>
              )
            )
          }

        </div>

      </div>
        <Footer />
    </>
  )
}

export default redesignFAQ