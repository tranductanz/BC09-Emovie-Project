import React, { useEffect } from 'react'
import { Button, CustomCard } from '@tsamantanis/react-glassmorphism'
import '@tsamantanis/react-glassmorphism/dist/index.css'
import '../../assets/styles/circle.css';
import { Tabs, Radio, Space } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { layThongTinChiTietFilmAction } from '../../redux/actions/CinemraAction';
import moment from 'moment';

const { TabPane } = Tabs;


function Detail(props) {


    const filmDetail = useSelector(state => state.FilmReducer.filmDetail);
    console.log({ filmDetail });
    const dispatch = useDispatch();

    useEffect(() => {
        // GET ID URL DETAIL PAGE
        let { id } = props.match.params;

        dispatch(layThongTinChiTietFilmAction(id));

    }, [])

    return (
        <div style={{
            backgroundImage: `url(${filmDetail.hinhAnh})`,
            minHeight: '100vh',
            backgroundSize: '100%',
            backgroundPosition: 'center',
        }}>
            <CustomCard
                style={{ paddingTop: 150, minHeight: '100vh' }}
                effectColor="#C780FF" // required
                color="#14AEFF" // default color is white
                blur={20} // default blur value is 10px
                borderRadius={0} // default border radius value is 10px
            >
                <div className="grid grid-cols-12">
                    <div className="col-span-5 col-start-3">
                        <div className="grid grid-cols-3">
                            <img
                                className="col-span-1"
                                style={{ width: '100%', height: 300 }}
                                src={filmDetail.hinhAnh} alt="123" />
                            <div
                                style={{ marginTop: '25%' }}
                                className="col-span-2 ml-5">
                                <p className="text-sm text-red-500 font-bold">Ngày Chiếu : {moment(filmDetail.ngayKhoiChieu).format('DD - MM - YYYY')}</p>
                                <p className="text-2xl leading-3 text-red-500 font-bold">{filmDetail.tenPhim}</p>
                                <p className="text-sm text-red-500 font-bold ">{filmDetail.moTa}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-4 mt-8 ml-16">
                        <div className={`c100 p${filmDetail.danhGia * 10} big orange`}>
                            <span>{filmDetail.danhGia * 10}%</span>
                            <div className="slice">
                                <div className="bar" />
                                <div className="fill" />
                            </div>
                        </div>

                    </div>
                </div>
                <div className="mt-20 container">
                    <Tabs tabPosition={'left'}>
                        <TabPane tab="Tab 1" key="1">
                            Content of Tab 1
                        </TabPane>
                        <TabPane tab="Tab 2" key="2">
                            Content of Tab 2
                        </TabPane>
                        <TabPane tab="Tab 3" key="3">
                            Content of Tab 3
                        </TabPane>
                    </Tabs>
                </div>
            </CustomCard>

        </div>
    )
}

export default Detail
