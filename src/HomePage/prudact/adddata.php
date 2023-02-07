<?php
header('Access-Control-Allow-Origin:*');
header('Access-Control-Allow-Headers:*');
$request_body = file_get_contents('php://input');
$data = json_decode($request_body, true);
if (isset($data['namep'])) {
    $namep = $data['namep'];
    $namec = $data['namec'];
    $quntity = $data['quntity'];
    $pricep = $data['pricep'];
    $prices = $data['prices'];
    $codebar = $data['codebar'];
    $con = new mysqli("localhost", "root", "", "commercial");
    $reqcount = "select COUNT(*) from command";
    $rescount = mysqli_fetch_assoc(mysqli_query($con, $reqcount));
    $rescount=$rescount["COUNT(*)"];
    $reqc = "select COUNT(*) from customer";
    $resc = mysqli_fetch_assoc(mysqli_query($con, $reqc));
    $resc=$resc["COUNT(*)"];
    $reqcode = "select COUNT(*) from prudact";
    $rescode = mysqli_fetch_assoc(mysqli_query($con, $reqcode));
    $rescode=$rescode["COUNT(*)"];
    if ($con) {

        $reqeut = "insert into `command` values(" . $rescount. "," . $resc . ",".$quntity.",'2022-02-05'," . $pricep . "," . $prices . ")";
        $reqeut1 = "insert into `prudact` values(" . $rescount . "," . $rescode . ",'" . $namec . "'," . $prices . ")";
        $resulat = mysqli_query($con, $reqeut);
        $resulat1 = mysqli_query($con, $reqeut1);
    }
    $con->close();
}
