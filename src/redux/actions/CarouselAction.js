import axios from "axios";




export const getCarouselAction = async (dispatch) => {
    const TokenCybersoft = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAwOSIsIkhldEhhblN0cmluZyI6IjI0LzA1LzIwMjIiLCJIZXRIYW5UaW1lIjoiMTY1MzM1MDQwMDAwMCIsIm5iZiI6MTYxNjM0NjAwMCwiZXhwIjoxNjUzNDk4MDAwfQ.oeU8_AGwNUr93k3mqzWRv2iya3TnZarCQqdHKvpXVmM'
    try {
        const result = await axios({
            url: 'https://movienew.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachBanner',
            method: 'GET',
            headers: {
                TokenCybersoft: TokenCybersoft
            }
        })

        dispatch({
            type: 'SET_CAROUSEL',
            arrImg: result.data.content,
        })
    } catch (err) {
        console.log(err);
    }
}
