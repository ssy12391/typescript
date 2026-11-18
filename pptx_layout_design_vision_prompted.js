const pptxgen = require("pptxgenjs");
const pptx = new pptxgen();

// 全局设置：16:9，白底，仅用黑、灰、深蓝
pptx.layout = 'LAYOUT_16x9';
pptx.background = { color: "FFFFFF" };

const C_BLACK = "000000";
const C_GRAY = "595959"; 
const C_LIGHT_GRAY = "F2F2F2"; 
const C_BLUE = "002060"; 

// ==========================================
// 封面页 (仅大标题+副标题)
// ==========================================
let slide1 = pptx.addSlide();
slide1.addText("2027", { x: 0.8, y: 2.0, w: 5, h: 1, fontSize: 80, fontFace: "Arial", color: C_BLUE, bold: true });
slide1.addText("沃尔沃大中华区公关战略规划", { x: 0.8, y: 3.2, w: 8, h: 1, fontSize: 40, fontFace: "微软雅黑", color: C_BLACK, bold: true });
slide1.addText("PR STRATEGY PLAN", { x: 0.8, y: 4.3, w: 8, h: 0.5, fontSize: 20, fontFace: "Arial", color: C_GRAY, charSpacing: 5 });
slide1.addShape(pptx.ShapeType.line, { x: 0.8, y: 5.0, w: 1.5, h: 0, line: { color: C_BLUE, width: 4 } });

// ==========================================
// 第 1 页 (零)：2026年舆情态势复盘 (三栏+底层结构)
// 标题：风浪骤急稳把舵，防线前移筑长城
// ==========================================
let slide2 = pptx.addSlide();
slide2.addText("风浪骤急稳把舵，防线前移筑长城", { x: 0.5, y: 0.3, w: 9, h: 0.6, fontSize: 24, fontFace: "微软雅黑", color: C_BLACK, bold: true });
slide2.addText("零、2026年舆情态势复盘-PR做了什么，效果如何", { x: 0.5, y: 0.8, w: 9, h: 0.3, fontSize: 12, color: C_GRAY });

// 顶部：效果回顾
slide2.addShape(pptx.ShapeType.rect, { x: 0.5, y: 1.2, w: 9, h: 1.0, fill: C_BLUE });
slide2.addText("【效果回顾】 2026年1~10月，沃尔沃突发舆情事件高于往年，舆情走势整体平稳，负面率 0.55% 低于去年同期 0.67%。前十个月，负面舆情管控水平居于核心竞品阵营第一梯队(负面率最低)。", { x: 0.7, y: 1.2, w: 8.6, h: 1.0, fontSize: 12, color: "FFFFFF", bold: true, valign: "middle" });

// 中部：原因分析
let colW = 2.9;
let startX = 0.5;
let yPos = 2.4;

// 1. PR工作有成效
slide2.addShape(pptx.ShapeType.rect, { x: startX, y: yPos, w: colW, h: 2.9, fill: "FFFFFF", line: { color: C_BLUE, width: 1.5 } });
slide2.addText("- PR工作有成效", { x: startX + 0.1, y: yPos + 0.1, w: colW - 0.2, h: 0.3, fontSize: 13, color: C_BLUE, bold: true });
slide2.addText("1. 危机前置化管理：突发事件(3.15、EX30/XC70召回等)比往年高，但是并未形成热度(媒体预沟通、内部提前布控、统一口径明确处置方案)\n2. 常态化闭环处置：\n  1) 舆情处理量高于25年，进一步切断传播路径(2026年3000+，2025年2500+)；\n  2) 举报信+网信办渠道投诉，震慑效果显著(顽固黑媒不冒头)\n  3) 社媒管控：及时PB高热车主敏感笔记，切断传播源、帮助售后闭环结案\n3. 跨部门协同作战：赋能业务团队：\n  1) 销售团队：3月启动经销商打假、11月启动全网低价引流清理，最终赋能销售。\n  2) 售后团队：凸轮轴项目、售后服务贵不贵项目，最终赋能到销售。", { x: startX + 0.1, y: yPos + 0.4, w: colW - 0.2, h: 2.4, fontSize: 9, color: C_BLACK, lineSpacing: 14 });

// 2. 自媒体消停
slide2.addShape(pptx.ShapeType.rect, { x: startX + colW + 0.15, y: yPos, w: colW, h: 2.9, fill: "FFFFFF", line: { color: C_BLUE, width: 1.5 } });
slide2.addText("- 自媒体消停", { x: startX + colW + 0.25, y: yPos + 0.1, w: colW - 0.2, h: 0.3, fontSize: 13, color: C_BLUE, bold: true });
slide2.addText("网信办7–8月专项行动、网信办9月《关于加强涉企侵权信息管理 持续推动营商网络环境优化的通知》，垂类自媒体矩阵式攻击有所收敛。", { x: startX + colW + 0.25, y: yPos + 0.5, w: colW - 0.2, h: 2.2, fontSize: 11, color: C_BLACK, lineSpacing: 20 });

// 3. 正中性声量稀释
slide2.addShape(pptx.ShapeType.rect, { x: startX + (colW + 0.15) * 2, y: yPos, w: colW, h: 2.9, fill: "FFFFFF", line: { color: C_BLUE, width: 1.5 } });
slide2.addText("- 正中性声量稀释", { x: startX + (colW + 0.15) * 2 + 0.1, y: yPos + 0.1, w: colW - 0.2, h: 0.3, fontSize: 13, color: C_BLUE, bold: true });
slide2.addText("缺正面表格明细\n初步推断，重大舆情节点(EX30召回、XC70召回、财报销量公布、高层换届等)，转载官方公告无解读的中性信息爆发，稀释负面率。", { x: startX + (colW + 0.15) * 2 + 0.1, y: yPos + 0.5, w: colW - 0.2, h: 2.2, fontSize: 11, color: C_BLACK, lineSpacing: 20 });

// 底部：风险舆情
slide2.addShape(pptx.ShapeType.rect, { x: 0.5, y: 5.5, w: 9, h: 0.5, fill: C_LIGHT_GRAY, line: { color: "E0E0E0" } });
slide2.addText("【风险舆情】 舆情反弹：销量业绩承压。低价信息引流、少数官媒炒作企业销量和降价促销唱衰品牌的内容仍会有冒头风险，11月、12月或将反弹。", { x: 0.7, y: 5.5, w: 8.6, h: 0.5, fontSize: 10, color: C_BLACK, bold: true, valign: "middle" });

// ==========================================
// 第 2 页 (一)：2026年问题复盘 (左右天平结构)
// 标题：寒气传导致冰点，战略转向破迷局
// ==========================================
let slide3 = pptx.addSlide();
slide3.addText("寒气传导致冰点，战略转向破迷局", { x: 0.5, y: 0.3, w: 9, h: 0.6, fontSize: 24, fontFace: "微软雅黑", color: C_BLACK, bold: true });
slide3.addText("一、2026年问题复盘-盘点内外利好和利空，决定明年", { x: 0.5, y: 0.8, w: 9, h: 0.3, fontSize: 12, color: C_GRAY });

// 左侧：困难项
slide3.addShape(pptx.ShapeType.rect, { x: 0.5, y: 1.2, w: 4.6, h: 4.7, fill: C_BLUE });
slide3.addText("【困难项】", { x: 0.7, y: 1.4, w: 4.2, h: 0.4, fontSize: 16, color: "FFFFFF", bold: true });
slide3.addText("企业内部\n- 媒体维稳预算降低（界面事件传导）\n- 凸轮轴问题常态化\n- 经营业绩承压\n- 终端价格紊乱（网络低价+界面事件叠加）\n- Media对接平台直客取消(微博/微信、门户、百度、垂媒处置效率下降)\n\n外部因素：行业市场容量缩小，竞争白热化\n- 党央财、地方新闻源等官媒拦不住 → 抱团冲榜、矩阵扩散\n- AI技术降低门槛，提升效率与合规性、真实性 → 处理难度增加\n- 行业友商、竞品水军常态化 → 口碑阵地受阻", { x: 0.7, y: 1.9, w: 4.2, h: 3.8, fontSize: 11, color: "FFFFFF", lineSpacing: 18 });

// 右侧：利好项 + 结论
slide3.addShape(pptx.ShapeType.rect, { x: 5.4, y: 1.2, w: 4.1, h: 2.2, fill: C_LIGHT_GRAY });
slide3.addText("【利好项】", { x: 5.6, y: 1.4, w: 3.7, h: 0.4, fontSize: 16, color: C_BLACK, bold: true });
slide3.addText("- 垂媒、行业媒体等非官媒依然受约束\n- 网信办9月涉企侵权信息治理红头文件，清朗举证有依据", { x: 5.6, y: 1.9, w: 3.7, h: 1.3, fontSize: 12, color: C_BLACK, lineSpacing: 20 });

slide3.addShape(pptx.ShapeType.rect, { x: 5.4, y: 3.6, w: 4.1, h: 2.3, fill: "D9D9D9" });
slide3.addText("【结论】\n基于内部压力和外部环境变化，2027年工作重心要转向：\n2026年的重点：对齐标准\n2027年的重点：部门协同，赋能业务(销售/售后)", { x: 5.6, y: 3.7, w: 3.7, h: 2.0, fontSize: 12, color: C_BLACK, bold: true, lineSpacing: 22 });

// ==========================================
// 第 3 页 (二)：预算分配 (左右双支柱)
// 标题：好钢用在刀刃上，协同聚力降成本
// ==========================================
let slide4 = pptx.addSlide();
slide4.addText("好钢用在刀刃上，协同聚力降成本", { x: 0.5, y: 0.3, w: 9, h: 0.6, fontSize: 24, fontFace: "微软雅黑", color: C_BLACK, bold: true });
slide4.addText("二、预算分配-结合2027年工作重点，盘点资源和工具", { x: 0.5, y: 0.8, w: 9, h: 0.3, fontSize: 12, color: C_GRAY });
slide4.addText("2027年的重点：部门协同，赋能业务(销售/售后)，基于外部环境和企业内部实际情况，2027年PR的公关舆情预算合理分配至关重要。", { x: 0.5, y: 1.2, w: 9, h: 0.3, fontSize: 11, color: C_BLACK });

// 左卡片
slide4.addShape(pptx.ShapeType.rect, { x: 0.5, y: 1.8, w: 4.3, h: 4.0, fill: "FFFFFF", line: { color: C_BLUE, width: 2 } });
slide4.addShape(pptx.ShapeType.rect, { x: 0.5, y: 1.8, w: 4.3, h: 0.5, fill: C_BLUE });
slide4.addText("1. 工具层面-不会降低，甚至还有可能引入新渠道", { x: 0.6, y: 1.8, w: 4.1, h: 0.5, fontSize: 13, color: "FFFFFF", bold: true, valign: "middle" });
slide4.addText("- 口碑工具：吉利集团全面铺开，沃尔沃要跟随\n\n- 删稿工具：吉利集团推荐新华财经ai删稿", { x: 0.7, y: 2.6, w: 3.9, h: 2.8, fontSize: 13, color: C_BLACK, lineSpacing: 25 });

// 右卡片
slide4.addShape(pptx.ShapeType.rect, { x: 5.2, y: 1.8, w: 4.3, h: 4.0, fill: "FFFFFF", line: { color: C_BLUE, width: 2 } });
slide4.addShape(pptx.ShapeType.rect, { x: 5.2, y: 1.8, w: 4.3, h: 0.5, fill: C_BLUE });
slide4.addText("2. 媒体维稳-会降低，纳入大吉利一体化协同体系", { x: 5.3, y: 1.8, w: 4.1, h: 0.5, fontSize: 13, color: "FFFFFF", bold: true, valign: "middle" });
slide4.addText("- 按照大吉利一体化协同体系制定沟通口径，约谈媒体降费用\n\n- 友商参考：\n  - 上汽集团：\"上汽集团核心舆情媒体的费用未减少\"\n  - 莲花跑车：\"我们服务的莲花，是没有舆情维护的预算了，活着就很不容易了，他们就依靠吉利集团的力量了\"\n  - 北京现代：\"1、北京现代 今年的维稳预算已经下滑 接近挂0 销量差 媒体对北京现代要求是追回去年的款项 今年的合作口径是没有；2、北京现代的甲方说 明年还有没有工作都不知道。。。。\"", { x: 5.4, y: 2.5, w: 4.1, h: 3.2, fontSize: 10, color: C_BLACK, lineSpacing: 16 });

// ==========================================
// 第 4 页 (三)：2027核心策略 (对比树状拆分)
// 标题：守阵拓疆双驱动，利刃出鞘赋终端
// ==========================================
let slide5 = pptx.addSlide();
slide5.addText("守阵拓疆双驱动，利刃出鞘赋终端", { x: 0.5, y: 0.3, w: 9, h: 0.6, fontSize: 24, fontFace: "微软雅黑", color: C_BLACK, bold: true });
slide5.addText("三、2027核心策略：坚守PR核心阵地，赋能业务团队", { x: 0.5, y: 0.8, w: 9, h: 0.3, fontSize: 12, color: C_GRAY });

// 左侧
slide5.addText("1. 坚守PR核心阵地：前置化预防+常态化精准闭环", { x: 0.5, y: 1.2, w: 4.4, h: 0.3, fontSize: 14, color: C_BLUE, bold: true });
let leftItems = [
    { t: "媒体维稳：大吉利一体化协同", d: "党央财、地方新闻源等官媒：等比例降费用\n核心头部垂媒、行业媒体：择优合作" },
    { t: "常态化处置：", d: "大吉利集采团队协同施压平台直客，提高平台审核和通过效率\n媒体点对点前置沟通、沟通负面下架\n平台举报投诉流程下架" },
    { t: "社媒舆情治理：", d: "小红书持续PB高热度车主敏感笔记" },
    { t: "口碑自卫队：", d: "重大事件高热文章尾翼维护、前排占位、正面评论点赞" },
    { t: "经销商管理：", d: "全员微吼、媒体应对话术辅导、主场培训" }
];
leftItems.forEach((item, index) => {
    slide5.addShape(pptx.ShapeType.rect, { x: 0.5, y: 1.6 + index * 0.85, w: 4.4, h: 0.75, fill: C_LIGHT_GRAY });
    slide5.addText(item.t, { x: 0.6, y: 1.65 + index * 0.85, w: 4.2, h: 0.3, fontSize: 11, color: C_BLUE, bold: true });
    slide5.addText(item.d, { x: 0.6, y: 1.95 + index * 0.85, w: 4.2, h: 0.5, fontSize: 9, color: C_BLACK, lineSpacing: 12 });
});

// 右侧
slide5.addText("2. 部门协同，赋能业务团队：打假+口碑", { x: 5.2, y: 1.2, w: 4.3, h: 0.3, fontSize: 14, color: C_BLUE, bold: true });
slide5.addShape(pptx.ShapeType.rect, { x: 5.2, y: 1.6, w: 4.3, h: 1.9, fill: C_BLUE });
slide5.addText("1. 打假：\n非授权低价引流、非授权第三方账号", { x: 5.3, y: 1.8, w: 4.1, h: 1.5, fontSize: 13, color: "FFFFFF", bold: true, lineSpacing: 20 });

slide5.addShape(pptx.ShapeType.rect, { x: 5.2, y: 3.7, w: 4.3, h: 1.9, fill: C_BLUE });
slide5.addText("2. 口碑：\n评估业务痛点(销售、售后)，设置口碑专项赋能线上、线下销售场景", { x: 5.3, y: 3.9, w: 4.1, h: 1.5, fontSize: 13, color: "FFFFFF", bold: true, lineSpacing: 20 });

// ==========================================
// 第 5 页 (四)：工具矩阵 (中心支撑结构)
// 标题：粮草先行稳军心，利器在手战必胜
// ==========================================
let slide6 = pptx.addSlide();
slide6.addText("粮草先行稳军心，利器在手战必胜", { x: 0.5, y: 0.3, w: 9, h: 0.6, fontSize: 24, fontFace: "微软雅黑", color: C_BLACK, bold: true });
slide6.addText("四、工具矩阵：确保2027年工作重点落地的前置条件", { x: 0.5, y: 0.8, w: 9, h: 0.3, fontSize: 12, color: C_GRAY });

slide6.addShape(pptx.ShapeType.rect, { x: 0.5, y: 1.8, w: 4.3, h: 2.2, fill: "FFFFFF", line: { color: C_BLUE, width: 2 } });
slide6.addText("- 坚守PR核心阵地", { x: 0.7, y: 2.0, w: 3.9, h: 0.4, fontSize: 16, color: C_BLUE, bold: true });
slide6.addText("• 声闻盾\n• AI对冲新闻资讯入口(待定)", { x: 0.7, y: 2.6, w: 3.9, h: 1.0, fontSize: 14, color: C_BLACK, lineSpacing: 25 });

slide6.addShape(pptx.ShapeType.rect, { x: 5.2, y: 1.8, w: 4.3, h: 2.2, fill: "FFFFFF", line: { color: C_BLUE, width: 2 } });
slide6.addText("- 部门协同，赋能业务(销售&售后)", { x: 5.4, y: 2.0, w: 3.9, h: 0.4, fontSize: 16, color: C_BLUE, bold: true });
slide6.addText("• 口碑自卫队\n• 社媒处置工具", { x: 5.4, y: 2.6, w: 3.9, h: 1.0, fontSize: 14, color: C_BLACK, lineSpacing: 25 });

// 底部装饰线
slide6.addShape(pptx.ShapeType.rect, { x: 0.5, y: 4.5, w: 9, h: 0.6, fill: C_BLUE });
slide6.addText("前置条件 · 核心保障", { x: 0.5, y: 4.5, w: 9, h: 0.6, fontSize: 18, color: "FFFFFF", bold: true, align: "center", valign: "middle" });

// ==========================================
// 封底 (Thanks)
// ==========================================
let slide7 = pptx.addSlide();
slide7.addText("Thanks", { x: 0, y: 2.5, w: 10, h: 1, fontSize: 72, fontFace: "Arial", color: C_BLACK, bold: true, align: "center" });
slide7.addShape(pptx.ShapeType.line, { x: 4.5, y: 3.8, w: 1, h: 0, line: { color: C_BLUE, width: 4 } });

// 导出
pptx.writeFile({ fileName: "Volvo_PR_Strategy_2027_Draft.pptx" });