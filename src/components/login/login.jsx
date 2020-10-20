import React from 'react';
import { Link } from 'react-router-dom';
import loginImg from '../../login.svg';

export class Login extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        const {} = this.props;

        return(
            <div className="base-container">
                    <img src={loginImg} alt=""/>
                <h1> <span>트위티 로그인</span></h1>
                <div className="content">
                <div className="form">
                    <div className="form-group">
                        <label htmlFor="useremail">
                        <div className="lable"><span>휴대폰, 이메일, 사용자 아이디</span></div>
                        <input type="email" name="email" placeholder=""/>
                        </label>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">비밀번호
                        <input type="password" name="password" placeholder=""/>
                        </label>
                    </div>
                    <button type="button" className="loginbtn">
                        로그인
                    </button>
                </div>
                </div>
                <div className="footer">
                    <p>비밀번호를 잊으셨나요?</p>
                    <Link to="/register"><p>트위티 가입</p></Link>
                    <Link to="/"><p>메인으로</p></Link>
                </div>
            </div>
        );
    }
}