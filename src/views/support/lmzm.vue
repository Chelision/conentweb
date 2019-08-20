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
                   q:` Q：申请编号输入不进去。`,
                   a:`A：“申请编号”中的内容不是在申请表登记窗口中直接输入的，
                   而是应该在“系统维护”的“常用代码”中的“文号字头”中去增加`
               },
               {
                   q:` Q：恢复以前备份的数据是否会覆盖当前的数据库。`,
                   a:`A：会覆盖当前数据库。`
               },
               {
                   q:` Q：怎样可以在不出证的情况下生成上报数据。`,
                   a:`A：可以安装虚拟打印机，将申请表信息都虚拟打印一遍，这样就可以生成上报数据。`
               },
               {
                   q:` Q：重做系统后如何恢复数据。注：用户没有进行数据备份，但是将整个目录进行了拷贝。`,
                   a:`A：可以将原来安装目录下的“Forestseed.db”文件复制到新安装路径下的相同目录下。`
               },
               {
                   q:`Q：录入申请表数据后，为什么在生成上报文件时系统提示无可上报数据。`,
                   a:`A：这是因为用户并没有对已登记的申请表信息进行许可证核发操作，经过许可证核发的数据才能上报。`
               },
               {
                   q:`Q：在“许可证核发”窗口中，浏览不到位于窗口右侧的功能按钮。`,
                   a:`A：修改显示器分辩率，将其调整到“1024*768”像素。`
               },
               {
                   q:`Q：在“单位维护”中增加下级单位信息时，有些单位不能增加成功。
                   （这四个单位的ID是虚拟出的，在国标行政区划代码中没有）`,
                   a:`一般出现这类情况的单位都是较为特殊的单位， 其单位ID在国标
                   行政区划代码表中没有。 用户可以在“系统维护” 的 “常用代码”中的
                   “行政区划”中将该单位的单位ID增加进去，这样再增加它的单位名称就可以成功了。`
               },
            ]
        }
    }
}
</script>
