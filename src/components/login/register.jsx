import React from 'react';
import ImageTag from './ImageTag';
import { Link } from 'react-router-dom';
import BlueButton from './BlueButton';
import './Home.scss';
import InputWithLabel from './InputWithLabel';
import BirthInput from './BirthInput';
import Axios from 'axios';

export class Register extends React.Component {
    constructor(props) {
        super(props);

        // this.state = {
        //     name: '',
        //     email: '',
        //     password: '',
        //     birthDay: '',
        // }
    }

    render() {
        //  const { name, email, password, birthDay } = this.state
        return (
            <main>
                <div className="base-container">
                    <div className="header">
                        <BlueButton to="/" name="goHome">메인으로</BlueButton>
                        <ImageTag img="loginImg"></ImageTag>
                        <BlueButton to="/login" name="goHome">로그인</BlueButton>
                    </div>
                    <div className="content">
                        <div className="descript">
                            <h1>계정을 생성하세요</h1>
                        </div>
                        <div className="form">
                            <InputWithLabel label="name" type="text" id="name" name="name" >이름</InputWithLabel>
                            <InputWithLabel label="email" type="email" id="email" name="email" >이메일</InputWithLabel>
                            <div className="register-by">
                                <Link to=""><p>대신 휴대폰 사용하기</p></Link>
                            </div>
                            <InputWithLabel label="password" type="password" id="password" name="password">비밀번호</InputWithLabel>
                            <div className="form-group-birth">
                                <div className="birth-title"><b>생년월일</b></div>
                                <div className="birth-des">이 정보는 공개적으로 표시되지 않습니다. 비즈니스, 반려동물 등 계정 주제에 상관 없이 나의 연령을 확인하세요.</div>
                                <BirthInput></BirthInput>
                            </div>
                            <BlueButton to="#" name="goHome" onClick={() => join()} >회원가입</BlueButton>
                        </div>
                    </div>
                </div>
            </main>
        );
    }

}

const join = () => {
    const newUser = {};
    const yy = document.getElementById('bdyear').value;
    let mm = document.getElementById('bdmonth').value;
    if (mm < 10) {
        mm = '0' + mm;
    }
    let dd = document.getElementById('bdday').value;
    if (dd < 10) {
        dd = '0' + dd;
    }

    newUser.email = document.getElementById('email').value;
    newUser.name = document.getElementById('name').value;
    newUser.password = document.getElementById('password').value;
    newUser.birthDay = `${yy}-${mm}-${dd}`;
    console.log(newUser)

    Axios({
        method: 'POST',
        // headers: {
        //     'Accept': 'application/json',
        //     'Content-Type': 'application/json;charset=UTF-8'
        // },
        url: '/api/users',
        data: {
            email: newUser.email,
            password: newUser.password,
            name: newUser.name,
            birthDay: newUser.birthDay,
        }
    })

}