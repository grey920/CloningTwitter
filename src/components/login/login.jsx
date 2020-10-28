import React from 'react';
import { Link } from 'react-router-dom';
import loginImg from '../../login.svg';
import LoginHeader from './LoginHeader';
//import './Home.scss';

export class Login extends React.Component {


    render() {

        return (
            <main>
                <div className="base-container">
                    <img src={loginImg} alt="" />
                    <h1> <span>트위티 로그인</span></h1>
                    <LoginHeader></LoginHeader>
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