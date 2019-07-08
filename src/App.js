import React from 'react';
import styled, { createGlobalStyle } from 'styled-components'
import './App.css';
import VideosList from './components/videosList'
import VideoSingle from './components/videoSingle'

import 'milligram'

const App = () => (
  <Container>
  <GlobalStyle />
    <Header>
      <h1>Playlist</h1>
    </Header>

    <Main>
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
 height: ${headerHeight};
 background: #333;
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
