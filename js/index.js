
const textElement = document.getElementById('typing-text');
const initialText = "Đỉnh cao sức mạnh dân tộc và thời đại, non sông thu về một mối";
const finalText = "Việt Nam - Kỷ nguyên vươn mình";
const textToType = `"Chiến tranh, theo tôi biết, có nhiều người nhói đau khi nhắc về nó. Những huân chương, huy chương chỉ làm ấm ngực, niềm đau khuất ở một góc lòng, có kẻ nhìn thấy, có người không..."\n\nĐó là những lời văn của Nguyễn Ngọc Tư dành cho chiến tranh. Không phải sự vui mừng, háo hức mà là sự đau đáu với những nỗi đau, sự sống, cái chết đã bị tước đoạt bởi chiến tranh và để lại trong lòng người lính một nỗi buồn vô tận. Đó là nỗi buồn phải sống tiếp mà vật lộn với cuộc chiến của riêng mình, cuộc chiến ấy không còn bom đạn, khói lửa, mà đó là cuộc chiến của những người còn sống, cuộc sống của những ám ảnh khôn nguôi nơi chiến trường luôn giằng xé trong khối óc của những người lính.\n\nBởi thế, chiến tranh không bao giờ là kết thúc cả, vẫn còn đó biết bao người đang còn âm thầm chiến đấu cho cuộc chiến nội tâm của riêng mình và nỗi buồn của chiến tranh thì vẫn còn mãi. Thế nhưng, chính việc thấu hiểu nỗi buồn đó là cách để chúng ta - thời đại mới hôm nay thấy tỏ được giá trị của hạnh phúc của nền độc lập để nhắc nhở ta về cuộc chiến hãy còn tiếp diễn mà thấm thía lấy cái giá của hòa bình và luôn phấp phới trong tim lòng tự hào dân tộc.`;
let i = 0;
let currentText = '';
let index = 0;
let isPlay = false;

const txtRBox = document.getElementById('text-r-box')
let isTyping = true;
let isInitialPhase = true;
let section1 = `  <img src="./images/ss1-l.png" alt="ss1-l">
        <img src="./images/e4b318059a7824c886901e16d341eb5f.jpg" alt="td">
        <img src="./images/ss1-r.png" alt="ss1-l">
        <div class="ss1-txt wow slideInLeft">
            <h1>Kỷ niệm 50 năm<br> Giải phóng Miền Nam - Thống nhất Đất nước</h1>
            <h2>30/04/1975 - 30/04/2025</h2>
            <p id="typing-text" class="typing-text"></p>
        </div>
        <div id="section-one-next" class="btn-container">
            <button>Tìm hiểu thêm<br>
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="20px"
                width="20px" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd"
                    d="M1.646 6.646a.5.5 0 0 1 .708 0L8 12.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708">
                </path>
                <path fill-rule="evenodd"
                    d="M1.646 2.646a.5.5 0 0 1 .708 0L8 8.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708">
                </path>
            </svg></button>
        </div>`
let section2_Old = `  <div class="title">
                            <h3>Tổng quan</h3>
                            <div>
                                <p><span>17</span> giờ ngày 26/4/1975, Chiến dịch Hồ Chí Minh bắt đầu nổ súng. Từ ngày
                                    26
                                    đến ngày 28/4,
                                    ta tiến công vào tuyến phòng thủ vòng ngoài của địch, thực hiện bao vây cô lập triệt
                                    để
                                    Sài Gòn, tạo thêm thế có lợi để thực hành tổng tiến công trên toàn mặt trận.</p>
                                <div>
                                    <p>Ta: Trên 250.000 quân, hơn 400 xe tăng, pháo binh, đặc công, công binh cùng lực
                                        lượng
                                        địa phương.</p>
                                    <p>Địch: Khoảng 130.000 quân Việt Nam Cộng hòa còn lại, bố trí thành 3 tuyến phòng
                                        thủ,
                                        tập trung quanh Sài Gòn.</p>
                                </div>
                            </div>
                        </div>
                        <div class="list">
                            <h3>15 MỐC SỰ KIỆN CHÍNH</h3>
                            <ul style="padding-left: 0;">
                                <li>
                                    <p><span>1</span>.17h00 ngày 26/4 - Nổ súng mở màn chiến dịch<br>Pháo binh từ cả 5
                                        hướng
                                        đồng loạt khai hỏa vào tuyến phòng thủ vòng ngoài Sài Gòn.</p>
                                </li>
                                <li>
                                    <p><span>2</span>.Hướng Đông chiến dịch, Quân đoàn 4 đánh vào Tràng Bom - Hổ Nai.
                                        Sáng
                                        27/4, Sư đoàn 341 tiêu diệt hơn 1.700 quân Sư đoàn ngụy, mở toang của ngõ phía
                                        Đông.
                                    </p>
                                </li>
                                <li>
                                    <p><span>3</span>.Quân đoàn 3 phá hủy trận địa pháo Đổng Dù - Tràng Bàng(Tây
                                        Bắc)<br>Khống chế tuyến hỏa lực ngăn cản từ Tây Ninh - Củ Chi.</p>
                                </li>
                                <li>
                                    <p><span>4</span>.Quân đoàn 2 đánh căn cứ Nước Trong - Long Thành(Đông Nam)<br>Tiêu
                                        diệt
                                        cụm quân bảo vệ Sân bay Biên Hòa, áp sát trục đường 15.</p>
                                </li>
                                <li>
                                    <p><span>5</span>.Đoàn 232 tiến công cắt đứt Quốc lộ 4 đoạn từ Bến Lức - Tân An(Tây
                                        Nam).<br> Cắt đường tiếp viện từ miền Tây về Sài Gòn, bắt sống hơn 150 quân
                                        địch.
                                    </p>
                                </li>
                                <li>
                                    <p><span>6</span>.Quân đoàn 1 áp sát Bình Mỹ - Phú Lợi(Bắc)<br>Lập pháo trận áp chế
                                        cụm
                                        địch Gò Vấp - Thử Đức.</p>
                                </li>
                                <li>
                                    <p><span>7</span>.27/4 - Sư đoàn 6 và Trung đoàn 209 tiêu diệt Thiết đoàn ngụy tại
                                        Yên
                                        Thế<br>Phá hủy 8 xe bọc thép, thu giữ nhiều vũ khí.</p>
                                </li>
                                <li>
                                    <p><span>8</span>.Sư đoàn 3(232) vượt sông Vàm Cỏ Đông<br>Áp sát của ngõ phía Nam -
                                        hướng Bà Quẹo.</p>
                                </li>
                                <li>
                                    <p><span>9</span>.Quân đoàn 4 chiếm Tam Hiệp - mở mũi đột phá vào Biên Hòa<br>Bắt
                                        hơn
                                        120 tù binh, phá hủy nhiều kho quân lương.</p>
                                </li>
                                <li>
                                    <p><span>10</span>.Quân đoàn 2 đánh chiến thị xã Bà Rịa(Đông Nam)<br>Kiểm soát toàn
                                        tuyến từ Vũng Tàu đến Nhơn Trạch.</p>
                                </li>
                                <li>
                                    <p><span>11</span>.28/4 - Sư đoàn 316 (Quân đoàn 3) chiếm Phước Hiệp - Lập
                                        Táo<br>Chia
                                        cắt tuyến phòng thủ Tây Bắc.</p>
                                </li>
                                <li>
                                    <p><span>12</span>.Sư đoàn 320A tiêu diệt Sư đoàn 25 ngụy tại Đổng Dù<br>Gần 130
                                        địch bị
                                        bắt, 200 vũ khí bị thu giữ.</p>
                                </li>
                                <li>
                                    <p><span>13</span>.Sư đoàn 232 đánh tan cụm phòng ngự Bà Hom - Vĩnh Lộc - Bình Trị
                                        Đông<br>Chọc thủng tuyến của Tây thành phố.</p>
                                </li>
                                <li>
                                    <p><span>14</span>.Phân đội 3 thuộc Trung đoàn 126 đặc công Hải quân và tổ đặc công
                                        Quân
                                        khu 5 tiến công đảo Nam Yết (thuộc quần đảo Trường Sa). 11 giờ 30 phút ngày
                                        27/4, ta
                                        hoàn toàn làm chủ đảo Yết Nam.</p>
                                </li>
                                <li>
                                    <p><span>15</span>.Phi đội Quyết thắng ném bom sân bay Tân Sơn Nhất, diệt 24 máy bay
                                        địch, khiến cả Sài Gòn hoảng loạn, đẩy nhanh sự tan rã của chính quyền Sài Gòn.
                                    </p>
                                </li>
                            </ul>
                        </div>>`
//   <div class="text-two-r"> <div class="text-r-box" style="font-size: 13px;">
let section2_New = ` <div class="title">
                            <h3>Tổng quan</h3>
                            <div style="display: inline-block; width: 100%;">
                                <p style="width: 100%; margin-bottom: 3px;"><span style="font-size: 45px;height: 42px;">N</span>gày
                                    29/4/1975 đánh dấu giai đoạn chuyển tiếp quyết định trong Chiến
                                    Dịch Hồ Chí Minh:Từ phá vỡ tuyến phòng thủ vòng ngoài, các binh đoàn chủ lực của ta
                                    đồng loạt tổng công kích, từng bước áp sát nội đô Sài Gòn, đánh vào các vị trí then
                                    chốt, làm tê liệt sức kháng cự của quân đội Sài Gòn.</p>
                                <p style="width: 100%;text-indent: 20px;">Trên cả 5 hướng tiến công - Bắc, Tây Bắc, Tây
                                    Nam, Đông, Đông
                                    Nam - các mũi quân ta
                                    phối hợp chặt chẽ, hợp vây và chia cắt Sài Gòn, cắt đứt hoàn toàn đường bộ, đường
                                    thuỷ, đường không tiếp viện. Trong ngày 29/4, ta đã đánh sập 12 tuyến phòng ngự quan
                                    trọng, tiêu diệt và bắt sống hàng ngàn quân địch, đưa các binh đoàn vào sát nội đô.
                                </p>

                            </div>
                        </div>
                        <div class="list">
                            <h3>15 MỐC SỰ KIỆN CHÍNH</h3>
                            <ul style="padding-left: 0;">
                                <li>
                                    <p><span>1</span>.0h00 - Đoàn 232 đánh chiếm Đức Hòa - Hậu Nghĩa<br>
                                        Tiêu Diệt 2 tiểu đoàn bảo an, thu 150 khẩu súng, mở cửa ngõ Tây Nam nội đô.</p>
                                </li>
                                <li>
                                    <p><span>2</span>.2h00 - Trung đoàn 141(Quân đoàn 4) phá phòng tuyến Tam Hiệp<br>
                                        Đánh tan 1 cụm quân, bắt sống 142 tù binh, thu nhiều vũ khí.
                                    </p>
                                </li>
                                <li>
                                    <p><span>3</span>.4h30-Bộ Tự lệnh ra lệnh tổng công kích toàn mặt trận<br>
                                        Tất cả các hướng nổ súng đồng loạt; khí thế quyết thắng lan rộng toàn chiến
                                        dịch.</p>
                                </li>
                                <li>
                                    <p><span>4</span>.5h00 - Quân đoàn 1 đánh chiếm chi khu Lái Thiêu<br>
                                        Tiêu diệt 1 đại biệt động, thu 5 xe, khống chế cửa ngõ phía Bắc Sài Gòn.</p>
                                </li>
                                <li>
                                    <p><span>5</span>.6h45- Trung đoàn 1 (Sư đoàn 9, Quân đoàn 3) chiếm ngã tư Bảy
                                        Hiển<br>
                                        Bắt sống 20 xe quân sự, phá tan tuyến kháng cự then chốt trước Sân bay Tân Sơn
                                        Nhất.
                                    </p>
                                </li>
                                <li>
                                    <p><span>6</span>.7h00 - Lữ đoàn xe tăng 203, Quân đoàn 2, vượt cầu Rạch Chiếc<br>
                                        Mở mũi thọc sâu chiến lược từ phía Đông, tiến sát Quận 2 - nội đô.</p>
                                </li>
                                <li>
                                    <p><span>7</span>.8h45 - Quân đoàn 4 dàn pháo 130mm tấn công Gò Vấp<br>
                                        Tạo áp lực cực lớn từ hướng Bắc vào trung tâm nội thành.</p>
                                </li>
                                <li>
                                    <p><span>8</span>.8h45 - Quân đoàn 1 đánh tan phần lớn Sư đoàn 5 ngụy tại Tân
                                        Uyên<br>
                                        Bắt sống hơn 300 địch, phá hủy nhiều xe tăng, xe thiết giáp.</p>
                                </li>
                                <li>
                                    <p><span>9</span>.9h00, trên hướng biển, lực lượng ta đổ bộ lên đảo, giải phóng đảo
                                        Trường Sa - đảo xa nhất ở phía Nam của Quần đảo Trường Sa.</p>
                                </li>
                                <li>
                                    <p><span>10</span>.10h00 - Trung đàon 27 (Quân đoàn 1) chiếm Lái Thiêu<br>
                                        Phá hủy hơn 50 xe địch tại chỗ, hoàn toàn làm chủ tuyến Bắc Sài Gòn.</p>
                                </li>
                                <li>
                                    <p><span>11</span>.10h45 - Quân đoàn 2 chiếm cầu Thị Nghè<br>
                                        Đây là hành lang chiến lược mở lối vào trung tâm thành phố.</p>
                                </li>
                                <li>
                                    <p><span>12</span>.12h00 - Quân đoàn 2 kiểm soát hoàn toàn Nhơn Trạch - Tuy Hạ<br>
                                        Lập trận địa pháo 130mm, áp sát đánh vào sân bay Tân Sơn Nhất.</p>
                                </li>
                                <li>
                                    <p><span>13</span>.13h15 - Quân đoàn 4 áp sát Quận 3 - Khám Chí Hòa<br>
                                        Dồn ép quận địch vào khu trung tâm, tiêu diệt nhiều cụm quân biệt lập.</p>
                                </li>
                                <li>
                                    <p><span>14</span>.15h00 - Quân đoàn 3 phá tuyến phòng ngự Tân Sơn Nhất<br>
                                        Đánh bật lính dù ngụy, phá huyẻ nhiều ụ súng cố thủ, mở đường thọc sâu.</p>
                                </li>
                                <li>
                                    <p><span>15</span>.16h00 - Biệt động chiếm Đài phát thanh Sài Gòn<br>
                                        Khống chế cơ sở truyền thông lớn nhất, chuẩn bị cho tuyên bố đầu hàng ngày 30/4.
                                    </p>
                                </li>
                            </ul>
                        </div>`
let section3 = `
                        <div class="title">
                            <h3>Tổng quan</h3>
                            <div style="display: block; width: 100%;">
                                <p style="width: 100%; margin-bottom: 3px;"><span
                                        style="height: 43px; font-size: 70px;">N</span>gày 30/4/1975 - ngày cuối cùng
                                    của chiến dịch Hồ Chí Minh. <br>Sau 5 ngày (tính từ 26 - 30/4) tiến công quyết liệt,
                                    rạng sáng 30/4, các binh đoàn chủ lực đồng loạt đột kích, đánh chiếm những mục tiêu
                                    cuối cùng của quân đội Sài Gòn. Trọng tâm là đánh chiếm Dinh Độc Lập - trung tâm đầu
                                    não của chính quyền ngụy, bắt sống toàn bộ Nội các của Tổng thống Dương Văn Minh.
                                </p>
                            </div>
                        </div>
                        <div class="list" style="margin-top:25px">
                            <h3>15 SỰ KIỆN CHÍNH</h3>
                            <ul style="padding-left: 0;">
                                <li>
                                    <p><span>1</span>.00h00 - Quân đoàn 3 mở trận thọc sâu Bộ Tổng Tham mưu. Tiêu diệt 1
                                        tiểu đoàn bảo vệ. Thu giữ nhiều bản đồ, kế hoạch tác chiến quân sự.</p>
                                </li>
                                <li>
                                    <p><span>2</span>.3h00 - Đoàn 232 đánh mạnh tuyến Đại Hàn<br>
                                        Tiêu diệt hơn 300 địch, phá vỡ tuyến cố thủ phía Tây Nam.
                                    </p>
                                </li>
                                <li>
                                    <p><span>3</span>.05h00 - Quân đoàn 2 vượt cầu Sài Gòn<br>
                                        Đánh tan cụm phòng ngự, thu 1 xe tăng M48, loại khỏi vòng chiến hơn 300 quân
                                        địch.</p>
                                </li>
                                <li>
                                    <p><span>4</span>.07h00 - Biệt động chiếm cầu Nhị Thiên Đường, cầu chữ Y...<br>
                                        Cắt hoàn toàn tuyến thông tin - chỉ huy nội đô.</p>
                                </li>
                                <li>
                                    <p><span>5</span>.08h00 - Trung đoàn 28 đánh chiếm kho quân dụng<br>
                                        Thu giữ hàng nghìn súng đạn, hàng trăm bộ đàm và bản đồ tác chiến.
                                    </p>
                                </li>
                                <li>
                                    <p><span>6</span>.08h45 - Xe tăng Lữ đoàn 203 vượt Thị Nghè, tiến về Dinh Độc Lập<br>
                                        Dẫn đầu là xe tăng số hiệu 843.</p>
                                </li>
                                <li>
                                    <p><span>7</span>.10h30 - Tổng Nha Cảnh sát và Biệt khu Thủ đô bị đánh chiếm<br> 500
                                        cảnh sát đầu hàng; Trung tướng Lâm Văn Phát - Tư lệnh Biệt Khu Thủ đô bị ta bắt
                                        sống.</p>
                                </li>
                                <li>
                                    <p><span>8</span>.10h45 - 10h48 - Xe tăng 390 húc đổ cổng chính Dinh Độc Lập<br>
                                        Xe tăng 843 húc đổ cổng phụ Dinh Độc Lập.</p>
                                </li>
                                <li>
                                    <p><span>9</span>.11h15 - Trung đoàn 66, Sư đoàn 304, Quân đoàn 2 bắt toàn bộ Nội
                                        các Sài Gòn<br>
                                        Bắt giữ 3 tướng lĩnh, 5 bộ trưởng; tước toàn bộ vũ khí và tài liệu mật.</p>
                                </li>
                                <li>
                                    <p><span>10</span>.11h30 - Đại úy Bùi Quang Thận cắm cờ Giải phóng lên nóc Dinh Độc
                                        Lập.<br> Đây là biểu tượng của chiến thắng lịch sử.</p>
                                </li>
                                <li>
                                    <p><span>11</span>.11h45 - Tổng thống Dương Văn Minh tuyên bố đầu hàng vô điều kiện<br>
                                        Chiến dịch Hồ Chí Minh kết thúc thắng lợi hoàn toàn sau 5 ngày đêm.</p>
                                </li>
                                <li>
                                    <p><span>12</span>.12h30 - Nội các Chính quyền Sài Gòn bị dẫn giải sang Đài Phát
                                        thanh Sài Gòn<br>
                                        Tổng thống Dương Văn Minh đọc tuyên bố đầu hàng trên sóng phát thanh quốc gia.
                                    </p>
                                </li>
                                <li>
                                    <p><span>13</span>.14h00 - Quân đội ta kiểm soát toàn bộ các vị trí quân sự, hành
                                        chính còn lại<br>
                                        Thiết lập lực lượng quân quản, giữ vững trật tự đô thị. Hơn 10.000 binh lính
                                        ngụy ra trình diện trong ngày.</p>
                                </li>
                                <li>
                                    <p><span>14</span>.Trong ngày 30/4, nhân dân và lực lượng vũ trang các tỉnh Cần Thơ,
                                        Gò Công, Mỹ Tho, Vĩnh Long, Trà Vinh, Sóc Trăng, Bạc Liêu, Rạch Giá, Sa Đéc,
                                        Long An kết hợp tiến công và nổi dậy tự giải phóng.</p>
                                </li>
                                <li>
                                    <p><span>15</span>.Hàng triệu người dân Sài Gòn đổ ra đường vẫy cờ, hoa, reo mừng
                                        chiến thắng. Gần 100 phóng viên quốc tế ghi hình tại Dinh Độc Lập và các điểm
                                        trọng yếu.
                                    </p>
                                </li>
                            </ul>
                        </div>`
let section4 = `
        <h1></h1>
        <div class="row">
            <div class="ss3-l">
                <div class="ss3-box">

                    <img src="./images/vi-xuyen.jpg" alt="">
                    <img class="wow fadeInLeftO" src="./images/vi-xuyen.jpg" alt="">

                    <p>
                        Hơn 849.000 người con Việt Nam hy sinh, có khoảng 200.000 hài cốt Liệt sỹ chưa được tìm thấy và
                        hơn 300.000 bộ hài cốt đã được quy tụ nhưng vẫn chưa rõ danh tính
                    </p>
                </div>
                <div class="ss3-box">
                    <img src="./images/MVNAH.webp" alt="">
                    <img class="wow fadeInLeftO" src="./images/MVNAH.webp" alt="">
                    <p style="flex-direction: column;justify-content: space-around;">
                        <span>Hơn 117.000 bà mẹ Việt Nam anh hùng, gần 800.000 thương binh và hơn 300.000 người có con
                            đẻ bị
                            nhiễm chất đọc da cam</span>
                        <span style="margin-left: 250px; color: rgb(204, 238, 136);">
                            "Tiễn con đi với hình hài đầy đủ<br>Đón con về đã hóa thành đất nước"
                        </span>
                    </p>
                </div>
                <div class="ss3-box">
                    <img src="./images/130419ha45.jpg" alt="">
                    <img class="wow fadeInLeftO" src="./images/130419ha45.jpg" alt="">
                    <p>
                        Tất cả không chỉ đánh đổi bằng máu, mà còn là những nỗi đau âm thầm cho đến tận ngày nay
                    </p>
                </div>
                <div class="ss3-box-b">
                    <p
                        style="margin-top: 100px;margin-left: 200px;font-size: 22px; color: rgba(255, 255, 255, 0.874);text-shadow: 5px 5px 8px #ffc400cf;">
                        "Không có gì quý hơn độc lập, tự do..."</p>
                    <img class="wow fadeInRightO" src="./images/LanhDao/Bac-Ho.png" alt="Bac-Ho">
                    <img style="position: absolute;z-index: -1;left:0;height:100%; opacity: 0.7;" src="./images/hinh-nen-co-viet-nam-cho-may-tinh-8.png" alt="Bac-Ho">
                </div>
            </div>
            <div class="ss3-r">
                <img src="./images/chim-bo-cau.png">

                <div class="text-r">
                    <button class="pause" id="audioSs3">
                        Play
                    </button>
                    <p style="text-indent: 16px;" class="wow animated" id="textSs3"></p>
                </div>

            </div>
        </div>
   `
function type3(textSs3) {
    if (i < textToType.length && isPlay) {
        textSs3.textContent += textToType[i];
        i++;
        setTimeout(() => { type3(textSs3) }, 50);
    } else {
        textSs3.style.borderRight = 'none';
    }
}


function type() {
    if (isInitialPhase) {
        if (isTyping) {
            if (index < initialText.length) {
                currentText += initialText[index];
                textElement.textContent = currentText;
                index++;
                setTimeout(type, 100);
            } else {
                isTyping = false;
                setTimeout(type, 2000);
            }
        } else {
            if (index > 0) {
                currentText = currentText.slice(0, -1);
                textElement.textContent = currentText;
                index--;
                setTimeout(type, 50);
            } else {
                isInitialPhase = false;
                isTyping = true;
                index = 0;
                currentText = '';
                setTimeout(type, 500);
            }
        }
    } else {
        if (isTyping) {
            if (index < finalText.length) {
                currentText += finalText[index];
                textElement.textContent = currentText;
                index++;
                setTimeout(type, 100);
            } else {
                isTyping = false;
                setTimeout(type, 2000);
            }
        } else {
            if (index > 0) {
                currentText = currentText.slice(0, -1);
                textElement.textContent = currentText;
                index--;
                setTimeout(type, 50);
            } else {
                // Reset to start the cycle again
                isInitialPhase = true;
                isTyping = true;
                index = 0;
                currentText = '';
                textElement.classList.add('typing-text');
                setTimeout(type, 500);
            }
        }
    }
}

setTimeout(type, 1500);


txtRBox.addEventListener('animationend', () => { txtRBox.classList.remove('none-to'); txtRBox.style.animation = '' })


let hasChanged = false;
let isSection1 = true
let isSection2 = false
let isSection3 = false
let isSection4 = false
let isSection5 = false
function checkSs() {
    if (window.scrollY == window.innerHeight && isSection1) {
        isSection1 = false
        isSection2 = true
    }
    if (window.scrollY < window.innerHeight && isSection2) {
        isSection1 = true
        isSection2 = false
    }


}
window.addEventListener('scroll', () => {
    if (window.scrollY == window.innerHeight && isSection4) {
        isSection5 = true
        isSection4 = false
    }
    if (window.scrollY < window.innerHeight && isSection5) {
        isSection4 = true
        isSection5 = false
    }
})
const imgTextA = document.querySelector('.text-two-l-a')
const imgTextB = document.querySelector('.text-two-l-b')
const imgTag = document.querySelectorAll('.painImg-l > img');
const divTag = document.querySelectorAll('.painImg-l > div');
imgTag[1].addEventListener('animationend',() => { imgTag[1].style.animation = '' })
imgTag[2].addEventListener('animationend',() => { imgTag[2].style.animation = '' })
imgTextA.addEventListener('animationend', () => { imgTextA.style.animation = '' })
imgTextB.addEventListener('animationend', () => { imgTextB.style.animation = '' })
function setOutText() {
    imgTextA.classList.remove('fadeInRight')
    imgTextA.classList.add('fadeOutRight')

    document.querySelector('.text-two-l-b').classList.remove('fadeInLeft')
    imgTextB.classList.add('fadeOutLeft')
    imgTextA.innerHTML = `<div class="bgr-img-l"><img src="./images/background-giay-bao-cu-dep-nhat_080332437.jpg" alt="bgr">
        </div>
       <p>
            <span>Tổng Bí thư Lê Duẩn:</span><br> "Chúng ta chào mừng Tổ quốc vinh quang của chúng ta từ nay
          vĩnh viến thoát khỏi ách nô dịch của nước ngoài, vĩnh viễn thoát khỏi họa chia cắt, chào mừng
           non sông gấm vốc Việt Nam liền một dải".
        </p>
        <p>
           <span>Phóng viên Don North (ABC News):</span><br>"Khi chiếc xe tăng lao qua cánh cổng sắt, tôi
             biết mình đang chứng kiến một giây phút lịch sử không chỉ của Việt Nam mà của cả thế giới".
         </p>`
    imgTextB.innerHTML = `<div class="bgr-img-l"><img src="./images/background-giay-bao-cu-dep-nhat_080332437.jpg" alt="bgr">
        </div>
        <p>
            <span>Đại tướng Võ Nguyên Giáp:</span><br>"Ngày toàn thắng 30 tháng 4 năm 1975 đi vào lịch sử
            như một sự kết thúc chiến lược vô song. Tổ quốc ta hoàn toàn đọc lập, thống nhất".
        </p>
        <p>
            <span>Đại tướng Lê Đức Anh:</span><br>"Không chỉ có xe tăng vào Dinh, mà cả 5 hướng, cả lực
            lượng tại chổ, đều cùng một lúc đội bão lửa vào sào huyệt cuối cùng của kẻ địch".
        </p>
        <p>
            <span>Hãng Reuters(Anh):</span><br>"Khi chiếc cổng sắt tại Dinh Độc Lập bị xe tăng Quân Giải
            phóng húc đổ... cờ ba sọc rơi xuống đất, cờ Giải phóng tung bay từ tầng hai"
        </p>`


    imgTag[1].classList.remove('fadeInRight')
    imgTag[1].classList.add('fadeOutRight')
    imgTag[2].classList.remove('fadeInLeft')
    imgTag[2].classList.add('fadeOutLeft')
    divTag[0].classList.remove('dt-vtd')
    divTag[1].classList.remove('dt-ltt')
    setTimeout(() => {
            imgTag[1].classList.remove('fadeOutRight')
    imgTag[2].classList.remove('fadeOutLeft')
        imgTextA.classList.remove('fadeOutRight')
        imgTextA.classList.add('fadeInRight')

        imgTextB.classList.remove('fadeOutLeft')
        imgTextB.classList.add('fadeInLeft')

        imgTag[1].src = './images/LanhDao/Dai-tuong-Vo-Nguyen-Giáp.png'
        imgTag[2].src = './images/LanhDao/Tong-bi-thu-Le-Duan.png'
        imgTag[2].style.height = '20%';
        imgTag[2].style.bottom = '20%';
        imgTag[1].classList.add('fadeInRight')
        imgTag[2].classList.add('fadeInLeft')
        divTag[0].classList.add('dt-vng')
        divTag[1].classList.add('tbt-ld')
    }, 900)

}
// function setInText(){}
function setSs4() {

    isSection3 = false
    document.getElementById('titleH1').style.animation = ''
    document.querySelector('#text-r-box').classList.add('to-none')
    txtRBox.addEventListener('animationend', () => { txtRBox.classList.remove('to-none'); txtRBox.style.animation = '' })
    document.querySelector('#titleH1').classList.remove('fadeInLeft')
    document.querySelector('#titleH1').classList.add('fadeOutRight');
    setOutText()
    setTimeout(() => {
        document.getElementsByClassName('painImg-r')[0].innerHTML = `<h1 class="wow animated fadeInLeft" id="titleH1">
                       CHÍNH QUYỀN SÀI GÒN ĐẦU HÀNG VÔ ĐIỀU KIỆN<br>[30/4/1975]
                    </h1>`;
    }, 800);
    setTimeout(() => {
        document.querySelector('#text-r-box').classList.add('none-to')
        document.getElementById('text-r-box').innerHTML = section3
        txtRBox.addEventListener('animationend', () => { txtRBox.classList.remove('none-to'); txtRBox.style.animation = '' })
        isSection4 = true
    }, 1000);
    setTimeout(() => {

        isSection2 = false
        const sections = document.querySelectorAll('body > section');
        const thirdSection = sections[2];
        thirdSection.classList.add('section-three')
        thirdSection.innerHTML = section4


        const audio = document.querySelector("#myAudio");
        const playButton = document.querySelector("#audioSs3");
        let isAudio = false
        const textSs3 = document.getElementById('textSs3');



        if (audio && playButton) {
            playButton.addEventListener("click", function () {
                if (!isAudio) {
                    audio.play();
                    playButton.textContent = 'Pause'
                    isPlay = true
                    isAudio = true
                    type3(textSs3)
                } else {
                    audio.pause();
                    playButton.textContent = 'Play'
                    isAudio = false
                    isPlay = false
                }

            });
            audio.addEventListener("ended", function () {
                playButton.textContent = 'Play';
                isAudio = false;
                isPlay = false;
            });
        }

    }, 1000)
}

function returnSs3() {
    isSection4 = false
    document.querySelector('.section-three').innerHTML = ''
    document.querySelector('.section-three').classList.remove('section-three')
    document.getElementById('titleH1').style.animation = ''
    document.querySelector('#text-r-box').classList.add('to-none')
    txtRBox.addEventListener('animationend', () => { txtRBox.classList.remove('to-none'); txtRBox.style.animation = '' })
    document.querySelector('#titleH1').classList.remove('fadeInLeft')
    document.querySelector('#titleH1').classList.add('fadeOutRight');
    setTimeout(() => {
        document.getElementsByClassName('painImg-r')[0].innerHTML = `<h1 class="wow fadeInLeft" id="titleH1">
                        TỔNG TIẾN CÔNG SÀI GÒN,
VÒNG VÂY NGÀY CẢNG SIẾT CHẶT<br>[29/4/1975]
                    </h1>`;
    }, 800);
    setTimeout(() => {
        document.querySelector('#text-r-box').classList.add('none-to')
        document.getElementById('text-r-box').innerHTML = section2_New
        txtRBox.addEventListener('animationend', () => { txtRBox.classList.remove('none-to'); txtRBox.style.animation = '' })
    }, 1000);

    setTimeout(() => {
        isSection3 = true
    }, 1000);
}

function returnSs2() {
    isSection3 = false


    document.querySelector('#text-r-box').classList.add('to-none')
    txtRBox.addEventListener('animationend', () => { txtRBox.classList.remove('to-none'); txtRBox.style.animation = '' })
    document.querySelector('#titleH1').classList.remove('fadeInLeft')
    document.querySelector('#titleH1').classList.add('fadeOutRight');
    setTimeout(() => {
        document.getElementsByClassName('painImg-r')[0].innerHTML = `<h1 class="wow animated fadeInLeft" id="titleH1">
                        TIẾN CÔNG BAO BÂY, CÔ LẬP SÀI GÒN<br>[26 - 28/4/1975]
                    </h1>`;
    }, 800);
    setTimeout(() => {
        document.querySelector('#text-r-box').classList.add('none-to')
        document.getElementById('text-r-box').innerHTML = section2_Old
        txtRBox.addEventListener('animationend', () => { txtRBox.classList.remove('none-to'); txtRBox.style.animation = '' })
    }, 1000);
    setTimeout(() => {
        document.querySelector('body > section').classList.add('section-one')
        window.scrollTo({
            top: window.innerHeight,
            left: 0,
            behavior: 'instant'
        });
        document.querySelector('.section-one').innerHTML = section1
        isSection2 = true
    }, 1000);
}


window.addEventListener('wheel', (event) => {
    checkSs()
    if (isSection2 && event.deltaY > 0) {
        isSection2 = false
        document.getElementById('titleH1').style.animation = ''
        if (document.querySelector('.section-one')) {
            document.querySelector('.section-one').innerHTML = ''
            document.querySelector('.section-one').classList.remove('section-one')
        }
        document.querySelector('#text-r-box').classList.add('to-none')
        txtRBox.addEventListener('animationend', () => { txtRBox.classList.remove('to-none'); txtRBox.style.animation = '' })
        document.querySelector('#titleH1').classList.remove('fadeInLeft')
        document.querySelector('#titleH1').classList.add('fadeOutRight');
        setTimeout(() => {
            document.getElementsByClassName('painImg-r')[0].innerHTML = `<h1 class="wow fadeInLeft" id="titleH1">
                        TỔNG TIẾN CÔNG SÀI GÒN,
VÒNG VÂY NGÀY CẢNG SIẾT CHẶT<br>[29/4/1975]
                    </h1>`;
        }, 800);
        setTimeout(() => {
            document.querySelector('#text-r-box').classList.add('none-to')
            document.getElementById('text-r-box').innerHTML = section2_New
            txtRBox.addEventListener('animationend', () => { txtRBox.classList.remove('none-to'); txtRBox.style.animation = '' })
        }, 1000);
        setTimeout(() => {
            isSection3 = true
        }, 1000);
    }
    if (window.scrollY == 0 && event.deltaY < 0 && isSection3) { returnSs2() }
    if (window.scrollY == 0 && event.deltaY > 0 && isSection3) { setSs4() }
    if (window.scrollY == 0 && event.deltaY < 0 && isSection4) { returnSs3() }
})


let btnNextOne = document.getElementById("section-one-next")
btnNextOne.addEventListener('click', () => {
    window.scrollTo(0, window.innerHeight);
})
