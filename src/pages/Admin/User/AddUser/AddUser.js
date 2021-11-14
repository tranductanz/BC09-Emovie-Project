import React, { useEffect, useState } from 'react';
import {
    Form,
    Input,
    Button,
    Radio,
    DatePicker,
    InputNumber,
    Switch,
    Select
} from 'antd';
import { useFormik } from 'formik';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { themPhimUploadHinhAction } from '../../../../redux/actions/FilmAction';
import { DOMAIN, GROUP_ID, TOKEN, TOKENCYBERSOFT } from '../../../../util/config';
import axios from 'axios';

const AddUser = () => {
    const [componentSize, setComponentSize] = useState('default');

    useEffect(async () => {
        try {
            const result = await axios({
                url: `${DOMAIN}/api/QuanLyNguoiDung/LayDanhSachLoaiNguoiDung`,
                method: 'GET',
                headers: {
                    TokenCybersoft: TOKENCYBERSOFT,
                }
            })
            setState({
                maLoaiNguoiDung: result.data.content
            });
        }
        catch (err) {
            console.log(err.response?.data);
        }

    }, [])

    const [state, setState] = useState({
        maLoaiNguoiDung: [],
    })

    console.log(state.maLoaiNguoiDung)
    const dispatch = useDispatch();

    const { Option } = Select;

    function handleChange(values) {
        formik.setFieldValue(values);
    }

    const formik = useFormik({
        initialValues: {
            taiKhoan: "",
            matKhau: "",
            email: "",
            soDt: 0,
            maNhom: GROUP_ID,
            maLoaiNguoiDung: '',
            hoTen: '',
        },
        onSubmit: async (values) => {
            console.log({ values })

            //Gọi API
            try {
                const result = await axios({
                    url: `${DOMAIN}/api/QuanLyNguoiDung/ThemNguoiDung`,
                    method: 'POST',
                    data: values,
                    headers: {
                        TokenCybersoft: TOKENCYBERSOFT,
                        Authorization: "Bearer " + localStorage.getItem(TOKEN),
                    }
                })
                console.log(result);
            }
            catch (err) {
                console.log(err.response?.data);
            }
        }
    })

    const onFormLayoutChange = ({ size }) => {
        setComponentSize(size);
    };




    // CLOSURE FUNCTION
    // const handleChangeSwitch = (name) => {
    //     return (value) => {
    //         formik.setFieldValue(name, value);
    //     }
    // }

    const convertChangeSelect = (values) => {
        return state.maLoaiNguoiDung.map((maLoai, index) => {
            return {
                label: maLoai.tenLoai,
                value: maLoai.maLoaiNguoiDung,
            }
        })
    }

    const handleChangeSelect = (values) => {
        console.log(values);
        formik.setFieldValue('maLoaiNguoiDung', values);
    }


    const handleChangeNumber = (values) => {
        formik.setFieldValue('soDt', values);
    }
    return (
        <>
            <Form
                onSubmitCapture={formik.handleSubmit}
                labelCol={{
                    span: 4,
                }}
                wrapperCol={{
                    span: 14,
                }}
                layout="horizontal"
                initialValues={{
                    size: componentSize,
                }}
                onValuesChange={onFormLayoutChange}
                size={componentSize}
            >
                <h3>Thêm Mới User</h3>
                <Form.Item label="Form Size" name="size">
                    <Radio.Group>
                        <Radio.Button value="small">Small</Radio.Button>
                        <Radio.Button value="default">Default</Radio.Button>
                        <Radio.Button value="large">Large</Radio.Button>
                    </Radio.Group>
                </Form.Item>

                {/* Tên TK */}
                <Form.Item label="Tên Tài Khoản">
                    <Input name="taiKhoan" onChange={formik.handleChange} />
                </Form.Item>

                {/* Mật Khẩu */}
                <Form.Item label="Mật Khẩu">
                    <Input name="matKhau" onChange={formik.handleChange} />
                </Form.Item>

                <Form.Item label="Họ và Tên">
                    <Input name="hoTen" onChange={formik.handleChange} />
                </Form.Item>

                {/* Email */}
                <Form.Item label="Email">
                    <Input name="email" onChange={formik.handleChange} />
                </Form.Item>

                <Form.Item label="Số Điện Thoại">
                    <InputNumber style={{ width: 150 }} min={0} name="soDt" onChange={handleChangeNumber} />
                </Form.Item>


                <Form.Item label="Loại Người Dùng">
                    <Select options={convertChangeSelect()} onChange={handleChangeSelect} placeholder="Chọn loại người dùng" />
                </Form.Item>



                {/* Đang chiếu */}
                {/* <Form.Item label="Đang chiếu" valuePropName="checked">
                    <Switch name="dangChieu" onChange={handleChangeSwitch('dangChieu')} />
                </Form.Item> */}

                <Form.Item label="Tác vụ">
                    <button type="submit" className="bg-blue-300 text-white p-2">Thêm User</button>
                </Form.Item>
            </Form>
        </>
    );
};

export default AddUser