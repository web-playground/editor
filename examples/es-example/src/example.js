import Editor from "../../../dist/es/editor";
import html from "../../../dist/es/html";
new Editor("body", {
  langSupport: html(),
  onChange: (x) => {
    console.log("change", x);
  },
});
