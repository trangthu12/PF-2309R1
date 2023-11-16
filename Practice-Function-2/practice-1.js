/**
 * Viết hàm isLeapYear() nhận vào một số năm và kiếm tra xem đó có phải là năm nhuận hay không.
 * Nếu có, trả về true. Ngược lại, trả về false.
 * 
 * Ví dụ: 
 * isLeapYear(2016)
 * 
 * Output:
 * false
 *  */ 
function isLeapYear(year) {
    // let year = parseInt(prompt("Nhập năm: "));
    if (year % 4 == 0){
        if (year % 100 == 0){
            if (year % 400 == 0){
                console.log("true");
            }else{
                console.log("false");
            }
            }else{
            console.log("true");
        }
     }else{
        console.log( "false");
    }
    return year;
}

console.log(isLeapYear(2016));