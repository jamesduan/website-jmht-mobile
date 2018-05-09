import React, { Component } from 'react';

import Slider from 'react-slick'

import p01 from './images/p01.jpg'
// import p03 from './images/p03.jpg'
import r07 from './images/r07.jpg'
import process01 from './images/flow01.png'
import process02 from './images/flow02.png'
import process03 from './images/flow03.png'
import process04 from './images/flow04.png'
import process05 from './images/flow05.png'
import process06 from './images/flow06.png'
import './scss/App.scss';
import aboutus from './images/about_company.png'
import news01 from './images/new01.png'
import news02 from './images/new02.png'
import news03 from './images/new03.png'

export default class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

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
        const imgWidth = 100;
        return (
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
                            <div style={{ width: imgWidth, height: 90 }}>
                                <img src={p01} alt="p01" style={{ width: imgWidth }} />
                                <p className="normal-text" style={{ width: imgWidth }}>柠檬初上</p>
                            </div>
                            <div style={{ width: imgWidth, height: 90 }}>
                                <img src={p01} alt="p01" style={{ width: imgWidth }} />
                                <p className="normal-text" style={{ width: imgWidth }}>柠檬初上</p>
                            </div>
                            <div style={{ width: imgWidth, height: 90 }}>
                                <img src={p01} alt="p01" style={{ width: imgWidth }} />
                                <p className="normal-text" style={{ width: imgWidth }}>柠檬初上</p>
                            </div>
                            <div style={{ width: imgWidth, height: 90 }}>
                                <img src={p01} alt="p01" style={{ width: imgWidth }} />
                                <p className="normal-text" style={{ width: imgWidth }}>柠檬初上</p>
                            </div>
                            <div style={{ width: imgWidth, height: 90 }}>
                                <img src={p01} alt="p01" style={{ width: imgWidth }} />
                                <p className="normal-text" style={{ width: imgWidth }}>柠檬初上</p>
                            </div>
                            <div style={{ width: imgWidth, height: 90 }}>
                                <img src={p01} alt="p01" style={{ width: imgWidth }} />
                                <p className="normal-text" style={{ width: imgWidth }}>柠檬初上</p>
                            </div>
                            <div style={{ width: imgWidth, height: 90 }}>
                                <img src={p01} alt="p01" style={{ width: imgWidth }} />
                                <p className="normal-text" style={{ width: imgWidth }}>柠檬初上</p>
                            </div>
                            <div style={{ width: imgWidth, height: 90 }}>
                                <img src={p01} alt="p01" style={{ width: imgWidth }} />
                                <p className="normal-text" style={{ width: imgWidth }}>柠檬初上</p>
                            </div>
                            <div style={{ width: imgWidth, height: 90 }}>
                                <img src={p01} alt="p01" style={{ width: imgWidth }} />
                                <p className="normal-text" style={{ width: imgWidth }}>柠檬初上</p>
                            </div>

                        </Slider>
                    </div>
                    <div className="title">软欧包系列</div>
                    <div className="r-series">
                        <Slider {...teaSettings} className="slider">
                            <div style={{ width: imgWidth, height: 90 }}>
                                <img src={r07} alt="p01" style={{ width: imgWidth }} />
                                <p className="normal-text" style={{ width: imgWidth }}>花样年华</p>
                            </div>
                            <div style={{ width: imgWidth, height: 90 }}>
                                <img src={r07} alt="p01" style={{ width: imgWidth }} />
                                <p className="normal-text" style={{ width: imgWidth }}>花样年华</p>
                            </div>
                            <div style={{ width: imgWidth, height: 90 }}>
                                <img src={r07} alt="p01" style={{ width: imgWidth }} />
                                <p className="normal-text" style={{ width: imgWidth }}>花样年华</p>
                            </div>
                            <div style={{ width: imgWidth, height: 90 }}>
                                <img src={r07} alt="p01" style={{ width: imgWidth }} />
                                <p className="normal-text" style={{ width: imgWidth }}>花样年华</p>
                            </div>
                            <div style={{ width: imgWidth, height: 90 }}>
                                <img src={r07} alt="p01" style={{ width: imgWidth }} />
                                <p className="normal-text" style={{ width: imgWidth }}>花样年华</p>
                            </div>
                            <div style={{ width: imgWidth, height: 90 }}>
                                <img src={r07} alt="p01" style={{ width: imgWidth }} />
                                <p className="normal-text" style={{ width: imgWidth }}>花样年华</p>
                            </div>
                            <div style={{ width: imgWidth, height: 90 }}>
                                <img src={r07} alt="p01" style={{ width: imgWidth }} />
                                <p className="normal-text" style={{ width: imgWidth }}>花样年华</p>
                            </div>
                            <div style={{ width: imgWidth, height: 90 }}>
                                <img src={r07} alt="p01" style={{ width: imgWidth }} />
                                <p className="normal-text" style={{ width: imgWidth }}>花样年华</p>
                            </div>
                            <div style={{ width: imgWidth, height: 90 }}>
                                <img src={r07} alt="p01" style={{ width: imgWidth }} />
                                <p className="normal-text" style={{ width: imgWidth }}>花样年华</p>
                            </div>
                            <div style={{ width: imgWidth, height: 90 }}>
                                <img src={r07} alt="p01" style={{ width: imgWidth }} />
                                <p className="normal-text" style={{ width: imgWidth }}>花样年华</p>
                            </div>
                        </Slider>
                    </div>
                </div>

                <div className="App-home-process">
                    <div className="title">合作流程</div>
                    <div className="wrapper">
                        <div className="item">
                            <div className="circle">
                                <img src={process01} alt="process01" className="process-img" />
                            </div>
                            <div className="title">项目咨询</div>
                            <div className="text">前期沟通，对公司及项目进行了解</div>
                        </div>
                        <div className="item">
                            <div className="circle">
                                <img src={process02} alt="process02" className="process-img" />
                            </div>
                            <div className="title">实地考察</div>
                            <div className="text">合作商有意向后实地考察公司了解项目，进行业务交流</div>
                        </div>
                        <div className="item">
                            <div className="circle">
                                <img src={process03} alt="process03" className="process-img" />
                            </div>
                            <div className="title">资格审核</div>
                            <div className="text">总部对合作商进行资格审核，确保项目双赢</div>
                        </div>
                        <div className="item">
                            <div className="circle">
                                <img src={process04} alt="process04" className="process-img" />
                            </div>
                            <div className="title">合作签约</div>
                            <div className="text">正式签约成为城市合伙人，合作商应提供相关证件和交纳相关费用</div>
                        </div>
                        <div className="item">
                            <div className="circle">
                                <img src={process05} alt="process05" className="process-img" />
                            </div>
                            <div className="title">总部培训</div>
                            <div className="text">总部对合伙人进行技术及经营管理培训，并提供相关设备、原料、选址、门店设计等相关支持</div>
                        </div>
                        <div className="item">
                            <div className="circle">
                                <img src={process06} alt="process06" className="process-img" />
                            </div>
                            <div className="title">新店开业</div>
                            <div className="text">门店试营业，总部在经营期间提供驻店督导门店运营，门店正式营业</div>
                        </div>
                    </div>
                </div>

                <div className="App-home-aboutus">
                    <div className="title">关于我们</div>
                    <div className="content normal-text normal-color">
                        <p>20年专注健康生活服务产业</p>
                        <p>广州本源健康产业有限公司，是一家多元化发展的企业，涉猎四大产业：餐饮连锁产业、餐饮原料产业、茶业产业、美妆服务产业。</p>
                        <p>公司创办已有20多年历史，并于2015年在广州股权交易中心挂牌上市。公司本着“万物之本，包罗万象，源源不断”的品牌理念，以“上善若水“为品牌内涵，对产品严格品控，层层把关，致力于为消费者提供健康、有品质的生活。</p>
                    </div>
                    <img src={aboutus} alt="" style={{ width: "100%", height: "100%" }} />
                </div>

                <div className="App-home-news">
                    <div className="title">新闻资讯</div>

                    <img style={{ width: "100%", height: "100%", marginTop: 20 }} alt="" src={news01} />
                    <div className="normal-color">
                        <p className="middle-text">人活一壶茶</p>
                        <p className="normal-text">不能想象，乡下的老茶馆若是消失了，那人们还怎么活下去。那茶叶，粗的；那茶壶，不但粗，还拙笨。窑场上的废壶，瘪的无…</p>
                    </div>

                    <img style={{ width: "100%", height: "100%", marginTop: 20 }} alt="" src={news02} />
                    <div className="normal-color">
                        <p className="middle-text">茶为席魂，心饮为上</p>
                        <p className="normal-text">茶，解渴清心，以品为上。茶滋于水，水籍乎器。茶汤无形，无器不盛。器，为茶之父，道由器传。由茶和器而入的茶道，是…</p>
                    </div>

                    <img style={{ width: "100%", height: "100%", marginTop: 20 }} alt="" src={news03} />
                    <div className="normal-color">
                        <p className="middle-text">人活一壶茶</p>
                        <p className="normal-text">不能想象，乡下的老茶馆若是消失了，那人们还怎么活下去。那茶叶，粗的；那茶壶，不但粗，还拙笨。窑场上的废壶，瘪的无…</p>
                    </div>
                </div>

            </div>
        )
    }
}