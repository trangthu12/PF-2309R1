let btnAction = document.getElementById("btn-action");

btnAction.addEventListener("click", () => {
    //lay gia tri tu the input
    let billValue = parseFloat (document.getElementById("bill-value").value);
    alert(billValue);
    alert(typeof(billValue));

    if(billValue >= 2000000){
        alert(`Ban da duoc giam gia ${billValue * 0.1} `);

        //cap nhat gia tri don hang
        billValue = billValue * 0.9;
    } // thao tac xw ly tron truong hop ket qua kiem tra la False
    else{
        alert(`Ban duoc giam gia ${billValue * 0.05} `);
        billValue *= 0.95;
    }
    let infoElem = document.getElementById("info");
    infoElem.innerText = `Ban can thanh toan ${billValue} VND`;
});