// import { EditorState } from "@codemirror/state";
// import { EditorView } from "@codemirror/view";
import { EditorState, EditorView, basicSetup } from "@codemirror/basic-setup";
// import { html } from "@codemirror/lang-html";
import getCommonConfig from "./getCommonConfig";
class Editor {
  constructor(ele, options = {}) {
    const { langSupport } = options;
    const commonConfig = getCommonConfig();
    const { extensions } = commonConfig;
    if (langSupport) {
      extensions.push(langSupport);
    }
    // if(lang){
    //   // import(`@codemirror/lang-${lang}`).then(console.log)
    //   import(`@codemirror/lang-html`).then(({html})=>{
    //     extensions.push(html())
    //   })
    // }
    // console.log('x',[basicSetup, html()])
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
}

export default Editor;
