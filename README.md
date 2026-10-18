# DỰ ÁN WEBSITE TĨNH GIỚI THIỆU SÁCH: "BÍ QUYẾT TƯ DUY ĐỘT PHÁ"

> **Dự án thực hành môn học:** Xây dựng Landing Page giới thiệu sách bằng HTML5, CSS3 và Bootstrap 5.  
> **Tác giả:** Nguyễn Văn Minh  
> **Mã nguồn tham khảo:** [hoanv7169/bootstrap-demo](https://github.com/hoanv7169/bootstrap-demo)

---

## 📁 Cấu Trúc Thư Mục Dự Án

```text
hehecodegym/
├── index.html              # Tệp HTML chính chứa toàn bộ 8 phần theo yêu cầu
├── sample-chapter.pdf      # Bản đọc thử PDF mẫu (tải thật khi bấm nút)
├── css/
│   ├── style.css           # Định dạng giao diện chính, biến màu sắc, typography
│   └── responsive.css      # Tinh chỉnh giao diện trên Mobile (320-576px), Tablet (577-991px), Desktop
├── js/
│   └── main.js             # JavaScript xử lý hiệu ứng cuộn, modal, toast, đóng menu mobile
├── images/
│   ├── book-cover.jpg      # Bìa sách 3D chất lượng cao
│   ├── author.jpg          # Ảnh chân dung tác giả
│   ├── devices.jpg         # Ảnh minh họa sách trên Tablet & Điện thoại
│   ├── reader-1.jpg        # Ảnh avatar độc giả 1 (Chị Mai Phương)
│   ├── reader-2.jpg        # Ảnh avatar độc giả 2 (Anh Trần Hoàng)
│   └── reader-3.jpg        # Ảnh avatar độc giả 3 (Chị Lê Thanh Hà)
└── README.md               # Hướng dẫn chi tiết sử dụng và chạy dự án
```

---

## 🌟 Các Phần Đã Hoàn Thành (Đầy đủ theo yêu cầu)

1. **Header (Đầu trang & Menu):**
   - Logo thương hiệu `MinhBook` với biểu tượng sách.
   - Thanh điều hướng liên kết mượt mà đến 6 phần: *Tổng quan, Tác giả, Nội dung nổi bật, Bảng giá, Tải đọc thử, Đánh giá*.
   - Nút kêu gọi hành động (CTA) nổi bật: **"Mua Sách Ngay"**.
   - Hỗ trợ Menu Hamburger thu gọn linh hoạt trên điện thoại, tự động đóng khi nhấp vào liên kết.
   - Hiệu ứng đổi màu & đổ bóng khi cuộn trang (Sticky Glassmorphism Navbar).

2. **Book Overview (Tổng quan sách / Hero Section):**
   - Tiêu đề sách ấn tượng: **"BÍ QUYẾT TƯ DUY ĐỘT PHÁ"**.
   - Slogan & đoạn mô tả ngắn gọn, truyền cảm hứng.
   - Mockup bìa sách 3D với hiệu ứng bóng đổ và lơ lửng (hover 3D).
   - Hai nút CTA: **"Đặt Mua Sách Ngay"** (mở form đặt mua) và **"Đọc Thử Miễn Phí"** (mở modal đọc thử trực tuyến).
   - Huy hiệu thống kê nổi bật: Điểm đánh giá 4.9/5, số trang (380 trang), quà tặng Audio, 35.000+ bản đã phát hành.

3. **Author (Về tác giả):**
   - Ảnh chân dung tác giả chuyên nghiệp, sắc nét.
   - Tên tác giả: **Diễn giả - Chuyên gia Nguyễn Văn Minh**.
   - Tiểu sử ngắn, triết lý sống và câu trích dẫn tâm đắc.
   - Khung thống kê thành tích: 100.000+ học viên, 3 đầu sách, 50+ doanh nghiệp tư vấn, 500+ hội thảo.
   - Các liên kết mạng xã hội (Facebook, YouTube, LinkedIn, TikTok).

4. **Features (Điểm nổi bật của cuốn sách):**
   - 6 thẻ tính năng dạng thẻ (Card) có icon màu sắc hiện đại:
     1. *Tư duy đột phá & phản biện*
     2. *Thiết lập mục tiêu SMART+*
     3. *Quản trị năng lượng đỉnh cao*
     4. *Ra quyết định trong biến động*
     5. *Tối ưu hóa năng suất 10X*
     6. *50+ Biểu mẫu & bài tập áp dụng thực tế*
   - Khung Accordion hiển thị **Mục lục chi tiết 12 chương** theo 3 phần lớn.

5. **Prices / Pricing (Bảng giá minh họa):**
   - 3 gói lựa chọn rõ ràng:
     - **Bản E-Book:** 99.000 đ (tiết kiệm, đọc trên điện thoại/máy tính bảng/Kindle).
     - **Sách Bìa Mềm (Paperback):** 189.000 đ (Gói bán chạy nhất, tặng kèm bookmark & ebook).
     - **Bìa Cứng (Collector Edition):** 349.000 đ (Giới hạn, chữ ký tay, audio book, vé workshop).
   - Danh sách quyền lợi chi tiết với icon dấu tích xanh.
   - Cam kết đổi trả 100% trong 7 ngày nếu sách lỗi in ấn.

6. **Download (Tải bản đọc thử):**
   - Cung cấp file đọc thử thật: Tải trực tiếp file `sample-chapter.pdf` về máy tính.
   - Nút xem trực tiếp online (Mở Modal xem Chương 1).
   - Form nhập Email để nhận tài liệu đọc thử kèm thông báo Toast phản hồi tức thì.
   - Hình ảnh hiển thị ứng dụng đọc sách trên đa thiết bị (Tablet & Mobile).

7. **Reader’s Say (Cảm nhận từ độc giả):**
   - 3 thẻ đánh giá thực tế từ độc giả (Chị Mai Phương, Anh Trần Hoàng, Chị Lê Thanh Hà).
   - Đánh giá 5 sao vàng, avatar đại diện chân thực, chức vụ và huy hiệu xác nhận "Đã mua".
   - Dòng chú thích minh bạch theo yêu cầu bài thực hành.

8. **Footer (Chân trang):**
   - Thông tin giới thiệu về thương hiệu sách.
   - Các liên kết điều hướng nhanh.
   - Thông tin liên hệ đầy đủ (địa chỉ, email, hotline 1900).
   - Form đăng ký nhận bản tin tri thức (Newsletter).
   - Dòng bản quyền rõ ràng năm 2026.

9. **Các tiện ích tương tác bổ sung:**
   - **Modal Đọc Thử (Sample Preview Modal):** Đọc trực tiếp trích đoạn Chương 1 trên giao diện pop-up.
   - **Modal Đặt Sách (Order Modal):** Điền thông tin đặt mua, chọn gói sách, gửi phản hồi thành công.
   - **Nút Back to Top:** Nút tròn nổi góc dưới màn hình, tự động xuất hiện khi cuộn trang và trượt mượt lên đầu.
   - **Toast Thông Báo:** Bật thông báo nhẹ nhàng ở góc màn hình khi đăng ký email hoặc đặt sách.

---

## 📱 Khả Năng Responsive Đa Màn Hình

- **Điện thoại (Mobile: 320px - 576px):** Menu tự thu gọn vào biểu tượng hamburger, các cột tự xếp dọc (1 cột), nút bấm kéo dài 100% chiều rộng để dễ thao tác chạm bằng ngón tay cái, không có bất kỳ thanh cuộn ngang nào (`overflow-x: hidden`).
- **Máy tính bảng (Tablet: 577px - 991px):** Grid 2 cột cân đối, thanh điều hướng và hình ảnh tự co giãn linh hoạt.
- **Máy tính (Desktop: 992px trở lên):** Bố cục đa cột tối ưu, hiệu ứng hover mượt mà, cố định navbar với hiệu ứng làm mờ nền (blur).

---

## 🚀 Hướng Dẫn Mở & Chạy Website Bằng VS Code

### Cách 1: Sử dụng Extension "Live Server" trong VS Code (Khuyên dùng)
1. Mở phần mềm **Visual Studio Code**.
2. Chọn menu **File** -> **Open Folder...** -> Chọn thư mục `hehecodegym`.
3. Cài đặt tiện ích mở rộng **Live Server** (nếu chưa có):
   - Nhấn tổ hợp phím `Ctrl + Shift + X`.
   - Tìm kiếm từ khóa `Live Server` của tác giả *Ritwick Dey*.
   - Nhấn nút **Install**.
4. Mở tệp `index.html`.
5. Nhấp chuột phải vào bất kỳ đâu trong tệp `index.html` và chọn **Open with Live Server** (hoặc nhấp nút **Go Live** ở góc dưới cùng bên phải màn hình VS Code).
6. Trình duyệt web sẽ tự động mở trang web tại địa chỉ `http://127.0.0.1:5500`.

### Cách 2: Mở trực tiếp bằng trình duyệt Web
1. Mở thư mục `C:\Users\admin\Downloads\hehecodegym` trên máy tính của bạn.
2. Nhấp đúp chuột trái vào tệp `index.html`.
3. Trang web sẽ mở ngay lập tức trên trình duyệt Chrome, Edge hoặc Firefox.
