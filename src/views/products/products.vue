<template>
    <div class="products-wraper">
        <div class="out-wraper">
            <div class="products-banner">
                <img src="/产品中心/product.jpg" alt="">
            </div>
            <div class="inner_wraper">
                <ul class="products-content">
                    
                    <li class="left-area">
                        <div class="products-center">
                            <div class="products-title">产品中心</div>
                        </div>
                        <el-menu
                        default-active="2"
                        class="el-menu-vertical-demo"
                        @open="handleOpen"
                        @close="handleClose">
                        <el-submenu index="1" class="prevention-fire">
                            <template slot="title">
                            <span class="fire-content">森林防火移动前指指挥系统</span>
                            </template>
                            <el-menu-item-group>
                            <template slot="title">分组一</template>
                            <el-menu-item index="1-1">选项1</el-menu-item>
                            <el-menu-item index="1-2">选项2</el-menu-item>
                            </el-menu-item-group>
                            <el-menu-item-group title="分组2">
                            <el-menu-item index="1-3">选项3</el-menu-item>
                            </el-menu-item-group>
                            <el-submenu index="1-4">
                            <template slot="title">选项4</template>
                            <el-menu-item index="1-4-1">选项1</el-menu-item>
                            </el-submenu>
                        </el-submenu>
                        
                        <el-menu-item index="2">
                            <span slot="title">森林资源动态监测系统</span>
                        </el-menu-item>
                        <el-menu-item index="3">
                            <span slot="title">森林资源数据采集系统</span>
                        </el-menu-item>
                        <el-menu-item index="4">
                            <span slot="title">林火远程视频监控系统</span>
                        </el-menu-item>
                        <el-menu-item index="5">
                            <span slot="title">航空火场侦查辅助标会系统</span>
                        </el-menu-item>
                        <el-menu-item index="6">
                            <span slot="title">森林火灾扑救通信指挥车</span>
                        </el-menu-item>
                        <el-menu-item index="7">
                            <span slot="title">巡山护林网格化管理系统</span>
                        </el-menu-item>
                        <el-menu-item index="8">
                            <span slot="title">林业信息共享服务平台</span>
                        </el-menu-item>
                        </el-menu>
                    </li>
                    <li class="right-area">
                        <!-- 面板 -->
                        <div class="right-pannel" >
                            <img src="/产品中心/1/pro_1_bg.jpg" alt="" style="width:100%">
                            <div class="title_line">
                            </div>
                            <div class="pannel-des">
                                系统简介
                            </div>
                            <div class="pannel-content">
                                <p>森林防火移动前指指挥系统（平板标绘系统）是一套为森林防火扑救指挥提供火场态势标绘和火场信息采集的便携终端。利用智能移动终端，系统主要实现扑火队员实时定位、火场态势标绘、多终端协同标绘、现场音视频数据采集、森林资源和防火专题数据查询、监控视频查看、标绘成果打印等功能。</p>
                            </div>    
                        </div>
                        <!-- 特点 -->
                        <div class="Characteristic">
                            <div class="title_line">
                            </div>
                            <div class="Characteristic-title">
                                系统特点
                            </div>
                            <div class="Characteristic-content">
                                <img src="/产品中心/1/系统特点备用.png" alt="">
                            </div>
                        </div>
                        <!-- 功能 -->
                        <div class="function">
                            <div class="title_line">
                            </div>
                            <div class="function_des">
                                系统功能
                            </div>
                            <div class="function_content">
                                <ul>
                                    <li v-for="(item,index) in functionData" :key="index">
                                        <p>{{item.title}}</p>
                                        <p class="content-des">{{item.des}}</p>
                                        <div>
                                            <ul v-if="item.isShow">
                                                <li>
                                                    <img :src="item.img1" alt="">
                                                    <div>
                                                        <span>{{item.img1Title}}
                                                        </span>
                                                    </div>
                                                </li>
                                                <li>
                                                    <img :src="item.img2" alt="">
                                                    <div>
                                                        <span>{{item.img2Title}}</span>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<style lang="less">
.products-wraper{
    margin-top:89px;
    background:#f8f8f8;
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
    width:4px;
    height:24px;
    background:rgba(255,255,255,1);
    border-radius:2px;
}
.products-banner{
    width:100%;
    height:449px;
    min-width:1366px;
    background:rgba(18,47,56,1);
    img{
        width: 100%;
        height: 100%;
        }

}
.products-content{
    display: flex;
    padding-top:30px;
    
    .left-area{
        width:220px;
        .products-center{
            width:220px;
            height:80px;
            background:rgba(33,208,110,1);
            .products-title{
                font-size:24px;
                font-family:MicrosoftYaHei;
                font-weight:bold;
                color:rgba(255,255,255,1);
                padding-top: 27px;
                padding-left: 18px;
            }  
        }
        .el-menu-item{
            height:60px;
            background:rgba(255,255,255,1);
            border:1px solid rgba(181,231,221,1);
            border-bottom:none;
            font-size:14px;
            font-family:MicrosoftYaHei;
            font-weight:400;
            color:rgba(102,102,102,1);
            line-height:59px;
        }
        .prevention-fire{
            border:1px solid rgba(181,231,221,1);
            background:rgba(255,255,255,1)!important;
            border-bottom:none!important;
        }
        .el-submenu__icon-arrow{
            top: 56%;
            right: 9px;
        }
        .el-menu-item:last-child{
            border-bottom:1px solid rgba(181,231,221,1);
        }
        .prevention-fire:hover .fire-content{
            color:rgba(33,208,110,1)
        }
        .el-menu-item:hover{
            color:rgba(33,208,110,1);
            background:rgba(238,253,245,1);            
        }
    }
    .right-area{
        margin-bottom:100px;
        width:958px;
        margin-left:22px;
        position:relative;
        border:1px solid rgba(181,231,221,1);
        background:#fff;
        //面板
        .right-pannel{
            width:958px;
            height:300px;
            opacity:0.7;
            .title_line{
                position:absolute;
                top:42px;
                left:21px;
            }
            .pannel-des{
                position:absolute;
                font-size:22px;
                font-family:MicrosoftYaHei;
                font-weight:bold;
                color:rgba(250,250,250,1);
                top:42px;
                left:41px;
            }
            .pannel-content p{
                position:absolute;
                left:40px;
                top:98px;
                width:865px;
                height:89px;
                font-size:16px;
                font-family:MicrosoftYaHei;
                font-weight:400;
                color:rgba(250,250,250,1);
                line-height:36px;
            }
        }
        //特点
        .Characteristic{
            position: relative;
            border-bottom:1px solid rgba(181,231,221,1);
            .title_line{
                position:absolute;
                left:21px;
                top:48px;
                background:rgba(27,182,95,1)
            }
            .Characteristic-title{
                position:absolute;
                left:41px;
                top:48px;
                font-size:22px;
                font-family:MicrosoftYaHei;
                font-weight:bold;
                color:rgba(27,182,95,1);
            }
            .Characteristic-content img{
                margin:100px 0 41px 41px; 
            }
        }
        //功能
        .function{
            position:relative;
            //height:500px;
            width:100%;
            .title_line{
                position:absolute;
                background:rgba(27,182,95,1);
                left:21px;
                top:42px;
            }
            .function_des{
                position:absolute;
                color:rgba(27,182,95,1);
                left:41px;
                top:42px;
                font-size:20px;
                font-family:MicrosoftYaHei;
                font-weight:bold;
                color:rgba(27,182,95,1);
            }
            .function_content{
                padding-top:100px;
                li{
                    margin-bottom: 16px;
                    p{
                        padding-left:45px;
                        font-size:16px;
                        font-family:MicrosoftYaHei;
                        font-weight:bold;
                        color:rgba(51,51,51,1);
                        margin-bottom:16px;
                    }
                    .content-des{
                        padding-left: 45px;
                        font-size:14px;
                        line-height: 30px;
                        font-weight: 400;
                        font-family:MicrosoftYaHei;
                        color:#666666;
                        width:888px;
                    }
                    ul{
                        display:flex;
                        justify-content: center;
                        li{
                            text-align: center;
                            img{
                                margin:16px 8px;
                                width:436px;
                                height:273px;
                            }
                            span{
                                width:897px;
                                padding-left: 46px;
                                padding-right:46px;
                                font-size:14px;
                                font-family:MicrosoftYaHei;
                                font-weight:400;
                                color:rgba(102,102,102,1);
                            }
                            
                        }
                    }
                }
            }
        }
    }
}
</style>
<script>
export default {
    data(){
        return {
            functionData:[
                {
                    title:"1、定位及分享",
                    des:"实时获取和分享扑火队员位置信息、记录行进轨迹，自动上传位置信息到指挥中心，方便统一指挥调度。",
                    img1:"/产品中心/1/1.定位及分享.png",
                    img2:"/产品中心/1/1_2轨迹回放.png",
                    img1Title:"图 定位及分享",
                    img2Title:"图 轨迹回放",
                    isShow:true
                },
                {
                    title:"2、火场态势标会",
                    des:`通过触控勾绘，可快速在地图上绘制火点、烟点、火线、隔离带、
                    队伍部署等各类火场态势元素，支持对标绘元素添加图片、音视频等附件信息。
                    火场标绘成果支持多模板出图打印。`,
                    img1:"/产品中心/1/2_1态势标绘.png",
                    img2:"/产品中心/1/2_2态势标绘_出图打印.png",
                    img1Title:"图 态势标会",
                    img2Title:"图 态势标会_出图",
                    isShow:true
                },
                {
                    title:"3、多终端协同标会",
                    des:"火场标绘成果可上传至指挥中心云端，实现同一火场多终端、多系统的协同标绘。",
                    img1:"",
                    img2:"",
                    img1Title:"",
                    img2Title:"",
                    isShow:false
                },
                {
                    title:"4、森林资源和防火专题数据查询",
                    des:"通过具体位置、范围、缓冲区等多种查询方式，用户可查看森林分布、林种分布等森林资源专题数据，以及瞭望塔、取水点、重点防火对象等防火专题数据。",
                    img1:"/产品中心/1/4地类分布.png",
                    img2:"",
                    img1Title:"图 地图分类",
                    img2Title:"",
                    isShow:true
                },
                {
                    title:"5、监控视频查看",
                    des:"查看监控站点的实时监控视频，并支持云台控制。",
                    img1:"/产品中心/1/5视频监控.png",
                    img2:"",
                    img1Title:"图 视频监控",
                    img2Title:"",
                    isShow:true
                }
            ]
        }
    },
    methods:{
        handleClose(){

        },
        handleOpen(){
            
        }
    }
}
</script>