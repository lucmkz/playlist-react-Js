import React from 'react'
import styled from 'styled-components'
import Play from '../icon-play'
import { connect } from 'react-redux'
import { selectVideoSingle } from '../../redux-flow/reducers/video-single/action-creators'
import { openSingleVideo } from '../../redux-flow/reducers/ui/action-creators'

const VideosList = ({ videos, handleClick }) => (
    <Container>
        {Object.keys(videos).map((id) => (
            <Video key={id}>
                <VideoLink href="#" onClick={handleClick(id)}>
                <ButtonClose type="button" >&times;</ButtonClose>
                    <VideoThumb>
                        <PlayStyled />
                    </VideoThumb>
                </VideoLink>
                <VideoTitle>{videos[id].title}</VideoTitle>
            </Video>
        ))}
    </Container>
)

const ButtonClose = styled.button`

`

const PlayStyled = styled(Play)`
  width: 50px;
  fill: #999;
  height : 50px;
  transition: all .15s ease-in-out;
`

const Video = styled.section`
&:hover ${PlayStyled} {
    transform: scale(1.5);
}
`

const VideoLink = styled.a`
    color: inheri;
    
    & ${ButtonClose}{
        font-size: 20px;
        margin: 0;
        padding: 0;
        width: 30px;
        height: 30px;
        line-height: 1;
        position: relative;
        left: 5px;
        top: 35px;
    }
`


const Container = styled.div`
display: flex;
flex-wrap: wrap;
padding: 10px;

& ${Video}{
    flex: 1 1 300px;
    margin: 0 5px 5px;
}
`
//Informando ao componente que ele deve diminuir se for preciso,
//aumentar se for preciso (de acordo com a tela), e a base é 300 px

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
const mapStateToProps = (state) => ({
    videos: state.videos
})

const mapDispatchToProps = (dispatch) => ({
    handleClick: (id) => (e) => {
        e.preventDefault()
        dispatch(selectVideoSingle(id))
        dispatch(openSingleVideo())
    },

})


export default connect(mapStateToProps, mapDispatchToProps)(VideosList)
