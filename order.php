<?php

/* https://api.telegram.org/bot726415381:AAHDKUWYgkXnUElsodzZziqiWPW_oH-w-j8/getUpdates,
где, XXXXXXXXXXXXXXXXXXXXXXX - токен вашего бота, полученный ранее */

$name = $_POST['name'];
$phone = $_POST['phone'];
$delivery = $_POST['delivery'];
$adress = $_POST['adress'];
// $price = $_POST['price'];
// $email = $_POST['user_email'];
$token = "726415381:AAHDKUWYgkXnUElsodzZziqiWPW_oH-w-j8";
$chat_id = "-308234686";

// if($delivery == 0){
// 	$delivery = "Новой почтой"
// } else{
// 	$delivery = "Курьером"
// }
echo '< pre>';
var_dump($_POST);
echo '< /pre>';

$arr = array(
  'Имя пользователя: ' => $name,
  'Телефон: ' => $phone,
  'Доставка: ' => $delivery,
  'Адрес: ' => $adress
);


foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

// if ($sendToTelegram) {
//   header('Location: thank-you.html');
// } else {
//   echo "Error";
// }
?>