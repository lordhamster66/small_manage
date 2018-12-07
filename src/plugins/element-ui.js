import Vue from 'vue';
import 'element-ui/lib/theme-chalk/index.css';
import {
    Message, Row, Col, Container, Header,
    Aside, Main, Footer, Select, Option,
    DatePicker, Button, Icon, Input, Table,
    TableColumn
} from 'element-ui';

Vue.use(Row);
Vue.use(Col);
Vue.use(Container);
Vue.use(Header);
Vue.use(Aside);
Vue.use(Main);
Vue.use(Footer);
Vue.use(Select);
Vue.use(Option);
Vue.use(DatePicker);
Vue.use(Button);
Vue.use(Icon);
Vue.use(Input);
Vue.use(Table);
Vue.use(TableColumn);
Vue.prototype.$message = Message;
