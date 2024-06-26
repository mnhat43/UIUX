import React, { useState } from 'react';
import {
    Modal, AutoComplete,
    Button,
    Cascader,
    Checkbox,
    Col,
    Form,
    Input,
    InputNumber,
    Row,
    Select,
    DatePicker,
    TimePicker,
    Space,
    Upload
} from 'antd';
import { MinusCircleOutlined, PlusOutlined, InboxOutlined } from '@ant-design/icons';
import { toast } from 'react-toastify';
const { TextArea } = Input;
const { Dragger } = Upload
import moment from 'moment';
const initialValue = moment('12:00:00 01-01-2024', 'HH:mm:ss DD-MM-YYYY');

const ModalAddCard = (props) => {

    const { form, formItemLayout, open, onOk, onCancel, listCard, setListCard } = props;
    const [isDraggerVisible, setIsDraggerVisible] = useState(true);

    const convertDate = (dateString) => {
        const date = new Date(dateString);
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const year = date.getFullYear();

        const hours = date.getHours().toString().padStart(2, '0');
        const minutes = date.getMinutes().toString().padStart(2, '0');
        const seconds = date.getSeconds().toString().padStart(2, '0');

        const dateConvert = {
            date: `${day}/${month}/${year}`,
            time: `${hours}:${minutes}`
        }
        return dateConvert;
    };

    const handleAutoFillName = (value) => {
        form.setFieldsValue({
            title: "Học Tiếng Anh",
            target: "Học 3000 từ trong 1 tháng",
            status: "Đang tiến hành",
            badge: "Tự học",
            dealine: initialValue,
            remind: "remind_2",
            description: "Học 100 từ 1 ngày"
            // 'item-description': "Học 100 từ 1 ngày"
        })
        setIsDraggerVisible(false)
    }

    const onFinish = (values) => {
        console.log(values);
        const dateNow = new Date();
        const data = {
            status: "Đang tiến hành",
            badge: "Tự học",
            title: "Học Tiếng anh",
            target: "Học 3000 từ trong 1 tháng",
            date: '30/06/2024',
            time: '23:59 PM',
            totalTask: "1",
            doneTask: "0",
            dateAdd: `${dateNow.getDate()} tháng ${dateNow.getMonth() + 1}`
        }
        listCard.push(data);
        toast.success("Thêm thẻ thành công!")
        onOk();
    }


    return (
        <Modal
            title="Thêm thẻ"
            open={open}
            onOk={onOk}
            onCancel={onCancel}
            footer={<></>}
            centered
        >
            <Form
                {...formItemLayout}
                form={form}
                name="addCard"
                onFinish={onFinish}
                style={{ maxWidth: 700, margin: '0 auto' }}
                scrollToFirstError
            >
                <Form.Item
                    name="title"
                    label="Tiêu đề thẻ"
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name="target"
                    label="Mục tiêu"
                // rules={[
                //     {
                //         required: true,
                //         message: 'Please input target',
                //     },
                // ]}
                >
                    <Input.TextArea showCount maxLength={100} />
                </Form.Item>
                {/* <Form.Item
                    name="status"
                    label="Trạng thái"
                // rules={[{ required: true, message: 'Please select service!' }]}
                >
                    <Select placeholder="Lựa chọn trạng thái"
                    >
                        <Option value="Đang tiến hành">Đang tiến hành</Option>
                        <Option value="Đã hoàn thành">Đã hoàn thành</Option>
                        <Option value="Quá hạn">Quá hạn</Option>
                    </Select>
                </Form.Item> */}
                <Form.Item
                    name="badge"
                    label="Loại thẻ"
                // rules={[{ required: true, message: 'Please select service!' }]}
                >
                    <Select placeholder="Lựa chọn loại thẻ"
                    >
                        <Option value="Tự học">Tự học</Option>
                        <Option value="Học tập">Học tập</Option>
                        <Option value="Gia đình">Gia đình</Option>
                        <Option value="Sức khỏe">Sức khỏe</Option>
                        <Option value="Công việc">Công việc</Option>
                    </Select>
                </Form.Item>

                <Form.Item
                    name="dealine"
                    label="Hạn chót"
                // rules={[
                //     {
                //         type: 'object',
                //         required: true,
                //         message: 'Please select time!',
                //     },
                // ]}
                >
                    <DatePicker showTime format="HH:mm:ss DD-MM-YYYY" placeholder='Chọn thời gian' />
                </Form.Item>

                <Form.Item
                    name="remind"
                    label="Nhắc nhở"
                // rules={[{ required: true, message: 'Please select remind!' }]}
                >
                    <Select placeholder="Lựa chọn loại thẻ"
                    >
                        <Option value="remind_1">Không</Option>
                        <Option value="remind_2">Mỗi ngày</Option>
                        <Option value="remind_3">3 ngày</Option>
                        <Option value="remind_4">7 ngày</Option>
                        <Option value="remind_5">1 tháng</Option>
                    </Select>
                </Form.Item>

                <Form.Item
                    name="description"
                    label="Mô tả"
                >
                    <Form.List name="list-description">
                        {(fields, { add, remove }) => (
                            <>
                                {fields.map(({ key, name, ...restField }) => (
                                    <Space key={key} style={{ display: 'flex' }} align="baseline">
                                        < Form.Item
                                            {...restField}
                                            name={[name, 'item-description']}
                                        >
                                            <TextArea
                                                maxLength={100}
                                                // placeholder="Nhập mô tả"
                                                style={{
                                                    width: 250,
                                                    height: 40,
                                                    resize: 'none',
                                                }}
                                            />
                                        </Form.Item>
                                        <MinusCircleOutlined onClick={() => remove(name)} />
                                    </Space>
                                ))}
                                <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                                    Thêm mô tả
                                </Button>
                            </>
                        )}
                    </Form.List>

                </Form.Item>

                <Form.Item
                    name="file"
                    label="Thêm file"
                >

                    <Dragger
                        onChange={handleAutoFillName}
                        beforeUpload={() => {
                            return false
                        }}
                    >
                        {
                            isDraggerVisible ?
                                <>
                                    <p className="ant-upload-drag-icon">
                                        <InboxOutlined />
                                    </p>
                                    <p className="ant-upload-text">
                                        Nhấn hoặc kéo thả file
                                    </p>
                                    <p className="ant-upload-hint">
                                        Chỉ hỗ trợ tải 1 file duy nhất
                                    </p>
                                </>
                                :
                                null
                        }
                    </Dragger>

                </Form.Item>

                <Form.Item
                    wrapperCol={{
                        offset: 14,
                        span: 16,
                    }}
                >
                    <Button type="primary" htmlType="submit"
                        style={{ marginRight: "10px", background: "#209EA6" }}
                    >
                        Thêm
                    </Button>
                    <Button onClick={() => onCancel()}>
                        Hủy
                    </Button>
                </Form.Item>

            </Form >
        </Modal >
    )
}

export default ModalAddCard;