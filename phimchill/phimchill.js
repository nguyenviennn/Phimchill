$(document).ready(function () {
    $('.list').click(function () {
        $('.menu').slideToggle('flast');
    });
    $('.fa-search').click(function () {
        $('#search').show();
        $('.list').hide();
        $('.logo').hide();
        $('.fa-times').show();
        $('.search-box').addClass('width-input');
        $('#search').addClass('width-input');
        $('.fa-search').hide();
    });
    $('.fa-times').click(function () {
        $('.list').show();
        $('.logo').show();
        $('.fa-search').show();
        $('.search-box').removeClass('width-input');
        $('#search').removeClass('width-input');
        $('.fa-times').hide();
        $('#search').hide();
    })
    // ----------menu

    var listmovie = [{
            'img': 'https://img.phimchill.tv/images/film/ki-niem-harry-potter-20-nam-tro-lai-hogwarts.jpg',
            'title': 'Kỉ Niệm Harry Potter 20 Năm: Trở Lại Hogwarts',
            'compete': 'HD|Vietsub',
            'category': '1',
            'year': '2021'
        },
        {
            'img': 'https://img.phimchill.tv/images/film/ma-tran-4-hoi-sinh.jpg',
            'title': 'Ma Trận 4: Hồi Sinh',
            'compete': 'HD Vietsub',
            'category': '2',
            'year': '2021'
        },
        {
            'img': 'https://img.phimchill.tv/images/film/hawkeye.jpg',
            'title': 'Siêu Anh Hùng Hawkeye',
            'compete': 'HD Vietsub',
            'category': '3',
            'year': '2021'
        },
        {
            'img': 'https://img.phimchill.tv/images/film/banh-xe-thoi-gian.jpg',
            'title': 'Bánh Xe Thời Gian',
            'compete': 'HD Vietsub',
            'category': '4',
            'year': '2021'
        },
        {
            'img': 'https://img.phimchill.tv/images/film/tho-san-quai-vat-phan-2.jpg',
            'title': 'Thợ Săn Quái Vật (Phần 2)',
            'compete': 'HD Vietsub',
            'category': '5',
            'year': '2021'
        },
        {
            'img': 'https://img.phimchill.tv/images/film/khong-the-tha-thu.jpg',
            'title': 'Không Thể Tha Thứ',
            'compete': 'HD Vietsub',
            'category': '1',
            'year': '2021'
        },
        {
            'img': 'https://img.phimchill.tv/images/film/hanh-phuc-chung-cu-co-doc.jpg',
            'title': 'Hạnh Phúc: Chung Cư Có Độc',
            'compete': 'HD Vietsub',
            'category': '6',
            'year': '2021'
        },
        {
            'img': 'https://img.phimchill.tv/images/film/diem-cuc-han.jpg',
            'title': 'Điểm Cực Hạn',
            'compete': 'HD Vietsub',
            'category': '2',
            'year': '2020'
        },
        {
            'img': 'https://img.phimchill.tv/images/film/phi-vu-trieu-do-phan-5.jpg',
            'title': 'Phi Vụ Triệu Đô (Phần 5)',
            'compete': 'HD Vietsub',
            'category': '5',
            'year': '2021'
        },
        {
            'img': 'https://img.phimchill.tv/images/film/ma-bup-be-chucky.jpg',
            'title': 'Ma Búp Bê Chucky',
            'compete': 'Hoàn Tất(8/8)',
            'category': '4',
            'year': '2021'
        },
        {
            'img': 'https://img.phimchill.tv/images/film/suc-manh-cua-loai-cho.jpg',
            'title': 'Sức Mạnh Của Loài Chó',
            'compete': 'HD Vietsub',
            'category': '3',
            'year': '2021'
        },
        {
            'img': 'https://img.phimchill.tv/images/film/tran-chien-cuoi-cung.jpg',
            'title': 'Trận Chiến Cuối Cùng',
            'compete': 'HD Vietsub',
            'category': '6',
            'year': '2021'
        },
        {
            'img': 'https://img.phimchill.tv/images/film/luyen-mo.jpg',
            'title': 'Luyến Mộ',
            'compete': 'HD Vietsub',
            'category': '2',
            'year': '2021'
        },
        {
            'img': 'https://img.phimchill.tv/images/film/nguoi-hung-tia-chop-phan-8.jpg',
            'title': 'Người Hùng Tia Chớp Phần 8',
            'compete': 'HD Vietsub',
            'category': '3',
            'year': '2022'
        },
        {
            'img': 'https://img.phimchill.tv/images/film/venom-2-doi-mat-tu-thu.jpg',
            'title': 'Venom 2 : Đối mặt tử thù',
            'compete': '1080p WebDL Vietsub',
            'category': '2',
            'year': '2011'
        },
        {
            'img': 'https://img.phimchill.tv/images/info/hellbounds.jpg',
            'title': 'Bản Án Từ Địa Ngục',
            'compete': 'Hoàn Tất (6/6)',
            'category': '3',
            'year': '2018'
        },
        {
            'img': 'https://img.phimchill.tv/images/film/arcane-lien-minh-huyen-thoai.jpg',
            'title': 'Arcane (Liên Minh Huyền Thoại)',
            'compete': 'Hoàn Tất (9/9)',
            'category': '1',
            'year': '2021'
        },
        {
            'img': 'https://img.phimchill.tv/images/film/lenh-truy-na-do.jpg',
            'title': 'Lệnh Truy Nã Đỏ',
            'compete': 'HD Vietsub',
            'category': '3',
            'year': '2015'
        },
        {
            'img': 'https://img.phimchill.tv/images/film/khong-phai-luc-chet-2021.jpg',
            'title': 'Không Phải Lúc Chết',
            'compete': 'HD Vietsub',
            'category': '2',
            'year': '2021'
        },
        {
            'img': 'https://img.phimchill.tv/images/film/gia-nam-truyen-mo-nam-chi.jpg',
            'title': 'Gia Nam Truyện/ Mộ Nam Chi',
            'compete': 'HD Vietsub',
            'category': '4',
            'year': '2021'
        },
        {
            'img': 'https://img.phimchill.tv/images/film/chi-la-quan-he-hon-nhan.jpg',
            'title': 'Chỉ Là Quan Hệ Hôn Nhân',
            'compete': 'HD Vietsub',
            'category': '5'
        },
        {
            'img': 'https://img.phimchill.tv/images/film/hiem-nguy.jpg',
            'title': 'Hiểm Nguy',
            'compete': 'HD Vietsub',
            'category': '4',
            'year': '2021'
        },
        {
            'img': 'https://img.phimchill.tv/images/film/lao-gia-finch.jpg',
            'title': 'Lão Già Finch',
            'compete': 'HD Vietsub',
            'category': '3',
            'year': '2021'
        },
        {
            'img': 'https://img.phimchill.tv/images/film/sang-nhu-trang-trong-may.jpg',
            'title': 'Sáng Như Trăng Trong Mây',
            'compete': 'Tập 34 Vietsub',
            'category': '4',
            'year': '2021'
        },
        {
            'img': 'https://img.phimchill.tv/images/film/vuc-sau-thu-han.jpg',
            'title': 'Vực Sâu Thù Hận',
            'compete': 'HD Vietsub',
            'category': '2',
            'year': '2017'
        },
    ]

    var addmovie = "";
    listmovie.forEach(function (movie) {
        addmovie += "<div class='slide'><div class='img'><a href='#'><img class='img3' src='" + movie.img + "'alt=''></a><span>" + movie.compete + "</span><div class='title-movie'><a href='#'><p>" + movie.title + "</p></a></div><div class='play'><a href='#'><i class='fas fa-play'></a></i></div></div></div>";
    });
    $('.list-movie').html(addmovie);
    $('.list-movie').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 5,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: '<i class="fas fa-caret-left slick-prev"></i>',
        nextArrow: '<i class="fas fa-caret-right slick-next"></i>',
        responsive: [{
                breakpoint: 769,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 321,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
        ],
    });;

    var movienew = [{
            'img': 'https://img.phimchill.tv/images/film/gia-nam-truyen-mo-nam-chi.jpg',
            'title': 'Gia Nam Truyện/ Mộ Nam Chi',
            'compete': 'HD Vietsub',
            'category': '4',
            'year': '2021'
        },
        {
            'img': 'https://img.phimchill.tv/images/film/chi-la-quan-he-hon-nhan.jpg',
            'title': 'Chỉ Là Quan Hệ Hôn Nhân',
            'compete': 'HD Vietsub',
            'category': '5'
        },
        {
            'img': 'https://img.phimchill.tv/images/film/hiem-nguy.jpg',
            'title': 'Hiểm Nguy',
            'compete': 'HD Vietsub',
            'category': '4',
            'year': '2021'
        },
        {
            'img': 'https://img.phimchill.tv/images/film/lao-gia-finch.jpg',
            'title': 'Lão Già Finch',
            'compete': 'HD Vietsub',
            'category': '3',
            'year': '2021'
        },
        {
            'img': 'https://img.phimchill.tv/images/film/sang-nhu-trang-trong-may.jpg',
            'title': 'Sáng Như Trăng Trong Mây',
            'compete': 'Tập 34 Vietsub',
            'category': '4',
            'year': '2021'
        },
        {
            'img': 'https://img.phimchill.tv/images/film/vuc-sau-thu-han.jpg',
            'title': 'Vực Sâu Thù Hận',
            'compete': 'HD Vietsub',
            'category': '2',
            'year': '2017'
        },
        {
            'img': 'https://img.phimchill.tv/images/film/arcane-lien-minh-huyen-thoai.jpg',
            'title': 'Arcane (Liên Minh Huyền Thoại)',
            'compete': 'Hoàn Tất (9/9)',
            'category': '1',
            'year': '2021'
        },
        {
            'img': 'https://img.phimchill.tv/images/film/lenh-truy-na-do.jpg',
            'title': 'Lệnh Truy Nã Đỏ',
            'compete': 'HD Vietsub',
            'category': '3',
            'year': '2015'
        },
        {
            'img': 'https://img.phimchill.tv/images/film/khong-phai-luc-chet-2021.jpg',
            'title': 'Không Phải Lúc Chết',
            'compete': 'HD Vietsub',
            'category': '2',
            'year': '2021'
        },
    ]
    var addnewmovie = "";
    movienew.forEach(function (movie1) {
        addnewmovie += "<div class='col-lg-4 col-md-6 col-6'><div class='slide'><div class='img img1'><a href='#'><img class='img3' src='" + movie1.img + "'alt=''></a><span>" + movie1.compete + "</span><div class='title-movie'><a href='#'><p>" + movie1.title + "</p></a></div><div class='play'><a href='#'><i class='fas fa-play'></a></i></div></div></div></div>";
    });
    // console.log(addnewmovie);
    $('#new-update').html(addnewmovie);

    var chieurap = [{
            'img': 'https://img.phimchill.tv/images/film/ma-tran-4-hoi-sinh.jpg',
            'title': 'Ma Trận 4: Hồi Sinh',
            'compete': 'HD Vietsub',
            'category': '2',
            'year': '2021'
        },
        {
            'img': 'https://img.phimchill.tv/images/film/hawkeye.jpg',
            'title': 'Siêu Anh Hùng Hawkeye',
            'compete': 'HD Vietsub',
            'category': '3',
            'year': '2021'
        },
        {
            'img': 'https://img.phimchill.tv/images/film/banh-xe-thoi-gian.jpg',
            'title': 'Bánh Xe Thời Gian',
            'compete': 'HD Vietsub',
            'category': '4',
            'year': '2021'
        },
        {
            'img': 'https://img.phimchill.tv/images/film/phi-vu-trieu-do-phan-5.jpg',
            'title': 'Phi Vụ Triệu Đô (Phần 5)',
            'compete': 'HD Vietsub',
            'category': '5',
            'year': '2021'
        },
        {
            'img': 'https://img.phimchill.tv/images/film/ma-bup-be-chucky.jpg',
            'title': 'Ma Búp Bê Chucky',
            'compete': 'Hoàn Tất(8/8)',
            'category': '4',
            'year': '2021'
        },
        {
            'img': 'https://img.phimchill.tv/images/film/suc-manh-cua-loai-cho.jpg',
            'title': 'Sức Mạnh Của Loài Chó',
            'compete': 'HD Vietsub',
            'category': '3',
            'year': '2021'
        },
        {
            'img': 'https://img.phimchill.tv/images/film/chi-la-quan-he-hon-nhan.jpg',
            'title': 'Chỉ Là Quan Hệ Hôn Nhân',
            'compete': 'HD Vietsub',
            'category': '5'
        },
        {
            'img': 'https://img.phimchill.tv/images/film/hiem-nguy.jpg',
            'title': 'Hiểm Nguy',
            'compete': 'HD Vietsub',
            'category': '4',
            'year': '2021'
        },
        {
            'img': 'https://img.phimchill.tv/images/film/lao-gia-finch.jpg',
            'title': 'Lão Già Finch',
            'compete': 'HD Vietsub',
            'category': '3',
        }
    ]
    var addchieurap = "";
    chieurap.forEach(function (movie2) {
        addchieurap += "<div class='col-lg-4 col-md-6 col-6'><div class='slide'><div class='img img1'><a href='#'><img class='img3' src='" + movie2.img + "'alt=''></a><span>" + movie2.compete + "</span><div class='title-movie'><a href='#'><p>" + movie2.title + "</p></a></div><div class='play'><a href='#'><i class='fas fa-play'></a></i></div></div></div></div>";
    });
    $('#chieu-rap').html(addchieurap);

    var phimbo = [{
            'img': 'https://img.phimchill.tv/images/film/dia-nguc-doc-than.jpg',
            'title': 'Địa Ngục Độc Thân',
            'compete': 'HD Vietsub',
            'category': '2',
            'year': '2017'
        },
        {
            'img': 'https://img.phimchill.tv/images/film/than-tuong-cuoc-dao-chinh.jpg',
            'title': 'Thần Tượng: Cuộc Đảo Chính',
            'compete': 'HD Vietsub',
            'category': '5',
            'year': '2019'
        },
        {
            'img': 'https://img.phimchill.tv/images/film/neu-am-thanh-co-ky-uc.jpg',
            'title': 'Nếu Âm Thanh Có Ký Ức',
            'compete': 'HD Vietsub',
            'category': '3',
            'year': '2018'
        },
        {
            'img': 'https://img.phimchill.tv/images/film/mua-khong-roi-tren-vung-dat-vo-than.jpg',
            'title': 'Mưa Không Rơi Trên Vùng Đất Vô Thần',
            'compete': 'HD Vietsub',
            'category': '3',
            'year': '2022'
        },
        {
            'img': 'https://img.phimchill.tv/images/film/noi-tinh-yeu-day-song.jpg',
            'title': 'Nơi Tình Yêu Dậy Sóng',
            'compete': 'HD Vietsub',
            'category': '3',
            'year': '2017'
        },
        {
            'img': 'https://img.phimchill.tv/images/film/tro-choi-san-lung-ke-ac.jpg',
            'title': 'Trò Chơi Săn Lùng Kẻ Ác',
            'compete': 'HD Vietsub',
            'category': '2',
            'year': '2020'
        },
        {
            'img': 'https://img.phimchill.tv/images/film/mo-song.jpg',
            'title': 'Mộ Sông',
            'compete': 'HD Vietsub',
            'category': '4',
            'year': '2016'
        },
        {
            'img': 'https://img.phimchill.tv/images/film/sinh-nhat-bat-hanh.jpg',
            'title': 'Sinh Nhật Bất Hạnh',
            'compete': 'HD Vietsub',
            'category': '1',
            'year': '2010'
        },
        {
            'img': 'https://img.phimchill.tv/images/film/rebelde-tuoi-tre-noi-loan.jpg',
            'title': 'Rebelde: Tuổi trẻ nổi loạn',
            'compete': 'HD Vietsub',
            'category': '6',
            'year': '2020'
        }
    ]

    var addphimbo = "";
    phimbo.forEach(function (phimbo) {
        addphimbo += "<div class='col-lg-4 col-md-6 col-6'><div class='slide'><div class='img img1'><a href='#'><img class='img3' src='" + phimbo.img + "'alt=''></a><span>" + phimbo.compete + "</span><div class='title-movie'><a href='#'><p>" + phimbo.title + "</p></a></div><div class='play'><a href='#'><i class='fas fa-play'></a></i></div></div></div></div>";
    });
    $('#phim-bo').html(addphimbo);

    var phimthinhhanh = [{
            'img': 'https://img.phimchill.tv/images/film/ki-niem-harry-potter-20-nam-tro-lai-hogwarts.jpg',
            'title': 'Kỉ Niệm Harry Potter 20 Năm: Trở Lại Hogwarts',
            'compete': 'HD|Vietsub',
            'category': '1',
            'year': '2021'
        },
        {
            'img': 'https://img.phimchill.tv/images/film/ma-tran-4-hoi-sinh.jpg',
            'title': 'Ma Trận 4: Hồi Sinh',
            'compete': 'HD Vietsub',
            'category': '2',
            'year': '2021'
        },
        {
            'img': 'https://img.phimchill.tv/images/film/hawkeye.jpg',
            'title': 'Siêu Anh Hùng Hawkeye',
            'compete': 'HD Vietsub',
            'category': '3',
            'year': '2021'
        },
        {
            'img': 'https://img.phimchill.tv/images/film/banh-xe-thoi-gian.jpg',
            'title': 'Bánh Xe Thời Gian',
            'compete': 'HD Vietsub',
            'category': '4',
            'year': '2021'
        },
        {
            'img': 'https://img.phimchill.tv/images/film/tho-san-quai-vat-phan-2.jpg',
            'title': 'Thợ Săn Quái Vật (Phần 2)',
            'compete': 'HD Vietsub',
            'category': '5',
            'year': '2021'
        },
        {
            'img': 'https://img.phimchill.tv/images/film/khong-the-tha-thu.jpg',
            'title': 'Không Thể Tha Thứ',
            'compete': 'HD Vietsub',
            'category': '1',
            'year': '2021'
        },
    ]
    var addphimthinhhanh = "";
    phimthinhhanh.forEach(function (phimthinhhanh) {
        addphimthinhhanh += "<div class='col-lg-4 col-md-6 col-6'><div class='slide'><div class='img img1'><a href='#'><img class='img3' src='" + phimthinhhanh.img + "'alt=''></a><span>" + phimthinhhanh.compete + "</span><div class='title-movie'><a href='#'><p>" + phimthinhhanh.title + "</p></a></div><div class='play'><a href='#'><i class='fas fa-play'></a></i></div></div></div></div>";
    });
    $('#phim-thinh-hanh').html(addphimthinhhanh);

    var phimsapchieu = [{
            'img': 'https://img.phimchill.tv/images/film/ma-bup-be-chucky.jpg',
            'title': 'Ma Búp Bê Chucky',
            'compete': 'Hoàn Tất(8/8)',
            'category': '4',
            'year': '2021'
        },
        {
            'img': 'https://img.phimchill.tv/images/film/suc-manh-cua-loai-cho.jpg',
            'title': 'Sức Mạnh Của Loài Chó',
            'compete': 'HD Vietsub',
            'category': '3',
            'year': '2021'
        },
        {
            'img': 'https://img.phimchill.tv/images/film/tran-chien-cuoi-cung.jpg',
            'title': 'Trận Chiến Cuối Cùng',
            'compete': 'HD Vietsub',
            'category': '6',
            'year': '2021'
        },
        {
            'img': 'https://img.phimchill.tv/images/film/luyen-mo.jpg',
            'title': 'Luyến Mộ',
            'compete': 'HD Vietsub',
            'category': '2',
            'year': '2021'
        },
        {
            'img': 'https://img.phimchill.tv/images/film/nguoi-hung-tia-chop-phan-8.jpg',
            'title': 'Người Hùng Tia Chớp Phần 8',
            'compete': 'HD Vietsub',
            'category': '3',
            'year': '2022'
        },
        {
            'img': 'https://img.phimchill.tv/images/film/venom-2-doi-mat-tu-thu.jpg',
            'title': 'Venom 2 : Đối mặt tử thù',
            'compete': '1080p WebDL Vietsub',
            'category': '2',
            'year': '2011'
        },
        {
            'img': 'https://img.phimchill.tv/images/info/hellbounds.jpg',
            'title': 'Bản Án Từ Địa Ngục',
            'compete': 'Hoàn Tất (6/6)',
            'category': '3',
            'year': '2018'
        },
        {
            'img': 'https://img.phimchill.tv/images/film/arcane-lien-minh-huyen-thoai.jpg',
            'title': 'Arcane (Liên Minh Huyền Thoại)',
            'compete': 'Hoàn Tất (9/9)',
            'category': '1',
            'year': '2021'
        },
        {
            'img': 'https://img.phimchill.tv/images/film/lenh-truy-na-do.jpg',
            'title': 'Lệnh Truy Nã Đỏ',
            'compete': 'HD Vietsub',
            'category': '3',
            'year': '2015'
        },
        {
            'img': 'https://img.phimchill.tv/images/film/khong-phai-luc-chet-2021.jpg',
            'title': 'Không Phải Lúc Chết',
            'compete': 'HD Vietsub',
            'category': '2',
            'year': '2021'
        },
        {
            'img': 'https://img.phimchill.tv/images/film/gia-nam-truyen-mo-nam-chi.jpg',
            'title': 'Gia Nam Truyện/ Mộ Nam Chi',
            'compete': 'HD Vietsub',
            'category': '4',
            'year': '2021'
        },
        {
            'img': 'https://img.phimchill.tv/images/film/chi-la-quan-he-hon-nhan.jpg',
            'title': 'Chỉ Là Quan Hệ Hôn Nhân',
            'compete': 'HD Vietsub',
            'category': '5'
        },
        {
            'img': 'https://img.phimchill.tv/images/film/nguoi-hung-tia-chop-phan-8.jpg',
            'title': 'Người Hùng Tia Chớp Phần 8',
            'compete': 'HD Vietsub',
            'category': '3',
            'year': '2022'
        },
        {
            'img': 'https://img.phimchill.tv/images/film/venom-2-doi-mat-tu-thu.jpg',
            'title': 'Venom 2 : Đối mặt tử thù',
            'compete': '1080p WebDL Vietsub',
            'category': '2',
            'year': '2011'
        },
        {
            'img': 'https://img.phimchill.tv/images/info/hellbounds.jpg',
            'title': 'Bản Án Từ Địa Ngục',
            'compete': 'Hoàn Tất (6/6)',
            'category': '3',
            'year': '2018'
        },
        {
            'img': 'https://img.phimchill.tv/images/film/arcane-lien-minh-huyen-thoai.jpg',
            'title': 'Arcane (Liên Minh Huyền Thoại)',
            'compete': 'Hoàn Tất (9/9)',
            'category': '1',
            'year': '2021'
        },
        {
            'img': 'https://img.phimchill.tv/images/film/lenh-truy-na-do.jpg',
            'title': 'Lệnh Truy Nã Đỏ',
            'compete': 'HD Vietsub',
            'category': '3',
            'year': '2015'
        },
        {
            'img': 'https://img.phimchill.tv/images/film/khong-phai-luc-chet-2021.jpg',
            'title': 'Không Phải Lúc Chết',
            'compete': 'HD Vietsub',
            'category': '2',
            'year': '2021'
        },
        {
            'img': 'https://img.phimchill.tv/images/film/gia-nam-truyen-mo-nam-chi.jpg',
            'title': 'Gia Nam Truyện/ Mộ Nam Chi',
            'compete': 'HD Vietsub',
            'category': '4',
            'year': '2021'
        },
        {
            'img': 'https://img.phimchill.tv/images/film/chi-la-quan-he-hon-nhan.jpg',
            'title': 'Chỉ Là Quan Hệ Hôn Nhân',
            'compete': 'HD Vietsub',
            'category': '5'
        },
        {
            'img': 'https://img.phimchill.tv/images/film/hiem-nguy.jpg',
            'title': 'Hiểm Nguy',
            'compete': 'HD Vietsub',
            'category': '4',
            'year': '2021'
        },
        {
            'img': 'https://img.phimchill.tv/images/film/lao-gia-finch.jpg',
            'title': 'Lão Già Finch',
            'compete': 'HD Vietsub',
            'category': '3',
            'year': '2021'
        },
        {
            'img': 'https://img.phimchill.tv/images/film/sang-nhu-trang-trong-may.jpg',
            'title': 'Sáng Như Trăng Trong Mây',
            'compete': 'Tập 34 Vietsub',
            'category': '4',
            'year': '2021'
        },
        {
            'img': 'https://img.phimchill.tv/images/film/vuc-sau-thu-han.jpg',
            'title': 'Vực Sâu Thù Hận',
            'compete': 'HD Vietsub',
            'category': '2',
            'year': '2017'
        },
    ]
    var addphimsapchieu = "";
    phimsapchieu.forEach(function (phimsapchieu) {
        addphimsapchieu += "<div class='col-lg-2 col-md-4 col-6'><div class='slide'><div class='img img1'><a href='#'><img class='img3'src='" + phimsapchieu.img + "' alt=''></a><span>" + phimsapchieu.compete + "</span><div class='title-movie'><a href='#'><p>" + phimsapchieu.title + "</p></a></div><div class='play'><a href='#'><i class='fas fa-play'></a></i></div></div></div></div>";
    });
    $('#phim-sap-chieu').html(addphimsapchieu);

    var the_loai = '';
    var nam_phat_hanh = '';

    $('.btn-searchmovie').click(function () {
        // the_loai = $('#theloai').val();
        // quoc_gia = $('#quocgia').val();
        // nam_phat_hanh = $('#namphathanh').val();

        // $('#phim-sap-chieu').html('');

        // var addphimsapchieu = "";
        // phimsapchieu.forEach(function (phimsapchieu) {
        //     if (phimsapchieu.category == the_loai) {
        //         addphimsapchieu += "<div class='col-lg-2 col-md-4 col-6'><div class='slide'><div class='img img1'><a href='#'><img class='img3'src='" + phimsapchieu.img + "' alt=''></a><span>" + phimsapchieu.compete + "</span><div class='title-movie'><a href='#'><p>" + phimsapchieu.title + "</p></a></div><div class='play'><a href='#'><i class='fas fa-play'></a></i></div></div></div></div>";
        //     } else if (the_loai == 0) {
        //         addphimsapchieu += "<div class='col-lg-2 col-md-4 col-6'><div class='slide'><div class='img img1'><a href='#'><img class='img3'src='" + phimsapchieu.img + "' alt=''></a><span>" + phimsapchieu.compete + "</span><div class='title-movie'><a href='#'><p>" + phimsapchieu.title + "</p></a></div><div class='play'><a href='#'><i class='fas fa-play'></a></i></div></div></div></div>";
        //     }
        // });


        the_loai = $('#theloai').val();
            quoc_gia = $('#quocgia').val();
            nam_phat_hanh = $('#namphathanh').val();

            $('#phim-sap-chieu').html('');

            var sort = {
                'category': the_loai,
                // 'quoc_gia': '',
                'year': nam_phat_hanh,
                // 'ngon_ngu': '',
                // 'sap_xep': '',
                // 'hinh_thuc': '',
            };

            var addphimsapchieu = "";

            phimsapchieu.forEach(function (phimsapchieu) {
                var sum = 0;
                var check = 0;

                for (var key in sort) {
                    sum++;
                    // console.log(sort[key] + "/" + phimsapchieu.title);
                    
                    if (sort[key] != 0 && phimsapchieu[key] == sort[key]) {
                        check++;
                    } else if (sort[key] == 0) {
                        check++;
                    }
                }
               
                if (check == sum) {
                    addphimsapchieu += "<div class='col-lg-2 col-md-4 col-6'><div class='slide'><div class='img img1'><a href='#'><img class='img3'src='"+phimsapchieu.img+"' alt=''></a><span>"+phimsapchieu.compete+"</span><div class='title-movie'><a href='#'><p>"+phimsapchieu.title+"</p></a></div><div class='play'><a href='#'><i class='fas fa-play'></a></i></div></div></div></div>";
                }
            });

        $('#phim-sap-chieu').html(addphimsapchieu);

    });
});