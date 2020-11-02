목차   
[Intro](#intro)   
[Spec](#spec)   
[Contents](#contents)   
[Start](#start)   
[메인 페이지](#메인-페이지)   
[회원가입 페이지](#회원가입-페이지)   
[로그인 페이지](#로그인-페이지)   
[회원 조회 페이지](#회원-조회-페이지)   

# twitty- 회원관리

# Intro

## spec

- SpringBoot 2.3.4
- React
- Junit5
- postgreSQL
- JPA

---

# REACT

## Contents

```jsx
TWITTER-CLONE/
├── node_modules/
│   
├── public/
│         
├── src/
│   └──App.jsx
│   └──App.scss
│   └──index.css
│   └──index.js
│   └──serviceWorker.js
│   └──setupTests.js
│   └──components/
│      └── board/
│          └── index.js
│          └── Users.jsx
│          └── users.scss
│          └── index.js
│      └── Button/
│      └── Card/
│      └── Grid/
│      └── login/
│          └── backgroundtw.svg
│          └── BirthInput.js
│          └── borthInput.scss
│          └── BlueButton.jsx
│          └── Footer.jsx
│          └── Home.jsx
│          └── Home.scss
│          └── ImageTag.jsx
│          └── index.jsx
│          └── InputWithLabel.jsx
│          └── inputWithLAbel.scss
│          └── LeftText.jsx
│          └── login.jsx
│          └── LoginHeader.jsx
│          └── loginHeader.scss
│          └── logout.js
│          └── register.jsx
│          └── style.scss
│      └── material-dashboard-react.js
│
├── package-lock.json
├── package.json
├── README.md
├── yarn.lock
└── .gitignore
```

> SPA (single page application) 을 왜 쓸까..?

- 기본적으로 웹페이지는 내부에서 URL을 요청할 때 페이지 전체를 새로고침한다. 
→ 화면의 모든 부분을 다시 로드해야 하기 때문에 로딩시간이 지연된다!! 우우!!
- SPA는 변화가 없는 부분은 그대로 두고 변경되는 부분의 데이터만 가져와서 수정한다 😉
- 리액트로 SPA를 구현한다는 것은 즉 해당 요청에 맞는 컴포넌트만 라우팅하여 부분적으로 렌더링한다는 뜻이다.  → 요청에 맞는 컴포넌트를 매칭시키려면?? → react-router-dom을 사용

## Start

```jsx
$ yarn start
```

실행했을 때 첫 화면은 Home화면이다

![home.jpg](/README/home.jpg)

Home

## 라우트 설정

- 프로젝트 생성 후 디렉토리로 이동해서 라우터를 설치한다.

    ```jsx
    $ yarn add react-router-dom
    ```

    - react-router-dom: 웹브라우저에서 사용되는 리액트 라우터이다.

- 필요한 라우트는 총 4개로, 1) 메인으로 보여줄 **Home화면**, 2) **로그인 페이지**, 3) **회원가입 페이지**, 4) **회원정보 조회 페이지**이다.

라우트에 맞춰서 컴포넌트를 보여주기 위해 App에 경로와 컴포넌트를 매칭하도록 작성한다.

`src/App.jsx` `h1`

```jsx
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.scss';
import { Login, Register, Home } from './components/login';
import Users from './components/board/Users'

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Route exact path="/" component={Home} />
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
                <Route path="/users" component={Users} />
            </BrowserRouter>
        </div>
    );
}

export default App;
```

- `exact path="/"` - **exact**를 붙이면 주어진 경로와 정확히 맞아 떨어져야만 설정한 컴포넌트인 Home을 보여준다. exact를 붙이지 않으면 /가 들어간 다른 경로들을 들어가도 Home보여진다.
- `<BrowserRouter>`
    - react-router-dom의 라우터는 <BrowserRouter>와 <HashRouter>가 있다. 이 중 <BrowserRouter>는 HTML5의 historyAPI를 활용해서 UI를 업데이트 한다.  반면, <HashRouter>는 URL의 hash를 활용한 라우터로 정적인 페이지에 적합하다.
    - 보통 request와 response로 이루어지는 **동적인 페이지**를 제작하기 때문에 <BrowserRouter>가 보편적으로 쓰인다.
- `<Route>`
    - 요청받은 pathname에 해당하는 컴포넌트를 렌더링한다.
- <Switch>
    - path의 충돌이 일어나지 않게 <Route>들을 관리한다.
    - <Switch> 내부에 <Route>들을 넣으면 요청에 의해 매칭되는 <Route>들이 다수 있을때 제일 처음 매칭되는 <Route>만 선별하여 실행하기 때문에 충돌오류를 방지해주고, <Route>간에 이동시 발생할 수 있는 충돌도 막아준다.
    - path와 매칭되는 <Route>가 없을 땐 맨 밑에 default <Route>(path 속성을 명시하지 않은 <Route>)의 실행이 보장됩니다.
- <Link>
    - 링크를 생성

---

## 메인 페이지

![twitty-%20%E1%84%92%E1%85%AC%E1%84%8B%E1%85%AF%E1%86%AB%E1%84%80%E1%85%AA%E1%86%AB%E1%84%85%E1%85%B5%203d5c344a3a2e4434970d0e377243fd4c/home%201.jpg](twitty-%20%E1%84%92%E1%85%AC%E1%84%8B%E1%85%AF%E1%86%AB%E1%84%80%E1%85%AA%E1%86%AB%E1%84%85%E1%85%B5%203d5c344a3a2e4434970d0e377243fd4c/home%201.jpg)

### 전체 코드

`src/login/Home.jsx`

```jsx
import React from 'react';
import { BsPeople, BsChat, BsSearch } from "react-icons/bs";
import ImageTag from './ImageTag';
import BlueButton from './BlueButton';
import InputWithLabel from './InputWithLabel';
import './inputWithLabel.scss';
import './Home.scss';
import FooterList from './Footer';
import login from './LoginFunction';
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
                                        <BlueButton name="mainBtn" to="#" onClick={login}>로그인</BlueButton>
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
```

### 주요 기능 요약

1. 회원가입 / 로그인 / 회원조회 페이지 모아두기
    - 공통으로 사용하는 BlueButton이라는 버튼 컴포넌트를 만들고 to 라는 속성으로 path를 이동하도록 연결한다
2. 로그인 헤더
    - 로그인 기능, 로그인 폼을 컴포넌트화 한다.
    - 세션처리
3. 전체적인 화면 구성 - 좌/우/푸터
    - <main>
        - <content>
            - <div class="leftdiv"> - 배경이미지 설정 , 아이콘과 메시지
            - <div class="rightdiv"> - 로그인헤더, 아이콘, 인삿말, 각 페이지별 링크
        - <footer>
4. 리액트 아이콘 - porps로 넘겨서 태그처럼 사용하기 

### 1. 회원가입 / 로그인 / 회원조회 페이지 링크

```jsx
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
```

- BlueButton 컴포넌트의 props로 name과 to를 받는다.
    - to - Link to 로 연결할 컴포넌트
    - name - 버튼의 클래스 네임. 버튼의 스타일을 구분하기 위해 사용.
    - onClick - 버튼에 클릭이벤트로

```jsx
import React from 'react';
import { Link } from 'react-router-dom';

const BlueButton = ({ to, name, children, onClick }) => (
    <div className="btnWrapper">
        <Link to={to}>
            <button className={name} onClick={onClick}>{children}</button>
        </Link>
    </div>
);

export default BlueButton;
```

![twitty-%20%E1%84%92%E1%85%AC%E1%84%8B%E1%85%AF%E1%86%AB%E1%84%80%E1%85%AA%E1%86%AB%E1%84%85%E1%85%B5%203d5c344a3a2e4434970d0e377243fd4c.jpg](twitty-%20%E1%84%92%E1%85%AC%E1%84%8B%E1%85%AF%E1%86%AB%E1%84%80%E1%85%AA%E1%86%AB%E1%84%85%E1%85%B5%203d5c344a3a2e4434970d0e377243fd4c.jpg)

기본(비회원) 메인 링크

![twitty-%20%E1%84%92%E1%85%AC%E1%84%8B%E1%85%AF%E1%86%AB%E1%84%80%E1%85%AA%E1%86%AB%E1%84%85%E1%85%B5%203d5c344a3a2e4434970d0e377243fd4c%201.jpg](twitty-%20%E1%84%92%E1%85%AC%E1%84%8B%E1%85%AF%E1%86%AB%E1%84%80%E1%85%AA%E1%86%AB%E1%84%85%E1%85%B5%203d5c344a3a2e4434970d0e377243fd4c%201.jpg)

로그인 후 메인 링크

### 2. 로그인 헤더

`login.jsx` - Home에서 로그인 버튼을 눌렀을 때 나오는 페이지

```jsx
import React from 'react';
import { Link } from 'react-router-dom';
import loginImg from '../../login.svg';
import LoginHeader from './LoginHeader';
//import './Home.scss';

export class Login extends React.Component {

    render() {

        return (
            <main>
                <div className="base-container">
                    <img src={loginImg} alt="" />
                    <h1> <span>트위티 로그인</span></h1>
                    <LoginHeader></LoginHeader>
                    <div className="footer">
                        <p>비밀번호를 잊으셨나요?</p>
                        <Link to="/register"><p>트위티 가입</p></Link>
                        <Link to="/"><p>메인으로</p></Link>
                    </div>
                </div>
            </main>
        );
    }
}
```

`LoginHeader.js` - 로그인 폼을 구성하는 컴포넌트

```jsx
import React, { useEffect, useState } from 'react';
import InputWithLabel from './InputWithLabel';
import BlueButton from './BlueButton';
import './loginHeader.scss';
import login from './LoginFunction';

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

export default LoginHeader;
```

`LoginFunction.js` - 실제 로그인 기능 구현 코드

```jsx
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
```

- 로그인을 하기 위해 axios를 이용하여 POST 메소드로 url을 보낸다
- 성공적으로 로그인이 되면 alert 창으로 로그인 확인 메시지를 보낸 후 **localStorage**에 setItem으로 로그인된 유저의 데이터를 저장한다.

### 3. 전체적인 화면 구성

- <main>
    - <content>
        - <div class="leftdiv"> - 배경이미지 설정 , 아이콘과 메시지
        - <div class="rightdiv"> - 로그인헤더, 아이콘, 인삿말, 각 페이지별 링크
    - <footer>

### 4. 리액트 아이콘 사용하기

![twitty-%20%E1%84%92%E1%85%AC%E1%84%8B%E1%85%AF%E1%86%AB%E1%84%80%E1%85%AA%E1%86%AB%E1%84%85%E1%85%B5%203d5c344a3a2e4434970d0e377243fd4c%202.jpg](twitty-%20%E1%84%92%E1%85%AC%E1%84%8B%E1%85%AF%E1%86%AB%E1%84%80%E1%85%AA%E1%86%AB%E1%84%85%E1%85%B5%203d5c344a3a2e4434970d0e377243fd4c%202.jpg)

- 아이콘은 React Icons의 [Bootstrap Icons](https://react-icons.github.io/react-icons/icons?name=bs)를 사용
- 아이콘 + 메시지 형태가 반복 → 컴포넌트화 한다

**여기서 고민!!**

- 아이콘을 사용할 때 태그네임(?) 부분에 해당 아이콘 이름을 넣어야 한다. → **props**로 넘긴걸 중괄호 없이 바로 태그 부분에서 받을 수 있나?? ⇒ 있네! type이란 이름으로 넘겨보았다

`Home.jsx`

```jsx
import { BsPeople, BsChat, BsSearch } from "react-icons/bs";

... 중략

<div className="contentdiv">
    <NMsg cls="lefttext" size='25' color='#fff' sub='관심사를 팔로우하세요.' type={BsSearch} />
    <NMsg cls="lefttext" size='25' color='#fff' sub='사람들이 무엇에 대해 이야기하고 있는지 알아보세요.' type={BsPeople} />
    <NMsg cls="lefttext" size='25' color='#fff' sub='대화에 참여하세요.' type={BsChat} />
</div>
```

```jsx
const NMsg = (props) => {

    return (
        <div className={props.cls}>
            <props.type size={props.size} color={props.color} />
            <SubText sub={props.sub} />
        </div>
    );
}
```

- 태그 부분에 props.type으로 넣었더니 잘 나온다! :)

---

## 회원가입 페이지

![twitty-%20%E1%84%92%E1%85%AC%E1%84%8B%E1%85%AF%E1%86%AB%E1%84%80%E1%85%AA%E1%86%AB%E1%84%85%E1%85%B5%203d5c344a3a2e4434970d0e377243fd4c/register.jpg](twitty-%20%E1%84%92%E1%85%AC%E1%84%8B%E1%85%AF%E1%86%AB%E1%84%80%E1%85%AA%E1%86%AB%E1%84%85%E1%85%B5%203d5c344a3a2e4434970d0e377243fd4c/register.jpg)

회원가입 폼

![twitty-%20%E1%84%92%E1%85%AC%E1%84%8B%E1%85%AF%E1%86%AB%E1%84%80%E1%85%AA%E1%86%AB%E1%84%85%E1%85%B5%203d5c344a3a2e4434970d0e377243fd4c%203.jpg](twitty-%20%E1%84%92%E1%85%AC%E1%84%8B%E1%85%AF%E1%86%AB%E1%84%80%E1%85%AA%E1%86%AB%E1%84%85%E1%85%B5%203d5c344a3a2e4434970d0e377243fd4c%203.jpg)

회원정보 수정 폼

### 주요 기능 요약

1. 로그인 여부에 따라 화면 변경
    - 로그인 o → 수정폼
    - 로그인 x  → 가입폼
2. 인풋 박스에 focus되면 파란색으로 보더 색상 변경

### 1. 로그인 여부에 따라 화면 변경

1.1. 먼저 로컬 스토리지에 user가 저장되어 있나 확인한다. user가 없으면 인풋에 내용을 공백으로 처리(가입폼)하고, user가 있으면 user의 data를 채워넣는다 (수정폼)

`src/login/register.jsx`

```jsx
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
```

1.2. user를 null체크해서 폼을 다르게 렌더링한다. 

```jsx
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
```

1.3.1. 가입 작업 - post 메소드

```jsx
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
```

1.3.2. 수정 작업 - put 메소드

```jsx
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
```

*스크립트단에서 비밀번호 유효성 검증 작업을 추가할 예정

### 2. 인풋 박스에 focus되면 파란색으로 보더 색상 변경

![twitty-%20%E1%84%92%E1%85%AC%E1%84%8B%E1%85%AF%E1%86%AB%E1%84%80%E1%85%AA%E1%86%AB%E1%84%85%E1%85%B5%203d5c344a3a2e4434970d0e377243fd4c/blueborder.jpg](twitty-%20%E1%84%92%E1%85%AC%E1%84%8B%E1%85%AF%E1%86%AB%E1%84%80%E1%85%AA%E1%86%AB%E1%84%85%E1%85%B5%203d5c344a3a2e4434970d0e377243fd4c/blueborder.jpg)

- focus가 되는 부분(input)과 border-bottom(label)이 적용되는 부분이 다르다 → **focus-within** 사용

`src/login/InputWithLabel.jsx`

![twitty-%20%E1%84%92%E1%85%AC%E1%84%8B%E1%85%AF%E1%86%AB%E1%84%80%E1%85%AA%E1%86%AB%E1%84%85%E1%85%B5%203d5c344a3a2e4434970d0e377243fd4c/blueborderscss.jpg](twitty-%20%E1%84%92%E1%85%AC%E1%84%8B%E1%85%AF%E1%86%AB%E1%84%80%E1%85%AA%E1%86%AB%E1%84%85%E1%85%B5%203d5c344a3a2e4434970d0e377243fd4c/blueborderscss.jpg)

- focus-within : 부모 요소에 사용하면 내부 자식 요소에 포커스 된 경우까지 스타일을 쉽게 적용된다

---

## 로그인 페이지

![twitty-%20%E1%84%92%E1%85%AC%E1%84%8B%E1%85%AF%E1%86%AB%E1%84%80%E1%85%AA%E1%86%AB%E1%84%85%E1%85%B5%203d5c344a3a2e4434970d0e377243fd4c/login.jpg](twitty-%20%E1%84%92%E1%85%AC%E1%84%8B%E1%85%AF%E1%86%AB%E1%84%80%E1%85%AA%E1%86%AB%E1%84%85%E1%85%B5%203d5c344a3a2e4434970d0e377243fd4c/login.jpg)

- LoginHeader컴포넌트를 재사용한다.

---

## 회원 조회 페이지

![twitty-%20%E1%84%92%E1%85%AC%E1%84%8B%E1%85%AF%E1%86%AB%E1%84%80%E1%85%AA%E1%86%AB%E1%84%85%E1%85%B5%203d5c344a3a2e4434970d0e377243fd4c%204.jpg](twitty-%20%E1%84%92%E1%85%AC%E1%84%8B%E1%85%AF%E1%86%AB%E1%84%80%E1%85%AA%E1%86%AB%E1%84%85%E1%85%B5%203d5c344a3a2e4434970d0e377243fd4c%204.jpg)

전체 회원 조회

![twitty-%20%E1%84%92%E1%85%AC%E1%84%8B%E1%85%AF%E1%86%AB%E1%84%80%E1%85%AA%E1%86%AB%E1%84%85%E1%85%B5%203d5c344a3a2e4434970d0e377243fd4c%205.jpg](twitty-%20%E1%84%92%E1%85%AC%E1%84%8B%E1%85%AF%E1%86%AB%E1%84%80%E1%85%AA%E1%86%AB%E1%84%85%E1%85%B5%203d5c344a3a2e4434970d0e377243fd4c%205.jpg)

본인 정보 조회 

### 주요 기능 요약

1. 세션이 없을 시(로그인x) 전체 회원 목록 조회
2. 로그인 시 본인의 회원 정보 조회 및 수정 혹은 삭제(탈퇴)
3. 페이징 처리 및 페이지 당 row 수 설정- Material UI 적용

### 1. 세션이 없을 시(로그인x) 전체 회원 목록 조회

1.1. 회원 목록을 담을 state 만들기

```jsx
const[users, setUsers] = useState([]);
```

1.2. 세션이 없으면 전체 회원목록 조회 API를 호출  (GET 메소드)

```jsx
Axios.get("/api/users")
        .then((res) => {
          let userArray = res.data;
          console.log(userArray);
          setUsers(userArray);
        });
```

- 성공적으로 받으면 전체 회원을 배열로 받아서 state에 담는다

### 2. 로그인 시 본인의 회원 정보 조회 및 수정 혹은 삭제(탈퇴)

2.1. 세션이 있으면 그 회원 정보만 조회하기

```jsx
useEffect(() => {
    // 세션이 있으면 그 회원만 조회하기
    if (localStorage.getItem('user') != null) {
      const userEmail = JSON.parse(localStorage.getItem('user')).email;

      Axios.get(`/api/users/${userEmail}`)
        .then((res) => {
          let userArray = res.data;
          console.log(userArray);
          setUsers(userArray);
        });
    } else {
      // 세션이 없으면 전체 회원목록 조회 호출
      Axios.get("/api/users")
        .then((res) => {
          let userArray = res.data;
          console.log(userArray);
          setUsers(userArray);
        });
    }

  }, []);
```

- 서버에서 email로 회원 조회
- 성공적으로 데이터를 받아오면  state에 담는다

2.2. 테이블에 해당 유저의 내용을 보여준다

```jsx
<TableBody>
            {localStorage.getItem('user') != null ?
              // 로그인 한 경우 -> 해당 유저의 내용만 보여준다
              <TableRow tabIndex={-1} key={users.id}>
                <td key={users.id}> {users.id} </td>
                <td className={users.name}>{users.name}</td>
                <td className={users.email}>{users.email}</td>
                <td style={{ textAlign: 'right' }} className={users.birthDay}>{users.birthDay}</td>
                <td style={{ textAlign: 'right' }} className={users.age}>{users.age}</td>
                <td style={{ textAlign: 'right' }} className={users.password}>{users.password}</td>
                <td><input type="button" value="수정" onClick={handleUpdate} /></td>
                <td><input type="button" value="탈퇴" onClick={handleDelete} /></td>
              </TableRow>
              : 중략...
```

- 수정시 handleUpdate 메소드 호출

```jsx
// 회원 수정
  const handleUpdate = async user => {
    // 수정하려는 유저 아이디 ->해당 데이터 가져오기
    // const { data } = await Axios.put("/api/users", user);
    console.log(user);
    window.location.href = `/register`;
  }
```

- 탈퇴(삭제)시 handleDelete 메소드 호출 - 로컬 스토리지에 있는 정보도 지워준다

```jsx
// 회원 삭제
  const handleDelete = () => {
    Axios.delete('/api/users', { data: users });
    setUsers([]);
    localStorage.clear('user');
    window.location.href = '/';

  }
```

### 3. 페이징 처리 및 페이지 당 row 수 설정- Material UI 적용

```jsx
<TablePagination
  rowsPerPageOptions={[5, 10, 25, 100]}
  component="div"
  count={users.length}
  rowsPerPage={rowsPerPage}
  page={page}
  onChangePage={handleChangePage}
  onChangeRowsPerPage={handleChangeRowsPerPage}
/>
```

적용한 테이블 : [https://material-ui.com/components/tables/#fixed-header](https://material-ui.com/components/tables/#fixed-header)