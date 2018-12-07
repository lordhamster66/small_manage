<template>
    <v-app id="inspire">
        <v-content>
            <v-container fluid fill-height>
                <v-layout align-center justify-center>
                    <v-flex xs12 sm8 md4>
                        <v-card class="elevation-12">
                            <v-toolbar dark color="primary">
                                <v-toolbar-title>登录以使用管理系统</v-toolbar-title>
                            </v-toolbar>
                            <v-card-text>
                                <v-form>
                                    <v-text-field prepend-icon="person" name="login" label="用户名"
                                                  type="text" v-model="username"></v-text-field>
                                    <v-text-field id="password" prepend-icon="lock" name="password" label="密码"
                                                  type="password" v-model="password"></v-text-field>
                                </v-form>
                            </v-card-text>
                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn color="primary" @click="Login">登录</v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-content>
    </v-app>
</template>

<script>
    import {login} from '../api/api'

    export default {
        name: "Login",
        data: () => ({
            username: '',
            password: '',
        }),
        methods: {
            Login() {
                login({username: this.username, password: this.password}).then((response) => {
                    const userInfo = {
                        username: response.data.phone,
                        Authorization: "Token " + response.data.token
                    };
                    this.$cookies.set('userInfo', userInfo, 30 * 24 * 60 * 60);
                    this.$router.push('/');
                    this.$message.success("登录成功！");
                })
            }
        }
    }
</script>

<style scoped>
    #inspire {
        background-image: url('../assets/bg.jpg');
        background-position: 50% 50%;
        background-size: cover;
        background-repeat: no-repeat;
    }
</style>