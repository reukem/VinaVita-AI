const fs = require('fs');

const html = fs.readFileSync('C:\\Users\\THIS PC\\Downloads\\VinaVita-AI-Mixologist.html', 'utf-8');

console.log('HTML size:', html.length);
console.log('Has corner-chat-widget:', html.includes('corner-chat-widget'));
console.log('Has chatWidgetBox:', html.includes('id="chatWidgetBox"'));
console.log('Has chatWidgetToggleBtn:', html.includes('id="chatWidgetToggleBtn"'));
console.log('Has chatInput:', html.includes('id="chatInput"'));
console.log('Has btnChatSend:', html.includes('id="btnChatSend"'));
console.log('Has initChatWidget call:', html.includes('initChatWidget();'));
console.log('Has navOpenChatBtn:', html.includes('id="navOpenChatBtn"'));
