<template>
  <div>
    <div ref="editor"></div>
  </div>
</template>
<script>
import Editor from "../../editor";
import htmlSupport from "../../lang/html";
export default {
  name: "Editor",
  props: {
    // initCode: {
    //   type: String,
    //   default: "",
    // },
    // lang: {
    //   type: String,
    //   required: true,
    // },
    // onChange: {
    //   type: Function,
    //   default: null,
    // },
    onChange: Function,
  },
  created() {
    console.log("created");
  },
  async mounted() {
    console.log("mounted", this);
    console.log(this.$el.outerHTML);
    this.$nextTick(() => {
      console.log(this.$el);
    });
    this.editor = new Editor(this.$el, {
      langSupport: htmlSupport(),
      ...this.$attrs,
      onChange: (code) => {
        if (this.onChange) {
          this.onChange();
        }
        this.$emit("change", code);
      },
    });
  },
  methods: {
    setText(text) {
      this.editor.setText(text);
    },
    getText() {
      this.editor.getText();
    },
  },
};
</script>
