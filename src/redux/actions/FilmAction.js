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