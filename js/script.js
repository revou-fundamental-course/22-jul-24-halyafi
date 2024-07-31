


function formValidation() {
    let name = document.getElementById("input-name").value;
    console.log(name);

    // pengecekan dimana name tidak boleh ''
    if (name == '') {
        // code ini akan dieksekusi ketika name = ''
        alert('maaf input anda kosong');
    } else {
        // code ini akan dieksekusi ketika name tidak ''
        alert('sukses menginput');
    }
}
    
let indexSlide = 1; // [0,1,2]
showSlide();

function nextSlide(n) {
    showSlide(indexSlide +- n);
}

function showSlide(n) {
    let listImage = document.getElementsByClassName("main-content-banner");
    console.log(listImage);

    //algoritma untuk mereset index dari slidenya
    if(n > listImage.length) indexSlide = 1;

    //algoritma untuk menghilangkan semua gambar
    let index = 0;
    while (index < listImage.length) {
        listImage[index].style.display ='none'
        index++;
    }

    //algoritma untuk memunculkan 1 gambar saja
    listImage[indexSlide - 1].style.display = 'block';
}

//algoritma untuk auto slidenya
setInterval(() => nextSlide(1),3000)
     

