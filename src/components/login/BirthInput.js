import React from 'react';
import "./birthInput.scss";

class BirthInput extends React.Component {
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
                    <select onChange={this.onChange}>
                        {this.getYearList()}
                    </select>
                </div>
                <div>
                    <div className="birthtitle"><span>월</span></div>
                    <select onChange={this.onChange}>
                        {this.getMonthList()}
                    </select>
                </div>
                <div>
                    <div className="birthtitle"><span>일</span></div>
                    <select onChange={this.onChange}>
                        {this.getDayList()}
                    </select>
                </div>
            </div>
        )
    }
}



export default BirthInput;