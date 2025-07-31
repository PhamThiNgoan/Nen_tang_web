// data.js
const data = [
    { ID: 111, KhachHang: "Phạm Thị Ngọc", SoTien: "250000", NgayMua: "23 Tháng 7 2025 10:00" },
    { ID: 112, KhachHang: "Nguyễn Văn Minh", SoTien: "230000", NgayMua: "2 Tháng 3 2025 8:40" },
    { ID: 113, KhachHang: "Trần Thị Lan", SoTien: "210000", NgayMua: "23 Tháng 4 2025 7:00" },
    { ID: 114, KhachHang: "Lê Văn Hải", SoTien: "120000", NgayMua: "23 Tháng 1 2025 14:00" },
    { ID: 115, KhachHang: "Hoàng Thị Thu", SoTien: "150000", NgayMua: "12 Tháng 2 2025 15:00" }
];

/**
 * Kiểm tra dữ liệu đầu vào từ form
 * @param {string} khachHang - tên khách hàng
 * @param {string} nhanVien - tên nhân viên nhập dữ liệu
 * @param {string} soTien - số tiền
 * @param {string} ngayMua - ngày mua
 * @returns {boolean} true nếu hợp lệ, false nếu không hợp lệ
 */
function validateForm(khachHang, nhanVien, soTien, ngayMua) {
    let errors = [];

    // Kiểm tra không bỏ trống
    if (!khachHang || khachHang.trim() === "") {
        errors.push("Khách hàng không được bỏ trống.");
    } else if (khachHang.length > 30) {
        errors.push("Tên Khách hàng không được quá 30 ký tự.");
    }

    if (!nhanVien || nhanVien.trim() === "") {
        errors.push("Nhân viên không được bỏ trống.");
    } else if (nhanVien.length > 30) {
        errors.push("Tên Nhân viên không được quá 30 ký tự.");
    }

    if (!soTien || soTien.trim() === "") {
        errors.push("Số tiền không được bỏ trống.");
    } else if (isNaN(Number(soTien))) {
        errors.push("Số tiền phải là dạng số.");
    }

    if (!ngayMua || ngayMua.trim() === "") {
        errors.push("Ngày mua không được bỏ trống.");
    }

    // Nếu có lỗi thì in ra
    if (errors.length > 0) {
        console.log("Có lỗi nhập dữ liệu:");
        errors.forEach(e => console.log("- " + e));
        return false;
    }

    console.log("Dữ liệu hợp lệ! Có thể thêm vào danh sách.");
    return true;
}

// --- Ví dụ nhập dữ liệu mới (giả lập nhập từ FORM)
const khachHangInput = "Nguyễn Văn An";
const nhanVienInput = "Nguyễn Thị Hoa";
const soTienInput = "200000";
const ngayMuaInput = "30 Tháng 7 2025 09:00";

// Gọi hàm kiểm tra
if (validateForm(khachHangInput, nhanVienInput, soTienInput, ngayMuaInput)) {
    // Nếu hợp lệ thì thêm vào data
    const newRecord = {
        ID: data[data.length - 1].ID + 1,
        KhachHang: khachHangInput,
        SoTien: soTienInput,
        NgayMua: ngayMuaInput
    };
    data.push(newRecord);
    console.log("Thêm thành công:", newRecord);
}