<?php
$UserName = $_POST['UserName'];
$password = $_POST['password'];
$gender = $_POST['option'];
$phone = $_POST['phn '];
if(!empty($UserName)||!empty($password)||!empty($option )||!empty($phn))
{
 $host ="localhost";
 $dbUsername="root";
 $dbpassword="";
 $dbname ="newuser";
    $conn = new mysqli($host,$dbUsername,$dbpassword,$dbname);
    if (mysqli_connect_error())
    {
        die('Connect Error('.mysqli_connect_error().')'.mysqli_connect_error());
    }else
    {
        $SELECT = "SELECT name FROM reg where name = ? Limit 1";
        $INSERT = "INSERT Into reg (name,password,gender,phone) values (?,?,?,?)";
        $stmt = $conn->prepare($select);
        $stmt->bind_param("s",$UserName);
        $stmt->execute();
        $stmt->bind_result($email);
        $stmt->store_result();
        $rnum = $stmt->num_rows;
        if($rnum==0)
        {
            $stmt->close();
            $stmt = $conn->prepare($INSERT);
            $stmt->bind_param("ssssii",$UserName,$password,$gender,$phone);
            $stmt->execute();
            echo "<<<DONE SUCCESS>>>......";
        }else
        {
            echo"User NAME already exeisis";
        }
    }
}else
{
    echo" *FIELD REQUIRED ";
    die();
}
?>