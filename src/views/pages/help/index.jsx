import './index.scss'
import React from 'react';
import { Collapse } from 'antd';
const text1 = `
Ứng dụng eTracking cung cấp một nền tảng hiệu quả để quản lý và theo
 dõi các chỉ số hiệu suất chính (KPI) của người dùng. Ứng dụng giúp người dùng thiết lập, 
 theo dõi và đánh giá các mục tiêu KPI một cách dễ dàng và tự động, từ đó tăng cường hiệu suất làm việc,
 quản lý thời gian hiệu quả và đạt được mục tiêu kinh doanh một cách có hệ thống và khoa học.
`;
const items = [
    {
        key: '1',
        label: 'Mục đích của eTracking',
        children: <p>{text1}</p>,
    },
    {
        key: '2',
        label: 'Hướng dẫn sử dụng',
        children:
            <div className='user-manual'>
                <div className='page'>
                    <div className='title-page'>
                        Trang 1: Tổng quan
                    </div>
                    <div className='content-page'>
                        Trang tổng quan được thiết kế để cung cấp cho người dùng cái nhìn toàn diện về công
                        việc của mình, chia thành hai phần chính.
                        <br />
                        <br />
                        Phần đầu tiên là biểu đồ trực quan mô tả tiến độ của các công việc, giúp
                        người dùng dễ dàng theo dõi mức độ hoàn thành của từng nhiệm vụ.
                        <br />
                        <br />
                        Phần thứ hai là danh sách các công việc sắp đến hạn. Danh sách này nhắc nhở người dùng về các
                        nhiệm vụ quan trọng và cung cấp thông tin như ngày đến hạn và trạng thái hiện tại, giúp họ
                        quản lý thời gian và lập kế hoạch hiệu quả hơn.
                        <br />
                        <br />
                        Như vậy, trang tổng quan không chỉ giúp theo dõi công việc mà còn là
                        công cụ hỗ trợ quản lý và tổ chức công việc một cách hiệu quả.
                    </div>
                </div>

                <div className='page'>
                    <div className='title-page'>
                        Trang 2: Quản lý công việc
                    </div>
                    <div className='content-page'>
                        Trang quản lý công việc được thiết kế để giúp người dùng tạo và quản lý các thẻ công việc một cách hiệu quả và chi tiết.
                        Mỗi thẻ công việc đại diện cho một nhiệm vụ cụ thể mà người dùng cần thực hiện và theo dõi.
                        Thẻ công việc này cung cấp một giao diện trực quan, dễ sử dụng,
                        giúp người dùng nhanh chóng nắm bắt được trạng thái và tiến độ của từng nhiệm vụ.
                    </div>
                </div>

                <div className='page'>
                    <div className='title-page'>
                        Trang 3: Lịch
                    </div>
                    <div className='content-page'>
                        Trang Lịch được thiết kế để cung cấp cho người dùng cái nhìn toàn diện về các công việc trong suốt cả tháng, chi tiết theo từng ngày.
                        <br />
                        Mỗi ngày trong tháng, nếu có công việc nào cần thực hiện, sẽ được hiển thị rõ ràng trên lịch.
                        <br />
                        Điều này giúp người dùng dễ dàng theo dõi và quản lý lịch trình công việc hàng ngày, đảm bảo không bỏ sót bất kỳ nhiệm vụ quan trọng nào.
                        <br />
                        Với trang Lịch, người dùng có thể lên kế hoạch và điều chỉnh công việc một cách hiệu quả, đồng thời nhận được các nhắc nhở kịp thời cho các nhiệm vụ sắp đến hạn.
                    </div>
                </div>
            </div>,
    },
    // {
    //     key: '3',
    //     label: 'This is panel header 3',
    //     children: <p>{text}</p>,
    // },
];


const HelpPage = () => {

    return (
        <div className="help-container">
            <div className="help-content">
                <div className="help-title">
                    Trợ giúp
                </div>
                <div className="primaryContent">
                    <Collapse accordion items={items} />
                </div>
            </div>
        </div >
    )
}

export default HelpPage;