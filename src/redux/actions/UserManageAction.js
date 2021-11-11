import axios from "axios";
import { DOMAIN, TOKEN, TOKENCYBERSOFT } from "../../util/config";
import { NGUOI_DUNG_DANG_KY, NGUOI_DUNG_DANG_NHAP, SET_THONG_TIN_NGUOI_DUNG } from "./types/actionTypes";
import { history } from "../../App";
import swal from 'sweetalert';


export const dangNhapAction = (thongTinDangNhap) => {


    return async (dispatch) => {
        try {
            const result = await axios({
                url: `${DOMAIN}/api/QuanLyNguoiDung/DangNhap`,
                method: 'POST',
                data: thongTinDangNhap,
                headers: {
                    TokenCybersoft: TOKENCYBERSOFT
                }
            })
            if (result.data.statusCode === 200) {
                dispatch({
                    type: NGUOI_DUNG_DANG_NHAP,
                    thongTinDangNhap: result.data.content
                })
            }
            console.log(result);
            history.goBack();
        } catch (err) {
            console.log(err.response.data);
        }
    }
}

export const dangKyAction = (thongTinDangKy) => {
    return async dispatch => {
        try {
            const result = await axios({
                url: `${DOMAIN}/api/QuanLyNguoiDung/DangKy`,
                method: 'POST',
                data: thongTinDangKy,
                headers: {
                    TokenCybersoft: TOKENCYBERSOFT
                }
            })
            if (result.data.statusCode === 200) {
                dispatch({
                    type: NGUOI_DUNG_DANG_KY,
                    thongTinDangKy: result.data.content,
                })
                swal("Chúc mừng!", "Bạn đã đăng ký thành công!", "success");
            }
            console.log(result);
            history.goBack();
        }
        catch (err) {
            console.log(err.response.data);
        }
    }
}


export const layThongTinNguoiDungAction = () => {


    return async (dispatch) => {
        try {
            const result = await axios({
                url: `${DOMAIN}/api/QuanLyNguoiDung/ThongTinTaiKhoan`,
                method: 'POST',
                headers: {
                    TokenCybersoft: TOKENCYBERSOFT,
                    Authorization: "Bearer " + localStorage.getItem(TOKEN),
                }
            })
            if (result.data.statusCode === 200) {
                dispatch({
                    type: SET_THONG_TIN_NGUOI_DUNG,
                    thongTinNguoiDung: result.data?.content
                })
            }
            console.log(result);
        } catch (err) {
            console.log(err.response.data);
        }
    }
}

