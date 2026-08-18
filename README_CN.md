# dsh-settings-icon-manager

为 [DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness)（DSH）的第三方设置侧栏提供统一的语义化图标。

[English README](README.md)

## 功能

- 将第三方设置页默认的齿轮图标替换为更有辨识度的线性图标。
- 内置“手机访问、快照、文件提及、Web UI 插件、皮肤中心、宠物、社区插件”等常见项目的图标映射。
- 提供“**图标管理**”设置页，可为每个菜单项目单独选择图标。
- 内置约 50 个图标，覆盖文件、开发、网络、安全、媒体、组织与常用操作。
- 设置项采用紧凑的两列布局，图标选择器为每行 6 个图标的多行面板。
- 配置只保存在当前浏览器本地，不会修改其他插件的源码。

## 安装

```powershell
dsh plugin --profile web add github:zhoupengjie/dsh-settings-icon-manager
```

重启 `dsh web` 后，在设置侧栏中打开“**图标管理**”。

## 开发

客户端代码位于 `src/client.js`。插件通过监听页面中设置侧栏的 DOM 来替换默认图标；如果 DSH 更改了该内部结构，插件可能需要同步适配。

## 许可证

MIT
