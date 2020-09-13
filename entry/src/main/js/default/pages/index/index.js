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
    }
}
