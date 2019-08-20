<template>
    <div class="support-wraper">
        <header>
            <img src="/support/02question.png" alt="">
            <p class="header-title">常见问题</p>
        </header>
        <section>
            <div v-for="(item,index) in cfzData" :key="index">
                <p class="p1">{{item.q}}</p>
                <p class="p2">{{item.a}}</p>
                <p class="p2 p3">{{item.a2}}</p>
            </div>
        </section>
    </div>
</template>
<style lang="less" scoped>
    .support-wraper{
        padding:0;
        margin:0;
    }
    header{
        height:40px;
        position:relative;
        img{
            position:absolute;
            height:18px;
            width:18px;
            top:11px;
            left:21px;
        }
        .header-title{
            position:absolute;
            font-size:16px;
            font-family:MicrosoftYaHei;
            font-weight:400;
            color:rgba(33,208,110,1);
            left:52px;
            top:11px;
        }
    }
    section{
        padding:33px 90px 115px 33px;
        background:#fff;
        border:1px solid rgba(181,231,221,1);
        .p1{
            font-family: MicrosoftYaHei;
            color: #333333;
            font-size: 14px;
            font-weight: bold;
            line-height: 28px;
        }
        .p2{
            font-family: MicrosoftYaHei;
            color: #666666;
            font-size: 14px;
            line-height: 28px;
        }
        .p3{
            padding-left:23px;
        }
    }
</style>
<script>
export default {
    data(){
        return {
            cfzData:[
               {
                   q:`Q：省局级用户如何将数据上报给国家森林公安局。`,
                   a:`A：一、登录森林公安网。`,
                   a2: `二、通过“森林保护”中的“报表接收”功能上报数据，并且每次上报只能提交一个月的数据。`
               },
               {
                   q:`Q：用户在使用手动上报功能时无法生成上报文件，错误号为“39”。`,
                   a:`A：错误原因是安装路径中存在中文。用户可以将数据备份后卸载软件，
                   然后使用默认安装路径从新安装，并恢复数据。`
               },
               {
                   q:`Q：用户在使用自动上报功能时上报按钮无法激活，错误号为“35”。`,
                   a:`A：拨号上报顺序错误，上级单位先接收到拨号信息再打开接收面板。`
               },
               {
                   q:`Q：用户要修改下级单位上报的数据，无法修改。`,
                   a:`A：上级单位不能修改所接收的下级单位数据。可以要求下级单位重新上报，覆盖原数据`
               },
               {
                   q:`Q：系统是否支持在双系统下运行。`,
                   a:`不支持`
               },
               {
                   q:`Q：统计55-1表时出现错行现象，统计出的数据不正确。`,
                   a:`A：一、下载最新补丁包`,
                   a2:`二、下载后仍出现以前错误，说明下级单位中有没有更新软件的单位，要求下级单位进行更新后重报。`
               }
            ]
        }
    }
}
</script>
