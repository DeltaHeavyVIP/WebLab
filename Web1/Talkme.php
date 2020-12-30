<?php
$start_time = microtime();
setlocale(LC_ALL, 'ru_RU.UTF-8');
session_start();

$result = "Не попал";
$X_ARRAY = [-5, -4, -3, -2, -1, 0, 1, 2, 3];
$R_ARRAY = [1, 1.5 , 2, 2.5, 3];

$current_time = strftime('%d %b %Y %H:%M:%S', time() + 3 * 60 * 60);

$x_value = $_GET['x'];
$y_value = $_GET['y'];
$r_value = $_GET['r'];

$server_answer = (isset($_SESSION['session']) && is_array($_SESSION['session'])) ? $_SESSION['session'] : [];

if (strlen($x_value) > 5) {
    $x_value = substr($x_value, 0, 10);
}

if (strlen($y_value) > 5) {
    $y_value = substr($y_value, 0, 30);
}

if (strlen($r_value) > 5) {
    $r_value = substr($r_value, 0, 6);
}

$x_value = str_replace(",", ".", $x_value);
$y_value = str_replace(",", ".", $y_value);
$r_value = str_replace(",", ".", $r_value);

$correct_value = in_array($x_value, $X_ARRAY) && in_array($r_value, $R_ARRAY) && ($y_value > -5 && $y_value < 3);
$is_number = is_numeric($x_value) && is_numeric($y_value) && is_numeric($r_value);

if ($is_number && $correct_value) {

    if (($x_value < 0) && ($y_value < 0)) {
        $result = "Не попал";
    }
    if (($x_value < 0) && ($y_value >= 0) && (sqrt($x_value * $x_value + $y_value * $y_value) <= $r_value)) {
        $result = "Попал";
    }
    if (($x_value >= 0) && ($y_value >= 0) && ($x_value < $r_value) && ($y_value < $r_value)) {
        $result = "Попал";
    }
    if (($x_value >= 0) && ($y_value < 0) && (($r_value / 2) >= ($x_value - $y_value))) {
        $result = "Попал";
    }

    $end = (microtime() - $start_time);
    $plus_in_session = [
        'x' => $x_value,
        'y' => $y_value,
        'r' => $r_value,
        'result' => $result,
        'datatime' => $current_time,
        'script_time' => $end,
    ];

    $answer = "";

    //if(strcasecmp($x_value,"undefined")){
        array_unshift($server_answer, $plus_in_session);

        $_SESSION['session'] = $server_answer;

        for ($i = 0; $i < count($server_answer); $i++) {
            $session_now = $server_answer[$i];
            $answer .= $session_now['x'];
            $answer .= "+";
            $answer .= $session_now['y'];
            $answer .= "+";
            $answer .= $session_now['r'];
            $answer .= "+";
            $answer .= $session_now['result'];
            $answer .= "+";
            $answer .= $session_now['datatime'];
            $answer .= "+";
            $answer .= $session_now['script_time'];
            $answer .= ";";
        }
    //}
} else {
    $error = "Не верно введены данные";
}
echo $answer;
