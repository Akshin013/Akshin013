//## Task 1:
//### **logGreeting() adında funksiya tərtib edin. Funksiya name adında parametr qəbul etsin və konsola «[name] is a JS developer» mesajı çıxarsın.**

//function logGreeting(name) {
//    name = prompt("Your name?");
//    console.log(name + " " + "is a JS develope")
//};
//
//logGreeting();

//## Task 2:
//### **İstifadəçi adını parametr kimi qəbul edən və konsola «[İstifadəçi adı] is active now» mesajı çıxaran funksiya tərtib edin.Funksiyanı 3 müxtəlif ad üçün çağırın.**


//function name(a, b, c) {
//    a = prompt("Name 1");
//    b = prompt("Name 2");
//    c = prompt("Name 3");
//
//    console.log(a + " " + "is active now");
//    console.log(b + " " + "is active now");
//    console.log(c + " " + "is active now");
//}
//
//name()

//## Task 3:
//### **Parametr olaraq üç ədəd qəbul edən və konsolda ən böyüyünü göstərən bir funksiya tərtib edin.Fərqli arqumentlərlə funksiyanı üç dəfə çağırın və fərqli arqumentlər göndərək test edin.**

//function Task(a, b, c) {
//    a = +prompt("eded 1")
//    b = +prompt("eded 2")
//    c = +prompt("eded 3")
//
//    if (a > b && a >c) {
//        console.log(a);
//    } else if(b > a && b > c){
//        console.log(b);
//    } else if(c > a && c >b){
//        console.log(c);
//    } else{
//        console.log(Error)
//    }
//}
//
//Task()


//## Task 4:
//### **Rubl və dollarla hesab qəbul edən və bütün hesablardakı məbləğin cəmin rublla göstərən funksiya yazın.
//Tutaq ki, müştərinin rubl hesabında 1200 rubl, dollar hesabında isə 20 dollar var.Bir dollar üçün məzənnə 75 rubl təşkil edir. Bu halda, funksiya belə mesaj göstərməlidir: Bütün depozitlər üzrə məbləğ: 2700 rubl.**

//function Valuta(a, b) {
//        a = +prompt("RUB");
//        b = +prompt("USD");
//
//        b = b * 75;
//        let c = +(a + b); 
//        console.log(c + " " + "RUB");
//
//
//
//}
//Valuta()
//
//## Task 5:
//### **Parametr kimi iki ədəd qəbul edən və onlardan ən kiçiyini qaytaran min() adında funksiyası tərtib edin.**

//function min(a, b) {
//    a = +prompt("a");
//    b = +prompt("b");
//
//    if (a < b){
//        console.log(a);
//    } else if (b < a){
//        console.log(b);
//    }else{
//        console.log(Error);
//    }
//
//
//}
//
//min()


//## Task 6:
//### **Parametr olaraq 2 fərqli mətn qəbul edən və onları birləşdirib geri döndürən `concatenateStrings()` adında funskiya yazın**

//function concatenateStrings(a, b) {
//    a = prompt("a");
//    b = prompt("b");
//
//    c = a + b; 
//
//    console.log(c);
//    
//}
//
//concatenateStrings();

//## Task 7:
//### **Parametr kimi _length_ və _width_ dəyərlərini alan və həmin parametrlərə görə kvadratın sahəsini hesablayıb consola çıxaran `calculateRectangleArea()` funksiyası yazı**

//function calculateRectangleArea(a, b) {
//    a = +prompt("_length_");
//    b = +prompt(" _width_ ");
//
//    let c = a * b;
//
//    console.log(c);
//
//}
//
//calculateRectangleArea()


//## Task 8:
//### **Bir ədədi parametr kimi qəbul edən və onun cüt olub olmadığını yoxlayan `isEven()` adlı funksiya yazın. Rəqəmin cüt olub olmadığını göstərən bir mesajı konsolda göstərin.**

//function isEven(a) {
//    a = +prompt("Eded");
//
//    if (a % 2 === 0){
//        console.log("Eded cutdu")
//    } else {
//        console.log("Eded cuttdil")
//    }
//}
//
//isEven()