import React, { useState } from 'react';
import { Alert, Badge, Calendar, ConfigProvider } from 'antd';
import viVN from 'antd/es/locale/vi_VN';
import dayjs from 'dayjs';
import localeData from 'dayjs/plugin/localeData';
import 'dayjs/locale/vi';
import './index.scss'; // Import tệp CSS tùy chỉnh

dayjs.extend(localeData);
dayjs.locale('vi');

const getListData = (value) => {



    let listData;
    switch (value.date()) {
        case 1:
            listData = [
                {
                    type: 'error',
                    content: 'Học tiếng nhật',
                },
                {
                    type: 'error',
                    content: 'Báo cáo UIUX',
                },
                {
                    type: 'error',
                    content: 'Khóa học React',
                },
            ];
            break;
        case 3:
        case 4:
        case 5:
        case 6:
        case 8:
            listData = [
                {
                    type: 'error',
                    content: 'Học tiếng nhật',
                },
                {
                    type: 'warning',
                    content: 'Chạy bộ',
                },
                {
                    type: 'success',
                    content: 'Báo cáo GR1',
                },
            ];
            break;
        case 10:
            listData = [
                {
                    type: 'warning',
                    content: 'Sắp đến hạn',
                },
                {
                    type: 'success',
                    content: 'Còn lâu mới đến hạn',
                },
                {
                    type: 'error',
                    content: 'Cần làm gấp',
                },
            ];
            break;
        case 12:
        case 13:
        case 14:
        case 18:
        case 20:
        case 23:
        case 24:
        case 25:
        case 26:
        case 30:
            listData = [
                {
                    type: 'error',
                    content: 'Học tiếng nhật',
                },
                {
                    type: 'warning',
                    content: 'Chạy bộ',
                },
                {
                    type: 'success',
                    content: 'Báo cáo GR1',
                },
            ];
            break;
        default:
    }
    return listData || [];
};

const getMonthData = (value) => {
    if (value.month() === 8) {
        return 1394;
    }
};

const Schedule = () => {
    const [value, setValue] = useState(() => dayjs('2024-05-17'));
    const [selectedValue, setSelectedValue] = useState(() => dayjs('2024-05-17'));
    const onSelect = (newValue) => {
        setValue(newValue);
        setSelectedValue(newValue);
    };
    const onPanelChange = (newValue) => {
        setValue(newValue);
    };

    const monthCellRender = (value) => {
        const num = getMonthData(value);
        return num ? (
            <div className="notes-month">
                <section>{num}</section>
                <span>Số lượng công việc tồn đọng</span>
            </div>
        ) : null;
    };

    const dateCellRender = (value) => {
        const listData = getListData(value);
        return (
            <ul className="events">
                {listData.map((item) => (
                    <li key={item.content}>
                        <Badge status={item.type} text={item.content} />
                    </li>
                ))}
            </ul>
        );
    };

    const cellRender = (current, info) => {
        if (info.type === 'date') return dateCellRender(current);
        if (info.type === 'month') return monthCellRender(current);
        return info.originNode;
    };

    return (
        <div className='schedule-container'>
            <div className='schedule-title'>
                Lịch
            </div>
            <div className='schedule-content'>
                <div className='schedule-calender'>
                    <Alert message={`Bạn đang lựa chọn: ${selectedValue?.format('DD-MM-YYYY')}`} />

                    <ConfigProvider locale={viVN}>
                        <div className="custom-calendar">
                            <Calendar value={value} onSelect={onSelect} onPanelChange={onPanelChange} cellRender={cellRender} />
                        </div>
                    </ConfigProvider>
                </div>
            </div>
        </div>
    );
};

export default Schedule;
