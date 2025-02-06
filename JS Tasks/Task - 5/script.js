//Hər bir tapşırığı 2 yolla yazın (həm if/else, həm də switch)

//Task-1


//İstifadəçidən yaşı və alış-veriş məbləğini daxil etməsini istəyin. Alış-veriş məbləği və yaşa görə endirim tətbiq edin:
//18 yaşdan kiçiklərə 10% endirim.
//18-30 yaş arası müştərilərə 15% endirim.
//30-60 yaş arası müştərilərə 20% endirim.
//60 yaşdan yuxarı müştərilərə 30% endirim.
//100 AZN-dən yuxarı alış-veriş edənlərə əlavə 5% endirim.

//let a = +prompt("Age enter");
//let b =+ prompt("AZN");
//let c;
//// SWITCH CASE 
//switch (true) {
//    case (a < 18 && a > 0):
//        b = b / 100;
//        b = b * 90;
//        console.log(b + " azn");
//        break;
//    case (a >= 18 && a < 30):
//        b = b / 100;
//        b = b * 85;
//        console.log(b);
//        break;
//    case (a >= 30 && a < 60):
//        b = b / 100;
//        b = b * 80;
//        console.log(b);
//        break;
//    case (a >= 60):
//        b = b / 100;
//        b = b * 70;
//        console.log(b);
//        break;
//    default:
//        console.log("Ошибка");
//}
//
//switch (true) {
//    case (b > 100):
//        b = b / 100;
//        b = b * 95;
//        console.log(b);
//        break;
//    default:
//        // ничего не нужно делать, если b <= 100
//        break;
//}
//
//
//IF ELSE 

//if (a < 18 && a >0){
//    b = b / 100;
//    b = b * 90;
//    console.log(b + "azn");
//}else if (a >= 18 && a < 30){
//    b = b / 100;
//    b = b * 85;
//    console.log(b);
//}else if (a >=30 && a < 60){
//    b = b / 100;
//    b = b * 80;
//    console.log(b);
//}else if (a >= 60){
//    b = b / 100;
//    b = b * 70;
//    console.log(b);
//} else{
//    console.log("error");
//}
//
//if(b >100){
//    b = b / 100;
//    b = b * 95;
//    console.log(b)
//}else{
//
//}



//Task-2

//İstifadəçidən yaşı, üzvlük müddəti (il ilə) və üzvlük tipini (standart/gümüş/qızıl) daxil etməsini istəyin. Əsas şərtlərə əsasən üzvlük haqqını müəyyən edin:
//Standart üzvlər üçün aylıq 20 AZN.
//Gümüş üzvlər üçün 15 AZN (ilk 3 il üçün) və 12 AZN (3 ildən sonra).
//Qızıl üzvlər üçün 10 AZN (ilk 5 il üçün) və 8 AZN (5 ildən sonra).

//let a = +prompt("age");
//let b = prompt("Uzluk tipi");
//
//let c = "standart" ;
//let d = "gumus";
//let e = "gizil";
//
//
//SWITCH CASE 
//switch (true) {
//    case (b === c):
//        console.log("Aylig 20 AZN");
//        break;
//
//    case (b === d && a <= 3):
//        console.log("15 AZN");
//        break;
//
//    case (b === d && a > 3):
//        console.log("15 AZN");
//        break;
//
//    case (b === e && a <= 5):
//        console.log("10 AZN");
//        break;
//
//    case (b === e && a > 5):
//        console.log("5 AZN");
//        break;
//
//    default:
//        console.log("Error");
//        break;
//}
//IF ELSE 
//if(b === c){
//    console.log("Aylig 20 AZN");
//
//}else if(b === d && a <= 3){
//    console.log("15 AZN");

//}else if(b === d && a > 3){
//    console.log("15 AZN");
//}else if(b === e && a <= 5){
//    console.log("10 AZN");
//}else if(b === e && a > 5){
//    console.log("5 AZN");
//}else{
//    console.log("Error");
//}


// SWITCH CASE 

//let a = +prompt("age");
//let b = prompt("Uzluk tipi");
//           
//let c = "standart" ;
//let d = "gumus";
//let e = "gizil";
//
//switch (b) {
//    case d:
//        console.log("15 AZN");
//        break;
//
//    default:
//        break;
//}
//
//switch (a){
//    case (> 3):
//        console.log("s")
//}



//Task-3

//İstifadəçidən bir ədəd daxil etməsini istəyin. Bu ədədin müəyyən aralıqlarda olub olmadığını yoxlayın:
//10 ilə 20 arasında olduqda "Ədəd 10 və 20 arasında."
//21 ilə 30 arasında olduqda "Ədəd 21 və 30 arasında."
//31 ilə 50 arasında olduqda "Ədəd 31 və 50 arasında."
//Hər hansı başqa bir halda "Ədəd müəyyən aralıqdan kənardır."


//let a = +prompt("Ededi yazin");
//
//IF ELSE 
//if(a >= 10 && a <= 20){
//    console.log("Ədəd 10 və 20 arasında.");
//}else if(a >= 21 && a <= 30){
//    console.log("Ədəd 21 və 30 arasında.");
//}else if(a >= 31 && a <= 50){
//    console.log("Ədəd 31 və 50 arasında.");
//}else {
//    console.log("Ədəd müəyyən aralıqdan kənardır.");
//}i <= 900
//// SWITCH CASE
//switch (true) {
//    case (a >= 10 && a <= 20):
//        console.log("Ədəd 10 və 20 arasında.");
//        break;
//    case (a >= 21 && a <= 30):
//        console.log("Ədəd 21 və 30 arasında.");
//        break;
//    case (a >= 31 && a <= 50):
//        console.log("Ədəd 31 və 50 arasında.");
//        break;
//    default:
//        console.log("Ədəd müəyyən aralıqdan kənardır.");
//        break;
//}


