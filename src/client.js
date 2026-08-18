window.__ModuleLoader__.load({
  id: 'dsh-settings-icon-manager',
  factory: (require) => {
    const React = require('react')
    const STORAGE_KEY = 'dsh-settings-icon-manager:v1'
    const DEFAULT = {
      style: 'line',
      enabled: true,
      icons: {
        '手机访问': 'phone', '快照': 'camera', '插件': 'puzzle', '文件提及': 'folder',
        'Web UI 插件': 'grid', '皮肤中心': 'palette', '宠物': 'paw', '社区插件': 'users',
        '图标管理': 'sparkles'
      }
    }
    const ICONS = {
      phone: '<rect x="6" y="3" width="12" height="18" rx="2"/><path d="M10 18h4"/>',
      camera: '<path d="M4 7h3l1.5-2h7L17 7h3v12H4z"/><circle cx="12" cy="13" r="3.5"/>',
      puzzle: '<path d="M8 4h3a2 2 0 1 1 4 0h3v4a2 2 0 1 0 0 4v4h-3a2 2 0 1 1-4 0H8v-4a2 2 0 1 0 0-4z"/>',
      folder: '<path d="M3 7a2 2 0 0 1 2-2h5l2 2h7a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>',
      grid: '<rect x="4" y="4" width="6" height="6" rx="1"/><rect x="14" y="4" width="6" height="6" rx="1"/><rect x="4" y="14" width="6" height="6" rx="1"/><rect x="14" y="14" width="6" height="6" rx="1"/>',
      palette: '<path d="M12 3a9 9 0 1 0 0 18h1.2a1.8 1.8 0 0 0 .2-3.6 1.8 1.8 0 0 1 1.8-2.4H17A4 4 0 0 0 21 11c0-4.4-4-8-9-8z"/><circle cx="7.5" cy="11" r=".7" fill="currentColor"/><circle cx="10" cy="7.5" r=".7" fill="currentColor"/><circle cx="15" cy="8" r=".7" fill="currentColor"/>',
      paw: '<circle cx="12" cy="15.5" r="3.5"/><circle cx="6.5" cy="9" r="1.8"/><circle cx="10.2" cy="6.2" r="1.8"/><circle cx="14.8" cy="6.2" r="1.8"/><circle cx="17.5" cy="9" r="1.8"/>',
      users: '<circle cx="9" cy="8" r="3"/><path d="M3.5 20v-1.5A4.5 4.5 0 0 1 8 14h2a4.5 4.5 0 0 1 4.5 4.5V20"/><path d="M16 5.5a3 3 0 0 1 0 5.8M18 20v-1.5a4.5 4.5 0 0 0-2.2-3.9"/>',
      sparkles: '<path d="m12 3 1.2 4.8L18 9l-4.8 1.2L12 15l-1.2-4.8L6 9l4.8-1.2zM19 15l.6 2.4L22 18l-2.4.6L19 21l-.6-2.4L16 18l2.4-.6z"/>',
      search: '<circle cx="11" cy="11" r="6"/><path d="m20 20-4.2-4.2"/>', bell: '<path d="M18 9a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9M10 21h4"/>',
      globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/>', cloud: '<path d="M7 18h10a4 4 0 0 0 .5-8A6 6 0 0 0 6 12a3 3 0 0 0 1 6z"/>',
      lock: '<rect x="5" y="10" width="14" height="11" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/>', key: '<circle cx="8" cy="15" r="3"/><path d="m10.5 12.5 8-8M15 7l2 2m-4 0 2 2"/>',
      shield: '<path d="M12 3 20 6v5c0 5-3.5 8.2-8 10-4.5-1.8-8-5-8-10V6z"/><path d="m9 12 2 2 4-4"/>', home: '<path d="m3 11 9-8 9 8v9H3z"/><path d="M9 20v-6h6v6"/>',
      heart: '<path d="M20.8 8.5c0 5-8.8 10.5-8.8 10.5S3.2 13.5 3.2 8.5A4.4 4.4 0 0 1 11 5.7l1 1 1-1a4.4 4.4 0 0 1 7.8 2.8z"/>', star: '<path d="m12 3 2.7 5.5 6.1.9-4.4 4.3 1 6.1-5.4-2.9-5.4 2.9 1-6.1-4.4-4.3 6.1-.9z"/>',
      bookmark: '<path d="M6 4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v17l-6-3-6 3z"/>', calendar: '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M7 3v4m10-4v4M3 10h18"/>',
      clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>', message: '<path d="M4 5h16v11H9l-5 4z"/>',
      send: '<path d="m21 3-7.5 18-3.5-8-8-3.5zM10 13l5-5"/>', mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>',
      monitor: '<rect x="3" y="4" width="18" height="13" rx="2"/><path d="M8 21h8m-4-4v4"/>', terminal: '<rect x="3" y="4" width="18" height="16" rx="2"/><path d="m7 9 3 3-3 3m5 1h5"/>',
      code: '<path d="m8 6-5 6 5 6m8-12 5 6-5 6m-3-14-2 16"/>', database: '<ellipse cx="12" cy="5" rx="7" ry="3"/><path d="M5 5v7c0 1.7 3.1 3 7 3s7-1.3 7-3V5m-14 7v7c0 1.7 3.1 3 7 3s7-1.3 7-3v-7"/>',
      server: '<rect x="3" y="4" width="18" height="6" rx="2"/><rect x="3" y="14" width="18" height="6" rx="2"/><path d="M7 7h.01M7 17h.01"/>', wifi: '<path d="M3 9a14 14 0 0 1 18 0M6 13a9 9 0 0 1 12 0m-9 4a4 4 0 0 1 6 0"/><circle cx="12" cy="20" r="1" fill="currentColor"/>',
      link: '<path d="M10 13a5 5 0 0 0 7.1.1l2-2a5 5 0 0 0-7.1-7.1l-1.1 1.1M14 11a5 5 0 0 0-7.1-.1l-2 2A5 5 0 0 0 12 20l1.1-1.1"/>', download: '<path d="M12 3v12m-5-5 5 5 5-5M4 21h16"/>',
      upload: '<path d="M12 21V9m-5 5 5-5 5 5M4 3h16"/>', sliders: '<path d="M4 6h16M4 12h16M4 18h16"/><circle cx="9" cy="6" r="2" fill="white"/><circle cx="15" cy="12" r="2" fill="white"/><circle cx="11" cy="18" r="2" fill="white"/>',
      wrench: '<path d="M14 6a5 5 0 0 0-6.5 6.5L3 17l4 4 4.5-4.5A5 5 0 0 0 18 10l-3 2-3-3z"/>', tool: '<path d="m14 6 4-4 4 4-4 4zM3 21l9-9"/>',
      file: '<path d="M6 3h8l4 4v14H6z"/><path d="M14 3v5h5"/>', filetext: '<path d="M6 3h8l4 4v14H6z"/><path d="M14 3v5h5M9 13h6m-6 4h6"/>',
      image: '<rect x="3" y="4" width="18" height="16" rx="2"/><circle cx="8" cy="9" r="1.5"/><path d="m4 18 5-5 3 3 2-2 6 4"/>', video: '<rect x="3" y="6" width="13" height="12" rx="2"/><path d="m16 10 5-3v10l-5-3z"/>',
      music: '<path d="M9 18V6l10-2v12"/><circle cx="6" cy="18" r="3"/><circle cx="16" cy="16" r="3"/>', map: '<path d="m3 6 6-3 6 3 6-3v15l-6 3-6-3-6 3zM9 3v15m6-12v15"/>',
      pin: '<path d="M20 10c0 6-8 11-8 11S4 16 4 10a8 8 0 1 1 16 0z"/><circle cx="12" cy="10" r="2.5"/>', tag: '<path d="M3 12V5h7l10 10-7 7z"/><circle cx="8" cy="8" r="1" fill="currentColor"/>',
      cart: '<path d="M3 4h2l2 12h11l2-8H6m2 12a1.5 1.5 0 1 0 0 .01M17 20a1.5 1.5 0 1 0 0 .01"/>', chart: '<path d="M4 20V4m0 16h17M8 16v-4m4 4V8m4 8v-6m4 6V5"/>',
      rocket: '<path d="M14 4c3-2 6-1 6-1s1 3-1 6l-8 8-5-5zM9 15l-4 1-2 4 5-2m4-11a2 2 0 1 0 .01 0"/>', layers: '<path d="m12 3 9 5-9 5-9-5zM3 12l9 5 9-5M3 16l9 5 9-5"/>',
      eye: '<path d="M3 12s3-6 9-6 9 6 9 6-3 6-9 6-9-6-9-6z"/><circle cx="12" cy="12" r="2.5"/>', edit: '<path d="m4 20 4.5-1 10-10-3.5-3.5-10 10zM13.5 6.5 17 10"/>',
      trash: '<path d="M4 7h16m-10 4v6m4-6v6M9 7l1-3h4l1 3m-9 0 1 14h10l1-14"/>', plus: '<path d="M12 5v14M5 12h14"/>',
      check: '<path d="m5 12 4 4L19 6"/>', info: '<circle cx="12" cy="12" r="9"/><path d="M12 11v5m0-8h.01"/>'
    }
    const LABELS = Object.keys(DEFAULT.icons)
    let config = load()
    let observer = null
    let scheduled = false

    function load() {
      try { return { ...DEFAULT, ...JSON.parse(localStorage.getItem(STORAGE_KEY)), icons: { ...DEFAULT.icons, ...JSON.parse(localStorage.getItem(STORAGE_KEY))?.icons } } }
      catch { return structuredClone(DEFAULT) }
    }
    function save(next) {
      config = next
      localStorage.setItem(STORAGE_KEY, JSON.stringify(config))
      document.documentElement.dispatchEvent(new CustomEvent('dsh-settings-icons-changed'))
      applyIcons()
    }
    function svg(name, old) {
      const next = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
      next.setAttribute('viewBox', '0 0 24 24')
      next.setAttribute('fill', 'none')
      next.setAttribute('stroke', 'currentColor')
      next.setAttribute('stroke-width', '1.9')
      next.setAttribute('stroke-linecap', 'round')
      next.setAttribute('stroke-linejoin', 'round')
      next.setAttribute('aria-hidden', 'true')
      next.setAttribute('data-dsim-icon', name)
      next.setAttribute('width', old?.getAttribute('width') || '24')
      next.setAttribute('height', old?.getAttribute('height') || '24')
      if (old?.getAttribute('class')) next.setAttribute('class', old.getAttribute('class'))
      next.innerHTML = ICONS[name] || ICONS.sparkles
      return next
    }
    function textOf(node) { return (node.textContent || '').replace(/\s+/g, ' ').trim() }
    function findNavItem(label) {
      return [...document.querySelectorAll('button, [role="button"], a')].find((node) => textOf(node) === label)
    }
    function applyIcons() {
      if (!config.enabled) return
      for (const [label, icon] of Object.entries(config.icons)) {
        const item = findNavItem(label)
        if (!item) continue
        const old = item.querySelector('svg')
        if (!old || old.getAttribute('data-dsim-icon') === icon) continue
        old.replaceWith(svg(icon, old))
      }
    }
    function schedule() {
      if (scheduled) return
      scheduled = true
      requestAnimationFrame(() => { scheduled = false; applyIcons() })
    }
    function Preview({ name }) {
      return React.createElement('svg', {
        viewBox: '0 0 24 24', width: 20, height: 20, fill: 'none', stroke: 'currentColor',
        strokeWidth: 1.9, strokeLinecap: 'round', strokeLinejoin: 'round',
        dangerouslySetInnerHTML: { __html: ICONS[name] || ICONS.sparkles }
      })
    }
    function SettingsPage() {
      const [, refresh] = React.useReducer((n) => n + 1, 0)
      const [openLabel, setOpenLabel] = React.useState(null)
      React.useEffect(() => {
        const update = () => refresh()
        document.documentElement.addEventListener('dsh-settings-icons-changed', update)
        return () => document.documentElement.removeEventListener('dsh-settings-icons-changed', update)
      }, [])
      const chooseIcon = (label, name) => {
        save({ ...config, icons: { ...config.icons, [label]: name } })
        setOpenLabel(null)
      }
      return React.createElement('section', { className: 'dsim-page' },
        React.createElement('style', null, '.dsim-page{max-width:760px;padding:24px;font-family:inherit;color:var(--dsw-alias-label-primary,#1f2937)}.dsim-page h2{margin:0 0 6px;font-size:20px}.dsim-page p{margin:0 0 18px;color:var(--dsw-alias-label-secondary,#6b7280)}.dsim-toolbar,.dsim-row{display:flex;align-items:center;gap:12px}.dsim-toolbar{margin-bottom:18px}.dsim-entries{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));column-gap:22px}.dsim-row{min-height:40px;padding:8px 0;border-top:1px solid var(--dsw-alias-border-l1,#e5e7eb)}.dsim-row>span{flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.dsim-page button{border:1px solid var(--dsw-alias-border-l2,#d1d5db);border-radius:8px;background:var(--dsw-alias-bg-base,#fff);color:inherit;font:inherit;cursor:pointer}.dsim-current{width:40px;height:34px;display:grid;place-items:center}.dsim-picker{position:relative}.dsim-grid{position:absolute;z-index:10;right:0;top:40px;display:grid;grid-template-columns:repeat(6,36px);gap:6px;padding:8px;background:var(--dsw-alias-bg-base,#fff);border:1px solid var(--dsw-alias-border-l2,#d1d5db);border-radius:10px;box-shadow:0 10px 28px rgba(0,0,0,.14)}.dsim-choice{width:36px;height:36px;display:grid;place-items:center;padding:0}.dsim-choice:hover{background:var(--dsw-alias-interactive-bg-hover,#f1f5f9)}.dsim-choice.on{border-color:var(--dsw-alias-interactive-primary-solid,#4267d5);box-shadow:0 0 0 2px rgba(66,103,213,.18);color:var(--dsw-alias-interactive-primary-solid,#4267d5)}@media(max-width:620px){.dsim-entries{grid-template-columns:1fr}}'),
        React.createElement('h2', null, '侧栏图标'),
        React.createElement('p', null, '为第三方设置页替换默认齿轮；设置保存在当前浏览器。'),
        React.createElement('div', { className: 'dsim-toolbar' },
          React.createElement('span', null, '图标风格：黑色线性'),
          React.createElement('button', { type: 'button', onClick: () => save(structuredClone(DEFAULT)) }, '恢复默认')
        ),
        React.createElement('div', { className: 'dsim-entries' }, ...LABELS.map((label) => React.createElement('div', { className: 'dsim-row', key: label },
          React.createElement(Preview, { name: config.icons[label] }),
          React.createElement('span', null, label),
          React.createElement('div', { className: 'dsim-picker' },
            React.createElement('button', { type: 'button', className: 'dsim-current', title: '选择图标', 'aria-label': '选择 ' + label + ' 的图标', onClick: () => setOpenLabel(openLabel === label ? null : label) },
              React.createElement(Preview, { name: config.icons[label] })
            ),
            openLabel === label ? React.createElement('div', { className: 'dsim-grid', role: 'group', 'aria-label': label + ' 图标选择' },
              ...Object.keys(ICONS).map((name) => React.createElement('button', { key: name, type: 'button', className: 'dsim-choice' + (name === config.icons[label] ? ' on' : ''), title: name, 'aria-label': name, onClick: () => chooseIcon(label, name) }, React.createElement(Preview, { name })))
            ) : null
          )
        )))
      )
    }
    function apply(ctx) {
      ctx.effect(() => ctx.slots.inject('settings.section', () => ctx.slots.register({
        name: 'settings.section', id: 'settings-icon-manager', order: 145,
        label: () => '图标管理'
      }, SettingsPage)))
      observer = new MutationObserver(schedule)
      observer.observe(document.documentElement, { childList: true, subtree: true })
      schedule()
      return () => observer?.disconnect()
    }
    return { inject: ['slots'], apply }
  }
})
