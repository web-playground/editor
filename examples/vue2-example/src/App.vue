<template>
  <div id="app">
    <!-- no language
    <Editor @change="onChange" /> -->
    <!-- <Editor :langSupport="htmlSupport" /> -->
    html
    <HtmlEditor />
    <!-- <Editor lang="html" /> -->
  </div>
</template>

<script>
// import Editor from "../../../dist/es/vue";
// import Editor from "../../../src/wrapper/vue/vue";
// console.log(Editor);
// import { html } from "@codemirror/lang-html";
// import htmlSupport from "../../../dist/es/html";
import HtmlEditor from "../../../dist/vue/HtmlEditor";
export default {
  name: "App",
  components: {
    // Editor,
    HtmlEditor,
  },
  methods: {
    // htmlSupport,
    onChange(x) {
      console.log("onchange", x);
    },
  },
};
</script>
