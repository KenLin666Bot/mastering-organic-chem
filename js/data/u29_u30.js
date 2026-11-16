// Mastering Chemistry Book 3B · Topic 8: Chemistry of Carbon Compounds
// Unit 29: Naming and physical properties of carbon compounds
// Unit 30: Isomerism
// Strictly follows Jing Kung Educational Press (L.H.M. Chung) & HKEAA Marking Standards

window.CHEM_UNITS = window.CHEM_UNITS || [];

// ============================================================================
// UNIT 29: Naming and physical properties of carbon compounds
// ============================================================================
window.CHEM_UNITS.push({
  id: 'u29',
  unitNum: 'Unit 29',
  book: 'Book 3B · Topic 8',
  topicId: 'topic8',
  titleEn: 'Naming and physical properties of carbon compounds',
  titleZh: '碳化合物的命名及物理性质',
  colorTheme: 'indigo',
  summary: '从 Topic 7 的烃（hydrocarbons）迈入含氧、含卤素及含氮的八大同系物（homologous series）：全面掌握卤代烷（haloalkanes）、醇（alcohols / alkanols，含 1°/2°/3° 分类）、醛（aldehydes / alkanals）、酮（ketones / alkanones）、羧酸（carboxylic acids / alkanoic acids）、酯（esters）、未取代酰胺（unsubstituted amides）与伯胺（primary amines）的 IUPAC 系统命名规则，并从氢键（hydrogen bonds）、羧酸二聚体（dimers）与范德华力（van der Waals\' forces）透彻剖析沸点（boiling point）与水溶性（water solubility）规律。',
  keyTerms: [
    { en: 'functional group', zh: '官能团（反应活性中心）', cat: 'Concept' },
    { en: 'haloalkane', zh: '卤代烷 (R—X)', cat: 'Homologous series' },
    { en: 'alcohol / alkanol', zh: '醇 / 烷醇 (R—OH)', cat: 'Homologous series' },
    { en: 'primary / secondary / tertiary alcohol', zh: '伯醇(1°) / 仲醇(2°) / 叔醇(3°)', cat: 'Classification' },
    { en: 'aldehyde / alkanal', zh: '醛 / 烷醛 (R—CHO)', cat: 'Homologous series' },
    { en: 'ketone / alkanone', zh: '酮 / 烷酮 (R—CO—R\')', cat: 'Homologous series' },
    { en: 'carbonyl group', zh: '羰基 (>C=O)', cat: 'Functional group' },
    { en: 'carboxylic acid / alkanoic acid', zh: '羧酸 / 烷酸 (R—COOH)', cat: 'Homologous series' },
    { en: 'carboxyl group', zh: '羧基 (—COOH)', cat: 'Functional group' },
    { en: 'ester', zh: '酯 (RCOOR\')', cat: 'Homologous series' },
    { en: 'unsubstituted amide', zh: '未取代酰胺 (R—CONH₂)', cat: 'Homologous series' },
    { en: 'primary amine', zh: '伯胺 / 一级胺 (R—NH₂)', cat: 'Homologous series' },
    { en: 'phenyl group', zh: '苯基 (—C₆H₅)', cat: 'Substituent' },
    { en: 'hydrogen bond', zh: '氢键', cat: 'Intermolecular force' },
    { en: 'dimer', zh: '二聚体（羧酸双氢键缔合）', cat: 'Structure' },
    { en: 'van der Waals\' forces', zh: '范德华力', cat: 'Intermolecular force' },
    { en: 'miscible', zh: '互溶（任意比例混溶）', cat: 'Physical property' }
  ],
  sections: [
    // ------------------------------------------------------------------------
    // u29-s1: 29.1 - 29.5
    // ------------------------------------------------------------------------
    {
      id: 'u29-s1',
      code: '29.1–29.5',
      titleEn: 'Functional groups, IUPAC priority & Naming alkanes, alkenes, haloalkanes and alcohols',
      titleZh: '官能团活性中心、优先序及烷、烯、卤代烷与醇的命名（含 1°/2°/3° 分类）',
      analogy: {
        icon: '🏷️',
        title: '有机分子的“户口本”：谁职级最高，谁定家族姓氏与门牌起点！',
        body: '把一条有机分子的碳骨架（carbon skeleton）想象成一条街道：饱和碳氢链（saturated hydrocarbon chain）只是安静的墙砖，真正决定这栋房子脾气和反应的“核心机关”叫做官能团（functional group）。当分子里同时住着羟基（hydroxyl group, —OH）、碳碳双键（C=C double bond）和卤素原子（halogen atom, —X）时，IUPAC 命名就像登记户口本——职级最高的官能团当“户主”决定词尾姓氏（例如醇用 -ol），并且门牌编号必须从最靠近户主的一端数起；其余低职级基团全部写成词头前缀，乖乖按英文字母顺序（alphabetical order）排队！'
      },
      coreExplanation: `
        <h4>1. 官能团 —— 反应活性中心（Functional groups as centres of reactivity）</h4>
        <p>在有机化合物中，饱和碳氢骨架通常相当稳定，而决定分子主要化学性质的特定原子或原子团称为 <span class="term">官能团 <span class="en">functional group</span></span>，它是分子发生化学反应的<strong>反应活性中心（centre of reactivity）</strong>。含有相同官能团且通式相同的化合物归入同一 <span class="term">同系物 <span class="en">homologous series</span></span>。</p>

        <h4>2. HKDSE 官能团命名优先顺序总表（IUPAC Priority Order）</h4>
        <p>当一个碳化合物含有多于一种官能团时，<strong>优先序最高的主官能团（principal functional group）</strong>决定名称的<strong>词尾后缀（suffix）</strong>，且主碳链编号必须使主官能团获得<strong>最小位次数字（lowest possible locant）</strong>：</p>
        <table class="chem-table">
          <thead>
            <tr>
              <th>优先级</th>
              <th>同系物（Homologous series）</th>
              <th>官能团结构</th>
              <th>作主官能团词尾（Suffix）</th>
              <th>作次要取代基词头（Prefix）</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>1（最高）</strong></td>
              <td><span class="term">羧酸 <span class="en">carboxylic acid</span></span>（及酯 / 酰胺衍生物）</td>
              <td><code>—COOH</code>（<code>—COOR'</code> / <code>—CONH₂</code>）</td>
              <td><code>-oic acid</code>（<code>-oate</code> / <code>-amide</code>）</td>
              <td>—</td>
            </tr>
            <tr>
              <td><strong>2</strong></td>
              <td><span class="term">醛 <span class="en">aldehyde</span></span></td>
              <td><code>—CHO</code></td>
              <td><code>-al</code></td>
              <td>—</td>
            </tr>
            <tr>
              <td><strong>3</strong></td>
              <td><span class="term">酮 <span class="en">ketone</span></span></td>
              <td><code>&gt;C=O</code></td>
              <td><code>-one</code></td>
              <td><code>oxo-</code>（DSE 罕见）</td>
            </tr>
            <tr>
              <td><strong>4</strong></td>
              <td><span class="term">醇 <span class="en">alcohol / alkanol</span></span></td>
              <td><code>—OH</code>（<span class="term">羟基 <span class="en">hydroxyl group</span></span>）</td>
              <td><code>-ol</code></td>
              <td><code>hydroxy-</code></td>
            </tr>
            <tr>
              <td><strong>5</strong></td>
              <td><span class="term">伯胺 <span class="en">primary amine</span></span></td>
              <td><code>—NH₂</code>（<span class="term">氨基 <span class="en">amino group</span></span>）</td>
              <td><code>-amine</code></td>
              <td><code>amino-</code></td>
            </tr>
            <tr>
              <td><strong>6</strong></td>
              <td><span class="term">烯烃 <span class="en">alkene</span></span></td>
              <td><code>&gt;C=C&lt;</code></td>
              <td><code>-ene</code></td>
              <td>—</td>
            </tr>
            <tr>
              <td><strong>7（并列最低）</strong></td>
              <td><span class="term">卤代烷 <span class="en">haloalkane</span></span> / <span class="term">烷基 <span class="en">alkyl</span></span> / <span class="term">苯基 <span class="en">phenyl</span></span></td>
              <td><code>—F, —Cl, —Br, —I</code> / <code>—R</code> / <code>—C₆H₅</code></td>
              <td>无词尾（只作词头！）</td>
              <td><code>bromo-</code>, <code>chloro-</code>, <code>fluoro-</code>, <code>iodo-</code>, <code>methyl-</code>, <code>ethyl-</code>, <code>phenyl-</code></td>
            </tr>
          </tbody>
        </table>

        <h4>3. 复杂烷烃、二烯烃（Dienes）与卤代烷（Haloalkanes）命名细节</h4>
        <ul class="chem-list">
          <li><strong>二烯烃保留元音字母 <code>'a'</code> 铁律</strong>：若主链含两个碳碳双键（<span class="term">二烯烃 <span class="en">alkadiene</span></span>），由于后缀 <code>-diene</code> 以辅音字母 <code>d</code> 开头，词干末尾必须<strong>保留字母 <code>a</code></strong>！例如 <code>CH₂=CH—CH=CH₂</code> 必须写为 <strong><code>buta-1,3-diene</code></strong>（绝不可漏写 <code>a</code> 写成 <code>but-1,3-diene</code>）。</li>
          <li><strong>卤代烷（haloalkanes）纯前缀与英文字母排序</strong>：卤素原子与烷基同级，一律作前缀（<code>bromo-</code>、<code>chloro-</code>、<code>fluoro-</code>、<code>iodo-</code>）。多种不同前缀并列时，<strong>严格按基团英文首字母顺序排列，且忽略表示数目的 <code>di-</code>、<code>tri-</code>、<code>tetra-</code></strong>！例如 <code>CH₂Br—CHCl₂</code> 中，先满足最低位次组合（<code>1,1,2</code> 优于 <code>1,2,2</code>），再按 <code>'b'</code>（<code>bromo</code>）先于 <code>'c'</code>（<code>chloro</code>，忽略 <code>di-</code>）写出：<strong><code>2-bromo-1,1-dichloroethane</code></strong>。</li>
          <li><strong>两端位次完全相同时才用字母序决胜</strong>：例如 <code>BrCH₂CH₂CH₂Cl</code> 从左数与从右数位次集合都是 <code>(1,3)</code>，此时优先给字母靠前的 <code>bromo-</code> 更小号，命名为 <strong><code>1-bromo-3-chloropropane</code></strong>。</li>
          <li><strong>芳香族苯基（phenyl group, <code>—C₆H₅</code>）认知</strong>：苯（<span class="term">苯 <span class="en">benzene</span></span>, <code>C₆H₆</code>）脱去一个氢原子成为 <code>phenyl-</code>（<code>—C₆H₅</code>），例如 <code>C₆H₅CH=CH₂</code> 命名为 <strong><code>phenylethene</code></strong>（苯乙烯 styrene）。</li>
        </ul>

        <h4>4. 醇（Alcohols / Alkanols）的命名、多元醇拼写与 1° / 2° / 3° 分类</h4>
        <ul class="chem-list">
          <li><strong>单羟基醇与不饱和醇</strong>：把对应烷烃词尾的 <code>-e</code> 改为 <strong><code>-ol</code></strong>（碳数 ≥ 3 时必须标明位次，如 <code>propan-1-ol</code>、<code>propan-2-ol</code>）。当分子同时含 <code>—OH</code> 和 <code>C=C</code> 时，<strong><code>—OH</code> 优先级高于 <code>C=C</code></strong>，编号必须优先让 <code>—OH</code> 数字最小！例如 <code>CH₂=CH—CH₂OH</code> 命名为 <strong><code>prop-2-en-1-ol</code></strong>；<code>CH₃—CH=CH—CH₂OH</code> 为 <strong><code>but-2-en-1-ol</code></strong>。</li>
          <li><strong>多元醇（polyhydric alcohols）保留元音 <code>'e'</code> 铁律</strong>：含两个或三个 <code>—OH</code> 时用 <code>-diol</code>、<code>-triol</code>，因 <code>d</code>、<code>t</code> 为辅音字母，<strong>烷烃词尾的 <code>'e'</code> 必须保留</strong>！必背两大实例：防冻剂 <code>HOCH₂CH₂OH</code> = <strong><code>ethane-1,2-diol</code></strong>；甘油 <code>HOCH₂CH(OH)CH₂OH</code> = <strong><code>propane-1,2,3-triol</code></strong>。</li>
          <li><strong>伯醇（1°）、仲醇（2°）、叔醇（3°）精准判别法（Unit 31 氧化反应的生死线！）</strong>：只盯住<strong>直接连着 <code>—OH</code> 的那颗碳原子（<code>C—OH</code> carbon）</strong>，数它直接连接了几个烷基 / 碳原子（<code>R</code>）：
            <br>• <span class="term">伯醇 / 一级醇 <span class="en">primary (1°) alcohol</span></span>：<code>C—OH</code> 碳上只连 <strong>0 或 1 个碳原子</strong>（即含特征端基 <code>—CH₂OH</code>，以及甲醇 <code>CH₃OH</code>），如 <code>propan-1-ol</code>、<code>2-methylpropan-1-ol</code>。
            <br>• <span class="term">仲醇 / 二级醇 <span class="en">secondary (2°) alcohol</span></span>：<code>C—OH</code> 碳直接连接 <strong>2 个碳原子</strong>（含 <code>—CH(OH)—</code>），如 <code>propan-2-ol</code>、<code>butan-2-ol</code>、<code>cyclohexanol</code>。
            <br>• <span class="term">叔醇 / 三级醇 <span class="en">tertiary (3°) alcohol</span></span>：<code>C—OH</code> 碳直接连接 <strong>3 个碳原子</strong>（<code>—C(OH)(R)(R')—</code>，该碳上<strong>没有任何直接相连的 H 原子</strong>！），如 <code>2-methylpropan-2-ol</code>。
          </li>
        </ul>

        <div class="struct-card">
          <pre class="struct-pre">① 1° alcohol (伯醇)            ② 2° alcohol (仲醇)            ③ 3° alcohol (叔醇)
     CH₃                            H                              CH₃
      |                             |                               |
CH₃—CH—CH₂—OH              CH₃—CH₂—C—OH                       CH₃—C—OH
                                    |                               |
2-methylpropan-1-ol                CH₃                             CH₃
(仍有 —CH₂OH，必属 1°！)         butan-2-ol                  2-methylpropan-2-ol</pre>
          <div class="struct-cap">C₄H₉OH 醇异构体的 1° / 2° / 3° 对比：切勿看见分子有支链就误判为叔醇，一切只看连着 —OH 的那颗碳！</div>
        </div>

        <div class="callout callout-warn">
          <strong>⚠️ 课本拼写与格式红线：</strong>数字与数字之间用<strong>逗号 <code>,</code></strong>，数字与英文字母之间必须用<strong>连字符 <code>-</code></strong>，词头与母体名之间<strong>不留空格</strong>（例如 <code>2-bromo-3-methylbutane</code>）。特别谨记保留字母：<code>buta-1,3-diene</code>（保留 <code>a</code>）与 <code>ethane-1,2-diol</code>（保留 <code>e</code>）是 HKEAA 阅卷严查的拼写扣分点！
        </div>
      `,
      textbookFormulas: [
        {
          label: '卤代烷最低位次 + 字母序规则（Haloalkane naming）',
          equationHtml: `CH<sub>2</sub>Br—CHCl<sub>2</sub> &nbsp;⟶&nbsp; <strong>2-bromo-1,1-dichloroethane</strong> &nbsp;（位次 1,1,2 最小；排字母看 b 先于 c，忽略 di-）`,
          note: '卤素一律作前缀 bromo-, chloro-, fluoro-, iodo-，绝无词尾。'
        },
        {
          label: '不饱和醇主官能团优先规则（Unsaturated alcohol priority）',
          equationHtml: `CH<sub>3</sub>—CH=CH—CH(OH)—CH<sub>3</sub> &nbsp;⟶&nbsp; <strong>pent-3-en-2-ol</strong>`,
          note: '羟基（—OH）优先序高于碳碳双键（C=C），从右端编号使 —OH 获得更小号 2。'
        },
        {
          label: '二烯烃与多元醇元音保留（Vowel retention in dienes & diols）',
          equationHtml: `CH<sub>2</sub>=CH—CH=CH<sub>2</sub> : <strong>buta-1,3-diene</strong> &nbsp;|&nbsp; HOCH<sub>2</sub>CH<sub>2</sub>OH : <strong>ethane-1,2-diol</strong>`,
          note: '后缀以辅音 d 或 t 开头（-diene, -diol, -triol）时，词干末尾的 a 或 e 必须保留！'
        }
      ],
      examTrap: '最高频两大丢分坑：① 把 (CH₃)₂CHCH₂OH（2-methylpropan-1-ol）误判为叔醇（tertiary alcohol）——其实它连着羟基（—OH）的碳仍然是 —CH₂OH，只连了 1 个碳原子，属于正宗的伯醇（primary alcohol）！② 拼写 ethane-1,2-diol 时漏掉中间的字母 e 写成 ethan-1,2-diol，在 HKDSE 命名题直接扣分。',
      relations: [
        {
          type: 'buildsOn',
          targetUnitId: 'u26',
          label: '承接 Unit 26：直链/支链烷烃（alkanes）与烯烃（alkenes）基础 IUPAC 命名法',
          why: 'Unit 26 建立了最长碳链与最小支链编号基础，本节将其升级为多官能团优先序体系。'
        },
        {
          type: 'leadsTo',
          targetUnitId: 'u31',
          label: '铺垫 Unit 31：伯醇（1°）、仲醇（2°）、叔醇（3°）的氧化反应（oxidation）分水岭',
          why: '1° 醇氧化生成醛再变羧酸，2° 醇氧化生成酮，而 3° 醇抗拒温和氧化——必须先在 Unit 29 秒判醇的级别！'
        }
      ],
      questions: [
        {
          id: 'u29-s1-q1',
          level: 1,
          levelTag: 'Level 1 · 中文直觉破冰',
          type: 'mcq',
          stem: '判断醇的级别（1° / 2° / 3°）时，只需观察直接连接羟基（—OH）的那颗碳原子。请问化合物 (CH₃)₂CHCH₂OH（2-methylpropan-1-ol）属于哪一类醇（alcohol）？',
          cueWords: [],
          options: [
            'A. 伯醇 / 一级醇（primary alcohol, 1°）',
            'B. 仲醇 / 二级醇（secondary alcohol, 2°）',
            'C. 叔醇 / 三级醇（tertiary alcohol, 3°）',
            'D. 二元醇（diol）'
          ],
          answerIndex: 0,
          hint: '不要被左边的 (CH₃)₂CH— 支链迷惑！把结构展开看最右端：—CH₂—OH，连着 —OH 的碳原子上连了几个碳、几个氢？',
          explanation: '在 (CH₃)₂CH—CH₂—OH 中，直接连接羟基（hydroxyl group, —OH）的碳原子是末端的 —CH₂OH 碳，它只直接连接了 1 个碳原子（即异丙基上的 CH 碳）和 2 个氢原子，因此严格属于伯醇（primary alcohol, 1°）。',
          commonMistake: '一看到分子式里有括号 (CH₃)₂CH— 或名称里有 methyl 就盲目选叔醇（3°）或仲醇（2°），忘了只数 C—OH 碳直接相连的碳原子数。'
        },
        {
          id: 'u29-s1-q2',
          level: 2,
          levelTag: 'Level 2 · 中英过渡实战',
          type: 'mcq',
          stem: 'What is the systematic IUPAC name of the unsaturated halo-alcohol ClCH₂CH=CHCH₂OH?（提示：比较 —OH、C=C 与 —Cl 的命名优先序！）',
          cueWords: [
            { phrase: 'systematic IUPAC name', zh: '系统 IUPAC 名称', concept: '严格检查主官能团后缀、最低编号方向、连字符与字母拼写' },
            { phrase: 'ClCH₂CH=CHCH₂OH', zh: '含氯与双键的伯醇', concept: '优先序：—OH (C-1) > C=C > —Cl，故从右向左编号 1 至 4' }
          ],
          options: [
            'A. 1-chlorobut-2-en-4-ol',
            'B. 4-chlorobut-2-en-1-ol',
            'C. 4-chlorobut-2-ene-1-ol',
            'D. 1-hydroxy-4-chlorobut-2-ene'
          ],
          answerIndex: 1,
          hint: '在 —OH、C=C 和 —Cl 三者之中，谁的职级最高？从哪一端编号才能让主官能团拿到 1 号位？',
          explanation: '根据 IUPAC 优先顺序，羟基（—OH）高于碳碳双键（C=C）和氯原子（—Cl），因此母体词尾为 -ol，从最右端 —CH₂OH 开始编号为 C-1：双键位于 C-2 与 C-3 之间（but-2-en-1-ol，注意后缀 -ol 以元音 o 开头，故去掉 ene 末尾的 e），氯原子位于 C-4，完整名称为 4-chlorobut-2-en-1-ol。',
          commonMistake: '误选 C（多写了字母 e：单醇后缀 -ol 以元音字母 o 开头需省去 e；只有 -diol 以辅音 d 开头才保留 e！）或误选 A（从卤素端开始编号）。'
        },
        {
          id: 'u29-s1-q3',
          level: 3,
          levelTag: 'Level 3 · HKDSE 全英文实战',
          type: 'structured',
          stem: 'Give the systematic IUPAC names of the following three carbon compounds:\n(a) CH₃CH(Br)CH(Cl)CH₃\n(b) CH₂=C(CH₃)CH=CH₂\n(c) HOCH₂CH(OH)CH₂OH',
          cueWords: [
            { phrase: 'systematic IUPAC names', zh: '系统 IUPAC 名称', concept: '注意字母排序、连字符及二烯/多元醇元音保留规则' },
            { phrase: 'CH₃CH(Br)CH(Cl)CH₃', zh: '2,3-二卤代丁烷', concept: '两端编号位次同为 (2,3) 时，按字母序 bromo 优先拿 2 号位' },
            { phrase: 'CH₂=C(CH₃)CH=CH₂', zh: '含支链共轭二烯烃', concept: '双键同为 (1,3) 时使甲基支链位次更小，且保留 buta- 的 a' }
          ],
          hint: '(a) 两端数都是 2,3 位，bromo 和 chloro 谁按英文字母排前面？(b) 二烯烃词干是 but- 还是 buta-？甲基在 2 号还是 3 号？(c) 三个羟基用 -triol，propane 末尾的 e 留不留？',
          explanation: '(a) 主链 4 碳（butane），从左数与从右数取代基位次组合均为 (2,3)；按英文字母顺序 bromo 先于 chloro，因此给 bromo 较小的 2 号位：2-bromo-3-chlorobutane。\n(b) 主链含两个双键（1,3 位），从左端编号可同时让双键在 (1,3) 且甲基支链拿到更小的 2 号位；后缀 -diene 前必须保留字母 a：methylbuta-1,3-diene（或 2-methylbuta-1,3-diene）。\n(c) 含三个羟基的三元醇，后缀 -triol 以辅音 t 开头，必须保留 propane 末尾的 e：propane-1,2,3-triol。',
          markingScheme: [
            '1M: (a) 2-bromo-3-chlorobutane (reject 3-bromo-2-chlorobutane)',
            '1M: (b) methylbuta-1,3-diene OR 2-methylbuta-1,3-diene (must keep "a" in "buta")',
            '1M: (c) propane-1,2,3-triol (must keep "e" in "propane")'
          ],
          commonMistake: '(a) 写成 3-bromo-2-chlorobutane（忘了位次平手时按字母顺序赋小号）；(b) 漏掉 a 写成 2-methylbut-1,3-diene；(c) 漏掉 e 写成 propan-1,2,3-triol。'
        }
      ]
    },

    // ------------------------------------------------------------------------
    // u29-s2: 29.6 - 29.10
    // ------------------------------------------------------------------------
    {
      id: 'u29-s2',
      code: '29.6–29.10',
      titleEn: 'Naming carbonyl & nitrogen-containing series: Aldehydes, ketones, acids, esters, amides & amines',
      titleZh: '羰基与含氮同系物命名精讲：醛、酮、羧酸、酯（拆键大法）、酰胺与胺',
      analogy: {
        icon: '✂️',
        title: '酯（Ester）命名就像“拆联名礼盒”：找准 C—O 单键一刀剪开！',
        body: '很多同学一遇到酯（ester, RCOOR\'）正着写 CH₃CH₂COOCH₃ 或反着写 CH₃OOCCH₂CH₃ 就头晕。其实秘诀只有一招：酯是由羧酸（carboxylic acid）和醇（alcohol）脱水拼起来的“联名款”。不管结构式怎么翻转，先找到酯基（ester group, —COO—）里的碳氧单键（C—O single bond）一刀剪开！只连在单键氧（—O—）上的那半截（R\'—）来自醇，放前面叫 alkyl（如 methyl）；带着双键羰基（C=O）的那半截（RCOO—，记得把 C=O 这颗碳也算进去！）来自羧酸，放后面把 -oic acid 改成 -oate（如 propanoate），合起来就是 methyl propanoate，百发百中！'
      },
      coreExplanation: `
        <h4>1. 醛（Aldehydes / Alkanals）与酮（Ketones / Alkanones）（29.6）</h4>
        <p>两者均含有 <span class="term">羰基 <span class="en">carbonyl group</span></span>（<code>&gt;C=O</code>），但位置截然不同：</p>
        <ul class="chem-list">
          <li><strong>醛（<span class="term">醛 / 烷醛 <span class="en">aldehydes / alkanals</span></span>，<code>R—CHO</code>）</strong>：羰基碳至少连有 1 个氢原子，必然位于<strong>碳链最末端（固定为 <code>C-1</code>）</strong>。把烷烃末尾 <code>-e</code> 换成 <strong><code>-al</code></strong>，且<strong>无需标位次 1</strong>！例如：<code>HCHO</code>（<code>methanal</code>）、<code>CH₃CHO</code>（<code>ethanal</code>）、<code>CH₃CH₂CHO</code>（<code>propanal</code>）、<code>(CH₃)₂CHCHO</code>（<code>methylpropanal</code> / <code>2-methylpropanal</code>）、<code>C₆H₅CHO</code>（<code>benzaldehyde</code> 苯甲醛）。<br><em>书写铁律：醛基简写永远是 <strong><code>—CHO</code></strong>，严禁写成 <code>—COH</code>（易与醇混淆扣分）！</em></li>
          <li><strong>酮（<span class="term">酮 / 烷酮 <span class="en">ketones / alkanones</span></span>，<code>R—CO—R'</code>）</strong>：羰基碳夹在<strong>碳链内部</strong>（两侧均连碳原子）。把烷烃末尾 <code>-e</code> 换成 <strong><code>-one</code></strong>：
            <br>• <strong>3 碳与 4 碳酮无需标位次</strong>：<code>CH₃COCH₃</code> = <strong><code>propanone</code></strong>；<code>CH₃COCH₂CH₃</code> = <strong><code>butanone</code></strong>（内部羰基只有唯一位置，写 <code>butan-2-one</code> 会因冗余编号被扣分！）。
            <br>• <strong>碳数 ≥ 5 时必须标明位次</strong>：<code>CH₃COCH₂CH₂CH₃</code> = <strong><code>pentan-2-one</code></strong> vs <code>CH₃CH₂COCH₂CH₃</code> = <strong><code>pentan-3-one</code></strong>；芳香酮如 <code>C₆H₅COCH₃</code> = <code>phenylethanone</code>。
          </li>
        </ul>

        <h4>2. 羧酸（Carboxylic acids / Alkanoic acids）（29.7）</h4>
        <ul class="chem-list">
          <li>含 <span class="term">羧基 <span class="en">carboxyl group</span></span>（<code>—COOH</code>），拥有<strong>最高命名优先权，羧基碳永远是 <code>C-1</code></strong>（不标数字 1）。将烷烃词尾 <code>-e</code> 改为 <strong><code>-oic acid</code></strong>（注意中间有空格！）：<code>HCOOH</code>（<code>methanoic acid</code>）、<code>CH₃COOH</code>（<code>ethanoic acid</code>）、<code>CH₂=CHCOOH</code>（<code>propenoic acid</code>）、<code>C₆H₅COOH</code>（<code>benzoic acid</code> 苯甲酸）。</li>
          <li><strong>二元羧酸（dioic acids）</strong>：词干保留 <code>e</code> + <code>-dioic acid</code>，且<strong>两端两个 <code>—COOH</code> 的碳原子全部计入主链总碳数</strong>！例如草酸 <code>HOOC—COOH</code> = <strong><code>ethanedioic acid</code></strong>（共 2 碳）；尼龙单体 <code>HOOC—(CH₂)₄—COOH</code> = <strong><code>hexanedioic acid</code></strong> / <strong><code>hexane-1,6-dioic acid</code></strong>（中间 4 个 <code>CH₂</code> 加两端 2 个 <code>COOH</code>，总共 6 碳！）。</li>
        </ul>

        <h4>3. 酯（Esters, <code>RCOOR'</code>）—— 正写反写双向秒杀拆键法（29.8）</h4>
        <p><span class="term">酯 <span class="en">ester</span></span> 含有 <span class="term">酯基 <span class="en">ester group</span></span>（<code>—COO—</code>），由羧酸（<code>RCOOH</code>）与醇（<code>R'OH</code>）缩合而成，名称由<strong>两个独立英文单词</strong>组成：<strong><code>alkyl alkanoate</code></strong>。</p>
        <div class="struct-card">
          <pre class="struct-pre">【正写结构】  CH₃—CH₂—C(=O)  |  O—CH₃          【反写陷阱！】  CH₃—O  |  C(=O)—CH₂—CH₃
              └──── 3碳酸 ────┘  └─1碳醇─┘                    └─1碳醇─┘  └──── 3碳酸 ────┘
                 propanoate       methyl                        methyl       propanoate
         ══▶ 名称均为：methyl propanoate （丙酸甲酯！切勿把反写误看成 ethyl ethanoate 或 ethyl propanoate！）</pre>
          <div class="struct-cap">一刀切口诀：找准单键氧 —O— 剪断！纯连单键氧的一侧变 alkyl（放第一词）；带 C=O 双键的一侧连同羰基碳一起数总碳数变 alkanoate（放第二词）！</div>
        </div>
        <ul class="chem-list">
          <li><strong>由名称反推结构式（Reverse-drawing from name）</strong>：例如题目给出 <strong><code>propyl methanoate</code></strong>：第二词 <code>methanoate</code> 代表 1 碳甲酸根 <code>HCOO—</code>，第一词 <code>propyl</code> 代表连在单键氧上的 3 碳丙基 <code>—CH₂CH₂CH₃</code>，拼合即得 <strong><code>HCOOCH₂CH₂CH₃</code></strong>（若为 <code>C₆H₅COOCH₃</code> 则为 <code>methyl benzoate</code>；<code>CH₃COOC₆H₅</code> 则为 <code>phenyl ethanoate</code>）。</li>
        </ul>

        <h4>4. 未取代酰胺（Unsubstituted amides）与伯胺（Primary amines）（29.9–29.10）</h4>
        <table class="chem-table">
          <thead>
            <tr>
              <th>同系物（Series）</th>
              <th>官能团与编号法则</th>
              <th>典型实例（结构式 ⟶ IUPAC 标准名称）</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><span class="term">未取代酰胺 <span class="en">unsubstituted amide</span></span></td>
              <td><code>—CONH₂</code>（羰基碳固定为 <code>C-1</code>，去 <code>-e</code> 加 <strong><code>-amide</code></strong>）</td>
              <td><code>HCONH₂</code> ⟶ <strong><code>methanamide</code></strong><br><code>CH₃CONH₂</code> ⟶ <strong><code>ethanamide</code></strong><br><code>CH₃CH₂CONH₂</code> ⟶ <strong><code>propanamide</code></strong><br><code>C₆H₅CONH₂</code> ⟶ <strong><code>benzamide</code></strong></td>
            </tr>
            <tr>
              <td><span class="term">伯胺 <span class="en">primary amine</span></span><br>（无更高优先级基团时）</td>
              <td><code>—NH₂</code>（去 <code>-e</code> 加 <strong><code>-amine</code></strong>；C ≥ 3 标位次；二胺保留 <code>e</code> 加 <code>-diamine</code>）</td>
              <td><code>CH₃CH₂NH₂</code> ⟶ <strong><code>ethanamine</code></strong><br><code>CH₃CH₂CH₂NH₂</code> ⟶ <strong><code>propan-1-amine</code></strong><br><code>CH₃CH(NH₂)CH₃</code> ⟶ <strong><code>propan-2-amine</code></strong><br><code>H₂N(CH₂)₆NH₂</code> ⟶ <strong><code>hexane-1,6-diamine</code></strong></td>
            </tr>
            <tr>
              <td><strong>含高优先级基团时的 <code>—NH₂</code></strong></td>
              <td>遇到 <code>—COOH</code>、<code>—CHO</code>、<code>&gt;C=O</code> 或 <code>—OH</code> 时，<code>—NH₂</code> 降级为前缀 <strong><code>amino-</code></strong>！</td>
              <td><code>H₂NCH₂COOH</code> ⟶ <strong><code>aminoethanoic acid</code></strong><br><code>CH₃CH(NH₂)COOH</code> ⟶ <strong><code>2-aminopropanoic acid</code></strong><br><code>H₂NCH₂CH₂CH₂OH</code> ⟶ <strong><code>3-aminopropan-1-ol</code></strong></td>
            </tr>
          </tbody>
        </table>

        <div class="callout callout-tip">
          <strong>💡 区分 Amine（胺）与 Amide（酰胺）的秒看技巧：</strong>看氮原子旁边有没有紧挨着羰基 <code>C=O</code>！<code>R—CH₂—NH₂</code> 没有 <code>C=O</code>，是具弱碱性的 <span class="term">伯胺 <span class="en">primary amine</span></span>（<code>-amine</code>）；<code>R—C(=O)—NH₂</code> 紧连 <code>C=O</code>，是中性的 <span class="term">未取代酰胺 <span class="en">unsubstituted amide</span></span>（<code>-amide</code>）！
        </div>
      `,
      textbookFormulas: [
        {
          label: '酯的拆键命名通式（Ester naming rule）',
          equationHtml: `R—C(=O)—O—R' &nbsp;⟶&nbsp; <strong>alkyl</strong> (from R'OH) + <strong>alkanoate</strong> (from RCOOH, counting C=O carbon)`,
          note: '例：HCOOCH₂CH₃ ⟶ ethyl methanoate（甲酸乙酯，酸部仅 1 碳！）；CH₃CH₂OOCCH₃ ⟶ ethyl ethanoate。'
        },
        {
          label: '酮位次标注分界线（Ketone locant boundary）',
          equationHtml: `CH<sub>3</sub>COCH<sub>2</sub>CH<sub>3</sub> : <strong>butanone</strong> (NO locant!) &nbsp;|&nbsp; CH<sub>3</sub>COCH<sub>2</sub>CH<sub>2</sub>CH<sub>3</sub> : <strong>pentan-2-one</strong>`,
          note: 'C₃、C₄ 酮无位置异构，不加数字；C₅ 及以上酮必须标明 2-one 或 3-one。'
        },
        {
          label: '氨基酸双官能团命名（Amino group as prefix）',
          equationHtml: `CH<sub>3</sub>—CH(NH<sub>2</sub>)—COOH &nbsp;⟶&nbsp; <strong>2-aminopropanoic acid</strong>`,
          note: '—COOH 优先级最高作母体 -oic acid（C-1），—NH₂ 降为前缀 amino-。'
        }
      ],
      examTrap: '三大高频命名陷阱：① 反写酯 CH₃CH₂OOCCH₂CH₂CH₃ 中，—OOC— 表示氧在左、羰基 C=O 在右（即 CH₃CH₂—O—C(=O)—CH₂CH₂CH₃），正确名称是 ethyl butanoate，若不画开 C=O 极易写反成 propyl propanoate 或 butyl propanoate！② 甲酸酯 HCOOR\' 的酸部只有 1 个碳（methanoate），切勿漏看 H 直接连在 C=O 上。③ 给丁酮写成 butan-2-one 会被扣分，标准写法只能是 butanone！',
      relations: [
        {
          type: 'leadsTo',
          targetUnitId: 'u31',
          label: '铺垫 Unit 31 & 32：酯化反应（esterification）与酯/酰胺的水解反应（hydrolysis）',
          why: '今天剪断酯 C—O 单键认清醇部与酸部，到了 Unit 31 写酯的水解产物就能一秒拆回对应的醇与羧酸（或羧酸盐）！'
        },
        {
          type: 'leadsTo',
          targetUnitId: 'u33',
          label: '铺垫 Unit 33：缩聚物尼龙-6,6（Nylon-6,6）的二酸与二胺单体名称',
          why: 'Unit 33 必背单体 hexane-1,6-dioic acid 与 hexane-1,6-diamine 正是本节保留元音 e 规则的直接应用。'
        }
      ],
      questions: [
        {
          id: 'u29-s2-q1',
          level: 1,
          levelTag: 'Level 1 · 中文直觉破冰',
          type: 'mcq',
          stem: '小心“反写酯”陷阱！化合物 CH₃OOCCH₂CH₃（即 CH₃—O—C(=O)—CH₂CH₃）的正确系统名称（IUPAC name）是什么？',
          cueWords: [],
          options: [
            'A. ethyl propanoate（丙酸乙酯）',
            'B. methyl propanoate（丙酸甲酯）',
            'C. propyl methanoate（甲酸丙酯）',
            'D. methyl butanoate（丁酸甲酯）'
          ],
          answerIndex: 1,
          hint: '沿着单键氧 —O— 一刀切开：左边纯连在氧上的是 CH₃—（1 个碳，来自甲醇 methanol）；右边带 C=O 双键的是 —C(=O)CH₂CH₃（连同羰基碳共 3 个碳，来自丙酸 propanoic acid）！',
          explanation: '将 CH₃—O—C(=O)—CH₂CH₃ 从 C—O 单键处拆开：连在单键氧上的烷基 R\' 为甲基 methyl（1 碳）；含 C=O 双键的酰基部分共有 1 + 2 = 3 个碳原子，对应丙酸根 propanoate。因此 IUPAC 名称为 methyl propanoate。',
          commonMistake: '不展开 —OOC— 就凭视觉把左边 CH₃OOC 当成酸、右边 CH₂CH₃ 当成乙基，误选 A 或 C。'
        },
        {
          id: 'u29-s2-q2',
          level: 2,
          levelTag: 'Level 2 · 中英过渡实战',
          type: 'mcq',
          stem: 'Which of the following pairs of structural formula and systematic IUPAC name is INCORRECT?',
          cueWords: [
            { phrase: 'systematic IUPAC name', zh: '系统 IUPAC 名称', concept: '逐一核对主官能团选择、是否冗余编号、酰胺 vs 胺后缀' },
            { phrase: 'INCORRECT', zh: '不正确的一项', concept: '警惕 butan-2-one 等冗余位次或 -COH / 优先序错误' }
          ],
          options: [
            'A. HCOOCH(CH₃)₂  —  1-methylethyl methanoate',
            'B. CH₃COCH₂CH₃  —  butan-2-one',
            'C. CH₃CH₂CONH₂  —  propanamide',
            'D. H₂NCH₂CH₂COOH  —  3-aminopropanoic acid'
          ],
          answerIndex: 1,
          hint: '检查 4 个碳的酮（ketone）：羰基（>C=O）放进 4 碳链内部时，有没有别的摆法？需不需要写“-2-”？',
          explanation: 'B 不正确！在四碳酮 CH₃COCH₂CH₃ 中，酮羰基必须位于链内部（C-2 与 C-3 等价），只有唯一一种结构，标准 IUPAC 名称为 butanone（冗余加上 -2- 写成 butan-2-one 不符合 HKEAA 规范）。A 为甲酸异丙酯（1-methylethyl methanoate），C 为丙酰胺（propanamide），D 中 —COOH 为 C-1、氨基在 C-3（3-aminopropanoic acid），三者均完全正确。',
          commonMistake: '误以为所有酮都必须加位次数字，忽略了 propanone 和 butanone 不允许加冗余数字的特例。'
        },
        {
          id: 'u29-s2-q3',
          level: 3,
          levelTag: 'Level 3 · HKDSE 全英文实战',
          type: 'structured',
          stem: 'Write the systematic IUPAC name or structural formula as required:\n(a) Give the systematic IUPAC name of (CH₃)₂CHCH₂CHO.\n(b) Give the systematic IUPAC name of CH₃CH(OH)CH₂COOH.\n(c) Draw the condensed structural formula of ethyl 2-methylpropanoate.',
          cueWords: [
            { phrase: '(CH₃)₂CHCH₂CHO', zh: '含支链的醛', concept: '醛基 —CHO 固定为 C-1，无需写 -1-al，向另一端数主链找甲基位次' },
            { phrase: 'CH₃CH(OH)CH₂COOH', zh: '同时含羟基与羧基', concept: '—COOH 优先级最高作 -oic acid (C-1)，—OH 降级为前缀 hydroxy-' },
            { phrase: 'ethyl 2-methylpropanoate', zh: '2-甲基丙酸乙酯', concept: '酸部 2-methylpropanoate 为 (CH₃)₂CHCOO—，醇部 ethyl 为 —CH₂CH₃' }
          ],
          hint: '(a) —CHO 的碳是 1 号碳，主链最长几个碳？甲基在几号位？(b) —COOH 坐镇 1 号位时，—OH 叫什么前缀？(c) 先写出 2-methylpropanoic acid 的结构，再把羧基上的 H 换成 ethyl（—CH₂CH₃）！',
          explanation: '(a) 醛基碳为 C-1，最长含 —CHO 碳链共 4 个碳（butanal），甲基连接在 C-3 上，故为 3-methylbutanal。\n(b) —COOH 优先级高于 —OH，羧基碳为 C-1，主链 4 碳为 butanoic acid，C-3 上的羟基作前缀 hydroxy-，故为 3-hydroxybutanoic acid。\n(c) 酸部 2-methylpropanoate 结构为 (CH₃)₂CHCOO—（C-1 为酯羰基碳，C-2 带甲基），单键氧连乙基 —CH₂CH₃，拼合得 (CH₃)₂CHCOOCH₂CH₃。',
          markingScheme: [
            '1M: (a) 3-methylbutanal (reject 3-methylbutan-1-al or 2-methylbutanal)',
            '1M: (b) 3-hydroxybutanoic acid',
            '1M: (c) (CH₃)₂CHCOOCH₂CH₃ OR CH₃CH(CH₃)COOCH₂CH₃'
          ],
          commonMistake: '(a) 从左端甲基开始编号写成 2-methylbutanal，或画蛇添足写 3-methylbutan-1-al；(b) 把羟基当后缀写成羧基前缀；(c) 把乙基和异丁酰基位置接反写成 CH₃CH₂COOCH(CH₃)₂。'
        }
      ]
    },

    // ------------------------------------------------------------------------
    // u29-s3: 29.11 (Part A)
    // ------------------------------------------------------------------------
    {
      id: 'u29-s3',
      code: '29.11 (Part A)',
      titleEn: 'Intermolecular forces and boiling point trends across homologous series',
      titleZh: '各大同系物的分子间作用力与沸点高低总规律（氢键 vs 二聚体 vs 范德华力）',
      svgId: 'svg-hydrogen-bonding-bp',
      svgCaption: '图解：左图展示醇（alcohol）分子间形成的氢键（hydrogen bond）；右图展示羧酸（carboxylic acid）每两个分子通过两条氢键配对缔合成二聚体（dimer），氢键程度更广泛，故同近相对分子质量下羧酸沸点高于醇。',
      analogy: {
        icon: '🧲',
        title: '烧开液体就像“拆散手拉手的人群”：牵手越多越紧，沸点越高！',
        body: '把分子烧开变成气体（boiling），绝不是砍断人身上的骨头（分子内共价键 covalent bonds 纹丝不动！），而是把挤在一起的分子拉开，克服分子间作用力（intermolecular forces）：烷烃（alkanes）像穿光滑衣服的路人，只靠微弱的范德华力（van der Waals\' forces）擦肩而过，一吹就散（沸点最低）；醛、酮、酯、卤代烷像带小磁铁的极性分子（polar molecules），范德华力稍强，但没法十指紧扣；醇（alcohols）有一只手能十指紧扣形成强力的氢键（hydrogen bond）；羧酸（carboxylic acids）更厉害，面对面双手紧扣结成双氢键“二聚体”（dimer）；而未取代酰胺（unsubstituted amides）一个分子有两个 N—H 氢和强极性 C=O 氧，能跟四面八方的邻居拉起立体氢键大网，荣登沸点总冠军！'
      },
      coreExplanation: `
        <h4>1. 相近相对分子质量（Comparable Relative Molecular Masses）下的沸点总排名</h4>
        <p>比较不同同系物的沸点时，必须先固定前提：<strong>相对分子质量相近（comparable relative molecular masses，<i>M</i><sub>r</sub> ≈ 58–60）</strong>，此时各分子的基础电子云大小相近，沸点高低完全取决于 <span class="term">氢键 <span class="en">hydrogen bonds</span></span> 的有无与广泛程度，以及分子极性带来的 <span class="term">范德华力 <span class="en">van der Waals' forces</span></span> 强弱：</p>

        <div class="struct-card">
          <pre class="struct-pre">【同近相对分子质量沸点黄金铁律】
Unsubstituted amide &gt; Carboxylic acid &gt; Alcohol &gt; Primary amine ≈ Ketone / Aldehyde / Ester / Haloalkane &gt; Alkane / Alkene
(三维广泛氢键网络)    (双氢键二聚体 dimer) (O—H氢键)  (较弱N—H氢键)    (极性分子：较强范德华力，无分子间氢键！)   (非极性：微弱范德华力)</pre>
          <div class="struct-cap">注：生成分子间氢键必须同时具备直接连在 F、O、N 上的 δ+ 氢原子，以及带孤对电子的电负性 F、O、N 原子！</div>
        </div>

        <table class="chem-table">
          <thead>
            <tr>
              <th>排名</th>
              <th>代表化合物与同系物</th>
              <th><i>M</i><sub>r</sub></th>
              <th>沸点（b.p.）</th>
              <th>分子间作用力本质剖析（HKDSE 标准采分逻辑）</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>1</strong></td>
              <td><code>CH₃CONH₂</code><br><code>ethanamide</code>（<span class="term">未取代酰胺 <span class="en">unsubstituted amide</span></span>）</td>
              <td>59.0</td>
              <td><strong>221 °C</strong><br>（常温固体）</td>
              <td>每个 <code>—CONH₂</code> 含<strong>两个极性 <code>N—H</code> 键</strong>及高电负性 <code>C=O</code> 氧原子，分子间能形成<strong>极为广泛的氢键网络（extensive intermolecular hydrogen bonds）</strong>。</td>
            </tr>
            <tr>
              <td><strong>2</strong></td>
              <td><code>CH₃COOH</code><br><code>ethanoic acid</code>（<span class="term">羧酸 <span class="en">carboxylic acid</span></span>）</td>
              <td>60.0</td>
              <td><strong>118 °C</strong></td>
              <td>同时含 <code>C=O</code> 与 <code>—OH</code>，每对羧酸分子通过<strong>两条氢键缔合成二聚体（<span class="term">二聚体 <span class="en">dimer</span></span>）</strong>，氢键比醇更广泛（more extensive hydrogen bonding）。</td>
            </tr>
            <tr>
              <td><strong>3</strong></td>
              <td><code>CH₃CH₂CH₂OH</code><br><code>propan-1-ol</code>（<span class="term">醇 <span class="en">alcohol</span></span>）</td>
              <td>60.0</td>
              <td><strong>97 °C</strong></td>
              <td>极性 <code>—O—H</code> 基团使醇分子间除范德华力外，还存在较强的<strong>分子间氢键（<code>O—H···O</code>）</strong>。</td>
            </tr>
            <tr>
              <td><strong>4</strong></td>
              <td><code>CH₃CH₂CH₂NH₂</code><br><code>propan-1-amine</code>（<span class="term">伯胺 <span class="en">primary amine</span></span>）</td>
              <td>59.0</td>
              <td><strong>48 °C</strong></td>
              <td>虽能形成 <code>N—H···N</code> 氢键，但<strong>氮的电负性低于氧（N is less electronegative than O）</strong>，<code>N—H</code> 极性较弱，故<strong>伯胺分子间氢键明显弱于醇</strong>！</td>
            </tr>
            <tr>
              <td><strong>5</strong></td>
              <td><code>CH₃COCH₃</code>（<code>propanone</code>, <span class="term">酮 <span class="en">ketone</span></span>）<br><code>CH₃CH₂CHO</code>（<code>propanal</code>, <span class="term">醛 <span class="en">aldehyde</span></span>）<br><code>HCOOCH₂CH₃</code>（<code>ethyl methanoate</code>, <span class="term">酯 <span class="en">ester</span></span>）<br><code>CH₃CH₂Cl</code>（<code>chloroethane</code>, <span class="term">卤代烷 <span class="en">haloalkane</span></span>）</td>
              <td>58.0<br>58.0<br>74.0<br>64.5</td>
              <td><strong>56 °C</strong><br><strong>49 °C</strong><br><strong>54 °C</strong><br><strong>12 °C</strong></td>
              <td>分子含极性键（<code>C=O</code>、<code>C—O</code> 或 <code>C—Cl</code>），属<strong><span class="term">极性分子 <span class="en">polar molecules</span></span></strong>，范德华力强于同质量烷烃；<strong>但没有 H 直接连在 O 上，同种分子间绝无氢键（NO intermolecular hydrogen bonds）！</strong></td>
            </tr>
            <tr>
              <td><strong>6</strong></td>
              <td><code>CH₃CH₂CH₂CH₃</code><br><code>butane</code>（<span class="term">烷烃 <span class="en">alkane</span></span>）</td>
              <td>58.0</td>
              <td><strong>−0.5 °C</strong><br>（常温气体）</td>
              <td>属<strong><span class="term">非极性分子 <span class="en">non-polar molecules</span></span></strong>，分子间<strong>仅存在微弱的范德华力（weak van der Waals' forces only）</strong>。</td>
            </tr>
          </tbody>
        </table>

        <h4>2. 同一同系物内部的三大沸点变化规律</h4>
        <ul class="chem-list">
          <li><strong>① 碳链越长，沸点越高（Carbon chain length）</strong>：随着直链碳原子数增加（如 <code>methanol &lt; ethanol &lt; propan-1-ol &lt; butan-1-ol</code>），<strong>分子体积及相对分子质量增大（molecular size / relative molecular mass increases）</strong> ⟶ 分子间<strong>范德华力增强（stronger van der Waals' forces）</strong> ⟶ 沸点升高。<br><em>同理适用于卤代烷：<code>R—Cl &lt; R—Br &lt; R—I</code>（沿第 VII 族向下，卤素原子半径与电子数显著增加，分子体积变大，范德华力大幅增强，故沸点 <code>iodoalkane &gt; bromoalkane &gt; chloroalkane</code>！）。</em></li>
          <li><strong>② 支链越多，沸点越低（Branching effect among isomers）</strong>：对于同分异构体（如 <code>butan-1-ol</code> 118 °C &gt; <code>2-methylpropan-1-ol</code> 108 °C &gt; <code>2-methylpropan-2-ol</code> 82 °C），支链越多，分子形状<strong>越接近球形（more spherical）</strong> ⟶ 相邻分子间的<strong>接触面积越小（smaller area of contact）</strong> ⟶ <strong>范德华力越弱</strong> ⟶ 沸点越低。</li>
          <li><strong>③ 羟基数目越多，沸点与黏度越高（Number of <code>—OH</code> groups）</strong>：<code>propane-1,2,3-triol</code>（290 °C）&gt; <code>ethane-1,2-diol</code>（197 °C）&gt; <code>propan-1-ol</code>（97 °C），因每个分子含更多 <code>—OH</code> 基团，可形成<strong>更广泛的分子间氢键</strong>，沸点与黏度（<span class="term">黏度 <span class="en">viscosity</span></span>）均显著上升。</li>
        </ul>

        <div class="callout callout-tip">
          <strong>💡 HKDSE 比较沸点论述题（Explain difference in boiling points）满分三段式英文套路：</strong><br>
          <strong>Step 1（点明作用力种类）</strong>：State the type of intermolecular forces in Molecule A (e.g. <em>intermolecular hydrogen bonds and van der Waals' forces</em>) vs Molecule B (e.g. <em>van der Waals' forces only, no intermolecular hydrogen bonds</em>).<br>
          <strong>Step 2（比较强弱或广泛度）</strong>：State clearly that <em>the intermolecular attractions in A are stronger / more extensive than those in B</em>.<br>
          <strong>Step 3（扣住能量结论）</strong>：Conclude that <em>more heat energy is required to overcome the intermolecular forces between molecules of A during boiling</em>.
        </div>
      `,
      textbookFormulas: [
        {
          label: '同碳数卤代烷沸点递增律（Haloalkane boiling point trend）',
          equationHtml: `CH<sub>3</sub>CH<sub>2</sub>Cl (12 °C) &nbsp;&lt;&nbsp; CH<sub>3</sub>CH<sub>2</sub>Br (38 °C) &nbsp;&lt;&nbsp; CH<sub>3</sub>CH<sub>2</sub>I (72 °C)`,
          note: '关键原因不是电负性（Cl 电负性最大但沸点最低！），而是分子体积/电子数随 Cl → Br → I 剧增，导致范德华力显著增强！'
        },
        {
          label: 'C₄ 醇异构体支链沸点规律（Branching effect on alcohol b.p.）',
          equationHtml: `butan-1-ol (118 °C) &nbsp;&gt;&nbsp; 2-methylpropan-1-ol (108 °C) &nbsp;&gt;&nbsp; 2-methylpropan-2-ol (82 °C)`,
          note: '支链增多 → 分子更趋球形（more spherical） → 接触面积减小（smaller area of contact） → 范德华力减弱。'
        },
        {
          label: '羧酸与异构酯的沸点悬殊对比（Acid vs isomeric ester）',
          equationHtml: `CH<sub>3</sub>CH<sub>2</sub>COOH (propanoic acid, 141 °C) &nbsp;&gg;&nbsp; CH<sub>3</sub>COOCH<sub>3</sub> (methyl ethanoate, 57 °C)`,
          note: '两者同为 C₃H₆O₂（Mr = 74），但羧酸能形成双氢键二聚体，而酯分子间完全不能形成氢键！'
        }
      ],
      examTrap: '阅卷官零容忍的两大死穴：① 解释沸点时写出“break covalent bonds”（打断共价键）——沸腾是物理变化，只克服分子间作用力（hydrogen bonds / van der Waals\' forces），一旦写打断共价键整道解释题直接判 0 分！② 误以为 CH₃CH₂Cl 极性比 CH₃CH₂I 强所以沸点更高——恰恰相反，卤素原子体积与电子数增大带来的范德华力增幅远超键极性差异，沸点必然是 RI > RBr > RCl！',
      relations: [
        {
          type: 'buildsOn',
          targetUnitId: 'u25',
          label: '承接 Unit 25 & 26：石油烃馏分随碳链增长范德华力增强的规律',
          why: '烃类的分子大小与接触面积逻辑在所有含官能团同系物内部依然完全适用。'
        },
        {
          type: 'leadsTo',
          targetUnitId: 'u31',
          label: '决定 Unit 31 & 32 实验成败：为什么边反应边蒸馏（distillation）能单独蒸出醛（aldehyde）？',
          why: '因为醛没有分子间氢键，沸点远低于反应物伯醇（有氢键）和过度氧化产物羧酸（双氢键二聚体），所以一生成就能率先汽化逃离氧化剂！'
        }
      ],
      questions: [
        {
          id: 'u29-s3-q1',
          level: 1,
          levelTag: 'Level 1 · 中文直觉破冰',
          type: 'mcq',
          stem: '以下四种化合物的相对分子质量（relative molecular mass, Mr）都在 58–60 之间。请问哪一种在常温常压下沸点（boiling point）最高？',
          cueWords: [],
          options: [
            'A. butane（CH₃CH₂CH₂CH₃，烷烃 alkane）',
            'B. propanone（CH₃COCH₃，酮 ketone）',
            'C. propan-1-ol（CH₃CH₂CH₂OH，醇 alcohol）',
            'D. ethanamide（CH₃CONH₂，未取代酰胺 unsubstituted amide）'
          ],
          answerIndex: 3,
          hint: '数一数谁能形成最密集、最立体的分子间氢键（intermolecular hydrogen bonds）网络？',
          explanation: '在相对分子质量相近（Mr ≈ 58–60）时，未取代酰胺 ethanamide（CH₃CONH₂）每个分子拥有两个极性 N—H 氢原子和强电负性 C=O 氧原子，能与周围多个分子形成最广泛的立体氢键网络（沸点高达 221 °C，常温下即为固体），远高于单羟基醇 propan-1-ol（97 °C）、无氢键的极性酮 propanone（56 °C）及非极性烷烃 butane（−0.5 °C）。',
          commonMistake: '只记住了醇和羧酸有氢键，忽略了未取代酰胺（unsubstituted amide）的氢键网络比羧酸和醇还要广泛！'
        },
        {
          id: 'u29-s3-q2',
          level: 2,
          levelTag: 'Level 2 · 中英过渡实战',
          type: 'mcq',
          stem: 'Arrange 1-chlorobutane, 1-bromobutane, butan-1-ol and butanoic acid in increasing order of boiling points.',
          cueWords: [
            { phrase: 'increasing order of boiling points', zh: '按沸点由低至高排列', concept: '注意方向是由低到高（<），切勿排反！' },
            { phrase: '1-chlorobutane, 1-bromobutane', zh: '同碳数氯代烷与溴代烷', concept: '无氢键；Br 体积/电子数大于 Cl → 1-bromobutane 范德华力更强' },
            { phrase: 'butan-1-ol and butanoic acid', zh: '四碳伯醇与四碳羧酸', concept: '均有氢键，但丁酸形成双氢键 dimer，沸点高于丁-1-醇' }
          ],
          options: [
            'A. 1-bromobutane < 1-chlorobutane < butan-1-ol < butanoic acid',
            'B. 1-chlorobutane < 1-bromobutane < butan-1-ol < butanoic acid',
            'C. butanoic acid < butan-1-ol < 1-bromobutane < 1-chlorobutane',
            'D. 1-chlorobutane < butan-1-ol < 1-bromobutane < butanoic acid'
          ],
          answerIndex: 1,
          hint: '先分成“无氢键组”（两个卤代烷）和“有氢键组”（醇与羧酸）：无氢键组里 Cl 和 Br 谁分子更大、范德华力更强？有氢键组里醇和羧酸谁氢键更广泛？',
          explanation: '1-chlorobutane 与 1-bromobutane 分子间均无氢键，仅有范德华力；由于 1-bromobutane 分子体积与电子数更大，范德华力强于 1-chlorobutane（1-chlorobutane 78 °C < 1-bromobutane 102 °C）。butan-1-ol 分子间存在氢键（118 °C），而 butanoic acid 不仅质量更大且每对分子能形成双氢键二聚体（dimer），氢键更广泛（164 °C）。故由低至高顺序为 B。',
          commonMistake: '误以为 Cl 电负性大于 Br 就选 A，或没看清“increasing order”（由小到大）而倒排选 C。'
        },
        {
          id: 'u29-s3-q3',
          level: 3,
          levelTag: 'Level 3 · HKDSE 全英文实战',
          type: 'structured',
          stem: 'Propanoic acid (CH₃CH₂COOH) and methyl ethanoate (CH₃COOCH₃) have the same molecular formula C₃H₆O₂, yet the boiling point of propanoic acid (141 °C) is much higher than that of methyl ethanoate (57 °C). Explain this difference in terms of structure and intermolecular forces.',
          cueWords: [
            { phrase: 'same molecular formula C₃H₆O₂', zh: '相同分子式（相对分子质量相同）', concept: '基础电子数相同，沸点差异完全取决于氢键的有无' },
            { phrase: 'boiling point of propanoic acid (141 °C) is much higher', zh: '丙酸沸点远高于乙酸甲酯', concept: '对比羧酸分子间氢键（二聚体）与酯仅有范德华力' },
            { phrase: 'intermolecular forces', zh: '分子间作用力', concept: '必须明确写出 hydrogen bonds 与 van der Waals\' forces 并扣住能量' }
          ],
          hint: '按满分三段式作答：① 丙酸含有 —COOH，分子间能形成什么作用力（甚至组成 dimer）？② 乙酸甲酯（酯类）分子间有没有氢键？靠什么力维系？③ 沸腾时谁需要更多热能？',
          explanation: '丙酸（propanoic acid）含有极性 —OH（羧基 —COOH），分子间除了范德华力外还能形成强力的分子间氢键（且可两两配对形成双氢键二聚体 dimer）。相反，乙酸甲酯（methyl ethanoate）没有直接连在氧原子上的氢原子，分子间不能形成氢键，仅靠较弱的范德华力（van der Waals\' forces）结合。因此丙酸分子间的引力远强于乙酸甲酯，沸腾时需吸收更多能量来克服分子间作用力。',
          markingScheme: [
            '1M: Propanoic acid molecules can form strong intermolecular hydrogen bonds (as well as van der Waals\' forces), whereas methyl ethanoate molecules have no H atom bonded to O and are held together by weaker van der Waals\' forces only.',
            '1M: More energy / heat is needed to overcome the stronger intermolecular attractions between propanoic acid molecules during boiling.'
          ],
          commonMistake: '漏写“intermolecular”（分子间），或误写 methyl ethanoate 是 non-polar molecule（酯其实是极性分子，只是没有分子间氢键！）。'
        }
      ]
    },

    // ------------------------------------------------------------------------
    // u29-s4: 29.11 (Part B)
    // ------------------------------------------------------------------------
    {
      id: 'u29-s4',
      code: '29.11 (Part B)',
      titleEn: 'Water solubility, density and physical states across homologous series',
      titleZh: '各大同系物的水溶性规律（与水形成氢键 vs 疏水烃基）、密度与分层判断',
      analogy: {
        icon: '🧋',
        title: '水分子的“氢键 VIP 派对”与拖后腿的“油性大尾巴”',
        body: '纯水里的水分子（water molecules）彼此手拉手结成紧密的氢键（hydrogen bonds）俱乐部。一个有机分子要想溶进水里，必须掏出“VIP 通行证”——比如醇的 —OH、羧酸的 —COOH、胺的 —NH₂、酰胺的 —CONH₂，或者短链醛/酮羰基氧上的孤对电子（lone pairs），跟水分子成功牵起氢键！但是，每个有机分子身后都拖着一条不亲水的非极性烃基尾巴（non-polar hydrocarbon chain）。当碳链只有 1–3 个碳时，尾巴很短，轻松混溶（miscible）；一旦碳链长到 5、6 个碳以上，这条油腻的大尾巴严重阻碍水分子之间牵手，立刻被水排斥踢出局，浮在水面上分出油水两层！'
      },
      coreExplanation: `
        <h4>1. 为什么短链醇、醛、酮、羧酸、胺、酰胺易溶于水？</h4>
        <ul class="chem-list">
          <li><strong>短链醇、羧酸、伯胺与未取代酰胺（<code>C₁–C₃ / C₄</code>）</strong>：例如 <code>methanol</code>、<code>ethanol</code>、<code>propan-1-ol</code>、<code>ethanoic acid</code>、<code>ethanamine</code>、<code>ethanamide</code> 能与水以任意比例互溶（<span class="term">互溶 <span class="en">miscible</span></span>）或极易溶于水，因为它们的 <code>—OH</code>、<code>—COOH</code>、<code>—NH₂</code> 或 <code>—CONH₂</code> 基团<strong>能够与水分子形成氢键（can form hydrogen bonds with water molecules）</strong>，释放的能量足以补偿打断水分子间原有氢键所需的能量。</li>
          <li><strong>高频细节 —— 短链醛与酮（如 <code>methanal</code>、<code>ethanal</code>、<code>propanone</code>）为何也易溶于水？</strong><br>
          虽然纯醛或纯酮分子<strong>自身之间不能形成氢键</strong>，但当它们放入水中时，<strong>羰基（<code>&gt;C=O</code>）高电负性氧原子上的孤对电子（lone pairs of electrons on oxygen）可以与水分子中带部分正电的氢原子（<code>H<sup>δ+</sup></code>）形成氢键（<code>R₂C=O: ··· H—O—H</code>）</strong>！因此短链醛和丙酮（<code>propanone</code>）同样能与水混溶。</li>
        </ul>

        <h4>2. 为什么随着碳链增长，水溶性急剧下降？（DSE 必背采分逻辑）</h4>
        <p>任何有机分子都由“亲水极性官能团”与“<strong><span class="term">非极性烃基链 <span class="en">non-polar hydrocarbon chain</span></span>（疏水基 hydrophobic group）</strong>”两部分组成。随着同系物中碳原子数增加（例如从 <code>propan-1-ol</code> 变为 <code>hexan-1-ol</code>）：</p>
        <ul class="chem-list">
          <li><strong>非极性烃基链变长变大（the non-polar hydrocarbon chain becomes longer / larger）</strong>；</li>
          <li>长烃基不能与水形成氢键，反而<strong>阻碍水分子之间形成氢键（hinders the formation of hydrogen bonds among water molecules）</strong>，疏水效应占据主导，因此水溶性显著降低（<code>hexan-1-ol</code> 几乎不溶于水）。</li>
        </ul>

        <h4>3. 为什么酯、卤代烷与烃类难溶或不溶于水？</h4>
        <ul class="chem-list">
          <li><strong><span class="term">酯 <span class="en">esters</span></span>（<code>RCOOR'</code>）</strong>：酯基两侧被两个疏水烃基（<code>R</code> 与 <code>R'</code>）包夹且没有 <code>—OH</code> 氢供体，故除极小分子微溶外，常见酯（如 <code>ethyl ethanoate</code>）<strong>难溶于水</strong>，与水混合后浮于上层，形成<strong>具宜人果香气味的油状液层（sweet fruity-smelling upper oily layer）</strong>。</li>
          <li><strong><span class="term">烷烃 <span class="en">alkanes</span></span>、<span class="term">烯烃 <span class="en">alkenes</span></span> 与 <span class="term">卤代烷 <span class="en">haloalkanes</span></span></strong>：完全<strong>不溶于水（insoluble in water）</strong>！它们与水分子之间微弱的范德华力，<strong>不足以克服水分子之间原有的强氢键（not strong enough to overcome the strong hydrogen bonds between water molecules）</strong>。</li>
        </ul>

        <h4>4. 常温常压物理状态与分液漏斗（Separating Funnel）密度上下层速查表</h4>
        <table class="chem-table">
          <thead>
            <tr>
              <th>同系物类别</th>
              <th>常温物理状态（r.t.p.）</th>
              <th>水溶性概况</th>
              <th>与水混合不溶时的液层位置（密度对比水 <code>1.0 g cm⁻³</code>）</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>烷烃 / 烯烃</td>
              <td><code>C₁–C₄</code> 气体；<code>C₅–C₁₆</code> 液体；<code>C₁₇+</code> 蜡状固体</td>
              <td>不溶于水</td>
              <td><strong>上层（Upper layer）</strong>，密度 <code>&lt; 1.0 g cm⁻³</code></td>
            </tr>
            <tr>
              <td>卤代烷（<code>R—X</code>）</td>
              <td><code>CH₃Cl</code>、<code>C₂H₅Cl</code> 等极短链为气体；其余多为液体</td>
              <td>不溶于水</td>
              <td>一氯代烷略小于 1（上层）；<strong>多氯代烷（<code>CH₂Cl₂</code>, <code>CHCl₃</code>, <code>CCl₄</code>）及所有溴代烷/碘代烷密度 <code>&gt; 1.0 g cm⁻³</code>，沉在下层（Lower layer）！</strong></td>
            </tr>
            <tr>
              <td>醇 / 羧酸 / 伯胺</td>
              <td>短链醇、短链酸为液体；长链酸（如硬脂酸）为固体</td>
              <td><code>C₁–C₃/C₄</code> 与水互溶；长链难溶</td>
              <td>长链醇 / 长链羧酸不溶时浮于<strong>上层（Upper layer）</strong></td>
            </tr>
            <tr>
              <td>醛 / 酮</td>
              <td><strong><code>methanal</code>（甲醛）为气体</strong>；<code>ethanal</code>（b.p. 21 °C）及常见酮为挥发性液体</td>
              <td><code>C₁–C₃</code> 易溶；随碳链增长下降</td>
              <td>长链醛 / 酮浮于<strong>上层（Upper layer）</strong></td>
            </tr>
            <tr>
              <td>酯（<code>RCOOR'</code>）</td>
              <td>中短链酯为具<strong>果香气味（fruity smell）</strong>的挥发性液体；天然油脂为液/固体</td>
              <td>微溶或不溶于水</td>
              <td><strong>上层（Upper layer）</strong>，密度 <code>&lt; 1.0 g cm⁻³</code></td>
            </tr>
            <tr>
              <td>未取代酰胺</td>
              <td>除 <code>methanamide</code> 为液体外，<strong><code>ethanamide</code> 及以上常温下均为结晶固体！</strong></td>
              <td>低级酰胺易溶于水</td>
              <td>固体溶解（长链不溶）</td>
            </tr>
          </tbody>
        </table>

        <div class="callout callout-warn">
          <strong>⚠️ 极易混淆概念辨析：</strong><br>
          • 问 <strong><code>propanone</code> 自身沸点为什么比 <code>propan-1-ol</code> 低</strong> ⟶ 答：纯 <code>propanone</code> 分子之间<strong>不能形成氢键</strong>。<br>
          • 问 <strong><code>propanone</code> 为什么能溶于水</strong> ⟶ 答：<code>propanone</code> 的 <code>C=O</code> 氧原子具有孤对电子，<strong>能与水分子形成氢键（can form hydrogen bonds with water molecules）</strong>！千万不要把“同种分子间无氢键”背死成“不能与水形成氢键”！
        </div>
      `,
      textbookFormulas: [
        {
          label: '短链醛/酮与水分子的氢键示意（H-bonding between ketone & water）',
          equationHtml: `(CH<sub>3</sub>)<sub>2</sub>C=O<span style="color:#2563eb">: ······ </span>H<sup>δ+</sup>—O<sup>δ−</sup>—H &nbsp;（羰基氧作氢键受体 H-bond acceptor）`,
          note: '解释了为何 propanone 和 ethanal 本身无分子间氢键，却依然能与水任意比例混溶。'
        },
        {
          label: '醇同系物水溶性递减序列（Decreasing water solubility with chain length）',
          equationHtml: `CH<sub>3</sub>CH<sub>2</sub>OH (miscible) &nbsp;&gt;&nbsp; CH<sub>3</sub>(CH<sub>2</sub>)<sub>3</sub>OH (7.9 g / 100 g H<sub>2</sub>O) &nbsp;&gt;&nbsp; CH<sub>3</sub>(CH<sub>2</sub>)<sub>5</sub>OH (almost insoluble)`,
          note: '碳链增长 → 非极性烃基（non-polar hydrocarbon chain）增大 → 疏水性占主导。'
        }
      ],
      examTrap: '分液漏斗（separating funnel）实验题大坑：考生常以为“有机层永远在上层（upper layer）”！记住：烃、酯、长链醇确实浮在上层；但溴代烷（如 1-bromobutane，密度 1.27 g cm⁻³）、碘代烷以及三氯甲烷（CHCl₃）/ 四氯化碳（CCl₄）密度均大于水，静置分层后有机层在下层（lower layer）！',
      relations: [
        {
          type: 'buildsOn',
          targetUnitId: 'u29',
          targetSectionId: 'u29-s3',
          label: '紧扣本单元 29.11(A)：氢键形成条件与极性分析',
          why: '沸点看“溶质分子自己能不能牵氢键”，水溶性看“溶质分子能不能跟 H₂O 牵氢键 + 烃基尾巴有多长”。'
        },
        {
          type: 'leadsTo',
          targetUnitId: 'u32',
          label: '直接指导 Unit 32：有机液体产物（如乙酸乙酯或溴代丁烷）的分液提纯实验',
          why: '提纯时用碳酸钠水溶液洗涤后，必须靠密度与水不溶性准确放掉水层、保留有机层。'
        }
      ],
      questions: [
        {
          id: 'u29-s4-q1',
          level: 1,
          levelTag: 'Level 1 · 中文直觉破冰',
          type: 'mcq',
          stem: '纯丙酮（propanone, CH₃COCH₃）分子自身之间不能形成氢键，但把丙酮倒入水中却能完全互溶（miscible with water）。原因是什么？',
          cueWords: [],
          options: [
            'A. 丙酮与水发生剧烈化学反应生成丙-2-醇（propan-2-ol）',
            'B. 丙酮属于非极性分子，能挤进水分子的空隙中',
            'C. 丙酮羰基（C=O）氧原子上的孤对电子能与水分子的氢原子形成氢键（hydrogen bonds）',
            'D. 丙酮的相对分子质量比水小'
          ],
          answerIndex: 2,
          hint: '水分子 H—O—H 自带带部分正电的氢原子（Hδ+），丙酮分子里哪颗原子带有孤对电子（lone pairs）且电负性很高？',
          explanation: '丙酮分子含有极性羰基（>C=O），虽然丙酮自身没有连在氧上的氢原子，但其高电负性氧原子上的孤对电子（lone pairs of electrons）可以与水分子中的 Hδ+ 形成分子间氢键（hydrogen bonds with water molecules），加上两侧甲基碳链很短，因此与水完全互溶。',
          commonMistake: '把“自身无氢键”错误等同于“跟水也无法形成氢键”。'
        },
        {
          id: 'u29-s4-q2',
          level: 2,
          levelTag: 'Level 2 · 中英过渡实战',
          type: 'mcq',
          stem: 'At room temperature and pressure, which of the following statements about ethanamide (CH₃CONH₂), ethyl ethanoate (CH₃COOCH₂CH₃) and 1-bromobutane (CH₃CH₂CH₂CH₂Br) is CORRECT?',
          cueWords: [
            { phrase: 'room temperature and pressure', zh: '常温常压', concept: '留意特殊物态：ethanamide 常温下是固体！' },
            { phrase: 'ethyl ethanoate', zh: '乙酸乙酯', concept: '微溶/难溶于水，密度小于水，浮于上层且具果香味' },
            { phrase: '1-bromobutane', zh: '1-溴丁烷', concept: '不溶于水，且溴代烷密度大于水，沉于下层' }
          ],
          options: [
            'A. Ethanamide is a gas at room temperature and pressure.',
            'B. Ethyl ethanoate is completely miscible with water in all proportions.',
            'C. When 1-bromobutane is shaken with water and allowed to stand, 1-bromobutane forms the lower layer.',
            'D. 1-Bromobutane dissolves readily in water by forming hydrogen bonds with water molecules.'
          ],
          answerIndex: 2,
          hint: '逐项排查：ethanamide 沸点超过 220 °C 是什么状态？酯类跟水互溶吗？1-溴丁烷跟水比谁密度更大？',
          explanation: 'C 正确！1-bromobutane 不溶于水，且因含较重的溴原子，密度（约 1.27 g cm⁻³）大于水（1.0 g cm⁻³），静置后沉在下层（lower layer）。A 错：ethanamide 因广泛氢键网络在常温下是白色结晶固体；B 错：ethyl ethanoate 难溶/微溶于水，会浮在水面形成具果香的上层油状层；D 错：卤代烷不能与水形成氢键，不溶于水。',
          commonMistake: '惯性思维认为所有有机物密度都比水小而漏选 C，或者误以为酯能与水互溶而选 B。'
        },
        {
          id: 'u29-s4-q3',
          level: 3,
          levelTag: 'Level 3 · HKDSE 全英文实战',
          type: 'structured',
          stem: 'Ethanol (CH₃CH₂OH) is miscible with water in all proportions, whereas hexan-1-ol (CH₃(CH₂)₅OH) is only very slightly soluble in water. Explain this difference.',
          cueWords: [
            { phrase: 'miscible with water in all proportions', zh: '与水任意比例互溶', concept: '乙醇 —OH 与水形成氢键，且乙基烃链极短' },
            { phrase: 'hexan-1-ol (CH₃(CH₂)₅OH) is only very slightly soluble', zh: '己-1-醇极微溶于水', concept: '长非极性烃基（non-polar hydrocarbon chain）阻碍水分子间氢键' }
          ],
          hint: '分两步作答：① 乙醇为什么能溶？（写出 form hydrogen bonds with water molecules）；② 己-1-醇相比乙醇多了什么？（写出 longer non-polar hydrocarbon chain，并说明它阻碍水分子间氢键或疏水占主导）。',
          explanation: '乙醇和己-1-醇的 —OH 基团虽然都能与水分子形成氢键，但乙醇的烃基链很短；而己-1-醇具有长得多的非极性烃基链（much longer non-polar hydrocarbon chain），该疏水长链不能与水形成氢键，且严重阻碍水分子之间的氢键形成，因此己-1-醇在水中的溶解度极低。',
          markingScheme: [
            '1M: The —OH group of ethanol forms hydrogen bonds with water molecules (and its hydrocarbon chain is short).',
            '1M: Hexan-1-ol has a much longer / larger non-polar hydrocarbon chain which cannot form hydrogen bonds with water / hinders hydrogen bond formation among water molecules, thus greatly reducing its solubility in water.'
          ],
          commonMistake: '错误地写“hexan-1-ol 没有 —OH 所以不能与水形成氢键”，或者比较两者自身沸点高低而答非所问。'
        }
      ]
    }
  ],

  // ==========================================================================
  // UNIT 29 EXAM LONG QUESTIONS
  // ==========================================================================
  unitExamLongQuestions: [
    {
      id: 'u29-long-1',
      title: '综合长题 1：多同系物命名与相近相对分子质量沸点全维对比（Nomenclature & Boiling Point Comparison）',
      totalMarks: 7,
      scenarioEn: 'Consider four carbon compounds W, X, Y and Z with comparable relative molecular masses (between 58.0 and 60.0):\n• W: CH₃CH₂CH₂CH₃ (relative molecular mass = 58.0)\n• X: CH₃CH₂CHO (relative molecular mass = 58.0)\n• Y: CH₃CH₂CH₂OH (relative molecular mass = 60.0)\n• Z: CH₃COOH (relative molecular mass = 60.0)',
      scenarioZhSummary: '题目给出四种具有相近相对分子质量（comparable relative molecular masses，介乎 58.0 至 60.0）的碳化合物：烷烃 W（丁烷）、醛 X（丙醛）、醇 Y（丙-1-醇）及羧酸 Z（乙酸），考查系统命名、沸点递变微观解释及水溶性规律。',
      cueWords: [
        { phrase: 'comparable relative molecular masses', zh: '相近的相对分子质量', concept: '排除基础电子数差异，直接比较分子极性与分子间氢键强弱/广泛程度' },
        { phrase: 'W: CH₃CH₂CH₂CH₃', zh: '非极性烷烃（丁烷）', concept: '仅含微弱范德华力，沸点最低' },
        { phrase: 'X: CH₃CH₂CHO', zh: '极性醛（丙醛）', concept: '极性分子，范德华力较烷烃强，但自身分子间无氢键' },
        { phrase: 'Y: CH₃CH₂CH₂OH', zh: '伯醇（丙-1-醇）', concept: '含 —OH，分子间可形成氢键' },
        { phrase: 'Z: CH₃COOH', zh: '羧酸（乙酸）', concept: '含 —COOH，每对分子形成双氢键二聚体（dimer），氢键比醇更广泛' }
      ],
      subQuestions: [
        {
          part: '(a)',
          marks: 2,
          promptEn: 'Give the systematic IUPAC names of compounds X and Y.',
          commandWord: { word: 'Give', tip: '直接准确写出标准英文 IUPAC 名称，注意醛不加“-1-”，三碳醇必须标明“-1-”！' },
          hint: 'X 含末端醛基 —CHO（3 碳）；Y 含末端羟基 —OH（3 碳，需区别于 2 号位异构体）。',
          markingScheme: [
            '1M: X: propanal (reject propan-1-al or propanol)',
            '1M: Y: propan-1-ol (reject propanol)'
          ],
          explanationZh: 'X 是三碳醛，醛基必在 C-1，命名为 propanal（拼错一个字母变成 propanol 就变成醇了，千万留神 `a` 与 `o`！）；Y 是三碳直链伯醇，因存在异构体 propan-2-ol，必须标明位次写为 propan-1-ol。'
        },
        {
          part: '(b)',
          marks: 3,
          promptEn: 'Arrange W, X, Y and Z in increasing order of boiling points. Explain your arrangement in terms of structure and intermolecular forces.',
          commandWord: { word: 'Explain', tip: '3 分黄金拆点：1 分给正确排序，1 分对比 W < X < Y（非极性范德华力 → 极性范德华力 → 氢键），1 分解释为何 Z > Y（羧酸形成更广泛氢键 / dimer）。' },
          hint: '排序：W < X < Y < Z。分别点明：① W 非极性 vs X 极性（均无分子间氢键）；② Y 和 Z 有分子间氢键；③ Z 比 Y 能形成更广泛的氢键（dimers）。',
          markingScheme: [
            '1M: Increasing order of boiling points: W < X < Y < Z.',
            '1M: W is non-polar with weak van der Waals\' forces only, while X is polar and has stronger van der Waals\' forces between molecules (neither W nor X has intermolecular hydrogen bonds); Y and Z can form strong intermolecular hydrogen bonds in addition to van der Waals\' forces.',
            '1M: Each pair of Z (ethanoic acid) molecules can form two hydrogen bonds (forming dimers) / Z forms more extensive intermolecular hydrogen bonds than Y (propan-1-ol), so more energy is needed to overcome the intermolecular attractions in Z.'
          ],
          explanationZh: '四者相对分子质量几乎相同：W（butane）非极性，仅有最弱范德华力；X（propanal）含极性 C=O 键属极性分子，范德华力强于 W，但自身无氢键；Y（propan-1-ol）与 Z（ethanoic acid）均能形成强得多的分子间氢键；而 Z 每两个分子可形成两条氢键构成二聚体（dimer），氢键比 Y 更广泛，故沸点 W < X < Y < Z。'
        },
        {
          part: '(c)',
          marks: 2,
          promptEn: 'Although pure liquid X has no intermolecular hydrogen bonds, X is soluble in water whereas W is insoluble in water. Explain why.',
          commandWord: { word: 'Explain', tip: '分别说明 X 能与水形成氢键（氧孤对电子），以及 W 不能克服水分子间强氢键。' },
          hint: 'X 里的 C=O 氧原子跟 H₂O 之间能发生什么？W 跟 H₂O 之间的微弱引力够不够拆开水分子之间的氢键？',
          markingScheme: [
            '1M: The lone pairs of electrons on the carbonyl oxygen atom of X (propanal) can form hydrogen bonds with water molecules.',
            '1M: W (butane) is non-polar; the weak van der Waals\' forces between W and water molecules are not strong enough to overcome the strong hydrogen bonds between water molecules.'
          ],
          explanationZh: 'X（丙醛）羰基氧原子上的孤对电子能与水分子的 Hδ+ 形成氢键，且碳链仅 3 个碳，因此可溶于水；而 W（丁烷）是非极性烃，与水分子间微弱的范德华力无法克服水分子间强大的氢键，故不溶于水。'
        }
      ]
    },
    {
      id: 'u29-long-2',
      title: '综合长题 2：反写酯、氨基酸命名与醇分类及分液分层实验判别（Esters, Multifunctional Naming & Layer Separation）',
      totalMarks: 6,
      scenarioEn: 'Three carbon compounds P, Q and R are shown below:\n• P: CH₃CH₂OOCCH(CH₃)₂\n• Q: H₂NCH₂CH₂CH(OH)CH₃\n• R: (CH₃)₃COH',
      scenarioZhSummary: '题目展示三个典型易错有机化合物结构：反写支链酯 P、同时含氨基（—NH₂）与羟基（—OH）的双官能团化合物 Q，以及高度支链化的四碳醇 R，全面检验 IUPAC 拆键/优先序命名、醇级别判定与酯的水混合现象。',
      cueWords: [
        { phrase: 'P: CH₃CH₂OOCCH(CH₃)₂', zh: '反写支链酯（—OOC— 氧在左、羰基在右）', concept: '展开为 CH₃CH₂—O—C(=O)—CH(CH₃)₂，醇部为 ethyl，酸部为 methylpropanoate' },
        { phrase: 'Q: H₂NCH₂CH₂CH(OH)CH₃', zh: '同时含 —NH₂ 与 —OH', concept: '—OH 优先序高于 —NH₂！母体为 butan-2-ol，氨基作前缀 4-amino-' },
        { phrase: 'R: (CH₃)₃COH', zh: '三个甲基连在同一 C—OH 碳上', concept: '连羟基的碳连接 3 个甲基，属叔醇（tertiary alcohol）' }
      ],
      subQuestions: [
        {
          part: '(a)',
          marks: 2,
          promptEn: 'Give the systematic IUPAC names of compounds P and Q.',
          commandWord: { word: 'Give', tip: 'P 先把 —OOC— 展开为 —O—C(=O)— 再一刀切单键；Q 记住 —OH 优先级高于 —NH₂，从右端编号！' },
          hint: 'P 中单键氧连着乙基 CH₃CH₂—，带 C=O 的酸部一共几个碳、主链多长？Q 中从右往左数，—OH 在 2 号位，—NH₂ 在 4 号位。',
          markingScheme: [
            '1M: P: ethyl methylpropanoate OR ethyl 2-methylpropanoate',
            '1M: Q: 4-aminobutan-2-ol'
          ],
          explanationZh: 'P 展开后为 CH₃CH₂—O—C(=O)—CH(CH₃)₂：醇部为 ethyl；酸部主链 3 碳且 C-2 带甲基，为 2-methylpropanoate（或 methylpropanoate），合称 ethyl 2-methylpropanoate。Q 中羟基（—OH）优先级高于氨基（—NH₂），从右端编号使 —OH 得最小号 2（butan-2-ol），C-4 上的氨基作词头 amino-，得 4-aminobutan-2-ol。'
        },
        {
          part: '(b)',
          marks: 2,
          promptEn: 'Give the systematic IUPAC name of R, and state whether R is a primary, secondary or tertiary alcohol.',
          commandWord: { word: 'State', tip: '先找包含 C—OH 的最长碳链（3 碳而非 4 碳！），再根据 C—OH 连接的烷基数目回答级别。' },
          hint: '把 (CH₃)₃COH 画成十字架：最长碳链有几个碳？—OH 和甲基都在几号碳上？',
          markingScheme: [
            '1M: methylpropan-2-ol OR 2-methylpropan-2-ol',
            '1M: Tertiary (3°) alcohol'
          ],
          explanationZh: '(CH₃)₃COH 即 CH₃—C(CH₃)(OH)—CH₃，最长连续碳链为 3 个碳（propan-2-ol），C-2 上另连一个甲基，故命名为 2-methylpropan-2-ol（或 methylpropan-2-ol）；连着 —OH 的碳原子直接连接 3 个甲基碳原子（无 H 原子），属于叔醇（tertiary alcohol）。'
        },
        {
          part: '(c)',
          marks: 2,
          promptEn: 'Compound P is a liquid at room temperature. State TWO observable features when a few drops of P are shaken with distilled water in a test tube and allowed to stand.',
          commandWord: { word: 'State', tip: '注意题眼“observable features”（可观察特征，包括视觉分层与嗅觉气味），切勿只写理论原因！' },
          hint: '酯（ester）放进水里溶不溶？会看到几层液体？闻起来有什么标志性气味？',
          markingScheme: [
            '1M: Two immiscible liquid layers are formed / an oily layer floats on top of water.',
            '1M: A pleasant fruity smell is detected.'
          ],
          explanationZh: 'P 为六碳酯类液体，难溶于水且密度小于水，因此振荡静置后可观察到液体分为互不相溶的两层（上层为无色油状酯层），同时能闻到酯类特有的宜人果香气味（pleasant fruity smell）。'
        }
      ]
    }
  ]
});


// ============================================================================
// UNIT 30: Isomerism
// ============================================================================
window.CHEM_UNITS.push({
  id: 'u30',
  unitNum: 'Unit 30',
  book: 'Book 3B · Topic 8',
  topicId: 'topic8',
  titleEn: 'Isomerism',
  titleZh: '同分异构现象',
  colorTheme: 'cyan',
  summary: '建立 HKDSE 同分异构现象（isomerism）完整逻辑树：先厘清原子连接顺序不同的三大结构异构（structural isomerism：碳链异构 chain、位置异构 position、官能团异构 functional group），再攻克空间排列不同的两大立体异构（stereoisomerism）——围绕 C=C 受限旋转的顺反异构（cis-trans isomerism，精析极性与晶格堆积对沸点、熔点的反向影响），以及含手性碳（chiral carbon, C*）的对映异构体（enantiomers）、三维楔形式画法、旋光仪（polarimeter）鉴别与外消旋混合物（racemic mixture）。',
  keyTerms: [
    { en: 'isomerism', zh: '同分异构现象', cat: 'Concept' },
    { en: 'structural isomers', zh: '结构异构体（原子连接顺序不同）', cat: 'Classification' },
    { en: 'chain isomerism', zh: '碳链异构', cat: 'Structural isomerism' },
    { en: 'position isomerism', zh: '位置异构', cat: 'Structural isomerism' },
    { en: 'functional group isomerism', zh: '官能团异构', cat: 'Structural isomerism' },
    { en: 'stereoisomers', zh: '立体异构体（连接顺序相同，三维排布不同）', cat: 'Classification' },
    { en: 'cis-trans isomerism', zh: '顺反异构（几何异构 geometrical isomerism）', cat: 'Stereoisomerism' },
    { en: 'restricted rotation', zh: '受限旋转（围绕 C=C 双键）', cat: 'Mechanism' },
    { en: 'net dipole moment', zh: '净偶极矩（决定顺反分子极性）', cat: 'Property' },
    { en: 'chirality', zh: '手性', cat: 'Stereoisomerism' },
    { en: 'chiral carbon', zh: '手性碳原子 (C*)', cat: 'Structure' },
    { en: 'enantiomers', zh: '对映异构体', cat: 'Stereoisomerism' },
    { en: 'non-superimposable mirror images', zh: '互为镜像且不能重叠', cat: 'Definition' },
    { en: 'plane of symmetry', zh: '对称面', cat: 'Structure' },
    { en: 'optical activity', zh: '旋光性', cat: 'Property' },
    { en: 'plane-polarized light', zh: '平面偏振光', cat: 'Concept' },
    { en: 'polarimeter', zh: '旋光仪', cat: 'Apparatus' },
    { en: 'racemic mixture', zh: '外消旋混合物（等摩尔对映体混合物）', cat: 'Mixture' }
  ],
  sections: [
    // ------------------------------------------------------------------------
    // u30-s1: 30.1 - 30.2
    // ------------------------------------------------------------------------
    {
      id: 'u30-s1',
      code: '30.1–30.2',
      titleEn: 'Isomerism overview & Structural isomerism (Chain, Position, Functional group)',
      titleZh: '异构现象全景分类树与三大结构异构（碳链、位置、官能团异构）',
      analogy: {
        icon: '🧱',
        title: '同一盒乐高积木（相同分子式），拆装顺序不同 vs 左右朝向不同！',
        body: '给你完全相同的一袋原子积木——比如 3 颗碳、6 颗氢、2 颗氧（分子式 C₃H₆O₂ 固定不变），这些拼出来的不同分子统称同分异构体（isomers）。如果你直接改变积木的“插接顺序”——把氧插在末端做成丙酸（propanoic acid），或者插在中间做成乙酸甲酯（methyl ethanoate），这就是结构异构（structural isomerism）；如果积木插接顺序一模一样，只是在三维空间里朝向不同（就像双键两侧一顺一反，或者左手与右手手套），那就是立体异构（stereoisomerism）！'
      },
      coreExplanation: `
        <h4>1. HKDSE 同分异构现象（Isomerism）完整知识地图（30.1）</h4>
        <p><span class="term">同分异构体 <span class="en">isomers</span></span> 是指具有<strong>相同分子式（same molecular formula）</strong>、但原子排列方式不同的不同化合物。课本严格将其分为两大分支、五小类：</p>
        <div class="struct-card">
          <pre class="struct-pre">                    同分异构体 Isomers（分子式相同 Same molecular formula）
                                      │
          ┌───────────────────────────┴───────────────────────────┐
          ▼                                                       ▼
 结构异构体 Structural isomers                           立体异构体 Stereoisomers
（原子连接顺序不同 Bonded in different order）         （连接顺序相同，三维空间排列不同 Different in 3D space）
  ├─ ① 碳链异构 Chain isomerism                           ├─ ④ 顺反异构 Cis-trans (geometrical) isomerism
  ├─ ② 位置异构 Position isomerism                        └─ ⑤ 对映异构 Enantiomerism (optical isomerism)
  └─ ③ 官能团异构 Functional group isomerism</pre>
          <div class="struct-cap">做判断异构关系题时，先看“连接顺序变没变”区分结构异构与立体异构，再往下细分！</div>
        </div>

        <h4>2. 三大结构异构（Structural Isomerism）精讲与性质对比（30.2）</h4>
        <ul class="chem-list">
          <li><strong>① <span class="term">碳链异构 <span class="en">chain isomerism</span></span></strong>：属于同一同系物（官能团相同），但<strong>碳骨架不同（different carbon skeletons，即直链 vs 支链）</strong>。
            <br>• 经典实例：<code>C₄H₁₀</code> 的 <code>butane</code> 与 <code>methylpropane</code>；<code>C₅H₁₂</code> 的 <code>pentane</code>、<code>methylbutane</code> 与 <code>dimethylpropane</code>；<code>C₄H₉OH</code> 的 <code>butan-1-ol</code> 与 <code>2-methylpropan-1-ol</code>。
            <br>• 性质特征：<strong>化学性质相似</strong>（具相同官能团），<strong>物理性质不同</strong>（支链越多，沸点越低）。
          </li>
          <li><strong>② <span class="term">位置异构 <span class="en">position isomerism</span></span></strong>：<strong>碳骨架完全相同、官能团也相同</strong>，仅是官能团或取代基在碳链（或环）上的<strong>连接位次不同（different positions）</strong>。
            <br>• 经典实例：<code>but-1-ene</code> 与 <code>but-2-ene</code>；<code>propan-1-ol</code> 与 <code>propan-2-ol</code>；<code>pentan-2-one</code> 与 <code>pentan-3-one</code>；<code>1,1-dichloroethane</code> 与 <code>1,2-dichloroethane</code>。
            <br>• <em>避坑提示</em>：比较 <code>butan-1-ol</code>（4 碳直链）与 <code>2-methylpropan-2-ol</code>（3 碳主链带支链）时，因为碳骨架已经改变，它们主属碳链/结构异构，而非单纯位置异构（<code>butan-1-ol</code> 与 <code>butan-2-ol</code> 才是标准位置异构体！）。
          </li>
          <li><strong>③ <span class="term">官能团异构 <span class="en">functional group isomerism</span></span>（DSE 必背四大黄金配对！）</strong>：分子式相同，但含有<strong>不同的官能团</strong>（分属不同同系物），因此<strong>物理性质与化学性质均截然不同</strong>！</li>
        </ul>

        <table class="chem-table">
          <thead>
            <tr>
              <th>通式（General formula）</th>
              <th>官能团异构黄金搭档</th>
              <th>典型分子式与必考实例对照</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong><code>CₙH₂ₙ</code></strong>（<i>n</i> ≥ 3）</td>
              <td><span class="term">烯烃 <span class="en">alkene</span></span> &amp; <span class="term">环烷烃 <span class="en">cycloalkane</span></span></td>
              <td><code>C₃H₆</code>：<code>CH₃CH=CH₂</code>（<code>propene</code>，暗处使 <code>Br₂</code> 迅速褪色） vs <code>cyclopropane</code>（环丙烷，无 <code>C=C</code>）</td>
            </tr>
            <tr>
              <td><strong><code>CₙH₂ₙ₊₂O</code></strong>（<i>n</i> ≥ 2）</td>
              <td><span class="term">醇 <span class="en">alcohol</span></span> &amp; <span class="term">醚 <span class="en">ether</span></span></td>
              <td><code>C₂H₆O</code>：<code>CH₃CH₂OH</code>（<code>ethanol</code>，b.p. 78 °C，有氢键） vs <code>CH₃OCH₃</code>（<code>methoxymethane</code> 甲醚，b.p. −24 °C，无氢键）</td>
            </tr>
            <tr>
              <td><strong><code>CₙH₂ₙO</code></strong>（<i>n</i> ≥ 3）</td>
              <td><span class="term">醛 <span class="en">aldehyde</span></span> &amp; <span class="term">酮 <span class="en">ketone</span></span></td>
              <td><code>C₃H₆O</code>：<code>CH₃CH₂CHO</code>（<code>propanal</code>，可被酸化 <code>Cr₂O₇²⁻</code> 氧化） vs <code>CH₃COCH₃</code>（<code>propanone</code>，抗拒氧化）</td>
            </tr>
            <tr>
              <td><strong><code>CₙH₂ₙO₂</code></strong>（<i>n</i> ≥ 2）</td>
              <td><span class="term">羧酸 <span class="en">carboxylic acid</span></span> &amp; <span class="term">酯 <span class="en">ester</span></span></td>
              <td><code>C₃H₆O₂</code>：<code>CH₃CH₂COOH</code>（<code>propanoic acid</code>） vs <strong>两种酯</strong>：<code>CH₃COOCH₃</code>（<code>methyl ethanoate</code>）与 <code>HCOOCH₂CH₃</code>（<code>ethyl methanoate</code>）！</td>
            </tr>
          </tbody>
        </table>

        <div class="callout callout-tip">
          <strong>💡 不重不漏穷举异构体（Exhaustive Isomer Counting）自检绝招：</strong><br>
          画完所有候选结构式后，<strong>给每一个结构写出完整的 IUPAC 英文名称</strong>！如果两个看起来弯折方向不同的结构写出了<strong>一模一样的 IUPAC 名称</strong>，说明它们只是单键旋转或纸面翻转后的同一个分子，必须删去重复项！
        </div>
      `,
      textbookFormulas: [
        {
          label: 'C₃H₆O₂ 的羧酸与酯官能团异构全集（Carboxylic acid & ester isomers）',
          equationHtml: `CH<sub>3</sub>CH<sub>2</sub>COOH (propanoic acid) &nbsp;|&nbsp; CH<sub>3</sub>COOCH<sub>3</sub> (methyl ethanoate) &nbsp;|&nbsp; HCOOCH<sub>2</sub>CH<sub>3</sub> (ethyl methanoate)`,
          note: 'C₃H₆O₂ 共有 1 种羧酸 + 2 种酯（切勿漏掉甲酸乙酯 ethyl methanoate！）。'
        },
        {
          label: 'C₃H₆O 的醛与酮异构体（Aldehyde & ketone isomers）',
          equationHtml: `CH<sub>3</sub>CH<sub>2</sub>CHO (propanal) &nbsp;&amp;&nbsp; CH<sub>3</sub>COCH<sub>3</sub> (propanone)`,
          note: '两者同为 C₃H₆O，属典型官能团异构体（functional group isomers）。'
        },
        {
          label: 'C₅H₁₂ 的三种烷烃碳链异构体（Chain isomers of pentane）',
          equationHtml: `CH<sub>3</sub>(CH<sub>2</sub>)<sub>3</sub>CH<sub>3</sub> (pentane) &nbsp;|&nbsp; (CH<sub>3</sub>)<sub>2</sub>CHCH<sub>2</sub>CH<sub>3</sub> (methylbutane) &nbsp;|&nbsp; C(CH<sub>3</sub>)<sub>4</sub> (dimethylpropane)`,
          note: '主链依次由 5 碳 → 4 碳 → 3 碳递减，沸点依次为 36 °C > 28 °C > 9.5 °C。'
        }
      ],
      examTrap: '数酯类异构体时最常漏掉“甲酸酯（methanoate，HCOOR\'）”！例如问 C₄H₈O₂ 有多少种酯异构体（ester isomers）：除了 ethyl ethanoate（CH₃COOCH₂CH₃）和 methyl propanoate（CH₃CH₂COOCH₃），还有甲酸丙酯 propyl methanoate（HCOOCH₂CH₂CH₃）和甲酸异丙酯 1-methylethyl methanoate（HCOOCH(CH₃)₂），一共 4 种酯！',
      relations: [
        {
          type: 'buildsOn',
          targetUnitId: 'u29',
          label: '依托 Unit 29：用 IUPAC 系统名称精准检验异构体是否重复',
          why: '只要两个结构式的标准 IUPAC 名称完全相同，它们就是同一种物质而非异构体。'
        },
        {
          type: 'leadsTo',
          targetUnitId: 'u32',
          label: '铺垫 Unit 32：有机结构推断题（Structural deduction）与化学鉴别实验',
          why: 'HKDSE 推断大题最爱给分子式如 C₄H₈O₂ 或 C₃H₆O，让你结合实验现象从官能团异构体中锁定唯一结构！'
        }
      ],
      questions: [
        {
          id: 'u30-s1-q1',
          level: 1,
          levelTag: 'Level 1 · 中文直觉破冰',
          type: 'mcq',
          stem: '丙醛（propanal, CH₃CH₂CHO）与丙酮（propanone, CH₃COCH₃）的分子式均为 C₃H₆O。它们之间属于哪一种同分异构关系？',
          cueWords: [],
          options: [
            'A. 碳链异构（chain isomerism）',
            'B. 位置异构（position isomerism）',
            'C. 官能团异构（functional group isomerism）',
            'D. 顺反异构（cis-trans isomerism）'
          ],
          answerIndex: 2,
          hint: '一个是醛（aldehyde），一个是酮（ketone）——它们属于同一个同系物（homologous series）吗？',
          explanation: 'propanal 属于醛（alkanal），而 propanone 属于酮（alkanone），两者属于不同的同系物（具不同的官能团特征与化学反应性，例如醛能被酸化重铬酸钾氧化而酮不能），因此属于官能团异构（functional group isomerism）。',
          commonMistake: '误以为两者都是 >C=O 挪了一下位置就选位置异构（position isomerism）——在 HKDSE 课本定义中，醛和酮分属不同同系物，严格归为 functional group isomers！'
        },
        {
          id: 'u30-s1-q2',
          level: 2,
          levelTag: 'Level 2 · 中英过渡实战',
          type: 'mcq',
          stem: 'How many ESTER structural isomers have the molecular formula C₄H₈O₂?',
          cueWords: [
            { phrase: 'ESTER structural isomers', zh: '仅限酯类的结构异构体', concept: '看清题干只数 ester（RCOOR\'），切勿把丁酸/甲基丙酸算进去！' },
            { phrase: 'molecular formula C₄H₈O₂', zh: '总碳数为 4 的酯', concept: '按酸部碳数分类穷举：1碳甲酸酯（配3碳丙基/异丙基）+ 2碳乙酸酯 + 3碳丙酸酯' }
          ],
          options: [
            'A. 2',
            'B. 3',
            'C. 4',
            'D. 6'
          ],
          answerIndex: 2,
          hint: '按酸部碳数有序穷举：① 甲酸酯 HCOOR\'（R\' 有 3 个碳，正丙基和异丙基有几种？）；② 乙酸酯 CH₃COOR\'（R\' 有 2 个碳）；③ 丙酸酯 CH₃CH₂COOR\'（R\' 有 1 个碳）！',
          explanation: '分子式为 C₄H₈O₂ 的酯（esters）共有 4 种结构异构体：\n① propyl methanoate（HCOOCH₂CH₂CH₃）\n② 1-methylethyl methanoate（HCOOCH(CH₃)₂）\n③ ethyl ethanoate（CH₃COOCH₂CH₃）\n④ methyl propanoate（CH₃CH₂COOCH₃）。（注：另外 2 种 butanoic acid 和 methylpropanoic acid 是羧酸而非酯，不计入内。）',
          commonMistake: '漏掉甲酸酯里的支链异丙基 HCOOCH(CH₃)₂ 而误选 B（3 种），或者把 2 种羧酸也混进去误选 D（6 种）。'
        },
        {
          id: 'u30-s1-q3',
          level: 3,
          levelTag: 'Level 3 · HKDSE 全英文实战',
          type: 'structured',
          stem: 'Compounds A and B are functional group isomers with the molecular formula C₂H₆O. Compound A reacts with sodium metal to give colourless gas bubbles, whereas compound B shows no observable change with sodium.\n(a) Draw the structural formulae of A and B.\n(b) Explain why the boiling point of A (78 °C) is much higher than that of B (−24 °C).',
          cueWords: [
            { phrase: 'functional group isomers with the molecular formula C₂H₆O', zh: '分子式为 C₂H₆O 的官能团异构体', concept: 'C₂H₆O 的经典搭档：乙醇（CH₃CH₂OH）与甲醚（CH₃OCH₃）' },
            { phrase: 'reacts with sodium metal', zh: '与金属钠反应放出气泡', concept: '含羟基（—OH）的醇 A 为 ethanol，不反应的醚 B 为 methoxymethane' },
            { phrase: 'boiling point of A (78 °C) is much higher than that of B (−24 °C)', zh: 'A 的沸点远高于 B', concept: '对比醇分子间氢键与醚分子间仅有范德华力' }
          ],
          hint: '(a) C₂H₆O 只有两种可能连接方式：C—C—O—H（醇）和 C—O—C（醚），谁能跟 Na 反应？(b) 为什么乙醇常温是液体（78 °C），而甲醚常温是气体（−24 °C）？',
          explanation: '(a) A 能与金属钠反应生成氢气，含羟基 —OH，故 A 为乙醇 CH₃CH₂OH；B 为其官能团异构体甲醚 CH₃OCH₃。\n(b) A（ethanol）分子含 —OH 基团，分子间可形成强氢键（intermolecular hydrogen bonds）及范德华力；B（methoxymethane）没有氢原子直接连在氧上，分子间仅存在较弱的范德华力（van der Waals\' forces only），因此沸腾时需更多能量克服 A 分子间的引力。',
          markingScheme: [
            '1M: (a) A: CH₃CH₂OH; B: CH₃OCH₃ (both correct for 1M)',
            '1M: (b) Molecules of A (ethanol) are held together by strong intermolecular hydrogen bonds (and van der Waals\' forces), whereas molecules of B (methoxymethane) are held by weaker van der Waals\' forces only.',
            '1M: (b) More heat energy is required to overcome the stronger intermolecular attractions between molecules of A during boiling.'
          ],
          commonMistake: '在 (a) 只写分子式 C₂H₅OH 而不把醚画清楚为 CH₃OCH₃；在 (b) 漏掉“intermolecular”一词。'
        }
      ]
    },

    // ------------------------------------------------------------------------
    // u30-s2: 30.3
    // ------------------------------------------------------------------------
    {
      id: 'u30-s2',
      code: '30.3',
      titleEn: 'Stereoisomerism (Part 1): Cis-trans isomerism and physical property paradox',
      titleZh: '立体异构（一）：顺反异构的两大必备条件与熔沸点反常规律',
      svgId: 'svg-cis-trans-isomers',
      svgCaption: '图解：顺-1,2-二氯乙烯（cis-1,2-dichloroethene）因同侧 C—Cl 极性偶极不抵消，属极性分子（polar molecule），范德华力更强，故沸点较高（60°C）；反-1,2-二氯乙烯（trans-1,2-dichloroethene）结构更对称（more symmetrical），固态晶格堆积更紧密（pack more closely），故熔点较高（−50°C）！',
      analogy: {
        icon: '🔩',
        title: '两颗钉子锁死木板（双键受限旋转） + 每头必须挂一红一蓝两个不同挂件！',
        body: '拿两块木板用一颗钉子钉在一起（碳碳单键 C—C single bond），两块板可以随便原地打转（自由旋转 free rotation），没有顺反可言；一旦钉上第二颗钉子（碳碳双键 C=C double bond），木板立刻被锁死转不动了（受限旋转 restricted rotation）！但光锁死还不够——如果左边木板上下两角挂的都是同款白球（比如 CH₂=CHCH₂CH₃ 左端是两个一模一样的 H），把它们上下对调根本看不出任何区别！只有双键左碳挂两个不同基团（a ≠ b），且右碳也挂两个不同基团（x ≠ y）时，相同基团在同侧才叫顺式（cis-），在对角异侧才叫反式（trans-）！'
      },
      coreExplanation: `
        <h4>1. 顺反异构（Cis-trans / Geometrical Isomerism）两大缺一不可的结构条件</h4>
        <p>当考题问“<em>Explain why compound X exhibits cis-trans isomerism（解释为何某化合物具有顺反异构）</em>”时，HKEAA 评分标准严格要求<strong>同时答齐以下两点</strong>：</p>
        <ul class="chem-list">
          <li><strong>条件 ①（旋转受阻）</strong>：分子中存在<strong>围绕碳碳双键（<code>C=C</code>）的受限旋转（<span class="term">受限旋转 <span class="en">restricted rotation about a C=C double bond</span></span>）</strong>。（对比：<code>1,2-dichloroethane</code> <code>CH₂Cl—CH₂Cl</code> 因围绕 <code>C—C</code> 单键可自由旋转 <em>free rotation</em>，故无顺反异构！）</li>
          <li><strong>条件 ②（每端各连两个不同基团）</strong>：<strong>构成双键的每一个碳原子都必须连接两个不同的原子或原子团（each carbon atom of the <code>C=C</code> double bond is attached to two different atoms or groups of atoms）</strong>，即在 <code>&gt;C(a)(b)=C(x)(y)&lt;</code> 中必须同时满足 <strong><code>a ≠ b</code> 且 <code>x ≠ y</code></strong>！（注：允许 <code>a = x</code>，如 <code>but-2-ene</code>，只要同一颗双键碳上的两个基团不同即可！）</li>
        </ul>

        <h4>2. 一秒筛查：哪些烯烃有顺反异构？哪些绝没有？</h4>
        <table class="chem-table">
          <thead>
            <tr>
              <th>化合物名称与结构式</th>
              <th>有无顺反异构？</th>
              <th>秒判理由（检查每颗双键碳上的两个基团）</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>but-1-ene</code>（<code>CH₂=CHCH₂CH₃</code>）</td>
              <td><strong>❌ 无</strong></td>
              <td><code>C-1</code> 连接了<strong>两个相同的 <code>H</code> 原子</strong>（凡含末端 <code>CH₂=</code> 的双键必无顺反异构！）。</td>
            </tr>
            <tr>
              <td><code>2-methylbut-2-ene</code>（<code>(CH₃)₂C=CHCH₃</code>）</td>
              <td><strong>❌ 无</strong></td>
              <td><code>C-2</code> 连接了<strong>两个相同的 <code>—CH₃</code> 基团</strong>！</td>
            </tr>
            <tr>
              <td><code>but-2-ene</code>（<code>CH₃CH=CHCH₃</code>）</td>
              <td><strong>✅ 有</strong></td>
              <td><code>C-2</code> 连 <code>—H</code> 与 <code>—CH₃</code>；<code>C-3</code> 也连 <code>—H</code> 与 <code>—CH₃</code> ⟶ <strong><code>cis-but-2-ene</code></strong> 与 <strong><code>trans-but-2-ene</code></strong>。</td>
            </tr>
            <tr>
              <td><code>pent-2-ene</code>（<code>CH₃CH=CHCH₂CH₃</code>）</td>
              <td><strong>✅ 有</strong></td>
              <td><code>C-2</code> 连 <code>—H</code> 与 <code>—CH₃</code>；<code>C-3</code> 连 <code>—H</code> 与 <code>—C₂H₅</code> ⟶ 两个 <code>H</code> 同侧为 <strong><code>cis-pent-2-ene</code></strong>，异侧为 <strong><code>trans-pent-2-ene</code></strong>。</td>
            </tr>
            <tr>
              <td><code>1,2-dichloroethene</code>（<code>CHCl=CHCl</code>）</td>
              <td><strong>✅ 有</strong></td>
              <td>每颗双键碳均连 <code>—H</code> 与 <code>—Cl</code> ⟶ <strong><code>cis-1,2-dichloroethene</code></strong> 与 <strong><code>trans-1,2-dichloroethene</code></strong>。</td>
            </tr>
          </tbody>
        </table>

        <h4>3. HKDSE 压轴高频必考：为什么通常 <code>cis</code> 沸点更高，而 <code>trans</code> 熔点更高？</h4>
        <p>以教科书最经典的 <strong><code>cis-1,2-dichloroethene</code></strong> 与 <strong><code>trans-1,2-dichloroethene</code></strong> 为例，两者的物理性质呈现极具规律的“沸点与熔点倒挂现象”：</p>
        <ul class="chem-list">
          <li><strong>🔥 沸点（Boiling point）：<code>cis</code>（60 °C）&gt; <code>trans</code>（48 °C）—— 看分子极性（Polarity / Net dipole moment）！</strong>
            <br>• 在 <code>cis-1,2-dichloroethene</code> 中，两个极性 <code>C—Cl</code> 键位于双键同一侧，它们的<strong>键偶极矩不互相抵消（bond dipoles reinforce each other / do not cancel out）</strong>，使整个分子具有<strong><span class="term">净偶极矩 <span class="en">net dipole moment</span></span></strong>，属于<strong>极性分子（polar molecule）</strong>；
            <br>• 在 <code>trans-1,2-dichloroethene</code> 中，两个极性 <code>C—Cl</code> 键指向正对角相反方向，<strong>键偶极矩完全互相抵消（cancel out each other）</strong>，净偶极矩为零，属于<strong>非极性分子（non-polar molecule）</strong>；
            <br>• 极性 <code>cis</code> 分子间的<strong>范德华力强于</strong>非极性 <code>trans</code> 分子间的范德华力，液体沸腾拆散分子需要更多能量，故 <strong><code>cis</code> 异构体沸点更高</strong>！（对 <code>cis-but-2-ene</code> 4 °C &gt; <code>trans-but-2-ene</code> 1 °C 同理。）
          </li>
          <li><strong>❄️ 熔点（Melting point）：<code>trans</code>（−50 °C）&gt; <code>cis</code>（−80 °C）—— 看对称性与晶格紧密堆积（Symmetry &amp; Close packing）！</strong>
            <br>• 熔化是从规则排列的固态晶体变为液态，关键取决于分子在<strong>固态晶格中的堆积效率（packing efficiency in the solid crystal lattice）</strong>；
            <br>• <code>trans</code> 异构体的分子形状比弯曲 U 形的 <code>cis</code> 异构体<strong>更加对称规整（more symmetrical / regular shape）</strong>，因此在固体状态下分子能够<strong>堆积得更加紧密（pack more closely / efficiently together in the solid state）</strong>；
            <br>• 更紧密的晶格堆积使固态分子间的有效引力更强，熔化时需要吸收更多热能去克服分子间作用力，故 <strong><code>trans</code> 异构体熔点更高</strong>！
          </li>
        </ul>

        <div class="callout callout-tip">
          <strong>💡 进阶拔高特例：丁-2-烯二酸（<code>but-2-enedioic acid</code>, <code>HOOCCH=CHCOOH</code>）的分子内氢键！</strong><br>
          在顺丁烯二酸（<code>cis-but-2-enedioic acid</code>，熔点 130 °C）中，同侧相邻的两个 <code>—COOH</code> 靠得很近，在<strong>同一个分子内部形成分子内氢键（intramolecular hydrogen bond）</strong>，反而减少了与其他分子形成分子间氢键的机会；而反丁烯二酸（<code>trans-but-2-enedioic acid</code>，熔点高达 287 °C）两侧 <code>—COOH</code> 相距甚远，全部用来与相邻分子形成<strong>广泛的分子间氢键（extensive intermolecular hydrogen bonds）</strong>，加上结构高度对称紧密堆积，熔点远高于顺式！
        </div>
      `,
      textbookFormulas: [
        {
          label: 'C₄H₈ 开链烯烃异构体总数 = 4 种（Acyclic alkene isomers of C₄H₈）',
          equationHtml: `but-1-ene &nbsp;|&nbsp; methylpropene &nbsp;|&nbsp; <strong>cis-but-2-ene</strong> &nbsp;|&nbsp; <strong>trans-but-2-ene</strong> &nbsp;（共 4 种！）`,
          note: '题目若未排除立体异构（all acyclic alkene isomers），but-2-ene 必须拆成 cis 与 trans 算作 2 种！'
        },
        {
          label: '顺反异构化学性质一致性（Identical addition product）',
          equationHtml: `cis-but-2-ene + H<sub>2</sub> <span class="chem-arrow"><span class="cond-top">Pt</span><span class="arr-main">⟶</span><span class="cond-bot"></span></span> CH<sub>3</sub>CH<sub>2</sub>CH<sub>2</sub>CH<sub>3</sub> &nbsp;&larr;&nbsp; trans-but-2-ene + H<sub>2</sub>`,
          note: '顺反异构体含相同官能团，与 H₂ 或 Br₂ 等发生加成反应时化学性质非常相似（加氢均生成同一种丁烷 butane）。'
        }
      ],
      examTrap: '两大致命失分点：① 被问及“How many acyclic alkene isomers have the molecular formula C₄H₈?”时漏算顺反异构只答 3 种（正确答案是 4 种：but-1-ene、methylpropene、cis-but-2-ene、trans-but-2-ene）！② 把沸点原因和熔点原因张冠李戴——记住口诀：“沸点看极性（cis polar → higher b.p.），熔点看对称堆积（trans more symmetrical & packs more closely → higher m.p.）”！',
      relations: [
        {
          type: 'buildsOn',
          targetUnitId: 'u27',
          label: '承接 Unit 27：烯烃 C=C 双键结构与加成反应（addition reactions）',
          why: '只有双键未被打断时顺反异构才存在；一旦发生催化加氢变成单键烷烃，受限旋转消失，顺反两种烯烃变成同一个烷烃分子。'
        },
        {
          type: 'compareWith',
          targetUnitId: 'u30',
          targetSectionId: 'u30-s4',
          label: '对比本单元 30.7：顺反异构体（熔沸点不同，可分馏分离）vs 对映异构体（熔沸点完全相同！）',
          why: '同属立体异构，但顺反异构体的物理性质截然不同，而一对对映异构体的常规物理性质一模一样！'
        }
      ],
      questions: [
        {
          id: 'u30-s2-q1',
          level: 1,
          levelTag: 'Level 1 · 中文直觉破冰',
          type: 'mcq',
          stem: '判断顺反异构（cis-trans isomerism）必须确认“双键的每一颗碳原子都连着两个不同的基团”。下列哪一种化合物具有顺反异构体？',
          cueWords: [],
          options: [
            'A. 1,2-dichloroethane（CH₂Cl—CH₂Cl）',
            'B. propene（CH₂=CHCH₃）',
            'C. 2-methylbut-2-ene（(CH₃)₂C=CHCH₃）',
            'D. pent-2-ene（CH₃CH=CHCH₂CH₃）'
          ],
          answerIndex: 3,
          hint: 'A 有没有 C=C 双键？B 的左端碳连了几个 H？C 的左端双键碳连了几个 —CH₃？D 的两颗双键碳各自连了什么？',
          explanation: 'D（pent-2-ene）具有 C=C 双键受限旋转，且 C-2 连接了 —H 与 —CH₃（不同），C-3 连接了 —H 与 —CH₂CH₃（也不同），完全满足两大条件，存在 cis-pent-2-ene 与 trans-pent-2-ene。A 是单键可自由旋转；B 左端双键碳连两个相同的 H；C 左端双键碳连两个相同的 —CH₃，均无顺反异构。',
          commonMistake: '误选 A（把单键二氯乙烷当成二氯乙烯）或误选 C（没注意到 (CH₃)₂C= 同一颗碳上挂了两个相同的甲基）。'
        },
        {
          id: 'u30-s2-q2',
          level: 2,
          levelTag: 'Level 2 · 中英过渡实战',
          type: 'mcq',
          stem: 'Which of the following statements concerning cis-1,2-dichloroethene and trans-1,2-dichloroethene are CORRECT?\n(1) cis-1,2-Dichloroethene is polar while trans-1,2-dichloroethene is non-polar.\n(2) cis-1,2-Dichloroethene has a higher boiling point than trans-1,2-dichloroethene.\n(3) cis-1,2-Dichloroethene has a higher melting point than trans-1,2-dichloroethene.',
          cueWords: [
            { phrase: 'cis-1,2-dichloroethene and trans-1,2-dichloroethene', zh: '顺-与反-1,2-二氯乙烯', concept: '顺式极性（高沸点），反式非极性但更对称紧密堆积（高熔点）' },
            { phrase: 'higher boiling point', zh: '较高沸点', concept: '沸点由极性/净偶极矩决定：cis > trans' },
            { phrase: 'higher melting point', zh: '较高熔点', concept: '熔点由晶格对称堆积紧密程度决定：trans > cis' }
          ],
          options: [
            'A. (1) and (2) only',
            'B. (1) and (3) only',
            'C. (2) and (3) only',
            'D. (1), (2) and (3)'
          ],
          answerIndex: 0,
          hint: '顺式（cis）有净偶极矩，沸点确实更高；但说到熔点（melting point），谁更对称、在固体晶格里码得更整齐紧密？',
          explanation: '(1) 正确：cis 异构体两个极性 C—Cl 键同侧不抵消，具净偶极矩属极性分子；trans 异构体对角完全抵消属非极性分子。(2) 正确：极性 cis 分子间范德华力更强，故沸点更高（60 °C > 48 °C）。(3) 错误：trans 异构体结构更对称（more symmetrical），在固态中堆积更紧密（packs more closely），因此 trans 熔点更高（−50 °C > −80 °C）！故选 A。',
          commonMistake: '以为沸点高就一定熔点也高，顺手把 (3) 判为正确而误选 D。'
        },
        {
          id: 'u30-s2-q3',
          level: 3,
          levelTag: 'Level 3 · HKDSE 全英文实战',
          type: 'structured',
          stem: '(a) Explain why but-2-ene exhibits cis-trans isomerism whereas but-1-ene does not.\n(b) Explain why trans-1,2-dibromoethene has a higher melting point than cis-1,2-dibromoethene.',
          cueWords: [
            { phrase: 'exhibits cis-trans isomerism', zh: '展现顺反异构现象', concept: '必须答齐双键受限旋转 + 每颗双键碳各连两个不同基团，并指出 but-1-ene C-1 连了两个相同 H' },
            { phrase: 'higher melting point', zh: '较高熔点', concept: '紧扣 more symmetrical shape → pack more closely in solid state → more energy to overcome intermolecular forces' }
          ],
          hint: '(a) 先写出 C=C 受限旋转（restricted rotation），再对比 but-2-ene 每颗双键碳连 —H 和 —CH₃，而 but-1-ene 的 C-1 连了两个相同的 H！(b) 熔点三连击：more symmetrical → pack more closely in solid crystal lattice → stronger intermolecular attractions / more energy needed。',
          explanation: '(a) 两者虽均有 C=C 双键受限旋转，但在 but-2-ene（CH₃CH=CHCH₃）中，双键的每一颗碳原子都连接了两个不同的原子/基团（一个 —H 和一个 —CH₃）；而在 but-1-ene（CH₂=CHCH₂CH₃）中，C-1 连接了两个相同的氢原子，因此没有顺反异构。\n(b) trans-1,2-dibromoethene 的分子形状比 cis 异构体更对称（more symmetrical），在固态晶格中分子能堆积得更紧密（pack more closely in the solid state），克服固态分子间作用力需要更多能量，故熔点更高。',
          markingScheme: [
            '1M: (a) There is restricted rotation about the C=C double bond, and in but-2-ene each carbon atom of the C=C bond is attached to two different atoms/groups (—H and —CH₃).',
            '1M: (a) In but-1-ene, one of the C=C carbon atoms (C-1) is attached to two identical hydrogen atoms.',
            '1M: (b) trans-1,2-Dibromoethene has a more symmetrical / regular molecular shape than the cis-isomer, so its molecules can pack more closely / efficiently together in the solid state (requiring more energy to overcome the intermolecular forces during melting).'
          ],
          commonMistake: '(a) 只写 but-2-ene 有两个不同基团，漏写“restricted rotation about the C=C double bond”丢 1 分；(b) 把熔点原因写成 trans 极性更强（trans 实际是非极性的！）。'
        }
      ]
    },

    // ------------------------------------------------------------------------
    // u30-s3: 30.4 - 30.6
    // ------------------------------------------------------------------------
    {
      id: 'u30-s3',
      code: '30.4–30.6',
      titleEn: 'Stereoisomerism (Part 2): Chirality, chiral carbon (C*) & 3D enantiomers',
      titleZh: '立体异构（二）：手性（Chirality）、手性碳秒判法（含环状分子）与三维对映体画法',
      svgId: 'svg-chiral-enantiomers-polarimeter',
      svgCaption: '图解：左图展示 2-丁醇（butan-2-ol）的手性碳（C*）连有四个不同基团（—OH、—CH₃、—C₂H₅、—H），跨虚线镜面（mirror plane）形成一对互为镜像且不可重叠的对映异构体（enantiomers）；右图为旋光仪（polarimeter）原理示意。',
      analogy: {
        icon: '🧤',
        title: '左手与右手手套：互为完美镜中像，但怎么翻都套不重合！',
        body: '把你的左手举到镜子前，镜子里的像跟你的右手一模一样（互为镜像 mirror images）；但如果你把左手掌心朝下、右手掌心也朝下叠在一起，大拇指一个朝右一个朝左，永远无法严丝合缝地重合（不能重叠 non-superimposable）！分子世界里也有这种神奇的“左右手属性”，叫做手性（chirality）：只要一颗碳原子手拉手牵着四个完全不同的原子或基团，这颗碳就叫手性碳（chiral carbon, C*），分子内部找不到对称面（no plane of symmetry），它的左手版分子和右手版分子就是一对对映异构体（enantiomers）！'
      },
      coreExplanation: `
        <h4>1. 手性、对称面与手性碳（Chiral Carbon, <code>C*</code>）的核心定义</h4>
        <ul class="chem-list">
          <li><strong><span class="term">手性 <span class="en">chirality</span></span> 与 <span class="term">手性分子 <span class="en">chiral molecule</span></span></strong>：一个分子如果<strong>与其自身的镜像不能重叠（not superimposable on its mirror image）</strong>，则该分子具有手性，称为手性分子。手性分子内部<strong>不存在 <span class="term">对称面 <span class="en">plane of symmetry</span></span></strong>；反之，有对称面的分子必为非手性分子（<span class="term">非手性分子 <span class="en">achiral molecule</span></span>）。</li>
          <li><strong><span class="term">对映异构体 <span class="en">enantiomers</span></span></strong>：互为<strong>不能重叠的镜像关系（<span class="term">互为镜像且不能重叠 <span class="en">non-superimposable mirror images</span></span>）</strong>的一对立体异构体（也称旋光异构体 <em>optical isomers</em>）。</li>
          <li><strong><span class="term">手性碳原子 <span class="en">chiral carbon</span></span>（常标星号 <code>C*</code>）</strong>：连接着<strong>四个不同的原子或原子团（bonded to four different atoms or groups of atoms）</strong>的饱和四面体碳原子。在 HKDSE 范围内，<strong>只含 1 个手性碳原子的分子必定是手性分子</strong>，拥有一对对映异构体！</li>
        </ul>

        <h4>2. DSE 考场三步秒找手性碳（<code>C*</code>）排查法（含高频环状分子！）</h4>
        <ul class="chem-list">
          <li><strong>第一步：一秒划掉绝不可能是手性碳的结构！</strong>
            <br>• 所有的 <strong><code>—CH₃</code></strong>（含 3 个相同 H）和 <strong><code>—CH₂—</code></strong>（含 2 个相同 H） ⟶ <strong>直接排除！</strong>
            <br>• 所有含双键、三键或苯环的不饱和碳：<strong><code>&gt;C=C&lt;</code>、<code>—C≡C—</code>、<code>&gt;C=O</code>、<code>—CHO</code>、<code>—COOH</code>、<code>—CONH₂</code>、<code>—COOR</code>、苯环碳</strong>（连接原子/基团总数不足 4 个！） ⟶ <strong>直接排除！</strong>
          </li>
          <li><strong>第二步：只检查剩下的 <code>—CH(X)(Y)—</code> 或季碳，把四个基团完整展开比对！</strong>
            <br>• 正例：<code>butan-2-ol</code>（<code>CH₃—C*H(OH)—CH₂CH₃</code>）中，<code>C-2</code> 连接 <code>—H</code>、<code>—OH</code>、<code>—CH₃</code>、<code>—CH₂CH₃</code> 四个不同基团 ⟶ <strong>是手性碳！</strong>
            <br>• 经典伪装陷阱：<code>pentan-3-ol</code>（<code>CH₃CH₂—CH(OH)—CH₂CH₃</code>）中，<code>C-3</code> 左右两侧连的都是乙基 <code>—CH₂CH₃</code>（完全相同，分子正中央有对称面！） ⟶ <strong>无手性碳（achiral）！</strong>
            <br>• 最小手性烷烃：<code>3-methylhexane</code>（<code>CH₃CH₂—C*H(CH₃)—CH₂CH₂CH₃</code>），<code>C-3</code> 连 <code>—H</code>、<code>—CH₃</code>、<code>—C₂H₅</code>、<code>—C₃H₇</code> ⟶ <strong>是手性碳！</strong>
          </li>
          <li><strong>第三步：环状分子（Cyclic molecules）“顺逆时针双向绕环法”！</strong>
            <br>遇到环上的 <code>CH</code> 碳（已连两个不同环外基团如 <code>—H</code> 和 <code>—CH₃</code>），从该碳出发分别沿环<strong>顺时针走一圈</strong>与<strong>逆时针走一圈</strong>：
            <br>• 若两条路径遇到的原子/双键/取代基顺序<strong>不同</strong> ⟶ 等效于连了四个不同基团，<strong>是手性碳！</strong>例如 <strong><code>3-methylcyclohexene</code></strong> 中 <code>C-3</code> 一边紧邻 <code>—CH=CH—</code>，另一边紧邻 <code>—CH₂—CH₂—</code>，两边路径不同，故 <strong><code>C-3</code> 为手性碳</strong>！
            <br>• 若两条绕环路径<strong>完全相同</strong> ⟶ 分子有对称面，<strong>不是手性碳！</strong>例如 <strong><code>4-methylcyclohexanol</code></strong> 中无论看 <code>C-1</code> 还是 <code>C-4</code>，左右两侧绕环路径都是完全对称的 <code>—CH₂—CH₂—</code>，故<strong>无手性碳</strong>！
          </li>
        </ul>

        <h4>3. 三维实楔线/虚楔线（3D Wedge-and-Dash）画一对对映异构体的满分规范</h4>
        <div class="struct-card">
          <pre class="struct-pre">       COOH       ┆       COOH          【三维化学键符号含义】
        |         ┆        |            • 实线 (—)     ：位于纸面平面内的键 (in the plane of paper)
        C*        ┆        C*           • 实心楔形 (◀) ：伸向纸外朝向读者的键 (pointing towards observer)
      / ◀  ⋯      ┆      ⋯  ▶ \         • 虚线楔形 (⋯) ：伸向纸内远离读者的键 (pointing away from observer)
  H₃C  OH   H     ┆     H   HO  CH₃
                  ┆
             Mirror plane (虚线镜面：靠近镜面的基团镜像后仍靠近镜面，注意连接原子准确！)</pre>
          <div class="struct-cap">以乳酸（2-hydroxypropanoic acid, CH₃C*H(OH)COOH）为例：先画中间竖直虚线镜面，左分子画好四面体（两实线、一实楔、一虚楔），右分子严格左右镜像对称！</div>
        </div>

        <div class="callout callout-warn">
          <strong>⚠️ 画 3D 对映异构体最惨痛的“连错原子”扣分坑！</strong><br>
          当把基团画在手性碳 <code>C*</code> 的<strong>左侧</strong>时，共价键短线必须精准指向<strong>真正与碳成键的那颗原子</strong>！例如左接羟基必须写成 <strong><code>HO—C*</code></strong>（严禁写 <code>OH—C*</code> 变成氢连碳！），左接羧基必须写 <strong><code>HOOC—C*</code></strong>，左接甲基写 <strong><code>H₃C—C*</code></strong>，左接乙基写 <strong><code>C₂H₅—C*</code></strong> 或 <strong><code>CH₃CH₂—C*</code></strong>（键连在 <code>CH₂</code> 的碳上）！
        </div>
      `,
      textbookFormulas: [
        {
          label: '天然手性 α-氨基酸代表：丙氨酸（2-aminopropanoic acid / alanine）',
          equationHtml: `CH<sub>3</sub>—C<sup>*</sup>H(NH<sub>2</sub>)—COOH &nbsp;（C-2 连接 —H、—NH<sub>2</sub>、—CH<sub>3</sub>、—COOH 四个不同基团）`,
          note: '除最简单的甘氨酸 aminoethanoic acid（H₂NCH₂COOH，C-2 连两个相同 H，无手性！）外，绝大多数天然氨基酸均含手性碳。'
        },
        {
          label: '同时含顺反异构与手性碳的多立体中心分子示例',
          equationHtml: `CH<sub>3</sub>CH=CH—C<sup>*</sup>H(OH)CH<sub>3</sub> &nbsp;（pent-3-en-2-ol：既有 C=C 顺反异构，C-2 又是手性碳！）`,
          note: '其 cis 异构体有一对对映体，trans 异构体也有一对对映体，合共 4 种立体异构体！'
        }
      ],
      examTrap: '选择题常考“Which of the following amino acids / alcohols is achiral（非手性）?”：① 氨基酸里唯独 aminoethanoic acid（H₂NCH₂COOH，甘氨酸 glycine）因为中间是 —CH₂— 连了两个相同的 H，没有手性碳！② 画对映体时漏画三维楔形键（把四个键全画成平面十字架 90° 实线），在要求“Draw 3-D structures of the pair of enantiomers”的题目中得 0 分！',
      relations: [
        {
          type: 'buildsOn',
          targetUnitId: 'u30',
          targetSectionId: 'u30-s1',
          label: '承接本单元 30.1：立体异构分支（连接顺序相同，三维空间构型不同）',
          why: '对映异构体的 IUPAC 主名称完全相同（都叫 butan-2-ol），唯独三维四面体构型呈左右手镜像。'
        },
        {
          type: 'leadsTo',
          targetUnitId: 'u30',
          targetSectionId: 'u30-s4',
          label: '直通本单元 30.7：手性分子独有的旋光性（optical activity）与生物锁钥识别',
          why: '找到 C* 判定分子具有手性后，下一步就是用旋光仪区分这一对双胞胎对映体。'
        }
      ],
      questions: [
        {
          id: 'u30-s3-q1',
          level: 1,
          levelTag: 'Level 1 · 中文直觉破冰',
          type: 'mcq',
          stem: '手性碳原子（chiral carbon, C*）必须连接四个完全不同的原子或原子团。请问下列哪一种醇具有手性（chiral）？',
          cueWords: [],
          options: [
            'A. propan-1-ol（CH₃CH₂CH₂OH）',
            'B. propan-2-ol（CH₃CH(OH)CH₃）',
            'C. butan-2-ol（CH₃CH(OH)CH₂CH₃）',
            'D. 2-methylpropan-2-ol（(CH₃)₃COH）'
          ],
          answerIndex: 2,
          hint: '逐一检查连着 —OH 的那颗碳原子：A 有两个相同的 H；B 有两个相同的甲基；D 有三个相同的甲基；C 呢？',
          explanation: '在 butan-2-ol（CH₃—C*H(OH)—CH₂CH₃）中，C-2 碳原子同时连接了 —H、—OH、—CH₃ 和 —CH₂CH₃ 四个完全不同的原子/基团，因此含有 1 个手性碳原子，属于手性分子（chiral molecule）。A 的 C-1 连两个 H，B 的 C-2 连两个 —CH₃，D 的 C-2 连三个 —CH₃，均无手性碳。',
          commonMistake: '看漏了 B（propan-2-ol）两侧都是甲基 —CH₃，或者把叔醇 D 连着三个相同甲基误看成手性碳。'
        },
        {
          id: 'u30-s3-q2',
          level: 2,
          levelTag: 'Level 2 · 中英过渡实战',
          type: 'mcq',
          stem: 'Which of the following compounds contain(s) a chiral carbon?\n(1) 2-aminopropanoic acid (CH₃CH(NH₂)COOH)\n(2) 3-methylcyclohexene\n(3) pentan-3-ol (CH₃CH₂CH(OH)CH₂CH₃)',
          cueWords: [
            { phrase: 'chiral carbon', zh: '手性碳原子', concept: '饱和碳连 4 个不同基团；环状分子需顺逆时针双向绕环对比路径' },
            { phrase: '3-methylcyclohexene', zh: '3-甲基环己烯', concept: 'C-3 外连 —H 与 —CH₃，沿环一侧为 —CH=CH—，另一侧为 —CH₂—CH₂—，路径不同！' },
            { phrase: 'pentan-3-ol', zh: '戊-3-醇', concept: 'C-3 两侧均连乙基 —CH₂CH₃，存在对称面，无手性碳' }
          ],
          options: [
            'A. (1) only',
            'B. (1) and (2) only',
            'C. (2) and (3) only',
            'D. (1), (2) and (3)'
          ],
          answerIndex: 1,
          hint: '检查 (2) 3-methylcyclohexene 的 3 号碳：除了 —H 和 —CH₃，顺时针绕环和逆时针绕环遇到的双键位置一样吗？再看 (3) pentan-3-ol 左右两边是不是对称的？',
          explanation: '(1) 含手性碳：C-2 连接 —H、—NH₂、—CH₃、—COOH 四个不同基团。\n(2) 含手性碳：3-methylcyclohexene 的 C-3 连接 —H 与 —CH₃，且沿环两侧路径分别为 —CH=CH—CH₂—CH₂— 与 —CH₂—CH₂—CH=CH—，互不相同，故 C-3 是手性碳！\n(3) 无手性碳：pentan-3-ol 的 C-3 连接了两个相同的乙基（—CH₂CH₃）。因此正确组合为 B。',
          commonMistake: '看到环状分子 (2) 不敢下笔绕环检查而漏选 (2)，只选了 A。'
        },
        {
          id: 'u30-s3-q3',
          level: 3,
          levelTag: 'Level 3 · HKDSE 全英文实战',
          type: 'structured',
          stem: '2-Chlorobutane (CH₃CHClCH₂CH₃) is a chiral compound.\n(a) Explain why 2-chlorobutane is chiral.\n(b) Describe clearly how to draw the three-dimensional structures of the pair of enantiomers of 2-chlorobutane (using C*, —H, —Cl, —CH₃ and —C₂H₅) and state the relationship between them.',
          cueWords: [
            { phrase: 'Explain why 2-chlorobutane is chiral', zh: '解释为何 2-氯丁烷具有手性', concept: '指出 C-2 连有 4 个不同基团，分子与其镜像不能重叠（或无对称面）' },
            { phrase: 'three-dimensional structures of the pair of enantiomers', zh: '一对对映异构体的三维立体结构', concept: '必须使用三维楔形式（两实线、一实心楔、一虚线楔）跨镜面左右对称画出，且注意成键原子连接准确' }
          ],
          hint: '(a) 点出 C-2 连接哪四个不同的原子/基团，并补上一句 non-superimposable on its mirror image。(b) 说明用两条平面实线、一条实心楔线（solid wedge）和一条虚楔线（dashed wedge）跨镜面画出左右镜像，且注意左侧基团写 H₃C— 或 C₂H₅—！',
          explanation: '(a) 在 2-chlorobutane 中，C-2 碳原子连接着四个不同的原子或基团（—H、—Cl、—CH₃ 和 —C₂H₅），为手性碳原子；整个分子没有对称面，与其镜像不能重叠（non-superimposable on its mirror image），因此具有手性。\n(b) 画出中间竖直虚线代表镜面（mirror plane）；左侧手性碳 C* 用两条实线（平面内，如上方连 —Cl、左下方连 H₃C— 或 C₂H₅—）、一条实心楔形线（伸出纸面）和一条虚线楔形线（伸入纸内）呈四面体连接四个基团；右侧分子画成严格跨镜面的横向反射镜像（靠近镜面的基团镜像后仍靠近镜面），两者互为不能重叠的镜像（non-superimposable mirror images）。',
          markingScheme: [
            '1M: (a) C-2 of 2-chlorobutane is a chiral carbon bonded to four different atoms/groups (—H, —Cl, —CH₃ and —C₂H₅), so the molecule has no plane of symmetry / is non-superimposable on its mirror image.',
            '1M: (b) Correct 3D tetrahedral wedge-and-dash representation for one isomer (2 solid lines, 1 solid wedge, 1 dashed wedge with correct atom connectivity around C*).',
            '1M: (b) Correct lateral mirror-image 3D representation for the second isomer across a mirror plane, stating they are non-superimposable mirror images.'
          ],
          commonMistake: '画成平面 90° 十字架不画实楔/虚楔立体键；或者镜像翻转时把连接原子写错（如把左连乙基画成 —H₅C₂ 连在 H 上）。'
        }
      ]
    },

    // ------------------------------------------------------------------------
    // u30-s4: 30.7
    // ------------------------------------------------------------------------
    {
      id: 'u30-s4',
      code: '30.7',
      titleEn: 'Properties of enantiomers, optical activity, polarimeter & racemic mixtures',
      titleZh: '对映异构体的性质异同、旋光仪（Polarimeter）测定与外消旋混合物',
      analogy: {
        icon: '🕶️',
        title: '电子秤称不出左右手手套的区别，但“偏振光旋转门”和“右手握手”一试便知！',
        body: '把一只左手手套和一只右手手套分别放上天平称重、量尺寸、泡进普通水桶里——重量、大小、吸水率百分之百一模一样！同理，一对对映异构体（enantiomers）的熔点、沸点、密度、普通溶剂溶解度全都完全相同，连跟溴水、重铬酸钾这些非手性试剂（achiral reagents）反应的快慢和现象也分毫不差，分馏（fractional distillation）根本分不开它们！那怎么区分？只有两把“手性尺子”：① 用旋光仪（polarimeter）发射只在一个平面振动的平面偏振光（plane-polarized light），左手分子把它顺时针拧转 +θ°，右手分子就逆时针拧转一模一样的 −θ°（如果左右手 1:1 等量混在一起变成外消旋混合物 racemic mixture，一顺一逆刚好抵消归零！）；② 放进人体，手性酶受体（chiral receptors）就像伸出右手跟你握手，只有右手药物分子握得上起效！'
      },
      coreExplanation: `
        <h4>1. 一对对映异构体有哪些完全相同的性质？（DSE 选择题常设陷阱！）</h4>
        <ul class="chem-list">
          <li><strong>常规物理性质完全相同（Identical physical properties）</strong>：一对对映异构体具有<strong>完全相同的熔点（melting point）、沸点（boiling point）、密度（density）、折射率及在非手性溶剂（如水、乙醇、己烷）中的溶解度</strong>。<br>
          <em>重要推论：<strong>绝对不能</strong>用简单蒸馏（simple distillation）、分馏（fractional distillation）或普通重结晶来区分或分离一对对映异构体！</em></li>
          <li><strong>与非手性试剂的化学性质完全相同（Identical chemical properties towards achiral reagents）</strong>：与普通非手性试剂（如 <code>Na</code>、<code>Br₂</code>、<code>HCl</code>、酸化 <code>K₂Cr₂O₇(aq)</code> 等）反应时，反应速率、生成物产率及实验观察现象完全一致！</li>
        </ul>

        <h4>2. 唯一物理鉴别法：旋光性（Optical Activity）与旋光仪（Polarimeter）</h4>
        <p>普通光在垂直于传播方向的所有平面上振动；当普通光穿过起偏振片（polarizer）后，变成只在<strong>单一平面上振动</strong>的 <span class="term">平面偏振光 <span class="en">plane-polarized light</span></span>。用 <span class="term">旋光仪 <span class="en">polarimeter</span></span> 让平面偏振光穿过手性样品溶液管（sample tube）时：</p>
        <ul class="chem-list">
          <li>单一纯净的对映异构体具有 <strong><span class="term">旋光性 <span class="en">optical activity</span></span>（optically active）</strong>，能使<strong>平面偏振光的偏振面发生偏转（rotates the plane of polarization of plane-polarized light）</strong>：
            <br>• <strong><code>(+)</code>-异构体（右旋体）</strong>：使偏振面<strong>顺时针旋转（clockwise）</strong> <code>+θ°</code>；
            <br>• <strong><code>(−)</code>-异构体（左旋体）</strong>：在相同浓度、温度与管长条件下，使偏振面<strong>逆时针旋转（anticlockwise / counter-clockwise）完全相同的角度大小（to the same extent, <code>−θ°</code>，方向相反 in opposite directions）</strong>！
          </li>
        </ul>

        <h4>3. 外消旋混合物（Racemic Mixture）—— 为什么含手性分子却没有旋光性？</h4>
        <ul class="chem-list">
          <li><strong>定义</strong>：由一对对映异构体按<strong>等摩尔比（<code>1 : 1</code> / <code>50% : 50%</code> equimolar mixture）</strong>混合而成的混合物称为 <span class="term">外消旋混合物 <span class="en">racemic mixture</span></span>。</li>
          <li><strong>无旋光性的微观本质（Optically inactive — 必背采分句！）</strong>：外消旋混合物<strong>不具旋光性（optically inactive，偏转角为 <code>0°</code>）</strong>！因为在混合物中，<code>(+)</code>-异构体引起的顺时针偏转，被<strong>等量（equal amount）</strong>的 <code>(−)</code>-异构体引起的等幅逆时针偏转<strong>完全互相抵消（completely cancelled out externally）</strong>！（注：在实验室用非手性反应物合成手性分子时，通常会等概率生成两种对映体，从而得到无旋光性的外消旋混合物；此外，外消旋混合物的固态晶格堆积与单一纯对映体不同，故其<strong>熔点可能与纯对映体不同</strong>，但沸点相同。）</li>
        </ul>

        <h4>4. 生物与药理活性差异（Different Biological Activities）</h4>
        <p>生物体内的酶（enzymes）和细胞受体（receptors）由手性氨基酸构成，本身具有三维手性活性位点（chiral active sites）。就像右手手套只能套进右手一样，一对对映异构体与手性受体的结合能力截然不同：例如某些手性药物中，只有一种对映体具有治疗药效，而另一种对映体可能毫无药效甚至具有严重毒副作用（如致畸性）；又如香芹酮（<code>carvone</code>）的一种对映体闻起来是留兰香薄荷味，另一种则是葛缕子香料味。</p>

        <h4>5. 终极总结表：顺反异构体（Cis-trans isomers）vs 对映异构体（Enantiomers）</h4>
        <table class="chem-table">
          <thead>
            <tr>
              <th>比较维度</th>
              <th>顺反异构体（Cis-trans isomers）</th>
              <th>对映异构体（Enantiomers）</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>结构成因</strong></td>
              <td><code>C=C</code> 受限旋转，且每颗双键碳各连两个不同基团</td>
              <td>分子无对称面（常含连 4 个不同基团的手性碳 <code>C*</code>），互为不可重叠镜像</td>
            </tr>
            <tr>
              <td><strong>熔点、沸点、密度、溶解度</strong></td>
              <td><strong>不同！</strong>（通常 <code>cis</code> 沸点较高，<code>trans</code> 熔点较高）</td>
              <td><strong>完全相同！</strong></td>
            </tr>
            <tr>
              <td><strong>能否用分馏（fractional distillation）分离？</strong></td>
              <td><strong>能</strong>（利用沸点差异）</td>
              <td><strong>不能！</strong>（沸点一模一样）</td>
            </tr>
            <tr>
              <td><strong>对平面偏振光的作用（旋光性）</strong></td>
              <td>无旋光性（除非分子另含手性中心）</td>
              <td><strong>有旋光性！</strong>等幅反向旋转平面偏振光的偏振面（<code>+θ°</code> vs <code>−θ°</code>）</td>
            </tr>
            <tr>
              <td><strong>与普通非手性试剂的化学反应</strong></td>
              <td>非常相似（含相同官能团）</td>
              <td><strong>完全相同</strong>（速率与产物一致）</td>
            </tr>
          </tbody>
        </table>

        <div class="callout callout-warn">
          <strong>⚠️ HKEAA 英文表述精准红线（漏词必扣分！）：</strong><br>
          回答如何用物理方法区分一对对映异构体时，<strong>绝不可只写“rotate light in opposite directions”</strong>！必须完整写出标准术语：<strong><code>Measure their optical activities using a polarimeter: the two enantiomers rotate the plane of polarization of plane-polarized light to the same extent (by the same angle) but in opposite directions (one clockwise, the other anticlockwise).</code></strong>（漏掉 <strong><code>plane-polarized light</code></strong> 直接丢分！）
        </div>
      `,
      textbookFormulas: [
        {
          label: '对映异构体对平面偏振光的等幅反向偏转（Optical rotation of enantiomers）',
          equationHtml: `(+)-enantiomer : rotates plane of polarization of <strong>plane-polarized light</strong> clockwise (+θ°)<br>(−)-enantiomer : rotates plane of polarization of <strong>plane-polarized light</strong> anticlockwise (−θ°)`,
          note: '相同浓度与管长下，偏转角绝对值完全相等，方向一顺一逆。'
        },
        {
          label: '外消旋混合物（Racemic mixture）净旋光度归零',
          equationHtml: `50% (+)-enantiomer (+θ°) &nbsp;+&nbsp; 50% (−)-enantiomer (−θ°) &nbsp;⟶&nbsp; <strong>Racemic mixture (net rotation = 0°, optically inactive)</strong>`,
          note: '注意分子本身仍是手性分子，只是等摩尔正负旋光在宏观上互相完全抵消！'
        }
      ],
      examTrap: '极高频易错题：“A racemic mixture is optically inactive because its molecules are achiral（外消旋混合物无旋光性是因为其分子是非手性的）”——这句话完全错误！外消旋混合物里的每一个分子依然是正宗的手性分子（chiral molecules），无旋光性仅仅是因为 1:1 等摩尔的 (+) 与 (−) 对映体对平面偏振光的顺、逆时针旋转角度正好互相抵消（cancel out each other）！',
      relations: [
        {
          type: 'buildsOn',
          targetUnitId: 'u30',
          targetSectionId: 'u30-s3',
          label: '紧接本单元 30.4–30.6：手性碳（C*）与非重叠镜像结构',
          why: '分子内部缺乏对称面是产生宏观旋光性的结构根源。'
        },
        {
          type: 'leadsTo',
          targetUnitId: 'u31',
          label: '衔接 Unit 31：为什么丁酮（butanone）用 NaBH₄(aq) 还原生成的丁-2-醇没有旋光性？',
          why: '平面羰基从正反两侧受进攻几率完全相等（50% : 50%），生成等摩尔的 (+) 和 (−) 丁-2-醇，即外消旋混合物（racemic mixture）！'
        }
      ],
      questions: [
        {
          id: 'u30-s4-q1',
          level: 1,
          levelTag: 'Level 1 · 中文直觉破冰',
          type: 'mcq',
          stem: '现有两瓶未贴标签的纯液体，分别是 (+)-butan-2-ol 和 (−)-butan-2-ol（一对对映异构体 enantiomers）。下列哪种方法可以成功把它们区分开？',
          cueWords: [],
          options: [
            'A. 精确测定并比较两者的沸点（boiling points）',
            'B. 分别加入酸化重铬酸钾溶液（acidified K₂Cr₂O₇(aq)）温热，观察颜色变化快慢',
            'C. 使用旋光仪（polarimeter）测量它们对平面偏振光（plane-polarized light）偏振面的旋转方向',
            'D. 比较两者在蒸馏水中的溶解度（solubility in water）'
          ],
          answerIndex: 2,
          hint: '沸点、水溶性以及与酸化重铬酸钾这类非手性试剂（achiral reagent）的反应，能分辨出左右手镜像分子吗？',
          explanation: '一对对映异构体具有完全相同的沸点、密度、水溶性，且与非手性试剂（如酸化重铬酸钾）反应速率和现象完全一致，故 A、B、D 均无法区分。唯一有效的物理鉴别法是用旋光仪（polarimeter）测定旋光性：(+)-butan-2-ol 使平面偏振光的偏振面顺时针旋转，而 (−)-butan-2-ol 使其逆时针旋转相同角度。',
          commonMistake: '误以为立体异构体沸点都不同（那是顺反异构体！对映异构体的沸点完全一样！）。'
        },
        {
          id: 'u30-s4-q2',
          level: 2,
          levelTag: 'Level 2 · 中英过渡实战',
          type: 'mcq',
          stem: 'Which of the following statements about a racemic mixture of 2-hydroxypropanoic acid (CH₃CH(OH)COOH) is CORRECT?',
          cueWords: [
            { phrase: 'racemic mixture', zh: '外消旋混合物', concept: '含 1 : 1 等摩尔的一对 (+) 与 (−) 对映异构体' },
            { phrase: '2-hydroxypropanoic acid', zh: '2-羟基丙酸（乳酸）', concept: 'C-2 为手性碳，两种对映体旋光方向相反且等幅抵消' }
          ],
          options: [
            'A. It can be separated into its two pure enantiomers by fractional distillation.',
            'B. It rotates the plane of polarization of plane-polarized light clockwise.',
            'C. It is optically inactive because the opposite rotations caused by equimolar amounts of the two enantiomers cancel out each other.',
            'D. Its molecules do not contain any chiral carbon.'
          ],
          answerIndex: 2,
          hint: '外消旋混合物里 (+) 分子和 (−) 分子的比例是多少？它们各自的沸点一样吗？合在一起对偏振光的净旋转是多少度？',
          explanation: 'C 正确！外消旋混合物（racemic mixture）是 (+)-异构体与 (−)-异构体的 1:1 等摩尔混合物（equimolar mixture），两者的顺时针与逆时针旋光效应大小相等、方向相反，完全互相抵消，因此宏观上不具旋光性（optically inactive）。A 错：对映体沸点相同，不能用分馏分离；B 错：净偏转为 0°；D 错：每个乳酸分子依然含有一个手性碳 C-2。',
          commonMistake: '混淆“分子手性”与“混合物旋光性”，误选 D；或误以为混合物能通过分馏分离而选 A。'
        },
        {
          id: 'u30-s4-q3',
          level: 3,
          levelTag: 'Level 3 · HKDSE 全英文实战',
          type: 'structured',
          stem: 'A student has two pure liquid samples known to be the two enantiomers of butan-2-ol.\n(a) Explain why the two samples CANNOT be distinguished by measuring their boiling points.\n(b) Suggest a physical test to distinguish between the two samples and state the expected observations.',
          cueWords: [
            { phrase: 'two enantiomers of butan-2-ol', zh: '丁-2-醇的一对对映异构体', concept: '常规物理性质完全相同，仅对平面偏振光旋转方向不同' },
            { phrase: 'CANNOT be distinguished by measuring their boiling points', zh: '不能通过测沸点区分', concept: '一对对映异构体具有完全相同的分子间作用力与完全相同的沸点' },
            { phrase: 'physical test to distinguish', zh: '物理鉴别测试及预期观察', concept: '必答 polarimeter + plane-polarized light + clockwise vs anticlockwise to the same extent' }
          ],
          hint: '(a) 一对对映异构体的沸点有什么关系？(b) 写出仪器名称 polarimeter，光的名字 plane-polarized light，以及两个样品各自的预期观察结果（一个顺时针，另一个逆时针旋转相同角度）！',
          explanation: '(a) 一对对映异构体具有完全相同的物理性质（分子间作用力强弱完全相同），因此两者的沸点完全一样，无法通过测沸点区分。\n(b) 使用旋光仪（polarimeter）测量两者对平面偏振光（plane-polarized light）的作用：其中一个对映体使平面偏振光的偏振面顺时针旋转（clockwise），而另一个对映体使偏振面逆时针旋转相同的角度（anticlockwise to the same extent）。',
          markingScheme: [
            '1M: (a) A pair of enantiomers have identical physical properties / the exact same boiling point (same strength of intermolecular forces).',
            '1M: (b) Measure their optical activities using a polarimeter (pass plane-polarized light through each sample separately).',
            '1M: (b) One enantiomer rotates the plane of polarization of plane-polarized light clockwise, while the other rotates it anticlockwise (to the same extent / by the same angle).'
          ],
          commonMistake: '在 (b) 只写“pass light through them”而漏写核心词“plane-polarized light”（平面偏振光）及“plane of polarization”（偏振面），直接损失采分点！'
        }
      ]
    }
  ],

  // ==========================================================================
  // UNIT 30 EXAM LONG QUESTIONS
  // ==========================================================================
  unitExamLongQuestions: [
    {
      id: 'u30-long-1',
      title: '综合长题 1：C₄H₈ 异构体全集与顺反异构体熔沸点反常深度解析（Isomers of C₄H₈ & Cis-trans Physical Properties）',
      totalMarks: 7,
      scenarioEn: 'Consider carbon compounds with the molecular formula C₄H₈, as well as the pair of geometrical (cis-trans) isomers of 1,2-dichloroethene:\n• cis-1,2-dichloroethene: melting point = −80 °C, boiling point = 60 °C\n• trans-1,2-dichloroethene: melting point = −50 °C, boiling point = 48 °C',
      scenarioZhSummary: '本题结合分子式 C₄H₈ 的全异构体推演（包含开链烯烃顺反异构与环烷烃官能团异构），并给出顺-与反-1,2-二氯乙烯的真实熔点、沸点实验数据，要求从分子极性（polarity）与固态对称紧密堆积（symmetrical packing）严谨解释为何顺式沸点更高而反式熔点更高。',
      cueWords: [
        { phrase: 'molecular formula C₄H₈', zh: '符合 CₙH₂ₙ 通式的四碳化合物', concept: '包含 4 种开链烯烃（含顺反丁-2-烯）及环烷烃（环丁烷、甲基环丙烷）' },
        { phrase: 'geometrical (cis-trans) isomers', zh: '几何（顺反）异构体', concept: '围绕 C=C 受限旋转且每颗双键碳连两个不同基团' },
        { phrase: 'cis-1,2-dichloroethene: melting point = −80 °C, boiling point = 60 °C', zh: '顺式：熔点较低（−80 °C），沸点较高（60 °C）', concept: '同侧 C—Cl 偶极不抵消 → 极性分子 → 较强范德华力 → 较高沸点' },
        { phrase: 'trans-1,2-dichloroethene: melting point = −50 °C, boiling point = 48 °C', zh: '反式：熔点较高（−50 °C），沸点较低（48 °C）', concept: '偶极抵消 → 非极性分子（低沸点）；但形状更对称 → 固态堆积更紧密（高熔点）' }
      ],
      subQuestions: [
        {
          part: '(a)',
          marks: 2,
          promptEn: 'Give the systematic IUPAC names of ALL acyclic (open-chain) isomers with the molecular formula C₄H₈.',
          commandWord: { word: 'Give', tip: '看清“ALL acyclic isomers”（所有开链异构体，包含结构异构与立体异构），4 个名称全部写对拿满分！' },
          hint: '直链烯烃有 1-位和 2-位（记得把 2-位拆成 cis 和 trans！），再加一个 3 碳主链带甲基支链的烯烃，合共 4 个！',
          markingScheme: [
            '1M: but-1-ene AND methylpropene (or 2-methylpropene)',
            '1M: cis-but-2-ene AND trans-but-2-ene'
          ],
          explanationZh: 'C₄H₈ 的开链异构体全部为烯烃：包括端烯 but-1-ene、支链烯 methylpropene，以及具有顺反异构的一对 cis-but-2-ene 和 trans-but-2-ene，合共 4 种。'
        },
        {
          part: '(b)',
          marks: 1,
          promptEn: 'Name ONE cyclic isomer of C₄H₈ and state the type of structural isomerism between this cyclic compound and but-1-ene.',
          commandWord: { word: 'Name & State', tip: '环烷烃（cycloalkane）与烯烃（alkene）属于不同同系物，必答 functional group isomerism！' },
          hint: '4 个碳围成一个环叫什么？环烷烃与烯烃是什么结构异构关系？',
          markingScheme: [
            '1M: cyclobutane (OR methylcyclopropane); functional group isomerism (both required for 1M)'
          ],
          explanationZh: 'C₄H₈ 的环状异构体为环丁烷（cyclobutane）或甲基环丙烷（methylcyclopropane）；饱和环烷烃与不饱和烯烃属于不同同系物，互为官能团异构（functional group isomerism）。'
        },
        {
          part: '(c)',
          marks: 2,
          promptEn: 'Explain why cis-1,2-dichloroethene has a higher boiling point (60 °C) than trans-1,2-dichloroethene (48 °C).',
          commandWord: { word: 'Explain', tip: '先对比两分子的键偶极抵消情况（polar vs non-polar），再比较分子间范德华力强弱。' },
          hint: 'cis 中两个极性 C—Cl 键在同侧，偶极抵消吗？trans 呢？谁分子间范德华力更强？',
          markingScheme: [
            '1M: In cis-1,2-dichloroethene, the polarities (bond dipoles) of the two polar C—Cl bonds do not cancel out, making it a polar molecule; whereas in trans-1,2-dichloroethene, the two C—Cl bond dipoles cancel out each other, making it non-polar.',
            '1M: The intermolecular van der Waals\' forces between polar cis-1,2-dichloroethene molecules are stronger than those between non-polar trans-1,2-dichloroethene molecules (so more energy is needed to boil the cis-isomer).'
          ],
          explanationZh: '顺式异构体同侧的两个极性 C—Cl 键偶极矩互相叠加不抵消，具有净偶极矩，属极性分子；反式异构体对角 C—Cl 键偶极矩完全抵消，属非极性分子。极性顺式分子间的范德华力更强，故沸点更高。'
        },
        {
          part: '(d)',
          marks: 2,
          promptEn: 'Explain why trans-1,2-dichloroethene has a higher melting point (−50 °C) than cis-1,2-dichloroethene (−80 °C).',
          commandWord: { word: 'Explain', tip: '紧扣固态晶体两步因果：more symmetrical shape → pack more closely in the solid state → stronger intermolecular attractions in solid / more energy to melt。' },
          hint: '固体熔化看晶格堆积：trans 分子形状有什么优势？在固态里怎么排列？',
          markingScheme: [
            '1M: trans-1,2-Dichloroethene has a more symmetrical / regular shape than cis-1,2-dichloroethene, allowing its molecules to pack more closely / efficiently in the solid state.',
            '1M: Hence, more heat energy is required to overcome the stronger effective intermolecular attractions in solid trans-1,2-dichloroethene during melting.'
          ],
          explanationZh: '反式异构体的分子结构比弯曲 U 形的顺式异构体更对称规整，在固态晶格中能堆积得更加紧密，因此熔化时需要吸收更多能量来克服固态分子间作用力，熔点更高。'
        }
      ]
    },
    {
      id: 'u30-long-2',
      title: '综合长题 2：多官能团分子的手性碳判别、对映体三维构型与外消旋混合物（Chirality, Polarimeter & Racemic Mixture）',
      totalMarks: 7,
      scenarioEn: 'Compound M has the condensed structural formula CH₃CH=CHCH(OH)COOH.\nIn an experiment, catalytic hydrogenation of M with excess H₂(g) in the presence of platinum produces saturated compound N (CH₃CH₂CH₂CH(OH)COOH). Synthetic compound N obtained in the laboratory is found to be an equimolar mixture of two stereoisomers (+)-N and (−)-N.',
      scenarioZhSummary: '化合物 M（CH₃CH=CHCH(OH)COOH）同时含有碳碳双键与手性碳；经铂催化加氢（catalytic hydrogenation）后双键饱和，生成化合物 N（2-羟基戊酸）。实验室合成得到的 N 是 (+)-N 与 (−)-N 的等摩尔混合物（即外消旋混合物 racemic mixture），全面考查多类型立体异构分析、手性保持及旋光测定。',
      cueWords: [
        { phrase: 'CH₃CH=CHCH(OH)COOH', zh: '含 C=C 双键及 —CH(OH)COOH 的不饱和羟基酸', concept: '同时满足顺反异构条件（C-3=C-4）与手性碳条件（C-2 连 4 个不同基团）！' },
        { phrase: 'catalytic hydrogenation of M with excess H₂(g)', zh: 'M 与过量氢气催化加氢', concept: 'C=C 变为 —CH₂—CH₂—，顺反异构消失，但 C-2 依然连 4 个不同基团，仍具手性！' },
        { phrase: 'equimolar mixture of two stereoisomers (+)-N and (−)-N', zh: '(+)-N 与 (−)-N 的等摩尔混合物', concept: '即外消旋混合物（racemic mixture），正负旋光抵消导致宏观无旋光性' }
      ],
      subQuestions: [
        {
          part: '(a)',
          marks: 1,
          promptEn: 'Give the systematic IUPAC name of saturated compound N (CH₃CH₂CH₂CH(OH)COOH).',
          commandWord: { word: 'Give', tip: '—COOH 为 C-1 母体（pentanoic acid），C-2 上的 —OH 作词头 hydroxy-！' },
          hint: '主链连同 —COOH 共 5 个碳，羟基在 2 号位，作前缀叫什么？',
          markingScheme: [
            '1M: 2-hydroxypentanoic acid'
          ],
          explanationZh: 'N 主链含 5 个碳，羧基（—COOH）优先级最高固定为 C-1（pentanoic acid），C-2 上的羟基降为前缀 2-hydroxy-，故命名为 2-hydroxypentanoic acid。'
        },
        {
          part: '(b)',
          marks: 2,
          promptEn: 'State the TWO types of stereoisomerism exhibited by compound M, and briefly identify the structural feature responsible for each type.',
          commandWord: { word: 'State & Identify', tip: 'M 既有双键顺反异构，又有手性碳对映异构，逐一点明名称及对应结构部位！' },
          hint: '看 M（CH₃CH=CH—C*H(OH)COOH）的左边 CH₃CH=CH— 有什么异构？右边的 —CH(OH)COOH 碳连了哪四个不同基团？',
          markingScheme: [
            '1M: Cis-trans (geometrical) isomerism: restricted rotation about the C=C double bond (C-3=C-4) with each C=C carbon attached to two different groups.',
            '1M: Enantiomerism (optical isomerism): C-2 (—CH(OH)—) is a chiral carbon atom bonded to four different atoms/groups (—H, —OH, —COOH and —CH=CHCH₃).'
          ],
          explanationZh: 'M 同时展现两种立体异构：① 顺反异构（cis-trans isomerism），源于 C-3=C-4 双键受限旋转且每颗双键碳各连两个不同基团；② 对映异构（enantiomerism），源于 C-2 是连接了 —H、—OH、—COOH 和 —CH=CHCH₃ 四个不同基团的手性碳原子。'
        },
        {
          part: '(c)',
          marks: 2,
          promptEn: 'Pure (+)-N and pure (−)-N react separately with aqueous sodium hydrogencarbonate (NaHCO₃(aq)). State whether there is any difference in observation, and explain how pure (+)-N and pure (−)-N can be distinguished experimentally.',
          commandWord: { word: 'State & Explain', tip: '第一问明确答无区别（NaHCO₃ 非手性试剂，均产生无色 CO₂ 气泡）；第二问写出 polarimeter 与 plane-polarized light！' },
          hint: 'NaHCO₃(aq) 是非手性试剂，反应现象有差别吗？区分纯 (+)-N 和 (−)-N 必须靠什么仪器和什么光？',
          markingScheme: [
            '1M: No difference in observation (both give colourless gas bubbles / effervescence at the same rate as NaHCO₃ is achiral).',
            '1M: Using a polarimeter, pure (+)-N and pure (−)-N rotate the plane of polarization of plane-polarized light to the same extent but in opposite directions (clockwise vs anticlockwise).'
          ],
          explanationZh: '一对对映异构体与非手性试剂 NaHCO₃(aq) 的化学性质完全相同，均以相同速率产生无色气泡（CO₂），外观无任何差别。要区分纯 (+)-N 与纯 (−)-N，需使用旋光仪（polarimeter）：两者使平面偏振光（plane-polarized light）的偏振面朝相反方向（一顺时针、一逆时针）旋转相同角度。'
        },
        {
          part: '(d)',
          marks: 2,
          promptEn: 'What is the special term for the synthetic equimolar mixture of (+)-N and (−)-N? Explain why this mixture shows zero optical rotation in a polarimeter.',
          commandWord: { word: 'Explain', tip: '先写专业术语 racemic mixture，再答等量正负异构体对平面偏振光的相反旋转互相完全抵消。' },
          hint: '1:1 等摩尔对映体混合物的专业英文名是什么？为什么放进旋光仪读数是 0°？',
          markingScheme: [
            '1M: Racemic mixture.',
            '1M: The clockwise rotation of plane-polarized light caused by (+)-N is completely cancelled out by the equal anticlockwise rotation caused by an equal amount of (−)-N.'
          ],
          explanationZh: '一对对映异构体的等摩尔混合物称为外消旋混合物（racemic mixture）。由于样品中 (+)-N 与 (−)-N 的分子数目完全相等，(+)-N 引起的顺时针偏转与 (−)-N 引起的等幅逆时针偏转完全互相抵消，故旋光仪读数为零（无旋光性）。'
        }
      ]
    }
  ]
});
