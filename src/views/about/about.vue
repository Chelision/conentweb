<template>
    <div class="about-wraper">
        <div class="out-wraper">
            <div class="about-banner">
                <img src="/about/about_e.jpg" alt="">
            </div>
            <div class="inner_wraper">
              <div class="about_introduce" id="introduce">
                <p class="p1">公司简介</p>
                <p class="p2">北京大陆康腾科技股份有限公司（简称“大陆康腾”，股票代码：872606）成立于2003年，是国内最早进入林业信息化领域的领军企业之一，是“智慧林业”整体解决方案服务提供商。公司总部位于北京，下设成都、江西分公司，安徽、广东、甘肃、湖南、河北、内蒙古自治区、云南、呼伦贝尔、鄂尔多斯等办事处。</p>
                <p class="p2">
                公司致力于3S、云计算、物联网、大数据等信息技术的研发和推广，服务于森林防火、资源、公安、退耕、濒危物种、种苗、航空护林、大熊猫中心等单位，为各级林业部门提供专业的整体解决方案。</p>
                <p class="p2">
                在产品研发方面，公司具备一支经验丰富而富有团队协作精神的队伍，各类产品不但在技术上不断创新，而且注重产品的实用性和易用性，受到广大用户的一致好评。<p>
                <p class="p2">  
                公司的成长和发展一刻也离不开客户对我们的关心和支持，随着时代的不断进步和发展，我们的产品和服务也将随着客户的需求不断更新，并日臻完善。“您的满意是我们最大的成功”是北京大陆康腾科技股份有限公司的一贯宗旨，公司具有完善的售后服务体制和专业的服务团队，我们将把优质的服务贯穿于项目的始终。</p>
              </div>
            </div>
            <div class="about_development" id="development">
              <img src="/about/development.png" alt="">
              <div class="inner_wraper">
                <p>发展历程</p>
                <div class="dev-img">
                    <img src="/about/dev.png" alt="">
                </div>
              </div>
            </div>
            <div class="about-orgination" id="orgination">
              <div class="inner_wraper">
                  <p class="orgination-title">组织架构</p>
                  <img src="/about/orgination2.png" alt="">
              </div>
            </div>
            <div class="about-culture" id="culture">
              <img src="/about/culture.png" alt="">
              <p class="culture-title">企业文化</p>
              <div class="culture-left">
                  <div class="culture-icon">
                    <img src="/about/culture-icon.png" alt="">
                  </div>
                  <div class="des1">企业文化</div>
                  <div class="des2">源于心、践于行</div>
              </div>
              <div class="culture-right">
                  <div class="culture-icon">
                    <img src="/about/hope.png" alt="">
                  </div>
                  <div class="des1">企业愿景主旨</div>
                  <div class="des2">你的满意就是我们最大成功</div>
              </div>
            </div>
            <div class="about-honer" id="honer">
              <div class="inner_wraper">
                <p class="honner-title">资质荣誉</p>
                <div class="honner-img">
                  <ul>
                    <li v-for="(item,index) in honnerImg" :key="index">
                      <img :src="item" alt="">
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="about-contact">
                <img src="/about/contact.png" alt="">
                <div class="inner_wraper">
                    <p class="cntact-title">联系我们</p>
                    <div class="position-wraper">
                      <ul>
                      <li v-for="(item,index) in contactData" :key="index">
                        <div class="contact-wraper">
                          <div class="contact-icon">
                            <img :src="item.icon" alt="">
                          </div>
                          <p class="contact-des1">{{item.des1}}</p>
                          <p class="contact-des2">{{item.des2}}</p>
                          <p class="contact-des2">{{item.des3}}</p>
                        </div>
                      </li>
                    </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="less">
.about-wraper{
    padding-top:89px;
}
.out_wraper{
    width: 100%;
    text-align: center;
}
.inner_wraper{
    width: 1200px;
    margin:0 auto;
    //text-align:center;
}
.clearFix::after{
    display: block;
    content: "";
    clear: both;
}
.about-banner{
    width:100%;
    height:449px;
    min-width:1366px;
    //background:rgba(18,47,56,1);
    img{
        width: 100%;
        height: 100%;
    }
}
.about_introduce{
  padding-bottom: 40px;
  .p1{
    text-align: center;
    height:100px;
    font-size:28px;
    font-family:MicrosoftYaHei;
    font-weight:bold;
    color:rgba(51,51,51,1);
    line-height:100px;
  }
  .p2{
    text-align:left;
    line-height: 30px;
    text-indent: 2rem;
    font-size:14px;
    font-family:MicrosoftYaHei;
    font-weight:400;
    color:rgba(102,102,102,1);
  }
}
.about_development{
  width:100%;
  height:540px;
  position:relative;
  img{
    width:100%;
    height:100%;
  }
  .inner_wraper{
     
    .dev-img{
      position:absolute;
      top:177px;
    }
    p{
      position:absolute;
      font-size:28px;
      font-family:MicrosoftYaHei;
      font-weight:bold;
      color:rgba(255,255,255,1);
      top:41px;
      left:628px;
    }
  }
}
.about-orgination{
  background:rgba(250,250,250,1);
  padding-bottom: 77px;
  .orgination-title{
    text-align: center;
    font-size:28px;
    font-family:MicrosoftYaHei;
    font-weight:bold;
    color:rgba(51,51,51,1);
    line-height:100px;
    height:100px;
  }
  img{
    width:100%;
    height:100%;
  }
}
.about-culture{
  height:318px;
  position:relative;
  img{
    width:100%;
    height:318px;
  }
  .culture-title{
    position:absolute;
    font-size:28px;
    font-family:MicrosoftYaHei;
    font-weight:bold;
    top:31px;
    left:628px;
    color:rgba(249,249,249,1);
  }
  .culture-left{
    position:absolute;
    width:300px;
    top:111px;
    left:280px;
    text-align:center;
    .culture-icon{
      width:100px;
      height:100px;
      margin:0 auto;
      img{
        width:100%;
        height:100%;
      }
    }
    .des1,.des2{
        padding-top:14px;
        font-size:18px;
        font-family:MicrosoftYaHei;
        font-weight:bold;
        color:rgba(249,249,249,1);
    }
  }
  .culture-right{
    position:absolute;
    width:300px;
    top:111px;
    right:280px;
    text-align:center;
    .culture-icon{
      width:100px;
      height:100px;
      margin:0 auto;
      img{
        width:100%;
        height:100%;
      }
    }
    .des1,.des2{
        padding-top:14px;
        font-size:18px;
        font-family:MicrosoftYaHei;
        font-weight:bold;
        color:rgba(249,249,249,1);
    }
  }
}
.about-honer{
  text-align:center;
  padding-bottom:123px;
  .honner-title{
    height:100px;
    font-size:28px;
    font-family:MicrosoftYaHei;
    font-weight:bold;
    color:rgba(51,51,51,1);
    line-height:100px;
  }
  .honner-img>ul{
    display: flex;
    flex-wrap:wrap;
    li:nth-child(1),li:nth-child(2),li:nth-child(3){
      margin-right:16px;
    }
    li:nth-child(5),li:nth-child(6),li:nth-child(7),li:nth-child(8),li:nth-child(9),li:nth-child(10){
      margin-right:12px;
    }
  }
}
.about-contact{
  width:100%;
  height:421px;
  position:relative;
  img{
    width:100%;
    height:100%;
  }
  .cntact-title{
    position:absolute;
    left:628px;
    top:48px;
    font-size:28px;
    font-family:MicrosoftYaHei;
    font-weight:bold;
    color:rgba(255,255,255,1);
  }
  .position-wraper{
    position:absolute;
    top:165px;
    ul{
      display:flex;
      li{
        .contact-wraper{
          width:300px;
        .contact-icon{
          width:100px;
          height:100px;
          margin:0 auto;
        }
        .contact-des1{
          text-align: center;
          height:60px;
          line-height:60px;
          font-size:20px;
          font-family:MicrosoftYaHei;
          font-weight:bold;
          color:rgba(255,255,255,1);
        }
        .contact-des2{
          text-align: center;
          font-size:16px;
          font-family:MicrosoftYaHei;
          font-weight:400;
          color:rgba(255,255,255,1);
          line-height:30px;
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
            honnerImg:[
              "/about/honer_01.png",
              "/about/honer_02.png",
              "/about/honer_03.png",
              "/about/honer_04.png",
              "/about/honer_05.png",
              "/about/honer_06.png",
              "/about/honer_07.png",
              "/about/honer_08.png",
              "/about/honer_09.png",
              "/about/honer_10.png",
              "/about/honer_11.png",
            ],
            contactData:[
              {
                icon:"/about/tel.png",
                des1:"电话",
                des2:"4008903085、",
                des3:"（010）61845520"
              },
              {
                icon:"/about/wchat.png",
                des1:"微信公众号",
                des2:"北京大陆康腾科技股份有限公司",
                des3:""
              },
              {
                icon:"/about/email.png",
                des1:"邮箱",
                des2:"jszc@cont.com.cn",
                des3:""
              },
              {
                icon:"/about/address.png",
                des1:"地址",
                des2:"北京市朝阳区和平街东土城路12号院3号楼（怡和阳光大厦C座）1202室",
                des3:""
              }
            ],
            userAnchor:"",
        }
    },
    watch:{
      $route(){
        this.userAnchor= this.$route.query.anchor
        // let anchor = this.userAnchor.split("#")[1];
        
      },
      userAnchor(){
        console.log(this.userAnchor)
        location.hash =  this.userAnchor;
      }
    },
    methods:{
        
    },
    mounted(){
      //window.location.href
      location.hash = this.$route.query.anchor;
    },
    updated(){
     // console.log(this.$route.query.anchor)
    }
}
</script>