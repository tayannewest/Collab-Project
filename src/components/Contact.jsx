import React from 'react'
import styled from "styled-components"


const Card = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    h1 {
        font-size: 25px;
    }
`
const Body = styled.section`
    height: 40vw;
    display: flex;
    align-content: center;
`

const Contact = () => {
    return (
        <>
            <Body>
                <Card>
                    <h1>Contact Page</h1>
                </Card>
            </Body>
        </>
    )
}

export default Contact
