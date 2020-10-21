import React from 'react';
import { Link } from 'react-router-dom';
import loginImg from '../../login.svg';
import InputWithLabel from './InputWithLabel';
import BlueButton from './BlueButton';
import './Home.scss';

export class Login extends React.Component{
    constructor(props){
        super(props);
    }

    render(){

        return(
            <main>
            <div className="base-container">
                    <img src={loginImg} alt=""/>
                <h1> <span>트위티 로그인</span></h1>
                <div className="content">
                <div className="form">
                    <InputWithLabel label="useremail" name="email" type="email">휴대폰, 이메일, 사용자 아이디</InputWithLabel>
                    <InputWithLabel label="password" name="password" type="password">비밀번호</InputWithLabel>
                    <BlueButton to="#">로그인</BlueButton>
                </div>
                </div>
                <div className="footer">
                    <p>비밀번호를 잊으셨나요?</p>
                    <Link to="/register"><p>트위티 가입</p></Link>
                    <Link to="/"><p>메인으로</p></Link>
                </div>
            </div>
            </main>
        );
    }
}