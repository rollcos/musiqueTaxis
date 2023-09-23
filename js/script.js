"use strict"

let personnage ="karris";
let sante=10;
let feux=30;
let changement=0;
let music =["Anissa","tout oublier","en feu","pnl","plk"]//parrametre de base

 for (let i=0;i<30;i++){
    let musiqueTaxi=music[Math.floor(Math.random()*5)]// choix de la music aleatoire
    
    if (musiqueTaxi=="Anissa"){
        sante-=1
        console.log("karris à "+sante+ " de santé mantale")//music anissa enleve 1 pv et est afficher
        if (sante==0){//a 0 pv la boucle s'arrete
            console.log("ENd")
            break
        }else{
            changement+=1}}
            feux-=1
if (feux==0){
    console.log("arrivé a destination en "+changement+" étapes")
}else{
    console.log("encore "+feux+" feux, et la musique est "+ musiqueTaxi)
}}
    
