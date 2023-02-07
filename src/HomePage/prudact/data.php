<?php
header('Access-Control-Allow-Origin:*');
$con = new mysqli("localhost", "root", "", "commercial");

if ($con) {
        $reqeut = "select * from command,prudact where command.id_command=prudact.id_command";
        $resulat = mysqli_query($con, $reqeut);
        echo "[";
        $count = mysqli_num_rows($resulat);
        for ($i = 0; $i < $count; $i++) {
            echo ($i == 0 ? "" : ",") . json_encode(mysqli_fetch_object($resulat));
        }
        echo "]";
    } 
$con->close();
