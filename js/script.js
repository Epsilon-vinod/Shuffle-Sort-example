$(document).ready(function() {
    //Shffle code here
    $(".shuffle").click(function() {
        var theNumbers = [];

        $('.square').each(function() {
            theNumbers.push(this.innerHTML);
        });

        var theLength = theNumbers.length - 1;
        var toSwap;
        var temp;

        for (var i = theLength; i > 0; i--) {
            toSwap = Math.floor(Math.random() * (i + 1));
            temp = theNumbers[i];
            theNumbers[i] = theNumbers[toSwap];
            theNumbers[toSwap] = temp;
        }

        i = 0;

        $('.square').each(function() {
            this.innerHTML = theNumbers[i];
            i++;
        });
    });

    //Sort code here
    $(".sort").click(function() {

        var theNumbers = [];
        $('.square').each(function() {
            theNumbers.push(this.innerHTML);
        });

        theNumbers.sort();

        i = 0;

        $('.square').each(function() {
            this.innerHTML = theNumbers[i];
            i++;
        });
    });
});