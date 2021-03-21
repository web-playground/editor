<template>
  <div ref="editor"></div>
</template>
<script>
import Editor from "../../editor";

export default {
  props: {
    initCode: {
      type: String,
      default: "",
    },
    lang: {
      type: String,
      required: true,
    },
  },
  mounted() {
    const langSupport = await import(`../../lang/${this.lang}`)
    this.editor = new Editor(this.$refs.editor,{langSupport,onChange(code){
      this.$emit('change',code)
    }});
  },
  methods:{
    setText(text){
      this.editor.setText(text)
    },
    getText(){
      this.editor.getText()
    }
  }
};
</script>
