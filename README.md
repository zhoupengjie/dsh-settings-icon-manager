# dsh-settings-icon-manager

为 DeepSeek Harness（DSH）设置侧栏提供统一的语义化图标。

## 功能

- 将第三方设置页的默认齿轮替换为线性语义图标。
- 支持手机访问、快照、文件提及、Web UI 插件、皮肤中心、宠物和社区插件等常见设置项。
- 在“图标管理”页面中为每项选择图标；内置约 50 个文件、开发、网络、安全、媒体与常用操作图标。
- 图标选择器为 6 列多行布局，设置项采用两列紧凑排列。
- 所有个性化设置仅保存在浏览器本地，不修改其他插件的源码。

## 安装

```powershell
dsh plugin --profile web add github:zhoupengjie/dsh-settings-icon-manager
```

重启 `dsh web` 后，在设置侧栏打开“图标管理”。

## 开发

客户端代码位于 `src/client.js`。它通过设置侧栏的 DOM 观察机制替换默认图标，因此 DSH 更改设置侧栏内部结构时可能需要适配。

## License

MIT
