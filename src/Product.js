import React, { Component } from 'react';
import { Route, Link, Redirect, Switch } from 'react-router-dom'
import pbanner from './images/p-banner.png'
// import p01 from './images/p01.jpg'
// import p02 from './images/p02.jpg'
// // import p03 from './images/p03.jpg'
// // import p04 from './images/p04.jpg'
// import p05 from './images/p05.jpg'
// import p06 from './images/p06.jpg'
// import p09 from './images/p09.jpg'
// import p08 from './images/p08.jpg'
// import p07 from './images/p07.jpg'

// // import r07 from './images/r07.jpg'
// import r01 from './images/r01.jpg'
// import r02 from './images/r02.jpg'
// import r03 from './images/r03.jpg'

// import p10 from './images/p10.jpg'
// import p11 from './images/p11.jpg'
// import p12 from './images/p12.jpg'
// import p13 from './images/p13.jpg'
// import p14 from './images/p14.jpg'

// import p15 from './images/p15.jpg'
// import p16 from './images/p16.jpg'
// import p17 from './images/p17.jpg'
// import p18 from './images/p18.jpg'

import pnew01 from './images/pnew01.jpg'
import pnew02 from './images/pnew02.jpg'
import pnew03 from './images/pnew03.jpg'
import pnew04 from './images/pnew04.jpg'
import pnew05 from './images/pnew05.jpg'
import pnew06 from './images/pnew06.jpg'
import pnew07 from './images/pnew07.jpg'
import pnew08 from './images/pnew08.jpg'
import rnew01 from './images/rnew01.png'
import rnew02 from './images/rnew02.png'
import rnew03 from './images/rnew03.png'
// import rnew04 from './images/rnew04.png'


const PTea = () => {
    return (
        <div className="sub-container">
            {/* <div className="title">解忧答案茶</div> */}
            <div className="title">解忧答案茶</div>
            <div className="sub-title">JIEYOUDAANCHA</div>
            <div className="images">
                <div className="box">
                    <img alt="" src={pnew01} style={{ width: "100%", height: "100%" }} />
                    <div className="normal-text normal-color">桃香乌龙霜降</div>
                </div>
                <div className="box">
                    <img alt="" src={pnew02} style={{ width: "100%", height: "100%" }} />
                    <div className="normal-text normal-color">四季春霜降</div>
                </div>
                <div className="box">
                    <img alt="" src={pnew04} style={{ width: "100%", height: "100%" }} />
                    <div className="normal-text normal-color">玫瑰乌龙霜降</div>
                </div>

            </div>
            <div className="title">鲜果物语</div>
            <div className="sub-title">XIANGUOWUYU</div>
            <div className="images">
                <div className="box">
                    <img alt="" src={pnew05} style={{ width: "100%", height: "100%" }} />
                    <div className="normal-text normal-color">桃香乌龙霜降</div>
                </div>
                <div className="box">
                    <img alt="" src={pnew06} style={{ width: "100%", height: "100%" }} />
                    <div className="normal-text normal-color">四季春霜降</div>
                </div>
                <div className="box">
                    <img alt="" src={pnew07} style={{ width: "100%", height: "100%" }} />
                    <div className="normal-text normal-color">玫瑰乌龙霜降</div>
                </div>

            </div>
            <div className="title">网说新茶</div><div className="sub-title">WANGSHUOXINCHA</div>
            <div className="images">
                <div className="box">
                    <img alt="" src={pnew08} style={{ width: "100%", height: "100%" }} />
                    <div className="normal-text normal-color">油切乌龙霜降</div>
                </div>
                <div className="box">
                    <img alt="" src={pnew05} style={{ width: "100%", height: "100%" }} />
                    <div className="normal-text normal-color">玄米煎茶霜降</div>
                </div>
                <div className="box">
                    <img alt="" src={pnew07} style={{ width: "100%", height: "100%" }} />
                    <div className="normal-text normal-color">红玉茗茶霜降</div>
                </div>
            </div>
            <div className="title">初恋时光</div>
            <div className="sub-title">CHULIANSHIGUANG</div>
            <div className="images">
                <div className="box">
                    <img alt="" src={pnew01} style={{ width: "100%", height: "100%" }} />
                    <div className="normal-text normal-color">油切乌龙霜降</div>
                </div>
                <div className="box">
                    <img alt="" src={pnew02} style={{ width: "100%", height: "100%" }} />
                    <div className="normal-text normal-color">玄米煎茶霜降</div>
                </div>
                <div className="box">
                    <img alt="" src={pnew03} style={{ width: "100%", height: "100%" }} />
                    <div className="normal-text normal-color">红玉茗茶霜降</div>
                </div>
            </div>

            <div className="title">纯臻茗茶</div>
            <div className="sub-title">CHUNZHENMINGCHA</div>
            <div className="images">
                <div className="box">
                    <img alt="" src={pnew04} style={{ width: "100%", height: "100%" }} />
                    <div className="normal-text normal-color">油切乌龙霜降</div>
                </div>
                <div className="box">
                    <img alt="" src={pnew05} style={{ width: "100%", height: "100%" }} />
                    <div className="normal-text normal-color">玄米煎茶霜降</div>
                </div>
                <div className="box">
                    <img alt="" src={pnew06} style={{ width: "100%", height: "100%" }} />
                    <div className="normal-text normal-color">红玉茗茶霜降</div>
                </div>
            </div>
            <div className="title">花田咖啡</div><div>HUATIANCOFFE</div>
            <div className="images">
                <div className="box">
                    <img alt="" src={pnew01} style={{ width: "100%", height: "100%" }} />
                    <div className="normal-text normal-color">油切乌龙霜降</div>
                </div>
                <div className="box">
                    <img alt="" src={pnew02} style={{ width: "100%", height: "100%" }} />
                    <div className="normal-text normal-color">玄米煎茶霜降</div>
                </div>
                <div className="box">
                    <img alt="" src={pnew03} style={{ width: "100%", height: "100%" }} />
                    <div className="normal-text normal-color">红玉茗茶霜降</div>
                </div>
            </div>
        </div>

    )
}
const PR = () => {
    return (
        <div className="sub-container">
            <div className="title">软欧包</div><div className="sub-title">RUANOUBAO</div>
            <div className="images">
                <div className="box">
                    <img alt="" src={rnew01} style={{ width: "100%", height: "100%" }} />
                    {/* <div className="normal-text normal-color">包1</div> */}
                </div>
                <div className="box">
                    <img alt="" src={rnew02} style={{ width: "100%", height: "100%" }} />
                    {/* <div className="normal-text normal-color">包2</div> */}
                </div>
                <div className="box">
                    <img alt="" src={rnew03} style={{ width: "100%", height: "100%" }} />
                    {/* <div className="normal-text normal-color">包3</div> */}
                </div>

            </div>
        </div>
    )
}

class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
            switchName: 'ptea'
        };
    }
    render() {
        return (
            <div className="App-product">
                <div className="banner">
                    <img src={pbanner} alt="" style={{ height: "100%", width: "100%" }} />
                </div>
                <div className="tabs">
                    <Link to="/product/ptea" className={this.state.switchName === 'ptea' ? "link-plus" : "link"} onClick={() => { this.setState({ switchName: 'ptea' }) }}>茶饮系列</Link>
                    <Link to="/product/pr" className={this.state.switchName === 'pr' ? "link-plus" : "link"} onClick={() => { this.setState({ switchName: 'pr' }) }}>软欧包系列</Link>
                </div>

                <Switch>
                    <Route exact path='/product/ptea' component={PTea} />
                    <Route path='/product/pr' component={PR} />
                    <Redirect path="/product" to={{ pathname: "/product/ptea" }}></Redirect>
                </Switch>
            </div>
        );
    }
}

export default Product;