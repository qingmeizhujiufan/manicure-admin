import React from 'react';
import { Link } from 'react-router';
import { Row, Col, Input, Icon, List, Divider, Breadcrumb, Badge, notification, Spin, Tabs, Table, message, Avatar } from 'antd';
import _ from 'lodash';
import restUrl from 'RestUrl';
import ajax from 'Utils/ajax';
import '../dish.less';
const TabPane = Tabs.TabPane;
const Search = Input.Search;
const getSurveyListUrl = restUrl.ADDR + 'survey/getSurveyList';

class Statistics extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: false
        };
    }

    componentWillMount = () => { 
    }

    componentDidMount = () => {
    }

  render() {
    const { loading } = this.state;

    return (
    <div className="zui-content">
        <div className="ibox-title">
            <h5>会员统计</h5>
        </div>
        <div className="ibox-content">
          <Spin spinning={loading}>
          </Spin>
        </div>
    </div>
    );
  }
}

Statistics.contextTypes = {
  router: React.PropTypes.object  
} 

export default Statistics;