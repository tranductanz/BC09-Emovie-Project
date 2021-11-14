import React, { useEffect } from 'react'
import HomeMenu from './HomeMenu'
import { Card } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import Film from '../../components/Film/Film.js';
import MultipleRows from '../../components/ReactSlick/MultipleRowSlick.js';
import { layDanhSachPhimAction } from '../../redux/actions/FilmAction.js';
import { layDanhSachHeThongRapAction } from '../../redux/actions/CinemraAction.js';
import HomeCarousel from '../../templates/HomeTemplate/Layout/HomeCarousel/HomeCarousel';

const Home = (props) => {

    const { arrFilm } = useSelector(state => state.FilmReducer)
    const { heThongRapChieu } = useSelector(state => state.CinemaReducer);
    console.log(arrFilm)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(layDanhSachPhimAction());

        // Lấy thông tin Các rạp chiếu
        dispatch(layDanhSachHeThongRapAction());
    }, [])

    return (
        <div>
            <HomeCarousel />
            <section className="text-gray-600 body-font">
                <div className='container px-5 py-24 mx-auto'>
                    <MultipleRows arrFilm={arrFilm} />
                    {/* <div className="flex justify-center">
                        {renderFilms()}
                    </div> */}

                </div>
            </section>
            <div className="mx-36">
                <HomeMenu heThongRapChieu={heThongRapChieu} />

            </div>
        </div>
    )
}

export default Home
