import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";
import "./style/common.less";

import "./mock";
import icons from "./icons";
import i18n from "./i18n";
import FsCrudInstall from "./install.js";
const app = createApp(App);
app.use(Antd);
app.use(router);
app.use(i18n);
app.use(icons);
FsCrudInstall(app);
app.mount("#app");
