import { TOKEN, USER_LOGIN } from "../../util/config";
import { NGUOI_DUNG_DANG_NHAP } from "../actions/types/actionTypes";

let user = {};
if (localStorage.getItem(USER_LOGIN)) {
    user = JSON.parse(localStorage.getItem(USER_LOGIN));
}

const initialState = {
    userLogin: user,
}



export const UserManageReducer = (state = initialState, action) => {
    switch (action.type) {
        case NGUOI_DUNG_DANG_NHAP: {
            const { thongTinDangNhap } = action;
            localStorage.setItem(USER_LOGIN, JSON.stringify(thongTinDangNhap));
            localStorage.setItem(TOKEN, thongTinDangNhap.accessToken);
            state.userLogin = thongTinDangNhap;
            console.log(state.userLogin);
            return { ...state }

        }
        default:
            return { ...state };
    }
}