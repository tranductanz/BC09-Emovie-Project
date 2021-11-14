import { baseService } from './baseService.js';


export class QuanLyPhimService extends baseService {

    layDanhSachBanner = () => {
        return this.get('/api/QuanLyPhim/LayDanhSachBanner');
    }
}


export const quanLyPhimService = new QuanLyPhimService();

