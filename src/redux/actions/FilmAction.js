import axios from "axios";
import { DOMAIN, TOKENCYBERSOFT } from "../../util/config";
import { SET_DANH_SACH_PHIM } from "./types/actionTypes";




export const layDanhSachPhimAction = () => {
    return async (dispatch) => {

        try {
            const result = await axios({
                url: `${DOMAIN}/api/QuanLyPhim/LayDanhSachPhim`,
                method: 'GET',
                params: {
                    maNhom: "GP01",
                },
                headers: {
                    TokenCybersoft: TOKENCYBERSOFT
                }
            });
            console.log(result);
            dispatch({
                type: SET_DANH_SACH_PHIM,
                arrFilm: result.data.content,
            })
        } catch (err) {
            console.log(err);
        }
    }
}

export const themPhimUploadHinhAction = (formData) => {
    return async dispatch => {
        try {
            const result = await axios({
                url: `${DOMAIN}/api/QuanLyPhim/ThemPhimUploadHinh`,
                method: "POST",
                data: formData,
                headers: {
                    TokenCybersoft: TOKENCYBERSOFT
                }
            })
            alert('Thêm phim thành công');
            console.log(result);
        }
        catch (err) {
            console.log(err.response?.data);
        }
    }
}