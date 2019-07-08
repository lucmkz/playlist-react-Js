import React from 'react';
import styled, { createGlobalStyle } from 'styled-components'
import './App.css';
import Play from './components/icon-play'

import 'milligram'

const App = () => (
  <Container>
  <GlobalStyle />
    <Header>
      <h1>Playlist</h1>
    </Header>

    <Main>
      <VideosList>
        {Array.from ({ length:10 }).map((item, index) => (
          <Video key={index}>
            <VideoThumb>
              <PlayStyled />
            </VideoThumb>
            <VideoTitle>Titulo Video</VideoTitle>
          </Video>
        ))}
      </VideosList>
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

const VideoThumb = styled.div`
 border: 1px solid #999;
 display: flex;
 height: 150px;
 justify-content: center;
 align-items: center;
`

const VideoTitle = styled.h2`
  font-size: 18px;
`

const VideosList = styled.div`
  display: flex;
  flex-wrap: wrap;
`
//Informando ao componente que ele deve diminuir se for preciso,
//aumentar se for preciso (de acordo com a tela), e a base é 300 px
const Video = styled.section`
    flex: 1 1 300px;
    margin: 0 5px 5px;
`

const PlayStyled = styled (Play)`
  width: 50px;
  fill: #999;
  height : 50px;
`

const GlobalStyle = createGlobalStyle`
  html, body, div[data-js="root"]{
    height: 100%;
  } 
`

export default App;
