/**
 * Mastering Chemistry (Jing Kung Educational Press, L.H.M. Chung)
 * Book 3A — Topic 7: Fossil Fuels and Carbon Compounds
 * Unit 27: Alkanes and alkenes (烷烃与烯烃)
 * Unit 28: Addition polymers (加成聚合物与塑料)
 */
window.CHEM_UNITS = window.CHEM_UNITS || [];

/* ==========================================================================
 * UNIT 27: ALKANES AND ALKENES (烷烃与烯烃)
 * ========================================================================== */
window.CHEM_UNITS.push({
  id: 'u27',
  unitNum: 'Unit 27',
  book: 'Book 3A · Topic 7',
  topicId: 'topic7',
  titleEn: 'Alkanes and alkenes',
  titleZh: '烷烃与烯烃',
  colorTheme: 'emerald',
  summary: '深入对比饱和碳氢化合物——烷烃（alkanes）与不饱和碳氢化合物——烯烃（alkenes）：掌握烷烃的燃烧与紫外光（UV light）下的自由基取代反应（free radical substitution）三步机理；理解石油馏分裂化（cracking）解决汽油供求失衡及制造烯烃原料的双重价值与防倒吸（sucking back）实验安全；彻底攻克烯烃的加成反应（addition reactions，含溴水 Br₂(aq) 生成溴代醇 bromoalkanol 的经典陷阱）及化学鉴别方法。',
  keyTerms: [
    { en: 'saturated hydrocarbon', zh: '饱和碳氢化合物', cat: 'Concept' },
    { en: 'unsaturated hydrocarbon', zh: '不饱和碳氢化合物', cat: 'Concept' },
    { en: 'complete / incomplete combustion', zh: '完全燃烧 / 不完全燃烧', cat: 'Reaction Type' },
    { en: 'free radical substitution', zh: '自由基取代反应', cat: 'Reaction Type' },
    { en: 'homolytic fission', zh: '均裂', cat: 'Mechanism' },
    { en: 'free radical', zh: '自由基（含未成对电子 unpaired electron）', cat: 'Mechanism' },
    { en: 'Initiation / Propagation / Termination', zh: '链引发 / 链增长（传播） / 链终止', cat: 'Mechanism' },
    { en: 'cracking', zh: '裂化（作用）', cat: 'Industrial Process' },
    { en: 'medicinal paraffin', zh: '药用石蜡油', cat: 'Substance' },
    { en: 'broken porous pot / unglazed porcelain', zh: '碎素瓷片 / 无釉瓷片', cat: 'Apparatus & Catalyst' },
    { en: 'sucking back', zh: '倒吸', cat: 'Lab Safety' },
    { en: 'addition reaction', zh: '加成反应', cat: 'Reaction Type' },
    { en: 'catalytic hydrogenation', zh: '催化加氢反应', cat: 'Reaction Type' },
    { en: 'bromine in organic solvent', zh: '溶于有机溶剂的溴', cat: 'Reagent' },
    { en: 'aqueous bromine (bromine water)', zh: '溴水 Br₂(aq)', cat: 'Reagent' },
    { en: '2-bromoethanol (bromoalkanol)', zh: '2-溴乙醇（溴代醇）', cat: 'Substance' },
    { en: 'acidified potassium permanganate solution', zh: '酸化高锰酸钾溶液 MnO₄⁻(aq)/H⁺(aq)', cat: 'Reagent' },
    { en: 'diol (e.g. ethane-1,2-diol)', zh: '二醇（如乙-1,2-二醇）', cat: 'Compound Class' }
  ],
  sections: [
    /* ----------------------------------------------------------------------
     * Section 27.1–27.2: Alkanes — Unreactivity, Combustion & Free Radical Substitution
     * ---------------------------------------------------------------------- */
    {
      id: 'u27-s1',
      code: '27.1–27.2',
      titleEn: 'Chemical properties of alkanes: Unreactivity, Combustion & Free radical substitution',
      titleZh: '烷烃的化学性质：不活泼性、燃烧与自由基取代反应',
      analogy: {
        icon: '🛡️',
        title: '铜墙铁壁的“满员巴士”：平时高冷不反应，紫外光（UV light）一来引发多米诺骨牌！',
        body: '烷烃（alkane）就像一辆座位全部坐满、车门紧锁的巴士（饱和碳氢化合物 saturated hydrocarbon）：全靠结实且几乎无极性的 C—C 和 C—H 单键连着，酸、碱、氧化剂在室温下统统拿它没办法。想让它改变只有两条路：一是点火燃烧（combustion）释放热能当燃料；二是用紫外光（UV light）或日光（sunlight）把卤素分子（如氯气 Cl₂ 或溴 Br₂）劈成带单个未成对电子的“暴躁乘客”——自由基（free radicals），触发一环扣一环的自由基取代反应（free radical substitution）！'
      },
      coreExplanation: `
        <h4>1. 为什么烷烃（Alkanes）在室温下化学性质极不活泼？</h4>
        <p><span class="term">烷烃 <span class="en">alkanes</span></span>旧称石蜡烃（paraffins，意为“亲和力极小”），属于只含单键的<span class="term">饱和碳氢化合物 <span class="en">saturated hydrocarbons</span></span>。它们在室温下不与酸（acids）、碱（alkalis）、脱水剂（dehydrating agents）或强氧化剂（如 <span class="term">酸化高锰酸钾溶液 <span class="en">acidified KMnO₄(aq)</span></span>）发生反应，微观原因有二：</p>
        <ul class="chem-list">
          <li>分子内的 <code>C—C</code> 和 <code>C—H</code> <span class="term">单共价键非常牢固 <span class="en">strong single covalent bonds</span></span>（键焓高），室温下极难断裂；</li>
          <li>碳与氢的电负性相近，<code>C—C</code> 和 <code>C—H</code> 键几乎是<span class="term">非极性键 <span class="en">non-polar bonds</span></span>，分子没有正负电中心吸引带电试剂进攻。</li>
        </ul>

        <h4>2. 烷烃的燃烧反应（Combustion of Alkanes）</h4>
        <ul class="chem-list">
          <li><strong><span class="term">完全燃烧 <span class="en">complete combustion</span></span>（<span class="term">氧气充足 <span class="en">plentiful supply of oxygen</span></span>）：</strong>生成二氧化碳 <code>CO₂(g)</code> 和水 <code>H₂O(l)</code>，释放大量热能（强放热反应 exothermic），短链气态烷烃呈干净的蓝色或微弱无烟火焰（clean blue / non-luminous flame）。通式：<code>CₙH₂ₙ₊₂ + (3n+1)/2 O₂ ⟶ nCO₂ + (n+1)H₂O</code>。</li>
          <li><strong><span class="term">不完全燃烧 <span class="en">incomplete combustion</span></span>（<span class="term">氧气不足 <span class="en">limited supply of oxygen</span></span>）：</strong>生成剧毒无色无味的<span class="term">一氧化碳 <span class="en">carbon monoxide, CO(g)</span></span>及未燃尽的黑色<span class="term">碳粒 / 黑烟 <span class="en">carbon particulates / soot, C(s)</span></span>，火焰呈明亮黄色并冒黑烟（yellow luminous smoky flame）。碳链越长（碳质量百分比 percentage by mass of carbon 越高），越容易发生不完全燃烧而冒黑烟。</li>
        </ul>

        <h4>3. 与卤素的反应：自由基取代反应（Free Radical Substitution）</h4>
        <p>在<span class="term">黑暗中 <span class="en">in the dark</span></span>室温下，烷烃与<span class="term">氯气 <span class="en">chlorine, Cl₂</span></span>或<span class="term">溴 <span class="en">bromine, Br₂</span></span>混合<strong>无明显变化（no observable change）</strong>。必须提供<strong><span class="term">紫外光 <span class="en">UV light</span></span></strong>、<strong><span class="term">阳光 / 漫射日光 <span class="en">sunlight / diffused sunlight</span></span></strong>或<strong><span class="term">高温加热 <span class="en">heat</span></span></strong>才能引发<span class="term">取代反应 <span class="en">substitution reaction</span></span>（烷烃分子中的氢原子被卤素原子逐一替换）。</p>
        <ul class="chem-list">
          <li><strong>必考实验现象（以己烷 <span class="term">hexane</span> 与 <span class="term">溶于有机溶剂的溴 <span class="en">Br₂ (in organic solvent)</span></span> 在紫外光下反应为例）：</strong>① <strong>红棕色 / 橙色（reddish-brown / orange）</strong>溴溶液在紫外光下<strong>缓慢褪色（decolorizes slowly）</strong>；② 试管口产生<strong>白雾（misty / steamy fumes）</strong>——即生成的卤化氢气体 <code>HBr(g)</code>（若用氯气则为 <code>HCl(g)</code>）遇空气中水蒸气凝结成酸雾，能使湿润蓝色石蕊试纸变红（turns moist blue litmus paper red）。</li>
        </ul>

        <h4>4. 精工版课本三阶段机理（Mechanism of Free Radical Substitution — 以 CH₄ + Cl₂ 为例）</h4>
        <div class="struct-card">
          <pre class="struct-pre">Stage 1: Initiation（链引发）—— 吸收紫外光能量发生均裂（homolytic fission）生成自由基
         UV light
Cl—Cl  ───────────▶  Cl•  +  Cl•     （每个氯自由基 chlorine radical 含 1 个未成对电子 unpaired electron）

Stage 2: Propagation（链增长 / 链传播）—— 自由基攻击分子并不断再生新自由基（连锁反应 chain reaction）
CH₄  +  Cl•   ───▶  •CH₃  +  HCl     （生成甲基自由基 methyl radical •CH₃ 与氯化氢 HCl）
•CH₃ +  Cl₂   ───▶  CH₃Cl +  Cl•     （生成一氯甲烷 chloromethane，同时再生 Cl• 继续下一轮循环！）

Stage 3: Termination（链终止）—— 任意两个自由基结合成稳定分子，消耗自由基使连锁反应停止
Cl•   +  Cl•   ───▶  Cl₂
•CH₃  +  Cl•   ───▶  CH₃Cl
•CH₃  +  •CH₃  ───▶  CH₃CH₃          （副产物中检出微量乙烷 trace amount of ethane，是自由基机理的铁证！）</pre>
          <div class="struct-cap">精工版《Mastering Chemistry》甲烷氯代三步标准写法（阶段英文名必须严丝合缝）</div>
        </div>

        <div class="callout callout-warn">
          <strong>⚠️ 课本与考评局红线规范（严禁超纲失分）：</strong>
          <br>1. 反应条件箭头上方必须写 <code>UV light</code>、<code>sunlight</code> 或 <code>heat</code>，<strong>严禁</strong>写成非中学课本习惯的光物理符号！
          <br>2. 画 <code>Initiation</code> 的<span class="term">电子图 <span class="en">electron diagram</span></span>时：<strong>只画最外层电子（outermost shells only）</strong>，左侧 <code>Cl₂</code> 用两个重叠圆圈（一个 Cl 画 7 个 <code>•</code>，另一个 Cl 画 7 个 <code>×</code>，共用一对点叉电子）；右侧生成的两个氯自由基由于点叉不同，<strong>必须拆开用 <code>+</code> 号相加（<code>Cl• + Cl×</code>）</strong>，绝不可合并写成系数 <code>2</code>，且<strong>绝不画</strong>任何超纲弯箭头！
        </div>

        <h4>5. 多取代混合物（Multi-substitution）与主产物调控</h4>
        <p>生成的一氯甲烷（<code>CH₃Cl</code>）仍含有 <code>C—H</code> 键，会继续与 <code>Cl•</code> 发生取代，依次生成<span class="term">二氯甲烷 <span class="en">dichloromethane, CH₂Cl₂</span></span>、<span class="term">三氯甲烷 <span class="en">trichloromethane, CHCl₃</span></span>和<span class="term">四氯甲烷 <span class="en">tetrachloromethane, CCl₄</span></span>，因此产物必然是多种氯代甲烷的混合物：</p>
        <table class="chem-table">
          <thead>
            <tr>
              <th>想获得的主要有机产物（Desired Major Product）</th>
              <th>应采用的反应物比例条件（Condition / Mole Ratio）</th>
              <th>微观碰撞机理解释（Exam Explanation）</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><span class="term">一氯甲烷 <span class="en">chloromethane (CH₃Cl)</span></span></td>
              <td>使用<strong><span class="term">过量甲烷 <span class="en">excess methane (CH₄)</span></span></strong>（高 <code>CH₄ : Cl₂</code> 比例）</td>
              <td>氯自由基 <code>Cl•</code> 碰撞到大量 <code>CH₄</code> 分子的几率远高于碰撞到少量刚生成的 <code>CH₃Cl</code>，从而减少进一步多取代。</td>
            </tr>
            <tr>
              <td><span class="term">四氯甲烷 <span class="en">tetrachloromethane (CCl₄)</span></span></td>
              <td>使用<strong><span class="term">过量氯气 <span class="en">excess chlorine (Cl₂)</span></span></strong>（高 <code>Cl₂ : CH₄</code> 比例）</td>
              <td>充足的氯自由基将甲烷及其中间氯代物上的全部 4 个氢原子彻底取代为氯原子。</td>
            </tr>
          </tbody>
        </table>
      `,
      svgId: 'svg-free-radical-substitution',
      svgCaption: '精工版必考电子图规范：Initiation 阶段 Cl₂ 在 UV light 下均裂生成两个氯自由基（只画最外层电子，点叉拆开用 + 相加）',
      textbookFormulas: [
        {
          label: '甲烷完全燃烧（Complete combustion of methane）',
          equationHtml: `CH<sub>4</sub>(g) + 2O<sub>2</sub>(g) <span class="chem-arrow"><span class="cond-top"></span><span class="arr-main">⟶</span><span class="cond-bot"></span></span> CO<sub>2</sub>(g) + 2H<sub>2</sub>O(l)`,
          note: '氧气充足时生成 CO₂ 和 H₂O；若氧气不足则发生不完全燃烧生成剧毒 CO(g) 或碳粒 C(s)。'
        },
        {
          label: '甲烷与氯气的单取代总反应（Monosubstitution of methane）',
          equationHtml: `CH<sub>4</sub>(g) + Cl<sub>2</sub>(g) <span class="chem-arrow"><span class="cond-top">UV light</span><span class="arr-main">⟶</span><span class="cond-bot"></span></span> CH<sub>3</sub>Cl(g) + HCl(g)`,
          note: '箭头上方必须注明 UV light（或 sunlight / heat）；若 CH₄ 过量则以 CH₃Cl 为主产物。'
        },
        {
          label: '自由基取代逐步多氯代链条（Multi-substitution to CCl₄）',
          equationHtml: `CH<sub>3</sub>Cl <span class="chem-arrow"><span class="cond-top">Cl<sub>2</sub>, UV light</span><span class="arr-main">⟶</span><span class="cond-bot">−HCl</span></span> CH<sub>2</sub>Cl<sub>2</sub> <span class="chem-arrow"><span class="cond-top">Cl<sub>2</sub>, UV light</span><span class="arr-main">⟶</span><span class="cond-bot">−HCl</span></span> CHCl<sub>3</sub> <span class="chem-arrow"><span class="cond-top">Cl<sub>2</sub>, UV light</span><span class="arr-main">⟶</span><span class="cond-bot">−HCl</span></span> CCl<sub>4</sub>`,
          note: '若使用过量氯气（excess chlorine），最终主要产物为四氯甲烷（tetrachloromethane, CCl₄）。'
        }
      ],
      examTrap: '三大高频扣分点：① 漏写反应条件 UV light / sunlight；② 误写“溴溶液立即褪色”（烷烃在 UV light 下与溴取代是 decolorizes slowly 缓慢褪色，且伴随 HBr 白雾 misty fumes）；③ 在 Propagation 第二步错写成 •CH₃ + Cl• ⟶ CH₃Cl（这是 Termination！Propagation 第二步必须是 •CH₃ + Cl₂ ⟶ CH₃Cl + Cl• 以再生氯自由基）。',
      relations: [
        {
          type: 'buildsOn',
          targetUnitId: 'u26',
          label: '承接 Unit 26：烷烃同系物（Alkane homologous series）与共价单键结构',
          why: '烷烃只含饱和 C—C 与 C—H 单键，决定了它不能发生加成反应，只能发生取代反应。'
        },
        {
          type: 'leadsTo',
          targetUnitId: 'u31',
          label: '通往 Topic 8 Unit 31 & 32：卤代烷（Haloalkanes）的制备与局限',
          why: '正因为烷烃自由基取代会产生多取代混合物（产率低），有机合成中更倾向用烯烃加 HX 来制备纯净卤代烷。'
        }
      ],
      questions: [
        {
          id: 'u27-s1-q1',
          level: 1,
          levelTag: 'Level 1 · 中文直觉破冰',
          type: 'mcq',
          stem: '在阳光（sunlight）或紫外光（UV light）照射下，把己烷（hexane）与溶于有机溶剂的溴（bromine in organic solvent）混合。下列哪一项是正确且完整的实验现象？',
          cueWords: [],
          options: [
            'A. 在黑暗和阳光下都能瞬间褪为无色，且没有任何气体放出',
            'B. 红棕色/橙色溴溶液缓慢褪色（decolorizes slowly），并在管口观察到溴化氢（HBr）白雾（misty fumes）',
            'C. 溶液由橙色变为绿色（from orange to green）',
            'D. 产生大量黑色碳粒沉淀，溶液变成紫色'
          ],
          answerIndex: 1,
          hint: '想一想：烷烃（alkane）发生自由基取代反应（free radical substitution）需要光引发，速率较慢，而且每取代一个 H 原子就会脱出什么无机小分子气体？',
          explanation: '己烷（hexane）在紫外光（UV light）或阳光下与溴发生自由基取代反应（free radical substitution）：红棕色/橙色的溴溶液会缓慢褪色（decolorizes slowly），同时生成的溴化氢气体 HBr(g) 遇空气中的水汽形成白雾（misty fumes）。',
          markingScheme: [
            '1M: Reddish-brown / orange bromine solution decolorizes slowly under UV light / sunlight, with misty fumes of HBr formed.'
          ],
          commonMistake: '混淆烯烃与烷烃：烯烃在黑暗中也能使溴溶液“立即褪色（decolorizes immediately）”且无白雾；烷烃必须在光下才“缓慢褪色”并产生 HBr 白雾。'
        },
        {
          id: 'u27-s1-q2',
          level: 2,
          levelTag: 'Level 2 · 中英过渡辨析',
          type: 'mcq',
          stem: '在甲烷（methane, CH₄）与氯气（chlorine, Cl₂）于紫外光（UV light）下发生的自由基取代反应机理（free radical substitution mechanism）中，下列哪一步属于链增长阶段（Propagation step）？',
          cueWords: [
            { phrase: 'free radical substitution mechanism', zh: '自由基取代反应机理', concept: '严格区分 Initiation、Propagation、Termination 三阶段特征' },
            { phrase: 'Propagation step', zh: '链增长（传播）步骤', concept: '左边是“1 个分子 + 1 个自由基”，右边也生成“1 个新自由基 + 1 个分子”' }
          ],
          options: [
            'A. Cl₂ ⟶ Cl• + Cl• （在 UV light 下）',
            'B. •CH₃ + Cl• ⟶ CH₃Cl',
            'C. •CH₃ + Cl₂ ⟶ CH₃Cl + Cl•',
            'D. •CH₃ + •CH₃ ⟶ CH₃CH₃'
          ],
          answerIndex: 2,
          hint: '记住黄金判据：Initiation 是“0 自由基 ➔ 2 自由基”；Propagation 是“1 自由基进 ➔ 1 自由基出”；Termination 是“2 自由基结合 ➔ 0 自由基”！',
          explanation: 'A 是链引发（Initiation）；B 和 D 都是两个自由基结合消灭自由基的链终止（Termination）；只有 C（•CH₃ + Cl₂ ⟶ CH₃Cl + Cl•）消耗甲基自由基的同时再生了氯自由基 Cl•，使连锁反应得以持续，属于链增长（Propagation）。',
          markingScheme: [
            '1M: •CH3 + Cl2 ⟶ CH3Cl + Cl• represents a propagation step because a chlorine free radical is regenerated to sustain the chain reaction.'
          ],
          commonMistake: '很多同学看到生成主产物 CH₃Cl 就误选 B（•CH₃ + Cl• ⟶ CH₃Cl），忽略了主体产物其实是在 Propagation 第二步（•CH₃ 撞击 Cl₂）中大量生成的！'
        },
        {
          id: 'u27-s1-q3',
          level: 3,
          levelTag: 'Level 3 · HKDSE 英文实战',
          type: 'structured',
          stem: 'Ethane reacts with bromine vapour under UV light via a free radical substitution mechanism to form bromoethane as one of the products. Write chemical equations for the Initiation step and the TWO Propagation steps for the formation of bromoethane, and state how the reaction condition can be adjusted to maximize the yield of bromoethane.',
          cueWords: [
            { phrase: 'Ethane reacts with bromine vapour under UV light', zh: '乙烷与溴蒸气在紫外光下反应', concept: '反应物为 CH₃CH₃ 与 Br₂，条件必须写 UV light' },
            { phrase: 'Initiation step and the TWO Propagation steps', zh: '链引发步骤及两个链增长步骤', concept: '写出 Br₂ 均裂及 •CH₂CH₃ 参与并再生 Br• 的两步方程式' },
            { phrase: 'maximize the yield of bromoethane', zh: '最大化一溴乙烷的产率', concept: '抑制多取代副产物：使用过量烷烃（excess ethane）' }
          ],
          hint: '把甲烷模板里的 CH₄ 换成乙烷 CH₃CH₃（自由基为 •CH₂CH₃ 或 C₂H₅•），Cl₂ 换成 Br₂！想主产一取代物 bromoethane，应该让哪一种反应物过量？',
          explanation: '在紫外光（UV light）下，Br₂ 先均裂产生两个溴自由基（Br•）；随后 Br• 夺取乙烷的一个 H 生成乙基自由基（•CH₂CH₃）和 HBr，乙基自由基再与 Br₂ 反应生成溴乙烷（CH₃CH₂Br）并再生 Br•。使用过量乙烷（excess ethane）可减少多溴代副产物。',
          markingScheme: [
            '1M: Initiation: Br2 --(UV light)--> Br• + Br• (must show UV light and unpaired electron dots)',
            '1M: Propagation: CH3CH3 + Br• ⟶ •CH2CH3 + HBr AND •CH2CH3 + Br2 ⟶ CH3CH2Br + Br•',
            '1M: Use excess ethane (a high mole ratio of ethane to bromine).'
          ],
          commonMistake: '漏写自由基上的单电子圆点（•），或把过量试剂答反成 excess bromine（过量溴会把乙烷一路取代成六溴乙烷 C₂Br₆！）。'
        }
      ]
    },

    /* ----------------------------------------------------------------------
     * Section 27.3: Cracking of Petroleum Fractions
     * ---------------------------------------------------------------------- */
    {
      id: 'u27-s2',
      code: '27.3',
      titleEn: 'Meeting the demand for petrol & alkenes: Cracking of petroleum fractions',
      titleZh: '石油馏分的裂化：解决汽油供求失衡与实验室裂化安全',
      analogy: {
        icon: '🥖',
        title: '把没人买的“两米巨型法棍”，切分成热销“三明治面包”加“万用面团”！',
        body: '原油分馏出来的重油、润滑油馏分（heavy fractions）就像两米长的巨型硬法棍——产量太多卖不掉（供过于求 surplus）；而汽车急需的汽油（petrol）就像小巧松软的三明治面包——天天断货（供不应求 high demand）！裂化（cracking）就是在隔绝空气（absence of air）下用高温和催化剂（catalyst）把大号长链烷烃“咔嚓”剪短：既变出了急需的短链烷烃作额外汽油（extra petrol），又顺带剪出了原油里原本没有的宝贵“万用面团”——烯烃（alkenes），用来造塑料和酒精！'
      },
      coreExplanation: `
        <h4>1. 什么是裂化（Cracking）？为什么要进行裂化？</h4>
        <p><span class="term">裂化 <span class="en">cracking</span></span>是指在<strong><span class="term">隔绝空气 <span class="en">in the absence of air</span></span></strong>的条件下，利用高温及/或<span class="term">催化剂 <span class="en">catalyst</span></span>将相对分子质量较大的重质碳氢化合物大分子断裂（break down covalent bonds）成较小碳氢化合物分子的化学过程。（注：必须隔绝空气，否则烃在高温下会直接燃烧甚至爆炸！）</p>
        <p><strong>HKDSE 必背两大经济与工业原因（Two Economic Reasons for Cracking）：</strong></p>
        <ul class="chem-list">
          <li><strong>① 解决石油馏分供求失衡（Match supply with demand）：</strong>原油分馏产生过剩的<span class="term">重质馏分 <span class="en">surplus heavy fractions</span></span>（需求小、黏度高难燃），而市场对轻质馏分尤其是<span class="term">汽油 <span class="en">petrol</span></span>的需求极大（high demand）。裂化可将过剩重油转化为短链烷烃以提供额外汽油。</li>
          <li><strong>② 生产烯烃作为石化工业原料（Produce alkenes as petrochemical feedstocks）：</strong>原油中几乎不含烯烃；裂化必然副产化学性质活泼的<span class="term">烯烃 <span class="en">alkenes</span></span>（如乙烯 ethene、丙烯 propene），是制造塑料（plastics）、醇类、合成洗涤剂等有机化工产品的核心原料。</li>
        </ul>

        <h4>2. 热裂化（Thermal Cracking）vs 催化裂化（Catalytic Cracking）</h4>
        <table class="chem-table">
          <thead>
            <tr>
              <th>比较维度</th>
              <th><span class="term">热裂化 <span class="en">Thermal cracking</span></span></th>
              <th><span class="term">催化裂化 <span class="en">Catalytic cracking</span></span>（现代炼油厂主流）</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>反应条件</strong></td>
              <td>高温（~700°C）及高压（~30–70 atm），不用催化剂</td>
              <td>较低温度（~500°C）、接近常压（slight pressure），使用<span class="term">沸石 / 氧化铝 / 二氧化硅催化剂 <span class="en">zeolite / Al₂O₃ / SiO₂ catalyst</span></span></td>
            </tr>
            <tr>
              <td><strong>优势与产物特点</strong></td>
              <td>产生较高比例的短链烯烃（如乙烯）</td>
              <td>节省燃料能源、无需昂贵高压设备、反应更快，且生成更多<strong>支链烷烃（branched-chain alkanes）</strong>，得到抗爆震性能更好的优质汽油！</td>
            </tr>
          </tbody>
        </table>

        <h4>3. 如何配平裂化化学方程式（Writing Balanced Cracking Equations）</h4>
        <p>大分子烷烃裂化的切割位置是随机的，因此会生成混合物，但任何一条合法的裂化方程式都必须满足<strong>左右两边 C 原子与 H 原子总数完全守恒</strong>：</p>
        <ul class="chem-list">
          <li><strong>黄金通式 ①（最常考）：</strong><code>长链烷烃 (Long-chain alkane) ⟶ 较短链烷烃 (Shorter alkane) + 一分子或多分子烯烃 (Alkene(s))</code>
            <br>例如癸烷 <code>C₁₀H₂₂</code> 裂化：<code>C₁₀H₂₂ ⟶ C₈H₁₈ + C₂H₄</code>，或 <code>C₁₀H₂₂ ⟶ C₆H₁₄ + 2C₂H₄</code>，或 <code>C₁₀H₂₂ ⟶ C₅H₁₂ + C₃H₆ + C₂H₄</code>。</li>
          <li><strong>补充通式 ②（偶见脱氢）：</strong>生成烯烃与氢气 <code>H₂</code>（如 <code>C₂H₆ ⟶ C₂H₄ + H₂</code>）。<strong>绝对不可能</strong>只生成两个饱和烷烃（因为 <code>CₙH₂ₙ₊₂</code> 拆成两个烷烃还缺 2 个 H 原子！）。</li>
        </ul>

        <h4>4. 学校实验室裂化药用石蜡油（Cracking of Medicinal Paraffin in the Lab）</h4>
        <ul class="chem-list">
          <li><strong><span class="term">矿渣棉 / 玻璃棉 <span class="en">mineral wool / glass wool</span></span>的作用：</strong>吸住液态<span class="term">药用石蜡油 <span class="en">medicinal paraffin</span></span>，防止其直接流向试管中部的高温区而不经气化。</li>
          <li><strong><span class="term">碎素瓷片 / 无釉瓷片 / 氧化铝 <span class="en">broken porous pot / unglazed porcelain / aluminium oxide (Al₂O₃)</span></span>的双重作用：</strong>① 作<strong><span class="term">催化剂 <span class="en">catalyst</span></span></strong>加快裂化反应；② 粗糙多孔结构提供<strong>巨大的受热表面积（large hot surface area）</strong>。实验时对瓷片强热（strong heat），并不时轻掠加热石蜡油使其气化越过炽热催化剂。</li>
          <li><strong>为什么弃去收集到的第一支试管气体（Discard the first tube of gas）？</strong>因为第一管气体主要是受热装置内膨胀排出的<strong>空气（mainly air displaced from the boiling tube）</strong>，而非纯净裂化气。</li>
          <li><strong>为什么生成的裂化气比石蜡油沸点低且能用排水法收集？</strong>裂化生成的气态短链烯烃（如乙烯 <code>C₂H₄</code>）分子尺寸远小于石蜡油，分子间<span class="term">范德华力 <span class="en">van der Waals' forces</span></span>极弱故呈气态；且碳氢化合物<strong>不溶于水且不与水反应（insoluble in water and does not react with water）</strong>。</li>
        </ul>

        <div class="callout callout-warn">
          <strong>⚠️ 实验安全头号必考题——防倒吸（Preventing Sucking Back）：</strong>
          <br>实验结束时，<strong>必须先把导气管移出水面，然后才能停止加热（Remove the delivery tube from the water BEFORE stopping heating）！</strong>
          <br><strong>原因：</strong>若先停火而导气管仍浸在水中，大试管内热气体冷却收缩使气压骤降（pressure drops inside the cooling tube），水槽中的<strong>冷水会被大气压倒吸入滚烫的玻璃大试管中（cold water will be sucked back into the hot boiling tube）</strong>，导致热试管骤冷<strong>炸裂（cracking the hot boiling tube）</strong>！
        </div>
      `,
      svgId: 'svg-cracking-paraffin',
      svgCaption: '实验室裂化药用石蜡油标准装置与三大必考失分警示（催化剂作用、弃去首管空气、先撤导管后停火防倒吸）',
      textbookFormulas: [
        {
          label: '癸烷典型催化裂化方程式（Catalytic cracking of decane）',
          equationHtml: `C<sub>10</sub>H<sub>22</sub>(l) <span class="chem-arrow"><span class="cond-top">Al<sub>2</sub>O<sub>3</sub> or broken porous pot</span><span class="arr-main">⟶</span><span class="cond-bot">heat (absence of air)</span></span> C<sub>8</sub>H<sub>18</sub>(l) + C<sub>2</sub>H<sub>4</sub>(g)`,
          note: 'C₁₀H₂₂（烷烃：2×10+2=22 个 H）裂化为辛烷 C₈H₁₈（烷烃）+ 乙烯 C₂H₄（烯烃），C 与 H 原子完全配平。'
        },
        {
          label: '一分子长链烷烃裂化生成多分子烯烃示例',
          equationHtml: `C<sub>12</sub>H<sub>26</sub>(l) <span class="chem-arrow"><span class="cond-top">catalyst</span><span class="arr-main">⟶</span><span class="cond-bot">heat</span></span> C<sub>6</sub>H<sub>14</sub>(l) + C<sub>4</sub>H<sub>8</sub>(g) + C<sub>2</sub>H<sub>4</sub>(g)`,
          note: '只要满足 1 个短链烷烃（CₙH₂ₙ₊₂）搭配任意个烯烃（CₘH₂ₘ），氢原子数就天然平衡！'
        }
      ],
      examTrap: '回答“为什么把石蜡油浸在矿渣棉上而不直接与碎素瓷片混在一起加热”时，要指出分开摆放才能先将碎素瓷片强热至足够高温，再让石蜡油蒸气通过热瓷片表面发生催化裂化，否则石蜡油还没达到裂化温度就直接挥发溜走了！',
      relations: [
        {
          type: 'buildsOn',
          targetUnitId: 'u25',
          label: '承接 Unit 25：原油分馏（Fractional distillation）各馏分的供求差异',
          why: '分馏是物理分离，无法改变重油多、汽油少的天然比例；裂化则是化学断裂共价键，从根本上改造分子大小。'
        },
        {
          type: 'leadsTo',
          targetUnitId: 'u28',
          label: '直通 Unit 28：加成聚合物（Addition polymers）的单体来源',
          why: '裂化轻油（石脑油 naphtha）或重油产生的乙烯、丙烯，正是制造聚乙烯（PE）和聚丙烯（PP）的源头单体。'
        }
      ],
      questions: [
        {
          id: 'u27-s2-q1',
          level: 1,
          levelTag: 'Level 1 · 中文直觉破冰',
          type: 'mcq',
          stem: '在学校实验室进行药用石蜡油（medicinal paraffin）的催化裂化（catalytic cracking）实验时，停止加热前必须先执行哪项关键安全操作？',
          cueWords: [],
          options: [
            'A. 往水槽中加入冰块使水温降到 0°C',
            'B. 先把导气管从水槽的水面中移出（remove the delivery tube from water），然后再关掉本生灯（Bunsen burner）',
            'C. 先关掉本生灯冷却 5 分钟，再拔出试管塞',
            'D. 向大试管内通入纯氧气帮助残余石蜡烧尽'
          ],
          answerIndex: 1,
          hint: '想一想：如果大试管先停止加热变冷，里面的气体收缩减压，水槽里的冷水会顺着导气管发生什么危险现象？',
          explanation: '停止加热前必须先把导气管移出水面（remove the delivery tube from water before stopping heating），以防止试管内气体冷却收缩引起冷水倒吸（sucking back），导致滚烫的大试管炸裂！',
          markingScheme: [
            '1M: Remove the delivery tube from water before stopping heating to prevent sucking back of cold water.'
          ],
          commonMistake: '操作顺序颠倒写成“先停火再移出导管”——这恰恰会立刻引发倒吸炸裂试管！'
        },
        {
          id: 'u27-s2-q2',
          level: 2,
          levelTag: 'Level 2 · 中英过渡辨析',
          type: 'mcq',
          stem: '十四烷（tetradecane, C₁₄H₃₀）在隔绝空气下经氧化铝（Al₂O₃）催化裂化（catalytic cracking），生成一分子己烷（hexane, C₆H₁₄）、一分子丙烯（propene, C₃H₆）以及一分子碳氢化合物 X。化合物 X 的分子式（molecular formula）及所属同系物（homologous series）是什么？',
          cueWords: [
            { phrase: 'C₁₄H₃₀', zh: '十四烷', concept: '反应物总原子数：14 个 C，30 个 H' },
            { phrase: 'catalytic cracking', zh: '催化裂化', concept: '质量守恒：左右两侧 C、H 原子数严格相等' },
            { phrase: 'homologous series', zh: '同系物类别', concept: '由分子式满足 CₙH₂ₙ₊₂ 还是 CₙH₂ₙ 判定（注意环烷烃之外裂化生成不饱和烯烃）' }
          ],
          options: [
            'A. C₅H₁₂，属于烷烃（alkane）',
            'B. C₅H₁₀，属于烯烃（alkene）',
            'C. C₄H₈，属于烯烃（alkene）',
            'D. C₅H₈，属于炔烃（alkyne）'
          ],
          answerIndex: 1,
          hint: '用减法算原子数：C 原子 = 14 − 6 − 3 = ？；H 原子 = 30 − 14 − 6 = ？看看符不符合烯烃通式 CₙH₂ₙ！',
          explanation: '根据原子守恒：X 的碳原子数 = 14 − 6 − 3 = 5；氢原子数 = 30 − 14 − 6 = 10，故分子式为 C₅H₁₀（如戊-1-烯 pent-1-ene），符合 CₙH₂ₙ，在裂化产物中属于不饱和的烯烃（alkene）。',
          markingScheme: [
            '1M: Molecular formula of X is C5H10, belonging to the alkene homologous series.'
          ],
          commonMistake: '粗心算错氢原子数选成 C₅H₁₂（如果生成两个烷烃 C₆H₁₄ + C₅H₁₂ + C₃H₆，总氢数变成 32 > 30，违背原子守恒！）。'
        },
        {
          id: 'u27-s2-q3',
          level: 3,
          levelTag: 'Level 3 · HKDSE 英文实战',
          type: 'structured',
          stem: 'In the petroleum industry, heavy oil fractions obtained from fractional distillation are subjected to catalytic cracking in the absence of air. Explain TWO economic reasons why oil refineries carry out cracking, and explain why the process must be performed in the absence of air.',
          cueWords: [
            { phrase: 'heavy oil fractions', zh: '重油馏分', concept: '原油分馏中供过于求（surplus）的大分子重质馏分' },
            { phrase: 'TWO economic reasons', zh: '两个经济/工业原因', concept: '① 转化为高需求的汽油（petrol）；② 制造石化原料烯烃（alkenes）' },
            { phrase: 'in the absence of air', zh: '在隔绝空气条件下', concept: '高温有氧气会导致碳氢化合物燃烧甚至爆炸' }
          ],
          hint: '经济原因永远是黄金双子星：① 哪种轻馏分需求远大于供应（petrol）？② 裂化能造出哪种原油里没有、能做塑料的重要原料（alkenes）？至于隔绝空气：高温 + 烃 + 氧气会发生什么？',
          explanation: '炼油厂进行裂化的两大原因：一是将过剩的重油馏分转化为市场需求极大的汽油（petrol）；二是生产烯烃（alkenes，如乙烯）作为制造塑料等石化产品的关键原料。隔绝空气是为了防止碳氢化合物在高温下与氧气发生燃烧或爆炸。',
          markingScheme: [
            '1M: To convert surplus heavy oil fractions into lighter fractions such as petrol which are in much higher demand.',
            '1M: To produce alkenes (e.g. ethene), which are important raw materials / feedstocks for the petrochemical industry (e.g. making plastics).',
            '1M: In the absence of air prevents the hydrocarbons from burning / undergoing combustion (or exploding) at high temperatures.'
          ],
          commonMistake: '只答“把大分子变小分子”（这是裂化的定义而非 economic reasons！必须明确点出 extra petrol 汽油需求与 alkenes 石化原料才能拿满 2 分）。'
        }
      ]
    },

    /* ----------------------------------------------------------------------
     * Section 27.4: Alkenes & Addition Reactions
     * ---------------------------------------------------------------------- */
    {
      id: 'u27-s3',
      code: '27.4',
      titleEn: 'Alkenes: Unsaturated C=C double bond & Four classic addition reactions',
      titleZh: '烯烃：不饱和碳碳双键结构与四大加成反应（含溴水头号陷阱！）',
      analogy: {
        icon: '🤝',
        title: '双手互牵的舞伴（C=C）：松开一只手，立刻向左右新朋友热情牵手！',
        body: '乙烯（ethene, CH₂=CH₂）里的两个碳原子用两双手紧紧互牵（碳碳双键 C=C double bond，共用 2 对共 4 个电子）。遇到外来试剂（如 H₂、Br₂）时，它们不需要踢走原有的氢原子，只需松开其中一只较易打开的手，各自向外伸出一只手把新原子“合二为一”接进来——这就是不掉任何碎屑、只生成一个大分子的加成反应（addition reaction）！但千万小心：如果来的是装满水分子的溴水 Br₂(aq)，水里的 -OH 也会抢着牵手，生成溴代醇（bromoalkanol）而不是二溴代烷！'
      },
      coreExplanation: `
        <h4>1. 烯烃（Alkenes）的不饱和结构与物理、燃烧特性</h4>
        <p><span class="term">烯烃 <span class="en">alkenes</span></span>是含<span class="term">碳碳双键 <span class="en">carbon-carbon double bond (C=C)</span></span>官能团的<span class="term">不饱和碳氢化合物 <span class="en">unsaturated hydrocarbons</span></span>，单双键链状烯烃通式为 <code>CₙH₂ₙ</code>（由 <code>n = 2</code> 的乙烯 <code>C₂H₄</code> 起步，不存在“甲烯”）。</p>
        <ul class="chem-list">
          <li><strong>电子图要点（见下图）：</strong>乙烯 <code>C₂H₄</code> 的两个碳原子重叠圆圈中间必须画出<strong>2 对共用电子（4 个电子）</strong>，且只画最外层电子（outermost shells only）！</li>
          <li><strong>物理性质：</strong><code>C₂–C₄</code> 烯烃在室温常压下为无色气体，<code>C₅</code> 起多为液体；不溶于水，易溶于有机溶剂；随碳链增长，分子间<span class="term">范德华力 <span class="en">van der Waals' forces</span></span>增强，沸点及密度递增。</li>
          <li><strong>燃烧火焰对比：</strong>与含相同碳原子数的烷烃相比，烯烃的<strong>碳质量百分比（percentage by mass of carbon）更高</strong>（如乙烯含碳 85.7% > 乙烷 80.0%），因此在空气中更容易发生不完全燃烧，产生<strong>更明亮且带更多黑烟的黄色火焰（more luminous and smokier yellow flame）</strong>！</li>
        </ul>

        <h4>2. 什么是加成反应（Addition Reaction）？</h4>
        <p><strong>定义：</strong>两个或多个分子结合生成<strong>单一较大分子（a single larger molecule）</strong>且不脱去任何小分子的反应。反应中，不饱和的 <code>C=C</code> 双键打开变成饱和的 <code>—C—C—</code> 单键。</p>

        <h4>3. 精工版 Unit 27 必考四大反应全景对比</h4>
        <table class="chem-table">
          <thead>
            <tr>
              <th>反应名称与试剂条件</th>
              <th>以乙烯（Ethene）为例的产物</th>
              <th>可观察变化（Observable Change）与核心要点</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>① <span class="term">催化加氢 <span class="en">Catalytic hydrogenation</span></span></strong><br><code>H₂(g)</code>，催化剂 <code>Pt</code> / <code>Pd</code>（室温）或 <code>Ni</code>（加热 ~150°C）</td>
              <td><span class="term">乙烷 <span class="en">ethane</span></span><br>(<code>CH₃CH₃</code>)</td>
              <td>将不饱和烯烃转化为饱和烷烃；工业上用于将液态植物油加氢硬化制造人造牛油（margarine）。</td>
            </tr>
            <tr>
              <td><strong>② <span class="term">卤成反应 <span class="en">Halogenation</span></span>（有机溶剂）</strong><br><code>Br₂ (in organic solvent, e.g. CH₃CCl₃)</code> 或 <code>Cl₂</code>，室温<strong>黑暗中亦可</strong></td>
              <td><span class="term">1,2-二溴乙烷 <span class="en">1,2-dibromoethane</span></span><br>(<code>CH₂BrCH₂Br</code>)</td>
              <td><strong>红棕色 / 橙色（reddish-brown / orange）溴溶液在黑暗中亦立即褪为无色（decolorizes immediately）</strong>；<strong>无</strong> HBr 白雾！</td>
            </tr>
            <tr>
              <td><strong>③ 与<span class="term">溴水 <span class="en">aqueous bromine, Br₂(aq)</span></span>反应 ★陷阱！</strong><br><code>Br₂(aq)</code>（含 <code>Br₂ + H₂O ⇌ HOBr + HBr</code>），室温黑暗中亦可</td>
              <td>主产物：<strong><span class="term">2-溴乙醇 <span class="en">2-bromoethanol</span></span></strong><br>(<code>CH₂BrCH₂OH</code>，溴代醇 bromoalkanol) + <code>HBr(aq)</code></td>
              <td><strong>黄棕色 / 橙色（yellow-brown / orange）溴水立即褪为无色（decolorizes immediately）</strong>！注意主产物<strong>不是</strong> <code>CH₂BrCH₂Br</code>（仅极微量副产）！</td>
            </tr>
            <tr>
              <td><strong>④ 与冷稀<span class="term">酸化高锰酸钾溶液 <span class="en">acidified KMnO₄(aq)</span></span>反应</strong><br><code>MnO₄⁻(aq)/H⁺(aq)</code>，室温（属于氧化型加成）</td>
              <td><span class="term">乙-1,2-二醇 <span class="en">ethane-1,2-diol</span></span><br>(<code>HOCH₂CH₂OH</code>，属于<span class="term">二醇 <span class="en">diol</span></span>)</td>
              <td><strong>紫色（purple）溶液立即褪为无色（turns from purple to colourless immediately）</strong>！（注：若用碱性 KMnO₄ 则生成棕色 MnO₂ 沉淀，DSE 默认考酸化 KMnO₄）。</td>
            </tr>
          </tbody>
        </table>

        <div class="callout callout-warn">
          <strong>⚠️ HKDSE 夺命陷阱：<code>Br₂ (in organic solvent)</code> vs <code>Br₂(aq)</code> 产物截然不同！</strong>
          <br>很多同学一看见“乙烯通入溴水 <code>Br₂(aq)</code>”就条件反射写 <code>CH₂BrCH₂Br</code>，直接痛失分数！
          <br>• 若试剂写 <strong><code>Br₂ (in organic solvent)</code></strong>（无水环境）：两个碳各加一个 <code>—Br</code>，生成 <strong><code>CH₂BrCH₂Br</code>（1,2-dibromoethane）</strong>。
          <br>• 若试剂写 <strong><code>Br₂(aq)</code>（aqueous bromine / bromine water 溴水）</strong>：由于溶液中存在大量水分子并与溴平衡生成次溴酸 <code>HOBr(aq)</code>（<code>Br₂(aq) + H₂O(l) ⇌ HOBr(aq) + HBr(aq)</code>），双键两个碳分别加上 <code>—Br</code> 和 <code>—OH</code>，主要有机产物是 <strong><code>CH₂BrCH₂OH</code>（2-bromoethanol，2-溴乙醇）</strong>！
        </div>
      `,
      svgId: 'svg-electron-diagrams-alkanes-alkenes',
      svgCaption: '甲烷（CH₄，饱和单键）与乙烯（C₂H₄，C=C 双键共用 4 个电子）精工版标准电子图对比（只画最外层电子）',
      textbookFormulas: [
        {
          label: '乙烯催化加氢（Catalytic hydrogenation of ethene）',
          equationHtml: `CH<sub>2</sub>=CH<sub>2</sub>(g) + H<sub>2</sub>(g) <span class="chem-arrow"><span class="cond-top">Pt / Pd / Ni</span><span class="arr-main">⟶</span><span class="cond-bot"></span></span> CH<sub>3</sub>CH<sub>3</sub>(g)`,
          note: 'Pt 或 Pd 可在室温下催化；若使用较廉价的镍（Ni）作催化剂通常需加热（heat）。'
        },
        {
          label: '乙烯与溶于有机溶剂的溴加成（Halogenation in organic solvent）',
          equationHtml: `CH<sub>2</sub>=CH<sub>2</sub>(g) + Br<sub>2</sub>(in organic solvent) <span class="chem-arrow"><span class="cond-top"></span><span class="arr-main">⟶</span><span class="cond-bot"></span></span> CH<sub>2</sub>BrCH<sub>2</sub>Br(l)`,
          note: '无需光照，黑暗中瞬间褪色，单一产物为 1,2-二溴乙烷（1,2-dibromoethane）。'
        },
        {
          label: '乙烯与溴水 Br₂(aq) 反应（Reaction with aqueous bromine — DSE 必背！）',
          equationHtml: `CH<sub>2</sub>=CH<sub>2</sub>(g) + Br<sub>2</sub>(aq) + H<sub>2</sub>O(l) <span class="chem-arrow"><span class="cond-top"></span><span class="arr-main">⟶</span><span class="cond-bot"></span></span> CH<sub>2</sub>BrCH<sub>2</sub>OH(aq) + HBr(aq)`,
          note: '课本亦可分步表示为 Br₂(aq) + H₂O(l) ⇌ HOBr(aq) + HBr(aq)，再由 CH₂=CH₂(g) + HOBr(aq) ⟶ CH₂BrCH₂OH(aq)，主要有机产物为 2-溴乙醇（2-bromoethanol）！'
        },
        {
          label: '乙烯与冷稀酸化高锰酸钾溶液反应生成二醇（Formation of diol）',
          equationHtml: `CH<sub>2</sub>=CH<sub>2</sub>(g) + [O] + H<sub>2</sub>O(l) <span class="chem-arrow"><span class="cond-top">MnO<sub>4</sub><sup>−</sup>(aq)/H<sup>+</sup>(aq)</span><span class="arr-main">⟶</span><span class="cond-bot"></span></span> HOCH<sub>2</sub>CH<sub>2</sub>OH(aq)`,
          note: '[O] 代表来自酸化高锰酸钾的氧；紫色 MnO₄⁻(aq) 被还原为无色 Mn²⁺(aq)，生成乙-1,2-二醇（ethane-1,2-diol）。'
        }
      ],
      examTrap: '切记：① 写高锰酸钾颜色变化必须是 "from purple to colourless"（严禁写成 clear！clear 只是澄清透明，紫色高锰酸钾本身也是 clear 的，必须写 colourless 无色！）；② 区分 Br₂(aq) 主产物是 2-bromoethanol 而非 1,2-dibromoethane！',
      relations: [
        {
          type: 'compareWith',
          targetUnitId: 'u27',
          label: '本单元内部强对比：烷烃取代（Substitution）vs 烯烃加成（Addition）',
          why: '烷烃饱和只进必有出（生成 HX 副产物，需 UV light）；烯烃不饱和双键打开只进不出（黑暗中瞬间反应）。'
        },
        {
          type: 'leadsTo',
          targetUnitId: 'u31',
          label: '延伸至 Topic 8 Unit 31：不对称烯烃加卤化氢（HX）与马氏规则（Markovnikov\'s rule）',
          why: '在 Topic 8 中，我们将进一步学习丙烯（propene）加 HBr 时“氢加在含氢较多的双键碳上”的主次产物规律。'
        }
      ],
      questions: [
        {
          id: 'u27-s3-q1',
          level: 1,
          levelTag: 'Level 1 · 中文直觉破冰',
          type: 'mcq',
          stem: '在室温黑暗条件下，将乙烯气体（ethene, CH₂=CH₂）通入橙黄色的溴水（aqueous bromine, Br₂(aq)）中，溴水立即褪为无色。该反应生成的主要有机产物（major organic product）是什么？',
          cueWords: [],
          options: [
            'A. 溴乙烷（bromoethane, CH₃CH₂Br）',
            'B. 1,2-二溴乙烷（1,2-dibromoethane, CH₂BrCH₂Br）',
            'C. 2-溴乙醇（2-bromoethanol, CH₂BrCH₂OH）',
            'D. 乙-1,2-二醇（ethane-1,2-diol, HOCH₂CH₂OH）'
          ],
          answerIndex: 2,
          hint: '看清试剂是溴水 Br₂(aq) 而不是溶于有机溶剂的溴！水分子（或次溴酸 HOBr）会参与加成，一个碳加 -Br，另一个碳加什么？',
          explanation: '在溴水 Br₂(aq) 中存在平衡 Br₂(aq) + H₂O(l) ⇌ HOBr(aq) + HBr(aq)，乙烯与 HOBr（或 Br₂ + H₂O）加成的主要有机产物是 2-溴乙醇（2-bromoethanol, CH₂BrCH₂OH），而 1,2-二溴乙烷仅是极少量副产物！',
          markingScheme: [
            '1M: 2-bromoethanol (CH2BrCH2OH) is the major organic product when ethene reacts with aqueous bromine.'
          ],
          commonMistake: '不看清 "(aq)" 状态符号，盲目背诵“烯烃加溴得二溴代烷”而误选 B！只有用 Br₂ (in organic solvent) 时主产物才是 B。'
        },
        {
          id: 'u27-s3-q2',
          level: 2,
          levelTag: 'Level 2 · 中英过渡辨析',
          type: 'mcq',
          stem: '丁-2-烯（but-2-ene, CH₃CH=CHCH₃）与冷稀酸化高锰酸钾溶液（cold dilute acidified KMnO₄(aq)）发生反应。下列关于该反应的溶液颜色变化及有机产物 IUPAC 名称的组合，哪一项完全正确？',
          cueWords: [
            { phrase: 'but-2-ene', zh: '丁-2-烯', concept: '双键位于第 2、3 号碳之间：CH₃—CH=CH—CH₃' },
            { phrase: 'acidified KMnO₄(aq)', zh: '酸化高锰酸钾溶液', concept: '双键两个碳各加上一个羟基 -OH 形成二醇（diol），MnO₄⁻ 还原为无色 Mn²⁺' }
          ],
          options: [
            'A. 橙色变为绿色（orange to green）；丁-2-醇（butan-2-ol）',
            'B. 紫色变为无色（purple to colourless）；丁-2,3-二醇（butane-2,3-diol）',
            'C. 紫色变为无色（purple to colourless）；丁-1,2-二醇（butane-1,2-diol）',
            'D. 无色变为棕色沉淀；乙酸（ethanoic acid）'
          ],
          answerIndex: 1,
          hint: '先找双键位置：CH₃—CH=CH—CH₃ 的双键在第 2 和第 3 号碳上！打开双键各挂一个 -OH，命名时主链保留完整元音 e（butane-2,3-diol）！',
          explanation: '酸化高锰酸钾溶液（acidified KMnO₄(aq)）由紫色变为无色（from purple to colourless）；丁-2-烯的第 2、3 号双键碳各加上一个 —OH 基，生成 CH₃CH(OH)CH(OH)CH₃，系统命名为丁-2,3-二醇（butane-2,3-diol）。',
          markingScheme: [
            '1M: Colour change from purple to colourless; product is butane-2,3-diol.'
          ],
          commonMistake: '误把酸化重铬酸钾的“橙变绿”套在高锰酸钾上，或忘记双键在 C2=C3 而误选成 1,2-二醇。'
        },
        {
          id: 'u27-s3-q3',
          level: 3,
          levelTag: 'Level 3 · HKDSE 英文实战',
          type: 'structured',
          stem: 'Both butane and but-1-ene are colourless gases at room temperature and pressure. Explain why but-1-ene burns with a smokier flame than butane in air, and write a chemical equation for the catalytic hydrogenation of but-1-ene, stating the catalyst required.',
          cueWords: [
            { phrase: 'burns with a smokier flame', zh: '燃烧时火焰带更多黑烟', concept: '计算或比较两者的碳质量百分比（percentage by mass of carbon）➔ 不完全燃烧程度' },
            { phrase: 'catalytic hydrogenation of but-1-ene', zh: '丁-1-烯的催化加氢反应', concept: 'CH₃CH₂CH=CH₂ + H₂ ⟶ CH₃CH₂CH₂CH₃，需注明 Pt / Pd / Ni 催化剂' }
          ],
          hint: '比较黑烟浓淡的标准采分套路：比较 C₄H₈ 与 C₄H₁₀ 的碳质量百分比（percentage by mass of carbon）➔ 碳占比越高越容易发生什么燃烧（incomplete combustion）生成什么微粒（carbon particulates / soot）？',
          explanation: '丁-1-烯（C₄H₈，含碳 85.7%）的碳质量百分比高于丁烷（C₄H₁₀，含碳 82.8%），因此更容易发生不完全燃烧产生碳粒（soot / carbon particulates）。催化加氢使用 Pt、Pd 或 Ni 作催化剂，将丁-1-烯转化为丁烷。',
          markingScheme: [
            '1M: But-1-ene (C4H8) has a higher percentage by mass of carbon than butane (C4H10) (85.7% vs 82.8%).',
            '1M: Hence but-1-ene is more likely to undergo incomplete combustion to form carbon particulates / soot.',
            '1M: CH3CH2CH=CH2(g) + H2(g) ⟶ CH3CH2CH2CH3(g), catalyst: Pt / Pd / Ni.'
          ],
          commonMistake: '只写“因为丁-1-烯有双键所以黑烟多”，没有写出考评局采分关键词 "higher percentage by mass of carbon" 和 "incomplete combustion"，会直接扣掉前两分！'
        }
      ]
    },

    /* ----------------------------------------------------------------------
     * Section 27.5: Chemical Tests to Distinguish Alkanes and Alkenes
     * ---------------------------------------------------------------------- */
    {
      id: 'u27-s4',
      code: '27.5',
      titleEn: 'Chemical tests to distinguish between alkanes and alkenes',
      titleZh: '化学鉴别满分规范：如何区分烷烃与烯烃（附酸化重铬酸钾禁区）',
      analogy: {
        icon: '🕵️',
        title: '化学侦探的“暗室试金石”：关掉紫外灯，谁能秒变无色谁就是烯烃！',
        body: '面前放着两瓶一模一样的无色液体——己烷（hexane）和己-1-烯（hex-1-ene），怎么在考场上拿满鉴别题的分数？如果你在太阳底下滴加溴溶液，两瓶都会褪色（一快一慢），不够干脆；但只要关进暗处（in the dark），己烷瞬间“装死”毫无变化，而己-1-烯立刻把红棕色溴溶液或紫色酸化高锰酸钾溶液变成无色！千万记住侦探铁律：绝不能拿橙色的酸化重铬酸钾 K₂Cr₂O₇ 去测烯烃——它俩见面谁也不理谁！'
      },
      coreExplanation: `
        <h4>1. HKDSE 标准化学鉴别对照表（Distinguishing Alkanes and Alkenes）</h4>
        <p>在考评局（HKEAA）评分标准中，凡题目要求 <strong>"Describe a chemical test to distinguish..."（描述一项化学测试以鉴别……）</strong>，满分答案必须包含三要素：<strong>① 试剂与关键条件（Reagent &amp; condition）</strong> + <strong>② 烯烃的阳性现象（Positive observation）</strong> + <strong>③ 烷烃的阴性对照现象（Negative observation）</strong>！</p>
        <table class="chem-table">
          <thead>
            <tr>
              <th>推荐化学测试试剂与条件（Reagent &amp; Condition）</th>
              <th><span class="term">烷烃 <span class="en">Alkane</span></span>（如己烷 hexane）的现象</th>
              <th><span class="term">烯烃 <span class="en">Alkene</span></span>（如己-1-烯 hex-1-ene）的现象</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>方法 ①：在黑暗中加入<span class="term">溶于有机溶剂的溴 <span class="en">Br₂ (in organic solvent) in the dark</span></span></strong></td>
              <td><strong>无明显变化（No observable change）</strong>，溶液保持红棕色/橙色。</td>
              <td>红棕色/橙色溴溶液<strong>立即褪为无色（Reddish-brown / orange solution turns colourless immediately）</strong>。</td>
            </tr>
            <tr>
              <td><strong>方法 ②：在黑暗中加入<span class="term">溴水 <span class="en">aqueous bromine, Br₂(aq), in the dark</span></span></strong>并摇匀</td>
              <td><strong>无明显变化（No observable change）</strong>（静置后上层无色有机层，下层仍为黄棕色水层）。</td>
              <td>黄棕色/橙色溴水<strong>立即褪为无色（Yellow-brown / orange Br₂(aq) turns colourless immediately）</strong>（静置分为两层无色液体）。</td>
            </tr>
            <tr>
              <td><strong>方法 ③：加入冷稀<span class="term">酸化高锰酸钾溶液 <span class="en">acidified KMnO₄(aq)</span></span></strong>并摇匀</td>
              <td><strong>无明显变化（No observable change）</strong>，下层水层保持紫色。</td>
              <td><strong>紫色溶液立即褪为无色（Purple solution turns colourless immediately）</strong>。</td>
            </tr>
          </tbody>
        </table>

        <div class="callout callout-tip">
          <strong>💡 为什么要强调写 “in the dark”（在黑暗中 / 避光）？</strong>
          <br>当你选用溴（<code>Br₂ in organic solvent</code> 或 <code>Br₂(aq)</code>）作鉴别试剂时，加上 <strong><code>in the dark</code></strong> 是最稳妥的满分习惯！因为在阳光/紫外光（UV light）下，烷烃也会缓慢发生自由基取代反应使溴褪色；而在黑暗中，烷烃完全不反应（no observable change），烯烃则立即发生加成反应褪色，对比一清二楚！
        </div>

        <div class="callout callout-warn">
          <strong>⚠️ 两大万年丢分禁区（Exam Red Lines）：</strong>
          <br>1. <strong>绝对禁止使用 <span class="term">酸化重铬酸钾溶液 <span class="en">acidified potassium dichromate solution, Cr₂O₇²⁻(aq)/H⁺(aq)</span></span> 检验烯烃！</strong>
          <br>酸化 <code>K₂Cr₂O₇(aq)</code> 的氧化能力不足以氧化碳碳双键 <code>C=C</code>！把烯烃或烷烃加入橙色的酸化 <code>K₂Cr₂O₇(aq)</code> 中，<strong>两者都无明显变化（橙色均不会变绿！）</strong>——酸化重铬酸钾是留到 Topic 8 检验伯醇、仲醇和醛的！
          <br>2. <strong>当题目明确问 “chemical test”（化学测试）时，不要答“点燃比较黑烟多少（combustion test）”！</strong>
          <br>虽然烯烃燃烧比同碳数烷烃黑烟更多，但若未知样品碳数不同（例如长链烷烃 vs 短链烯烃），单凭火焰黑烟难以准确判定官能团；HKEAA 标准答案一律要求使用溴（避光）或酸化 <code>KMnO₄(aq)</code>！
        </div>
      `,
      textbookFormulas: [
        {
          label: '满分英文鉴别题标准答题句式模板（HKEAA Full-Mark Template）',
          equationHtml: `Add <b>Br<sub>2</sub> (in organic solvent) in the dark</b> <span class="chem-arrow"><span class="cond-top">Alkene</span><span class="arr-main">⟶</span><span class="cond-bot"></span></span> decolorizes immediately (Alkane: no observable change)`,
          note: '亦可替换为：Add acidified KMnO₄(aq) to both samples separately. The alkene turns purple acidified KMnO₄(aq) to colourless immediately, while the alkane shows no observable change.'
        }
      ],
      examTrap: '写鉴别题最冤枉的扣分：只写了“己-1-烯使溴水褪色”，却忘了写“而己烷无明显变化（whereas hexane shows no observable change）”！不写阴性对照在 DSE 必定倒扣 1 分！',
      relations: [
        {
          type: 'compareWith',
          targetUnitId: 'u31',
          label: '跨册对比 Topic 8 Unit 31：KMnO₄/H⁺ 与 K₂Cr₂O₇/H⁺ 适用范围大辨析',
          why: 'KMnO₄/H⁺ 既能使烯烃褪色，又能氧化伯/仲醇和醛；而 K₂Cr₂O₇/H⁺ 只能氧化伯/仲醇和醛，对烯烃完全无效！这一差异在综合推断题中价值千金！'
        },
        {
          type: 'leadsTo',
          targetUnitId: 'u28',
          label: '铺垫 Unit 28：检验加成聚合是否完全（Monomer vs Addition Polymer）',
          why: '烯烃单体含 C=C 能使溴水褪色，聚合生成的聚乙烯（PE）变成饱和单键后便不再使溴水褪色！'
        }
      ],
      questions: [
        {
          id: 'u27-s4-q1',
          level: 1,
          levelTag: 'Level 1 · 中文直觉破冰',
          type: 'mcq',
          stem: '某同学想用化学试剂鉴别两瓶无色液体：环己烷（cyclohexane，饱和烷烃类）和环己烯（cyclohexene，含 C=C 双键）。下列哪一种试剂**不能**区分它们？',
          cueWords: [],
          options: [
            'A. 在黑暗中加入溶于有机溶剂的溴（Br₂ in organic solvent, in the dark）',
            'B. 在黑暗中加入溴水（aqueous bromine, Br₂(aq), in the dark）',
            'C. 冷稀酸化高锰酸钾溶液（cold dilute acidified KMnO₄(aq)）',
            'D. 酸化重铬酸钾溶液（acidified potassium dichromate solution, K₂Cr₂O₇(aq)/H⁺(aq)）'
          ],
          answerIndex: 3,
          hint: '回想本节的头号红线：哪一种橙色氧化剂只认 Topic 8 的醇和醛，遇到 C=C 双键完全没反应？',
          explanation: '酸化重铬酸钾溶液（acidified K₂Cr₂O₇(aq)）不能与碳碳双键（C=C）反应，加入环己烷或环己烯中均无明显变化（保持橙色），因此无法鉴别两者！A、B、C 均可被环己烯立即褪色，而环己烷无明显变化。',
          markingScheme: [
            '1M: Acidified potassium dichromate solution does not react with either cyclohexane or cyclohexene.'
          ],
          commonMistake: '以为所有强氧化剂都能氧化烯烃，误把酸化 K₂Cr₂O₇(aq) 当成酸化 KMnO₄(aq) 的平替！'
        },
        {
          id: 'u27-s4-q2',
          level: 2,
          levelTag: 'Level 2 · 中英过渡辨析',
          type: 'mcq',
          stem: '在鉴别丙烷气体（propane）与丙烯气体（propene）时，为什么使用溶于有机溶剂的溴（Br₂ in organic solvent）测试时必须注明“在黑暗中进行（in the dark）”？',
          cueWords: [
            { phrase: 'Br₂ in organic solvent', zh: '溶于有机溶剂的溴', concept: '既可在光下与烷烃取代，也可在暗处与烯烃加成' },
            { phrase: 'in the dark', zh: '在黑暗中', concept: '排除紫外光引发烷烃自由基取代反应的干扰' }
          ],
          options: [
            'A. 因为丙烯（propene）在阳光下不会与溴发生加成反应',
            'B. 因为溴在阳光下会立刻凝固成固体',
            'C. 因为在紫外光或阳光下，丙烷（propane）也能发生自由基取代反应使溴溶液缓慢褪色，干扰鉴别结论',
            'D. 因为黑暗能把丙烷催化裂化成丙烯'
          ],
          answerIndex: 2,
          hint: '如果放在太阳光（含 UV light）底下，丙烷（alkane）会不会也和 Br₂ 反应褪色？',
          explanation: '在阳光或紫外光（UV light）下，丙烷（alkane）也能与 Br₂ 发生自由基取代反应（free radical substitution）使红棕色溴溶液缓慢褪色；在黑暗中（in the dark），丙烷完全不反应，而丙烯（alkene）仍立即发生加成反应褪色，从而实现明确鉴别。',
          markingScheme: [
            '1M: Under sunlight / UV light, propane also decolorizes bromine slowly via free radical substitution; conducting the test in the dark ensures only propene reacts.'
          ],
          commonMistake: '误以为黑暗是为了加快烯烃反应速率（烯烃在光或暗处都瞬间加成，避光纯粹是为了按住烷烃不让它反应！）。'
        },
        {
          id: 'u27-s4-q3',
          level: 3,
          levelTag: 'Level 3 · HKDSE 英文实战',
          type: 'structured',
          stem: 'You are provided with two unlabelled gas jars containing ethane and ethene respectively. Describe ONE chemical test to distinguish between the two gases, stating clearly the reagent(s), condition(s) if any, and the observable changes for BOTH gases.',
          cueWords: [
            { phrase: 'unlabelled gas jars containing ethane and ethene', zh: '分别装有乙烷和乙烯的无标签集气瓶', concept: '饱和烷烃（C₂H₆）vs 不饱和烯烃（C₂H₄）的鉴别' },
            { phrase: 'ONE chemical test', zh: '一项化学测试', concept: '严禁答点燃看黑烟（物理/燃烧现象不被接受为规范 chemical test）' },
            { phrase: 'observable changes for BOTH gases', zh: '两种气体各自的可观察变化', concept: '必须同时写出乙烯褪色 + 乙烷无明显变化（no observable change）' }
          ],
          hint: '任选最拿手的一招：① Br₂(aq) in the dark，或者 ② acidified KMnO₄(aq)！写答案时检查三件事：试剂条件写全了吗？颜色怎么变（colourless）？乙烷的对照写了没？',
          explanation: '将两种气体分别通入避光的溴水（或冷稀酸化高锰酸钾溶液）中：乙烯因含 C=C 双键发生加成反应使溶液立即褪为无色；乙烷为饱和烷烃，无明显变化。',
          markingScheme: [
            '1M: Bubble each gas separately into aqueous bromine (or bromine in organic solvent) in the dark [OR into cold dilute acidified potassium permanganate solution].',
            '1M: Ethene turns the yellow-brown / orange bromine solution (or purple acidified KMnO4 solution) to colourless immediately, whereas ethane shows no observable change.'
          ],
          commonMistake: '把 "turns colourless" 错写成 "turns clear"，或者漏写乙烷的 "no observable change"，都会白白丢掉第 2 分！'
        }
      ]
    }
  ],

  unitExamLongQuestions: [
    {
      id: 'u27-long-1',
      title: '实验综合长题：实验室催化裂化药用石蜡油与溴水加成检验（Cracking & Reaction with Br₂(aq)）',
      totalMarks: 8,
      scenarioEn: 'A student carried out catalytic cracking of medicinal paraffin (containing tetradecane, C14H30) in a horizontal boiling tube using broken porous pot heated strongly. Mineral wool soaked with medicinal paraffin was placed at the closed end of the boiling tube, and the gaseous product was collected over water in inverted test tubes. When the gaseous product was bubbled into aqueous bromine in the dark, the solution turned colourless immediately.',
      scenarioZhSummary: '一名学生在水平大试管中使用强热的碎素瓷片（broken porous pot）对浸在矿渣棉上的药用石蜡油（含十四烷 C₁₄H₃₀）进行催化裂化（catalytic cracking），并用排水法收集气态产物。将收集到的气体在黑暗中通入溴水（aqueous bromine, Br₂(aq)）时，溶液立即褪为无色。',
      cueWords: [
        { phrase: 'catalytic cracking of medicinal paraffin', zh: '药用石蜡油的催化裂化', concept: '大分子烷烃在隔绝空气与催化剂下断裂为短链烷烃 + 烯烃' },
        { phrase: 'broken porous pot heated strongly', zh: '强热的碎素瓷片', concept: '充当催化剂（catalyst）并提供巨大受热表面积' },
        { phrase: 'collected over water', zh: '排水法收集气体', concept: '首管气体含空气需弃去；停火前必须移出导管防倒吸（sucking back）' },
        { phrase: 'bubbled into aqueous bromine in the dark', zh: '在黑暗中通入溴水 Br₂(aq)', concept: '生成主产物溴代醇（如 2-bromoethanol）而非二溴代烷！' }
      ],
      subQuestions: [
        {
          part: '(a)',
          marks: 1,
          promptEn: 'Write a chemical equation for the cracking of one molecule of tetradecane (C14H30) to form one molecule of octane (C8H18) and ethene as the ONLY alkene product.',
          commandWord: { word: 'Write a chemical equation', tip: '仔细数清碳氢原子配平系数：14 − 8 = 6 个碳，对应几分子乙烯（C₂H₄）？' },
          hint: 'C₁₄H₃₀ 减去 C₈H₁₈ 还剩 C₆H₁₂，正好是 3 个 C₂H₄ 分子！',
          markingScheme: [
            '1M: C14H30 ⟶ C8H18 + 3C2H4'
          ],
          explanationZh: '14 个碳减去辛烷的 8 个碳剩 6 个碳，由于乙烯是唯一烯烃产物（每个乙烯含 2 个碳），系数必为 3，氢原子 18 + 3×4 = 30 完全守恒。'
        },
        {
          part: '(b)',
          marks: 2,
          promptEn: 'State the role of the broken porous pot in this experiment, and explain why the first test tube of gas collected should be discarded.',
          commandWord: { word: 'State & Explain', tip: '一题两问（role + why discard first tube），分段清晰作答稳拿 2 分。' },
          hint: '碎素瓷片是什么剂（catalyst）？加热前大试管里原本装满了什么（air）？',
          markingScheme: [
            '1M: Broken porous pot acts as a catalyst (and provides a hot large surface area for cracking).',
            '1M: The first test tube of gas contains mainly air displaced from the heated apparatus / boiling tube.'
          ],
          explanationZh: '碎素瓷片（broken porous pot）起催化剂（catalyst）作用并提供巨大高温接触面积；第一支试管收集到的气体主要是大试管内受热膨胀排出的空气（displaced air）。'
        },
        {
          part: '(c)',
          marks: 2,
          promptEn: 'State ONE essential safety precaution before stopping heating at the end of the experiment, and explain why this precaution is necessary.',
          commandWord: { word: 'State & Explain', tip: '先写具体动作（Remove delivery tube from water before...），再写因果（prevent sucking back... crack hot tube）。' },
          hint: '先撤导管还是先关火？如果不这样做，试管冷却减压会让冷水干什么？',
          markingScheme: [
            '1M: Remove the delivery tube from the water before stopping heating.',
            '1M: To prevent sucking back of cold water into the hot boiling tube, which would crack the hot glass tube.'
          ],
          explanationZh: '停止加热前必须先将导气管移出水面，防止试管内热气体冷却收缩减压导致冷水倒吸（sucking back）炸裂炽热的玻璃大试管。'
        },
        {
          part: '(d)',
          marks: 3,
          promptEn: 'Assuming the gaseous alkene collected is ethene, name the type of reaction taking place when it is bubbled into aqueous bromine in the dark, write a chemical equation for the formation of the major organic product, and give its systematic IUPAC name.',
          commandWord: { word: 'Name & Write', tip: '看准 aqueous bromine！方程式必须有 H₂O（或 HOBr）参与，主产物是醇类衍生物 2-bromoethanol！' },
          hint: '反应类型是 addition reaction；乙烯 + Br₂(aq) + H₂O(l) 生成什么溴代醇和 HBr(aq)？',
          markingScheme: [
            '1M: Addition reaction',
            '1M: CH2=CH2(g) + Br2(aq) + H2O(l) ⟶ CH2BrCH2OH(aq) + HBr(aq) (Accept Br2(aq) + H2O(l) ⇌ HOBr(aq) + HBr(aq) followed by CH2=CH2(g) + HOBr(aq) ⟶ CH2BrCH2OH(aq))',
            '1M: 2-bromoethanol'
          ],
          explanationZh: '乙烯与溴水发生加成反应（addition reaction）；因水分子参与（生成次溴酸 HOBr），主要有机产物为 2-溴乙醇（2-bromoethanol, CH₂BrCH₂OH），而非 1,2-二溴乙烷！'
        }
      ]
    },
    {
      id: 'u27-long-2',
      title: '机理与鉴别综合长题：甲烷与氯气的自由基取代机理及烃类鉴别（Free Radical Substitution & Chemical Test）',
      totalMarks: 8,
      scenarioEn: 'A mixture of methane and chlorine is kept in a gas jar in the dark at room temperature, and no reaction occurs. When the gas jar is exposed to UV light, a vigorous chain reaction takes place to produce chloromethane, hydrogen chloride, higher chlorinated methanes, and a trace amount of ethane.',
      scenarioZhSummary: '将甲烷（methane）和氯气（chlorine）混合置于室温黑暗处的集气瓶中，不发生任何反应。当集气瓶暴露于紫外光（UV light）下时，发生剧烈的连锁反应，生成一氯甲烷（chloromethane）、氯化氢、多氯代甲烷以及微量的乙烷（trace amount of ethane）。',
      cueWords: [
        { phrase: 'in the dark at room temperature, and no reaction occurs', zh: '室温黑暗处不发生反应', concept: 'Cl—Cl 键均裂需要紫外光（UV light）提供能量' },
        { phrase: 'exposed to UV light', zh: '暴露于紫外光下', concept: '触发自由基取代反应（free radical substitution）的 Initiation 阶段' },
        { phrase: 'higher chlorinated methanes', zh: '多氯代甲烷（CH₂Cl₂, CHCl₃, CCl₄）', concept: '自由基连续多取代产物，可通过调节反应物摩尔比控制主产物' },
        { phrase: 'trace amount of ethane', zh: '微量乙烷（CH₃CH₃）', concept: 'Termination 链终止阶段两个甲基自由基 •CH₃ 偶联的直接证据' }
      ],
      subQuestions: [
        {
          part: '(a)',
          marks: 3,
          promptEn: 'Name the reaction mechanism between methane and chlorine under UV light. Write equations for the Initiation step and the TWO Propagation steps leading to the formation of chloromethane.',
          commandWord: { word: 'Name & Write equations', tip: '机理全称必须含 free radical substitution；Initiation 箭头上注明 UV light，自由基标明单电子圆点 •。' },
          hint: '机理名：Free radical substitution。Initiation 拆 Cl₂；Propagation 第一步 CH₄ + Cl•，第二步 •CH₃ + Cl₂！',
          markingScheme: [
            '1M: Free radical substitution',
            '1M: Initiation: Cl2 --(UV light)--> Cl• + Cl•',
            '1M: Propagation: CH4 + Cl• ⟶ •CH3 + HCl AND •CH3 + Cl2 ⟶ CH3Cl + Cl•'
          ],
          explanationZh: '反应机理为自由基取代反应（free radical substitution）。链引发（Initiation）在 UV light 下使 Cl₂ 均裂为两个 Cl•；链增长（Propagation）分两步生成 CH₃Cl 并再生 Cl•。'
        },
        {
          part: '(b)',
          marks: 2,
          promptEn: 'Name the stage of the mechanism in which the trace amount of ethane is formed, and write an equation to show its formation.',
          commandWord: { word: 'Name & Write', tip: '两个甲基自由基撞在一起消灭了自由基，属于三阶段中的最后一步！' },
          hint: '两个 •CH₃ 结合生成 CH₃CH₃，这属于 Initiation、Propagation 还是 Termination？',
          markingScheme: [
            '1M: Termination (stage / step)',
            '1M: •CH3 + •CH3 ⟶ CH3CH3 (or C2H6)'
          ],
          explanationZh: '微量乙烷是在链终止阶段（Termination）中由两个甲基自由基（•CH₃）结合生成稳定分子而产生的。'
        },
        {
          part: '(c)',
          marks: 1,
          promptEn: 'State how the reactant mole ratio should be adjusted if tetrachloromethane (CCl4) is desired as the major organic product.',
          commandWord: { word: 'State', tip: '一句话精准点明“谁过量（excess）”即可拿分。' },
          hint: '想把甲烷上的 4 个 H 统统换成 Cl，应该让甲烷过量还是氯气过量？',
          markingScheme: [
            '1M: Use a large excess of chlorine (a high mole ratio of Cl2 to CH4).'
          ],
          explanationZh: '使用大量过量的氯气（excess chlorine），使一氯甲烷继续被取代直至全部氢原子被替换为氯，生成四氯甲烷（CCl₄）。'
        },
        {
          part: '(d)',
          marks: 2,
          promptEn: 'Suppose another unlabelled bottle contains liquid hex-1-ene while a second bottle contains liquid hexane. Describe a chemical test using an acidified oxidizing agent to distinguish between them, stating the observable changes for BOTH liquids.',
          commandWord: { word: 'Describe a chemical test', tip: '题目限定 acidified oxidizing agent！千万选 acidified KMnO₄(aq)，绝不可选 K₂Cr₂O₇(aq)！' },
          hint: '酸化高锰酸钾溶液是什么颜色？遇到己-1-烯变成什么颜色？遇到己烷呢？',
          markingScheme: [
            '1M: Add cold dilute acidified potassium permanganate solution (KMnO4(aq)/H+(aq)) to each liquid separately and shake.',
            '1M: Hex-1-ene turns the purple solution colourless immediately, whereas hexane shows no observable change.'
          ],
          explanationZh: '选用冷稀酸化高锰酸钾溶液（acidified KMnO₄(aq)）：己-1-烯使紫色溶液立即褪为无色，而己烷无明显变化（千万不可误用酸化重铬酸钾！）。'
        }
      ]
    }
  ]
});

/* ==========================================================================
 * UNIT 28: ADDITION POLYMERS (加成聚合物与塑料)
 * ========================================================================== */
window.CHEM_UNITS.push({
  id: 'u28',
  unitNum: 'Unit 28',
  book: 'Book 3A · Topic 7',
  topicId: 'topic7',
  titleEn: 'Addition polymers',
  titleZh: '加成聚合物与塑料',
  colorTheme: 'violet',
  summary: '揭秘现代社会不可或缺的合成塑料（plastics）：理解热塑性塑料（thermoplastics）受热软化重塑的微观原理与加成聚合反应（addition polymerization）100% 原子经济的特征；熟练掌握单体（monomer）、聚合物（polymer）与重复单位（repeating unit，带延伸键且绝不写下标 n！）的互推技巧；吃透精工版课本七大经典加成聚合物（LDPE、HDPE、PP、PVC、PS、Perspex、PTFE）的“微观结构 ➔ 链间范德华力 ➔ 宏观性质（包括增塑剂 plasticizer 与发泡剂 blowing agent）”满分因果链，并客观评估堆填、焚化、回收再造与热裂解（pyrolysis）四大塑料废物管理方案。',
  keyTerms: [
    { en: 'plastic', zh: '塑料', cat: 'Material' },
    { en: 'thermoplastic', zh: '热塑性塑料', cat: 'Material' },
    { en: 'addition polymerization', zh: '加成聚合反应', cat: 'Reaction Type' },
    { en: 'monomer', zh: '单体', cat: 'Polymer Concept' },
    { en: 'polymer', zh: '聚合物', cat: 'Polymer Concept' },
    { en: 'repeating unit', zh: '重复单位', cat: 'Polymer Concept' },
    { en: 'low-density polyethene (LDPE)', zh: '低密度聚乙烯', cat: 'Polymer' },
    { en: 'high-density polyethene (HDPE)', zh: '高密度聚乙烯', cat: 'Polymer' },
    { en: 'polypropene (PP)', zh: '聚丙烯', cat: 'Polymer' },
    { en: 'polyvinyl chloride / poly(chloroethene) (PVC)', zh: '聚氯乙烯', cat: 'Polymer' },
    { en: 'plasticizer', zh: '增塑剂', cat: 'Additive' },
    { en: 'polystyrene / poly(phenylethene) (PS)', zh: '聚苯乙烯', cat: 'Polymer' },
    { en: 'expanded polystyrene (EPS)', zh: '发泡聚苯乙烯（发泡胶）', cat: 'Material' },
    { en: 'Perspex (poly(methyl 2-methylpropenoate))', zh: '有机玻璃（聚 2-甲基丙烯酸甲酯）', cat: 'Polymer' },
    { en: 'polytetrafluoroethene (PTFE / Teflon)', zh: '聚四氟乙烯（特氟龙）', cat: 'Polymer' },
    { en: 'non-biodegradable', zh: '不可生物降解的', cat: 'Environmental' },
    { en: 'landfilling / incineration / recycling', zh: '堆填 / 焚化 / 回收再造', cat: 'Waste Management' },
    { en: 'pyrolysis', zh: '热裂解', cat: 'Waste Management' }
  ],
  sections: [
    /* ----------------------------------------------------------------------
     * Section 28.1–28.4: Plastics, Thermoplastics & Addition Polymerization
     * ---------------------------------------------------------------------- */
    {
      id: 'u28-s1',
      code: '28.1–28.4',
      titleEn: 'Plastics, Thermoplastics & Mechanism of Addition Polymerization',
      titleZh: '塑料、热塑性塑料与加成聚合反应（含重复单位书写铁律）',
      analogy: {
        icon: '🚃',
        title: '千节车厢挂钩连成超长高铁：H 字折翼连成链，切两碳还原回单体！',
        body: '把每一个烯烃单体（monomer）想象成一节双手抱胸（C=C 双键）的独立车厢。发生加成聚合（addition polymerization）时，所有车厢同时打开一只手，向左右两边伸出去首尾相连（C—C 单键），拼成一列由几千节车厢组成的超长列车——加成聚合物（addition polymer），全程不掉一颗螺丝（不脱去任何小分子）！只要学会把单体的双键摆在正中间排成“H 字形”，无论题目给你多复杂的烯烃，你都能一秒写出零失误的重复单位（repeating unit）！'
      },
      coreExplanation: `
        <h4>1. 为什么塑料（Plastics）能广泛取代金属、木材与玻璃？</h4>
        <p><span class="term">塑料 <span class="en">plastics</span></span>主要由石油馏分（如石脑油 naphtha）经裂化产生的小分子烯烃聚合而成的<span class="term">合成聚合物 <span class="en">synthetic polymers</span></span>，再配合染料、稳定剂或增塑剂制成。它的通用优势包括：密度低质轻（lightweight）、耐用且抗水抗酸碱腐蚀（corrosion-resistant and chemically unreactive）、良好的电绝缘体与热绝缘体（good electrical and thermal insulators）、易塑造成复杂形状（easily moulded）、易染色且大批量生产成本低。</p>

        <h4>2. 热塑性塑料（Thermoplastics）的微观特征与无固定熔点原因</h4>
        <ul class="chem-list">
          <li><strong>所有加成聚合物都属于<span class="term">热塑性塑料 <span class="en">thermoplastics</span></span>：</strong>由许多<strong>独立的长聚合物链（separate long polymer chains）</strong>组成，链内原子由牢固共价键连接，但<strong>链与链之间没有共价交联键（NO covalent cross-links between chains），仅靠微弱的分子间<span class="term">范德华力 <span class="en">van der Waals' forces</span></span>吸引</strong>！因此加热时链间容易克服范德华力互相滑移（slide past one another），表现为<strong>受热软化或熔融、冷却后重新硬化（soften/melt upon heating and harden upon cooling）</strong>，可反复加热重塑（remoulded）。</li>
          <li><strong>为什么聚合物没有固定的相对分子质量（no fixed relative molecular mass）和尖锐熔点（no sharp melting point）？</strong>因为同一份聚合物样品是由<strong>不同链长（即聚合度 <code>n</code> 值不同）的大分子组成的混合物（a mixture of polymeric molecules of different chain lengths）</strong>，故只能在一段温度范围内逐渐软化熔融（melts over a range of temperatures）。</li>
        </ul>

        <h4>3. 加成聚合反应（Addition Polymerization）定义与反应本质</h4>
        <p><strong>定义：</strong>大量不饱和<span class="term">单体 <span class="en">monomer</span></span>分子（含碳碳双键 <code>C=C</code>）互相反复加成连接生成超大<span class="term">聚合物 <span class="en">polymer</span></span>大分子，且<strong>不生成/不脱去任何小分子（without losing any small molecules）</strong>的反应（原子经济性 100%，聚合物的实验式 empirical formula 与单体完全相同！）。</p>
        <p><strong>饱和性变化：</strong>聚合后，原本不饱和的 <code>C=C</code> 双键已全部打开变成饱和的 <code>—C—C—</code> 单键，因此生成的加成聚合物（如聚乙烯 polyethene）化学性质稳定，<strong>不能使溴溶液或酸化高锰酸钾溶液褪色</strong>！</p>

        <h4>4. “H 字排布法”写重复单位（Repeating Unit）与“两碳切片法”反推单体</h4>
        <ul class="chem-list">
          <li><strong>正向画 <span class="term">重复单位 <span class="en">repeating unit</span></span>（例如由丁-2-烯 <code>CH₃CH=CHCH₃</code> 聚合）：</strong>
            <br>① 严禁把 4 个碳横排成一条直线！必须把 <code>C=C</code> 双键中的<strong>2 个碳原子</strong>摆在水平中央，其余 4 个基团（两个 <code>—CH₃</code> 和两个 <code>—H</code>）竖直朝上朝下排成标准 <strong>“H 字形”</strong>；
            <br>② 将 <code>C=C</code> 改为单键 <code>C—C</code>，向左右两端画出<strong>延伸共价键（continuation bonds <code>—</code>）</strong>；
            <br>③ <strong>生死红线：</strong>写聚合物结构式或方程式时方括号右下角<strong>必须写下标 <code>n</code></strong>；但当题目要求画 <strong><code>repeating unit</code>（重复单位）</strong>时，两端必须伸出延伸键，且<strong>绝对禁止写下标 <code>n</code></strong>！</li>
          <li><strong>逆向由复杂聚合物长链反推单体（“主链两碳切片法”）：</strong>沿着聚合物的水平连续碳主链，<strong>每 2 个主链碳原子切一刀</strong>，擦掉左右两端的延伸单键，把这两个主链碳之间的单键恢复成 <strong><code>C=C</code> 双键</strong>，即得原单体结构！（若切片发现奇偶单元不同，说明是由两种不同烯烃共聚而成的共聚物 copolymer！）</li>
        </ul>

        <div class="struct-card">
          <pre class="struct-pre">【经典易错示范：丁-2-烯 (but-2-ene, CH₃CH=CHCH₃) 的加成聚合】
   CH₃   CH₃                  CH₃   CH₃                     CH₃   CH₃
    |     |                    |     |                       |     |
n   C === C    ──────────▶  —[ C ——— C ]—       重复单位： — C ——— C —
    |     |                    |     |         (Repeating    |     |
    H     H                    H     H  n       unit: 无 n!) H     H
  Monomer 单体               Polymer 聚合物               Repeating unit</pre>
          <div class="struct-cap">切记：任何单双键烯烃聚合后，每个重复单位的主链上永远只有 2 个碳原子！甲基等支链一律竖着挂在上下方！</div>
        </div>
      `,
      svgId: 'svg-addition-polymerization',
      svgCaption: '精工版必拿分作图规范：单体（Monomer）➔ 聚合物（Polymer，带 n）➔ 重复单位（Repeating Unit，两端有延伸键且绝不写 n！）',
      textbookFormulas: [
        {
          label: '乙烯加成聚合生成聚乙烯通式（Addition polymerization of ethene）',
          equationHtml: `n CH<sub>2</sub>=CH<sub>2</sub> <span class="chem-arrow"><span class="cond-top">heat, pressure</span><span class="arr-main">⟶</span><span class="cond-bot">catalyst</span></span> —[ CH<sub>2</sub>—CH<sub>2</sub> ]<sub>n</sub>—`,
          note: '考试要求画 structural formula（结构式）时，请务必把 C—H 键展开画成二维“H 字形”以策万全！'
        }
      ],
      examTrap: 'DSE 改卷最严苛的两处细节：① 题目问 "Draw the repeating unit" 时多手写了下标 n ➔ 0 分！漏画左右两端伸出去的延伸横线 "—" ➔ 0 分！② 看到聚丁-2-烯或聚丙烯时，错把 —CH₃ 画进水平主链变成 —CH₂—CH₂—CH₂—（那是错误的骨架重排！主链只能是双键那 2 个碳！）。',
      relations: [
        {
          type: 'buildsOn',
          targetUnitId: 'u27',
          label: '承接 Unit 27：石油裂化产生烯烃与 C=C 加成反应原理',
          why: '加成聚合本质上就是成千上万个烯烃分子彼此之间发生的连续加成反应（self-addition）。'
        },
        {
          type: 'compareWith',
          targetUnitId: 'u33',
          label: '跨册对比 Topic 8 Unit 33：加成聚合（Addition）vs 缩合聚合（Condensation polymerization）',
          why: '加成聚合靠单种/多种含 C=C 单体直接手拉手，无小分子脱出；Unit 33 的聚酯（PET）和尼龙（Nylon）则靠双官能团单体反应并脱去 H₂O 或 HCl 小分子！'
        }
      ],
      questions: [
        {
          id: 'u28-s1-q1',
          level: 1,
          levelTag: 'Level 1 · 中文直觉破冰',
          type: 'mcq',
          stem: '为什么乙烯（ethene）能够发生加成聚合反应（addition polymerization），而乙烷（ethane）却不能？',
          cueWords: [],
          options: [
            'A. 因为乙烯的沸点比乙烷高得多',
            'B. 因为乙烯分子含有不饱和的碳碳双键（unsaturated C=C double bond），可以打开双键与其他单体分子相连',
            'C. 因为乙烯分子之间存在氢键（hydrogen bonds）',
            'D. 因为乙烯聚合时会不断脱出水分子（H₂O）'
          ],
          answerIndex: 1,
          hint: '聚合需要每个分子向左右两边伸出共价键手拉手：饱和的乙烷座位全满，而乙烯有什么特殊官能团可以打开？',
          explanation: '乙烯（ethene）是不饱和碳氢化合物，含有碳碳双键（C=C double bond），其中一个键可以打开并与其他乙烯分子形成新的 C—C 单键连接成长链；乙烷是饱和烃，无法打开单键加成聚合。',
          markingScheme: [
            '1M: Ethene is unsaturated / contains a C=C double bond which can open up to link monomer molecules together, whereas ethane is saturated.'
          ],
          commonMistake: '混淆加成聚合与缩合聚合而误选 D（加成聚合绝不脱去 H₂O 等任何小分子！）。'
        },
        {
          id: 'u28-s1-q2',
          level: 2,
          levelTag: 'Level 2 · 中英过渡辨析',
          type: 'mcq',
          stem: '某加成聚合物（addition polymer）的一段碳链结构为 —CH(CH₃)—CH(Cl)—CH(CH₃)—CH(Cl)—CH(CH₃)—CH(Cl)—。生成该聚合物的单体（monomer）系统命名（systematic IUPAC name）是什么？',
          cueWords: [
            { phrase: 'addition polymer', zh: '加成聚合物', concept: '用“主链两碳切片法”还原 C=C 双键' },
            { phrase: '—CH(CH₃)—CH(Cl)—CH(CH₃)—CH(Cl)—', zh: '聚合物链片段', concept: '每 2 个主链碳切一刀：切出 CH(CH₃)=CHCl' },
            { phrase: 'systematic IUPAC name', zh: '系统 IUPAC 命名', concept: '含 3 个碳的主链（prop-），给氯和双键最小位次号' }
          ],
          options: [
            'A. 1-氯丙-1-烯（1-chloroprop-1-ene, CH₃CH=CHCl）',
            'B. 3-氯丙-1-烯（3-chloropropene, CH₂ClCH=CH₂）',
            'C. 2-氯丙-1-烯（2-chloropropene, CH₂=CClCH₃）',
            'D. 1-氯丙烷（1-chloropropane, CH₃CH₂CH₂Cl）'
          ],
          answerIndex: 0,
          hint: '沿着主链切前两个碳：左边碳连着 H 和 CH₃，右边碳连着 H 和 Cl！把中间单键变回双键就是 CH₃—CH=CH—Cl，总共有几个碳？从靠近 Cl 的一端编号！',
          explanation: '沿主链每两个碳切开并恢复双键，得到单体 CH₃—CH=CH—Cl：最长含双键碳链共 3 个碳（prop-1-ene），从连有 Cl 的双键端碳编为 1 号碳，IUPAC 名称为 1-氯丙-1-烯（1-chloroprop-1-ene）。',
          markingScheme: [
            '1M: 1-chloroprop-1-ene (CH3CH=CHCl)'
          ],
          commonMistake: '只看见括号里的 CH₃ 没把它算进单体最长碳链，误叫成“1-氯-2-甲基乙烯”（违反最长碳链规则！）。'
        },
        {
          id: 'u28-s1-q3',
          level: 3,
          levelTag: 'Level 3 · HKDSE 英文实战',
          type: 'structured',
          stem: 'But-1-ene undergoes addition polymerization to form poly(but-1-ene), which is a thermoplastic used to make hot water pipes. Write the condensed structural formula of the repeating unit of poly(but-1-ene), and explain in terms of bonding and structure why poly(but-1-ene) is a thermoplastic that softens upon heating.',
          cueWords: [
            { phrase: 'But-1-ene', zh: '丁-1-烯', concept: '单体结构为 CH₂=CH(CH₂CH₃)，乙基 —CH₂CH₃ 必须作为侧链挂在第二个主链碳上！' },
            { phrase: 'repeating unit', zh: '重复单位', concept: '主链仅 2 个碳，两端带延伸键 —，绝不写下标 n！' },
            { phrase: 'explain in terms of bonding and structure why poly(but-1-ene) is a thermoplastic', zh: '从化学键与结构解释为何属于热塑性塑料', concept: '独立长链 + 无共价交联键 + 链间仅靠微弱范德华力 ➔ 受热易互相滑移' }
          ],
          hint: '丁-1-烯 CH₂=CH—CH₂CH₃ 摆成 H 字形后，重复单位主链是 —CH₂—CH(CH₂CH₃)—（无 n！）。解释热塑性：链与链之间是什么弱作用力（van der Waals\' forces）？有没有共价交联（no cross-links）？加热时链怎么动？',
          explanation: '丁-1-烯的双键在 C1=C2，故重复单位为 —CH₂—CH(CH₂CH₃)—（考试手绘展开式最佳，且不带 n）。聚丁-1-烯由独立长链组成，链间无共价交联，仅靠微弱范德华力维系；受热时链克服范德华力互相滑移而软化。',
          markingScheme: [
            '1M: Repeating unit: —CH2—CH(CH2CH3)— (must show continuation bonds at both ends and NO subscript n)',
            '1M: Poly(but-1-ene) consists of separate long polymer chains held together only by weak intermolecular van der Waals\' forces (with no covalent cross-links between chains).',
            '1M: Upon heating, the weak van der Waals\' forces are overcome and the polymer chains can slide past one another easily, causing the plastic to soften.'
          ],
          commonMistake: '把聚丁-1-烯的重复单位画成 4 个碳连在主链上（—CH₂—CH₂—CH₂—CH₂—），直接丢失结构分！'
        }
      ]
    },

    /* ----------------------------------------------------------------------
     * Section 28.5 (Part 1): Seven Classic Addition Polymers in Mastering Chemistry
     * ---------------------------------------------------------------------- */
    {
      id: 'u28-s2',
      code: '28.5 (Part 1)',
      titleEn: 'The Seven Classic Addition Polymers: Monomers, Repeating Units & Uses',
      titleZh: '精工版课本七大经典加成聚合物全图谱：单体命名、结构与用途速查',
      analogy: {
        icon: '🧰',
        title: '“乙烯百宝箱”大变装：换掉乙烯身上的氢原子，解锁七种超能力塑料！',
        body: '奇妙的是，课本要求熟记的七大王牌塑料，全都是乙烯（CH₂=CH₂）的“换装变形金刚”！不换装直接高压聚合成软袋子（LDPE），低压催化聚合成硬水桶（HDPE）；换上一个甲基变成耐开水的微波炉饭盒（PP）；换上一个氯原子变成水管和电线皮（PVC）；换上一个苯环变成透明光碟盒或发泡胶饭盒（PS）；换上甲基和酯基变成飞机舷窗有机玻璃（Perspex）；要是把四个氢全换成氟原子，就炼成了刀枪不入的不粘锅神盾特氟龙（PTFE）！'
      },
      coreExplanation: `
        <h4>精工版《Mastering Chemistry》七大必考加成聚合物总表（中英名称与结构全覆盖）</h4>
        <p>在 HKDSE 试卷中，考官极爱考查单体的<strong>系统 IUPAC 命名（systematic IUPAC name）</strong>与聚合物特性的配对（尤其是 <code>PVC</code>、<code>PS</code>、<code>Perspex</code> 和 <code>PTFE</code>！）：</p>
        <table class="chem-table">
          <thead>
            <tr>
              <th>聚合物名称与缩写</th>
              <th>单体 IUPAC 名称（及俗名）与结构</th>
              <th>重复单位（Repeating Unit）</th>
              <th>核心性质与典型日常用途（Properties &amp; Uses）</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>1. <span class="term">低密度聚乙烯 <span class="en">Low-density polyethene (LDPE)</span></span></strong></td>
              <td><span class="term">乙烯 <span class="en">ethene</span></span><br><code>CH₂=CH₂</code><br>（~200°C, ~1000–3000 atm）</td>
              <td><code>—CH₂—CH₂—</code></td>
              <td>轻软、柔韧（flexible）、低熔点（~105°C）<br>➔ 塑料购物袋（plastic bags）、保鲜膜（food wraps）、挤压瓶（squeeze bottles）</td>
            </tr>
            <tr>
              <td><strong>2. <span class="term">高密度聚乙烯 <span class="en">High-density polyethene (HDPE)</span></span></strong></td>
              <td><span class="term">乙烯 <span class="en">ethene</span></span><br><code>CH₂=CH₂</code><br>（~60°C, 低压, 齐格勒-纳塔催化剂）</td>
              <td><code>—CH₂—CH₂—</code></td>
              <td>较硬挺（stiff/rigid）、强度高、耐热较好（~135°C）<br>➔ 牛奶/清洁剂瓶（detergent bottles）、水桶（buckets）、周转箱（crates）</td>
            </tr>
            <tr>
              <td><strong>3. <span class="term">聚丙烯 <span class="en">Polypropene (PP)</span></span></strong></td>
              <td><span class="term">丙烯 <span class="en">propene</span></span><br><code>CH₂=CHCH₃</code></td>
              <td><code>—CH₂—CH(CH₃)—</code></td>
              <td>坚韧、耐弯折、高熔点（&gt;160°C，耐沸水消毒）<br>➔ 微波炉饭盒（food containers）、绳索（ropes）、地毯、医疗器械</td>
            </tr>
            <tr>
              <td><strong>4. <span class="term">聚氯乙烯 <span class="en">Polyvinyl chloride / Poly(chloroethene) (PVC)</span></span></strong></td>
              <td><span class="term">氯乙烯 <span class="en">chloroethene</span></span><br>（俗名 vinyl chloride）<br><code>CH₂=CHCl</code></td>
              <td><code>—CH₂—CHCl—</code></td>
              <td>• <strong>硬质（无增塑剂）：</strong>排水管（drain pipes）、窗框<br>• <strong>软质（加增塑剂 plasticizer）：</strong>浴帘（shower curtains）、雨衣、电线绝缘外皮（wire insulation）、人造革</td>
            </tr>
            <tr>
              <td><strong>5. <span class="term">聚苯乙烯 <span class="en">Polystyrene / Poly(phenylethene) (PS)</span></span></strong></td>
              <td><span class="term">苯乙烯 <span class="en">phenylethene</span></span><br>（俗名 styrene）<br><code>CH₂=CHC₆H₅</code></td>
              <td><code>—CH₂—CH(C₆H₅)—</code></td>
              <td>• <strong>普通 PS：</strong>透明、硬而<strong>脆（brittle）</strong>➔ 光碟盒（CD cases）、透明即弃杯、玩具模型<br>• <strong><span class="term">发泡聚苯乙烯 <span class="en">expanded PS (EPS)</span></span>：</strong>极轻、隔热防震 ➔ 发泡胶饭盒、电器防震包装</td>
            </tr>
            <tr>
              <td><strong>6. <span class="term">有机玻璃 <span class="en">Perspex</span></span></strong><br>Poly(methyl 2-methylpropenoate)</td>
              <td><span class="term">2-甲基丙烯酸甲酯 <span class="en">methyl 2-methylpropenoate</span></span><br><code>CH₂=C(CH₃)COOCH₃</code></td>
              <td><code>—CH₂—C(CH₃)(COOCH₃)—</code></td>
              <td>高度透明（highly transparent）、质轻且<strong>比玻璃强韧不易碎（tough, does not shatter easily）</strong>（但较玻璃易刮花）<br>➔ 飞机舷窗（aircraft windows）、汽车车灯罩（car light lenses）、广告灯箱、安全防护罩</td>
            </tr>
            <tr>
              <td><strong>7. <span class="term">聚四氟乙烯 <span class="en">Polytetrafluoroethene (PTFE / Teflon)</span></span></strong></td>
              <td><span class="term">四氟乙烯 <span class="en">tetrafluoroethene</span></span><br><code>CF₂=CF₂</code></td>
              <td><code>—CF₂—CF₂—</code></td>
              <td>含极牢固 <code>C—F</code> 键：表面光滑<strong>不粘（non-stick）</strong>、耐高温（~327°C）、极耐强酸强碱腐蚀<br>➔ 不粘锅涂层（non-stick coating on frying pans）、耐腐蚀化工管道阀门</td>
            </tr>
          </tbody>
        </table>

        <div class="callout callout-tip">
          <strong>💡 攻克 Perspex（有机玻璃）单体命名与结构拆解口诀：</strong>
          <br>很多同学一见到 <code>Perspex</code> 就发怵，其实拆开超简单：主干是 3 个碳的丙烯酸 <code>CH₂=CH—COOH</code>；在第 2 号碳上把 H 换成一个甲基（<code>2-methylpropenoic acid</code>），再把酸变成甲酯（<code>-COOH</code> ➔ <code>-COOCH₃</code>），合起来就是 <strong><code>methyl 2-methylpropenoate</code>（<code>CH₂=C(CH₃)COOCH₃</code>）</strong>！虽然分子里带酯基 <code>-COOCH₃</code>，但它是靠 <strong><code>C=C</code> 双键</strong>聚合的，所以 100% 属于<strong>加成聚合物（addition polymer）</strong>而非聚酯！
        </div>
      `,
      textbookFormulas: [
        {
          label: '有机玻璃（Perspex）的加成聚合方程式',
          equationHtml: `n CH<sub>2</sub>=C(CH<sub>3</sub>)COOCH<sub>3</sub> <span class="chem-arrow"><span class="cond-top">catalyst</span><span class="arr-main">⟶</span><span class="cond-bot">heat</span></span> —[ CH<sub>2</sub>—C(CH<sub>3</sub>)(COOCH<sub>3</sub>) ]<sub>n</sub>—`,
          note: 'Monomer: methyl 2-methylpropenoate；酯基 —COOCH₃ 只是挂在主链碳上的侧链，主链全为 C—C 单键！'
        },
        {
          label: '聚四氟乙烯（PTFE / Teflon）的加成聚合方程式',
          equationHtml: `n CF<sub>2</sub>=CF<sub>2</sub> <span class="chem-arrow"><span class="cond-top">catalyst</span><span class="arr-main">⟶</span><span class="cond-bot">heat, pressure</span></span> —[ CF<sub>2</sub>—CF<sub>2</sub> ]<sub>n</sub>—`,
          note: '注意单体 tetrafluoroethene 的 4 个氢原子全部换成了氟原子 F，千万别漏写成 CHF=CF₂！'
        }
      ],
      examTrap: '切勿因为 Perspex 单体含有酯基（ester group, —COOCH₃）就误判它是缩合聚合物（condensation polymer / polyester）！判断加聚还是缩聚只看聚合物主链（backbone）：主链全是碳原子（—C—C—C—C—）的就是加成聚合物！',
      relations: [
        {
          type: 'buildsOn',
          targetUnitId: 'u26',
          label: '承接 Unit 26：IUPAC 系统命名法',
          why: '准确写出 chloroethene、phenylethene、tetrafluoroethene 和 methyl 2-methylpropenoate 是拿满结构题分数的基石。'
        },
        {
          type: 'compareWith',
          targetUnitId: 'u33',
          label: '对比 Unit 33 聚酯（PET）：侧链含酯基（Perspex）vs 主链含酯键（Polyester）',
          why: 'Perspex 的酯基挂在侧链上，主链不能水解断裂；而 PET 的酯键就在主链上，遇强酸强碱会水解断链！'
        }
      ],
      questions: [
        {
          id: 'u28-s2-q1',
          level: 1,
          levelTag: 'Level 1 · 中文直觉破冰',
          type: 'mcq',
          stem: '飞机舷窗（aircraft windows）和汽车车灯罩常使用有机玻璃（Perspex）代替普通硅酸盐玻璃。除了高度透明（highly transparent）之外，Perspex 相比普通玻璃最突出的优势是什么？',
          cueWords: [],
          options: [
            'A. 表面比普通玻璃更坚硬，永远不会被刀片刮花',
            'B. 密度更低（更轻 lightweight）且强韧不易碎裂（tough / does not shatter easily）',
            'C. 具有优良的导电性能，可释放静电',
            'D. 埋在土壤里一周就能被细菌生物降解'
          ],
          answerIndex: 1,
          hint: '想一想万米高空的飞机窗户：需要玻璃那样又重又一撞就碎成锋利玻璃碴，还是既轻便又抗冲击不易碎？',
          explanation: '有机玻璃（Perspex）高度透明，且比普通玻璃密度更低（lighter）及强韧抗冲击、不易碎裂（tougher / less brittle / shatter-resistant）。缺点则是表面硬度不及玻璃，较易被刮花（scratched more easily）。',
          markingScheme: [
            '1M: Perspex is lighter (lower density) and tougher / less brittle (does not shatter easily) than glass.'
          ],
          commonMistake: '误选 A！DSE 常考 Perspex 的局限性（limitation compared with glass）：恰恰是 "more easily scratched than glass"（比玻璃更容易刮花）！'
        },
        {
          id: 'u28-s2-q2',
          level: 2,
          levelTag: 'Level 2 · 中英过渡辨析',
          type: 'mcq',
          stem: '下列关于聚四氟乙烯（polytetrafluoroethene, PTFE）与聚氯乙烯（polyvinyl chloride, PVC）的叙述，哪一项是**错误**的？',
          cueWords: [
            { phrase: 'polytetrafluoroethene, PTFE', zh: '聚四氟乙烯（特氟龙）', concept: '单体 CF₂=CF₂，用于不粘锅涂层、耐高温耐腐蚀' },
            { phrase: 'polyvinyl chloride, PVC', zh: '聚氯乙烯', concept: '单体 CH₂=CHCl，加增塑剂变软可做电线外皮或雨衣' }
          ],
          options: [
            'A. PTFE 的单体系统命名为四氟乙烯（tetrafluoroethene, CF₂=CF₂）',
            'B. PTFE 具有极高的耐热性、抗化学腐蚀性及不粘性（non-stick property），适合做煎锅内壁涂层',
            'C. PVC 的单体中每个碳原子上都连有两个氯原子（CCl₂=CCl₂）',
            'D. 未加增塑剂的硬质 PVC（unplasticized PVC）适合用来制造地下排水管（drain pipes）'
          ],
          answerIndex: 2,
          hint: '仔细核对 PVC 单体的名字：chloroethene（氯乙烯）只有 1 个氯原子还是 4 个氯原子？',
          explanation: 'PVC 的单体是氯乙烯（chloroethene, CH₂=CHCl），分子中只有 1 个氢原子被氯取代，重复单位为 —CH₂—CHCl—，因此 C 错误！A、B、D 均完全正确。',
          markingScheme: [
            '1M: The monomer of PVC is chloroethene (CH2=CHCl), containing only one chlorine atom per molecule.'
          ],
          commonMistake: '受 PTFE（四氟乙烯 CF₂=CF₂）影响，误把氯乙烯（CH₂=CHCl）画成四氯乙烯（CCl₂=CCl₂）。'
        },
        {
          id: 'u28-s2-q3',
          level: 3,
          levelTag: 'Level 3 · HKDSE 英文实战',
          type: 'structured',
          stem: 'Expanded polystyrene is commonly used to make disposable hot drink cups, whereas transparent unexpanded polystyrene is used to make CD cases. Write the systematic IUPAC name of the monomer of polystyrene, draw the structural formula of its repeating unit, and state ONE disadvantage of using unexpanded polystyrene for making everyday containers.',
          cueWords: [
            { phrase: 'systematic IUPAC name of the monomer of polystyrene', zh: '聚苯乙烯单体的系统 IUPAC 名称', concept: '俗名是 styrene，但系统 IUPAC 名称必须写 phenylethene！' },
            { phrase: 'structural formula of its repeating unit', zh: '其重复单位的结构式', concept: '—CH₂—CH(C₆H₅)—（展开 C—H 键，两端有延伸横线，无 n）' },
            { phrase: 'ONE disadvantage of using unexpanded polystyrene', zh: '使用未发泡普通聚苯乙烯的一个缺点', concept: '普通透明 PS 硬而脆（brittle），受撞击易破裂' }
          ],
          hint: '注意陷阱！题目问的是 systematic IUPAC name，写 styrene 不给分，必须写苯环取代乙烯的系统名（phenylethene）！普通光碟盒掉地上最容易怎样（brittle）？',
          explanation: '聚苯乙烯单体的俗名为 styrene，系统 IUPAC 名称为苯乙烯（phenylethene, CH₂=CHC₆H₅）；重复单位为 —CH₂—CH(C₆H₅)—。未发泡的透明聚苯乙烯虽然坚硬透明，但质脆易碎（brittle / cracks easily），且耐热性较差。',
          markingScheme: [
            '1M: Phenylethene (Do NOT accept common name styrene when systematic IUPAC name is asked)',
            '1M: Repeating unit showing —CH2—CH(C6H5)— with continuation bonds at both ends and no subscript n',
            '1M: It is brittle / breaks easily upon impact (or softens/deforms easily in boiling water / organic solvents).'
          ],
          commonMistake: '题目明确要求 "systematic IUPAC name" 时仍写成俗名 "styrene"（同理：PVC 单体系统名必须写 chloroethene 而非 vinyl chloride！）。'
        }
      ]
    },

    /* ----------------------------------------------------------------------
     * Section 28.5 (Part 2): Structure-Property Relationships
     * ---------------------------------------------------------------------- */
    {
      id: 'u28-s3',
      code: '28.5 (Part 2)',
      titleEn: 'Microscopic Structure vs Macroscopic Properties: LDPE vs HDPE, Plasticizers & Foaming Agents',
      titleZh: '微观结构决定宏观性质：LDPE 与 HDPE 对比、PVC 增塑剂与发泡胶原理',
      analogy: {
        icon: '🥢',
        title: '凌乱树枝 vs 整齐筷子、链条润滑珠与面包气泡孔！',
        body: '为什么同样由乙烯做成，LDPE 软成超市胶袋，HDPE 却硬成塑料水桶？把聚合物链想象成树枝和筷子：LDPE 满身是分叉支链（branched chains），堆在一起蓬松凌乱、空隙大（密度低、吸力弱）；HDPE 像一把笔直的筷子（unbranched linear chains），捆得严丝合缝（密度高、范德华力强）！至于硬邦邦的 PVC 水管怎么变软成浴帘？往紧紧吸在一起的分子链中间塞进小颗粒“隔离滚珠”——增塑剂（plasticizer），撑开链间距、削弱吸力，链条就能轻松滑移变软啦！'
      },
      coreExplanation: `
        <h4>1. 高频必考解释题模板 ①：为什么 HDPE 的密度、硬度、抗拉强度及熔点均高于 LDPE？</h4>
        <p>虽然 <code>LDPE</code> 和 <code>HDPE</code> 都由同一种单体<span class="term">乙烯 <span class="en">ethene</span></span>制成，但聚合条件不同导致分子链支化程度截然不同。在英文卷回答 <code>Explain</code> 题时，必须严格踩中<strong>“支链程度 ➔ 链排列紧密程度 ➔ 密度 &amp; 分子间范德华力强弱”</strong>三步逻辑链：</p>
        <table class="chem-table">
          <thead>
            <tr>
              <th>微观与宏观维度</th>
              <th><span class="term">低密度聚乙烯 <span class="en">LDPE</span></span></th>
              <th><span class="term">高密度聚乙烯 <span class="en">HDPE</span></span></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>① 分子链结构（Chain branching）</strong></td>
              <td>聚合物链含有<strong>大量支链（heavily branched chains）</strong></td>
              <td>聚合物链为<strong>直链 / 极少支链（linear chains with very little branching）</strong></td>
            </tr>
            <tr>
              <td><strong>② 链堆积方式（Chain packing）</strong></td>
              <td>分子链<strong>无法紧密排列（cannot pack closely together）</strong></td>
              <td>分子链<strong>能够紧密且规则地排列（can pack closely together）</strong></td>
            </tr>
            <tr>
              <td><strong>③ 密度（Density）</strong></td>
              <td>单位体积内质量较小 ➔ <strong>密度较低（lower density）</strong></td>
              <td>单位体积内堆积更紧实 ➔ <strong>密度较高（higher density）</strong></td>
            </tr>
            <tr>
              <td><strong>④ 链间作用力与机械性质</strong></td>
              <td>链间距较大，<strong>链间<span class="term">范德华力较弱 <span class="en">weaker van der Waals' forces between chains</span></span></strong> ➔ 柔软易弯、抗拉强度（tensile strength）及熔点较低</td>
              <td>链间距小且接触面积大，<strong>链间<span class="term">范德华力较强 <span class="en">stronger van der Waals' forces between chains</span></span></strong> ➔ 硬挺（stiffer）、抗拉强度及熔点较高</td>
            </tr>
          </tbody>
        </table>

        <h4>2. 高频必考解释题模板 ②：增塑剂（Plasticizer）如何使硬质 PVC 变柔软？</h4>
        <ul class="chem-list">
          <li><strong>未加增塑剂的纯 PVC（Unplasticized PVC）：</strong>分子链上含有电负性较强的氯原子（极性 <code>C—Cl</code> 键），相邻聚合物链间的范德华力较强，链与链难以相对滑移，因此硬挺（rigid），用于做排水管。</li>
          <li><strong>加入<span class="term">增塑剂 <span class="en">plasticizer</span></span>（如高沸点酯类有机小分子）的微观作用机制（3 个采分点）：</strong>
            <br>① 增塑剂小分子<strong>插入/挤入 PVC 聚合物长链之间（plasticizer molecules get between the polymer chains）</strong>；
            <br>② <strong>增大相邻聚合物链之间的距离（increase the distance / keep chains further apart）</strong>，从而<strong>削弱链间的范德华力（weaken the intermolecular van der Waals' forces between polymer chains）</strong>；
            <br>③ 聚合物链受到外力时<strong>更容易互相滑移（polymer chains can slide past one another more easily）</strong>，使塑料变得柔软有弹性（more flexible），适合做雨衣、浴帘和电线绝缘皮。</li>
        </ul>

        <h4>3. 高频必考解释题模板 ③：普通 PS 为何硬脆？发泡聚苯乙烯（EPS）为何隔热防震？</h4>
        <ul class="chem-list">
          <li><strong>普通聚苯乙烯（PS）硬脆原因：</strong>分子链上挂着体积庞大的<span class="term">苯基 / 苯环 <span class="en">bulky benzene / phenyl rings (-C₆H₅)</span></span>，产生巨大空间位阻，阻碍分子链弯曲旋转及相互滑移，受猛烈外力时来不及形变就直接断裂（hard, rigid and brittle）。</li>
          <li><strong>制造<span class="term">发泡聚苯乙烯 <span class="en">expanded polystyrene (EPS)</span></span>（发泡胶）：</strong>在加热聚苯乙烯珠粒时加入低沸点<strong><span class="term">发泡剂 <span class="en">foaming / blowing agent</span></span></strong>（如戊烷 pentane），受热气化膨胀使塑料内部困住<strong>大量微细气泡 / 空气囊（traps a large volume of tiny gas / air bubbles）</strong>。由于<strong>被困住的空气/气体是热的不良导体（trapped air/gas is a poor conductor of heat）</strong>且可压缩缓冲冲击力，EPS 兼具超低密度、极佳隔热性（excellent heat insulator）与防震缓冲性（shock absorber）。</li>
        </ul>
      `,
      textbookFormulas: [
        {
          label: 'DSE 结构—性质解释题万能三段式因果链（Structure-Property Reasoning Chain）',
          equationHtml: `<b>Chain Structure / Additive</b> (支链 / 增塑剂) <span class="chem-arrow"><span class="cond-top"></span><span class="arr-main">⟶</span><span class="cond-bot"></span></span> <b>Packing / Distance &amp; van der Waals' forces</b> <span class="chem-arrow"><span class="cond-top"></span><span class="arr-main">⟶</span><span class="cond-bot"></span></span> <b>Density / Flexibility / Melting point</b>`,
          note: '切记：比较分子间作用力时，写明 "intermolecular van der Waals\' forces between polymer chains"（聚合物链间的范德华力），绝不可说破坏共价键！'
        }
      ],
      examTrap: '回答 LDPE vs HDPE 时，千万不要写“因为 HDPE 的相对分子质量比 LDPE 大得多所以密度大”！考评局唯一认可的根本原因是分子链的支化程度（extent of branching）导致链能否紧密排列（close packing）！另外，软化热塑性塑料或加增塑剂削弱的都是链间范德华力，绝不是断裂链内共价键！',
      relations: [
        {
          type: 'buildsOn',
          targetUnitId: 'u26',
          label: '承接 Unit 26：直链烷烃 vs 支链烷烃的接触面积与范德华力规律',
          why: '就像正丁烷（直链）比甲基丙烷（支链）接触更紧密、沸点更高一样，直链 HDPE 比多支链 LDPE 排列更紧密、链间范德华力更强！'
        }
      ],
      questions: [
        {
          id: 'u28-s3-q1',
          level: 1,
          levelTag: 'Level 1 · 中文直觉破冰',
          type: 'mcq',
          stem: '在聚氯乙烯（PVC）生产过程中加入增塑剂（plasticizer），使其适合制作柔软的浴帘（shower curtains）。增塑剂在微观层面起到了什么作用？',
          cueWords: [],
          options: [
            'A. 在相邻的 PVC 分子链之间建立牢固的共价交联键（covalent cross-links）',
            'B. 把 PVC 长链切断成氯乙烯气体单体',
            'C. 插入聚合物分子链之间增大间距，削弱链间范德华力（van der Waals\' forces），使分子链更容易互相滑移',
            'D. 与 PVC 发生自由基取代反应释放出氯化氢气体'
          ],
          answerIndex: 2,
          hint: '回想“隔离滚珠”比喻：小分子挤进长链中间把链撑开，链与链之间的吸引力变强了还是变弱了？',
          explanation: '增塑剂（plasticizer）小分子插入聚合物长链之间，撑大链间距，削弱相邻分子链之间的范德华力（van der Waals\' forces），令聚合物链在受力时更容易互相滑移（slide past one another），从而提升柔韧性。',
          markingScheme: [
            '1M: Plasticizer molecules get between polymer chains, weakening intermolecular van der Waals\' forces so chains slide over each other more easily.'
          ],
          commonMistake: '把“增塑剂（plasticizer，使塑料变软）”与“交联剂（cross-linking agent / vulcanization，使链间形成共价键变硬且不可熔）”彻底搞反！'
        },
        {
          id: 'u28-s3-q2',
          level: 2,
          levelTag: 'Level 2 · 中英过渡辨析',
          type: 'mcq',
          stem: '高密度聚乙烯（HDPE）与低密度聚乙烯（LDPE）均由乙烯（ethene）经加成聚合制得，但 HDPE 具有更高的密度和抗拉强度（higher density and tensile strength）。下列哪一项准确解释了这一差异？',
          cueWords: [
            { phrase: 'HDPE', zh: '高密度聚乙烯', concept: '直链少支链（linear / little branching）➔ 紧密排列（pack closely）' },
            { phrase: 'LDPE', zh: '低密度聚乙烯', concept: '多支链（heavily branched）➔ 松散排列' },
            { phrase: 'higher density and tensile strength', zh: '更高密度和抗拉强度', concept: '紧密堆积提高密度，且增强链间范德华力（van der Waals\' forces）' }
          ],
          options: [
            'A. HDPE 分子链中含有碳碳双键，而 LDPE 只含碳碳单键',
            'B. HDPE 的聚合物链几乎无支链（little branching），能比多支链的 LDPE 排列得更紧密，且链间范德华力更强',
            'C. HDPE 分子链之间存在强烈的氢键（hydrogen bonds），而 LDPE 没有氢键',
            'D. LDPE 在制造时加入了大量戊烷发泡剂（blowing agent）'
          ],
          answerIndex: 1,
          hint: '聚乙烯只含 C 和 H，不可能有氢键，聚合后也没有双键！锁定关键词：branching（支链）与 packing closely（紧密排列）！',
          explanation: 'HDPE 的分子链呈直链状、支链极少（little branching），比富含支链（heavily branched）的 LDPE 能更紧密地堆积在一起（pack more closely together），因此密度更高，且相邻分子链间的范德华力更强，抗拉强度和熔点也更高。',
          markingScheme: [
            '1M: Polymer chains in HDPE have much less branching than LDPE, allowing closer packing (higher density) and stronger van der Waals\' forces between chains (higher tensile strength).'
          ],
          commonMistake: '乱套氢键（hydrogen bond）概念！烃类聚合物（PE, PP, PS）完全不含 -OH、-NH 或 F—H，绝对没有氢键！'
        },
        {
          id: 'u28-s3-q3',
          level: 3,
          levelTag: 'Level 3 · HKDSE 英文实战',
          type: 'structured',
          stem: 'Expanded polystyrene is manufactured by heating polystyrene beads with a low-boiling alkane such as pentane. State the function of pentane in this process, and explain why expanded polystyrene is widely used for making disposable takeaway food boxes for hot meals.',
          cueWords: [
            { phrase: 'heating polystyrene beads with a low-boiling alkane such as pentane', zh: '将聚苯乙烯珠粒与低沸点戊烷共热', concept: '戊烷受热汽化膨胀充当发泡剂（foaming / blowing agent）' },
            { phrase: 'disposable takeaway food boxes for hot meals', zh: '盛装热食的即弃外卖饭盒', concept: '内含大量被困空气泡 ➔ 空气是热的不良导体 ➔ 极佳隔热性（good heat insulator）' }
          ],
          hint: '第一问：戊烷受热变成气体吹出泡泡，叫什么剂（blowing / foaming agent）？第二问：为什么装热饭不烫手又保温？困在里面的气体导电导热好不好（poor conductor of heat）？',
          explanation: '戊烷在加热时汽化膨胀，充当发泡剂（foaming / blowing agent），在聚苯乙烯内部形成大量微细气泡。被困住的气体（空气）是热的不良导体（poor conductor of heat），使发泡聚苯乙烯成为极佳的隔热材料（good heat insulator），且质轻无毒防水。',
          markingScheme: [
            '1M: Pentane acts as a foaming agent / blowing agent (vaporizes upon heating to expand the plastic).',
            '1M: Expanded polystyrene traps a large amount of tiny gas / air bubbles; since gas / air is a poor conductor of heat, it acts as a good heat insulator to keep meals hot.'
          ],
          commonMistake: '误把戊烷（pentane）的作用答成 plasticizer（增塑剂）或 catalyst（催化剂）！发泡剂的标准英文是 foaming agent 或 blowing agent。'
        }
      ]
    },

    /* ----------------------------------------------------------------------
     * Section 28.6–28.7: Environmental Issues & Plastic Waste Management
     * ---------------------------------------------------------------------- */
    {
      id: 'u28-s4',
      code: '28.6–28.7',
      titleEn: 'Environmental Problems of Plastics & Four Waste Management Methods',
      titleZh: '塑料的环境挑战与四大废物管理方案（堆填、焚化、回收再造与热裂解）',
      analogy: {
        icon: '♻️',
        title: '百年不烂的“塑料围城”：埋地占地、烧火防毒、回炉挑花眼、隔空热裂变原料！',
        body: '塑料之所以好用，是因为它的 C—C 骨架太结实，细菌根本咬不动——但也正因“不可生物降解（non-biodegradable）”，扔进大自然几百年都不腐烂！人类对付废塑料有四套剧本：① 堆填（landfilling）最省事但香港寸土寸金很快填满；② 焚化（incineration）能发电减体积，但烧 PVC 会冒酸雨毒气 HCl 和致癌二噁英，必须装碱液洗涤塔；③ 回收熔化重塑（recycling）能省石油，但把混在垃圾里的七八种塑料挑出来洗干净太贵太难；④ 热裂解（pyrolysis）则是在隔绝空气下高温把废塑料“时光倒流”裂解回小分子燃料和单体，不冒燃烧废气但极耗能量！'
      },
      coreExplanation: `
        <h4>1. 为什么废塑料会造成严峻的环境污染？</h4>
        <ul class="chem-list">
          <li><strong>核心微观原因——<span class="term">不可生物降解 <span class="en">non-biodegradable</span></span>：</strong>绝大多数合成加成聚合物只含非常牢固且非极性的 <code>C—C</code> 和 <code>C—H</code> 单键，自然界中的细菌等微生物（microorganisms / bacteria）缺乏能分解这些化学键的酶，因此塑料废物在环境中数百年都不会分解腐烂（persist in the environment for a very long time）。</li>
          <li><strong>连带生态危害：</strong>大量占用堆填区空间、海洋塑料碎片被鱼类海鸟海龟误食窒息或缠绕致死、堵塞城市雨水渠引发水浸、不当露天焚烧释放有毒浓烟。</li>
        </ul>

        <h4>2. 四大塑料废物处理方案优劣全景评估表（HKEAA 必考比较题核心）</h4>
        <table class="chem-table">
          <thead>
            <tr>
              <th>处理方法（Method）</th>
              <th>主要优点（Advantages）</th>
              <th>主要局限与环境问题（Limitations / Problems）及应对措施</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>① <span class="term">堆填 <span class="en">Landfilling</span></span></strong><br>（掩埋于卫生堆填区）</td>
              <td>• 操作简单、处理成本低<br>• 无需对混合废塑料进行分类<br>• 不直接排放大气污染物</td>
              <td>• <strong>迅速消耗宝贵的土地资源（rapidly uses up scarce land / landfill space）</strong><br>• 塑料不可生物降解，长期留存地下并可能缓慢渗出增塑剂污染地下水</td>
            </tr>
            <tr>
              <td><strong>② <span class="term">焚化 <span class="en">Incineration</span></span></strong><br>（在充足空气中高温燃烧）</td>
              <td>• <strong>大幅减少固体废物体积（greatly reduces waste volume by ~90%）</strong>，减轻堆填压力<br>• 燃烧释放的热能可用于<strong>发电（generates electricity）</strong><br>• 无需繁琐分类</td>
              <td>• 兴建现代焚化炉成本高，排放温室气体 <code>CO₂</code> 及不完全燃烧毒气 <code>CO</code><br>• <strong>焚化含氯塑料（如 PVC）会产生腐蚀性酸性气体 <span class="term">氯化氢 <span class="en">hydrogen chloride, HCl(g)</span></span></strong>（导致酸雨 acid rain）及剧毒致癌物<strong><span class="term">二噁英 <span class="en">dioxins</span></span></strong>（焚烧 PTFE 则放剧毒含氟气体）<br>➔ <strong>净化对策：</strong>用碱性浆液（如 <code>Ca(OH)₂</code>）进行<strong><span class="term">烟道气洗涤 <span class="en">flue gas scrubbing</span></span></strong>中和 <code>HCl(g)</code>；保持超高温完全燃烧并用活性炭吸附二噁英。</td>
            </tr>
            <tr>
              <td><strong>③ <span class="term">回收再造 <span class="en">Recycling</span></span></strong><br>（将热塑性塑料清洁、熔融重塑）</td>
              <td>• <strong>节约不可再生的石油资源（conserves non-renewable petroleum resources）</strong><br>• 减少送往堆填区的垃圾量</td>
              <td>• <strong>不同种类的塑料必须先分拣（difficult and costly to separate / sort different types of plastics）</strong>及彻底清洗油污（高人工与运输成本）<br>• 反复加热熔融会导致聚合物链部分断裂降解，使再生塑料品质下降（lower quality）<br>• 仅适用于热塑性塑料，不适用于热固性塑料</td>
            </tr>
            <tr>
              <td><strong>④ <span class="term">热裂解 <span class="en">Pyrolysis</span></span></strong><br>（<strong>隔绝空气 <span class="en">in the absence of air</span></strong> 高温加热裂解）</td>
              <td>• 将废塑料大分子裂解回有用的小分子碳氢化合物（燃料油、蜡或乙烯单体），<strong>节约石油资源</strong><br>• 对塑料分类纯度要求比机械回收低<br>• 因隔绝空气不发生燃烧，<strong>不排放二噁英或大量燃烧废气</strong></td>
              <td>• 需要持续维持高温（~600–800°C），<strong>消耗大量能量（high energy consumption）</strong><br>• 专用热裂解工厂建设与运行成本昂贵</td>
            </tr>
          </tbody>
        </table>

        <div class="callout callout-tip">
          <strong>💡 从源头减废“4R 原则”与可生物降解塑料（Biodegradable Plastics）：</strong>
          <br>• 环保管理遵循 <strong>Reduce（减少使用）➔ Reuse（重用）➔ Recycle（循环再造）➔ Replace（替代）</strong>。
          <br>• 科学家在聚乙烯中混入<strong>淀粉颗粒（starch granules）</strong>：土壤微生物吃掉淀粉后，大块塑料崩解成微小碎片加速降解；或直接研发主链含酯键的可生物降解聚酯（如聚乳酸 PLA，详见 Topic 8 Unit 33），可被微生物分泌的酶催化水解！
        </div>
      `,
      textbookFormulas: [
        {
          label: '焚化 PVC 产生酸性氯化氢气体及碱液洗涤中和原理',
          equationHtml: `HCl(g) + Ca(OH)<sub>2</sub>(aq) / NaOH(aq) <span class="chem-arrow"><span class="cond-top">flue gas scrubber</span><span class="arr-main">⟶</span><span class="cond-bot"></span></span> salt + H<sub>2</sub>O(l)`,
          note: 'PVC 含氯元素（—CH₂—CHCl—），焚化时产生腐蚀性 HCl(g)（引发酸雨），必须经碱性洗涤器（alkaline scrubber）脱酸后再排放！'
        },
        {
          label: '废聚乙烯隔绝空气热裂解（Pyrolysis in the absence of air）示意',
          equationHtml: `—[ CH<sub>2</sub>—CH<sub>2</sub> ]<sub>n</sub>— <span class="chem-arrow"><span class="cond-top">high temp (~700°C)</span><span class="arr-main">⟶</span><span class="cond-bot">absence of air</span></span> ethene + shorter alkanes / alkenes`,
          note: '千万区分 Incineration（有氧气燃烧 ➔ CO₂ + H₂O + 热电）与 Pyrolysis（隔绝空气热裂解 ➔ 小分子烃原料/燃料）！'
        }
      ],
      examTrap: '极易混淆的一对英文术语：Incineration（焚化 = 在空气/氧气中燃烧发电减容）vs Pyrolysis（热裂解 = 必须在 in the absence of air 隔绝空气下高温裂解回收小分子有机物）！漏写 "in the absence of air" 定义 pyrolysis 必扣分！',
      relations: [
        {
          type: 'buildsOn',
          targetUnitId: 'u27',
          label: '呼应 Unit 27.3：石油裂化（Cracking）与废塑料热裂解（Pyrolysis）同源同理',
          why: '两者都是在隔绝空气下高温打断长碳链的 C—C 共价键，把大分子变回有用的短链烃与烯烃单体！'
        },
        {
          type: 'leadsTo',
          targetUnitId: 'u33',
          label: '展望 Topic 8 Unit 33：可生物降解缩聚物（如聚乳酸 PLA）的水解优势',
          why: '加成聚合物主链全为 C—C 键无法水解；而含酯键的聚乳酸可被微生物酶催化水解断链，实现真正的生物降解。'
        }
      ],
      questions: [
        {
          id: 'u28-s4-q1',
          level: 1,
          levelTag: 'Level 1 · 中文直觉破冰',
          type: 'mcq',
          stem: '若将含有大量聚氯乙烯（PVC）的城市固体废物送入焚化炉焚化（incineration），烟道气中会产生哪一种导致酸雨（acid rain）的腐蚀性气体？通常用什么方法将其除去？',
          cueWords: [],
          options: [
            'A. 氨气（NH₃）；通过浓硫酸吸收',
            'B. 氯化氢气体（HCl）；通过碱性洗涤器（alkaline scrubber，如氢氧化钙浆液）中和除去',
            'C. 氢气（H₂）；通过铂催化剂点燃',
            'D. 甲烷（CH₄）；通过活性炭过滤'
          ],
          answerIndex: 1,
          hint: '看 PVC 的化学组成 —CH₂—CHCl—：里面含有哪种卤素元素？燃烧时会生成什么强酸气体？酸要用什么来中和？',
          explanation: 'PVC 分子中含有氯元素（Cl），焚化时会释放出酸性且具腐蚀性的氯化氢气体 HCl(g)，排入大气会形成酸雨（acid rain）。现代焚化厂使用装有碱性浆液（如 Ca(OH)₂）的烟道气洗涤器（flue gas scrubber）中和除去 HCl。',
          markingScheme: [
            '1M: Hydrogen chloride gas (HCl); removed by passing flue gas through an alkaline scrubber (e.g. calcium hydroxide slurry).'
          ],
          commonMistake: '看错元素误答成二氧化硫 SO₂（SO₂ 来自含硫化石燃料煤/重油的燃烧，而 PVC 特有的毒气是含氯的 HCl 和二噁英 dioxins！）。'
        },
        {
          id: 'u28-s4-q2',
          level: 2,
          levelTag: 'Level 2 · 中英过渡辨析',
          type: 'mcq',
          stem: '对比处理废塑料的“焚化法（incineration）”与“热裂解法（pyrolysis）”，下列哪一项描述是正确的？',
          cueWords: [
            { phrase: 'incineration', zh: '焚化法', concept: '在充足空气/氧气中高温燃烧，减容并产热发电' },
            { phrase: 'pyrolysis', zh: '热裂解法', concept: '在隔绝空气（in the absence of air）下高温分解回收小分子有机物' }
          ],
          options: [
            'A. 热裂解法（pyrolysis）需要通入过量纯氧气，使塑料完全变成二氧化碳和水',
            'B. 焚化法（incineration）可以把废聚乙烯重新变回高纯度的乙烯单体气体',
            'C. 热裂解法（pyrolysis）在隔绝空气（in the absence of air）下高温加热，将废塑料分解为有用的小分子碳氢化合物（燃料或化工原料），从而节约石油资源',
            'D. 热裂解法在室温下即可自发进行，完全不需要消耗能量'
          ],
          answerIndex: 2,
          hint: '区分有没有氧气：有氧气烧成灰和 CO₂ 发电的是 incineration；隔绝空气把长链切回小分子油气的是 pyrolysis！',
          explanation: '热裂解（pyrolysis）是在隔绝空气（in the absence of air）的高温条件下把大分子聚合物裂解为小分子烷烃、烯烃等燃料或石化原料，节约石油资源且不排放燃烧废气，缺点是耗能高、设备昂贵。',
          markingScheme: [
            '1M: Pyrolysis heats plastic waste in the absence of air to break polymers down into useful smaller hydrocarbon molecules, conserving petroleum.'
          ],
          commonMistake: '混淆 incineration 与 pyrolysis 的氧气条件，把 pyrolysis 当成“更高温的燃烧”。'
        },
        {
          id: 'u28-s4-q3',
          level: 3,
          levelTag: 'Level 3 · HKDSE 英文实战',
          type: 'structured',
          stem: 'Plastic water bottles made of thermoplastics can be treated by recycling (melting and remoulding). Explain why waste plastics persist in landfills for hundreds of years, and state ONE advantage and TWO practical difficulties of recycling waste plastics.',
          cueWords: [
            { phrase: 'persist in landfills for hundreds of years', zh: '在堆填区留存数百年不腐烂', concept: '点出不可生物降解（non-biodegradable / cannot be decomposed by microorganisms）' },
            { phrase: 'ONE advantage', zh: '回收再造的一个优点', concept: '节约不可再生石油资源（conserves petroleum）或减少堆填负担' },
            { phrase: 'TWO practical difficulties of recycling', zh: '回收再造的两个实际困难', concept: '分类困难且成本高（sorting）、清洗污染塑料困难、反复受热品质下降' }
          ],
          hint: '3 分题稳拿法：① 为什么不腐烂：non-biodegradable（微生物分解不了牢固的 C—C 键）；② 1 个优点：省石油（conserves petroleum）；③ 2 个困难：分拣不同塑料太难太贵（separating/sorting）+ 清洗油污/品质下降！',
          explanation: '合成加成塑料不可生物降解（non-biodegradable），不能被细菌等微生物分解。回收再造能节约不可再生的石油资源并节省堆填空间；但实际操作中，将不同种类的塑料分拣开来及清洗污物非常困难且成本高昂，而且反复熔融会使塑料品质下降。',
          markingScheme: [
            '1M: Addition plastics are non-biodegradable (cannot be broken down / decomposed by microorganisms / bacteria).',
            '1M: Advantage: Conserves non-renewable petroleum resources (or reduces the amount of solid waste sent to landfills).',
            '1M: Practical difficulties (any TWO): Difficult / costly to separate (sort) different types of plastics; high cost of collecting and cleaning contaminated plastics; quality of plastics degrades upon repeated melting.'
          ],
          commonMistake: '把“不可生物降解”含糊写成 "plastics do not react with water"（不溶于水不等于不能被微生物降解，必须写出关键词 non-biodegradable 或 cannot be decomposed by microorganisms！）。'
        }
      ]
    }
  ],

  unitExamLongQuestions: [
    {
      id: 'u28-long-1',
      title: '结构与性质王牌长题：LDPE、HDPE 与增塑 PVC 的微观结构及性能剖析（Structure & Properties of Addition Polymers）',
      totalMarks: 8,
      scenarioEn: 'Ethene and chloroethene are important unsaturated monomers produced from the petrochemical industry. Polymerization of ethene under different conditions yields either low-density polyethene (LDPE) for making flexible carrier bags or high-density polyethene (HDPE) for making rigid detergent bottles. Meanwhile, chloroethene undergoes addition polymerization to form polyvinyl chloride (PVC), which can be mixed with a plasticizer for making electrical wire insulation.',
      scenarioZhSummary: '乙烯（ethene）和氯乙烯（chloroethene）是石化工业生产的重要不饱和单体。乙烯在不同条件下聚合可生成用于制造柔软购物袋的低密度聚乙烯（LDPE）或制造硬挺清洁剂瓶的高密度聚乙烯（HDPE）。同时，氯乙烯经加成聚合生成聚氯乙烯（PVC），掺入增塑剂（plasticizer）后可用于制造电线绝缘外皮。',
      cueWords: [
        { phrase: 'low-density polyethene (LDPE)', zh: '低密度聚乙烯', concept: '多支链（heavily branched）➔ 分子链无法紧密堆积 ➔ 密度低、范德华力弱' },
        { phrase: 'high-density polyethene (HDPE)', zh: '高密度聚乙烯', concept: '直链少支链（little branching）➔ 分子链紧密堆积 ➔ 密度高、范德华力强' },
        { phrase: 'chloroethene undergoes addition polymerization to form polyvinyl chloride (PVC)', zh: '氯乙烯加聚生成聚氯乙烯', concept: 'C=C 变为饱和 C—C 单键，重复单位为 —CH₂—CHCl—（无下标 n）' },
        { phrase: 'mixed with a plasticizer', zh: '掺入增塑剂', concept: '小分子插入长链间增大间距 ➔ 削弱链间范德华力 ➔ 链易滑移变柔韧' }
      ],
      subQuestions: [
        {
          part: '(a)',
          marks: 2,
          promptEn: 'Draw the repeating unit of polyvinyl chloride (PVC), and explain why PVC does NOT decolorize bromine dissolved in an organic solvent in the dark.',
          commandWord: { word: 'Draw & Explain', tip: '画 repeating unit 切记两端画延伸键且绝不写 n！不褪色是因为已无 C=C 双键。' },
          hint: '氯乙烯 CH₂=CHCl 打开双键变成 —CH₂—CHCl—；聚合后还有没有不饱和的 C=C 双键了？',
          markingScheme: [
            '1M: Correct structure of repeating unit —CH2—CHCl— (showing C—C single bond, continuation bonds at both ends, and NO subscript n)',
            '1M: PVC is saturated / contains no C=C double bonds, so it cannot undergo addition reaction with bromine.'
          ],
          explanationZh: 'PVC 的重复单位为 —CH₂—CHCl—（两端有延伸单键且不写 n）。聚合过程中单体的 C=C 双键已全部转化为饱和的 C—C 单键，故不能与溴发生加成反应而褪色。'
        },
        {
          part: '(b)',
          marks: 3,
          promptEn: 'In terms of molecular structure and intermolecular forces, explain why HDPE has a higher density and greater rigidity than LDPE.',
          commandWord: { word: 'Explain', tip: '经典 3 分满贯题：1 分讲支链差异（branching），1 分讲紧密堆积与密度（close packing -> density），1 分讲范德华力与硬挺度（van der Waals\' forces -> rigidity）！' },
          hint: '对比 HDPE（little branching）和 LDPE（heavily branched）：谁排得更紧密？谁的链间范德华力更强？',
          markingScheme: [
            '1M: Polymer chains of HDPE are linear / have much less branching than the heavily branched chains of LDPE.',
            '1M: Hence HDPE chains can pack more closely together, giving a higher mass per unit volume (higher density).',
            '1M: Closer packing also results in stronger intermolecular van der Waals\' forces between HDPE chains, making HDPE more rigid / stiffer.'
          ],
          explanationZh: 'HDPE 分子链几乎无支链，而 LDPE 富含支链；因此 HDPE 分子链能更紧密堆积（密度更高），且相邻链间的范德华力更强（更硬挺抗拉）。'
        },
        {
          part: '(c)',
          marks: 2,
          promptEn: 'Explain, at the molecular level, how adding a plasticizer makes PVC suitable for making flexible electrical wire insulation.',
          commandWord: { word: 'Explain', tip: '写出“插入链间撑开距离 + 削弱范德华力使链易滑移”两步因果拿满 2 分。' },
          hint: '增塑剂分子钻进哪儿？把链间范德华力怎么了？链受力时更容易怎样？',
          markingScheme: [
            '1M: Plasticizer molecules get between the PVC polymer chains and keep them further apart, weakening the intermolecular van der Waals\' forces between the chains.',
            '1M: As a result, the polymer chains can slide past one another more easily, making PVC more flexible.'
          ],
          explanationZh: '增塑剂小分子插入 PVC 长链之间增大链间距，削弱链间范德华力，使分子链更容易互相滑移，从而赋予电线外皮所需的柔韧性（PVC 本身也是优良电绝缘体）。'
        },
        {
          part: '(d)',
          marks: 1,
          promptEn: 'Explain why a sample of LDPE softens over a range of temperatures instead of having a sharp melting point.',
          commandWord: { word: 'Explain', tip: '抓住聚合物本质：不是单一纯净分子，而是不同链长大分子的混合物！' },
          hint: '样品里每条聚乙烯链的聚合度 n 都一模一样吗？',
          markingScheme: [
            '1M: LDPE is a mixture of polymeric molecules with different chain lengths (different relative molecular masses).'
          ],
          explanationZh: '聚合物样品是由链长不同（相对分子质量不同）的大分子组成的混合物，克服不同链长分子间范德华力所需温度不同，因此在一个温度范围内软化熔融。'
        }
      ]
    },
    {
      id: 'u28-long-2',
      title: '单体反推与环保决策长题：有机玻璃结构推导及塑料废物处理评估（Monomer Deduction & Plastic Waste Management）',
      totalMarks: 8,
      scenarioEn: 'Perspex is a transparent addition polymer widely used as a glass substitute for making safety shields and aircraft windows. A section of the polymer chain of Perspex has the structure —CH2—C(CH3)(COOCH3)—CH2—C(CH3)(COOCH3)—. After service, disposing of mixed plastic waste containing Perspex, polyethene, and PVC poses major environmental challenges, prompting authorities to compare landfilling, incineration, recycling, and pyrolysis.',
      scenarioZhSummary: '有机玻璃（Perspex）是一种广泛用作玻璃替代品制造安全防护罩和飞机舷窗的透明加成聚合物，其聚合物链片段结构为 —CH₂—C(CH₃)(COOCH₃)—CH₂—C(CH₃)(COOCH₃)—。废弃后，含有 Perspex、聚乙烯和 PVC 的混合塑料废物带来严峻环境挑战，促使当局权衡比较堆填、焚化、回收再造与热裂解方案。',
      cueWords: [
        { phrase: 'transparent addition polymer', zh: '透明加成聚合物', concept: '靠 C=C 双键加成聚合而成，主链全为碳原子' },
        { phrase: '—CH2—C(CH3)(COOCH3)—CH2—C(CH3)(COOCH3)—', zh: 'Perspex 聚合物链片段', concept: '沿主链切前两个碳并恢复双键 ➔ CH₂=C(CH₃)COOCH₃' },
        { phrase: 'mixed plastic waste containing Perspex, polyethene, and PVC', zh: '含 Perspex、PE 和 PVC 的混合废塑料', concept: '机械回收需先分类；焚化 PVC 会释放酸性 HCl 及二噁英' },
        { phrase: 'compare landfilling, incineration, recycling, and pyrolysis', zh: '比较堆填、焚化、回收与热裂解', concept: '从土地消耗、能源回收、有毒气体控制及隔绝空气裂解耗能多维作答' }
      ],
      subQuestions: [
        {
          part: '(a)',
          marks: 3,
          promptEn: 'Write the structural formula of the monomer of Perspex, give its systematic IUPAC name, and state ONE advantage and ONE disadvantage of using Perspex instead of glass for aircraft windows.',
          commandWord: { word: 'Write, Give & State', tip: '仔细答齐四小项：单体结构式 + IUPAC 名（methyl 2-methylpropenoate）+ 1 优 + 1 劣。' },
          hint: '切前两个主链碳恢复双键：CH₂=C(CH₃)COOCH₃！比玻璃强在哪（轻、不易碎）？弱在哪（易刮花）？',
          markingScheme: [
            '1M: Monomer structural formula: CH2=C(CH3)COOCH3',
            '1M: Systematic IUPAC name: methyl 2-methylpropenoate',
            '1M: Advantage: Lighter / tougher / does not shatter easily; Disadvantage: More easily scratched than glass (both required for 1M).'
          ],
          explanationZh: '由主链两碳切片法还原双键得单体 CH₂=C(CH₃)COOCH₃，系统命名为 2-甲基丙烯酸甲酯（methyl 2-methylpropenoate）。相比玻璃，Perspex 质轻且抗冲击不易碎，但表面较软易被刮花。'
        },
        {
          part: '(b)',
          marks: 2,
          promptEn: 'If the mixed plastic waste containing PVC is treated by incineration, state ONE acidic air pollutant and ONE toxic organic pollutant that may be emitted, and suggest how the acidic air pollutant can be removed before releasing the flue gas.',
          commandWord: { word: 'State & Suggest', tip: '锁定 PVC 焚化双煞：酸性气体 HCl + 剧毒有机污染物 dioxins（二噁英），再用碱性洗涤塔除酸！' },
          hint: 'PVC 含氯：烧出来的酸性气体是 HCl，致癌有机毒物叫什么（dioxins）？除酸性气体用什么洗涤？',
          markingScheme: [
            '1M: Acidic air pollutant: hydrogen chloride (HCl); Toxic organic pollutant: dioxins (both required for 1M).',
            '1M: Pass the flue gas through an alkaline scrubber (e.g. calcium hydroxide / slaked lime slurry) to neutralize HCl.'
          ],
          explanationZh: '焚化含氯的 PVC 会产生酸性腐蚀气体氯化氢（HCl）以及剧毒致癌有机污染物二噁英（dioxins）；可通过碱性烟道气洗涤器（alkaline scrubber）中和脱除 HCl。'
        },
        {
          part: '(c)',
          marks: 3,
          promptEn: 'Explain what is meant by pyrolysis of plastic waste, and state ONE advantage of pyrolysis over mechanical recycling and ONE limitation of pyrolysis.',
          commandWord: { word: 'Explain & State', tip: '定义 pyrolysis 必写两点：high temperature + in the absence of air + break down into smaller molecules！' },
          hint: '热裂解一定要强调什么气氛条件（in the absence of air）？相比机械回收，它需不需要严格把各种塑料挑得干干净净？它的缺点是什么（耗能高/贵）？',
          markingScheme: [
            '1M: Pyrolysis is the thermal decomposition / breaking down of plastic waste at high temperatures in the absence of air into smaller useful organic / hydrocarbon molecules.',
            '1M: Advantage over mechanical recycling: Less strict sorting / separation of mixed plastics is required (or converts plastics into versatile chemical feedstocks/fuels without quality degradation).',
            '1M: Limitation: Requires a high energy input / high operating and capital cost.'
          ],
          explanationZh: '热裂解（pyrolysis）是在隔绝空气（in the absence of air）下高温加热将废塑料裂解为有用小分子碳氢化合物的过程。相比机械回收，它无需对混合塑料做极严格的分类清洗；但缺点是耗能极高且设施昂贵。'
        }
      ]
    }
  ]
});
