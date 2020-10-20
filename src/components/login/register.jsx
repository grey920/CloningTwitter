import React from 'react';
import loginImg from '../../login.svg';
import { Link } from 'react-router-dom';

export class Register extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="base-container">
                <div className="header">
                    <div className="header-divider">
                        <Link to="/"><button className="goHome">메인으로</button></Link>
                    </div>
                    <div className="header-divider">
                        <img src={ loginImg } alt="" />
                    </div>
                    <div className="header-divider">
                    <Link to="/login"><button className="goHome">로그인</button></Link>
                    </div>
                </div>

                <div className="content">
                   <div className="descript">
                       <h1>계정을 생성하세요</h1>
                   </div>
                   <div className="form">
                    <div className="form-group">
                        <label htmlFor="username">
                        <div className="lable"><span>이름</span></div>
                        <input type="text" name="username" placeholder=""/>
                        </label>
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">이메일
                        <input type="email" name="email" placeholder=""/>
                        </label>
                    </div>
                    <div className="register-by">
                    <Link to=""><p>대신 휴대폰 사용하기</p></Link>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">비밀번호
                        <input type="password" name="password" placeholder=""/>
                        </label>
                    </div>
                    <div className="form-group">
                            <div className="birth-title"><b>생년월일</b></div>
                            <div className="birth-des">이 정보는 공개적으로 표시되지 않습니다. 비즈니스, 반려동물 등 계정 주제에 상관 없이 나의 연령을 확인하세요.</div>
                            <div className="birth-input">
                                <label htmlFor="birth">
                                    <div className="form-group">
                                   <select>
                                       <option>d</option>
                                   </select>
                                    </div>
                                    <div className="form-group">
                                   
                                    </div>
                                    <div className="form-group">
                                   
                                    </div>
                                </label>
                            </div>
                    </div>
                    <button type="button" className="loginbtn">
                        회원가입
                    </button>
                </div>
                </div>
            </div>



            // <div className="base-container">
            //     <div className="image">
            //     <img src={loginImg} alt=""/>
            //     </div>
            //     <div><span className="header">계정을 생성하세요</span> </div>
            //     <div className="content">
            //     <div className="form">
            //         <div className="form-group">
            //             <label htmlFor="username">
            //             <div className="lable"><span>이름</span></div>    
            //             <input type="text" name="username" placeholder=""/>
            //             </label>
            //         </div>
            //         <div className="form-group">
            //             <label htmlFor="email">
            //             <div className="lable"><span>이메일</span></div>    
            //             <input type="email" name="username" placeholder=""/>
            //             </label>
            //         </div>
            //         <div className="form-group">
            //             <label htmlFor="password">
            //             <div className="lable"><span>비밀번호</span></div>    
            //             <input type="password" name="password" placeholder=""/>
            //             </label>
            //         </div>
            //         <div className="form-group">
            //             <label htmlFor="birth" aria-label="생년월일" role="group">
            //             <b>생년월일</b>
            //             <p>이 정보는 공개적으로 표시되지 않습니다. 비즈니스, 반려동물 등 계정 주제에 상관 없이 나의 연령을 확인하세요.</p>
            //             <div className="divwrapper">
            //             <div className="labeldiv">
            //                 <span>월</span>
            //             </div>
            //             <div className="inputdiv">
            //             <select>
            //                 <option value="" selected></option>
            //                 <option value="1월">1월</option>
            //                 <option value="2월">2월</option>
            //                 <option value="3월">3월</option>
            //             </select>
            //             </div>
            //             </div>
            //             </label>
            //         </div>
            //     </div>
            //     </div>
            //     <div className="footer">
            //         <button type="button" className="regisbtn">회원가입</button>    
            //     </div>
            // </div>
        );
    }
}