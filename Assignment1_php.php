<?php
/**
 * Created by PhpStorm.
 * User: allon
 * Date: 2018/4/16
 * Time: 18:07
 */
$servername = 'rerun.it.uts.edu.au';
$username = 'potiro';
$password = 'pcXZb(kL';
$dbname = 'poti';

$conn = new mysqli($servername, $username,$password,$dbname);
if ($conn -> connect_error){
    die('connect fail: ' .$conn->connect_error);
}

$selectID=1000;
$sql= "SELECT * FROM products WHERE product_id=$selectID ";
$result = $conn->query($sql);
if ($result->num_rows>0){
    while ($row = $result->fetch_assoc()){
        echo "product_id: ".$row['product_id']." product_name: ".$row["product_name"]."<br>";

    }

}else {
    echo "0 result";
}


?>