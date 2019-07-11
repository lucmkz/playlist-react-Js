import React from 'react'
import styled from 'styled-components'
import { headerHeight } from '../utils/constants'
import { connect } from 'react-redux'
import { openRegisterVideo } from '../redux-flow/reducers/ui/action-creators'

const mainHeader = ({ onOpenRegisterVideo }) => (
    <Header>
        <HeaderTitle>Playlist</HeaderTitle>
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

 const RegisterButton = styled.button`
 margin-bottom: 0px;
`

const mapDispatchToProps = (dispatch) => ({
    onOpenRegisterVideo: () => dispatch(openRegisterVideo())
})

 export default connect(null, mapDispatchToProps)(mainHeader)