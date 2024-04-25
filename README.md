CẤU HÌNH CƠ SỞ DỮ LIỆU:
Dự án này sử dụng MySQL làm cơ sở dữ liệu. Để kết nối với cơ sở dữ liệu và chạy ứng dụng một cách đúng đắn, bạn cần cấu hình thông tin kết nối cơ sở dữ liệu trong application.properties hoặc application.yml của Spring Boot. Dưới đây là các bước cần thiết để cấu hình.

Thông Tin Cơ Sở Dữ Liệu
URL Database: jdbc:mysql://localhost:3306/tdm
Tên người dùng: tdm
Mật khẩu: Giang12345@
Chế độ cập nhật tự động (DDL Auto): update

Hướng Dẫn Thiết Lập
Bước 1: Cài Đặt MySQL
Đảm bảo rằng MySQL đã được cài đặt trên máy chủ của bạn. Bạn có thể tải xuống và cài đặt MySQL từ trang web chính thức của MySQL.

Bước 2: Tạo Cơ Sở Dữ Liệu
Truy cập vào MySQL thông qua terminal hoặc MySQL Workbench và tạo một cơ sở dữ liệu mới với tên là tdm, bạn có thể tạo thủ công hoặc sử dụng lệnh SQL: 

CREATE DATABASE tdm;

Bước 3: Tạo Người Dùng và Cấp Quyền
Sau khi cài đặt và khởi động MySQL, tạo một người dùng mới và cơ sở dữ liệu từ bảng điều khiển MySQL của bạn. Sử dụng các lệnh SQL sau đây để tạo người dùng và cấp quyền truy cập vào cơ sở dữ liệu tdm, bạn có thể tạo thủ công hoặc sử dụng lệnh SQL:

CREATE USER 'tdm'@'localhost' IDENTIFIED BY 'Giang12345@';
CREATE DATABASE tdm;
GRANT ALL PRIVILEGES ON tdm.* TO 'tdm'@'localhost';
FLUSH PRIVILEGES;

Bước 4: Cập Nhật Cấu Hình Ứng Dụng
Mở tệp cấu hình của ứng dụng Spring Boot của bạn (application.properties hoặc application.yml) và cập nhật các thông tin kết nối đến cơ sở dữ liệu như sau:

spring.datasource.url=jdbc:mysql://localhost:3306/tdm
spring.datasource.username=tdm
spring.datasource.password=Giang12345@
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
Vai trò: ROLE_USER
Vai trò USER giới hạn hơn so với ADMIN và chỉ cho phép xem nội dung và thực hiện các tác vụ cơ bản.

Hướng Dẫn Sử Dụng
Để đăng nhập, vui lòng truy cập trang đăng nhập của ứng dụng, nhập email và mật khẩu tương ứng với tài khoản bạn muốn sử dụng. Sau khi đăng nhập, giao diện và chức năng có sẵn sẽ thay đổi tùy thuộc vào quyền của tài khoản.

Tôi khuyến khích bạn đăng nhập lần lượt với từng loại tài khoản để hiểu rõ hơn về cách thức hoạt động và các quyền hạn của từng vai trò trong ứng dụng.
