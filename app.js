

//? 1.soru
// Birden fazla diziyi argüman olarak alan ve bu dizilerin tüm elemanlarını tek bir
// dizide toplayan, tekrarlı elemanları çıkartarak sonucu döndüren bir fonksiyon
// yazın.

// let a=[1,2]
// let b=[3,4]
// let c=[2,5]

// function dizileriBirleştir(...diziler){

//   let birlesimDizi = [].concat(...diziler);
//   let sonDizi = [...new Set (birlesimDizi)];
//   return sonDizi
// }
// let result = dizileriBirleştir(a,b,c)
// console.log(result);


//? 2.soru
// Bir dizi alan ve bu dizinin ilk elemanını çıkartarak geriye kalanları döndüren bir fonksiyon yazın.


// //! 1.yöntem
// function ilkElemaniCikart([,...geriKalan]){
//    [,...geriKalan].shift()
//    return([...geriKalan])
    
// }
// console.log(ilkElemaniCikart([1,2,3,4])); // Çıktı: [2,3,4]

// //! 2.yöntem
// function ilkElemanıÇıkart([, ...geriKalan]) {
//     return geriKalan;
// }

// console.log(ilkElemanıÇıkart([1, 2, 3, 4])); // Çıktı: [2, 3, 4]

// //! 3.yöntem
// function ilkElemaniCikart(array) {
//     return array.slice(1); // İlk eleman hariç tüm elemanları döndür
// }

// console.log(ilkElemaniCikart([1, 2, 3, 4])); // [2, 3, 4]


//? 3.soru
// Bir nesne ve bir anahtar-değer çifti alan, ve bu anahtar-değer çiftini nesneye ekleyerek yeni bir nesne döndüren bir fonksiyon yazın.

// function nesneyiDeğiştir(nesne,anahtar,değer){
//     return {...nesne,[anahtar]:değer};
    
// }
// console.log(nesneyiDeğiştir({a:1,b:2},'c',3));  // Çıktı:{a: 1, b: 2, c: 3}


//? 4.soru
// İç içe diziler alan ve bu diziyi tek katmanlı bir diziye dönüştüren bir fonksiyon yazın.

// function düzleştir(dizi) {
//     return dizi.reduce((sonuç, öğe) => 
//         sonuç.concat(Array.isArray(öğe) ? düzleştir(öğe) : öğe), []);
// }

// console.log(düzleştir([1, [2, 3], [4, [5]]])); // Çıktı: [1, 2, 3, 4, 5]

//? 5.soru

// İki nesne alan ve bu iki nesnenin özelliklerini birleştirerek yeni bir nesne döndüren bir fonksiyon yazın.

// function nesneleriBirleştir(nesne1,nesne2){
    
//     let newNesne = {...nesne1,...nesne2}
//     return newNesne

    
// }
// console.log(nesneleriBirleştir({a:1},{b:2}));// Çıktı:{a: 1, b: 2}


//? 6.soru
// Bir nesne ve bir özellik anahtarı alan ve bu özelliği nesneden çıkartarak yeni bir nesne döndüren bir fonksiyon yazın.


// function özelliğiKaldır(nesne,kaldırılacakAnahtar){
//     delete nesne[kaldırılacakAnahtar]
//     return nesne
    
// }
// console.log(özelliğiKaldır({a:1,b:2,c:3},'b'));// Çıkt ı: {a: 1, c: 3}

//? 7.soru
// Birden fazla nesne alan ve tüm özellikleri birleştirerek yeni bir nesne döndüren bir fonksiyon yazın. Aynı anahtara sahip özellikler varsa, son nesnenin değeri kullanılsın.



// function özellikleriBirleştir(...nesneler) {
//     return Object.assign({}, ...nesneler);
// }

// console.log(özellikleriBirleştir({a: 1}, {b: 2}, {a: 3}, {b: 5})); // Çıktı: {a: 3, b: 2}


//? 8.soru
// Bir nesne dizisi alan ve bu dizinin derin bir kopyasını döndüren bir fonksiyon yazın
//! 1.yöntem
// function diziKopyala(dizi){
//     return dizi.map(öğe => JSON.parse(JSON.stringify(öğe)));
//     }
//     const orijinal=[{a:1},{b:2}];
//     const kopya=diziKopyala(orijinal);
//     kopya[0].a=99;
//     console.log(orijinal[0].a);// Çıktı: 1



//! 2.yöntem
// function diziKopyala(dizi) {
//     return dizi.map(öğe => ({ ...öğe }));
// }

// const orijinal = [{a: 1}, {b: 2}];
// const kopya = diziKopyala(orijinal);
// kopya[0].a = 99;

// console.log(orijinal[0].a); // Çıktı: 1
    
//? 9.soru
// Birname,age ve ek özelliklere sahip bir nesne alan ve sadecenameveage özelliklerini döndüren bir fonksiyon yazın.



function sadeceNameVeAge(nesne) {
    const { name, age } = nesne; // Destructuring kullanarak name ve age özelliklerini al
    return { name, age }; // Yeni bir nesne döndür
}

// Örnek kullanım
const kişi = {
    name: 'Ali',
    age: 30,
    gender: 'erkek',
    occupation: 'mühendis'
};

console.log(sadeceNameVeAge(kişi)); // Çıktı: { name: 'Ali', age: 30 }
