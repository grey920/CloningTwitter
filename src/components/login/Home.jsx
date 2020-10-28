import React from 'react';
import { BsPeople, BsChat, BsSearch } from "react-icons/bs";
import ImageTag from './ImageTag';
import BlueButton from './BlueButton';
import InputWithLabel from './InputWithLabel';
import './inputWithLabel.scss';
import './Home.scss';
import Axios from 'axios';
import FooterList from './Footer';
import logout from './logout';

class SubText extends React.Component {
    render() {
        return (
            <span>{this.props.sub}</span>
        );
    }
}

const NMsg = (props) => {

    return (
        <div className={props.cls}>
            <props.type size={props.size} color={props.color} />
            <SubText sub={props.sub} />
        </div>
    );
}

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
            //  console.log(error.config);
        })
}

export class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <main>
                <content className="maincontainer">
                    <div className="leftdiv">
                        <div className="contentdiv">
                            <NMsg cls="lefttext" size='25' color='#fff' sub='관심사를 팔로우하세요.' type={BsSearch} />
                            <NMsg cls="lefttext" size='25' color='#fff' sub='사람들이 무엇에 대해 이야기하고 있는지 알아보세요.' type={BsPeople} />
                            <NMsg cls="lefttext" size='25' color='#fff' sub='대화에 참여하세요.' type={BsChat} />
                        </div>
                    </div>

                    <div className="rightdiv">
                        <div className="header">
                            <div className="content">
                                {localStorage.getItem('user') != null ?
                                    <div className="loginSuccessHeader">
                                        <h3>{JSON.parse(localStorage.getItem('user')).name} 님 세계를 만나보세요:)</h3>
                                        <BlueButton name="logoutBtn" to="#" onClick={logout}>로그아웃</BlueButton>
                                    </div>
                                    :
                                    <div className="form">
                                        <InputWithLabel label="useremail" name="email" type="email">휴대폰, 이메일, 사용자 아이디</InputWithLabel>
                                        <InputWithLabel label="password" name="password" type="password">비밀번호</InputWithLabel>
                                        <BlueButton name="mainBtn" to="#" onClick={() => login()}>로그인</BlueButton>
                                    </div>
                                }
                            </div>
                        </div>
                        <div className="contentdiv">
                            <ImageTag img="loginImg"></ImageTag>
                            <SubText sub="지금 전 세계에서 무슨 일이 일어나고 있는지 알아보세요" />
                            {localStorage.getItem('user') != null ?
                                <BlueButton name="loginUserSerch" to="/users">회원조회</BlueButton>
                                :
                                <>
                                    <SubText sub="오늘 트위티에 가입하세요" />
                                    <BlueButton to="/register">가입하기</BlueButton>
                                    <BlueButton name="whiteBtn" to="/login">로그인</BlueButton>
                                    <BlueButton to="/users">회원조회</BlueButton>
                                </>
                            }

                        </div>
                    </div>
                </content>
                <FooterList />
            </main>
        );
    }
}