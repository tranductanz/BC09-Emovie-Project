import React, { Fragment, useEffect } from 'react'
import { Table } from 'antd';
import { Input, Space } from 'antd';
import { AudioOutlined, DeleteOutlined, EditOutlined, SearchOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { layDanhSachPhimAction } from '../../../redux/actions/FilmAction';
import { NavLink } from 'react-router-dom';
import { history } from '../../../App';
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
            // sortOrder: ['descend', 'ascend'],
        },
        {
            title: 'Hình Ảnh',
            dataIndex: 'hinhAnh',
            width: 50,
            render: (text, film, index) => {
                return <Fragment>
                    <img key={index}
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
            render: (text, film, index) => {
                return <Fragment key={index}>
                    {film.moTa.length > 100 ? film.moTa.substr(0, 50) + '...' : film.moTa}
                </Fragment>
            }
        },
        {
            title: 'Hành động',
            dataIndex: 'hanhDong',
            width: 100,
            render: (text, film, index) => {
                return <Fragment key={index}>
                    <NavLink key={1} style={{ color: 'blue' }} to={`/admin/films/edit/${film.maPhim}`} className="text-black text-2xl mr-2"><EditOutlined /></NavLink>
                    <span onClick={() => {
                        if (window.confirm('Bạn có muốn chắc xoá phim' + film.tenPhim)) {
                            //action
                        }
                    }} key={2} style={{ color: 'red', cursor: 'pointer' }} className="text-white text-2xl"><DeleteOutlined /></span>
                </Fragment>
            }
        },
    ];
    const data = arrFilmDefault
    function onChange(pagination, filters, sorter, extra) {
        // console.log('params', pagination, filters, sorter, extra);
    }
    const { Search } = Input;


    const onSearch = value => console.log(value);
    return (
        <div>

            <h3 className="text-4xl">Quản lý Phim</h3>
            <Button onClick={() => {
                history.push('/admin/films/addnew');
            }} className="mb-5">Thêm Phim</Button>
            <Search
                className="mb-5"
                placeholder="Tìm kiếm phim"
                enterButton={<SearchOutlined />}
                size="large"
                onSearch={onSearch}
            />
            <Table rowKey={"maPhim"} columns={columns} dataSource={data} onChange={onChange} />
        </div>
    )
}

export default Films