import OurVue, { VueConstructor } from "vue";
import Editor from "./components/Editor.vue";

const Baklava = {
    install(Vue: VueConstructor, args?: any): void {
        if (OurVue !== Vue) {
            // tslint:disable-next-line:no-console
            console.error("Multiple instances of Vue detected\n" +
                "See https://github.com/vuetifyjs/vuetify/issues/4068\n\n" +
                'If you\'re seeing "$attrs is readonly", it\'s caused by this');
        }
        Vue.component("baklava-editor", Editor);
    }
};

// @ts-ignore
if (typeof window !== "undefined" && window.Vue) {
    // @ts-ignore
    window.Vue.use(Baklava);
}

export default Baklava;
