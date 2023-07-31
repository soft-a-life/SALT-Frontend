import React from 'react'
import Header from './Header'
import BodyLeftComponents from './components-left/BodyLeftComponents'
import BodyRightComponents from './components-right/BodyRightComponents'
import Footer from './Footer'
import './MainScreen.css'

/*
mainPhoto fix

위치 변경
*/

function MainScreen(props) {
  return (
    <div>
      <div className={'mainPhoto'}>
        <Header />
      </div>
      <div className={'mainScreen'}>
        <div className={'body'}>
          <BodyLeftComponents />
          <BodyRightComponents />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default MainScreen
