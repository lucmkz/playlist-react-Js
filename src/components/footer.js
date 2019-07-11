import React from 'react'
import styled from 'styled-components'
import { footerHeight } from '../utils/constants'


const mainFooter = () => (
    <Footer>
        &copy; 2019
    </Footer>
)

const Footer = styled.footer`
height: ${footerHeight};
background: #333;
color: #fff;
display: flex;
align-items: center;
justify-content: center;
font-size: 20px;
`

export default mainFooter