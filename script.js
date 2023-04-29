function getPilihanComputer() {
	const comp = Math.random();
	if(comp < 0.34) return 'batu';
	if (comp >= 0.34 && comp < 0.67) return 'gunting';
	return 'kertas';
}

function getHasil(comp, player){
	const hasil = '';
	if(player == comp) return 'Draw';
	if(player == 'batu' ) return (comp == 'kertas') ? 'Kalah!' : 'Menang!';
	if(player == 'kertas') return (comp == 'gunting') ? 'Kalah!' : 'Menang!';
	if(player == 'gunting') return (comp == 'batu') ? 'Kalah!' : 'Menang!';
}



function putar(){
	const imgComputer = document.querySelector('.img-computer');
	const gambar = ['batu', 'kertas', 'gunting'];
	let i = 0;
	const waktuMulai = new Date().getTime();
	setInterval(function(){
		if(new Date().getTime() - waktuMulai > 1000){
			clearInterval;
			return;
		}
		imgComputer.setAttribute('src', 'image/' + gambar[i++] + '.jpg');
		if (i == gambar.length) {i = 0;}
	}, 100);
}




const pilihan = document.querySelectorAll('li img');
pilihan.forEach(function(i){
	i.addEventListener('click', function(){
	const pilihanComputer = getPilihanComputer();
	const pilihanPlayer = i.className;
	const hasil = getHasil(pilihanComputer, pilihanPlayer);

	putar();

	setTimeout(function(){
	const imgComputer = document.querySelector('.img-computer');
	imgComputer.setAttribute('src', 'image/' + pilihanComputer + '.jpg')

	const info = document.querySelector('.info');
	info.innerHTML = hasil;
	}, 1000);
	
	});
});






// const pBatu = document.querySelector('.batu');
// pBatu.addEventListener('click', function() {
// 	const pilihanComputer = getPilihanComputer();
// 	const pilihanPlayer = pBatu.className;
// 	const hasil = getHasil(pilihanComputer, pilihanPlayer);

// 	const imgComputer = document.querySelector('.img-computer');
// 	imgComputer.setAttribute('src', 'img/' + pilihanComputer + '.jpg')

// 	const info = document.querySelector('.info');
// 	info.innerHTML = hasil;
// });


// const pKertas = document.querySelector('.kertas');
// pKertas.addEventListener('click', function() {
// 	const pilihanComputer = getPilihanComputer();
// 	const pilihanPlayer = pKertas.className;
// 	const hasil = getHasil(pilihanComputer, pilihanPlayer);

// 	const imgComputer = document.querySelector('.img-computer');
// 	imgComputer.setAttribute('src', 'img/' + pilihanComputer + '.jpg')

// 	const info = document.querySelector('.info');
// 	info.innerHTML = hasil;
// });


// const pGunting = document.querySelector('.gunting');
// pGunting.addEventListener('click', function() {
// 	const pilihanComputer = getPilihanComputer();
// 	const pilihanPlayer = pGunting.className;
// 	const hasil = getHasil(pilihanComputer, pilihanPlayer);

// 	const imgComputer = document.querySelector('.img-computer');
// 	imgComputer.setAttribute('src', 'img/' + pilihanComputer + '.jpg')

// 	const info = document.querySelector('.info');
// 	info.innerHTML = hasil;
// });

