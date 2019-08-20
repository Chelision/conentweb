<template>
    <div class="law-wraper">
        <div class="out-wraper">
            <div class="law-banner">
                <img src="/law/law.png" alt="">
            </div>
            <div class="inner_wraper">
                <div class="law" id="law">
                    <p class="" v-for="(item,index) in lawData" :key="index">{{item}}</p>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="less" scoped>
.law-wraper{
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
.law-banner{
    width:100%;
    height:449px;
    background:rgba(18,47,56,1);
    img{
        width: 100%;
        height: 100%;
    }
}
.law{
    text-indent:2em;
    font-size:14px;
    font-family:MicrosoftYaHei;
    font-weight:400;
    color:rgba(102,102,102,1);
    line-height:30px;
    padding: 40px;
    padding-bottom:126px;
    p:nth-child(7),p:nth-child(8),p:nth-child(9){
        font-weight: bold;
    }
}
</style>
<script>
export default {
    data(){
        return { 
            lawData:[
                `本Web站点可能包含其它所有权声明和版权信息， 必须遵守并服从其条款。此 Web 站点上的信息可能包含有技术方面不够准确的地方或印刷错误。`,
                `本站转载其它网站以及媒体的内容版权归对方所有。`,
                `任何个人以及组织不得擅自复制本站的页面内容及数据库，如一经发现，本站将保留追求包括经济 、法律在内的一切责任。`,
                `信息可被更改或更新而不另行通知。大陆康腾科技有限公司也可以随时对本资料中描述的产品或程序进行改进或更改，而不另行通知。`,
                `对于与大陆康腾科技有限公司所提供信息的准确性相关的问题，大陆康腾科技有限公司概不负责， 并且此类信息的使用带来的风险由
                接收方自行承担。 大陆康腾科技有限公司不保证所有被报告的问题都可以通过大陆康腾科技有限公司所提供的任何信息解决。 提供信
                息并不意味着大陆康腾科技有限公司授予您任何版权、专利或任何其它知识产权的任何许可。`,
                `大陆康腾科技有限公司并不想通过我们的 Web 站点接收您的保密信息或所有权信息。请注意，发送至大陆康腾科技有限公司的所有信息
                或资料都将视为非保密的。 将任何信息或资料发送至大陆康腾科技有限公司，您即授予大陆康腾科技有限公司无限制的、不可撤销的许可，
                 许可大陆康腾科技有限公司使用、复制、显示、执行、修改、传送和分发这些资料或信息， 并且您还同意大陆康腾科技有限公司可以为
                 任何目的免费使用您发送给大陆康腾科技有限公司的任何主意、概念以及技术诀窍或技术。 但是，大陆康腾科技有限公司将不会公布您的
                 姓名或以其它方式公布,您向大陆康腾科技有限公司提交资料或其它信息这一事实，除非：`,
                 `（a）您许可大陆康腾科技有限公司使用您的姓名；`,
                `（b） 大陆康腾科技有限公司事先通知您提交至本站点
                某特定部分的资料或其它信息将被发布，或站点的该部分
                上将使用您的姓名；`,
                `（c）法律要求大陆康腾科技股份有限公司执行此活动。`
            ]
        }
    },
    methods:{
        
    },
    mounted(){
        location.hash = this.$route.query.anchor;
        //console.log(window.location.href)
    }
}
</script>