
import React, { Component } from 'react';
import banner from './images/contact_banner.png'
import map from './images/map.png'

class ContactUS extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div className="App-contact">
                <div className="banner">
                    <img alt="" src={banner} style={{ width: "100%", height: "100%"}}/>
                </div>            
                <div className="contact-container">
                    <p className="title">全球城市合伙人招募热线</p>
                    <div className="num">400 930 6667</div>
                    <p className="normal-text normal-color">总机：020-86000678</p>
                    <p className="normal-text normal-color">传真：020-86000108</p>
                    <p className="normal-text normal-color">地址：中国.广州市白云区机场路1962号国际单位E栋602</p>
                    <img src={map} alt="" className="fullimg"/>
                </div>
            </div>
        );
    }
}

export default ContactUS;