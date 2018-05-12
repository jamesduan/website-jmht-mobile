import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Slider from 'react-slick'

import p01 from './images/p01.jpg'
import p02 from './images/p02.jpg'
// import p03 from './images/p03.jpg'
// import p04 from './images/p04.jpg'
import p05 from './images/p05.jpg'
import p06 from './images/p06.jpg'
import p07 from './images/p07.jpg'
import p08 from './images/p08.jpg'
import r07 from './images/r07.jpg'
// import process01 from './images/flow01.png'
// import process02 from './images/flow02.png'
// import process03 from './images/flow03.png'
// import process04 from './images/flow04.png'
// import process05 from './images/flow05.png'
// import process06 from './images/flow06.png'
import './scss/App.scss';
import aboutus from './images/about_company.png'
import news01 from './images/new01.png'
import news02 from './images/new02.png'
import news03 from './images/new03.png'
import about from './images/about.png'
// import chayi from './images/chayi.png'

export default class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        const path1 = {pathname: '/news', query: { anchor: 'news001'}}
        const path2 = {pathname: '/news', query: { anchor: 'news002'}}
        const path3 = {pathname: '/news', query: { anchor: 'news003'}}
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
                    <img src={about} alt="" style={{ width: "100%", height: "100%", marginTop: 20 }} />
                    <p className="normal-text normal-color">2015年本源集团着手新中式健康茶饮技术研发、茶饮品牌运营策划及茶饮技术团队建设，历时两年，2017年本源新中式健康茶饮品牌"九亩花田"正式投入市场，开启中国茶饮5.0时代。</p>
                    <p className="title">茶饮系列</p>
                    <div className="tea">
                        <div className="left"></div>
                        <div className="right normal-text normal-color">
                            <div>茶香喉，沁心田</div>
                            <div>味芳醇，意缱绻</div>
                            <div>九亩方圆，春风十里</div>
                            <div>花田锦绣，芳华明媚</div>
                        </div>
                    </div>
                    <p className="title">软欧包系列</p>
                    <div className="r">
                        <div className="left"></div>
                        <div className="right normal-text normal-color">
                            <div>2017年本源新中式健康茶饮品牌"九亩花田"正式投入市场，开启中国茶饮5.0时代。</div>
                        </div>
                    </div>
                    <p className="title">形象设计/VI设计/门店设计</p>
                    <div className="design">
                        <div className="left"></div>
                        <div className="right normal-text normal-color">
                            <div>2015年本源集团着手新中式健康茶饮技术研发、茶饮品牌运营策划及茶饮技术团队建设，历时两年，2017年本源新中式健康茶饮品牌”九亩花田 ” 正式投入市场，开启中国茶饮5.0时代。</div>
                        </div>
                    </div>
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
                                <img src={p02} alt="p01" style={{ width: imgWidth }} />
                                <p className="normal-text" style={{ width: imgWidth }}>柠檬初上</p>
                            </div>
                            {/* <div style={{ width: imgWidth, height: 90 }}>
                                <img src={p04} alt="p01" style={{ width: imgWidth }} />
                                <p className="normal-text" style={{ width: imgWidth }}>柠檬初上</p>
                            </div> */}
                            <div style={{ width: imgWidth, height: 90 }}>
                                <img src={p05} alt="p01" style={{ width: imgWidth }} />
                                <p className="normal-text" style={{ width: imgWidth }}>柠檬初上</p>
                            </div>
                            <div style={{ width: imgWidth, height: 90 }}>
                                <img src={p06} alt="p01" style={{ width: imgWidth }} />
                                <p className="normal-text" style={{ width: imgWidth }}>柠檬初上</p>
                            </div>
                            <div style={{ width: imgWidth, height: 90 }}>
                                <img src={p07} alt="p01" style={{ width: imgWidth }} />
                                <p className="normal-text" style={{ width: imgWidth }}>柠檬初上</p>
                            </div>
                            <div style={{ width: imgWidth, height: 90 }}>
                                <img src={p08} alt="p01" style={{ width: imgWidth }} />
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

                {/* <div className="App-home-process">
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
                </div> */}

                <div className="App-home-aboutus top20">
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
                        <p className="middle-text">九亩花田：现萃茶汤，让茶饮好喝的密秘</p>
                        <p className="normal-text">茶要好喝，原料是很重要，明前的茶叶要比谷雨的茶叶要好，春茶要比秋茶要好，
                            高山的茶要比平地茶要好…<Link to={path1}>详情</Link></p>
                    </div>

                    <img style={{ width: "100%", height: "100%", marginTop: 20 }} alt="" src={news02} />
                    <div className="normal-color">
                        <p className="middle-text">九亩花田:一杯好茶+一份独特=十分好喝</p>
                        <p className="normal-text">一杯茶饮+加一份软欧包的模式，在市面上已经火了，势如破竹，深受广大消费者喜爱。 九亩花田以健康+品质+差异化+网红茶的新经营模式，在众多茶饮品牌中形成差异化竞争优势， 全面开启中国茶饮5.0时代...<Link to={path2}>详情</Link></p>
                    </div>

                    <img style={{ width: "100%", height: "100%", marginTop: 20 }} alt="" src={news03} />
                    <div className="normal-color">
                        <p className="middle-text">软欧包为什么这么火，九亩花田为你说答案</p>
                        <p className="normal-text">如今，随着人们的生活水平不断提高，消费观念也在不断的提升，特别是在吃这方面，人们不再像以前那样， 只求吃得饱，而是更讲究如何吃得好，对食物的口感和健康品质有着绝对的挑剔，所以， 像软欧包这种面包中的劳斯莱斯，一经推出，就受到大众的强烈追捧...<Link to={path3}>详情</Link></p>
                    </div>
                </div>

            </div>
        )
    }
}