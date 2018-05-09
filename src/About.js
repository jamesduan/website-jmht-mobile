
import React, { Component } from 'react';
import aboutBanner from './images/about_banner.png'
import { Route, Link, Redirect, Switch } from 'react-router-dom'

const Intro = () => {
    return (
        <div className="sub-container">
            <p className="title">广州本源健康产业有限公司</p>
            <p className="normal-text normal-color">
            广州本源健康产业有限公司，源自1992年成立的广州本源茶叶贸易有限公司，公司历经20多年的发展，现公司已实现多元化发展，涉猎四大产业：餐饮连锁产业、餐饮原料产业、茶业产业、美妆服务产业。并于2015年在广州股权交易中心挂牌上市。
            </p>
            <p className="normal-text normal-color">
            从创业肇端，到发展壮大，本源健康产业一路求索，一路向往。公司本着“万物之本，包罗万象，源源不断”的品牌理念，以“大善若水“为品牌内涵，对产品严格品控，层层把关，为消费者提供天然、健康的品质生活。20多年，本源一直用心努力做好一件事，20多年，本源因为专注所以专业，20多年，本源因为专业所以领先。2018年，本源养生茶已在全球发展了独具特色的茶叶专卖店一千多家，产品远销海内外。并在全国各地茶乡建立了总面积达5700亩的无污染绿色茶叶种植基地和研发中心。特别是在餐饮行业深耕16年，主要经营原料和设备方面，是麦当劳肯德基的主要供应商，同时为国内多家餐饮品牌提供原料。
            </p>
            <p className="normal-text normal-color">
            2015年 本源集团着手新中式健康茶饮技术研发、茶饮品牌运营策划及茶饮技术团队建设，历时两年，2017年本源新中式健康茶饮品牌”九亩花田 ” 正式投入市场，开启中国茶饮5.0时代。未来，本源人将以不变的执着和情怀，勇往向前，谱写新的华章。
            </p>
        </div>
    )
}

const Evolution = () => {
    return (
        <div className="sub-container">
            <p>广州本源健康产业有限公司</p>
        </div>
    )
}

const BrandStory = () => {
    return (
        <div className="sub-container">
            <p>广州本源健康产业有限公司</p>
        </div>
    )
}


class AboutUS extends Component {
    constructor(props) {
        super(props);
        this.state = {
            switchName: 'intro'
        };
    }
    render() {
        return (
            <div className="App-aboutus">
                <div className="banner">
                    <img src={aboutBanner} alt="" style={{ height: "100%", width: "100%" }} />
                    {/* <div></div> */}
                </div>
                <div className="tabs">
                    <Link to="/aboutus/intro" className={this.state.switchName === 'intro' ? "link-plus" : "link"} onClick={() => { this.setState({ switchName: 'intro' }) }}>企业简介</Link>
                    <Link to="/aboutus/evolution" className={this.state.switchName === 'evolution' ? "link-plus" : "link"} onClick={() => { this.setState({ switchName: 'evolution' }) }}>发展历程</Link>
                    <Link to="/aboutus/brand_story" className={this.state.switchName === 'brand_story' ? "link-plus" : "link"} onClick={() => { this.setState({ switchName: 'brand_story' }) }}>品牌故事</Link>
                </div>
                <Switch>
                    <Route exact path='/aboutus/intro' component={Intro} />
                    <Route path='/aboutus/evolution' component={Evolution} />
                    <Route path='/aboutus/brand_story' component={BrandStory} />
                    <Redirect path="/aboutus" to={{ pathname: "/aboutus/intro" }}></Redirect>
                </Switch>
            </div>
        );
    }
}

export default AboutUS;