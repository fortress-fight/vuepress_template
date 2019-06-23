<template>
    <div id="site_bg" class="site_bg" :style="c_style">
        <img class="site_bg-img" :src="bg_link" alt srcset>
    </div>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
    data() {
        return {
            bg_link: ""
        };
    },
    props: {
        bg: String
    },
    computed: {
        c_style() {
            return {
                backgroundImage: `url(${this.bg_link})`
            };
        }
    },
    mounted() {
        this.bg_link = this.$withBase(
            this.bg || this.$page.frontmatter.heroImage
        );
    }
});
</script>

<style lang="scss">
.home .hero {
    height: calc(100vh - 11.6rem);

    position: relative;
    z-index: 10;
    text-align: right;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-left: calc(50% - 50vw);
    img {
        display: none;
    }
    .description {
        margin: 0;
        width: 100%;
        max-width: none;
    }
}
.home .footer {
    position: relative;
    z-index: 10;
}
#main-title {
    max-width: 100%;
    width: 100%;
}
.site_bg {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-position: center;
    background-size: cover;
    &-img {
        display: none;
    }
}
</style>

