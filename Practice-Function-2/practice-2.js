/**
 * Viết hàm calcFactorial() nhận vào một số nguyên và trả về giá trị giai thừa của số nguyên đó
 * 
 * Ví dụ: 
 * calcFactorial(4)
 * 
 * Output:
 * 24
 *  
 * */ 

function calcFactorial(number) {
    if (number === 0)
    {
       return 1;
    }
     return number * calcFactorial(number-1);
            
   }
  

console.log(calcFactorial(4));