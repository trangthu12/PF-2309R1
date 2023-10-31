let btnAction = document.getElementById("btn-action");
btnCheck.addEventListener('click', () =>{
    let pointMath = parseInt(document.getElementById("math").value);
    let pointLiterature = parseInt(document.getElementById("literature").value);
    let pointEnglish = parseInt(document.getElementById("english").value);
    let area = document.getElementById("KV").value;

    let totalPoin = pointMath + pointLiterature + pointEnglish + area;

    switch(area){
        case KV1:
            totalPoin = pointMath + pointLiterature + pointEnglish + 0.75;
            alert('Tổng điểm ĐH khối D của bạn là: ' + totalPoin);
            break;
    }
});
