import router from "@system.router"

export default {
    clickAction() {
        console.log("训练页被点击了...");
        router.replace({
            uri: "pages/index/index"
        });
    },
    onInit() {
        console.log("练习页面初始化了...");
        console.log("接收到左边项：" + this.time);
        console.log("接收到右边项：" + this.type);
    },
    onReady() {
        console.log("练习页面准备好了...")
    },
    onShow() {
        console.log("练习页面展示...")
    },
    onDestroy() {
        console.log("练习页面销毁...")
    }
}
