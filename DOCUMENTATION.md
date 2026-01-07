# 📚 Tài Liệu Đầy Đủ - Ứng Dụng Quản Lý Chi Tiêu Cá Nhân

## 📋 Mục Lục

1. [Tổng Quan Sản Phẩm](#tổng-quan-sản-phẩm)
2. [Tính Năng Chi Tiết](#tính-năng-chi-tiết)
3. [Hướng Dẫn Sử Dụng](#hướng-dẫn-sử-dụng)
4. [Hướng Dẫn Chụp Screenshot](#hướng-dẫn-chụp-screenshot)
5. [Kiến Trúc Kỹ Thuật](#kiến-trúc-kỹ-thuật)
6. [API & Data Structure](#api--data-structure)

---

## 🎯 Tổng Quan Sản Phẩm

**Ứng dụng Quản Lý Chi Tiêu Cá Nhân** là một ứng dụng web hiện đại được xây dựng bằng React và TypeScript, giúp người dùng theo dõi, quản lý và phân tích thu chi hàng ngày một cách hiệu quả.

### Đặc Điểm Nổi Bật

- 🎨 **Giao diện đẹp mắt**: Thiết kế hiện đại với gradient màu tím, responsive trên mọi thiết bị
- ⚡ **Hiệu suất cao**: Sử dụng Vite để build nhanh, tối ưu hóa performance
- 💾 **Lưu trữ local**: Dữ liệu được lưu trực tiếp trên trình duyệt, không cần server
- 📊 **Thống kê trực quan**: Dashboard với các chỉ số thu chi rõ ràng
- 🔍 **Tìm kiếm thông minh**: Tìm kiếm và lọc giao dịch theo nhiều tiêu chí
- 📥 **Xuất dữ liệu**: Export CSV để phân tích ngoài ứng dụng

---

## ✨ Tính Năng Chi Tiết

### 1. 📊 Dashboard - Bảng Điều Khiển

**Mô tả**: Hiển thị tổng quan tài chính với 4 chỉ số chính:

- **Thu nhập**: Tổng số tiền thu được trong kỳ
- **Chi tiêu**: Tổng số tiền đã chi trong kỳ  
- **Số dư**: Chênh lệch giữa thu và chi (có thể âm nếu chi nhiều hơn thu)
- **Giao dịch**: Tổng số giao dịch trong kỳ

**Tính năng lọc thời gian**:
- **Ngày**: Xem thống kê của ngày hiện tại
- **Tuần**: Xem thống kê của tuần hiện tại (bắt đầu từ thứ 2)
- **Tháng**: Xem thống kê của tháng hiện tại

**Giao diện**:
- 4 thẻ thống kê với icon và màu sắc phân biệt
- Màu xanh lá cho thu nhập
- Màu đỏ cho chi tiêu
- Màu xanh dương/cam cho số dư (tùy dương/âm)
- Màu tím cho số lượng giao dịch

### 2. 💸 Quản Lý Giao Dịch

#### Thêm Giao Dịch Mới

**Cách sử dụng**:
1. Click nút **"Thêm giao dịch"** (màu trắng, có icon +)
2. Form modal sẽ hiện ra
3. Chọn loại: **Chi tiêu** (màu đỏ) hoặc **Thu nhập** (màu xanh lá)
4. Chọn danh mục từ dropdown
5. Nhập số tiền (chỉ nhận số)
6. Nhập mô tả
7. Chọn ngày (mặc định là hôm nay)
8. Click **"Thêm"** để lưu

#### Sửa Giao Dịch

**Cách sử dụng**:
1. Tìm giao dịch cần sửa trong danh sách
2. Click icon **✏️ (Edit)** màu xanh dương
3. Form sẽ hiện ra với thông tin đã điền sẵn
4. Sửa các thông tin cần thiết
5. Click **"Cập nhật"** để lưu

#### Xóa Giao Dịch

**Cách sử dụng**:
1. Tìm giao dịch cần xóa trong danh sách
2. Click icon **🗑️ (Trash)** màu đỏ
3. Xác nhận xóa trong hộp thoại
4. Giao dịch sẽ bị xóa vĩnh viễn

### 3. 🏷️ Quản Lý Danh Mục

#### Danh Mục Mặc Định

Ứng dụng có sẵn 8 danh mục:

**Thu nhập**:
- 💰 Lương (màu xanh lá)
- 🎁 Thưởng (màu xanh dương)
- 📈 Đầu tư (màu tím)

**Chi tiêu**:
- 🍔 Ăn uống (màu đỏ)
- 🛍️ Mua sắm (màu cam)
- 🚗 Giao thông (màu cyan)
- 🎬 Giải trí (màu hồng)
- 💳 Hóa đơn (màu indigo)

#### Thêm Danh Mục Mới

**Cách sử dụng**:
1. Click nút **"+ Thêm danh mục"** (màu trắng trong suốt)
2. Nhập tên danh mục trong hộp thoại
3. Chọn loại: Thu nhập hoặc Chi tiêu
4. Danh mục mới sẽ được tạo với icon và màu ngẫu nhiên

### 4. 🔍 Tìm Kiếm & Lọc

#### Tìm Kiếm

**Cách sử dụng**:
- Nhập từ khóa vào ô tìm kiếm
- Tìm kiếm theo:
  - Tên mô tả giao dịch
  - Tên danh mục

#### Lọc Theo Loại

**Các tùy chọn**:
- **Tất cả loại**: Hiển thị cả thu và chi
- **Thu nhập**: Chỉ hiển thị giao dịch thu
- **Chi tiêu**: Chỉ hiển thị giao dịch chi

#### Lọc Theo Danh Mục

**Cách sử dụng**:
- Chọn danh mục từ dropdown
- **Tất cả danh mục**: Hiển thị mọi giao dịch
- Chọn danh mục cụ thể: Chỉ hiển thị giao dịch của danh mục đó

**Lưu ý**: Các bộ lọc có thể kết hợp với nhau để tìm chính xác giao dịch cần tìm.

### 5. 📥 Xuất Dữ Liệu CSV

**Cách sử dụng**:
1. Áp dụng các bộ lọc nếu muốn xuất một phần dữ liệu
2. Click nút **"Xuất CSV"** (có icon download)
3. File CSV sẽ được tải xuống với tên: `expenses_YYYY-MM-DD.csv`

**Định dạng CSV**:
- Cột 1: Ngày (YYYY-MM-DD)
- Cột 2: Loại (Thu/Chi)
- Cột 3: Danh mục
- Cột 4: Số tiền
- Cột 5: Mô tả

### 6. 💾 Lưu Trữ Dữ Liệu

- Dữ liệu được lưu trong **localStorage** của trình duyệt
- Tự động lưu sau mỗi thao tác (thêm, sửa, xóa)
- Dữ liệu sẽ tồn tại ngay cả khi đóng trình duyệt
- **Lưu ý**: Xóa cache trình duyệt sẽ mất dữ liệu

---

## 📖 Hướng Dẫn Sử Dụng

### Bước 1: Khởi Động Ứng Dụng

```bash
# Cài đặt dependencies (chỉ cần làm 1 lần)
npm install

# Chạy ứng dụng
npm run dev
```

Truy cập: `http://localhost:5173`

### Bước 2: Bắt Đầu Sử Dụng

1. **Xem Dashboard**: Màn hình chính hiển thị tổng quan tài chính
2. **Thêm giao dịch đầu tiên**: Click "Thêm giao dịch" và điền thông tin
3. **Tạo danh mục tùy chỉnh**: Nếu cần, thêm danh mục mới
4. **Theo dõi thu chi**: Xem thống kê thay đổi theo thời gian thực

### Bước 3: Quản Lý Hàng Ngày

1. **Ghi chép giao dịch**: Thêm mỗi giao dịch ngay sau khi thực hiện
2. **Kiểm tra số dư**: Xem dashboard để biết tình hình tài chính
3. **Phân tích chi tiêu**: Sử dụng bộ lọc để xem chi tiêu theo danh mục
4. **Xuất báo cáo**: Định kỳ xuất CSV để lưu trữ hoặc phân tích

---

## 📸 Hướng Dẫn Chụp Screenshot

### Các Màn Hình Cần Chụp

#### 1. Màn Hình Dashboard Trống (Khi chưa có dữ liệu)

**Cách chụp**:
- Mở ứng dụng lần đầu (hoặc xóa localStorage)
- Chụp toàn màn hình
- **Mô tả**: Hiển thị dashboard với 4 thẻ thống kê đều là 0, không có giao dịch

**Điểm nổi bật**:
- Header "💰 Quản Lý Chi Tiêu" với gradient tím
- 4 thẻ thống kê trống
- Nút "Thêm giao dịch" và "Thêm danh mục"
- Danh sách giao dịch trống với thông báo "Không có giao dịch nào"

#### 2. Màn Hình Dashboard Có Dữ Liệu

**Cách chụp**:
- Thêm một vài giao dịch (cả thu và chi)
- Chụp dashboard với các số liệu thực tế
- **Mô tả**: Dashboard hiển thị thu nhập, chi tiêu, số dư và số lượng giao dịch

**Điểm nổi bật**:
- Các thẻ thống kê có số liệu
- Màu sắc phân biệt rõ ràng (xanh cho thu, đỏ cho chi)
- Nút lọc thời gian (Ngày/Tuần/Tháng)

#### 3. Form Thêm Giao Dịch

**Cách chụp**:
- Click "Thêm giao dịch"
- Chụp form modal
- **Mô tả**: Form với các trường: Loại, Danh mục, Số tiền, Mô tả, Ngày

**Điểm nổi bật**:
- Nút chuyển đổi giữa "Chi tiêu" và "Thu nhập"
- Dropdown danh mục với icon
- Các trường input rõ ràng
- Nút "Hủy" và "Thêm"

#### 4. Danh Sách Giao Dịch Với Bộ Lọc

**Cách chụp**:
- Thêm nhiều giao dịch với các danh mục khác nhau
- Sử dụng bộ lọc (tìm kiếm, lọc loại, lọc danh mục)
- Chụp danh sách đã được lọc
- **Mô tả**: Danh sách giao dịch với thanh tìm kiếm và các dropdown lọc

**Điểm nổi bật**:
- Thanh tìm kiếm với icon kính lúp
- Dropdown lọc loại và danh mục
- Mỗi giao dịch hiển thị: icon danh mục, mô tả, ngày, số tiền
- Màu xanh cho thu nhập, đỏ cho chi tiêu
- Nút Edit và Delete cho mỗi giao dịch
- Nút "Xuất CSV"

#### 5. Màn Hình Responsive (Mobile)

**Cách chụp**:
- Mở Developer Tools (F12)
- Chuyển sang chế độ mobile (responsive design mode)
- Chọn kích thước iPhone hoặc Android
- Chụp màn hình
- **Mô tả**: Ứng dụng hiển thị tốt trên mobile với layout dọc

**Điểm nổi bật**:
- Dashboard cards xếp dọc
- Form modal chiếm toàn màn hình
- Danh sách giao dịch dễ cuộn
- Tất cả nút bấm đủ lớn để dễ chạm

#### 6. Màn Hình Sửa Giao Dịch

**Cách chụp**:
- Click nút Edit trên một giao dịch
- Chụp form với dữ liệu đã điền sẵn
- **Mô tả**: Form tương tự form thêm nhưng có dữ liệu và nút "Cập nhật"

#### 7. Màn Hình Xuất CSV

**Cách chụp**:
- Click "Xuất CSV"
- Chụp dialog tải file (hoặc chụp file CSV đã tải)
- **Mô tả**: File CSV với các cột: Ngày, Loại, Danh mục, Số tiền, Mô tả

### Tips Chụp Screenshot Đẹp

1. **Sử dụng Full Screen**: Chụp toàn màn hình để thấy đầy đủ giao diện
2. **Thêm Dữ Liệu Mẫu**: Tạo một vài giao dịch với số liệu hợp lý để demo
3. **Chụp Nhiều Góc**: Chụp cả desktop và mobile view
4. **Highlight Tính Năng**: Có thể dùng annotation tool để đánh dấu các tính năng
5. **Consistent Data**: Dùng cùng một bộ dữ liệu mẫu cho tất cả screenshot

### Dữ Liệu Mẫu Đề Xuất

Để có screenshot đẹp, tạo các giao dịch mẫu:

**Thu nhập**:
- Lương: 15,000,000 VND
- Thưởng: 2,000,000 VND

**Chi tiêu**:
- Ăn uống: 500,000 VND
- Mua sắm: 1,200,000 VND
- Giao thông: 300,000 VND
- Giải trí: 800,000 VND
- Hóa đơn: 2,500,000 VND

---

## 🏗️ Kiến Trúc Kỹ Thuật

### Tech Stack

- **Frontend Framework**: React 19.2.0
- **Language**: TypeScript 5.9.3
- **Build Tool**: Vite 7.2.4
- **Styling**: Tailwind CSS 3.4.13
- **Icons**: Lucide React 0.454.0
- **Date Handling**: date-fns 3.6.0
- **Storage**: Browser localStorage API

### Cấu Trúc Thư Mục

```
expense-tracker/
├── public/                 # Static assets
│   └── vite.svg
├── src/
│   ├── components/         # React components
│   │   ├── Dashboard.tsx          # Component hiển thị thống kê
│   │   ├── TransactionForm.tsx     # Form thêm/sửa giao dịch
│   │   └── TransactionList.tsx    # Danh sách giao dịch với filter
│   ├── types/              # TypeScript type definitions
│   │   └── index.ts
│   ├── utils/              # Utility functions
│   │   ├── storage.ts             # localStorage operations
│   │   └── calculations.ts        # Tính toán thống kê, format
│   ├── App.tsx             # Main app component
│   ├── main.tsx            # Entry point
│   └── index.css           # Global styles
├── index.html              # HTML template
├── package.json            # Dependencies
├── vite.config.ts          # Vite configuration
├── tailwind.config.js      # Tailwind CSS configuration
├── postcss.config.js       # PostCSS configuration
└── tsconfig.json           # TypeScript configuration
```

### Component Architecture

```
App (Main Container)
├── Dashboard
│   └── Stats Cards (4 cards)
├── TransactionForm (Modal)
│   └── Form Fields
└── TransactionList
    ├── Search & Filters
    └── Transaction Items
        └── Edit/Delete Actions
```

### Data Flow

1. **Initial Load**: `App.tsx` → `useEffect` → `getTransactions()` → `getCategories()`
2. **Add Transaction**: User input → `handleAddTransaction()` → `saveTransactions()` → Update state
3. **Edit Transaction**: Click Edit → Set `editingTransaction` → Open form → Update
4. **Delete Transaction**: Click Delete → Confirm → Filter out → Save
5. **Filter/Search**: User input → `useMemo` → Filter transactions → Re-render

---

## 🔌 API & Data Structure

### Data Models

#### Transaction

```typescript
interface Transaction {
  id: string;              // Unique ID (timestamp)
  type: 'income' | 'expense';
  categoryId: string;      // Reference to Category
  amount: number;          // Amount in VND
  description: string;    // Transaction description
  date: string;           // ISO date string (YYYY-MM-DD)
}
```

#### Category

```typescript
interface Category {
  id: string;             // Unique ID
  name: string;           // Category name
  type: 'income' | 'expense';
  color: string;          // Hex color code
  icon: string;           // Emoji icon
}
```

#### DashboardStats

```typescript
interface DashboardStats {
  totalIncome: number;
  totalExpense: number;
  balance: number;        // totalIncome - totalExpense
  transactionsCount: number;
}
```

### Storage API

#### localStorage Keys

- `expense_tracker_transactions`: Array of Transaction objects
- `expense_tracker_categories`: Array of Category objects

#### Functions

**storage.ts**:
- `getTransactions(): Transaction[]` - Lấy tất cả giao dịch
- `saveTransactions(transactions: Transaction[]): void` - Lưu giao dịch
- `getCategories(): Category[]` - Lấy tất cả danh mục (có default)
- `saveCategories(categories: Category[]): void` - Lưu danh mục

### Calculation Functions

**calculations.ts**:
- `calculateStats(transactions, startDate?, endDate?): DashboardStats` - Tính thống kê
- `getDateRange(period): { start, end }` - Lấy khoảng thời gian
- `formatCurrency(amount): string` - Format tiền VND
- `exportToCSV(transactions, categories): void` - Xuất CSV

---

## 🚀 Deployment

### Build cho Production

```bash
npm run build
```

Output: `dist/` folder chứa các file tĩnh đã được optimize.

### Deploy lên Static Hosting

Ứng dụng có thể deploy lên:
- **Vercel**: Kéo thả folder `dist/`
- **Netlify**: Kéo thả folder `dist/`
- **GitHub Pages**: Push folder `dist/` lên gh-pages branch
- **Firebase Hosting**: Deploy folder `dist/`

### Environment Variables

Không cần environment variables vì ứng dụng chạy hoàn toàn client-side.

---

## 🐛 Troubleshooting

### Màn hình trắng

**Nguyên nhân**:
- Lỗi JavaScript trong console
- Dependencies chưa được cài đặt
- Lỗi TypeScript compilation

**Giải pháp**:
1. Mở Developer Tools (F12) → Console tab
2. Kiểm tra lỗi
3. Chạy `npm install` nếu thiếu dependencies
4. Chạy `npm run build` để kiểm tra lỗi TypeScript

### Dữ liệu bị mất

**Nguyên nhân**:
- Xóa localStorage của trình duyệt
- Xóa cache/cookies

**Giải pháp**:
- Xuất CSV định kỳ để backup
- Không xóa localStorage nếu muốn giữ dữ liệu

### Performance chậm

**Nguyên nhân**:
- Quá nhiều giao dịch (hàng nghìn)
- Browser cũ

**Giải pháp**:
- Sử dụng bộ lọc để giảm số lượng hiển thị
- Xuất và xóa dữ liệu cũ
- Cập nhật trình duyệt

---

## 📝 License

MIT License - Tự do sử dụng và chỉnh sửa.

---

## 👨‍💻 Tác Giả

Ứng dụng được phát triển với:
- React 19
- TypeScript
- Tailwind CSS
- Vite

Có thể fork và customize theo nhu cầu cá nhân!

---

## 📞 Hỗ Trợ

Nếu gặp vấn đề:
1. Kiểm tra Console trong Developer Tools
2. Đảm bảo đã cài đặt đầy đủ dependencies
3. Kiểm tra version Node.js (cần 18+)
4. Xem lại documentation này

---

**Chúc bạn sử dụng ứng dụng hiệu quả! 💰📊**

