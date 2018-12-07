<template>
    <el-row class="myapp-panel">
        <h4>筛选字段：</h4>
        <hr>
        <el-row class="sm-field-panel">
            <el-col v-for="item in fieldList" :key="item.id" :span="4" class="sm-field-card">
                <div>{{ item.name_display }}</div>
                <el-select v-model="params[item.name]">
                    <el-option
                            v-for="choice in item.choices"
                            :key="choice.id"
                            :label="choice.value"
                            :value="choice.key">
                    </el-option>
                </el-select>
            </el-col>
        </el-row>
        <h4>时间字段：</h4>
        <hr>
        <el-row class="sm-field-panel">
            <el-col :span="4" class="sm-field-card" v-for="(v, k, i) in timeField" :key="v.id">
                <div>{{ v }}</div>
                <el-date-picker
                        v-if="i%2 === 0"
                        v-model="params[k]"
                        type="date"
                        placeholder="选择日期"
                        value-format="yyyy-MM-dd 00:00:00">
                </el-date-picker>
                <el-date-picker
                        v-else
                        v-model="params[k]"
                        type="date"
                        placeholder="选择日期"
                        value-format="yyyy-MM-dd 23:59:59">
                </el-date-picker>
            </el-col>
        </el-row>
        <h4>搜索内容：</h4>
        <hr>
        <el-row class="sm-field-panel" :gutter="20">
            <el-col :span="16">
                <el-input v-model="params.search" placeholder="请输入搜索内容"></el-input>
            </el-col>
            <el-col :span="4">
                <el-button type="primary" icon="el-icon-search" @click="searchMethod">搜索</el-button>
                <el-button type="primary" icon="el-icon-delete" @click="clickParams">清空输入</el-button>
            </el-col>
        </el-row>
    </el-row>
</template>

<script>
    export default {
        name: "FilterFields",
        props: {
            fieldList: Array,
            timeField: Object,
            params: Object,
            searchMethod: Function,
        },
        methods: {
            clickParams() {
                for (var key in this.params) {
                    this.params[key] = ''
                }
            }
        }
    }
</script>

<style scoped>
    .sm-field-panel {
        margin: 20px 0;
    }

    .sm-field-card {
        text-align: center;
    }
</style>