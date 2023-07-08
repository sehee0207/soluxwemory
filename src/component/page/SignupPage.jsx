import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Input from "../ui/Input";
import TopBar from "../ui/TopBar";
import Button from "../ui/Button";

const Wrapper = styled.div`
    height: 92vh;
`

const Container = styled.div`
    padding-top: 5%;
    text-align: center;
`

const Form = styled.form`

`

const TitleText = styled.p`
    font-size: 40px;
    padding: 0px 15px;
    margin-block-start: 10px;
    margin-block-end: 0.5em;
    margin-inline-start: 10px;
    margin-inline-end: 0px;
    font-weight: 800;
    margin-bottom: 70px;
`

function SignupPage(props){
    const {} = props;
    const navigate = useNavigate();
    return(
        <Wrapper>
            <TopBar />
            <Container>
                <div class="title">추억 저장 서비스 Wemory</div>
                <TitleText>회원가입</TitleText>
                <Form method="post" action="./login">
                    <div class="inputform">
                        <div class="text">아이디</div>
                        <div class="input"><Input type="text" name="id" /><br /></div></div>
                    <div class="inputform">
                        <div class="text">비밀번호</div>
                        <div class="input"><Input type="password" name="pw1" /><br /></div></div>
                    <div class="inputform">
                        <div class="text">비밀번호<br />확인</div>
                        <div class="input"><Input type="password" name="pw2" /><br /></div></div>
                    <div class="inputform">
                        <div class="text">이메일</div>
                        <div class="input"><Input type="password" name="pw1" /><br /></div></div>
                </Form>
                <div class="button-container">
                <div class="button">
                <Button
                    title="로그인"
                    onClick={() => {
                        navigate("/login");
                    }}/></div>
                <div class="button">
                <Button
                    title="생성하기"
                    onClick={() => {
                        navigate("/");
                    }}/></div></div>
            </Container>
        </Wrapper>
    )
}

export default SignupPage;