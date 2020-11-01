import React, { useEffect, useState } from 'react';
import InputWithLabel from './InputWithLabel';
import BlueButton from './BlueButton';
import './loginHeader.scss';
import Axios from 'axios';



const LoginHeader = () => {

    return (
        <div className="content">
            <div className="form">
                <InputWithLabel label="useremail" name="email" type="email">휴대폰, 이메일, 사용자 아이디</InputWithLabel>
                <InputWithLabel label="password" name="password" type="password">비밀번호</InputWithLabel>
                <BlueButton to="/" onClick={login}>로그인</BlueButton>
            </div>
        </div>
    )
};



// 로그인 함수
const login = async () => {
    const loginTryUser = {};
    loginTryUser.email = document.getElementsByName("email")[0].value;
    loginTryUser.password = document.getElementsByName("password")[0].value;
    console.log(loginTryUser)

    const logUser = {
        email: loginTryUser.email,
        password: loginTryUser.password,
    }


    const loginEndPoint = "/api/users/login"
    await Axios.post(loginEndPoint, logUser)
        .then(user => {
            console.log(user);
            alert("로그인되었습니다");
            localStorage.setItem("user", JSON.stringify(user.data));
            return window.location.href = '/';

        })
        .catch(function (error) {
            if (error.response && error.response.status === 400) {
                // 요청이 이루어졌으며 서버가 2xx의 범위를 벗어나는 상태 코드로 응답했습니다.
                // console.log(error.response.data);
                // console.log(error.response.status);
                // console.log(error.response.headers);
                alert("잘못 입력하셨습니다. 다시 확인하세요");
            }
            else if (error.request) {
                // 요청이 이루어 졌으나 응답을 받지 못했습니다.
                // `error.request`는 브라우저의 XMLHttpRequest 인스턴스 또는
                // Node.js의 http.ClientRequest 인스턴스입니다.
                console.log(error.request);
            }
            else {
                // 오류를 발생시킨 요청을 설정하는 중에 문제가 발생했습니다.
                console.log('Error', error.message);
            }
            console.log(error.config);
        })

}

export default LoginHeader;