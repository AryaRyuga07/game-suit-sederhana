var tanya = true;
while ( tanya==true ){
	
	var p = prompt('pilih : batu, gunting, kertas');
	var comp = Math.random();

	if(comp < 0.34){
		comp = 'batu';
	} else if (comp >= 0.34 && comp < 0.67){
		comp = 'gunting';
	} else {
		comp = 'kertas';
	}

	var hasil = '';
	if(p == comp) {
		hasil = 'Draw';
	} else if(p == 'batu' ) {
		hasil = (comp == 'kertas') ? 'Menang!' : 'Kalah!';
	} else if(p == 'kertas') {
		hasil = (comp == 'gunting') ? 'Kalah!' : 'Menang!';
	} else if(p == 'gunting') {
		hasil = (comp == 'batu') ? 'Kalah!' : 'Menang!';
	} else {
		hasil = 'pilihan anda freak, mohon coba lagi!'
	}

	alert('Kamu memilih : ' + p + '\nBot memilih : ' + comp + '\nMaka Hasilnya : ' + hasil);

		tanya = confirm('lagi?');
}

alert('Thanks Udah main')