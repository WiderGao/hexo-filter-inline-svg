# hexo-filter-inline-svg
[![npm package](https://img.shields.io/npm/v/hexo-filter-inline-svg)](https://npmjs.org/package/hexo-filter-inline-svg)
[![license](https://img.shields.io/npm/l/hexo-filter-inline-svg)](./LICENSE "LICENSE")
[![GitHub issues](https://img.shields.io/github/issues/widergao/hexo-filter-inline-svg)](https://github.com/WiderGao/hexo-filter-inline-svg/issues)
A Hexo plugin that inline your svg in the img tag into HTML file.

## Installation

```bash
$ npm install hexo-filter-inline-svg --save
```

### Usage

The plugin is enabled by default. You can configure it in `_config.yml` by adding the following configuration items

```yml
inline_svg:
  enable: true
  priority: 100
```

`priority` field  means the order of execution of filters, low-priority filter will be executed first. For more detailed introduction, please see <https://hexo.io/api/filter#Synopsis>

## LICENSE

MIT
