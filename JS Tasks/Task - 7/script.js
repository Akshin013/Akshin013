// Task-1
// Adınız, cinsiniz və doğum tarixiniz olan user obyekti yaradın (name, surname, gender, birthday). Konsola doğum tarixini çıxarın.
// let user = {
//     ad: "Akshin",
//     gender: "men",
//     birthday: 2006, 

// }

// console.log(user.birthday);


// Task-02
// Obyektə yaş (age) əlavə edin və doğum tarixini silin.İstifadəçi məlumatları olan bir obyekt verilib.Bu obyektə yaş (age) əlavə edin və doğum tarixini silin.Alınmış obyekti konsola çıxarın.

// user.age=19;
// delete user.birthday;
// console.log(user);

// Task -04 - 3
// Object-i _key: value_ olaraq consolda göstərin. Məs:

// _name: Rasim_
// _surname: Abbasov_

// let user = {
//     _name: "Akshin",
//     _surname: "Gadimov"
// }
// console.log(user);


// Task-04
// Obyektə metodlar əlavə edin. Obyekt verilib. Ona növbəti metodları əlavə edin: _setAge()_ — istifadəçi yaşını dəyişdirən metoddur. _getYearsBeforeRetirement()_ — pensiyaya qədər istifadəçinin qalan illərinin sayını qaytaran metoddur.Bu metodları çağırın.

// let user = {
//     _setAge()_,
//     _getYearsBefore()_
// }

// console.log(user._setAge);
// console.log(user._getYearsBefore);


// Task-05
// _prop2Taker()_ adinda funksiya yaradin. Argument kimi obyekt alsin. Hemin obyektin 'prop-2' propertysinin value-nu cixarsin. Mes:
// prop2Taker({ one: 1, 'prop-2': 2}) // 2
// prop2Taker({ 'prop-2': 'two', prop: 'test'}) // 'two'

// const user = { 
//     "prop-2": "Akshin",
//     gender: "men",
//     birthday: 2006, 
// }

// function funksiya (user = this.user) {
//     console.log(user);
    
// }

// funksiya(user["prop-2"])


// Task-06
// _propertyTaker()_ adinda funksiya yaradin. Argument kimi obyekt (obj) ve string (proprtyName) alsin. Hemin obyektin verdiyim propertyni cixarsin. Mes:
// _propertyTaker({ continent: 'Asia', country: 'Japan'}, 'continent') // 'Asia'_
// _propertyTaker({ country: 'Sweden', continent: 'Europe'}, 'country') // 'Sweden'_
// _propertyTaker({name:'ali', age:12}, 'name') // 'ali'_




function funksiya(params) {
    
}



// Task-07

// _existsAndTruthy()_ adinda funksiya yaradin. 2 ədəd argument alır: obyekt(obj) ve string (propertyName). Eger hemin obyektden o adda property varsa ve truthy-dirse, true qaytarsin eks halda false qaytarsin. Mes,*


// _existsAndTruthy({a:1,b:2,c:3},'b') // true_

// _existsAndTruthy({x:'a',y:null,z:'c'},'y') //_
// _false (obyektde 'y' var amma falsy-di ona gore false)_

// _existsAndTruthy({x:'a',b:'b',z:undefined},'z') // false_
// _(obyektde 'z' yoxdu ona gore false)