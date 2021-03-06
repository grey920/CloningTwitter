import React from 'react';
import ImageTag from './ImageTag';
import { Link } from 'react-router-dom';
import BlueButton from './BlueButton';
import './Home.scss';
import InputWithLabel from './InputWithLabel';
import BirthInput from './BirthInput';
import Axios from 'axios';
import logout from './logout';

const loginedUser = JSON.parse(localStorage.getItem('user'));
let user = {}

if (loginedUser == null) {
    user = {
        name: '',
        email: '',
        password: '',
        birthDay: ''
    }
} else {
    user = {
        name: loginedUser.name,
        email: loginedUser.email,
        password: loginedUser.password,
        birthDay: loginedUser.birthDay
    }
}


export class Register extends React.Component {

    render() {
        return (
            <main>
                <div className="base-container">
                    <div className="header">
                        <BlueButton to="/" name="goHome">메인으로</BlueButton>
                        <ImageTag img="loginImg"></ImageTag>
                        {JSON.parse(localStorage.getItem('user')) == null ?
                            <BlueButton to="/login" name="goHome">로그인</BlueButton>
                            :
                            <BlueButton to="/" name="goHome" onClick={logout}>로그아웃</BlueButton>
                        }
                    </div>
                    <div className="content">
                        <div className="descript">
                            {JSON.parse(localStorage.getItem('user')) == null ?
                                <h1>계정을 생성하세요</h1>
                                :
                                <h1>계정을 수정하세요</h1>
                            }
                        </div>
                        <div className="form">
                            <InputWithLabel label="name" type="text" id="name" name="name" defaultValue={user.name}>이름</InputWithLabel>
                            {JSON.parse(localStorage.getItem('user')) == null ?
                                <>
                                    <InputWithLabel label="email" type="email" id="email" name="email" defaultValue={user.email}>이메일</InputWithLabel>
                                    <div className="register-by">
                                        <Link to=""><p>대신 휴대폰 사용하기</p></Link>
                                    </div>
                                </>
                                :
                                <></>
                            }

                            <InputWithLabel
                                label="password"
                                type="password"
                                id="password"
                                name="password"
                                defaultValue={user.password}
                                placeholder="8자리 이상 영어 대소문자, 특수문자, 숫자 혼용"
                            //onChange={chkPW}
                            >
                                비밀번호
                                </InputWithLabel>
                            <div className="form-group-birth">
                                <div className="birth-title"><b>생년월일</b></div>
                                <div className="birth-des">이 정보는 공개적으로 표시되지 않습니다. 비즈니스, 반려동물 등 계정 주제에 상관 없이 나의 연령을 확인하세요.</div>
                                <BirthInput birthDay={user.birthDay}></BirthInput>
                            </div>
                            {JSON.parse(localStorage.getItem('user')) == null ?
                                <BlueButton name="goHome" onClick={join} >회원가입</BlueButton>
                                :
                                <BlueButton to="" name="goHome" onClick={update} >수정</BlueButton>
                            }
                        </div>
                    </div>
                </div>
            </main>
        );
    }

}
// 비밀번호 정규식
const chkPW = (inputPassword) => {
    const passwordReg = /^(?=.*\\d)(?=.*[~`!@#$%\\\\^&*()-])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    // const passwordReg = /^(?=.* [a - zA - Z])(?=.* [!@#$%^*+=-]) (?=.* [0 - 9]).{ 8, 25 }$/;
    console.log(inputPassword);
    if (!passwordReg.test(inputPassword)) {
        console.log(passwordReg.test(inputPassword));
        alert('비밀번호는 8자 이상이어야 하며, 숫자/대문자/소문자/특수문자를 모두 포함해야 합니다');
        return false;

    }

}

// 가입 작업
const joinEndPoint = "/api/users";
const join = async () => {
    const user = {};
    const yy = document.getElementById('bdyear').value;
    let mm = document.getElementById('bdmonth').value;
    if (mm < 10) {
        mm = '0' + mm;
    }
    let dd = document.getElementById('bdday').value;
    if (dd < 10) {
        dd = '0' + dd;
    }

    user.email = document.getElementById('email').value;
    user.name = document.getElementById('name').value;
    //user.password = document.getElementById('password').value;
    user.password = document.getElementById('password').value;


    user.birthDay = `${yy}-${mm}-${dd}`;
    console.log(user)

    await Axios.post(joinEndPoint, user)
        .then(data => {
            console.log(data);
            alert("가입을 축하합니다.")
            window.location.href = '/';
        })
        .catch(err => {
            alert("양식을 다시 확인해주세요")
        });
}

// 수정 작업
const update = async () => {
    const updateUser = JSON.parse(localStorage.getItem('user'));
    const yy = document.getElementById('bdyear').value;
    let mm = document.getElementById('bdmonth').value;
    if (mm < 10) {
        mm = '0' + mm;
    }
    let dd = document.getElementById('bdday').value;
    if (dd < 10) {
        dd = '0' + dd;
    }

    // updateUser.email = document.getElementById('email').value;
    updateUser.name = document.getElementById('name').value;
    updateUser.password = document.getElementById('password').value;
    updateUser.birthDay = `${yy}-${mm}-${dd}`;
    console.log(updateUser)

    await Axios.put('/api/users', updateUser)
        .then(data => {
            console.log(data);
            localStorage.setItem('user', JSON.stringify(updateUser));
            alert('수정이 완료되었습니다.')
            window.location.href = '/';
        })
        .catch(err => console.log(err));
}

