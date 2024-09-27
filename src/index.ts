// String 
let sapa:string = "hai apa kabar";
let buah:string="semangka";
let animal:string='jerapah';
let planet:string='bumi';
let sungai:string='amazon';


// Number
let umur:number=21;
const berat:number =32;
const jarak:number =1232;
const suhu:number=-21;
const phi:number=3.14;

//boolean
let tanggal:boolean =true;
let berat:boolean=false;
let mahasiswa:boolean=true;
let tidur:boolean=false;
let makan:boolean=true;

//tipe Null
let dataKosong:null=null;
let noNumber:null=null;

// tipe data undefined
let noData:undefined=undefined;
let noTask:undefined=undefined;

// tipe symbol
let symbol1:symbol=symbol('id3');
let symbol3:symbol=symbol('id2');

// tipe data bigInt
let angkaBesar:bigint=121209103909123029301909109001123;
let noMax:bigint =bigint(29302039049288498284298239);




//PERKALIAN
function luasPersegi(panjang:number,lebar:number):number{
    return panjang*lebar;
}
const lebar = 12;
const panjang = 12;
const area = luasPersegi(12,12);
console.log(`luas persegi panjang dengan ${panjang} dan lebar ${panjang} yaitu ${area}`);

//PENGURANGAN tipe data any
function pengurangan(nilai1:any, nilai2:any):any{
    return nilai1 - nilai2;
}
const hasil = pengurangan(23,12);
console.log(`Hasil Pengurangan nilai 1 dan nilai 2 yaitu = ${hasil}`);

//PENJUMLAHAN
function Tambah(tenaga:number,pulih:number):number{
    return tenaga + pulih;
}
const hasil = Tambah(1,2);
if(hasil<10){
    console.log("tenaga belum pulih");
}else{
    console.log("tenaga sudah pulih");
}

// PEMBAGIAN
function pembagianBuah(banyakOrang:number,jumlahBuah:number):number{
    return banyakOrang / jumlahBuah;
}
const banyakorang = 11;
const jumlahbuah=144;
const Hasil = pembagianBuah(144,11);
console.log(`jadi hasil dari pembagian dengan banyak buah ${jumlahbuah} dan orang sebanyak ${banyakorang} yaitu ${Hasil} buah per orang`);

