const fs = require('hexo-fs');
const mime = require('mime');
const path = require('path');
const cheerio = require('cheerio');

function getSvgData(src) {
  let raw = null;
  if (!path.isAbsolute(path)) {
    src = path.join(hexo.source_dir, src);
    if (!fs.existsSync(src)) {
      src = path.join(hexo.theme_dir, 'source', src);
    }
  }
  raw = fs.readFileSync(src);
  return raw;
}

function filter(str = "") {
  const imageRegex = /<img\s[^>]*>([^<]*<\/img>)?/gi;
  const matches = str.matchAll(imageRegex);

  let newStr = str;
  for (const match of matches) {
    const $ = cheerio.load(match[0]);
    const imgEl = $('img');

    const src = imgEl.attr('src');

    const type = mime.getType(src);
    if (type === "image/svg+xml") {
      let data = getSvgData(src);
      let $ = cheerio.load(data);
      let svgEl = $('svg');
      // copy all attributes to the new svg element
      svgEl.attr(imgEl[0].attribs);
      // remove some unnecessary attributes
      svgEl.removeAttr('src').removeAttr('alt').removeAttr('title');
      newStr = newStr.replace(match[0], $.html());
    }
  }
  return newStr;
}

const config = Object.assign({
  enable: true,
  priority: 100,
}, hexo?.config?.inline_svg);


hexo.extend.filter.register('after_render:html', function (str, data) {
  if (config.enable) {
    return filter(str);
  }
  return str;
}, config.priority);