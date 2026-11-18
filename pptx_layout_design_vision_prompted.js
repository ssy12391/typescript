import pptxgen from "pptxgenjs";
const pptx = new pptxgen();

// 全局设置：16:9，统一白底黑字，仅用白、黑、灰、深蓝
pptx.layout = 'LAYOUT_16x9';
pptx.background = { color: "FFFFFF" };

// 颜色常量
const C_BLACK = "000000";
const C_GRAY = "595959"; // 偏深灰，适合长文本阅读
const C_LIGHT_GRAY = "F2F2F2"; // 浅灰背景
const C_BLUE = "002060"; // 深蓝

// 字体常量
const FONT_TITLE = "微软雅黑";
const FONT_BODY = "微软雅黑";

// ==========================================
// 第 1 页：封面 (仅有大标题和副标题)
// ==========================================
let slide1 = pptx.addSlide();
slide1.addText("2027", { x: 0.8, y: 2.0, w: 5, h: 1, fontSize: 80, fontFace: "Arial", color: C_BLUE, bold: true });
slide1.addText("沃尔沃大中华区公关战略规划", { x: 0.8, y: 3.2, w: 8, h: 1, fontSize: 40, fontFace: FONT_TITLE, color: C_BLACK, bold: true });
slide1.addText("PR STRATEGY PLAN", { x: 0.8, y: 4.3, w: 8, h: 0.5, fontSize: 20, fontFace: "Arial", color: C_GRAY, charSpacing: 5 });
slide1.addShape(pptx.ShapeType.line, { x: 0.8, y: 5.0, w: 1.5, h: 0, line: { color: C_BLUE, width: 4 } });

// ==========================================
// 第 2 页：零、2026舆情复盘【效果回顾】(大字报数据化)
// 标题：风浪骤急稳把舵，防线前移筑长城
// ==========================================
let slide2 = pptx.addSlide();
slide2.addText("风浪骤急稳把舵，防线前移筑长城", { x: 0.5, y: 0.3, w: 9, h: 0.6, fontSize: 24, fontFace: FONT_TITLE, color: C_BLACK, bold: true });
slide2.addText("零、2026年舆情态势复盘——PR做了什么，效果如何", { x: 0.5, y: 0.8, w: 9, h: 0.4, fontSize: 14, fontFace: FONT_BODY, color: C_GRAY });

// 数据卡片展示
slide2.addShape(pptx.ShapeType.rect, { x: 0.5, y: 1.5, w: 4.3, h: 3.8, fill: C_BLUE, line: { color: C_BLUE } });
slide2.addText("【效果回顾】", { x: 0.8, y: 1.8, w: 3.7, h: 0.4, fontSize: 18, color: "FFFFFF", bold: true });
slide2.addText("2026年1-10月，沃尔沃突发舆情事件数量高于往年，但舆情走势整体平稳可控，负面率", { x: 0.8, y: 2.4, w: 3.7, h: 1.5, fontSize: 14, color: "FFFFFF", lineSpacing: 25 });
slide2.addText("0.55%", { x: 0.8, y: 3.5, w: 3.7, h: 0.8, fontSize: 48, color: "FFFFFF", bold: true, align: "center" });
slide2.addText("优于去年同期 0.67%", { x: 0.8, y: 4.3, w: 3.7, h: 0.4, fontSize: 16, color: "FFFFFF", align: "center" });

slide2.addShape(pptx.ShapeType.rect, { x: 5.2, y: 1.5, w: 4.3, h: 3.8, fill: C_LIGHT_GRAY, line: { color: "E0E0E0" } });
slide2.addText("前十个月，负面舆情管控水平稳居核心竞品阵营", { x: 5.5, y: 2.5, w: 3.7, h: 1, fontSize: 16, color: C_BLACK, align: "center", lineSpacing: 25 });
slide2.addText("第一梯队", { x: 5.5, y: 3.3, w: 3.7, h: 0.8, fontSize: 40, color: C_BLUE, bold: true, align: "center" });
slide2.addText("（负面率最低）", { x: 5.5, y: 4.2, w: 3.7, h: 0.4, fontSize: 16, color: C_GRAY, align: "center" });

// ==========================================
// 第 3 页：零、2026舆情复盘【原因分析与风险】(三支柱+底部预警)
// ==========================================
let slide3 = pptx.addSlide();
slide3.addText("体系闭环显神威，生态改善迎东风", { x: 0.5, y: 0.3, w: 9, h: 0.6, fontSize: 24, fontFace: FONT_TITLE, color: C_BLACK, bold: true });

// 原因分析三个卡片
let colW = 2.9;
let startX = 0.5;
let yPos = 1.2;

// 1. PR体系化管控成效显现
slide3.addShape(pptx.ShapeType.rect, { x: startX, y: yPos, w: colW, h: 4.0, fill: "FFFFFF", line: { color: C_BLUE, width: 2 } });
slide3.addText("一、PR体系化管控成效显现", { x: startX + 0.1, y: yPos + 0.1, w: colW - 0.2, h: 0.5, fontSize: 14, color: C_BLUE, bold: true });
slide3.addText("1. 危机前置化管理：突发事件（3.15、EX30/XC70召回等）数量虽高于往年，但均未形成舆论热度——得益于媒体预沟通、内部提前布控、统一口径、处置方案前置\n\n2. 常态化闭环处置：\n   1) 舆情处置量再创新高，传播路径拦截关口进一步前移（2026年3000+，2025年2500+）\n   2) 举报信+网信办双渠道投诉形成有效震慑，顽固不实信源不再冒头\n   3) 社媒内容治理：及时处置高热度车主敏感笔记，切断传播源头、助力售后闭环结案\n\n3. 跨部门协同作战，赋能业务一线：\n   1) 销售条线：3月启动经销商打假专项、11月启动全网低价引流清理专项，成果最终落地于销售终端\n   2) 售后条线：凸轮轴项目、\"售后定价认知\"专项，成果最终反哺销售转化", { x: startX + 0.1, y: yPos + 0.6, w: colW - 0.2, h: 3.3, fontSize: 10, color: C_BLACK, lineSpacing: 16 });

// 2. 外部治理环境阶段性改善
slide3.addShape(pptx.ShapeType.rect, { x: startX + colW + 0.15, y: yPos, w: colW, h: 4.0, fill: "FFFFFF", line: { color: C_BLUE, width: 2 } });
slide3.addText("二、外部治理环境阶段性改善", { x: startX + colW + 0.25, y: yPos + 0.1, w: colW - 0.2, h: 0.5, fontSize: 14, color: C_BLUE, bold: true });
slide3.addText("网信办7-8月专项行动及9月《关于加强涉企侵权信息管理 持续推动营商网络环境优化的通知》出台后，垂类自媒体矩阵式攻击明显收敛", { x: startX + colW + 0.25, y: yPos + 0.6, w: colW - 0.2, h: 3.3, fontSize: 12, color: C_BLACK, lineSpacing: 20 });

// 3. 正中性声量结构性稀释
slide3.addShape(pptx.ShapeType.rect, { x: startX + (colW + 0.15) * 2, y: yPos, w: colW, h: 4.0, fill: "FFFFFF", line: { color: C_BLUE, width: 2 } });
slide3.addText("三、正中性声量结构性稀释", { x: startX + (colW + 0.15) * 2 + 0.1, y: yPos + 0.1, w: colW - 0.2, h: 0.5, fontSize: 14, color: C_BLUE, bold: true });
slide3.addText("（正面数据明细待补充）\n\n初步判断：重大舆情节点（EX30召回、XC70召回、财报销量发布、高层换届等）期间，转载官方公告、无延伸解读的中性信息集中释放，对负面率形成稀释", { x: startX + (colW + 0.15) * 2 + 0.1, y: yPos + 0.6, w: colW - 0.2, h: 3.3, fontSize: 11, color: C_BLACK, lineSpacing: 20 });

// 风险舆情 (底部通栏)
slide3.addShape(pptx.ShapeType.rect, { x: 0.5, y: 5.4, w: 9, h: 0.6, fill: C_BLUE, line: { color: C_BLUE } });
slide3.addText("【风险舆情】舆情反弹压力犹存：销量业绩承压背景下，低价引流信息、少数官媒炒作销量与降价唱衰品牌的内容仍有冒头风险，11-12月存在反弹可能", { x: 0.7, y: 5.4, w: 8.6, h: 0.6, fontSize: 11, color: "FFFFFF", bold: true, valign: "middle" });

// ==========================================
// 第 4 页：一、2026问题复盘【困难与利好】(天平图/对比)
// 标题：寒气传导致冰点，战略转向破迷局
// ==========================================
let slide4 = pptx.addSlide();
slide4.addText("寒气传导致冰点，战略转向破迷局", { x: 0.5, y: 0.3, w: 9, h: 0.6, fontSize: 24, fontFace: FONT_TITLE, color: C_BLACK, bold: true });
slide4.addText("一、2026年问题复盘——盘点内外部利好与利空，锚定2027年方向", { x: 0.5, y: 0.8, w: 9, h: 0.4, fontSize: 14, fontFace: FONT_BODY, color: C_GRAY });

// 左侧：困难项 (深蓝底)
slide4.addShape(pptx.ShapeType.rect, { x: 0.5, y: 1.4, w: 4.6, h: 4.2, fill: C_BLUE });
slide4.addText("【困难项】", { x: 0.7, y: 1.6, w: 4.2, h: 0.4, fontSize: 18, color: "FFFFFF", bold: true });
slide4.addText("（一）企业内部\n- 媒体维稳预算收缩（界面事件传导效应）\n- 凸轮轴问题进入常态化周期\n- 经营业绩承压\n- 终端价格体系紊乱（网络低价信息与界面事件叠加）\n- 媒体对接的平台直客通道取消（微博/微信、门户、百度、垂媒处置效率下降）\n\n（二）外部因素：行业市场容量收缩，竞争白热化\n- 党央财、地方新闻源等官媒难以触达 → 抱团冲榜、矩阵式扩散\n- AI技术降低内容生产门槛，量产效率与合规外观提升 → 处置难度显著增加\n- 行业友商、竞品水军常态化运作 → 口碑阵地受阻", { x: 0.7, y: 2.1, w: 4.2, h: 3.3, fontSize: 11, color: "FFFFFF", lineSpacing: 18 });

// 右侧：利好项 (浅灰底)
slide4.addShape(pptx.ShapeType.rect, { x: 5.4, y: 1.4, w: 4.1, h: 2.5, fill: C_LIGHT_GRAY });
slide4.addText("【利好项】", { x: 5.6, y: 1.6, w: 3.7, h: 0.4, fontSize: 18, color: C_BLACK, bold: true });
slide4.addText("- 垂媒、行业媒体等非官媒仍处约束范围内\n- 网信办9月涉企侵权信息治理文件出台，\"清朗\"行动举证有据可依", { x: 5.6, y: 2.1, w: 3.7, h: 1.6, fontSize: 12, color: C_BLACK, lineSpacing: 22 });

// 右侧：结论 (深灰底)
slide4.addShape(pptx.ShapeType.rect, { x: 5.4, y: 4.1, w: 4.1, h: 1.5, fill: "D9D9D9" });
slide4.addText("【结论】\n基于内部压力与外部环境的双重变化，2027年工作重心实施战略转向：\n2026年关键词：对齐标准\n2027年关键词：部门协同，赋能业务（销售/售后）", { x: 5.6, y: 4.2, w: 3.7, h: 1.3, fontSize: 11, color: C_BLACK, bold: true, lineSpacing: 18 });

// ==========================================
// 第 5 页：二、预算分配 (双线战略/对比)
// 标题：好钢用在刀刃上，协同聚力降成本
// ==========================================
let slide5 = pptx.addSlide();
slide5.addText("好钢用在刀刃上，协同聚力降成本", { x: 0.5, y: 0.3, w: 9, h: 0.6, fontSize: 24, fontFace: FONT_TITLE, color: C_BLACK, bold: true });
slide5.addText("二、预算分配——围绕2027年工作重点，统筹资源配置", { x: 0.5, y: 0.8, w: 9, h: 0.4, fontSize: 14, fontFace: FONT_BODY, color: C_GRAY });
slide5.addText("2027年工作重心为部门协同、赋能业务（销售/售后）。基于外部环境与企业内部实际，公关舆情预算的科学配置至关重要：", { x: 0.5, y: 1.3, w: 9, h: 0.4, fontSize: 12, fontFace: FONT_BODY, color: C_BLACK });

// 卡片1：工具层面
slide5.addShape(pptx.ShapeType.rect, { x: 0.5, y: 2.0, w: 4.3, h: 3.8, fill: "FFFFFF", line: { color: C_BLUE, width: 3 } });
slide5.addShape(pptx.ShapeType.rect, { x: 0.5, y: 2.0, w: 4.3, h: 0.5, fill: C_BLUE });
slide5.addText("（一）工具层面：保持投入不降，并择机引入新渠道", { x: 0.6, y: 2.0, w: 4.1, h: 0.5, fontSize: 14, color: "FFFFFF", bold: true, valign: "middle" });
slide5.addText("- 口碑工具：吉利集团已全面铺开，沃尔沃应同步跟进\n\n- 负面内容处置工具：吉利集团推荐新华财经AI处置通道", { x: 0.7, y: 2.7, w: 3.9, h: 2.5, fontSize: 14, color: C_BLACK, lineSpacing: 25 });

// 卡片2：媒体维稳
slide5.addShape(pptx.ShapeType.rect, { x: 5.2, y: 2.0, w: 4.3, h: 3.8, fill: "FFFFFF", line: { color: C_BLUE, width: 3 } });
slide5.addShape(pptx.ShapeType.rect, { x: 5.2, y: 2.0, w: 4.3, h: 0.5, fill: C_BLUE });
slide5.addText("（二）媒体维稳：预算收缩，纳入大吉利一体化协同体系", { x: 5.3, y: 2.0, w: 4.1, h: 0.5, fontSize: 14, color: "FFFFFF", bold: true, valign: "middle" });
slide5.addText("- 依托大吉利一体化协同体系统一沟通口径，优化媒体合作成本\n\n- 友商参照：\n  - 上汽集团：\"核心舆情媒体费用未减少\"\n  - 莲花跑车：\"舆情维护预算已清零，依靠吉利集团力量维持\"\n  - 北京现代：\"维稳预算接近挂0；媒体追讨去年款项，今年无合作口径；甲方明年存续尚不确定\"", { x: 5.4, y: 2.7, w: 4.1, h: 3.0, fontSize: 12, color: C_BLACK, lineSpacing: 18 });

// ==========================================
// 第 6 页：三、2027核心策略【坚守阵地】(树状/并列)
// 标题：守阵拓疆双驱动，利刃出鞘赋终端
// ==========================================
let slide6 = pptx.addSlide();
slide6.addText("守阵拓疆双驱动，利刃出鞘赋终端", { x: 0.5, y: 0.3, w: 9, h: 0.6, fontSize: 24, fontFace: FONT_TITLE, color: C_BLACK, bold: true });
slide6.addText("三、2027核心策略：坚守PR核心阵地，赋能业务团队", { x: 0.5, y: 0.8, w: 9, h: 0.4, fontSize: 14, fontFace: FONT_BODY, color: C_GRAY });

// 左半边：坚守PR核心阵地
slide6.addText("（一）坚守PR核心阵地：前置化预防 + 常态化精准闭环", { x: 0.5, y: 1.3, w: 4.4, h: 0.5, fontSize: 16, color: C_BLUE, bold: true });
let leftItems = [
    { t: "媒体维稳：纳入大吉利一体化协同", d: "党央财、地方新闻源等官媒：费用等比例优化\n核心头部垂媒、行业媒体：择优深度合作" },
    { t: "常态化处置：", d: "大吉利集采团队协同对接平台直客，提升平台审核与处置效率\n媒体点对点前置沟通，推动负面内容下架\n平台举报投诉流程化处置" },
    { t: "社媒舆情治理：", d: "持续处置小红书高热度车主敏感笔记" },
    { t: "口碑自卫队：", d: "重大事件高热文章评论区维护、正面占位、正面评论点赞" },
    { t: "经销商赋能：", d: "全员微吼、媒体应对话术辅导、主场培训" }
];
leftItems.forEach((item, index) => {
    slide6.addShape(pptx.ShapeType.rect, { x: 0.5, y: 1.9 + index * 0.9, w: 4.4, h: 0.8, fill: C_LIGHT_GRAY });
    slide6.addText(item.t, { x: 0.6, y: 1.95 + index * 0.9, w: 4.2, h: 0.3, fontSize: 12, color: C_BLUE, bold: true });
    slide6.addText(item.d, { x: 0.6, y: 2.25 + index * 0.9, w: 4.2, h: 0.5, fontSize: 10, color: C_BLACK });
});

// 右半边：部门协同，赋能业务团队
slide6.addText("（二）部门协同，赋能业务团队：打假 + 口碑", { x: 5.2, y: 1.3, w: 4.3, h: 0.5, fontSize: 16, color: C_BLUE, bold: true });
slide6.addShape(pptx.ShapeType.rect, { x: 5.2, y: 1.9, w: 4.3, h: 1.8, fill: C_BLUE });
slide6.addText("1. 打假：\n清理非授权低价引流、非授权第三方账号", { x: 5.3, y: 2.1, w: 4.1, h: 1.4, fontSize: 14, color: "FFFFFF", bold: true, lineSpacing: 20 });

slide6.addShape(pptx.ShapeType.rect, { x: 5.2, y: 3.9, w: 4.3, h: 1.8, fill: C_BLUE });
slide6.addText("2. 口碑：\n聚焦销售、售后业务痛点，设置口碑专项，赋能线上、线下销售场景", { x: 5.3, y: 4.1, w: 4.1, h: 1.4, fontSize: 14, color: "FFFFFF", bold: true, lineSpacing: 20 });

// ==========================================
// 第 7 页：四、工具矩阵 (矩阵图)
// 标题：粮草先行稳军心，利器在手战必胜
// ==========================================
let slide7 = pptx.addSlide();
slide7.addText("粮草先行稳军心，利器在手战必胜", { x: 0.5, y: 0.3, w: 9, h: 0.6, fontSize: 24, fontFace: FONT_TITLE, color: C_BLACK, bold: true });
slide7.addText("四、工具矩阵：2027年工作重点落地的资源保障", { x: 0.5, y: 0.8, w: 9, h: 0.4, fontSize: 14, fontFace: FONT_BODY, color: C_GRAY });

// 矩阵十字架布局
// 左上方
slide7.addShape(pptx.ShapeType.rect, { x: 0.5, y: 1.6, w: 4.3, h: 1.8, fill: "FFFFFF", line: { color: C_BLUE, width: 2 } });
slide7.addText("坚守PR核心阵地", { x: 0.7, y: 1.8, w: 3.9, h: 0.4, fontSize: 18, color: C_BLUE, bold: true });
slide7.addText("• 声闻盾\n• AI对冲资讯入口（待定）", { x: 0.7, y: 2.3, w: 3.9, h: 0.8, fontSize: 14, color: C_BLACK, lineSpacing: 20 });

// 左下方
slide7.addShape(pptx.ShapeType.rect, { x: 0.5, y: 3.6, w: 4.3, h: 2.4, fill: "FFFFFF", line: { color: C_BLUE, width: 2 } });
slide7.addText("部门协同，赋能业务（销售&售后）", { x: 0.7, y: 3.8, w: 3.9, h: 0.4, fontSize: 18, color: C_BLUE, bold: true });
slide7.addText("• 口碑自卫队\n• 社媒处置工具", { x: 0.7, y: 4.3, w: 3.9, h: 1.0, fontSize: 14, color: C_BLACK, lineSpacing: 20 });

// 右侧视觉装饰图形 (大圆弧/箭头等表示支撑)
slide7.addShape(pptx.ShapeType.arc, { x: 5.2, y: 1.6, w: 4.3, h: 4.4, adjustPoint: 0.3, line: { color: C_BLUE, width: 4 }, rotate: 90 });
slide7.addShape(pptx.ShapeType.ellipse, { x: 6.5, y: 3.3, w: 1.7, h: 1.0, fill: C_BLUE });
slide7.addText("资源保障", { x: 6.5, y: 3.3, w: 1.7, h: 1.0, fontSize: 16, color: "FFFFFF", bold: true, align: "center", valign: "middle" });

// ==========================================
// 第 8 页：封底 (仅保留 Thanks)
// ==========================================
let slide8 = pptx.addSlide();
slide8.addText("Thanks", { x: 0, y: 2.5, w: 10, h: 1, fontSize: 72, fontFace: "Arial", color: C_BLACK, bold: true, align: "center" });
slide8.addShape(pptx.ShapeType.line, { x: 4.5, y: 3.8, w: 1, h: 0, line: { color: C_BLUE, width: 4 } });

// 导出文件
pptx.writeFile({ fileName: "Volvo_PR_Strategy_2027.pptx" });