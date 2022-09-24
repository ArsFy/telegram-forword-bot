# Forword Bot

![](https://img.shields.io/badge/license-MIT-blue)
![](https://img.shields.io/badge/NodeJS-v16-green)

Delete forwarding information and caption, and forward to Channel

## Run

### 1. Git clone & Install

```bash
git clone https://github.com/ArsFy/telegram-forword-bot.git
cd telegram-forword-bot
npm i
```

### 2. Edit Config.json

```js
{
    "bot_token": "123456:AgAEGesgAEG5e475segG4",   // @BotFather Token
    "admin_id": [ 1000000000 ],                    // User ID (Number)
    "channel_id": -100000000                       // Channel ID (Number)
}
```

### 3. Go

```bash
node main.js
```