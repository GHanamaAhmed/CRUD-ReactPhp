<?php
header('Access-Control-Allow-Origin:*');
header('Access-Control-Allow-Headers:*');

class login
{
    public $con;
    public $username;
    public $password;
    function __construct()
    {
        $this->con = new mysqli("localhost", "root", "", "commercial");
    }
    public function get_admin()
    {
        $datajson = file_get_contents('php://input');
        $data = json_decode($datajson, true);
        if (isset($data["password"])) {
            $this->username = $data["username"];
            $this->password = $data["password"];
            $respons = array("res" => false, "messeg" => "username or password not correct");
            $result = mysqli_query($this->con, "select * from `admin` where `username`='" . $this->username . "' and `password`='" . $this->password . "'");
            $result = mysqli_fetch_row($result);
            if (!empty($result)) {
                $respons["res"] = true;
                $respons["messeg"] = "data is correct";
                echo json_encode($respons);
                return;
            }
            echo json_encode($respons);
        }
    }
}
$client=new login();
$client->get_admin();
