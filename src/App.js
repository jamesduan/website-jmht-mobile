import React, { Component } from 'react';


import Drawer from 'react-motion-drawer';
import { Link } from 'react-router-dom'
import logo from './images/logo.svg';
import menu from './images/menu.svg';
import {
  Route,
  Switch
} from 'react-router-dom'
import Home from './Home'
import Product from './Product'
import JoinUs from './Join'
import News from './News'
import AboutUS from './About'
import ContactUS from './Contact'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      width: 300,
      open: false,
      openRight: false,
      navClicked: 'home',
    }
  }

  render() {

    const linkColor = '#eaaf37'
    return (
      <div className={"App"}>
        <Drawer width={200}
          open={this.state.openRight}
          fadeOut
          right
          drawerStyle={drawerStyle}
          onChange={(open) => {
            console.log(open)
            this.setState({ openRight: open })
          }}>
          <ul className="drawer-panel">
            <Link style={{ color: this.state.navClicked === "home" ? linkColor : "" }} onClick={() => { this.setState({ navClicked: 'home' }) }} to="/" className="link">首页</Link>
            <Link style={{ color: this.state.navClicked === "aboutus" ? linkColor : "" }} onClick={() => { this.setState({ navClicked: 'aboutus' }) }} to="/aboutus" className="link">关于</Link>
            <Link style={{ color: this.state.navClicked === "news" ? linkColor : "" }} onClick={() => { this.setState({ navClicked: 'news' }) }} to="/news" className="link">资讯</Link>
            <Link style={{ color: this.state.navClicked === "product" ? linkColor : "" }} onClick={() => { this.setState({ navClicked: 'product' }) }} to="/product" className="link">产品</Link>
            <Link style={{ color: this.state.navClicked === "joinus" ? linkColor : "" }} onClick={() => { this.setState({ navClicked: 'joinus' }) }} to="/joinus" className="link">合作</Link>
            <Link style={{ color: this.state.navClicked === "contact" ? linkColor : "" }} onClick={() => { this.setState({ navClicked: 'contact' }) }} to="/contactus" className="link">联系</Link>
          </ul>
        </Drawer>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <img src={menu} className="App-menu" alt="menu" onClick={() => {
            this.setState(() => {
              let openRight = this.state.openRight
              return { openRight: !openRight }
            })
          }} />
        </header>

        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/product' component={Product} />
          <Route path='/joinus' component={JoinUs} />
          <Route path='/news' component={News} />
          <Route path='/aboutus' component={AboutUS} />
          <Route path='/contactus' component={ContactUS} />
        </Switch>

        <div className="App-footer normal-text normal-color">
          <p>©2008-2018 广州本源健康产业有限公司 版权所有</p>
        </div>
      </div>
    );
  }
}

const drawerStyle = {
  background: "#F9F9F9",
  boxShadow: "rgba(0, 0, 0, 0.188235) 0px 10px 20px, rgba(0, 0, 0, 0.227451) 0px 6px 6px"
}

export default App;
