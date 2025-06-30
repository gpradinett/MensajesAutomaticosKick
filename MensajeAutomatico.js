// ==UserScript==
// @name         Mensajes Automatico por USER y Perfil KICK
// @namespace    http://tampermonkey.net/
// @version      1.1
// @description  Un bot mejorado para chatear automáticamente en Kick
// @author       Fernando Gonzales P.
// @match        https://kick.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    function encontrarChat() {
        return document.querySelector('div[contenteditable="true"]');
    }

    function escribirMensaje(mensaje) {
        let chatInput = encontrarChat();
        if (chatInput) {
            chatInput.focus();
            let event = new Event('input', { bubbles: true });
            chatInput.textContent = mensaje;
            chatInput.dispatchEvent(event);

            // Simula presionar ENTER
            let enterEvent = new KeyboardEvent('keydown', { key: 'Enter', bubbles: true });
            chatInput.dispatchEvent(enterEvent);
        } else {
            console.warn('⚠️ No se encontró el campo de chat. Reintentando en 5 segundos...');
            setTimeout(verificarChatYEnviar, 5000);
        }
    }

    function verificarChatYEnviar() {
        let chatInput = encontrarChat();
        if (chatInput) {
            console.log('✅ Campo de chat detectado. Enviando mensaje...');
            escribirMensaje('Este es un mensaje de prueba. 🤖');
        } else {
            console.warn('⚠️ El chat no está disponible. Verificando nuevamente en 5 segundos...');
            setTimeout(verificarChatYEnviar, 5000);
        }
    }

    // Esperar a que la página cargue completamente
    window.addEventListener('load', () => {
        console.log('🔄 Iniciando Kick Chatbot...');
        setTimeout(verificarChatYEnviar, 5000);
    });
})();
// ==UserScript==
// @name         Mensajes Automatico por USER y Perfil KICK
// @namespace    http://tampermonkey.net/
// @version      1.1
// @description  Un bot mejorado para chatear automáticamente en Kick
// @license MIT
// @author       Fernando Gonzales P.
// @match        https://kick.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=kick.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    console.log("✅ Kick Chatbot Activo");

    window.onload = function() {
        startRandomMessageTimer();
    };

    function startRandomMessageTimer() {
        function getRandomInt(min, max) {
            return Math.floor(Math.random() * (max - min + 1) + min);
        }

        function sendRandomMessage() {
            let chatInput = document.querySelector('div[contenteditable="true"]');
            if (!chatInput) {
                console.warn("⚠️ No se encontró el campo de chat. Asegúrate de estar en la página correcta.");
                return;
            }

            let messages = [
                "¿Quién banca desde la PC? 💻",
                "¡Dale follow o te convertís en sapo! 🐸",
                "!Jacinta Ay hijito, este stream está más prendido que mi cocina de leña 🔥😂",
                "!Jacinta ¡Oe oe! ¡Paren la música que me estoy meneando sola acá! 💃🤣",
                "!Jacinta ¡Señor streamer! ¿Usted me está viendo o solo se hace el loco? 😳",
                "!Jacinta Yo pensaba que Twitch era un remedio pa’ la tos, pero acá ando 🤪",
                "!Jacinta Este chat está más fuerte que el ají de mi comadre 💀🌶️",
                "!Jacinta ¡Me caí de la hamaca del susto con ese donador, caracho! 😱",
                "!Jacinta Ayayay, ¿esto es música o es que se cayó una olla? 🥁",
                "!Jacinta ¡Sigan al canal, hijitos, no sean malcriados! 😤",
                "!Jacinta Yo vine por el pan con queso, y me quedé por el chisme 💁‍♀️",
                "!Jacinta ¡Pongan play otra vez! Me estaba sacando los pasitos prohibidos 💃👣",
                "!Jacinta ¡Ay la puchica, este streamer está más guapo que mi compadre joven! 😏",
                "!Jacinta ¡Paren todo, que ya me dio miedo el chat! 😨",
                "!Jacinta ¡Hijitos, este canal está más rico que mi sopa de domingo! 🍲😍",
                "!Jacinta ¿Quién me explica qué es eso de follow? ¿Se come? 😅",
                "!Jacinta ¡Sáquense los emotes que esto está para bailar la cumbia sin miedo! 💃",
                "!Jacinta ¡Mi burro también quiere ver el stream, pero se comió el cable! 🐴📺",
                "!Jacinta ¡Este streamer grita más que mi vecina cuando pierde en bingo! 🎰",
                "!Jacinta Me metí al stream y ya quiero ser moderadora, caracho 💪",
                "!Jacinta Hijito, súbele el volumen que estoy medio sorda 👵🔊",
                "!Jacinta ¡Siento que esto es más emocionante que mi telenovela de las 9! 📺💕",
                "!Jacinta Ayayay, ¡si no le dan follow al canal les jalo las trenzas! 🤭",
                "!Jacinta ¡Hijitos! ¿Dónde están los que no se bañan pero ven stream todo el día? 🛁🚫",
                "!Jacinta ¡Ya me emocioné! ¡Voy a regalar queso a los que den follow! 🧀🎁",
                "!Jacinta ¡Paren de bailar que ya me torcí un pie virtual! 🦶😵"
            ];


            let randomMessage = messages[Math.floor(Math.random() * messages.length)];

            chatInput.focus();
            document.execCommand("insertText", false, randomMessage);

            setTimeout(() => {
                let enterEvent = new KeyboardEvent('keydown', {
                    key: 'Enter',
                    code: 'Enter',
                    keyCode: 13,
                    which: 13,
                    bubbles: true
                });
                chatInput.dispatchEvent(enterEvent);
                console.log(`📢 Mensaje enviado: ${randomMessage}`);
            }, 1000);
        }

        function initiateTimer() {
            let interval = getRandomInt(6000, 20000);
            console.log(`⏳ Próximo mensaje en: ${interval / 1000} segundos`);

            setTimeout(() => {
                sendRandomMessage();
                initiateTimer();
            }, interval);
        }

        initiateTimer();
    }
})();
