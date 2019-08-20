<template>
    <div class="wraper">
        <div class="new-item" v-for="(item,index) in newsData" :key="index">
            <ul>
                <li class="img-left">
                    <img :src="item.img" alt="">
                </li>
                <li class="new-item-right">
                    <p>{{item.title}}</p>
                    <div>
                        <span>{{item.icon}}</span>
                        <span>{{item.time}}</span>
                    </div>
                    <div class="content-des">
                        {{item.des}}
                    </div>
                    <button @click="showDetailNews(item.val)">
                        查看详情
                    </button>
                </li>
            </ul>
        </div>
        <div class="news-page">
            <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="pageData.currentPage"
                :page-sizes="[5, 10, 15, 20]"
                :page-size="pageData.pageSize"
                layout="total, sizes, prev, pager, next, jumper"
                :total="pageData.total">
                </el-pagination>
        </div>
    </div>
</template>
<style lang="less">
.wraper{
    overflow: auto;
}
.new-item{
    height:200px;
    position:relative;
    ul{
        padding-left:20px;
        display: flex;
        //align-items: center;
        .img-left{
            img{
                margin-top:24px;
                width:150px;
                height:127px;
            }
        }
        .new-item{
            border-bottom:1px solid rgba(181,231,221,1);
        }
        .new-item-right{
            padding-top:24px;
            padding-left:13px;
            p{
                font-size:16px;
                font-family:MicrosoftYaHei-Bold;
                font-weight:bold;
                color:rgba(51,51,51,1);
                line-height:38px;
            }
            span{
                margin-right:10px;
            }
            .content-des{
                height:39px;
                font-size:14px;
                padding-right: 32px;
                font-family:MicrosoftYaHei;
                font-weight:400;
                color:rgba(102,102,102,1);
                line-height: 20px;
            }
            button{
                position: absolute;
                right:30px;
                bottom:28px;
                width:80px;
                height:28px;
                background:rgba(255,255,255,1);
                border:1px solid rgba(27,182,95,1);
                border-radius:3px;
            }
        }

    }
    
}
.news-page{
    margin-left:30px;
}
</style>

<script>
export default {
    data(){
        return {
            pageData:{
                currentPage: 1,
                pageSize:5,
                total:0,
            },
            newsData:[],
            allData:[
            {
                val:"firstTitle",
                img:"/news/默认新闻.jpg",
                title:"中国未来10年规划总投资",
                icon:"",
                time:'2019-07-10',
                des:`国家林业局、国家发改委、财政部26日发布《全国森林防火规划》（2018-2025），规划总投资375亿元，森林防火十年规划将全国森林防火区域分为火灾高危区、火灾高风险区和一般火险区3类，分别提出治理措施。将重点实施`,
            },
            {
                img:"/news/默认新闻.jpg",
                title:"中国未来10年规划总投资",
                icon:"",
                time:'2019-07-10',
                des:`国家林业局、国家发改委、财政部26日发布《全国森林防火规划》（2018-2025），规划总投资375亿元，森林防火十年规划将全国森林防火区域分为火灾高危区、火灾高风险区和一般火险区3类，分别提出治理措施。将重点实施`,
            },
            {
                img:"/news/默认新闻.jpg",
                title:"中国未来10年规划总投资",
                icon:"",
                time:'2019-07-10',
                des:`国家林业局、国家发改委、财政部26日发布《全国森林防火规划》（2018-2025），规划总投资375亿元，森林防火十年规划将全国森林防火区域分为火灾高危区、火灾高风险区和一般火险区3类，分别提出治理措施。将重点实施`,
            },
            {
                img:"/news/默认新闻.jpg",
                title:"中国未来10年规划总投资",
                icon:"",
                time:'2019-07-10',
                des:`国家林业局、国家发改委、财政部26日发布《全国森林防火规划》（2018-2025），规划总投资375亿元，森林防火十年规划将全国森林防火区域分为火灾高危区、火灾高风险区和一般火险区3类，分别提出治理措施。将重点实施`,
            },
            {
                img:"/news/默认新闻.jpg",
                title:"中国未来10年规划总投资",
                icon:"",
                time:'2019-07-10',
                des:`国家林业局、国家发改委、财政部26日发布《全国森林防火规划》（2018-2025），规划总投资375亿元，森林防火十年规划将全国森林防火区域分为火灾高危区、火灾高风险区和一般火险区3类，分别提出治理措施。将重点实施`,
            },
            {
                img:"/news/默认新闻.jpg",
                title:"中国未来10年规划总投资",
                icon:"",
                time:'2019-07-10',
                des:`国家林业局、国家发改委、财政部26日发布《全国森林防火规划》（2018-2025），规划总投资375亿元，森林防火十年规划将全国森林防火区域分为火灾高危区、火灾高风险区和一般火险区3类，分别提出治理措施。将重点实施`,
            },
            {
                img:"/news/默认新闻.jpg",
                title:"中国未来10年规划总投资",
                icon:"",
                time:'2019-07-10',
                des:`国家林业局、国家发改委、财政部26日发布《全国森林防火规划》（2018-2025），规划总投资375亿元，森林防火十年规划将全国森林防火区域分为火灾高危区、火灾高风险区和一般火险区3类，分别提出治理措施。将重点实施`,
            },
            {
                img:"/news/默认新闻.jpg",
                title:"中国未来10年规划总投资",
                icon:"",
                time:'2019-07-10',
                des:`国家林业局、国家发改委、财政部26日发布《全国森林防火规划》（2018-2025），规划总投资375亿元，森林防火十年规划将全国森林防火区域分为火灾高危区、火灾高风险区和一般火险区3类，分别提出治理措施。将重点实施`,
            },
            {
                img:"/news/默认新闻.jpg",
                title:"中国未来10年规划总投资",
                icon:"",
                time:'2019-07-10',
                des:`国家林业局、国家发改委、财政部26日发布《全国森林防火规划》（2018-2025），规划总投资375亿元，森林防火十年规划将全国森林防火区域分为火灾高危区、火灾高风险区和一般火险区3类，分别提出治理措施。将重点实施`,
            },
            {
                img:"/news/默认新闻.jpg",
                title:"中国未来10年规划总投资",
                icon:"",
                time:'2019-07-10',
                des:`国家林业局、国家发改委、财政部26日发布《全国森林防火规划》（2018-2025），规划总投资375亿元，森林防火十年规划将全国森林防火区域分为火灾高危区、火灾高风险区和一般火险区3类，分别提出治理措施。将重点实施`,
            },
            {
                img:"/news/默认新闻.jpg",
                title:"中国未来10年规划总投资",
                icon:"",
                time:'2019-07-10',
                des:`国家林业局、国家发改委、财政部26日发布《全国森林防火规划》（2018-2025），规划总投资375亿元，森林防火十年规划将全国森林防火区域分为火灾高危区、火灾高风险区和一般火险区3类，分别提出治理措施。将重点实施`,
            },
            {
                img:"/news/默认新闻.jpg",
                title:"中国未来10年规划总投资",
                icon:"",
                time:'2019-07-10',
                des:`国家林业局、国家发改委、财政部26日发布《全国森林防火规划》（2018-2025），规划总投资375亿元，森林防火十年规划将全国森林防火区域分为火灾高危区、火灾高风险区和一般火险区3类，分别提出治理措施。将重点实施`,
            }
        ]
        }
    },
    methods:{
        handleSizeChange(val) {
           let that = this;
           that.pageData.pageSize = val;
           that.newsData = that.allData.slice((that.pageData.currentPage-1)*val,that.pageData.currentPage*val)
        },
        handleCurrentChange(val) {
            let that = this;
            that.newsData = that.allData.slice(that.pageData.pageSize*(val-1),that.pageData.pageSize*val)
        },
        showDetailNews(val){
            //let that = this;
            if(val == "firstTitle")
            {
                this.$router.push({path:'/index/news/detailNew'})
                console.log(val)
            }
        }
    },
    mounted()
    {
        //let that = this;
        this.pageData.total = this.allData.length;
        this.newsData = this.allData.slice(0,5)
    }
}
</script>