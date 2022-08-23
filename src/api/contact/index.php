<?php
include_once('classes/sendmail.php');
include_once('config.php');

header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Headers: Content-Type');
$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);

if( empty($_POST['name']) && empty($_POST['email']) ) {
    echo json_encode(
        [
           "sent" => false,
           "message" => $SendMailEmptyerrorMessage
        ]
    ); 
    exit();
}

if ($_POST){
    //@important: Please change this before using
    http_response_code(200);
    $subject = 'Contact from: ' . $_POST['name']. '來自冠德官網的訪客信';
    $from = $_POST['email'];

    $namess = $_POST['name'] ;
    $tel = $_POST['tel'];
    $email = $_POST['email'] ;
    $house_types = $_POST['house_types']; 
    $area = $_POST['area']; 
    $msg = 
    "顧客姓名: $namess\n" . 
    "聯絡電話: $phone\n" .    
    "電子信箱: $email\n" .
    "房屋類型: $house_types\n" .
    "居住區域: $area\n" 

    $message = $_POST['msg'];       
    //Actual sending email
    $sendEmail = new Sender($adminEmail, $from, $subject, $msg);
    $sendEmail->send();
} else {
 // tell the user about error
 echo json_encode(
     [
        "sent" => false,
        "message" => $SendMailFailederrorMessage
     ]
 );
}