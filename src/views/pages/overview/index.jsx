import React, { useState, useEffect } from 'react';
import { Chart } from 'primereact/chart';
import './index.scss'
import CardPattern from '../manage/CardPattern'
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
} from 'antd';
import CardCPN from '../manage/CardPattern';


export default function Overview() {
    const [chartData, setChartData] = useState({});
    const [chartOptions, setChartOptions] = useState({});
    let listCardDefault = [
        { id: "1", status: "Đang tiến hành", badge: "Tự học", title: "Học Tiếng Nhật", target: "Từ vựng + Ngữ pháp + Đọc + Nghe", date: "20/05/2024", time: "08:30 AM", doneTask: "2", totalTask: "4", dateAdd: "28 tháng 4" },
        { id: "2", status: "Đang tiến hành", badge: "Học tập", title: "Báo cáo UIUX", target: "Từ vựng + Ngữ pháp + Đọc + Nghe", date: "21/05/2024", time: "23:59 PM", doneTask: "3", totalTask: "5", dateAdd: "28 tháng 4" },
        { id: "3", status: "Đang tiến hành", badge: "Sức khỏe", title: "Khám bệnh", target: "Từ vựng + Ngữ pháp + Đọc + Nghe", date: "22/05/2024", time: "08:30 AM", doneTask: "1", totalTask: "2", dateAdd: "28 tháng 4" },
    ]

    useEffect(() => {
        const data = {
            labels: ['Học Tiếng Nhật', 'Báo cáo UIUX', 'Chạy bộ', 'Project ITSS', 'Khóa học Python'],
            datasets: [
                {
                    label: 'KPI',
                    data: [68, 35, 78, 90, 56, 100],
                    backgroundColor: [
                        'rgba(255, 159, 64, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(131, 43, 43, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(153, 102, 255, 0.2)'
                    ],
                    borderColor: [
                        'rgb(255, 159, 64)',
                        'rgb(75, 192, 192)',
                        'rgb(131, 43, 43)',
                        'rgb(54, 162, 235)',
                        'rgb(153, 102, 255)'
                    ],
                    borderWidth: 1
                }
            ]
        };
        const options = {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        };

        setChartData(data);
        setChartOptions(options);
    }, []);

    return (
        <div className="container">
            <div className='content'>
                <div className='content-top'>
                    <div className='title'>
                        Tổng quan KPI
                    </div>
                    <div className='overview-chart'>
                        <Chart
                            width={"90%"}
                            type="bar"
                            data={chartData}
                            options={chartOptions} />
                    </div>
                </div>
                <div className='content-bottom'>
                    <div className='title'>
                        <div>Công việc sắp đến hạn</div>
                        <img src='https://s3-alpha-sig.figma.com/img/d448/585a/79b222a9e077fc68b0b66c1690d742a6?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EPB-2XIzvnNk5R6dY3TJRWwlJjsN8-4NRvztYWfCFbWNtoAhWscP7XaP8HJfHbRc719MPjue3geGWJ0FfzcnQFFjvjWK~kOdGoxjyXPG1wkmCF2dwQKKf-56fFR6XUE7FMK0UsJTpETolvnX5xOzufSBV8YxesDMJIT48dKyfz9sSO2r5YbYKMh2SQV1V3hMgHNob9S8rKSw0Yf1ldSNn4wb7vf-cfPwYONSeu2B1NXTo2oqXKXwROJQtCcekfLGttd6lOw6lrwbyOGTwVs1PgvOo50y0OT46XzKtyDWJFCYttI40gjph8K4YMplqo6Sv21BL0Ys8sJm67x0ln6XhA__' />
                    </div>
                    <div className='list-card'>
                        <div className='row'>
                            {
                                listCardDefault.map((item, index) => {
                                    if (item.status === 'Đang tiến hành') {
                                        return (
                                            <div className='col' key={index}>
                                                < CardCPN
                                                    dataCard={item}
                                                />
                                            </div>
                                        )
                                    } else {
                                        return null
                                    }
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

