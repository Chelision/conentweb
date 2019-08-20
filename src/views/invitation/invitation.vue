<template>
    <div class="invitation-wraper">
        <div class="out-wraper">
            <div class="invitation-banner">
                <img src="/invitation/banner.jpg" alt="">
            </div>
            <div class="inner_wraper">
                <div class="invitation-content">
                    <div class="invitation-header">
                        <p class="p1">
                            为了公司更好地发展，现招聘以下岗位:前台文员、.NET 开发工程师、GIS 开发工程师（C/S）、Web GIS 开发工程师、研发工程师
                        </p>
                        <p class="p1">工作地点：北京</p>
                        <p class="p2">
                            有意者发简历到jszc@cont.com.cn， 邮件主题请注明姓名和应聘岗位，如： *** 应聘 .NET 开发工程师。
                        </p>
                    </div>
                    <div class="invitation-section">
                        <div class="job-wraper" v-for="(item,index) in invitationData" :key="index">
                            <div class="invitation-logo">
                                <img :src="item.icon" alt="">
                            </div>
                            <div class="invitation-des">
                                <ul>
                                    <li class="left-invitation">
                                        <p class="p1">{{item.p1Data}}</p>
                                        <p class="p2" v-for="(item2,index2) in item.p1Items" :key="index2">
                                            {{item2}}
                                        </p>
                                    </li>
                                    <li class="right-invitation">
                                        <p class="p1">{{item.p2Data}}</p>
                                        <p class="p2" v-for="(item3,index3) in item.p2Items" :key="index3">
                                            {{item3}}
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div style="height:120px;background:#f8f8f8;width:100%">

        </div>
    </div>
</template>
<style lang="less">
.invitation-wraper{
    margin-top:89px;
    background:#f8f8f8;
    .inner_wraper{
        background:#fff;
    }
}
.out_wraper{
    width: 100%;
    text-align: center;
    margin-bottom: 120px;
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
.invitation-banner{
    width:100%;
    height:449px;
    //background:rgba(18,47,56,1);
    min-width:1366px;
    img{
        width: 100%;
        height: 100%;
    }
}
.invitation-content{
    margin-top:20px;
    padding:22px 23px 0 24px;
   .invitation-header{
        padding-right:20px;
        height:100px;
        background:rgba(245,245,245,1);
        //margin:21px 320px 15px 25px;
        padding-left:23px;
        padding-top:15px;
        padding-right: 22px;
        border-left:2px solid rgba(27,182,95,1);
        p{
            font-size:14px;
            font-size:14px;
            font-family:MicrosoftYaHei;
            font-weight:400;
            line-height:28px;
        }
        .p1{
            color:#333333; 
        }
        .p2{
            color:#F05959
        }
   }
   .invitation-section{
       .job-wraper{
           border-bottom: 1px solid rgba(221,221,221,1);
           margin-top:40px;
       }
       .job-wraper:last-child{
           border:none;
           padding-bottom:40px;
       }
       .invitation-logo{
            width:100%;
            height:34px;
            background:rgba(245,245,245,1);;
            position:relative;
            img{
                position:absolute;
                top:-17px
            }
        }
        .invitation-des{
            ul{
                display: flex;
                padding:20px 0 0 40px;
                margin-bottom:40px;
                li{
                    //height:165px;
                    .p1{
                        font-family: MicrosoftYaHei;
                        color:#333333;
                        font-size: 16px;
                        font-weight:bold;
                        margin-bottom: 20px;
                    }
                    .p2{
                        font-size:15px;
                        font-family:MicrosoftYaHei;
                        line-height: 30px;
                        color:rgba(51,51,51,1);
                    }
                }
                .left-invitation{
                    width:510px;
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
            invitationData:[
                {
                    icon:"/invitation/1.png",
                    p1Data:"职责描述",
                    p2Data:"任职要求",
                    p1Items:[
                        "1.负责公司来客来访人员的接待工作和总机的转接工作； ",
                        "2.负责公司各类邮件、报刊的接受与转发工作，商务旅行机票及火车",
                        "3.负责公司各类文件资料的打印及复印工作；",
                        "4.负责办公用品的采买，办公环境的管理；",
                        "5.负责管理和监督员工考勤和外出登记；",
                        "6.上级领导交办的其他事项。"
                    ],
                    p2Items:[
                        "1.中专以上学历，行政管理、文秘等相关专业，或具有一年以上文员工作经验；",
                        "2.普通话标准，五官端正，身体健康，年龄20～23岁；",
                        "3.有较强的沟通能力和服务意识及文字表达能力；",
                        "4.性格开朗，待人热情，吃苦耐劳。对工作有责任心，积极主动，具备良好的团队精神；",
                        "5.熟练使用 Microsoft Office 软件及办公设备；",
                        "6.发简历时请提供一张个人生活彩照。"
                    ]
                },
                {
                    icon:"/invitation/1.png",
                    p1Data:"职责描述",
                    p2Data:"任职要求",
                    p1Items:[
                        "1.主要参与 MIS 系统的设计和开发工作； ",
                        "2.参与产品规划及系统设计工作；",
                        "3.参与客户需求调研工作；",
                        "4.根据设计进行实际的代码编写工作；",
                        "5.部分文档编写工作。",
                    ],
                    p2Items:[
                        "1.计算机软件、应用数学等相关专业本科以上学历；",
                        "2.能熟练在 .NET 架构下进行 Web 应用开发；",
                        "3.熟练掌握 HTML 和 Javascript 编程；",
                        "4.熟悉主流数据库如 ORACLE、SQL Server，能熟练地运用SQL语言；",
                        "5.一年以上相关开发经验，有 Silverlight 开发 或 MS Office 二次开发开发经验者优先。"
                    ]
                },
                {
                    icon:"/invitation/1.png",
                    p1Data:"职责描述",
                    p2Data:"任职要求",
                    p1Items:[
                        "1.主要参与 MIS 系统的设计和开发工作；",
                        "2.参与产品规划及系统设计工作；",
                        "3.参与客户需求调研工作；",
                        "4.根据设计进行实际的代码编写工作；",
                        "5.部分文档编写工作。"
                    ],
                    p2Items:[
                        "1.测绘、地理信息系统或计算机等相关专业毕业，1年以上工作经验；",
                        "2.深入了解 GIS 理论知识，熟悉空间数据及影像图的处理技术；",
                        "3.熟练掌握 C# 编程技术，熟练掌握 ArcGIS Engine 开发技术；",
                        "4.熟悉主流数据库如 ORACLE、SQL Server 及空间数据库技术；",
                        "5.具有三维 GIS 开发工作经验者优先。"
                    ]
                },
                {
                    icon:"/invitation/1.png",
                    p1Data:"职责描述",
                    p2Data:"任职要求",
                    p1Items:[
                       "1.主要参与Web GIS系统的设计和开发工作；",
                        "2.参与客户需求调研工作；",
                        "3.根据设计进行实际的代码编写工作；",
                        "4.部分文档编写工作。"
                    ],
                    p2Items:[
                        "1.测绘、地理信息系统或计算机等相关专业毕业，有Web开发经验；",
                        "2.了解GIS理论知识，熟练掌握 ArcIMS 或 ArcGIS Serve 开发技术；",
                        "3.熟练掌握ASP.NET编程技术，熟练掌握 HTML 和 Javascript编程；",
                        "4.熟悉 Silverlight 开发技术；",
                        "5.熟悉主流数据库如 ORACLE、SQL Server及空间数据库技术。"
                    ]
                },
                {
                    icon:"/invitation/1.png",
                    p1Data:"职责描述",
                    p2Data:"任职要求",
                    p1Items:[
                        "1.负责公司新产品的系统研发工作；",
                        "2.参与产品规划及系统设计工作；",
                        "3.根据设计进行实际的代码编写工作；",
                        "4.部分文档编写工作。"                        
                    ],
                    p2Items:[
                        "1.计算机、应用数学或相关专业，本科以上学历；",
                        "2.至少两年以上的软件开发经验；",
                        "3.熟悉软件配置管理，熟悉OOA、OOD、UML知识，熟练掌握常用的开发模式；",
                        "4.精通 C# 语言，熟悉 C/S 或者 B/S 构架；",
                        "5.熟悉主流数据库如 Oracle、SQL Server；",
                        "6.具有很强的逻辑分析能力；",
                        "7.具有良好的团队协作精神、学习能力和用户沟通能力。"
                    ]
                }
            ]
        }
    },
    methods:{
        
    },
    mounted(){
       
    }
}
</script>