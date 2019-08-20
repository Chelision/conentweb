<template>
    <div class="support-wraper">
        <header>
            <img src="/support/02question.png" alt="">
            <p class="header-title">常见问题</p>
        </header>
        <section>
            <div v-for="(item,index) in gylData" :key="index">
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
            gylData:[
                {
                    q:"Q：由于县级用户的硬盘损坏，公益林系统的数据丢失，省级用户处有该县级单位的上报数据，省级用户如何帮助县级用户找回数据。",
                    a:"A：省级用户可以将该县级单位上报的数据文件的扩展名修改为“.zip”，再进行解压，解压出的数据库文件即县级系统的 数据库文件。"
                },
                {
                    q:"Q：为什么在统计表“公益林资源结构及林地面积总表”中的合计数与实际输入数据不符。",
                    a:"A：这张统计表只对录入时“地类”为有林地的数据进行统计。"
                },
                {
                    q:"Q：用户在录入补偿资金时遇到有些农户将部分自己管护的小班交给集体管护的情况，不清楚该如何录入补偿资金。",
                    a:"A：可以在录入农户补偿资金时将交给集体管护的这部分小班的权属者名称统一规定为“护林员”，这样就可以同其他数据进行区分。"
                },
                {
                    q:"Q：在“系统维护”中的“区位名称管理”中增加区位名称后没有显示。",
                    a:"A：刷新问题。"
                },
                {
                    q:"Q：省级用户在接收县级数据后，查看数据时发现有个别县的数据在详细信息窗口中无法显示。",
                    a:"A：出现这种情况的原因是这些县级单位没有更新程序。"
                },
                {
                    q:"Q：数据量大时，如何使用多台电脑录入数据。",
                    a:`A：先在主机上公益林系统中的“系统维护”中对
                    “单位管理”和“区位名称管理”进行维护，然后将主机
                    上公益林系统的数据库文件分别复制到分机上的相同
                    目录下，覆盖其数据库文件。此时，就可以在分机上
                    分开录入数据。录入完成后，再分别将各分机上的数据库
                    文件拷贝到主机的本地磁盘，最后利用主机上公益林系统
                    中的“小班数据导入”功能逐一导入合并数据。`
                },
                {
                    q:"Q：系统不能自动更新时，怎样更新程序。",
                    a:"A：登录www.cont.com.cn在首页的右上方有公益林系统更新的链接地址，点击链接后下载更新程序并手动进行更新。"
                },
                {
                    q:"Q：为什么在进行数据导入时只导入了小班数据，而补偿资金、护林员经费等都没有导入进去。",
                    a:"A：“小班数据导入”只能导入小班数据，其他类数据需要在小班数据导入后再进行录入。"
                },
                {
                    q:"Q：在公益林系统中录入的数据只是重点公益林数据还是包括一般公益林数据。",
                    a:"A：只有重点公益林数据。"
                },
                {
                    q:"Q：直属单位如何进行注册。",
                    a:" A：直属单位注册时应使用“自定单位名称及代码”，所有自定单位代码均由所属省级单位统一分配，应与所属省级单位确认后再输入"
                },

            ]
        }
    }
}
</script>
