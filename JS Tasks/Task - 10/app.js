// 1. 2. 3 4 5. 6.7. 8. 9

// Task 1

// 10 rəqəmdən ibarət massiv yaradın. Massiv deyil, arqumentlər qəbul edən Math.max() funksiyasından istifadə edərək onların arasında maksimumu tapın. Spread-operatorundan istifadə edərək massiv arqumentlərini funksiyaya ötürün.
// let a = [1,2,3,4,5234,6,7,8,9,10]
// console.log(Math.max(...a));


// Task 2
// Proqramlaşma şöbəsinin işçilərini saxlayan massiv yaradın.
// let employees = [
//  ["Jaylee Macy", "marketing"],
// ["John Smith", "management"],
// ["Blossom Hartley", "design"],
// ["Austin Carpenter", "marketing"],
// ["Joan Knowles", "development"],
// ["Sally Nunez", "management"],
// ["Laurel Ward", "development"],
// ["Lark Simon", "marketing"],
// ["Jane Stone", "management"],
// ["Courtney Olson", "development"]
//  ];


// Task 3
// Tam ədədlər massivini qəbul edən, onu artan ardıcıllıqla sıralayan və sıralanmış massivi geri qaytaran sortArray() funksiyasını yazın.





// Task 4
// Rəqəmlər massivini parametr kimi qəbul edən və əgər həmin massivdə mənfi ədədlər varsa onları massiv şəklində geri qaytaran, yoxdursa uyğun mesajı geri funksiya yazın.

function taskFunc(a) {
    for (let i = 0; i < a.length; i++) {
        let b = a[i]
        if (b < 0) {
        //     let c = []
        //     c.push(b)
        //     console.log(c);
            
            console.log(b);
            console.log("-");
            
        } else if(b > 0){
            console.log(b);
            console.log("+");
            
        }else{
            console.log("Error");
            
        }
        let c = []
        c.push(b)

        
        console.log(c);
    }
}

taskFunc([1, 5, -7, 3, -9, 4, -6, 2])

// Task 5
// Callback(geri çağırış) funksiyalarını yazın: printWithDashes, printWithHearts, printWithIndex.
// Nümunə:

// Massiv: const names = ["Michael", "Trevor", "Franklin", "Lamar", "Jimmy"];

// Funksiyalar:
//  1. names.forEach(printWithDashes); 
//  2. names.forEach(printWithHearts);
//  3. names.forEach(printWithIndex);

// Nəticələr:
// 1-ci üçün:
//   -------------
// Michael
// -------------

//  -------------
// Trevor
// -------------
//  -------------
// Franklin
// -------------

// -------------
// Lamar
// -------------

// -------------
// Jimmy
// -------------

// 2-ci üçün:
//  💗💗💗💗 Michael 💗💗💗💗
// 💗💗💗💗 Trevor 💗💗💗💗
// 💗💗💗💗 Franklin 💗💗💗💗
// 💗💗💗💗 Lamar 💗💗💗💗
// 💗💗💗💗Jimmy 💗💗💗💗

// 3-cü üçün:
// 0
// Michael
// 1
// Trevor
//  2
// Franklin
//  3
// Lamar
//  4
// Jimmy

// const names = ["Michael", "Trevor", "Franklin", "Lamar", "Jimmy"];

// function taskFunc(a) {
//     a.forEach(a => {

//         // console.log("  -------------" +
//         //     a \n 
//         //     +
//         //     "-------------"
//         console.log("-------------");
//         console.log(a);
//         console.log("-------------");
        
        
        
//     });

    // a.forEach(a => {
    //     console.log("💗💗💗💗"+a+"💗💗💗💗");
     
    // })


    // for (let i = 0; i < a.length; i++) {
    //     console.log(i);
    //     console.log(a[i]);            
    // }

// }


// names.forEach(i in names => {
//     console.log(names[i]);
    
// });


// taskFunc(["Michael", "Trevor", "Franklin", "Lamar", "Jimmy"])

// Task 6
// Kebab-case formatında mətni parametr kimi qəbul edən və onu UPPER_CASE mətninə çevirən kebabToUpper() funksiyasını yazın.
// INPUT: console.log(kebabToUpper("first-user"));
// OUTPUT: FIRST_USER;

// function kebabToUpper() {
//     // console.log();
//     let a = prompt("Soz yazin")
//     console.log(a);
    
//     let b = a.toUpperCase()
//     let c = b.replace("-", "_")
//     console.log(c);
    
// }
// kebabToUpper()


// Task-7
// Orijinal massivin elementlərindən ibarət yeni massiv yaradın.

// mənfi ədədlər müsbət olublar;
// müsbət ədədlər ikiqat artırılıb.
// Input: [1, 5, -7, 3, -9, 4, -6, 2];

// Output: [2, 10, 7, 6, 9, 8, 6, 4]

// array = [1, 5, -7, 3, -9, 4, -6, 2];

// for (let i = 0; i < array.length; i++) {
//     // console.log(array[i]);
//      if (array[i] < 0 ) {
//         let a = array[i] - array[i] -  array[i];
//         console.log(a);
        
//         // console.log(a + array[i]);
        
//      }else if (array[i] > 0 ){
//         let b = array[i] * 2
//         console.log(b);
        
//      }

//     //  console.log(array);
     
//  }


// Task 8
// Adlar massivi verilib. Bir funksiya yazın, hansı ki parametr olaraq massiv qəbul edir. Həmin massivdə "A" hərfi ilə başlayan elementlərdən ibarət yeni massiv yaradıb, elə bir dəyər tapılmasa uyğun mesajı geri qaytarmalıdır.
// let namesArray = [
// "Alice",
// "Bob",
// "Catherine",
// "David",
// "Eva",
// "Andrew",
// "Frank",
// "Anna",
// "George",
// "Alex",
// ];

// for (let i = 0; i < namesArray.length; i++) {
//     const a = namesArray[i];
//     // console.log(a);
//     // console.log(a.charAt(0));
//     let b = a.charAt(0)
//     // console.log(b);

    
    
//     if (b === "A") {
//         // console.log("ads");
//         let z = []
//         z.push(a)
//         console.log(z);
        
//     }else{
//         // console.log("Error");
        
//     }
    
// } // MASSIVLARIN XAMISINI BIR MASSIVE YIGA BILMEDIM


// Task 9
// ƏDV xaric qiymətlər saxlayan massivini qəbul edən və ƏDV daxil olmaqla olan qiymətlərdən ibarət yeni massiv qaytaran funksiya yazın.
// Bütün bir departamentin bir il üçün ümumi maaşlarının cəmini qaytaran bir funksiya yazın.
// Ay nömrəsinə görə işçilərin aylıq maaşlarını massiv halında almaq üçün funksiya yazın.
// Rüb ərzində maaşların ümumi cəmini qaytaran funksiya yazın.
// Qeyd 1: Ayın nömrəsi elementin indeks nömrəsi ilə eyni deyil.Qeyd 2: salary massiviniz içərisində olan hər bir massivdə (10 ədəd) bir işçinin illik maaşının saxlanılmışdır.

// let salary = [

//  [60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60],
// [75, 75, 75, 75, 75, 75, 70, 77, 75, 75, 70, 75],
// [150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 180],
// [65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65],
// [80, 80, 80, 80, 80, 80, 80, 105, 105, 105, 105, 105],
// [65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65],
// [80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 120],
// [65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65],
// [80, 80, 80, 80, 80, 80, 80, 90, 90, 90, 90, 90],
// [75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 70, 75],
//  ];


