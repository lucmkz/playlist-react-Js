import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { closeSingleVideo } from '../../redux-flow/reducers/ui/action-creators'

const VideoSingle = ({ id, title, onCloseSingleVideo }) => (
    <Container>
        <Iframe title='video' width='560' height='450' src={`https://www.youtube.com/embed/${id}`} frameBorder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowFullScreen />
        <Title>{title}</Title>
        <ButtonClose type="button" onClick={onCloseSingleVideo} >&times;</ButtonClose>
    </Container>
)

const Container = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    position: relative;
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

const ButtonClose = styled.button`
    font-size: 20px;
    margin: 0;
    padding: 0;
    width: 30px;
    height: 30px;
    line-height: 1;
    position: absolute;
    right: 10px;
    top: 10px;
`

const mapDispatchToProps = (disptatch) => ({
    onCloseSingleVideo: () => disptatch(closeSingleVideo())
})

const mapStateToProps = (state) => ({
    
})


export default connect(mapStateToProps, mapDispatchToProps)(VideoSingle)