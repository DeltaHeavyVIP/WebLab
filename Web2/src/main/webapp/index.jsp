<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" type="text/css" href="css/main.css">
    <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/js-cookie@rc/dist/js.cookie.min.js"></script>
</head>
<body>
<div class="main">
    <table>
        <tr id="head">
            <td>
                Патутин и Митрофанов, P3214, Вариант 19854
            </td>
        </tr>
        <tr id="canvas_row">
            <td>
                <canvas id="canvas" width="450px" height="450px"></canvas>
            </td>
        </tr>
        <tr id="form_row">
            <td>
                <form id="form" action="ControllerServlet" method="post">
                    <table id="x_table">
                        <tr id="x_row">
                            <td class="letter">X:</td>
                            <td>
                                <input type="checkbox" name="X" id="-5" onchange="validate()" value="-5">-5
                            </td>
                            <td>
                                <input type="checkbox" name="X" id="-4" onchange="validate()" value="-4">-4
                            </td>
                            <td>
                                <input type="checkbox" name="X" id="-3" onchange="validate()" value="-3">-3
                            </td>
                            <td>
                                <input type="checkbox" name="X" id="-2" onchange="validate()" value="-2">-2
                            </td>
                            <td>
                                <input type="checkbox" name="X" id="-1" onchange="validate()" value="-1">-1
                            </td>
                            <td>
                                <input type="checkbox" name="X" id="0" onchange="validate()" value="0">0
                            </td>
                            <td>
                                <input type="checkbox" name="X" id="1" onchange="validate()" value="1">1
                            </td>
                            <td>
                                <input type="checkbox" name="X" id="2" onchange="validate()" value="2">2
                            </td>
                            <td class="lastY">
                                <input type="checkbox" name="X" id="3" onchange="validate()" value="3">3
                            </td>
                            <input id="X_X" type=hidden name="X_X" onchange="validate()" oninput="validate()" title="X&isin;(-5; 3)" maxlength="15">
                            <td class="valid_text">
                                Enter correct arguments
                            </td>
                        </tr>
                    </table>

                    <table id="y_table">
                        <tr id="y_row">
                            <td class="letter">Y:</td>
                            <td>
                            <input id="y" type="text" name="Y" onchange="validate()" oninput="validate()" title="Y&isin;(-5; 3)" placeholder="[-5..3]" maxlength="15">
                            </td>
                            <td class="valid_text">
                                to unable
                            </td>
                        </tr>
                    </table>

                    <table id="r_table">
                        <tr id="r_row">
                            <td class="letter">R:</td>
                            <td>
                                <input type="checkbox" name="R" value="1">1
                            </td>
                            <td>
                                <input type="checkbox" name="R" value="2">2
                            </td>
                            <td>
                                <input type="checkbox" name="R" value="3">3
                            </td>
                            <td>
                                <input type="checkbox" name="R" value="4">4
                            </td>
                            <td>
                                <input type="checkbox" name="R" value="5">5
                            </td>
                            <td class="valid_text">
                                the "Check" button
                            </td>
                        </tr>
                    </table>

                    <table id="button_table">
                        <tr id="button_row">
                            <td>
                                <button type="submit" id="submit" class="btn btn-dark">Submit</button>
                            </td>
                        </tr>
                    </table>
                </form>
            </td>
        </tr>
        <tr id="table_row">
            <table class="result">
                <thead>
                <td>X</td>
                <td>Y</td>
                <td>R</td>
                <td>Result</td>
                </thead>
                <tbody id="table_body">
                <jsp:useBean id="EntryList" scope="session" class="Modules.EntryList"/>
                <c:forEach var="entry"
                           items="${EntryList.entryList}">
                    <tr>
                        <td> <div class="cell">${entry.x} </div></td>
                        <td> <div class="cell">${entry.y} </div></td>
                        <td> <div class="cell">${entry.r} </div></td>
                        <td> <div class="cell">${entry.result} </div> </td>
                    </tr>
                </c:forEach>
                </tbody>
            </table>
        </tr>
    </table>
</div>
<script type="text/javascript" src="js/draw.js"></script>
<script type="text/javascript" src="js/validate.js"></script>
</body>
</html>