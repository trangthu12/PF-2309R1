/**
 * Sở giao thông cần theo dõi việc đăng ký xe của người dân.
 * Dựa vào dung tích xylanh của xe, sở giao thông sẽ tính
 * mức thuế phải đóng trước bạ khi mua xe như sau:
 * 
 * - Dưới 100cc, 1% giá trị của xe
 * - Từ 100 đến 200 cc, 3% giá trị của xe
 * - Trên 20cc, 5% giá trị của xe
 * 
 * Hãy thiết kế class `Vehicle` với các thông tin như sau:
 * - Thuộc tính: tên chủ xe, loại xe, dung tích, trị giá
 * - Constructor khởi tạo các thuộc tính thông qua params
 * - Hàm tính giá trị thuế trước bạ dựa vào dung tích xylanh
 * - Hàm showInfo in ra các thông tin của xe: tên chủ xe,
 * loại xe, dung tích, trị giá, thuế phải nộp
 * 
 * Khởi tạo các đối tượng Vehicle và in ra các thông tin
 * tương ứng của các đội tượng được khởi tạo
 */
class Vehicle{
    constructor(vehicleOwnerName,rangeVehicle,capacity,price){
        this.vehicleOwnerName = vehicleOwnerName;
        this.rangeVehicle = rangeVehicle;
        this.capacity = capacity;
        this.price = price;
    }
    registrationTax(){
        if (this.capacity > 100){
            return this.price * 1 / 100;
        } else if(this.capacity < 200){
            return this.price * 3 / 100;
        }else if(this.capacity > 200){
            return this.price * 5 / 100;
        }
    }
    showInfo(){
        console.log(`Ten chu xe : ${this.vehicleOwnerName}`);
        console.log(`Loai xe : ${this.rangeVehicle}`);
        console.log(`Dung tich cua xe : ${this.capacity}`);
        console.log(`Gia tri cua xe : ${this.price}`);
        console.log(`Thue truoc ba la: ${this.registrationTax()}`);
        
    }
}
 vehicle1 = new Vehicle("Nguyen Van A", "Honda", "50", "20000000");
 vehicle1.showInfo();