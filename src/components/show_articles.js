Vue.component('show-articles', {
    template: `<div id="blog_section">
        <div class="jumbotron bg-lighten-primary" v-if="show_jumb">
            <h1 class="header">Blog</h1>
        </div>
        <div id="articles_list" v-if="blog_list != null && blog_list.length > 0">
            <div class="article-box" v-for="item, index in blog_list" :key="index">
                <a :href="'/view_article.html?slug=' + item.content_file">
                    <div class="cover image bg-overlay">
                        <img :src="item.image" alt="image" onload="window.loadLazyImage(this)">
                    </div>
                    <span class="date" v-html="item.date"></span>
                    <h2 class="header" v-html="item.header"></h2>
                    <div class="avatar">
                        <div class="image">
                        <img src="https://github.com/tahadostifam.png" alt="avatar" onload="window.loadLazyImage(this)">
                        </div>
                        <div class="texts">
                        <span class="author">by Taha Dostifam</span>
                        <span class="desc">Full-Stack Web Developer</span>
                        </div>
                    </div>
                </a>
            </div>
        </div>
        <div v-else id="not_found" style="padding-top: 20px;">
            <h1>There's Nothing.</h1>
        </div>
    </div>`,
    props: ["blog_list", "show_jumb"]
})