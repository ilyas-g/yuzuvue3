import { defineStore } from 'pinia';

export const useLanguageStore = defineStore('language', {
    state: () => ({ langs: 'en' }),
    // actions: {
    //     chooseLang(param, test) {
    //         this.langs = param;
    //         console.log(this.langs);
    //         console.log(test);
    //     }
    // }
});
