import * as React from 'react';
import { createForm } from 'utils/createForm';
import { sendAjax } from 'utils/sendAjax';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
const FormItem = Form.Item;
const css = require('./index.scss');

export interface Props {
    form?: any; 
}

@createForm()
export default class Hello extends React.Component<Props, object> {

    constructor(props: Props) {
        super(props);
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div className="login">
                <Form onSubmit={this.handleSubmit} className={css.loginForm}>
                    <FormItem>
                        {getFieldDecorator('userName', {
                            rules: [{ required: true, message: 'Please input your username!' }],
                        })(
                            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                        )}
                    </FormItem>
                    <FormItem>
                        {getFieldDecorator('password', {
                            rules: [{ required: true, message: 'Please input your Password!' }],
                        })(
                            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                        )}
                    </FormItem>
                    <FormItem>
                        {getFieldDecorator('remember', {
                            valuePropName: 'checked',
                            initialValue: true,
                        })(
                            <Checkbox>Remember me</Checkbox>
                        )}
                        <a className={css.loginFormForgot} href="">Forgot password</a>
                        <Button type="primary" htmlType="submit" className={css.loginFormButton}>
                            Log in
                        </Button>
                        Or <a href="">register now!</a>
                    </FormItem>
                </Form>
            </div>
        );
    }
    /**
     * 提交验证
     */
    private handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                this.postData(values);
                console.log('Received values of form: ', values);
            }
        });
    }
    /**
     * 发送数据
     */
    private postData = async (params) => {
        const reData = await sendAjax('post', '/open/query-my', params);
        console.log(reData);
    }
}