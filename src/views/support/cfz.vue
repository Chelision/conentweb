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
    }
</style>
<script>
export default {
    data(){
        return {
            cfzData:[
               {
                   q:"Q：申请表和采伐证的输出模板问题",
                   a:"A：下载补丁包。"
               },
               {
                   q:"Q：查询申请表时出现错误，错误号为“3”。",
                   a:"A：下载补丁包。"
               },
               {
                   q:"Q：复制申请表时上次填写的申请表丢失。",
                   a:"A：下载补丁包。"
               },
               {
                   q:"Q：打印采伐证时，“采伐期限”变为起始日期。",
                   a:"A：下载补丁包。"
               },
                {
                   q:"Q：申请表修改时，系统提示“申请日期小于批准日期”，不能保存。",
                   a:"A：下载补丁包。"
               },
               {
                   q:"Q：按照“消耗结构”统计，属于“其它”项的数据统计不出来。",
                   a:"A：下载补丁包。"
               },
               {
                   q:"Q：采伐证打印时，“商品材”的“出材量”位数过多时显示不完全。",
                   a:"A：下载补丁包。"
               },
               {
                   q:"Q：填写申请表信息时个别字符字符库无法识别，导致数据出现错误。",
                   a:"A：将字符库无法识别的字用其他字代替。"
               },
               {
                   q:"Q：采伐证统计时，消耗结构中没有数据。",
                   a:"A：消耗结构中的统计数据取自立木蓄积，出现这种情况是因为在登记时该项没有数据。"
               }
            ]
        }
    }
}
</script>
