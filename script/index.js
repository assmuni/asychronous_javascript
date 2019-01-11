window.onload = () => {
    
    // #VANILA JS METHOD
    var http = new XMLHttpRequest();

    // function will fire every readystate changes
    http.onreadystatechange = () => {
        // console.log(http);
        if (http.readyState == 4 && http.status == 200) {
            console.log(JSON.parse(http.response));
        }
    }

    // #grabbing data
    // param_1 : type of http request
    // param_2 : data source
    // Param_3 : TRUE FOR ASYNCHRONOUS/unblocking code AND FALSE FOR SYNCHRONOUS/blocking code
    // # change param_3 so you can know
    http.open("GET", "data/car.json", true);
    http.send();

    // its profen asyc this console log can running fisrt before http resource
    console.log('#1 Iam run first when 3rd parmeter true');


    // #JQUERY METHOD
    setTimeout(() => {
        console.log('------------------------------------------');

        // using jquery with auto running in asynchronously
        $.get("data/car.json", (data) => {
            console.log(data);
        });

        console.log('#1 Iam run first because $.get() jquery is asyc');

    }, 2000);

}


// ### CAUNTION : READY STATE CODE MEAN is an event steps when request data 
// 0 - request hot initialized
// 1 - request has been set up
// 2 - request has been sent
// 3 - request is in process
// 4 - request is complete