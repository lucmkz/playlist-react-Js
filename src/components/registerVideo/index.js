import React from 'react'
import styled from 'styled-components'

const ResgisterVideo = () => (
    <Form>
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

export default ResgisterVideo