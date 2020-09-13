import router from "@system.router"

export default {
    data: {
        picker1range: ["1", "2", "3"],
        pikcer2range: ["较慢", "舒服", "较快"]
    },
    clickAction() {
        console.log("主页被点击了...");
        router.replace({
            uri: "pages/pratice/pratice"
        });
    },
    pvChange1(pv) {
        console.log("左边选中:" + pv.newValue); /*这里注意，是newValue  注释的快捷键是shift+l*/
    },
    pvChange2(pv) {
        console.log("右边选中:" + pv.newValue);
    }
}
