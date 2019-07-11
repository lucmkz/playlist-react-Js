import './App.css';
import React from 'react';
import styled, { createGlobalStyle } from 'styled-components'
import VideosList from './components/videosList'
import VideoSingle from './components/videoSingle'
import RegisterVideio from './components/registerVideo'
import Header from './components/header'
import Footer from './components/footer'
import { connect } from 'react-redux'
import { headerHeight, footerHeight } from './utils/constants'

import 'milligram'

const App = ({ isRegisterFormOpened }) => (
  <Container>
  <GlobalStyle />
    <Header/>

    <Main>
      {isRegisterFormOpened && <RegisterVideio />}
      <VideoSingle />
      <VideosList />
    </Main>

    <Footer />

  </Container>

)

const Main = styled.main`
  min-height: calc(100% - ${footerHeight} - ${headerHeight});
`

const Container = styled.div`
  height: 100%;
`

const GlobalStyle = createGlobalStyle`
  html, body, div[data-js="root"]{
    height: 100%;
  } 
`
const mapStateToProps = (state) => ({
  isRegisterFormOpened: state.ui.isRegisterFormOpened
})

export default connect(mapStateToProps)(App)
