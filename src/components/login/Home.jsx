import React from 'react';
import { BsPeople, BsChat, BsSearch } from "react-icons/bs";
import LoginHeader from './LoginHeader';
import ImageTag from './ImageTag';
import BlueButton from './BlueButton';
import './Home.scss';
import FooterList from './Footer';

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
                        <LoginHeader></LoginHeader>
                        <div className="contentdiv">
                            <ImageTag img="loginImg"></ImageTag>
                            <SubText sub="지금 전 세계에서 무슨 일이 일어나고 있는지 알아보세요" />
                            <SubText sub="오늘 트위터에 가입하세요" />
                            <BlueButton to="/register">가입하기</BlueButton>
                            <BlueButton to="/login">로그인</BlueButton>
                            <BlueButton to="/users">회원조회</BlueButton>
                        </div>
                    </div>
                </content>
                <FooterList />
            </main>
        );
    }
}