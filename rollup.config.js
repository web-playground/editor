import { nodeResolve } from "@rollup/plugin-node-resolve";
import vuePlugin from "rollup-plugin-vue";

export default [
  {
    input: [
      "src/editor",
      "src/lang/css",
      "src/lang/html",
      "src/wrapper/vue/vue",
    ],
    output: {
      format: "es",
      dir: "dist/es",
      external: ["@codemirror/state"],
      // manualChunks(id) {
      //   console.log("chunk id", id);
      //   if (id.includes("node_modules/@codemirror/state")) {
      //     return "cm-state";
      //   }
      // },
    },
    plugins: [nodeResolve(), vuePlugin()],
  },
  {
    input: ["src/wrapper/vue/HtmlEditor.vue"],
    output: {
      format: "es",
      dir: "dist/vue",
    },
    plugins: [nodeResolve(), vuePlugin()],
  },
  {
    // input: ["src/editor"],//,
    input: "src/htmlEditor",
    output: [
      {
        format: "iife",
        name: "HtmlEditor",
        file: "dist/htmlEditor.js",
      },
    ],
    plugins: [nodeResolve()],
    // output: [
    //   {
    //     format: "iife",
    //     name: "Editor",
    //     file: "dist/editor.js",

    //   },
    //   {
    //     format: "iife",
    //     file: "dist/html.js",
    //     name: "htmlSupport",
    //   },
    // ],
  },
  // for <script>: HTML Support
  // {
  //   input: "src/lang/html.js",
  //   output: {
  //     format: "iife",
  //     file: "dist/html.js",
  //     name: "htmlSupport",
  //   },
  //   plugins: [nodeResolve()],
  // },
];
