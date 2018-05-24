import React from 'react';
import { Form, Row, Col, Breadcrumb, Icon, Input, InputNumber, Dropdown, Menu, Avatar, Select, Divider, Button, Upload, notification } from 'antd';
import ajax from 'Utils/ajax';
import restUrl from 'RestUrl';
import '../dish.less';

const FormItem = Form.Item;
const Option = Select.Option;

const getDishDetailInfoUrl = restUrl.ADDR + 'server/getDishDetail';

const formItemLayout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 12 },
};

class ProductDetailInfo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    	data: {},
    	attachesFileList: [],
    	coverAttachesFileList: [],
    };
  }

  componentDidMount = () => {
  	this.getDishDetailInfo();
  }

  //获取菜品详情
  getDishDetailInfo = (id) => {
  	let param = {};
  	param.id = this.props.params.id;
  	ajax.getJSON(getDishDetailInfoUrl, param, (data) => {
  		data =  data.backData;
  		data.dish_img = restUrl.BASE_HOST + 'UpLoadFile/' + data.dish_img + '.png';
		this.setState({
			data
		});
  	});
  }

  render() {
  	let { data } = this.state;

    return (
      <div className="zui-content">
      	<div className="ibox-title">
            <h5>会员充值</h5>
        </div>
        <div className="ibox-content">
	    </div>
      </div>
    );
  }
}

export default ProductDetailInfo;
