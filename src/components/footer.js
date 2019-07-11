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
`

export default mainFooter