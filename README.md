CẤU HÌNH CƠ SỞ DỮ LIỆU:
  Dự án này sử dụng MySQL làm cơ sở dữ liệu. Để kết nối với cơ sở dữ liệu và chạy ứng dụng một cách đúng đắn, bạn cần cấu hình thông tin kết nối cơ sở dữ liệu trong application.properties hoặc application.yml của Spring Boot. Dưới đây là các bước cần thiết để cấu hình.

Bước 1: Cài Đặt MySQL
  Cài đặt MySQL từ trang chính thức.

Bước 2: Tạo Cơ Sở Dữ Liệu: 
  Thực hiện qua terminal hoặc MySQL Workbench:

    CREATE DATABASE tdm;

Bước 3: Tạo Người Dùng và Cấp Quyền:

    CREATE USER 'tdm'@'localhost' IDENTIFIED BY 'password';
    GRANT ALL PRIVILEGES ON tdm.* TO 'tdm'@'localhost';
    FLUSH PRIVILEGES;

Bước 4: Cập Nhật Cấu Hình Ứng Dụng: 
  Trong file application.properties hoặc application.yml, cập nhật:

    spring.datasource.url=jdbc:mysql://localhost:3306/tdm
    spring.datasource.username=tdm
    spring.datasource.password=password
    spring.jpa.hibernate.ddl-auto=update


HƯỚNG DẪN ĐĂNG NHẬP:
  Dự án này hỗ trợ hai loại tài khoản với các quyền hạn khác nhau. Dưới đây là thông tin đăng nhập cho từng tài khoản để bạn có thể thử nghiệm và khám phá các chức năng khác nhau tùy thuộc vào vai trò của mỗi tài khoản.

Tài Khoản Admin
  Email: admin@gmail.com
  Mật khẩu: admin
  Vai trò: ROLE_ADMIN
  Với vai trò ADMIN, bạn có thể truy cập vào các chức năng quản lý và cấu hình cao cấp của ứng dụng. Đây bao gồm quyền thêm, sửa, xóa các mục và quản lý người dùng.

Tài Khoản Người Dùng
  Email: user@gmail.com
  Mật khẩu: user
  Vai trò: ROLE_USER
  Vai trò USER giới hạn hơn so với ADMIN và chỉ cho phép xem nội dung và thực hiện các tác vụ cơ bản.

Tôi khuyến khích bạn đăng nhập lần lượt với từng loại tài khoản để hiểu rõ hơn về cách thức hoạt động và các quyền hạn của từng vai trò trong ứng dụng.
