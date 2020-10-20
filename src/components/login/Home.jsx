import React from 'react';
import {Link, Router} from 'react-router-dom';
import loginImg from '../../login.svg';
import { BsPeople, BsChat, BsSearch } from "react-icons/bs";

import './Home.scss';


export class Home extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <main>
                <content className="maincontainer">
                    <div className="leftdiv">
                        <div className="contentdiv">
                            <div className="lefttext">
                               <BsSearch size="25"/>
                                <span>관심사를 팔로우하세요.</span>
                            </div>
                            <div className="lefttext">
                            <BsPeople size="25"/> 
                                <span>사람들이 무엇에 대해 이야기하고 있는지 알아보세요.</span>
                            </div>
                            <div className="lefttext">
                                <BsChat size="25"/>
                                <span>대화에 참여하세요.</span>
                            </div>
                        </div>
                    </div>

                    <div className="rightdiv">
                    <div className="contentdiv">
                    <div className="image">
                        <img src={loginImg} alt=""/>
                    </div>
                    <div className="texttoday">
                        <span>지금 전 세계에서 무슨 일이 일어나고 있는지 알아보세요</span>
                    </div>
                    <div className="textregister">
                        <span>오늘 트위터에 가입하세요</span>
                    </div>
                        <Link to="/register">
                            <button >가입하기</button>
                        </Link>
                    
                        <Link to="/login">
                            <button>로그인</button>
                        </Link>
                        <Link to="/users">
                            <button>회원조회</button>
                        </Link>
                        </div>  
                    </div>
                </content>
                <footer>
                    <a>소개</a>
                    <a>고객센터</a>
                    <a>이용약관</a>
                    <a>개인정보 처리방침</a>
                    <a>쿠키 정책</a>
                    <a>광고 정보</a>
                    <a>상태</a>
                    <a>채용</a>
                    <a>브랜드 리소스</a>
                    <a>광고</a>
                    <a>마케팅</a>
                    <a>비즈니스용 트위터</a>
                    <a>개발자</a>
                    <a>디렉터리</a>
                    <a>설정</a>
                    <div>
                        <span>© 2020 Twitty, Inc.</span>
                    </div>
                </footer>
            </main>
        );
    }
}