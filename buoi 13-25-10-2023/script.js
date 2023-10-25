let btnAction = document.getElementById("btn-action");

btnAction.addEventListener("click", () => {

    let time = parseInt(document.getElementById("hour").value);
    let level = parseInt(document.getElementById("level").value);

    if(time > 400 && level == 1){
        alert("Chúc mừng bạn đã được thưởng!");
        alert("Bạn được thưởng 1000$USD");
    }else if(time > 400 & level == 2){
        alert("Chúc mừng bạn đã được thưởng!");
        alert("Bạn được thưởng 2000$USD");
    }else{
        alert("Bạn không được thưởng");
    }
});