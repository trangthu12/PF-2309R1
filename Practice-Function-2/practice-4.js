/**
 * Viết hàm findPrimes() nhận vào hai số nStart, nEnd và in ra tất cả số nguyên tố trong khoảng [nStart, nEnd]
 * Nếu có, trả về true. Ngược lại, trả về false.
 * 
 * Ví dụ: 
 * ifindPrimes(2, 24)
 * 
 * Output:
 * 2
 * 3
 * 5
 * 7
 * 11
 * 13
 * 17
 * 19
 * 23
 *  
 * */ 


function findPrimes(nStart, nEnd) {
    let check = true;
    let i = nStart;
   
   
        while ( i < nEnd){
            if( nEnd % i == 0){
                console.log(i);

                check = false;
            }
           i++;
        }
        if(check = true){
            console.log(i);
        }
        return(i);
    }
   
    


findPrimes(2, 24);