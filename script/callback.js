window.onload = () => {
    
    '### EXAMPLE OF SYNCHRONOUS CALLBACK'
    const ini_callback_sync = (d) => {
        console.log(d);
    }
    
    const data = ['Indonesia', 'Singaphore', 'Malaysia'];
    data.forEach(ini_callback_sync);

    console.log('#2 ini dipanggil setelah block di atas di selesaikan');

    console.log('----------------------------------------');

    
    '### EXAMPLE OF ASYNCHRONOUS CALLBACK'
    const ini_callback_async = (d) => {
        console.log(d);
    }

    $.get('data/move.json', ini_callback_async);
    console.log('#1 ini di panggil lebih dulu karena lebih cepat di proses');

    
    '### EXAMPLE AJAX REQUSET /  CALLBACK HELL'
    '# ribet'
    // $.ajax({
    //     type: 'GET',
    //     url: 'data/country.json',
    //     success: (data) => {
    //         console.log('-------------------------------');
    //         console.log(data);

    //         $.ajax({
    //             type: 'GET',
    //             url: 'data/car.json',
    //             success: (data) => {
    //                 console.log(data);

    //                 $.ajax({
    //                     type: 'GET',
    //                     url: 'data/move.json',
    //                     success: (data) => {
    //                         console.log(data);
    //                     },
    //                     error: (jqXHR, testStatus, error) => {
    //                         console.log(error);
    //                     }
    //                 });
    //             },
    //             error: (jqXHR, testStatus, error) => {
    //                 console.log(error);
    //             }
    //         });
    //     },
    //     error: (jqXHR, testStatus, error) => {
    //         console.log(error);
    //     }
    // });

    '# mending pake modular'
    const func_error = (jqXHR, testStatus, error) => {
        console.log(error);
    }

    $.ajax({
        type: 'GET',
        url: 'data/country.json',
        success: callBack_car,
        error: func_error
    });

    function callBack_car(data) {
        console.log('-------------------------------');
        console.log(data);

        $.ajax({
            type: 'GET',
            url: 'data/car.json',
            success: callBack_move,
            error: func_error
        });
    }

    function callBack_move(data) {
        console.log(data);

        $.ajax({
            type: 'GET',
            url: 'data/move.json',
            success: (data) => {
                console.log(data);
            },
            error: func_error
        });
    }

};