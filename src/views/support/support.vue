<template>
    <div class="support-wraper">
        <div class="out-wraper">
            <div class="support-banner">
                <img src="/support/banner.png" alt="">
            </div>
            <div class="inner_wraper">
                <ul class="support-content">
                    <li class="left-area">
                        <div class="support-center">
                            <div class="support-title">客户支持</div>
                        </div>
                        <el-menu
                        default-active="2"
                        class="el-menu-vertical-demo"
                        @open="handleOpen"
                        @close="handleClose">
                        <!-- <el-submenu index="1" class="prevention-fire" >
                            <template slot="title">
                            <span class="fire-content"  @click="toOuterNews">服务内容</span>
                            </template>
                        </el-submenu> -->
                        <el-menu-item index="1" @click="toOuterSupport">
                            <span slot="title">服务内容</span>
                        </el-menu-item>
                        <el-menu-item index="2" @click="toCommon">
                            <span slot="title">常见问题</span>
                        </el-menu-item>
                        <!-- <el-menu-item index="2" @click="toInnerNews">
                            <span slot="title">相关下载</span>
                        </el-menu-item> -->
                        <el-menu-item index="2" @click="toCustomer">
                            <span slot="title">客服中心</span>
                        </el-menu-item>
                        </el-menu>
                    </li>
                    <li class="right-area">
                        <div class="support-header">
                            <div class="title-icon">
                                <img src="/news/home.png" alt="">
                            </div>
                            <div class="title-des">
                                <el-breadcrumb separator=">">
                                <el-breadcrumb-item>首页</el-breadcrumb-item>
                                <el-breadcrumb-item>
                                    <router-link to="/index/support/service">服务内容</router-link>
                                </el-breadcrumb-item>
                                </el-breadcrumb>
                            </div>
                        </div>
                        <!-- <router-link to="/index/support/service"></router-link> -->
                        <div ref="supportContent">
                            <router-view></router-view>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<style lang="less">
.support-wraper{
    margin-top:89px;
    background: #f8f8f8;
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
.support-banner{
    width:100%;
    height:449px;
    //background:rgba(18,47,56,1);
    min-width:1366px;
    img{
        width: 100%;
        height: 100%;
    }
}
.support-content{
    display: flex;
    padding-top:30px;
    
    .left-area{
        width:220px;
        .support-center{
            width:220px;
            height:80px;
            background:rgba(33,208,110,1);
            .support-title{
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
            //border-bottom:none!important;
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
        margin-left:20px;
        margin-bottom: 40px;
        width:960px;
        // height:1200px;
        // overflow: auto;
        background:rgba(255,255,255,1);
        .support-header{
            height:40px;
            background:rgba(236,255,244,1);
            position:relative;
            .title-icon{
                position:absolute;
                width:18px;
                height:18px;
                top:11px;
                left:11px;
                img{
                    width:100%;
                }
            }
            .title-des{
                position:absolute;
                top:13px;
                left:35px;
                
                
                color:rgba(102,102,102,1);
                line-height:48px;
                .el-breadcrumb__inner{
                    color:#666666;
                    font-size:16px;
                    font-family:MicrosoftYaHei;
                    font-weight:bold;
                }
                .el-breadcrumb__inner :nth-child(1)
                {
                    color:rgba(33,208,110,1); 
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
            routerData:"/index/news/innerNews",
            routerTitle:"公司新闻"
        }
    },
    methods:{
        toInnerNews(){
            
        },
        toOuterNews(){
            this.$router.push({path:'/index/support/service'})
        },
        handleClose(){

        },
        handleOpen(){
            
        },
        toCommon(){
            this.$router.push({path:'/index/support/common'})
        },
        toCustomer(){
            this.$router.push({path:'/index/support/customer'})
        }
    },
    mounted(){
        // let height = document.documentElement.clientHeight - 89-449-449 +'px';
        // this.$refs.newsContent.style.height = height;
        this.$router.push({path:'/index/support/service'})
        // this.$router.push({path:'/index/news/outerNews'})
    }
}
</script>