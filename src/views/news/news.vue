<template>
    <div class="news-wraper">
        <div class="out-wraper">
            <div class="news-banner">
                <img src="/news/新闻banner.jpg" alt="">
            </div>
            <div class="inner_wraper">
                <ul class="news-content">
                    <li class="left-area">
                        <div class="news-center">
                            <div class="news-title">新闻中心</div>
                        </div>
                        <el-menu
                        default-active="2"
                        class="el-menu-vertical-demo"
                        @open="handleOpen"
                        @close="handleClose">
                        <el-menu-item index="2" @click="toInnerNews">
                            <span slot="title">公司新闻</span>
                        </el-menu-item>
                        <el-menu-item index="2" @click="toOuterNews">
                            <span slot="title">行业新闻</span>
                        </el-menu-item>
                        <!-- <el-submenu index="1" class="prevention-fire" >
                            <template slot="title">
                            <span class="fire-content">行业新闻</span>
                            </template>
                            <el-menu-item-group >
                            <template slot="title"></template>
                            <el-menu-item index="1-1" @click="toOuterNews">选项1</el-menu-item>
                            <el-menu-item index="1-2">选项2</el-menu-item>
                            </el-menu-item-group>
                        </el-submenu> -->
                        </el-menu>
                    </li>
                    <li class="right-area">
                        <div class="news-header">
                            <div class="title-icon">
                                <img src="/news/home.png" alt="">
                            </div>
                            <div class="title-des">
                                <el-breadcrumb separator=">">
                                <el-breadcrumb-item>新闻中心</el-breadcrumb-item>
                                <el-breadcrumb-item>
                                    <router-link :to="routerData">{{routerTitle}}</router-link>
                                </el-breadcrumb-item>
                                </el-breadcrumb>
                            </div>
                        </div>
                        <div ref="newsContent">
                            <router-view></router-view>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<style lang="less" scoped>
.news-wraper{
    margin-top:89px;
    background:#eee;
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
.news-banner{
    width:100%;
    height:449px;
    //background:rgba(18,47,56,1);
    min-width:1366px;
    img{
        width: 100%;
        height: 100%;
    }
}
.news-content{
    display: flex;
    padding-top:30px;
    .left-area{
        width:220px;
        .news-center{
            width:220px;
            height:80px;
            background:rgba(33,208,110,1);
            .news-title{
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
        padding-bottom: 30px;
        width:960px;
        // height:1200px;
        // overflow: auto;
        background:rgba(255,255,255,1);
        .news-header{
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
            let that = this;
            that.routerData = './views/news/innerNews'
            that.$router.push({path:'/index/news/innerNews'})
            that.routerTitle = '公司新闻'
        },
        toOuterNews(){
            let that = this;
            that.$router.push({path:'/index/news/outerNews'})
            that.routerTitle = '行业新闻'
        },
        handleClose(){

        },
        handleOpen(){
            
        }
    },
    mounted(){
        // let height = document.documentElement.clientHeight - 89-449-449 +'px';
        // this.$refs.newsContent.style.height = height;
        this.$router.push({path:'/index/news/outerNews'})
        this.routerTitle = '行业新闻'
    }
}
</script>