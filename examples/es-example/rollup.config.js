import { nodeResolve } from "@rollup/plugin-node-resolve";

export default {
  input: "src/example.js",
  output: {
    file: "dist/example.js",
    format: "iife",
  },
  plugins: [nodeResolve()],
};
