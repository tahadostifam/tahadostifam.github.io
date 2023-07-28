function getJsonDataUrl() {
    const fileName = "/data/data.json";
    if (window.location.hostname == "localhost")
        return fileName;
    else
        return window.location.origin + fileName;
}

const app = Vue.createApp({
    data() {
        return {
            data: null
        };
    },
    created() {
        const URL = getJsonDataUrl();

        fetch(URL).then(response => response.json()).then(data => {
            this.data = data;
        });
    }
});

app.mount('#app');
