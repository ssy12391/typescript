const pptxgen = require("pptxgenjs");
/* Challenge：2027年面临的挑战 —— 红框区重设计（三列网格 → 色带结论） */
const pres = new pptxgen();
pres.defineLayout({ name:"A16x9", width:13.333, height:7.5 });
pres.layout = "A16x9";

const C = { INK:"1A1A1A", BODY:"444444", MUTED:"6F6F6F", LINE:"E4E4E4",
            SLATE:"44546A", RED:"C00000", GRAYBOX:"D9D9D9", ARROW:"B8B8B8", WHITE:"FFFFFF" };
const F = "微软雅黑";
const s = pres.addSlide();
s.background = { color:C.WHITE };

const T   = (t,o)=>s.addText(t,Object.assign({fontFace:F},o));
const R   = (x,y,w,h,c)=>s.addShape("rect",{x,y,w,h,fill:{color:c},line:{color:c,width:0}});
const HL  = (x,y,w)=>R(x,y,w,0.012,C.LINE);
const VL  = (x,y,h)=>R(x,y,0.01,h,C.LINE);
const TICK= (x,y)=>R(x,y,0.42,0.032,C.SLATE);
const DOT = (x,y)=>R(x,y,0.045,0.045,C.MUTED);

/* ═══ 红框外 · 原样（按最新版文字）═══ */
T("VOLVO",{x:0,y:0.26,w:13.333,h:0.36,align:"center",fontSize:18,bold:true,
  color:C.INK,charSpacing:18,fontFace:"Arial"});
T("|Challenge： 2027年面临的挑战",{x:0.30,y:0.82,w:8,h:0.30,fontSize:13.5,bold:true,color:C.INK});
T("内外环境变化，要求媒体资源分配必须更精准， 处置能力和要求要提升",
  {x:0.35,y:1.28,w:12.63,h:0.44,align:"center",fontSize:19,bold:true,color:C.INK});

/* ── 顶部三节：左灰块（原样）＋ 右两域页眉（同款语言，去框）── */
function section(x, title, items, fill, txtColor){
  if(fill) R(x,1.99,3.67,5.13,fill);
  TICK(x+0.23,2.18);
  T(title,{x:x+0.23,y:2.28,w:3.2,h:0.30,fontSize:13,bold:true,color:C.INK});
  items.forEach((t,i)=>T(t,{x:x+0.49,y:2.82+i*0.32,w:3.0,h:0.28,
    fontSize:10.5,color:txtColor,bullet:{code:"2756",indent:10}}));
}
section(0.49,"一、体系化协同",["经销商微吼培训","客诉处理指导","预防为主、高效处置、复盘迭代"],
        C.GRAYBOX,C.MUTED);
section(4.40,"二、媒体关系",["“刷脸”维稳","常态化维护","优质媒体合作"],null,C.BODY);
section(8.90,"三、高效处置工具",["评论区自卫队","专业投诉渠道"],null,C.BODY);

/* 页眉区/内容区分界细线 */
HL(4.40,3.46,4.20); HL(8.90,3.46,4.00);

/* ═══ 域A · 媒体关系：三列编辑网格（现状 → 佐证）═══ */
const cwA = 1.28, ax = [4.40,5.86,7.32];
VL(5.73,3.58,2.52); VL(7.19,3.58,2.52);

const lead = (x,l,r,w)=>T([
  {text:l,options:{fontSize:11,bold:true,color:C.INK}},
  {text:r,options:{fontSize:10.5,color:C.BODY}}],
  {x,y:3.58,w,h:0.62,valign:"top"});
lead(ax[0],"自媒体：","乱象收敛",cwA);
lead(ax[1],"官媒：","国家扶持、行业重视",cwA);
lead(ax[2],"文章评论区管理：","友商在加码，本品需求大",cwA);
ax.forEach(x=>HL(x,4.26,cwA));

const item = (x,y,runs,h)=>{ DOT(x,y+0.05);
  T(runs,{x:x+0.11,y,w:cwA-0.11,h,valign:"top"}); };
const plain = t=>[{text:t,options:{fontSize:8.5,color:C.MUTED}}];
const lr = (l,r)=>[{text:l,options:{fontSize:8.5,bold:true,color:C.INK}},
                   {text:r,options:{fontSize:8.5,color:C.MUTED}}];

item(ax[0],4.38,plain("“清朗行动”强监管"),0.40);
item(ax[0],5.28,plain("自媒体合规意识提升"),0.40);
item(ax[1],4.38,plain("网信办白名单"),0.40);
item(ax[1],5.28,plain("行业预算向官媒倾斜"),0.40);
item(ax[2],4.38,lr("友商：","全持续升级评论区攻防常态化"),0.80);
item(ax[2],5.28,lr("本品：","①售后双话题展开XC70/S70/V70"),0.80);

/* ═══ 域B · 高效处置工具：三列对位（标题 → 两行明细）═══ */
const cwB = 1.22, bx = [8.90,10.28,11.66];
VL(10.20,3.58,2.52); VL(11.58,3.58,2.52);

lead(bx[0],"平台：","更规范",cwB);
lead(bx[1],"账号打假：","要求更细化",cwB);
lead(bx[2],"不实低价：","场景更复杂",cwB);
bx.forEach(x=>HL(x,4.26,cwB));

const itemB = (x,y,runs,h)=>{ DOT(x,y+0.05);
  T(runs,{x:x+0.11,y,w:cwB-0.11,h,valign:"top"}); };

/* 列1 · 平台 */
T("举证方：",{x:bx[0],y:4.38,w:1.11,h:0.20,fontSize:9,bold:true,color:C.INK});
itemB(bx[0],4.62,plain("举证物料/投诉理由更严格"),0.42);
T("被投诉方：",{x:bx[0],y:5.28,w:1.11,h:0.20,fontSize:9,bold:true,color:C.INK});
itemB(bx[0],5.50,plain("聚焦企业真实负面"),0.20);
itemB(bx[0],5.70,plain("合规意识强化"),0.20);
itemB(bx[0],5.90,plain("AI工具降低错误"),0.20);
/* 列2 · 账号打假 */
itemB(bx[1],4.38,lr("被投诉方：","反向申诉"),0.44);
itemB(bx[1],5.28,lr("商标侵权界定标准：","更严格"),0.62);
/* 列3 · 不实低价 */
itemB(bx[2],4.38,plain("厂家管控违规"),0.24);
itemB(bx[2],5.28,plain("二网渠道低价"),0.24);

/* ═══ 汇聚箭头 + 结论色带（石板蓝=媒体｜红=处置，红色全页唯一热色）═══ */
[6.50,10.90].forEach(cx=>{
  s.addShape("triangle",{x:cx-0.20,y:6.16,w:0.40,h:0.24,rotate:180,
    fill:{color:C.ARROW},line:{color:C.ARROW,width:0}});
});
R(4.40,6.50,4.20,0.62,C.SLATE);
T("媒体：调整要预算",{x:4.40,y:6.50,w:4.20,h:0.62,align:"center",
  fontSize:16,bold:true,color:C.WHITE});
R(8.90,6.50,4.00,0.62,C.RED);
T("处置：能力环和要求提升",{x:8.90,y:6.50,w:4.00,h:0.62,align:"center",
  fontSize:16,bold:true,color:C.WHITE});

pres.writeFile({ fileName:"Challenge2027_v4.pptx" }).then(f=>console.log("Saved:",f));
