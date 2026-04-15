// Database Xem Ngày - Bổ sung thêm 10 mục công sở
const DateJobDB = [
    { 
        id: "nghi-viec", 
        name: "Nghỉ việc / Viết đơn", 
        good: "Ngày cực tốt để giải phóng linh hồn. Sếp có thể sẽ khóc nhưng bạn sẽ cười.",
        bad: "Ngày này nghỉ dễ bị quỵt lương hoặc bị HR giữ sổ bảo hiểm lâu. Đợi đi!" 
    },
    { 
        id: "xin-viec", 
        name: "Gửi CV / Phỏng vấn", 
        good: "Vận khí đang lên, nói gì cũng thấy thuyết phục. CV của bạn lấp lánh như vàng.",
        bad: "Ngày này dễ gặp nhà tuyển dụng hắc ám hoặc quên lưu file CV. Bình tĩnh!" 
    },
    { 
        id: "an-uong", 
        name: "Đi ăn với bạn bè", 
        good: "Ăn gì cũng ngon, không lo đau bụng, lại còn dễ được bạn bao.",
        bad: "Dễ gặp quán đông, phục vụ chậm hoặc đến lúc tính tiền thì... quên ví." 
    },
    { 
        id: "pitching", 
        name: "Pitching ý tưởng / Demo", 
        good: "Mồm mép đỡ chân tay. Ý tưởng dù 'điên rồ' vẫn được sếp gật đầu cái rụp.",
        bad: "Máy tính dễ hỏng giữa chừng hoặc sếp đang khó ở. Nên dời sang ngày khác." 
    },
    { 
        id: "sua-bug", 
        name: "Fix bug / Clean code", 
        good: "Tư duy như thần, tìm một phát ra ngay bug 'nghiệp chướng'. Code chạy mượt như lụa.",
        bad: "Sửa 1 bug đẻ ra 10 bug mới. Hôm nay chỉ nên review nhẹ nhàng thôi mày ơi." 
    },
    { 
        id: "doi-luong", 
        name: "Gặp sếp đòi tăng lương", 
        good: "Chỉ số may mắn 100%. Sếp đang vui, tỉ lệ được 'ting ting' thêm số là rất cao.",
        bad: "Dễ bị sếp 'KPI ngược' vào mặt. Đừng dại mà vào phòng sếp lúc này." 
    },
    { 
        id: "team-building", 
        name: "Đi du lịch / Team building", 
        good: "Thời tiết đẹp, đồng nghiệp gắn kết, không có drama. Quẩy hết mình đi!",
        bad: "Dễ gặp mưa hoặc chia đội toàn 'tạ'. Ở nhà đắp chăn cho lành." 
    },
    { 
        id: "mua-may-tinh", 
        name: "Mua máy mới / Thiết bị", 
        good: "Mua được hàng ngon giá hời, không bị dead pixel, dùng 5 năm vẫn chạy tốt.",
        bad: "Dễ mua phải hàng 'dỏm' hoặc vừa mua xong thì shop giảm giá sốc." 
    },
    { 
        id: "hop-hanh", 
        name: "Họp hành cuối tuần", 
        good: "Họp nhanh, kết luận gọn, không ai cãi nhau. Kết thúc sớm để đi nhậu.",
        bad: "Cuộc họp kéo dài vô tận nhưng không giải quyết được gì. Tổn thọ lắm!" 
    },
    { 
        id: "tuyen-quan", 
        name: "Tuyển thêm đệ / Tìm đồng đội", 
        good: "Vớ được 'siêu nhân' gánh team, vừa giỏi vừa ngoan, ít đòi hỏi.",
        bad: "Toàn gặp ứng viên 'hứa thật nhiều thất hứa thật thi' hoặc vừa nhận đã xin nghỉ." 
    },
    { 
        id: "hoc-skill", 
        name: "Học tool mới / Skill mới", 
        good: "Não bộ mở mang, đọc đâu hiểu đó. Sắp thành master đến nơi rồi.",
        bad: "Chữ vào tai này ra tai kia. Hôm nay não đang ở chế độ 'nghỉ dưỡng'." 
    },
    { 
        id: "order-tra-sua", 
        name: "Order trà sữa / Đồ ăn vặt", 
        good: "Săn được mã giảm giá 0 đồng, đồ uống chuẩn vị, shipper đẹp trai.",
        bad: "Đặt xong thì quán báo hết hàng hoặc shipper đi lạc 1 tiếng chưa tới." 
    },
    { 
        id: "don-ban", 
        name: "Dọn dẹp bàn làm việc", 
        good: "Tìm lại được những vật phẩm thất lạc từ đời nào. Không gian thoáng đãng, vận khí lên.",
        bad: "Dọn xong thì mất luôn giấy tờ quan trọng. Cứ để bừa bộn có khi lại hay." 
    }
];
