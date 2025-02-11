// Task 1 - 46 setir
// Task 2 -

// Task-1
// Müştəri Kredit kartı ilə işləmək üçün obyekt yaradın.Müştərinin hesabı haqqında əsas məlumatları və onunla işləmə metodlarını əhatə edən client obyekti yaradın.
// # client obyekti yaradın.

// Kredit kartı müştərisi üçün aşağıdakı xüsusiyyətlərə malik obyekt yaradın:

// Tam adı müştərinin (fullName).
// Kredit limiti (creditLimit).
// Cari balans (balans).
// Minimum ödənişin faizi (precentOfMinPayment).
// # Cari balans əldə etmək üçün getBalance metodu əlavə edin.

// getBalance metodu, balans mənfi olarsa, müştərinin balansı və ya onun borcu haqqında bir mesaj qaytarır.

// Metodun çağırılma nümunəsi:

// console.log(client.getBalance()).

// Mesaj nümunələri:
// «Balansınız 3000»,
// «Borcunuz 2000».

// # Minimum ödəniş məbləği üçün getMinPaymant() metodunu əlavə edin.

// getMinPaymant metodu borc məbləği və minimum ödəniş faizinə əsasən formalaşan minimum ödəniş məbləği haqqında mesaj qaytarır. Əgər borc yoxdursa, metod müvafiq mesajı qaytarır.

// Metodun çağırılma nümunəsi:

// console.log(client.getMinPaymant()).
// Mesaj nümunələri:
// «Minimum ödənişiniz 240»,
// «Sizin borcunuz yoxdur».

// # Hesabdan pul silmək üçün withdraw(amount) metodu əlavə edin.

// withdraw metodu cari balansı parametr kimi ötürülən pul məbləği qədər azaldır. Mövcud vəsait kifayət deyilsə (cari balans və kredit limitinin cəmi), metod konsola müvafiq mesajı çıxarır.

// # Hesaba pul əlavə etmək üçün refill(amount) metodu əlavə edin.

// refill metodu parametr kimi qəbul edilən məbləğ qədər balansı artırır.

// const client = {
//     fullName: "Akshin",
//     creditLimit: 10,
//     balans: 8,
//     precentOfMinPayment: 5,
//     getBalance(balans = this.balans) {
//       // let balans = balans;
//       if (balans >= 0) {
//         console.log("Balansiniz:" + " " + balans);
//       } else if (balans < 0) {
//         console.log("Borcunuz:" + " " + balans);
//       } else {
//         console.log("Error");
//       }
//     },
//     getMinPaymant(balans = this.balans) {
//       if(balans >= 0 ){
//           console.log("Minimum odenishiniz" + " " + balans);
//       }else if(balans < 0){
//           console.log("Sizin borcunuz yoxdur");
//       }else{
//         console.log("Error");
//     }
//     },
//     withdraw(amout = this.balans){{
//         if (this.balans > 0 ) {
//             let a = this.balans - amout;
//             console.log(a);
//         }else if(this.balans <= 0){
//             console.log(this.balans + this.creditLimit);
//         }else{
//             console.log("Error");
//         }
//     }},
//     refill(a,balans = this.balans){
//         let b = a + balans;
//         console.log(b);

//     }
// };

// client.getBalance();
// client.getMinPaymant();
// client.withdraw(); // - pul silmeg metodu
// client.refill(4); // - elave etmek meglebi
// console.log(client.balans);

// Task-2
// Kalkulyator obyekti yaradın.
// Əsas riyazi hesablamaları yerinə yetirən və nəticəni yaddaşda saxlaya bilən kalkulyator obyekti yaradın.

// Obyekt yaradın və toplama, çıxma, vurma, bölmə üçün metodlar əlavə edin. Metodlar parametr kimi 2 ədəd götürür və bu ədədlər üzərində müvafiq əməliyyatın nəticəsini qaytarır. Yaddaşla işləmək imkanı əlavə edin.

// Obyektə dəyəri saxlamaq üçün özəllik əlavə edin. Onunla işləmək üçün metodlar yaradın:
// dəyərin yaddaşda saxlanması, yaddaşın təmizlənməsi, yaddaşdakı dəyərə ədəd əlavə edilməsi, yaddaşdan dəyərin oxunması.

// const kalkulyator = {
//     ed1: 3,
//     ed2: 5,

//     toplama(a = this.ed1, b = this.ed2){
//         let c = a + b;
//         console.log("Toplama" + ": " + c);
//     },
//     cixma(a = this.ed1, b = this.ed2){
//         let c = a - b;
//         console.log("Cixma" + ": " + c);
//     },
//     vurma(a = this.ed1, b = this.ed2){
//         let c = a * b;
//         console.log("Vurma" + ": " + c);
//     },
//     bolme(a = this.ed1, b = this.ed2){
//         let c = a / b;
//         console.log("Bolme" + ": " + c);
//     }
// }

// kalkulyator.toplama();
// kalkulyator.cixma();
// kalkulyator.vurma();
// kalkulyator.bolme();
