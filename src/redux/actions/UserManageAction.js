import axios from "axios";
import { DOMAIN, TOKENCYBERSOFT } from "../../util/config";
import { NGUOI_DUNG_DANG_NHAP } from "./types/actionTypes";
import { history } from "../../App";



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