import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {

        const navList = document.getElementById('nav-List')
        const signInBtn = document.getElementById('sign-in-div')
        const navUl = document.getElementById('nav-ul')

    //    { 
    //     navList.addEventListener('click', () => {
    //         navList.classList.remove('visible')
    //         signInBtn.classList.remove('visible')
    //         navUl.classList.remove('visible')
    //     })
    // }

    const handleClick = () => {
        const navList = document.getElementById('nav-List')
        const signInBtn = document.getElementById('sign-in-hidden')
        const navUl = document.getElementById('nav-ul')
        const closeIcon = document.getElementById('close-icon')

        // if (navList.classList.contains('visible')) {

        //         navList.classList.remove('visible')
        //         signInBtn.classList.remove('visible')
        //         navUl.classList.remove('visible')
                
        // } else {
        //     navList.classList.add('visible')
        //     signInBtn.classList.add('visible')
        //     navUl.classList.add('visible')
        // }

        { 
            navList.addEventListener('click', () => {
                navList.classList.remove('visible')
                signInBtn.classList.remove('visible')
                console.log('removed sign in btn')
                navUl.classList.remove('visible')
            })
        }
        {
            closeIcon.addEventListener('click', () => {
                navList.classList.remove('visible')
                signInBtn.classList.remove('visible')
                console.log('removed sign in btn')
                navUl.classList.remove('visible')
                closeIcon.classList.remove('active')
            })
        }
        {
            
            navList.classList.toggle('visible')
            signInBtn.classList.toggle('visible')
            navUl.classList.toggle('visible')
            closeIcon.classList.add('active')
        }
    }

  return (
    <div className='navBar-container '>

        <div className="logo-container">
            <img src={require ('../../assets/newRedesign-assets/shecluded-logo.png')} />
        </div>

        <div className="nav-list" id='nav-List'>
            <i className="uil uil-times active"  id='close-icon' ></i>
            <ul id='nav-ul'>
                <li className="nav-list-items pb-3 pb-lg-0"><Link to={'/aboutUs'}> About Us</Link></li>
                <li className="nav-list-items pb-3 pb-lg-0">Learn</li>
                <li className="nav-list-items pb-3 pb-lg-0">Loan</li>
                <li className="nav-list-items pb-3 pb-lg-0">Insights</li>
                <li className="nav-list-items pb-3 pb-lg-0">Community</li>
            </ul>
            <div className="sign-in-div" id='sign-in-hidden'>
                <button className="sign-in-btn">Sign In</button>
            </div>
        </div>

        <div className="sign-in-div" id='sign-in-div'>
            <button className="sign-in-btn">Sign In</button>
        </div>

        <div className='hamburger-div'>
            <i className="uil uil-bars hamburger-img" onClick={() => handleClick()}></i>
            {/* <img className='hamburger-img' onClick={() => handleClick()} src={require ('../../assets/newRedesign-assets/hamburger.png')} alt='hamburger for menu'/> */}
        </div>
    </div>
  )
}

export default Navbar