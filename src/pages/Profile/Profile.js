import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { layFullInfoNguoiDungAction } from '../../redux/actions/UserManageAction';

export default function Profile() {

    const { userLogin } = useSelector(state => state.UserManageReducer);
    console.log({ userLogin })
    const dispatch = useDispatch();

    useEffect(async () => {
        const info = userLogin.taiKhoan;
        await dispatch(layFullInfoNguoiDungAction(info));
    }, [])

    const { fullInfoNguoiDung } = useSelector(state => state.UserManageReducer);
    console.log({ fullInfoNguoiDung })

    return (
        <section className="text-gray-600 body-font">
            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                <div className="mt-16 lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                    <img style={{ borderRadius: '50%' }} className="object-cover object-center" alt="hero" src="https://picsum.photos/300/300" />
                </div>
                <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                        Thông tin tài khoản
                    </h1>
                    <p className=" text-xl mb-8 leading-relaxed">Tài khoản : <span className="text-blue-500 text-4xl">{userLogin?.taiKhoan}</span></p>
                    <p className="text-xl mb-8 leading-relaxed">Email : <span className="text-blue-500 text-4xl">{userLogin?.email}</span></p>
                    <p className="text-xl mb-8 leading-relaxed">Họ tên : <span className="text-blue-500 text-4xl">{userLogin?.hoTen}</span></p>
                    <p className="text-xl mb-8 leading-relaxed">Số điện thoại : <span className="text-blue-500 text-4xl">{userLogin?.soDT}</span></p>
                    <div className="flex justify-center">
                        <NavLink to={`/profile/edit/${fullInfoNguoiDung.taiKhoan}`} className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                            Chỉnh sửa thông tin
                        </NavLink>
                    </div>
                </div>
            </div>
        </section>

    )
}
