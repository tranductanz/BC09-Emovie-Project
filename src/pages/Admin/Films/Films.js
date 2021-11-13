import React, { Fragment, useEffect } from 'react'
import { Table } from 'antd';
import { Input, Space } from 'antd';
import { AudioOutlined, DeleteOutlined, EditOutlined, SearchOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { layDanhSachPhimAction } from '../../../redux/actions/FilmAction';
import { NavLink } from 'react-router-dom';
function Films() {

    const { arrFilmDefault } = useSelector(state => state.FilmReducer);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(layDanhSachPhimAction());
    }, [])

    console.log({ arrFilmDefault });
    const columns = [
        {
            title: 'Mã phim',
            dataIndex: 'maPhim',
            width: 10,

            // specify the condition of filtering result
            // here is that finding the name started with `value`
            sorter: (a, b) => a.maPhim - b.maPhim,
            sortDirections: ['descend', 'ascend'],
            // sortOrder: 'descend',
        },
        {
            title: 'Hình Ảnh',
            dataIndex: 'hinhAnh',
            width: 50,
            render: (text, film, index) => {
                return <Fragment>
                    <img
                        onError={(e) => { e.target.onError = null; e.target.src = `https://picsum.photos/id/${index}/50/50` }}
                        width={50}
                        height={50}
                        src={film.hinhAnh}
                        alt={film.tenPhim} />
                </Fragment>
            }
        },
        {
            title: 'Tên Phim',
            dataIndex: 'tenPhim',
            width: 50,
            sorter: (a, b) => {
                let tenPhimA = a.tenPhim.toLowerCase().trim();
                let tenPhimB = b.tenPhim.toLowerCase().trim();
                if (tenPhimA > tenPhimB) {
                    return 1;
                }
                return -1;
            },
            sortDirections: ['descend', 'ascend'],
        },
        {
            title: 'Tên Phim',
            dataIndex: 'moTa',
            width: 100,
            sortDirections: ['descend', 'ascend'],
            render: (text, film) => {
                return <Fragment>
                    {film.moTa.length > 100 ? film.moTa.substr(0, 50) + '...' : film.moTa}
                </Fragment>
            }
        },
        {
            title: 'Hành động',
            dataIndex: 'hanhDong',
            width: 100,
            render: (text, film) => {
                return <Fragment>
                    <NavLink style={{ color: 'blue' }} to="/" className="text-black text-2xl mr-2"><EditOutlined /></NavLink>
                    <NavLink style={{ color: 'red' }} to="/" className="text-white text-2xl"><DeleteOutlined /></NavLink>
                </Fragment>
            }
        },
    ];
    const data = arrFilmDefault
    function onChange(pagination, filters, sorter, extra) {
        console.log('params', pagination, filters, sorter, extra);
    }
    const { Search } = Input;


    const onSearch = value => console.log(value);
    return (
        <div>

            <h3 className="text-4xl">Quản lý Phim</h3>
            <Button className="mb-5">Thêm Phim</Button>
            <Search
                className="mb-5"
                placeholder="Tìm kiếm phim"
                enterButton={<SearchOutlined />}
                size="large"
                onSearch={onSearch}
            />
            <Table columns={columns} dataSource={data} onChange={onChange} />
        </div>
    )
}

export default Films