import React from 'react';
import {Link} from 'react-router';
import {
    Form,
    Row,
    Col,
    Input,
    InputNumber,
    Tree,
    Icon,
    List,
    Switch,
    Divider,
    Breadcrumb,
    Button,
    Spin,
    message,
    Modal
} from 'antd';
import _ from 'lodash';
import restUrl from 'RestUrl';
import ajax from 'Utils/ajax';
import '../dish.less';
import {notification} from "antd/lib/index";

const FormItem = Form.Item;
const formItemLayout = {
    labelCol: {span: 6},
    wrapperCol: {span: 12},
};

const Search = Input.Search;
const getDishListUrl = restUrl.ADDR + 'server/getDishList';
const onlineStateChangeUrl = restUrl.ADDR + 'server/onlineStateChange';
const delDsihUrl = restUrl.ADDR + 'server/delDish';

class Consume extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: {},
            visible: false,
            loading: true,
        };
    }

    componentWillMount = () => {

    }

    componentDidMount = () => {
    }

    detailrouter = (id) => {
        return `/frame/dish/dishDetailInfo/${id}`
    }

    editrouter = (id) => {
        return `/frame/dish/editDish/${id}`
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            console.log('Received err: ', err);
            if (!err) {
                console.log('Received values of form: ', values);
                values.id = this.props.params.id;
                values.dish_img = values.dish_img.map((item, index) => {
                    return item.response.data.id;
                }).join(',');
                console.log('handleSubmit  param === ', values);

                ajax.postJSON(saveDishtUrl, JSON.stringify(values), (data) => {
                    notification.open({
                        message: '更新菜品信息成功！',
                        icon: <Icon type="smile-circle" style={{color: '#108ee9'}}/>,
                    });
                    // this.context.router.push('/frame/product/productList');
                });
            }
        });
    }

    render() {
        const {data, loading} = this.state;
        const {getFieldDecorator, setFieldsValue} = this.props.form;

        return (
            <div className="zui-content">
                <div className="ibox-title">
                    <h5>门店消费</h5>
                </div>
                <div className="ibox-content">
                    <Row>
                        <Col span={8}>
                            <Search
                                placeholder="输入手机号查询"
                                onSearch={value => console.log(value)}
                                enterButton
                            />
                        </Col>
                    </Row>
                    <Divider>用户信息</Divider>
                    <Form onSubmit={this.handleSubmit}>
                        <Row>
                            <Col span={12}>
                                <FormItem
                                    label="用户姓名"
                                    {...formItemLayout}
                                >
                                    {getFieldDecorator('dish_type', {
                                        rules: [{required: false}],
                                        initialValue: data.dish_type
                                    })(
                                        <Input disabled/>
                                    )}
                                </FormItem>
                            </Col>
                            <Col span={12}>
                                <FormItem
                                    label="用户余额"
                                    {...formItemLayout}
                                >
                                    {getFieldDecorator('dish_type', {
                                        rules: [{required: false}],
                                        initialValue: data.dish_type
                                    })(
                                        <Input disabled/>
                                    )}
                                </FormItem>
                            </Col>
                        </Row>
                        <Divider>消费信息</Divider>
                        <Row>
                            <Col span={12}>
                                <FormItem
                                    label="本地消费"
                                    {...formItemLayout}
                                >
                                    {getFieldDecorator('dish_title', {
                                        rules: [{required: true, message: '消费金额不能为空!'}],
                                        initialValue: data.dish_title
                                    })(
                                        <InputNumber min={0} step={0.01}/>
                                    )}
                                </FormItem>
                            </Col>
                            <Col span={12}>
                                <FormItem
                                    label="扣费店员编号"
                                    {...formItemLayout}
                                >
                                    {getFieldDecorator('dish_title', {
                                        rules: [{required: true, message: '扣费店员编号不能为空!'}],
                                        initialValue: data.dish_title
                                    })(
                                        <Input placeholder=""/>
                                    )}
                                </FormItem>
                            </Col>
                        </Row>
                        <Divider></Divider>
                        <Row type="flex" justify="center">
                            <Col>
                                <Button type="primary" htmlType="submit">
                                    确认
                                </Button>
                            </Col>
                        </Row>
                    </Form>
                </div>
            </div>
        );
    }
}

const WrappedDishList = Form.create()(Consume);
Consume.contextTypes = {
    router: React.PropTypes.object
}

export default WrappedDishList;
