/**
 * Viết hàm isPrimeNumber() nhận vào một số nguyên và kiểm tra xem đó có phải là số nguyên tố hay không
 * Nếu có, trả về true. Ngược lại, trả về false.
 * 
 * Ví dụ: 
 * isPrimeNumber(4)
 * 
 * Output:
 * false
 *  
 * */ 
    let check = true;
    let i = 1;
function isPrimeNumber(number) {
    while ( i < number){
        if( number % i == 0){
            console.log("false");

            check = false;
        }
        i++;
    }
    return (number);
}

console.log(isPrimeNumber(4));