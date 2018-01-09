var inputItems = document.querySelectorAll(".input-field");
var resetAll = document.querySelector("#input-reset");
var radioBtns = document.querySelectorAll(".radio-btn");
var uploadFile = document.querySelector("#file");
var phoneNumber = document.querySelector("#phone-number");
var chosenFile = document.querySelector("#show-file");


//запрет на ввод буквенных символов

function testSymb(input) {
    phoneNumber.value = phoneNumber.value.replace(/[^0-9+]/, '');
}



//Отображать прикрепленный файл

function showFile() {
    var fileUpd = uploadFile.files[0].name;
    chosenFile.innerHTML = fileUpd;
    chosenFile.style.display = "inline-block";
}


//очистка формы

resetAll.addEventListener("click", function () {
    for(var resText = 0; resText < inputItems.length; resText++){
        inputItems[resText].value = "";
    }

    for(var resBtn =0; resBtn < radioBtns.length; resBtn++ ){
        radioBtns[resBtn].checked = false;
        this.blur();
    }
    phoneNumber.value = "+38";
});

var showIdeas = document.querySelector(".show-more");
var moreNews = document.querySelector(".container-block-left-core-more");

showIdeas.addEventListener("click", function () {
    moreNews.style.display = "block";
});
