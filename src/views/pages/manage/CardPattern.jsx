
import { DeleteOutlined, ScheduleOutlined, FieldTimeOutlined, CheckSquareOutlined, ExclamationCircleFilled } from '@ant-design/icons'
import ModalDetailCard from './ModalDetailCard'
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
    Tag,
    Badge
} from 'antd';
import React, { useEffect, useState } from 'react';
import './CardPattern.scss'
import { toast } from 'react-toastify';

const formItemLayout = {
    labelCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 6,
        },
    },
    wrapperCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 14,
        },
    },
}
const { confirm } = Modal;

const dataCarDefault = {
    status: "",
    badge: "",
    title: "",
    target: "",
    date: "",
    time: "",
    totalTask: "",
    doneTask: "",
    dateAdd: ""
}

const fakeData = {
    status: "Đang tiến hành",
    badge: "Tự học",
    title: "Học tiếng nhật",
    target: "Từ vựng + Ngữ pháp + Đọc + Nghe",
    date: "30/05/2024",
    time: "08:30 AM",
    doneTask: "2",
    totalTask: "4",
    dateAdd: "28 tháng 4"
}

const CardCPN = (props) => {

    const [isModalDetailOpen, setIsModalDetailOpen] = useState(false);
    // const [dataCard, setDataCard] = useState(fakeData);
    const [form] = Form.useForm();

    const { dataCard, removeCard } = props;

    const showModalDetail = () => {
        setIsModalDetailOpen(true);
    };

    const handleModalDetailOk = () => {
        setIsModalDetailOpen(false);
        form.resetFields();

    };

    const handleModalDetailCancel = () => {
        setIsModalDetailOpen(false);
        form.resetFields();

    };

    const handleDetailCard = () => {
        showModalDetail();
    }

    const handleDeleteCard = () => {
        confirm({
            title: 'Bạn muốn xóa thẻ này?',
            icon: <ExclamationCircleFilled />,
            content: 'Hãy bấm xóa để xác nhận xóa và bấm hủy để hủy bỏ xóa',
            okText: 'Xóa',
            okType: 'danger',
            cancelText: 'Hủy',
            onOk() {
                removeCard(dataCard.id)
                toast.success("Xóa thẻ thành công!")
            },
            onCancel() {
                console.log('Cancel');
            },
        });
    };

    const [colorBadge, setColorBadge] = useState('#1376BE')

    useEffect(() => {
        switch (dataCard.badge) {
            case 'Tự học':
                setColorBadge('#8576FF');
                break;
            case 'Học tập':
                setColorBadge('#5AB2FF');
                break;
            case 'Gia đình':
                setColorBadge('#D8AA08');
                break;
            case 'Sức khỏe':
                setColorBadge('#1C1678');
                break;
            case 'Công việc':
                setColorBadge('#1376BE');
                break;
            default:
                setColorBadge('#1376BE');
        }
    }, [dataCard])

    return (
        <>
            <div className="cardcpn">
                {/* <Badge.Ribbon text="Hippies" style={{ marginRight: '10px' }}> */}
                <Badge.Ribbon text={dataCard.badge} color={colorBadge} placement="start">
                    <div className="cardcpn-content">
                        <div className="header">
                            <div className="delete-btn" onClick={() => handleDeleteCard()}>
                                <DeleteOutlined />
                            </div>
                        </div>

                        <div className="title-card">
                            {dataCard.title}
                        </div>
                        <div className='target'>
                            {dataCard.target}
                        </div>
                        <div className='more-infor'>
                            <div className='infor-date'>
                                <ScheduleOutlined /> {dataCard.date}
                            </div>
                            <div className='infor-time'>
                                <FieldTimeOutlined /> {dataCard.time}
                            </div>
                            <div className='infor-task'>
                                <CheckSquareOutlined /> {dataCard.doneTask}/{dataCard.totalTask}
                            </div>
                        </div>
                        <div className='footer-card'>
                            <div className='time-create'>
                                <Tag icon={<FieldTimeOutlined />} color="#3FC616">
                                    {dataCard.dateAdd}
                                </Tag>
                            </div>

                            <div className='detail' onClick={(e) => handleDetailCard(e)}>
                                Chi tiết
                            </div>
                        </div>
                    </div>
                </Badge.Ribbon>
            </div >
            <ModalDetailCard
                open={isModalDetailOpen}
                onOk={handleModalDetailOk}
                onCancel={handleModalDetailCancel}
                form={form}
                formItemLayout={formItemLayout}
            />
        </>
    )
}

export default CardCPN;