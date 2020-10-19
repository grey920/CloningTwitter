import React from 'react';
import Button from '../components/common/Button';

const MainPage = () => {
    return (
        <wrapper>
            <div>
                <div>
                    <div>
                        <icon></icon>
                        <div>지금 전 세계에서 무슨 일이 일어나고 있는지 알아보세요</div>
                        <div>오늘 트위터에 가입하세요.</div>
                        <Button>가입하기</Button>
                        <Button>로그인</Button>
                    </div>
                </div>
                <bird></bird>
            </div>
            <footer></footer>
        </wrapper>
    );
}
export default MainPage;