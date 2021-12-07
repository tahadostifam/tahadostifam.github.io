new Vue({
    el: "#app",
    mounted(){
        window.fetch_data().then((data) => {
            this.$set(this.$data, 'data', data)
        })
    },
    data() {
        return {
            data: null
        };
    },
});
