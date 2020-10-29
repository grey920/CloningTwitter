import React from 'react';
import "./birthInput.scss";

class BirthInput extends React.Component {

    constructor(props) {
        super(props);
        //const birthArr = props.birthday.split('-');
        const birth = props.birthDay;
        const birthArr = birth.split('-')
        console.log(birth.split('-'));
        console.log(birthArr[0]);

        if (props.birthDay === '') {
            this.state = {
                year: new Date().getFullYear(),
                month: new Date().getMonth() + 1,
                day: new Date().getDate()
            }

        } else {
            this.state = {
                year: parseInt(birthArr[0]),
                month: parseInt(birthArr[1]),
                day: parseInt(birthArr[2])
            }
        }
    }

    getYearList = () => {
        const year = new Date().getFullYear();
        return (
            Array.from(new Array(100), (v, i) =>
                <option key={i} value={year - i}> {year - i} </option>
            )
        );
    };
    getMonthList = () => {
        return (
            Array.from(new Array(12), (v, i) =>
                <option key={i} value={1 + i}> {1 + i} </option>
            )
        );
    };
    getDayList = () => {
        return (
            Array.from(new Array(31), (v, i) =>
                <option key={i} value={1 + i}> {1 + i} </option>
            )
        );
    };
    render() {
        return (
            <div className="birthWrapper">
                <div >
                    <div className="birthtitle"><span>연도</span></div>
                    <select id="bdyear" defaultValue={this.state.year}>
                        {this.getYearList()}
                    </select>
                </div>
                <div>
                    <div className="birthtitle"><span>월</span></div>
                    <select id="bdmonth" defaultValue={this.state.month}>
                        {this.getMonthList()}
                    </select>
                </div>
                <div>
                    <div className="birthtitle"><span>일</span></div>
                    <select id="bdday" defaultValue={this.state.day}>
                        {this.getDayList()}
                    </select>
                </div>
            </div>
        )
    }
}



export default BirthInput;