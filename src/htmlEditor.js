import { html } from "@codemirror/lang-html";
import Editor from "./editor";

class HtmlEditor extends Editor {
  constructor(ele, options = {}) {
    return new Editor(ele, { ...options, langSupport: html() });
  }
}

export default HtmlEditor;
