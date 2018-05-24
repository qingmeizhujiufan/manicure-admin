import React from 'react';
import { Form, Row, Col, Icon, Input, InputNumber, Dropdown, Menu, Avatar, Select, Divider, Button, Upload, notification, Spin } from 'antd';
import ajax from 'Utils/ajax';
import restUrl from 'RestUrl';
import '../dish.less';
import ZZEditor from '../../../components/zzEditor/zzEditor';

import { EditorState, convertFromRaw, convertToRaw, ContentState } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';

const FormItem = Form.Item;
const Option = Select.Option;

const getHealthDetailUrl = restUrl.ADDR + 'health/getHealthDetail';
const saveHealthUrl = restUrl.ADDR + 'health/saveHealth';

const formItemLayout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 12 },
};

class Query extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: {},
            loading: false
        };
    }

    componentDidMount = () => {
    }

    saveEditorState = (editorState) => {
        this.setState({
            editorState
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                values.id = this.props.params.id;
                values.health_cover = values.health_cover.map((item, index) => {
                    return item.response.data.id;
                }).join(',');
                values.health_content = JSON.stringify(convertToRaw(this.state.editorState.getCurrentContent()));
                console.log('handleSubmit  param === ', values);

                ajax.postJSON(saveHealthUrl, JSON.stringify(values), (data) => {
                    if(data.success){
                        notification.open({
                            message: '修改健康信息成功！',
                            icon: <Icon type="smile-circle" style={{ color: '#108ee9' }} />,
                        });
                    }
                });
            }
        });
    }

    render() {
        let { data, fileList, editorState, loading } = this.state;
        const { getFieldDecorator, setFieldsValue } = this.props.form;

        return (
            <div className="zui-content">
                <div className="ibox-title">
                    <h5>店员查询</h5>
                </div>
                <div className="ibox-content">
                    <Spin spinning={loading}>
                    </Spin>
                </div>
            </div>
        );
    }
}

const WrappedEditHealth = Form.create()(Query);
Query.contextTypes = {
    router:React.PropTypes.object
}

export default WrappedEditHealth;
