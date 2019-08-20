<template>
  <div class="index">
      <div class="index-header-wraper">
        <header class="header">
        <div class="header_logo">
          <img :src="logoData" alt="">
        </div>
        <nav class="header_nav">
            <!-- <el-menu class="el-menu-demo" mode="horizontal" @select="handleSelect">
            <el-menu-item index="1">首页</el-menu-item>
            <el-menu-item index="2">产品中心</el-menu-item>
            <el-menu-item index="3">解决方案</el-menu-item>
            <el-menu-item index="4">新闻中心</el-menu-item>
            <el-menu-item index="5">客户支持</el-menu-item>
            <el-menu-item index="6">关于我们</el-menu-item>
            <el-menu-item index="7">招贤纳士</el-menu-item>
          </el-menu> -->
          <ul>
            <li :class="{isActive:index == 1}" @click="toHome">首页</li>
            <li :class="{isActive:index == 2}" @click="toProducts">产品中心</li>
            <li :class="{isActive:index == 3}" @click="toSolutions">解决方案</li>
            <li :class="{isActive:index == 4}" @click="toNews">新闻中心</li>
            <li :class="{isActive:index == 5}" @click="toSupport">客户支持</li>
            <li :class="{isActive:index == 6}" @click="toAbout">关于我们</li>
            <li :class="{isActive:index == 7}" @click="toInvitation">招贤纳士</li>
          </ul>
        </nav>
      </header>
      </div>
    <div class="index-view">
      <router-view/>
    </div>
    <footer>
      <div class="wraper">
        <div class="top">
            <div class="about">
              <p>{{aboutData.title}}</p>
                <ul class="router-anchor">
                  <li @click="goIntroduce">{{aboutData.introduce}}</li>
                  <li @click="goDevelopment">{{aboutData.development}}</li>
                  <li @click="goOrganizational">{{aboutData.organizational}}</li>
                  <li @click="goHonor">{{aboutData.honor}}</li>
                  <li @click="goCulture">{{aboutData.culture}}</li>
                </ul>
            </div>
            <div class="contact">
                <p>{{contactData.title}}</p>
                <ul>
                  <li>电话:{{contactData.tel}}</li>
                  <li>商务邮箱:{{contactData.email}}</li>
                  <li>地址:{{contactData.address}}</li>
                </ul>
            </div>
            <div class="wchat">
                <p>微信公众号</p>
                <div class="wchatImg">
                  <img src="../../../public/wchat/wchat.png" alt="">
                </div>
            </div>
        </div>
        <div class="bottom">
            ©1999-2010 北京大陆康腾科技股份有限公司.版权所有|京ICP备05039607号&nbsp&nbsp 
            <span class="lawdes" @click="toLaw">法律声明</span>
        </div>
      </div>
    </footer>
  </div>
</template>
<style lang="less" scoped>
  .index{
    width:100%;
    height:80px;
  }
  .index-header-wraper{
    width:100%;
    position: absolute;
    top:0;
    background:rgba(0, 0, 0,.36);
    color:rgba(255,255,255,1);
    z-index: 1000;
  }
.header{
    width:1200px;
    left: 50%;
    top:0;
    left:calc(50% - 600px);
    display: flex;
    align-items: center;
    height:89px;
    margin:0 auto;
    .header_logo{
        display: flex;
        align-items: center;
        height: 89px;
        line-height: 89px;
        img{
            width:230px;
            height:48px;
            box-shadow:0px 2px 3px 0px rgba(9,104,173,0.22);
        }
    }
    .header_nav>{
        margin-left:224px;
        ul{
          display: flex;
          font-size:18px;
          font-family:MicrosoftYaHei;
          font-weight:400;
          text-align: center;
          // flex-wrap:wrap-reverse;
          // overflow: auto;
          cursor: pointer;
          li{
            width:80px;
            height:86px;
            line-height: 86px;
            margin:0 10px;
            border-bottom: 2px solid rgba(255,255,255,0);
          }
          li:hover{
            border-bottom:2px solid rgba(33,208,110,1);
            color:rgba(33,208,110,1)
          }
          .isActive{
            border-bottom:2px solid rgba(33,208,110,1);
            color:rgba(33,208,110,1)
          }
        }
        // .el-menu-demo{
        //   background: none;
        //   border-bottom:none;
          
        //   .is-active{
        //     background:none!important;
        //     color:rgba(33,208,110,1);
        //     font-weight:400;
        //   }
        //   .el-menu-item{
        //     font-size:18px;
        //     font-family:MicrosoftYaHei;
        //     font-weight:400;
        //     color:rgba(255,255,255,1);
        //   }
        //   .el-menu-item:hover{
        //     background:none!important;
        //     border-bottom:1px solid #FFF!important;
        //     color:rgba(33,208,110,1);
        //     font-weight:400;
        //   }
          
        // }
    }
}
footer{
  .wraper{
    width:100%;
    background:rgba(68,68,68,1);
    .top{
      padding-top:40px;
      margin:0 auto;
      width:1200px;
      height:360px;
      display:flex;
      justify-content: space-around;
      .router-anchor{
        
        li:hover{
          color:#1BB65F;
          cursor: pointer;
        }
      }
      .about,.contact,.wchat{
        width:300px;
        p{
          height:16px;
          font-size:16px;
          font-family:MicrosoftYaHei;
          font-weight:bold;
          color:rgba(255,255,255,1);
          margin-bottom: 37px;
        }
        ul{
          height:157px;
          font-size:14px;
          font-family:MicrosoftYaHei;
          font-weight:400;
          color:rgba(238,238,238,1);
          line-height:36px;
        }
        wchatImg{
          width:190px;
          height:190px;
          img{
            width:100%;
          }
        }
      }
    }
    .bottom{
      width:100%;
      height:49px;
      line-height: 49px;
      text-align: center;
      background:rgba(51,51,51,1);
      .lawdes:hover{
        cursor:pointer;
        color:#1BB65F;
      }
    }
  }
}
</style>

<script>
export default {
  data(){
    return {
      urlData:window.location.href,
      index:0,
      // url:window.location.href,
      isActive:"isActive",
      logoData:"/home/logo_白色.png",
      aboutData:{
          title:"关于我们",
          introduce:"公司简介",
          development:"发展历程",
          organizational:"组织架构",
          honor:"资质荣誉",
          culture:"企业文化"
        },
      contactData:{
        title:"联系我们",
        tel:"4008903085、（010）61845520",
        email:"jszc@cont.com.cn",
        address:"北京市朝阳区和平街东土城路12号院3号楼（怡和阳光大厦C座）12层1202室"
      }
    }
  },
  methods:{
    init(){
        document.querySelector(".index-header-wraper").style.background = "none";
        document.querySelector(".index-header-wraper").style.opacity = 1;
        document.querySelector(".index-header-wraper").style.color = "rgba(51,51,51,1)";
        this.logoData = "/home/logo2.png";
        //this.isActive = "none";
    },
    scrollFun(){
        console.log(document.body.scrollTop)
    },
    toHome(){
      let that = this;
      that.logoData = "/home/logo_白色.png"
      this.$router.push({path:'/index/home'});
      document.querySelector(".index-header-wraper").style.background = "rgba(0, 0, 0,.36)";
      //document.querySelector(".index-header-wraper").style.opacity = 0.36;
      document.querySelector(".index-header-wraper").style.color = "#fff";
      this.index = 1;
    },
    toProducts(){
      let that = this;
      that.init();
      this.$router.push({path:'/index/products'});
      //that.isActive = "isActive"
      this.index = 2;
    },
    toSolutions(){
      let that = this;
      this.$router.push({path:'/index/solutions'});
      that.init();
      this.index = 3;
    },
    toSupport(){
      let that = this;
      this.$router.push({path:'/index/support'});
      that.init();
      this.index = 5;
    },
    toNews(){
      let that = this;
      this.$router.push({path:'/index/news'});
      that.init();
      this.index = 4;
    },
    toAbout(){
      let that = this;
      this.$router.push({path:'/index/about'});
      that.init();
      this.index = 6;
    },
    toInvitation(){
      let that = this;
      this.$router.push({path:'/index/invitation'});
      that.init();
      this.index = 7;
    },
    toLaw(){
      this.index = ""
      this.init();
      this.$router.push(
        {
          path:'/index/law',
          query:{
                anchor:"#law"
              }
        })
    },
    goIntroduce(){
      this.index = 6;
      this.init();
      this.$router.replace(
        {
          path:'/index/about',
          query:{
            anchor:"#introduce"
          }
        }
        )
    },
    goDevelopment(){
      this.index = 6;
      this.init();
      this.$router.replace(
        {
          path:'/index/about',
          query:{
            anchor:"#development"
          }
        }
      )
    },
    goOrganizational(){
      this.index = 6;
      this.init();
      this.$router.replace(
        {
          path:'/index/about',
          query:{
            anchor:"#orgination"
          }
        })
    },
    goHonor(){
      this.index = 6
      this.init();
      this.$router.replace(
        {
          path:'/index/about',
          query:{
            anchor:"#honer"
          }
        }
      )
    },
    goCulture(){
      this.index = 6;
      this.init();
      this.$router.replace(
        {
          path:'/index/about',
          query:{
            anchor:"#culture"
          }
        }
      )
    },
    // getAnchor(){
    //   console.log(window.location.href)
    // }
  },
  mounted(){
  }
  
}
</script>
