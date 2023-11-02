//bai 1
let btnAction = document.getElementById("btn-action");
btnAction.addEventListener("click", () => {});
let n = parseInt(document.getElementById("number").value);
for(i = 0; i <= n; i++){
    if(i % 2 === 0){
        let total = i + i;
        console.log(i);
    }
}