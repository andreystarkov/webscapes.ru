<?php

    // hate this shit.

    $name = stripslashes($_POST[name]);
    $email = stripslashes($_POST[email]);
    $text = stripslashes($_POST[text]);
    $referer = $_POST[referer];
    $remote_host = $_SERVER[REMOTE_ADDR];
    $server = $_SERVER[SERVER_NAME];
    $browser = $_SERVER[HTTP_USER_AGENT];

    $myemail = 'im@andreystarkov.ru';
    $subject = 'webscapes.ru';

    if(!$email){
        $status .= "No back.<br>";
    }


    if($_COOKIE['nospam'] == ""){
        if(!$status){
            $header = "From: $email\r\nReply-To: $email\r\n";

    		$message = "
    		Имя отправителя: $name
    		Обратная связь: $email

    		$text

    		---

    		IP: $remote_host
    		CL: $browser
    		";

            if(mail($myemail, $subject, $message, $header)){
                $status = "Thank you for your Feedback!!<br><br>";
    			setcookie("nospam", $remote_host, time()+500);
            }

        }

    	$current = "<br><br>name: ".$name."<br>back: ".$email."<br><br>text: ".$text."<br><br><br>current: ".$current."<br><br><hr>".$_COOKIE['sent'];

    }

// $current = "Cookie = ".$_COOKIE['nospam'];
//$file = 'debug.html';

//file_put_contents($file, $current);


    $referer = $_SERVER[HTTP_REFERER];

    if(!preg_match('#^http://[a-z0-9-]+.([a-z0-9-]+.)?[a-z]+#i', $referer))
    {
        unset($referer);
    }
