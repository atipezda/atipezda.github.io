myText = document.getElementById('aboutme');
actualText = 0;
aboutMeTextes = [
    'atipezda',
    'Beginner in coding',
    'Js / Python / C++',
    "that's my first page",
    'cheers !'
];




function changetext(number){   
    var myTextnew = myText.cloneNode(true);
    document.getElementById('aboutme').outerHTML = '';
    document.getElementsByClassName('about')[0].append(myTextnew);
    myTextnew.innerText = aboutMeTextes[number];
}
changetext(0);



myInterval = setInterval(()=>{
    if(textAni == true){
        (actualText<aboutMeTextes.length-1) ? actualText+=1 : actualText=0;
        changetext(actualText); 
    }
},7500);


checkInterval = setInterval(() => {
    animatedText();
},500);




function scrollme(sectionn){
    if(sectionn == 0){
        textAni = true;
    }
    else{
        textAni = false;
    }
    window.scrollTo(0,sectionn.offsetHeight);
}