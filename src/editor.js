// import { EditorState } from "@codemirror/state";
// import { EditorView } from "@codemirror/view";
import { EditorState, EditorView, basicSetup } from "@codemirror/basic-setup";
// import { html } from "@codemirror/lang-html";
import getCommonConfig from "./getCommonConfig";
class Editor {
  constructor(ele, options = {}) {
    const { langSupport, onChange, code } = options;
    const _onChange = onChange || function () {};
    const commonConfig = getCommonConfig({
      onChange: _onChange,
    });
    const { extensions } = commonConfig;
    if (langSupport) {
      extensions.push(langSupport);
    }
    this.state = EditorState.create({
      extensions,
    });
    const div = document.createElement("div");
    const parentDom =
      typeof ele === "string" ? document.querySelector(ele) : ele;
    this.view = new EditorView({
      state: this.state,
      dom: div,
      parent: parentDom,
    });
    if (code) {
      this.setText(code);
    }
  }
  getState() {}
  getText() {
    return this.view.state.doc.toString();
  }
  setText(text) {
    const currentLen = this.getText().length;
    const newState = this.view.state.update({
      changes: { from: 0, to: currentLen, insert: text },
    });
    this.view.dispatch(newState);
  }
}

export default Editor;
