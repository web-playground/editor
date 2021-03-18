import { nodeResolve } from "@rollup/plugin-node-resolve";

export default [
  {
    input: ["src/editor", "src/lang/html"],
    output: {
      format: "es",
      dir: "dist/es",
    },
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
