/**
 * Hãy tạo một lớp `Rectangle` gồm có:
 * - Thuộc tính: chiều dài, chiều rộng hình chữ nhật
 * - Constructor nhận vào các thông tin khởi tạo thuộc tính
 * - Phương thức tính diện tích, chu vi
 * - Phương thức showInfo() log ra các thông tin dài, rộng,
 * diện tích, chu vi
 * 
 * Tạo ra các object hình chữ nhật từ Class Rectangle và
 * in ra thông tin của các object vừa tạo
 */
class Rectangle{
    constructor(width, height){
        this.width = width;
        this.height = height;
    }
    areaRectangle(){
    return this.width * this.height;
    }
    perimeterRectangle(){
     return  (this.width + this.height) * 2;
    }
    showInfo(){
        console.log(`Chieu dai hinh chu nhat la: ${this.height}`);
        console.log(`Chieu rong hinh chu nhat la: ${this.width}`);
        console.log(`Dien tich hinh chu nhat la: ${this.areaRectangle()}`);
        console.log(`Chu vi hinh chu nhat la: ${this.perimeterRectangle()}`);
        
        

    }
}
rectangle1 = new Rectangle("300","100");

rectangle2 = new Rectangle ("100", "50");
rectangle1.showInfo();
rectangle2.showInfo();