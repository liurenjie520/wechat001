const { Wechaty } = require('wechaty');
const { PuppetPadlocal } = require('wechaty-puppet-padlocal');
const WechatyWebPanelPlugin = require('wechaty-web-panel');

const name = 'wechat-assistant-pro';
let bot = '';
// 1、如果没有token请使用以下代码
bot = new Wechaty({
    name, // generate xxxx.memory-card.json and save login data for the next login
    puppet: 'wechaty-puppet-wechat',
});

// 2、如果有token请使用一下配置
// const puppet = new PuppetPadlocal({
//     token: '**************',
// });
// bot = new Wechaty({
//     name,
//     puppet,
// });

bot
    .use(
        WechatyWebPanelPlugin({
            apiKey: 'a65c48e4229b674840ee1834fe295dde5c9979e7',
            apiSecret: '9652eac585b02b8461528cac1c7e9ad3e5f0bd05',
        })
    )
    .start()
    .catch((e) => console.error(e));

