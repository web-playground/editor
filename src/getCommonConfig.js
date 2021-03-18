import { basicSetup } from "@codemirror/basic-setup";

export default function getCommonConfig() {
  return {
    extensions: [basicSetup],
  };
}
