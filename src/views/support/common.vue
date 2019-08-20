<template>
    <div class="support-wraper">
        <header>
            <img src="/support/02question.png" alt="">
            <p class="header-title">常见问题</p>
        </header>
        <div class="question-content">
            <ul>
                <li v-for="(item,index) in questionData" :key="index">
                    <div class="question-content-items">
                        {{item.title}}
                        <span @click="getDetail(item.clickVal)">{{item.clickme}}</span>
                    </div>
                </li>
            </ul>
        </div>
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
        background:rgba(33,208,110,.06);
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
    .question-content{
        padding:16px 16px 120px 16px;
        background: #fff;
        border:1px solid rgba(181,231,221,1);
        li{
            padding-left:16px;
            margin-top:16px;
            height:44px;
            line-height: 44px;
            background: rgba(33,208,110,.27);
            border-left:3px solid rgba(33,208,110,1);
            .question-content-items{
                position:relative;
                span{
                    position:absolute;
                    right:20px;
                    font-size:14px;
                    font-family:MicrosoftYaHei;
                    font-weight:bold;
                    color:rgba(33,208,110,1);
                    cursor: pointer;
                }
            }
        }
    }
</style>
<script>
export default {
    data(){
        return {
            questionData:[
                {
                    title:"重点公益林数据管理软件常见问题",
                    clickme:"查看帮助",
                    clickVal:"1"
                },
                {
                    title:"采伐证系统常见问题",
                    clickme:"查看帮助",
                    clickVal:"2"
                },
                {
                    title:"林木种苗系统常见问题",
                    clickme:"查看帮助",
                    clickVal:"3"
                },
                {
                    title:"森保报表常见问题",
                    clickme:"查看帮助",
                    clickVal:"4"
                }
            ]
        }
    },
    methods:{
        getDetail(val){
            switch(val){
                case '1':
                    this.$router.push({path:'/index/support/gyl'});
                    break;
                case '2':
                    this.$router.push({path:'/index/support/cfz'});
                    break;
                case '3':
                    this.$router.push({path:'/index/support/lmzm'});
                    break;
                case '4':
                    this.$router.push({path:'/index/support/sbbb'});
                    break;
                default:
                    this.$router.push({path:'/index/support/common'});
                    break;
            }
        }
    }
}
</script>
