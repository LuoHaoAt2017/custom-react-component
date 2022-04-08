import { Modal } from "antd";
import { ReactNode } from "react";

// function CustomModal() {
//   // this.modal = Modal.info({});
// }

// CustomModal.prototype.update = function (props: any) {
//   console.log("update");
//   // this.modal.update(props);
//   // modal.update(props);
// };

// CustomModal.prototype.destroy = function () {
//   console.log("destroy");
//   // this.modal.destroy();
//   // modal.destroy();
// };

interface Config {
  title?: string | ReactNode;
  content?: string | ReactNode;
  width?: number;
  onOk?: Function;
  onCancel?: Function;
}

let Instance;

function CustomModal() {}

CustomModal.create = function (config: Config) {
  Instance = Modal.info(config as any);
};

CustomModal.update = function (config: Config) {
  Instance.update(config);
};

CustomModal.destroy = function () {
  Instance.destroy();
};

export default CustomModal;
