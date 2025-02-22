// Task 1
// Üç qrup yoldaşının adlarından ibarət massiv yaradın; Başqa bir qrup yoldaşının adını massivin sonuna əlavə edin; İlk adı silin; Massivi konsola çıxarın.

// let users = ["Yunis", "Namig", "Fexriyye"];
// users.push("Akshin")
// users.shift();
// console.log(users);

// Task 2
// Üç addan ibarət massiv yaradın. Massivin ikinci elementinin dəyərini “Hello” ilə əvəz edin. Massivi konsola çıxarın.

// let users = ["Akshin", "Yunis", "Namiq"];

// users[1]="Hello"

// console.log(users);

// let b = users[3]="sd"
// // let b = users.indexOf("ba")
// console.log(users);


// Task 3
// 5 rəqəmdən ibarət massiv yaradın. Orijinal massivin surətini çıxarın və yeni massivin bütün elementlərini ikiqat artırın. Orijinal massivin dəyişmədiyini yoxlayın.

// const numbers = [1,2,3,4,5];
// let  b = []
// console.log(numbers);

// numbers.forEach((num) => {
//     b.push(num * 2)
//     console.log(b);
// })


// Task 4
// Massiv verilib. "Episode 4: New Hope", "Episode 5: The Empire Strikes Back" və bu kimi mesajları ardıcıl olaraq konsola çıxarın. Massiv elementlərini düzün.

// let arr = ['New Hope', 'The Empire Strikes Back', 'Return of the Jdi'];
// Belə şəkildə:
// //Episode 4: New Hope
// //Episode 5: Empire strikes back
// //Episode 6: Return of the Jdi

let arr = ["New Hope", "The Empire Strikes Back", "Return of the Jdi"];


for (let i = 0; i < arr.length; i++) {
        console.log(`Episode ${i + 4}: ${arr[i]}`);
        
}


// arr.forEach((i) =>{
//     console.log(i);

// })



// Task 5
// İstifadəçidən vergüllə ayrılmış beş ədədi daxil etməyi xahiş edin və onları massivdə saxlayın. Ən kiçik ədədi konsola çıxaran proqram yazın

// function func(a, b, c, d, e) {
//     let cem = [];
//     cem.push(a, b, c, d, e)
//     console.log(cem);

//     if(a<b && a<c && a<d && a<e){
//         console.log(a);
//     }else if(b<a && b<c && b<d && b<e){
//         console.log(b);
//     }else if (c<b && c<a && c<d && c<e){
//         console.log(c);
//     }else if (d<b && d<c && d<a && d<e){
//         console.log(d);
//     }else if (e<b && e<c && e<d && e<a){
//         console.log(e);
//     }
// }

// func(3,54,6,23,4);
