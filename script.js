alert("Selamat datang di Ticket APP \n 16+");

const umur = prompt("Masukkan umur anda dengan sesuai");

if (umur >= 16) {
    alert(" Lu Gw Ajak \n Silahkan Lanjut Untuk Memilih")
    const studio = prompt("Masukkan studio yang ingin dipesan \n A : Studio 1 \n B : Studio 2 \n C : Studio 3");

    let namaStudio
    if (studio == "A") {
        namaStudio = "Studio 1";
    } else if  (studio == "B"){
        namaStudio = "Studio 2";
    } else if  (studio == "C"){
        namaStudio = "Studio 3";
    }

  if (studio == "A" || studio == "B" || studio == "C") {
    const film = prompt("Pilih Film Yang Akan Ditonton \n 1 : The Legend Of El Man \n 2 : The Legend Of El Dikz \n 3 : The Duet Duel ElMan and ElDikz Reborn");

    let namaFilm
    if (film == "1") {
        namaFilm = "The Legend Of El Man";
    } else if  (film == "2"){
        namaFilm = "The Legend Of El Dikz";
    } else if  (film == "3"){
        namaFilm = "The Duet Duel ElMan and ElDikz Reborn";
    }

    if (film == "1" || film == "2" || film == "3") {
        const nama = prompt("Masukkan nama anda");

       alert(`Berikut Tiket anda \n Nama : ${nama} \n Umur : ${umur} \n Studio : ${namaStudio} \n Film : ${namaFilm}`); 

    } else {
        alert("Maaf film yang anda pilih tidak tersedia");
    }

  } else {
    alert("Anda harus memilih studio");
  }

} else {
    alert(`Maaf Anda Belum Cukup Umur`);
}