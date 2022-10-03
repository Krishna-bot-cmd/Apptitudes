<?
   $servername = "Localhost";
   $username = " root@localhost";
   $password ="";
   $dbname="";
try{
    $conn = new PDO("MySql:host=$seavername;dbname=$dbname;$username,$password");
    $conn -> setAttribute(PDO::After_ERRMODE,PDO::ERRMODE_Exception);
}
catch(PDOException)
{
    echo"BYE".$e->get-message();
    exit;
}
?>