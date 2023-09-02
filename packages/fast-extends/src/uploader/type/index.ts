import { useTypes } from "@fast-crud/fast-crud";
import types from "./types";
import _ from "lodash-es";
import { defaultConfig, uploaderConfig } from "./config";
import { AllUploadSuccessValidator } from "./validators";
export * from "./validators";
import { FsUploaderOptions } from "../d/type";

function setConfig(app: any, config: FsUploaderOptions) {
  _.merge(uploaderConfig, config);
  // app.config.globalProperties.$fs_uploader_config = _.merge(defaultConfig, config);
}
//兼容旧版本
const AllSuccessValidator = AllUploadSuccessValidator;
export { AllSuccessValidator };

export default {
  install(app: any, options: FsUploaderOptions) {
    const newTypes = types();
    const { addTypes } = useTypes();
    addTypes(newTypes);
    setConfig(app, options);
  }
};
