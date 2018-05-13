import React, { Component } from 'react';
import newsBanner from './images/news_banner.png'
import news01 from './images/new01.png'
import news02 from './images/new02.png'
import news03 from './images/new03.png'
import ScrollableAnchor from 'react-scrollable-anchor'
import { goToAnchor } from 'react-scrollable-anchor'

class News extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentWillMount() {
        let data = this.props.location.query;
        if (data) {
            let { anchor } = data;
            console.log(anchor)
            // this.scrollToAnchor(anchor)
            goToAnchor(anchor)
        }
    }

    render() {
        return (
            <div className="App-news">
                <div className="banner">
                    <img src={newsBanner} alt="" style={{ height: "100%", width: "100%" }} />
                </div>
                <div className="news-container">
                    <ScrollableAnchor id={'news001'}>
                        <div className="content">
                            <div className="l">
                                <img alt="" src={news01} style={{ width: "100%", height: "100%" }} />
                            </div>
                            <div className="r">
                                <p className="title">九亩花田：现萃茶汤，让茶饮好喝的密秘</p>
                                <p className="normal-text normal-color clearfix" style={{ textIndent: "2em"}}>
                                    茶要好喝，原料是很重要，明前的茶叶要比谷雨的茶叶要好，春茶要比秋茶要好，
                                    高山的茶要比平地茶要好。九亩花田在茶叶原料方面有得天独厚的优势，
                                    因为母公司本源集团在茶叶行业已经深耕了20多年，在台湾和大陆自有茶叶种植面积5700亩，
                                    全国独家自有1200平米茶饮技术研发中心，30名独立技术研发团队。
                                    当然，一杯好喝的茶饮，原料要讲究，生产工艺也是很重要的。打磨好产品，不仅要有匠心，还要细心。
                            </p>
                                <p className="normal-text normal-color clearfix" style={{ textIndent: "2em"}}>
                                    九亩花田的茶饮在配对时，分量都精确在毫厘之间，所以每一份茶包都是预先准备好的，
                                    一份茶包配多少茶水，有固定精确的量杯，泡茶的水也有讲究，要选择软化水和净化水，
                                    水温控制在80度左右，只有这种温度下泡出的茶，才能保留茶叶最原始的芬芳，然后，
                                    泡好的茶在低温条件下进行冷萃，这样就锁住了原茶的芬芳甘醇，口味回甘绵长。
                            </p>
                                <p className="normal-text normal-color clearfix" style={{ textIndent: "2em"}}>
                                    九亩花田的茶饮不仅用茶讲究，泡茶的工艺讲究，制作茶饮的配料一样讲究，严控天然水果食材，
                                    进口鲜乳制品，优质雪芝奶盖和酸奶,采用混萃技术，让茶、奶、果多元高颜值融合。
                            </p>
                            </div>
                        </div>
                    </ScrollableAnchor>

                    <ScrollableAnchor id={'news002'}>
                        <div className="content">
                            <div className="l">
                                <img alt="" src={news02} style={{ width: "100%", height: "100%" }} />
                            </div>
                            <div className="r">
                                <p className="title">九亩花田:一杯好茶+一份独特=十分好喝</p>
                                <p className="normal-text normal-color clearfix" style={{ textIndent: "2em"}}>
                                    一杯茶饮+加一份软欧包的模式，在市面上已经火了，势如破竹，深受广大消费者喜爱。
                                    九亩花田以健康+品质+差异化+网红茶的新经营模式，在众多茶饮品牌中形成差异化竞争优势，
                                    全面开启中国茶饮5.0时代。
                            </p>
                                <p className="normal-text normal-color clearfix" style={{ textIndent: "2em"}}>
                                    公司自有5700亩绿色茶叶种植基地，茶叶行业深耕26年，茶叶原产直供独占鳌头。
                                    全国独家自有1200平米茶饮技术研发中心，30名独立技术研发团队，产品不断创新，
                                    工艺教学手把手传承。独家热饮冷萃技术，锁住茶饮健康自然的芬芳，给消费者带来的新鲜好喝口感，
                                    和优质体验。九亩花田的软欧包健康、低油、低糖、低盐，经过对发酵与烘烤方式的创新，让欧包变得柔软，
                                    加上天然麦香，口感更加丰富。
                            </p>
                            </div>
                        </div>
                    </ScrollableAnchor>

                    <ScrollableAnchor id={'news003'}>
                        <div className="content">
                            <div className="l">
                                <img alt="" src={news03} style={{ width: "100%", height: "100%" }} />
                            </div>
                            <div className="r">
                                <p className="title">
                                    软欧包为什么这么火，九亩花田为你说答案
                            </p>
                                <p className="normal-text normal-color clearfix" style={{ textIndent: "2em"}}>
                                    如今，随着人们的生活水平不断提高，消费观念也在不断的提升，特别是在吃这方面，人们不再像以前那样，
                                    只求吃得饱，而是更讲究如何吃得好，对食物的口感和健康品质有着绝对的挑剔，所以，
                                    像软欧包这种面包中的劳斯莱斯，一经推出，就受到大众的强烈追捧。
                            </p>

                                <p className="normal-text normal-color clearfix" style={{ textIndent: "2em"}}>
                                    一份好吃的面包要具备三大要素，所谓色、香、味具全。软欧包继承了传统欧洲面包的健康元素，
                                    低糖、低盐、低脂、低油、高纤，保留谷物的天然原香，同时吸收了日式面包软糯松松的口感，
                                    集二者之所长。好吃的软欧包在做法上当然非常讲究，天然水果酵母菌发酵的工艺，
                                    经过揉、擀、摔、压、切，道道工序。从面粉到面团，给予每一个软欧包新生命。
                                    成品的软欧包，混合着坚果、杂粮等材料的表皮，香香脆脆，吃起来口感丰富，特别香甜浓郁，
                                    内里却暗含各种抓人胃口的奶油夹心、果蔬馅等。色香味俱全的”软欧包“，自然赢得了市场的青睐。
                            </p>

                                <p className="normal-text normal-color clearfix" style={{ textIndent: "2em"}}>
                                    目前，软欧包在高端面包市场增速将在20%至30%之间，高于整个烘焙市场的增速。
                                    软欧包可以说是面包健康流行的新趋势、新食尚。
                                    九亩花田是广州本源健康产业有限公司精心打造的新式休闲餐饮品牌。
                                    公司自有5700亩茶叶种植基地，1200平米技术研发中心，300人金牌运营团队，
                                    产品以一份好茶+一份软欧包为基础，以一份新鲜+一份独特=十分好喝为特色，
                                    以“寻味美好时光”为品牌内涵，用实力与技术，打造行业新标杆。
                            </p>
                            </div>
                        </div>
                    </ScrollableAnchor>
                    <div className="content">
                        <div className="l">
                            <img alt="" src={news03} style={{ width: "100%", height: "100%" }} />
                        </div>
                        <div className="r">
                            <p className="title">
                                答案茶广受年经人追捧
                            </p>
                            <p className="normal-text normal-color clearfix" style={{ textIndent: "2em"}}>
                                随着抖音等新兴社交平台的火爆，很多新颖的品牌开始广为人知，答案茶就是借助抖音迅速走红的一个奶茶品牌。
                            </p>

                            <p className="normal-text normal-color clearfix" style={{ textIndent: "2em"}}>
                                答案茶用崭新且具创意的形式，打破行业沉闷现象。为消费者呈现了全新茶饮体验。
                                答案茶既有传统奶茶的基础产品，同时又在形式上创新改进，用设备制作消费者问题的答案悬浮于奶茶上，
                                大大增强了与消费者的互动性以及满足消费者的好奇心，进而被广大年轻群体所喜爱。
                            </p>

                            <p className="normal-text normal-color clearfix" style={{ textIndent: "2em"}}>
                                答案茶借鉴了解忧杂货铺的思维和形式，消费者只需在奶茶的腰封上写下心中的问题并默念5遍，
                                拿到奶茶打开茶盖的时候，奶茶上方就会神奇的浮现出刚刚写下问题的答案，
                                类似占卜的神秘形式，增强了奶茶和消费者之间的互动性、参与。
                                例如:问"他还爱我吗"——答"其实你心里已经知道答案了"
                                问"异地恋好难坚持怎么办?"——答"所爱隔山海，山海亦可平"
                                问"我什么时候能瘦下来?"——答"你字丑人胖，我拒绝回答"
                            </p>
                            <p className="normal-text normal-color clearfix" style={{ textIndent: "2em"}}>
                                答案奶茶不仅可以占卜，还有独特的灵性。你可能不知道，答案奶茶有五大分类：
                                买单茶，抽奖茶，求签茶，表白茶，艳遇茶。如果你足够幸运，抽中可以免单；
                                或是抽签测一测你的姻缘、事业、学业，一签即明。
                            </p>

                            <p className="normal-text normal-color clearfix" style={{ textIndent: "2em"}}>
                                答案茶主要有：解忧答案茶、悠心暖茶、无惑纯茶、甜心果茶、倾心奶茶、童心萌茶。
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default News;