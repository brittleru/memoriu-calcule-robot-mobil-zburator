// Cache the DOM //
const daDrona = document.getElementById("da-drona");
const nuDrona = document.getElementById("nu-drona");
const arieTOT = document.getElementById("arie-tot");

// Cache Date Arie sectionala pe verticala
const toggleArie = document.getElementById("toggle-arie");
const diametruEliceArie = document.getElementById("diametru-elice-arie");
const lungimeBrat = document.getElementById("lungime-brat");
const latimeBrat = document.getElementById("latime-brat");
const diametruCadru = document.getElementById("diametru-cadru");
const lungimeCadru = document.getElementById("lungime-cadru");
const latimeCadru = document.getElementById("latime-cadru");
const rezultatArie = document.getElementById("rezultat-arie");
const imgDiv = document.getElementById("div-imagine")
const imagineDrona = document.getElementById("img-drona");

// Cache Date generale
const lungimeDrona = document.getElementById("lungime-drona");
const masaDrona = document.getElementById("masa-drona");
const diametruElice = document.getElementById("diametru-elice");
const arieDrona = document.getElementById("arie-drona");
const temperaturaMediu = document.getElementById("temperatura-mediu");
const tensiuneAlimentare = document.getElementById("tensiune-alimentare");
const timpRidicare = document.getElementById("timp-ridicare");
const vitezaRidicare = document.getElementById("viteza-ridicare");
const acceleratieRidicare = document.getElementById("acceleratie-ridicare");
const coeficientRezistenta = document.getElementById("coeficient-rezistenta");
const coeficientPortanta = document.getElementById("coeficient-portanta");
const numarMotoare = document.getElementById("numar-motoare");

// Cache Date Baterie
const capacitateBaterie = document.getElementById("capacitate-baterie");
const numarDeCelule = document.getElementById("numarul-de-celule");
const consumComponente = document.getElementById("consum-componente");
const consumMotor = document.getElementById("consum-motor");

// Cache Date Motor
const consumMaximMotor = document.getElementById("curent-maxim-motor");
const consumMaximESC = document.getElementById("consum-maxim-esc");
const putereMaximaMotor = document.getElementById("putere_maxima_motor");
const wKv = document.getElementById("rpm");

// Cache rezultate
const rezultatDensitate = document.getElementById("rez-densitate-aer");
const rezultatMAh = document.getElementById("rez-mah");
const rezultatCelule = document.getElementById("rez-celule");
const rezultatRaport = document.getElementById("rez-raport");
const esteOkay = document.getElementById("eokay");
const rezultatImax = document.getElementById("rez-imax");
const rezultatFm = document.getElementById("rez-fm");
const rezultatMe = document.getElementById("rez-me");
const rezultatPutereBatt = document.getElementById("rez-putere-batt");
const rezultatPutereUser = document.getElementById("rez-putere-user");
const rezultatTimpUser = document.getElementById("rez-timp-user");
const rezultatPuterePlutire = document.getElementById("rez-putere-plutire");
const rezultatTimpPlutire = document.getElementById("rez-timp-plutire");
const rezultatPutereMax = document.getElementById("rez-putere-max");
const rezultatTimpMinim = document.getElementById("rez-timp-minim");
const rezultatGreutate = document.getElementById("rez-greutate");
const rezultatFrezVert = document.getElementById("rez-frez-vert");
const rezultatFortaPortanta = document.getElementById("rez-forta-portanta");
const rezultatMomentMotor = document.getElementById("rez-moment-motor");
const rezultatVitezaAer = document.getElementById("rez-viteza-aer");
const rezultatArieElice = document.getElementById("rez-arie-elice");
const rezultatOmg1 = document.getElementById("rez-omg-1");
const rezultatOmg2 = document.getElementById("rez-omg-2");
const sistemOkay = document.getElementById("sistem-okay");

// Cache Butoane
const butonCalcul = document.getElementById("button-calcul");
const butonArie = document.getElementById("button-calcul-arie");






// Constante si date de intrare //
const PI = Math.PI;
const e_3 = Math.pow(10, -3); // pentru transformari
const g = 9.81;
// Constante baterie
const baterie_valori = {
  "-180": {
    "mAh": [80, 800],
    "celule": [1, 2]
  },
  "180": {
    "mAh": [1000, 1300],
    "celule": [3, 4]
  },
  "201": {
    "mAh": [1000, 1300],
    "celule": [3, 4]
  },
  "250": {
    "mAh": [1300, 1800],
    "celule": 3
  },
  "280-290": {
    "mAh": [1500, 3300],
    "celule": 4
  },
  "330-360": {
    "mAh": [2200, 3200],
    "celule": 4
  },
  "400": {
    "mAh": [3200, 3300],
    "celule": 4
  },
  "450": {
    "mAh": 3300,
    "celule": 4
  },
  "500": {
    "mAh": [3300, 5000],
    "celule": 4
  },
  "550": {
    "mAh": [5000, 5200],
    "celule": 4
  },
  "550-750": {
    "mAh": [5000, 8000],
    "celule": [4, 5, 6]
  },
  "800+": {
    "mAh": [8000, 30000],
    "celule": 6
  }
};
const densitati_ftemperatura = [1.342, 1.293, 1.247, 1.205, 1.165, 1.128, 1.093, 1.06];

// Arie sectionala
let diametruEliceArie_num;
let lungimeBrat_num;
let latimeBrat_num;
let diametruCadru_num;
let lungimeCadru_num;
let latimeCadru_num;

// Date generale
let lungimeDrona_num;
let masaDrona_num;
let diametruElice_num;
let arieDrona_num;
let temperaturaMediu_num;
let tensiuneAlimentare_num;
let timpRidicare_num;
let vitezaRidicare_num;
let acceleratieRidicare_num;
let coeficientRezistenta_num;
let coeficientPortanta_num;
let numarMotoare_num;

// Date baterie
let capacitateBaterie_num;
let numarDeCelule_num;
let consumComponente_num;
let consumMotor_num;


// Date Motor
let consumMaximMotor_num;
let consumMaximESC_num;
let putereMaximaMotor_num;
let wKv_num;


let putere_v;


// Functionality //
function checkRadioState() {
  if (daDrona.checked) {
    arieTOT.style.display = "none";
  } else if (nuDrona.checked) {
    arieTOT.style.display = "block";
    displayCercArie();
  }
}

function displayCercArie() {
  diametruCadru.parentElement.style.display = "block";
  lungimeCadru.parentElement.style.display = "none";
  latimeCadru.parentElement.style.display = "none";
}

function displayDreptArie() {
  diametruCadru.parentElement.style.display = "none";
  lungimeCadru.parentElement.style.display = "block";
  latimeCadru.parentElement.style.display = "block";
}

function ArieCerc(diametru) {
  return PI * Math.pow(diametru / 2, 2);
}

function ArieDreptunghi(lungime, latime) {
  return lungime * latime;
}

function calculeArieSectionala() {
  let arie_cerc_elice = ArieCerc(diametruEliceArie_num * e_3);
  let arie_brat = ArieDreptunghi(lungimeBrat_num * e_3, latimeBrat_num * e_3);
  let arie_cadru;
  let motoare = numarMotoare_num;
  if (diametruCadru.parentElement.style.display === "block") {
    arie_cadru = ArieCerc(diametruCadru_num * e_3);
  } else {
    arie_cadru = ArieDreptunghi(lungimeCadru_num * e_3, latimeCadru_num * e_3);
  }

  let arie_totala = arie_cadru + arie_brat * motoare + arie_cerc_elice * motoare;
  console.log(arie_totala);
  console.log(arie_cadru);
  console.log(arie_brat);
  console.log(arie_cerc_elice);
  rezultatArie.innerHTML = arie_totala.toFixed(2);
  arieDrona.value = arie_totala.toFixed(2);
  diametruElice.value = diametruEliceArie_num;

  return arie_totala;
}

function arieChecker() {
  if (typeof(diametruEliceArie_num && lungimeBrat_num && latimeBrat_num && (diametruCadru_num || (lungimeCadru_num && latimeCadru_num))) !== "undefined") {
    calculeArieSectionala();
  }
}




function getBaterieData() {
  let lungimeTotala = lungimeDrona_num;

  let mAmpH;
  let nrCelule;
  if (lungimeTotala <= 179) {
    mAmpH = baterie_valori["-180"]['mAh'];
    nrCelule = baterie_valori["-180"]['celule'];
  } else if (lungimeTotala < 201) {
    mAmpH = baterie_valori["180"]['mAh'];
    nrCelule = baterie_valori["180"]['celule'];
  } else if (lungimeTotala < 250) {
    mAmpH = baterie_valori["201"]['mAh'];
    nrCelule = baterie_valori["210"]['celule'];
  } else if (lungimeTotala < 290) {
    mAmpH = baterie_valori["250"]['mAh'];
    nrCelule = baterie_valori["250"]['celule'];
  } else if (lungimeTotala < 330) {
    mAmpH = baterie_valori["280-290"]['mAh'];
    nrCelule = baterie_valori["280-290"]['celule'];
  } else if (lungimeTotala < 400) {
    mAmpH = baterie_valori["330-360"]['mAh'];
    nrCelule = baterie_valori["330-360"]['celule'];
  } else if (lungimeTotala < 450) {
    mAmpH = baterie_valori["400"]['mAh'];
    nrCelule = baterie_valori["400"]['celule'];
  } else if (lungimeTotala < 500) {
    mAmpH = baterie_valori["450"]['mAh'];
    nrCelule = baterie_valori["450"]['celule'];
  } else if (lungimeTotala < 550) {
    mAmpH = baterie_valori["500"]['mAh'];
    nrCelule = baterie_valori["500"]['celule'];
  } else if (lungimeTotala < 800) {
    mAmpH = baterie_valori["550-750"]['mAh'];
    nrCelule = baterie_valori["550-750"]['celule'];
  } else if (lungimeTotala >= 800) {
    mAmpH = baterie_valori["800+"]['mAh'];
    nrCelule = baterie_valori["800+"]['celule'];
  }
  // console.log([mAmpH, nrCelule]);
  return [mAmpH, nrCelule];
}


function timpZbor(power) {
  return 60 * (capacitateBaterie_num * e_3) * tensiuneAlimentare_num / power;
}


function calculeGenerale() {

  let forta_motoare = 2 * masaDrona_num;
  let densitate_aer = densitati_ftemperatura[temperaturaMediu.value];
  let diametruE = diametruElice_num * e_3;
  let putere = putereMaximaMotor_num;
  let motoare = numarMotoare_num;
  let masa_portanta = Math.pow(PI / 2 * Math.pow(diametruE, 2) * densitate_aer * Math.pow(putere, 2), 1 / 3) / g;
  let raport = masa_portanta / masaDrona_num;
  // console.log("Masa portanta: ", raport);

  // de contiunat mai sus sub console.log

  let greutate = masaDrona_num * g;
  let arie_v = arieDrona_num;
  let raza_elice = diametruE / 2;
  let forta_rezistenta = 1 / 2 * densitate_aer * arie_v * coeficientRezistenta_num * Math.pow(vitezaRidicare_num, 2);
  let forta_portanta_calcul = forta_rezistenta + greutate;
  let moment_motor = (forta_portanta_calcul * raza_elice) / 4 + masaDrona_num * acceleratieRidicare_num; // [Nm]
  let arie_elice_2 = ArieCerc(diametruE);
  let viteza_aer = Math.sqrt(forta_portanta_calcul / (2 * densitate_aer * arie_elice_2));

  let putere_v = forta_portanta_calcul * viteza_aer;

  // In rpm
  let viteza_unghiulara = Math.sqrt((2 * forta_portanta_calcul) / (motoare * densitate_aer * arie_elice_2 * coeficientPortanta_num * Math.pow(raza_elice, 2)));
  // In rad/s
  let viteza_unghiulara2 = viteza_unghiulara * PI / 30;

  // calcule baterie
  let capacitatea = capacitateBaterie_num * e_3;
  let consumBaterie = numarDeCelule_num * capacitatea;
  let putere_baterie = tensiuneAlimentare_num * consumBaterie;

  // Consum la maxim
  let putere_maximaaaa = tensiuneAlimentare_num * (consumMaximMotor_num * motoare);
  let timp_minim_de_zbor = timpZbor(putere_maximaaaa);

  // Consum utilizator
  let putere_utilizator = tensiuneAlimentare_num * (consumMotor_num * motoare + consumComponente_num);
  let timp_utilizator_de_zbor = timpZbor(putere_utilizator);

  // Consum doar sa zboare
  let timp_plutire_de_zbor = timpZbor(putere_v);


  let baterieData = getBaterieData();
  let baterieMAh = getBaterieData()[0];
  let baterieCelule = getBaterieData()[1];
  let raport2 = consumMaximESC_num / consumMaximMotor_num;
  let okSauNu = "";
  let sistemulOkaySauNu = "";
  if (raport2 <= 1.5 && raport2 >= 1.2) {
    okSauNu = "sunt potrivite";
  } else {
    okSauNu = "nu sunt potrivite. Incercati sa reganditi proiectarea.";
  }
  if (putere_baterie - putere_maximaaaa >= 0) {
    sistemulOkaySauNu = "va rezista";
  }
  else {
    sistemulOkaySauNu = "s-ar putea sa nu reziste";
  }
  // Bagare date
  rezultatDensitate.innerHTML = densitate_aer;
  rezultatMAh.innerHTML = baterieMAh;
  rezultatCelule.innerHTML = baterieCelule;
  rezultatRaport.innerHTML = raport2.toFixed(3);
  esteOkay.innerHTML = okSauNu;
  sistemOkay.innerHTML = sistemulOkaySauNu;
  rezultatImax.innerHTML = consumBaterie;
  rezultatFm.innerHTML = forta_motoare;
  rezultatMe.innerHTML = masa_portanta.toFixed(3);
  rezultatPutereBatt.innerHTML = putere_baterie;
  rezultatPutereUser.innerHTML = putere_utilizator.toFixed(3);
  rezultatTimpUser.innerHTML = timp_utilizator_de_zbor.toFixed(3);
  rezultatPuterePlutire.innerHTML = putere_v;
  rezultatTimpPlutire.innerHTML = timp_plutire_de_zbor.toFixed(3);
  rezultatPutereMax.innerHTML = putere_maximaaaa;
  rezultatTimpMinim.innerHTML = timp_minim_de_zbor.toFixed(3);
  rezultatGreutate.innerHTML = greutate.toFixed(3);
  rezultatFrezVert.innerHTML = forta_rezistenta.toExponential(3);
  rezultatFortaPortanta.innerHTML = forta_portanta_calcul.toFixed(3);
  rezultatMomentMotor.innerHTML = moment_motor.toFixed(3);
  rezultatVitezaAer.innerHTML = viteza_aer.toFixed(3);
  rezultatArieElice.innerHTML = arie_elice_2.toFixed(3);
  rezultatOmg1.innerHTML = viteza_unghiulara.toFixed(3);
  rezultatOmg2.innerHTML = viteza_unghiulara2.toFixed(3);
}


// Local storage event listeners //
diametruEliceArie.addEventListener('input', () => {
  diametruEliceArie_num = parseFloat(diametruEliceArie.value);
  localStorage.setItem("diametruEliceArie_num", diametruEliceArie_num);
});
lungimeBrat.addEventListener('input', () => {
  lungimeBrat_num = parseFloat(lungimeBrat.value);
  localStorage.setItem("lungimeBrat_num", lungimeBrat_num);
});
latimeBrat.addEventListener('input', () => {
  latimeBrat_num = parseFloat(latimeBrat.value);
  localStorage.setItem("latimeBrat_num", latimeBrat_num);
});
diametruCadru.addEventListener('input', () => {
  diametruCadru_num = parseFloat(diametruCadru.value);
  localStorage.setItem("diametruCadru_num", diametruCadru_num);
});
lungimeCadru.addEventListener('input', () => {
  lungimeCadru_num = parseFloat(lungimeCadru.value);
  localStorage.setItem("lungimeCadru_num", lungimeCadru_num);
});
latimeCadru.addEventListener('input', () => {
  latimeCadru_num = parseFloat(latimeCadru.value);
  localStorage.setItem("latimeCadru_num", latimeCadru_num);
});
lungimeDrona.addEventListener('input', () => {
  lungimeDrona_num = parseFloat(lungimeDrona.value);
  localStorage.setItem("lungimeDrona_num", lungimeDrona_num);
});
masaDrona.addEventListener('input', () => {
  masaDrona_num = parseFloat(masaDrona.value);
  localStorage.setItem("masaDrona_num", masaDrona_num);
});
arieDrona.addEventListener('input', () => {
  arieDrona_num = parseFloat(arieDrona.value);
  localStorage.setItem("arieDrona_num", arieDrona_num);
});
diametruElice.addEventListener('input', () => {
  diametruElice_num = parseFloat(diametruElice.value);
  localStorage.setItem("diametruElice_num", diametruElice_num);
});
tensiuneAlimentare.addEventListener('input', () => {
  tensiuneAlimentare_num = parseFloat(tensiuneAlimentare.value);
  localStorage.setItem("tensiuneAlimentare_num", tensiuneAlimentare_num);
});
temperaturaMediu.addEventListener('input', () => {
  temperaturaMediu_num = parseFloat(temperaturaMediu.value);
  localStorage.setItem("temperaturaMediu_num", temperaturaMediu_num);
});
timpRidicare.addEventListener('input', () => {
  timpRidicare_num = parseFloat(timpRidicare.value);
  localStorage.setItem("timpRidicare_num", timpRidicare_num);
});
vitezaRidicare.addEventListener('input', () => {
  vitezaRidicare_num = parseFloat(vitezaRidicare.value);
  localStorage.setItem("vitezaRidicare_num", vitezaRidicare_num);
});
acceleratieRidicare.addEventListener('input', () => {
  acceleratieRidicare_num = parseFloat(acceleratieRidicare.value);
  localStorage.setItem("acceleratieRidicare_num", acceleratieRidicare_num);
});
coeficientRezistenta.addEventListener('input', () => {
  coeficientRezistenta_num = parseFloat(coeficientRezistenta.value);
  localStorage.setItem("coeficientRezistenta_num", coeficientRezistenta_num);
});
coeficientPortanta.addEventListener('input', () => {
  coeficientPortanta_num = parseFloat(coeficientPortanta.value);
  localStorage.setItem("coeficientPortanta_num", coeficientPortanta_num);
});
capacitateBaterie.addEventListener('input', () => {
  capacitateBaterie_num = parseFloat(capacitateBaterie.value);
  localStorage.setItem("capacitateBaterie_num", capacitateBaterie_num);
});
numarDeCelule.addEventListener('input', () => {
  numarDeCelule_num = parseFloat(numarDeCelule.value);
  localStorage.setItem("numarDeCelule_num", numarDeCelule_num);
});
consumComponente.addEventListener('input', () => {
  consumComponente_num = parseFloat(consumComponente.value);
  localStorage.setItem("consumComponente_num", consumComponente_num);
});
consumMotor.addEventListener('input', () => {
  consumMotor_num = parseFloat(consumMotor.value);
  localStorage.setItem("consumMotor_num", consumMotor_num);
});
consumMaximMotor.addEventListener('input', () => {
  consumMaximMotor_num = parseFloat(consumMaximMotor.value);
  localStorage.setItem("consumMaximMotor_num", consumMaximMotor_num);
});
consumMaximESC.addEventListener('input', () => {
  consumMaximESC_num = parseFloat(consumMaximESC.value);
  localStorage.setItem("consumMaximESC_num", consumMaximESC_num);
});
putereMaximaMotor.addEventListener('input', () => {
  putereMaximaMotor_num = parseFloat(putereMaximaMotor.value);
  localStorage.setItem("putereMaximaMotor_num", putereMaximaMotor_num);
});
wKv.addEventListener('input', () => {
  wKv_num = parseFloat(wKv.value);
  localStorage.setItem("wKv_num", wKv_num);
});
numarMotoare.addEventListener('input', () => {
  numarMotoare_num = parseFloat(numarMotoare.value);
  localStorage.setItem("numarMotoare_num", numarMotoare_num);
});



// Local Storage setup
diametruEliceArie.value = localStorage.getItem('diametruEliceArie_num');
lungimeBrat.value = localStorage.getItem('lungimeBrat_num');
latimeBrat.value = localStorage.getItem('latimeBrat_num');
diametruCadru.value = localStorage.getItem('diametruCadru_num');
lungimeCadru.value = localStorage.getItem('lungimeCadru_num');
latimeCadru.value = localStorage.getItem('latimeCadru_num');
lungimeDrona.value = localStorage.getItem('lungimeDrona_num');
masaDrona.value = localStorage.getItem('masaDrona_num');
arieDrona.value = localStorage.getItem('arieDrona_num');
diametruElice.value = localStorage.getItem('diametruElice_num');
tensiuneAlimentare.value = localStorage.getItem('tensiuneAlimentare_num');
temperaturaMediu.value = localStorage.getItem('temperaturaMediu_num');
timpRidicare.value = localStorage.getItem('timpRidicare_num');
vitezaRidicare.value = localStorage.getItem('vitezaRidicare_num');
acceleratieRidicare.value = localStorage.getItem('acceleratieRidicare_num');
coeficientRezistenta.value = localStorage.getItem('coeficientRezistenta_num');
coeficientPortanta.value = localStorage.getItem('coeficientPortanta_num');
capacitateBaterie.value = localStorage.getItem('capacitateBaterie_num');
numarDeCelule.value = localStorage.getItem('numarDeCelule_num');
consumComponente.value = localStorage.getItem('consumComponente_num');
consumMotor.value = localStorage.getItem('consumMotor_num');
consumMaximMotor.value = localStorage.getItem('consumMaximMotor_num');
consumMaximESC.value = localStorage.getItem('consumMaximESC_num');
putereMaximaMotor.value = localStorage.getItem('putereMaximaMotor_num');
wKv.value = localStorage.getItem('wKv_num');
numarMotoare.value = localStorage.getItem('numarMotoare_num');


// Local storage valori pentru calcul
diametruEliceArie_num = parseFloat(diametruEliceArie.value);
lungimeBrat_num = parseFloat(lungimeBrat.value);
latimeBrat_num = parseFloat(latimeBrat.value);
diametruCadru_num = parseFloat(diametruCadru.value);
lungimeCadru_num = parseFloat(lungimeCadru.value);
latimeCadru_num = parseFloat(latimeCadru.value);
lungimeDrona_num = parseFloat(lungimeDrona.value);
masaDrona_num = parseFloat(masaDrona.value);
arieDrona_num = parseFloat(arieDrona.value);
diametruElice_num = parseFloat(diametruElice.value);
tensiuneAlimentare_num = parseFloat(tensiuneAlimentare.value);
temperaturaMediu_num = parseFloat(temperaturaMediu.value);
timpRidicare_num = parseFloat(timpRidicare.value);
vitezaRidicare_num = parseFloat(vitezaRidicare.value);
acceleratieRidicare_num = parseFloat(acceleratieRidicare.value);
coeficientRezistenta_num = parseFloat(coeficientRezistenta.value);
coeficientPortanta_num = parseFloat(coeficientPortanta.value);
capacitateBaterie_num = parseFloat(capacitateBaterie.value);
numarDeCelule_num = parseFloat(numarDeCelule.value);
consumComponente_num = parseFloat(consumComponente.value);
consumMotor_num = parseFloat(consumMotor.value);
consumMaximMotor_num = parseFloat(consumMaximMotor.value);
consumMaximESC_num = parseFloat(consumMaximESC.value);
putereMaximaMotor_num = parseFloat(putereMaximaMotor.value);
wKv_num = parseFloat(wKv.value);
numarMotoare_num = parseFloat(numarMotoare.value);



// Event Listeners //
checkRadioState();
daDrona.addEventListener("click", checkRadioState);
nuDrona.addEventListener("click", checkRadioState);


toggleArie.addEventListener("change", (event) => {
  if (event.target.value === "cerc") {
    imagineDrona.src = "./img/drona-corp-cerc.png"
    displayCercArie();
  } else if (event.target.value === "dreptunghi") {
    imagineDrona.src = "./img/drona-corp-dreptunghi.png"
    displayDreptArie();
  }
});

getBaterieData();
arieChecker();
butonArie.addEventListener("click", calculeArieSectionala);
butonCalcul.addEventListener("click", calculeGenerale);
