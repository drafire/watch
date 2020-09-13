import router from "@system.router"

var time = 0;
var type = null;
var leftSecondsTimer = null;
var contentTimer = null;
var interval = null; //呼吸切换时间间隔
var counter = 0; //呼吸切换次数
var totalSeconds = 0; //训练的时间

export default {
    clickAction() {
        console.log("训练页被点击了...");
        clearInterval(leftSecondsTimer);
        leftSecondsTimer = null;
        clearInterval(contentTimer);
        contentTimer = null;
        router.replace({
            uri: "pages/index/index"
        });
    },
    onInit() {
        console.log("练习页面初始化了...");
        console.log("接收到左边项：" + this.time);
        console.log("接收到右边项：" + this.type);
        time = this.time; // 注意这里的写法，这里的time赋值。总结起来，如果是data 动态绑定的值，需要使用this.的写法，其他不需要
        type = this.type;
        this.seconds = time * 30;
        totalSeconds = time * 30;
        //设置切换的时间
        interval = type == "较慢" ? 6 : type == "舒服" ? 4 : 2;
        console.log("切换内容时间间隔为" + interval + "秒");
        console.log("一共要切换" + totalSeconds / interval + "次");
    },
    onReady() {
        console.log("练习页面准备好了...")
    },
    onShow() {
        console.log("练习页面展示...");
        leftSecondsTimer = setInterval(this.runTime,1000); //注意这里调用函数的写法，是使用this.runTime
        //开启一个定时器，用于切换内容
        contentTimer = setInterval(this.runContent,interval * 1000); //每隔interval秒切换一次内容
    },
    onDestroy() {
        console.log("练习页面销毁...")
    },
    data: {
        seconds: 0,
        txtIsShow: true,
        action: "吸气",
        actionIsShow: true
    }

,
    runTime() {
        this.seconds--;
        if (this.seconds == 0) { //如果剩余秒数为0，清除定时器，并设置为null
            clearInterval(leftSecondsTimer);
            leftSecondsTimer = null;
            this.txtIsShow = false;
        }
    }
,
    runContent() {
        counter++;
        console.log("已经切换" + counter + "次");
        if (counter == totalSeconds / interval) {
            console.log("训练完成");
            this.action = "训练完成";
            clearInterval(contentTimer);
            contentTimer = null;
        } else {
            this.action = this.action == "呼气" ? "吸气" : "呼气";
        }
    }
}
