const img = document.querySelector("#b1");
const score = document.querySelector("#score");
let j=0;
const sound = new Audio("pop3.mp3");
function changeTo2()
{
    img.src = "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FdcoqqD%2FbtrFKaCMe71%2F8xcgd9ltnhJO9v7GVugsdk%2Fimg.png";
    console.log(j);
    scorePlus();
    sound.play();
}
function changeTo1()
{
    img.src = "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FHMOg9%2FbtrFKHG5RUb%2F0IQZZ5RiooYNYoPHSIRtZk%2Fimg.png";
    console.log(j);

}
img.addEventListener("mouseup",changeTo1);
img.addEventListener("mousedown",changeTo2);
img.addEventListener("touchstart",changeTo2);
img.addEventListener("touchmove",changeTo1);
function scorePlus(){
    j++;
    score.innerHTML=j;
}