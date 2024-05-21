(()=>{
    let avengers: number = 30;

    console.log(avengers);

    const villains: number = 20;

    if(avengers > villains)
        console.log('Estamos salvados');
    else
        console.log('Corred insensatos!!!');


    avengers = Number('55A');
    console.log({avengers});

})();