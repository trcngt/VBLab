# 📚 VBLab — Sổ Tay Từ Vựng Tiếng Anh Thông Minh

Ứng dụng web học và ôn tập từ vựng tiếng Anh cá nhân hóa, tích hợp thẻ ghi nhớ (Flashcard) hai chiều và Trợ lý AI giải đáp từ vựng trực quan (Google Gemini).

🌐 **Demo:** [https://vblabstudy.web.app](https://vblabstudy.web.app)

---

## ✨ Tính Năng Nổi Bật

- 🔐 **Xác thực người dùng:** Đăng nhập an toàn qua tài khoản Google (Firebase Authentication), hỗ trợ tối ưu trên cả máy tính và thiết bị di động (Safari/Chrome).
- 📝 **Quản lý từ vựng linh hoạt:**
  - Thêm từ mới kèm phân loại từ loại (*Noun, Verb, Adjective, Adverb, Phrase*), nghĩa tiếng Việt và câu ví dụ ngữ cảnh.
  - Tự động viết hoa chữ cái đầu khi nhập liệu.
  - Chỉnh sửa trực tiếp (Inline Edit) và xóa từ nhanh chóng.
  - Ngăn ngừa trùng lặp từ vựng trong kho lưu trữ cá nhân.
- 📊 **Thống kê & Theo dõi chuỗi học (Streak):**
  - Thanh đo tỉ lệ phân bổ các nhóm từ vựng theo màu sắc trực quan.
  - Tự động ghi nhận chuỗi ngày học liên tục để duy trì động lực.
  - Tìm kiếm thời gian thực và lọc từ theo từng nhóm từ loại.
- 🗂️ **Hệ thống Flashcard thông minh:**
  - Chế độ lật thẻ 3D mượt mà.
  - Hỗ trợ đổi chế độ học hai chiều: **Anh → Việt** (Chuẩn) hoặc **Việt → Anh** (Lật ngược).
  - Tính năng trộn ngẫu nhiên thứ tự thẻ (Shuffle) giúp ghi nhớ sâu hơn.
- 🤖 **Trợ lý Từ vựng AI (Google Gemini):**
  - Thiết kế dạng nút bong bóng chat nổi (Floating Widget) cố định góc dưới màn hình, không làm gián đoạn trải nghiệm học tập.
  - Tích hợp model `gemini-3.6-flash` (endpoint `v1beta`) phản hồi nhanh và chính xác.
  - Cung cấp sẵn các phím tắt hỏi nhanh: *Phân biệt cặp từ dễ nhầm lẫn*, *Từ đồng nghĩa / trái nghĩa*, *Collocations & ngữ cảnh sử dụng*.
  - Lưu trữ API Key cục bộ trên trình duyệt qua `localStorage` (bảo mật tuyệt đối, không lộ key lên mã nguồn).
- 🌓 **Chế độ Sáng/Tối (Dark Mode):** Dễ dàng chuyển đổi giao diện sáng/tối chỉ với một chạm, bảo vệ mắt khi học ban đêm.

---

## 🛠️ Công Nghệ Sử Dụng

- **Frontend:** HTML5, Modern CSS3 (CSS Variables, Flexbox, Responsive Design), Vanilla JavaScript (ES6+ Modules).
- **Backend & Database:** [Firebase Firestore](https://firebase.google.com/docs/firestore) (Lưu trữ dữ liệu thời gian thực theo cấu trúc sub-collection của từng tài khoản).
- **Authentication:** [Firebase Auth](https://firebase.google.com/docs/auth) (Google OAuth Provider).
- **Hosting:** [Firebase Hosting](https://firebase.google.com/docs/hosting).
- **AI Engine:** [Google Gemini API](https://ai.google.dev/) (Model: `gemini-3.6-flash`).

---
