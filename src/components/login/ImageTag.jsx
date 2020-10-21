import React from 'react';
import loginImg from '../../login.svg';

class ImageTag extends React.Component{
    state = {
        src : loginImg
    }

    handleImage = () => (
        this.setState({
            src: this.state.src
        })
    );

    render(){
        return(
            <div className="image">
                <img src={ this.state.src } alt="" />
            </div>
        );
    }
}

export default ImageTag;