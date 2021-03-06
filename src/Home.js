import React, { Component } from 'react';
// import { Link } from 'react-router-dom'
import Slider from 'react-slick'

// import p01 from './images/p01.jpg'
// import p02 from './images/p02.jpg'
// // import p03 from './images/p03.jpg'
// // import p04 from './images/p04.jpg'
// import p05 from './images/p05.jpg'
// import p06 from './images/p06.jpg'
// import p07 from './images/p07.jpg'
// import p08 from './images/p08.jpg'
// import r07 from './images/r07.jpg'

import pnew01 from './images/pnew01.jpg'
import pnew02 from './images/pnew02.jpg'
import pnew03 from './images/pnew03.jpg'
import pnew04 from './images/pnew04.jpg'
import pnew05 from './images/pnew05.jpg'
import pnew06 from './images/pnew06.jpg'
import pnew07 from './images/pnew07.jpg'
// import pnew08 from './images/pnew08.jpg'
import rnew01 from './images/rnew01.png'
import rnew02 from './images/rnew02.png'
import rnew03 from './images/rnew03.png'
import rnew04 from './images/rnew04.png'

// import process01 from './images/flow01.png'
// import process02 from './images/flow02.png'
// import process03 from './images/flow03.png'
// import process04 from './images/flow04.png'
// import process05 from './images/flow05.png'
// import process06 from './images/flow06.png'
import './scss/App.scss';
import aboutus from './images/about_company.png'
// import news01 from './images/new01.png'
// import news02 from './images/new02.png'
// import news03 from './images/new03.png'
import about from './images/about.png'
// import chayi from './images/chayi.png'
import map from './images/map.png'
import banner01 from './images/banner1.png'
import banner02 from './images/banner2.png'
import banner03 from './images/banner3.png'

export default class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        // const path1 = { pathname: '/news', query: { anchor: 'news001' } }
        // const path2 = { pathname: '/news', query: { anchor: 'news002' } }
        // const path3 = { pathname: '/news', query: { anchor: 'news003' } }
        const settings = {
            infinite: true,
            speed: 1000,
            autoplaySpeed: 5000,
            autoplay: true,
            cssEase: "linear"
        }

        const teaSettings = {
            infinite: true,
            speed: 1000,
            autoplaySpeed: 5000,
            autoplay: true,
            slidesToShow: 3,
            slidesToScroll: 3,
            initialSlide: 0,
        }
        const imgWidth = 100;
        return (
            <div className="App-home">
                <div className="App-home-banner">
                    <Slider {...settings} className="slider">
                        {/* <img src={p01} alt="p01" /> */}
                        <img src={banner01} alt="p01" />
                        <img src={banner02} alt="p01" />
                        <img src={banner03} alt="p01" />
                    </Slider>
                </div>
            
                <div className="App-home-aboutus">
                    <div className="title">关于九亩花田</div>
                    <img src={about} alt="" style={{ width: "100%", height: "100%", marginTop: 20 }} />
                    <p className="normal-text normal-color tel" style={{ textIndent: "2em"}}>
                        九亩花田是本源健康产业有限公司旗下的餐饮品牌。提倡轻奢主义，以简约于形，时尚于心为产品内核，
                        向用户传达崇尚真心、真性的品牌内涵。在产品打造上，九亩花田依托母公司本源丰富的原茶资源，
                        全国独家自有1200平米茶饮技术研发中心，30名独立技术研发团队，以实力和匠心创造产品，
                        九亩花田的茶饮现萃高山茶汁，严控天然水果食材，进口鲜乳制品，优质雪芝奶盖和酸奶。
                        采用混萃技术，茶、奶、果的多元高颜值融合，外加营养健康软欧包，为消费者制造与美味相遇的美好时光。
                        九亩花田以健康、优质和差异化开启新中式茶饮5.0时代。
                    </p>
                    <p className="title" style={{ marginTop: 40 }}>茶饮系列</p>
                    <p className="normal-text normal-color tel" style={{ textIndent: "2em"}}>
                        冷泡工艺，独运匠心，
                        为了茶叶的芳香完美释放，
                        为了让茶叶与水融合实现完全的价值，
                        九亩花田的技术团队研发全新的泡茶艺术，
                        三大步骤：高温热水泡发、冷温锁香封味、真空高压萃取
                        三大效果：减少茶涩的口感，减少茶单宁酸的释放，有利于保护肠胃<br />
                    </p>
                    <div className="tea">
                        <div className="left"></div>
                        <div className="right normal-text normal-color">
                            <div>茶香喉，沁心田</div>
                            <div>味芳醇，意缱绻</div>
                            <div>九亩方圆，春风十里</div>
                            <div>花田锦绣，芳华明媚</div>
                        </div>
                    </div>

                    <div className="App-home-product">
                        {/* <div className="title">茶饮系列</div> */}
                        <div className="tea-series">
                            <Slider {...teaSettings} className="slider">
                                <div style={{ width: imgWidth, height: 90 }}>
                                    <img src={pnew01} alt="p01" style={{ width: imgWidth }} />
                                    <p className="normal-text" style={{ width: imgWidth }}>四季春霜降</p>
                                </div>
                                <div style={{ width: imgWidth, height: 90 }}>
                                    <img src={pnew02} alt="p01" style={{ width: imgWidth }} />
                                    <p className="normal-text" style={{ width: imgWidth }}>柠檬初上</p>
                                </div>
                                {/* <div style={{ width: imgWidth, height: 90 }}>
                                <img src={p04} alt="p01" style={{ width: imgWidth }} />
                                <p className="normal-text" style={{ width: imgWidth }}>柠檬初上</p>
                            </div> */}
                                <div style={{ width: imgWidth, height: 90 }}>
                                    <img src={pnew03} alt="p01" style={{ width: imgWidth }} />
                                    <p className="normal-text" style={{ width: imgWidth }}>小确幸</p>
                                </div>
                                <div style={{ width: imgWidth, height: 90 }}>
                                    <img src={pnew04} alt="p01" style={{ width: imgWidth }} />
                                    <p className="normal-text" style={{ width: imgWidth }}>相思奶茶</p>
                                </div>
                                <div style={{ width: imgWidth, height: 90 }}>
                                    <img src={pnew05} alt="p01" style={{ width: imgWidth }} />
                                    <p className="normal-text" style={{ width: imgWidth }}>不知春</p>
                                </div>
                                <div style={{ width: imgWidth, height: 90 }}>
                                    <img src={pnew06} alt="p01" style={{ width: imgWidth }} />
                                    <p className="normal-text" style={{ width: imgWidth }}>柒窨茉莉</p>
                                </div>
                                <div style={{ width: imgWidth, height: 90 }}>
                                    <img src={pnew07} alt="p01" style={{ width: imgWidth }} />
                                    <p className="normal-text" style={{ width: imgWidth }}>玫瑰乌龙霜降</p>
                                </div>

                            </Slider>
                        </div>

                        <p className="title" style={{ marginTop: 40 }}>软欧包系列</p>
                        <p className="normal-text normal-color tel" style={{ textIndent: "2em"}}>
                            有生命的软欧包，
                            九亩花田软欧包采用天然水果酵母菌发酵的工艺，经过揉、擀、摔、压、切，道道工序。从面粉到面团，给予每一个软欧包新生命。成品的软欧包，混合着坚果、杂粮等材料的表皮，香香脆脆，吃起来口感丰富，特别香甜浓郁。
                        </p>
                        <div className="r">
                            <div className="left"></div>
                            <div className="right normal-text normal-color">
                                <div>有生命的软欧包，经过揉、擀、摔、压、切，道道工序。从面粉到面团，给予每一个软欧包新生命。</div>
                            </div>
                        </div>

                        {/* <div className="title">软欧包系列</div> */}
                        <div className="r-series">
                            <Slider {...teaSettings} className="slider">
                                <div style={{ width: imgWidth, height: 90 }}>
                                    <img src={rnew01} alt="p01" style={{ width: imgWidth }} />
                                    <p className="normal-text" style={{ width: imgWidth }}>花样年华</p>
                                </div>
                                <div style={{ width: imgWidth, height: 90 }}>
                                    <img src={rnew02} alt="p01" style={{ width: imgWidth }} />
                                    <p className="normal-text" style={{ width: imgWidth }}>花样年华</p>
                                </div>
                                <div style={{ width: imgWidth, height: 90 }}>
                                    <img src={rnew03} alt="p01" style={{ width: imgWidth }} />
                                    <p className="normal-text" style={{ width: imgWidth }}>花样年华</p>
                                </div>
                                <div style={{ width: imgWidth, height: 90 }}>
                                    <img src={rnew04} alt="p01" style={{ width: imgWidth }} />
                                    <p className="normal-text" style={{ width: imgWidth }}>花样年华</p>
                                </div>
                            </Slider>
                        </div>
                    </div>

                    <p className="title top20">形象设计/VI设计/门店设计</p>
                    <div className="design">
                        <div className="left"></div>
                        <div className="right normal-text normal-color">
                            <div>我们邀请国际顶级品牌设计总监主笔，打造轻奢风格的门店形象，简约于形，时尚于心。在品牌视觉传播上，同样以轻奢，简约，时尚为内核，传达真心真性的品牌内涵，精准定位年轻用户。</div>
                        </div>
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

                <div className="App-home-aboutus top40">
                    <div className="title">关于本源</div>
                    <div className="tel content normal-text normal-color" style={{ textIndent: "2em"}}>
                        <p>广州本源健康产业有限公司，是一家多元化发展的企业，涉猎四大产业：餐饮连锁产业、餐饮原料产业、茶业产业、美妆服务产业。公司创办已有20多年历史，并于2015年在广州股权交易中心挂牌上市。公司本着“万物之本，包罗万象，源源不断”的品牌理念，以“上善若水“为品牌内涵，对产品严格品控，层层把关，致力于为消费者提供健康、有品质的生活。 2015年 本源集团着手新中式健康茶饮技术研发、茶饮品牌运营策划及茶饮技术团队建设，历时两年，2017年本源新中式健康茶饮品牌”九亩花田 ” 正式投入市场，开启中国茶饮5.0时代。本源人将以不变的执着和情怀，勇往向前，谱写新的华章。</p>
                    </div>
                    <img src={aboutus} alt="" style={{ width: "100%", height: "100%" }} />
                </div>

                {/* <div className="App-home-news">
                    <div className="title">新闻资讯</div>

                    <img style={{ width: "100%", height: "100%", marginTop: 20 }} alt="" src={news01} />
                    <div className="normal-color">
                        <p className="middle-text">九亩花田：现萃茶汤，让茶饮好喝的密秘</p>
                        <p className="normal-text tel">茶要好喝，原料是很重要，明前的茶叶要比谷雨的茶叶要好，春茶要比秋茶要好，
                            高山的茶要比平地茶要好…<Link to={path1} className="anchar-link">查看详情</Link></p>
                    </div>

                    <img style={{ width: "100%", height: "100%", marginTop: 20 }} alt="" src={news02} />
                    <div className="normal-color">
                        <p className="middle-text">九亩花田:一杯好茶+一份独特=十分好喝</p>
                        <p className="normal-text tel">一杯茶饮+加一份软欧包的模式，在市面上已经火了，势如破竹，深受广大消费者喜爱。 九亩花田以健康+品质+差异化+网红茶的新经营模式，在众多茶饮品牌中形成差异化竞争优势， 全面开启中国茶饮5.0时代...<Link to={path2} className="anchar-link">查看详情</Link></p>
                    </div>

                    <img style={{ width: "100%", height: "100%", marginTop: 20 }} alt="" src={news03} />
                    <div className="normal-color">
                        <p className="middle-text">软欧包为什么这么火，九亩花田为你说答案</p>
                        <p className="normal-text tel">如今，随着人们的生活水平不断提高，消费观念也在不断的提升，特别是在吃这方面，人们不再像以前那样， 只求吃得饱，而是更讲究如何吃得好，对食物的口感和健康品质有着绝对的挑剔，所以， 像软欧包这种面包中的劳斯莱斯，一经推出，就受到大众的强烈追捧...<Link to={path3} className="anchar-link">查看详情</Link></p>
                    </div>
                </div> */}
                <p className="title  fftitle top40">
                    联系我们
                </p>
                <div style={{ paddingLeft: 20, paddingRight: 20 }}>
                    <a href="http://j.map.baidu.com/QC0bP"><img src={map} alt="" className="fullimg"/></a>
                </div>
                <p className="normal-text normal-color" style={{ fontSize: 18}}>
                全球城市合伙人招募热线
                </p>

                <h1 style={{ fontWeight: 'normal'}}>400 930 6667</h1>
                <p className="normal-text normal-color">总机：020-86000678</p>
                <p className="normal-text normal-color">传真：020-86000108</p>
                <p className="normal-text normal-color">地址：中国.广州市白云区机场路1962号国际单位E栋602</p> 
                    
                
            </div>
        )
    }
}