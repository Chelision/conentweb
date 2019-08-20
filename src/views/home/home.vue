<template>
    <div class="home">
        <div class="banner">
            <el-carousel height="797px">
            <el-carousel-item v-for="(item,index) in bannerData" :key="index">
                <img :src="item.img" alt="">
            </el-carousel-item>
            </el-carousel>
        </div>
        <!-- 新闻中心-->
        <div class="out_wraper" id="news">
            <div class="inner_wraper">
                <section>      
                    <div class="news">
                        <div class="first_title">
                            新闻中心
                        </div>
                        <div class="title_line"></div>
                        <div class="second_title">
                            <div class="company_news">企业新闻</div>
                            <div class="industry_news">行业新闻</div>
                        </div>
                        <div class="content">
                            <div class="content1" v-for="(item,index) in contentData" :key="index">
                                <div class="top">
                                    <div class="logo">
                                        <img :src="item.icon" alt="">
                                        <span class="years">{{item.year}}</span>
                                        <span class="nowdays">{{item.day}}</span>
                                    </div>
                                    <div class="title">
                                        {{item.title}}
                                    </div>
                                </div>
                                <div class="news_content">
                                    {{item.des}}
                                    <button class="details">查看详情</button>
                                </div>
                                
                            </div>
                            <!-- <div class="content2">
                                    <div class="top">
                                        <div class="logo">
                                            <img src="../../../public/home/日历.png" alt="">
                                            <span class="years">2019</span>
                                            <span class="nowdays">0402</span>
                                        </div>
                                        <div class="title">
                                            abcd
                                        </div>
                                    </div>
                                    <div class="news_content">
                                        abcdefg
                                        <button class="details">查看详情</button>
                                    </div>
                            </div> -->
                            <!-- <div class="content3">
                                <div class="top">
                                    <div class="logo">
                                        <img src="../../../public/home/日历.png" alt="">
                                        <span class="years">2019</span>
                                        <span class="nowdays">0402</span>
                                    </div>
                                    <div class="title">
                                        abcd
                                    </div>
                                </div>
                                <div class="news_content">
                                    abcdefg
                                    <button class="details">查看详情</button>
                                </div>
                            </div> -->
                        </div>
                        <div class="more_items">
                            查看更多案例
                        </div>
                    </div>
                </section>
            </div>
        </div>
        <!-- 产品中心 -->
        <div class="out_wraper" id="products">
            <div class="product">
                <div class="product_title">
                        产品中心
                        <div class="title_line">
                        </div>
                </div>
                <div class="product_content">
                    <div class="left">
                        <img class="left1" src="../../../public/home/左.png" alt="">
                        <img class="left2" src="../../../public/home/左2.png" alt="">
                    </div>
                    <div class="inner_wraper">
                        <div class="items_wraper">
                            <div class="items1" 
                            v-for="(items,index) in productsData" 
                            :key=index 
                            @mouseenter="inter(items)" 
                            @mouseleave="leave(items)">
                                <div class="logo">
                                    <img :src="items.icon" alt="">
                                </div>
                                <div class="logo_line">
                                </div>
                                <div class="logo_title">
                                    {{items.title}}
                                </div>
                                <div class="items1_content" v-show="items.showContent">
                                    {{items.content}}
                                </div>
                                <div class="more_details" v-show="items.showButton">
                                    查看更多
                                </div>
                            </div>
                            <div class="items2" >
                            </div>
                        </div>
                    </div>
                    <div class="right">
                        <img class="right1" src="../../../public/home/右.png" alt="">
                        <img class="right2" src="../../../public/home/右2.png" alt="">
                    </div>
                </div>
            </div>
            
        </div>
        <!-- 解决方案 -->
        <div class="out_wraper" id="solution">
            <div class="inner_wraper">
                <div class="solution">
                    <div class="first_title">
                        <p>解决方案</p>
                        <div class="title_line">
                        </div>
                    </div>        
                    <div class="second_title">
                        <p>为你提供森林防火，林业资源管理系统，林业信息共享平台，通信指挥车设计等解决方案</p>
                    </div>
                    <div class="solution-content" >
                        <!-- <div class="solution-content-wraper">

                        </div> -->
                        <div class="solution-right">
                            <div :class="item.className" 
                            v-for="(item,index) in solutionData" 
                            :key="index"
                            @mouseenter="interSolutions(item)">
                                <div class="top">
                                    <div class="logo">
                                        <img :src="item.icon" alt="">
                                    </div>
                                    <div class="first-title">
                                        {{item.firstTitle}}
                                    </div>
                                    <div class="second-title">
                                        {{item.secondTitle}}
                                    </div>
                                </div>
                                <div class="bottom">
                                    <ul v-show="item.titleShow">
                                        <li>{{item.items1Title}}</li>
                                        <li>{{item.items2Title}}</li>
                                        <li>{{item.items3Title}}</li>
                                    </ul>
                                    <div class="left-content" v-show="item.detailShow">
                                        <div class="span">
                                            加强信息技术在林业灾害监测、预警预报和应急防控中的集成应用，以航空、航天、地面的多尺度立体监测体系为基础，结合图像传输、系统仿真、专家知识、远程诊断、决策分析、信息发布等功能，实现对林火灾害、疫源疫病、突发事件的应急防控能力，建成以灾害监测为基础，灾情预警为前提，信息快速传输为保障，应急指挥为中心，预案处置为保障，评估修复为后备的应急管理体系。
                                        </div>
                                        <div class="more-details">
                                            <button>
                                                查看更多
                                            </button>
                                        </div>
                                        <div class="left-content-bottom">
                                            <div class="items">
                                                <span>森林防火指挥系统</span>
                                                <img src="../../../public/home/解决方案_详情.png" alt="">
                                            </div>
                                            <div class="items">
                                                <span>林火远程视频监控系统</span><img src="../../../public/home/解决方案_详情.png" alt="">
                                            </div>
                                            <div class="items">
                                                <span>航空火场侦查辅助坐标系统</span><img src="../../../public/home/解决方案_详情.png" alt="">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
        <!-- 关于我们 -->
        <div class="out_wraper" id="about">
            <div class="aboutUs">
                <div class="inner_wraper">
                    <div class="header-top">
                        <p>关于我们</p>
                        <div class="title_line">
                        </div>
                    </div>
                    <div class="about-content">
                        <img src="/home/关于我们_bg.jpg" alt="">
                        <p class="right-content">
                            北京大陆康腾科技股份有限公司成立于2003年，是国内最早进入林业信息化领域的领军企业之一，是“智慧林业”整体解决方案服务提供商。公司致力于3S、云计算、物联网、大数据等信息技术的研发和推广，服务于森林防火、资源、公安、退耕、濒危物种、种苗、航空护林、大熊猫中心等单位，为各级林业部门提供专业的整体解决方案。
                        </p>
                        <button class="more-content">查看更多</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="less" scoped>

.banner{
    .el-carousel__item{
        height:797px;
        min-width: 1366px;
        img{
            width:100%;
            height:100%;
        }
    }
}
.out_wraper{
    width: 100%;
    text-align: center;
}
.inner_wraper{
    width: 1200px;
    margin:0 auto
}
.clearFix::after{
    display: block;
    content: "";
    clear: both;
}
.title_line{
    margin:20px auto;
    width:52px;
    height:2px;
    background:rgba(10,187,88,1);
    border-radius:1px;
}
//新闻中心
.news{
    padding-top:30px;
    .first_title{
        margin:0 auto;
        width:112px;
        height:27px;
        font-size:28px;
        font-family:MicrosoftYaHei;
        font-weight:400;
        color:rgba(50,53,52,1);
    }
    .second_title{
        margin-top:31px;
        display: flex;
        justify-content: center;
        .company_news{
            width:160px;
            height:40px;
            line-height: 40px;
            background:rgba(255,255,255,1);
            border:1px solid rgba(33,208,110,1);
            border-radius:6px 0px 0px 6px;
            box-sizing:border-box;
        }
        .industry_news{
            width:160px;
            height:40px;
            line-height: 40px;
            background:rgba(33,208,110,1);
            border-radius:0px 6px 6px 0px;
        }
    }
    .content{
        margin: 30px 0;
        text-align: center;
        height:250px;
        display: flex;
        justify-content: center;
        .content1{
            position: relative;
            margin:0 5px;
            width:390px;
            height:250px;
            background:rgba(255,255,255,1);
            border:1px solid rgba(221,221,221,1);
            text-align: left;
            .top{
                display: flex;
                justify-content: flex-start;
                .logo{
                    width:84px;
                    height:70px;
                    background:rgba(33,208,110,1);
                    position: relative;
                    img{
                        width: 100%;
                    }
                    .years{
                        position: absolute;
                        top:5px;
                        left:24px;
                        width:37px;
                        height:12px;
                        font-size:16px;
                        font-family:MicrosoftYaHei;
                        font-weight:400;
                        color:rgba(255,255,255,1);
                        line-height:24px;
                    }
                    .nowdays{
                        position: absolute;
                        top:40px;
                        left:15px;
                        //width:54px;
                        height:15px;
                        font-size:20px;
                        font-family:MicrosoftYaHei;
                        font-weight:400;
                        color:rgba(255,255,255,1);
                        line-height:24px;
                    }
                }
                .title{
                    padding:15px;
                    width:258px;
                    height:38px;
                    font-size:16px;
                    font-family:MicrosoftYaHei;
                    font-weight:400;
                    color:rgba(51,51,51,1);
                    line-height:24px;
                }
            }
            .news_content{
                padding: 22px;
                font-size:14px;
                font-family:MicrosoftYaHei;
                font-weight:400;
                color:rgba(102,102,102,1);
                line-height: 30px;
                .details{
                    position: absolute;
                    width:98px;
                    height:32px;
                    background:rgba(255,255,255,1);
                    border:1px solid rgba(27,182,95,1);
                    border-radius:6px;
                    bottom: 20px;
                    right:20px;
                }
            }
            
        }
    }
    .more_items{
        margin: 30px auto;
        width:200px;
        height:40px;
        line-height: 40px;
        background:rgba(255,254,254,1);
        border:1px solid rgba(33,208,110,1);
        border-radius:6px;
    }
}
//产品中心
.product{
    .product_title{
        background: #eee;
        padding-top:32px;
        height:102px;
        font-size:28px;
        font-family:MicrosoftYaHeiUI;
        font-weight:400;
        color:rgba(55,61,65,1);
        line-height:38px;
    }
    .product_content{
        height:450px;
        background:rgba(1,119,56,1);
        //opacity:0.16;
        position: relative;
        .left{
            position:absolute;
            .left1{
                position: absolute;
                left:10px;
                top:114px;
            }
            .left2{
                position:absolute;
                left:10px;
                top:213px;
            }
        }
        .inner_wraper{
            .items_wraper{
                display: flex;
                .items1{
                    width:240px;
                    height:450px;
                    background:rgba(0,0,0,1);
                    opacity:0.3;
                    position:relative;
                    .logo{
                        padding-top:152px;
                        padding-left: 96px;
                        width:49px;
                        height:60px;
                        img{
                            width:100%;
                        }
                    }
                    .logo_line{
                        width:80px;
                        height:1px;
                        background:rgba(255,255,255,1);
                        margin:33px auto 27px;
                    }
                    .logo_title{
                        text-align: center;
                        width:129px;
                        height:40px;
                        font-size:16px;
                        font-family:MicrosoftYaHei-Bold;
                        font-weight:bold;
                        padding-left:57px;
                        color:rgba(255,255,255,1);
                        line-height:24px;
                    }
                    .items1_content{
                        padding:22px;
                        text-align:left;
                        font-size:14px;
                        font-family:MicrosoftYaHei;
                        font-weight:400;
                        color:rgba(255,255,255,1);
                        line-height:24px;
                    }
                    .more_details{
                        position:absolute;
                        bottom:30px;
                        width:116px;
                        height:36px;
                        line-height:36px;
                        background:none;
                        border:1px solid rgba(255,255,255,1);
                        border-radius:6px;
                        font-size:14px;
                        font-family:MicrosoftYaHei;
                        font-weight:400;
                        color:rgba(255,255,255,1);
                        left:62px;
                    }
                }
                .items1:nth-child(2){
                    background:rgba(0,0,0,1);
                    opacity:0.2;
                }
                .items1:nth-child(3){
                    background:rgba(0,0,0,1);
                    opacity:0.41;
                }
                .items1:nth-child(4){
                    background:rgba(0,0,0,1);
                    opacity:0.19;
                }
                .items1:nth-child(5){
                    background:rgba(0,0,0,1);
                    opacity:0.41;
                }
                .items1:hover{
                    width:240px;
                    height:450px;
                    background:rgba(33,208,110,1);
                    opacity:0.76;
                    position:relative;
                    .logo{
                        padding-top:40px;
                        padding-left: 96px;
                        width:49px;
                        height:60px;
                        img{
                            width:100%;
                        }
                    }
                    .logo_line{
                        width:80px;
                        height:1px;
                        background:rgba(255,255,255,1);
                        margin:33px auto 27px;
                    }
                    .logo_title{
                        text-align: center;
                        width:129px;
                        height:40px;
                        font-size:16px;
                        font-family:MicrosoftYaHei-Bold;
                        font-weight:bold;
                        padding-left:57px;
                        color:rgba(255,255,255,1);
                        line-height:24px;
                    }
                    .items1_content{
                        padding:22px;
                        text-align:left;
                        font-size:14px;
                        font-family:MicrosoftYaHei;
                        font-weight:400;
                        color:rgba(255,255,255,1);
                        line-height:24px;
                    }
                    .more_details{
                        position:absolute;
                        bottom:30px;
                        width:116px;
                        height:36px;
                        line-height:36px;
                        background:none;
                        border:1px solid rgba(255,255,255,1);
                        border-radius:6px;
                        font-size:14px;
                        font-family:MicrosoftYaHei;
                        font-weight:400;
                        color:rgba(255,255,255,1);
                        left:62px;
                    }
                }
                
            }
            
            
            
        }
        .right{
            position:absolute;
            top:0;
            right: 0;
            .right1{
                position: absolute;
                right:10px;
                top:114px;
            }
            .right2{
                position:absolute;
                right: 10px;
                top:213px;
            }
        }
    }
}
//解决方案
.solution{
    width:100%;
    height:804px;
    background:rgba(255,255,255,1);
    padding-top:90px;
    .first_title{
        font-size:28px;
        font-family:MicrosoftYaHeiUI;
        font-weight:400;
        color:rgba(55,61,65,1);
        line-height:38px;
        margin-bottom:31px;
    }
    .second_title{
        font-size:14px;
        font-family:MicrosoftYaHei;
        font-weight:400;
        color:rgba(68,72,74,1);
        line-height:38px;
    }
    .solution-content{
        position:relative;
        // .solution-content-wraper{
        //     position:absolute;
        //     left:5px;
        //     top:5px;
        //     width:1190px;
        //     height:530px;
        //     background:none;
        // }
        .solution-right{
            display: flex;
            .solution-small{
                width:219px;
                height:540px;
                margin-right: 1px;
                background:rgba(221,221,221,1);
                .top{
                    width:219px;
                    height:150px;
                    background:rgba(118,118,118,1);
                    text-align:center;
                    
                    .logo{
                        padding-top:20px;
                        img{
                            width:35px;
                            height:40px;
                        }
                    }
                    .first-title{
                        font-size:18px;
                        font-family:MicrosoftYaHei-Bold;
                        font-weight:bold;
                        color:rgba(255,255,255,1);
                        line-height:38px;
                    }
                    .second-title{
                        font-size:14px;
                        font-family:MicrosoftYaHei;
                        font-weight:400;
                        color:rgba(237,255,245,1);
                        line-height:38px;
                    }
                }
                .bottom{
                    padding:10px 55px;
                    li{
                        margin-top:50px;
                        width:112px;
                        height:36px;
                        font-size:16px;
                        font-family:MicrosoftYaHei;
                        font-weight:400;
                        color:rgba(55,61,65,1);
                    }
                }
            }
            .solution-big{
                width:540px;
                height:540px;
                margin-right: 1px;
                //background:rgba(221,221,221,1);
                .top{
                    width:540px;
                    height:150px;
                    background:rgba(33,208,110,1);
                    text-align:center;
                    .logo{
                        padding-top:20px;
                        img{
                            width:35px;
                            height:40px;
                        }
                    }
                    .first-title{
                        font-size:18px;
                        font-family:MicrosoftYaHei-Bold;
                        font-weight:bold;
                        color:rgba(255,255,255,1);
                        line-height:38px;
                    }
                    .second-title{
                        font-size:14px;
                        font-family:MicrosoftYaHei;
                        font-weight:400;
                        color:rgba(237,255,245,1);
                        line-height:38px;
                    }
                }
                .bottom{
                    .span{
                        margin-top:40px;
                        height:102px;
                        font-size:14px;
                        font-family:MicrosoftYaHei;
                        font-weight:400;
                        color:rgba(102,102,102,1);
                        line-height:22px;
                        text-align: left;
                        padding-bottom:40px;
                    }
                    .left-content{
                        text-align: left;
                        padding:40px 20px 0 20px;
                        height:150px;
                        font-size:14px;
                        font-family:MicrosoftYaHei;
                        font-weight:400;
                        color:rgba(102,102,102,1);
                        line-height:22px;
                    }
                    .more-details{
                        height:40px;
                        position:relative;
                        button{
                            position:absolute;
                            width:98px;
                            height:32px;
                            background:rgba(255,255,255,1);
                            border:1px solid rgba(27,182,95,1);
                            border-radius:6px;
                            right:19px;
                        }
                    }  
                    .left-content-bottom{
                    text-align: left;
                    .items{
                        margin:11px 20px 11px 0px;
                        display:inline-block;
                        width:240px;
                        height:48px;
                        line-height: 48px;
                        background:rgba(242,242,242,1);
                        text-align: left;
                        position:relative;
                        span{
                            padding-left:20px;
                            font-size:12px;
                            font-family:MicrosoftYaHei;
                            font-weight:400;
                            color:rgba(51,51,51,1);
                            line-height:22px;
                        }
                        img{
                            position:absolute;
                            right:10px;
                            top:16px;
                        }
                    }
                    .items:nth-child(2){
                        margin:0;
                    }
                }
                }
            }
        }
    }
}
//关于我们
.aboutUs{
    height:600px;
    background:rgba(247,247,247,1);
    .header-top{
        padding-top:35px;
        p{
            font-size:28px;
            font-family:MicrosoftYaHeiUI;
            font-weight:400;
            color:rgba(55,61,65,1);
            line-height:38px;
        }
    }
    .about-content{
        width:1200px;
        height:420px;
        background:rgba(0,255,125,1);
        box-shadow:0px 0px 8px 0px rgba(199,199,199,1);
        position:relative;
        img{
            width:100%;
            height:100%;
        }
        p{
            position:absolute;
            top:95px;
            right:30px;
            width:360px;
            height:138px;
            font-size:14px;
            font-family:MicrosoftYaHei;
            font-weight:400;
            color:rgba(255,255,255,1);
        }
        .right-content{
            text-align:left;
            line-height:30px;
        }
        .more-content{
            position: absolute;
            width:98px;
            height:36px;
            border:2px solid rgba(255,255,255,1);
            border-radius:6px;
            right:150px;
            bottom:65px;
        }

    }
}
</style>
<script>
export default {
    data(){
        return {
            isIn:false,
            //轮播图数据
            bannerData:[
                {
                    img:"../../../../home/banner1.jpg"
                },
                {
                    img:"../../../../home/banner2.jpg"
                },
                {
                    img:"../../../../home/banner3.jpg"
                }
            ],
            //产品中心数据
            productsData:[
                {
                    icon:"/home/product_1.png",
                    title:"森林防火移动前线指挥系统",
                    showLine:"true",
                    content:"森林防火移动前指指挥系统（平板标绘系统）是一套为森林防火扑救指挥提供火场态势标绘和火场信息采集的便携终端。",
                    showContent:false,
                    showButton:false,
                },
                {
                    icon:"/home/product_2.png",
                    title:"森林资源动态监测系统",
                    showLine:"true",
                    content:"abcd",
                    showButton:false,
                },
                {
                    icon:"/home/product_3.png",
                    title:"森林资源数据采集系统",
                    showLine:"true",
                    content:"abcd",
                    showButton:false,
                },
                {
                    icon:"/home/product_4.png",
                    title:"林火远程视频监控系统",
                    showLine:"true",
                    content:"abcd",
                    showButton:false,
                },
                {
                    icon:"/home/product_5.png",
                    title:"航空火场侦查辅助标会系统",
                    showLine:"true",
                    content:"abcd",
                    showButton:false,
                }
            ],
            //解决方案数据
            solutionData:[
                {
                    icon:"/home/soulation_01.png",
                    firstTitle:"林业资源管理",
                    secondTitle:"“互联网+”、大数据、智能化",
                    items1Title:"巡山护林网格化 管理系统",
                    items2Title:"森林资源动态监测系统",
                    items3Title:"森林资源数据采集系统",
                    titleShow:false,
                    className:"solution-big",
                    detailShow:true
                },
                {
                    icon:"/home/soulation_02.png",
                    firstTitle:"林业资源管理",
                    secondTitle:"“互联网+”、大数据、智能化",
                    items1Title:"巡山护林网格化 管理系统",
                    items2Title:"森林资源动态监测系统",
                    items3Title:"森林资源数据采集系统",
                    titleShow:true,
                    className:"solution-small",
                    detailShow:false
                },
                {
                    icon:"/home/soulation_03.png",
                    firstTitle:"林业信息共享",
                    secondTitle:"信息技术、数据共享",
                    items1Title:"林业信息共享 服务平台",
                    items2Title:"",
                    items3Title:"",
                    titleShow:true,
                    className:"solution-small",
                    detailShow:false
                },
                {
                    icon:"/home/soulation_04.png",
                    firstTitle:"火场救灾通信指挥车",
                    secondTitle:"稳定可靠、功能齐全",
                    items1Title:"森林火灾扑救 应急通信指",
                    items2Title:"",
                    items3Title:"",
                    titleShow:true,
                    className:"solution-small",
                    detailShow:false
                }
            ],
            contentData:[
                {
                    icon: "/home/calendar.png",
                    year: "2019",
                    day: "04-12",
                    title: "通信指挥车正式启用——开启林业应用新生",
                    des: "2019年3月8日至10日，中国林学会计算机应用分会在北京召开“换届选举暨2019年学术研讨会”，我公司应邀出席。大会审议通过了第六届理事会工作报告..."
                },
                {
                    icon: "/home/calendar.png",
                    year: "2019",
                    day: "04-12",
                    title: "通信指挥车正式启用——开启林业应用新生",
                    des: "2019年3月8日至10日，中国林学会计算机应用分会在北京召开“换届选举暨2019年学术研讨会”，我公司应邀出席。大会审议通过了第六届理事会工作报告..."
                },
                {
                    icon: "/home/calendar.png",
                    year: "2019",
                    day: "04-12",
                    title: "通信指挥车正式启用——开启林业应用新生",
                    des: "2019年3月8日至10日，中国林学会计算机应用分会在北京召开“换届选举暨2019年学术研讨会”，我公司应邀出席。大会审议通过了第六届理事会工作报告..."
                }
            ]
        }
    },
    methods:{
        //产品离开和进入的样式
        inter(items){
            items.showButton = true;
            items.showContent = true
        },
        leave(items){
            items.showButton = false;
            items.showContent = false
        },
        //解决方案进入和离开的样式
        interSolutions(items){
            let that = this;
            for(let i = 0; i <that.solutionData.length; i++)
            {
                //console.log(that.solutionData[i])
                that.solutionData[i].titleShow = true;
                that.solutionData[i].detailShow= false
                that.solutionData[i].className = "solution-small"
            }
            items.titleShow = false;
            items.detailShow = true;
            items.className = "solution-big"
        },
    },
    mounted(){
        //console.log(this)
        //location.hash="#solution";
        
    }
}
</script>

