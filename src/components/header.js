import React from 'react'
import styled from 'styled-components'
import Github from '../components/github'
import BackSite from '../components/backSite'
import { headerHeight } from '../utils/constants'
import { connect } from 'react-redux'
import { openRegisterVideo } from '../redux-flow/reducers/ui/action-creators'

const mainHeader = ({ onOpenRegisterVideo }) => (
    <Header>
        <HeaderTitle>Playlist</HeaderTitle>
        <a href="http://lucaswebs.com/">
            <BackSiteStyled />
        </a>
        <a href="https://github.com/Moonkzin/playlist-react-Js">
            <GithubStyled />
        </a>
        <RegisterButton onClick={onOpenRegisterVideo}>Cadastrar</RegisterButton>
    </Header>
)

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

const GithubStyled = styled(Github)`
    transition: all .15s ease-in-out;
    width: 30px;
    height: 30px;
    fill: #cbcbcb;
    &:hover {
        fill: #ffffff;
        transform: scale(1.5);
    }
    `

const BackSiteStyled = styled(BackSite)`
    transition: all .15s ease-in-out;
    width: 30px;
    height: 30px;
    fill: #cbcbcb;
    &:hover {
        fill: #ffffff;
        transform: scale(1.5);
    }

`

const RegisterButton = styled.button`
 margin-bottom: 0px;
`

const mapDispatchToProps = (dispatch) => ({
    onOpenRegisterVideo: () => dispatch(openRegisterVideo())
})

export default connect(null, mapDispatchToProps)(mainHeader)