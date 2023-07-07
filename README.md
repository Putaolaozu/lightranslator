## 这是啥？

本应用除了直接翻译以外没有任何其他功能（词义、句式等）。

为保持简洁，不设置语言选项，会自动将中文翻译成英文，其他语言翻译成中文。

鉴于现在国内的翻译 app 已经丧心病狂，甚至能在里面刷短视频、买理财产品（wtf？），想做一个够简洁的翻译 web app。

这是一个基于[Next.JS](https://nextjs.org)和[百度翻译 API](https://https://fanyi-api.baidu.com)的超简洁翻译 web 应用。

## 使用方式

> 强烈建议自行部署，自己申请一个 API（免费），这样不会担心 API 翻译额度用完。部署方式见第三部分。

---

本人的项目部署在 Netlify 上，地址是[guangyi.netlify.app](https://guangyi.netlify.app)，这是一个[PWA](https://zh.wikipedia.org/zh-cn/%E6%B8%90%E8%BF%9B%E5%BC%8F%E7%BD%91%E7%BB%9C%E5%BA%94%E7%94%A8%E7%A8%8B%E5%BA%8F)(渐进式网络应用)，因此强烈建议将其*添加到主屏幕*使用。

### Safari（iOS 11 以上）

点击 Safari**菜单栏**，再点击**添加到主屏幕**，使用起来与一般的 app 没有区别，且无需手动更新。

如图：

![Safari添加到主屏幕](/add_to_home.jpeg)

### Android 等其他操作系统与浏览器

与 Safari 类似，多数主流浏览器（Firefox，Chrome 等）都有添加到桌面的功能。

示例：[Firefox 演示视频](https://youtu.be/heSvwQgEMLM)

## 部署

> 以[Netlify](https://netlify.com)为例，全程免费。

到[fanyi-api.baidu.com](https://fanyi-api.baidu.com)注册一个百度翻译开发者账号，申请一个通用文本翻译 API，然后查看自己的开发者信息，记下**APP ID**和**密钥**。

注册一个 GitHub 账号，将本项目复制到自己的 repository 里，然后用 GitHub 登录[Netlify](https://netlify.com)，选择*Add new site*>_Import an existing project_，选择你自己的那个 repository，其他选项默认即可。记住有一个**Add environment variables**的选项，*Key*分别设置为`APP_ID`和`KEY`，对应的*Value*则是你自己开发者账号的*APP ID*和*密钥*。

### 祝玩得开心！
