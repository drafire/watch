import router from "@system.router"

var time = 0;
var type = null;
var time1 = null;

export default {
    clickAction() {
        console.log("训练页被点击了...");
        clearInterval(time1);
        time1 = null;
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
        this.seconds = time * 60;
    },
    onReady() {
        console.log("练习页面准备好了...")
    },
    onShow() {
        console.log("练习页面展示...");
        time1 = setInterval(this.runTime,1000); //注意这里调用函数的写法，是使用this.runTime
    },
    onDestroy() {
        console.log("练习页面销毁...")
    },
    data: {
        seconds: 0,
        isShow: true
    },
    runTime() {
        this.seconds--;
        if (this.seconds == 0) { //如果剩余秒数为0，清除定时器，并设置为null
            clearInterval(time1);
            time1 = null;
            this.isShow = false;
        }
    }
}
