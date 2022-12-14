<?php
include_once('classes/sendmail.php');
include_once('config.php');

header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Headers: Content-Type');
$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);
if( empty($_POST['name']) && empty($_POST['mail']) ) {
    echo json_encode(
        [
           "sent" => false,
           "message" => $SendMailEmptyerrorMessage,
					 "decode_data" => $_POST,
					 "rest_data" => $rest_json 

        ]
    ); 
    exit();
}

if ($_POST){
    //@important: Please change this before using
    http_response_code(200);
    $subject = 'Contact from: ' . $_POST['name']. '冠德方舟計畫';
    $from = $_POST['mail'];

    $namess = $_POST['name'] ;
    $tel = $_POST['tel'];
    $email = $_POST['mail'] ;
    $house_types = $_POST['house_types']; 
    $area = $_POST['area']; 
		$message = 'hh123'
    // $message = "顧客姓名: $namess\n" . 
    // "聯絡電話: $tel\n" .    
    // "電子信箱: $email\n" .
    // "房屋類型: $house_types\n" .
    // "居住區域: $area\n" .

    // $message = $_POST['msg'];       
    //Actual sending email
    $sendEmail = new Sender($adminEmail, $from, $subject, $message);
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