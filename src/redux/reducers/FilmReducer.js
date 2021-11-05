import { Provider } from "react-redux";
import { SET_DANH_SACH_PHIM } from "../actions/types/actionTypes";

const initialState = {
    arrFilm: [
        {
            "maPhim": 7822,
            "tenPhim": "Wonder Woman 2",
            "biDanh": "wonder-woman-2",
            "trailer": "Wonder Woman 2",
            "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/wonder-woman-2_gp01.jpg",
            "moTa": "GGretel & Hansel là một bộ phim kinh dị giả tưởng đen tối năm 2020 dựa trên câu chuyện dân gian Đức \"Hansel và Gretel\" của Anh em nhà Grimm. Phim do Oz Perkins đạo diễn, Fred Berger, Brian Kavanaugh-Jones và Dan Kagan sản xuất, với kịch bản của Rob Hayes.",
            "maNhom": "GP01",
            "ngayKhoiChieu": "2021-10-31T16:36:56.65",
            "danhGia": 10,
            "hot": false,
            "dangChieu": false,
            "sapChieu": true
        },

    ]
}


export const FilmReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_DANH_SACH_PHIM: {
            state.arrFilm = action.arrFilm;
            return { ...state };
        }
        default:
            return { ...state };
    }
}