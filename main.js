const songs = [
  {
    id: 1,
    source: "song-01",
    avatar: "avt-01",
    nameSong: "Xin Đừng Nhấc Máy",
    nameAuthor: "Bray",
    time: "03:44",
    publishDate: "25/09/2022",
    lyrics: `Anh biết là em nói là không muốn gặp anh nữa
        Anh chỉ gọi để hỏi, cơm hôm nay ăn chưa?
        Sao, ăn rồi thì đã húp anh chưa?
        Nếu rồi thì đã nhớ anh chưa?
        Em biết anh là thế
        Mà đã thế em còn suy, em còn nghĩ, em còn trách làm chi?
        Anh biết anh như cục ghèn trong mắt
        Bởi vì em chỉ có ghét vào mi
        Baby nghe anh nói một lần được không?
        Tên anh hiện trên màn hình em có chữ không?
        Nếu em muốn ghét, anh nói trước tụi nó ghét anh ngoài kia cũng phải tốn gần chục nắp
        Vây thì nếu em muốn đêm nay không ngủ,
        Đừng gọi anh daddy, gọi anh ông chủ
        Ngực cong, mông thủ
        Nhặt cây bút chì, when I CU
        If you see me calling
        Xin em không nhấc máy
        Mà nếu như em lỡ nghe rồi thì cho anh xin nốt lần này
        When you see me calling
        Xin em không nhấc máy
        Cause when that Henny hit me, Thì cool boy cũng trở thành lầy
        I'm talking about love,
        I'm talking about you,
        I'm talking about all the things you said you'd wanted us to do,Moet, Rose, Chardannay,
        Khi cần có ngay, oh yeah, ya know me,
        Girl you know I gotta keep it real right now,
        Biết anh có thói quen khi say là kêu vài đào,
        Biết anh không phải công tử nhưng thích tiêu xài hao,
        Fuck all them haters and how they feel right now,
        Nói mấy con bạn em, nếu tụi mày giỏi, thì bạn trai của tụi nó đã là anh rồi,
        I know, I know, baby I’m an asshole,
        But that’s because you the shit though,
        Lọt vào mắt xanh, thì phải biết,
        Như là học sinh tan học, baby, anh không có tiết đâu.
        Bridge (Han Sara):
        Vậy thì sao em phải giữ lại,
        Là vì một ai?
        Quá nhiều lãng phí cho 1 người sai,
        Chẳng còn gì để phải nói,
        Chẳng cần gọi thêm, thất hứa chính là lời khai kẻ gian dối,
        Vậy xin anh đừng nói thêm gì.`,
    timePoint: [
      25, 28, 30, 33, 36, 37, 40, 42, 45, 48, 51, 55, 58, 61, 64, 65, 68, 70,
      76, 78, 81, 85, 88, 90, 98, 101, 104, 106, 109, 111, 117, 120, 122, 123,
      124, 128, 130, 132, 135, 138, 144,
    ], //test
  },
  {
    id: 3,
    source: "song-03",
    avatar: "avt-03",
    nameSong: "Cứu Vãn Kịp Không",
    nameAuthor: "Vương Anh Tú",
    time: "03:26",
    publishDate: "25/09/2022",
    lyrics: `Có lẽ duyên nợ của ta ở kiếp trước
    Giờ đã trả xong nên em rời đi
    Linh cảm em đã có ai rồi cất bước
    Cũng chẳng cản ngăn em được
    Thấy em đang có ai đợi rồi
    Nhiều điều anh vẫn muốn nói
    Em bảo rằng thôi có lẽ em muộn rồi
    Muốn níu tay em lại nhưng con tim anh đang bối rối
    Anh chỉ muốn hỏi em một lời thôi
    Tại sao em thay đổi anh vẫn chưa có câu trả lời
    Lời chia cắt chưa trên môi
    Mà tay đã buông anh rồi
    Nhìn mây trôi mãi anh chỉ mong muốn ta quay lại
    Giờ em lỡ yêu thương ai
    Thì anh chính thức thất bại
    Thật sự trong tim anh giờ chỉ mong
    Hỏi ngọn gió đông cứu vãn kịp không
    Tình cảm anh bao lâu chẳng muốn quên đâu
    Từng yêu dấu khoan trao người sau những thứ ta từng
    Có lẽ duyên nợ của ta ở kiếp trước
    Giờ đã trả xong nên em rời đi
    Linh cảm em đã có ai rồi cất bước
    Cũng chẳng cản ngăn em được
    Thấy em đang có ai đợi rồi
    Nhiều điều anh vẫn muốn nói
    Em bảo rằng thôi có lẽ em muộn rồi
    Muốn níu tay em lại nhưng con tim anh đang bối rối
    Anh chỉ muốn hỏi em một lời thôi
    Tại sao em thay đổi anh vẫn chưa có câu trả lời
    Lời chia cắt chưa trên môi
    Mà tay đã buông anh rồi
    Nhìn mây trôi mãi anh chỉ mong muốn ta quay lại
    Giờ em lỡ yêu thương ai
    Thì anh chính thức thất bại
    Thật sự trong tim anh giờ chỉ mong
    Hỏi ngọn gió đông cứu vãn kịp không
    Tình cảm anh bao lâu chằng muốn quên đâu
    Từng yêu dấu khoan trao người sau những thứ ta từng
    Thật sự trong tim anh giờ chỉ mong
    Hỏi ngọn gió đông cứu vãn kịp không
    Tình cảm anh bao lâu chẳng muốn quên đâu
    Từng yêu dấu khoan trao người sau những thứ ta từng
    Tại sao em thay đổi anh vẫn chưa có câu trả lời
    Lời chia cắt chưa trên môi
    Mà tay đã buông anh rồi
    Nhìn mây trôi mãi anh chỉ mong muốn ta quay lại
    Giờ em lỡ yêu thương ai
    Thì anh chính thức thất bại
    Cứu vãn kịp không`,
    timePoint: [
      2, 6, 10, 13, 16, 18, 20, 23, 27, 29, 32, 34, 36, 40, 42, 43, 46, 50, 54,
      88, 92, 96,
    ],
  },
  {
    id: 5,
    source: "song-05",
    avatar: "avt-05",
    nameSong: "Bật Nhạc Lên",
    nameAuthor: "Hiếu Thứ Hai",
    time: "03:20",
    publishDate: "25/09/2022",
    lyrics: `Hy vọng em đang có một ngày tốt lành 
    Khi em khóc hãy bật nhạc lên 
    Từng câu hát sẽ mang đi niềm đau 
    Có những nỗi nhớ ta phải quên 
    Để em bước tiếp những ngày sau 
    Khi em khóc hãy bật nhạc lên 
    Từng câu hát sẽ mang đi niềm đau 
    Có những nỗi nhớ ta phải quên 
    Kề bên anh quên đi những u sầu 
    Nghe bài hát cũng có thể đoán tâm trạng của em vào ngày hôm nay 
    "Lần Cuối" nói em đang buồn "Điền Vào Ô Trống" là cần ôm ngay 
    Và rồi em tương tư về "Một Đêm Say", như em vừa "Có Một Mùa Hè" mà em sống như người trên mây 
    Em có thể chui rúc trong phòng, ngoài xã hội thì rất lười nhác 
    Rồi có thể đeo lên tai nghe và em hành xử như một người khác 
    Âm nhạc vừa là nhật ký vừa là quyển sách 
    Mở ra những lúc em cần để lưu lại hết những khoảnh khắc 
    Với headphones em chạy trên đường mà không sợ bất kì ai chửi 
    Như âm nhạc sẽ làm em buồn hoặc có thể sẽ làm em vui 
    Đó là dao hai lưỡi 
    Có rất nhiều những vết thương không một ai muốn với cô gái chỉ vừa 20 
    Những bài nhạc tiếp tục xoay vòng, em cười tròn như là bánh xe 
    Rồi vang lên nhịp phách 1 2 trên con đường về nhà vắng hoe 
    Đôi lúc không phát ra tiếng, như một nốt trầm lặng lẽ 
    Không phải Âm nhạc dừng lại mà lúc đó nó chỉ lắng nghe 
    Khi em khóc hãy bật nhạc lên 
    Từng câu hát sẽ mang đi niềm đau 
    Có những nỗi nhớ ta phải quên 
    Để em bước tiếp những ngày sau 
    Khi em khóc hãy bật nhạc lên 
    Từng câu hát sẽ mang đi niềm đau 
    Có những nỗi nhớ ta phải quên 
    Kề bên anh quên đi những u sầu 
    Hãy nghe nhạc của anh Young H nếu em cần ai đưa em lên 
    "Ex's hate me" cùng Bray nhớ tới nhứng người ngày xưa em quên 
    Còn nếu em đang muốn chill, nghe nhạc của Đen Vâu 
    Và nếu em chơi trong club em phải nghe nhạc của MANBO 
    Có rất nhiều lời khen ngợi và làm em đổ là KNG 
    Nhưng em đừng nghe nhạc của RED nếu không muốn lệ lem hàng mi 
    Nhạc không lời, tình lâu phai, gây chết người là Marlboro 
    Feel theo từng giai điệu em tự hỏi tại sao mình đau 
    Gu âm nhạc của em lạ kì, em có thể nghe từ Lo-fi cho đến thể loại nhạc sung nhất 
    Playlist em có Green Day, Maroon 5 và kể cả Nguyễn Trần Trung Quốc 
    Cảm xúc trôi nhiều cung bậc 
    Đi qua hết những xuống lên như melody rapper Young Thug 
    Và có những ngày mệt mỏi, em thật lòng chỉ mong nhanh qua 
    Em tự hỏi "Cái giá là gì", cái giá là gì anh Nah 
    Em vẫn giữ cái thói quen cũ, nghe HIEUTHUHAI vào lúc canh ba 
    Vì em biết em là cảm hứng trong tất cả bài hát của anh ta 
    Và bài nhạc lại xoay vòng, em cười tròn như là bánh xe 
    Rồi vang lên nhịp phách 1 2 trên con đường về nhà vắng hoe 
    Đôi lúc không phát ra tiếng, như một nốt trầm lặng lẽ 
    Không phải Âm nhạc dừng lại mà lúc đó nó chỉ lắng nghe 
    [HOOK].`,
    timePoint: [
      12, 22, 24, 27, 30, 33, 35, 38, 41, 44, 47, 50, 55, 58, 60, 62, 65, 68,
      71, 74, 76, 78, 81, 84, 86, 89, 92, 94, 98, 100, 103, 106, 108, 111, 114,
      116, 119, 123, 127, 128, 131, 136, 139, 141, 144, 147, 150, 152,
    ],
  },

  {
    id: 9,
    source: "song-09",
    avatar: "avt-09",
    nameSong: "Waiting For You",
    nameAuthor: "Mono",
    time: "04:28",
    publishDate: "25/09/2022",
    lyrics: `Chiều đang dần buông
    Hạt mưa rơi xuống không gian lắng yên
    Suy tư vấn vương ngồi mộng mơ
    Đơn phương nhớ đến một nàng thơ
    Gió đông ùa về mang những ê chề
    Woa
    Ngỡ là trái tim khô cằn héo úa
    Sẽ thôi buồn đau
    Nhưng thật cay đắng khi biết là
    Ú òa
    Mình chỉ là một người đến sau
    Hey
    Biết em đã có người ở gần bên
    Nhưng anh sẽ vẫn đứng ngay đây
    Và chờ em
    Mưa giông bão tố chẳng quan tâm
    Đến ngày đêm
    Kẻ si tình này chọn ở phía sau
    Thầm nhớ mong em
    Bae bae
    Vì say mê ánh mắt
    Yêu luôn cả bờ môi
    Muốn nói với cả thế giới
    Chỉ thương em mà thôi
    Đắm đuối, uhh
    Cháy lên ngọn lửa tình yêu
    Bùng lên mạnh mẽ và thiêu đốt
    Baby that’s what I feel
    My Girl, I’m waiting for you
    U u u u u u
    U u u u u
    Ye he
    Uno no nono, nono, nono
    Nono oh uh oh o o
    Uh oh uh oh uh oh o o
    Ya ya ya
    Uh oh uh oh uh oh o o
    Uho o
    Hey ih ye he eh
    Ih ye e e e
    Hey ih ye he eh eh
    Một bông hồng xinh tươi thắm
    Hú trông em kiêu sa
    Đôi chân thướt tha mặn mà
    Uh
    Hương thơm miên man dịu dàng
    Uh
    Dáng duyên nụ cười, say đắm yêu người
    Ngỡ là trái tim khô cằn héo úa
    Sẽ thôi buồn đau
    Nhưng thật cay đắng khi biết là
    Ú òa
    Mình chỉ là một người đến sau
    Hey
    Biết em đã có người ở gần bên
    Nhưng anh sẽ vẫn đứng ngay đây
    Và chờ em
    Mưa giông bão tố chẳng quan tâm
    Đến ngày đêm
    Kẻ si tình này chọn ở phía sau
    Thầm nhớ mong em
    Bae bae
    Vì say mê ánh mắt
    Yêu luôn cả bờ môi
    Muốn nói với cả thế giới
    Chỉ thương em mà thôi
    Đắm đuối, uhh
    Cháy lên ngọn lửa tình yêu
    Bùng lên mạnh mẽ và thiêu đốt
    Baby that’s what I feel
    My Girl, I’m waiting for you
    I’m waiting for you
    Oh oh
    I’m waiting for you
    Oh oh
    Chờ em về đây với anh
    Mình cùng đan bàn tay
    Ấm áp bao đêm ngày
    Ye ye ye
    Chờ em chờ em, ừ thì chờ em
    Chờ em chờ em, chờ đến bao giờ
    Biển khô cạn, trời không còn đầy sao
    Thì anh vẫn nơi đây và chờ em
    Biết em đã có người ở gần bên
    Nhưng anh sẽ vẫn đứng ngay đây
    Và chờ em
    Mưa giông bão tố chẳng quan tâm
    Đến ngày đêm
    Kẻ si tình này chọn ở phía sau
    Thầm nhớ mong em
    Bae bae
    Vì say mê ánh mắt
    Yêu luôn cả bờ môi
    Muốn nói với cả thế giới
    Chỉ thương em mà thôi
    Đắm đuối, uhh
    Cháy lên ngọn lửa tình yêu
    Bùng lên mạnh mẽ và thiêu đốt
    Baby that’s what I feel
    My Girl, I’m waiting for you
    Uh oh uh oh uh oh o o
    Ya ya ya
    Uh oh uh oh uh oh o o
    Uho o
    Hey ih ye he eh
    Ih ye e e e
    Hey ih ye he eh eh
    Hợp âm Waiting For You
    Sau đây là hợp âm bài hát Waiting For You của MONO:
    [Am]Hoàng hôn dần buông, hạt mưa rơi xuống không gian lắng [Em]yên
    Suy tư vấn vương ngồi mộng [F]mơ đơn phương nhớ đến một nàng [G]thơ
    Gió đông ùa về mang những ê chề ( [Am]woa) Ngỡ là trái tim khô cằn héo úa sẽ thôi buồn [Em]đau
    Nhưng thật cay đắng khi biết [F]là ú òaMình chỉ là một người đến [G]sau (HEY)
    Biết em đã có người ở [Am]gần bên nhưng anh sẽ vẫn đứng ngay đây và [Em]chờ em
    Mưa giông bão tố chẳng quan tâm đến [F]ngày đêm
    Kẻ si tình này chọn ở phía sau thầm nhớ [G]mong em…. Bae bae
    Vì say mê ánh mắt, yêu luôn cả [Am]bờ môi
    Muốn nói với cả thế giới chỉ thương em [Em]mà thôi
    Đắm đuối, uh… cháy lên ngọn lửa [F]tình yêu
    Bùng lên mạnh mẽ và thiêu đốt baby that’s [G]what i feel
    My Girl, i’m waiting for [Am]you U u u u u u [Em]u u u (ye he)
    Uno no no [F]no, nono, nono, nono oh uh [G]oh o o
    Uh oh uh oh uh oh [Am]o o (ya ya ya) Uh oh uh oh uh oh [Em]o o o (uho o)
    Hey ih ye [F]he eh ih ye e e e Hey ih ye [G]he eh eh
    [Am]Một bông hồng xinh tươi thắm hú trông em kiêu [Em]sa
    Đôi chân thướt tha mặn mà ( [F]UH) Hương thơm miên man dịu dàng (U [G]H)
    Dáng duyên nụ cười, say đắm yêu người
    [Am]Ngỡ là trái tim khô cằn héo úa sẽ thôi buồn [Em]đau
    Nhưng thật cay đắng khi biết [F]là ú òa Mình chỉ là một người đến [G]sau ( HEY)
    Biết em đã có người ở [Am]gần bên nhưng anh sẽ vẫn đứng ngay đây và [Em]chờ em
    Mưa giông bão tố chẳng quan tâm đến [F]ngày đêm
    Kẻ si tình này chọn ở phía sau thầm nhớ [G]mong em…. Bae bae
    Vì say mê ánh mắt, yêu luôn cả [Am]bờ môi
    Muốn nói với cả thế giới chỉ thương em [Em]mà thôi
    Đắm đuối, uh… cháy lên ngọn lửa [F]tình yêu
    Bùng lên mạnh mẽ và thiêu đốt baby that’s [G]what i feel
    My Girl, i’m waiting for [Am]you
    [Am]I’m waiting for you ( oh oh) [Em]I’m waiting for you ( oh oh)
    [F]Chờ em về đây với anh Mình cùng đan bàn [G]tay Ấm áp bao đêm ngày (yeyeye)
    [Am]Chờ em chờ em, ừ thì chờ em [Em]chờ em chờ em, chờ đến bao giờ…
    [F]Biển khô cạn, trời không còn đầy sao thì [G]anh vẫn nơi đây và chờ em….
    Biết em đã có người ở [A#m]gần bên nhưng anh sẽ vẫn đứng ngay đây và [Fm]chờ em
    Mưa giông bão tố chẳng quan tâm đến [F#]ngày đêm
    Kẻ si tình này chọn ở phía sau thầm nhớ [G#]mong em…. Bae bae
    Vì say mê ánh mắt, yêu luôn cả [A#m]bờ môi
    Muốn nói với cả thế giới chỉ thương em [Fm]mà thôi
    Đắm đuối, uh… cháy lên ngọn lửa [F#]tình yêu
    Bùng lên mạnh mẽ và thiêu đốt baby that’s [G#]what i feel
    My Girl, i’m waiting for [A#m]you`,
    timePoint: [29, 29, 34, 37, 40, 41, 42, 44, 46, 48, 50],
  },

  {
    id: 11,
    source: "song-11",
    avatar: "avt-11",
    nameSong: "Con Trai Cưng",
    nameAuthor: "Bray",
    time: "02:38",
    publishDate: "25/09/2022",
    lyrics: `Con trai cưng của mẹ,
    Thích cắn kẹo hít ke,(xào lên) 
    Bạn bè gọi có mặt riêng ba mẹ nói là nó không nghe, (con không về đâu)
    Con trai cưng của mẹ, (trai cưng) Ngồi VietGangz hút chõe, (Việt Gang!!)
    Hơn 20 tuổi đầu nhưng khi ở nhà vẫn là em bé,
    Vì nó là, Con trai cưng của mẹ nó, (mẹ nó) 
    Con trai cưng của mẹ nó, (mẹ nó) 
    Con trai cưng chưa bao giờ nhấc ngón tay từ khi bả đẻ nó,
    Con trai cưng của mẹ nó, (mẹ nó) Con trai cưng của mẹ nó, (Skrrt) 
    Ở ngoài kia phong bão tố về nhà luôn có mẹ chở mẹ che, 
    Con trai không bao giờ nhớ mẹ,
    Con trai không tâm sự với cha,
    Con trai chưa bao giờ phải khóc, 
    Trừ khi mẫu giày nó thích vừa mới ra, 
    Từ bé thì ba đã đi làm ăn xa, Mẹ là chủ cả tối nào cũng tăng ca,
    Nên những cuộc vui sẽ không bao giờ dừng lại đến khi cái ngày ông già nó băng hà, 
    Gọi nó là con trai, con trai cưng, Chưa từng tự mình đứng vững 2 chân, 
    Gọi là con trai, con trai cưng, Quan tài ổng bả không biết để ai bưng, 
    Goddamn it, con trai, con trai cưng, Khắp mọi nơi mà đéo có ai nhận, 
    Thằng sanh ra là con của giám đốc, cũng có thằng ông bà già làm nai lưng, Con, trai, 
    Thích làm đầu gấu, Rất là tự hào nắm đấm có màu máu, 
    Thích thể hiện, để giữ cái thể diện, rồi lại bất ngờ khi ôm cái đầu máu,
    Rồi ai sẽ phải xin lỗi từng nhà, Coi mấy thằng bạn mày nó có đứng ra,
    Để coi ai thăm viếng, mỗi khi mày kiếm chuyện,
    Trong khi mày nằm viện, bà già mày trả tiền, 
    Đủ lớn để làm, thì đủ lớn để chịu, Mày đủ lớn để học, phải đủ lớn để hiểu, Đủ sức chìa tay ra xin tiền, 
    Thì phải đủ tự trọng không dùng tiền đó mua sĩ diện.
    Hãy để tâm hồn là thánh đường, đừng biến nó thành sở thú, 
    Để bao nhiêu bạn bè, hay bao nhiêu vật chất, thì cuộc đời của mày cũng không bao giờ đủ.`,
    timePoint: [
      17, 19, 21, 25, 29, 32, 34, 36, 40, 43, 48, 49, 51, 53, 55, 59, 63, 66,
      69, 74, 79, 82, 84, 89, 90, 93, 98, 100, 103,
    ],
  },
  {
    id: 12,
    source: "song-12",
    avatar: "avt-12",
    nameSong: "Cưới Thôi",
    nameAuthor: "Bray",
    time: "03:01",
    publishDate: "25/09/2022",
    lyrics: `My bae my bae
    Làm sao cho anh đến đây
    Và hỏi cưới  em mới hay
    Yeah my bae my bae
    Mẹ anh bảo rằng chẳng thích em nên anh cứ mãi phân vân
    Giống như bao cô thôi mà
    Tìm mãi mới gặp được anh mà
    Chúng ta quen nhau lâu rồi
    Cũng đã ôm hôn nhau luôn rồi 
    Giống như bao lời anh hứa
    Giấu mọi người làm chi nữa
    Người giả vờ không quen em để em phải đau buồn hơn
    Cưới em đi anh ơi
    Giờ em chẳng muốn lôi thôi
    Đợi khi hai vạch mới cưới 
    Khôn như anh quê em đầy
    Cưới em đi anh ơi
    Về nhà rồi chúng ta chơi
    Vì e thương anh mới thế  anh có ra sao vẫn mê
    Cưới đi thôi em ơi
    Yeah
    Oh 
    Ta cưới nhau thôi anh ơiiii
    yeahhh oh ohhhhhh
    Rap:
    Người ơi người đâu gặp gỡ làm chi
    Khi nào kiệu đỏ được rước nàng đi
    Song gia chú bác bạn dì
    Góp mặt chung vui vào ngày hoan hỉ
    Con gái là con gái rượu
    Đây là phi vụ cả trăm ngàn tỷ
    Sính lễ cũng chẳng có gì
    Một chai rượu mận một tấn vàng y
    Em ơi Em ơi mình cưới nhau đi 
    Kể từ cái ngày sét đánh không chết 
    Thì anh đã kết lấy em về nhà
    Chốt sổ vậy luôn cho bớt cồng kềnh
    ngày mà em va vào cuộc đời anh
    Phá tan cô đơn và đã không đền
    là em đã nợ cả đời,cả kiếp
    nợ thằng cu tí mình cưới nhau đi!
    my bae my bae
    Mẹ anh bảo rằng chẳng thích em nên anh cứ mãi phân vân
    yeahhhh
    my bae my bae
    kệ ai mặc ai có nói cũng chẳng quan tâm thế cho nhanh
    Giờ tính saooooooooo`,
    timePoint: [
      15, 17, 19, 22, 24, 27, 29, 30, 32, 34, 35, 38, 40, 42, 43, 45, 47, 49,
      50, 54, 56, 58, 61, 64, 93, 94, 96, 97, 99, 101, 102, 105, 106, 108, 109,
      112, 113, 115, 117, 118, 119, 122, 124, 128, 129, 130, 135,
    ],
  },
  {
    id: 13,
    source: "song-13",
    avatar: "avt-13",
    nameSong: "Như Anh Đã Thấy Em",
    nameAuthor: "Phúc XP",
    time: "05:36",
    publishDate: "09/02/2023",
    lyrics: `Anh ngắm nhìn thêm, mây, sao và màn đêm long lanh của anh
    Anh lướt nhẹ trên từng câu hát, nơi những giấc mơ đã từng thổn thức với anh
    Và đôi khi anh, trầm ngâm thật lâu, vì nơi sâu nhất trong thâm tâm của anh
    Anh vẽ lại những bức tranh, ẩn chứa sâu trong sắc màu mỏng manh, mỏng manh.
    Để nhìn lại “tháng năm xa rồi”, còn mình anh thôi
    Mà giờ sao chẳng nói nên lời
    Bóng em hôm nào dần theo làn mây khuất trôi
    Với anh, những ngày mà mình rong chơi
    Là thời gian đẹp nhất trong đời
    Dù sao, tất cả cũng qua rồi
    Vậy nên hãy xóa hết đi phiền lo đang bủa vây
    Dù ta sẽ nhiều khi không gặp may
    Chỉ cần em tin tất cả sẽ tốt thôi, và hãy cứ bước đến những nơi thuộc về em
    Để anh lại hát mãi như là khi em ở đây, dù ta theo thời gian cũng đổi thay
    Rồi điều tuyệt nhất sẽ đến với em như anh đã tìm thấy em …
    Để nhìn lại “tháng năm xa rồi”, còn mình anh thôi
    Mà giờ sao chẳng nói nên lời
    Bóng em hôm nào dần theo làn mây khuất trôi
    Với anh, những ngày mà mình rong chơi
    Là thời gian đẹp nhất trong đời
    Dù sao, tất cả cũng qua rồi
    Vậy nên hãy xóa hết đi phiền lo đang bủa vây
    Dù ta sẽ nhiều khi không gặp may
    Chỉ cần em tin tất cả sẽ tốt thôi, và hãy cứ bước đến những nơi thuộc về em
    Để anh được hát mãi như là khi em ở đây, dù ta theo thời gian cũng đổi thay
    Rồi điều tuyệt nhất sẽ đến với em như anh đã tìm thấy em …
    Và một lần cuối, để mình không cần mạnh mẽ
    Dù sao ta cũng đã yêu nhiều thế !
    Có rất nhiều điều mà anh vẫn chưa nói ra
    Vì lần cuối cùng được nắm tay em bước qua khắp nẻo đường
    Ngắm hoàng hôn chạm bờ vai em, như khoảnh khắc đầu tiên em đến
    Anh cất nụ cười người vào trang kỉ niệm, như em vẫn còn bên anh
    Vậy nên hãy xóa hết đi phiền lo đang bủa vây
    Dù ta sẽ nhiều khi không gặp may
    Chỉ cần em tin tất cả sẽ tốt thôi, và hãy cứ sống hết cho những gì em muốn
    Anh sẽ luôn hát mãi như là khi em ở đây, dù ta theo thời gian cũng sẽ đổi thay
    Điều tuyệt nhất sẽ đến với em như anh đã tìm thấy em …
    Tháng năm u sầu cùng màn đêm thâu
    Dòng kí ức sao đã loang màu
    Biết đến khi nào để ta lại trông thấy nhau
    Với em, những ngày mà mình rong chơi
    Là thời gian đẹp nhất trong đời
    Dù sao, tất cả đã qua rồi`,
    timePoint: [
      36, 43, 52, 59, 67, 71, 76, 83, 87, 91, 99, 104, 107, 115, 123, 164, 167,
      172, 180, 183, 187, 194, 200, 203, 211, 219, 227, 232, 236, 243, 248, 252,
      262, 268, 271, 279, 288, 298, 301, 305, 314, 317, 322,
    ],
  },
];

let [...songList] = songs;
let [...songListTemp] = songs;

// songList = handleSortBy(0);
let audio = document.querySelector("audio");
let bodySelector = document.body;

let startBtn = document.getElementById("play-or-pause");
let nextBtn = document.getElementById("next-btn");
let prevBtn = document.getElementById("prev-btn");
let rangeBar = document.getElementById("range-music");
let progress = document.getElementById("duration");

let timeDuration = document.querySelector("#time-end");
let bigThumbnail = document.querySelector("#music-picture>img");
let nameMusicInBigThumbnail = document.querySelector(".name-of-music-left");
let nameSingerBigThumbnail = document.querySelector("#name-of-singer");
let pdInBigThumbnail = document.querySelector("#publication-date");
let musicPlayingBar = document.querySelector("#playing-music-bar__left");
let musicPlayingBarRight = document.querySelector("#playing-music-right");

let musicThumbnailInBar = musicPlayingBar.children[0].children[0];
let nameSongBar = document.querySelector(".information-of-music .nameSong ");
let nameSingerBar = document.querySelector(".information-of-music .nameMusician ");
const randomBtn = document.querySelector("button#random-btn");
const iconPlayingBtn = document.querySelector("button.run-music");
let songContainerParent = document.querySelector("#list-songs-container");

const sortOpt = document.querySelector("div#sort-option");
const sortSongBtn = document.getElementById("sortSong");
const optList = document.getElementsByClassName("opt-list");
const searchInput = document.getElementById("search-input");
const searchBar = document.getElementById("search-bar");
const searchBtn = document.getElementById("searchBtn");
const searchResult = document.getElementById("search-result");
const lyricBtn = document.getElementById("lyricBtn");
const lyricModalBtn = document.getElementById("lyric-modal");
const closeModalSongBtn = document.querySelector(".close-lyric-modal-btn");
const nameLyricSongInSongBar = document.getElementById("nameLyricSong");
const songLyricContainer = document.getElementById("songLyric-container");
const imgLyricThumbnail = document.querySelector("#thumbnail-lyric");
const volumeControl = document.getElementById("volume-controller");
const volumeBtn = document.getElementById("volume");
const searchContainerResult = document.querySelector(
  ".search-result__container"
);
let delayBlurTimeOut = undefined;
const rect = imgLyricThumbnail.getBoundingClientRect(); //lay vi tri hien tai cua loi dang phat

let curPosition = 0; //vi tri bai hat hien tai
let randomBtnStatus = 0; //nut random dg off
let activeSong = 0; //bai hat dang duoc tat, =1 thi bai hat dc bat

let mouseBlurSortSelection = false;
let myInput = "";
let contentResult = 0;

function renderListSong() {
  let newListSong = "";
  for (let i = 0; i < songList.length; i++) {
    newListSong += createListSong();
  }
  songContainerParent.innerHTML = newListSong;
}

function createListSong() {
  return `<ul class="song-container">
  <div class="wrapper-1">
      <li class="item-1">1</li>
      <li class="item-2"><img src="./img/img-avtar.jpeg" alt="anh01"></li>
      <div class="wrapper-2">
          <h2>Có Chơi Có Chịu</h2>
          <li class="name-author">Karik</li>
      </div>
  </div>
  <div class="wrapper-3">
      <li class="item-3"><a class="download-music" href="#" download>
              <i class="fa-solid fa-download"></i>
          </a></li>
      <li class="item-4">03:44</li>
  </div>
</ul>`;
}

function handleSortSelection(songList) {
  for (let i = 0; i < optList.length; i++) {
    optList[i].onclick = function () {
      songList = handleSortBy(i);
      autoRenderPage();
      runMusicWhenChanged(0);
    };
  }
}

function hideSortSelection(status) {
  sortSongBtn.classList.remove("onBtn");
  status = 0;
  songContainerParent.style.top = "0";
  sortOpt.style.display = "none";
  return status;
}
function showSortSelection(status) {
  sortSongBtn.classList.add("onBtn");
  status = 1;
  songContainerParent.style.top = "-106px";
  sortOpt.style.display = "block";
  return status;
}
function handleSortBtn() {
  let status = 0;
  sortSongBtn.style.cursor = "pointer";
  sortSongBtn.onclick = function () {
    if (status == 0) {
      status = showSortSelection(status);
    } else {
      status = hideSortSelection(status);
    }
  };
}

function handleStartBtn() {
  let tog = 0;

  startBtn.onclick = function () {
    if (tog == 0) {
      audio.play();
      this.children[0].className = "fa-solid fa-pause";
      handleRangeBar();
      tog = 1;
    } else {
      audio.pause();
      this.children[0].className = "fa-solid fa-play";
      tog = 0;
    }
  };
}

function handleRangeBar() {
  audio.ontimeupdate = function () {
    handleUpdateRangeBar();
  };
}

/**
 * click chuot thi dung cap nhat rangebar nhung nhac van chay va duration van cap nhat khi keo
 * tha chuot ra thi cap nhat lai rangebar theo duration
 */
function handleUpdateRangeBar() {
  let currentTime = audio.currentTime;
  handleTimePoint(
    Math.floor(currentTime),
    songList[curPosition].timePoint,
    songList[curPosition].id
  );
  let duration = audio.duration;
  let progressTime = Math.floor((currentTime * 100) / duration);
  rangeBar.value = progressTime; // cap nhat thanh rangebar theo %
  progress.innerText = handleTimeFormat(Math.floor(currentTime));
  handleChangePstBar(); //xu ly khi tua

  if (currentTime == duration) {
    startBtn.children[0].className = "fa-solid fa-play";
    //(*) neu random on, thi runMusicWhenChanged(randomNum)

    if (curPosition < songList.length - 1 && randomBtnStatus == 0) {
      runMusicWhenChanged(curPosition + 1);
    } else if (curPosition < songList.length - 1 && randomBtnStatus == 1) {
      //xu ly truong hop random lai cung 1 bai hat
      let preRandomNum = 0;
      let randomNum = Math.floor(getRandomArbitrary(0, songList.length));
      //xu ly khi trung gia tri
      while (randomNum == preRandomNum) {
        randomNum = Math.floor(getRandomArbitrary(0, songList.length));
      }
      runMusicWhenChanged(randomNum);
      if (randomNum != 0) {
        disablePrevBtn(false);
      } else {
        disablePrevBtn(true);
      }
      preRandomNum = randomNum;
    } else {
      runMusicWhenChanged(0);
    }
  }
}

function getPostition(viTri) {
  return viTri;
}

function handleTimeFormat(time) {
  let timeFormated = "";
  let min = Math.floor(time / 60);
  if (time < 10) {
    timeFormated = `00:0${time}`;
  } else if (time < 60 && time >= 10) {
    timeFormated = `00:${time}`;
  } else if (time < 600 && time >= 60) {
    if (time % 60 < 10) {
      timeFormated = `0${min}:0${time % 60}`;
    } else {
      timeFormated = `0${min}:${time % 60}`;
    }
  } else if (time >= 600 && time <= 3600) {
    if (time % 60 < 10) {
      timeFormated = `${min}:0${time % 60}`;
    } else {
      timeFormated = `${min}:${time % 60}`;
    }
    // render;
  }
  return timeFormated;
}

function handleChangePstBar() {
  rangeBar.oninput = function () {
    let valChanged = Math.floor((this.value * audio.duration) / 100);
    audio.currentTime = valChanged;
    progress.innerText = handleTimeFormat(valChanged);
  };
}

function autoRenderPage() {
  for (let i = 0; i < songList.length; i++) {
    let soThuTu = document.querySelectorAll(".wrapper-1 .item-1");
    let thumbnail = document.querySelectorAll(".item-2 img");
    let nameSong = document.querySelectorAll(".wrapper-2 h2");
    let nameAuthor = document.querySelectorAll(".name-author");
    let timeEnd = document.querySelectorAll(".wrapper-3 .item-4");
    soThuTu[i].innerText = `${i + 1}`;
    thumbnail[i].src = `././music avatar/${songList[i].avatar}.jpg`;
    nameSong[i].innerText = `${songList[i].nameSong}`;
    nameAuthor[i].innerText = `${songList[i].nameAuthor}`;
    timeEnd[i].innerText = `${songList[i].time}`;
  }
}

function render(viTri) {
  songContainerParent.childNodes[viTri].classList.add("playing");
}

//hien thi bai hat dang phat
function selectMusic(pst) {
  bigThumbnail.src = `././music avatar/${songList[pst].avatar}.jpg`;
  nameMusicInBigThumbnail.innerText = `${songList[pst].nameSong}`;
  nameSingerBigThumbnail.innerText = `${songList[pst].nameAuthor}`;
  pdInBigThumbnail.innerText = `${songList[pst].publishDate}`;
  musicThumbnailInBar.src = `././music avatar/${songList[pst].avatar}.jpg`;
  nameSingerBar.innerText = `${songList[pst].nameAuthor}`;
  nameSongBar.innerText = `${songList[pst].nameSong}`;
  timeDuration.innerText = `${songList[pst].time}`;
}

// hien thi bai dau tien khi vua render

function playingMusic(pst) {
  audio.src = `./music/${songList[pst].source}.mp3`;

  audio.onplay = function () {
    iconPlayingBtn.style.display = "block";
    handleSpinThumbnail(true);
  };
  audio.onpause = function () {
    handleSpinThumbnail(false);
    iconPlayingBtn.style.display = "none";
  };
  songContainerParent.childNodes[pst].classList.add("playing"); //them class playing cho bai hat dang phat
  curPosition = pst; //vi tri hien tai khi phat cua bai hat
  for (let i = 0; i < songList.length; i++) {
    if (i != pst) {
      songContainerParent.childNodes[i].classList.remove("playing"); //xoa bai hat dang phat khi chon bai moi
    }
  }
}

function swap(arr, a, b) {
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
  return arr;
}

function runMusicWhenChanged(pst) {
  RenderLyricForSong(pst);
  selectMusic(pst);
  handleRangeBar();
  playingMusic(pst);
  startBtn.children[0].className = "fa-solid fa-pause";
  audio.play();
}

/**ham chua vi tri tung bang nhac */

function swapMusicWhenClick() {
  for (let i = 0; i < songList.length; i++) {
    //han che goi html dc tao ra boi js nhu songContainer chua dc tao ra thay vao do hay dung songContainerParent.childNodes[i]
    songContainerParent.childNodes[i].onclick = function () {
      runMusicWhenChanged(i);
      preNextWhenClick(i); //i la vi tri cur song
      if (curPosition == 0) {
        disablePrevBtn(true);
      } else {
        disablePrevBtn(false);
      }
    };
  }
}
//hide nut tro ve khi o bai dau tien
function disablePrevBtn(status = true) {
  prevBtn.disabled = status;
  if (status == true) prevBtn.classList.add("disabled");
  else prevBtn.classList.remove("disabled");
}

function preNextWhenClick(index = 0) {
  // let curPst = viTri;
  // let prePst = viTri--;
  prevBtn.onclick = function () {
    if (index >= 0) {
      if (curPosition == 1) {
        disablePrevBtn(true);
      }
      index--;
    }
    runMusicWhenChanged(index);
  };
  nextBtn.onclick = function () {
    // if(index == undefined){
    //     index = 0;
    //   }
    if (index == undefined) {
      index = 0;
    }
    if (index < songList.length - 1) {
      index++;
      disablePrevBtn(false);
      runMusicWhenChanged(index);
    } else {
      index = 0;
      disablePrevBtn(true);
      runMusicWhenChanged(0);
    }
  };
}

// handle randomSong Btn
function randomSongBtn() {
  randomBtn.onclick = function () {
    this.children[0].classList.toggle("btn-on");
    this.children[0].classList.forEach((classInClassList) => {
      if (classInClassList == "btn-on") {
        //khi nut random bat thi se random ra 1 so, khi ket thuc bai thi moi goi so do ra
        randomBtnStatus = 1;
      } else {
        randomBtnStatus = 0;
      }
    });
  };
}

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

function handleSpinThumbnail(status) {
  if (status == true) {
    bigThumbnail.classList.add("spin");
    bigThumbnail.classList.add("circle");
    bigThumbnail.classList.remove("returnThumbNail");
    bigThumbnail.classList.remove("circleToNormal");
  } else {
    bigThumbnail.classList.remove("spin");
    bigThumbnail.classList.add("returnThumbNail");

    setTimeout(() => {
      bigThumbnail.classList.remove("circle");
      bigThumbnail.classList.add("circleToNormal");
    }, 500);
  }
}

function handleSortBy(optionSelected = 0) {
  if (optionSelected == 1) {
    songList.sort((a, b) => {
      if (a.nameSong < b.nameSong) {
        return -1;
      } else if (a.nameSong > b.nameSong) {
        return 1;
      } else {
        return 0;
      }
    });
  } else if (optionSelected == 2) {
    songList.sort((a, b) => {
      if (a.nameAuthor < b.nameAuthor) {
        return -1;
      } else if (a.nameAuthor > b.nameAuthor) {
        return 1;
      } else {
        return 0;
      }
    });
  } else {
    songList.sort((a, b) => a.id - b.id);
  }
  return songList;
}

function showSearchResult() {
  searchBar.style.borderBottomLeftRadius = "0";
  searchBar.style.borderBottomRightRadius = "0";
  searchResult.style.visibility = "visible";
}
function hideSearchResult() {
  searchBar.style.borderBottomLeftRadius = "20px";
  searchBar.style.borderBottomRightRadius = "20px";
  searchResult.style.visibility = "hidden";
}

function convertSongToNameMusic() {
  let name = {};
  //them ten bai hat
  if (name.nameMusic == undefined && name.nameSinger == undefined) {
    name.nameMusic = [];
    name.nameSinger = [];
  }
  //them ten bai hat
  songList.forEach((song) => {
    name.nameMusic.push(song.nameSong);
    name.nameSinger.push(song.nameAuthor);
  });
  //xu ly bai hat trung ten
  name.nameMusic = [...new Set(name.nameMusic)];
  name.nameSinger = [...new Set(name.nameSinger)];

  return name;
}

function handleSearchNameSong(nameMusic) {
  for (let nameSong of nameMusic) {
    if (
      nameSong.toLowerCase().startsWith(searchInput.value.toLowerCase()) &&
      searchInput.value != ""
    ) {
      let listItem = document.createElement("li");
      listItem.classList.add("list-items");
      listItem.style.cursor = "pointer";
      listItem.addEventListener("click", () => {
        displayNames(nameSong, handleRenderSongNameWhenSearched);
        //khi bam vao ket qua tren tim kiem
        hideSearchResult();
        searchInput.value = nameSong; //fill ten bai hat vao o tim kiem
        clearTimeout(delayBlurTimeOut);
      });

      let word = `<span class="boldChar">${nameSong.substr(
        0,
        searchInput.value.length
      )}</span>`;
      word += nameSong.substr(searchInput.value.length);
      listItem.innerHTML = word;
      searchResult.children[0].appendChild(listItem);
    }
  }
}

function handleSearchNameSinger(nameMusicianInList) {
  for (let nameSinger of nameMusicianInList) {
    if (
      nameSinger.toLowerCase().startsWith(searchInput.value.toLowerCase()) &&
      searchInput.value != ""
    ) {
      let listItem = document.createElement("li");
      listItem.classList.add("list-items");
      listItem.style.cursor = "pointer";
      listItem.addEventListener("click", () => {
        displayNames(nameSinger, handleRenderSingerNameWhenSearched);
        //khi bam vao bai hat tren tim kiem
        hideSearchResult();
        searchInput.value = nameSinger;
        clearTimeout(delayBlurTimeOut);
      });

      let word = `<span class="boldChar">${nameSinger.substr(
        0,
        searchInput.value.length
      )}</span>`;
      word += nameSinger.substr(searchInput.value.length);
      listItem.innerHTML = word;
      searchResult.children[0].appendChild(listItem);
    }
  }
}

function handleSearchBar() {
  let name = convertSongToNameMusic();

  if (searchInput.value == "") {
    songList.map((song, index) => {
      let listName = document.createElement("li");
      listName.classList.add("list-items");
      listName.style.cursor = "pointer";
      listName.innerHTML = `${song.nameSong}`;
      listName.onclick = function () {
        displayNames(song.nameSong, handleRenderSongNameWhenSearched);
        //khi bam vao bai hat tren tim kiem
        hideSearchResult();
        searchInput.value = song.nameSong;
        clearTimeout(delayBlurTimeOut);
      };
      searchResult.children[0].appendChild(listName);
    });
  }

  searchInput.onfocus = function () {
    showSearchResult();
  };
  searchInput.onblur = function () {
    delayBlurTimeOut = setTimeout(() => {
      hideSearchResult();
    }, 150);
  };

  searchInput.onkeyup = function (e) {
    removeListItem();
    /**
     neu ghi kieu nay thi chi khi kqua = '' moi tim kiem bai hat
     if (searchInput.value == "") {
      songList = songListTemp;
      main();
    }
    minh mong muon la ket qua luc nao cung phai search neu phu hop phai render ra lien
     */

    songList = songListTemp;
    main();

    handleSearchNameSong(name.nameMusic);
    handleSearchNameSinger(name.nameSinger);
  };
}
function displayNames(value, renderNameSongOrNameSinger) {
  //tra ve kqua tim kiem
  renderNameSongOrNameSinger(value);
  removeListItem();
}
function removeListItem() {
  let items = searchResult.children[0].querySelectorAll(".list-items");
  items.forEach((item) => {
    item.remove();
  });
}
function handleRenderSongNameWhenSearched(value) {
  songList = songList.filter((song) => {
    return song.nameSong == value;
  });
  main();
}

function handleRenderSingerNameWhenSearched(value) {
  songList = songList.filter((song) => {
    return song.nameAuthor == value;
  });
  main();
}

function convertLyricsStringToArr(id) {
  let lyricList;
  let songLyric = [];
  songList.forEach((song) => {
    if (song.lyrics != undefined && song.id == id) {
      // them lyric vai bai chac chan se loi hien tai chi co 1 bai --------------------------
      lyricList = song.lyrics.split("\n");
    }
  });
  lyricList.forEach((lyric) => {
    lyric = lyric.trim();
    songLyric.push(lyric);
  });
  return songLyric;
}

function handleTimePoint(curTime, timepoint, idSong) {
  //curTime la math.floor() va timepoint phai la ms

  timepoint.forEach((curTimePoint, i) => {
    let preTimePoint = i - 1;
    let curClass =
      songLyricContainer.childNodes[i] !== undefined &&
      songLyricContainer.childNodes[i].classList;
    if (curTimePoint === curTime) {
      if (i > 2) {
        let scrollPstLyric =
          songLyricContainer.childNodes[i - 2].getBoundingClientRect();
        songLyricContainer.scrollBy(0, scrollPstLyric.y);
      } else {
        songLyricContainer.scrollTop = 0;
      }
      songLyricContainer.childNodes[i].classList.remove("initLyric");
      songLyricContainer.childNodes[i].classList.add("activeLyric");
      if (preTimePoint > -1) {
        songLyricContainer.childNodes[preTimePoint].classList.add("overLyric");
      }
    } else if (curTimePoint < curTime && curClass[1] !== "activeLyric") {
      songLyricContainer.childNodes[i].classList.remove("initLyric");
      songLyricContainer.childNodes[i].classList.remove("activeLyric");
      songLyricContainer.childNodes[i].classList.add("overLyric");
    } else if (curTimePoint > curTime) {
      if (
        songLyricContainer &&
        songLyricContainer.childNodes &&
        i < songLyricContainer.childNodes.length
      ) {
        songLyricContainer.childNodes[i].classList.remove("overLyric");
        songLyricContainer.childNodes[i].classList.add("initLyric");
      }
    }
  });
}

function showLyricModal() {
  lyricBtn.onclick = function () {
    nameLyricSongInSongBar.style.visibility = "visible";
    console.log(nameLyricSongInSongBar);
    musicPlayingBar.style.visibility = "hidden";
    musicPlayingBarRight.style.visibility = "hidden";
    lyricModalBtn.classList.remove("animationCloseModalLyricSong");
    lyricModalBtn.classList.add("animationShowModalLyricSong");
    lyricModalBtn.style.visibility = "visible";
  };
}
function hideLyricModal() {
  closeModalSongBtn.onclick = function () {
    nameLyricSongInSongBar.style.visibility = "hidden";
    musicPlayingBar.style.visibility = "visible";
    musicPlayingBarRight.style.visibility = "visible";
    lyricModalBtn.classList.remove("animationShowModalLyricSong");
    lyricModalBtn.classList.add("animationCloseModalLyricSong");
    lyricModalBtn.style.visibility = "hidden";
  };
}

function RenderLyricForSong(pst) {
  let listContainerLyrics = convertLyricsStringToArr(songList[pst].id);
  imgLyricThumbnail.src = `././music avatar/${songList[pst].avatar}.jpg`;
  songLyricContainer.innerText = ""; //(*) xoa du lieu cu khi vua init

  for (let i = 0; i < listContainerLyrics.length; i++) {
    let listLyrics = document.createElement("li");
    listLyrics.classList.add("lyric-list-item");
    listLyrics.innerText = `${listContainerLyrics[i]}`;
    songLyricContainer.appendChild(listLyrics);
  }
}

// function activeLyricMusicRunning(){

// }

function handleVolumeAudio(volumeVal) {
  audio.volume = Number(volumeVal);
  volumeControl.value = volumeVal;
}

function handleControlVolume() {
  let isVolumeBtnOn = true;

  volumeControl.oninput = () => {
    const valVolumeCur = volumeControl.value;
    handleVolumeAudio(valVolumeCur);
  };
  volumeBtn.onclick = function () {
    if (isVolumeBtnOn) {
      volumeBtn.style.opacity = "30%";
      isVolumeBtnOn = false;
      handleVolumeAudio(0);
    } else {
      volumeBtn.style.opacity = "100%";
      isVolumeBtnOn = true;
      handleVolumeAudio(1);
    }
  };
}

function runOnce() {
  RenderLyricForSong(0);
  handleVolumeAudio(1);
  handleControlVolume();
}

function main() {
  renderListSong();

  handleSortBtn();
  handleSortSelection(songList);
  swapMusicWhenClick();
  handleStartBtn();
  autoRenderPage(); //render list nhac khi vua vao

  selectMusic(0); //hien thi bai hat khi vua vao
  disablePrevBtn();

  //handle click next or return btn
  preNextWhenClick();
  randomSongBtn();
  handleSearchBar();
  playingMusic(0);

  showLyricModal();
  hideLyricModal();
}
main();
runOnce();
