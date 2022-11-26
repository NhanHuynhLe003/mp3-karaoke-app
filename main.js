const songs = [
  {
    id: 1,
    source: "song-01",
    avatar: "avt-01",
    nameSong: "Xin Đừng Nhấc Máy",
    nameAuthor: "Bray",
    time: "03:29",
    publishDate: "25/09/2022",
  },
  {
    id: 2,
    source: "song-02",
    avatar: "avt-02",
    nameSong: "Bên Trên Tầng Lầu",
    nameAuthor: "Tăng Duy Tân",
    time: "03:10",
    publishDate: "25/09/2022",
  },
  {
    id: 3,
    source: "song-03",
    avatar: "avt-03",
    nameSong: "Cứu Vãn Kịp Không",
    nameAuthor: "Vương Anh Tú",
    time: "03:26",
    publishDate: "25/09/2022",
  },
  {
    id: 4,
    source: "song-04",
    avatar: "avt-04",
    nameSong: "Đường Tôi Chở Em Về",
    nameAuthor: "buitruonglinh",
    time: "04:26",
    publishDate: "25/09/2022",
  },
  {
    id: 5,
    source: "song-05",
    avatar: "avt-05",
    nameSong: "Bật Nhạc Lên",
    nameAuthor: "Hiếu Thứ Hai",
    time: "03:20",
    publishDate: "25/09/2022",
  },
  {
    id: 6,
    source: "song-06",
    avatar: "avt-06",
    nameSong: "Có Chơi Có Chịu",
    nameAuthor: "Karik",
    time: "04:46",
    publishDate: "25/09/2022",
  },
  {
    id: 7,
    source: "song-07",
    avatar: "avt-07",
    nameSong: "Nàng Thơ",
    nameAuthor: "Hoàng Dũng",
    time: "05:21",
    publishDate: "25/09/2022",
  },
  {
    id: 8,
    source: "song-08",
    avatar: "avt-08",
    nameSong: "Ngày Đầu Tiên",
    nameAuthor: "Đức Phúc",
    time: "03:33",
    publishDate: "25/09/2022",
  },
  {
    id: 9,
    source: "song-09",
    avatar: "avt-09",
    nameSong: "Waiting For You",
    nameAuthor: "Mono",
    time: "04:28",
    publishDate: "25/09/2022",
  },
  {
    id: 10,
    source: "song-10",
    avatar: "avt-10",
    nameSong: "Kỳ Vọng Sai Lầm",
    nameAuthor: "Tăng Phúc, Nguyễn Đình Vũ, Yuno Bigboy",
    time: "02:46",
    publishDate: "25/09/2022",
  },
];

let [...songList] = songs;
// songList = handleSortBy(0);
let audio = document.querySelector("audio");
let bodySelector = document.body;

let startBtn = document.getElementById("play-or-pause");
let nextBtn = document.getElementById("next-btn");
let prevBtn = document.getElementById("prev-btn");
let rangeBar = document.getElementById("range-music");
let progress = document.getElementById("duration");
let soThuTu = document.querySelectorAll(".wrapper-1 .item-1");
let thumbnail = document.querySelectorAll(".item-2 img");
let nameSong = document.querySelectorAll(".wrapper-2 h2");
let nameAuthor = document.querySelectorAll(".name-author");
let timeEnd = document.querySelectorAll(".wrapper-3 .item-4");
let timeDuration = document.querySelector("#time-end");
let bigThumbnail = document.querySelector("#music-picture>img");
let nameMusicInBigThumbnail = document.querySelector(".name-of-music-left");
let nameSingerBigThumbnail = document.querySelector("#name-of-singer");
let pdInBigThumbnail = document.querySelector("#publication-date");
let musicPlayingBar = document.querySelector("#playing-music-bar__left");
let musicThumbnailInBar = musicPlayingBar.children[0].children[0];
let nameSongBar = document.querySelector("#playing-music-bar__left .nameSong ");
let nameSingerBar = document.querySelector(
  "#playing-music-bar__left .nameMusician "
);
const randomBtn = document.querySelector("button#random-btn");
const iconPlayingBtn = document.querySelector("button.run-music");
let songContainerParent = document.querySelector("#list-songs-container");
let songContainer = document.querySelectorAll(
  "#list-songs-container .song-container"
);
const sortOpt = document.querySelector("div#sort-option");
const sortSongBtn = document.getElementById("sortSong");
const optList = document.getElementsByClassName("opt-list");
const searchInput = document.getElementById("search-input");
const searchBar = document.getElementById("search-bar");
const searchBtn = document.getElementById("searchBtn");
const searchResult = document.getElementById("search-result");



let curPosition = 0; //vi tri bai hat hien tai
let randomBtnStatus = 0; //nut random dg off
let activeSong = 0; //bai hat dang duoc tat, =1 thi bai hat dc bat

let mouseBlurSortSelection = false;
let myInput = "";
let contentResult = 0;

handleSortBtn();
handleSortSelection(songList);
function handleSortSelection(songList) {
  for (let i = 0; i < optList.length; i++) {
    optList[i].onclick = function () {
      songList = handleSortBy(i);
      console.log(i);
      console.log(songList);
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

swapMusicWhenClick();

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
handleStartBtn();

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
    render;
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
    soThuTu[i].innerText = `${i + 1}`;
    thumbnail[i].src = `././music avatar/${songList[i].avatar}.jpg`;
    nameSong[i].innerText = `${songList[i].nameSong}`;
    nameAuthor[i].innerText = `${songList[i].nameAuthor}`;
    timeEnd[i].innerText = `${songList[i].time}`;
  }
}
autoRenderPage(); //render list nhac khi vua vao

function render(viTri) {
  songContainer[viTri].classList.add("playing");
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

selectMusic(0); // hien thi bai dau tien khi vua render

function playingMusic(pst) {
  audio.src = `./music/${songList[pst].source}.mp3`;
  audio.onplay = function () {
    iconPlayingBtn.style.display = "block";
    handleSpinThumbnail(true);
  };
  audio.onpause = function () {
    console.log("pausing");
    handleSpinThumbnail(false);
    iconPlayingBtn.style.display = "none";
  };
  songContainer[pst].classList.add("playing"); //them class playing cho bai hat dang phat
  curPosition = pst; //vi tri hien tai khi phat cua bai hat
  for (let i = 0; i < songList.length; i++) {
    if (i != pst) {
      songContainer[i].classList.remove("playing"); //xoa bai hat dang phat khi chon bai moi
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
  selectMusic(pst);
  handleRangeBar();
  playingMusic(pst);
  startBtn.children[0].className = "fa-solid fa-pause";
  audio.play();
}

/**ham chua vi tri tung bang nhac */
function swapMusicWhenClick() {
  for (let i = 0; i < songList.length; i++) {
    songContainer[i].onclick = function () {
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
disablePrevBtn();

//handle click next or return btn
preNextWhenClick();
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
randomSongBtn();
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

function removeVietnameseTones(str) {
  str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
  str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
  str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
  str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
  str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
  str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
  str = str.replace(/đ/g, "d");
  str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, "A");
  str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, "E");
  str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, "I");
  str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, "O");
  str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, "U");
  str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, "Y");
  str = str.replace(/Đ/g, "D");
  // Some system encode vietnamese combining accent as individual utf-8 characters
  // Một vài bộ encode coi các dấu mũ, dấu chữ như một kí tự riêng biệt nên thêm hai dòng này
  str = str.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, ""); // ̀ ́ ̃ ̉ ̣  huyền, sắc, ngã, hỏi, nặng
  str = str.replace(/\u02C6|\u0306|\u031B/g, ""); // ˆ ̆ ̛  Â, Ê, Ă, Ơ, Ư
  // Remove extra spaces
  // Bỏ các khoảng trắng liền nhau
  str = str.replace(/ + /g, " ");
  str = str.trim();
  // Remove punctuations
  // Bỏ dấu câu, kí tự đặc biệt
  str = str.replace(
    /!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g,
    " "
  );
  return str;
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



function createResultSearch(thumbnail){
  let searchResultContent = document.createElement('li');
  let imgSearchResult = document.createElement('img');
  imgSearchResult.src = `././music avatar/${thumbnail}.jpg`;
  searchResultContent.appendChild(imgSearchResult);
  searchResult.children[0].appendChild(searchResultContent);
}

function removeResultSearch(songSearchedList){
  
}
function renderSearchResult(){

}
let preSongSearchedList = [];
function handleSearchResult() {
  let songSearchedList = songList.filter((song) => {
    let nameSongVal='';
    for (let i = 0; i < myInput.length; i++) {
          nameSongVal += song.nameSong[i];
    }
    if(myInput != ''){
      // để có thể tránh việc render tất cả khi myInput = '';
      return nameSongVal == myInput;
    }
  });
  songSearchedList.forEach((songSearched,index) => {
    //neu bai hat bi xoa, set lai isDuplicate = false;

    if(preSongSearchedList[0] != songSearchedList[0]){
      createResultSearch(songSearched.avatar);
      
    } else {
      console.log('trung')
    }
    preSongSearchedList = songSearchedList;
  })
  
  
}

function handleSearchBar() {
  searchInput.onfocus = function () {
    showSearchResult();
    console.log(searchResult);
  };
  searchInput.onblur = function () {
    hideSearchResult();
  };
  searchInput.oninput = function () {
    myInput = this.value;
    // console.log(contentResult)
    handleSearchResult();
  };
}
handleSearchBar();

playingMusic(0);
