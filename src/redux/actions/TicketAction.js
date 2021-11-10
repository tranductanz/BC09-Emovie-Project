import axios from "axios";
import { DOMAIN, TOKENCYBERSOFT } from "../../util/config";
import { NGUOI_DUNG_DAT_VE } from "./types/actionTypes";




export const TicketAction = (maLichChieu) => {
    return async (dispatch) => {
        try {
            const result = await axios({
                url: `${DOMAIN}/api/QuanLyDatVe/LayDanhSachPhongVe`,
                method: 'GET',
                params: {
                    MaLichChieu: maLichChieu
                },
                headers: {
                    TokenCybersoft: TOKENCYBERSOFT
                }

            })
            console.log(result);
            if (result.status === 200) {
                dispatch({
                    type: NGUOI_DUNG_DAT_VE,
                    chiTietPhongVe: result.data.content
                })
            }

        }
        catch (err) {
            console.log(err.response?.data);
        }
    }
}