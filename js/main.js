import Vue from 'https://cdn.jsdelivr.net/npm/vue@2.6.11/dist/vue.esm.browser.js';

const myVM = (() => {
    //instance fore vue//
    let vue_vm = new Vue({
        data: {
            message: "Hello from Vue!",

            collection: [
                { name: "Jeffrey", role: "Student" },
                { name: "Devin", role: "Manager" },
                { name: "Adam", role: "Trainer" },
            ]
        },

        methods: {
            logClicked() {
                console.log('clicked on an element.');
            }
        }

    }).$mount("#app");

})();