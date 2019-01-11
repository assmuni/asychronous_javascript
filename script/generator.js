window.onload = () => {

    '## function gen() berisi beberapa data yg akan dikeluarkan saat fungsi gen() di panggil' 
    'dengan menggunakan fungsi next()'
    // function* gen() {
    //     yield console.log('Pisang');
    //     yield console.log('Anggur');
    //     yield console.log('Semangka');
    // }

    // var callGen = gen();
    // callGen.next();
    // callGen.next();
    // callGen.next();

    '## nilai dalam fungsi gen() berupa object berisi value dan done(bolean)'
    // function* gen() {
    //     yield 'Pisang';
    //     yield 'Anggur';
    //     yield 'Semangka';
        
    //     return 'pear';
    // }

    // var callGen = gen();
    // console.log(callGen.next());
    // console.log(callGen.next());
    // console.log(callGen.next());
    // console.log(callGen.next());
    // console.log(callGen.next());


    '## kita dapat mengirim kembali nilai pada funsi gen()'

    // function* gen() {
    //     var a = yield 'Pisang';
    //     var b = yield 'Anggur';
    //     var c = yield 'Semangka';

    //     return a + b + c;
    // }

    '## pengimputan nilai tidak dimulai dari next() pertama karena next() pertama akan nejalankan'
    '# yield pisang kemudian next() kedua baru akan menjalankan var a hingga yield berikutnya '
    '# jadi bacanya terbalik!!'
    // var callGen = gen();
    // console.log(callGen.next());
    // console.log(callGen.next(10));
    // console.log(callGen.next(5));
    // console.log(callGen.next(2));

    
    '### SIMPLE GENERAROR'
    // function* gen() {
    //     var x = yield 10;
    //     console.log(x);
    // }

    // var myGen = gen();
    // console.log(myGen.next());
    // console.log(myGen.next(10));


    '### GENERATOR EXAMPLE FOR FETCHING DATA FROM JSON FILE'

    genWrapper(function* generator() {
        var car = yield $.get('data/car.json');
        console.log(car);

        var country = yield $.get('data/country.json');
        console.log(country);

        var move = yield $.get('data/move.json');
        console.log(move);

    });

    function genWrapper(generator) {
        var myGen = generator();

        function handle(yielded) {
            if (!yielded.done) {
                yielded.value.then((d) => {
                    return handle(myGen.next(d));
                });
            }
        }

        return handle(myGen.next());
    }


    
}