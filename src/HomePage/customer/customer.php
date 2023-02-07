<?php
header('Access-Control-Allow-Origin:*');
class getcustomers
{
    public $con;
    public $host = "localhost";
    public $user = "root";
    public $database = "commercial";
    public $pw = "";
    function __construct()
    {
        $this->con = mysqli_connect($this->host, $this->user, $this->pw, $this->database);
        $this->con = mysqli_query($this->con, "select * from customer");
    }
    function get_customers()
    {
        if ($this->con) {
            $count = mysqli_num_rows($this->con);
            echo'[';
            for ($i = 0; $i < $count; $i++) {
                echo $i==0?'':',';
                echo json_encode(mysqli_fetch_assoc($this->con));
            }
            echo ']';
        } else {
            echo "no connect";
        }
    }
}
$client = new getcustomers();
$client->get_customers();
