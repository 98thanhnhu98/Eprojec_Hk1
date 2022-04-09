function myFunctionfour() {
    var c = document.getElementById('row2')
    if (c.style.display === "none") {
        c.style.display = "block";
    } else {
        c.style.display = "none";
    }
    var x = document.getElementById('row3')
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
    var y = document.getElementById('row4')
    if (y.style.display === "none") {
        y.style.display = "block";
    } else {
        y.style.display = "none";
    }
    var z = document.getElementById('row5')
    if (z.style.display === "none") {
        z.style.display = "block";
    } else {
        z.style.display = "none";
    }
}

var validationApp = angular.module('validationApp',[]);

validationApp.controller('mainController',function ($scope){
    $scope.submitForm = function (isValid){
        if(isValid){
            alert('form is valid');
        };
    };
});


function myFunction() {
    var x = document.getElementById("menu-child-cart");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

//menu account
function myFunctiontwo() {
    var x = document.getElementById("menu-child-account");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

//menu favorite
function myFunctionthree() {
    var x = document.getElementById("menu-child-favorite");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}