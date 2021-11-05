import React, { useEffect } from 'react'
import HomeMenu from './HomeMenu'
import { Card } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import Film from '../../components/Film/Film';
import MultipleRows from '../../components/ReactSlick/MultipleRowSlick';
import { layDanhSachPhimAction } from '../../redux/actions/FilmAction';

const Home = (props) => {

    const { arrFilm } = useSelector(state => state.FilmReducer)
    console.log(arrFilm)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(layDanhSachPhimAction());
    }, [])

    return (
        <div>
            <section className="text-gray-600 body-font">
                <div className='container px-5 py-24 mx-auto'>
                    <MultipleRows arrFilm={arrFilm} />
                    {/* <div className="flex justify-center">
                        {renderFilms()}
                    </div> */}

                </div>
            </section>
            <div className="mx-36">
                <HomeMenu />

            </div>
        </div>
    )
}

export default Home
