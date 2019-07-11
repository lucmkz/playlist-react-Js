import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { registerVideo } from '../../redux-flow/reducers/videos/action-creators'

const ResgisterVideo = ({ onSubmit }) => (
    <Form onSubmit={onSubmit}>
        <h2>Cadastrar Video</h2>

        <label htmlFor="id"> Id do Video</label>
        <input type="text" id="id" name="id"/>

        <label htmlFor="title"> Titulo do Video</label>
        <input type="text" id="title" name="title"/>

        <button type="submit">Cadastrar</button>
    </Form>
)

const Form = styled.form`
    padding: 10px;
`

const mapDispatchToProps = (dispatch) => ({
    onSubmit: async (e) => {
        //e.target captura informação do elemento que eamos interagindo
        const id = e.target.id.value
        const title = e.target.title.value
        e.preventDefault()
        e.persist()

       await dispatch(registerVideo({ id, title }))
       e.target.reset()
       e.target[0].focus()
    } 
})

export default connect(null, mapDispatchToProps)(ResgisterVideo)