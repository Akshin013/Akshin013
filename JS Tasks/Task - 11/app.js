// Task-1
// Siyahının ilk elementini konsola çıxarın.

// let a = document.querySelector("ul");
// console.log(a.firstElementChild);

// Task-2
// Yalnız JS-kodundan istifadə edərək dəyişklik edin:
// Başlığı silin;
// Siyahının sonuna mətn ilə yeni bir bölmə TITAN RTX əlavə edin .

// let bashlig = document.querySelector("h1")
// bashlig.remove()
// console.log(bashlig);

// let a = document.querySelector("ul")
// a.lastElementChild.innerText = " TITAN RTX" 


// Task-3
// Yalnız JS-kodundan istifadə edərək dəyişklik edin:
// başlıq mətnini GeForce 20 Series olaraq 
// dəyişdirin
// fon rəngi stili primary klası olan elementləri #ebebeb rənginə dəyişdirin.

// let a = document.querySelector("h1")
// a.style.backgroundColor="red" // #ebebeb ISHDEMEDI 

// Task-4
// Siyahının "primary" klasına sahib olan bütün elementlərini konsola çıxarın.

// let a = document.querySelectorAll(".primary")
// console.log(a);


// Task-5

// Yalnız JS kodundan istifadə edərək sinifləri dəyişdirin:
// bütün siyahı elementlərinə item sinifi əlavə edin;
// siyahıda primary sinfi olmayan elementlərə secondary sinfi əlavə edin.


let a = document.querySelector("ul")
// // a.classList.remove("item")
// a.className = "VV"
// console.log(a);

for (let i = 0; i < a.length; i++) {
    const b = a[i];
    console.log(i);
    
}
