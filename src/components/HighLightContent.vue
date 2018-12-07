<template>
    <span v-html="highLightContent"></span>
</template>

<script>
    export default {
        name: "HighLightContent",
        data: function () {
            return {}
        },
        props: {
            content: String,
            search: String
        },
        computed: {
            highLightContent() {
                if (this.search) {
                    return this.content.replace(this.search, "<sapn style='background-color: yellow'>"
                        + this.search + "</sapn>")
                } else {
                    return this.content
                }
            }
        }
    }
</script>

<style scoped>

</style>