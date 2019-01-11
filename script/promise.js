window.onload = () =>  {
    
    '### PROMISE EXAMPLE WITH VANILA WAY'
    '# make a fucntion with promise function and http request inside'
    // function getData(url) {
    //     return new Promise((resolve, reject) => {
    //         var xhttp = new XMLHttpRequest();
    //         xhttp.open('GET', url, true);
    //         xhttp.onload = () => {
    //             if (xhttp.status == 200) {
    //                 resolve(JSON.parse(xhttp.response))
    //             }else{
    //                 reject(xhttp.statusText);
    //             }
    //         };
    //         xhttp.onerror = () => {
    //             reject(xhttp.statusText);
    //         };
    //         xhttp.send();
    //     });
    // }

    '# call the promise function'
    '# we can continue call the promis with create a return in the end of function () => {}'
    // var promise = getData('data/country.json');
    // promise.then((data) => {
    //     console.log(data);
        
    //     return getData('data/car.json');
    // }).then((data) => {
    //     console.log(data);

    //     return getData('data/move.json');
    // }).then((data) => {
    //     console.log(data);

    // }).catch((err) => {
    //     console.log(err);
    // });

    // console.log('#1 ini akan di eksekusi terlebuh daluhu karena asychronous!');
    
    
    '### PROMISE EXAMPLE WITH JQUERY WAY'
    $.get('data/country.json').then((data) => {
        console.log(data);
        
        return $.get('data/car.json');
    }).then((data) => {
        console.log(data);

        return $.get('data/move.json');
    }).then((data) => {
        console.log(data);
    });
    
    console.log('#1 ini akan di eksekusi terlebuh daluhu karena asychronous!');
}