<template>
    <v-app id="inspire">
        <v-navigation-drawer :clipped="$vuetify.breakpoint.lgAndUp" v-model="drawer" fixed app>
            <v-list dense>
                <template v-for="item in items">
                    <v-layout v-if="item.heading" :key="item.heading" row align-center>
                        <v-flex xs6>
                            <v-subheader v-if="item.heading">
                                {{ item.heading }}
                            </v-subheader>
                        </v-flex>
                        <v-flex xs6 class="text-xs-center">
                            <a href="#!" class="body-2 black--text">EDIT</a>
                        </v-flex>
                    </v-layout>
                    <v-list-group
                            v-else-if="item.children"
                            v-model="item.model"
                            :key="item.text"
                            :prepend-icon="item.model ? item.icon : item['icon-alt']"
                            append-icon="">
                        <v-list-tile slot="activator">
                            <v-list-tile-content>
                                <v-list-tile-title>
                                    {{ item.text }}
                                </v-list-tile-title>
                            </v-list-tile-content>
                        </v-list-tile>
                        <v-list-tile v-for="(child, i) in item.children" :key="i" @click="jumpIndex(child.index)">
                            <v-list-tile-action v-if="child.icon">
                                <v-icon>{{ child.icon }}</v-icon>
                            </v-list-tile-action>
                            <v-list-tile-content>
                                <v-list-tile-title>
                                    {{ child.text }}
                                </v-list-tile-title>
                            </v-list-tile-content>
                        </v-list-tile>
                    </v-list-group>
                    <v-list-tile v-else :key="item.text" @click="jumpIndex(item.index)">
                        <v-list-tile-action>
                            <v-icon>{{ item.icon }}</v-icon>
                        </v-list-tile-action>
                        <v-list-tile-content>
                            <v-list-tile-title>
                                {{ item.text }}
                            </v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
                </template>
            </v-list>
        </v-navigation-drawer>
        <v-toolbar :clipped-left="$vuetify.breakpoint.lgAndUp" color="blue darken-3" dark app fixed>
            <v-toolbar-title style="width: 300px" class="ml-0 pl-3">
                <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
                <span class="hidden-sm-and-down">{{ this.$store.state.userInfo.username }}</span>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn icon>
                <v-icon>apps</v-icon>
            </v-btn>
            <v-btn icon>
                <v-icon>notifications</v-icon>
            </v-btn>
            <v-btn icon large>
                <v-avatar size="32px" tile>
                    <img src="../assets/avatar.jpg" alt="avatar">
                </v-avatar>
            </v-btn>
        </v-toolbar>
        <v-content>
            <el-container class="myapp-container">
                <el-main class="myapp-main">
                    <router-view/>
                </el-main>
                <el-footer class="myapp-footer" style="height: 30px;line-height: 30px">
                    &copy;2018 — <strong>Small Manage</strong>
                </el-footer>
            </el-container>
        </v-content>
    </v-app>
</template>

<script>
    export default {
        name: "MyApp",
        data: () => ({
            drawer: null,
            items: [
                {icon: 'home', text: '首页', index: '/'},
                {icon: 'message', text: '实时短讯', index: '/news'},
                {icon: 'list', text: '产品列表', index: '/products'},
                {icon: 'show_chart', text: '统计页面', index: '/statics'},
            ],
        }),
        methods: {
            jumpIndex(index) {
                this.$router.push(index);
            }
        }
    }
</script>

<style>
    .myapp-container {
        height: 100%
    }

    .myapp-main {
        padding: 40px
    }

    .myapp-footer {
        padding: 0;
        text-align: center;
        background-color: #444444;
        color: white;
    }

    .myapp-panel {
        background-color: white;
        border: 1px solid #E0E0E0;
        min-height: 60px;
        padding: 20px;
        margin-bottom: 20px;
    }
</style>