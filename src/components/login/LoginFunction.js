// import React from 'react';
import Axios from 'axios';

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
                alert("잘못 입력하셨습니다. 다시 확인하세요");
            }
            else if (error.request) {
                console.log(error.request);
            }
            else {
                // 오류를 발생시킨 요청을 설정하는 중에 문제가 발생했습니다.
                console.log('Error', error.message);
            }
            console.log(error.config);
        })

}

export default login;