import React from 'react'
import { useModal } from 'react-hooks-use-modal'
import styled from "styled-components"


const Intro = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    grid-row: 1;

    h1 {
        font-size: 25px;
    }
`

const Card = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    grid-row: 2;

    h1 {
        font-size: 25px;
    }
`

const Body = styled.section`
display: grid;
grid-template-columns: repeat(3, 1fr);
grid-auto-rows: minmax(100px, auto);
grid-gap: 30px;
&::-webkit-scrollbar{
    display: none;
};
`

const Contact = () => {

    const [Modal1, open, close] = useModal("root", {
        preventScroll: true,
        closeOnOverlayClick: false
    })

    const [Modal2, open2, close2] = useModal("root", {
        preventScroll: true,
        closeOnOverlayClick: false
    })

    const [Modal3, open3, close3] = useModal("root", {
        preventScroll: true,
        closeOnOverlayClick: false
    })

    return (
        <>
            <Body>
                <Intro>
                    <h1>Contact Page</h1>
                </Intro>
                    <Card>
                        <button onClick={open}><h1>Nate</h1></button>
                        <Modal1>
                        <button><a href="https://coffeegremlin.com/" target="_blank" rel="noreferrer">Portfolio</a></button>
                        <button><a href="https://github.com/coffeegremlin" target="_blank" rel="noreferrer">GitHub</a></button>
                        <button><a href="https://www.linkedin.com/in/nathanmausert/" target="_blank" rel="noreferrer">LinkedIn</a></button>
                        <button>Email</button> 
                        {/* natemausert@gmail.com */}
                        <button onClick={close}>CLOSE</button>
                        </Modal1>
                    </Card>
                    <Card>
                        <button onClick={open2}><h1>Jeremy</h1></button>
                        <Modal2>
                        <button><a href="https://www.darkmeowproductions.com/" target="_blank" rel="noreferrer">Portfolio</a></button>
                        <button><a href="https://github.com/Darkskittlz" target="_blank" rel="noreferrer">GitHub</a></button>
                        <button><a href="https://www.linkedin.com/in/jeremydev/" target="_blank" rel="noreferrer">LinkedIn</a></button>
                        <button>Email</button>
                        {/* Darkskiiittles@gmail.com */}
                        <button onClick={close2}>CLOSE</button>
                        </Modal2>
                    </Card>
                    <Card>
                        <button onClick={open3}><h1>Tay</h1></button>
                        <Modal3>
                        <button><a href="https://taywest.dev/" target="_blank" rel="noreferrer">Portfolio</a></button>
                        <button><a href="https://github.com/tayannewest" target="_blank" rel="noreferrer">GitHub</a></button>
                        <button><a href="https://www.linkedin.com/in/tayannewest/" target="_blank" rel="noreferrer">LinkedIn</a></button>
                        <button>Email</button>
                        <button onClick={close3}>CLOSE</button>
                        </Modal3>
                    </Card>
            </Body>
        </>
    )
}

export default Contact
