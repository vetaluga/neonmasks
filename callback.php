<?php

/* https://api.telegram.org/bot726415381:AAHDKUWYgkXnUElsodzZziqiWPW_oH-w-j8/getUpdates,
где, XXXXXXXXXXXXXXXXXXXXXXX - токен вашего бота, полученный ранее */

$name = $_POST['fname'];
$phone = $_POST['phone'];
// $email = $_POST['user_email'];
$token = "726415381:AAHDKUWYgkXnUElsodzZziqiWPW_oH-w-j8";
$chat_id = "-308234686";
$arr = array(
  'Имя пользователя: ' => $name,
  'Телефон: ' => $phone
  // 'Email' => $email
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