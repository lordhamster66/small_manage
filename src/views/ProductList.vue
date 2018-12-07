<template>
    <div>
        <FilterFields :fieldList="fieldList"
                      :timeField="timeField"
                      :params="params"
                      :searchMethod="searchProducts">
        </FilterFields>
        <el-row class="myapp-panel">
            <el-table
                    :data="tableData3"
                    height="250"
                    border
                    style="width: 100%">
                <el-table-column
                        prop="date"
                        label="日期"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="name"
                        label="姓名"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="address"
                        label="地址">
                </el-table-column>
            </el-table>
        </el-row>
    </div>
</template>

<script>
    import FilterFields from '../components/FilterFields'
    import {filterFields, getUniqueList} from '../api/api'

    export default {
        name: "ProductList",
        components: {
            FilterFields
        },
        data: () => ({
            fieldList: [],
            timeField: {
                add_time__gte: '起始新增产品时间',
                add_time__lte: '截止新增产品时间',
                progress_update_time__gte: '起始进度更新时间',
                progress_update_time__lte: '截止进度更新时间',
            },
            params: {
                add_time__gte: '',
                add_time__lte: '',
                progress_update_time__gte: '',
                progress_update_time__lte: '',
                search: ''
            },
            tableData3: [{
                date: '2016-05-03',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
            }, {
                date: '2016-05-02',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
            }, {
                date: '2016-05-04',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
            }, {
                date: '2016-05-01',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
            }, {
                date: '2016-05-08',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
            }, {
                date: '2016-05-06',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
            }, {
                date: '2016-05-07',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
            }]
        }),
        created() {
            // 获取筛选字段列表
            filterFields({earnings_type: 'uniqueproduct'}).then(res => {
                this.fieldList = res.data;
                for (var i = 0; i < res.data.length; i++) {
                    const name = this.fieldList[i].name;
                    this.$set(this.params, name, '')
                }
            })
        },
        methods: {
            searchProducts() {
                getUniqueList(this.params).then(res => {
                    console.log(res.data)
                })
            }
        }
    }
</script>

<style scoped>
</style>
