<?php
header('Access-Control-Allow-Origin:*');
header('Access-Control-Allow-Headers:*');
class addcustomer
{
    public $con;
    public $id;
    public $fname;
    public $lname;
    public $telephone;
    public $date="2022-02-05";
    public $isset = false;
    function __construct()
    {
        $this->con = new mysqli("localhost", "root", "", "commercial");
        $this->set_inf();
        $this->con = new mysqli("localhost", "root", "", "commercial");
    }
    function send_data()
    {
        if ($this->isset) {
            $this->con = mysqli_query($this->con, "insert into customer values(" . $this->id . ",'" . $this->fname . "','" . $this->lname . "'," . $this->telephone . ",'" . $this->date . "')");
        }
    }
    function set_inf()
    {
        $data = file_get_contents('php://input');
        $data = json_decode($data, true);
        if (isset($data["fname"])) {
            $sql = "select COUNT(*) from customer";
            $count = mysqli_query($this->con, $sql);
            $this->id = mysqli_fetch_row($count)[0];
            $this->fname = $data['fname'];
            $this->lname = $data['lname'];
            $this->telephone = $data['telephone'];
            $this->isset = true;
        }
    }
}
$client = new addcustomer();
$client->send_data();
