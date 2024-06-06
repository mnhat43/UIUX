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
    Flex, Progress
} from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import './ModalDetailCard.scss'
import { toast } from 'react-toastify';

const { TextArea } = Input;
const twoColors = {
    '0%': '#108ee9',
    '100%': '#87d068',
};
const conicColors = {
    '0%': '#87d068',
    '50%': '#ffe58f',
    '100%': '#ffccc7',
};
const ModalDetailCard = (props) => {

    const { form, formItemLayout, open, onOk, onCancel } = props;

    const onFinish = (values) => {
        console.log(values);
        toast.success('Lưu thay đổi thành công!')
        onOk();
    }
    return (
        <Modal
            title="Học Tiếng Nhật"
            open={open}
            onOk={onOk}
            onCancel={onCancel}
            footer={<></>}
            centered
            width={800}
            style={{ position: "relative" }}
        >
            <div style={{ display: 'flex', flexDirection: "column", gap: "20px" }}>
                <div className='modalDetail-content'>
                    <div className='modalDetail-content__left'>
                        <Form
                            {...formItemLayout}
                            form={form}
                            name="addCard"
                            onFinish={onFinish}
                            style={{ maxWidth: 700, margin: '0 auto' }}
                            scrollToFirstError
                        >
                            <Form.Item
                                name="target"
                                label={<p style={{ fontSize: "15px", fontWeight: "bold" }}>Mục tiêu</p>}
                            >
                                <div>
                                    Học 300 từ vựng tiếng nhật <br />
                                    Học 30 cấu trúc ngữ pháp <br />
                                    Học 30 bài nghe <br />
                                    Học 30 bài đọc
                                </div>
                            </Form.Item>
                            <Form.Item
                                name="status"
                                label={<p style={{ fontSize: "15px", fontWeight: "bold" }}>Trạng thái</p>}
                            // rules={[{ required: true, message: 'Please select service!' }]}
                            >
                                <Select
                                    placeholder="Lựa chọn trạng thái"
                                    defaultValue={'status_1'}
                                >
                                    <Option value="status_1" >Đang tiến hành</Option>
                                    <Option value="status_2">Đã hoàn thành</Option>
                                    <Option value="status_3">Quá hạn</Option>
                                </Select>
                            </Form.Item>
                            <Form.Item

                                name="type"
                                label={<p style={{ fontSize: "15px", fontWeight: "bold" }}>Loại thẻ</p>}
                            // rules={[{ required: true, message: 'Please select service!' }]}
                            >
                                <Select
                                    placeholder="Lựa chọn loại thẻ"
                                    defaultValue={'type_1'}

                                >
                                    <Option value="type_1">Tự học</Option>
                                    <Option value="type_2">Học tập(Hust)</Option>
                                    <Option value="type_3">Gia đình</Option>
                                    <Option value="type_4">Chăm sóc sức khỏe</Option>
                                    <Option value="type_5">Công việc</Option>
                                </Select>
                            </Form.Item>

                            <Form.Item

                                name="dealine"
                                label={<p style={{ fontSize: "15px", fontWeight: "bold" }}>Hạn chót</p>}
                            >
                                <div>08:30 AM - 30/05/2024</div>
                            </Form.Item>

                            <Form.Item

                                name="remind"
                                label={<p style={{ fontSize: "15px", fontWeight: "bold" }}>Nhắc nhở</p>}
                            >
                                <Select
                                    placeholder="Lựa chọn loại thẻ"
                                    defaultValue={'remind_2'}
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
                                label={<p style={{ fontSize: "15px", fontWeight: "bold" }}>Mô tả</p>}
                            >
                                <Checkbox checked="true">Học 10 từ vựng / ngày</Checkbox>
                                <Checkbox>Học 1 ngữ pháp / ngày</Checkbox>
                                <Checkbox checked="true">Học 1 bài nghe / ngày</Checkbox>
                                <Checkbox>Học 1 bài đọc / ngày</Checkbox>

                            </Form.Item>


                        </Form >
                    </div>
                    <div className='modalDetail-content__right'>
                        <div className='modalDetail-progress'>
                            <div className='title'>
                                Tiến độ
                            </div>
                            <div className='list-task'>
                                <div className='task-item'>
                                    <p>Công việc 1: Học 300 từ vựng</p>
                                    <Flex vertical gap="middle">
                                        <Progress
                                            percent={60}
                                            status="active"
                                            strokeColor={{
                                                from: '#108ee9',
                                                to: '#87d068',
                                            }}
                                            style={{ height: "100px" }}
                                        />
                                    </Flex>
                                </div>
                                <div className='task-item'>
                                    <p>Công việc 2: Học 30 cấu trúc ngữ pháp</p>
                                    <Flex vertical gap="middle">
                                        <Progress
                                            percent={50}
                                            status="active"
                                            strokeColor={{
                                                from: '#108ee9',
                                                to: '#87d068',
                                            }}
                                            style={{ height: "100px" }}
                                        />
                                    </Flex>
                                </div>
                                <div className='task-item'>
                                    <p>Công việc 3: Học 30 bài nghe</p>
                                    <Flex vertical gap="middle">
                                        <Progress
                                            percent={70}
                                            status="active"
                                            strokeColor={{
                                                from: '#108ee9',
                                                to: '#87d068',
                                            }}
                                            style={{ height: "100px" }}
                                        />
                                    </Flex>
                                </div>
                                <div className='task-item'>
                                    <p>Công việc 4: Học 30 bài đọc</p>
                                    <Flex vertical gap="middle">
                                        <Progress
                                            percent={30}
                                            status="active"
                                            strokeColor={{
                                                from: '#108ee9',
                                                to: '#87d068',
                                            }}
                                            style={{ height: "100px" }}
                                        />
                                    </Flex>
                                </div>

                            </div>
                        </div>
                        <div className='modalDetail-cmt'>
                            <div className='title'>
                                Nhận xét
                            </div>
                            <div>
                                - Công việc 1 đang đúng tiến độ <br />
                                - Công việc 2 đang chậm tiến độ<br />
                                - Công việc 3 đang vượt tiến độ<br />
                                - Công việc 4 đang quá chậm tiến độ
                            </div>
                        </div>


                    </div>
                </div>
                <div style={{ display: 'flex', justifyContent: "flex-end", gap: "10px" }}>
                    <Button type="primary" htmlType="submit"
                        style={{ background: "#209EA6" }}
                    >
                        Lưu
                    </Button>
                    <Button onClick={() => onCancel()}
                    // style={{ position: "absolute", top: 50, right: -370 }}
                    >
                        Hủy
                    </Button>
                </div>
            </div>
        </Modal >
    )
}

export default ModalDetailCard;