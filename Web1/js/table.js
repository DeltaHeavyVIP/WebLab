function drawTable(output){
    if (output != "" && isNaN(output)){
        let data_objects = output.split(";");
        let table = document.getElementById("table_out");
        let inner = "";
        for (let i = 0; i < data_objects.length - 1; i++) {
            let str = data_objects[i];
            let part_of_str = str.split("+");
            inner += "<tr>"
            inner += "<td>"
            inner += part_of_str[0];
            inner += "</td>"
            inner += "<td>"
            inner += part_of_str[1];
            inner += "</td>"
            inner += "<td>"
            inner += part_of_str[2];
            inner += "</td>"
            inner += "<td>"
            inner += part_of_str[3];
            inner += "</td>"
            inner += "<td>"
            inner += part_of_str[5];
            inner += "</td>"
            inner += "<td>"
            inner += part_of_str[4];
            inner += "</td>"
            inner += "</tr>"
        }
        table.innerHTML = inner
    }
}