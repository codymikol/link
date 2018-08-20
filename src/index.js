w = window;

w.onload = function () {
    var a = document.getElementById('a');
    var x = a.getContext('2d');

    var screen = 0;

    x.font="20px Georgia";

    function clr()  {x.clearRect(0, 0, a.width, a.height);}

    setInterval(function (e) {
        clr();
        switch (screen) {
            case 0:
                x.fillText("Title Screen",10,50);
                break;
            case 1:
                x.fillText("Game Screen",10,50);
                break;
            case 2:
                x.fillText("Death Screen",10,50);
        }
    }, 33);

    w.onclick = function (e) {
        switch (screen) {
            case 0:
                screen = 1;
                break;
            case 1:
                screen = 2;
                break;
        }
    };

    w.oninput = function (e) {
        switch (screen) {
            //input handlers per screen
        }
    };
};