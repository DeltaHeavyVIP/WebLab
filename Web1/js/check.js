let value_R;
let value_Y;
let value_X;
let flag_of_y = false;
let flag_of_x = false;
let number=-1;

//let flag_of_r = false;

function check_checkbox() {
    number = 0;
    flag_of_x = false;

    let x_m5 = document.getElementById('x_m5');
    let x_m4 = document.getElementById('x_m4');
    let x_m3 = document.getElementById('x_m3');
    let x_m2 = document.getElementById('x_m2');
    let x_m1 = document.getElementById('x_m1');
    let x_m0 = document.getElementById('x_0');
    let x_1 = document.getElementById('x_1');
    let x_2 = document.getElementById('x_2');
    let x_3 = document.getElementById('x_3');

    if (x_m5.checked) {
        value_X = -5;
        number = number + 1;
    }
    if (x_m4.checked) {
        value_X = -4;
        number = number + 1;
    }
    if (x_m3.checked) {
        value_X = -3;
        number = number + 1;
    }
    if (x_m2.checked) {
        value_X = -2;
        number = number + 1;
    }
    if (x_m1.checked) {
        value_X = -1;
        number = number + 1;
    }
    if (x_m0.checked) {
        value_X = 0;
        number = number + 1;
    }
    if (x_1.checked) {
        value_X = 1;
        number = number + 1;
    }
    if (x_2.checked) {
        value_X = 2;
        number = number + 1;
    }
    if (x_3.checked) {
        value_X = 3;
        number = number + 1;
    }
}

function check_number(){
    if (number > 1) {
        alert("Выбрано больше одного checkbox");
        value_X = 0;
    } else if (number === 0) {
        alert("checkbox не выбран");
        value_X = 0;
    } else if(number === 1){
        flag_of_x = true;
    }
}

/*function check_r(){
    value_R = document.getElementById("Select_R").options[document.getElementById("Select_R").options.selectedIndex].value;
}*/

function chek_input() {
    let input = document.getElementById("y_param");
    value_R = document.getElementById("Select_R").options[document.getElementById("Select_R").options.selectedIndex].value;
    if (!/^-?\d+(\.|,)?\d*$/i.test(input.value)) {
        alert("Значение \"Y\" не валидно");
        input.value = "";
        flag_of_y = false;
    } else if (input.value.replace(/[,]/, ".") >= -5 && input.value.replace(/[,]/, ".") <= 3) {
        if (/(\.|,)$/i.test(input.value)) {
            alert("Значение \"Y\" не валидно");
            input.value = "";
            flag_of_y = false;
        } else {
            value_Y = input.value.replace(/[,]/, ".");
            flag_of_y = true;
        }
    } else if (/(\.|,)$/i.test(input.value)) {
        alert("Значение \"Y\" не валидно");
        input.value = "";
        flag_of_y = false;
    } else {
        alert("Выход за пределы, введите число в интервале [-5;3]");
        flag_of_y = false;
    }
}

let button = document.getElementById("button");

button.onclick = function () {
    check_number();
    chek_input();
    if (flag_of_y && flag_of_x) {
        getInformation(value_X, value_Y, value_R);
    }else if(number===-1){
        alert("Вы не выбрали checkbox");
    }
}