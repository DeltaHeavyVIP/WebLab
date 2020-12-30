function isANumber(str) {
    const numStr = /^[\-]?\d*\.?\d+(?:[Ee][\+\-]?\d+)?$|\.$/;
    return numStr.test(str);
}

function validateY(inp) {
    let val = parseFloat(inp.value.replace(',','.'));

    if ((isNaN(val)) || (!isANumber(inp.value.replace(',','.'))) || (inp.value.replace(',','.').split('.').length > 2)) {
        return false;
    }

    return (val >= -5) && (val <= 3);
}

function validate() {

    $("#submit")[0].disabled = !(validateY($("#y")[0])  && $("input[name='X']:checked").length>0 && $("input[name='R']:checked").length>0);

    let val = ($('#y')[0].value.replace(',','.'));
    if(!isNaN(val)) $('#y')[0].value = val;

}

