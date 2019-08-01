import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { registerVideo } from '../../redux-flow/reducers/videos/action-creators'
import { closeRegisterVideo } from '../../redux-flow/reducers/ui/action-creators'

const ResgisterVideo = ({ onSubmit, onCloseRegisterVideo }) => (
    <Form onSubmit={onSubmit}>
        <h2>Cadastrar Video</h2>

        <label htmlFor="id"> URL do vídeo </label>
        <input type="text" id="id" name="id"/>

        <label htmlFor="title"> Titulo do Video</label>
        <input type="text" id="title" name="title"/>

        <button type="submit">Cadastrar</button>
        <ButtonClose type="button" onClick={onCloseRegisterVideo}>&times;</ButtonClose>
    </Form>
)

const Form = styled.form`
    padding: 10px;
    position: relative;
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

const mapDispatchToProps = (dispatch) => ({
    onSubmit: async (e) => {
        //e.target captura informação do elemento que estamos interagindo
        const value = e.target.id.value
        const id = value.match(/=(.{11,11})/).toString().slice(1, 12)
        console.log(value)
        const title = e.target.title.value
        e.preventDefault()
        e.persist()

       await dispatch(registerVideo({ id, title }))
       e.target.reset()
       e.target[0].focus()
    },

    onCloseRegisterVideo: () => dispatch(closeRegisterVideo())
})

export default connect(null, mapDispatchToProps)(ResgisterVideo)