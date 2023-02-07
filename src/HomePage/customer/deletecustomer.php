<?php
header("Access-Control-Allow-Origin:*");
header("Access-Control-Allow-Headers:*");
class database{
    public $con;
    public $id;
    function __construct()
    {
        $this->con=new mysqli("localhost","root","","commercial");
    }
    public function delete_customer()
    {
        $datajson=file_get_contents("php://input");
        $data=json_decode($datajson,true);
        if (isset($data["id"])) {
            $requte="delete from customer where id_customer=".$data["id"];
            mysqli_query($this->con,$requte);
        }
    }
}
$client=new database();
$client->delete_customer();