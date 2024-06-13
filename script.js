const directory = './imgs/';
const elements = '/Elemente.png';
const status_elements = '/Status-Effekte.png';
const emptyPNG = '/Empty.png';

//const weapons = [];
//const weaponNames = [];

let weapons = [
    ['/GS_ICON.png', 'Great-Sword'],
    ['/LS_ICON.png', 'Long-Sword'],
    ['/SNS_ICON.png', 'Sword and Shield'],
    ['/DB_ICON.png', 'Dual-Blades'],
    ['/HA_ICON.png', 'Hammer'],
    ['/HH_ICON.png', 'Hunting Horn'],
    ['/LZ_ICON.png', 'Lance'],
    ['/GLZ_ICON.png', 'Gun-Lance'],
    ['/MA_ICON.png', 'Morph-Axe'],
    ['/CB_ICON.png', 'Charge-Blade'],
    ['/GLV_ICON.png', 'Insect-Glaive'],
    ['/LBG_ICON.png', 'Light-Bowgun'],
    ['/HBG_ICON.png', 'Heavy-Bowgun'],
    ['/BG_ICON.png', 'Bow']
];

//weapons.push('/GS_ICON.png', '/LS_ICON.png', '/SNS_ICON.png', '/DB_ICON.png', '/HA_ICON.png', '/HH_ICON.png','/LZ_ICON.png','/GLZ_ICON.png','/MA_ICON.png','/CB_ICON.png','/GLV_ICON.png','/LBG_ICON.png','/HBG_ICON.png','/BG_ICON.png');

//weaponNames.push('Great-Sword', 'Long-Sword', 'Sword and Shield', 'Dual-Blades', 'Hammer', 'Hunting Horn', 'Lance', 'Gun-Lance', 'Morph-Axe', 'Charge-Blade', 'Insect-Glaive', 'Light-Bowgun', 'Heavy-Bowgun', 'Bow');

console.log(weapons.length+" Weapons found");

let randomWeaponInt = getRandomInt(weapons.length-1);
let targetWeapon = directory+weapons[randomWeaponInt][0];
let targetElement = '';
let targetWeaponName = weapons[randomWeaponInt][1];

// Zugriff auf das Bild-Element über die ID 'img'
const weaponElement = document.getElementById('Weapon');
// Zugriff auf das Bild-Element über die ID 'img'
const elementElement = document.getElementById('Element');
// Zugriff auf das Bild-Element über die ID 'img'
const ueberschrift = document.getElementById('ueberschrift');

// Ändern des src-Attributs des Bild-Tags
ueberschrift.textContent = targetWeaponName;
// Ändern des src-Attributs des Bild-Tags
imgElement.src = targetWeapon;

function changeImage() {
    randomWeaponInt = getRandomInt(weapons.length-1);
    targetWeapon = directory+weapons[randomWeaponInt][0];
    targetWeaponName = weapons[randomWeaponInt][1];

    let hasElement = hasElementalDamage();

    if(hasElement == 'ELEMENT'){
        console.log("TargetFile = "+targetWeapon+" UND ELEMENT");
        targetElement = directory+elements;
    }else if(hasElement == 'STATUS-ELEMENT'){
        console.log("TargetFile = "+targetWeapon+" UND STATUS-ELEMENT");
        targetElement = directory+status_elements;
    }else if(hasElement == 'NONE'){
        console.log("TargetFile = "+targetWeapon);
        targetElement = directory+emptyPNG;
    }

    // Ändern des src-Attributs des Bild-Tags
    weaponElement.src = targetWeapon;

    // Ändern des src-Attributs des Bild-Tags
    elementElement.src = targetElement;

    // Ändern des src-Attributs des Bild-Tags
    ueberschrift.textContent = targetWeaponName;
}

function getRandomInt(max){
    return Math.floor(Math.random() * max)
}

function hasElementalDamage(){
    let randomValue = Math.random();
    let drittel = 0.333333;

    if(randomValue < drittel){
        return 'NONE';
    }else if(randomValue > drittel && randomValue < (drittel+drittel)){
        return 'ELEMENT';
    }else if(randomValue > (drittel+drittel)){
        return 'STATUS-ELEMENT';
    }
}
