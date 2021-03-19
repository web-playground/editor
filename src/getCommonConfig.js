import { basicSetup } from "@codemirror/basic-setup";
import { StateField } from "@codemirror/state";
const handleChange = (onChange) =>
  StateField.define({
    create() {
      return 0;
    },
    update(v, tr) {
      if (tr.docChanged) {
        onChange(tr.newDoc.toString());
      }
    },
  });
export default function getCommonConfig({ onChange }) {
  return {
    extensions: [handleChange(onChange), basicSetup],
  };
}
