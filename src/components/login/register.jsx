import React from 'react';
import ImageTag from './ImageTag';
import { Link } from 'react-router-dom';
import BlueButton from './BlueButton';
import './Home.scss';
import InputWithLabel from './InputWithLabel';
import BirthInput from './BirthInput';

export class Register extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
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
                            <InputWithLabel label="username" type="text" name="username">이름</InputWithLabel>
                            <InputWithLabel label="email" type="email" name="email">이메일</InputWithLabel>
                            <div className="register-by">
                                <Link to=""><p>대신 휴대폰 사용하기</p></Link>
                            </div>
                            <InputWithLabel label="password" type="password" name="password">비밀번호</InputWithLabel>
                            <div className="form-group-birth">
                                <div className="birth-title"><b>생년월일</b></div>
                                <div className="birth-des">이 정보는 공개적으로 표시되지 않습니다. 비즈니스, 반려동물 등 계정 주제에 상관 없이 나의 연령을 확인하세요.</div>
                                <BirthInput></BirthInput>
                            </div>
                            <BlueButton to="#" name="goHome">회원가입</BlueButton>
                        </div>
                    </div>
                </div>
            </main>
        );
    }
}

