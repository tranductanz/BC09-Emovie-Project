import axios from "axios";
import { DOMAIN, TOKENCYBERSOFT } from "../../util/config";
import { SET_CHI_TIET_FILM, SET_HE_THONG_RAP_CHIEU } from "./types/actionTypes";



export const layDanhSachHeThongRapAction = () => {
    return async dispatch => {
        try {
            const result = await axios({
                url: `${DOMAIN}/api/QuanLyRap/LayThongTinLichChieuHeThongRap`,
                method: 'GET',
                params: {
                    maNhom: "GP01",
                },
                headers: {
                    TokenCybersoft: TOKENCYBERSOFT
                }
            });
            console.log(result, 'result');
            if (result.status === 200) {
                dispatch({
                    type: SET_HE_THONG_RAP_CHIEU,
                    heThongRapChieu: result.data.content,
                })
            }
        }
        catch (err) {
            console.log(err);
        }
    }
}


export const layThongTinChiTietFilmAction = (id) => {
    return async dispatch => {
        try {
            const result = await axios({
                url: 'https://movienew.cybersoft.edu.vn/api/QuanLyPhim/LayThongTinPhim',
                method: 'GET',
                params: {
                    MaPhim: id,
                },
                headers: {
                    TokenCybersoft: TOKENCYBERSOFT
                }
            })
            dispatch({
                type: SET_CHI_TIET_FILM,
                filmDetail: result.data.content,
            })
        }
        catch (err) {
            console.log(err);
        }
    }
}