import pptxgen from "pptxgenjs"

const pptx = new pptxgen();
pptx.layout = "LAYOUT_WIDE";
pptx.author = "舆情分析";
pptx.subject = "EX30召回舆情分析日报";
pptx.title = "EX30召回舆情分析日报";
pptx.company = "Volvo";
pptx.lang = "zh-CN";
pptx.theme = {
  headFontFace: "Microsoft YaHei",
  bodyFontFace: "Microsoft YaHei",
  lang: "zh-CN"
};

const C = {
  white: "FFFFFF",
  black: "111827",
  gray: "6B7280",
  light: "F3F4F6",
  blue: "0B2545",
  border: "D1D5DB"
};
const FONT = "Microsoft YaHei";
const MONO = "Consolas";

function addBase(slide, kicker, title, subtitle) {
  slide.background = { color: C.white };
  slide.addShape(pptx.ShapeType.rect, {
    x: 0, y: 0, w: 13.33, h: 0.08,
    fill: { color: C.blue }, line: { color: C.blue }
  });
  slide.addText(kicker, {
    x: 0.5, y: 0.18, w: 12.3, h: 0.22,
    fontFace: FONT, fontSize: 9, color: C.gray,
    charSpacing: 1.2, bold: true
  });
  slide.addText(title, {
    x: 0.5, y: 0.40, w: 12.3, h: 0.55,
    fontFace: FONT, fontSize: 23, bold: true, color: C.blue
  });
  if (subtitle) {
    slide.addText(subtitle, {
      x: 0.5, y: 0.93, w: 12.3, h: 0.24,
      fontFace: FONT, fontSize: 10, color: C.gray
    });
  }
  slide.addShape(pptx.ShapeType.rect, {
    x: 0.5, y: 1.18, w: 12.33, h: 0.012,
    fill: { color: C.border }, line: { color: C.border }
  });
}

function addFooter(slide, page) {
  slide.addShape(pptx.ShapeType.rect, {
    x: 0.5, y: 7.18, w: 12.33, h: 0.008,
    fill: { color: C.border }, line: { color: C.border }
  });
  slide.addText("EX30召回舆情分析日报 | 报告时间：2026-01-21 17:00（重点数据截至16:00）", {
    x: 0.5, y: 7.22, w: 10.5, h: 0.18,
    fontFace: FONT, fontSize: 7.2, color: C.gray
  });
  slide.addText(String(page).padStart(2, "0"), {
    x: 12.3, y: 7.22, w: 0.55, h: 0.18,
    fontFace: FONT, fontSize: 8, bold: true, color: C.blue, align: "right"
  });
}

function tableRows(header, data, fontSize = 8, headerFill = C.blue) {
  const rows = [];
  rows.push(header.map(h => ({
    text: h,
    options: {
      bold: true, color: C.white, fill: { color: headerFill },
      fontSize, align: "center", valign: "middle", margin: 0.03
    }
  })));
  data.forEach((r, i) => {
    rows.push(r.map(c => ({
      text: String(c),
      options: {
        color: C.black,
        fill: { color: i % 2 === 0 ? C.white : C.light },
        fontSize, valign: "top", margin: 0.03
      }
    })));
  });
  return rows;
}

function addTable(slide, header, data, opts = {}) {
  const fontSize = opts.fontSize || 8;
  const rows = tableRows(header, data, fontSize);
  slide.addTable(rows, {
    x: opts.x || 0.5,
    y: opts.y || 1.35,
    w: opts.w || 12.33,
    colW: opts.colW,
    border: { pt: 0.5, color: C.border },
    fontFace: FONT,
    autoPage: true,
    autoPageRepeatHeader: true,
    autoPageLineColor: C.border,
    newSlideStartY: 1.35
  });
}

async function main() {
  // ================= 封面：只能有文件大标题和副标题 =================
  {
    const s = pptx.addSlide();
    s.background = { color: C.white };
    s.addShape(pptx.ShapeType.rect, {
      x: 0, y: 0, w: 0.18, h: 7.5,
      fill: { color: C.blue }, line: { color: C.blue }
    });
    s.addText("EX30召回舆情分析日报", {
      x: 0.9, y: 2.2, w: 11.5, h: 0.9,
      fontFace: FONT, fontSize: 40, bold: true, color: C.blue
    });
    s.addText("报告时间：2026-01-21 17:00（重点数据截至16:00）", {
      x: 0.92, y: 3.2, w: 10.8, h: 0.35,
      fontFace: FONT, fontSize: 14, color: C.gray
    });
    s.addText("数据窗口：2025-12-26—2026-01-21 16:00；热榜/评论按材料窗口（1/7—1/18，原文含1/24条目，按原文保留）", {
      x: 0.92, y: 3.65, w: 11.6, h: 0.32,
      fontFace: FONT, fontSize: 10, color: C.gray
    });
    s.addShape(pptx.ShapeType.rect, {
      x: 0.92, y: 4.2, w: 4.2, h: 0.03,
      fill: { color: C.blue }, line: { color: C.blue }
    });
  }

  // ================= 口径与背景 =================
  {
    const s = pptx.addSlide();
    addBase(s, "00 / SCOPE", "口径：一数一源，一策一界", "数据口径 · 风险定级 · 对外边界");
    const cards = [
      {
        t: "数据口径",
        b: "“负面舆情1056条、阅读431.6万、互动2.09万、已删除172条”为“欣旺达电池导致EX30召回”负面舆情口径；热榜13次；评论分类占比为EX30召回相关文章评论区采集，非全网。对外口径需法务/PR终审；香港起火调查中不预判。"
      },
      {
        t: "召回事实",
        b: "约1035台EX30（后驱长续航版及双电机四驱高性能版），23号备案，目标2月底之前。技术原因：山东吉利欣旺达动力电池有限公司生产的高压电池电芯存在潜在安全隐患；极少数情况下高电量充电可能过热，极端情形或引发电池起火。召回方案：先限电软件OTA升级召回，后期方案待定。"
      },
      {
        t: "风险定级",
        b: "S级。基于风险评估，按最高级别【S级】舆情风险启动协同处置机制，由控股集团牵头、吉利汽车集团、沃尔沃汽车、极氪汽车、威睿等相关方形成危机处理小组，协同作战。"
      }
    ];
    cards.forEach((c, i) => {
      const x = 0.5 + i * 4.16;
      s.addShape(pptx.ShapeType.roundRect, {
        x, y: 1.38, w: 4.0, h: 5.35, rectRadius: 0.05,
        fill: { color: C.white }, line: { color: C.border, width: 1 }
      });
      s.addText(String(i + 1).padStart(2, "0"), {
        x: x + 0.18, y: 1.55, w: 0.7, h: 0.35,
        fontFace: FONT, fontSize: 18, bold: true, color: C.blue
      });
      s.addText(c.t, {
        x: x + 0.18, y: 1.95, w: 3.6, h: 0.35,
        fontFace: FONT, fontSize: 15, bold: true, color: C.blue
      });
      s.addShape(pptx.ShapeType.rect, {
        x: x + 0.18, y: 2.38, w: 0.8, h: 0.025,
        fill: { color: C.blue }, line: { color: C.blue }
      });
      s.addText(c.b, {
        x: x + 0.18, y: 2.55, w: 3.62, h: 3.85,
        fontFace: FONT, fontSize: 9.8, color: C.black,
        valign: "top", fit: "shrink", breakLine: true
      });
    });
    addFooter(s, 2);
  }

  // ================= 管理层摘要 =================
  {
    const s = pptx.addSlide();
    addBase(s, "01 / EXECUTIVE SUMMARY", "摘要：S级复合危机，三线作战", "七条判断 · 一眼看清");
    const items = [
      ["01 事件已从“召回事实”升级为“安全定性+责任归属+集团供应链”复合危机", "12/26威睿以电芯质量问题向欣旺达动力索赔23.14亿元，媒体称“新能源行业车企起诉电池供应商第一案”；随后EX30因欣旺达电池问题全球召回，舆论焦点越过案件本身，直指产品质量与新能源汽车安全，并与沃尔沃召回意外关联，形成“议题蔓延”。材料已将风险定级为S级，由控股集团牵头，吉利汽车集团、沃尔沃汽车、极氪汽车、威睿等形成危机处理小组。"],
      ["02 负面声量1/11—1/13达峰，1/19次峰；截至1/21 16时负面1056条、阅读431.6万、互动2.09万、删除172条", "删除率约16.3%，未删除884条；条均阅读约4088、条均互动约19.8、互动率约0.48%。处置以媒体撤稿、举报、降频为主，长尾仍在。"],
      ["03 媒体端高风险：责任归属、安全口碑、经营状况、方案差异", "媒体主要观点集中在：车主权益受损/召回方案不合理；沃尔沃安全形象与品牌口碑受损；供应链博弈与产业上下游冲击；涉事方回应及责任归属。典型表述包括“年内四次召回”“安全标杆动摇”“品牌溢价流失”“临时限充70%削弱续航和使用价值”。"],
      ["04 评论区中风险：锁电70%方案合理性、退车/补偿、其他车型担忧", "评论分类占比：消费者权益与维权30.6%、欣旺达与吉利官司24.6%、安全事故（起火）13.9%、沃尔沃其他车型9.2%、凸轮轴故障3.5%、其他18.2%。核心语义包括退订/退车换车/补偿/不满锁电、索赔与供应链内斗、巴西火灾/热失控、XC60/XC90/EX90/XC40是否波及、历史B4/B5发动机问题、品牌调侃与锂电池不信任。"],
      ["05 用户端低风险：暂无实质性集体维权", "小红书仅一例疑似用户笔记抱怨国内未召回；车质网暂无涉及电池召回投诉；黑猫投诉仅一例疑似用户投诉抱怨国内未召回无公告、呼吁检查；汽车垂直论坛及其他论坛仅个别帖子转载媒体报道，暂无车主发帖讨论、维权或呼吁补偿方案。"],
      ["06 香港起火是最大变量", "官方QA口径：第一时间赶到现场协助处理；正配合消防部门事故调查；与车主保持沟通并提供必要支持；事故尚在调查中，暂无法确认具体原因；根据现有信息，未发现此次事故与此前“欣旺达”电池召回问题存在关联，具体原因以技术鉴定报告为准。若鉴定关联电池，将直接引爆“安全问题定性”。"],
      ["07 应对主线：三线作战", "安全定性线（消防/鉴定/技术输出）、召回方案线（国内备案/最终修复/70%限电/补偿口径）、集团关联线（EX30与极氪电池非同一批次/工厂独立、与吉利和解无关、供应链独立）。对外统一“主动召回=安全至上、主动担责、保障用户权益”；“和海外有时间差=彻查原因、敲定方案、对用户负责”。"]
    ];
    let y = 1.32;
    items.forEach((it, i) => {
      const h = i < 2 ? 1.28 : 1.0;
      s.addShape(pptx.ShapeType.roundRect, {
        x: 0.5, y, w: 12.33, h,
        rectRadius: 0.04,
        fill: { color: i % 2 === 0 ? C.white : C.light },
        line: { color: C.border, width: 0.8 }
      });
      s.addText(it[0], {
        x: 0.68, y: y + 0.08, w: 11.95, h: 0.28,
        fontFace: FONT, fontSize: 10.5, bold: true, color: C.blue,
        fit: "shrink"
      });
      s.addText(it[1], {
        x: 0.68, y: y + 0.38, w: 11.95, h: h - 0.45,
        fontFace: FONT, fontSize: 8.2, color: C.black,
        valign: "top", fit: "shrink", breakLine: true
      });
      y += h + 0.08;
    });
    addFooter(s, 3);
  }

  // ================= 核心指标卡 =================
  {
    const s = pptx.addSlide();
    addBase(s, "02 / KPI", "数据：指标一眼看全，峰谷一图看清", "核心指标 · 15项全景");
    const metrics = [
      ["召回车辆", "约1035台EX30（后驱长续航版及双电机四驱高性能版）"],
      ["备案/目标时间", "23号备案；目标2月底之前"],
      ["技术原因", "山东吉利欣旺达动力电池有限公司生产的高压电池电芯存在潜在安全隐患；高电量充电可能过热，极端情形或引发电池起火"],
      ["召回方案", "先限电软件OTA升级召回，后期方案待定"],
      ["累计负面舆情", "1056条"],
      ["累计阅读量", "4,316,617（约431.6万）"],
      ["累计互动量", "20,873（约2.09万）"],
      ["已删除负面", "172条"],
      ["未删除负面", "884条"],
      ["负面删除率", "16.3%"],
      ["条均阅读/互动", "约4088 / 约19.8"],
      ["互动率", "约0.48%"],
      ["热榜次数", "13次（汽车类10次、社会类3次）"],
      ["评论采集周期", "1月7日—1月18日"],
      ["数据窗口", "2025-12-26—2026-01-21 16:00"]
    ];
    metrics.forEach((m, i) => {
      const col = i % 3;
      const row = Math.floor(i / 3);
      const x = 0.5 + col * 4.16;
      const y = 1.32 + row * 1.25;
      s.addShape(pptx.ShapeType.roundRect, {
        x, y, w: 4.0, h: 1.12, rectRadius: 0.04,
        fill: { color: C.white }, line: { color: C.border, width: 0.8 }
      });
      s.addText(m[0], {
        x: x + 0.12, y: y + 0.08, w: 3.75, h: 0.2,
        fontFace: FONT, fontSize: 8, color: C.gray, fit: "shrink"
      });
      s.addText(m[1], {
        x: x + 0.12, y: y + 0.32, w: 3.75, h: 0.72,
        fontFace: FONT, fontSize: 8.5, bold: true, color: C.blue,
        valign: "top", fit: "shrink", breakLine: true
      });
    });
    addFooter(s, 4);
  }

  // ================= 负面处置状态 =================
  {
    const s = pptx.addSlide();
    addBase(s, "02 / STATUS", "处置：删除16.3%，长尾仍在", "负面处置状态 · 条均/互动率");
    const statusText = [
      "负面处置状态（条）",
      "",
      "未删除   ███████████████████████████████████████ 884（83.7%）",
      "已删除   ████████ 172（16.3%）",
      "",
      "解读：删除率16.3%不算高，说明当前处置以“媒体沟通撤稿+举报+降频+AI对冲”为主，未走大规模删除；长尾负面仍多，需防1/19次峰后二次发酵。"
    ].join("\n");
    s.addText(statusText, {
      x: 0.5, y: 1.35, w: 6.2, h: 3.3,
      fontFace: MONO, fontSize: 9.5, color: C.gray,
      valign: "top", fit: "shrink", breakLine: true
    });
    s.addChart(pptx.ChartType.pie, [{
      name: "负面处置状态",
      labels: ["未删除", "已删除"],
      values: [884, 172]
    }], {
      x: 7.0, y: 1.28, w: 5.8, h: 3.4,
      chartColors: [C.blue, C.gray],
      showLegend: true, legendPos: "b",
      showPercent: true,
      dataLabelFontFace: FONT, dataLabelFontSize: 8,
      border: { pt: 0.5, color: C.border },
      fill: C.white,
      title: "负面处置状态（条）",
      titleFontFace: FONT, titleFontSize: 9, titleColor: C.blue
    });
    const kpi = [
      ["条均阅读", "约4088"],
      ["条均互动", "约19.8"],
      ["互动率", "约0.48%"],
      ["阅读量", "4,316,617"],
      ["互动量", "20,873"]
    ];
    kpi.forEach((k, i) => {
      const x = 0.5 + i * 2.49;
      s.addShape(pptx.ShapeType.roundRect, {
        x, y: 4.9, w: 2.34, h: 1.15, rectRadius: 0.04,
        fill: { color: C.light }, line: { color: C.border, width: 0.8 }
      });
      s.addText(k[0], {
        x: x + 0.12, y: 5.0, w: 2.1, h: 0.22,
        fontFace: FONT, fontSize: 8, color: C.gray
      });
      s.addText(k[1], {
        x: x + 0.12, y: 5.3, w: 2.1, h: 0.55,
        fontFace: FONT, fontSize: 15, bold: true, color: C.blue,
        fit: "shrink"
      });
    });
    addFooter(s, 5);
  }

  // ================= 负面扩散阶段趋势 =================
  {
    const s = pptx.addSlide();
    addBase(s, "02 / TIMELINE", "趋势：诉讼引爆，召回发酵，1/11—1/13峰值", "逻辑时间轴 · 阶段故事线");
    const timeline = [
      "12/26          1/7—1/10        1/11—1/13        1/14            1/15—1/18        1/19      1/21 16:00",
      "诉讼引爆   →   召回发酵    →   负面峰值    →   热榜密集    →   媒体复盘    →   次峰   →   截点",
      "23.14亿索赔     全球召回信息     1/13头条汽车榜    欣旺达董事长回应   安全标杆动摇     图中次高   1056条负面",
      "“第一案”       负面起量         最高9/阅读22万    易车/懂车帝/微博   供应链博弈       负面       431.6万阅读"
    ].join("\n");
    s.addText(timeline, {
      x: 0.5, y: 1.35, w: 12.3, h: 2.2,
      fontFace: MONO, fontSize: 8.2, color: C.gray,
      valign: "top", fit: "shrink", breakLine: true
    });
    s.addText("材料图显示：1/11前后阅读量出现峰值，1/12—1/13持续高位，1/14热榜密集，1/15—1/18长尾，1/19次峰。具体每日数值以原始监测图为准，日报不逐日编造。", {
      x: 0.5, y: 3.75, w: 12.3, h: 0.6,
      fontFace: FONT, fontSize: 9, color: C.black,
      valign: "top", fit: "shrink", breakLine: true
    });
    s.addChart(pptx.ChartType.bar, [
      { name: "阶段热度示意", labels: ["12/26", "1/7—1/10", "1/11—1/13", "1/14", "1/15—1/18", "1/19", "1/21"], values: [3, 5, 10, 7, 4, 6, 2] }
    ], {
      x: 0.5, y: 4.45, w: 12.33, h: 2.35,
      chartColors: [C.blue],
      showLegend: false,
      catAxisLabelFontFace: FONT, catAxisLabelFontSize: 7,
      valAxisLabelFontFace: FONT, valAxisLabelFontSize: 7,
      showValue: false,
      border: { pt: 0.5, color: C.border },
      fill: C.white,
      title: "负面扩散阶段热度示意（非精确数值，仅结构表达）",
      titleFontFace: FONT, titleFontSize: 9, titleColor: C.blue
    });
    addFooter(s, 6);
  }

  // ================= 评论区语义分类 =================
  {
    const s = pptx.addSlide();
    addBase(s, "02 / COMMENT", "评论：权益与官司叠加，起火不是唯一焦点", "评论区语义分类占比（1/7—1/18）");
    const barText = [
      "消费者权益与维权   30.6% ███████████████",
      "欣旺达与吉利官司   24.6% ████████████",
      "安全事故（起火）   13.9% ███████",
      "沃尔沃其他车型      9.2% █████",
      "凸轮轴故障          3.5% ██",
      "其他               18.2% █████████"
    ].join("\n");
    s.addText(barText, {
      x: 0.5, y: 1.35, w: 6.0, h: 2.3,
      fontFace: MONO, fontSize: 9.2, color: C.gray,
      valign: "top", fit: "shrink", breakLine: true
    });
    s.addText("解读：评论区最大风险不是“起火”本身，而是“消费者权益与维权”（30.6%）与“欣旺达/吉利官司”（24.6%）叠加；锁电70%、退车/补偿、责任界定是评论主线。其他车型担忧9.2%，需准备XC60/XC90/EX90/XC40/T8等车型QA。", {
      x: 0.5, y: 3.75, w: 6.0, h: 2.2,
      fontFace: FONT, fontSize: 9.2, color: C.black,
      valign: "top", fit: "shrink", breakLine: true
    });
    s.addChart(pptx.ChartType.pie, [{
      name: "评论分类",
      labels: ["消费者权益与维权", "欣旺达与吉利官司", "安全事故（起火）", "沃尔沃其他车型", "凸轮轴故障", "其他"],
      values: [30.6, 24.6, 13.9, 9.2, 3.5, 18.2]
    }], {
      x: 6.8, y: 1.28, w: 6.0, h: 4.7,
      chartColors: [C.blue, C.gray, C.black, "9CA3AF", "4B5563", "D1D5DB"],
      showLegend: true, legendPos: "b",
      showPercent: true,
      dataLabelFontFace: FONT, dataLabelFontSize: 7,
      border: { pt: 0.5, color: C.border },
      fill: C.white,
      title: "评论区内容分类占比",
      titleFontFace: FONT, titleFontSize: 9, titleColor: C.blue
    });
    addFooter(s, 7);
  }

  // ================= 热榜平台分布 =================
  {
    const s = pptx.addSlide();
    addBase(s, "02 / HOT LIST", "热榜：13次上榜，1/14密集", "热榜平台分布 · 代表话题");
    const header = ["平台属性", "上榜次数", "代表话题", "最高排名/阅读"];
    const data = [
      ["汽车类热榜", "10", "“沃尔沃因欣旺达电池启动全球车辆召回”“欣旺达董事长回应沃尔沃汽车召回事件”“23亿元索赔案发酵，多国召回沃尔沃EX30”“沃尔沃召回事件与欣旺达无关”", "最高第1；阅读22万/36万"],
      ["社会类热榜", "3", "“沃尔沃在多国召回电车”“因电池缺陷沃尔沃在多国召回电车”", "最高第3；阅读66.4万/21.9万"],
      ["合计", "13", "头条、微博、懂车帝、汽车之家、易车、腾讯新闻", "话题热度较高"]
    ];
    addTable(s, header, data, {
      x: 0.5, y: 1.35, w: 12.33,
      colW: [1.8, 1.2, 6.3, 3.03],
      fontSize: 8
    });
    s.addText("热榜引擎：①欣旺达董事长回应（易车实时/行业最高1，头条汽车榜最高1/阅读36万）；②23亿索赔案+全球召回（腾讯新闻热点最高11）；③沃尔沃因欣旺达电池启动全球召回（头条汽车榜最高9/阅读22万）；④微博科技榜“沃尔沃在多国召回电车”最高8/阅读66.4万。1/14为热榜密集日。", {
      x: 0.5, y: 3.55, w: 12.33, h: 1.2,
      fontFace: FONT, fontSize: 9, color: C.black,
      valign: "top", fit: "shrink", breakLine: true
    });
    addFooter(s, 8);
  }

  // ================= 传播链路 =================
  {
    const s = pptx.addSlide();
    addBase(s, "03 / DIFFUSION", "链路：从诉讼到社群，五级放大", "传播链路 · 平台结构");
    const chain = [
      "威睿诉欣旺达23.14亿（12/26）",
      "   ↓",
      "全球召回/欣旺达电池缺陷（1/7—1/13）",
      "   ↓",
      "欣旺达董事长回应/多平台热榜（1/14）",
      "   ↓",
      "媒体复盘：安全标杆动摇、供应链博弈、责任归属（1/15—1/18）",
      "   ↓",
      "1/19次峰 → 国内备案推进/香港起火（变量）",
      "   ↓",
      "评论区/小红书/黑猫/论坛/车友群长尾"
    ].join("\n");
    s.addText(chain, {
      x: 0.5, y: 1.35, w: 12.3, h: 2.0,
      fontFace: MONO, fontSize: 8.4, color: C.gray,
      valign: "top", fit: "shrink", breakLine: true
    });
    const header = ["平台类型", "代表平台/账号", "作用", "监测重点"];
    const data = [
      ["财经/新闻源", "新浪财经、证券时报、36氪、国际金融报、观察者网、财联社", "定调、阅读放大", "安全定性、责任归属、供应链、销量/电气化"],
      ["汽车媒体/自媒体", "大河汽车、车来车往pro、深潜atom、汽扯扒谈、懂车帝视线", "方案合理性、安全口碑", "锁电70%、补偿、年内四次召回、安全标杆"],
      ["热榜平台", "头条汽车榜、微博汽车/科技榜、易车、懂车帝、汽车之家、腾讯新闻", "话题加热", "欣旺达董事长回应、23亿索赔、全球召回"],
      ["评论区", "EX30召回相关文章评论区", "情绪与维权", "退订/退车/补偿、责任界定、其他车型"],
      ["用户端", "小红书、黑猫、车质网、汽车垂直论坛", "个案抱怨/转客诉", "国内未召回、无公告、呼吁检查"]
    ];
    addTable(s, header, data, {
      x: 0.5, y: 3.5, w: 12.33,
      colW: [1.8, 4.2, 2.4, 3.93],
      fontSize: 7.8
    });
    addFooter(s, 9);
  }

  // ================= 议题与语义分层 =================
  {
    const s = pptx.addSlide();
    addBase(s, "04 / ISSUE", "议题：事实层可控，情绪层待解", "语义分层 · 风险 · 应对口径");
    const header = ["语义层级", "典型语义/内容", "代表内容", "风险", "应对口径/动作"];
    const data = [
      ["事实层", "约1035台EX30；山东吉利欣旺达高压电池电芯潜在隐患；高电量充电可能过热，极端或起火；先限电OTA，后期方案待定；国内备案推进；香港起火调查中；EX30与极氪电池非同一批次/工厂独立；与吉利和解无关；供应链独立", "召回方案、媒体QA、香港起火QA", "中（安全定性不确定）", "技术鉴定/备案进展/统一QA；调查中不预判"],
      ["情绪层", "退订、退车换车、补偿、不满锁电70%；责任界定；起火/热失控；其他车型担忧；历史凸轮轴；品牌调侃/锂电池不信任", "评论区典型评论、小红书/黑猫个案", "高", "评论区QA、用户沟通、客诉转办、70%限电安全预警落地"],
      ["解读层", "安全口碑受损、国产化品质下滑、年内四次召回、安全标杆动摇、品牌溢价流失；供应链博弈、二线厂商信任壁垒、合同结构性缺陷；责任归属/行业样本；集团供应链安全", "国际金融报、深潜atom、新浪财经、财闻、证券时报、36氪", "高", "媒体沟通、嘴替定调、财经QA、315项目"],
      ["行动层", "媒体撤稿/举报/不实信息；小红书优化/AI对冲；车主社群监控转客诉；日清会议；兄弟品牌协同", "应对方案、X项目执行", "中", "S级小组、日清闭环、高风险场景预案"]
    ];
    addTable(s, header, data, {
      x: 0.5, y: 1.35, w: 12.33,
      colW: [1.15, 4.7, 2.6, 0.95, 2.93],
      fontSize: 7.8
    });
    addFooter(s, 10);
  }

  // ================= 媒体主要观点 =================
  {
    const s = pptx.addSlide();
    addBase(s, "04 / MEDIA VIEW", "媒体：四类观点，一个靶心", "媒体主要观点归纳");
    const views = [
      ["方案合理性/车主权益", "大河汽车：车主不仅面临续航焦虑，还需等待更细致的修复方案，而沃尔沃尚未给出明确的修复时间表和补偿措施。车来车往pro：沃尔沃给出的临时解决方案是限制充电至70%，这直接削弱了车辆续航能力和使用价值，引发车主强烈不满。"],
      ["安全形象/品牌口碑", "国际金融报：以“安全性”为核心卖点的沃尔沃，年内出现四次召回，或许一定程度上也影响了大众对沃尔沃的销量表现。深潜atom：更关键的是，频繁召回已实质性动摇消费者对沃尔沃“安全标杆”的信任。当“安全”从品牌优势沦为高频召回的背景板，沃尔沃的品牌溢价能力正在快速流失。"],
      ["供应链博弈/产业冲击", "新浪财经：当消费者开始将电池品牌与安全挂钩时，二线厂商的信任壁垒本就薄弱，一次质量诉讼足以摧毁多年积累的合作基础。财闻：当前新能源汽车供应链合同普遍存在结构性缺陷，过度聚焦商务定价协商与售后索赔条款设计，却对技术分工边界的明确化、精细化关注不足，易引发多方推诿。"],
      ["责任归属/行业样本", "证券时报：索赔诉讼和EX30召回这两起事件被视为观察新能源汽车产业链质量、权责与风险问题的典型样本，直接影响企业生存与行业生态。36氪：欣旺达试图通过责任切割术撇清关系，但电芯技术源头、生产线和核心工艺仍与其有关，30%股份并非完全免责的理由。"]
    ];
    views.forEach((v, i) => {
      const y = 1.32 + i * 1.38;
      s.addShape(pptx.ShapeType.roundRect, {
        x: 0.5, y, w: 12.33, h: 1.25, rectRadius: 0.04,
        fill: { color: i % 2 === 0 ? C.white : C.light },
        line: { color: C.border, width: 0.8 }
      });
      s.addText(v[0], {
        x: 0.68, y: y + 0.08, w: 3.2, h: 0.28,
        fontFace: FONT, fontSize: 10.5, bold: true, color: C.blue
      });
      s.addText(v[1], {
        x: 0.68, y: y + 0.38, w: 11.9, h: 0.78,
        fontFace: FONT, fontSize: 8.2, color: C.black,
        valign: "top", fit: "shrink", breakLine: true
      });
    });
    addFooter(s, 11);
  }

  // ================= 风险研判 =================
  {
    const s = pptx.addSlide();
    addBase(s, "05 / RISK", "风险：S级，香港起火是最大变量", "风险研判 · 等级 · 动作");
    const header = ["风险", "证据", "等级", "研判/动作"];
    const data = [
      ["香港起火安全定性", "QA称调查中、暂无法确认原因、未发现与欣旺达召回关联，以鉴定为准", "高", "若鉴定关联电池，将引爆安全定性；消防/鉴定跟踪，技术口径前置，媒体QA随时更新"],
      ["媒体责任归属/安全口碑", "国际金融报、深潜atom、大河汽车、车来车往pro", "高", "聚焦责任划分、安全口碑、国产化品质；党央财/新闻源前置沟通，嘴替媒体被动定调"],
      ["召回方案合理性/锁电70%", "评论区消费者权益30.6%；车来车往pro称削弱续航和使用价值", "高", "准备“临时安全预警+最终修复方案+补偿口径”；避免只讲限电不讲时间表"],
      ["集团/兄弟品牌关联", "极氪诉讼、吉利与欣旺达和解、供应链独立QA；策略定级S级", "高", "统一“非同一批次/工厂独立/供应链独立/和解无关”；防“集团危机”升级"],
      ["热榜二次发酵", "13次热榜，1/14密集；欣旺达董事长回应最高1", "中高", "头条/微博/易车/懂车帝/腾讯/汽车之家监测；防新回应或鉴定进展再上热榜"],
      ["315/财经复盘", "“年内四次召回”“安全标杆动摇”“销量/电气化/供应链”", "高（315前）", "315项目立项，财经媒体QA，准备行业集体召回背景"],
      ["用户端集体维权", "小红书/黑猫个案，车质网暂无电池召回投诉，论坛暂无车主维权", "低", "保持监测，个案转客诉；防评论区怂恿退车/超额赔偿"]
    ];
    addTable(s, header, data, {
      x: 0.5, y: 1.35, w: 12.33,
      colW: [2.2, 5.0, 1.0, 4.13],
      fontSize: 7.8
    });
    s.addShape(pptx.ShapeType.roundRect, {
      x: 0.5, y: 6.15, w: 12.33, h: 0.8, rectRadius: 0.04,
      fill: { color: C.light }, line: { color: C.border, width: 0.8 }
    });
    s.addText("总体判断：舆情已从“召回公告期”进入“安全定性+责任归属+集团供应链”的S级复合危机。媒体端高风险、评论区中风险、用户端低风险；香港起火是最大变量。当前不应只做“负面删除”，而要“定性管理+方案透明+用户沟通”三线并行。", {
      x: 0.68, y: 6.25, w: 11.95, h: 0.6,
      fontFace: FONT, fontSize: 9, color: C.black,
      valign: "top", fit: "shrink", breakLine: true
    });
    addFooter(s, 12);
  }

  // ================= 组织协同 =================
  {
    const s = pptx.addSlide();
    addBase(s, "06 / ORGANIZATION", "组织：S级小组，线上线下双轮驱动", "危机处理专项小组");
    const header = ["层级", "组成/职责"];
    const data = [
      ["核心领导小组", "杨学良、林杰、魏志玲、李伟平、陈振威、谢世滨、陈益民"],
      ["业务负责人", "张韦力/纪洪涛、谷杨/娄慧立、沈方俊/庞晓玲、卢五波/楼敏杰/朱小鹏、孙全/贾文华、曹丽丽/张凤莹"],
      ["线上：公关族群", "舆论生态管理：事态监控、正向定调、舆情管理"],
      ["线下：极氪售后", "用户服务落地：邀约计划、服务执行、客诉处置"],
      ["内部协同：政府事务部", "政府资源搭建、上级主管部门沟通、政府问询应对"],
      ["内部协同：法务", "法律应对指导、协议拟定、法律措施跟进"],
      ["内部协同：公关传播", "口径方向拟定拉通、负面舆情处理、正向对冲"],
      ["内部协同：用户运营", "KOC管理"],
      ["内部协同：质量中心", "现场技术鉴定、质量风险评估处置、问题改善落地"],
      ["内部协同：威睿", "案件现场调查、出具分析报告、制定措施"]
    ];
    addTable(s, header, data, {
      x: 0.5, y: 1.35, w: 12.33,
      colW: [2.7, 9.63],
      fontSize: 8.6
    });
    addFooter(s, 13);
  }

  // ================= 执行时间轴 =================
  {
    const s = pptx.addSlide();
    addBase(s, "06 / ROADMAP", "节奏：前置筹备，集中处置，长尾修复", "执行时间轴（公告前一个月—公告后一个月）");
    const header = ["阶段", "时间", "核心动作"];
    const data = [
      ["预防筹备", "公告前一个月/T-14~T-10", "315项目立项、准备处置资源；媒体名单/沟通分工；党央财、新闻源融媒体、行业媒体、敏感自媒体前置沟通；口径清单/公告话术/敏感QA准备；经销商培训"],
      ["集中处置", "公告前一周—当天/T-7~T-0", "核心信息/口径/公告确认；官方信息发布；媒体高热黑文沟通撤稿；个人号/营销号举报；不实信息处置；“嘴替”媒体定调/发声（被动）；AI对冲入口前排占位；评论区维护"],
      ["长尾修复", "公告后一周—一个月", "舆情监测、内容出街、复盘总结、尾翼管理、高风险场景预案；日清会议直至闭环；车主社群维权监控转客诉"]
    ];
    addTable(s, header, data, {
      x: 0.5, y: 1.35, w: 12.33,
      colW: [1.5, 3.0, 7.83],
      fontSize: 8.8
    });
    s.addText("已做/进行中：S级协同机制；相关方日清会议；危机处理机制/舆情升级及闭环机制/尾翼管理/高风险场景预案；口径清单、公告及话术文案、极氪零距离QA答车主问、敏感QA梳理；舆情分析报告3份、舆情管理Checklist、X项目通联表、情况说明模板、媒体沟通名单及分工。", {
      x: 0.5, y: 4.25, w: 12.33, h: 1.25,
      fontFace: FONT, fontSize: 9, color: C.black,
      valign: "top", fit: "shrink", breakLine: true
    });
    addFooter(s, 14);
  }

  // ================= 香港起火QA =================
  {
    const s = pptx.addSlide();
    addBase(s, "07 / QA - FIRE", "QA：香港起火，调查中不预判", "香港起火媒体QA");
    const header = ["问题", "统一口径"];
    const data = [
      ["关于EX30自燃目前如何处理？", "收到信息后第一时间赶到现场协助处理；正全力配合消防部门进行事故调查，同时积极与车主保持密切沟通，并提供必要支持；后续依据调查结果制定妥善解决方案给到车主及相关方。"],
      ["事故原因是不是EX30电池存在质量问题？", "目前事故尚在调查中，暂无法确认具体原因；技术鉴定和后续解决方案制定需要一定周期，一旦有最新进展第一时间同步。"],
      ["是否与“欣旺达”电池问题召回相关？", "目前事故尚在调查中；根据现有信息，未发现此次事故与此前“欣旺达”电池召回问题存在关联，具体原因以技术鉴定报告为准；调查及方案制定需要一定周期，有最新进展第一时间同步。"],
      ["部分国家和地区已因电池问题召回EX30，国内目前是否有解决方案？", "正在向国家市场监督管理总局备案召回计划，相关流程推进中；将依据国家法律法规，在所有前期准备工作完成后有序安排召回；此前已提前监测到个别车主案例，并向客户发布安全预警，建议先将车辆充电量控制在70%以内，降低电池过热风险；修复方案还在内部评估中；安全始终是首要任务，正式确定修复方案后第一时间安排车主到授权经销商门店完成修复。"]
    ];
    addTable(s, header, data, {
      x: 0.5, y: 1.35, w: 12.33,
      colW: [3.0, 9.33],
      fontSize: 8.6
    });
    addFooter(s, 15);
  }

  // ================= 欣旺达电池召回QA =================
  {
    const s = pptx.addSlide();
    addBase(s, "07 / QA - SUPPLIER", "QA：非同一批次，工厂独立，供应链独立", "欣旺达电池召回媒体问答");
    const header = ["问题", "统一口径"];
    const data = [
      ["极氪因电池问题起诉欣旺达，EX30同样因欣旺达电池召回，是否同一批次？", "并非同一批次，也不来自同一生产体系。EX30电池由山东欣旺达新能源有限公司供应，极氪车型电池来源于南京市区新旺达新能源有限公司。两家工厂在生产基地、生产线、质量管理系统及供应链体系上完全独立，电池生产批次与供应渠道均无重叠，不存在电池批次共用或交叉。"],
      ["吉利集团与欣旺达和解，是否促成EX30召回？", "召回决定与吉利集团和欣旺达之间的和解事宜并无关联；和解属于双方企业间商业行为，范围和内容均不涉及EX30召回进程；沃尔沃始终以用户安全为先，依据明确且可靠的事实作出独立决策。"],
      ["采用欣旺达电池，是否意味着供应链已由吉利集团统一调配？", "沃尔沃汽车在供应链管理上始终保持独立运营与决策权；所有供应商选择均遵循沃尔沃全球统一质量标准、技术规范与合规流程；在符合沃尔沃严苛准入条件基础上，整合包括母集团在内的优质产业资源，提升产品竞争力；供应链决策、质量体系审核及管理流程始终保持独立运作；致力于深耕中国市场，携手各方优秀合作伙伴，为中国消费者提供更安全、更可持续的高品质产品。"]
    ];
    addTable(s, header, data, {
      x: 0.5, y: 1.35, w: 12.33,
      colW: [4.0, 8.33],
      fontSize: 8.6
    });
    addFooter(s, 16);
  }

  // ================= 通用话术 =================
  {
    const s = pptx.addSlide();
    addBase(s, "07 / MESSAGE", "话术：定调、回应、引导，一套口径", "通用话术与媒体QA待定");
    const header = ["场景", "口径"];
    const data = [
      ["总局公告前", "目前，沃尔沃汽车正在向国家市场监督管理总局备案召回计划，相关召回流程正在推进中。沃尔沃汽车将依据国家法律法规，在所有前期准备工作完成后，有序安排所有涉及车辆的召回工作。"],
      ["总局公告后", "目前，我们正在积极联系受影响车辆的车主，请他们尽快与当地授权经销商预约，以便对车辆进行必要的检查和免费更换。"],
      ["媒体QA待定", "①推动技术输出核心信息，制定QA和话术；②解决方案与兄弟品牌有差异，提供Global/集团媒体询问话术(Q)，推动统一回应口径(A)落地；③多部门过会，拉齐信息，内外定调统一口径。"],
      ["“嘴替”媒体定调", "事件定性：主动召回是践行安全至上理念、主动承担责任、保障用户权益的企业担当行为；回应质疑：和海外有“时间差”是为了彻查原因、敲定方案，是对用户负责；正向引导：透明消费、安全至上、以人为本的售后服务保障。"]
    ];
    addTable(s, header, data, {
      x: 0.5, y: 1.35, w: 12.33,
      colW: [2.5, 9.83],
      fontSize: 9.2
    });
    addFooter(s, 17);
  }

  // ================= 待办清单 =================
  {
    const s = pptx.addSlide();
    addBase(s, "08 / NEXT", "待办：今日闭环，315前置，春节护航", "待办清单");
    const header = ["优先级", "动作", "责任", "时点"];
    const data = [
      ["P0", "香港起火：消防/鉴定跟踪，技术口径与媒体QA更新，调查中不预判", "公关/法务/质量中心", "即时—鉴定出结果"],
      ["P0", "国内召回备案进展与最终修复方案时间表；70%限电安全预警落地", "政府事务/售后/质量", "2月底前"],
      ["P0", "评论区锁电70%、补偿、其他车型QA；个案转客诉", "用户运营/售后/PR", "每日"],
      ["P0", "S级日清会议，控股集团/吉利/沃尔沃/极氪/威睿协同闭环", "危机小组", "即日起直至闭环"],
      ["P1", "热榜监测：头条/微博/易车/懂车帝/腾讯/汽车之家；防1/14式密集上榜", "PR", "每日"],
      ["P1", "党央财/新闻源/行业媒体/敏感自媒体前置沟通；媒体沟通名单分工", "PR", "持续"],
      ["P1", "315项目立项，财经媒体QA（销量、电气化、供应链、领导层、降本）", "PR/财经", "315前"],
      ["P1", "兄弟品牌差异口径：非同一批次/工厂独立/供应链独立/和解无关", "PR/法务", "持续"],
      ["P2", "其他车型担忧QA：XC60/XC90/EX90/XC40/T8；历史凸轮轴/冬季健康度关联口径", "质量/PR", "持续"],
      ["P2", "尾翼管理、复盘总结、高风险场景预案演练", "危机小组", "公告后一个月"]
    ];
    addTable(s, header, data, {
      x: 0.5, y: 1.35, w: 12.33,
      colW: [0.8, 7.2, 2.2, 2.13],
      fontSize: 8.2
    });
    addFooter(s, 18);
  }

  // ================= 结论 =================
  {
    const s = pptx.addSlide();
    addBase(s, "08 / CONCLUSION", "结论：从压负面到三线作战", "结论 · 数据来源");
    s.addShape(pptx.ShapeType.roundRect, {
      x: 0.5, y: 1.35, w: 12.33, h: 2.55, rectRadius: 0.05,
      fill: { color: C.white }, line: { color: C.border, width: 0.8 }
    });
    s.addText("结论", {
      x: 0.75, y: 1.52, w: 3.5, h: 0.32,
      fontFace: FONT, fontSize: 14, bold: true, color: C.blue
    });
    s.addText("EX30召回舆情已从“召回事实”演变为S级复合危机：媒体端聚焦责任归属、安全口碑、经营状况与方案差异；评论区聚焦锁电70%、退车/补偿、其他车型担忧；用户端暂无实质性集体维权，但香港起火是最大变量。当前处置应从“压负面”转向“三线作战”：\n\n安全定性线：配合消防调查，技术鉴定为准；未发现与欣旺达召回关联，但不预判；QA随时更新。\n召回方案线：国内备案依法推进；70%限电是安全预警不是最终方案；尽快给出修复时间表与用户沟通方案；评论区锁电/补偿/其他车型QA到位。\n集团关联线：统一“EX30与极氪电池非同一批次、工厂独立、供应链独立、与吉利和解无关”；兄弟品牌协同，防集团危机升级。\n\n对外持续强化“主动召回=安全至上、主动担责、保障用户权益”；对内坚持日清会议、热榜监测、315前置、媒体沟通名单分工，确保口径一致、动作一致、声量可控、风险闭环。", {
      x: 0.75, y: 1.95, w: 11.85, h: 1.8,
      fontFace: FONT, fontSize: 9.6, color: C.black,
      valign: "top", fit: "shrink", breakLine: true
    });
    s.addShape(pptx.ShapeType.roundRect, {
      x: 0.5, y: 4.15, w: 12.33, h: 2.55, rectRadius: 0.05,
      fill: { color: C.light }, line: { color: C.border, width: 0.8 }
    });
    s.addText("数据来源", {
      x: 0.75, y: 4.32, w: 3.5, h: 0.32,
      fontFace: FONT, fontSize: 14, bold: true, color: C.blue
    });
    s.addText("新联监测报告及数据、INEWS全媒体大数据舆情平台、新联热榜、EX30召回舆情应对方案、欣旺达电池舆情报告、媒体QA及香港起火QA。", {
      x: 0.75, y: 4.75, w: 11.85, h: 1.5,
      fontFace: FONT, fontSize: 10.5, color: C.black,
      valign: "top", fit: "shrink", breakLine: true
    });
    addFooter(s, 19);
  }

  // ================= 封底：只能 Thanks! =================
  {
    const s = pptx.addSlide();
    s.background = { color: C.white };
    s.addText("Thanks!", {
      x: 0.9, y: 3.05, w: 11.5, h: 1.0,
      fontFace: FONT, fontSize: 48, bold: true, color: C.blue, align: "center"
    });
  }

  await pptx.writeFile({ fileName: "EX30召回舆情分析日报.pptx" });
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});