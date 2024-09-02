import { nodeResolve } from "@rollup/plugin-node-resolve";

export default {
  input: "./editor.mjs",
  output: {
    file: "./editor.bundle.js",
    format: "iife",
  },
  plugins: [
    nodeResolve({
      dedupe: [
        "@codemirror/state",
        "@codemirror/language",
        "@lezer/highlight",
        "@lezer/lr",
        "@codemirror/autocomplete",
      ],
    }),
  ],
};
