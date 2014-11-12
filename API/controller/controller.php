<?php

    $messageModel = new MessageModel($PDO);
    $userModel = new UserModel($PDO);

    if (isset($_GET['action']) && $_GET['action'] === 'listUsers')
    {
        // On tente de lister les users
        $userModel->listAll();

    }

    if (isset($_GET['action']) && $_GET['action'] === 'listMessages')
    {
        // On tente de lister les msg
        $messageModel->listAll();
    }


    if (isset($_GET['action']) && $_GET['action'] === 'addMessage')
    {
        // On tente de créer le nouveau message dans la BDD
        $messageModel->add($_GET['userId'],$_GET['messageValue']);
    }

    // pour la methode 1 :
    
    if (isset($_GET['action']) && $_GET['action'] === 'userAdd')
    {
        echo json_encode($userModel->addIfNotExists($_GET['userNickname']));
    }






