/**
 * Created by vonofre on 7/6/2017.
 */
(function () {
    'use strict';
    var app = angular.module('chat');
    app.value('messagesTest', {
            "messages": [{
                "content": "Hello guys! How are you?",
                "id_status": "1",
                "creation_date": "05-30-2017",
                "id_user": "1",
                "username": "Jhon"
            },
            {
                "content": "Hello! great, how about the others?",
                "id_status": "1",
                "creation_date": "05-30-2017",
                "id_user": "2",
                "username": "Robert"
            },
            {
                "content": "Hello! I'm just starting the day",
                "id_status": "1",
                "creation_date": "05-30-2017",
                "id_user": "3",
                "username": "Mike"
            },
            {
                "content": "I'm great by the way",
                "id_status": "1",
                "creation_date": "05-30-2017",
                "id_user": "3",
                "username": "Alison"
            },
            {
                "content": "Hey don't forget about me xD.",
                "id_status": "1",
                "creation_date": "05-30-2017",
                "id_user": "4",
                "username": "Rohit"
            }
        ]
    });
})();