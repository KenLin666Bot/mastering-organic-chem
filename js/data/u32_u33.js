/**
 * Mastering Chemistry (HKDSE Jing Kung Educational Press / L.H.M. Chung)
 * Book 3B — Topic 8: Chemistry of Carbon Compounds
 * Unit 32: Synthesis of carbon compounds (碳化合物的合成)
 * Unit 33: Important organic substances (重要的有机物质)
 */
window.CHEM_UNITS = window.CHEM_UNITS || [];

// ============================================================================
// UNIT 32: Synthesis of carbon compounds (碳化合物的合成)
// ============================================================================
window.CHEM_UNITS.push({
  id: 'u32',
  unitNum: 'Unit 32',
  book: 'Book 3B · Topic 8',
  topicId: 'topic8',
  titleEn: 'Synthesis of carbon compounds',
  titleZh: '碳化合物的合成',
  colorTheme: 'orange',
  summary: '把前面学过的所有有机反应串联成“化学导航地图”：运用正推与逆推思维（retrosynthetic thinking）设计多步有机合成路线（synthetic routes），完成官能团移位（functional group position shifting）与汇聚式酯／酰胺合成；掌握路线优劣评估与限量反应物（limiting reactant）→ 理论产量（theoretical yield）→ 百分产率（percentage yield）计算；并精通实验室液态产物（分液漏斗洗涤、无水干燥剂除水、再蒸馏）与固态产物（减压过滤、重结晶、熔点测定）的全套分离提纯标准操作。',
  keyTerms: [
    { en: 'organic synthesis', zh: '有机合成', cat: 'Concept' },
    { en: 'synthetic route', zh: '合成路线', cat: 'Concept' },
    { en: 'intermediate', zh: '中间体', cat: 'Substance' },
    { en: 'Markovnikov\'s rule', zh: '马氏规则', cat: 'Concept' },
    { en: 'limiting reactant', zh: '限量反应物', cat: 'Calculation' },
    { en: 'theoretical yield', zh: '理论产量', cat: 'Calculation' },
    { en: 'actual yield', zh: '实际产量', cat: 'Calculation' },
    { en: 'percentage yield', zh: '百分产率', cat: 'Calculation' },
    { en: 'atom economy', zh: '原子经济性', cat: 'Concept' },
    { en: 'heating under reflux', zh: '回流加热', cat: 'Technique' },
    { en: 'distillation', zh: '蒸馏', cat: 'Technique' },
    { en: 'separating funnel', zh: '分液漏斗', cat: 'Apparatus' },
    { en: 'liquid-liquid extraction', zh: '液-液萃取', cat: 'Technique' },
    { en: 'anhydrous sodium sulphate', zh: '无水硫酸钠', cat: 'Reagent' },
    { en: 'redistillation', zh: '再蒸馏', cat: 'Technique' },
    { en: 'recrystallization', zh: '重结晶', cat: 'Technique' },
    { en: 'suction filtration', zh: '减压过滤（抽滤）', cat: 'Technique' },
    { en: 'melting point determination', zh: '熔点测定', cat: 'Technique' }
  ],
  sections: [
    // ------------------------------------------------------------------------
    // u32-s1: 32.1–32.2 Planning Organic Synthesis
    // ------------------------------------------------------------------------
    {
      id: 'u32-s1',
      code: '32.1–32.2',
      titleEn: 'Planning organic syntheses & common synthetic routes',
      titleZh: '设计有机合成路线：逆推思维、官能团移位与多步合成模型',
      analogy: {
        icon: '🗺️',
        title: '像查地铁换乘一样做有机合成：终点倒推找“上一站枢纽”！',
        body: '如果让你从香港岛某个小站坐地铁去新界某站，且“换乘不超过 3 次（in NOT MORE THAN 3 steps）”，最高效的办法不是瞎坐，而是同时做两件事：① 正推（working forwards）：看起点站能一步直达哪些官能团（functional groups）；② 逆推（working backwards / retrosynthetic thinking）：看终点站的官能团（例如酮 ketone 或酯 ester）只能由哪一个直接前体（immediate precursor）一步变出来！只要正推和逆推在中间某个“换乘大站”——通常是烯烃（alkene）、卤代烷（haloalkane）或醇（alcohol）——成功汇合，整条合成路线就瞬间贯通！'
      },
      coreExplanation: `
        <h4>1. 筹划有机合成的双向思维（Working Forwards &amp; Working Backwards）</h4>
        <p>设计<span class="term">有机合成路线 <span class="en">synthetic route</span></span>时，首先对比<span class="term">起始物 <span class="en">starting material</span></span>与<span class="term">目标分子 <span class="en">target molecule</span></span>的两大要素：① 碳骨架的碳原子数是否改变（在 HKDSE Topic 8 中，单条碳链的碳数通常保持不变；若碳数增加，必定是两段分子缩合生成<span class="term">酯 <span class="en">ester</span></span>或<span class="term">取代酰胺 <span class="en">substituted amide</span></span>；若碳数减少，则是<span class="term">酯或酰胺的水解 <span class="en">hydrolysis of ester or amide</span></span>）；② <span class="term">官能团种类及位置 <span class="en">type and position of functional group</span></span>如何改变。</p>
        <ul class="chem-list">
          <li><strong>正推法（Working forwards）：</strong>从给定起始物出发，列出它一步能转化成的所有<span class="term">中间体 <span class="en">intermediates</span></span>（例如<span class="term">烯烃 <span class="en">alkene</span></span>可加 HBr 变<span class="term">卤代烷 <span class="en">haloalkane</span></span>、加 H<sub>2</sub>/Pt 变<span class="term">烷烃 <span class="en">alkane</span></span>）。</li>
          <li><strong>逆推法（Working backwards / Retrosynthetic thinking）：</strong>紧盯目标分子的官能团倒推“上一步前体是谁”——看到<span class="term">酮 <span class="en">ketone</span></span>立刻倒推至<span class="term">仲醇 <span class="en">secondary alcohol</span></span>；看到<span class="term">未取代酰胺 <span class="en">unsubstituted amide</span></span>（—CONH<sub>2</sub>）立刻倒推至<span class="term">酰氯 <span class="en">acyl chloride</span></span>（—COCl）再倒推至<span class="term">羧酸 <span class="en">carboxylic acid</span></span>（—COOH）；看到<span class="term">酯 <span class="en">ester</span></span>立刻拆回对应的<span class="term">羧酸 <span class="en">carboxylic acid</span></span>与<span class="term">醇 <span class="en">alcohol</span></span>！</li>
        </ul>

        <div class="callout callout-warn">
          <strong>⚠️ HKDSE “Outline a synthetic route in NOT MORE THAN X steps” 满分书写铁律：</strong><br>
          1. <strong>每个中间体必画结构式：</strong>每两个反应箭头之间必须清晰写出<span class="term">有机中间体 <span class="en">organic intermediate</span></span>的<span class="term">结构式或简明结构式 <span class="en">structural or condensed structural formula</span></span>，绝不可跳步或只写分子式（molecular formula）！<br>
          2. <strong>试剂与条件缺一不可：</strong>箭头上下必须写齐准确的<span class="term">试剂 <span class="en">reagents</span></span>与<span class="term">反应条件 <span class="en">reaction conditions</span></span>（如 <code>heat under reflux</code>、<code>Al<sub>2</sub>O<sub>3</sub>, heat</code>、<code>UV light</code>；严禁写超纲符号）。<br>
          3. <strong>严禁把不相容试剂混成一步：</strong>例如用<span class="term">氢化铝锂 <span class="en">lithium aluminium hydride</span></span>还原羧酸或酯时，必须严格分写为 <code>1. LiAlH<sub>4</sub>, dry ether</code> 与 <code>2. H<sup>+</sup>(aq)</code>（算作 1 个合成步骤），绝不能把 <code>LiAlH<sub>4</sub></code> 和 <code>H<sup>+</sup>(aq)</code> 直接并列混写（遇水剧烈反应失效）！同理，羧酸制酰胺不能写“加 NH<sub>3</sub> 室温一步得酰胺”（酸碱中和只得铵盐 RCOO<sup>−</sup>NH<sub>4</sub><sup>+</sup>），精工版课本标准走法是先加 <code>SOCl<sub>2</sub></code>（或 <code>PCl<sub>5</sub></code>）制<span class="term">酰氯 <span class="en">acyl chloride</span></span>，再加 <code>NH<sub>3</sub></code> 制<span class="term">酰胺 <span class="en">amide</span></span>！
        </div>

        <h4>2. 三大必考经典多步合成模型（Classic Multi-Step Pathways）</h4>
        <table class="chem-table">
          <thead>
            <tr>
              <th>合成模型</th>
              <th>核心转化链条（含试剂及条件）</th>
              <th>关键破题心法</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>模型 A：主干阶梯转化</strong><br>（烃 → 卤代烷 → 醇 → 羰基／羧酸／酰胺）</td>
              <td><span class="term">烯烃 <span class="en">alkene</span></span> →(HX)→ <span class="term">卤代烷 <span class="en">haloalkane</span></span> →(NaOH(aq), heat under reflux)→ <span class="term">醇 <span class="en">alcohol</span></span> →(Cr<sub>2</sub>O<sub>7</sub><sup>2−</sup>/H<sup>+</sup>)→ <span class="term">醛 <span class="en">aldehyde</span></span>（边反应边蒸馏 distil off）或 <span class="term">羧酸 <span class="en">carboxylic acid</span></span>／<span class="term">酮 <span class="en">ketone</span></span>（回流加热 heat under reflux）</td>
              <td><span class="term">醇 <span class="en">alcohol</span></span>是连接卤代烷与醛、酮、羧酸、酯、烯烃的“万能十字路口”！</td>
            </tr>
            <tr>
              <td><strong>模型 B：官能团移位</strong><br>（Functional group position shifting：1-位变 2-位）</td>
              <td><code>CH<sub>3</sub>CH<sub>2</sub>CH<sub>2</sub>OH</code>（<span class="term">1-丙醇 <span class="en">propan-1-ol</span></span>）→(Al<sub>2</sub>O<sub>3</sub>, heat)→ <code>CH<sub>3</sub>CH=CH<sub>2</sub></code>（<span class="term">丙烯 <span class="en">propene</span></span>）→(HBr)→ <code>CH<sub>3</sub>CHBrCH<sub>3</sub></code>（<span class="term">2-溴丙烷 <span class="en">2-bromopropane</span></span>）→(NaOH(aq), heat under reflux)→ <code>CH<sub>3</sub>CH(OH)CH<sub>3</sub></code>（<span class="term">2-丙醇 <span class="en">propan-2-ol</span></span>）→(Cr<sub>2</sub>O<sub>7</sub><sup>2−</sup>/H<sup>+</sup>, heat under reflux)→ <code>CH<sub>3</sub>COCH<sub>3</sub></code>（<span class="term">丙酮 <span class="en">propanone</span></span>）</td>
              <td>先<strong>消去（elimination / dehydration）</strong>造出 C=C 双键，再利用<strong><span class="term">马氏规则 <span class="en">Markovnikov's rule</span></span></strong>不对称加成 HBr 把卤素精准安到 C-2 上，最后碱性水解变仲醇！</td>
            </tr>
            <tr>
              <td><strong>模型 C：单一起始物双支路汇聚合成酯</strong><br>（Convergent synthesis）</td>
              <td>仅由<span class="term">乙烯 <span class="en">ethene</span></span>或<span class="term">溴乙烷 <span class="en">bromoethane</span></span>合成<span class="term">乙酸乙酯 <span class="en">ethyl ethanoate</span></span>：先制得<span class="term">乙醇 <span class="en">ethanol</span></span>，将一部分乙醇用过量 <code>Cr<sub>2</sub>O<sub>7</sub><sup>2−</sup>(aq)/H<sup>+</sup>(aq)</code> 回流氧化为<span class="term">乙酸 <span class="en">ethanoic acid</span></span>，再与另一部分乙醇加 <code>conc. H<sub>2</sub>SO<sub>4</sub></code> 回流酯化！</td>
              <td>当目标酯（RCOOR'）碳数翻倍而题目只给一种小分子有机原料时，把原料一分为二分别制备酸与醇再汇聚！</td>
            </tr>
          </tbody>
        </table>

        <div class="struct-card">
          <pre class="struct-pre">【HKDSE 王牌 4 步移位氧化路线：propan-1-ol ⟶ propanone】
                       Al₂O₃, heat                           HBr
CH₃CH₂CH₂OH  ─────────────────────────▶  CH₃CH=CH₂  ─────────────▶  CH₃CHBrCH₃
(propan-1-ol)   (或 excess conc. H₂SO₄,   (propene)    (Markovnikov   (2-bromopropane,
                   heat at 180°C)                       major product)   major product)
                                                                            │
                                                      NaOH(aq), heat        │
                                                      under reflux          ▼
                Cr₂O₇²⁻(aq)/H⁺(aq),
CH₃COCH₃  ◀─────────────────────────────  CH₃CH(OH)CH₃
(propanone)      heat under reflux        (propan-2-ol)</pre>
          <div class="struct-cap">标准答题示范：每一步中间体结构清晰写出，试剂与反应条件精确标注在箭头旁</div>
        </div>

        <div class="callout callout-tip">
          <strong>💡 还原剂精准选型口诀：</strong><br>
          • 只把<span class="term">醛 <span class="en">aldehyde</span></span>或<span class="term">酮 <span class="en">ketone</span></span>还原成醇（保留分子内可能存在的酯基或羧基）：首选温和的水溶液试剂 <code>NaBH<sub>4</sub>(aq)</code>（<span class="term">硼氢化钠水溶液 <span class="en">aqueous sodium borohydride</span></span>）！<br>
          • 要把<span class="term">羧酸 <span class="en">carboxylic acid</span></span>或<span class="term">酯 <span class="en">ester</span></span>强力还原成伯醇：必须出动 <code>1. LiAlH<sub>4</sub>, dry ether</code>，<code>2. H<sup>+</sup>(aq)</code>！
        </div>
      `,
      textbookFormulas: [
        {
          label: '醇脱水消去制烯烃（Dehydration of alcohol to alkene）',
          equationHtml: `CH<sub>3</sub>CH<sub>2</sub>CH<sub>2</sub>OH <span class="chem-arrow"><span class="cond-top">Al<sub>2</sub>O<sub>3</sub>, heat</span><span class="arr-main">⟶</span><span class="cond-bot">(or excess conc. H<sub>2</sub>SO<sub>4</sub>, 180°C)</span></span> CH<sub>3</sub>CH=CH<sub>2</sub> + H<sub>2</sub>O`,
          note: '用于“官能团移位”第一步：脱去水分子引入 C=C 双键'
        },
        {
          label: '不对称烯烃加成 HBr（Markovnikov\'s rule 马氏规则）',
          equationHtml: `CH<sub>3</sub>CH=CH<sub>2</sub> + HBr <span class="chem-arrow"><span class="cond-top"></span><span class="arr-main">⟶</span><span class="cond-bot"></span></span> CH<sub>3</sub>CHBrCH<sub>3</sub> <span style="font-size:0.88em;color:#64748b;">(major product 主产物)</span>`,
          note: '氢原子优先加到原本连有较多氢原子的双键碳上，使 —Br 精准定位于 2 号碳'
        },
        {
          label: '羧酸两步法高产率制未取代酰胺（Carboxylic acid to amide via acyl chloride）',
          equationHtml: `RCOOH <span class="chem-arrow"><span class="cond-top">SOCl<sub>2</sub></span><span class="arr-main">⟶</span><span class="cond-bot"></span></span> RCOCl <span class="chem-arrow"><span class="cond-top">NH<sub>3</sub></span><span class="arr-main">⟶</span><span class="cond-bot"></span></span> RCONH<sub>2</sub>`,
          note: '精工版标准两步制酰胺法（第一步也可用 PCl₅ 或 PCl₃；切勿写 RCOOH + NH₃ 一步室温反应）'
        }
      ],
      examTrap: '高频丢分重灾区：① 把卤代烷变醇写成只加“NaOH”（漏写 (aq) 及 heat under reflux）；② 想把伯醇氧化停在醛（aldehyde），却写成 heat under reflux 或误用强氧化剂 MnO₄⁻(aq)/H⁺(aq)（必须用 Cr₂O₇²⁻(aq)/H⁺(aq), heat 并立刻把生成的醛蒸出 distil off aldehyde as formed！）；③ 用 NaBH₄(aq) 去还原羧酸（carboxylic acid）或酯（ester）——NaBH₄ 只还原醛和酮，还原羧酸/酯必须用 1. LiAlH₄, dry ether / 2. H⁺(aq)！',
      relations: [
        {
          type: 'buildsOn',
          targetUnitId: 'u31',
          label: '承接 Unit 31：典型有机反应（Typical reactions of selected functional groups）',
          why: 'Unit 31 学到的每一个单步官能团反应，都是 Unit 32 拼装多步有机合成路线的积木块。'
        },
        {
          type: 'leadsTo',
          targetUnitId: 'u33',
          label: '通向 Unit 33：阿司匹林酯化修饰与聚酯／尼龙单体合成（Synthesis of drugs & monomers）',
          why: '现实工业制备阿司匹林（aspirin）及尼龙单体，正是多步有机合成策略的实际应用。'
        }
      ],
      questions: [
        {
          id: 'u32-s1-q1',
          level: 1,
          levelTag: 'Level 1 · 中文直觉破冰',
          type: 'mcq',
          stem: '在有机合成中，若要把 1-丙醇（propan-1-ol，CH₃CH₂CH₂OH）转化为 2-丙醇（propan-2-ol，CH₃CH(OH)CH₃），下列哪一组的反应类型顺序是正确且高产率的？',
          cueWords: [],
          options: [
            'A. 氧化反应（oxidation） → 还原反应（reduction）',
            'B. 脱水消去（dehydration） → 加成 HBr（addition of HBr） → 碱性水解取代（alkaline hydrolysis / substitution）',
            'C. 取代反应（substitution） → 自由基取代（free radical substitution） → 氧化反应（oxidation）',
            'D. 酯化反应（esterification） → 酸性水解（acid hydrolysis）'
          ],
          answerIndex: 1,
          hint: '要把 —OH 从 1 号碳挪到 2 号碳，必须先在 1、2 号碳之间搭起一座桥梁（C=C 双键），再利用马氏规则（Markovnikov\'s rule）定点加成！',
          explanation: '正确路径是经典三步官能团移位：① 用 Al₂O₃, heat（或过量浓 H₂SO₄, 180°C）将 1-丙醇（propan-1-ol）脱水消去（dehydration）生成丙烯（propene, CH₃CH=CH₂）；② 加入 HBr 发生加成反应（addition），按马氏规则（Markovnikov\'s rule）主产物为 2-溴丙烷（2-bromopropane, CH₃CHBrCH₃）；③ 加入 NaOH(aq) 并回流加热（heat under reflux）发生取代／碱性水解，得到 2-丙醇（propan-2-ol）。',
          commonMistake: '误以为氧化再还原能改变羟基位置：1-丙醇氧化得丙醛（propanal）或丙酸（propanoic acid），无论怎样还原回去依然是 1-丙醇，官能团永远留在 1 号碳！'
        },
        {
          id: 'u32-s1-q2',
          level: 2,
          levelTag: 'Level 2 · 中英过渡实战',
          type: 'mcq',
          stem: 'Which of the following two-step synthetic routes best converts propanoic acid (CH₃CH₂COOH) into propanamide (CH₃CH₂CONH₂) with a high yield?',
          cueWords: [
            { phrase: 'two-step synthetic routes', zh: '两步合成路线', concept: '留意试剂相容性与中间体活性' },
            { phrase: 'propanoic acid', zh: '丙酸', concept: '起始物含羧基 -COOH' },
            { phrase: 'propanamide', zh: '丙酰胺', concept: '目标物含未取代酰胺基 -CONH₂' }
          ],
          options: [
            'A. Step 1: LiAlH₄, dry ether then H⁺(aq); Step 2: NH₃(aq), heat',
            'B. Step 1: NaBH₄(aq); Step 2: conc. NH₃(aq)',
            'C. Step 1: SOCl₂; Step 2: NH₃',
            'D. Step 1: NaOH(aq), heat under reflux; Step 2: NH₄Cl(aq)'
          ],
          answerIndex: 2,
          hint: '羧酸（-COOH）直接遇氨（NH₃）只会发生酸碱中和生成丙酸铵（ammonium propanoate）；必须先把 -OH 换成极易离去的氯原子变成酰氯（acyl chloride, -COCl）！',
          explanation: '在《Mastering Chemistry》中，由羧酸（carboxylic acid）高产率制备未取代酰胺（amide）的标准两步路线是：Step 1 加入亚硫酰氯 SOCl₂（thionyl chloride，或 PCl₅）将丙酸（propanoic acid）转化为高活性的丙酰氯（propanoyl chloride, CH₃CH₂COCl）；Step 2 通入氨气 NH₃（或加入浓氨水 conc. NH₃(aq)），室温下即可迅速取代生成丙酰胺（propanamide, CH₃CH₂CONH₂）。',
          commonMistake: '错选 A：LiAlH₄ 会把羧酸彻底还原成 1-丙醇（propan-1-ol），醇与 NH₃ 不反应制不出酰胺！'
        },
        {
          id: 'u32-s1-q3',
          level: 3,
          levelTag: 'Level 3 · HKDSE 全英文实战',
          type: 'structured',
          stem: 'Outline a synthetic route, in NOT MORE THAN THREE steps, to accomplish the following conversion: CH₃CH=CH₂ ⟶ CH₃COCH₃. For each step, give the reagent(s), reaction conditions and the structure(s) of the intermediate product(s). (3 marks)',
          cueWords: [
            { phrase: 'Outline a synthetic route', zh: '概述合成路线', concept: '必须画出每步中间体结构式，并在箭头上写齐试剂及条件' },
            { phrase: 'NOT MORE THAN THREE steps', zh: '不多于三步', concept: '严禁超过 3 个转化步骤' },
            { phrase: 'CH₃CH=CH₂', zh: '丙烯 (propene)', concept: '不对称烯烃起始物，可用 HBr 按马氏规则加成到 2 号碳' },
            { phrase: 'CH₃COCH₃', zh: '丙酮 (propanone)', concept: '酮类目标物，逆推上一步必为仲醇 propan-2-ol' }
          ],
          hint: '逆推：CH₃COCH₃（丙酮）← 氧化 ← CH₃CH(OH)CH₃（2-丙醇）← 碱性水解 ← CH₃CHBrCH₃（2-溴丙烷）← 加成 HBr ← CH₃CH=CH₂（丙烯），刚好 3 步！',
          explanation: '这是 HKDSE 最核心的 3 步合成模板：Step 1 丙烯（propene）与 HBr 在室温下加成，按马氏规则生成主产物 2-溴丙烷（2-bromopropane, CH₃CHBrCH₃）；Step 2 用 NaOH(aq) 回流加热（heat under reflux）使 2-溴丙烷水解生成 2-丙醇（propan-2-ol, CH₃CH(OH)CH₃）；Step 3 用酸化重铬酸钾溶液 Cr₂O₇²⁻(aq)/H⁺(aq) 回流加热（heat under reflux）将仲醇氧化为丙酮（propanone, CH₃COCH₃）。',
          markingScheme: [
            '1M: Step 1 — Reagent: HBr(g) (no special condition needed); Intermediate 1 structure: CH₃CHBrCH₃',
            '1M: Step 2 — Reagent & condition: NaOH(aq), heat under reflux; Intermediate 2 structure: CH₃CH(OH)CH₃',
            '1M: Step 3 — Reagent & condition: Cr₂O₇²⁻(aq)/H⁺(aq) (or MnO₄⁻(aq)/H⁺(aq)), heat under reflux (to give CH₃COCH₃)'
          ],
          commonMistake: '常见失分：① Step 2 只写 NaOH 漏写 (aq) 或漏写 heat under reflux；② 中间体只写名称 "2-bromopropane" 而不画结构式 CH₃CHBrCH₃（题目明确要求 give the structure(s) of the intermediate product(s)）。'
        }
      ]
    },

    // ------------------------------------------------------------------------
    // u32-s2: 32.3 Choosing Synthetic Route & Percentage Yield Calculations
    // ------------------------------------------------------------------------
    {
      id: 'u32-s2',
      code: '32.3',
      titleEn: 'Choosing the best synthetic route & percentage yield calculations',
      titleZh: '合成路线优劣评估与百分产率（Percentage Yield）计算',
      analogy: {
        icon: '🧮',
        title: '做三明治算产率：10 片面包配 3 片火腿，最多只能出 3 份！',
        body: '假设 1 片火腿 + 2 片面包做成 1 份三明治。厨房里有 10 片面包和 3 片火腿，谁决定了最多能做几份？当然是先用完的火腿——它就是限量反应物（limiting reactant），算出来的“最多 3 份”就是理论产量（theoretical yield）。如果切边和粘锅损耗后最后端上桌 2.4 份（实际产量 actual yield），你的百分产率（percentage yield）就是 2.4 / 3 × 100% = 80%！在有机实验里，液体原料通常给体积（cm³）和密度（g cm⁻³），千万记得先乘密度换算成质量（g）再算摩尔数（mol）！'
      },
      coreExplanation: `
        <h4>1. 如何评估并选择最佳合成路线？（Factors Affecting Choice of Synthetic Route）</h4>
        <p>在工业生产与学校实验室中，如果有多条合成路线都能得到目标产物，化学家会从以下六个维度选出最优路线：</p>
        <ul class="chem-list">
          <li><strong>副反应少且百分产率高（Minimal side reactions &amp; high percentage yield）：</strong>最经典的反面教材是用<span class="term">烷烃与卤素在紫外光下发生自由基取代 <span class="en">free radical substitution of alkane with halogen under UV light</span></span>（如 <code>CH<sub>3</sub>CH<sub>3</sub> + Br<sub>2</sub> --(UV light)--&gt; CH<sub>3</sub>CH<sub>2</sub>Br + ...</code>）。因为反应链式失控，会生成<strong>一取代及多取代卤代烷的复杂混合物（mixture of mono- and poly-substituted haloalkanes）</strong>，导致目标产物<span class="term">百分产率极低 <span class="en">very low percentage yield</span></span>且分离提纯极其昂贵繁琐！相反，用<span class="term">乙烯与溴化氢加成 <span class="en">addition of HBr to ethene</span></span>（<code>CH<sub>2</sub>=CH<sub>2</sub> + HBr ⟶ CH<sub>3</sub>CH<sub>2</sub>Br</code>）只生成单一产物，产率高且易提纯；或用<span class="term">醇与亚硫酰氯反应 <span class="en">alcohol + SOCl₂</span></span>（<code>ROH + SOCl<sub>2</sub> ⟶ RCl + SO<sub>2</sub>(g) + HCl(g)</code>），副产物 <code>SO<sub>2</sub></code> 与 <code>HCl</code> 均为气体自动逸出，液体产物极易纯化！</li>
          <li><strong>高原子经济性（High atom economy）：</strong>尽量使原料中的所有原子都进入目标产物中（如<span class="term">加成反应 <span class="en">addition reaction</span></span>原子经济性为 100%，无废料副产物；而取代和消去反应会产生无机副产物）。</li>
          <li><strong>合成步骤尽量少（Fewer reaction steps）：</strong>每多一步都会损失产率！若每步产率为 80%，1 步总产率 80%，而 4 步总产率跌至 0.8<sup>4</sup> = 41%！</li>
          <li><strong>原料廉价易得、反应条件温和安全、对环境无害（Low cost, mild conditions, high safety &amp; green chemistry）：</strong>避免使用剧毒、易爆或高温高压高耗能条件。</li>
        </ul>

        <h4>2. 百分产率（Percentage Yield）四步满分计算 SOP</h4>
        <div class="struct-card">
          <pre class="struct-pre">Step 1 · 液体体积转质量：Mass (g) = Density (g cm⁻³) × Volume (cm³)
Step 2 · 求各反应物摩尔数并判别限量反应物 (Limiting reactant)：
         Moles (mol) = Mass (g) ÷ Molar mass (g mol⁻¹)
         ⚠️ 结合配平方程式计量比 (mole ratio, 注意 1:1 还是 3:1 等！) 找出最先耗尽的限量反应物！
         （注：浓 H₂SO₄ 等催化剂不参与计量；标明 "in excess 过量" 的试剂绝不是限量反应物！）
Step 3 · 由限量反应物求理论产量 (Theoretical yield)：
         Theoretical yield (g) = Moles of product (from limiting reactant) × Molar mass of product
Step 4 · 求百分产率 (Percentage yield)：
         Percentage yield = (Actual yield ÷ Theoretical yield) × 100%</pre>
          <div class="struct-cap">谨记：永远不可把液体体积（cm³）直接除以摩尔质量，也不可对液体套用气体摩尔体积（24.0 dm³ mol⁻¹）！</div>
        </div>

        <h4>3. 完整示范计算（Worked Example：乙酸乙酯制备）</h4>
        <p><strong>题目情境：</strong>将 <code>12.0 cm<sup>3</sup></code> 的<span class="term">乙酸 <span class="en">ethanoic acid</span></span>（密度 <code>1.05 g cm<sup>−3</sup></code>，摩尔质量 <code>60.0 g mol<sup>−1</sup></code>）与 <code>10.0 cm<sup>3</sup></code> 的<span class="term">乙醇 <span class="en">ethanol</span></span>（密度 <code>0.789 g cm<sup>−3</sup></code>，摩尔质量 <code>46.0 g mol<sup>−1</sup></code>）在浓硫酸催化下回流加热，分离提纯后收集到 <code>9.80 g</code> 纯净的<span class="term">乙酸乙酯 <span class="en">ethyl ethanoate</span></span>（摩尔质量 <code>88.0 g mol<sup>−1</sup></code>）。求百分产率：</p>
        <ul class="chem-list">
          <li><strong>① 算两种反应物摩尔数：</strong><br>
            乙酸质量 = <code>12.0 × 1.05 = 12.6 g</code> ⇒ <code>n(CH<sub>3</sub>COOH) = 12.6 ÷ 60.0 = 0.210 mol</code>；<br>
            乙醇质量 = <code>10.0 × 0.789 = 7.89 g</code> ⇒ <code>n(CH<sub>3</sub>CH<sub>2</sub>OH) = 7.89 ÷ 46.0 = 0.1715 mol</code>。</li>
          <li><strong>② 判定限量反应物（Limiting reactant）：</strong>酯化方程式 <code>CH<sub>3</sub>COOH + CH<sub>3</sub>CH<sub>2</sub>OH ⇌ CH<sub>3</sub>COOCH<sub>2</sub>CH<sub>3</sub> + H<sub>2</sub>O</code> 计量比为 <code>1 : 1</code>。因为 <code>0.1715 mol &lt; 0.210 mol</code>，所以<strong>乙醇是限量反应物（ethanol is the limiting reactant）</strong>（乙酸过量）！</li>
          <li><strong>③ 求理论产量与百分产率：</strong><br>
            理论生成乙酸乙酯摩尔数 = <code>0.1715 mol</code> ⇒ <span class="term">理论产量 <span class="en">theoretical yield</span></span> = <code>0.1715 × 88.0 = 15.09 g</code>；<br>
            <span class="term">百分产率 <span class="en">percentage yield</span></span> = <code>(9.80 ÷ 15.09) × 100% = 64.9%</code>。</li>
        </ul>

        <div class="callout callout-tip">
          <strong>💡 HKDSE 必背简答题：为什么有机实验的百分产率几乎总是小于 100%？（三大采分点）</strong><br>
          1. <strong>The reaction is reversible / incomplete（反应可逆或进行不完全）</strong>（尤其酯化反应及酯的酸性水解 <code>⇌</code> 绝不可能 100% 转化！）；<br>
          2. <strong>Side reactions occur（发生副反应）</strong>（例如醇在浓硫酸加热下部分脱水生成烯烃或醚；伯醇氧化时部分中间体醛尚未回流就挥发逃逸）；<br>
          3. <strong>Mechanical loss of product during transfer, separation and purification（在转移、分液洗涤、干燥及再蒸馏／重结晶提纯过程中造成产物物理损耗）</strong>。
        </div>
      `,
      textbookFormulas: [
        {
          label: '百分产率核心定义式（Definition of percentage yield）',
          equationHtml: `Percentage yield = <span style="display:inline-block;text-align:center;vertical-align:middle;"><span style="display:block;border-bottom:1.5px solid currentColor;padding:0 6px;">Actual yield (g or mol)</span><span style="display:block;padding:0 6px;">Theoretical yield (g or mol)</span></span> × 100%`,
          note: '分子分母单位必须统一（同用质量 g 或同用物质的量 mol）'
        },
        {
          label: '高产率制氯代烷对比（Addition / SOCl₂ vs Free radical substitution）',
          equationHtml: `CH<sub>3</sub>CH<sub>2</sub>OH + SOCl<sub>2</sub> <span class="chem-arrow"><span class="cond-top"></span><span class="arr-main">⟶</span><span class="cond-bot"></span></span> CH<sub>3</sub>CH<sub>2</sub>Cl + SO<sub>2</sub>(g) + HCl(g)`,
          note: '副产物 SO₂ 和 HCl 自动以气体逸出，远胜于乙烷 + Cl₂ (UV light) 产生多氯代混合物'
        },
        {
          label: '非 1:1 计量比经典提醒：三氯化磷与醇反应（3:1 Mole ratio alert）',
          equationHtml: `3ROH + PCl<sub>3</sub> <span class="chem-arrow"><span class="cond-top"></span><span class="arr-main">⟶</span><span class="cond-bot"></span></span> 3RCl + H<sub>3</sub>PO<sub>3</sub>`,
          note: '判断限量反应物时务必看清方程式系数：1 mol PCl₃ 能与 3 mol 醇反应！'
        }
      ],
      examTrap: '计算题三大致命陷阱：① 题目同时给出两种反应物的数据却没说谁过量，考生忘记比较摩尔数而直接挑第一个算（必须先判别 limiting reactant！）；② 把液体的体积（如 10.0 cm³）直接当成 10.0 g 除以摩尔质量（漏乘密度 density g cm⁻³！）；③ 问“为什么酯化产率不到 100%”时只答“操作失误 human error”——HKEAA 绝不给“human error”分数，必须答反应可逆（reaction is reversible）、发生副反应（side reactions occur）或分离提纯损耗（loss of product during separation and purification）！',
      relations: [
        {
          type: 'buildsOn',
          targetUnitId: 'u27',
          label: '对比 Unit 27：烷烃自由基取代反应（Free radical substitution of alkanes）',
          why: '解释了为什么 Unit 27 的烷烃卤代反应在合成上产率低、副产物多，不如烯烃加成或醇取代实用。'
        },
        {
          type: 'leadsTo',
          targetUnitId: 'u32',
          label: '衔接本单元 32.4：实验室分离与提纯操作（Separation & purification）',
          why: '正因为反应不完全且伴随副产物，反应结束后才需要通过分液、洗涤、干燥与再蒸馏提纯产物。'
        }
      ],
      questions: [
        {
          id: 'u32-s2-q1',
          level: 1,
          levelTag: 'Level 1 · 中文直觉破冰',
          type: 'mcq',
          stem: '在实验室制备溴乙烷（bromoethane, CH₃CH₂Br）时，为什么选用“乙烯与溴化氢加成（ethene + HBr）”远优于“乙烷与溴在紫外光下反应（ethane + Br₂ under UV light）”？',
          cueWords: [],
          options: [
            'A. 乙烷与溴在紫外光（UV light）下完全不发生反应',
            'B. 乙烷的自由基取代反应（free radical substitution）会生成一溴代及多溴代烷烃的混合物，导致目标产物百分产率（percentage yield）极低且难以分离',
            'C. 乙烯与溴化氢反应属于可逆反应（reversible reaction），而乙烷与溴不可逆',
            'D. 溴乙烷是固体，只能通过加成反应沉淀出来'
          ],
          answerIndex: 1,
          hint: '回想自由基取代反应（free radical substitution）的链增长阶段：生成的 CH₃CH₂Br 会继续被 Br• 自由基进攻变成二溴、三溴乙烷！',
          explanation: '乙烷与 Br₂ 在 UV light 下发生自由基取代反应（free radical substitution），无法精准停在一取代阶段，会产生一溴乙烷与多种多溴代乙烷的混合物（mixture of mono- and poly-brominated ethanes），使目标产物的百分产率（percentage yield）很低，且需复杂分馏才能分离。而乙烯与 HBr 发生加成反应只生成唯一产物溴乙烷，原子经济性（atom economy）高达 100%。',
          commonMistake: '误选 A：乙烷在 UV light 下能与 Br₂ 发生取代反应，只是选择性极差、副产物太多。'
        },
        {
          id: 'u32-s2-q2',
          level: 2,
          levelTag: 'Level 2 · 中英过渡实战',
          type: 'mcq',
          stem: 'In an esterification experiment, 9.20 g of ethanol (molar mass = 46.0 g mol⁻¹) is heated under reflux with 15.0 g of ethanoic acid (molar mass = 60.0 g mol⁻¹) and a few drops of concentrated H₂SO₄. After purification, 11.0 g of pure ethyl ethanoate (molar mass = 88.0 g mol⁻¹) is obtained. What is the percentage yield of ethyl ethanoate?',
          cueWords: [
            { phrase: '9.20 g of ethanol', zh: '9.20 g 乙醇', concept: '求乙醇摩尔数：9.20 / 46.0 = 0.200 mol' },
            { phrase: '15.0 g of ethanoic acid', zh: '15.0 g 乙酸', concept: '求乙酸摩尔数：15.0 / 60.0 = 0.250 mol，必须比大小找限量反应物！' },
            { phrase: '11.0 g of pure ethyl ethanoate', zh: '11.0 g 纯乙酸乙酯', concept: '实际产量 (actual yield) = 11.0 g' },
            { phrase: 'percentage yield', zh: '百分产率', concept: '(实际产量 / 理论产量) × 100%' }
          ],
          options: [
            'A. 50.0%',
            'B. 62.5%',
            'C. 73.3%',
            'D. 80.0%'
          ],
          answerIndex: 1,
          hint: '先算两者的摩尔数：n(ethanol) = 9.20 / 46.0 = 0.200 mol，n(ethanoic acid) = 15.0 / 60.0 = 0.250 mol。1:1 反应谁先用完？',
          explanation: 'n(ethanol) = 9.20 ÷ 46.0 = 0.200 mol；n(ethanoic acid) = 15.0 ÷ 60.0 = 0.250 mol。酯化反应计量比为 1 : 1，由于 0.200 mol < 0.250 mol，乙醇是限量反应物（limiting reactant）。理论生成乙酸乙酯 0.200 mol，理论产量（theoretical yield）= 0.200 × 88.0 = 17.6 g。百分产率（percentage yield）= (11.0 ÷ 17.6) × 100% = 62.5%。',
          commonMistake: '错选 A (50.0%)：误用过量的乙酸（0.250 mol × 88.0 = 22.0 g）做分母算得 11.0 ÷ 22.0 = 50.0%！'
        },
        {
          id: 'u32-s2-q3',
          level: 3,
          levelTag: 'Level 3 · HKDSE 全英文实战',
          type: 'structured',
          stem: 'In a laboratory preparation, 7.40 cm³ of butan-1-ol (density = 0.810 g cm⁻³; molar mass = 74.0 g mol⁻¹) was heated under reflux with excess acidified sodium dichromate solution. After separation and purification, 4.62 g of pure butanoic acid (molar mass = 88.0 g mol⁻¹) was collected. (a) Calculate the percentage yield of butanoic acid. (b) Suggest TWO reasons why the percentage yield was less than 100%. (4 marks)',
          cueWords: [
            { phrase: '7.40 cm³ of butan-1-ol', zh: '7.40 cm³ 的 1-丁醇', concept: '给出液体体积，第一步必须乘密度换算成质量！' },
            { phrase: 'density = 0.810 g cm⁻³', zh: '密度 0.810 g cm⁻³', concept: 'mass = 7.40 × 0.810 = 5.994 g' },
            { phrase: 'excess acidified sodium dichromate solution', zh: '过量酸化重铬酸钠溶液', concept: '氧化剂过量，说明 1-丁醇即为限量反应物' },
            { phrase: 'percentage yield', zh: '百分产率', concept: 'actual yield / theoretical yield × 100%' }
          ],
          hint: '(a) 先用 7.40 × 0.810 算出 1-丁醇质量（5.994 g），除以 74.0 得摩尔数（0.0810 mol），再乘 88.0 得丁酸理论产量（7.128 g）；(b) 思考副反应（如停留在丁醛挥发／酯化副反应）及分离提纯过程的物料损失。',
          explanation: '(a) 1-丁醇质量 = 7.40 cm³ × 0.810 g cm⁻³ = 5.994 g；n(butan-1-ol) = 5.994 ÷ 74.0 = 0.0810 mol。1 mol 1-丁醇氧化生成 1 mol 丁酸（butanoic acid），故理论产量（theoretical yield）= 0.0810 × 88.0 = 7.128 g。百分产率 = (4.62 ÷ 7.128) × 100% = 64.8%。(b) 产率低于 100% 的原因包括：部分中间产物丁醛（butanal）在完全氧化前挥发或发生副反应（如未反应的 1-丁醇与生成的丁酸发生酯化反应生成丁酸丁酯 butyl butanoate），以及在分液、干燥和再蒸馏提纯过程中损失部分丁酸。',
          markingScheme: [
            '1M: Correct number of moles of butan-1-ol = (7.40 × 0.810) / 74.0 = 0.0810 mol (and theoretical yield of butanoic acid = 0.0810 × 88.0 = 7.13 g)',
            '1M: Percentage yield = (4.62 / 7.128) × 100% = 64.8%',
            '1M: Reason 1 — Incomplete oxidation / side reactions occurred (e.g. some butanal escaped before further oxidation, or esterification occurred between butan-1-ol and butanoic acid)',
            '1M: Reason 2 — Some butanoic acid was lost during liquid-liquid extraction, drying and redistillation / purification'
          ],
          commonMistake: '漏乘密度直接算 7.40 ÷ 74.0 = 0.100 mol，导致理论产量错算成 8.80 g、产率错算成 52.5%！'
        }
      ]
    },

    // ------------------------------------------------------------------------
    // u32-s3: 32.4 (Part 1) Lab Preparation & Purification of Liquid Products
    // ------------------------------------------------------------------------
    {
      id: 'u32-s3',
      code: '32.4 (Part 1)',
      titleEn: 'Laboratory preparation, separation & purification of liquid organic products',
      titleZh: '液态有机产物的实验室制备、分液洗涤、无水干燥与再蒸馏提纯',
      analogy: {
        icon: '🧪',
        title: '提纯液态有机物就像“淘米洗菜四部曲”：粗筛 → 苏打水去酸 → 吸水珠除潮 → 精准沸点接纯品！',
        body: '刚反应完的烧瓶里是一锅“大杂烩”（目标有机液体 + 水 + 残留强酸催化剂 + 未反应的原料）。怎么把它变成亮晶晶的纯净物？第一步粗蒸馏（distillation）先把挥发性有机物从不挥发无机物里蒸出来；第二步倒进分液漏斗（separating funnel）加碳酸钠溶液（Na₂CO₃(aq)）摇晃洗掉酸味（记得像摇完汽水一样定时拧开活塞放掉 CO₂ 气！）；第三步倒进无水硫酸钠（anhydrous Na₂SO₄）吸干残留水珠，直到液体从“雾蒙蒙浑浊（cloudy）”变成“透亮清澈（clear）”；第四步过滤掉吸水剂后做再蒸馏（redistillation），只接目标沸点窄区间那一小段馏分！'
      },
      coreExplanation: `
        <h4>1. 液态有机产物分离提纯五步黄金流程（5-Stage Liquid Purification SOP）</h4>
        <p>在《Mastering Chemistry》第 32.4 节中，制备液态有机物——如<span class="term">乙酸乙酯 <span class="en">ethyl ethanoate</span></span>、<span class="term">1-溴丁烷 <span class="en">1-bromobutane</span></span>及<span class="term">2-氯-2-甲基丙烷 <span class="en">2-chloro-2-methylpropane</span></span>——全都遵循同一套严谨的实验逻辑：</p>
        <ul class="chem-list">
          <li><strong>阶段 ① 反应阶段（Reaction stage）：</strong>大多数慢速有机反应需加<span class="term">防暴沸颗粒 <span class="en">anti-bumping granules</span></span>并<span class="term">回流加热 <span class="en">heating under reflux</span></span>（冷凝管下进水上出水、顶部敞口）。特例：叔醇<span class="term">2-甲基-2-丙醇 <span class="en">methylpropan-2-ol</span></span>活性极高，直接与浓盐酸 <code>conc. HCl(aq)</code> 在室温下于<span class="term">分液漏斗 <span class="en">separating funnel</span></span>中摇晃 15–20 分钟即可生成<span class="term">2-氯-2-甲基丙烷 <span class="en">2-chloro-2-methylpropane</span></span>！</li>
          <li><strong>阶段 ② 粗分离（Crude separation — Distillation / Liquid-liquid extraction）：</strong>通过<span class="term">蒸馏 <span class="en">distillation</span></span>将挥发性粗产物从高沸点／不挥发无机酸盐中蒸出，或倒入<span class="term">分液漏斗 <span class="en">separating funnel</span></span>静置分层，弃去水层（aqueous layer）。</li>
          <li><strong>阶段 ③ 碱液洗涤除酸（Washing with Na<sub>2</sub>CO<sub>3</sub>(aq) / NaHCO<sub>3</sub>(aq)）：</strong>向分液漏斗中的有机层加入<span class="term">碳酸钠溶液 <span class="en">sodium carbonate solution, Na₂CO₃(aq)</span></span>或<span class="term">碳酸氢钠溶液 <span class="en">sodium hydrogencarbonate solution, NaHCO₃(aq)</span></span>摇晃，将残留的酸性杂质（如未反应的乙酸 <code>CH<sub>3</sub>COOH</code>、浓硫酸或盐酸）中和转化为水溶性钠盐进入水层！<br>
          <span style="color:#dc2626;font-weight:700;">★ 安全必考动作：</span>酸与碳酸盐反应产生大量 <code>CO<sub>2</sub></code> 气体！每摇晃几下，必须将漏斗倒置并<strong>定时打开活塞释放内部气压（open the tap/stopcock frequently to release CO<sub>2</sub> gas pressure）</strong>，防止塞子飞脱喷溅！（注：制备乙酸乙酯时，课本有时还会加一步饱和 <code>CaCl<sub>2</sub>(aq)</code> 洗涤以除去残留未反应的乙醇 <code>ethanol</code>。）</li>
          <li><strong>阶段 ④ 无水干燥剂除水（Drying with an anhydrous drying agent）：</strong>分液弃去水层后，将有机层从分液漏斗<strong>上口倒出</strong>至干燥锥形瓶中，加入固体<span class="term">无水硫酸钠 <span class="en">anhydrous Na₂SO₄</span></span>、<span class="term">无水硫酸镁 <span class="en">anhydrous MgSO₄</span></span>或<span class="term">无水氯化钙 <span class="en">anhydrous CaCl₂</span></span>摇晃静置。<br>
          <span style="color:#0f766e;font-weight:700;">★ 干燥完成标志：</span>有机液体由<strong>浑浊变为清澈透明（turns from cloudy to clear）</strong>！随后必须在再蒸馏<strong>之前</strong>用过滤（filtration）或倾析（decantation）除去吸水后的固体干燥剂！（提醒：<code>anhydrous CaCl<sub>2</sub></code> 会与部分醇如乙醇及胺络合，因此干燥醇类时不可用 <code>CaCl<sub>2</sub></code>，而 <code>anhydrous Na<sub>2</sub>SO<sub>4</sub></code> 或 <code>MgSO<sub>4</sub></code> 是万能安全干燥剂。）</li>
          <li><strong>阶段 ⑤ 再蒸馏提纯（Final redistillation）：</strong>加热已滤除干燥剂的干燥有机液体进行<span class="term">再蒸馏 <span class="en">redistillation</span></span>，准确收集目标产物标准沸点附近的<strong>窄沸程馏分（collect the fraction boiling within a narrow temperature range around its boiling point）</strong>！</li>
        </ul>

        <h4>2. 课本三大液态有机物制备个案对比表</h4>
        <table class="chem-table">
          <thead>
            <tr>
              <th>目标液态产物</th>
              <th>密度（与水 1.0 g cm<sup>−3</sup> 比较）</th>
              <th>分液漏斗位置</th>
              <th>反应方式与关键提纯沸程</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><span class="term">乙酸乙酯 <span class="en">ethyl ethanoate</span></span><br><code>CH<sub>3</sub>COOCH<sub>2</sub>CH<sub>3</sub></code></td>
              <td><code>0.90 g cm<sup>−3</sup></code>（比水轻）</td>
              <td><strong>上层（Upper layer）</strong></td>
              <td>乙酸 + 乙醇 + 浓 H<sub>2</sub>SO<sub>4</sub> 回流加热 → 粗蒸馏 → <code>Na<sub>2</sub>CO<sub>3</sub>(aq)</code> 洗酸（+ <code>CaCl<sub>2</sub>(aq)</code> 除乙醇）→ 无水 <code>CaCl<sub>2</sub></code> 干燥 → 再蒸馏收集 <code>74–79°C</code>（沸点 <code>77°C</code>）</td>
            </tr>
            <tr>
              <td><span class="term">2-氯-2-甲基丙烷 <span class="en">2-chloro-2-methylpropane</span></span><br><code>(CH<sub>3</sub>)<sub>3</sub>CCl</code></td>
              <td><code>0.85 g cm<sup>−3</sup></code>（比水轻）</td>
              <td><strong>上层（Upper layer）</strong></td>
              <td><code>(CH<sub>3</sub>)<sub>3</sub>COH</code> + 浓 <code>HCl(aq)</code> 室温分液漏斗摇晃 → 弃下层酸水 → <code>NaHCO<sub>3</sub>(aq)</code> 洗酸 → 无水 <code>Na<sub>2</sub>SO<sub>4</sub></code> 干燥 → 再蒸馏收集 <code>50–52°C</code>（沸点 <code>51°C</code>）</td>
            </tr>
            <tr>
              <td><span class="term">1-溴丁烷 <span class="en">1-bromobutane</span></span><br><code>CH<sub>3</sub>CH<sub>2</sub>CH<sub>2</sub>CH<sub>2</sub>Br</code></td>
              <td><code>1.27 g cm<sup>−3</sup></code>（<strong>比水重！</strong>）</td>
              <td><span style="color:#dc2626;font-weight:700;">下层（Lower layer！）</span></td>
              <td>1-丁醇 + <code>NaBr</code> + 浓 <code>H<sub>2</sub>SO<sub>4</sub></code>（原位生成 HBr）回流加热 → 粗蒸馏 → 分液漏斗中<strong>下层才是有机层</strong>！→ <code>NaHCO<sub>3</sub>(aq)</code> 洗酸 → 无水 <code>CaCl<sub>2</sub></code>／<code>Na<sub>2</sub>SO<sub>4</sub></code> 干燥 → 再蒸馏收集 <code>100–103°C</code></td>
            </tr>
          </tbody>
        </table>

        <div class="callout callout-tip">
          <strong>💡 实验神技：忘记密度时，如何当场分辨分液漏斗哪一层是水层（aqueous layer）？</strong><br>
          采用<strong>滴水法（Water-drop test）</strong>：向分液漏斗中滴入几滴去离子水（deionized water），观察水珠穿过液面后的去向——水珠能<strong>溶入并合并进去的那一层就是水层（aqueous layer）</strong>，水珠穿过或不相溶的那一层就是有机层（organic layer）！
        </div>
      `,
      svgId: 'svg-separating-funnel-purification',
      svgCaption: '图解：分液漏斗（Separating funnel）分层判断与液态有机产物提纯四步标准流程（粗蒸 → 碳酸钠洗酸放气 → 无水干燥剂除水至清澈 → 再蒸馏收集窄沸程馏分）',
      textbookFormulas: [
        {
          label: '碳酸钠／碳酸氢钠洗涤除酸反应（Neutralization of acidic impurities during washing）',
          equationHtml: `2CH<sub>3</sub>COOH(aq) + Na<sub>2</sub>CO<sub>3</sub>(aq) <span class="chem-arrow"><span class="cond-top"></span><span class="arr-main">⟶</span><span class="cond-bot"></span></span> 2CH<sub>3</sub>COO<sup>−</sup>Na<sup>+</sup>(aq) + H<sub>2</sub>O(l) + CO<sub>2</sub>(g)`,
          note: '生成水溶性钠盐随水层排走；产生的 CO₂(g) 会使分液漏斗内压剧增，必须定时开活塞放气！'
        },
        {
          label: '室温制备叔氯代烷（Preparation of 2-chloro-2-methylpropane at room temperature）',
          equationHtml: `(CH<sub>3</sub>)<sub>3</sub>COH(l) + HCl(aq) <span class="chem-arrow"><span class="cond-top">shake at room temp.</span><span class="arr-main">⟶</span><span class="cond-bot">conc. HCl</span></span> (CH<sub>3</sub>)<sub>3</sub>CCl(l) + H<sub>2</sub>O(l)`,
          note: '叔醇反应极快，直接在分液漏斗中摇晃即可完成反应并随后分层洗涤'
        },
        {
          label: '原位生成 HBr 制备 1-溴丁烷（In situ generation of HBr for 1-bromobutane）',
          equationHtml: `CH<sub>3</sub>(CH<sub>2</sub>)<sub>3</sub>OH + HBr <span class="chem-arrow"><span class="cond-top">NaBr + conc. H<sub>2</sub>SO<sub>4</sub></span><span class="arr-main">⟶</span><span class="cond-bot">heat under reflux</span></span> CH<sub>3</sub>(CH<sub>2</sub>)<sub>3</sub>Br + H<sub>2</sub>O`,
          note: '注意产物 1-溴丁烷密度为 1.27 g cm⁻³（大于水），在分液漏斗中位于下层！'
        }
      ],
      examTrap: '三大实验细节必考坑：① 误以为“有机层永远在分液漏斗上层”——错！大多数溴代烷、碘代烷及多氯代烷（如 1-bromobutane、CHCl₃、CCl₄）密度大于 1.0 g cm⁻³，沉在下层！② 洗酸时误用强碱 NaOH(aq) 洗涤酯或卤代烷——强碱 NaOH 会促使酯或卤代烷水解损耗，必须用弱碱性的 Na₂CO₃(aq) 或 NaHCO₃(aq)！③ 忘记在再蒸馏（redistillation）前先过滤掉吸水后的干燥剂固体——若连同水合硫酸钠一起加热，结晶水会受热重新释放回有机液体中，前功尽弃！',
      relations: [
        {
          type: 'buildsOn',
          targetUnitId: 'u29',
          label: '联系 Unit 29：水溶性与分子间作用力（Water solubility & intermolecular forces）',
          why: '分液漏斗能够把酯／卤代烷与水及无机钠盐分层，根本原因是酯和卤代烷极性弱、不溶于水，而离子盐易溶于极性水层。'
        },
        {
          type: 'compareWith',
          targetUnitId: 'u32',
          label: '对比本单元 32.4 (Part 2)：固态有机物的重结晶提纯（Recrystallization of solids）',
          why: '液态产物靠“分液 + 干燥剂 + 再蒸馏”，固态产物则靠“减压过滤 + 重结晶 + 熔点测定”。'
        }
      ],
      questions: [
        {
          id: 'u32-s3-q1',
          level: 1,
          levelTag: 'Level 1 · 中文直觉破冰',
          type: 'mcq',
          stem: '在提纯粗乙酸乙酯（crude ethyl ethanoate）的实验中，将馏出液倒入分液漏斗（separating funnel）并加入碳酸钠溶液（Na₂CO₃(aq)）摇晃时，为什么必须每隔几秒将漏斗倒置并打开活塞（open the tap）？',
          cueWords: [],
          options: [
            'A. 让空气中的氧气进入漏斗帮助氧化杂质',
            'B. 释放酸与碳酸钠反应生成的二氧化碳（CO₂）气体，防止漏斗内气压过高冲开塞子',
            'C. 提前把上层的乙酸乙酯从活塞排走',
            'D. 降低乙酸乙酯的沸点以便室温蒸发'
          ],
          answerIndex: 1,
          hint: '残留的乙酸（ethanoic acid）和硫酸与 Na₂CO₃(aq) 反应会冒出什么气体？密封摇晃会发生什么危险？',
          explanation: '粗产物中残留的酸性杂质（如未反应的乙酸和微量硫酸）会与 Na₂CO₃(aq) 反应生成大量二氧化碳气体（CO₂ gas），再加上挥发性有机蒸气，会使密封分液漏斗内部气压急剧升高。定时倒置并打开活塞是为了释放过高的气体压力（release excess pressure built up by CO₂ gas），确保实验安全。',
          commonMistake: '操作顺序错误：若不倒置漏斗就直接打开下端活塞，下层液体会直接漏出而不是排走气体！'
        },
        {
          id: 'u32-s3-q2',
          level: 2,
          levelTag: 'Level 2 · 中英过渡实战',
          type: 'mcq',
          stem: 'During the laboratory preparation of 1-bromobutane (density = 1.27 g cm⁻³; boiling point = 102°C), the crude distillate is washed with aqueous sodium hydrogencarbonate (density ≈ 1.04 g cm⁻³) in a separating funnel and then dried over anhydrous sodium sulphate. Which of the following statements is INCORRECT?',
          cueWords: [
            { phrase: '1-bromobutane (density = 1.27 g cm⁻³', zh: '1-溴丁烷（密度 1.27 g cm⁻³）', concept: '密度大于水溶液 (1.04 g cm⁻³)，沉在下层！' },
            { phrase: 'aqueous sodium hydrogencarbonate', zh: '碳酸氢钠水溶液', concept: '密度较小，浮在上层，用于中和除酸' },
            { phrase: 'anhydrous sodium sulphate', zh: '无水硫酸钠', concept: '固体干燥剂，吸水使有机层由浑浊变清澈' }
          ],
          options: [
            'A. In the separating funnel, the lower layer is the organic layer containing 1-bromobutane.',
            'B. Aqueous sodium hydrogencarbonate removes acidic impurities such as HBr and SO₂.',
            'C. When drying is complete, the organic liquid changes from cloudy to clear.',
            'D. The mixture of 1-bromobutane and hydrated sodium sulphate should be heated directly for redistillation without filtration.'
          ],
          answerIndex: 3,
          hint: '吸水后的水合硫酸钠（Na₂SO₄·nH₂O）如果留在蒸馏烧瓶里一起加热，受热分解会发生什么？',
          explanation: 'D 项错误！在再蒸馏（redistillation）之前，必须先通过过滤（filtration）或倾析（decantation）除去吸水后的固体干燥剂；否则受热时水合盐（hydrated sodium sulphate）会重新释放出结晶水（water of crystallization），再次污染有机液体！注意 A 项完全正确：因为 1-溴丁烷密度（1.27 g cm⁻³）大于水溶液（1.04 g cm⁻³），有机层位于下层。',
          commonMistake: '不少同学看到 A 项写“下层是有机层”就条件反射选 A，忽略了题目明确给出的密度数据 1.27 g cm⁻³ > 1.04 g cm⁻³！'
        },
        {
          id: 'u32-s3-q3',
          level: 3,
          levelTag: 'Level 3 · HKDSE 全英文实战',
          type: 'structured',
          stem: '2-Chloro-2-methylpropane (boiling point = 51°C; density = 0.85 g cm⁻³) can be prepared by shaking methylpropan-2-ol with concentrated hydrochloric acid in a separating funnel. After discarding the lower aqueous layer, the crude organic product is washed with NaHCO₃(aq), dried over anhydrous Na₂SO₄, and finally purified by redistillation. (a) State the purpose of washing with NaHCO₃(aq). (b) State the observable change that indicates enough anhydrous Na₂SO₄ has been added to dry the liquid. (c) Explain why the drying agent must be filtered off before redistillation, and state the temperature range of the fraction to be collected. (4 marks)',
          cueWords: [
            { phrase: 'boiling point = 51°C', zh: '沸点 51°C', concept: '再蒸馏时应收集约 50–52°C 的窄沸程馏分' },
            { phrase: 'washed with NaHCO₃(aq)', zh: '用碳酸氢钠溶液洗涤', concept: '中和并除去残留盐酸 HCl' },
            { phrase: 'dried over anhydrous Na₂SO₄', zh: '用无水硫酸钠干燥', concept: '吸收微量水分，液体由浑浊变清澈' },
            { phrase: 'filtered off before redistillation', zh: '再蒸馏前先过滤除去', concept: '防止水合盐受热释放结晶水重新弄湿产物' }
          ],
          hint: '紧扣液态有机物提纯三大必考采分句：(a) 除去残留盐酸；(b) 液体由浑浊变清澈（from cloudy to clear）；(c) 加热会使水合盐释放水分 + 围绕 51°C 窄区间收集馏分。',
          explanation: '(a) NaHCO₃(aq) 用于中和并除去粗有机层中残留的氯化氢／盐酸（neutralize and remove unreacted HCl / acidic impurities）。(b) 微小水珠悬浮在有机液体中时呈浑浊状，被无水 Na₂SO₄ 完全吸收后，有机液体由浑浊变为清澈（changes from cloudy to clear）。(c) 若不过滤直接加热，吸水生成的水合硫酸钠受热会分解并释放出水分（hydrated sodium sulphate decomposes on heating to release water），使产物重新含水；再蒸馏应收集 50–52°C（或 49–53°C）窄沸程馏分。',
          markingScheme: [
            '1M: (a) To neutralize / remove unreacted hydrochloric acid (acidic impurities)',
            '1M: (b) The organic liquid changes from cloudy (turbid) to clear',
            '1M: (c) Upon heating during redistillation, the hydrated drying agent would release its water of crystallization back into the organic product',
            '1M: (c) Collect the fraction boiling within a narrow range around 51°C (accept 50–52°C or 49–53°C)'
          ],
          commonMistake: '在 (b) 答“固体干燥剂变蓝色”——注意无水硫酸钠（anhydrous Na₂SO₄）吸水前后都是白色固体，不会变色！正确现象是有机液体由浑浊变清澈（from cloudy to clear）。'
        }
      ]
    },

    // ------------------------------------------------------------------------
    // u32-s4: 32.4 (Part 2) Purifying Solid Organic Products: Recrystallization
    // ------------------------------------------------------------------------
    {
      id: 'u32-s4',
      code: '32.4 (Part 2)',
      titleEn: 'Isolating & purifying solid organic products: recrystallization & melting point',
      titleZh: '固态有机产物的分离与提纯：减压过滤、重结晶与熔点纯度检验',
      analogy: {
        icon: '❄️',
        title: '重结晶（Recrystallization）就像“热水沏浓冰糖再冰镇析晶”：沙子趁热滤走，杂味留在冷汤里！',
        body: '如果你有一包混了少量细沙（不溶性杂质）和少量食盐（可溶性杂质）的粗冰糖，怎么提纯？① 用刚好够用的最少量沸水把糖全化开（热水溶解度极大）；② 趁热过滤（hot filtration）把细沙拦在滤纸上；③ 让热糖水慢慢放凉再泡冰水浴——冰糖在冷水里溶解度骤降，哗啦啦析出纯净大晶体，而少量的食盐杂质还没达到饱和，乖乖留在冷母液（mother liquor）里；④ 上布氏漏斗（Buchner funnel）抽滤（suction filtration），用几滴冰水冲掉表面残液，晾干后测熔点（melting point）——熔点又准又窄（sharp），证明纯度满分！'
      },
      coreExplanation: `
        <h4>1. 固态有机产物的制备与粗分离：以苯甲酸（Benzoic Acid）为例</h4>
        <p>当目标有机物在室温下是<strong>固体（solid）</strong>时（例如《Mastering Chemistry》经典的<span class="term">苯甲酸 <span class="en">benzoic acid</span></span>，熔点 <code>122°C</code>，以及下一单元的<span class="term">阿司匹林 <span class="en">aspirin</span></span>），分离提纯方法与液体截然不同！以<span class="term">苯甲酸乙酯碱性水解制苯甲酸 <span class="en">alkaline hydrolysis of ethyl benzoate</span></span>为例：</p>
        <ul class="chem-list">
          <li><strong>Step 1（回流皂化）：</strong>将油状液体<span class="term">苯甲酸乙酯 <span class="en">ethyl benzoate, C₆H₅COOCH₂CH₃</span></span>与过量 <code>NaOH(aq)</code> <span class="term">回流加热 <span class="en">heat under reflux</span></span>，直至油层完全消失（生成易溶于水的<span class="term">苯甲酸钠 <span class="en">sodium benzoate, C₆H₅COO⁻Na⁺</span></span>与乙醇）。</li>
          <li><strong>Step 2（加酸沉淀粗晶体）：</strong>冷却后加入<strong>过量稀盐酸或浓盐酸 <code>HCl(aq)</code> 酸化（acidify with excess HCl(aq)）</strong>——由于游离的<span class="term">苯甲酸 <span class="en">benzoic acid, C₆H₅COOH</span></span>微溶于冷水，立刻析出大量白色固体结晶！</li>
          <li><strong>Step 3（减压过滤／抽滤）：</strong>使用<span class="term">布氏漏斗 <span class="en">Buchner funnel</span></span>配合<span class="term">吸滤瓶 <span class="en">Buchner flask / side-arm flask</span></span>连接水泵进行<span class="term">减压过滤 <span class="en">suction filtration / filtration under reduced pressure</span></span>。相比普通重力过滤（gravity filtration），减压过滤<strong>速度更快（much faster）且能更彻底抽干晶体表面的母液（leaves the solid much drier）</strong>！</li>
        </ul>

        <h4>2. 重结晶（Recrystallization）提纯固态有机物四步标准模板</h4>
        <p><strong>选溶剂核心原则（Choice of solvent）：</strong>目标固体产物必须在<strong>热溶剂中溶解度很大（very soluble in hot solvent）</strong>，而在<strong>冷溶剂中溶解度很小（sparingly soluble / nearly insoluble in cold solvent）</strong>（例如提纯苯甲酸直接选用<strong>水 water</strong>作溶剂！）。</p>
        <div class="struct-card">
          <pre class="struct-pre">Step 1 · 最少量热溶剂溶解：Dissolve the crude solid in the MINIMUM volume of hot solvent.
         （★ 为什么用最少量 minimum volume？防止冷却后过多目标产物留在滤液中导致产率大跌！）
Step 2 · 趁热过滤除不溶杂质：Perform hot filtration (if insoluble impurities are present)
         using a pre-heated funnel to prevent premature crystallization on the stem.
Step 3 · 缓慢冷却再冰浴结晶：Allow the hot filtrate to cool slowly at room temperature and then
         in an ice-water bath — pure crystals form while soluble impurities stay in solution.
Step 4 · 抽滤、冰溶剂洗涤与干燥：Filter off the crystals by suction filtration, wash with a
         SMALL amount of ice-cold solvent, and dry in a desiccator (or oven well below m.p.).</pre>
          <div class="struct-cap">HKEAA 必背 4 步英文采分关键词：minimum volume of hot solvent → cool to crystallize → suction filtration → wash with small amount of ice-cold solvent &amp; dry</div>
        </div>

        <h4>3. 如何检验固体有机物的纯度？—— 测定熔点（Melting Point Determination）</h4>
        <table class="chem-table">
          <thead>
            <tr>
              <th>样品状态</th>
              <th>熔点高度（与文献标准值比较）</th>
              <th>熔程宽度（Melting point range）</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>纯净固体（Pure solid）</strong><br>（如纯苯甲酸 pure benzoic acid）</td>
              <td>与标准数据手册完全吻合（<code>122°C</code>）</td>
              <td><strong>熔点敏锐、熔程极窄（Sharp melting point，在 1–2°C 内完全熔化）</strong></td>
            </tr>
            <tr>
              <td><strong>含杂质粗品（Impure / Crude solid）</strong></td>
              <td><strong>熔点偏低（Lower melting point，如 114°C 开始熔化）</strong></td>
              <td><strong>熔程变宽（Melts over a wide temperature range，如 114–119°C）</strong></td>
            </tr>
          </tbody>
        </table>

        <div class="callout callout-warn">
          <strong>⚠️ 回流加热（Reflux）vs 蒸馏（Distillation）装置核心温故（见下图）：</strong><br>
          无论制备液体还是固体产物，只要反应步骤慢且有挥发性反应物，第一步都是<strong>回流加热（heating under reflux，冷凝管竖直且顶部绝对敞口 open top！）</strong>使蒸气冷凝流回烧瓶充分反应；只有在伯醇制醛（需立刻移走低沸点醛防过度氧化）或反应结束后分离挥发性液体产物时，才改搭<strong>蒸馏装置（distillation，温度计水银球对准蒸馏头支管口 level with side-arm！）</strong>。
        </div>
      `,
      svgId: 'svg-reflux-vs-distillation',
      svgCaption: '图解：有机合成两大核心加热装置对比——竖直敞口回流加热（Heating under reflux）确保充分反应 vs 侧支管蒸馏（Distillation）分离挥发性产物或截留醛类',
      textbookFormulas: [
        {
          label: '苯甲酸乙酯碱性水解（Step 1: Alkaline hydrolysis / saponification of ethyl benzoate）',
          equationHtml: `C<sub>6</sub>H<sub>5</sub>COOCH<sub>2</sub>CH<sub>3</sub>(l) + NaOH(aq) <span class="chem-arrow"><span class="cond-top">heat under reflux</span><span class="arr-main">⟶</span><span class="cond-bot"></span></span> C<sub>6</sub>H<sub>5</sub>COO<sup>−</sup>Na<sup>+</sup>(aq) + CH<sub>3</sub>CH<sub>2</sub>OH(aq)`,
          note: '单向箭头 ⟶！油状酯层完全溶解变成均一水溶液时标志着水解完成'
        },
        {
          label: '加盐酸酸化析出固态苯甲酸（Step 2: Acidification to precipitate benzoic acid）',
          equationHtml: `C<sub>6</sub>H<sub>5</sub>COO<sup>−</sup>(aq) + H<sup>+</sup>(aq) <span class="chem-arrow"><span class="cond-top">excess HCl(aq)</span><span class="arr-main">⟶</span><span class="cond-bot">cool</span></span> C<sub>6</sub>H<sub>5</sub>COOH(s)`,
          note: '苯甲酸在冷水中溶解度极低，由离子态转回分子态即析出白色固体沉淀'
        }
      ],
      examTrap: '重结晶（recrystallization）三大高频扣分点：① 第一步漏写“最少量（minimum volume / amount）”热溶剂——若加入过多热水，冷却后大量苯甲酸仍溶解在水中析不出来，产率暴跌！② 第四步洗涤晶体时写“用大量水洗”或“用热水洗”——必须写“用少量冰冷溶剂洗涤（wash with a small amount of ice-cold water/solvent）”，否则辛苦析出的晶体又被洗溶流失了！③ 碱性水解制羧酸忘记第二步加 H⁺(aq) / HCl(aq) 酸化——不加酸得到的只是溶于水的羧酸钠盐（sodium carboxylate），根本滤不出固体羧酸！',
      relations: [
        {
          type: 'buildsOn',
          targetUnitId: 'u31',
          label: '承接 Unit 31：酯的碱性水解（Alkaline hydrolysis of esters）',
          why: '酯与 NaOH(aq) 回流加热只生成羧酸盐，必须补加过量强酸 H⁺(aq) 才能游离出固态羧酸沉淀。'
        },
        {
          type: 'leadsTo',
          targetUnitId: 'u33',
          label: '通向 Unit 33：阿司匹林药片的合成提纯与熔点检验（Purification of aspirin）',
          why: '实验室制备固态药物阿司匹林（aspirin）同样采用减压过滤、重结晶提纯及测定熔点检验纯度。'
        }
      ],
      questions: [
        {
          id: 'u32-s4-q1',
          level: 1,
          levelTag: 'Level 1 · 中文直觉破冰',
          type: 'mcq',
          stem: '在利用热水对粗苯甲酸（crude benzoic acid）进行重结晶（recrystallization）提纯时，为什么第一步强调要用“最少量的沸水（minimum volume of boiling water）”来溶解粗产品？',
          cueWords: [],
          options: [
            'A. 因为水与苯甲酸会发生剧烈爆炸反应',
            'B. 防止冷却结晶时有过多苯甲酸仍溶解在冷滤液（mother liquor）中，从而尽量减少产品损失、提高回收产率',
            'C. 让不溶性杂质也全部溶解进水里',
            'D. 降低纯苯甲酸晶体的熔点（melting point）'
          ],
          answerIndex: 1,
          hint: '即使在冷水里，每 100 cm³ 水依然能溶解少量苯甲酸。如果一开始倒了太多水，冷却后留在水里的苯甲酸就会怎样？',
          explanation: '重结晶第一步使用最少量热溶剂（minimum volume of hot solvent），是为了刚好在高温下形成近饱和溶液；这样当溶液冷却时，绝大部分苯甲酸都能析出结晶，避免因溶剂过多导致大量目标产物残留在冷母液（filtrate / mother liquor）中而降低回收产率（yield）。',
          commonMistake: '洗涤晶体时同样要注意体积与温度：必须用少量冰冷水（small amount of ice-cold water）洗涤，绝不能用热水冲洗晶体！'
        },
        {
          id: 'u32-s4-q2',
          level: 2,
          levelTag: 'Level 2 · 中英过渡实战',
          type: 'mcq',
          stem: 'Pure benzoic acid has a melting point of 122°C. A student prepared a sample of benzoic acid and determined its melting point before and after recrystallization. Which of the following pairs of melting point ranges best corresponds to the crude sample and the recrystallized pure sample?',
          cueWords: [
            { phrase: 'melting point of 122°C', zh: '标准熔点 122°C', concept: '纯品熔点敏锐且等于 122°C' },
            { phrase: 'crude sample', zh: '粗样品（含杂质）', concept: '杂质使熔点降低 (lowered) 且熔程变宽 (wider range)！' },
            { phrase: 'recrystallized pure sample', zh: '重结晶后的纯样品', concept: '熔程极窄（1°C 以内），紧贴 122°C' }
          ],
          options: [
            'A. Crude sample: 125–130°C; Recrystallized sample: 122–123°C',
            'B. Crude sample: 115–120°C; Recrystallized sample: 121.5–122.5°C',
            'C. Crude sample: 122°C; Recrystallized sample: 116–121°C',
            'D. Crude sample: 121.5–122.0°C; Recrystallized sample: 122–128°C'
          ],
          answerIndex: 1,
          hint: '记住固体纯度铁律：杂质会破坏晶格规则排列，令固体“更早熔化（熔点偏低）”且“拖泥带水（熔程变宽）”！',
          explanation: '含有杂质的粗固体（crude solid）熔点比纯品低（lower melting point）且熔化温度区间宽（wide melting range, 如 115–120°C）；经重结晶（recrystallization）提纯后的纯苯甲酸具有敏锐的窄熔点（sharp melting point, 121.5–122.5°C），与文献值 122°C 一致。故选 B。',
          commonMistake: '错选 A：误以为杂质会像升高水溶液沸点一样升高固体熔点——恰恰相反，杂质会使晶体熔点下降（melting point depression）！'
        },
        {
          id: 'u32-s4-q3',
          level: 3,
          levelTag: 'Level 3 · HKDSE 全英文实战',
          type: 'structured',
          stem: 'In an experiment to prepare solid benzoic acid, ethyl benzoate was heated under reflux with excess NaOH(aq) until the oily layer disappeared. After cooling, excess dilute HCl(aq) was added to precipitate crude benzoic acid, which was collected by suction filtration. (a) Explain why dilute HCl(aq) must be added after heating under reflux with NaOH(aq). (b) Outline how pure dry benzoic acid crystals can be obtained from the crude solid by recrystallization using water as the solvent. (4 marks)',
          cueWords: [
            { phrase: 'heated under reflux with excess NaOH(aq)', zh: '与过量 NaOH(aq) 回流加热', concept: '碱性水解只生成水溶性的苯甲酸钠 (sodium benzoate)，尚未得到游离羧酸' },
            { phrase: 'excess dilute HCl(aq) was added', zh: '加入过量稀盐酸', concept: '中和剩余 NaOH 并将 C₆H₅COO⁻(aq) 质子化转化为微溶的 C₆H₅COOH(s) 沉淀' },
            { phrase: 'recrystallization using water', zh: '用水作溶剂进行重结晶', concept: '按四步答齐：最少量热水溶解 → 趁热过滤（如有不溶物）并冷却结晶 → 减压过滤 → 少量冰水洗涤及干燥' }
          ],
          hint: '(a) 碱性水解产物是水溶性的苯甲酸根离子 C₆H₅COO⁻(aq)，加 H⁺(aq) 才能变回微溶的苯甲酸分子析出；(b) 写出重结晶标准 3–4 个关键动作词（minimum volume of hot water → cool to crystallize → filter under reduced pressure, wash with little ice-cold water and dry）。',
          explanation: '(a) 苯甲酸乙酯与 NaOH(aq) 回流加热生成的是易溶于水的苯甲酸钠（sodium benzoate, C₆H₅COO⁻Na⁺）；必须加入过量稀 HCl(aq) 中和剩余 NaOH 并将苯甲酸根离子转化为在冷水中微溶的苯甲酸分子（C₆H₅COOH），才能析出白色固体沉淀。(b) 用最少量沸水溶解粗苯甲酸（若有不溶杂质则趁热过滤），让热滤液缓慢冷却并在冰水浴中析出纯晶体，减压过滤收集晶体，用少量冰冷蒸馏水洗涤，最后置于干燥器（desiccator）或滤纸间吸干水分。',
          markingScheme: [
            '1M: (a) Alkaline hydrolysis produces water-soluble benzoate ions / sodium benzoate; adding excess HCl(aq) neutralizes excess NaOH and converts C₆H₅COO⁻(aq) into sparingly soluble benzoic acid (C₆H₅COOH(s)) precipitate',
            '1M: (b) Dissolve the crude benzoic acid in the minimum volume of hot / boiling water (and filter hot if insoluble impurities are present)',
            '1M: (b) Allow the hot solution / filtrate to cool slowly (and then in an ice-water bath) for pure benzoic acid crystals to form',
            '1M: (b) Filter off the crystals by suction filtration, wash with a small amount of ice-cold water, and dry in a desiccator (or between filter papers)'
          ],
          commonMistake: '在 (b) 漏掉 "minimum volume"（最少量）或漏掉洗涤干燥步骤，往往在 3 分的重结晶简答题中白白丢掉 1–2 分！'
        }
      ]
    }
  ],

  // ==========================================================================
  // UNIT 32 EXAM-STYLE LONG QUESTIONS (2 Comprehensive Multi-Part Questions)
  // ==========================================================================
  unitExamLongQuestions: [
    {
      id: 'u32-long-1',
      title: '综合长题 1：官能团移位多步合成与路线评估（Multi-step Synthesis & Route Evaluation）',
      totalMarks: 7,
      scenarioEn: 'A student plans to synthesize propanone (CH₃COCH₃) starting from propan-1-ol (CH₃CH₂CH₂OH) in a school laboratory. First, propan-1-ol is dehydrated to form alkene X, which is then converted into propanone in three further steps via haloalkane Y and alcohol Z. Another classmate suggests preparing haloalkane Y directly by reacting propane with bromine under UV light.',
      scenarioZhSummary: '一名学生计划在学校实验室以 1-丙醇（propan-1-ol, CH₃CH₂CH₂OH）为起始物合成丙酮（propanone, CH₃COCH₃）。首先将 1-丙醇脱水生成烯烃 X，再经卤代烷 Y 和醇 Z 共三步转化为丙酮。另一名同学提议直接用丙烷（propane）与溴（bromine）在紫外光（UV light）下反应来制备卤代烷 Y。',
      cueWords: [
        { phrase: 'synthesize propanone (CH₃COCH₃) starting from propan-1-ol', zh: '由 1-丙醇合成丙酮', concept: '1号位伯醇变2号位酮：经典四步官能团移位氧化路线' },
        { phrase: 'dehydrated to form alkene X', zh: '脱水生成烯烃 X', concept: 'X = propene (CH₃CH=CH₂)，条件为 Al₂O₃, heat 或 excess conc. H₂SO₄, 180°C' },
        { phrase: 'haloalkane Y and alcohol Z', zh: '经卤代烷 Y 和醇 Z', concept: 'Y = 2-bromopropane (CH₃CHBrCH₃)，Z = propan-2-ol (CH₃CH(OH)CH₃)' },
        { phrase: 'reacting propane with bromine under UV light', zh: '丙烷与溴在紫外光下反应', concept: '自由基取代反应产生一溴/多溴及 1-溴/2-溴位置异构体混合物，产率极低！' }
      ],
      subQuestions: [
        {
          part: '(a)',
          marks: 4,
          promptEn: 'Outline the four-step synthetic route from propan-1-ol to propanone. Show clearly the structures of X, Y and Z, and state the reagent(s) and conditions required for each step.',
          commandWord: { word: 'Outline', tip: 'Outline 合成路线题：用反应箭头串联每一步，中间体 X、Y、Z 必须画出简明结构式，每条箭头标齐试剂及加热／催化条件。' },
          hint: '按顺序写出 4 步：① Al₂O₃, heat 脱水得 CH₃CH=CH₂；② 加 HBr 得 CH₃CHBrCH₃；③ NaOH(aq), heat under reflux 得 CH₃CH(OH)CH₃；④ Cr₂O₇²⁻(aq)/H⁺(aq), heat under reflux 得 CH₃COCH₃。',
          markingScheme: [
            '1M: Step 1 — Al₂O₃, heat (or excess conc. H₂SO₄, 180°C); X is CH₃CH=CH₂',
            '1M: Step 2 — HBr (or HCl); Y is CH₃CHBrCH₃ (or CH₃CHClCH₃)',
            '1M: Step 3 — NaOH(aq), heat under reflux; Z is CH₃CH(OH)CH₃',
            '1M: Step 4 — Cr₂O₇²⁻(aq)/H⁺(aq) (or MnO₄⁻(aq)/H⁺(aq)), heat under reflux (forming CH₃COCH₃)'
          ],
          explanationZh: '每一步占 1 分（试剂条件 + 中间体结构绑定计分）。特别注意第 3 步卤代烷水解必须写齐 NaOH(aq) 及 heat under reflux，若错写成 NaOH in ethanol, heat 则会消去变回丙烯！'
        },
        {
          part: '(b)',
          marks: 1,
          promptEn: 'Explain why haloalkane Y is formed as the major product rather than its positional isomer when alkene X reacts with HBr.',
          commandWord: { word: 'Explain', tip: '点出马氏规则（Markovnikov\'s rule）的具体原子去向：H 加到含较多 H 的双键碳原子上。' },
          hint: '用英文完整表述 Markovnikov\'s rule：丙烯 C=C 中 C-1 连有 2 个 H，C-2 只连 1 个 H，HBr 的 H 加去哪里？',
          markingScheme: [
            '1M: According to Markovnikov\'s rule, the hydrogen atom of HBr attaches mainly to the carbon atom of the C=C double bond that already carries a greater number of hydrogen atoms (C-1), so the Br atom attaches to C-2'
          ],
          explanationZh: '考评局标准给分要求不能只甩出名词 "By Markovnikov\'s rule"，必须把规则内容写出来：H 原子连到原本拥有更多 H 原子的双键碳（C-1）上，故 Br 连到 C-2 生成 2-溴丙烷。'
        },
        {
          part: '(c)',
          marks: 2,
          promptEn: 'Explain why reacting propane with bromine under UV light is NOT a desirable method for preparing haloalkane Y.',
          commandWord: { word: 'Explain', tip: '先答产物复杂性（生成位置异构体及多溴代混合物），再扣回合成后果（目标物百分产率极低且难以分离）。' },
          hint: '丙烷自由基取代既分不清 C-1 和 C-2，又停不在一取代阶段！',
          markingScheme: [
            '1M: Free radical substitution produces a mixture of 1-bromopropane, 2-bromopropane and polybrominated propanes (multi-substituted products)',
            '1M: This results in a very low percentage yield of Y (2-bromopropane) and requires difficult / costly separation'
          ],
          explanationZh: '完整扣住“混合物（mixture of mono- and poly-substituted bromopropanes）”与“低百分产率／分离困难（low percentage yield / difficult to separate）”即可稳拿 2 分。'
        }
      ]
    },
    {
      id: 'u32-long-2',
      title: '综合长题 2：乙酸乙酯的实验室制备、分液提纯与百分产率计算（Preparation, Purification & Yield of Ethyl Ethanoate）',
      totalMarks: 8,
      scenarioEn: 'In an experiment to prepare ethyl ethanoate (boiling point = 77°C; density = 0.90 g cm⁻³; molar mass = 88.0 g mol⁻¹), 15.0 cm³ of ethanol (density = 0.789 g cm⁻³; molar mass = 46.0 g mol⁻¹), 12.0 cm³ of ethanoic acid (density = 1.05 g cm⁻³; molar mass = 60.0 g mol⁻¹), a few drops of concentrated sulphuric acid and anti-bumping granules were heated under reflux for 30 minutes. The reaction mixture was then distilled. The crude distillate was shaken with Na₂CO₃(aq) in a separating funnel, dried over anhydrous CaCl₂, and finally redistilled to give 11.1 g of pure ethyl ethanoate.',
      scenarioZhSummary: '在制备乙酸乙酯（沸点 77°C，密度 0.90 g cm⁻³，摩尔质量 88.0 g mol⁻¹）的实验中，将 15.0 cm³ 乙醇（密度 0.789 g cm⁻³，摩尔质量 46.0 g mol⁻¹）、12.0 cm³ 乙酸（密度 1.05 g cm⁻³，摩尔质量 60.0 g mol⁻¹）、数滴浓硫酸及防暴沸颗粒回流加热 30 分钟，随后蒸馏。粗馏出液在分液漏斗中用 Na₂CO₃(aq) 洗涤，经无水 CaCl₂ 干燥后再蒸馏，最终得到 11.1 g 纯乙酸乙酯。',
      cueWords: [
        { phrase: '15.0 cm³ of ethanol (density = 0.789 g cm⁻³', zh: '15.0 cm³ 乙醇（密度 0.789 g cm⁻³）', concept: '乙醇质量 = 11.835 g，摩尔数 = 0.2573 mol' },
        { phrase: '12.0 cm³ of ethanoic acid (density = 1.05 g cm⁻³', zh: '12.0 cm³ 乙酸（密度 1.05 g cm⁻³）', concept: '乙酸质量 = 12.6 g，摩尔数 = 0.210 mol < 0.2573 mol → 乙酸是限量反应物！' },
        { phrase: 'heated under reflux', zh: '回流加热', concept: '加快反应速率，同时冷凝挥发性反应物和产物防逃逸' },
        { phrase: 'shaken with Na₂CO₃(aq) in a separating funnel', zh: '在分液漏斗中与碳酸钠溶液摇晃', concept: '中和除酸，产生 CO₂ 必须定时打开活塞放气；乙酸乙酯密度 0.90 < 1 在上层' },
        { phrase: '11.1 g of pure ethyl ethanoate', zh: '11.1 g 纯乙酸乙酯', concept: '实际产量 (actual yield) = 11.1 g' }
      ],
      subQuestions: [
        {
          part: '(a)',
          marks: 1,
          promptEn: 'Write a chemical equation for the esterification reaction.',
          commandWord: { word: 'Write', tip: '酯化反应方程式铁律：必须写可逆符号 ⇌，且不能漏掉副产物 H₂O！' },
          hint: 'CH₃COOH + CH₃CH₂OH ⇌ CH₃COOCH₂CH₃ + H₂O（检查可逆箭头 ⇌！）。',
          markingScheme: [
            '1M: CH₃COOH(l) + CH₃CH₂OH(l) ⇌ CH₃COOCH₂CH₃(l) + H₂O(l) (must show reversible arrow ⇌; state symbols optional)'
          ],
          explanationZh: '在 HKDSE 评分标准中，酯化反应把可逆号 ⇌ 写成单向箭头 ⟶ 会直接扣掉这 1 分！'
        },
        {
          part: '(b)',
          marks: 2,
          promptEn: 'Explain why the reaction mixture was heated under reflux rather than in an open beaker, and state why the top of the reflux condenser must NOT be stoppered.',
          commandWord: { word: 'Explain / State', tip: '第一问答加速反应 + 冷凝挥发性有机物防损失；第二问答密闭加热气压升高会导致仪器炸裂。' },
          hint: '乙醇（78°C）和乙酸乙酯（77°C）都极易挥发；如果把冷凝管顶端塞死加热会发生什么事故？',
          markingScheme: [
            '1M: Heating speeds up the slow esterification reaction while the reflux condenser condenses volatile reactants/products (ethanol, ethanoic acid and ethyl ethanoate) back into the flask to prevent loss by evaporation',
            '1M: Stoppering a heated closed system causes pressure build-up inside the apparatus, which may blow off the stopper or cause an explosion / cracking of glassware'
          ],
          explanationZh: '回流加热的两大高频考法（为何回流 + 为何顶部不加塞）一次全覆盖。'
        },
        {
          part: '(c)',
          marks: 2,
          promptEn: 'State ONE safety precaution when shaking the crude distillate with Na₂CO₃(aq) in the separating funnel, and state whether the organic layer was the upper or lower layer after standing.',
          commandWord: { word: 'State', tip: '安全措施答定时开活塞释放 CO₂ 气压；上下层对比密度 0.90 g cm⁻³ < 1.0 g cm⁻³。' },
          hint: '酸遇碳酸钠冒 CO₂；乙酸乙酯密度 0.90 g cm⁻³ 比水溶液轻。',
          markingScheme: [
            '1M: Invert the separating funnel and open the tap / stopcock periodically to release pressure built up by CO₂ gas',
            '1M: Upper layer (since the density of ethyl ethanoate, 0.90 g cm⁻³, is lower than that of the aqueous solution)'
          ],
          explanationZh: '准确答出释放 CO₂ 气压（release pressure）及上层（upper layer）。'
        },
        {
          part: '(d)',
          marks: 3,
          promptEn: 'Calculate the percentage yield of ethyl ethanoate in this experiment.',
          commandWord: { word: 'Calculate', tip: '三步拿齐 3 分：① 算两种反应物摩尔数并指出限量反应物；② 算理论产量；③ 算百分产率（保留 3 位有效数字）。' },
          hint: '先乘密度！乙醇：15.0 × 0.789 ÷ 46.0 = 0.2573 mol；乙酸：12.0 × 1.05 ÷ 60.0 = 0.210 mol。这次是乙酸更少，乙酸才是限量反应物！',
          markingScheme: [
            '1M: Moles of ethanol = (15.0 × 0.789) / 46.0 = 0.257 mol; moles of ethanoic acid = (12.0 × 1.05) / 60.0 = 0.210 mol → ethanoic acid is the limiting reactant',
            '1M: Theoretical yield of ethyl ethanoate = 0.210 × 88.0 = 18.48 g',
            '1M: Percentage yield = (11.1 / 18.48) × 100% = 60.1%'
          ],
          explanationZh: '这道题故意让乙醇体积（15.0 cm³）大于乙酸体积（12.0 cm³），经密度换算后乙酸（0.210 mol）少于乙醇（0.257 mol），因此乙酸是限量反应物！理论产量 = 18.48 g，百分产率 = 60.1%。'
        }
      ]
    }
  ]
});

// ============================================================================
// UNIT 33: Important organic substances (重要的有机物质)
// ============================================================================
window.CHEM_UNITS.push({
  id: 'u33',
  unitNum: 'Unit 33',
  book: 'Book 3B · Topic 8',
  topicId: 'topic8',
  titleEn: 'Important organic substances',
  titleZh: '重要的有机物质',
  colorTheme: 'fuchsia',
  summary: '把有机化学带进日常生活与现代工业：剖析百年神药阿司匹林（aspirin / acetylsalicylic acid）的三大结构特征、医药用途与“1 : 2 摩尔比”碱性水解返滴定（back titration）定量计算；对比肥皂（soaps）与无皂清洁剂（soapless detergents）的两亲分子结构、润湿（wetting）与乳化去污（emulsifying）四步机理、油脂皂化盐析（saponification & salting out）、硬水浮渣（scum）与生物降解性；最后攻克两大缩合聚合物（condensation polymers）——聚酯（polyesters 如 PET、PLA）与聚酰胺／尼龙（polyamides 如 Nylon-6,6）的单体、重复单位、链间氢键与耐酸碱性！',
  keyTerms: [
    { en: 'aspirin (acetylsalicylic acid)', zh: '阿司匹林（乙酰水杨酸）', cat: 'Substance' },
    { en: 'salicylic acid', zh: '水杨酸', cat: 'Substance' },
    { en: 'analgesic', zh: '止痛药（镇痛剂）', cat: 'Concept' },
    { en: 'antipyretic', zh: '退烧药（解热剂）', cat: 'Concept' },
    { en: 'back titration', zh: '返滴定法', cat: 'Technique' },
    { en: 'soap', zh: '肥皂', cat: 'Substance' },
    { en: 'soapless detergent', zh: '无皂清洁剂', cat: 'Substance' },
    { en: 'hydrophobic tail', zh: '疏水尾巴', cat: 'Concept' },
    { en: 'hydrophilic head', zh: '亲水头部', cat: 'Concept' },
    { en: 'wetting property', zh: '润湿性质', cat: 'Property' },
    { en: 'emulsifying property', zh: '乳化性质', cat: 'Property' },
    { en: 'oil-in-water emulsion', zh: '水包油乳浊液', cat: 'Substance' },
    { en: 'triglyceride (triester)', zh: '甘油三酯（三酯）', cat: 'Substance' },
    { en: 'saponification', zh: '皂化反应', cat: 'Reaction' },
    { en: 'salting out', zh: '盐析', cat: 'Technique' },
    { en: 'scum', zh: '浮渣', cat: 'Substance' },
    { en: 'condensation polymerization', zh: '缩合聚合反应', cat: 'Reaction' },
    { en: 'polyester & polyamide', zh: '聚酯与聚酰胺（尼龙）', cat: 'Substance' }
  ],
  sections: [
    // ------------------------------------------------------------------------
    // u33-s1: 33.1–33.2 Aspirin & Back Titration
    // ------------------------------------------------------------------------
    {
      id: 'u33-s1',
      code: '33.1–33.2',
      titleEn: 'Active ingredients in drugs — Aspirin & back titration analysis',
      titleZh: '阿司匹林（Aspirin）的结构、药效副作用与返滴定法（Back Titration）计算',
      analogy: {
        icon: '💊',
        title: '返滴定法（Back Titration）就像“买药找零钱”：先给一张大钞全包圆，数清找回几块钱就知道药值多少！',
        body: '阿司匹林药片微溶于冷水，而且身体里既有羧基（-COOH）又有酯基（-OCOCH₃），直接拿标准氢氧化钠（NaOH）一滴滴冷滴定，反应慢吞吞、终点模糊不清！聪明化学家改用“先付大钞再找零”的返滴定法（back titration）：先倒入已知过量的热 NaOH(aq) 把药片彻底煮透——每 1 摩尔阿司匹林精准吃掉 2 摩尔 NaOH（1 摩尔中和羧基，1 摩尔水解酯基）！冷却后再用标准盐酸（HCl）滴定“找回的零钱”（剩余未反应的 NaOH）。用“总付出的 NaOH − 找回的 NaOH”，除以 2，立刻精准锁定药片里阿司匹林的真实含量！'
      },
      coreExplanation: `
        <h4>1. 从柳树皮到阿司匹林：结构修饰的医学奇迹</h4>
        <p>古人早已发现咀嚼柳树皮（willow bark）能止痛退烧，其活性成分在体内转化为<span class="term">水杨酸 <span class="en">salicylic acid / 2-hydroxybenzoic acid</span></span>。但水杨酸酸性强且直接含酚羟基，会强烈刺激并损伤胃黏膜引起胃出血。化学家将水杨酸苯环上的 <code>—OH</code> 转化为<strong><span class="term">酯基 <span class="en">ester group, —OCOCH₃</span></span></strong>，合成了<span class="term">乙酰水杨酸 <span class="en">acetylsalicylic acid</span></span>——即举世闻名的<strong><span class="term">阿司匹林 <span class="en">aspirin</span></span></strong>（分子式 <code>C<sub>9</sub>H<sub>8</sub>O<sub>4</sub></code>，摩尔质量 <code>180.0 g mol<sup>−1</sup></code>），大幅减轻了对胃壁的刺激！</p>

        <div class="struct-card">
          <pre class="struct-pre">       O
       ║
   C — OH      ◀── ① Carboxyl group 羧基 (—COOH，使阿司匹林显酸性 acidic！)
  ╱
 ⬡             ◀── ② Benzene ring 苯环 (邻位 1,2-二取代)
  ╲
   O — C — CH₃ ◀── ③ Ester group 酯基 (—OCOCH₃，注意是氧原子直接连苯环，绝不是 —COOCH₃！)
       ║
       O

Molecular formula 分子式: C₉H₈O₄   (Molar mass = 180.0 g mol⁻¹)</pre>
          <div class="struct-cap">阿司匹林（Aspirin / Acetylsalicylic acid）必背三大结构特征：苯环 + 羧基（—COOH）+ 酯基（—OCOCH₃）</div>
        </div>

        <h4>2. 阿司匹林的四大医疗用途与胃部副作用</h4>
        <ul class="chem-list">
          <li><strong>止痛药／镇痛剂（Analgesic / painkiller）：</strong>缓解头痛、牙痛、肌肉痛等轻中度疼痛。</li>
          <li><strong>退烧药／解热剂（Antipyretic / fever reducer）：</strong>降低发烧体温。</li>
          <li><strong>消炎药（Anti-inflammatory agent）：</strong>减轻关节炎（arthritis）及组织炎症红肿。</li>
          <li><strong>预防心脏病发作及中风（Preventing heart attacks and strokes）：</strong>每日服用<strong>低剂量（low dose）</strong>阿司匹林可抑制血小板凝集、防止血栓形成（inhibits blood clot formation）。</li>
          <li><strong>主要副作用（Side effect）：</strong>由于分子仍含<span class="term">羧基 <span class="en">carboxyl group, —COOH</span></span>而呈<strong>酸性（acidic）</strong>，空腹或长期大量服用仍会<strong>刺激胃壁（irritate the stomach lining）</strong>甚至引起胃溃疡与胃出血（因此常制成含抗酸剂的缓冲阿司匹林或肠溶片，且建议饭后服用）。</li>
        </ul>

        <h4>3. 核心定量计算：碱性水解“1 : 2 摩尔比铁律”与返滴定法（Back Titration）</h4>
        <div class="callout callout-warn">
          <strong>⚠️ HKDSE 计算头号铁律：1 mol 阿司匹林恰好消耗 2 mol NaOH！</strong><br>
          为什么不能室温下直接用 <code>NaOH(aq)</code> 滴定阿司匹林药片？① 阿司匹林<strong>微溶于冷水（slightly soluble in cold water）</strong>，反应极慢；② 室温滴定时，除了 <code>—COOH</code> 被中和外，分子内的<strong>酯基 <code>—OCOCH<sub>3</sub></code> 也会发生缓慢而不完全的部分水解（slow partial hydrolysis）</strong>，导致滴定终点无法准确判断！<br>
          因此必须采用<strong>返滴定法（Back titration）</strong>：将压碎的药片与<strong>已知体积且过量的标准 <code>NaOH(aq)</code> 共沸加热（boil gently with excess standard NaOH(aq)）</strong>——其中 <strong>1 mol NaOH 中和 <code>—COOH</code></strong>，<strong>另 1 mol NaOH 彻底水解 <code>—OCOCH<sub>3</sub></code> 酯键</strong>，严格按 <strong><code>1 mol aspirin : 2 mol NaOH</code></strong> 反应完毕！冷却（若定容至 <code>250.0 cm<sup>3</sup></code> 容量瓶再移取 <code>25.0 cm<sup>3</sup></code>，切记乘回 <code>× 10</code> 稀释倍数！）后，用标准 <code>HCl(aq)</code> 以<strong><span class="term">酚酞 <span class="en">phenolphthalein</span></span></strong>作指示剂（终点颜色变化：<strong>由粉红色／红色变为无色 from pink/red to colourless</strong>）滴定剩余 <code>NaOH</code>！
        </div>

        <h4>4. 返滴定四步秒杀模板（Worked Steps）</h4>
        <ul class="chem-list">
          <li><strong>Step 1：</strong>由滴定耗用的 <code>HCl(aq)</code> 算出锥形瓶（及定容瓶全量）中<strong>剩余未反应的 <code>n(NaOH)<sub>unreacted</sub></code></strong>；</li>
          <li><strong>Step 2：</strong>用最初加入的总 <code>n(NaOH)<sub>initial</sub></code> 减去剩余量，得<strong>与阿司匹林反应的 <code>n(NaOH)<sub>reacted</sub> = n(NaOH)<sub>initial</sub> − n(NaOH)<sub>unreacted</sub></code></strong>；</li>
          <li><strong>Step 3（最关键除以 2！）：</strong><code>n(aspirin) = ½ × n(NaOH)<sub>reacted</sub></code>；</li>
          <li><strong>Step 4：</strong><code>Mass of aspirin = n(aspirin) × 180.0 g mol<sup>−1</sup></code>，再除以药片总质量乘 100% 即得质量百分比（percentage by mass）！</li>
        </ul>
      `,
      textbookFormulas: [
        {
          label: '阿司匹林与过量氢氧化钠共热反应（Alkaline hydrolysis & neutralization — 1 : 2 ratio!）',
          equationHtml: `C<sub>6</sub>H<sub>4</sub>(COOH)(OCOCH<sub>3</sub>) + 2NaOH(aq) <span class="chem-arrow"><span class="cond-top">heat</span><span class="arr-main">⟶</span><span class="cond-bot"></span></span> C<sub>6</sub>H<sub>4</sub>(COO<sup>−</sup>Na<sup>+</sup>)(OH)(aq) + CH<sub>3</sub>COO<sup>−</sup>Na<sup>+</sup>(aq) + H<sub>2</sub>O(l)`,
          note: '严格遵循精工版《Mastering Chemistry》写法：1 mol 阿司匹林消耗 2 mol NaOH，生成水杨酸钠（sodium 2-hydroxybenzoate）、乙酸钠和水！'
        },
        {
          label: '标准盐酸滴定剩余氢氧化钠（Titrating unreacted excess NaOH with standard HCl）',
          equationHtml: `NaOH(aq) + HCl(aq) <span class="chem-arrow"><span class="cond-top">phenolphthalein</span><span class="arr-main">⟶</span><span class="cond-bot"></span></span> NaCl(aq) + H<sub>2</sub>O(l)`,
          note: '酚酞指示剂由碱性粉红色变为中性无色（from pink to colourless）即为滴定终点'
        }
      ],
      examTrap: '返滴定三大丢分重灾区：① 把阿司匹林与 NaOH 的反应比例错当成 1 : 1（忘记酯基水解还要吃掉第 2 份 NaOH，导致算出的阿司匹林质量翻倍甚至超过 100%！）或受大学超纲教材影响错写成 1 : 3（HKDSE 严守课本 1 : 2！）；② 题目将煮后的溶液定容到 250.0 cm³ 容量瓶（volumetric flask），再每次吸取 25.0 cm³ 滴定，考生忘记将剩余 NaOH 摩尔数乘回 10 倍（250.0 / 25.0）！③ 画结构时把酯基画反成 —COOCH₃（那是冬青油 methyl salicylate，阿司匹林必须是 —OCOCH₃）！',
      relations: [
        {
          type: 'buildsOn',
          targetUnitId: 'u31',
          label: '承接 Unit 31：羧酸中和与酯的碱性水解（Neutralization & alkaline hydrolysis of ester）',
          why: '阿司匹林同时拥有羧基（-COOH）和酯基（-OCOCH₃），因此与热 NaOH(aq) 反应是这两个官能团反应的叠加（1 + 1 = 2 mol NaOH）。'
        },
        {
          type: 'buildsOn',
          targetUnitId: 'u32',
          label: '联系 Unit 32：重结晶与熔点纯度检验（Recrystallization & melting point）',
          why: '实验室合成粗阿司匹林固体后，同样使用重结晶法提纯并测熔点检验纯度。'
        }
      ],
      questions: [
        {
          id: 'u33-s1-q1',
          level: 1,
          levelTag: 'Level 1 · 中文直觉破冰',
          type: 'mcq',
          stem: '关于药物有效成分阿司匹林（aspirin，即乙酰水杨酸 acetylsalicylic acid），下列哪一项描述是完全正确的？',
          cueWords: [],
          options: [
            'A. 分子中含有苯环（benzene ring）、羟基（hydroxyl group, —OH）和酮基（carbonyl group）',
            'B. 分子中含有苯环（benzene ring）、羧基（carboxyl group, —COOH）和酯基（ester group, —OCOCH₃），每 1 mol 阿司匹林与热 NaOH(aq) 完全反应消耗 2 mol NaOH',
            'C. 阿司匹林呈强碱性，可用作胃药中和过多胃酸',
            'D. 每 1 mol 阿司匹林与热 NaOH(aq) 完全反应只消耗 1 mol NaOH'
          ],
          answerIndex: 1,
          hint: '水杨酸原本的 —OH 已经被乙酰化变成了酯基（—OCOCH₃），只留下苯环、—COOH 和 —OCOCH₃！',
          explanation: '阿司匹林（acetylsalicylic acid, C₉H₈O₄）包含三大结构特征：苯环（benzene ring）、羧基（carboxyl group, —COOH）和酯基（ester group, —OCOCH₃）。由于含有 —COOH 呈酸性，空腹服用可能刺激胃壁而非中和胃酸；与热 NaOH(aq) 共热时，1 mol —COOH 中和消耗 1 mol NaOH，1 mol —OCOCH₃ 碱性水解再消耗 1 mol NaOH，合共消耗 2 mol NaOH！',
          commonMistake: '混淆水杨酸（salicylic acid，含酚 —OH 和 —COOH）与阿司匹林（aspirin，含 —OCOCH₃ 和 —COOH）的官能团！'
        },
        {
          id: 'u33-s1-q2',
          level: 2,
          levelTag: 'Level 2 · 中英过渡实战',
          type: 'mcq',
          stem: 'An aspirin tablet of mass 0.600 g was boiled gently with 25.0 cm³ of 0.500 mol dm⁻³ NaOH(aq) (in excess). After cooling, the entire reaction mixture required 6.50 cm³ of 1.00 mol dm⁻³ HCl(aq) for complete neutralization of the unreacted NaOH. Assuming other ingredients in the tablet are inert, what is the percentage by mass of aspirin (molar mass = 180.0 g mol⁻¹) in the tablet?',
          cueWords: [
            { phrase: '25.0 cm³ of 0.500 mol dm⁻³ NaOH(aq)', zh: '初始总 NaOH', concept: 'n(NaOH)initial = 0.0250 × 0.500 = 0.0125 mol' },
            { phrase: 'entire reaction mixture', zh: '全部反应混合物直接滴定', concept: '未分装稀释，无稀释倍数（×1）' },
            { phrase: '6.50 cm³ of 1.00 mol dm⁻³ HCl(aq)', zh: '滴定剩余 NaOH 耗用的 HCl', concept: 'n(NaOH)unreacted = 0.00650 × 1.00 = 0.00650 mol' },
            { phrase: 'aspirin (molar mass = 180.0 g mol⁻¹)', zh: '阿司匹林摩尔质量 180.0', concept: '谨记 n(aspirin) = 1/2 × n(NaOH)reacted！' }
          ],
          options: [
            'A. 45.0%',
            'B. 75.0%',
            'C. 90.0%',
            'D. 97.5%'
          ],
          answerIndex: 2,
          hint: '总 NaOH = 0.0125 mol；剩余 NaOH = 0.00650 mol；反应掉的 NaOH = 0.00600 mol。千万别忘了除以 2 才是阿司匹林摩尔数！',
          explanation: '① 初始总 n(NaOH) = 0.500 × (25.0 ÷ 1000) = 0.0125 mol；② 剩余未反应 n(NaOH) = n(HCl) = 1.00 × (6.50 ÷ 1000) = 0.00650 mol；③ 与阿司匹林反应的 n(NaOH) = 0.0125 − 0.00650 = 0.00600 mol；④ 因 1 mol 阿司匹林消耗 2 mol NaOH，n(aspirin) = 0.00600 ÷ 2 = 0.00300 mol；⑤ 阿司匹林质量 = 0.00300 × 180.0 = 0.540 g，质量百分比 = (0.540 ÷ 0.600) × 100% = 90.0%！',
          commonMistake: '若忘记除以 2，会算出 0.00600 × 180.0 = 1.08 g（超过药片总重 0.600 g，得 180%），考场上看到大于 100% 立刻警醒漏除了 2！'
        },
        {
          id: 'u33-s1-q3',
          level: 3,
          levelTag: 'Level 3 · HKDSE 全英文实战',
          type: 'structured',
          stem: 'In a back titration experiment, a 1.20 g commercial aspirin tablet was crushed and heated under reflux with 50.0 cm³ of 0.400 mol dm⁻³ NaOH(aq). After cooling, the mixture was diluted to 250.0 cm³ in a volumetric flask. 25.0 cm³ portions of the diluted solution required an average of 10.40 cm³ of 0.100 mol dm⁻³ HCl(aq) to reach the end point using phenolphthalein indicator. (a) Explain why the crushed tablet was NOT titrated directly with NaOH(aq) at room temperature. (b) Calculate the percentage by mass of aspirin (C₉H₈O₄, molar mass = 180.0 g mol⁻¹) in the tablet. (4 marks)',
          cueWords: [
            { phrase: '50.0 cm³ of 0.400 mol dm⁻³ NaOH(aq)', zh: '初始加入过量 NaOH', concept: 'n(NaOH)initial = 0.0500 × 0.400 = 0.0200 mol' },
            { phrase: 'diluted to 250.0 cm³', zh: '定容至 250.0 cm³ 容量瓶', concept: '注意与移取体积 25.0 cm³ 形成 ×10 倍稀释关系！' },
            { phrase: '25.0 cm³ portions', zh: '每次吸取 25.0 cm³ 滴定', concept: '250.0 cm³ 中剩余 NaOH 摩尔数 = 滴定耗 HCl 摩尔数 × 10' },
            { phrase: '10.40 cm³ of 0.100 mol dm⁻³ HCl(aq)', zh: '平均耗用 HCl 体积及浓度', concept: '25.0 cm³ 中 n(HCl) = 1.04 × 10⁻³ mol' }
          ],
          hint: '(a) 答微溶于冷水且酯基在室温下发生缓慢不完全水解；(b) 25.0 cm³ 耗 HCl = 0.00104 mol → 乘 10 得 250.0 cm³ 剩余 NaOH = 0.0104 mol → 用初始 0.0200 减 0.0104 得反应掉 0.00960 mol → 除以 2 得阿司匹林 0.00480 mol！',
          explanation: '(a) 阿司匹林微溶于冷水（only slightly soluble in cold water），且在室温直接滴定时，除了羧基中和外，酯基还会发生缓慢的部分水解（slow partial hydrolysis of the ester group），导致反应慢且没有清晰准确的滴定终点。(b) n(HCl) = 0.100 × 0.01040 = 0.00104 mol；250.0 cm³ 中未反应的 n(NaOH) = 0.00104 × (250.0 / 25.0) = 0.0104 mol；初始 n(NaOH) = 0.400 × 0.0500 = 0.0200 mol；与阿司匹林反应的 n(NaOH) = 0.0200 − 0.0104 = 0.00960 mol；n(aspirin) = 0.00960 ÷ 2 = 0.00480 mol；质量 = 0.00480 × 180.0 = 0.864 g；质量百分比 = (0.864 ÷ 1.20) × 100% = 72.0%。',
          markingScheme: [
            '1M: (a) Aspirin is only slightly soluble in cold water, and slow partial hydrolysis of its ester group during direct titration makes the end point indistinct / reaction slow',
            '1M: (b) Unreacted NaOH in 250.0 cm³ = (0.100 × 10.40 / 1000) × (250.0 / 25.0) = 0.0104 mol; NaOH reacted with aspirin = (0.400 × 50.0 / 1000) − 0.0104 = 0.00960 mol',
            '1M: (b) Moles of aspirin = 0.00960 / 2 = 0.00480 mol (and mass = 0.00480 × 180.0 = 0.864 g)',
            '1M: (b) Percentage by mass of aspirin = (0.864 / 1.20) × 100% = 72.0%'
          ],
          commonMistake: '漏乘稀释倍数 ×10，把剩余 NaOH 算成 0.00104 mol，导致后面全盘算错！'
        }
      ]
    },

    // ------------------------------------------------------------------------
    // u33-s2: 33.3–33.6 Soaps & Soapless Detergents — Wetting & Emulsifying
    // ------------------------------------------------------------------------
    {
      id: 'u33-s2',
      code: '33.3–33.6',
      titleEn: 'Soaps & soapless detergents: structures, wetting & emulsifying properties',
      titleZh: '肥皂与无皂清洁剂：两亲结构、润湿性质及乳化去污四步原理',
      analogy: {
        icon: '🫧',
        title: '清洁剂阴离子就像“一手抓油、一手牵水的小媒人”：最后靠满身负电荷互相推开不抱团！',
        body: '油和水本来是死对头，互不相溶。清洁剂阴离子却长成了神奇的“小蝌蚪”：① 长长的非极性碳氢尾巴是疏水亲油的（hydrophobic tail），一头扎进油污里死死抓住油脂；② 圆圆的带负电离子头是亲水的（hydrophilic anionic head），留在外面的水里牵住水分子！搓洗摇晃时，水拉着亲水头把大片油污扯碎成无数颗微小的“刺猬油滴”。最绝的是，每颗小油滴表面都布满了负电荷（—COO⁻ 或 —SO₃⁻），同种负电荷互相排斥（repel one another），小油滴再也没法重新合并成大油块，只能乖乖悬浮成稳定的水包油乳浊液（oil-in-water emulsion），水一冲全干净！'
      },
      coreExplanation: `
        <h4>1. 肥皂（Soaps）与无皂清洁剂（Soapless Detergents）结构精确对比</h4>
        <p><span class="term">清洁剂 <span class="en">detergents</span></span>泛指能增强水去污能力的物质，分为<strong><span class="term">肥皂 <span class="en">soaps</span></span></strong>与<strong><span class="term">无皂清洁剂 <span class="en">soapless detergents / synthetic detergents</span></span></strong>两大类。两者的去污有效粒子都拥有完全相同的“两亲小蝌蚪骨架”，区别仅在于原料来源与亲水阴离子头部的化学基团：</p>
        <table class="chem-table">
          <thead>
            <tr>
              <th>比较维度</th>
              <th>肥皂（Soaps）</th>
              <th>无皂清洁剂（Soapless detergents）</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>制造原料</strong></td>
              <td>天然<span class="term">动植物油脂 <span class="en">fats and vegetable oils</span></span>（可再生资源 renewable）</td>
              <td>源自<span class="term">石油 <span class="en">petroleum</span></span>的化工产品（不可再生资源 non-renewable）</td>
            </tr>
            <tr>
              <td><strong>疏水尾巴（Hydrophobic tail）</strong></td>
              <td colspan="2">均为<strong>长链非极性烃基（long non-polar hydrocarbon chain）</strong>（如 <code>CH<sub>3</sub>(CH<sub>2</sub>)<sub>16</sub>—</code> 或烷基苯环 <code>CH<sub>3</sub>(CH<sub>2</sub>)<sub>11</sub>—C<sub>6</sub>H<sub>4</sub>—</code>），<strong>溶于油脂（soluble in grease/oil）</strong>而不溶于水</td>
            </tr>
            <tr>
              <td><strong>亲水头部（Hydrophilic head）</strong></td>
              <td><strong><span class="term">羧酸根离子 <span class="en">carboxylate group, —COO⁻</span></span></strong><br>（如 <code>CH<sub>3</sub>(CH<sub>2</sub>)<sub>16</sub>COO<sup>−</sup>Na<sup>+</sup></code> 硬脂酸钠）</td>
              <td><strong><span class="term">磺酸根离子 <span class="en">sulphonate group, —SO₃⁻</span></span></strong> 或 <strong><span class="term">硫酸根酯基 <span class="en">sulphate group, —OSO₃⁻</span></span></strong><br>（如 <code>CH<sub>3</sub>(CH<sub>2</sub>)<sub>11</sub>C<sub>6</sub>H<sub>4</sub>SO<sub>3</sub><sup>−</sup>Na<sup>+</sup></code>）</td>
            </tr>
          </tbody>
        </table>

        <h4>2. 清洁剂的两大核心性质：润湿性质（Wetting）vs 乳化性质（Emulsifying）</h4>
        <ul class="chem-list">
          <li><strong>① 润湿性质（Wetting property — 充当润湿剂 wetting agent）：</strong>纯水分子间有强氢键，导致水的<strong><span class="term">表面张力很高 <span class="en">high surface tension</span></span></strong>，滴在衣物上会聚成水珠而难以渗入纤维。加入清洁剂能显著<strong>降低水的表面张力（lowers the surface tension of water）</strong>，使水迅速在织物表面铺展（spread out easily）并深入纤维缝隙接触污垢！</li>
          <li><strong>② 乳化性质与去污四步标准采分模板（Emulsifying property &amp; Cleansing action — 必背 4 分满贯英文链条！）：</strong></li>
        </ul>

        <div class="struct-card">
          <pre class="struct-pre">Point 1 (1M) · 插入定向：The hydrophobic hydrocarbon tails dissolve in the grease, while the
                         hydrophilic anionic heads remain in the surrounding water.
Point 2 (1M) · 搅拌碎裂：Upon agitation / shaking / rubbing, water molecules attract the hydrophilic
                         heads, lifting the grease off the surface and breaking it into tiny oil droplets.
Point 3 (1M) · 负电排斥：The surfaces of these tiny oil droplets carry negative charges; like negative
                         charges repel one another, preventing the droplets from coalescing (joining together).
Point 4 (1M) · 乳化冲走：A stable oil-in-water emulsion is formed and the suspended droplets are easily
                         rinsed away with water.</pre>
          <div class="struct-cap">HKEAA 阅卷官逐字给分四要点：疏水尾溶油 + 亲水头留水 → 搅拌碎成小油滴 → 负电荷同性相斥防聚结 → 形成稳定水包油乳浊液冲走！</div>
        </div>

        <div class="callout callout-tip">
          <strong>💡 结构速判秘诀：</strong><br>
          选择题给你四个陌生大分子问“哪个具有去污能力（cleansing property）”——必须<strong>同时具备</strong>：① 至少约 12 个碳以上的<strong>长烃基链（long hydrocarbon chain）</strong> + ② 末端的<strong>离子基团（ionic group，如 <code>—COO<sup>−</sup>Na<sup>+</sup></code>、<code>—SO<sub>3</sub><sup>−</sup>Na<sup>+</sup></code>、<code>—OSO<sub>3</sub><sup>−</sup>Na<sup>+</sup></code>）</strong>！若末端是未电离的酯基 <code>—COOCH<sub>3</sub></code>、短链乙酸钠 <code>CH<sub>3</sub>COO<sup>−</sup>Na<sup>+</sup></code>（尾巴太短不亲油！）或纯长链烷烃 <code>C<sub>18</sub>H<sub>38</sub></code>（无亲水离子头！），全都没有去污能力！
        </div>
      `,
      svgId: 'svg-detergent-cleansing',
      svgCaption: '图解：肥皂（—COO⁻）与无皂清洁剂（—SO₃⁻）的“小蝌蚪”两亲结构，以及乳化去污四步微观过程（插入油污 → 搅拌剥离 → 形成带负电微油滴 → 同种负电荷互相排斥防重新聚集）',
      textbookFormulas: [
        {
          label: '典型肥皂阴离子结构（Typical soap anion — stearate ion 硬脂酸根离子）',
          equationHtml: `CH<sub>3</sub>(CH<sub>2</sub>)<sub>16</sub>COO<sup>−</sup>Na<sup>+</sup> &nbsp; <span style="font-size:0.88em;color:#64748b;">[ Hydrophobic tail: CH<sub>3</sub>(CH<sub>2</sub>)<sub>16</sub>— ｜ Hydrophilic head: —COO<sup>−</sup> ]</span>`,
          note: '长链羧酸钠／钾盐，源自天然动植物油脂'
        },
        {
          label: '典型无皂清洁剂结构（Typical soapless detergent — alkylbenzenesulphonate 烷基苯磺酸钠）',
          equationHtml: `CH<sub>3</sub>(CH<sub>2</sub>)<sub>11</sub>—C<sub>6</sub>H<sub>4</sub>—SO<sub>3</sub><sup>−</sup>Na<sup>+</sup> &nbsp; <span style="font-size:0.88em;color:#64748b;">[ Hydrophobic tail: CH<sub>3</sub>(CH<sub>2</sub>)<sub>11</sub>C<sub>6</sub>H<sub>4</sub>— ｜ Hydrophilic head: —SO<sub>3</sub><sup>−</sup> ]</span>`,
          note: '长链磺酸钠盐（或烷基硫酸酯钠盐 CH₃(CH₂)₁₁OSO₃⁻Na⁺），源自石油化工原料'
        }
      ],
      examTrap: '解释乳化去污机理时最常见的三个致命失分点：① 搞反术语，写成“亲水尾溶入油中、疏水头溶入水中”（记住 hydro- = 水，-phobic = 恐惧/疏远，-philic = 喜爱/亲近！）；② 漏写“同种负电荷互相排斥，防止小油滴重新聚结（negative charges on droplet surfaces repel one another, preventing droplets from coalescing）”——这 1 分几乎年年必扣；③ 在画小油滴示意图时，误把离子头画在油滴内部、把尾巴画在外面水里，或者把 Na⁺ 画成嵌在油滴里！',
      relations: [
        {
          type: 'buildsOn',
          targetUnitId: 'u29',
          label: '承接 Unit 29：相似相溶与分子间作用力（Like dissolves like & intermolecular forces）',
          why: '非极性烃基尾巴靠范德华力溶入非极性油脂，而带负电离子头靠离子-偶极引力溶于极性水中。'
        },
        {
          type: 'leadsTo',
          targetUnitId: 'u33',
          label: '衔接本单元 33.7–33.8：油脂皂化制肥皂与硬水浮渣（Saponification & hard water scum）',
          why: '正是亲水头部 —COO⁻ 与 —SO₃⁻ 的差异，直接决定了肥皂遇硬水结浮渣而无皂清洁剂不结渣！'
        }
      ],
      questions: [
        {
          id: 'u33-s2-q1',
          level: 1,
          levelTag: 'Level 1 · 中文直觉破冰',
          type: 'mcq',
          stem: '下列哪一种化学物质属于无皂清洁剂（soapless detergent）的有效成分，并且兼具良好的润湿性质（wetting property）和乳化去污能力（emulsifying property）？',
          cueWords: [],
          options: [
            'A. CH₃COO⁻Na⁺（乙酸钠 sodium ethanoate）',
            'B. CH₃(CH₂)₁₆COO⁻Na⁺（硬脂酸钠 sodium stearate）',
            'C. CH₃(CH₂)₁₁OSO₃⁻Na⁺（十二烷基硫酸钠 sodium dodecylsulphate）',
            'D. CH₃(CH₂)₁₄COOCH₃（十六酸甲酯 methyl hexadecanoate）'
          ],
          answerIndex: 2,
          hint: '先找“长碳氢链尾巴 + 离子头”，再区分头部是羧酸根 —COO⁻（肥皂 soap）还是硫酸酯根／磺酸根 —OSO₃⁻ / —SO₃⁻（无皂清洁剂 soapless detergent）！',
          explanation: 'A 项碳链太短（仅 CH₃—），没有足够长的疏水尾巴溶入油污；B 项含长烃基尾巴和羧酸根头部（—COO⁻），属于肥皂（soap）而非无皂清洁剂；D 项是中性的酯类分子，没有亲水离子头部；只有 C 项既有 C₁₂ 长烃基疏水尾巴，又有硫酸根酯阴离子亲水头（—OSO₃⁻），是典型的无皂清洁剂（常用于洗发水与牙膏中）！',
          commonMistake: '不看清题干问的是“无皂清洁剂（soapless detergent）”而误选了属于肥皂（soap）的 B 项！'
        },
        {
          id: 'u33-s2-q2',
          level: 2,
          levelTag: 'Level 2 · 中英过渡实战',
          type: 'mcq',
          stem: 'When a few drops of vegetable oil and water are shaken with a little soapless detergent in a test tube and then allowed to stand, a milky mixture remains stable without separating into two layers. Which of the following statements correctly explain(s) this phenomenon?\n(1) The detergent reacts chemically with vegetable oil to form glycerol.\n(2) The hydrophobic hydrocarbon tails of detergent anions dissolve in oil while the hydrophilic anionic heads remain in water.\n(3) The tiny oil droplets carry negative charges on their surfaces and repel one another.',
          cueWords: [
            { phrase: 'vegetable oil and water are shaken with a little soapless detergent', zh: '植物油、水与无皂清洁剂混合摇晃', concept: '物理乳化过程（emulsification），绝非化学皂化反应！' },
            { phrase: 'milky mixture remains stable', zh: '乳白色混合物保持稳定不分层', concept: '形成稳定的水包油乳浊液 (oil-in-water emulsion)' },
            { phrase: 'repel one another', zh: '互相排斥', concept: '同种负电荷静电排斥防止小油滴重新聚结' }
          ],
          options: [
            'A. (1) and (2) only',
            'B. (1) and (3) only',
            'C. (2) and (3) only',
            'D. (1), (2) and (3)'
          ],
          answerIndex: 2,
          hint: '清洁剂去油污是“物理乳化包裹”，还是像浓 NaOH 煮油那样的“化学水解反应”？',
          explanation: '(1) 错误！清洁剂乳化油污是物理过程（physical emulsification），并不会与油脂发生化学反应生成甘油！(2) 和 (3) 完全正确：疏水烃基尾巴插入油滴，亲水阴离子头朝外留在水中，使微小油滴表面带负电并互相排斥（repel one another），防止油滴重新聚结（coalescing），形成稳定的乳白色水包油乳浊液（oil-in-water emulsion）。',
          commonMistake: '误以为清洁剂洗掉油污是因为把油脂“化学分解”掉了——切记乳化作用（emulsifying action）不破坏油脂的共价键！'
        },
        {
          id: 'u33-s2-q3',
          level: 3,
          levelTag: 'Level 3 · HKDSE 全英文实战',
          type: 'structured',
          stem: 'The anionic part of a detergent has the formula CH₃(CH₂)₁₁—C₆H₄—SO₃⁻. (a) State whether this detergent is a soap or a soapless detergent, and identify its hydrophobic part and hydrophilic part. (b) Explain, in terms of its structure, how this detergent removes greasy dirt from a plate when washed with water. (5 marks)',
          cueWords: [
            { phrase: 'CH₃(CH₂)₁₁—C₆H₄—SO₃⁻', zh: '烷基苯磺酸根离子', concept: '含磺酸根 —SO₃⁻，属于无皂清洁剂 (soapless detergent)' },
            { phrase: 'hydrophobic part and hydrophilic part', zh: '疏水部分与亲水部分', concept: '疏水尾：CH₃(CH₂)₁₁—C₆H₄—；亲水头：—SO₃⁻' },
            { phrase: 'Explain, in terms of its structure, how this detergent removes greasy dirt', zh: '从结构角度解释如何去除油污', concept: '严格默写 HKEAA 乳化去污 3–4 个标准采分点！' }
          ],
          hint: '(a) 看到 —SO₃⁻ 即判为 soapless detergent，拆开烃基部分与离子头；(b) 按顺序答齐：① 尾巴溶油、头留水 → ② 搓洗剥离碎成微油滴 → ③ 油滴表面带负电荷互相排斥防聚结，形成乳浊液被水冲走。',
          explanation: '(a) 该粒子含磺酸根离子（—SO₃⁻），属于无皂清洁剂（soapless detergent）；疏水部分为长非极性烃基 CH₃(CH₂)₁₁—C₆H₄—，亲水部分为阴离子基团 —SO₃⁻。(b) 洗涤时，非极性疏水烃基尾巴溶入盘子上的油脂中，亲水阴离子头（—SO₃⁻）留在周围水中；经擦洗搅动，水分子拉动亲水头将油污剥离表面并打碎成微小油滴；微油滴表面均带负电荷，同种负电荷互相排斥，防止油滴重新聚结，形成稳定的水包油乳浊液随水流冲走。',
          markingScheme: [
            '1M: (a) Soapless detergent',
            '1M: (a) Hydrophobic part: CH₃(CH₂)₁₁—C₆H₄— ; Hydrophilic part: —SO₃⁻',
            '1M: (b) The hydrophobic hydrocarbon tails dissolve in the greasy dirt while the hydrophilic anionic heads (—SO₃⁻) remain in the surrounding water',
            '1M: (b) Upon rubbing / agitation, the grease is lifted off the plate surface and broken up into tiny negatively charged oil droplets suspended in water',
            '1M: (b) The negatively charged droplets repel one another and cannot coalesce / join together again (forming a stable oil-in-water emulsion), so they are rinsed away with water'
          ],
          commonMistake: '在 (a) 标亲水部分时漏掉负号写成 "—SO₃"（必须是带负电的离子基团 —SO₃⁻ 才亲水！）。'
        }
      ]
    },

    // ------------------------------------------------------------------------
    // u33-s3: 33.7–33.8 Fats & Oils, Saponification, Hard Water & Environment
    // ------------------------------------------------------------------------
    {
      id: 'u33-s3',
      code: '33.7–33.8',
      titleEn: 'Fats & oils, making soaps (saponification), hard water scum & environmental impact',
      titleZh: '动植物油脂结构、皂化盐析制肥皂、硬水浮渣与清洁剂环境影响',
      analogy: {
        icon: '🧼',
        title: '硬水洗衣服为什么肥皂不起泡还留灰垢？钙镁离子把肥皂阴离子“绑架”成了石头渣（Scum）！',
        body: '天然硬水（hard water）里藏着许多钙离子（Ca²⁺）和镁离子（Mg²⁺）。当你用传统肥皂（RCOO⁻Na⁺）在硬水里洗衣服时，Ca²⁺ 和 Mg²⁺ 会立刻冲上来，一对二抓住羧酸根离子生成不溶于水的灰白色沉淀——这就是让人头疼的浮渣（scum, (RCOO)₂Ca）！在把水中所有 Ca²⁺/Mg²⁺ 喂饱之前，肥皂全白白浪费了，灰渣还会死死粘在白衬衫上发黄发硬。而无皂清洁剂的磺酸根头部（RSO₃⁻）遇到 Ca²⁺/Mg²⁺ 生成的钙盐、镁盐依然易溶于水，所以在硬水甚至海水里照样泡沫丰富、去污力满分！'
      },
      coreExplanation: `
        <h4>1. 动植物油脂的化学本质：甘油三酯（Triglycerides / Triesters）</h4>
        <p>天然<span class="term">动物脂肪 <span class="en">fats</span></span>与<span class="term">植物油 <span class="en">vegetable oils</span></span>在化学结构上都是<strong><span class="term">三酯 <span class="en">triesters / triglycerides</span></span></strong>——由 1 个分子的<span class="term">丙三醇 <span class="en">propane-1,2,3-triol</span></span>（俗称<span class="term">甘油 <span class="en">glycerol</span></span>）与 3 个分子的长链羧酸（俗称<span class="term">脂肪酸 <span class="en">fatty acids</span></span>，通常含 12–20 个碳）酯化而成：</p>
        <ul class="chem-list">
          <li><strong>为什么动物脂肪室温呈固态，而植物油室温呈液态？</strong>动物脂肪主要含<strong>饱和烃基链（saturated hydrocarbon chains，无 C=C）</strong>，链呈规整锯齿状，分子能<strong>紧密堆积（pack closely together）</strong>，分子间<span class="term">范德华力 <span class="en">van der Waals' forces</span></span>较强，熔点较高；植物油富含<strong>不饱和顺式碳碳双键（unsaturated <em>cis</em> C=C double bonds）</strong>，使碳链产生明显弯折（kinks），分子<strong>无法紧密堆积（cannot pack closely）</strong>，范德华力较弱，熔点较低！</li>
        </ul>

        <h4>2. 肥皂的制备：皂化反应（Saponification）与盐析（Salting Out）</h4>
        <div class="struct-card">
          <pre class="struct-pre">    O
    ║
CH₂—O—C—R                                      CH₂—OH
│   O                                          │
│   ║                heat under reflux         │
CH —O—C—R   +  3NaOH(aq)  ──────────────▶      CH —OH     +   3 RCOO⁻Na⁺
│   O        (conc. NaOH)                      │               (soap 肥皂)
│   ║                                          │
CH₂—O—C—R                                      CH₂—OH
(fat / oil 油脂: triester)          (propane-1,2,3-triol / glycerol 甘油)</pre>
          <div class="struct-cap">皂化反应（Saponification）：1 mol 甘油三酯与 3 mol NaOH 共沸碱性水解，生成甘油与 3 mol 长链羧酸钠（肥皂）</div>
        </div>
        <ul class="chem-list">
          <li><strong>Step 1 — 皂化反应（Saponification）：</strong>将植物油（如蓖麻油 castor oil 或橄榄油 olive oil）与<strong>浓氢氧化钠溶液 <code>conc. NaOH(aq)</code></strong> 共热搅拌（实验室常加少量乙醇 <code>ethanol</code> 作助溶剂，使原本不相溶的油与碱液互溶加快反应！）。</li>
          <li><strong>Step 2 — 盐析（Salting out — 高频必考实验目的！）：</strong>反应完成后，将热混合物倒入<strong>浓氯化钠溶液／饱和食盐水 <code>concentrated NaCl(aq) / brine</code></strong> 中搅拌——目的是<strong>降低肥皂在水中的溶解度（lower the solubility of soap in water）</strong>，迫使固态肥皂凝结析出并浮在液面上（而甘油及剩余 NaOH 留在下层水溶液中）！</li>
          <li><strong>Step 3 — 过滤与冷水洗涤：</strong>滤出肥皂固体，用<strong>少量冰冷蒸馏水（a little ice-cold distilled water）</strong>洗去表面附着的 <code>NaOH</code> 和 <code>NaCl</code>，压模成型。</li>
        </ul>

        <h4>3. 硬水（Hard Water）与酸性水中的表现对比 + 环境影响</h4>
        <table class="chem-table">
          <thead>
            <tr>
              <th>测试场景／环保指标</th>
              <th>肥皂（Soaps, RCOO<sup>−</sup>）</th>
              <th>无皂清洁剂（Soapless detergents, RSO<sub>3</sub><sup>−</sup>）</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>硬水（Hard water）</strong><br>（含大量 <code>Ca<sup>2+</sup>(aq)</code> 及 <code>Mg<sup>2+</sup>(aq)</code>）</td>
              <td><span style="color:#dc2626;font-weight:700;">形成灰白色不溶沉淀——浮渣（Scum）！</span><br><code>2RCOO<sup>−</sup>(aq) + Ca<sup>2+</sup>(aq) ⟶ (RCOO)<sub>2</sub>Ca(s)</code><br>浪费肥皂且沾污衣物</td>
              <td><span style="color:#047857;font-weight:700;">不产生浮渣（No scum formed）！</span><br>因为磺酸钙／磺酸镁<strong>易溶于水（soluble in water）</strong>，硬水中仍正常起泡去污</td>
            </tr>
            <tr>
              <td><strong>强酸性水（Acidic water）</strong></td>
              <td>失效！<code>RCOO<sup>−</sup>(aq) + H<sup>+</sup>(aq) ⟶ RCOOH(s)</code> 析出不溶性长链脂肪酸沉淀</td>
              <td>在酸性溶液中仍保持离子态，正常发挥去污作用</td>
            </tr>
            <tr>
              <td><strong>生物降解性（Biodegradability）与水体污染</strong></td>
              <td><strong>可生物降解（Biodegradable）</strong>（细菌可分解直链；但若过量排入河流，细菌分解过程仍会<strong>消耗水中溶解氧 consume dissolved O<sub>2</sub></strong> 令鱼类缺氧死亡）</td>
              <td>• <strong>早期支链（Branched-chain）：不可生物降解（Non-biodegradable）</strong> → 河面及污水处理厂形成<strong>持久泡沫层（persistent foam）</strong>阻隔阳光和氧气，令水生生物窒息！<br>• <strong>现代直链（Straight-chain）：可生物降解（Biodegradable）</strong>。<br>• 若添加<strong>磷酸盐助洗剂（phosphate builders）</strong>软化硬水 → 引发藻类暴长／红潮（algal bloom / eutrophication）耗尽水中氧气！</td>
            </tr>
          </tbody>
        </table>
      `,
      textbookFormulas: [
        {
          label: '肥皂在硬水中形成钙浮渣离子方程式（Formation of calcium scum in hard water）',
          equationHtml: `2RCOO<sup>−</sup>(aq) + Ca<sup>2+</sup>(aq) <span class="chem-arrow"><span class="cond-top"></span><span class="arr-main">⟶</span><span class="cond-bot"></span></span> (RCOO)<sub>2</sub>Ca(s)`,
          note: '若写硬脂酸根具体式：2CH₃(CH₂)₁₆COO⁻(aq) + Ca²⁺(aq) ⟶ (CH₃(CH₂)₁₆COO)₂Ca(s)（镁离子 Mg²⁺ 同理，计量比必为 2 : 1！）'
        },
        {
          label: '肥皂在酸性溶液中析出脂肪酸沉淀（Precipitation of fatty acid in acidic medium）',
          equationHtml: `RCOO<sup>−</sup>(aq) + H<sup>+</sup>(aq) <span class="chem-arrow"><span class="cond-top"></span><span class="arr-main">⟶</span><span class="cond-bot"></span></span> RCOOH(s)`,
          note: '解释为什么肥皂不可用于酸性染浴或酸雨污染的河水中洗涤'
        }
      ],
      examTrap: '高频易错四连击：① 写浮渣（scum）离子方程式时忘记配平电荷，把 (RCOO)₂Ca(s) 错写成 RCOOCa（Ca²⁺ 是 +2 价，羧酸根是 −1 价，必须 2 : 1 且标固态 (s)！）；② 盐析（salting out）问加浓 NaCl(aq) 的作用，错答成“提供钠离子参加皂化反应”——皂化早在加浓 NaOH 时已完成，加浓 NaCl 纯粹是为了降低肥皂在水中的溶解度使其析出！③ 误以为“可生物降解（biodegradable）清洁剂大量排入河流绝对零污染”——细菌分解大量有机物会耗尽水中溶解氧（dissolved O₂）令水生生物窒息！④ 混淆烃链结构对降解性的影响：记住“直链可降解（straight-chain = biodegradable），支链难降解（branched-chain = non-biodegradable）”！',
      relations: [
        {
          type: 'buildsOn',
          targetUnitId: 'u30',
          label: '联系 Unit 30：顺反异构对熔点的影响（Cis-trans isomerism & packing）',
          why: '植物油含顺式（cis）C=C 双键使烃链弯折、分子难以紧密堆积，熔点低于饱和动物脂肪，完美印证 Unit 30 的堆积理论！'
        },
        {
          type: 'buildsOn',
          targetUnitId: 'u31',
          label: '承接 Unit 31：酯的碱性水解（Alkaline hydrolysis of esters）',
          why: '皂化反应（saponification）本质上就是天然三酯（甘油三酯）与浓 NaOH(aq) 的不可逆碱性水解。'
        }
      ],
      questions: [
        {
          id: 'u33-s3-q1',
          level: 1,
          levelTag: 'Level 1 · 中文直觉破冰',
          type: 'mcq',
          stem: '在实验室将植物油（vegetable oil）与浓氢氧化钠溶液（concentrated NaOH(aq)）共热完成皂化反应（saponification）后，向热混合物中加入浓氯化钠溶液（concentrated NaCl(aq)）的目的是什么？',
          cueWords: [],
          options: [
            'A. 作为催化剂加快皂化反应的速率',
            'B. 中和过量的氢氧化钠溶液',
            'C. 降低肥皂（soap）在水中的溶解度，使固态肥皂析出浮在液面上（盐析 salting out）',
            'D. 把生成的甘油（glycerol）转化为无皂清洁剂'
          ],
          answerIndex: 2,
          hint: '这一步操作叫“盐析（salting out）”——水中 Na⁺ 浓度突然猛增，原本溶解在水里的肥皂（RCOO⁻Na⁺）会怎样？',
          explanation: '皂化反应生成的肥皂（长链羧酸钠）在热水中仍有一定溶解度。加入浓氯化钠溶液（concentrated NaCl(aq)）进行盐析（salting out），可大幅降低肥皂在水中的溶解度（lowers the solubility of soap in water），使固态肥皂沉淀析出并浮于液面以便过滤收集。',
          commonMistake: '误选 B：NaCl 是中性盐，根本不能中和强碱 NaOH！'
        },
        {
          id: 'u33-s3-q2',
          level: 2,
          levelTag: 'Level 2 · 中英过渡实战',
          type: 'mcq',
          stem: 'Which of the following correctly compares a soap, CH₃(CH₂)₁₆COO⁻Na⁺, and a branched-chain soapless detergent, C(CH₃)₃CH₂CH(CH₃)CH₂—C₆H₄—SO₃⁻Na⁺?',
          cueWords: [
            { phrase: 'soap, CH₃(CH₂)₁₆COO⁻Na⁺', zh: '直链肥皂', concept: '硬水中遇 Ca²⁺/Mg²⁺ 结浮渣 (scum)，但直链可被细菌生物降解 (biodegradable)' },
            { phrase: 'branched-chain soapless detergent', zh: '支链无皂清洁剂', concept: '硬水中不结浮渣，但高度支链导致细菌无法分解 (non-biodegradable)，产生持久泡沫！' }
          ],
          options: [
            'A. Both form scum with hard water.',
            'B. Both are rapidly biodegradable by bacteria in rivers.',
            'C. Only the soap forms an insoluble precipitate (scum) in hard water, whereas only the branched-chain soapless detergent causes persistent foam in rivers due to non-biodegradability.',
            'D. The soap is made from petroleum while the soapless detergent is made from animal fat.'
          ],
          answerIndex: 2,
          hint: '抓准两对反差：① 硬水结渣看头部（—COO⁻ 结渣 vs —SO₃⁻ 不结渣）；② 生物降解看尾巴（直链可降解 vs 支链不可降解生持久泡沫）！',
          explanation: '肥皂（—COO⁻）在硬水中与 Ca²⁺/Mg²⁺ 生成不溶性浮渣（scum），但因其碳链为直链且源自天然油脂，可被细菌生物降解（biodegradable）；而支链无皂清洁剂（branched-chain soapless detergent）含 —SO₃⁻ 头部，在硬水中不结浮渣，但细菌无法分解其高度支化的烃链（non-biodegradable），排入河流会产生持久泡沫（persistent foam）阻隔氧气溶解。故选 C。',
          commonMistake: '误以为所有无皂清洁剂都不可生物降解——其实只有“支链（branched-chain）”不可降解，现代“直链（straight-chain）”无皂清洁剂是可生物降解的！'
        },
        {
          id: 'u33-s3-q3',
          level: 3,
          levelTag: 'Level 3 · HKDSE 全英文实战',
          type: 'structured',
          stem: 'Consider two detergents, P and Q, with the following structures:\nDetergent P: CH₃(CH₂)₁₄COO⁻Na⁺\nDetergent Q: CH₃(CH₂)₁₁—C₆H₄—SO₃⁻Na⁺\n(a) Name the natural raw material and the inorganic reagent heated together to manufacture Detergent P, and give the name of the organic by-product formed. (b) Explain, with the aid of an ionic equation, why Detergent Q is more effective than Detergent P for washing clothes in hard water containing Ca²⁺(aq) ions. (c) Even though both P and Q have straight hydrocarbon chains and are biodegradable, explain why discharging large amounts of them into a river still harms aquatic life. (5 marks)',
          cueWords: [
            { phrase: 'Detergent P: CH₃(CH₂)₁₄COO⁻Na⁺', zh: '清洁剂 P（棕榈酸钠，肥皂）', concept: '由动植物油脂与浓 NaOH 共热皂化制得，有机副产物为丙三醇/甘油' },
            { phrase: 'Detergent Q: CH₃(CH₂)₁₁—C₆H₄—SO₃⁻Na⁺', zh: '清洁剂 Q（直链烷基苯磺酸钠）', concept: '无皂清洁剂，钙盐溶于水不结浮渣' },
            { phrase: 'hard water containing Ca²⁺(aq) ions', zh: '含 Ca²⁺(aq) 的硬水', concept: '写配平离子方程式：2CH₃(CH₂)₁₄COO⁻(aq) + Ca²⁺(aq) ⟶ (CH₃(CH₂)₁₄COO)₂Ca(s)' },
            { phrase: 'biodegradable, explain why discharging large amounts of them into a river still harms aquatic life', zh: '虽可生物降解，大量排入河流为何仍危害水生生物', concept: '细菌分解清洁剂会大量消耗水中溶解氧 (dissolved oxygen)！' }
          ],
          hint: '(a) 天然油脂（fat / vegetable oil）+ NaOH(aq)，副产物甘油（propane-1,2,3-triol / glycerol）；(b) 写 2:1 钙浮渣离子方程式并对比 Q 的钙盐可溶；(c) 细菌分解过程消耗水中溶解氧（dissolved O₂）！',
          explanation: '(a) P 为肥皂，由动物脂肪或植物油（animal fat / vegetable oil）与浓氢氧化钠溶液（concentrated NaOH(aq)）共热皂化制得，生成的有机副产物系统命名为丙三醇（propane-1,2,3-triol，俗称甘油 glycerol）。(b) 在硬水中，P 的阴离子与 Ca²⁺(aq) 反应生成不溶性浮渣沉淀：2CH₃(CH₂)₁₄COO⁻(aq) + Ca²⁺(aq) ⟶ (CH₃(CH₂)₁₄COO)₂Ca(s)，浪费肥皂；而 Q 的磺酸钙盐易溶于水，不产生浮渣。(c) 细菌在生物降解大量清洁剂时会消耗水中大量溶解氧（uses up dissolved oxygen in water），导致鱼类及其他水生生物因缺氧窒息死亡。',
          markingScheme: [
            '1M: (a) Raw material & reagent: animal fat / vegetable oil and concentrated sodium hydroxide solution (NaOH(aq)); Organic by-product: propane-1,2,3-triol / glycerol',
            '1M: (b) 2CH₃(CH₂)₁₄COO⁻(aq) + Ca²⁺(aq) ⟶ (CH₃(CH₂)₁₄COO)₂Ca(s)',
            '1M: (b) Detergent P reacts with Ca²⁺(aq) in hard water to form insoluble scum (wasting soap), whereas the calcium salt of Detergent Q is soluble in water (does not form scum)',
            '2M: (c) Bacteria use up a large amount of dissolved oxygen in the water during the breakdown / biodegradation of the detergents (1M), causing aquatic life / fish to suffocate and die due to lack of oxygen (1M)'
          ],
          commonMistake: '在 (a) 要求写有机副产物名称时只写模糊的 "alcohol"，必须准确写出 glycerol 或系统命名 propane-1,2,3-triol！'
        }
      ]
    },

    // ------------------------------------------------------------------------
    // u33-s4: 33.9–33.10 Condensation Polymers: Polyesters & Polyamides
    // ------------------------------------------------------------------------
    {
      id: 'u33-s4',
      code: '33.9–33.10',
      titleEn: 'Condensation polymers: polyesters (PET, PLA) & polyamides (Nylon-6,6)',
      titleZh: '缩合聚合物：聚酯（PET、PLA）与聚酰胺／尼龙（Nylon-6,6）及耐酸碱性',
      analogy: {
        icon: '🧵',
        title: '加聚像“打开双手手拉手”，缩聚像“每扣一个搭扣就掉下一滴水”——酸碱剪刀一剪搭扣就断！',
        body: 'Unit 28 学的加成聚合（addition polymerization）就像一群抱胸站着的人（C=C 双键）同时张开双臂手拉手，一个原子都没少；而缩合聚合（condensation polymerization）则是每个人左右两手都拿着活扣（两端各有一个活性官能团，比如二元酸 HOOC—□—COOH 和二元醇 HO—○—OH），每两个人把扣子扣成酯键（—COO—）或酰胺键（—CONH—）时，就会啪嗒掉出一个小分子（H₂O 或 HCl）！更关键的是：聚乙烯（PE）塑料瓶全身都是结实的 C—C 单键，装强碱通渠水纹丝不动；而矿泉水瓶（PET 聚酯）和尼龙丝袜（Nylon 聚酰胺）靠酯键和酰胺键拼接，一旦碰到浓酸或浓碱，水解反应（hydrolysis）就像一把剪刀把搭扣挨个剪断，瓶子瞬间漏穿、丝袜立刻破洞！'
      },
      coreExplanation: `
        <h4>1. 加成聚合（Addition）vs 缩合聚合（Condensation）全方位对比</h4>
        <table class="chem-table">
          <thead>
            <tr>
              <th>对比维度</th>
              <th>加成聚合反应（Addition polymerization）</th>
              <th>缩合聚合反应（Condensation polymerization）</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>单体官能团要求</strong></td>
              <td>含不饱和<strong>碳碳双键（<code>C=C</code> double bond）</strong>（通常同一种单体自聚，或烯烃共聚）</td>
              <td>每个单体分子必须含有<strong>至少两个活性官能团（at least TWO reactive functional groups，通常位于分子两端）</strong>（可由两种双官能团单体共聚，或由同时含两种不同官能团的单一单体自聚！）</td>
            </tr>
            <tr>
              <td><strong>伴随生成的小分子</strong></td>
              <td><strong>无小分子脱去（No small molecules eliminated）</strong>（100% 原子经济性）</td>
              <td>聚合时<strong>脱去小分子（Eliminates small molecules）</strong>，如 <code>H<sub>2</sub>O</code> 或 <code>HCl</code></td>
            </tr>
            <tr>
              <td><strong>实验式（Empirical formula）</strong></td>
              <td>聚合物与单体的实验式<strong>完全相同</strong></td>
              <td>因脱去了小分子，聚合物与单体的实验式<strong>不同</strong></td>
            </tr>
            <tr>
              <td><strong>耐强酸／强碱腐蚀性</strong></td>
              <td>主链全为非极性 <code>C—C</code> 单键，<strong>耐酸耐碱（resistant to acids &amp; alkalis）</strong></td>
              <td>主链含酯键（<code>—COO—</code>）或酰胺键（<code>—CONH—</code>），<strong>遇强酸或强碱发生水解断裂（hydrolyzed by strong acids or alkalis）</strong>！</td>
            </tr>
          </tbody>
        </table>

        <h4>2. 聚酯（Polyesters — 主链含酯键 Ester Linkage <code>—COO—</code>）</h4>
        <ul class="chem-list">
          <li><strong>王牌代表 ①：聚对苯二甲酸乙二酯（Poly(ethylene terephthalate), PET / Terylene 涤纶）</strong><br>
            • <strong>两种单体：</strong><span class="term">对苯二甲酸 <span class="en">benzene-1,4-dicarboxylic acid</span></span>（<code>HOOC—C<sub>6</sub>H<sub>4</sub>—COOH</code>）+ <span class="term">乙二醇 <span class="en">ethane-1,2-diol</span></span>（<code>HO—CH<sub>2</sub>CH<sub>2</sub>—OH</code>），缩聚脱去 <code>H<sub>2</sub>O</code>（若用对苯二甲酰氯 <code>ClOC—C<sub>6</sub>H<sub>4</sub>—COCl</code> 则脱去 <code>HCl</code>）。<br>
            • <strong>性能与用途：</strong>质轻强韧、防水抗皱 → 制造<strong>碳酸饮料瓶／矿泉水瓶（fizzy drink / water bottles）</strong>及<strong>涤纶衣物纤维（Terylene clothing fibres）</strong>。</li>
          <li><strong>环保代表 ②：聚乳酸（Poly(lactic acid), PLA — 单一单体可生物降解聚酯！）</strong><br>
            • <strong>单一单体：</strong><span class="term">2-羟基丙酸（乳酸） <span class="en">2-hydroxypropanoic acid (lactic acid), CH₃—CH(OH)—COOH</span></span>——同一个分子内<strong>既含 <code>—OH</code> 又含 <code>—COOH</code></strong>！原料源自玉米淀粉（corn starch，可再生资源）。<br>
            • <strong>重复单位（Repeating unit）：</strong><code>—O—CH(CH<sub>3</sub>)—CO—</code>（两端延伸键必画，且<strong>绝不写下标 n</strong>！）。<br>
            • <strong>核心优势与用途：</strong>在潮湿土壤或人体内，主链酯键可缓慢水解断裂，属于<strong>可生物降解塑料（biodegradable polyester）</strong> → 制造<strong>可吸收外科手术缝合线（absorbable surgical sutures / dissolvable stitches）</strong>及环保可堆肥餐具包装！</li>
        </ul>

        <h4>3. 聚酰胺／尼龙（Polyamides / Nylons — 主链含酰胺键 Amide Linkage <code>—CONH—</code>）</h4>
        <ul class="chem-list">
          <li><strong>王牌代表：尼龙-6,6（Nylon-6,6）</strong><br>
            • <strong>工业单体（脱 <code>H<sub>2</sub>O</code>）：</strong><span class="term">己二酸 <span class="en">hexane-1,6-dioic acid</span></span>（<code>HOOC—(CH<sub>2</sub>)<sub>4</sub>—COOH</code>，共 <strong>6 个碳</strong>！）+ <span class="term">己二胺 <span class="en">hexane-1,6-diamine</span></span>（<code>H<sub>2</sub>N—(CH<sub>2</sub>)<sub>6</sub>—NH<sub>2</sub></code>，共 <strong>6 个碳</strong>！）。<br>
            • <strong>学校实验室“尼龙拉丝实验”（Nylon rope trick — 界面缩聚脱 <code>HCl</code>）：</strong>改用活性高得多的<strong><span class="term">己二酰氯 <span class="en">hexanedioyl dichloride, ClOC—(CH₂)₄—COCl</span></span></strong>（溶于环己烷等有机溶剂）与己二胺水溶液在两液界面室温迅速反应拉出尼龙丝！（因为酰氯比羧酸活泼得多，无需高温催化剂即可在室温瞬间缩聚！）<br>
            • <strong>为什么命名为“6,6”？（超高频陷阱！）：</strong>第一个“6”代表<strong>二胺（diamine）含 6 个碳原子</strong>（即 <code>(CH<sub>2</sub>)<sub>6</sub></code>）；第二个“6”代表<strong>二元酸／二酰氯（dioic acid / diacyl dichloride）含 6 个碳原子</strong>——注意两个羰基 <code>C=O</code> 本身已经占了 2 个碳，所以中间<strong>只有 4 个亚甲基 <code>(CH<sub>2</sub>)<sub>4</sub></code></strong>（<code>1 + 4 + 1 = 6C</code>）！千万别把酸那一半错画成 <code>(CH<sub>2</sub>)<sub>6</sub></code>！</li>
          <li><strong>微观结构决定超高强度（Hydrogen bonding between polymer chains）：</strong>相邻尼龙链上的 <strong><code>&gt;C=O</code> 氧原子与另一条链上的 <code>—N—H</code> 氢原子之间形成大量强分子间氢键（strong intermolecular hydrogen bonds between adjacent chains）</strong>！这赋予尼龙极高的<strong>抗拉强度（high tensile strength）</strong>与耐磨弹性 → 制造<strong>登山绳（climbing ropes）、钓鱼线（fishing lines）、降落伞（parachutes）</strong>及丝袜！（拓展：芳香族聚酰胺<strong>凯夫拉 Kevlar</strong> 因含刚性苯环加密集链间氢键，强度堪比钢铁，用于制造<strong>防弹衣 bulletproof vests</strong>！）</li>
        </ul>

        <div class="callout callout-warn">
          <strong>⚠️ 必考生活安全题：为什么绝对不能用 PET 矿泉水瓶分装强碱性通渠水（concentrated NaOH drain cleaner）或强酸？</strong><br>
          因为 <code>PET</code>（聚酯）和 <code>Nylon</code>（聚酰胺）主链中含有大量<strong>酯键（ester linkages, <code>—COO—</code>）或酰胺键（amide linkages, <code>—CONH—</code>）</strong>！遇到强碱 <code>OH<sup>−</sup>(aq)</code> 或强酸 <code>H<sup>+</sup>(aq)</code> 时，酯键／酰胺键会发生<strong>水解反应（hydrolysis）</strong>使高分子长链断裂降解，导致塑料瓶软化破裂泄漏灼伤皮肤！盛载强酸强碱必须改用主链全为稳定 <code>C—C</code> 单键的<strong>高密度聚乙烯（HDPE）或聚丙烯（PP）</strong>容器！
        </div>
      `,
      svgId: 'svg-condensation-polymers',
      svgCaption: '图解：聚酯 PET（含酯键 —COO—）与聚酰胺 Nylon-6,6（含酰胺键 —CONH—，注意酸段为 (CH₂)₄、胺段为 (CH₂)₆！）的标准重复单位及链间氢键／耐酸碱警示',
      textbookFormulas: [
        {
          label: '生成 PET 聚酯的缩聚方程式（Condensation polymerization of PET）',
          equationHtml: `n HOOC—C<sub>6</sub>H<sub>4</sub>—COOH + n HO—CH<sub>2</sub>CH<sub>2</sub>—OH <span class="chem-arrow"><span class="cond-top"></span><span class="arr-main">⟶</span><span class="cond-bot"></span></span> —[ OC—C<sub>6</sub>H<sub>4</sub>—COO—CH<sub>2</sub>CH<sub>2</sub>—O ]—<sub>n</sub> + 2n H<sub>2</sub>O`,
          note: '若题目只要求画 repeating unit（重复单位），务必去掉方括号外的下标 n，只保留两端延伸键：—OC—C₆H₄—COO—CH₂CH₂—O—'
        },
        {
          label: '实验室酰氯法合成尼龙-6,6（Laboratory interfacial polymerization of Nylon-6,6）',
          equationHtml: `n ClOC—(CH<sub>2</sub>)<sub>4</sub>—COCl + n H<sub>2</sub>N—(CH<sub>2</sub>)<sub>6</sub>—NH<sub>2</sub> <span class="chem-arrow"><span class="cond-top">room temp.</span><span class="arr-main">⟶</span><span class="cond-bot"></span></span> —[ OC—(CH<sub>2</sub>)<sub>4</sub>—CONH—(CH<sub>2</sub>)<sub>6</sub>—NH ]—<sub>n</sub> + 2n HCl`,
          note: '脱去小分子 HCl（若用己二酸 HOOC(CH₂)₄COOH 则脱去 2n H₂O）；牢记酸段中间是 (CH₂)₄ 而胺段中间是 (CH₂)₆！'
        },
        {
          label: '单一单体缩聚生成可生物降解聚乳酸 PLA（Self-condensation of 2-hydroxypropanoic acid）',
          equationHtml: `n HO—CH(CH<sub>3</sub>)—COOH <span class="chem-arrow"><span class="cond-top"></span><span class="arr-main">⟶</span><span class="cond-bot"></span></span> —[ O—CH(CH<sub>3</sub>)—CO ]—<sub>n</sub> + n H<sub>2</sub>O`,
          note: '1 个单体同时自带 —OH 和 —COOH，单独写重复单位为：—O—CH(CH₃)—CO—'
        }
      ],
      examTrap: '缩聚物四大扣分雷区：① 画 Nylon-6,6 的重复单位时，看到“6,6”就把两边都写成 (CH₂)₆——大错特错！己二酸两个 C=O 占了 2 个碳，中间只能是 (CH₂)₄（写 (CH₂)₆ 就变成 Nylon-6,8 了）！② 单独画 repeating unit 时多手写下标 n 或漏画两端的延伸共价键（continuation bonds —）；③ 已知缩聚物反推单体（monomer）时，切开酯键 —COO— 或酰胺键 —CONH— 后忘记把脱掉的 —OH 和 —H 补回去（羧酸端补 —OH 变 —COOH，醇/胺端补 —H 变 —OH / —NH₂！）；④ 比较 Nylon-6,6 与聚乙烯（PE）强度时，错答“尼龙共价键更强”——拉伸纤维克服的是链与链之间的分子间作用力：尼龙链间有强氢键（intermolecular hydrogen bonds between >C=O and —NH—），而 PE 链间只有较弱的范德华力（van der Waals\' forces）！',
      relations: [
        {
          type: 'compareWith',
          targetUnitId: 'u28',
          label: '对比 Unit 28：加成聚合物（Addition polymers — PE, PP, PVC, PS）',
          why: '加聚靠 C=C 打开、无小分子脱去且耐酸碱；缩聚靠双端官能团脱去 H₂O/HCl 连接成酯键或酰胺键，遇强酸强碱易水解。'
        },
        {
          type: 'buildsOn',
          targetUnitId: 'u29',
          label: '联系 Unit 29：分子间氢键（Intermolecular hydrogen bonding）',
          why: '尼龙-6,6 惊人的抗拉强度（登山绳、降落伞），正是相邻高分子链间 >C=O 与 H—N 形成密集氢键的宏观体现。'
        }
      ],
      questions: [
        {
          id: 'u33-s4-q1',
          level: 1,
          levelTag: 'Level 1 · 中文直觉破冰',
          type: 'mcq',
          stem: '尼龙-6,6（Nylon-6,6）是由己二酸（hexane-1,6-dioic acid）与己二胺（hexane-1,6-diamine）通过缩合聚合反应（condensation polymerization）制成的聚酰胺（polyamide）。下列哪一个是尼龙-6,6 正确的重复单位（repeating unit）？',
          cueWords: [],
          options: [
            'A. —CO—(CH₂)₆—CO—NH—(CH₂)₆—NH—',
            'B. —CO—(CH₂)₄—CO—NH—(CH₂)₆—NH—',
            'C. —[ CO—(CH₂)₄—CO—NH—(CH₂)₆—NH ]—ₙ',
            'D. —CH₂—CH₂—NH—CO—(CH₂)₄—'
          ],
          answerIndex: 1,
          hint: '连过两关：① 己二酸总共 6 个碳，扣掉左右两个 C=O 的碳，中间剩几个 CH₂？② 单独写“重复单位（repeating unit）”能不能带下标 n？',
          explanation: '己二酸（HOOC—(CH₂)₄—COOH）含 6 个碳原子，其中两个羰基碳（C=O）占 2 个碳，中间只有 4 个亚甲基（(CH₂)₄），因此 A 项多画了 2 个碳；C 项带了下标 n，是聚合物通式（polymer formula）而非单独的重复单位（repeating unit must NOT have subscript n）；只有 B 项碳数准确（4 + 2 = 6C，6C）、含酰胺键且两端带延伸键无下标 n！',
          commonMistake: '考场上最容易误选 A（把己二酸中间写成 (CH₂)₆ 变 8 个碳）或 C（多写了下标 n）！'
        },
        {
          id: 'u33-s4-q2',
          level: 2,
          levelTag: 'Level 2 · 中英过渡实战',
          type: 'mcq',
          stem: 'Poly(3-hydroxybutanoic acid) (PHB) is a biodegradable polyester with the following repeating unit:\n—O—CH(CH₃)—CH₂—CO—\nWhich of the following statements about PHB is/are correct?\n(1) Its monomer is CH₃CH(OH)CH₂COOH.\n(2) Small molecules of H₂O are eliminated when its monomer molecules polymerize.\n(3) Containers made of PHB are suitable for storing concentrated sodium hydroxide drain cleaner.',
          cueWords: [
            { phrase: 'biodegradable polyester', zh: '可生物降解聚酯', concept: '含酯键 —COO—，遇水/酸/碱可水解' },
            { phrase: '—O—CH(CH₃)—CH₂—CO—', zh: '给定重复单位', concept: '左端 —O— 补 H 还原为 —OH，右端 —CO— 补 OH 还原为 —COOH！' },
            { phrase: 'storing concentrated sodium hydroxide drain cleaner', zh: '盛载浓氢氧化钠通渠水', concept: '强碱会催化酯键水解，导致聚酯容器破裂！' }
          ],
          options: [
            'A. (1) only',
            'B. (1) and (2) only',
            'C. (2) and (3) only',
            'D. (1), (2) and (3)'
          ],
          answerIndex: 1,
          hint: '把重复单位左边的 —O— 补上 H 变羟基，右边的 —CO— 补上 —OH 变羧基，看看是不是单一单体缩聚？再想聚酯怕不怕浓 NaOH？',
          explanation: '(1) 正确：在重复单位左端氧原子补 —H、右端羰基碳补 —OH，即得单一单体 3-羟基丁酸 CH₃CH(OH)CH₂COOH（同时含 —OH 和 —COOH）。(2) 正确：羟基与羧基发生缩合聚合（condensation polymerization）生成酯键并脱去小分子 H₂O。(3) 错误：浓 NaOH(aq) 会令 PHB 主链上的酯键（ester linkages）发生碱性水解（alkaline hydrolysis），导致聚合物链断裂、瓶体破损泄漏！故选 B。',
          commonMistake: '反推单体时忘记补回 H₂O 的 —H 和 —OH，误以为单体含 C=C 双键！'
        },
        {
          id: 'u33-s4-q3',
          level: 3,
          levelTag: 'Level 3 · HKDSE 全英文实战',
          type: 'structured',
          stem: 'Poly(ethylene terephthalate) (PET) and Nylon-6,6 are two widely used condensation polymers, whereas high-density polyethene (HDPE) is an addition polymer. (a) Draw the structures of the TWO monomers used to make PET. (b) Explain, in terms of intermolecular forces, why Nylon-6,6 fibres have a much higher tensile strength than HDPE fibres. (c) Explain why concentrated hydrochloric acid or concentrated sodium hydroxide solution is stored in HDPE bottles rather than PET or Nylon-6,6 containers. (5 marks)',
          cueWords: [
            { phrase: 'TWO monomers used to make PET', zh: '制造 PET 的两种单体', concept: '对苯二甲酸 HOOC—C₆H₄—COOH 与乙二醇 HO—CH₂CH₂—OH' },
            { phrase: 'in terms of intermolecular forces, why Nylon-6,6 fibres have a much higher tensile strength than HDPE', zh: '从分子间作用力解释为何尼龙-6,6抗拉强度远高于 HDPE', concept: '尼龙链间形成强氢键 (>C=O 与 —NH—)，而 HDPE 链间仅有较弱范德华力！' },
            { phrase: 'stored in HDPE bottles rather than PET or Nylon-6,6 containers', zh: '盛载于 HDPE 瓶而非 PET 或尼龙容器', concept: '浓酸/浓碱会水解 PET 的酯键及尼龙的酰胺键，而 HDPE 全为稳定 C—C 链不反应' }
          ],
          hint: '(a) 画出对苯二甲酸和乙二醇结构式；(b) 对比尼龙链间的强氢键（hydrogen bonds between >C=O and —NH—）与 HDPE 链间的范德华力（van der Waals\' forces）；(c) 答酯键／酰胺键遇强酸强碱发生水解（hydrolysis）断链。',
          explanation: '(a) PET 的两种单体为对苯二甲酸（benzene-1,4-dicarboxylic acid, HOOC—C₆H₄—COOH）和乙二醇（ethane-1,2-diol, HOCH₂CH₂OH）。(b) Nylon-6,6 相邻高分子链上的 >C=O 基团与 —N—H 基团之间能形成强分子间氢键（strong intermolecular hydrogen bonds），而 HDPE 非极性烃链之间仅存在较弱的范德华力（weak van der Waals\' forces），因此尼龙抗拉强度远高于 HDPE。(c) PET 含酯键（ester linkages），Nylon-6,6 含酰胺键（amide linkages），两者遇浓酸或浓碱均会发生水解反应（hydrolysis）使聚合物链断裂导致容器破损；而 HDPE 主链全由不活泼的 C—C 和 C—H 键组成，对酸碱呈化学惰性。',
          markingScheme: [
            '1M: (a) Monomer 1: HOOC—C₆H₄—COOH (1,4-disubstituted benzene ring clearly shown); Monomer 2: HO—CH₂CH₂—OH',
            '1M: (b) Strong intermolecular hydrogen bonds exist between >C=O groups and —N—H groups of adjacent Nylon-6,6 polymer chains',
            '1M: (b) Only weaker van der Waals\' forces exist between non-polar HDPE polymer chains (and hydrogen bonds are stronger than van der Waals\' forces)',
            '1M: (c) Concentrated acid or alkali catalyzes the hydrolysis of the ester linkages in PET and amide linkages in Nylon-6,6, breaking down the polymer chains',
            '1M: (c) HDPE consists only of unreactive C—C and C—H single bonds and does not react with concentrated acids or alkalis'
          ],
          commonMistake: '在 (b) 只写 "Nylon-6,6 has hydrogen bonds" 而没有指明是相邻高分子链之间（between adjacent polymer chains）以及没对比 HDPE 的 van der Waals\' forces，容易只得 1 分丢 1 分！'
        }
      ]
    }
  ],

  // ==========================================================================
  // UNIT 33 EXAM-STYLE LONG QUESTIONS (2 Comprehensive Multi-Part Questions)
  // ==========================================================================
  unitExamLongQuestions: [
    {
      id: 'u33-long-1',
      title: '综合长题 1：返滴定法测定商用止痛药片中阿司匹林的质量百分比（Back Titration Analysis of Aspirin Tablet）',
      totalMarks: 7,
      scenarioEn: 'Aspirin (acetylsalicylic acid, C₉H₈O₄; molar mass = 180.0 g mol⁻¹) is a common analgesic containing a benzene ring, a carboxyl group and an ester group. To determine the percentage by mass of aspirin in a commercial tablet of mass 1.50 g, a student crushed the tablet and boiled it gently with 25.0 cm³ of 1.00 mol dm⁻³ NaOH(aq) (in excess) for 15 minutes. After cooling, the reaction mixture was transferred quantitatively to a 250.0 cm³ volumetric flask and made up to the mark with deionized water. 25.0 cm³ portions of the diluted solution required an average of 12.60 cm³ of 0.100 mol dm⁻³ HCl(aq) for complete neutralization using phenolphthalein indicator. Assume all other binding ingredients in the tablet are insoluble and inert.',
      scenarioZhSummary: '阿司匹林（乙酰水杨酸，C₉H₈O₄，摩尔质量 180.0 g mol⁻¹）是含有苯环、羧基和酯基的常见止痛药。为测定一颗重 1.50 g 的商用药片中阿司匹林的质量百分比，学生将药片压碎并与过量的 25.0 cm³ 1.00 mol dm⁻³ NaOH(aq) 共沸 15 分钟。冷却后将混合物定量转移至 250.0 cm³ 容量瓶定容。每次移取 25.0 cm³ 稀释液，以酚酞作指示剂，平均需 12.60 cm³ 的 0.100 mol dm⁻³ HCl(aq) 完全中和剩余的 NaOH（假设其他赋形剂惰性不反应）。',
      cueWords: [
        { phrase: 'carboxyl group and an ester group', zh: '含羧基和酯基', concept: '1 mol 阿司匹林与热 NaOH 反应共消耗 2 mol NaOH（1 中和 + 1 水解）！' },
        { phrase: '25.0 cm³ of 1.00 mol dm⁻³ NaOH(aq) (in excess)', zh: '初始过量 NaOH', concept: '初始总 n(NaOH) = 0.0250 mol' },
        { phrase: '250.0 cm³ volumetric flask', zh: '250.0 cm³ 容量瓶定容', concept: '与每次滴定吸取的 25.0 cm³ 构成 ×10 稀释倍数！' },
        { phrase: '12.60 cm³ of 0.100 mol dm⁻³ HCl(aq)', zh: '滴定耗用标准盐酸', concept: '25.0 cm³ 内剩余 NaOH = 0.00126 mol → 250.0 cm³ 总剩余 = 0.0126 mol' },
        { phrase: 'phenolphthalein indicator', zh: '酚酞指示剂', concept: 'HCl 滴入碱性溶液，终点由粉红色变为无色 (from pink to colourless)' }
      ],
      subQuestions: [
        {
          part: '(a)',
          marks: 2,
          promptEn: 'Apart from acting as an analgesic and antipyretic, state ONE medical use of taking low-dose aspirin daily, and explain why taking aspirin may irritate the stomach.',
          commandWord: { word: 'State / Explain', tip: '医疗用途答预防心脏病发作／中风；副作用原因扣紧分子含 -COOH 呈酸性。' },
          hint: '低剂量护心防血栓；胃部不适是因为分子里哪个酸性官能团？',
          markingScheme: [
            '1M: Medical use: preventing heart attacks and strokes (by inhibiting blood clot formation) (or anti-inflammatory for arthritis)',
            '1M: Reason for stomach irritation: aspirin contains a carboxyl group (—COOH) / is acidic, which irritates the stomach lining'
          ],
          explanationZh: '准确写出预防心脏病发作或中风（preventing heart attacks / strokes），并指出阿司匹林因含羧基显酸性（acidic）刺激胃黏膜。'
        },
        {
          part: '(b)',
          marks: 1,
          promptEn: 'State the colour change of the phenolphthalein indicator at the end point of the titration.',
          commandWord: { word: 'State', tip: '看清谁在锥形瓶里！锥形瓶装的是剩余 NaOH(aq)（碱性），滴定管滴下的是 HCl(aq)，故由粉红变无色！' },
          hint: '碱性溶液加酚酞是什么颜色？被 HCl 刚好中和到终点变成什么颜色？',
          markingScheme: [
            '1M: From pink (or red) to colourless'
          ],
          explanationZh: '切勿背反成“由无色变粉红”——返滴定锥形瓶里装的是过量碱液，加酚酞原本是粉红色，滴入盐酸至终点变为无色（from pink to colourless）！'
        },
        {
          part: '(c)',
          marks: 1,
          promptEn: 'Write a chemical equation for the reaction between aspirin (C₆H₄(COOH)(OCOCH₃)) and hot NaOH(aq).',
          commandWord: { word: 'Write', tip: '配平系数 2NaOH，写出水杨酸钠 C₆H₄(COO⁻Na⁺)(OH)、乙酸钠 CH₃COO⁻Na⁺ 及 H₂O！' },
          hint: '羧基变 —COO⁻Na⁺（生成 1 H₂O），酯基断裂变苯环 —OH 和 CH₃COO⁻Na⁺！',
          markingScheme: [
            '1M: C₆H₄(COOH)(OCOCH₃) + 2NaOH(aq) ⟶ C₆H₄(COO⁻Na⁺)(OH)(aq) + CH₃COO⁻Na⁺(aq) + H₂O(l)'
          ],
          explanationZh: '完全依照《Mastering Chemistry》课本标准方程式书写，系数 2 与产物 H₂O 缺一不可。'
        },
        {
          part: '(d)',
          marks: 3,
          promptEn: 'Calculate the percentage by mass of aspirin in the commercial tablet.',
          commandWord: { word: 'Calculate', tip: '按步列式：① 算总剩余 NaOH（乘 10！）与反应掉的 NaOH；② 除以 2 求阿司匹林摩尔数；③ 乘 180.0 除以 1.50 求质量百分比。' },
          hint: 'n(HCl) = 0.00126 mol → 乘 10 得剩余 NaOH = 0.0126 mol → 0.0250 − 0.0126 = 0.0124 mol 反应 → 除以 2 得 0.00620 mol 阿司匹林！',
          markingScheme: [
            '1M: Unreacted NaOH in 250.0 cm³ = (0.100 × 12.60 / 1000) × (250.0 / 25.0) = 0.0126 mol; NaOH reacted with aspirin = (1.00 × 25.0 / 1000) − 0.0126 = 0.0124 mol',
            '1M: Number of moles of aspirin = 0.0124 / 2 = 0.00620 mol (and mass of aspirin = 0.00620 × 180.0 = 1.116 g)',
            '1M: Percentage by mass of aspirin = (1.116 / 1.50) × 100% = 74.4%'
          ],
          explanationZh: '每一步环环相扣：稀释倍数 ×10 和摩尔比 ÷2 是整道 3 分计算题的灵魂所在，算出 74.4% 满分收官！'
        }
      ]
    },
    {
      id: 'u33-long-2',
      title: '综合长题 2：肥皂与无皂清洁剂去污对比及聚酯容器耐碱性分析（Detergents & Condensation Polymer Containers）',
      totalMarks: 8,
      scenarioEn: 'Consider two household cleaning agents and their packaging materials:\n• Cleaning Agent X contains a soap with the structural formula CH₃(CH₂)₁₆COO⁻Na⁺, prepared by boiling animal fat with concentrated NaOH(aq) followed by adding concentrated NaCl(aq).\n• Cleaning Agent Y contains a straight-chain soapless detergent with the structural formula CH₃(CH₂)₁₁—C₆H₄—SO₃⁻Na⁺.\n• Heavy-duty Drain Cleaner Z contains concentrated NaOH(aq) and is sold in polypropene (PP) bottles with a warning label: "Do NOT transfer this liquid into poly(ethylene terephthalate) (PET) water bottles."',
      scenarioZhSummary: '考虑两种家用清洁剂及通渠水的包装材料：清洁剂 X 含肥皂 CH₃(CH₂)₁₆COO⁻Na⁺（将动物脂肪与浓 NaOH(aq) 共沸后再加浓 NaCl(aq) 制得）；清洁剂 Y 含直链无皂清洁剂 CH₃(CH₂)₁₁—C₆H₄—SO₃⁻Na⁺；强效通渠水 Z 含浓 NaOH(aq)，盛装在聚丙烯（PP）塑料瓶中，瓶身印有警告：“切勿将本液体分装入聚对苯二甲酸乙二酯（PET）矿泉水瓶中。”',
      cueWords: [
        { phrase: 'boiling animal fat with concentrated NaOH(aq) followed by adding concentrated NaCl(aq)', zh: '油脂与浓碱共沸后加浓食盐水', concept: '皂化反应 (saponification) + 盐析 (salting out) 降低肥皂溶解度' },
        { phrase: 'CH₃(CH₂)₁₁—C₆H₄—SO₃⁻Na⁺', zh: '直链烷基苯磺酸钠', concept: '无皂清洁剂，两亲结构乳化去污，硬水中不结浮渣' },
        { phrase: 'concentrated NaOH(aq)', zh: '浓氢氧化钠溶液', concept: '强碱会催化水解 PET 中的酯键 (ester linkages)' },
        { phrase: 'Do NOT transfer this liquid into poly(ethylene terephthalate) (PET) water bottles', zh: '切勿转装入 PET 水瓶', concept: 'PET 属缩聚聚酯，酯键遇强碱水解断链导致瓶体破裂泄漏！' }
      ],
      subQuestions: [
        {
          part: '(a)',
          marks: 2,
          promptEn: 'Name the type of reaction between animal fat and concentrated NaOH(aq) in making X, and state the purpose of adding concentrated NaCl(aq) afterwards.',
          commandWord: { word: 'Name / State', tip: '反应名答 saponification（或 alkaline hydrolysis）；加浓 NaCl 答 salting out / 降低肥皂在水中的溶解度使其析出。' },
          hint: '制肥皂的反应叫什么？加饱和食盐水为什么能让肥皂浮上来？',
          markingScheme: [
            '1M: Saponification (accept alkaline hydrolysis)',
            '1M: To lower the solubility of the soap in water so that solid soap precipitates / separates out (salting out)'
          ],
          explanationZh: '精准写出 Saponification 及 lower the solubility of soap in water（盐析原理）。'
        },
        {
          part: '(b)',
          marks: 3,
          promptEn: 'Explain how Cleaning Agent Y acts as an emulsifying agent to remove oily grease from kitchenware when washed with water.',
          commandWord: { word: 'Explain', tip: '浓缩版 3 分乳化模板：① 疏水烃尾溶入油脂、亲水 —SO₃⁻ 头留在水中；② 搅拌剥离成微油滴；③ 表面负电荷同性相斥防聚结，形成乳浊液冲走。' },
          hint: '写出 HKEAA 阅卷最看重的三句话：尾巴溶油头留水 → 搅拌碎成小油滴 → 负电荷排斥不重聚！',
          markingScheme: [
            '1M: The hydrophobic hydrocarbon tails of Y dissolve in the oily grease while the hydrophilic anionic heads (—SO₃⁻) remain in the surrounding water',
            '1M: Upon agitation / rubbing, the grease is lifted from the surface and broken up into tiny negatively charged oil droplets suspended in water',
            '1M: The negative charges on the droplet surfaces repel one another, preventing the oil droplets from coalescing / joining together again (forming a stable oil-in-water emulsion rinsed away by water)'
          ],
          explanationZh: '把乳化去污机理压缩成严丝合缝的 3 个 1M 采分句，任何年份考出来都能拿满全分！'
        },
        {
          part: '(c)',
          marks: 1,
          promptEn: 'Write an ionic equation to show why Cleaning Agent X forms scum when used in hard water containing Mg²⁺(aq) ions.',
          commandWord: { word: 'Write', tip: '注意题干给的是具体化学式 CH₃(CH₂)₁₆COO⁻Na⁺ 和 Mg²⁺(aq)，配平系数 2 : 1 且沉淀标 (s)！' },
          hint: '2 个 CH₃(CH₂)₁₆COO⁻(aq) 配 1 个 Mg²⁺(aq)！',
          markingScheme: [
            '1M: 2CH₃(CH₂)₁₆COO⁻(aq) + Mg²⁺(aq) ⟶ (CH₃(CH₂)₁₆COO)₂Mg(s)'
          ],
          explanationZh: '紧盯题目给出的具体离子（硬脂酸根 + Mg²⁺），切勿照抄 Ca²⁺ 或泛写 RCOO⁻！'
        },
        {
          part: '(d)',
          marks: 2,
          promptEn: 'Draw the repeating unit of PET, and explain the chemical reason behind the warning label on Drain Cleaner Z.',
          commandWord: { word: 'Draw / Explain', tip: '画 PET 重复单位（不写下标 n，两端有延伸键！）；解释浓 NaOH 水解 PET 的酯键导致高分子链断裂、瓶子破损泄漏。' },
          hint: '对苯二甲酰 + 乙二氧基组成重复单位；浓 NaOH 遇到酯键（ester linkages）会发生什么反应？',
          markingScheme: [
            '1M: Correct repeating unit of PET: —OC—C₆H₄—COO—CH₂CH₂—O— (1,4-benzene ring, C=O double bonds and continuation bonds at both ends clearly shown; NO subscript n)',
            '1M: Concentrated NaOH(aq) in Drain Cleaner Z hydrolyzes (attacks) the ester linkages in PET polymer chains, breaking down the polymer and causing the bottle to crack / leak'
          ],
          explanationZh: '把 Unit 31 的酯碱性水解与 Unit 33 的缩聚物结构安全完美融会贯通，这正是 HKDSE 跨单元压轴题最经典的出题方式！'
        }
      ]
    }
  ]
});
