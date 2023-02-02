import React, { useState } from 'react'
import Footer from './redesignFooter'
import Navbar from './redesignNavbar'

const redesignFAQ = () => {
  const faqQuestions = [
    {
      'serialNumber': '01',
      'question': 'What is Shecluded?',
      'answer': 'Shecluded is a digital financial inclusion company that is focused on providing women with access to credit, financial education, business advisory, wealth management and pension in order to help them achieve sustainable growth in their personal life, career and business.',
    },
    {
      'serialNumber': '02',
      'question': 'How do I join the Shecluded Community?',
      'answer': 'To join our community simply register on our platform and sign up to our mailing list.',
    },
    {
      'serialNumber': '03',
      'question': 'How do I apply for a loan?',
      'answer': 'You would need to register to join our community then provide us with information on your current source of income or your monthly revenue. Also, we would like to know more about your business and the stage it is in. Kindly proceed to apply here (Insert registration link) ',
    },
    {
      'serialNumber': '04',
      'question': 'What are the loan requirements?',
      'answer': <>For eligibility  and requirements <br/><strong> A.</strong> You need to have a regular source of income. <br/> <strong> B.</strong>  You shouldn't have any loan currently running[If you do, kindly let us know] <br/> <strong> C.</strong>  A valid purpose of the loan <br/> The terms <br/><strong>i.</strong> Our interest rate is 3-4% monthly.<br/><strong>ii.</strong> Our repayment plan is flexible, we are open to fitting it to your capability <br/><strong> iii.</strong> Our loan processing time is fast as long as we agree on repayment terms and rate</>,
    },
    {
      'serialNumber': '05',
      'question': 'What are your loan limits?',
      'answer': 'We give loans up to 4 million naira. For larger amounts, we prepare and shortlist qualified candidates and refer them to our financial partners to handle.',
    },
    {
      'serialNumber': '06',
      'question': 'What is the least amount I can borrow?',
      'answer': 'The least amount you can borrow is 100,000',
    },
    {
      'serialNumber': '07',
      'question': 'What makes me eligible for a loan with Shecluded?',
      'answer': <>To be eligible for a loan with Shecluded,<br/><strong>i.</strong> you must be a business woman <br/><strong>ii.</strong> earn a minimum of N150,000 and <br/><strong>iii.</strong> a valid reason to apply for a loan.</>,
    },
    {
      'serialNumber': '08',
      'question': 'Is location a criteria to access loans?',
      'answer': 'No it is not. We give loans to businesses based anywhere provided you meet our criteria.',
    },
    {
      'serialNumber': '09',
      'question': 'Can I apply for a loan to start up a business?',
      'answer': 'Yes, you can do this simply through the “Loan” section of our mobile app or website',
    },
    {
      'serialNumber': '10',
      'question': 'What do I need to have to be able to qualify for a loan?',
      'answer': 'You need to have a regular source of income and a valid reason for the loan.',
    },
    {
      'serialNumber': '11',
      'question': 'Who do you finance?',
      'answer': 'We finance eligible applicants. To be eligible, you have to either be employed or run a growing business.',
    },
    {
      'serialNumber': '12',
      'question': 'I am a small business, can I get a loan?',
      'answer': 'Yes! Most women in our community are small business owners just like you.',
    },
    {
      'serialNumber': '13',
      'question': 'I am interested in Shecluded but I do not want a loan, how can I benefit?',
      'answer': 'You can check our website to subscribe for any of our services, or you can chat us up on any of our social media pages or mail us at hello@shecluded.com ',
    },
    {
      'serialNumber': '14',
      'question': 'Asides loans, what other funding option is available?',
      'answer': 'We currently do not have any other funding options. However, we have seasonal enterprise challenges every year where the winners are awarded funding.',
    },
    {
      'serialNumber': '15',
      'question': 'Where are you located?',
      'answer': 'We are located at 16A Nike Art Gallery Way Lekki, Phase 1, Lagos.',
    },
    {
      'serialNumber': '16',
      'question': 'What is the Shecluded SME support?',
      'answer': 'Shecluded is the need for a committed partner, your need to start and grow your business and career. We can provide finance and business support that is structured according to your needs. Turn to us, we work with you to achieve your ambitions',
    },
    {
      'serialNumber': '17',
      'question': 'Why was I declined for a loan?',
      'answer': <>The reasons you were rejected for a loan include; <br/> <strong>a)</strong> You did not meet the income requirement <br/> <strong>b)</strong> Your income source could not be verified from your bank statement. <br/> <strong>c)</strong> You are currently servicing a loan <br/> <strong>d)</strong> Your idea is not viable</>,
    },
    {
      'serialNumber': '18',
      'question': 'When can I reapply?',
      'answer': 'You can reapply for a loan upon completion of your previous loan or if you meet our eligibility requirements.',
    },
    {
      'serialNumber': '19',
      'question': 'How do I check my loan balance and due date?',
      'answer': <>You can check your loan balance and due date; <br/> <strong>a)</strong> Through your Shecluded account on the website or mobile application. <br/> <strong>b)</strong> Or by requesting your data from hello@shecluded.com</>,
    },
    {
      'serialNumber': '20',
      'question': 'What is the repayment like?',
      'answer': 'There are 2 types of repayment option, Automatic and Manual. You can choose between them according to your frequency - daily, weekly, monthly, etc.',
    },
    {
      'serialNumber': '21',
      'question': 'How does automatic repayment work?',
      'answer': 'Automatic repayment saves you the stress of manually paying your loan. You can activate automatic repayment according to your frequency - daily, weekly, monthly, etc. Check the settings of your web or mobile app.',
    },
    {
      'serialNumber': '22',
      'question': 'Can I pay back my loan earlier than the due date',
      'answer': 'Yes, you can pay your loan earlier than the due date',
    },
    {
      'serialNumber': '23',
      'question': 'Why do I have to put my card',
      'answer': 'Inputting your card allows for automatic repayment of your loan, thus saving your stress and time of doing it manually. It also allows us to know which account to send your savings and returns to.',
    },
    {
      'serialNumber': '24',
      'question': 'If I pay off my overdue loan, can I get another  LendUp Loan?',
      'answer': 'Yes, you are eligible for another loan, upon completion of your previous loan.',
    },
    {
      'serialNumber': '25',
      'question': 'Will paying late affect my credit score?',
      'answer': 'Yes, paying late affects your credit score.',
    },
    {
      'serialNumber': '26',
      'question': 'When are approved loans disbursed?',
      'answer': 'Approved loans are disbursed every Monday, Wednesday, and Friday.',
    },
    {
      'serialNumber': '27',
      'question': 'Does Shecluded offer a credit score rating?',
      'answer': 'Yes, all community members who have applied for a loan are eligible for a free credit score rating from Shecluded upon request.',
    },
    {
      'serialNumber': '28',
      'question': 'What’s the loan approval timeline?',
      'answer': 'We usually approve loans 24 hours after applications have been processed.',
    },
    {
      'serialNumber': '29',
      'question': 'What is the interest rate?',
      'answer': 'Our interest rate ranges between 3 - 4% monthly and an APR of 36% - 48%, no hidden charges.',
    },
    {
      'serialNumber': '30',
      'question': 'What is the meaning of APR',
      'answer': 'APR means an ‘annual percentage rate’ of interest',
    },
    {
      'serialNumber': '31',
      'question': 'What is the duration of your loan?',
      'answer': 'The duration of our loans is between 6 months to 1 year',
    },
    {
      'serialNumber': '32',
      'question': 'Do you give loans to career women?',
      'answer': 'No, we don’t give loans to career women unless you want to buy a car or a laptop',
    },
    {
      'serialNumber': '33',
      'question': 'Do you give loans to students?',
      'answer': 'No, we don’t give loans to students.',
    },
    {
      'serialNumber': '34',
      'question': 'How do I know which loan to apply for?',
      'answer': <>Depending on the rationale for wanting our loan,  you can either apply for; <ul> <li><strong> Our growth loan;</strong> This is granted to help women increase their capacities and help them achieve more </li><li><strong> Inventory Financing Loan;</strong> This is a short-term small business funding that has one purpose: to help our customers buy inventory for their business. </li></ul></>,
    },
    {
      'serialNumber': '35',
      'question': 'Is the repayment weekly or monthly?',
      'answer': 'Loan repayment is monthly. However, on special occasions, it can be adjusted to a weekly or bi-weekly basis.',
    },
    {
      'serialNumber': '36',
      'question': 'How much can I assess at first?',
      'answer': 'You can assess anywhere between 50,000 and 1million on a first time basis.',
    },
    {
      'serialNumber': '37',
      'question': 'Is it possible to clear off a loan during the repayment period & would the interest be lesser?',
      'answer': 'Yes, you can decide to clear off your loan at any point during repayment, and as a result, the interest rate will be lesser because we only charge interest on a monthly basis.',
    },
    {
      'serialNumber': '38',
      'question': 'How do I process loan repayment?',
      'answer': <><ol> <li> The loan repayment is automatic, the money is deducted from your card.</li><li> Make a bank transfer 0240942107 Included Limited GTBank Plc </li></ol></>,
    },
    {
      'serialNumber': '39',
      'question': 'Can you have two running loans together?',
      'answer': 'No you can not, you have to pay back your previous loan before applying for another.',
    },
    {
      'serialNumber': '40',
      'question': 'I would like to receive some business advice',
      'answer': 'You can book an appointment to speak with an expert today. Kindly click this link to book your consultation session.',
    },
    {
      'serialNumber': '41',
      'question': 'What other services are available on Shecluded?',
      'answer': 'We offer other services designed for women like business advisory, savings wealth management, health insurance and Pension',
    },
    {
      'serialNumber': '42',
      'question': 'How do I join the Shecluded pension scheme?',
      'answer': <>The Shecluded pension scheme was created to help more women get access to pension plans and also improve the retirement saving culture among African women. Our pension plans are free, to join you would need the following;<ul><li>A completed pension form. </li><li>An NIN Card or Slip ("No NIN, No PIN") </li><li>Means of ID (Valid Drivers License/Voter Card/International Passport/Company ID card) </li><li>Proof of Address </li><li>A passport photograph on a clear background </li></ul></>,
    },
    {
      'serialNumber': '43',
      'question': 'How do I join the Shecluded health insurance scheme?',
      'answer': 'Click the link below to review our new HMO plans and select the one that best fits your needs: <a> https://www.subscribepage.com/shecludedhmo <a/>',
    },
    {
      'serialNumber': '44',
      'question': 'How do I access the business advisory services?',
      'answer': <>The business advisory service is a paid service where women get a starting guide for their business, step by step action plan to goal, new product development, and pivot and action plan. <br/> <br/> To access the service, you would pay a stipulated fee to book a consultation with an advisor. Kindly click here to book an appointment today.</>,
    },
    {
      'serialNumber': '45',
      'question': 'What is Wealth Management?',
      'answer': 'Wealth Management is an advisory service that addresses the wants and needs of individuals by providing them with the appropriate financial services and products tailored to the individual’s goals. Wealth Management cuts across financial planning, investment advisory, retirement planning, wealth transfer etc.',
    },
    {
      'serialNumber': '46',
      'question': 'Why is Wealth Management important?',
      'answer': 'Wealth Management is important because this service encompasses all aspects of an individual’s financial life. Wealth transcends beyond physical cash and the wealth management service assists you to put structures in place to get you to the financial future you want and deserve.',
    },
    {
      'serialNumber': '47',
      'question': 'What will the Wealth Manager do for me?',
      'answer': 'The Wealth Manager will consult with you to determine your specific circumstances, needs and goals, and provide you with a customized financial plan that helps you achieve those goals.',
    },
    {
      'serialNumber': '48',
      'question': 'Can I lose my money investing?',
      'answer': 'It is important to understand that investment instruments carry varying levels of risk and potential reward. Your risk profile and risk appetite will be determined during consultations before advising you on viable investment options.',
    },
    {
      'serialNumber': '49',
      'question': 'Do I need to have a specific amount before accessing the Wealth Management service?',
      'answer': 'No, you do not. The service is open to everyone however, we will advise you of how much you should be saving or investing based on your goals.',
    },
    {
      'serialNumber': '50',
      'question': 'What is the wealth management and financial advisory service about and how do I have access to it?',
      'answer': <>The wealth management and financial advisory service was designed to helpWe help women make their money work for them by offering scalable business, accounting, money management and investment solutions designed to meet specific needs of our clients. Our advisors work closely to learn more about your life and help develop and implement investment plans that support your financial goals.<br/><br/>This is a paid service led by wealth managers and financial advisors who understand women and their money.  To access the service, kindly click here to book an appointment today.</>,
    },
    {
      'serialNumber': '51',
      'question': 'Website users having trouble with activating their account on our website after debit from paystack',
      'answer': 'Ask for a screenshot of the paystack receipt received by customers, and email address used in creating account on shecluded website. Log in to paystack, search for the email address. Log in to shecluded admin, click on users, and users with card, click add customer card, input customer’s email address as customer details, then copy reference number from paystack and input as card token',
    },
    {
      'serialNumber': '52',
      'question': 'What are your fees for the wealth management advisory service?',
      'answer': 'At Shecluded, you will have the opportunity to speak with an advisor, and not a salesperson. Our wealth management program encompasses investment management and ongoing advisory support. Fees for this service are charged at $100.',
    }
  ]
  const questionText = document.querySelectorAll('.show')
  let questionEach = questionText.innerHTML

  const [search, setSearch] = useState('')
  const [selected, setSelected] = useState(null);
  console.log(search)

 
  const toggle = (i) => {
    if(selected === i){
      return setSelected(null)
    }
    setSelected(i);
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
                  search.toLowerCase() ==='' ? item : item.question.toLowerCase().includes(search.toLowerCase())
                )
              }).map((eachQuestion, i) => 
                (
                  <div className="each-faq-div py-3 py-lg-5 d-flex justify-content-between align-items-start border-bottom" key={eachQuestion.serialNumber}>
                      <div className="question-number d-flex justify-content-start align-items-start">
                        <h1 className='faq-number d-flex justify-content-start align-items-start'>{eachQuestion.serialNumber}</h1>
                        <div className="question-answer-div pl-3 pl-md-5 d-flex flex-column justify-content-center align-items-start" >
                          <h2 className='faq-question ' onClick={() => toggle(i)}>{eachQuestion.question}</h2>
                          <div className={selected === i ? 'faq-answer show' : 'faq-answer '}>{eachQuestion.answer}</div>
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
      <Footer />
    </>
  )
}

export default redesignFAQ