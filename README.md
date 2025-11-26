# 🎬 VideoHelper | 小白视频助手
> The simplest video tool for non-techies. Runs 100% in your browser. Private & Free.
> 专为“不懂电脑”的朋友设计的视频工具箱。纯浏览器运行，不上传文件，绝对安全。

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![FFmpeg.wasm](https://img.shields.io/badge/Powered%20by-FFmpeg.wasm-green)](https://github.com/ffmpegwasm/ffmpeg.wasm)

[**🔴 LIVE DEMO (点击使用)**](https://your-username.github.io/your-repo-name/)
*(Replace the link above with your actual GitHub Pages URL / 请将上面的链接替换为你实际的 GitHub Pages 链接)*

---

## 📖 Introduction (简介)

As a Motion Designer, I often get asked by friends: *"My video won't open,"* *"The file is too big for WeChat,"* or *"How do I get the music out of this video?"*

Standard software like Premiere Pro is too complex for them. Online converters are often full of ads or require uploading private files to unknown servers.

**VideoHelper** solves this. It uses **WebAssembly (FFmpeg)** to process videos directly in your browser. **Your files never leave your computer.**

作为一名设计师，我经常被朋友问：“视频发给老板打不开怎么办？”、“视频超过200M微信发不了怎么办？”。

专业的剪辑软件对他们太难了，而网上的在线转换器往往广告满天飞，还需要把隐私视频上传到别人的服务器。

**小白视频助手** 就是为了解决这个问题。利用 **WebAssembly** 技术，直接在你的浏览器里处理视频。**你的视频永远不会上传到云端，绝对安全。**

---

## ⚡ Features (功能特点)

| Icon | Feature | Description (EN) | 功能说明 (CN) |
| :--- | :--- | :--- | :--- |
| 🔄 | **Video to MP4** | Convert MOV, MKV, AVI to universal MP4 (H.264). | **万能格式转换**：解决视频打不开、黑屏问题。 |
| 📉 | **Compress Video** | Reduce file size for WhatsApp/WeChat/Email. | **微信视频压缩**：画质几乎不变，体积大幅减小。 |
| ✂️ | **Trim Video** | Cut out the boring parts (start/end). | **傻瓜剪辑**：简单的掐头去尾，去掉多余镜头。 |
| 🎵 | **Extract Audio** | Convert video to MP3 audio file. | **提取音频**：只要声音，不要画面，生成MP3。 |
| 🖼️ | **HEIC to JPG** | Fix iPhone photos not opening on Windows/Android. | **苹果图片转换**：把 iPhone 的 HEIC 照片转成 JPG。 |

---

## 🚀 How to Use (如何使用)

1.  Open the [Website Link](https://your-username.github.io/your-repo-name/).
2.  Select a tool from the left menu (e.g., "Compress").
3.  Click **"📂 Select File"**.
4.  Wait for the process to finish (Local processing depends on your CPU speed).
5.  Click **"⬇️ Download"**.

1.  打开 [网页链接](https://your-username.github.io/your-repo-name/)。
2.  在左侧菜单选择功能（比如“微信视频压缩”）。
3.  点击 **“📂 选择文件”** 上传视频。
4.  等待处理完成（因为是本地处理，速度取决于你的电脑性能）。
5.  点击 **“⬇️ 下载文件”** 保存。

---

## 🛠️ For Developers (开发者指南)

If you want to run this locally or fork it:

1.  Clone the repo.
2.  Because of `SharedArrayBuffer` security requirements, you must serve this with specific headers (`COOP` and `COEP`).
3.  **Simply opening `index.html` locally will NOT work for video features.**
4.  I used `coi-serviceworker.js` to handle the headers automatically for GitHub Pages.

**Tech Stack:**
* HTML5 + Vanilla JS
* Tailwind CSS (CDN)
* FFmpeg.wasm (Core Engine)
* heic2any (Image Engine)

---

## 📝 License

This project is open-sourced under the MIT License. Feel free to use it to help your friends!
本项目采用 MIT 协议开源。欢迎转发给身边不懂电脑的朋友使用！
