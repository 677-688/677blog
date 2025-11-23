---
# https://vitepress.dev/reference/default-theme-home-page
# VitePress 默认主题提供了一个首页布局，可以通过 frontmatter 指定 layout: home 在任何页面上使用
layout: home
# Hero 部分位于主页顶部
hero:
    # `text` 上方的字符，带有品牌颜色
    # 预计简短，例如产品名称
    name: "677 知识体系"

    # hero 部分的主要文字，
    # 被定义为 `h1` 标签
    text: ""

    # `text` 下方的标语
    tagline: 夯实基础 构建体系 全栈开发

    # text 和 tagline 区域旁的图片
    # type ThemeableImage =
    #| string
    #| { src: string; alt?: string }
    #| { light: string; dark: string; alt?: string }
    #image: { src：'../cat1.ico' },

    # 主页 hero 部分的操作按钮
    # theme:按钮的颜色主题，默认为 `brand`  'brand' | 'alt'
    # text:按钮的标签
    # link：按钮的目标链接
    # target：链接的 target 属性
    # rel：链接的 rel 属性
    actions:
        -   theme: brand
            text: Markdown Examples
            link: /vitepress/vitepress使用
        -   theme: alt
            text: API Examples
            link: /vitepress/vitepress使用

# 在 Features 部分，可以在 Hero 部分之后列出任意数量的 Feature
# icon：在每个 feature 框中显示图标
#          type FeatureIcon =
#             | string
#             | { src: string; alt?: string; width?: string; height: string }
#             | {
#             light: string
#             dark: string
#             alt?: string
#             width?: string
#             height: string
#          }
# title：feature 的标题
# details：feature 的详情
# link：点击 feature 组件时的链接，可以是内部链接，也可以是外部链接。
# linkText：feature 组件内显示的链接文本，最好与 `link` 选项一起使用
# rel：`link` 选项的链接 rel 属性
# target：`link` 选项的链接 target 属性
features:
    -   icon: {
        light: ./cat1.ico,
        dark: ./cat2.ico
    }
        title: Another cool feature
        details: Lorem ipsum...
        link: /vitepress/vitepress使用
    -   icon: {
        light: ./cat1.ico,
        dark: ./cat2.ico
    }
        title: Another cool feature
        details: Lorem ipsum...
        link: /vitepress/vitepress使用
---


-----------------------------------

