
import React from 'react'
import styled from 'styled-components';
import { LoginForm } from './LoginForm';

const LayoutLogin = () => {
    return (
        <Container>
            <Login>
                <Block>
                    <Logo src="/Img/Logo.png"/>
                    <h1>Sign in</h1>
                    <LoginForm/>
                </Block>

                <Block>
                    <a href="#">Can't sign in?</a>
                    <a href="#">Create account</a>
                </Block>

            </Login>
            <ImagesSide>
                <Image src="/Img/1.jpg"/>
            </ImagesSide>
        </Container>
    )
}

export default LayoutLogin

const Container= styled.div`
    background-color:#cacaca;
    width:100vw;
    height:100vh;
    display:flex;

    @media screen and (max-width:800px){
        flex-direction:column-reverse;
        align-items:center;
    }
`

const Block= styled.div`
    padding:3em 0;
    display:flex;
    flex-direction:column;
    align-items:center;

    a{
        text-decoration:none;
        color:#9E9E9E;
        text-transform:uppercase;
        margin:.3em;
        cursor:pointer;
    }

    h1{
        font-size:1.4em
    }
`
//Form
const Login= styled.div`
    background-color:white;
    flex:4;
    height:100vh;
    width:50%;
    @media screen and (max-width:600px){
        max-width:24vw;
        margin:0;
        border-radius:1pt;
    }
    @media screen and (max-width:800px){
        max-width:45vw;
        margin:-25em 0 1em 0;
        border-radius:9pt;
        z-index:1;
    }
`
const Logo= styled.img`
    width:4em;
    height:4em;
`

//Images
const ImagesSide= styled.div`
    background-color:#424242;
    flex:8;

    @media screen and (max-width:600px){
        height:100vh;
    }
    @media screen and (max-width:800px){
        height:100vh
    }

`
const Image= styled.img`
    height:100vh;
    width:100%;
    object-fit:cover;

    @media screen and (max-width:600px){
        height:100vh;
        margin-top:10em;

    }
    @media screen and (max-width:800px){
        height:100vh;
        margin-top:10em

    }

`
