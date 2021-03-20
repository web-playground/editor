import Editor from "../../../dist/es/editor";
import html from "../../../dist/es/html";
const editor = new Editor("#target", {
  langSupport: html(),
  code: "<div>example</div>",
  onChange: (x) => {
    console.log("change", x);
  },
});

window.getText = () => alert(editor.getText());
window.setText = () => {
  const text = document.getElementById("inputForSetText").value;
  editor.setText(text);
};
