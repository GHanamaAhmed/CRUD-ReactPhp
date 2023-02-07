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
    public function delete_prudact()
    {
        $datajson=file_get_contents("php://input");
        $data=json_decode($datajson,true);
        if (isset($data["id"])) {
            $requte="delete from prudact where id_command=".$data["id"];
            $requte2="delete from command where id_command=".$data["id"];
            mysqli_query($this->con,$requte);
            mysqli_query($this->con,$requte2);
        }
    }
}
$client=new database();
$client->delete_prudact();