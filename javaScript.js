let tabs = document.querySelectorAll('.tabs_toggle'),
    contents = document.querySelectorAll('.tabs_content');

tabs.forEach((tab, index) => {
    tab.addEventListener('click' , () => {
        contents.forEach((content) => {
            content.classList.remove('is-active');
        });
        tabs.forEach((tab) => {
            tab.classList.remove('is-active');
        });
        contents[index].classList.add('is-active');
        tabs[index].classList.add('is-active');
    });
});



const fulImgBox = document.getElementById("fulImgBox"),
    fulImg = document.getElementById("fulImg")

function openFulImg(reference){
    fulImgBox.style.display = "flex"
    fulImg.src = reference
}

function closeImg(){
    fulImgBox.style.display = "none";
}