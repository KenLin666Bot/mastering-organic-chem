/**
 * Mastering Chemistry (HKDSE Jing Kung Educational Press / L.H.M. Chung)
 * Book 3A — Topic 7: Fossil Fuels and Carbon Compounds
 * Unit 25: Fossil fuels (化石燃料)
 * Unit 26: Homologous series, structural formulae and naming of carbon compounds (同系物、结构式及碳化合物的命名)
 */
window.CHEM_UNITS = window.CHEM_UNITS || [];

/* ==========================================================================
   UNIT 25: FOSSIL FUELS (化石燃料)
   ========================================================================== */
window.CHEM_UNITS.push({
  id: 'u25',
  unitNum: 'Unit 25',
  book: 'Book 3A · Topic 7',
  topicId: 'topic7',
  titleEn: 'Fossil fuels',
  titleZh: '化石燃料',
  colorTheme: 'amber',
  summary: `从远古生物遗骸历经亿万年转化的三大化石燃料——煤（coal）、石油（petroleum）与天然气（natural gas）出发，系统掌握碳氢化合物 / 烃（hydrocarbons：烷烃 alkanes、环烷烃 cycloalkanes、芳香烃 aromatic hydrocarbons）分类、石油分馏（fractional distillation）的物理分离原理与八大馏分用途、馏分性质递变因果链，以及温室效应（greenhouse effect）、酸雨（acid rain）、光化学烟雾（photochemical smog）和催化转化器（catalytic converter）、烟气脱硫洗涤器（scrubber）的标准方程式。`,
  keyTerms: [
    { en: 'fossil fuel', zh: '化石燃料', cat: 'Energy Source' },
    { en: 'petroleum (crude oil)', zh: '石油（原油）', cat: 'Substance' },
    { en: 'natural gas', zh: '天然气', cat: 'Substance' },
    { en: 'non-renewable energy source', zh: '不可再生能源', cat: 'Concept' },
    { en: 'hydrocarbon', zh: '碳氢化合物（烃）', cat: 'Compound Class' },
    { en: 'alkane', zh: '烷烃', cat: 'Compound Class' },
    { en: 'cycloalkane', zh: '环烷烃', cat: 'Compound Class' },
    { en: 'aromatic hydrocarbon', zh: '芳香族碳氢化合物（芳香烃）', cat: 'Compound Class' },
    { en: 'petrochemical feedstock', zh: '石油化工原料', cat: 'Application' },
    { en: 'fractional distillation', zh: '分馏', cat: 'Separation Process' },
    { en: 'fractionating tower', zh: '分馏塔', cat: 'Apparatus' },
    { en: 'naphtha', zh: '石脑油', cat: 'Fraction' },
    { en: 'bitumen', zh: '沥青', cat: 'Fraction' },
    { en: 'volatility', zh: '挥发性', cat: 'Physical Property' },
    { en: 'viscosity', zh: '黏度', cat: 'Physical Property' },
    { en: 'acid rain', zh: '酸雨', cat: 'Environment' },
    { en: 'photochemical smog', zh: '光化学烟雾', cat: 'Environment' },
    { en: 'catalytic converter', zh: '催化转化器', cat: 'Pollution Control' }
  ],
  sections: [
    /* ----------------------------------------------------------------------
       25.1 – 25.2
       ---------------------------------------------------------------------- */
    {
      id: 'u25-s1',
      code: '25.1–25.2',
      titleEn: 'Fossil fuels — origins, hydrocarbons & petroleum as a resource',
      titleZh: '化石燃料的成因、碳氢化合物（烃）分类与石油的价值',
      analogy: {
        icon: '🛢️',
        title: '亿万年地底“高压慢炖锅”与现代化工的“百宝箱”',
        body: `如果把地球地壳比作一口超级高压锅，煤（coal）就是数亿年前倒下的远古陆地森林（ancient terrestrial plants），而石油（petroleum）和天然气（natural gas）则是沉积在海底泥沙下的远古微小海洋生物（ancient tiny marine organisms）。它们在隔绝空气（absence of air）、高温（high temperature）、高压（high pressure）和细菌作用（bacterial action）下“慢炖”了数千万至数亿年才成型，用一点就少一点，因此属于不可再生能源（non-renewable energy sources）。更关键的是，石油不只是用来烧的燃料，它还是制造塑料（plastics）、合成纤维（synthetic fibres）、清洁剂（detergents）和药物（pharmaceuticals）的珍贵石油化工原料（petrochemical feedstock）！`
      },
      coreExplanation: `
        <h4>1. 三大化石燃料（Fossil Fuels）的成因与不可再生性</h4>
        <p><span class="term">化石燃料 <span class="en">fossil fuels</span></span>包括<span class="term">煤 <span class="en">coal</span></span>、<span class="term">石油 <span class="en">petroleum / crude oil</span></span>和<span class="term">天然气 <span class="en">natural gas</span></span>。由于它们的形成需要数千万至数亿年，消耗速度远超自然生成速度，储量有限，因此全部属于<span class="term">不可再生能源 <span class="en">non-renewable energy sources</span></span>。</p>
        <table class="chem-table">
          <thead>
            <tr>
              <th>化石燃料（Fossil Fuel）</th>
              <th>远古生物来源（Biological Origin）</th>
              <th>地底转化条件（Formation Conditions）</th>
              <th>主要化学成分（Main Constituents）</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><span class="term">煤 <span class="en">Coal</span></span>（黑色固体）</td>
              <td>远古<strong>陆地植物 / 森林遗骸</strong>（remains of ancient terrestrial plants / trees）</td>
              <td rowspan="2">深埋地底或海底沉积岩下，经受：<br>① <strong>隔绝空气</strong>（absence of air）<br>② <strong>高温</strong>（high temperature）<br>③ <strong>高压</strong>（high pressure）<br>④ <strong>细菌作用</strong>（bacterial action）</td>
              <td>主要含碳（carbon）及结构复杂的碳化合物，常含少量<strong>硫杂质（sulphur impurities）</strong></td>
            </tr>
            <tr>
              <td><span class="term">石油 <span class="en">Petroleum</span></span>（深褐黏稠液体）与 <span class="term">天然气 <span class="en">Natural gas</span></span>（气体）</td>
              <td>远古<strong>微小海洋动植物遗骸</strong>（remains of ancient tiny marine organisms / plants and animals）</td>
              <td><strong>石油：</strong>复杂的<span class="term">碳氢化合物混合物 <span class="en">mixture of hydrocarbons</span></span><br><strong>天然气：</strong>主要为<span class="term">甲烷 <span class="en">methane (CH₄, ~75–90%)</span></span>，含少量乙烷（ethane）、丙烷（propane）、丁烷（butane）</td>
            </tr>
          </tbody>
        </table>

        <h4>2. 碳氢化合物 / 烃（Hydrocarbons）的严格定义与三大类别</h4>
        <p><span class="term">碳氢化合物 / 烃 <span class="en">hydrocarbons</span></span>是指<strong>只含碳（carbon）和氢（hydrogen）两种元素</strong>的化合物（compounds containing carbon and hydrogen atoms ONLY）。<span class="term">石油 <span class="en">petroleum</span></span>是由成百上千种不同分子大小的碳氢化合物组成的复杂混合物，主要包括以下三大类：</p>
        <ul class="chem-list">
          <li><strong>① <span class="term">烷烃 <span class="en">Alkanes</span></span>：</strong>开链饱和烃，碳原子间全为单键，包括<span class="term">直链烷烃 <span class="en">straight-chain alkanes</span></span>（如己烷 <code>hexane, C₆H₁₄</code>）和<span class="term">支链烷烃 <span class="en">branched-chain alkanes</span></span>（如 2-甲基戊烷 <code>2-methylpentane</code>）。</li>
          <li><strong>② <span class="term">环烷烃 <span class="en">Cycloalkanes</span></span>：</strong>碳原子连成环状的饱和烃，无碳碳双键，如<span class="term">环戊烷 <span class="en">cyclopentane (C₅H₁₀)</span></span>、<span class="term">环己烷 <span class="en">cyclohexane (C₆H₁₂)</span></span>。</li>
          <li><strong>③ <span class="term">芳香族碳氢化合物 / 芳香烃 <span class="en">Aromatic hydrocarbons</span></span>：</strong>分子中含有至少一个特殊稳定的六元<strong>苯环（benzene ring）</strong>，如<span class="term">苯 <span class="en">benzene (C₆H₆)</span></span>、<span class="term">甲苯 <span class="en">methylbenzene / toluene (C₆H₅CH₃)</span></span>（许多芳香烃具有毒性或致癌性）。</li>
        </ul>

        <div class="struct-card">
          <pre class="struct-pre">  (1) Straight-chain alkane 直链烷烃          (2) Cycloalkane 环烷烃            (3) Aromatic hydrocarbon 芳香烃
      CH₃—CH₂—CH₂—CH₂—CH₂—CH₃                     H₂C ——— CH₂                         CH
            hexane 己烷 (C₆H₁₄)                  ╱           ╲                      ╱╱  ╲
                                               H₂C           CH₂                  HC     CH
  (1b) Branched-chain alkane 支链烷烃            ╲           ╱                     │     │
      CH₃—CH(CH₃)—CH₂—CH₂—CH₃                     H₂C ——— CH₂                     HC     CH
       2-methylpentane 2-甲基戊烷             cyclohexane 环己烷 (C₆H₁₂)            ╲  ╱╱
                                                                                      CH
                                                                                benzene 苯 (C₆H₆)</pre>
          <div class="struct-cap">精工版课本 25.2 核心对比：石油中天然存在的三大类碳氢化合物（注意：天然原油中几乎不含烯烃 alkenes！）</div>
        </div>

        <h4>3. 石油的双重角色：能源支柱 vs 石油化工原料（Petrochemical Feedstock）</h4>
        <p>全球开采的石油约 <strong>90%</strong> 被直接用作交通、发电及供暖的<span class="term">燃料 <span class="en">fuels</span></span>；其余约 <strong>10%</strong>（尤其是<span class="term">石脑油 <span class="en">naphtha</span></span>馏分）则是不可替代的<span class="term">石油化工原料 <span class="en">petrochemical feedstock</span></span>，经裂化与合成可制造<span class="term">塑料 <span class="en">plastics</span></span>、<span class="term">合成纤维 <span class="en">synthetic fibres</span></span>、<span class="term">非皂性清洁剂 <span class="en">soapless detergents</span></span>、<span class="term">药物 <span class="en">pharmaceuticals / drugs</span></span>及有机溶剂。</p>

        <div class="callout callout-warn">
          <strong>⚠️ 课本规范警示（DSE 高频概念红线）：</strong>
          判断某物质是否为 <span class="term">碳氢化合物 <span class="en">hydrocarbon</span></span> 时，只要分子式里出现 <code>O</code>、<code>N</code>、<code>Cl</code>、<code>Br</code> 等任何其他元素（例如乙醇 <code>CH₃CH₂OH</code>、葡萄糖 <code>C₆H₁₂O₆</code>、氯乙烷 <code>CH₃CH₂Cl</code>），一律<strong>不是</strong> hydrocarbon！答题写定义时漏掉单词 <strong>"only"</strong>（只含碳和氢）会直接扣分！
        </div>
      `,
      textbookFormulas: [
        {
          label: '天然气主要成分甲烷（Methane）的完全燃烧',
          equationHtml: `CH<sub>4</sub>(g) + 2O<sub>2</sub>(g) <span class="chem-arrow"><span class="cond-top"></span><span class="arr-main">⟶</span><span class="cond-bot"></span></span> CO<sub>2</sub>(g) + 2H<sub>2</sub>O(l)`,
          note: '天然气（natural gas）主要含甲烷（methane, CH₄），燃烧比煤和重油更洁净，几乎不产生二氧化硫（SO₂）与悬浮碳粒。'
        }
      ],
      examTrap: `天然石油（petroleum）中主要含烷烃（alkanes）、环烷烃（cycloalkanes）和芳香烃（aromatic hydrocarbons），几乎不含活泼的烯烃（alkenes）！工业上的烯烃是后续通过重油或石脑油裂化（cracking, Unit 27）人工制造出来的。`,
      relations: [
        {
          type: 'leadsTo',
          targetUnitId: 'u26',
          label: '衔接 Unit 26：碳链成键能力（Catenation）与烃类命名',
          why: '石油中之所以能存在成百上千种直链、支链与环状烃，根源在于碳原子独特的四价共价键成链与成环能力。'
        },
        {
          type: 'leadsTo',
          targetUnitId: 'u27',
          label: '衔接 Unit 27 & 28：石脑油裂化（Cracking）制烯烃与加成聚合物',
          why: '石油分馏出的石脑油（naphtha）正是制造乙烯（ethene）及聚乙烯塑料（polyethene）的起点。'
        }
      ],
      questions: [
        {
          id: 'u25-s1-q1',
          level: 1,
          levelTag: 'Level 1 · 中文直觉破冰',
          type: 'mcq',
          stem: '下列哪一种物质符合精工版课本对“碳氢化合物 / 烃（hydrocarbon）”的严格定义，且天然存在于石油（petroleum）中？',
          cueWords: [],
          options: [
            'A. 乙醇（Ethanol, CH₃CH₂OH）',
            'B. 环己烷（Cyclohexane, C₆H₁₂）',
            'C. 三氯甲烷（Trichloromethane, CHCl₃）',
            'D. 葡萄糖（Glucose, C₆H₁₂O₆）'
          ],
          answerIndex: 1,
          hint: '紧扣“只含碳（C）和氢（H）两种元素（carbon and hydrogen ONLY）”这一铁律检查化学式！',
          explanation: '环己烷（cyclohexane, C₆H₁₂）只含碳和氢两种元素，属于环烷烃（cycloalkane），天然存在于石油（petroleum）中。乙醇与葡萄糖含氧元素（O），三氯甲烷含氯元素（Cl），均不属于碳氢化合物（hydrocarbons）。',
          markingScheme: ['1M: Cyclohexane (C6H12) is a hydrocarbon containing carbon and hydrogen atoms only.'],
          commonMistake: '把英文名相似的 carbohydrate（碳水化合物，含 C、H、O）与 hydrocarbon（碳氢化合物，只含 C、H）混淆！'
        },
        {
          id: 'u25-s1-q2',
          level: 2,
          levelTag: 'Level 2 · 中英过渡辨析',
          type: 'mcq',
          stem: '关于煤（coal）、石油（petroleum）和天然气（natural gas）的比较，下列哪一项陈述是正确的（correct）？',
          cueWords: [
            { phrase: 'coal', zh: '煤', concept: '源自远古陆地植物（ancient terrestrial plants）' },
            { phrase: 'petroleum', zh: '石油', concept: '源自远古微小海洋生物（ancient marine organisms），是烃混合物' }
          ],
          options: [
            'A. 煤（coal）与石油（petroleum）均由远古陆地森林遗骸在有氧条件下转化而成',
            'B. 天然石油（petroleum）是纯净化合物，可写成单一分子式 C₈H₁₈',
            'C. 石油中含有烷烃（alkanes）、环烷烃（cycloalkanes）及芳香族碳氢化合物（aromatic hydrocarbons）',
            'D. 天然气（natural gas）的主要成分是氢气（H₂）和一氧化碳（CO）'
          ],
          answerIndex: 2,
          hint: '回忆煤与石油的远古生物来源差异，以及天然气（methane）与香港煤气（town gas，含 H₂ 和 CO）的区别！',
          explanation: '石油（petroleum）是复杂的碳氢化合物混合物（complex mixture of hydrocarbons），包含烷烃（alkanes）、环烷烃（cycloalkanes）和芳香烃（aromatic hydrocarbons）。煤源于陆地植物，石油和天然气源于海洋生物且需隔绝空气（absence of air）；天然气主要成分是甲烷（methane, CH₄），而含 H₂ 和 CO 的是人工制造的香港煤气（Hong Kong town gas）。',
          markingScheme: ['1M: Petroleum is a mixture containing alkanes, cycloalkanes and aromatic hydrocarbons.'],
          commonMistake: '将天然气（natural gas，主成分 CH₄）与由石脑油制成的香港人工煤气（town gas，含 ~49% H₂、~28.5% CH₄、~19.5% CO₂、~3% CO）混为一谈！'
        },
        {
          id: 'u25-s1-q3',
          level: 3,
          levelTag: 'Level 3 · HKDSE 英文实战',
          type: 'structured',
          stem: 'Petroleum is a non-renewable fossil fuel formed from ancient marine organisms. (a) State the conditions required for the transformation of dead marine organisms into petroleum over millions of years. (b) Define the term "hydrocarbon". (c) Suggest ONE reason why scientists warn that burning petroleum solely as fuel is wasteful.',
          cueWords: [
            { phrase: 'non-renewable fossil fuel', zh: '不可再生化石燃料', concept: '形成耗时数百万年以上，储量有限' },
            { phrase: 'ancient marine organisms', zh: '远古海洋生物', concept: '石油与天然气的生物遗骸来源' },
            { phrase: 'Define the term "hydrocarbon"', zh: '定义“碳氢化合物”', concept: '必答关键词：compound + carbon and hydrogen ONLY' },
            { phrase: 'burning petroleum solely as fuel is wasteful', zh: '仅把石油当燃料烧是浪费', concept: '考石油作为石化工业原料（petrochemical feedstock）制造塑料/药物的价值' }
          ],
          hint: '(a) 地底深处没有空气，温度压力怎样？还有什么微生物参与？(b) 千万别漏掉单词 ONLY！(c) 想想石油除了燃烧外还能用来生产什么化工产品？',
          explanation: '(a) 远古海洋生物遗骸被泥沙深埋后，在隔绝空气（absence of air）、高温（high temperature）、高压（high pressure）及细菌作用（bacterial action）下转化为石油。(b) 碳氢化合物是只含碳和氢两种元素的化合物。(c) 石油是珍贵的石油化工原料（petrochemical feedstock），可用于制造塑料（plastics）、合成纤维、清洁剂和药物，烧掉后无法再生。',
          markingScheme: [
            '1M: (a) High temperature, high pressure, bacterial action and absence of air (any three complete conditions)',
            '1M: (b) A hydrocarbon is a compound that contains carbon and hydrogen atoms ONLY.',
            '1M: (c) Petroleum is an important raw material / petrochemical feedstock for manufacturing plastics, synthetic fibres, detergents or pharmaceuticals.'
          ],
          commonMistake: '在 (b) 中写成 "a mixture of carbon and hydrogen"（错！必须是 compound 化合物，且必须带 ONLY）！'
        }
      ]
    },

    /* ----------------------------------------------------------------------
       25.3 – 25.4
       ---------------------------------------------------------------------- */
    {
      id: 'u25-s2',
      code: '25.3–25.4',
      titleEn: 'Fractional distillation of petroleum & uses of major fractions',
      titleZh: '石油的分馏原理（物理分离）与八大馏分用途全表',
      analogy: {
        icon: '🏢',
        title: '分馏塔就像一座“按沸点分配楼层”的温度梯度大厦',
        body: `原油（petroleum）先把全身加热到约 400 °C 变成滚烫蒸气送入分馏塔（fractionating tower）底层。这座大厦底部极热（>350 °C）、越往上越凉爽（塔顶 <40 °C）。大块头的长链碳氢化合物分子之间范德华力（van der Waals' forces）很强、沸点很高，刚往上走几层就觉得“太冷了”，立刻液化凝结在底层托盘；小个子的短链分子范德华力很弱、沸点极低，一路轻盈冲上凉爽的高层才凝结，最小的炼油气（refinery gases, C₁–C₄）甚至直接从塔顶气态溜走！整个过程只把不同沸点的分子按楼层分开，没有任何共价键断裂，纯粹是物理分离（physical separation）！`
      },
      coreExplanation: `
        <h4>1. 石油分馏（Fractional Distillation）的物理分离本质</h4>
        <p>直接开采出来的<span class="term">石油 <span class="en">petroleum</span></span>混杂了从 <code>C₁</code> 到 <code>C₂₅+</code> 的无数种碳氢化合物，难以直接高效燃烧。炼油厂利用<span class="term">分馏 <span class="en">fractional distillation</span></span>将其分离成若干个具有不同沸点范围的<span class="term">石油馏分 <span class="en">petroleum fractions</span></span>：</p>
        <ul class="chem-list">
          <li><strong>属于<span class="term">物理变化 / 物理分离过程 <span class="en">physical change / physical separation process</span></span>：</strong>加热蒸发与冷却凝结只克服或恢复分子间的<span class="term">范德华力 <span class="en">van der Waals' forces</span></span>，分子内部的 <code>C—C</code> 和 <code>C—H</code> 共价键完好无损，没有生成新物质。</li>
          <li><strong>微观分离依据：</strong>不同碳氢化合物分子的<strong>碳原子数与分子大小（molecular size）不同</strong> ➔ 分子间<strong><span class="term">范德华力 <span class="en">van der Waals' forces</span></span>强弱不同</strong> ➔ <strong><span class="term">沸点 <span class="en">boiling points</span></span>不同</strong>。</li>
          <li><strong>工业<span class="term">分馏塔 <span class="en">fractionating tower</span></span>运作：</strong>原油先在<span class="term">加热炉 <span class="en">furnace</span></span>加热至约 <strong>400 °C</strong> 后送入塔底；塔内<strong>底部较热（&gt;350 °C）、顶部较冷（&lt;40 °C）</strong>。未气化的高沸点残渣（<span class="term">沥青 <span class="en">bitumen</span></span>）从塔底排出；蒸气穿过<span class="term">泡罩 <span class="en">bubble caps</span></span>上升，<strong>高沸点（大分子）馏分在较低较热层先凝结</strong>，<strong>低沸点（小分子）馏分升至较高较冷层才凝结</strong>。</li>
          <li><strong>必考细节：</strong>分离得到的每一个<span class="term">馏分 <span class="en">fraction</span></span>仍然是由沸点相近的多种碳氢化合物组成的<strong><span class="term">混合物 <span class="en">mixture</span></span></strong>，绝不是纯净物！</li>
        </ul>

        <h4>2. 精工版课本八大石油馏分（8 Major Petroleum Fractions）碳数、沸程与用途总表</h4>
        <table class="chem-table">
          <thead>
            <tr>
              <th>塔层位置</th>
              <th>馏分名称（中英对照）</th>
              <th>每分子碳数</th>
              <th>沸点范围（b.p. Range）</th>
              <th>DSE 必背核心用途（Major Uses）</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>塔顶最高层</td>
              <td><span class="term">炼油气 <span class="en">Refinery gases</span></span></td>
              <td><code>C₁–C₄</code></td>
              <td><code>&lt; 40 °C</code></td>
              <td>加压液化作<span class="term">液化石油气 <span class="en">LPG (liquefied petroleum gas)</span></span>供家庭煮食、香港的士/小巴燃料及化工原料</td>
            </tr>
            <tr>
              <td>第 2 层</td>
              <td><span class="term">汽油 <span class="en">Petrol / Gasoline</span></span></td>
              <td><code>C₅–C₁₀</code></td>
              <td><code>40–170 °C</code></td>
              <td>私家车 / 轻型汽车内燃机燃料（fuel for motor cars）</td>
            </tr>
            <tr>
              <td>第 3 层</td>
              <td><span class="term">石脑油 <span class="en">Naphtha</span></span></td>
              <td><code>C₆–C₁₀</code></td>
              <td><code>70–170 °C</code></td>
              <td>① <strong>制造香港煤气（manufacturing Hong Kong town gas）</strong>；② 最重要的<strong><span class="term">石油化工原料 <span class="en">petrochemical feedstock</span></span></strong>（经裂化制烯烃与塑料）</td>
            </tr>
            <tr>
              <td>第 4 层</td>
              <td><span class="term">煤油 / 火水 <span class="en">Kerosene / Paraffin oil</span></span></td>
              <td><code>C₁₀–C₁₄</code></td>
              <td><code>170–250 °C</code></td>
              <td><strong>飞机喷射引擎燃料（aircraft / jet fuel）</strong>、家用煤油炉燃料</td>
            </tr>
            <tr>
              <td>第 5 层</td>
              <td><span class="term">柴油 <span class="en">Diesel oil / Gas oil</span></span></td>
              <td><code>C₁₄–C₂₀</code></td>
              <td><code>250–350 °C</code></td>
              <td>重型车辆燃料：货车（lorries）、公共巴士（buses）、铁路机车（trains）</td>
            </tr>
            <tr>
              <td>第 6 层</td>
              <td><span class="term">燃料油 <span class="en">Fuel oil</span></span></td>
              <td><code>C₂₀–C₂₅</code></td>
              <td><code>&gt; 350 °C</code></td>
              <td>远洋轮船（ships）及发电厂锅炉（power stations）燃料</td>
            </tr>
            <tr>
              <td>第 7 层</td>
              <td><span class="term">润滑油及石蜡 <span class="en">Lubricating oil and waxes</span></span></td>
              <td><code>C₂₀–C₂₅+</code></td>
              <td><code>&gt; 350 °C</code></td>
              <td>机器引擎润滑剂（lubricating machines）、制造蜡烛（candles）及抛光蜡（polishes）</td>
            </tr>
            <tr>
              <td>塔底残渣</td>
              <td><span class="term">沥青 <span class="en">Bitumen</span></span></td>
              <td><code>C₂₅+</code></td>
              <td><code>&gt; 350 °C</code>（残渣）</td>
              <td><strong>铺设公路路面（surfacing roads）</strong>及建筑物屋顶防水材料（roofing）</td>
            </tr>
          </tbody>
        </table>

        <h4>3. 学校实验室分馏石油（Fractional Distillation in School Lab）操作规范</h4>
        <ul class="chem-list">
          <li><strong><span class="term">矿渣棉 <span class="en">mineral wool</span></span>吸住原油：</strong>防止加热时原油剧烈飞溅（spitting）冲入导管；若在烧瓶中直接加热液体原油，则必须加入<span class="term">防暴沸颗粒 <span class="en">anti-bumping granules</span></span>保证平稳沸腾。</li>
          <li><strong><span class="term">温度计水银球 <span class="en">thermometer bulb</span></span>位置：</strong>必须正对大试管/烧瓶的<strong>支管口水平高度（opposite the side-arm outlet）</strong>，才能准确测量即将进入冷凝管的气态馏分沸点范围（依次收集 <code>室温–100 °C</code>、<code>100–150 °C</code>、<code>150–200 °C</code>、<code>200–250 °C</code> 四个馏分）。</li>
          <li><strong><span class="term">冷水浴 <span class="en">cold water bath</span></span>与安全防护：</strong>接收试管浸于冷水中帮助烃蒸气冷凝，切勿将接收管口密封（防止管内气压过高爆炸！）；由于原油易燃且含毒性芳香烃，须在通风橱（fume cupboard）中进行并佩戴护目镜。</li>
        </ul>

        <div class="callout callout-tip">
          <strong>💡 香港生活化学必考点：香港三大气体燃料千万别背混！</strong>
          ① <strong>天然气（Natural gas）</strong>：主要含 <code>CH₄</code>（发电厂与部分住宅用）；② <strong>液化石油气（LPG）</strong>：来自石油分馏塔顶的<span class="term">炼油气 <span class="en">refinery gases</span></span>，主要含丙烷 <code>C₃H₈</code> 和丁烷 <code>C₄H₁₀</code>（香港红绿的士燃料）；③ <strong>香港煤气（Hong Kong Towngas）</strong>：由<span class="term">石脑油 <span class="en">naphtha</span></span>与水蒸气重整制成，含 <code>~49% H₂</code>、<code>~28.5% CH₄</code>、<code>~19.5% CO₂</code> 及约 <code>3%</code> 有毒的 <code>CO</code>！
        </div>
      `,
      svgId: 'svg-fractionating-tower',
      svgCaption: '工业石油分馏塔（Fractionating Tower）：塔底热（>350 °C）、塔顶冷（<40 °C），八大馏分按沸点与分子大小分层凝结。',
      textbookFormulas: [
        {
          label: '分馏过程的物理状态变化（无共价键断裂）',
          equationHtml: `C<sub>n</sub>H<sub>2n+2</sub>(l) <span class="chem-arrow"><span class="cond-top">heat in furnace (~400 °C)</span><span class="arr-main">⟶</span><span class="cond-bot">overcome van der Waals' forces</span></span> C<sub>n</sub>H<sub>2n+2</sub>(g) <span class="chem-arrow"><span class="cond-top">cool at tray</span><span class="arr-main">⟶</span><span class="cond-bot"></span></span> C<sub>n</sub>H<sub>2n+2</sub>(l)`,
          note: '分馏（fractional distillation）不改变分子化学式，属于物理分离；而 Unit 27 的裂化（cracking）则会打断 C—C 强共价键生成小分子，属于化学变化。'
        }
      ],
      examTrap: `答分馏原理时，严禁说“加热打断碳碳共价键（break covalent bonds）”！分子晶体/简单分子液体沸腾克服的永远是微弱的分子间范德华力（intermolecular van der Waals' forces）；并且温度计水银球绝不能插进原油液体或矿渣棉里！`,
      relations: [
        {
          type: 'leadsTo',
          targetUnitId: 'u25',
          label: '直通本单元 25.5：高低沸点馏分的六大性质递变',
          why: '分馏塔从顶到底排出的八大馏分，其颜色、黏度、挥发性、易燃性和火焰黑烟程度呈现完美规律递变。'
        },
        {
          type: 'compareWith',
          targetUnitId: 'u27',
          label: '对比 Unit 27.3：分馏（物理分离）vs 裂化（化学裂解）',
          why: '分馏解决“把原油按大小分家”，裂化则解决“重馏分供过于求、轻馏分（汽油）供不应求”的供需矛盾！'
        }
      ],
      questions: [
        {
          id: 'u25-s2-q1',
          level: 1,
          levelTag: 'Level 1 · 中文直觉破冰',
          type: 'mcq',
          stem: '在香港，用来制造家用人工煤气（town gas）及作为制造塑料原料的石油馏分（petroleum fraction），以及用来给飞机（aircraft）提供动力的石油馏分分别是哪两个？',
          cueWords: [],
          options: [
            'A. 炼油气（Refinery gases）与汽油（Petrol）',
            'B. 石脑油（Naphtha）与煤油（Kerosene）',
            'C. 柴油（Diesel oil）与燃料油（Fuel oil）',
            'D. 汽油（Petrol）与沥青（Bitumen）'
          ],
          answerIndex: 1,
          hint: '记住两个高频专属配对：Town gas + Petrochemical feedstock = 哪一个 C₆–C₁₀ 馏分？Aircraft jet fuel = 哪一个 C₁₀–C₁₄ 馏分？',
          explanation: '石脑油（naphtha, C₆–C₁₀）是制造香港煤气（town gas）及石油化工产品（如裂化制乙烯造塑料）的核心原料；煤油（kerosene, C₁₀–C₁₄）则是飞机引擎燃料（aircraft fuel）。',
          markingScheme: ['1M: Naphtha is used for manufacturing town gas/petrochemicals, and kerosene is used as aircraft fuel.'],
          commonMistake: '误以为飞机烧汽油（petrol 是私家车燃料，飞机高空低温环境需要沸点与闪点适中的煤油 kerosene）！'
        },
        {
          id: 'u25-s2-q2',
          level: 2,
          levelTag: 'Level 2 · 中英过渡辨析',
          type: 'mcq',
          stem: '在学校实验室进行石油分馏（fractional distillation of petroleum）实验时，下列哪一项关于实验装置或馏分性质的描述是正确的？',
          cueWords: [
            { phrase: 'fractional distillation of petroleum', zh: '石油分馏', concept: '实验室物理分离原油装置与安全细节' }
          ],
          options: [
            'A. 温度计水银球（thermometer bulb）应深深插入浸有石油的矿渣棉（mineral wool）内部',
            'B. 接收馏分的试管必须用橡胶塞严密塞紧，以防止挥发性烃蒸气逸出',
            'C. 在 100–150 °C 收集到的液体馏分仍然是由多种碳氢化合物组成的混合物（mixture）',
            'D. 分馏过程中长链烷烃的 C—C 共价键断裂并生成短链烯烃（alkenes）'
          ],
          answerIndex: 2,
          hint: '逐项排雷：温度计测的是液体还是支管口蒸气温度？加热密闭系统会发生什么危险？分馏得到的馏分是纯净物吗？',
          explanation: '每个石油馏分都是在一定沸程内凝结的多种碳氢化合物的混合物（mixture of hydrocarbons）。A 错：温度计水银球须对准支管口（side-arm level）；B 错：加热密封装置会导致气压剧增引发爆炸；D 错：断共价键生烯烃是裂化（cracking），分馏只是物理分离。',
          markingScheme: ['1M: Each fraction collected within a boiling point range is still a mixture of hydrocarbons.'],
          commonMistake: '以为控制了温度范围（如 100–150 °C）接出来的液体就是单一纯净化合物（纯净物有固定单一沸点，而馏分是一段沸程的混合物）。'
        },
        {
          id: 'u25-s2-q3',
          level: 3,
          levelTag: 'Level 3 · HKDSE 英文实战',
          type: 'structured',
          stem: 'In an oil refinery, petroleum is separated into useful fractions such as petrol, naphtha and diesel oil in a fractionating tower. (a) Explain the underlying physical principle that allows petroleum to be separated into different fractions by fractional distillation. (b) State which of petrol or diesel oil is collected at a higher level in the fractionating tower, and explain why.',
          cueWords: [
            { phrase: 'separated into useful fractions', zh: '分离成有用馏分', concept: '考察分馏依据：分子大小 ➔ 范德华力 ➔ 沸点差异' },
            { phrase: 'underlying physical principle', zh: '基本物理原理', concept: '强调 physical process、different boiling points、van der Waals\' forces' },
            { phrase: 'collected at a higher level in the fractionating tower', zh: '在分馏塔较高层收集', concept: '塔顶温度较低（cooler），收集分子较小、沸点较低的馏分' }
          ],
          hint: '(a) 先点明石油含不同分子大小的烃 ➔ 分子间范德华力不同 ➔ 具有不同沸点（different boiling points）！(b) 比较 petrol（C₅–C₁₀）与 diesel oil（C₁₄–C₂₀）谁沸点更低、去到更凉的塔顶上层才凝结？',
          explanation: '(a) 石油中的不同碳氢化合物分子大小不同，分子间的范德华力（van der Waals\' forces）强弱不同，因此具有不同的沸点（different boiling points），可通过蒸发与分层冷凝加以分离。(b) 汽油（petrol）在较高层收集，因为汽油中的烃分子比柴油（diesel oil）小，分子间范德华力较弱，沸点较低，蒸气上升到温度较低的上层才凝结。',
          markingScheme: [
            '1M: (a) Hydrocarbons in petroleum have different molecular sizes and hence different strengths of van der Waals\' forces between molecules, resulting in different boiling points.',
            '1M: (b) Petrol is collected at a higher level.',
            '1M: (b) Hydrocarbon molecules in petrol are smaller / have weaker van der Waals\' forces / have a lower boiling point range than those in diesel oil, so they condense at the cooler upper part of the tower.'
          ],
          commonMistake: '回答 (b) 时只写 "Petrol is lighter so it rises higher"（只说较轻不给分子间作用力与沸点高低原因在 DSE 不得分！必须扣紧 lower boiling point / weaker van der Waals\' forces）。'
        }
      ]
    },

    /* ----------------------------------------------------------------------
       25.5
       ---------------------------------------------------------------------- */
    {
      id: 'u25-s3',
      code: '25.5',
      titleEn: 'Gradation in physical & combustion properties of petroleum fractions',
      titleZh: '石油馏分的物理性质与燃烧性质递变规律（完整因果链）',
      analogy: {
        icon: '🕯️',
        title: '酒精灯 vs 石蜡蜡烛：为什么分子越大越黏稠、越难点燃、黑烟越浓？',
        body: `想象一下短小灵活的汽油分子（C₅–C₁₀）和又长又重的润滑油/石蜡分子（C₂₀+）：短链分子就像一盘光滑的小弹珠，彼此吸引力（范德华力 van der Waals' forces）微弱，轻轻一晃就流动（低黏度 low viscosity），室温下嗖嗖往空气里跑（高挥发性 high volatility），划根火柴瞬间点燃（高易燃性 high flammability），而且碳含量比例低，氧气够用，烧起来火焰干净少烟。相反，长链大分子就像一碗纠缠在一起的长意面，范德华力很强，倒都倒不动（高黏度 high viscosity），很难蒸发成气态所以难点燃；一旦烧起来，由于含碳质量百分比（percentage by mass of carbon）高，空气里的氧气根本来不及把它完全烧透，没烧完的碳粒（carbon particulates / soot）就会冒出滚滚黑烟！`
      },
      coreExplanation: `
        <h4>1. 贯穿整个 Topic 7 的黄金因果主链（满分答题骨架）</h4>
        <div class="struct-card">
          <pre class="struct-pre">  馏分凝结沸程越高（越靠近分馏塔底部）
     │
     ▼  1. 每分子含碳原子数目增加（Number of carbon atoms per molecule ↑）
     ▼  2. 分子体积与相对分子质量增大（Molecular size &amp; relative molecular mass ↑）
     ▼  3. 分子间范德华力增强（Strength of van der Waals' forces between molecules ↑）
     │
     ├──► 物理性质：沸点（Boiling point）↑  │  黏度（Viscosity）↑  │  挥发性（Volatility）↓
     └──► 燃烧性质：易燃性（Flammability）↓ │  碳质量百分比（% by mass of C）↑ ➔ 火焰黑烟程度（Sootiness）↑</pre>
          <div class="struct-cap">只要遇到 DSE "Compare and explain..." 比较两个石油馏分性质的论述题，严格按此三步微观因果链作答稳拿满分！</div>
        </div>

        <h4>2. 实验室四大馏分性质对比总表（由低沸点馏分 ➔ 高沸点馏分）</h4>
        <p>在学校实验室分馏石油并收集四个递增沸程馏分（<code>Fraction 1: 室温–100 °C</code> ➔ <code>Fraction 4: 200–250 °C</code>）后，逐项测试可观察到以下规律递变：</p>
        <table class="chem-table">
          <thead>
            <tr>
              <th>测试性质（Property）</th>
              <th>低沸点轻馏分（如汽油 Petrol）</th>
              <th>高沸点重馏分（如柴油 Diesel / 燃料油）</th>
              <th>微观成因深度解释（DSE Marking Reason）</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>① <span class="term">沸点范围 <span class="en">Boiling point range</span></span></strong></td>
              <td>较低（Lower）</td>
              <td>较高（Higher）</td>
              <td>分子越大，分子间<span class="term">范德华力 <span class="en">van der Waals' forces</span></span>越强，沸腾分离分子所需热能越多</td>
            </tr>
            <tr>
              <td><strong>② <span class="term">颜色 <span class="en">Colour</span></span></strong></td>
              <td>无色或极淡黄（Colourless / pale yellow）</td>
              <td>深黄至深褐色（Yellow to dark brown）</td>
              <td>随大分子及复杂芳香族组分增加，吸光性增强，颜色逐级加深</td>
            </tr>
            <tr>
              <td><strong>③ <span class="term">挥发性 <span class="en">Volatility</span></span></strong>（蒸发快慢）</td>
              <td><strong>高挥发性（More volatile）</strong>，极易蒸发</td>
              <td><strong>低挥发性（Less volatile）</strong>，难蒸发</td>
              <td>小分子间<span class="term">范德华力 <span class="en">van der Waals' forces</span></span>弱，室温下分子极易挣脱液面束缚逸入空气</td>
            </tr>
            <tr>
              <td><strong>④ <span class="term">黏度 <span class="en">Viscosity</span></span></strong>（抗拒流动程度）</td>
              <td><strong>低黏度（Less viscous / runny）</strong>，易流动</td>
              <td><strong>高黏度（More viscous / thick）</strong>，浓稠难流</td>
              <td>长链大分子间范德华力更强，且长碳链容易互相缠绕（entangle），阻碍液体流动</td>
            </tr>
            <tr>
              <td><strong>⑤ <span class="term">易燃性 <span class="en">Flammability</span></span></strong>（点燃难易）</td>
              <td><strong>极易点燃（More flammable）</strong></td>
              <td><strong>较难点燃（Less flammable）</strong>，甚至需灯芯助燃</td>
              <td>液体燃料是靠液面上方的<strong>气态蒸气（vapour）</strong>与氧气混合点燃的；轻馏分挥发性高，液面上蒸气浓度大，一触即燃</td>
            </tr>
            <tr>
              <td><strong>⑥ <span class="term">火焰黑烟程度 <span class="en">Sootiness of flame</span></span></strong></td>
              <td>火焰较洁净、少黑烟（Cleaner, less sooty flame）</td>
              <td>火焰明亮发黄、<strong>浓烈黑烟（Yellow, very sooty flame）</strong></td>
              <td>重馏分烃分子的<strong><span class="term">碳质量百分比 <span class="en">percentage by mass of carbon</span></span>较高</strong>，完全燃烧需氧量大，空气供氧不足导致<strong><span class="term">不完全燃烧 <span class="en">incomplete combustion</span></span></strong>产生固体碳粒（carbon particulates / soot）</td>
            </tr>
          </tbody>
        </table>

        <div class="callout callout-tip">
          <strong>💡 数学秒证“分子越大，含碳质量百分比（% by mass of C）越高”：</strong>
          对比甲烷 <code>CH₄</code>（含碳量 = 12.0 ÷ 16.0 = 75.0%）、丁烷 <code>C₄H₁₀</code>（= 48.0 ÷ 58.0 = 82.8%）与十六烷 <code>C₁₆H₃₄</code>（= 192.0 ÷ 226.0 = 85.0%）——随着碳数 <i>n</i> 在烷烃通式 <code>CₙH₂ₙ₊₂</code> 中增大，碳质量占比不断逼近 85.7%，因此重馏分更容易发生不完全燃烧冒黑烟！
        </div>
      `,
      svgId: 'svg-lab-fractional-distillation',
      svgCaption: '学校实验室分馏石油装置：依次收集 4 个递增沸程馏分，直观比较颜色、黏度（viscosity）、挥发性（volatility）、易燃性（flammability）与黑烟程度（sootiness）。',
      textbookFormulas: [
        {
          label: '轻馏分完全燃烧（洁净火焰）vs 重馏分不完全燃烧（冒黑烟 Soot）',
          equationHtml: `2C<sub>12</sub>H<sub>26</sub>(l) + 13O<sub>2</sub>(g) <span class="chem-arrow"><span class="cond-top">limited air</span><span class="arr-main">⟶</span><span class="cond-bot">incomplete combustion</span></span> 24C(s) + 26H<sub>2</sub>O(g) &nbsp;&nbsp;<span style="color:#64748b;font-size:0.9em;">(或同时生成 CO 和 CO₂)</span>`,
          note: '空气不足时发生不完全燃烧（incomplete combustion），生成的灼热固体碳粒 C(s) 令火焰呈明亮黄色（luminous yellow flame），冷却逸出即为黑烟（soot / dark smoke）。'
        }
      ],
      examTrap: `千万区分清楚英文反向词：高沸点重馏分是 HIGH viscosity（高黏度 = 浓稠流不动），但却是 LOW volatility（低挥发性）和 LOW flammability（低易燃性）！很多同学把“浓稠”误写成 low viscosity，直接痛失分数！`,
      relations: [
        {
          type: 'buildsOn',
          targetUnitId: 'u25',
          label: '承接 25.3：分馏塔温度梯度与分子大小分布',
          why: '正因为分馏把不同碳数分子分开了，各馏分才展现出由稀到稠、由洁净到多烟的阶梯变化。'
        },
        {
          type: 'leadsTo',
          targetUnitId: 'u26',
          label: '衔接 Unit 26.10：同系物（Homologous series）的物理性质递变',
          why: '石油馏分的性质递变，本质上正是烷烃同系物随相对分子质量增大而递变的宏观体现。'
        }
      ],
      questions: [
        {
          id: 'u25-s3-q1',
          level: 1,
          levelTag: 'Level 1 · 中文直觉破冰',
          type: 'mcq',
          stem: '与私家车使用的汽油（petrol, C₅–C₁₀）相比，远洋轮船使用的燃料油（fuel oil, C₂₀–C₂₅）具有下列哪一组性质？',
          cueWords: [],
          options: [
            'A. 黏度较低（lower viscosity）、挥发性较高（higher volatility）、火焰更少黑烟',
            'B. 黏度较高（higher viscosity）、挥发性较低（lower volatility）、火焰更多黑烟（sootier flame）',
            'C. 黏度较高（higher viscosity）、更易点燃（more flammable）、颜色更浅',
            'D. 沸点较低（lower boiling point）、挥发性较低（lower volatility）、火焰更多黑烟'
          ],
          answerIndex: 1,
          hint: '燃料油（fuel oil）分子比汽油（petrol）大得多！想象浓稠糖浆与清水的差别，再想它烧起来烟多还是烟少？',
          explanation: '燃料油（fuel oil）含碳数更多（C₂₀–C₂₅），分子更大，分子间范德华力（van der Waals\' forces）更强，因此沸点更高、黏度更高（higher viscosity）、挥发性更低（lower volatility）、更难点燃（less flammable），且因含碳质量百分比较高而燃烧时冒更多黑烟（sootier flame）。',
          markingScheme: ['1M: Fuel oil has higher viscosity, lower volatility and burns with a sootier flame than petrol.'],
          commonMistake: '把“黏度高（high viscosity）”误理解成流动性好（记住：viscosity = 黏滞阻力，蜂蜜是 high viscosity，水是 low viscosity！）。'
        },
        {
          id: 'u25-s3-q2',
          level: 2,
          levelTag: 'Level 2 · 中英过渡辨析',
          type: 'mcq',
          stem: '在实验室测试从石油分馏出的四个馏分时，发现在 200–250 °C 收集到的馏分 4（Fraction 4）比在室温–100 °C 收集到的馏分 1（Fraction 1）燃烧时产生更多黑烟（black smoke / soot）。最准确的化学解释是什么？',
          cueWords: [
            { phrase: '200–250 °C', zh: '高沸程馏分', concept: '对应较大碳氢化合物分子（larger hydrocarbon molecules）' },
            { phrase: 'black smoke / soot', zh: '黑烟 / 碳粒', concept: '碳质量百分比更高 ➔ 不完全燃烧生成碳粒 C(s)' }
          ],
          options: [
            'A. 馏分 4 的分子间范德华力（van der Waals\' forces）太强，火焰温度无法克服范德华力',
            'B. 馏分 4 只含有不饱和烯烃（alkenes），而馏分 1 只含有烷烃（alkanes）',
            'C. 馏分 4 的烃分子具有较高的碳质量百分比（higher percentage by mass of carbon），更容易发生不完全燃烧（incomplete combustion）',
            'D. 馏分 4 的挥发性（volatility）太高，导致氧气被迅速吹走'
          ],
          answerIndex: 2,
          hint: '黑烟的成分是未烧完的固体碳粒 C(s)！为什么同样在空气里烧，大分子更容易剩下一堆碳粒烧不完？',
          explanation: '沸程较高的馏分 4 含有碳原子数更多的大分子碳氢化合物，其碳质量百分比（percentage by mass of carbon）较高，完全燃烧需要更多氧气；在普通空气中供氧不足，发生不完全燃烧（incomplete combustion）生成碳粒（carbon particulates / soot）。',
          markingScheme: ['1M: Hydrocarbons in Fraction 4 have a higher percentage by mass of carbon and undergo incomplete combustion more readily to form carbon particulates (soot).'],
          commonMistake: '张冠李戴用“范德华力更强”去解释“火焰冒黑烟”（范德华力只解释沸点、挥发性和黏度；冒黑烟必须答 percentage by mass of carbon + incomplete combustion！）。'
        },
        {
          id: 'u25-s3-q3',
          level: 3,
          levelTag: 'Level 3 · HKDSE 英文实战',
          type: 'structured',
          stem: 'A student performed fractional distillation of petroleum in the school laboratory and collected Fraction X (boiling range: 50–100 °C) and Fraction Y (boiling range: 200–250 °C). (a) Compare the viscosity of Fraction X and Fraction Y, and explain the difference in terms of intermolecular forces. (b) Explain why Fraction X is easier to ignite than Fraction Y.',
          cueWords: [
            { phrase: 'Fraction X (boiling range: 50–100 °C)', zh: '低沸程轻馏分 X', concept: '分子较小，范德华力较弱' },
            { phrase: 'Fraction Y (boiling range: 200–250 °C)', zh: '高沸程重馏分 Y', concept: '分子较大，范德华力较强' },
            { phrase: 'Compare the viscosity', zh: '比较黏度并解释', concept: '先给高低结论，再答 molecular size ➔ van der Waals\' forces' },
            { phrase: 'easier to ignite', zh: '更容易点燃（易燃性）', concept: '连接 volatility（更易挥发成蒸气与氧气混合点燃）' }
          ],
          hint: '(a) 先明确指出谁更黏稠（Fraction Y is more viscous than Fraction X），再用分子大小与范德华力解释。(b) 液体要变成什么状态才能被点燃？谁更容易挥发？',
          explanation: '(a) 馏分 Y 的黏度高于馏分 X；因为馏分 Y 的烃分子比馏分 X 大，分子间的范德华力更强（且长链更易缠绕），流动阻力更大。(b) 馏分 X 分子较小、分子间范德华力较弱，挥发性更高（more volatile），室温下更容易蒸发形成易燃蒸气与空气混合，因此更易点燃。',
          markingScheme: [
            '1M: (a) Fraction Y has a higher viscosity than Fraction X (or Fraction X is less viscous than Fraction Y).',
            '1M: (a) Hydrocarbon molecules in Fraction Y are larger than those in Fraction X, so the van der Waals\' forces between molecules in Fraction Y are stronger.',
            '1M: (b) Fraction X has weaker van der Waals\' forces between smaller molecules and is more volatile (evaporates more readily to form vapour), making it easier to ignite.'
          ],
          commonMistake: '在 Compare 题型中漏写比较级（例如只写 "Fraction Y has large molecules and strong van der Waals\' forces"，没写 "larger than X" 和 "stronger than X"，DSE 阅卷严格要求比较词！）。'
        }
      ]
    },

    /* ----------------------------------------------------------------------
       25.6 – 25.8
       ---------------------------------------------------------------------- */
    {
      id: 'u25-s4',
      code: '25.6–25.8',
      titleEn: 'Combustion of fossil fuels, environmental problems & pollution control',
      titleZh: '化石燃料的燃烧、环境危机（温室效应与酸雨）及污染控制方程式',
      analogy: {
        icon: '🌿',
        title: '汽车排气管里的“双面净化魔术师”与发电厂烟囱的“碱性淋浴间”',
        body: `燃烧化石燃料给我们带来能量（放热反应 exothermic reaction），但也带来了两大全球级麻烦：二氧化碳（CO₂）像给地球多盖了几床厚棉被，引发全球暖化（global warming）；而汽车引擎高温把空气里的氮气和氧气硬凑成氮氧化物（NOₓ），加上发电厂烧含硫煤冒出的二氧化硫（SO₂），跑到云层里变成硝酸（HNO₃）和亚硫酸/硫酸（H₂SO₃ / H₂SO₄），下起腐蚀建筑与森林的酸雨（acid rain）！怎么治？人类给汽车排气管装上涂有铂/铑（Pt / Rh）催化剂的催化转化器（catalytic converter），让毒气 CO 和 NO 互相反应变成无毒的 CO₂ 和 N₂；再给发电厂烟囱装上喷洒石灰石浆液（CaCO₃）的洗涤器（scrubber），用酸碱反应把酸性的 SO₂ 当场拦截下来！`
      },
      coreExplanation: `
        <h4>1. 燃烧的放热本质与全球暖化（Global Warming / Enhanced Greenhouse Effect）</h4>
        <p>化石燃料的燃烧是显著的<span class="term">放热反应 <span class="en">exothermic reaction</span></span>。完全燃烧生成<span class="term">二氧化碳 <span class="en">carbon dioxide (CO₂)</span></span>和水，但过量排放 <code>CO₂</code>（以及畜牧/沼气排放的<span class="term">甲烷 <span class="en">methane (CH₄)</span></span>等温室气体）会吸收地表发出的红外辐射（infrared radiation），导致<strong><span class="term">加剧的温室效应 <span class="en">enhanced greenhouse effect</span></span></strong>与<strong><span class="term">全球暖化 <span class="en">global warming</span></span></strong>（极地冰川融化、海平面上升、极端气候频发）。</p>
        <div class="callout callout-warn">
          <strong>⚠️ 课本规范警示（DSE 必考区分：CO₂ 绝不是酸雨元凶！）：</strong>
          未受污染的正常雨水因为溶解了空气中的 <code>CO₂</code> 生成弱酸性的碳酸（<code>CO₂(g) + H₂O(l) ⇌ H₂CO₃(aq)</code>），本身就呈微酸性，<strong>正常雨水 <code>pH ≈ 5.6</code></strong>！只有当雨水溶解了强致酸污染物 <strong><span class="term">二氧化硫 <span class="en">SO₂</span></span></strong> 或 <strong><span class="term">二氧化氮 <span class="en">NO₂</span></span></strong> 使 <strong><code>pH &lt; 5.6</code></strong> 时，才称为<span class="term">酸雨 <span class="en">acid rain</span></span>！考试问酸雨成因写 <code>CO₂</code> 一律零分！
        </div>

        <h4>2. 燃烧化石燃料产生的五大空气污染物（5 Major Air Pollutants）全景表</h4>
        <table class="chem-table">
          <thead>
            <tr>
              <th>污染物（Pollutant）</th>
              <th>产生根源（Source &amp; Cause）</th>
              <th>主要健康与环境危害（Hazards）</th>
              <th>针对性控制措施（Control Measures）</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><span class="term">一氧化碳 <span class="en">Carbon monoxide (CO)</span></span></td>
              <td>汽车引擎内燃料供氧不足发生<strong><span class="term">不完全燃烧 <span class="en">incomplete combustion</span></span></strong></td>
              <td>无色无味剧毒气体，与血液血红蛋白结合阻碍输氧，引致头晕、昏迷甚至死亡</td>
              <td>安装<span class="term">催化转化器 <span class="en">catalytic converter</span></span>（转化为 <code>CO₂</code>）</td>
            </tr>
            <tr>
              <td><span class="term">未燃烧的碳氢化合物 <span class="en">Unburnt hydrocarbons (CₓHᵧ)</span></span></td>
              <td>汽油挥发及汽车引擎燃料未完全燃烧排出</td>
              <td>部分（如苯 benzene）<strong>致癌（carcinogenic）</strong>；在阳光下与 <code>NOₓ</code> 反应形成<strong><span class="term">光化学烟雾 <span class="en">photochemical smog</span></span></strong>刺激眼睛与肺部</td>
              <td>安装<span class="term">催化转化器 <span class="en">catalytic converter</span></span>（氧化为 <code>CO₂</code> 和 <code>H₂O</code>）</td>
            </tr>
            <tr>
              <td><span class="term">悬浮粒子 / 碳粒 <span class="en">Suspended particulates / Soot (C)</span></span></td>
              <td>柴油车及发电厂重油/煤不完全燃烧产生未燃碳粒</td>
              <td>刺激呼吸系统诱发哮喘与肺病、弄脏建筑物、降低空气能见度（low visibility）</td>
              <td>发电厂装<span class="term">静电除尘器 <span class="en">electrostatic precipitator</span></span>；柴油车装微粒收集器（particulate trap）或改用 LPG</td>
            </tr>
            <tr>
              <td><span class="term">二氧化硫 <span class="en">Sulphur dioxide (SO₂)</span></span></td>
              <td>发电厂/工厂燃烧含<strong>硫杂质（sulphur impurities）</strong>的煤或重燃料油：<code>S(s) + O₂(g) ⟶ SO₂(g)</code></td>
              <td>刺激眼睛及呼吸道；溶于雨水形成亚硫酸及硫酸，导致<strong><span class="term">酸雨 <span class="en">acid rain</span></span></strong>（腐蚀大理石建筑 <code>CaCO₃</code> 与铁桥、酸化湖泊毒害鱼类与森林）</td>
              <td>① 发电厂装<span class="term">烟气脱硫洗涤器 <span class="en">flue gas desulphurization / scrubber</span></span>；② 改用<strong>低硫燃料（low-sulphur fuels / ULSD）</strong></td>
            </tr>
            <tr>
              <td><span class="term">氮氧化物 <span class="en">Nitrogen oxides (NOₓ: NO, NO₂)</span></span></td>
              <td>汽车引擎或发电厂炉膛<strong>极高温（high temperature）</strong>下，<strong>空气中的 <code>N₂</code> 与 <code>O₂</code></strong> 直接化合！</td>
              <td>刺激呼吸系统；溶于雨水生成硝酸导致<strong><span class="term">酸雨 <span class="en">acid rain</span></span></strong>；与未燃烃在阳光下引发<strong><span class="term">光化学烟雾 <span class="en">photochemical smog</span></span></strong></td>
              <td>汽车安装<span class="term">催化转化器 <span class="en">catalytic converter</span></span>（将 <code>NO</code> 还原回无害的 <code>N₂</code>）</td>
            </tr>
          </tbody>
        </table>

        <h4>3. 两大核心治污装置细节剖析（DSE 高频实验与工业题）</h4>
        <ul class="chem-list">
          <li><strong>汽车<span class="term">催化转化器 <span class="en">catalytic converter</span></span>：</strong>内部采用蜂窝状陶瓷载体（honeycomb structure，最大化接触表面积），表面涂有贵金属催化剂<strong><span class="term">铂 <span class="en">platinum (Pt)</span></span>和<span class="term">铑 <span class="en">rhodium (Rh)</span></span></strong>。必须配合使用<strong><span class="term">无铅汽油 <span class="en">unleaded petrol</span></span></strong>，因为铅化合物会覆盖并毒化催化剂（poison the catalyst）使其失效！注意：催化转化器会把 <code>CO</code> 和 <code>CₓHᵧ</code> 变成 <code>CO₂</code>，因此<strong>不能减少温室气体 <code>CO₂</code> 排放</strong>，也<strong>不能除去 <code>SO₂</code></strong>。</li>
          <li><strong>发电厂<span class="term">烟气脱硫装置 / 洗涤器 <span class="en">flue gas desulphurization (FGD) / scrubber</span></span>：</strong>向烟道气喷洒碱性<strong>石灰石浆液 <span class="term">碳酸钙 <span class="en">CaCO₃(s)</span></span></strong> 或<strong>熟石灰 <span class="term">氢氧化钙 <span class="en">Ca(OH)₂(aq)</span></span></strong>，通过酸碱中和吸收高达 95% 的酸性气体 <code>SO₂</code>。</li>
          <li><strong>发电厂<span class="term">静电除尘器 <span class="en">electrostatic precipitator</span></span>：</strong>烟道中央高压负电极使烟尘微粒带上负电荷，随后被吸引到两侧带正电的金属收集板上震落收集，可除去高达 99% 的悬浮粒子（suspended particulates）。</li>
        </ul>
      `,
      textbookFormulas: [
        {
          label: '① 汽车引擎高温生成一氧化氮（NO）并进一步氧化为二氧化氮（NO₂）',
          equationHtml: `N<sub>2</sub>(g) + O<sub>2</sub>(g) <span class="chem-arrow"><span class="cond-top">high temperature</span><span class="arr-main">⟶</span><span class="cond-bot">(inside car engine)</span></span> 2NO(g) &nbsp;&nbsp;；&nbsp;&nbsp; 2NO(g) + O<sub>2</sub>(g) <span class="chem-arrow"><span class="cond-top"></span><span class="arr-main">⟶</span><span class="cond-bot"></span></span> 2NO<sub>2</sub>(g)`,
          note: '必答条件：high temperature（或 electric spark）！注意 N₂ 来自吸入的空气（air），而非汽油本身。'
        },
        {
          label: '② 酸雨（Acid Rain）形成的两条核心化学方程式',
          equationHtml: `SO<sub>2</sub>(g) + H<sub>2</sub>O(l) <span class="chem-arrow"><span class="cond-top"></span><span class="arr-main">⇌</span><span class="cond-bot"></span></span> H<sub>2</sub>SO<sub>3</sub>(aq) &nbsp;&nbsp;；&nbsp;&nbsp; 2NO<sub>2</sub>(g) + H<sub>2</sub>O(l) <span class="chem-arrow"><span class="cond-top"></span><span class="arr-main">⟶</span><span class="cond-bot"></span></span> HNO<sub>3</sub>(aq) + HNO<sub>2</sub>(aq)`,
          note: 'H₂SO₃（亚硫酸 sulphurous acid）在空气中可进一步被氧化为强酸 H₂SO₄；NO₂ 与水和氧气充分反应亦可写为：4NO₂(g) + 2H₂O(l) + O₂(g) ⟶ 4HNO₃(aq)。'
        },
        {
          label: '③ 催化转化器（Catalytic Converter）核心方程式（一箭双雕除 CO 与 NO）',
          equationHtml: `2CO(g) + 2NO(g) <span class="chem-arrow"><span class="cond-top">Pt / Rh catalyst</span><span class="arr-main">⟶</span><span class="cond-bot"></span></span> 2CO<sub>2</sub>(g) + N<sub>2</sub>(g)`,
          note: '精工版课本头号必背方程式！催化剂写 Pt (platinum) 或 Pt / Rh；将两种有毒气体转化为无毒的 CO₂ 和 N₂。'
        },
        {
          label: '④ 催化转化器氧化残余 CO 及未燃烧碳氢化合物（以辛烷 Octane 为例）',
          equationHtml: `2CO(g) + O<sub>2</sub>(g) <span class="chem-arrow"><span class="cond-top">Pt / Rh catalyst</span><span class="arr-main">⟶</span><span class="cond-bot"></span></span> 2CO<sub>2</sub>(g) &nbsp;&nbsp;；&nbsp;&nbsp; 2C<sub>8</sub>H<sub>18</sub>(g) + 25O<sub>2</sub>(g) <span class="chem-arrow"><span class="cond-top">Pt / Rh catalyst</span><span class="arr-main">⟶</span><span class="cond-bot"></span></span> 16CO<sub>2</sub>(g) + 18H<sub>2</sub>O(g)`,
          note: '过量空气存在下，剩余的一氧化碳和未燃烷烃蒸气被彻底催化氧化为二氧化碳与水蒸气。'
        },
        {
          label: '⑤ 发电厂洗涤器 / 烟气脱硫（Scrubber / Flue Gas Desulphurization）方程式',
          equationHtml: `CaCO<sub>3</sub>(s) + SO<sub>2</sub>(g) <span class="chem-arrow"><span class="cond-top"></span><span class="arr-main">⟶</span><span class="cond-bot"></span></span> CaSO<sub>3</sub>(s) + CO<sub>2</sub>(g) &nbsp;&nbsp;或&nbsp;&nbsp; Ca(OH)<sub>2</sub>(aq) + SO<sub>2</sub>(g) <span class="chem-arrow"><span class="cond-top"></span><span class="arr-main">⟶</span><span class="cond-bot"></span></span> CaSO<sub>3</sub>(s) + H<sub>2</sub>O(l)`,
          note: '生成的亚硫酸钙（calcium sulphite, CaSO₃）可进一步被空气氧化为石膏（calcium sulphate, CaSO₄）作建筑材料。'
        }
      ],
      examTrap: `三大高频陷阱：① 误以为汽车里的 NOₓ 来自汽油含氮杂质（错！来自引擎吸入空气中的 N₂ 和 O₂ 在高温下化合）；② 误以为安装催化转化器能缓解全球暖化（错！它生成更多 CO₂）；③ 催化转化器方程式漏配平系数 2（必须是 2CO + 2NO ⟶ 2CO₂ + N₂）！`,
      relations: [
        {
          type: 'buildsOn',
          targetUnitId: 'u25',
          label: '整合本单元 25.1–25.5：从化石燃料利用闭环到绿色环保治理',
          why: '理解煤含硫杂质（SO₂ 来源）与内燃机不完全燃烧（CO、碳粒来源），才能对症下药设计脱硫与催化转化工艺。'
        }
      ],
      questions: [
        {
          id: 'u25-s4-q1',
          level: 1,
          levelTag: 'Level 1 · 中文直觉破冰',
          type: 'mcq',
          stem: '下列哪一组空气污染物是导致酸雨（acid rain，雨水 pH < 5.6）的真正元凶？',
          cueWords: [],
          options: [
            'A. 二氧化碳（CO₂）与甲烷（CH₄）',
            'B. 一氧化碳（CO）与未燃烧的碳氢化合物（unburnt hydrocarbons）',
            'C. 二氧化硫（SO₂）与二氧化氮（NO₂）',
            'D. 氮气（N₂）与悬浮粒子（suspended particulates）'
          ],
          answerIndex: 2,
          hint: '避开第一大坑：CO₂ 和 CH₄ 引起的是全球暖化（global warming），谁溶于雨水会变成亚硫酸/硫酸和硝酸？',
          explanation: '二氧化硫（SO₂）与雨水反应生成亚硫酸（H₂SO₃，并进一步氧化为硫酸 H₂SO₄），二氧化氮（NO₂）与雨水反应生成硝酸（HNO₃）和亚硝酸（HNO₂），令雨水 pH 低于 5.6 形成酸雨（acid rain）。CO₂ 和 CH₄ 是温室气体（greenhouse gases），CO 则是中性剧毒气体。',
          markingScheme: ['1M: Sulphur dioxide (SO2) and nitrogen dioxide (NO2) dissolve in rainwater to form acids, causing acid rain.'],
          commonMistake: '看到 CO₂ 溶于水呈弱酸性就误选 CO₂（正常空气已有 CO₂，使洁净雨水 pH ≈ 5.6，不算酸雨！）。'
        },
        {
          id: 'u25-s4-q2',
          level: 2,
          levelTag: 'Level 2 · 中英过渡辨析',
          type: 'mcq',
          stem: '在私家车排气管安装催化转化器（catalytic converter, Pt / Rh catalyst）后，下列哪一项关于排出尾气的陈述是正确的（correct）？',
          cueWords: [
            { phrase: 'catalytic converter', zh: '催化转化器', concept: '内含 Pt / Rh 催化剂，将 CO、NO、CₓHᵧ 转化为 CO₂、N₂、H₂O' },
            { phrase: 'Pt / Rh catalyst', zh: '铂 / 铑催化剂', concept: '需使用无铅汽油（unleaded petrol）防止催化剂中毒' }
          ],
          options: [
            'A. 尾气中的一氧化碳（CO）、氮氧化物（NOₓ）和二氧化碳（CO₂）含量全部显著下降',
            'B. 尾气中的一氧化碳（CO）与一氧化氮（NO）反应转化为无毒的二氧化碳（CO₂）和氮气（N₂）',
            'C. 车主应改用含铅汽油（leaded petrol）以提高铂（Pt）催化剂的催化效率',
            'D. 催化转化器利用碳酸钙（CaCO₃）中和尾气中的二氧化硫（SO₂）'
          ],
          answerIndex: 1,
          hint: '默写核心方程式：2CO(g) + 2NO(g) ⟶ 2CO₂(g) + N₂(g)！看看 CO₂ 是减少还是增加了？含铅汽油对催化剂有什么影响？',
          explanation: '在铂/铑（Pt / Rh）催化下，2CO(g) + 2NO(g) ⟶ 2CO₂(g) + N₂(g)，同时未燃碳氢化合物也被氧化为 CO₂ 和 H₂O，因此 CO₂ 排放量不仅不会下降反而略增（A 错）；铅会毒化催化剂，必须使用无铅汽油 unleaded petrol（C 错）；用 CaCO₃ 除 SO₂ 是发电厂洗涤器 scrubber（D 错）。',
          markingScheme: ['1M: Carbon monoxide and nitrogen monoxide react on the Pt/Rh catalyst to form harmless carbon dioxide and nitrogen.'],
          commonMistake: '以为“环保装置就能减少所有气体包括 CO₂”（催化转化器治毒气与光化学烟雾/酸雨，不治全球暖化！）。'
        },
        {
          id: 'u25-s4-q3',
          level: 3,
          levelTag: 'Level 3 · HKDSE 英文实战',
          type: 'structured',
          stem: 'Both motor vehicles and coal-fired power stations emit air pollutants that lead to acid rain. (a) Explain, with the aid of chemical equations, how nitrogen dioxide is formed as a result of burning petrol in car engines even though petrol contains virtually no nitrogen. (b) Write a chemical equation to show how a catalytic converter removes carbon monoxide and nitrogen monoxide simultaneously. (c) Coal-fired power stations install scrubbers using calcium carbonate slurry to remove sulphur dioxide from flue gas. Write a chemical equation for the reaction involved.',
          cueWords: [
            { phrase: 'petrol contains virtually no nitrogen', zh: '汽油本身几乎不含氮', concept: '提示氮源来自空气中的 N₂ 与 O₂ 在引擎高温下化合' },
            { phrase: 'catalytic converter removes carbon monoxide and nitrogen monoxide', zh: '催化转化器同时除去 CO 与 NO', concept: '必写 2CO + 2NO ⟶ 2CO₂ + N₂' },
            { phrase: 'scrubbers using calcium carbonate slurry to remove sulphur dioxide', zh: '用碳酸钙浆液洗涤器除二氧化硫', concept: '必写 CaCO₃ + SO₂ ⟶ CaSO₃ + CO₂' }
          ],
          hint: '(a) 空气中的 N₂(g) 和 O₂(g) 在内燃机极高温下先生成什么？再被氧气氧化成什么？写出两条方程式！(b) 配平 2CO + 2NO！(c) CaCO₃ + SO₂ 生成亚硫酸钙 CaSO₃ 和什么气体？',
          explanation: '(a) 在汽车引擎内的极高温（high temperature）下，吸入空气中的氮气（N₂）和氧气（O₂）反应生成一氧化氮（NO），随后 NO 再与空气中的氧气反应生成二氧化氮（NO₂）。(b) 催化转化器使 CO 与 NO 反应生成 CO₂ 和 N₂。(c) 洗涤器中碳酸钙与二氧化硫反应生成亚硫酸钙和二氧化碳。',
          markingScheme: [
            '1M: (a) Inside the car engine at very high temperature, nitrogen and oxygen in the air combine to form nitrogen monoxide: N2(g) + O2(g) ⟶ 2NO(g)',
            '1M: (a) Nitrogen monoxide further reacts with oxygen in air to form nitrogen dioxide: 2NO(g) + O2(g) ⟶ 2NO2(g)',
            '1M: (b) 2CO(g) + 2NO(g) ⟶ 2CO2(g) + N2(g) (catalyst: Pt / Rh)',
            '1M: (c) CaCO3(s) + SO2(g) ⟶ CaSO3(s) + CO2(g)'
          ],
          commonMistake: '在 (c) 中把产物误写成硫酸钙 CaSO₄ 而没有氧气参与导致氧原子不守恒（CaCO₃ + SO₂ 直接反应的产物是亚硫酸钙 CaSO₃ + CO₂！）。'
        }
      ]
    }
  ],

  /* ------------------------------------------------------------------------
     UNIT 25 EXAM-STYLE LONG QUESTIONS
     ------------------------------------------------------------------------ */
  unitExamLongQuestions: [
    {
      id: 'u25-long-1',
      title: '长题实战 1：石油工业与实验室分馏及馏分性质全方位剖析（Industrial & Lab Fractional Distillation）',
      totalMarks: 7,
      scenarioEn: `Petroleum is a complex mixture of hydrocarbons formed from ancient marine organisms. In an oil refinery, petroleum is heated to about 400 °C and fed into a fractionating tower to obtain fractions including refinery gases, petrol, naphtha, kerosene and diesel oil. A student also carried out fractional distillation of petroleum in the school laboratory using mineral wool soaked with petroleum.`,
      scenarioZhSummary: `石油是由远古海洋生物形成的复杂碳氢化合物混合物（mixture of hydrocarbons）。炼油厂将石油加热至约 400 °C 送入分馏塔（fractionating tower），分离出炼油气（refinery gases）、汽油（petrol）、石脑油（naphtha）、煤油（kerosene）和柴油（diesel oil）等馏分；某同学亦在学校实验室用浸有石油的矿渣棉（mineral wool）进行了石油分馏实验。`,
      cueWords: [
        { phrase: 'complex mixture of hydrocarbons', zh: '复杂的碳氢化合物混合物', concept: '分馏是物理分离过程，各馏分仍是混合物' },
        { phrase: 'fractionating tower', zh: '工业分馏塔', concept: '下热上冷，按沸点（分子间范德华力）分层凝结' },
        { phrase: 'naphtha', zh: '石脑油', concept: '制造香港煤气（town gas）及石油化工原料（petrochemical feedstock）' },
        { phrase: 'mineral wool soaked with petroleum', zh: '浸有石油的矿渣棉', concept: '实验室吸住原油防止受热剧烈飞溅（prevent spitting）' }
      ],
      subQuestions: [
        {
          part: '(a)',
          marks: 2,
          promptEn: 'Explain why fractional distillation of petroleum is classified as a physical change, and explain why each fraction collected is still a mixture rather than a pure compound.',
          commandWord: { word: 'Explain', tip: '一题两问（2 分）：第 1 分答无新物质生成/仅克服分子间作用力；第 2 分答每个馏分包含沸点在相近范围内的多种碳氢化合物。' },
          hint: '物理变化的判据是有无断共价键/生成新物质；为什么一段温度范围（如 40–170 °C）接出来的液体不是单一化合物？',
          markingScheme: [
            '1M: No covalent bonds are broken / no new substances are formed (only intermolecular van der Waals\' forces are overcome during boiling and condensation).',
            '1M: Each fraction consists of different hydrocarbons that boil within a specific boiling point range rather than at a single fixed boiling point.'
          ],
          explanationZh: '分馏仅克服烃分子间的范德华力（van der Waals\' forces）实现气液相变，无新物质生成，故属物理变化；由于每个馏分收集的是一段沸点区间内的凝结液，里面仍含有多种沸点相近的碳氢化合物。'
        },
        {
          part: '(b)',
          marks: 2,
          promptEn: 'State ONE major use of naphtha in Hong Kong, and state ONE safety precaution (other than wearing safety glasses) when carrying out fractional distillation of petroleum in the school laboratory.',
          commandWord: { word: 'State', tip: '简明准确写出石脑油在香港的标志性用途，以及针对石油易燃/有毒蒸气的实验室安全措施。' },
          hint: '石脑油（naphtha）在香港既能造煤气又能做化工原料；实验安全可考虑通风橱（fume cupboard）或远离火源防燃！',
          markingScheme: [
            '1M: Manufacturing Hong Kong town gas / acting as a petrochemical feedstock for making plastics or alkenes.',
            '1M: Perform the experiment in a fume cupboard (as petroleum vapour is toxic) / keep flammable fractions away from naked flames / do not stopper the receiver test tube.'
          ],
          explanationZh: '石脑油（naphtha）在香港广泛用于制造煤气（manufacturing town gas）及作石化裂化原料；实验室分馏石油时须在通风橱（fume cupboard）内进行以防吸入有毒芳香烃蒸气，并严防馏分接触明火。'
        },
        {
          part: '(c)',
          marks: 3,
          promptEn: 'Compare kerosene and diesel oil in terms of (i) volatility, and (ii) sootiness of flame when burnt in air. Explain both differences briefly.',
          commandWord: { word: 'Compare ... and explain', tip: '3 分结构：① 挥发性比较 + 范德华力解释；② 黑烟程度比较 + 碳质量百分比与不完全燃烧解释。' },
          hint: '煤油 kerosene（C₁₀–C₁₄）分子比柴油 diesel oil（C₁₄–C₂₀）小！先比谁更易挥发（more volatile），再比谁烧起来更多黑烟（sootier flame）！',
          markingScheme: [
            '1M: Kerosene is more volatile than diesel oil because hydrocarbon molecules in kerosene are smaller and have weaker van der Waals\' forces between molecules.',
            '1M: Diesel oil burns with a sootier flame than kerosene.',
            '1M: Hydrocarbons in diesel oil have a higher percentage by mass of carbon, so they undergo incomplete combustion more readily in air to form carbon particulates (soot).'
          ],
          explanationZh: '煤油（kerosene）分子较柴油（diesel oil）小，分子间范德华力较弱，因此挥发性较高（more volatile）；而柴油分子的碳质量百分比（percentage by mass of carbon）较高，燃烧时更易发生不完全燃烧（incomplete combustion）产生碳粒，故火焰黑烟更浓。'
        }
      ]
    },
    {
      id: 'u25-long-2',
      title: '长题实战 2：机动车与燃煤发电厂污染物成因及治理全链路（Air Pollution & Control Equations）',
      totalMarks: 7,
      scenarioEn: `Exhaust gas from petrol-driven motor cars contains carbon monoxide, nitrogen oxides and unburnt hydrocarbons, which contribute to photochemical smog and acid rain. Meanwhile, flue gas from coal-fired power stations contains sulphur dioxide and suspended particulates. Modern vehicles and power stations install specific pollution control devices to reduce the emission of these air pollutants.`,
      scenarioZhSummary: `汽油私家车排出的尾气含有一氧化碳（carbon monoxide）、氮氧化物（nitrogen oxides）及未燃烧碳氢化合物（unburnt hydrocarbons），会引发光化学烟雾（photochemical smog）及酸雨（acid rain）；燃煤发电厂烟道气则含有二氧化硫（sulphur dioxide）和悬浮粒子（suspended particulates）。现代汽车与发电厂均安装了专用污染控制装置。`,
      cueWords: [
        { phrase: 'carbon monoxide, nitrogen oxides and unburnt hydrocarbons', zh: 'CO、NOₓ 与未燃烃', concept: '汽车尾气三大污染物，由催化转化器（catalytic converter）一网打尽' },
        { phrase: 'photochemical smog and acid rain', zh: '光化学烟雾与酸雨', concept: 'NOₓ + 未燃烃 + 阳光 ➔ 光化学烟雾；SO₂ / NO₂ + 雨水 ➔ 酸雨' },
        { phrase: 'sulphur dioxide and suspended particulates', zh: '二氧化硫与悬浮粒子', concept: '燃煤电厂两大污染物：分别用洗涤器（scrubber）和静电除尘器（electrostatic precipitator）去除' }
      ],
      subQuestions: [
        {
          part: '(a)',
          marks: 2,
          promptEn: 'Explain how carbon monoxide is formed in a car engine, and state why unleaded petrol must be used in cars fitted with a catalytic converter.',
          commandWord: { word: 'Explain / State', tip: '第 1 分答燃料不完全燃烧（incomplete combustion）；第 2 分答铅会毒化催化剂（lead poisons the Pt/Rh catalyst）。' },
          hint: '氧气不足时汽油燃烧生成什么？含铅汽油里的铅会对催化转化器里的铂（Pt）做什么坏事？',
          markingScheme: [
            '1M: Carbon monoxide is formed by the incomplete combustion of petrol (hydrocarbons) in a limited supply of air/oxygen inside the car engine.',
            '1M: Lead compounds in leaded petrol would coat / poison the platinum (or rhodium) catalyst and render the catalytic converter ineffective.'
          ],
          explanationZh: '引擎内氧气供应不足导致汽油发生不完全燃烧（incomplete combustion）产生 CO；含铅汽油中的铅化合物会毒化（poison）铂/铑催化剂使其丧失催化活性。'
        },
        {
          part: '(b)',
          marks: 2,
          promptEn: 'Write ONE chemical equation for the reaction between carbon monoxide and nitrogen monoxide in a catalytic converter, and explain whether a catalytic converter helps alleviate global warming.',
          commandWord: { word: 'Write ... and explain', tip: '先写配平化学方程式，再明确回答“No / 不能缓解全球暖化”并指出它生成温室气体 CO₂。' },
          hint: '2CO + 2NO 反应生成了什么？产物里的 CO₂ 对温室效应有什么作用？',
          markingScheme: [
            '1M: 2CO(g) + 2NO(g) ⟶ 2CO2(g) + N2(g)',
            '1M: No, because the catalytic converter converts carbon monoxide and unburnt hydrocarbons into carbon dioxide, which is a greenhouse gas that enhances global warming.'
          ],
          explanationZh: '催化转化器将 CO 和未燃碳氢化合物氧化成温室气体二氧化碳（CO₂），并不能减少反而略微增加 CO₂ 排放，因此无法缓解全球暖化（global warming）。'
        },
        {
          part: '(c)',
          marks: 3,
          promptEn: 'For a coal-fired power station, name ONE device used to remove suspended particulates, and explain with a chemical equation how slaked lime (calcium hydroxide) removes sulphur dioxide in a scrubber.',
          commandWord: { word: 'Name ... and explain with a chemical equation', tip: '3 分拆解：① 写出 electrostatic precipitator（1M）；② 点明酸碱中和吸收酸性 SO₂（1M）；③ 写出 Ca(OH)₂ + SO₂ 方程式（1M）。' },
          hint: '发电厂除烟尘颗粒用静电什么器？熟石灰 Ca(OH)₂ 是碱，SO₂ 是酸性氧化物，反应生成亚硫酸钙和水！',
          markingScheme: [
            '1M: Electrostatic precipitator',
            '1M: Alkaline calcium hydroxide neutralizes / reacts with acidic sulphur dioxide gas to form solid calcium sulphite.',
            '1M: Ca(OH)2(aq) + SO2(g) ⟶ CaSO3(s) + H2O(l)'
          ],
          explanationZh: '发电厂使用静电除尘器（electrostatic precipitator）去除悬浮粒子；在洗涤器（scrubber）中，碱性的氢氧化钙（Ca(OH)₂）与酸性的二氧化硫（SO₂）发生酸碱反应生成亚硫酸钙沉淀与水。'
        }
      ]
    }
  ]
});

/* ==========================================================================
   UNIT 26: HOMOLOGOUS SERIES, STRUCTURAL FORMULAE AND NAMING OF CARBON COMPOUNDS
   ========================================================================== */
window.CHEM_UNITS.push({
  id: 'u26',
  unitNum: 'Unit 26',
  book: 'Book 3A · Topic 7',
  topicId: 'topic7',
  titleEn: 'Homologous series, structural formulae and naming of carbon compounds',
  titleZh: '同系物、结构式及碳化合物的命名',
  colorTheme: 'teal',
  summary: `揭开碳元素构筑数千万种有机化合物的底层密码：从碳原子的四价共价键（tetravalency）与自相结合成链能力（catenation），掌握四大化学式（分子式 molecular、结构式 structural、简明结构式 condensed structural、骨架式 skeletal）及最外层电子图（electron diagrams）规范，认识官能团（functional groups）与同系物（homologous series）的四大黄金特征，精通系统命名法（systematic IUPAC naming）与烷烃物理性质（沸点、支链效应、溶解度与密度）。`,
  keyTerms: [
    { en: 'catenation', zh: '碳自相结合成链能力', cat: 'Bonding Concept' },
    { en: 'saturated hydrocarbon', zh: '饱和碳氢化合物', cat: 'Compound Class' },
    { en: 'unsaturated hydrocarbon', zh: '不饱和碳氢化合物', cat: 'Compound Class' },
    { en: 'molecular formula', zh: '分子式', cat: 'Representation' },
    { en: 'structural formula', zh: '结构式', cat: 'Representation' },
    { en: 'condensed structural formula', zh: '简明结构式', cat: 'Representation' },
    { en: 'skeletal formula', zh: '骨架式', cat: 'Representation' },
    { en: 'functional group', zh: '官能团', cat: 'Core Concept' },
    { en: 'homologous series', zh: '同系物（同系列）', cat: 'Core Concept' },
    { en: 'general formula', zh: '通式', cat: 'Core Concept' },
    { en: 'alkyl group', zh: '烷基', cat: 'Substituent' },
    { en: 'haloalkane', zh: '卤代烷', cat: 'Compound Class' },
    { en: 'alkanol (alcohol)', zh: '烷醇（醇）', cat: 'Compound Class' },
    { en: 'alkanoic acid (carboxylic acid)', zh: '烷酸（羧酸）', cat: 'Compound Class' },
    { en: 'hydroxyl group', zh: '羟基 (—OH)', cat: 'Functional Group' },
    { en: 'carboxyl group', zh: '羧基 (—COOH)', cat: 'Functional Group' },
    { en: 'systematic IUPAC naming', zh: '系统命名法', cat: 'Nomenclature' }
  ],
  sections: [
    /* ----------------------------------------------------------------------
       26.1 – 26.4
       ---------------------------------------------------------------------- */
    {
      id: 'u26-s1',
      code: '26.1–26.4',
      titleEn: 'Unique bonding of carbon, formula representations & electron diagrams',
      titleZh: '碳的独特成键能力、四大化学式写法与最外层电子图规范',
      analogy: {
        icon: '🧩',
        title: '碳原子是拥有“四个强力万能扣”的乐高积木之王！',
        body: `元素周期表有一百多种元素，为什么偏偏只有碳（carbon）能单独撑起庞大的“有机化学”世界？因为碳原子的电子排布是 2,4——最外层刚好有 4 个电子，总是伸出 4 只手形成四价共价键（tetravalency）！更绝的是，碳与碳牵手形成的 C—C 共价键异常牢固，既能排成一字长蛇的直链（straight-chain），也能分出树杈般的支链（branched-chain），还能首尾相接围成环状（cyclic），甚至两只手、三只手拉在一起形成双键（C=C）和三键（C≡C）！为了在试卷上快速又准确地画出这些千变万化的“乐高模型”，化学家发明了分子式（molecular formula）、结构式（structural formula）、简明结构式（condensed structural formula）和骨架式（skeletal formula）四种表达语言。`
      },
      coreExplanation: `
        <h4>1. 为什么碳能形成数以千万计的化合物？（Unique Bonding Ability of Carbon）</h4>
        <ul class="chem-list">
          <li><strong>① <span class="term">四价共价键 <span class="en">Tetravalency</span></span>：</strong>碳原子电子排布为 <code>2,4</code>，拥有 4 个最外层电子（outermost shell electrons），在所有稳定有机分子中<strong>每个碳原子必定形成 4 个共价键（4 covalent bonds）</strong>以达致八隅体稳定结构（octet structure）。</li>
          <li><strong>② 强固的共价键与<span class="term">自相结合成链能力 <span class="en">Catenation</span></span>：</strong><code>C—C</code> 键及 <code>C—H</code> 键非常强固，碳原子可近乎无限地互相连接成<strong><span class="term">直链 <span class="en">straight chains</span></span></strong>、<strong><span class="term">支链 <span class="en">branched chains</span></span></strong>及<strong><span class="term">环状结构 <span class="en">rings / cyclic structures</span></span></strong>。</li>
          <li><strong>③ 多重共价键与杂原子成键：</strong>碳原子之间既可形成<strong><span class="term">碳碳单键 <span class="en">C—C single bond</span></span></strong>（全为单键者称为<span class="term">饱和碳氢化合物 <span class="en">saturated hydrocarbons</span></span>），也可形成<strong><span class="term">碳碳双键 <span class="en">C=C double bond</span></span></strong>或<strong><span class="term">碳碳三键 <span class="en">C≡C triple bond</span></span></strong>（含碳碳重键者称为<span class="term">不饱和碳氢化合物 <span class="en">unsaturated hydrocarbons</span></span>），还能与 <code>H, O, N, Cl, Br, I</code> 等紧密结合。</li>
        </ul>

        <div class="struct-card">
          <pre class="struct-pre">  Straight-chain 直链        Branched-chain 支链        Cyclic 环状           Multiple bonds 多重键
                                     │                     C                   ╲       ╱
   —C—C—C—C—                   —C—C—C—                  ╱   ╲                  C ═══ C   (C=C 双键)
                                  │                     C ─── C                ╱       ╲
                                  C                                           —C ≡≡≡ C—  (C≡C 三键)</pre>
          <div class="struct-cap">检查有机结构式的铁律：数一数每个 C 周围是不是刚好有 4 根键线（H 与卤素 1 根，O 2 根，N 3 根）！</div>
        </div>

        <h4>2. 精工版课本四大化学式写法全对比（Four Types of Chemical Formulae）</h4>
        <table class="chem-table">
          <thead>
            <tr>
              <th>化学式类别（Formula Type）</th>
              <th>表达规则与核心特征</th>
              <th>以 2-甲基-1-丙醇（2-methylpropan-1-ol）为例</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><span class="term">分子式 <span class="en">Molecular formula</span></span></td>
              <td>仅标明一个分子中每种原子的<strong>真实总数</strong>，无法显示连接方式，<strong>不能区分同分异构体（isomers）</strong>！（注：最简整数比则称<span class="term">实验式 <span class="en">empirical formula</span></span>）</td>
              <td><code>C₄H₁₀O</code></td>
            </tr>
            <tr>
              <td><span class="term">结构式 <span class="en">Structural formula</span></span></td>
              <td>用短横线清晰画出分子内各原子间的共价键连接方式（单键 <code>—</code>、双键 <code>=</code>、三键 <code>≡</code>）</td>
              <td>展开画出全部 <code>C—C</code>、<code>C—H</code>、<code>C—O</code>、<code>O—H</code> 键</td>
            </tr>
            <tr>
              <td><span class="term">简明结构式 <span class="en">Condensed structural formula</span></span></td>
              <td>省略碳氢单键与碳碳单键横竖线（常保留 <code>C=C</code> 双键以利辨认）；<strong>连在中间碳上的支链或取代基必须写在圆括号 <code>()</code> 内</strong>，而连续重复的直链亚甲基可用 <code>(CH₂)ₙ</code> 表示</td>
              <td><code>CH₃CH(CH₃)CH₂OH</code> 或 <code>(CH₃)₂CHCH₂OH</code><br>（直链 1-丁醇则可写 <code>CH₃(CH₂)₃OH</code>）</td>
            </tr>
            <tr>
              <td><span class="term">骨架式 <span class="en">Skeletal formula</span></span></td>
              <td>用折线表示碳链骨架：<strong>省略所有碳符号 <code>C</code> 以及直接连在碳上的 <code>H</code> 原子</strong>（每个端点和拐角代表一个碳原子）；但<strong>杂原子（<code>O, N, Cl, Br</code>）及连在官能团杂原子上的氢（如 <code>—OH</code>、<code>—COOH</code>、<code>—NH₂</code>）必须明确写出！</strong></td>
              <td>折线主链带分支，末端明确标出 <code>—OH</code>（绝不可漏写 <code>O</code> 上的 <code>H</code>！）</td>
            </tr>
          </tbody>
        </table>

        <h4>3. 绘制电子图（Electron Diagrams）的三条考评局铁律</h4>
        <div class="callout callout-warn">
          <strong>⚠️ 精工版《Mastering Chemistry》电子图标准规范（一步踏错全题零分）：</strong><br>
          ① <strong>只画最外层电子（Show outermost shells ONLY）</strong>：绝对禁止画出碳原子的内层 2 个电子圈（1s²）！<br>
          ② <strong>重叠电子层圆圈 + 点叉区分（Overlapping circles &amp; dot-and-cross）</strong>：相邻成键原子的最外层圆圈必须相交，在重叠区内成对画出 <code>•</code> 和 <code>×</code>（单键 1 对 = 2e⁻，<code>C=C</code> 双键 2 对 = 4e⁻）。<br>
          ③ <strong>切勿遗漏孤偶电子对（Lone pairs）</strong>：若分子中含氧原子（如甲醇 <code>CH₃OH</code>，最外层 6e⁻ 形成 2 个键后还剩 <strong>2 对孤偶电子</strong>）或卤素原子（如氯甲烷 <code>CH₃Cl</code>，氯最外层 7e⁻ 形成 1 个键后还剩 <strong>3 对即 6 粒孤偶电子</strong>），必须如实画在非重叠圆弧上！
        </div>
      `,
      svgId: 'svg-formula-representations',
      svgCaption: '四大化学式写法直观对比：注意简明结构式的括号规则与骨架式末端必须保留官能团上的氢原子（如 —OH）。',
      textbookFormulas: [
        {
          label: '简明结构式（Condensed Structural Formula）中圆括号的两种含义对比',
          equationHtml: `CH<sub>3</sub>(CH<sub>2</sub>)<sub>2</sub>CH<sub>3</sub> &nbsp;＝&nbsp; CH<sub>3</sub>—CH<sub>2</sub>—CH<sub>2</sub>—CH<sub>3</sub> &nbsp;（直链重复） &nbsp;&nbsp;｜&nbsp;&nbsp; CH<sub>3</sub>CH(CH<sub>3</sub>)CH<sub>3</sub> &nbsp;＝&nbsp; 2号碳上挂甲基支链！`,
          note: '(CH₂)ₙ 表示主链内部连续重复 n 个 —CH₂— 单元；而 (CH₃)、(Cl)、(OH) 紧跟在 CH 后面则代表挂在该碳原子侧面的支链或官能团！'
        }
      ],
      examTrap: `画骨架式（skeletal formula）时的头号失分重灾区：① 把乙醇画成两段折线再加 —OH，不小心多数了连接 —OH 那一段的端点碳，把 2 个碳画成了 3 个碳！（记住：连接 —OH 的那条线一端是 C，另一端已经是 O，不是 C！）；② 把 —OH 简写成 —O 漏掉了氢原子！`,
      relations: [
        {
          type: 'leadsTo',
          targetUnitId: 'u26',
          label: '直通本单元 26.5 & 26.7：识别官能团与系统命名法',
          why: '看懂简明结构式里的括号支链和骨架式里的拐角碳数，是后续零失误写出 IUPAC 名称的基本功。'
        },
        {
          type: 'leadsTo',
          targetUnitId: 'u30',
          label: '铺垫 Topic 8 Unit 30：同分异构体（Isomerism）',
          why: '分子式相同（如 C₄H₁₀O）却能画出多种不同结构式与骨架式，正是结构异构与立体异构的起点。'
        }
      ],
      questions: [
        {
          id: 'u26-s1-q1',
          level: 1,
          levelTag: 'Level 1 · 中文直觉破冰',
          type: 'mcq',
          stem: '简明结构式（condensed structural formula）为 (CH₃)₂CHCH₂Cl 的卤代烷分子中，一共含有多少个碳原子（carbon atoms）和多少个氢原子（hydrogen atoms）？',
          cueWords: [],
          options: [
            'A. 3 个碳原子、7 个氢原子（分子式 C₃H₇Cl）',
            'B. 4 个碳原子、9 个氢原子（分子式 C₄H₉Cl）',
            'C. 4 个碳原子、8 个氢原子（分子式 C₄H₈Cl）',
            'D. 5 个碳原子、11 个氢原子（分子式 C₅H₁₁Cl）'
          ],
          answerIndex: 1,
          hint: '注意最左边的 (CH₃)₂ 表示有两个甲基连在同一个 CH 碳原子上！把每一部分的 C 和 H 拆开加起来数清楚！',
          explanation: '(CH₃)₂ 贡献 2 个 C 和 6 个 H，中间的 CH 贡献 1 个 C 和 1 个 H，右边的 CH₂Cl 贡献 1 个 C、2 个 H 和 1 个 Cl，总计 4 个 C、9 个 H、1 个 Cl，分子式（molecular formula）为 C₄H₉Cl。',
          markingScheme: ['1M: (CH3)2CHCH2Cl has 4 carbon atoms and 9 hydrogen atoms, giving the molecular formula C4H9Cl.'],
          commonMistake: '漏看括号外的下标 2，把 (CH₃)₂ 只当成 1 个碳来数！'
        },
        {
          id: 'u26-s1-q2',
          level: 2,
          levelTag: 'Level 2 · 中英过渡辨析',
          type: 'mcq',
          stem: '按照精工版课本规范绘制氯甲烷（chloromethane, CH₃Cl）的电子图（electron diagram, showing outermost shells only）时，下列哪一项描述是完全正确的？',
          cueWords: [
            { phrase: 'chloromethane, CH₃Cl', zh: '氯甲烷', concept: 'C 最外层 4e⁻，H 最外层 1e⁻，Cl 最外层 7e⁻' },
            { phrase: 'electron diagram, showing outermost shells only', zh: '只画最外层电子的电子图', concept: '重叠圆圈 + 点叉成键 + Cl 上 3 对孤偶电子' }
          ],
          options: [
            'A. 碳原子应画出两个同心圆圈，内圈画 2 个电子，外圈画 4 个电子',
            'B. 碳原子与氯原子的重叠区域内画 2 对共用电子（共 4 粒电子）',
            'C. 氯原子的最外层圆圈上，除了与碳共用的 1 对电子外，还必须画出 6 粒未共用的孤偶电子（3 lone pairs）',
            'D. 每个氢原子的圆圈上除了共用电子对外，还需额外画 6 粒电子以凑足 8 电子结构'
          ],
          answerIndex: 2,
          hint: '氯（Cl，第 VII 族）最外层有 7 粒电子，拿 1 粒跟碳配成 C—Cl 单键后，自己身上还剩几粒孤偶电子？',
          explanation: '氯原子（Cl）最外层有 7 粒电子，与碳原子共用 1 对电子形成 C—Cl 单键后，剩余 6 粒电子（3 lone pairs）必须成对画在氯原子的最外层圆圈上。A 错：严禁画内层电子圈；B 错：C—Cl 是单键（1 对共用电子）；D 错：氢达致 2 电子稳定结构（duplet），无孤偶电子。',
          markingScheme: ['1M: The chlorine atom in CH3Cl has 1 shared pair of electrons with carbon and 3 lone pairs (6 non-bonding electrons) in its outermost shell.'],
          commonMistake: '画含卤素（Cl, Br）或含氧（O）的有机分子电子图时，只画中间的共用电子对，忘光了 Cl 的 6 粒孤偶电子或 O 的 4 粒孤偶电子，直接拿 0 分！'
        },
        {
          id: 'u26-s1-q3',
          level: 3,
          levelTag: 'Level 3 · HKDSE 英文实战',
          type: 'structured',
          stem: 'Carbon is unique among elements in its ability to form millions of different carbon compounds. (a) Give TWO bonding features of carbon atoms that account for this huge variety of carbon compounds. (b) Compound P has the condensed structural formula CH₃CH=CHCH₂OH. Write the molecular formula of P, and state whether P is saturated or unsaturated with a brief reason.',
          cueWords: [
            { phrase: 'TWO bonding features of carbon atoms', zh: '碳原子的两大成键特征', concept: '答 catenation（成直链/支链/环）+ multiple bonds（单/双/三键）或 tetravalency' },
            { phrase: 'condensed structural formula CH₃CH=CHCH₂OH', zh: '简明结构式 CH₃CH=CHCH₂OH', concept: '逐原子统计得分子式，并留意中间的 C=C 双键' },
            { phrase: 'saturated or unsaturated', zh: '饱和还是不饱和', concept: '含有 C=C 碳碳双键即为不饱和化合物（unsaturated）' }
          ],
          hint: '(a) 第一点答碳原子能互相形成强共价键连成长直链、支链和环；第二点答碳原子之间能形成单键、双键和三键！(b) 小心别漏数最右边 —OH 里的那 1 个氢原子！',
          explanation: '(a) 碳原子具有极强的自相结合能力（catenation），能通过强 C—C 共价键连成不同长度的直链、支链和环；同时碳原子能形成四价共价键及碳碳单键、双键和三键。(b) 统计 CH₃CH=CHCH₂OH 得 4 个 C、8 个 H（3+1+1+2+1=8）和 1 个 O，分子式为 C₄H₈O；因分子含有碳碳双键（C=C double bond），属于不饱和化合物（unsaturated）。',
          markingScheme: [
            '1M: (a) Carbon atoms can form strong covalent bonds with one another to form straight chains, branched chains and rings (catenation).',
            '1M: (a) Each carbon atom forms four covalent bonds and can form carbon-carbon single, double and triple bonds (as well as bonds with other elements like H, O, N, halogens).',
            '1M: (b) Molecular formula: C4H8O; P is unsaturated because it contains a carbon-carbon double bond (C=C).'
          ],
          commonMistake: '数 CH₃CH=CHCH₂OH 的氢原子数时漏掉末尾羟基（—OH）上的 H，误写成 C₄H₇O！'
        }
      ]
    },

    /* ----------------------------------------------------------------------
       26.5 – 26.6
       ---------------------------------------------------------------------- */
    {
      id: 'u26-s2',
      code: '26.5–26.6',
      titleEn: 'Functional groups & characteristics of a homologous series',
      titleZh: '官能团（Functional Groups）与同系物（Homologous Series）四大特征',
      analogy: {
        icon: '🧬',
        title: '有机大家族的“家族徽章”与“每长一岁重 14.0 的亲兄弟”',
        body: `面对几千万种有机化合物，要是逐个死记硬背化学性质，神仙也背不完！幸好化学家发现：有机分子的化学脾气几乎全由它身上挂着的那个特殊小基团——官能团（functional group）决定！凡是挂着同一枚“官能团徽章”、能套进同一个通式（general formula）的一整排化合物，就组成一个同系物家族（homologous series）。同一个家族里相邻的两兄弟，就像身高只差一节积木（相差一个 —CH₂— 亚甲基单元，相对分子质量精确相差 14.0）：它们的化学脾气高度相似（similar chemical properties），而沸点、黏度等物理性质则像爬楼梯一样随分子量增大而稳步递增（gradual change in physical properties）！`
      },
      coreExplanation: `
        <h4>1. 官能团（Functional Group）与 Topic 7 五大同系物（Homologous Series）总表</h4>
        <p><span class="term">官能团 <span class="en">functional group</span></span>是决定碳化合物大部分化学性质的特定原子、原子团或多重键；拥有相同官能团及相同<span class="term">通式 <span class="en">general formula</span></span>的一系列碳化合物称为一个<span class="term">同系物 / 同系列 <span class="en">homologous series</span></span>。Topic 7 率先引入以下五大基础同系物：</p>
        <table class="chem-table">
          <thead>
            <tr>
              <th>同系物名称（中英对照）</th>
              <th>通式（General Formula）</th>
              <th>官能团（Functional Group）</th>
              <th>首两个代表成员（First Examples）</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><span class="term">烷烃 <span class="en">Alkanes</span></span></td>
              <td><code>CₙH₂ₙ₊₂</code>（<i>n</i> ≥ 1）</td>
              <td>无特殊官能团（仅含 <code>C—C</code> 及 <code>C—H</code> 单键）</td>
              <td>甲烷 <code>CH₄</code> (methane)<br>乙烷 <code>CH₃CH₃</code> (ethane)</td>
            </tr>
            <tr>
              <td><span class="term">烯烃 <span class="en">Alkenes</span></span>（单双键链状）</td>
              <td><code>CₙH₂ₙ</code>（<strong><i>n</i> ≥ 2</strong>，无 <i>n</i> = 1 成员！）</td>
              <td><span class="term">碳碳双键 <span class="en">carbon-carbon double bond</span></span> (<code>C=C</code>)</td>
              <td>乙烯 <code>CH₂=CH₂</code> (ethene)<br>丙烯 <code>CH₃CH=CH₂</code> (propene)</td>
            </tr>
            <tr>
              <td><span class="term">卤代烷 <span class="en">Haloalkanes</span></span>（一卤代）</td>
              <td><code>CₙH₂ₙ₊₁X</code>（<code>X = F, Cl, Br, I</code>，<i>n</i> ≥ 1）</td>
              <td><span class="term">卤素原子 <span class="en">halo group</span></span> (<code>—F, —Cl, —Br, —I</code>)</td>
              <td>氯甲烷 <code>CH₃Cl</code> (chloromethane)<br>溴乙烷 <code>CH₃CH₂Br</code> (bromoethane)</td>
            </tr>
            <tr>
              <td><span class="term">烷醇 / 醇 <span class="en">Alkanols / Alcohols</span></span></td>
              <td><code>CₙH₂ₙ₊₁OH</code>（<i>n</i> ≥ 1）</td>
              <td><span class="term">羟基 <span class="en">hydroxyl group</span></span> (<code>—OH</code>)</td>
              <td>甲醇 <code>CH₃OH</code> (methanol)<br>乙醇 <code>CH₃CH₂OH</code> (ethanol)</td>
            </tr>
            <tr>
              <td><span class="term">烷酸 / 羧酸 <span class="en">Alkanoic acids / Carboxylic acids</span></span></td>
              <td><code>CₙH₂ₙ₊₁COOH</code>（<strong><i>n</i> ≥ 0</strong>！或写 <code>CₘH₂ₘO₂</code>，<i>m</i> ≥ 1）</td>
              <td><span class="term">羧基 <span class="en">carboxyl group</span></span> (<code>—COOH</code>)</td>
              <td>甲酸 <code>HCOOH</code> (methanoic acid, <i>n</i> = 0)<br>乙酸 <code>CH₃COOH</code> (ethanoic acid, <i>n</i> = 1)</td>
            </tr>
          </tbody>
        </table>

        <h4>2. 同系物的四大黄金特征（Four Characteristics of a Homologous Series — DSE 原文背诵级）</h4>
        <ul class="chem-list">
          <li><strong>① 具有相同的<span class="term">通式 <span class="en">same general formula</span></span>：</strong>例如所有链状烷烃均符合 <code>CₙH₂ₙ₊₂</code>，所有烷醇均符合 <code>CₙH₂ₙ₊₁OH</code>。</li>
          <li><strong>② 相邻成员相差一个 <code>—CH₂—</code> 结构单元（differ by a <code>—CH₂—</code> unit）：</strong>即相邻两个成员的相对分子质量（relative molecular mass）恒定相差 <strong><code>12.0 + 2 × 1.0 = 14.0</code></strong>。</li>
          <li><strong>③ 具有相似的化学性质（similar chemical properties）：</strong>因为同一同系物的成员拥有完全相同的<span class="term">官能团 <span class="en">functional group</span></span>（注意写 <em>similar</em> 而非 <em>identical</em>，反应剧烈程度会随碳链增长略微放缓）。</li>
          <li><strong>④ 物理性质呈现规律性递变（gradual change in physical properties）：</strong>随着碳原子数及相对分子质量增加，分子间<span class="term">范德华力 <span class="en">van der Waals' forces</span></span>依次增强，沸点、熔点、密度及黏度有规律地递增。</li>
        </ul>

        <div class="callout callout-tip">
          <strong>💡 三大必考概念避坑指南：</strong><br>
          1. <strong>烷醇的 <code>—OH</code> 叫 <span class="term">羟基 <span class="en">hydroxyl group</span></span>（共价基团）</strong>，绝不能叫氢氧根离子（hydroxide ion, <code>OH⁻</code>）！乙醇水溶液是中性的（<code>pH = 7</code>），不会使石蕊试纸变蓝！<br>
          2. <strong>分子式符合 <code>CₙH₂ₙ</code> 不一定是烯烃（alkene）</strong>，也有可能是饱和的<span class="term">环烷烃 <span class="en">cycloalkane</span></span>（如 <code>C₆H₁₂</code> 可以是己烯 hexene 或环己烷 cyclohexane）！<br>
          3. <strong>同系物成员不一定具有相同的实验式（empirical formula）</strong>：例如乙烯 <code>C₂H₄</code> 与丙烯 <code>C₃H₆</code> 实验式同为 <code>CH₂</code>，但甲烷 <code>CH₄</code>、乙烷 <code>C₂H₆</code>（实验式 <code>CH₃</code>）、丙烷 <code>C₃H₈</code> 的实验式彼此各不相同！
        </div>
      `,
      svgId: 'svg-electron-diagrams-alkanes-alkenes',
      svgCaption: '烷烃代表甲烷（CH₄，全为单键）与烯烃代表乙烯（C₂H₄，含 C=C 双键官能团共用 2 对电子）的标准最外层电子图对比。',
      textbookFormulas: [
        {
          label: '同系物相邻成员递增规律（以烷醇 Alkanols 同系物为例）',
          equationHtml: `CH<sub>3</sub>OH (<i>M</i><sub>r</sub> = 32.0) <span class="chem-arrow"><span class="cond-top">+ CH<sub>2</sub></span><span class="arr-main">⟶</span><span class="cond-bot">+ 14.0</span></span> CH<sub>3</sub>CH<sub>2</sub>OH (<i>M</i><sub>r</sub> = 46.0) <span class="chem-arrow"><span class="cond-top">+ CH<sub>2</sub></span><span class="arr-main">⟶</span><span class="cond-bot">+ 14.0</span></span> CH<sub>3</sub>CH<sub>2</sub>CH<sub>2</sub>OH (<i>M</i><sub>r</sub> = 60.0)`,
          note: '每增加一个 —CH₂— 单元，官能团羟基（hydroxyl group, —OH）保持不变，化学性质相似，沸点则依次升高（65 °C ➔ 78 °C ➔ 97 °C）。'
        }
      ],
      examTrap: `写烷酸（alkanoic acids）通式 CₙH₂ₙ₊₁COOH 时，最容易忘记最小成员甲酸（methanoic acid, HCOOH）对应的 n = 0（此时 —COOH 本身已占去那唯一的 1 个碳原子）！若题目问含 3 个碳的丙酸（propanoic acid），代入 CₙH₂ₙ₊₁COOH 时 n = 2，即 C₂H₅COOH！`,
      relations: [
        {
          type: 'buildsOn',
          targetUnitId: 'u26',
          label: '承接 26.1–26.4：结构式识别与共价键电子对',
          why: '准确圈出 C=C、—OH、—COOH 官能团结构，是把陌生分子归入对应同系物的前提。'
        },
        {
          type: 'leadsTo',
          targetUnitId: 'u29',
          label: '直通 Topic 8 Unit 29：扩展至八大含氧/含氮同系物',
          why: 'Topic 7 先打牢这 5 类同系物，进入 Topic 8 只需顺势加上醛（aldehyde）、酮（ketone）、酯（ester）、酰胺（amide）和胺（amine）！'
        }
      ],
      questions: [
        {
          id: 'u26-s2-q1',
          level: 1,
          levelTag: 'Level 1 · 中文直觉破冰',
          type: 'mcq',
          stem: '化合物 CH₃CH₂COOH（丙酸 propanoic acid）所属的同系物（homologous series）名称，以及决定其化学性质的官能团（functional group）英文名称分别是？',
          cueWords: [],
          options: [
            'A. 烷醇（Alkanol）；羟基（hydroxyl group）',
            'B. 烷酸（Alkanoic acid）；羧基（carboxyl group）',
            'C. 烷酸（Alkanoic acid）；羟基（hydroxyl group）',
            'D. 烯烃（Alkene）；羰基（carbonyl group）'
          ],
          answerIndex: 1,
          hint: '看清楚末尾是整个 —COOH 基团（C=O 连着 —OH 合二为一），它的英文名叫 carboxyl group，千万别拆成单独的 hydroxyl group！',
          explanation: 'CH₃CH₂COOH 含有整个羧基（carboxyl group, —COOH），属于烷酸 / 羧酸（alkanoic acid / carboxylic acid）同系物。虽然 —COOH 内部看似带有 —OH，但在有机化学中整个 —COOH 作为一个不可分割的羧基官能团来识别！',
          markingScheme: ['1M: CH3CH2COOH belongs to alkanoic acids (carboxylic acids) and contains the carboxyl group (-COOH).'],
          commonMistake: '看到 —COOH 尾巴有 OH 就误答它含有醇的 hydroxyl group（在单官能团羧酸里，必须答 carboxyl group！）。'
        },
        {
          id: 'u26-s2-q2',
          level: 2,
          levelTag: 'Level 2 · 中英过渡辨析',
          type: 'mcq',
          stem: '下列关于同一个同系物（homologous series）中各个成员的陈述，哪一项是必定正确的（MUST be correct）？',
          cueWords: [
            { phrase: 'homologous series', zh: '同系物', concept: '严格核查四大特征与实验式/物理性质辨析' }
          ],
          options: [
            'A. 它们具有完全相同的实验式（same empirical formula）',
            'B. 它们具有完全相同的物理性质（identical physical properties）',
            'C. 相邻两个成员的相对分子质量（relative molecular mass）相差 14.0',
            'D. 它们在室温常压下全部处于相同的物态（全是气体或全是液体）'
          ],
          answerIndex: 2,
          hint: '用烷烃 CH₄（气）、C₂H₆（气）……C₆H₁₄（液）……C₂₀H₄₂（固）来逐一检验四个选项！',
          explanation: '同一同系物相邻成员相差一个 —CH₂— 单元，因此相对分子质量相差 12.0 + 2(1.0) = 14.0（C 正确）。A 错：甲烷 CH₄ 与乙烷 CH₃ 实验式不同；B、D 错：物理性质随碳数增加而规律递变（例如烷烃由气体变为液体再变为蜡状固体）。',
          markingScheme: ['1M: Successive members of a homologous series differ by a -CH2- unit, i.e. by 14.0 in relative molecular mass.'],
          commonMistake: '受烯烃（全是 CH₂ 实验式）误导，误以为“所有同系物的成员都有相同实验式”！'
        },
        {
          id: 'u26-s2-q3',
          level: 3,
          levelTag: 'Level 3 · HKDSE 英文实战',
          type: 'structured',
          stem: 'Consider three carbon compounds: X (CH₃CH₂OH), Y (CH₃CH₂CH₂CH₂OH) and Z (CH₃CH₂COOH). (a) Identify TWO compounds among X, Y and Z that belong to the same homologous series, and name the functional group present in them. (b) State TWO characteristics shared by members of this homologous series. (c) Draw the electron diagram of a molecule of ethene (C₂H₄), showing electrons in the outermost shells only (describe clearly the number of shared electron pairs in each bond if answering in text).',
          cueWords: [
            { phrase: 'belong to the same homologous series', zh: '属于同一同系物', concept: '寻找拥有相同官能团且相差若干个 —CH₂— 的一对化合物' },
            { phrase: 'name the functional group', zh: '写出官能团英文名称', concept: '—OH 的规范英文名称为 hydroxyl group（拼写勿错！）' },
            { phrase: 'TWO characteristics shared by members', zh: '同系物的两个特征', concept: '四选二：same general formula / differ by -CH2- / similar chemical properties / gradual change in physical properties' },
            { phrase: 'electron diagram of a molecule of ethene', zh: '乙烯分子的最外层电子图', concept: 'C=C 之间 2 对共用电子（4e⁻），4 个 C—H 各 1 对共用电子（2e⁻），只画最外层圆圈' }
          ],
          hint: '(a) X 和 Y 都只含 —OH 且相差两个 —CH₂—！(b) 写出同系物四大特征中的任意两条标准英文表述；(c) 乙烯两个 C 之间共用几对电子？千万别画碳的内层电子！',
          explanation: '(a) X 与 Y 同属烷醇（alkanols / alcohols）同系物，均含羟基（hydroxyl group）。(b) 具有相同通式 CₙH₂ₙ₊₁OH、相似化学性质、相邻成员相差一个 —CH₂— 单元及物理性质规律递变。(c) 乙烯电子图中两个重叠碳最外层圆圈之间有 2 对共用电子（4e⁻），每个碳与两个氢原子重叠圆圈内各有 1 对共用电子（2e⁻）。',
          markingScheme: [
            '1M: (a) X and Y; functional group: hydroxyl group',
            '2M: (b) Any TWO of: They can be represented by the same general formula (CnH2n+1OH) / Successive members differ by a -CH2- unit / They show similar chemical properties / They show a gradual change in physical properties (1M each).',
            '1M: (c) Correct outermost-shell dot-and-cross diagram of C2H4: two overlapping C circles sharing 2 pairs of electrons (4e-), and each C sharing 1 pair of electrons (2e-) with each of two H circles (outermost shells only).'
          ],
          commonMistake: '把 hydroxyl group 拼错成 "hydroxide group"（hydroxide 是无机碱离子 OH⁻，有机醇基团必须拼写为 h-y-d-r-o-x-y-l）！'
        }
      ]
    },

    /* ----------------------------------------------------------------------
       26.7 – 26.9
       ---------------------------------------------------------------------- */
    {
      id: 'u26-s3',
      code: '26.7–26.9',
      titleEn: 'Systematic IUPAC naming of carbon compounds in Topic 7',
      titleZh: '碳化合物的系统命名法（IUPAC Naming）全套实战拆解',
      analogy: {
        icon: '🗺️',
        title: '给有机分子办标准英文“地址门牌”：最长主街 + VIP 最小门牌号！',
        body: `系统命名法（systematic IUPAC naming）就像快递员极其严谨的门牌规则：第一步先在地图上找出包含“核心地标”（主官能团，如 —COOH、—OH 或 C=C 双键）的最长连续碳链作为“主街名”（meth-, eth-, prop-, but-...），哪怕这条长街在图纸上拐了个弯也得顺着数到底！第二步从靠近 VIP 主官能团的那一头开始编门牌号 1, 2, 3...，确保 VIP 拿到最小的号码（比如 but-1-ene、propan-2-ol，而羧酸的 —COOH 永远霸占 1 号位！）。最后把挂在主街两侧的小支链（methyl 甲基、ethyl 乙基、chloro 氯、bromo 溴）按英文字母顺序排在最前面，数字与数字之间打逗号“,”，数字与字母之间打连字符“-”——全世界化学家一看你的名字，就能一模一样还原出分子结构！`
      },
      coreExplanation: `
        <h4>1. 必背碳数词根（Carbon Chain Roots）与常见烷基（Alkyl Groups）</h4>
        <table class="chem-table">
          <thead>
            <tr>
              <th>主链碳原子数</th>
              <th>1C</th>
              <th>2C</th>
              <th>3C</th>
              <th>4C</th>
              <th>5C</th>
              <th>6C</th>
              <th>7C</th>
              <th>8C</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>英文词根（Root）</strong></td>
              <td><code>meth-</code> (甲)</td>
              <td><code>eth-</code> (乙)</td>
              <td><code>prop-</code> (丙)</td>
              <td><code>but-</code> (丁)</td>
              <td><code>pent-</code> (戊)</td>
              <td><code>hex-</code> (己)</td>
              <td><code>hept-</code> (庚)</td>
              <td><code>oct-</code> (辛)</td>
            </tr>
          </tbody>
        </table>
        <p>烷烃去掉一个氢原子形成的支链称为<span class="term">烷基 <span class="en">alkyl group (—CₙH₂ₙ₊₁)</span></span>：<code>—CH₃</code> 为<span class="term">甲基 <span class="en">methyl</span></span>，<code>—CH₂CH₃</code>（或 <code>—C₂H₅</code>）为<span class="term">乙基 <span class="en">ethyl</span></span>，<code>—CH₂CH₂CH₃</code> 为<span class="term">丙基 <span class="en">propyl</span></span>。</p>

        <h4>2. 精工版 IUPAC 系统命名五步黄金法则（5-Step Naming SOP）</h4>
        <ul class="chem-list">
          <li><strong>Step 1 找最长连续主链（Longest continuous carbon chain）：</strong>主链必须包含<strong>主官能团（<code>—COOH</code>、<code>—OH</code> 或 <code>C=C</code>）</strong>且连续碳数最多！切勿被画在上下方“拐弯”的 <code>—C₂H₅</code> 骗到！</li>
          <li><strong>Step 2 定编号方向（Lowest locant rule 最小位次原则）：</strong>
            <br>• <strong>支链烷烃与卤代烷：</strong>卤素前缀（<code>fluoro-, chloro-, bromo-, iodo-</code>）与烷基同级，从离支链最近的一端编号使位次数字最小；若两端完全对称（如 <code>CH₃CHBrCH(CH₃)CH₃</code>），则<strong>按英文字母顺序靠前者给小号</strong>（<code>b</code> 在 <code>m</code> 前 ➔ <code>2-bromo-3-methylbutane</code>）。
            <br>• <strong>烯烃（Alkenes）、烷醇（Alkanols）、烷酸（Alkanoic acids）：</strong><strong>主官能团拥有绝对优先权！</strong>必须让 <code>C=C</code>、<code>—OH</code> 拿到最小位次，哪怕烷基或卤素的数字因此变大（如 <code>CH₃CH(CH₃)CH=CH₂</code> 必须从右往左编为 <code>3-methylbut-1-ene</code>，绝不是 <code>2-methylbut-3-ene</code>！）；而烷酸的 <code>—COOH</code> 碳<strong>永远是 1 号碳（C-1）</strong>（单羧酸省略数字 1）。
          </li>
          <li><strong>Step 3 合并相同取代基（Multiplicity prefixes）：</strong>相同基团用 <code>di-</code> (2)、<code>tri-</code> (3)、<code>tetra-</code> (4) 合并，<strong>每个基团的位次数字都必须重复写出</strong>（例如同一碳上挂两个甲基必须写 <code>2,2-dimethyl...</code>，绝不可漏写一个 2！）。</li>
          <li><strong>Step 4 按英文字母排序前缀（Alphabetical order）：</strong>不同前缀按首字母 <code>a ➔ z</code> 排列（如 <code>bromo-</code> 排在 <code>chloro-</code> 前，<code>ethyl-</code> 排在 <code>methyl-</code> 前），<strong>排序时忽略表示数目的 <code>di- / tri- / tetra-</code></strong>（例如比较 <code>ethyl</code> 的 <strong>e</strong> 与 <code>dimethyl</code> 的 <strong>m</strong>，<code>e</code> 在前 ➔ <code>3-ethyl-2,2-dimethylpentane</code>！）。</li>
          <li><strong>Step 5 严守标点与去 <code>e</code> 规范（Punctuation &amp; suffix rules）：</strong><strong>数字与数字之间用逗号 <code>,</code></strong>，<strong>数字与字母之间用连字符 <code>-</code></strong>，前缀与母体名称紧连不留空格（唯独羧酸结尾 <code>-oic acid</code> 中间留一个空格）。单醇去 <code>e</code> 加 <code>-x-ol</code>（如 <code>butan-2-ol</code>），但二醇保留 <code>e</code>（如 <code>ethane-1,2-diol</code>）！</li>
        </ul>

        <div class="struct-card">
          <pre class="struct-pre">  【经典拐弯主链陷阱】                 【主官能团优先编号】                 【羧酸 C-1 必算入主链】
       ₁    ₂                         ₅    ₄      ₃   ₂    ₁               ₄    ₃      ₂    ₁
      CH₃—CH—CH₂—CH₃                 CH₃—CH(CH₃)—CH=CH—CH₃                CH₃—CH(Cl)—CH₂—COOH
           |
          CH₂—CH₃                   ✓ 4-methylpent-2-ene                 ✓ 3-chlorobutanoic acid
           ³   ⁴  (往下拐更长: 5C!)   ✗ 2-methylpent-3-ene (错!)           ✗ 2-chloropropanoic acid (漏数COOH碳!)
   ✓ 3-methylpentane (正确!)
   ✗ 2-ethylbutane   (典型丢分!)</pre>
          <div class="struct-cap">做命名题动笔前先在结构式上标出阿拉伯数字 1, 2, 3, 4...，失误率立降 90%！</div>
        </div>

        <h4>3. Topic 7 五大类化合物标准命名对照速查表</h4>
        <table class="chem-table">
          <thead>
            <tr>
              <th>类别</th>
              <th>简明结构式例子</th>
              <th>精工版标准 IUPAC 英文名称</th>
              <th>关键拆解要点</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>支链烷烃</td>
              <td><code>CH₃C(CH₃)₂CH₂CH(CH₂CH₃)CH₃</code></td>
              <td><code>4-ethyl-2,2-dimethylhexane</code></td>
              <td>最长链为 6 碳（hexane）；左起编号 <code>2,2,4</code> 比右起 <code>3,5,5</code> 小；<code>e</code> 先于 <code>m</code></td>
            </tr>
            <tr>
              <td>烯烃</td>
              <td><code>CH₂=CHCH₂CH₃</code> vs <code>CH₃CH=CHCH₃</code></td>
              <td><code>but-1-ene</code> vs <code>but-2-ene</code></td>
              <td>位次数字嵌在 <code>-ene</code> 正前方，两边都要加连字符 <code>-</code></td>
            </tr>
            <tr>
              <td>卤代烷</td>
              <td><code>CH₂BrCHClCH₃</code></td>
              <td><code>1-bromo-2-chloropropane</code></td>
              <td>右起是 <code>2,3</code>，左起是 <code>1,2</code>（更小），且 <code>bromo</code> 按字母排在 <code>chloro</code> 前</td>
            </tr>
            <tr>
              <td>烷醇</td>
              <td><code>CH₃CH(CH₃)CH(OH)CH₃</code></td>
              <td><code>3-methylbutan-2-ol</code></td>
              <td><code>—OH</code> 优先拿小号 <code>2</code>，甲基拿 <code>3</code>；去掉 <code>butane</code> 的 <code>e</code></td>
            </tr>
            <tr>
              <td>烷酸</td>
              <td><code>(CH₃)₂CHCOOH</code></td>
              <td><code>methylpropanoic acid</code>（或 <code>2-methylpropanoic acid</code>）</td>
              <td><code>—COOH</code> 的碳是 C-1，总长 3 碳（propanoic acid）</td>
            </tr>
          </tbody>
        </table>
      `,
      textbookFormulas: [
        {
          label: '复杂有机名称解剖示范（以 3-bromo-2,2-dimethylbutan-1-ol 为例）',
          equationHtml: `<span style="color:#0369a1;font-weight:700;">3-bromo</span>-<span style="color:#0f766e;font-weight:700;">2,2-dimethyl</span><span style="color:#7c3aed;font-weight:700;">butan</span>-<span style="color:#dc2626;font-weight:700;">1-ol</span> &nbsp;＝&nbsp; CH<sub>3</sub>CHBrC(CH<sub>3</sub>)<sub>2</sub>CH<sub>2</sub>OH`,
          note: 'butan = 主链 4 个碳；-1-ol = C-1 连主官能团 —OH；2,2-dimethyl = C-2 连两个甲基；3-bromo = C-3 连溴原子（b 在 m 前，忽略 di-）。'
        }
      ],
      examTrap: `命名羧酸（alkanoic acids）时最致命的错误是“只数烃基碳、漏数 —COOH 本身的那个碳”！例如 CH₃CH₂COOH 一共有 3 个碳，叫 propanoic acid（丙酸），绝不叫 ethanoic acid！另外切记标点符号：漏写连字符 "-" 或把逗号 "," 写成连字符在 DSE 均可能扣分！`,
      relations: [
        {
          type: 'buildsOn',
          targetUnitId: 'u26',
          label: '承接 26.5：五大同系物的词尾（Suffix）与前缀体系',
          why: '认清主官能团才能确定母体词尾（-ane, -ene, -ol, -oic acid）及编号优先顺序。'
        },
        {
          type: 'leadsTo',
          targetUnitId: 'u29',
          label: '直通 Topic 8 Unit 29：多官能团与醛/酮/酯/酰胺进阶命名',
          why: 'Topic 8 的全部命名法则只是在这套五步 SOP 上新增 -al、-one、-oate、-amide 和 -amine 词尾而已！'
        }
      ],
      questions: [
        {
          id: 'u26-s3-q1',
          level: 1,
          levelTag: 'Level 1 · 中文直觉破冰',
          type: 'mcq',
          stem: '某同学给支链烷烃 CH₃CH(C₂H₅)CH₂CH₃ 命名为 "2-ethylbutane"，老师批改判错。该化合物正确的系统名称（systematic IUPAC name）应该是什么？',
          cueWords: [],
          options: [
            'A. 3-ethylbutane',
            'B. 3-methylpentane',
            'C. 2-methylpentane',
            'D. hexane'
          ],
          answerIndex: 1,
          hint: '把括号里的乙基（—C₂H₅，即 —CH₂CH₃）展开画出来，重新找一找连续不间断的最长碳链到底有几个碳！',
          explanation: '把 2 号碳上的 —C₂H₅（—CH₂CH₃）展开后，从该乙基末端一路数到最右端，最长连续碳链共有 5 个碳原子（pentane），原本最左边的 CH₃ 其实是挂在 3 号碳上的甲基支链，故正确名称为 3-methylpentane！',
          markingScheme: ['1M: The longest continuous carbon chain contains 5 carbon atoms with a methyl group at C-3, so the IUPAC name is 3-methylpentane.'],
          commonMistake: '只盯着水平方向画出来的 4 个碳看，被挂在第 2 号碳上的 —C₂H₅ 骗成 "2-ethyl..."（记住：2 号碳上永远不可能出现真正的 ethyl 支链，一旦出现说明主链找短了！）。'
        },
        {
          id: 'u26-s3-q2',
          level: 2,
          levelTag: 'Level 2 · 中英过渡辨析',
          type: 'mcq',
          stem: '化合物 CH₃CH(CH₃)CH₂CH=CH₂ 的正确系统名称（systematic IUPAC name）是哪一个？',
          cueWords: [
            { phrase: 'CH₃CH(CH₃)CH₂CH=CH₂', zh: '含支链的烯烃', concept: 'C=C 双键编号优先权高于甲基（—CH₃）支链！' },
            { phrase: 'systematic IUPAC name', zh: '系统命名', concept: '核查编号方向、连字符与位次位置' }
          ],
          options: [
            'A. 2-methylpent-4-ene',
            'B. 4-methylpent-1-ene',
            'C. 4-methyl-1-pentene-ane',
            'D. 1-methylbut-3-ene'
          ],
          answerIndex: 1,
          hint: '主链有 5 个碳（pent-），右边有 C=C 双键，左边有甲基支链：应该从哪一端开始编号 1, 2, 3, 4, 5？',
          explanation: '最长含双键连续碳链有 5 个碳（pentene）。由于碳碳双键（C=C）是主官能团，编号优先权高于甲基取代基，必须从右端靠近双键的一侧编号，使双键在 C-1 与 C-2 之间（pent-1-ene），此时甲基位于 C-4，故命名为 4-methylpent-1-ene。',
          markingScheme: ['1M: 4-methylpent-1-ene (numbering starts from the end nearer to the C=C double bond).'],
          commonMistake: '为了贪图甲基数字小而从左往右编成 "2-methylpent-4-ene"（颠倒了主官能团与普通烷基支链的优先次序！）。'
        },
        {
          id: 'u26-s3-q3',
          level: 3,
          levelTag: 'Level 3 · HKDSE 英文实战',
          type: 'structured',
          stem: 'Give the systematic IUPAC name for each of the following carbon compounds: (a) CH₃C(CH₃)₂CHBrCH₃ ; (b) CH₃CH(Cl)CH₂CH₂OH ; (c) CH₃CH(CH₃)CH₂COOH .',
          cueWords: [
            { phrase: 'systematic IUPAC name', zh: '标准 IUPAC 名称', concept: '严格检查主链碳数、最小位次、字母排序及标点连字符' },
            { phrase: 'CH₃C(CH₃)₂CHBrCH₃', zh: '含溴与两个甲基的丁烷', concept: '比较左起 (2,2,3) vs 右起 (2,3,3) 位次集合，再按 b 先于 m 排序前缀' },
            { phrase: 'CH₃CH(Cl)CH₂CH₂OH', zh: '含氯的丁醇', concept: '羟基 —OH 优先拿 C-1！' },
            { phrase: 'CH₃CH(CH₃)CH₂COOH', zh: '含甲基的丁酸', concept: '羧基 —COOH 碳永远是 C-1，总共主链 4 个碳！' }
          ],
          hint: '(a) 左起位次是 2,2,3，右起是 2,3,3（左起在第二个数字胜出更小！），注意 bromo 的 b 排在 dimethyl 的 m 前面！(b) —OH 那头是 1 号碳！(c) 别漏数 —COOH 那 1 个碳！',
          explanation: '(a) 主链 4 个碳；从左端编号得位次 (2,2,3)，比从右端编号 (2,3,3) 在第一差异点更小；字母顺序 bromo 在 dimethyl（看 m）之前，故为 3-bromo-2,2-dimethylbutane。(b) 主官能团 —OH 在右端 C-1，氯在 C-3，故为 3-chlorobutan-1-ol。(c) —COOH 为 C-1，主链 4 个碳，C-3 挂甲基，故为 3-methylbutanoic acid。',
          markingScheme: [
            '1M: (a) 3-bromo-2,2-dimethylbutane',
            '1M: (b) 3-chlorobutan-1-ol',
            '1M: (c) 3-methylbutanoic acid'
          ],
          commonMistake: '(a) 把 dimethyl 按字母 d 排在 bromo 后面没问题，但常因贪图 bromo 拿 2 号而误编成 "2-bromo-3,3-dimethylbutane"（注意 2,2,3 比 2,3,3 更小，只有两端位次集合完全相同时才轮到字母决定编号！）。'
        }
      ]
    },

    /* ----------------------------------------------------------------------
       26.10
       ---------------------------------------------------------------------- */
    {
      id: 'u26-s4',
      code: '26.10',
      titleEn: 'Physical properties of alkanes & simple carbon compounds',
      titleZh: '烷烃与简单同系物的物理性质（沸点、支链效应、溶解度与密度）',
      analogy: {
        icon: '🥢',
        title: '一把笔直筷子 vs 一堆分杈树枝：一秒参透直链与支链异构体的沸点高低！',
        body: `同样是 C₅H₁₂ 的同分异构体，为什么直链戊烷（pentane）在室温 25 °C 下是液体（沸点 36 °C），而带两个支链的 2,2-二甲基丙烷（2,2-dimethylpropane）却早已沸腾成气体（沸点仅 10 °C）？把直链烷烃想象成一根根笔直修长的筷子，它们可以肩并肩紧紧贴在一起，分子之间的接触表面积（surface area of contact）很大，范德华力（van der Waals' forces）抓得很牢；而支链越多，分子就缩成一个圆滚滚的小刺球（more spherical and compact），球和球碰到一起只有小小一个切点，接触表面积骤减，范德华力微弱，稍微受热就散开飞走了！`
      },
      coreExplanation: `
        <h4>1. 直链烷烃在室温常压（25 °C, 1 atm）下的三态分界线（必背常数！）</h4>
        <p><span class="term">烷烃 <span class="en">alkanes</span></span>由非极性（non-polar）共价分子构成，属<span class="term">简单分子结构 <span class="en">simple molecular structure</span></span>，分子之间仅靠微弱的<span class="term">范德华力 <span class="en">van der Waals' forces</span></span>维系。随碳链增长，分子变大、电子总数增多，分子间范德华力增强，熔沸点依次升高：</p>
        <table class="chem-table">
          <thead>
            <tr>
              <th>直链烷烃碳数范围</th>
              <th>室温常压（25 °C, 1 atm）物态</th>
              <th>代表成员及沸点示例</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong><code>C₁ – C₄</code></strong></td>
              <td><strong>无色气体（Colourless gases）</strong></td>
              <td>甲烷 <code>CH₄</code> (<code>-162 °C</code>)、乙烷 <code>C₂H₆</code> (<code>-89 °C</code>)、丙烷 <code>C₃H₈</code> (<code>-42 °C</code>)、丁烷 <code>C₄H₁₀</code> (<code>-0.5 °C</code>)</td>
            </tr>
            <tr>
              <td><strong><code>C₅ – C₁₇</code></strong></td>
              <td><strong>无色液体（Colourless liquids）</strong></td>
              <td>戊烷 <code>C₅H₁₂</code> (<code>36 °C</code>)、己烷 <code>C₆H₁₄</code> (<code>69 °C</code>) …… 黏度随碳数增加而增大</td>
            </tr>
            <tr>
              <td><strong><code>C₁₈</code> 及以上（<code>C₁₈+</code>）</strong></td>
              <td><strong>蜡状固体（Waxy solids）</strong></td>
              <td>十八烷 <code>C₁₈H₃₈</code>（熔点 <code>28 °C</code>）、石蜡（paraffin wax）</td>
            </tr>
          </tbody>
        </table>

        <h4>2. 直链 vs 支链烷烃沸点对比（DSE 经典 3 分论述题满分模板）</h4>
        <div class="struct-card">
          <pre class="struct-pre">  Pentane 戊烷 (直链杆状, b.p. = 36 °C)              2,2-Dimethylpropane 2,2-二甲基丙烷 (球状紧凑, b.p. = 10 °C)
   CH₃—CH₂—CH₂—CH₂—CH₃                                       CH₃
   ░░░░░░░░░░░░░░░░░░░  ◄─ 大面积紧密贴合！                  |
   CH₃—CH₂—CH₂—CH₂—CH₃                                  CH₃——C——CH₃   •  ◄─ 球体点接触，接触面积极小！
                                                             |
   ➔ 较大分子接触表面积 (larger surface area of contact)      CH₃
   ➔ 分子间范德华力更强 (stronger van der Waals' forces)  ➔ 分子更呈球状紧凑 (more spherical &amp; compact)
   ➔ 需要更多热能克服 ➔ 沸点更高！                       ➔ 范德华力更弱 ➔ 室温 (25 °C) 下已是气体！</pre>
          <div class="struct-cap">同理：丁烷 butane (b.p. -0.5 °C) &gt; 甲基丙烷 methylpropane (b.p. -11.7 °C)；戊烷 (36 °C) &gt; 甲基丁烷 (28 °C) &gt; 2,2-二甲基丙烷 (10 °C)！</div>
        </div>

        <h4>3. 溶解度（Solubility）与密度（Density）</h4>
        <ul class="chem-list">
          <li><strong><span class="term">不溶于水 <span class="en">Insoluble in water</span></span>：</strong>水分子之间存在很强的<strong><span class="term">氢键 <span class="en">hydrogen bonds</span></span></strong>，而非极性的烷烃（及烯烃、卤代烷）分子与水分子之间不能形成氢键，无法打断水分子间的强吸引力挤入水中。</li>
          <li><strong>易溶于<span class="term">非极性有机溶剂 <span class="en">non-polar organic solvents</span></span>：</strong>烷烃可与己烷（hexane）、四氯化碳（tetrachloromethane, <code>CCl₄</code>）、甲苯（methylbenzene）等有机溶剂互溶，因为溶质与溶剂分子间具有强度相近的范德华力（“相似相溶 like dissolves like”）。</li>
          <li><strong>与短链烷醇 / 烷酸的鲜明对比：</strong>甲醇、乙醇、丙醇及乙酸之所以能与水任意互溶且沸点远高于同碳数烷烃，正是因为它们的 <code>—OH</code> 或 <code>—COOH</code> 官能团能互相及与水分子形成较强的<strong><span class="term">氢键 <span class="en">hydrogen bonds</span></span></strong>（详见 Unit 29）！</li>
          <li><strong>密度均小于水（Density <code>&lt; 1.0 g cm⁻³</code>）：</strong>液态烷烃密度约为 <code>0.6–0.8 g cm⁻³</code>，与水混合时分层并<strong>浮于水面之上（floats as the upper oily layer）</strong>。因此<strong>汽油或油类起火绝不可用水扑救</strong>，否则油浮在水面随水四处蔓延，令火势迅速扩大！</li>
        </ul>
      `,
      textbookFormulas: [
        {
          label: '支链降低烷烃沸点的三步黄金采分链（DSE Explain Template）',
          equationHtml: `More branched (more spherical shape) &nbsp;➔&nbsp; Smaller surface area of contact between molecules &nbsp;➔&nbsp; Weaker van der Waals' forces &nbsp;➔&nbsp; Lower boiling point`,
          note: '注意前提：只有当两个烷烃碳原子数相同（互为同分异构体，相对分子质量相等）时才比接触表面积；若碳数不同（如己烷 C₆ vs 甲基丁烷 C₅），优先比分子大小与总电子数！'
        }
      ],
      examTrap: `室温（25 °C）物态隐藏大坑：直链戊烷（pentane, C₅H₁₂, b.p. 36 °C）是液体，但它的支链同分异构体 2,2-二甲基丙烷（2,2-dimethylpropane, C₅H₁₂, b.p. 10 °C）因为球状支链大幅拉低了沸点，在室温 25 °C 下其实是气体！选择题考到“所有 C₅H₁₂ 异构体在室温下均为液体”时一定要判错！`,
      relations: [
        {
          type: 'buildsOn',
          targetUnitId: 'u25',
          label: '呼应 Unit 25.5：石油馏分的沸点与黏度趋势',
          why: '烷烃随碳链变长范德华力增强的微观机制，正是解释石油馏分宏观性质的理论基石。'
        },
        {
          type: 'leadsTo',
          targetUnitId: 'u29',
          label: '衔接 Topic 8 Unit 29：极性官能团与氢键（Hydrogen Bonding）对沸点和溶解度的剧变影响',
          why: '把烷烃的微弱范德华力作为基准线，才能看懂醇和羧酸为何沸点飙升且能溶于水！'
        }
      ],
      questions: [
        {
          id: 'u26-s4-q1',
          level: 1,
          levelTag: 'Level 1 · 中文直觉破冰',
          type: 'mcq',
          stem: '在室温和常压（25 °C, 1 atm）下，把少量液态己烷（hexane, C₆H₁₄）倒入装有蒸馏水的试管中充分摇晃后静置，会观察到什么现象？',
          cueWords: [],
          options: [
            'A. 己烷完全溶解在水中，形成均一无色溶液',
            'B. 试管内分为两层无色液体，己烷位于上层（upper layer），水位于下层',
            'C. 试管内分为两层无色液体，己烷沉在下层（lower layer），水位于上层',
            'D. 剧烈放出气泡并使蓝色石蕊试纸变红'
          ],
          answerIndex: 1,
          hint: '回忆己烷（烷烃 alkane）的两个物理特征：① 溶于水吗？② 密度比 1.0 g cm⁻³ 大还是小？',
          explanation: '己烷（hexane）是非极性碳氢化合物，不能与水分子形成氢键，因此不溶于水（immiscible with water）；且液态烷烃的密度小于 1.0 g cm⁻³（约 0.66 g cm⁻³），比水轻，故静置后浮在水面上形成无色上层油状液体（upper layer）。',
          markingScheme: ['1M: Two colourless immiscible liquid layers are formed, with less dense hexane floating as the upper layer on water.'],
          commonMistake: '搞反上下层位置（记住：所有烃类烷烃/烯烃都比水轻浮在上层；只有部分含重卤素的多氯代烷/溴代烷如 CCl₄、CHCl₃ 密度大于 1 g cm⁻³ 才会沉在下层！）。'
        },
        {
          id: 'u26-s4-q2',
          level: 2,
          levelTag: 'Level 2 · 中英过渡辨析',
          type: 'mcq',
          stem: '将下列四种烷烃（alkanes）按沸点由高至低（in descending order of boiling point）排列，正确的顺序是哪一项？① 己烷（hexane） ② 戊烷（pentane） ③ 甲基丁烷（methylbutane） ④ 2,2-二甲基丙烷（2,2-dimethylpropane）',
          cueWords: [
            { phrase: 'descending order of boiling point', zh: '沸点由高至低排列', concept: '先比碳原子数（分子大小），同碳数再比支链多少（接触表面积）' }
          ],
          options: [
            'A. ① > ④ > ③ > ②',
            'B. ① > ② > ③ > ④',
            'C. ④ > ③ > ② > ①',
            'D. ② > ③ > ④ > ①'
          ],
          answerIndex: 1,
          hint: '先数碳数：hexane 有 6 个碳，其余三个都有 5 个碳！同为 C₅H₁₂ 时，直链、1 个支链、2 个支链谁接触面积最大？',
          explanation: '① 己烷（hexane, C₆H₁₄）分子最大，范德华力最强，沸点最高（69 °C）。② 戊烷、③ 甲基丁烷和 ④ 2,2-二甲基丙烷互为 C₅H₁₂ 同分异构体：支链越多，分子越呈球状紧凑（more spherical），接触表面积越小，分子间范德华力越弱，故沸点依次为 ② 戊烷（36 °C）> ③ 甲基丁烷（28 °C）> ④ 2,2-二甲基丙烷（10 °C）。',
          markingScheme: ['1M: hexane > pentane > methylbutane > 2,2-dimethylpropane'],
          commonMistake: '看错英文题目里的 descending order（由高到低）与 ascending order（由低到高）！审题时务必圈出方向词！'
        },
        {
          id: 'u26-s4-q3',
          level: 3,
          levelTag: 'Level 3 · HKDSE 英文实战',
          type: 'structured',
          stem: 'Both butane (CH₃CH₂CH₂CH₃) and methylpropane (CH₃CH(CH₃)CH₃) have the same molecular formula C₄H₁₀, yet the boiling point of butane (-0.5 °C) is higher than that of methylpropane (-11.7 °C). (a) Explain why butane has a higher boiling point than methylpropane. (b) Explain why burning petrol in a laboratory accident should NEVER be extinguished by pouring water onto it.',
          cueWords: [
            { phrase: 'same molecular formula C₄H₁₀', zh: '相同分子式 C₄H₁₀', concept: '分子量相同，必须从分子形状与接触表面积切入比较范德华力' },
            { phrase: 'higher boiling point than methylpropane', zh: '丁烷沸点高于甲基丙烷', concept: 'rod-like / less spherical ➔ larger surface area of contact ➔ stronger van der Waals\' forces' },
            { phrase: 'NEVER be extinguished by pouring water', zh: '切勿泼水扑救汽油火', concept: 'immiscible with water + lower density than water ➔ floats and spreads fire' }
          ],
          hint: '(a) 三步曲：① 分子形状差异（straight-chain vs branched/more spherical）；② 分子间接触表面积（surface area of contact）；③ 范德华力强弱。(b) 汽油不溶于水且密度比水小，泼水会发生什么？',
          explanation: '(a) 丁烷为直链杆状分子，而甲基丙烷带支链、形状更呈球状紧凑；丁烷分子间拥有更大的接触表面积（larger surface area of contact），因此丁烷分子间的范德华力比甲基丙烷更强，沸腾需吸收更多能量。(b) 汽油不溶于水且密度比水小（< 1.0 g cm⁻³），泼水时汽油会浮在水面上随水流四处扩散继续燃烧，导致火势蔓延。',
          markingScheme: [
            '1M: (a) Straight-chain butane molecules are rod-shaped whereas branched methylpropane molecules are more spherical and compact, so butane molecules have a larger surface area of contact with one another.',
            '1M: (a) Hence, the van der Waals\' forces between butane molecules are stronger than those between methylpropane molecules, requiring more heat energy to overcome during boiling.',
            '1M: (b) Petrol is immiscible with water and has a lower density than water, so burning petrol would float on top of the water and spread the fire.'
          ],
          commonMistake: '在 (a) 中错误回答 "Butane is a larger molecule than methylpropane"（错！两者分子式都是 C₄H₁₀，相对分子质量完全相等，不是大小不同，而是形状与接触表面积不同！）。'
        }
      ]
    }
  ],

  /* ------------------------------------------------------------------------
     UNIT 26 EXAM-STYLE LONG QUESTIONS
     ------------------------------------------------------------------------ */
  unitExamLongQuestions: [
    {
      id: 'u26-long-1',
      title: '长题实战 1：四大化学式转化、同系物识别与 IUPAC 系统命名综合大考（Formulae, Homologous Series & Naming）',
      totalMarks: 7,
      scenarioEn: `Consider four carbon compounds A, B, C and D shown below:\nA: CH₃CH₂CH(CH₃)CH₂CH₃\nB: CH₃CH=CHCH₂CH₃\nC: CH₃CH(OH)CH₃\nD: CH₃CH(Br)CH₂COOH\nAll four compounds belong to common homologous series studied in organic chemistry.`,
      scenarioZhSummary: `给出四种碳化合物的简明结构式：A 为支链烷烃 <code>CH₃CH₂CH(CH₃)CH₂CH₃</code>，B 为链状烯烃 <code>CH₃CH=CHCH₂CH₃</code>，C 为烷醇 <code>CH₃CH(OH)CH₃</code>，D 为含溴取代基的烷酸 <code>CH₃CH(Br)CH₂COOH</code>，综合考察同系物概念、系统命名（systematic IUPAC naming）及化学式书写。`,
      cueWords: [
        { phrase: 'CH₃CH₂CH(CH₃)CH₂CH₃', zh: '化合物 A（支链烷烃）', concept: '主链 5 碳，C-3 挂甲基 ➔ 3-methylpentane' },
        { phrase: 'CH₃CH=CHCH₂CH₃', zh: '化合物 B（不饱和烯烃）', concept: '主链 5 碳，双键靠近左端 C-2 ➔ pent-2-ene' },
        { phrase: 'CH₃CH(OH)CH₃', zh: '化合物 C（仲醇）', concept: '含羟基 hydroxyl group (—OH)，命名为 propan-2-ol' },
        { phrase: 'CH₃CH(Br)CH₂COOH', zh: '化合物 D（溴代烷酸）', concept: '—COOH 为 C-1，主链 4 碳，C-3 连溴 ➔ 3-bromobutanoic acid' }
      ],
      subQuestions: [
        {
          part: '(a)',
          marks: 3,
          promptEn: 'Give the systematic IUPAC names of compounds A, B and D.',
          commandWord: { word: 'Give the systematic IUPAC names', tip: '逐个标号检查：连字符 "-" 位置、词尾拼写（-ane, -ene, -oic acid）及羧酸 C-1 碳切勿漏数！' },
          hint: 'A 是 5 碳主链第 3 号位有甲基；B 从左数双键在 2 号位；D 从右端 —COOH 开始数 1, 2, 3, 4！',
          markingScheme: [
            '1M: A: 3-methylpentane',
            '1M: B: pent-2-ene',
            '1M: D: 3-bromobutanoic acid'
          ],
          explanationZh: 'A 最长链 5 碳，甲基在 C-3，为 3-methylpentane；B 双键位于 C-2 与 C-3 之间，为 pent-2-ene；D 中 —COOH 碳为 C-1，主链共 4 碳，溴原子在 C-3，故为 3-bromobutanoic acid。'
        },
        {
          part: '(b)',
          marks: 2,
          promptEn: 'Name the homologous series to which compound C belongs, and write the general formula of this homologous series.',
          commandWord: { word: 'Name ... and write', tip: '第 1 分写 alkanols（或 alcohols）；第 2 分写通式 CₙH₂ₙ₊₁OH。' },
          hint: '化合物 C（CH₃CH(OH)CH₃）带有 —OH 羟基，属于什么醇家族？通式怎么用 n 表示？',
          markingScheme: [
            '1M: Alkanols (or alcohols)',
            '1M: CnH2n+1OH (where n ≥ 1)'
          ],
          explanationZh: '化合物 C 为 2-丙醇（propan-2-ol），属于烷醇（alkanols）同系物，通式为 CₙH₂ₙ₊₁OH。'
        },
        {
          part: '(c)',
          marks: 2,
          promptEn: 'Write the empirical formula of compound B, and write the condensed structural formula and systematic IUPAC name of ONE structural isomer of compound C that belongs to the same homologous series.',
          commandWord: { word: 'Write ... and give', tip: 'B 分子式 C₅H₁₀ 约分得最简整数比实验式 CH₂；C (propan-2-ol) 的同系物位置异构体只需把 —OH 移到端碳 C-1！' },
          hint: 'B 的分子式是 C₅H₁₀，除以最大公约数 5 得到什么实验式？把 C（CH₃CH(OH)CH₃）的 —OH 挪到 1 号碳上是什么醇？',
          markingScheme: [
            '1M: Empirical formula of B: CH2',
            '1M: CH3CH2CH2OH; propan-1-ol'
          ],
          explanationZh: '所有单烯烃（CₙH₂ₙ）的实验式（empirical formula）均为最简比 CH₂；将 propan-2-ol 的 —OH 移至末端碳即得同一同系物的同分异构体 CH₃CH₂CH₂OH（1-丙醇 propan-1-ol）。'
        }
      ]
    },
    {
      id: 'u26-long-2',
      title: '长题实战 2：烷烃同系物的物理性质递变与支链异构体沸点深度对比（Physical Properties of Alkanes）',
      totalMarks: 6,
      scenarioEn: `Alkanes form a homologous series with the general formula CₙH₂ₙ₊₂. At room temperature and pressure (25 °C and 1 atm), straight-chain alkanes from methane to butane exist as gases, whereas pentane (CH₃CH₂CH₂CH₂CH₃, boiling point = 36 °C) exists as a volatile liquid. However, an isomer of pentane, 2,2-dimethylpropane (C(CH₃)₄, boiling point = 10 °C), exists as a gas under the same conditions.`,
      scenarioZhSummary: `烷烃（alkanes）通式为 <code>CₙH₂ₙ₊₂</code>。在室温常压（25 °C, 1 atm）下，甲烷至丁烷（<code>C₁–C₄</code>）为气体，而直链戊烷（pentane，沸点 36 °C）为挥发性液体；然而戊烷的支链异构体 2,2-二甲基丙烷（2,2-dimethylpropane，沸点 10 °C）在相同室温下却呈气态。`,
      cueWords: [
        { phrase: 'homologous series with the general formula CₙH₂ₙ₊₂', zh: '通式 CₙH₂ₙ₊₂ 的烷烃同系物', concept: '简单分子结构，分子间仅存范德华力（van der Waals\' forces）' },
        { phrase: 'methane to butane exist as gases, whereas pentane', zh: 'C₁–C₄ 为气体而戊烷为液体', concept: '随碳原子数与分子大小增加，范德华力增强，沸点高于 25 °C' },
        { phrase: '2,2-dimethylpropane (C(CH₃)₄, boiling point = 10 °C), exists as a gas', zh: '2,2-二甲基丙烷室温下为气体', concept: '高度支链化呈球状 ➔ 接触表面积更小 ➔ 范德华力更弱 ➔ 沸点低于 25 °C' }
      ],
      subQuestions: [
        {
          part: '(a)',
          marks: 2,
          promptEn: 'Explain why the boiling points of straight-chain alkanes increase steadily from methane to pentane.',
          commandWord: { word: 'Explain', tip: '2 分标准链：① 分子体积/电子数随碳数增加而增大（1M）；② 分子间范德华力增强，沸腾需更多热能（1M）。' },
          hint: '从 CH₄ 到 C₅H₁₂，分子越来越大，分子之间的什么作用力越来越强？',
          markingScheme: [
            '1M: From methane to pentane, the molecular size (and relative molecular mass / number of electrons) increases.',
            '1M: The van der Waals\' forces between alkane molecules become stronger, requiring more heat energy to overcome during boiling.'
          ],
          explanationZh: '由甲烷（methane）到戊烷（pentane），分子体积与相对分子质量依次增大，分子间的范德华力（van der Waals\' forces）随之增强，沸腾时分开分子所需能量增加，故沸点稳步上升。'
        },
        {
          part: '(b)',
          marks: 2,
          promptEn: 'Explain why 2,2-dimethylpropane is a gas whereas pentane is a liquid at 25 °C and 1 atm.',
          commandWord: { word: 'Explain', tip: '对比同分异构体形状与接触表面积，最后点明 10 °C < 25 °C < 36 °C 的物态逻辑。' },
          hint: '两个分子都是 C₅H₁₂！比一比球状（spherical）与直杆状（rod-shaped）谁的接触表面积小、范德华力弱！',
          markingScheme: [
            '1M: Molecules of 2,2-dimethylpropane are highly branched and more spherical/compact than straight-chain pentane molecules, resulting in a smaller surface area of contact between molecules.',
            '1M: Thus, van der Waals\' forces between 2,2-dimethylpropane molecules are weaker, giving it a boiling point (10 °C) below room temperature (25 °C), whereas pentane boils at 36 °C (above 25 °C).'
          ],
          explanationZh: '2,2-二甲基丙烷高度支链化，分子呈球状紧凑结构，分子间接触表面积（surface area of contact）远小于直链戊烷，导致范德华力较弱，沸点（10 °C）低于室温 25 °C 而呈气态。'
        },
        {
          part: '(c)',
          marks: 2,
          promptEn: 'Explain why pentane is insoluble in water, whereas it dissolves readily in hexane.',
          commandWord: { word: 'Explain', tip: '1 分解释水分子间有强氢键而戊烷无法与水形成氢键；1 分解释戊烷与己烷分子间有强度相近的范德华力。' },
          hint: '水分子之间靠什么强作用力拉在一起？非极性的戊烷能跟水形成氢键吗？为什么它却能跟己烷混在一起？',
          markingScheme: [
            '1M: Water molecules are held together by strong hydrogen bonds, and non-polar pentane molecules cannot form hydrogen bonds with water molecules to break into the water structure.',
            '1M: Both pentane and hexane are non-polar hydrocarbons with van der Waals\' forces of comparable strength between their molecules, allowing them to mix freely.'
          ],
          explanationZh: '水分子间存在强氢键（hydrogen bonds），非极性的戊烷（pentane）分子无法与水形成氢键；而戊烷与己烷（hexane）同属非极性烷烃，彼此分子间范德华力强度相近，因此能任意互溶。'
        }
      ]
    }
  ]
});
