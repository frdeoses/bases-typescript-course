(()=>{

    let avenger: any = 123;
    let exists;
    let power;
    
    avenger = 'Doctor Strange';
    // console.log( avenger.chartAt(0) );
    console.log( (avenger as string).charAt(0)  );
    
    avenger = 150.266565656565;
    // console.log( avenger.toFixed(2) );
    console.log( <number> avenger.toFixed(2) );

    console.log( exists );
    
    console.log( power );

})();