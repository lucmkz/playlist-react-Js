import React from 'react';
import styled, { createGlobalStyle } from 'styled-components'
import './App.css';
import VideosList from './components/videosList'
import VideoSingle from './components/videoSingle'
import RegisterVideio from './components/registerVideo'

import 'milligram'

const App = () => (
  <Container>
  <GlobalStyle />
    <Header>
      <HeaderTitle>Playlist</HeaderTitle>
      <RegisterButton>Cadastrar</RegisterButton>
    </Header>

    <Main>
      <RegisterVideio />
      <VideoSingle />
      <VideosList />
    </Main>

    <Footer>
      &copy; 2019
    </Footer>
  </Container>

)

const headerHeight = '60px'
const footerHeight = '30px'

const Main = styled.main`
  min-height: calc(100% - ${footerHeight} - ${headerHeight});
`

const Header = styled.header`
  align-items: center;
  height: ${headerHeight};
  display: flex;
  justify-content: space-between;
  background: #333;
  padding: 0 10px;
 `

 const HeaderTitle = styled.h1`
  margin-bottom: 0px;
  color: #fff;
 `

 const RegisterButton = styled.button`
  margin-bottom: 0px;
 `

 const Footer = styled.footer`
 height: ${footerHeight};
 background: #333;
`
const Container = styled.div`
  height: 100%;
`

const GlobalStyle = createGlobalStyle`
  html, body, div[data-js="root"]{
    height: 100%;
  } 
`

export default App;
