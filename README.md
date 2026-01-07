# 💰 Ứng dụng Quản Lý Chi Tiêu Cá Nhân

Ứng dụng web hiện đại để theo dõi thu chi, phân loại và báo cáo chi tiêu hàng ngày/tuần/tháng.

> 📚 **[Xem Tài Liệu Đầy Đủ](./DOCUMENTATION.md)** - Bao gồm hướng dẫn chi tiết, cách chụp screenshot, và kiến trúc kỹ thuật

## ✨ Tính năng

- 📊 **Dashboard**: Xem tổng quan thu chi, số dư theo ngày/tuần/tháng
- 💸 **Quản lý giao dịch**: Thêm, sửa, xóa các giao dịch thu/chi
- 🏷️ **Danh mục**: Phân loại giao dịch theo các danh mục tùy chỉnh
- 🔍 **Tìm kiếm & Lọc**: Tìm kiếm và lọc giao dịch theo loại, danh mục
- 📥 **Xuất CSV**: Export dữ liệu ra file CSV để phân tích
- 💾 **Lưu trữ local**: Dữ liệu được lưu trong trình duyệt (localStorage)

## 🚀 Cài đặt

### Yêu cầu
- Node.js 18+
- npm hoặc yarn

### Các bước

1. **Cài đặt dependencies:**
```bash
npm install
```

2. **Chạy ứng dụng:**
```bash
npm run dev
```

3. **Mở trình duyệt:**
Truy cập `http://localhost:5173`

## 📦 Build cho production

```bash
npm run build
```

File build sẽ được tạo trong thư mục `dist/`

## 🛠️ Công nghệ sử dụng

- **React 19** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool nhanh
- **Tailwind CSS** - Styling
- **date-fns** - Xử lý ngày tháng
- **lucide-react** - Icons
- **localStorage** - Lưu trữ dữ liệu

## 📁 Cấu trúc project

```
expense-tracker/
├── src/
│   ├── components/      # React components
│   │   ├── Dashboard.tsx
│   │   ├── TransactionForm.tsx
│   │   └── TransactionList.tsx
│   ├── types/          # TypeScript types
│   ├── utils/          # Utility functions
│   │   ├── storage.ts
│   │   └── calculations.ts
│   ├── App.tsx         # Main component
│   └── main.tsx        # Entry point
├── public/             # Static files
└── package.json
```

## 🎯 Sử dụng

1. **Thêm giao dịch**: Click nút "Thêm giao dịch", điền thông tin và lưu
2. **Xem dashboard**: Xem tổng quan thu chi theo ngày/tuần/tháng
3. **Tìm kiếm**: Sử dụng thanh tìm kiếm và bộ lọc để tìm giao dịch
4. **Xuất CSV**: Click nút "Xuất CSV" để tải file dữ liệu
5. **Quản lý danh mục**: Click "Thêm danh mục" để tạo danh mục mới

## 📝 License

MIT

## 👨‍💻 Tác giả
Thoalt

## 👨‍💻 ScreenShot
<img width="1506" height="833" alt="image" src="https://github.com/user-attachments/assets/c50d28d0-b0f8-47bb-806a-4f01247ed62c" />
<img width="1454" height="893" alt="image" src="https://github.com/user-attachments/assets/659ee9cc-08fc-4372-8d3f-ff37e7928cdb" />


