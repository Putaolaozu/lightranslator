# Lightranslator-光翻译

## 这是啥？

> 鉴于现在国内的翻译 app 已经丧心病狂，甚至能在里面刷短视频、买理财产品（wtf？），想做一个够简洁的翻译 web app。

这是一个基于[Next.JS](https://nextjs.org)的超简洁翻译 web 应用，只有段落翻译和单词释义，操作简便。

### 功能

1. 段落翻译：点击翻译按钮，自动将其他语言译成简体中文，中文译成英语
2. 单词释义：点击输入框或翻译结果中的任意单词，查看详细的英语释义

### 使用演示

![demo](./demo.gif)

## 使用方式

### 桌面端

用浏览器打开 https://guangyi.netlify.app 或 https://guangyi.ptlz.me（我自己的域名）

### Safari（iOS 11 以上）

点击 Safari**菜单栏**，再点击**添加到主屏幕**，使用起来与一般的 app 没有区别，且无需手动更新。

如图：

<img src='./add_to_home.jpeg' alt='Safari add to home page' width='300px'/>

### Android 等其他操作系统与浏览器

与 Safari 类似，多数主流浏览器（Firefox，Chrome 等）都有添加到桌面的功能。

示例：[Firefox 演示视频](https://youtu.be/heSvwQgEMLM)

## 自行部署

到[fanyi-api.baidu.com](https://fanyi-api.baidu.com)注册一个百度翻译开发者账号，申请一个通用文本翻译 API，然后查看自己的开发者信息，记下**APP ID**和**密钥**。

部署的时候，对于**environment variables（环境变量）**，*Key*分别设置为`APP_ID`和`KEY`，对应的*Value*则是你自己开发者账号的*APP ID*和*密钥*。

祝玩得开心！
