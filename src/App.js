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
      dots: true
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
              <div className="item">1</div>
              <div className="item">2</div>
              <div className="item">3</div>
              <div className="item">4</div>
              <div className="item">5</div>
              <div className="item">6</div>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default App;
