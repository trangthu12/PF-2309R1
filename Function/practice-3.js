// Viết hàm solveEquation() để giải phương trình 
// bậc nhất ax + b = 0 với a và b là 2 tham số đầu vào.
function solveEquation(a, b) {
    if (a == 0 && b == 0){
        console.log('Phương trình vô số nghiệm');
    }
    else if (a != 0 && b == 0){
        console.log('Phương trình có nghiệm x = 0');
    }
    else if (a == 0 && b != 0){
        console.log("Phương trình vô nghiệm");
    }
    else {
       console.log('Phương trình có nghiệm x = ' + (-b/a));
    } 
}

solveEquation(2, -4);
solveEquation(0, 0);
solveEquation(0, -4);