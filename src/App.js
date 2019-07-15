import './App.css';
import React, { PureComponent }from 'react';
import styled, { createGlobalStyle } from 'styled-components'
import VideosList from './components/videosList'
import VideoSingle from './components/videoSingle'
import RegisterVideio from './components/registerVideo'
import Header from './components/header'
import Footer from './components/footer'
import { connect } from 'react-redux'
import { headerHeight, footerHeight } from './utils/constants'
import { fetchVideos } from './redux-flow/reducers/videos/action-creators'

import 'milligram'

class App extends PureComponent {
componentDidMount() {
  this.props.fetchVideos()
}

  render () {
    const {isRegisterFormOpened, videoSingleId, videos, isSingleVideoOpened} = this.props

   return(
     <Container>
    <GlobalStyle />
      <Header/>
  
      <Main>
        {isRegisterFormOpened && <RegisterVideio />}
        {isSingleVideoOpened && <VideoSingle id={videoSingleId} title={videos[videoSingleId].title}/>}

        <VideosList />
      </Main>
  
      <Footer />
    </Container>
    )
   }
}

//
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
  isRegisterFormOpened: state.ui.isRegisterFormOpened,
  isSingleVideoOpened: state.ui.isSingleVideoOpened,
  videoSingleId: state.videoSingle,
  videos: state.videos
})

const mapDispatchToProps = (dispatch) => ({
  fetchVideos: () => dispatch(fetchVideos())
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
