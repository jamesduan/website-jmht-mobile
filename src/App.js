import React, { Component } from 'react';
import Slider from 'react-slick'
import logo from './images/logo.svg';
import menu from './images/menu.svg';
import p01 from './images/p01.jpg'
import './scss/App.scss';

class App extends Component {
  render() {
    const settings = {
      dots: true
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
            <div className="tea-series">茶饮系列</div>
            <div className="title">软欧包系列</div>
            <div className="r-series">软欧包</div>
          </div>
        </div>

      </div>
    );
  }
}

export default App;
