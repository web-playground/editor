<template>
  <div>
    <div ref="editor"></div>
  </div>
</template>
<script>
// import Editor from "../../editor";
// import htmlSupport from "../../lang/html";
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
    onChange: Function,
  },
  created() {
    console.log("created");
  },
  mounted() {
    console.log("mounted", this);
    // const langSupport = this.lang && (await import(`../../lang/${this.lang}`));
    // const langSupport = this.lang && (await import(`./${this.lang}`));
    // console.log({ langSupport });
    // console.log(this.$el.outerHTML);
    // this.$nextTick(() => {
    //   console.log(this.$el);
    // });
    // this.editor = new Editor(this.$el, {
    //   // langSupport: htmlSupport(),
    //   langSupport,
    //   ...this.$attrs,
    //   onChange: (code) => {
    //     if (this.onChange) {
    //       this.onChange();
    //     }
    //     this.$emit("change", code);
    //   },
    // });
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
