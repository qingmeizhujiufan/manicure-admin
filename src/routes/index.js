import React from 'react';
import {Route, IndexRoute} from 'react-router';

import App from '../modules/App';
import Frame from '../modules/Frame';

/* 首页 */
import Home from '../modules/home/component/home';
/* 登录 */
import Login from '../modules/login/component/login';
/* 菜单管理 */
import DishList from '../modules/dish/component/dishList';
import DishDetailInfo from '../modules/dish/component/dishDetailInfo';
import EditDish from '../modules/dish/component/editDish';
import AddDish from '../modules/dish/component/addDish';
import HealthFood from '../modules/dish/component/healthFood';
import AddHealthFood from '../modules/dish/component/addHealthFood';
import EditHealth from '../modules/dish/component/editHealth';
import DishSurvey from '../modules/dish/component/survey';
import BrandAdmin from '../modules/dish/component/brandAdmin';

module.exports = (
    <Route path="/" component={App}>
        <IndexRoute component={Login}/>
        <route path="login" component={Login} />
        <Route path="/frame" component={Frame}>
            <IndexRoute component={Home}/>
            <route path="home" component={Home} />
            <route path="app/dishList" component={DishList} />
            <route path="app/dishDetailInfo/:id" component={DishDetailInfo} />
            <route path="app/editDish/:id" component={EditDish} />
            <route path="app/AddDish" component={AddDish} />
            <route path="app/healthFood" component={HealthFood} />
            <route path="app/addHealthFood" component={AddHealthFood} />
            <route path="app/editHealth/:id" component={EditHealth} />
            <route path="app/survey" component={DishSurvey} />
            <route path="app/brandAdmin" component={BrandAdmin} />
        </Route>
    </Route>
);
