import React, { Component } from 'react';
import Slider from 'react-slick'
import logo from './images/logo.svg';
import menu from './images/menu.svg';
import p01 from './images/p01.jpg'
// import p03 from './images/p03.jpg'
import r07 from './images/r07.jpg'

import './scss/App.scss';


class App extends Component {
  render() {
    const settings = {
      infinite: true,
      speed: 800
    }

    const teaSettings = {
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      initialSlide: 0,
    }

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <img src={menu} className="App-menu" alt="menu" />
        </header>

        <div className="App-home">
          <div className="App-home-banner">
            <Slider {...settings} className="slider">
              <img src={p01} alt="p01" />
              <img src={p01} alt="p01" />
              <img src={p01} alt="p01" />
              <img src={p01} alt="p01" />
            </Slider>
          </div>

          <div className="App-home-aboutus">
            <div className="title">关于九亩花田</div>
            <div className="brand">品牌介绍</div>
            <div className="tea">茶饮系列</div>
            <div className="design">形象设计/VI设计/门店设计</div>
          </div>

          <div className="App-home-product">
            <div className="title">茶饮系列</div>
            <div className="tea-series">
              <Slider {...teaSettings} className="slider">
                <img src={p01} alt="p01" />
                <img src={p01} alt="p01" />
                <img src={p01} alt="p01" />
                <img src={p01} alt="p01" />
                <img src={p01} alt="p01" />
                <img src={p01} alt="p01" />
              </Slider>
            </div>
            <div className="title">软欧包系列</div>
            <div className="r-series">
              <Slider {...teaSettings} className="slider">
                <img src={r07} alt="p01" />
                <img src={r07} alt="p01" />
                <img src={r07} alt="p01" />
                <img src={r07} alt="p01" />
                <img src={r07} alt="p01" />
                <img src={r07} alt="p01" />
              </Slider>
            </div>
          </div>

          <div className="App-home-process">
            <div className="title">合作流程</div>
            <div className="wrapper">
              <div className="item">
                <div className="circle"></div>
                <div className="title">项目咨询</div>
                <div className="text">前期沟通，对公司及项目进行了解</div>
              </div>
              <div className="item">
                <div className="circle"></div>
                <div className="title">实地考察</div>
                <div className="text">合作商有意向后实地考察公司了解项目，进行业务交流</div>
              </div>
              <div className="item">
                <div className="circle"></div>
                <div className="title">资格审核</div>
                <div className="text">总部对合作商进行资格审核，确保项目双赢</div>
              </div>
              <div className="item">
                <div className="circle"></div>
                <div className="title">合作签约</div>
                <div className="text">正式签约成为城市合伙人，合作商应提供相关证件和交纳相关费用</div>
              </div>
              <div className="item">
                <div className="circle"></div>
                <div className="title">总部培训</div>
                <div className="text">总部对合伙人进行技术及经营管理培训，并提供相关设备、原料、选址、门店设计等相关支持</div>
              </div>
              <div className="item">
                <div className="circle"></div>
                <div className="title">新店开业</div>
                <div className="text">门店试营业，总部在经营期间提供驻店督导门店运营，门店正式营业</div>
              </div>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default App;
