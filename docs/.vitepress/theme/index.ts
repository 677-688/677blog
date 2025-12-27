// https://vitepress.dev/guide/custom-theme
import {h} from 'vue'
import type {Theme} from 'vitepress'
import DefaultTheme from 'vitepress/theme'
// import './style.css'
import './style/index.css'

import mediumZoom from 'medium-zoom';
import {onMounted, watch, nextTick} from 'vue';
import {useRoute} from 'vitepress';
import {useData} from 'vitepress'

// 只需添加以下一行代码，引入时间线样式
import "vitepress-markdown-timeline/dist/theme/index.css";

import {inBrowser} from 'vitepress'
import busuanzi from 'busuanzi.pure.js'
import DataPanel from "./components/DataPanel.vue"
import UpdateTime from "./components/UpdateTime.vue"
import ArticleMetadata from './components/ArticleMetadata.vue';
import Xgplayer from './components/Xgplayer.vue';
import HomeUnderline from './components/HomeUnderline.vue';
import Linkcard from './components/Linkcard.vue';

// 彩虹背景动画样式
let homePageStyle: HTMLStyleElement | undefined

import MyLayout from './components/MyLayout.vue'

import {NProgress} from 'nprogress-v2/dist/index.js' // 进度条组件
import 'nprogress-v2/dist/index.css' // 进度条样式

export default {
    extends: DefaultTheme,
    Layout: MyLayout,

    enhanceApp({app, router}) {
        if (inBrowser) {
            NProgress.configure({showSpinner: false})
            router.onBeforeRouteChange = () => {
                NProgress.start() // 开始进度条
            }
            router.onAfterRouteChanged = () => {
                busuanzi.fetch()
                NProgress.done() // 停止进度条
            }
        }

        // 彩虹背景动画样式
        if (typeof window !== 'undefined') {
            watch(
                () => router.route.data.relativePath,
                () => updateHomePageStyle(location.pathname === '/'),
                {immediate: true},
            )
        }

        // 注册全局组件
        app.component('DataPanel', DataPanel)
        app.component('UpdateTime', UpdateTime)
        app.component('ArticleMetadata', ArticleMetadata)
        app.component('xgplayer', Xgplayer)
        app.component('HomeUnderline', HomeUnderline)
        app.component('Linkcard', Linkcard)
    },

    setup() {
        const route = useRoute();
        const initZoom = () => {
            // mediumZoom('[data-zoomable]', { background: 'var(--vp-c-bg)' }); // 默认
            mediumZoom('.main img', {background: 'var(--vp-c-bg)'}); // 不显式添加{data-zoomable}的情况下为所有图像启用此功能
        };
        onMounted(() => {
            initZoom();
        });
        watch(
            () => route.path,
            () => nextTick(() => initZoom())
        );
    },
}

// 彩虹背景动画样式
function updateHomePageStyle(value: boolean) {
    if (value) {
        if (homePageStyle) return

        homePageStyle = document.createElement('style')
        homePageStyle.innerHTML = `
    :root {
      animation: rainbow 12s linear infinite;
    }`
        document.body.appendChild(homePageStyle)
    } else {
        if (!homePageStyle) return

        homePageStyle.remove()
        homePageStyle = undefined
    }
}