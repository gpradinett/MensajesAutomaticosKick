// ==UserScript==
// @name         Mensajes Automáticos Kick Chat
// @namespace    http://tampermonkey.net/
// @version      1.2
// @description  Envia mensajes aleatorios automáticamente en el chat de Kick. Ideal para streamers. 🤖
// @author       Fernando Gonzales P.
// @license      MIT
// @match        https://kick.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=kick.com
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    console.log("✅ KickBot Activado por Fernando Gonzales P.");

    // 🎯 Selector específico para evitar conflictos con otros contenteditables
    function obtenerCampoChat() {
        return document.querySelector('div[data-testid="chat-input"][contenteditable="true"]');
    }

    // 📨 Inserta el mensaje y simula presionar Enter
    function enviarMensaje(mensaje) {
        const chatInput = obtenerCampoChat();
        if (!chatInput) {
            console.warn("⚠️ Campo de chat no encontrado. Verificando en 5s...");
            return;
        }

        chatInput.focus();

        // Intentar insertar texto por dos métodos por compatibilidad
        chatInput.textContent = mensaje;
        document.execCommand("insertText", false, mensaje);

        // Simula presionar ENTER
        const enterEvent = new KeyboardEvent('keydown', {
            key: 'Enter',
            code: 'Enter',
            keyCode: 13,
            which: 13,
            bubbles: true
        });
        chatInput.dispatchEvent(enterEvent);

        console.log(`📤 [KickBot] Mensaje enviado: "%c${mensaje}"`, 'color: green; font-weight: bold;');
    }

    // 🎲 Mensajes aleatorios (puedes agregar más aquí)
    const mensajes = [
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

    function obtenerMensajeAleatorio() {
        return mensajes[Math.floor(Math.random() * mensajes.length)];
    }

    function obtenerIntervaloAleatorio(min = 6000, max = 20000) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function iniciarEnvio() {
        const intervalo = obtenerIntervaloAleatorio();
        console.log(`⏳ Próximo mensaje en ${intervalo / 1000} segundos...`);

        setTimeout(() => {
            const mensaje = obtenerMensajeAleatorio();
            enviarMensaje(mensaje);
            iniciarEnvio(); // Repetir
        }, intervalo);
    }

    window.addEventListener('load', () => {
        console.log("🔄 Esperando a que cargue Kick...");
        setTimeout(() => {
            console.log("✅ Iniciando KickBot automático...");
            iniciarEnvio();
        }, 3000); // Pequeña espera para asegurar carga completa
    });
})();
