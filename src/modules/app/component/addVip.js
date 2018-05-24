import React from 'react';
import { Form, Row, Col, Icon, Input, InputNumber, Dropdown, Menu, Avatar, Select, Divider, Button, Upload, notification, Spin } from 'antd';
import ajax from 'Utils/ajax';
import restUrl from 'RestUrl';
import '../dish.less';

const FormItem = Form.Item;
const Option = Select.Option;

const saveDishtUrl = restUrl.ADDR + 'server/saveAPDish';

const formItemLayout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 12 },
};

class AddVip extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    	fileList: []
    };
  }

  componentDidMount = () => {
  }

  handleChange = ({ fileList }) => this.setState({ fileList })

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        let param = {};
        param.dish_title = values.dish_title;
        param.dish_content = values.dish_content;
        param.companyId = values.companyId;
        param.dish_type = values.dish_type;
        param.dish_img = values.dish_img.fileList.map((item, index) => {
        	return item.response.data.id;
        }).join(',');
        console.log('handleSubmit  param === ', param);
        
        ajax.postJSON(saveDishtUrl, JSON.stringify(param), (data) => {
        	notification.open({
		        message: '新增菜品成功！',
		        description: '恭喜，又上架一款菜品。',
		        icon: <Icon type="smile-circle" style={{ color: '#108ee9' }} />,
		    });
		    // this.context.router.push('/frame/product/productList');
        });
      }
    });
  }

  saveProduct = () => {
  	this.setState({
  		loading: true
  	});
  }

  render() {
  	let { fileList } = this.state;
  	const { getFieldDecorator, setFieldsValue } = this.props.form;

    return (
      <div className="zui-content">
      	<div className="ibox-title">
            <h5>会员注册</h5>
        </div>
        <div className="ibox-content">
	      	<Form onSubmit={this.handleSubmit}>
	      		<Row>
	      			<Col span={12}>	    
				        <FormItem
				            label="用户电话"
				            {...formItemLayout}
				         >
				          	{getFieldDecorator('companyId', {
			                    rules: [{ required: true }],
			                })(
                                <Input placeholder="" />
					        )}
				        </FormItem>
				    </Col>
				    <Col span={12}>
				        <FormItem
				            label="用户姓名"
				            {...formItemLayout}
				         >
				         	{getFieldDecorator('dish_type', {
			                    rules: [{ required: false }],
			                    initialValue: '早餐'
			                })(
                                <Input placeholder="" />
					        )}
				        </FormItem>
				    </Col>
			    </Row>
	      		<Row>
	      			<Col span={12}>
				        <FormItem
				            label="充值金额"
				            {...formItemLayout}
				        >
				        	{getFieldDecorator('dish_title', {
			                    rules: [{ required: true, message: '产品名称不能为空!' }],
			                })(
				            	<Input placeholder="" />
				            )}
				        </FormItem>
				    </Col>
	      			<Col span={12}>
	      				<FormItem
				            label="赠送金额"
				            {...formItemLayout}
				          >
				          	{getFieldDecorator('dish_img', {
			                    rules: [{ required: true, message: '菜品图片不能为空!' }],
			                })(
                                <Input placeholder="" />
							)}
				        </FormItem>	      	
	      			</Col>
	      		</Row>
			    <Row>
				    <Col span={12}>
				        <FormItem
				            label="注册人"
				            {...formItemLayout}
				        >
				        	{getFieldDecorator('dish_content', {
			                    rules: [{ required: true, message: '菜品说明不能为空!' }],
			                })(
                                <Input placeholder="" />
				           	)}
				        </FormItem>
				    </Col>
			    </Row>
			    <Divider></Divider>
			    <Row type="flex" justify="center">
			    	<Col>
			    		<Button type="primary" htmlType="submit">
				          提交
				        </Button>
			    	</Col>
			    </Row>
	        </Form>
	    </div>
      </div>
    );
  }
}

const WrappedAddDish = Form.create()(AddVip);
AddVip.contextTypes = {
     router:React.PropTypes.object  
} 

export default WrappedAddDish;
