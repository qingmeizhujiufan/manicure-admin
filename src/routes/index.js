import React from 'react';
import {Route, IndexRoute} from 'react-router';

import App from '../modules/App';
import Frame from '../modules/Frame';

/* 首页 */
import Home from '../modules/home/component/home';
/* 登录 */
import Login from '../modules/login/component/login';
/* APP管理 */
import Consume from '../modules/app/component/consume';
import AddVip from '../modules/app/component/addVip';
import Recharge from '../modules/app/component/recharge';
import Query from '../modules/app/component/query';
import Statistics from '../modules/app/component/statistics';

module.exports = (
    <Route path="/" component={App}>
        <IndexRoute component={Login}/>
        <route path="login" component={Login} />
        <Route path="/frame" component={Frame}>
            <IndexRoute component={Home}/>
            <route path="home" component={Home} />
            <route path="app/consume" component={Consume} />
            <route path="app/AddVip" component={AddVip} />
            <route path="app/recharge" component={Recharge} />
            <route path="app/query" component={Query} />
            <route path="app/statistics" component={Statistics} />
        </Route>
    </Route>
);
