# 体验全新的Particle S主题

<font style="color:red">由于本人备战考研，Particle S主题停更，但主题永久开放下载</font>

> 原作介绍:
>
> 介绍：hexo 主题 particle，诞生原因是因为建多了两个博客，所以自己开发了这个主题来作为 3个博客的主题
>
> 目前有 full、night 和 maiden 三个主题样式

[仓库地址](https://github.com/riru233/circles-hexo-theme1)

此主题正式命名为Particle S，原名为CirCle S for Particle

[点击此处预览主题](https://riru233.github.io)

此主题基于Particle主题，更多帮助文档请点击以下内容进入，原主题的灵魂尚在哦

[Particle主题](https://github.com/korilin/hexo-theme-particle)

在说完原作后，接下来该介绍该主题了

Particle S为Particle的升级版，具备了搜索、音乐、卡片、主题一键切换等多种功能，vue版本也由2升级为3

在配置这个主题之前需要保证自己已经安装Hexo和Node.js

# 基础配置

## 主题安装

进入主题目录后，克隆此仓库

```shell
cd theme && git clone https://github.com/riru233/hexo-theme-particles hexo-theme-particles
```

安装主题后开启主题的方法:在<font color=#44bbee>hexo的根目录 </font>下的 `_config.yml`中，进行如下配置

```yaml
theme: hexo-theme-particles
```

## 关闭 Hexo 自带 highlight

在 <font color=#44bbee>hexo的根目录 </font>下的 `_config.yml`中，将 highlight 下的 enable 设置为 false，如下：

```yml
# _config.yml
highlight:
  enable: false
  line_number: true
  auto_detect: false
  tab_replace: ""
  wrap: true
  hljs: false
prismjs:
  enable: false
  preprocess: true
  line_number: true
  tab_replace: ""
```

修改完请清除缓存

```shell
$ hexo cl
$ hexo g
```

如果使用图片来作为背景，请使用 background-image 属性，不要使用 background 属性。

并且记得不要忘记加上双引号，否则可能会出现错误

```yaml
# 主页顶部背景样式
# 正确示例如下：
# 图片背景： home_background: "background-image:url('../home.jpg')"
# 颜色背景： home_background: "background:black"
home_background: "background-image:url('../home.jpg')"
```

## 站点 footer 配置

考虑到博客部署在服务器并使用自己域名的情况，按国家规定需要在网站下边添加备案消息

如没有需要显示备案消息的可以关闭

```yaml
# 页面尾部，建站时间
footer:
  since: 2017
  # 服务器自定义域名备案底部字段
  ICP:
    enable: true
    code: 琼ICP备xxxxxx号
```

## 其他配置

这些配置请自行配置，这里不做过多的描述

评论系统

```yaml
waline:
    enable: true
    serverURL: https://waline-comment-p91g7g1ok-riru233.vercel.app
    locale: # Locale: https://waline.js.org/guide/client/i18n.html#locale-option
        {}
        # Example:
        # placeholder: Leave a comment
    commentCount: true # If false, comment count will only be displayed in post page, not in home page
    pageview: false # Pageviews count, Note: You should not enable both `waline.pageview` and `leancloud_visitors`
    emoji: # Custom emoji
        - https://unpkg.com/@waline/emojis@1.0.1/weibo
        - https://unpkg.com/@waline/emojis@1.0.1/alus
        - https://unpkg.com/@waline/emojis@1.0.1/bilibili
        - https://unpkg.com/@waline/emojis@1.0.1/qq
        - https://unpkg.com/@waline/emojis@1.0.1/tieba
        - https://unpkg.com/@waline/emojis@1.0.1/tw-emoji
    meta: # Comment information, valid meta are nick, mail and link
        - nick
        - mail
        - link
    requiredMeta: # Set required meta field, e.g.: [nick] | [nick, mail]
        - nick
    lang: zh-CN # Language, available values: en-US, zh-CN, zh-TW, pt-BR, ru-RU, jp-JP
    wordLimit: 0 # Word limit, no limit when setting to 0
    login: enable # Whether enable login, can choose from 'enable', 'disable' and 'force'
    pageSize: 10 # Comment per page
```

站点图标

```yaml
cirs_img: cirs.png     # 存于主题的source路径中
```

# 操作入门

## 总体设计语言

欢迎使用Particle S主题，此主题致敬Particle，整个界面简洁友好，各种组件都收纳到一个智能按钮内 ，拥有音乐播放器等功能

![界面预览](https://pic.imgdb.cn/item/6384c63616f2c2beb113969f.jpg)

### 伪Material You风格

![普通界面风格](https://pic.imgdb.cn/item/637fb71a16f2c2beb1b4a7f2.png)

### 保留原作灵魂的分类页

![分类页](https://pic.imgdb.cn/item/637fb72c16f2c2beb1b4b3ce.png)

## 如何使用音乐播放器？

![播放器预览](https://pic.imgdb.cn/item/637fb75f16f2c2beb1b4d62d.png)

Particle S主题不同于Particle主题的第一个地方在于支持悬浮Aplayer音乐播放器

无需下载npm包，只需按照以下步骤来做，即可享受音乐的快感

### 详细说明引导

此主题内置Aplayer插件

*你可以在主题中 `<font color=#44bbee>`layout的_partial路径 `</font>`下，找到aplayer.ejs，然后对歌曲进行手动添加哦

有关播放器的帮助详见

<a class="uico waves-effect waves-light" href='https://aplayer.js.org/#/zh-Hans/?id=%E5%90%B8%E5%BA%95%E6%A8%A1%E5%BC%8F'>
<div class="co_main">APlayer帮助</div>
<div class="co_sub">如何配置aplayer</div>
</a>

播放器默认打开，如果不想显示播放器的话可以在主题配置文件 `_config.yml`中找到aplayer，然后将enable属性改为false即可关闭

```yaml
aplayer:
	enable: false
```

## 顶部导航栏如何使用？

只需在src内输入跳转链接即可

```yaml
# 导航栏链接
menu:
  主站:
    src: /
  归档:
    src: /archives
  分类:
    src: /categories
  标签云:
    src: /tags
  关于:
    src: /about
```

## 智慧卡片

原本是Particle博客主页右栏的内容，而移动端无法显示

![Particle](https://pic.imgdb.cn/item/637fb77f16f2c2beb1b4edb5.png)

如今，只需要点击右下角的<img src="https://pic.imgdb.cn/item/6384c97a16f2c2beb11b3630.jpg" alt="智慧卡片按钮" style="zoom:33%;" />按钮

焕然一新的卡片化布局呈现在面前，这适合所有chromium架构浏览器与FireFox浏览器

![智慧按钮——卡片化布局](https://pic.imgdb.cn/item/6384c67316f2c2beb1143709.jpg)

卡片的毛玻璃风格显得 `<font style="color: #6eb4ed">`更为美观 `</font>`

### 配置文件说明

#### 卡片头像配置

````yaml
# 卡片头像
head_img: /images/avatar.png      # 存于主题的source路径中
````

#### 卡片其他配置

````yaml
# 第二张、第三张卡片配置
card:
	#第二张卡片
  enable: true    #这个不用管，如果是false的话可能报错
  description: ["这里写描述"]
  
  
  #个人信息下面的账户图标
  icon_links:
    github:     #github
      icon:      #
        type: antd-icon
        name: github
        theme: filled
        src:
      link: https://github.com/Riru233
  
    bilibili:
      icon:
        type: svg   #如果ant-design图标没有的话，可以用svg样式
        data: M3.73252 2.67094C3.33229 2.28484 3.33229 1.64373 3.73252 1.25764C4.11291 0.890684 4.71552 0.890684 5.09591 1.25764L7.21723 3.30403C7.27749 3.36218 7.32869 3.4261 7.37081 3.49407H10.5789C10.6211 3.4261 10.6723 3.36218 10.7325 3.30403L12.8538 1.25764C13.2342 0.890684 13.8368 0.890684 14.2172 1.25764C14.6175 1.64373 14.6175 2.28484 14.2172 2.67094L13.364 3.49407H14C16.2091 3.49407 18 5.28493 18 7.49407V12.9996C18 15.2087 16.2091 16.9996 14 16.9996H4C1.79086 16.9996 0 15.2087 0 12.9996V7.49406C0 5.28492 1.79086 3.49407 4 3.49407H4.58579L3.73252 2.67094ZM4 5.42343C2.89543 5.42343 2 6.31886 2 7.42343V13.0702C2 14.1748 2.89543 15.0702 4 15.0702H14C15.1046 15.0702 16 14.1748 16 13.0702V7.42343C16 6.31886 15.1046 5.42343 14 5.42343H4ZM5 9.31747C5 8.76519 5.44772 8.31747 6 8.31747C6.55228 8.31747 7 8.76519 7 9.31747V10.2115C7 10.7638 6.55228 11.2115 6 11.2115C5.44772 11.2115 5 10.7638 5 10.2115V9.31747ZM12 8.31747C11.4477 8.31747 11 8.76519 11 9.31747V10.2115C11 10.7638 11.4477 11.2115 12 11.2115C12.5523 11.2115 13 10.7638 13 10.2115V9.31747C13 8.76519 12.5523 8.31747 12 8.31747Z
      link: https://space.bilibili.com/85509288
  
  #第三张卡片:友情链接
  friend_links:
    诸神小G's blog: https://www.zsxg.top/
  
````

如果使用图片来作为背景，请使用 background-image 属性，不要使用 background 属性。

并且记得不要忘记加上双引号，否则可能会出现错误

## Particle S配备了多种主题风格

为了方便阅读，Particle S依旧保留了full、maiden、night三种主题

其中night主题纯暗色，方便夜间阅读博客哦

full主题偏蓝色，而maiden主题偏粉色，最适合♂用啦

此外，你还可以更改如下3个color的stylus文件(存于主题source文件夹下的css路径内)来为你的博客定制配色哦(自定义程度直接拉满)

```
maiden-color.styl
full-color.styl
night-color.styl
```

### 定制配色

下面是原作的介绍

本主题采用 stylus 来编写样式，并且将配色分离出来，三种主题的配置对应 3 种配色，如有需要可以直接在主题的 css 目录中对应的配色文件修改配色即可

主题的 `source/css`目录下对应的 xxx-color.styl

- full 主题配色文件：full-color.styl
- ngiht 主题配色文件：night-color.styl
- maiden 主题配色文件：maiden-color.styl

本主题会根据主题配置文件的 `style`配置项的值，在 `source/layout/layout.ejs`中引入对应的样式文件 `xxx-theme.styl`。

主题的样式文件有很多，但最终都会被引入一个 theme 文件，其中 `particle.styl`文件会引入除了配色文件外的所有样式文件，而 `xxx-theme.styl`文件会引入 `particle.styl`文件和对应的 `xxx-color.styl`配色文件，从而达到切换样式的效果。

切换样式的方法:

点击右上角的![样式切换](https://pic.imgdb.cn/item/6384b7be16f2c2beb1f655d2.jpg)图标,然后弹出这个窗口

![切换样式](https://pic.imgdb.cn/item/6384c0df16f2c2beb108f732.jpg)

点击右下角按钮即可一次性切换这三种样式(延续particle主题的经典),三种样式预览图如下



![夜间模式](https://pic.imgdb.cn/item/6384b87f16f2c2beb1f7b41f.jpg)
适合夜间阅读
![唯美模式](https://pic.imgdb.cn/item/6384bdbd16f2c2beb10349c0.jpg)
默认样式，推荐基佬使用
![全量模式](https://pic.imgdb.cn/item/6384bdd516f2c2beb1036f01.jpg)
商业使用

在配置时，可选择自己喜欢的样式作为默认样式，主题下的`_config.yml`配置如下

```yaml
# 样式
pattern:
  default: maiden  # 默认样式，暂时只能选night、maiden、full
  #修改窗口上主题名称的显示，想改什么名字就改什么
  night: 夜间    
  maiden: 唯美
  full: 全量
```


## Particle S升级Pjax技术，以及耳目一新的过渡动画

在过渡动画开启的时候，需要提醒访问者打开硬件加速

注:由于Pjax的特性，博客在IE浏览器下会卡在启动界面(如下图),推荐使用google chrome和Edge浏览器标准模式访问，若Edge卡在启动界面，请确保IE模式是否关闭

![IE打开](https://pic.imgdb.cn/item/6384bd8016f2c2beb102e772.jpg)

开关过渡动画需要在主题下的`_config.yml`设置如下内容

```yaml
trans:
	enable: true  #开启过渡动画
```

## 如何撰写博客？

### 博客文章开头格式

在博客开头yaml模块输入

```yaml
bgpath: [(存于博客根目录source/imgs/mdbg路径)图片名称]    #导入头图
excerpt: [博客帖介绍]    #撰写博客介绍
categories:   #分类
- [分类]
tags:      #标签
- [标签1]
- [标签2]
date: [日期，通常为YYYY/MM/dd]        #日期
```

以上代码给了相应的注释，其中中括号括起来的是变量，需要根据自己的需求填写

比如

```yaml
bgpath: cis3.png    #导入头图
excerpt: 更新了，功能更全了    #撰写博客介绍
categories:   #分类
- hexo
tags:      #标签
- CirCle S
- Hexo
date: 2022/11/10      #日期
```

归档、分类、标签页预览

![归档、分类、标签页预览](https://pic.imgdb.cn/item/637fb7be16f2c2beb1b51bcd.jpg)

主页预览

![主页预览](https://pic.imgdb.cn/item/637fb7c716f2c2beb1b52343.jpg)

其界面基本统一，主页最多可显示10条博客

### 给博客增加一个交互按钮

```ejs
<a class="uico waves-effect waves-light" href='链接'>
<div class="co_main">主标题</div>
<div class="co_sub">副标题</div>
</a>
```

交互按钮能让博客看起来互动性更高，更简洁

## 如何更好地介绍自己?

在 <font color=#44bbee>hexo的根目录 </font>下的source目录，找到doc，新建一个index.md，或者直接新建一个doc.md，然后就可以更好地介绍自己啦

## 搜索框

### 必要组件安装

在使用搜索框之前，需要在博客根目录命令行内输入

```shell
npm install --save hexo-generator-search
npm install --save hexo-generator-searchdb
```

然后在 <font color=#44bbee>hexo的根目录 </font>下的 `_config.yml`中添加

```yaml
search:
  path: search.xml
  field: post
  content: true
```

### 体验

![搜索窗口](https://pic.imgdb.cn/item/637fb7db16f2c2beb1b53160.jpg)

试着在框内输入一个内容:hadoop

![输入框](https://pic.imgdb.cn/item/637fb7e616f2c2beb1b5390f.jpg)

搜索框正常运行

搜索框功能简单，但是在开发过程中遇到很多波折

单搜索框就花费了很多天去开发，从1.0开发到现在，如今正式上线，方便查找博客

## 阅读进度

你可以在主题配置文件中找到这个

将 `enable`属性改为true即可启用

```yaml
readpro:
  enable: true
```

## 其他页面

Hexo预留了其他页面的空间，你可以新建markdown文件撰写你的页面

只需在 `<font color=#44bbee>`hexo的根目录下source文件夹 `</font>`内创建4个markdown文件以维持运行(需要对应菜单栏合理分配页面入口)

比如about.md:

```yaml
---
show: "about"
---
```

下面给出对照表

|show配置|对应source下的文件|生成的链接|备注|
|:---:|:---:|:---:|:---:|
|"about"|about.md|[link]/about| 关于主题|
|"categories"|categories.md|[link]/categories|分类|
|"tags"|tags.md|[link]/tags|标签页|
|"update"|update.md|[link]/update|主题升级日志与规划|

## 计划完工的内容

> 列表页面将会通过markdown中的yaml块书写(待处理)

# 后记

本文件可能存在一些不足之处，请大家积极指正哦，后续也会进行修改，让大家更容易上手
