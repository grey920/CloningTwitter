import React, { useState } from 'react';
import InputWithLabel from './InputWithLabel';
import BlueButton from './BlueButton';
import './loginHeader.scss';
import Axios from 'axios';

// const [logUser, setLogUser] = useState({
//     email: '',
//     password: ''
// });
const LoginHeader = () => (
    <div className="content">
        <div className="form">
            <InputWithLabel label="useremail" name="email" type="email">휴대폰, 이메일, 사용자 아이디</InputWithLabel>
            <InputWithLabel label="password" name="password" type="password">비밀번호</InputWithLabel>
            <BlueButton to="/" onClick={() => login()}>로그인</BlueButton>
        </div>
    </div>
);

// 로그인 함수
const loginEndPoint = "/api/users/login"
const login = async () => {
    const loginTryUser = {};
    loginTryUser.email = document.getElementsByName("email")[0].value;
    loginTryUser.password = document.getElementsByName("password")[0].value;
    console.log(loginTryUser)

    const logUser = {
        email: loginTryUser.email,
        password: loginTryUser.password,
    }
    const { data: user } = await Axios.post(loginEndPoint, logUser);
    console.log(user);
    if (user) {
        alert("로그인되었습니다");
    }
}

export default LoginHeader;