// import { EditorState } from "@codemirror/state";
// import { EditorView } from "@codemirror/view";
import { EditorState, EditorView, basicSetup } from "@codemirror/basic-setup";
// import { html } from "@codemirror/lang-html";
import getCommonConfig from "./getCommonConfig";
class Editor {
  constructor(ele, options = {}) {
    const { langSupport, onChange } = options;
    const _onChange = onChange || function () {};
    const commonConfig = getCommonConfig({
      onChange: _onChange,
    });
    const { extensions } = commonConfig;
    if (langSupport) {
      extensions.push(langSupport);
    }
    const state = EditorState.create({
      extensions,
    });
    const div = document.createElement("div");
    const parentDom =
      typeof ele === "string" ? document.querySelector(ele) : ele;
    new EditorView({
      state,
      dom: div,
      parent: parentDom,
    });
    this.state = state;
  }
  getState() {}
  getText() {}
  setText() {}
}

export default Editor;
