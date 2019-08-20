<template>
    <div class="solution-wraper">
        <div class="out-wraper">
            <div class="solution-banner">
                <img src="/solution/解决方案banner.jpg" alt="">
            </div>
            <div class="inner_wraper">
                <ul class="solution-content">
                    <li class="left-area">
                        <div class="solution-center">
                            <div class="solution-title">解决方案</div>
                        </div>
                        <el-menu
                        default-active="2"
                        class="el-menu-vertical-demo"
                        @open="handleOpen"
                        @close="handleClose">
                        
                        <!-- <el-submenu index="1" class="prevention-fire">
                            <template slot="title">
                            <span class="fire-content">森林防火</span>
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
                        </el-submenu> -->
                        <el-menu-item index="1">
                            <span slot="title">林业资源管理</span>
                        </el-menu-item>
                        <el-menu-item index="2">
                            <span slot="title">林业资源管理</span>
                        </el-menu-item>
                        <el-menu-item index="3">
                            <span slot="title">林业信息共享</span>
                        </el-menu-item>
                        <el-menu-item index="4">
                            <span slot="title">火场救灾通信指挥车</span>
                        </el-menu-item>
                        </el-menu>
                    </li>
                    <li class="right-area">
                        <div v-for="(item,index) in solutionData" :key="index">
                            <div class="title_wraper">
                                <div class="title_line"></div>
                                <div class="title_des">{{item.title}}</div>
                            </div>
                            <div class="solutions_des" v-show="item.desShow">
                                <p>{{item.des}}</p>
                            </div>
                            <div class="litab-wraper" v-show="item.liShow">
                                <div class="litab" v-for="(item2,index2) in item.liData" :key="index2" v-if="item.liShow">
                                    <div class="listStyle"></div> 
                                    <div class="itemLi">{{item2}}</div>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<style lang="less">
.solution-wraper{
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
.solution-banner{
    width:100%;
    height:449px;
    min-width:1366px;
    background:rgba(18,47,56,1);
    img{
        width: 100%;
        height: 100%;
        }

}
.solution-content{
    display: flex;
    padding-top:30px;
    
    .left-area{
        width:220px;
        .solution-center{
            width:220px;
            height:80px;
            background:rgba(33,208,110,1);
            .solution-title{
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
        .litab-wraper{
            padding-top:31px;
            padding-bottom:31px;
        }
        margin-left:20px;
        margin-bottom: 40px;
        padding-bottom: 30px;
        width:960px;
        background:rgba(255,255,255,1);
        border:1px solid rgba(181,231,221,1);
        .title_wraper{
            display: flex;
            padding-left:21px;
            padding-top:31px; 
            .title_line{
                width:4px;
                height:24px;
                background:rgba(33,208,110,1);
                border-radius:2px;
            }
            .title_des{
                padding-left:20px;
                font-size:20px;
                font-family:MicrosoftYaHei;
                font-weight:bold;
                color:rgba(33,208,110,1);
            }            
        }
        .solutions_des{
            padding-left:40px;
            width:864px;
            height:125px;
            font-size:16px;
            font-family:MicrosoftYaHei;
            font-weight:400;
            color:rgba(51,51,51,1);
            line-height:36px;
            padding-top:31px;
            padding-bottom: 31px;
        }
        .litab{
            justify-content: flex-start;
            position: relative;
            .listStyle{
                position:absolute;
                left:39px;
                top:12px;
                width:7px;
                height:7px;
                background:rgba(33,208,110,1);
                opacity:0.65;
                border-radius:50%;
            }
            .itemLi{
                padding-left: 54px;
                font-size:16px;
                font-family:MicrosoftYaHei;
                font-weight:400;
                color:rgba(51,51,51,1);
                height:30px;
                line-height:30px;
            }
        }
    }
}
</style>
<script>
export default {
    data(){
        return {
            solutionData:[
                {
                    title:"方案概述",
                    des:`加强信息技术在林业灾害监测、预警预报和应急防控中的集成应用，以航空、卫星、地面的多尺度立体监测体系为基础，结合图像传输、系统仿真、专家知识、远程诊断、决策分析、信息发布等功能，实现对林火灾害、突发事件的应急防控能力，建成以火灾监测为基础，灾情预警为前提，信息快速传输为保障，应急指挥为中心，预案处置为保障，应急处理为后备的应急管理体系。`,
                    liData:[
                        ""
                    ],
                    desShow:true,
                    liShow:false
                },
                {
                    title:"相关系统",
                    des:"",
                    liData:["森林防火移动前线指挥系统",
                    "林火远程视频监控系统",
                    "航空火场侦查辅助标绘系统"],
                    desShow:false,
                    liShow:true
                },
                {
                    title:"相关案例",
                    des:"",
                    liData:["国家林业局森林草原防火管理信息系统",
                    "内蒙古自治区森林草原防火管理系统",
                    "吉林省森林草原防火综合管理系统",
                    "福建省森林草原防火综合管理系统",
                    "河北省森林草原防火、森林公安管理信息系统",
                    "陕西省森林草原防火综合管理系统",
                    "湖南省森林草原防火、森林公安管理信息系统",
                    "湖北省森林公安、森林草原防火管理信息系统",
                    "重庆市森林草原防火管理信息系统",
                    "大兴安岭森林草原防火指挥决策系统"
                    ],
                    desShow:false,
                    liShow:true
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