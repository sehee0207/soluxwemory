import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    width: 50vw;
    height: 85vh;
    margin: 25px 0px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`
const Container = styled.div`
    height: 85vh;
    background-color: grey;
    justify-content: center;
    border-radius: 50px;
    box-shadow: 3px 5px 10px 2px rgb(150,150,150,0.2);
    background-color: #FFFFFF;
`

const StyledComname = styled.div`
    font-size: 1.8em;
    font-weight: 700;
    padding: 10px;
    margin: 0px 15px;
`

function Calender(props){
    const { comname } = props;

    return(
        <Wrapper>
            <StyledComname>{comname}</StyledComname>
            <Container/>
        </Wrapper>
        
    )
}

export default Calender;