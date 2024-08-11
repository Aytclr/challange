

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

function nesneyiDeğiştir(nesne,anahtar,değer){
    return {...nesne,[anahtar]:değer};
    
}
console.log(nesneyiDeğiştir({a:1,b:2},'c',3));  // Çıktı:{a: 1, b: 2, c: 3}


//? 4.soru
// İç içe diziler alan ve bu diziyi tek katmanlı bir diziye dönüştüren bir fonksiyon yazın.

function düzleştir(dizi){
    
    }
console.log(düzleştir([1,[2,3],[4,[5]]]));// Çıktı: [1,2, 3, 4, 5]