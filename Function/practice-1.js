/**
 * Bài 1:
    Viết hàm sumEven() nhận vào một số `n` và in ra tổng các số chẵn từ 2 đến n.
    Ví dụ:
    sumEven(10)

    Output:
    30
 */
let total = 0;

function sumEven(n) {
    for(let i = 0; i <= n; i++){
      if( i % 2 == 0){
         total += i;
      }
    }
}

sumEven(10);
console.log(total);