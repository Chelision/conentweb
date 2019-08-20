<template>
    <div class="support-wraper">
        <header>
            <img src="/support/04customer.png" alt="">
            <p class="header-title">常见问题</p>
        </header>
        <div class="customer-content">
            <ul>
                <li v-for="(item,index) in customerData" :key="index">
                    <div class="customer-content-items">
                        <div>
                            <img :src="item.icon" alt="">
                        </div>
                        <p v-html="item.des">{{item.des}}</p>
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
        background:#fff;
        border:1px solid rgba(181,231,221,1);
        padding-bottom:120px;
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
    .customer-content{
        padding:10px 29px;
        
        .customer-content-items{
            height:40px;
            line-height:40px;
            display:flex;
            align-items: center;
            img{
                width:18px;
                height:18px;
            }
            p{
                margin-left:26px;
                color:#666666;
                font-size: 14px;
                line-height:25px;
                height:30px;
            }
        }
    }
    
</style>
<script>
export default {
    data(){
        return {
            customerData:[
                {
                    icon:"/support/tel.png",
                    des:"服务电话: 4008903085 010-61845520转8020或8023"
                },
                {
                    icon:"/support/email.png",
                    des:"商务邮箱: jszc@cont.com.cn"
                },
                {
                    icon:"/support/address.png",
                    des:"公司地址: 北京市朝阳区和平街东土城路12号院3号楼（怡和阳光大厦C座）1202室"
                },
                {
                    icon:"/support/Zipcode.png",
                    des:"邮&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp编:100013"
                }
            ]
        }
    },
    methods:{
       
    }
}
</script>
