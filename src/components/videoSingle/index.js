import React from 'react'
import styled from 'styled-components'

const VideoSingle = () => (
    <Container>
        <Iframe title='video' width='560' height='450' src='https://www.youtube.com/embed/LMWNx5xrZNw' frameBorder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowFullScreen />
        <Title>Titulo do video</Title>
    </Container>
)

const Container = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
`

const Iframe = styled.iframe`
    background: #000;
    width: 100%;
    margin-bottom: 10px;
    border-bottom: 1px solid #999;
`

const Title = styled.h2`
    padding 10px;
`

export default VideoSingle