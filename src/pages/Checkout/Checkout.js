import React from 'react'
import { memo } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { TicketAction } from '../../redux/actions/TicketAction';
import styles from './Checkout.module.css'
import './Checkout.css'
import { CloseSquareOutlined } from '@ant-design/icons';
import { DAT_VE } from '../../redux/actions/types/actionTypes';
import _ from 'lodash';
function Checkout(props) {


    const { userLogin } = useSelector(state => state.UserManageReducer);

    const { chiTietPhongVe, danhSachGheDangDat } = useSelector(state => state.TicketReducer);


    const dispatch = useDispatch();
    useEffect(() => {
        const action = TicketAction(props.match.params.id);
        dispatch(action);
    }, [])
    console.log(chiTietPhongVe)


    const { thongTinPhim, danhSachGhe } = chiTietPhongVe;


    const renderSeats = () => {
        return danhSachGhe.map((ghe, index) => {
            let classGheVip = ghe.loaiGhe === 'Vip' ? 'gheVip' : '';
            let classGheDaDat = ghe.daDat === true ? 'gheDaDat' : '';

            let classGheDangDat = '';
            let indexGheDD = danhSachGheDangDat.findIndex(gheDD => gheDD.maGhe === ghe.maGhe)

            if (indexGheDD != -1) {
                classGheDaDat = 'gheDangDat';
            }


            return <button
                onClick={() => {
                    dispatch({
                        type: DAT_VE,
                        gheDuocChon: ghe,

                    })
                }}
                disabled={ghe.daDat}
                className={`ghe ${classGheVip} ${classGheDaDat} ${classGheDangDat}`}
                key={index}>
                {ghe.daDat ? <CloseSquareOutlined style={{ marginBottom: 7.5 }} /> : ghe.stt}
            </button>
        })
    }

    return (
        <div className=" min-h-screen mt-5">
            <div className="grid grid-cols-12">
                <div className="col-span-9">
                    <div className="flex flex-col items-center mt-5">

                        <div className="bg-black" style={{ width: '80%', height: 15 }}>

                        </div>


                        <div className={`${styles['trapezoid']} text-center`}>
                            <h3 className="mt-3 text-black">Màn hình</h3>
                        </div>
                        <div>
                            {renderSeats()}
                        </div>
                    </div>
                </div>
                <div className="col-span-3">
                    <h3 className="text-green-400 text-center text-4xl">
                        {danhSachGheDangDat.reduce((tongTien, ghe, index) => {
                            return tongTien += ghe.giaVe;
                        }, 0).toLocaleString()} đ
                    </h3>
                    <hr />
                    <h3 className="text-xl mt-2">{thongTinPhim.tenPhim}</h3>
                    <p>Địa điểm {thongTinPhim.tenCumRap} - {thongTinPhim.tenRap}</p>
                    <p>Ngày chiếu : {thongTinPhim.ngayChieu} - {thongTinPhim.gioChieu}</p>
                    <hr />
                    <div className="flex flex-row my-5">
                        <div className="w-4/5">
                            <span className="text-red-400 text-lg">Ghế</span>
                            {_.sortBy(danhSachGheDangDat, ['stt']).map((gheDD, index) => {
                                return <span key={index} className="text-green-500 text-xl">
                                    {gheDD.stt}
                                </span>
                            })}
                        </div>
                        <div className="text-right col-span-1">
                            <span className="text-green-800 text-lg">
                                {danhSachGheDangDat.reduce((tongTien, ghe, index) => {
                                    return tongTien += ghe.giaVe;
                                }, 0).toLocaleString()}
                            </span>
                        </div>
                    </div>
                    <hr />
                    <div className="my-5">
                        <i>Email</i> <br />
                        {userLogin.email}
                    </div>
                    <div className="my-5">
                        <i>Phone</i> <br />
                        {userLogin.soDT}
                    </div>
                    <hr />
                    <div style={{ marginBottom: 0 }} className="mb-0 h-full flex flex-col justify-end items-center">
                        <div className="bg-green-500 cursor-pointer text-white w-full text-center py-3 font-bold text-2xl">
                            ĐẶT VÉ
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default memo(Checkout)
