window.CHEM_UNITS = window.CHEM_UNITS || [];
window.CHEM_UNITS.push({
  id: 'u31',
  unitNum: 'Unit 31',
  book: 'Book 3B · Topic 8',
  topicId: 'topic8',
  titleEn: 'Typical reactions of selected functional groups',
  titleZh: '各官能团的典型反应',
  colorTheme: 'rose',
  summary: 'Unit 31 是整套有机化学（organic chemistry）最核心的“反应引擎”单元！我们将系统打通烷烃（alkanes）、不对称烯烃（unsymmetrical alkenes）的马氏规则（Markovnikov\'s rule）加成、卤代烷（haloalkanes）的碱性水解（alkaline hydrolysis）与卤素离子检验、醇（alcohols）的卤代/脱水（dehydration）/可控氧化（oxidation）、醛（aldehydes）与酮（ketones）的鉴别与还原（reduction）、羧酸（carboxylic acids）的酯化反应（esterification）与酰胺转化，以及酯（esters）与未取代酰胺（unsubstituted amides）在酸碱介质中的水解反应（hydrolysis）。掌握本单元，就能看懂 HKDSE 所有有机推断与多步合成题！',
  keyTerms: [
    { en: 'Markovnikov\'s rule', zh: '马氏规则（氢多加氢）', cat: 'Concept' },
    { en: 'unsymmetrical alkene', zh: '不对称烯烃', cat: 'Substance' },
    { en: 'major product / minor product', zh: '主产物 / 副产物', cat: 'Concept' },
    { en: 'alkaline hydrolysis', zh: '碱性水解', cat: 'Reaction' },
    { en: 'sodium alkoxide', zh: '醇钠（R—O⁻Na⁺）', cat: 'Substance' },
    { en: 'phosphorus pentachloride (PCl₅)', zh: '五氯化磷（检验 -OH 产白雾）', cat: 'Reagent' },
    { en: 'thionyl chloride (SOCl₂)', zh: '氯化亚砜 / 二氯氧化硫', cat: 'Reagent' },
    { en: 'dehydration', zh: '脱水反应（消去反应）', cat: 'Reaction' },
    { en: 'heating under reflux', zh: '回流加热', cat: 'Apparatus' },
    { en: 'distillation', zh: '蒸馏', cat: 'Apparatus' },
    { en: 'acidified potassium dichromate solution', zh: '酸化重铬酸钾溶液（橙变绿）', cat: 'Reagent' },
    { en: 'sodium borohydride (NaBH₄)', zh: '硼氢化钠（温和还原剂）', cat: 'Reagent' },
    { en: 'lithium aluminium hydride (LiAlH₄)', zh: '氢化铝锂（强还原剂，需无水乙醚）', cat: 'Reagent' },
    { en: 'esterification', zh: '酯化反应（可逆反应 ⇌）', cat: 'Reaction' },
    { en: 'saponification', zh: '皂化反应（酯的不可逆碱性水解）', cat: 'Reaction' },
    { en: 'acyl chloride', zh: '酰氯（RCOCl）', cat: 'Substance' },
    { en: 'unsubstituted amide', zh: '未取代酰胺（RCONH₂）', cat: 'Substance' },
    { en: 'sodium hydrogencarbonate (NaHCO₃)', zh: '碳酸氢钠（检验 -COOH 冒泡）', cat: 'Reagent' }
  ],
  sections: [
    // =========================================================================
    // SECTION 1: 31.1 - 31.3 Alkanes & Addition of HX to Unsymmetrical Alkenes
    // =========================================================================
    {
      id: 'u31-s1',
      code: '31.1–31.3',
      titleEn: 'Revisiting alkanes & Addition of HX to unsymmetrical alkenes (Markovnikov\'s rule)',
      titleZh: '烷烃取代回顾与不对称烯烃加成（马氏规则）',
      analogy: {
        icon: '🧲',
        title: '“氢多加氢、富者越富”的座位分配法则',
        body: '想象一列双人座车厢代表碳碳双键（C=C double bond）：当对称乘客如溴分子（bromine, Br₂）或氢气（hydrogen, H₂）上车时，左右两个碳座位分到的原子完全一样，不会产生分歧；但如果上车的是“一头氢 H、一头卤素 X”的卤化氢（hydrogen halide, HX），而两个双键碳原本带的氢原子（hydrogen atoms）数目又不同（不对称烯烃 unsymmetrical alkene），氢原子 H 最喜欢往“原本氢朋友更多”的那个双键碳座位上挤！这就是著名的马氏规则（Markovnikov\'s rule），它直接决定了谁是占大多数的主产物（major product），谁是占少数的副产物（minor product）。'
      },
      coreExplanation: `
        <h4>1. 温故知新：烷烃（Alkanes）与对称加成反应（Symmetrical Addition）</h4>
        <p>在进入复杂官能团（<span class="term">官能团 <span class="en">functional groups</span></span>）之前，先快速串联 Unit 27 的核心基础：</p>
        <ul class="chem-list">
          <li><span class="term">烷烃 <span class="en">alkanes</span></span>属于饱和烃（<span class="term">饱和烃 <span class="en">saturated hydrocarbons</span></span>），只含单键，化学性质不活泼。除了燃烧反应（<span class="term">燃烧 <span class="en">combustion</span></span>）外，典型反应是在 <strong><code>UV light</code>（紫外光）或 <code>heat</code>（加热）</strong> 条件下与卤素（<span class="term">氯气 <span class="en">chlorine, Cl₂</span></span> 或 <span class="term">溴 <span class="en">bromine, Br₂</span></span>）发生 <span class="term">自由基取代反应 <span class="en">free radical substitution</span></span>（历经 <code>Initiation</code> 链引发、<code>Propagation</code> 链增长、<code>Termination</code> 链终止三阶段），生成卤代烷（<span class="term">卤代烷 <span class="en">haloalkanes</span></span>）混合物。</li>
          <li><span class="term">烯烃 <span class="en">alkenes</span></span>含有不饱和的 <span class="term">碳碳双键 <span class="en">carbon-carbon double bond, C=C</span></span>，典型反应是 <span class="term">加成反应 <span class="en">addition reactions</span></span>：
            <br>① <strong>催化加氢 / 氢化反应（<span class="term">氢化反应 <span class="en">hydrogenation</span></span>）</strong>：与 <code>H<sub>2</sub>(g)</code> 在 <code>Pt</code>（铂 platinum）、<code>Pd</code>（钯 palladium）或 <code>Ni, heat</code>（镍催化剂加热）下生成烷烃（alkane）。
            <br>② <strong>卤化反应（<span class="term">卤化反应 <span class="en">halogenation</span></span>）</strong>：室温避光下与溶于有机溶剂的 <code>Br<sub>2</sub></code>（<code>Br<sub>2</sub> (in organic solvent)</code>）迅速加成，橙棕色（orange / reddish-brown）立即褪色（decolorizes），生成邻二溴代烷（vicinal dibromoalkane）。</li>
        </ul>

        <h4>2. 不对称烯烃（Unsymmetrical Alkenes）与卤化氢（HX）的加成</h4>
        <p>当一个烯烃分子中 <code>C=C</code> 双键两端的碳原子所连接的原子或基团不同时，称为 <span class="term">不对称烯烃 <span class="en">unsymmetrical alkene</span></span>，例如 <span class="term">丙烯 <span class="en">propene, CH₃CH=CH₂</span></span>、<span class="term">丁-1-烯 <span class="en">but-1-ene, CH₃CH₂CH=CH₂</span></span> 和 <span class="term">甲基丙烯 <span class="en">methylpropene, (CH₃)₂C=CH₂</span></span>。</p>
        <p>当不对称试剂 <span class="term">卤化氢 <span class="en">hydrogen halide, HX</span></span>（如 <code>HCl</code>、<code>HBr</code>、<code>HI</code>）与不对称烯烃发生加成反应时，由于 <code>H</code> 和 <code>X</code> 可以有两种相反的连接方向，反应会生成<strong>两种互为位置异构体（<span class="term">位置异构体 <span class="en">position isomers</span></span>）的卤代烷（haloalkanes）</strong>，但两者的产量并不相等！</p>

        <div class="callout callout-tip">
          <strong>💡 课本核心定律 —— 马氏规则（Markovnikov's rule）标准英文表述：</strong><br>
          <em>"When a molecule HX adds to an unsymmetrical alkene, the hydrogen atom H attaches mainly to the carbon atom of the carbon-carbon double bond that already carries a greater number of hydrogen atoms."</em><br>
          <strong>中文记忆口诀（氢多加氢 / 富者越富）：</strong>当卤化氢（<code>HX</code>）加成到不对称烯烃（unsymmetrical alkene）上时，氢原子（<code>H</code>）<strong>主要</strong>连接到 <code>C=C</code> 双键中<strong>原本带有较多氢原子</strong>的那个碳原子上，而卤素原子（<code>X</code>）则主要连接到原本带有较少氢原子的双键碳原子上。
        </div>

        <h4>3. 经典实例拆解：主产物（Major Product）vs 副产物（Minor Product）</h4>
        <div class="struct-card">
          <pre class="struct-pre">例 1：丙烯 Propene + 溴化氢 Hydrogen bromide (HBr)

                      ┌──► CH₃—CHBr—CH₃   2-bromopropane（2-溴丙烷）★ MAJOR PRODUCT 主产物
  CH₃—CH = CH₂ + HBr ─┤    (H 加到含 2 个 H 的 C1 上，Br 加到含 1 个 H 的 C2 上)
     (1H)  (2H)       └──► CH₃—CH₂—CH₂Br  1-bromopropane（1-溴丙烷）☆ minor product 副产物

例 2：甲基丙烯 Methylpropene + 氯化氢 Hydrogen chloride (HCl)

                      ┌──► (CH₃)₃C—Cl     2-chloro-2-methylpropane（2-氯-2-甲基丙烷）★ MAJOR 主产物
  (CH₃)₂C = CH₂ + HCl ┤    (H 加到含 2 个 H 的 =CH₂ 碳上，Cl 加到含 0 个 H 的双键碳上)
      (0H)  (2H)      └──► (CH₃)₂CH—CH₂Cl 1-chloro-2-methylpropane（1-氯-2-甲基丙烷）☆ minor 副产物</pre>
          <div class="struct-cap">数清 C=C 两端双键碳各自直接相连的 H 原子数（注意：只数直接连在双键碳上的 H，别把甲基 -CH₃ 里的 H 算进去！）</div>
        </div>

        <table class="chem-table">
          <thead>
            <tr>
              <th>起始烯烃（Alkene）</th>
              <th>C=C 两端碳上的 H 数目</th>
              <th>加 <code>HBr</code> 后的主产物（Major product）</th>
              <th>加 <code>HBr</code> 后的副产物（Minor product）</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>乙烯 <code>ethene (CH₂=CH₂)</code>（对称）</td>
              <td>C1: 2H，C2: 2H</td>
              <td colspan="2">唯一产物：溴乙烷 <code>bromoethane (CH₃CH₂Br)</code></td>
            </tr>
            <tr>
              <td>丙烯 <code>propene (CH₃CH=CH₂)</code></td>
              <td>C1(<code>=CH₂</code>): 2H，C2(<code>-CH=</code>): 1H</td>
              <td>2-溴丙烷 <code>2-bromopropane</code></td>
              <td>1-溴丙烷 <code>1-bromopropane</code></td>
            </tr>
            <tr>
              <td>丁-1-烯 <code>but-1-ene (CH₃CH₂CH=CH₂)</code></td>
              <td>C1(<code>=CH₂</code>): 2H，C2(<code>-CH=</code>): 1H</td>
              <td>2-溴丁烷 <code>2-bromobutane</code>（含手性碳 C*！）</td>
              <td>1-溴丁烷 <code>1-bromobutane</code></td>
            </tr>
            <tr>
              <td>戊-2-烯 <code>pent-2-ene (CH₃CH₂CH=CHCH₃)</code></td>
              <td>C2(<code>-CH=</code>): <strong>1H</strong>，C3(<code>=CH-</code>): <strong>1H</strong></td>
              <td colspan="2"><strong>DSE 高频陷阱！</strong>两个双键碳均带 1 个 H，马氏规则无偏向，生成约等量的 <code>2-bromopentane</code> 与 <code>3-bromopentane</code> 混合物！</td>
            </tr>
          </tbody>
        </table>

        <div class="callout callout-warn">
          <strong>⚠️ 课本规范警示：</strong><br>
          1. 在 HKDSE 答题时，解释为什么某个卤代烷是主产物（major product），<strong>必须直接引用马氏规则（Markovnikov's rule）并指明哪个双键碳原本带有更多氢原子（carries a greater number of H atoms）</strong>。<br>
          2. 马氏规则说的是 <code>major product</code>（占大多数），<strong>绝不是</strong> 100% 唯一产物！题目若问“生成多少种有机产物”，不对称烯烃加 <code>HX</code> 仍会生成两种位置异构体（如果产生手性中心 chiral carbon 如 <code>2-bromobutane</code>，考虑立体异构体 stereoisomers 时还要把一对对映异构体 enantiomers 算进去！）。
        </div>
      `,
      textbookFormulas: [
        {
          label: '丙烯与溴化氢加成（Addition of HBr to propene — Markovnikov\'s rule）',
          equationHtml: `CH<sub>3</sub>CH=CH<sub>2</sub> + HBr <span class="chem-arrow"><span class="cond-top"></span><span class="arr-main">⟶</span><span class="cond-bot"></span></span> CH<sub>3</sub>CHBrCH<sub>3</sub> (major) + CH<sub>3</sub>CH<sub>2</sub>CH<sub>2</sub>Br (minor)`,
          note: '室温下即可反应，无需催化剂或紫外光（UV light）；主产物为 2-溴丙烷（2-bromopropane），副产物为 1-溴丙烷（1-bromopropane）。'
        },
        {
          label: '烯烃催化氢化反应（Catalytic hydrogenation of alkene）',
          equationHtml: `CH<sub>3</sub>CH=CH<sub>2</sub>(g) + H<sub>2</sub>(g) <span class="chem-arrow"><span class="cond-top">Pt (or Pd / Ni, heat)</span><span class="arr-main">⟶</span><span class="cond-bot"></span></span> CH<sub>3</sub>CH<sub>2</sub>CH<sub>3</sub>(g)`,
          note: '铂（Pt）或钯（Pd）作催化剂（catalyst）可在室温下反应；若使用镍（Ni）催化剂则需加热（heat）。'
        },
        {
          label: '烷烃自由基取代回顾（Free radical substitution of alkane）',
          equationHtml: `CH<sub>3</sub>CH<sub>3</sub>(g) + Br<sub>2</sub>(l) <span class="chem-arrow"><span class="cond-top">UV light (or heat)</span><span class="arr-main">⟶</span><span class="cond-bot"></span></span> CH<sub>3</sub>CH<sub>2</sub>Br(l) + HBr(g)`,
          note: '反应条件严格按课本规范写 UV light 或 sunlight / heat；缓慢褪色且产生白雾 HBr(g)。'
        }
      ],
      examTrap: '数“氢多加氢”时，考生常犯的最大错误是数错了碳原子！比如在甲基丙烯 (CH₃)₂C=CH₂ 中，左边双键碳连着两个甲基（共 6 个 H），但直接连在该双键碳上的 H 数目是 0！右边 =CH₂ 双键碳直接连有 2 个 H，因此 H 加到右边 =CH₂ 上生成 (CH₃)₃C—X 为主产物（major product）。另外切记戊-2-烯（pent-2-ene）虽是不对称烯烃，但两个双键碳各带 1 个 H，无明显单一主产物！',
      relations: [
        {
          type: 'buildsOn',
          targetUnitId: 'u27',
          label: '衔接 Unit 27：对称烯烃加成反应（addition reactions）与溴水检验不饱和键',
          why: 'Unit 27 学习了乙烯（ethene）加 Br₂/H₂ 生成唯一产物，本节将其拓展到不对称烯烃（unsymmetrical alkenes）加 HX 时的区域选择性（马氏规则 Markovnikov\'s rule）。'
        },
        {
          type: 'leadsTo',
          targetUnitId: 'u32',
          label: '通向 Unit 32：利用马氏规则将伯醇转化为仲醇（propan-1-ol → propene → 2-bromopropane → propan-2-ol）',
          why: '通过“醇脱水成烯烃 → 按马氏规则加 HBr → 碱性水解成醇”三步曲，可以把官能团从碳链末端 C1 精准搬移到中间 C2 位置！'
        }
      ],
      questions: [
        {
          id: 'u31-s1-q1',
          level: 1,
          levelTag: 'Level 1 · 中文直觉破冰',
          type: 'mcq',
          stem: '根据《Mastering Chemistry》中的马氏规则（Markovnikov\'s rule），当甲基丙烯（methylpropene, (CH₃)₂C=CH₂）与氯化氢气体（HCl(g)）发生加成反应（addition reaction）时，所得的主产物（major product）是什么？',
          cueWords: [],
          options: [
            'A. 1-氯-2-甲基丙烷（1-chloro-2-methylpropane）',
            'B. 2-氯-2-甲基丙烷（2-chloro-2-methylpropane）',
            'C. 1,2-二氯-2-甲基丙烷（1,2-dichloro-2-methylpropane）',
            'D. 2-氯丁烷（2-chlorobutane）'
          ],
          answerIndex: 1,
          hint: '先看 (CH₃)₂C=CH₂ 中 C=C 双键两端的碳原子：左边双键碳直接连了几个 H？右边 =CH₂ 碳直接连了几个 H？按“氢多加氢”把 H 和 Cl 对号入座！',
          explanation: '在甲基丙烯（methylpropene, (CH₃)₂C=CH₂）中，C1（=CH₂）直接连有 2 个氢原子（hydrogen atoms），而 C2（(CH₃)₂C=）直接连有 0 个氢原子。根据马氏规则（Markovnikov\'s rule），HCl 中的 H 原子主要加到含 H 较多的 C1 上变成 -CH₃，Cl 原子加到 C2 上，生成主产物（major product）(CH₃)₃CCl，系统命名为 2-氯-2-甲基丙烷（2-chloro-2-methylpropane）。',
          commonMistake: '误以为左边 (CH₃)₂C= 带着两个甲基共 6 个 H 就算“氢多”，从而错选 A！切记只看直接连在 C=C 双键碳原子上的 H 数目。'
        },
        {
          id: 'u31-s1-q2',
          level: 2,
          levelTag: 'Level 2 · 中英过渡实战',
          type: 'mcq',
          stem: '下列哪一个烯烃（alkene）与溴化氢（hydrogen bromide, HBr）在室温下发生加成反应（addition reaction）时，不会（does NOT）因为马氏规则（Markovnikov\'s rule）而偏向某一个碳原子，而是生成两种产率相近的位置异构溴代烷（position isomeric bromoalkanes）？',
          cueWords: [
            { phrase: 'hydrogen bromide, HBr', zh: '溴化氢', concept: '不对称加成试剂 HX' },
            { phrase: 'position isomeric bromoalkanes', zh: '位置异构溴代烷', concept: '要求不对称烯烃，但两个双键碳所带 H 数目相同' }
          ],
          options: [
            'A. 丁-1-烯（but-1-ene, CH₃CH₂CH=CH₂）',
            'B. 丁-2-烯（but-2-ene, CH₃CH=CHCH₃）',
            'C. 戊-2-烯（pent-2-ene, CH₃CH₂CH=CHCH₃）',
            'D. 2-甲基丁-2-烯（2-methylbut-2-ene, (CH₃)₂C=CHCH₃）'
          ],
          answerIndex: 2,
          hint: '逐一检查四个选项：① 分子本身是不是不对称（加 HBr 会不会给两种不同位置异构体）？② C=C 两个碳上直接连的 H 数目是不是相等？',
          explanation: 'A 项丁-1-烯（but-1-ene）双键碳分别带 2H 和 1H，按马氏规则主产物为 2-bromobutane；B 项丁-2-烯（but-2-ene）是对称烯烃（symmetrical alkene），无论加哪边都只生成唯一的 2-bromobutane；D 项 2-甲基丁-2-烯双键碳分别带 0H 和 1H，主产物为 2-bromo-2-methylbutane；只有 C 项戊-2-烯（pent-2-ene, CH₃CH₂CH=CHCH₃）既是不对称烯烃，同时 C2 和 C3 两个双键碳各带 1 个 H，马氏规则无偏向，生成产率接近的 2-bromopentane 和 3-bromopentane！',
          commonMistake: '容易错选 B（丁-2-烯）：忽略了丁-2-烯完全对称，加 HBr 后 2 号位和 3 号位等价，都叫 2-bromobutane，根本没有两种位置异构体！'
        },
        {
          id: 'u31-s1-q3',
          level: 3,
          levelTag: 'Level 3 · HKDSE 全英文实战',
          type: 'structured',
          stem: '1-methylcyclohexene reacts with hydrogen bromide at room temperature to form two isomeric bromoalkanes, X (major product) and Y (minor product). State Markovnikov\'s rule, deduce the systematic name of X, and explain why X is formed as the major product.',
          cueWords: [
            { phrase: '1-methylcyclohexene', zh: '1-甲基环己烯', concept: '环状不对称烯烃：C1 连有 -CH₃（0 个 H），C2 连有 1 个 H' },
            { phrase: 'hydrogen bromide', zh: '溴化氢（HBr）', concept: '不对称加成试剂 HX' },
            { phrase: 'major product', zh: '主产物', concept: '需引用 Markovnikov\'s rule 判断 H 加在 C2、Br 加在 C1' }
          ],
          hint: '先画出 1-methylcyclohexene 的六元环双键：1 号双键碳连着甲基 -CH₃（所以带 0 个 H），2 号双键碳连着 1 个 H。根据 Markovnikov\'s rule，H 加去 C2，Br 加去 C1！',
          explanation: '在 1-甲基环己烯（1-methylcyclohexene）的 C=C 双键中，连有甲基（methyl group）的 C1 碳原子带有 0 个氢原子，而相邻的 C2 双键碳原子带有 1 个氢原子。根据马氏规则（Markovnikov\'s rule），HBr 中的氢原子主要连接到含氢较多的 C2 上，溴原子连接到 C1 上，生成主产物 1-溴-1-甲基环己烷（1-bromo-1-methylcyclohexane）。',
          markingScheme: [
            '1M: Markovnikov\'s rule: When HX adds to an unsymmetrical alkene, the H atom attaches mainly to the carbon atom of the C=C double bond that already carries a greater number of H atoms.',
            '1M: Systematic name of X: 1-bromo-1-methylcyclohexane.',
            '1M: In 1-methylcyclohexene, C2 of the C=C bond carries 1 H atom while C1 (attached to -CH3) carries no H atom; hence H attaches mainly to C2 and Br attaches to C1.'
          ],
          commonMistake: '命名主产物时写成了 2-bromo-1-methylcyclohexane（那是副产物 Y！），或者忘了把溴和甲基同时在 1 号位写成 1-bromo-1-methylcyclohexane。'
        }
      ]
    },

    // =========================================================================
    // SECTION 2: 31.4 Substitution Reactions of Haloalkanes
    // =========================================================================
    {
      id: 'u31-s2',
      code: '31.4',
      titleEn: 'Substitution reactions of haloalkanes',
      titleZh: '卤代烷的取代反应（碱性水解与卤素离子检验）',
      analogy: {
        icon: '🔁',
        title: '“退票换座”加上“先清场再验票”的黄金三步',
        body: '卤代烷（haloalkane, R—X）手里的卤素原子（halogen atom, -X）电负性高，把碳原子拉得带部分正电（δ+），就像一个坐不稳的乘客。当我们加入氢氧化钠溶液（NaOH(aq)）并回流加热（heat under reflux）时，氢氧根离子（hydroxide ion, OH⁻）就会把 -X 替换下来，生成醇（alcohol, R—OH）并释放出游离的卤素离子（halide ion, X⁻）。但如果你想用硝酸银溶液（AgNO₃(aq)）检验掉出来的 X⁻ 是 Cl⁻、Br⁻ 还是 I⁻，千万不能直接滴 AgNO₃！必须先加过量稀硝酸（dilute HNO₃(aq)）把剩余的 OH⁻“清场中和”，否则 OH⁻ 会抢先跟 Ag⁺ 生成棕黑色氧化银沉淀捣乱！'
      },
      coreExplanation: `
        <h4>1. 卤代烷的碱性水解 / 取代反应（Alkaline Hydrolysis / Substitution of Haloalkanes）</h4>
        <p>在 <span class="term">卤代烷 <span class="en">haloalkanes, R—X</span></span> 分子中，由于卤素原子（<code>Cl</code>、<code>Br</code>、<code>I</code>）的电负性（electronegativity）高于碳原子，<code>C—X</code> 键具有极性（<code>C<sup>δ+</sup>—X<sup>δ−</sup></code>）。当卤代烷与强碱水溶液如 <span class="term">氢氧化钠溶液 <span class="en">sodium hydroxide solution, NaOH(aq)</span></span> 或 <span class="term">氢氧化钾溶液 <span class="en">potassium hydroxide solution, KOH(aq)</span></span> 在 <span class="term">回流加热 <span class="en">heating under reflux</span></span> 条件下反应时，<code>OH<sup>−</sup></code> 离子会取代 <code>—X</code> 原子，生成对应的 <span class="term">醇 <span class="en">alcohol, R—OH</span></span> 和卤素离子（<span class="term">卤素离子 <span class="en">halide ion, X⁻</span></span>）。该取代反应也常被称为卤代烷的 <span class="term">碱性水解 <span class="en">alkaline hydrolysis</span></span>。</p>

        <ul class="chem-list">
          <li><strong>为什么必须回流加热（<code>heat under reflux</code>）？</strong>
            <br>① 卤代烷（haloalkanes）与水不相溶（immiscible with water），室温下取代反应速率很慢，需要<strong>加热（heating）</strong>提供能量加速反应；
            <br>② 短链卤代烷沸点较低、容易挥发（volatile），使用垂直冷凝管进行<strong>回流（reflux）</strong>可将挥发的卤代烷蒸气冷凝流回反应瓶中，防止反应物散失。</li>
        </ul>

        <h4>2. 检验释放出的卤素离子（Testing for Halide Ions Released）—— 必考实验三步曲</h4>
        <p>纯卤代烷（如 <code>1-bromobutane</code>）属于共价化合物（<span class="term">共价化合物 <span class="en">covalent compound</span></span>），分子内<strong>不含自由移动的卤素离子（<code>X<sup>−</sup></code>）</strong>，直接加入硝酸银溶液（<code>AgNO<sub>3</sub>(aq)</code>）不会立即产生沉淀。必须经过以下严格顺序检验卤代烷中的卤素种类：</p>

        <div class="struct-card">
          <pre class="struct-pre">Step 1: 水解断键  R—X + NaOH(aq) ──(heat under reflux / warm)──► R—OH + Na⁺(aq) + X⁻(aq)
                  ↓ (冷却反应混合物 cool the mixture)
Step 2: 酸化除碱  加入过量稀硝酸 Acidify with EXCESS dilute HNO₃(aq)！
                  目的：中和剩余未反应的 OH⁻ (H⁺ + OH⁻ ⟶ H₂O)，防止 OH⁻ 与 Ag⁺ 生成棕黑色 Ag₂O 沉淀干扰观察！
                  ↓
Step 3: 滴加银盐  加入硝酸银溶液 Add AgNO₃(aq)：Ag⁺(aq) + X⁻(aq) ⟶ AgX(s)↓</pre>
          <div class="struct-cap">严禁用稀盐酸 dilute HCl（自身引入 Cl⁻ 造成假阳性！）或稀硫酸 dilute H₂SO₄（可能生成微溶 Ag₂SO₄ 干扰！）代替稀硝酸 dilute HNO₃！</div>
        </div>

        <h4>3. 三类卤代烷（R—Cl、R—Br、R—I）沉淀颜色与水解速率对比</h4>
        <table class="chem-table">
          <thead>
            <tr>
              <th>卤代烷类别（Haloalkane）</th>
              <th>释放离子</th>
              <th>加 <code>HNO₃(aq) + AgNO₃(aq)</code> 现象（Observation）</th>
              <th>相对水解速率与结构解释（Relative Rate &amp; Reason）</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>氯代烷 <code>chloroalkane (R—Cl)</code></td>
              <td><code>Cl<sup>−</sup>(aq)</code></td>
              <td>白色沉淀 <strong><code>white precipitate</code></strong>（<code>AgCl(s)</code>）</td>
              <td><strong>最慢（Slowest）</strong>：<code>C—Cl</code> 键长最短、键焓最强（highest bond enthalpy），最难断裂。</td>
            </tr>
            <tr>
              <td>溴代烷 <code>bromoalkane (R—Br)</code></td>
              <td><code>Br<sup>−</sup>(aq)</code></td>
              <td>乳黄色 / 浅黄色沉淀 <strong><code>creamy / pale yellow precipitate</code></strong>（<code>AgBr(s)</code>）</td>
              <td><strong>中等（Moderate）</strong>：<code>C—Br</code> 键焓介于 <code>C—Cl</code> 与 <code>C—I</code> 之间。</td>
            </tr>
            <tr>
              <td>碘代烷 <code>iodoalkane (R—I)</code></td>
              <td><code>I<sup>−</sup>(aq)</code></td>
              <td>黄色沉淀 <strong><code>yellow precipitate</code></strong>（<code>AgI(s)</code>）</td>
              <td><strong>最快（Fastest）</strong>：<code>C—I</code> 键长最长、键焓最弱（lowest bond enthalpy），最易断裂！</td>
            </tr>
          </tbody>
        </table>

        <div class="callout callout-tip">
          <strong>💡 核心窍门（比较 R—Cl / R—Br / R—I 水解速率的公平实验设计）：</strong><br>
          若要在 50–60 °C 水浴（water bath）中直接计时比较 <code>1-chlorobutane</code>、<code>1-bromobutane</code> 和 <code>1-iodobutane</code> 出现沉淀的快慢，通常会把卤代烷溶解在<strong>乙醇（ethanol）与硝酸银水溶液（<code>AgNO<sub>3</sub>(aq)</code>）</strong>的混合溶剂中（乙醇作助溶剂 co-solvent 使水与卤代烷互溶成均一相），观察到<strong>黄色 <code>AgI</code> 最先浑浊，乳黄色 <code>AgBr</code> 次之，白色 <code>AgCl</code> 最慢</strong>，直观验证速率：<strong><code>R—I &gt; R—Br &gt; R—Cl</code></strong>！
        </div>
      `,
      textbookFormulas: [
        {
          label: '溴乙烷的碱性水解化学方程式（Alkaline hydrolysis of bromoethane）',
          equationHtml: `CH<sub>3</sub>CH<sub>2</sub>Br(l) + NaOH(aq) <span class="chem-arrow"><span class="cond-top">heat under reflux</span><span class="arr-main">⟶</span><span class="cond-bot"></span></span> CH<sub>3</sub>CH<sub>2</sub>OH(aq) + NaBr(aq)`,
          note: '反应类型属于取代反应（substitution reaction）或碱性水解（alkaline hydrolysis）。'
        },
        {
          label: '卤代烷碱性水解的离子方程式（Ionic equation for alkaline hydrolysis）',
          equationHtml: `R—X + OH<sup>−</sup>(aq) <span class="chem-arrow"><span class="cond-top">heat under reflux</span><span class="arr-main">⟶</span><span class="cond-bot"></span></span> R—OH + X<sup>−</sup>(aq)`,
          note: '书写离子方程式（ionic equation）时，Na⁺(aq) 为旁观离子（spectator ion）需消去，生成醇（R—OH）与卤素离子（X⁻）。'
        },
        {
          label: '硝酸银沉淀卤素离子的离子方程式（Precipitation of silver halide）',
          equationHtml: `Ag<sup>+</sup>(aq) + X<sup>−</sup>(aq) <span class="chem-arrow"><span class="cond-top"></span><span class="arr-main">⟶</span><span class="cond-bot"></span></span> AgX(s)`,
          note: '必须在先加入过量稀硝酸 dilute HNO₃(aq) 酸化之后才进行！AgCl 白色（white）、AgBr 乳黄色（creamy）、AgI 黄色（yellow）。'
        }
      ],
      examTrap: 'HKDSE 必考失分点有两个：① 漏写“先加过量稀硝酸酸化（acidify with excess dilute HNO₃(aq)）”就直接加 AgNO₃(aq)，导致过量 NaOH 中的 OH⁻ 与 Ag⁺ 反应生成棕黑色 Ag₂O 沉淀掩盖卤化银颜色；② 比较水解快慢时误以为“Cl 电负性最大、C—Cl 极性最强所以反应最快”——错！决定卤代烷水解速率的主导因素是 C—X 键焓（bond enthalpy）强弱而非键极性，C—I 键最弱所以 R—I 反应最快！',
      relations: [
        {
          type: 'buildsOn',
          targetUnitId: 'u29',
          label: '衔接 Unit 29：卤代烷（haloalkanes）的命名与水溶性特征',
          why: '卤代烷不能与水形成有效氢键而不溶于水，解释了为什么与 NaOH(aq) 反应分成两层、需要持续回流加热（heating under reflux）。'
        },
        {
          type: 'leadsTo',
          targetUnitId: 'u32',
          label: '通向 Unit 32：卤代烷作为连接烃类（alkanes/alkenes）与含氧官能团（alcohols/aldehydes/acids）的桥梁',
          why: '烷烃和烯烃本身很难直接氧化成醇或羧酸，先变成卤代烷（R—X）再用 NaOH(aq) 回流转化为醇（R—OH），是有机合成最经典的跳板！'
        }
      ],
      questions: [
        {
          id: 'u31-s2-q1',
          level: 1,
          levelTag: 'Level 1 · 中文直觉破冰',
          type: 'mcq',
          stem: '将 1-溴丙烷（1-bromopropane）与氢氧化钠溶液（NaOH(aq)）回流加热（heat under reflux）后冷却，若要检验反应释放出的溴离子（bromide ions, Br⁻），正确的试剂添加顺序与现象是什么？',
          cueWords: [],
          options: [
            'A. 直接加入硝酸银溶液（AgNO₃(aq)），产生白色沉淀（white precipitate）',
            'B. 先加入过量稀盐酸（dilute HCl(aq)），再加入 AgNO₃(aq)，产生乳黄色沉淀（creamy precipitate）',
            'C. 先加入过量稀硝酸（dilute HNO₃(aq)），再加入 AgNO₃(aq)，产生乳黄色沉淀（creamy precipitate）',
            'D. 先加入过量稀硫酸（dilute H₂SO₄(aq)），再加入氯水（Cl₂(aq)），产生黄色沉淀（yellow precipitate）'
          ],
          answerIndex: 2,
          hint: '第一步必须中和过量的 NaOH(aq)，而且所用的酸绝对不能自带 Cl⁻ 离子！接着回想 AgBr(s) 是什么颜色的沉淀？',
          explanation: '检验碱性水解液中的卤素离子（halide ions）时，必须先加过量稀硝酸（excess dilute HNO₃(aq)）中和未反应的 OH⁻(aq)，防止 OH⁻ 与 Ag⁺ 生成棕黑色 Ag₂O 沉淀；然后再加入硝酸银溶液（AgNO₃(aq)），Br⁻ 与 Ag⁺ 结合生成乳黄色沉淀（creamy precipitate）AgBr(s)。若误加稀盐酸（dilute HCl）会引入 Cl⁻ 产生白色 AgCl 沉淀！',
          commonMistake: '漏掉酸化步骤（选 A）或误用稀盐酸 dilute HCl 酸化（选 B）。'
        },
        {
          id: 'u31-s2-q2',
          level: 2,
          levelTag: 'Level 2 · 中英过渡实战',
          type: 'mcq',
          stem: '在相同温度下，将等物质的量的 1-氯丁烷（1-chlorobutane）、1-溴丁烷（1-bromobutane）与 1-碘丁烷（1-iodobutane）分别与乙醇及硝酸银水溶液（aqueous silver nitrate in ethanol）混合温热。下列关于沉淀出现快慢顺序（rate of precipitation）及原因的叙述，哪一项正确？',
          cueWords: [
            { phrase: '1-chlorobutane', zh: '1-氯丁烷', concept: '含最强的 C—Cl 键' },
            { phrase: '1-iodobutane', zh: '1-碘丁烷', concept: '含最弱的 C—I 键' },
            { phrase: 'rate of precipitation', zh: '沉淀生成速率', concept: '取决于 C—X 键断裂难易度（键焓 bond enthalpy）' }
          ],
          options: [
            'A. 1-chlorobutane > 1-bromobutane > 1-iodobutane，因为 C—Cl 键极性（bond polarity）最强',
            'B. 1-iodobutane > 1-bromobutane > 1-chlorobutane，因为 C—I 键的键焓最低（lowest bond enthalpy），最容易断裂',
            'C. 1-iodobutane > 1-bromobutane > 1-chlorobutane，因为 1-iodobutane 分子间的范德华力（van der Waals\' forces）最强',
            'D. 三者同时出现沉淀，因为 Ag⁺(aq) 与 X⁻(aq) 的离子反应瞬间完成'
          ],
          answerIndex: 1,
          hint: '卤代烷要释放出 X⁻ 离子，必须先打断共价键 C—X。想一想 Cl、Br、I 原子半径谁最大、哪根 C—X 键最长最脆弱？',
          explanation: '卤代烷水解反应（hydrolysis of haloalkanes）的决速步骤涉及 C—X 共价键的断裂。由于碘原子半径最大，C—I 键长最长、键焓最低（lowest bond enthalpy），最容易断裂释放出 I⁻，因此反应速率顺序为：1-iodobutane > 1-bromobutane > 1-chlorobutane。范德华力（van der Waals\' forces）只影响沸点等物理性质，不影响共价键断裂的化学反应速率！',
          commonMistake: '受“电负性 Cl > Br > I”误导选了 A，或者把物理性质的分子间作用力（van der Waals\' forces）当作化学断键快慢的原因选了 C。'
        },
        {
          id: 'u31-s2-q3',
          level: 3,
          levelTag: 'Level 3 · HKDSE 全英文实战',
          type: 'structured',
          stem: '2-chloropropane is heated under reflux with aqueous sodium hydroxide to form an organic product Z. Write an ionic equation for the reaction, state TWO reasons why the mixture is heated under reflux, and explain why excess dilute nitric acid must be added before aqueous silver nitrate when testing for the chloride ions formed.',
          cueWords: [
            { phrase: 'heated under reflux', zh: '回流加热', concept: '加热加快慢反应 + 垂直冷凝防止易挥发卤代烷散失' },
            { phrase: 'ionic equation', zh: '离子方程式', concept: '消去旁观离子 Na⁺，写 OH⁻(aq) 取代 —Cl 生成 Cl⁻(aq)' },
            { phrase: 'excess dilute nitric acid', zh: '过量稀硝酸', concept: '中和剩余 OH⁻，避免生成 Ag₂O 沉淀干扰白色 AgCl 观察' }
          ],
          hint: '注意三问三答：① 离子方程式不要写 Na⁺；② 拆开解释“为什么 heat”和“为什么 under reflux”；③ 说明如果不加 dilute HNO₃，残留的 OH⁻ 会跟 Ag⁺ 发生什么副反应！',
          explanation: '2-氯丙烷（2-chloropropane, CH₃CHClCH₃）与 OH⁻(aq) 发生取代反应生成丙-2-醇（propan-2-ol, CH₃CH(OH)CH₃）和 Cl⁻(aq)。加热（heating）用于提高缓慢取代反应的速率，回流（reflux）防止易挥发的 2-chloropropane 散失。加入过量稀硝酸（excess dilute HNO₃）是为了中和未反应的 OH⁻(aq)，防止 OH⁻ 与 Ag⁺ 生成棕黑色氧化银（Ag₂O）沉淀掩盖白色 AgCl 沉淀。',
          markingScheme: [
            '1M: Ionic equation: CH3CHClCH3 + OH−(aq) ⟶ CH3CH(OH)CH3 + Cl−(aq)',
            '1M: Heating speeds up the slow substitution reaction; reflux condenses volatile 2-chloropropane vapour back into the flask to prevent loss of reactant/product.',
            '1M: Excess dilute HNO3(aq) neutralizes unreacted OH−(aq) ions so that OH− will not react with Ag+(aq) to form a brown/black precipitate (Ag2O) which would mask the white AgCl precipitate.'
          ],
          commonMistake: '把离子方程式写成化学方程式（保留了 NaOH 和 NaCl），或解释回流时漏答“prevent loss of volatile organic reactant/product”。'
        }
      ]
    },

    // =========================================================================
    // SECTION 3: 31.5 Part A Reactions of Alcohols (Na, Substitution, Dehydration)
    // =========================================================================
    {
      id: 'u31-s3',
      code: '31.5 (Part A)',
      titleEn: 'Reactions of alcohols (Part A): Reaction with Na, substitution to haloalkanes & dehydration',
      titleZh: '醇的反应（上）：与钠反应、卤代反应与脱水成烯',
      analogy: {
        icon: '🛠️',
        title: '有机化学里的“百变瑞士军刀”—— 醇（Alcohol）',
        body: '如果把有机家族比作地铁网，醇（alcohol, R—OH）就是最繁忙的换乘中心！给它一块金属钠（sodium, Na），羟基（hydroxyl group, -OH）里的 H 会变成氢气冒泡；给它五氯化磷（PCl₅）或氯化亚砜（SOCl₂），整个 -OH 被精准换成 -Cl 变成氯代烷（chloroalkane），其中 PCl₅ 冒出的氯化氢白雾（steamy fumes of HCl）更是抓出 -OH 的经典警报器；要是用 180 °C 过量浓硫酸（conc. H₂SO₄）或灼热氧化铝（heated Al₂O₃）“强行抽水”，它还会从隔壁碳上抓走一个 H 脱掉水分子，摇身变回烯烃（alkene）！'
      },
      coreExplanation: `
        <h4>1. 醇与金属钠的反应（Reaction of Alcohols with Sodium, Na）</h4>
        <p>干燥的 <span class="term">醇 <span class="en">alcohol, R—OH</span></span> 能与活泼金属 <span class="term">钠 <span class="en">sodium, Na(s)</span></span> 在室温下平稳反应，生成离子化合物 <span class="term">醇钠 <span class="en">sodium alkoxide, R—O⁻Na⁺</span></span>（例如乙醇生成 <span class="term">乙醇钠 <span class="en">sodium ethoxide, CH₃CH₂O⁻Na⁺</span></span>）并放出无色氢气（<code>H<sub>2</sub>(g)</code>）：</p>
        <ul class="chem-list">
          <li><strong>实验现象（Observations）</strong>：钠块密度大于乙醇（ethanol），因此<strong>钠沉在液底（sinks）</strong>并慢慢溶解，平稳产生<strong>无色气泡（colourless gas bubbles / effervescence，比钠与水反应温和缓慢得多）</strong>；收集到的气体用燃着的木条检验会发出爆鸣声（burns with a 'pop' sound）。</li>
          <li><strong>应用提醒</strong>：由于水（<code>H<sub>2</sub>O</code>）也会与钠剧烈反应放出 <code>H<sub>2</sub>(g)</code>，使用金属钠检验未知物是否含羟基（<code>-OH</code>）时，待测液体<strong>必须是无水干燥的（dry / anhydrous）</strong>！</li>
        </ul>

        <h4>2. 醇转化为卤代烷的四大取代反应（Substitution: Converting —OH to —X）</h4>
        <p>将醇（<code>R—OH</code>）中的羟基（<code>-OH</code>）取代为卤素原子（<code>-Cl</code>、<code>-Br</code>、<code>-I</code>）生成 <span class="term">卤代烷 <span class="en">haloalkanes, R—X</span></span>，课本《Mastering Chemistry》共归纳了 4 类核心试剂：</p>

        <table class="chem-table">
          <thead>
            <tr>
              <th>卤代试剂与条件（Reagents &amp; Conditions）</th>
              <th>代表反应方程式（Representative Equation）</th>
              <th>DSE 核心考点与实验现象（Key Exam Points &amp; Observations）</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>① 卤化氢 <code>HX</code></strong><br>· 叔醇 + <code>conc. HCl(aq)</code>，室温摇晃（shake at r.t.）<br>· 醇 + <code>NaBr(s) + conc. H₂SO₄</code>，回流加热（生成 <code>HBr</code> <em>in situ</em>）<br>· 醇 + <code>red P + I₂</code>，回流加热（生成 <code>PI₃</code> <em>in situ</em>）</td>
              <td><code>(CH₃)₃COH(l) + HCl(aq) ⟶ (CH₃)₃CCl(l) + H₂O(l)</code><br><br><code>ROH + HBr ⟶ RBr + H₂O</code><br>（其中 <code>NaBr + H₂SO₄ ⟶ NaHSO₄ + HBr</code>）</td>
              <td>· <strong>叔醇快检亮点</strong>：水溶性的 <span class="term">甲基丙-2-醇 <span class="en">methylpropan-2-ol, 3° alcohol</span></span> 与浓盐酸在室温摇晃，几分钟内迅速变浑浊（cloudy）并分出不溶于水的 <span class="term">2-氯-2-甲基丙烷 <span class="en">2-chloro-2-methylpropane</span></span> 油层！（伯醇室温不反应）<br>· 制碘代烷不可用 <code>NaI + conc. H₂SO₄</code>，因浓硫酸会把 <code>I⁻</code> 氧化成 <code>I₂</code>！</td>
            </tr>
            <tr>
              <td><strong>② 三卤化磷 <code>PX₃</code></strong><br>（如 <span class="term">三氯化磷 <span class="en">phosphorus trichloride, PCl₃</span></span>，回流加热）</td>
              <td><code>3R—OH + PCl₃ ⟶ 3R—Cl + H₃PO₃</code></td>
              <td>无机副产物为液态 <span class="term">亚磷酸 <span class="en">phosphorous acid, H₃PO₃</span></span>（注意系数 <code>3 : 1 ⟶ 3 : 1</code>！）。</td>
            </tr>
            <tr>
              <td><strong>③ 五氯化磷 <code>PCl₅(s)</code></strong><br>（<span class="term">五氯化磷 <span class="en">phosphorus pentachloride</span></span>，<strong>室温 room temperature</strong>，待测液须干燥！）</td>
              <td><code>R—OH(l) + PCl₅(s) ⟶ R—Cl(l) + POCl₃(l) + HCl(g)</code></td>
              <td><strong>★ 检验 <code>-OH</code> 的王牌化学测试！</strong>室温下立即产生<strong>白雾（<code>steamy fumes / white misty fumes</code> of <code>HCl(g)</code>）</strong>，能使湿润蓝色石蕊试纸变红！副产物含液态 <code>POCl₃</code>。</td>
            </tr>
            <tr>
              <td><strong>④ 氯化亚砜 / 二氯氧化硫 <code>SOCl₂(l)</code></strong><br>（<span class="term">氯化亚砜 <span class="en">thionyl chloride / sulphur dichloride oxide</span></span>）</td>
              <td><code>R—OH(l) + SOCl₂(l) ⟶ R—Cl(l) + SO₂(g) + HCl(g)</code></td>
              <td><strong>★ 最佳合成纯度优势！</strong>两个无机副产物 <strong><code>SO₂(g)</code> 和 <code>HCl(g)</code> 全是气体（gases）</strong>，会自动逸出反应体系，留下较纯净的氯代烷 <code>R—Cl</code>，极易分离提纯！</td>
            </tr>
          </tbody>
        </table>

        <h4>3. 醇的脱水反应 / 消去反应（Dehydration of Alcohols to Alkenes）</h4>
        <p><span class="term">脱水反应 <span class="en">dehydration</span></span> 是指从醇分子中相邻的两个碳原子上分别脱去一个 <code>-OH</code> 和一个 <code>-H</code>（消去一分子 <code>H<sub>2</sub>O</code>），在碳链中形成 <code>C=C</code> 双键生成 <span class="term">烯烃 <span class="en">alkene</span></span> 的消去反应（elimination reaction）。</p>
        <ul class="chem-list">
          <li><strong>两种标准实验室条件（任选其一，背熟标准英文写法！）</strong>：
            <br>① 与 <strong>过量浓硫酸（<code>excess conc. H<sub>2</sub>SO<sub>4</sub></code>）在约 <code>180 °C</code> 共热</strong>（或浓磷酸 <code>conc. H<sub>3</sub>PO<sub>4</sub></code> 加热）；
            <br>② 将醇蒸气通过<strong>加热的氧化铝（<code>heated Al<sub>2</sub>O<sub>3</sub> / aluminium oxide</code>）或素瓷片（<code>heated porous pot / pumice stones</code>）催化剂（约 <code>300 °C</code>）</strong>。</li>
          <li><strong>不能脱水的醇</strong>：<span class="term">甲醇 <span class="en">methanol, CH₃OH</span></span>（只有 1 个碳原子）以及如 <code>2,2-dimethylpropan-1-ol, (CH₃)₃CCH₂OH</code>（连有 <code>-OH</code> 的碳的相邻碳上<strong>没有氢原子 no H on adjacent C</strong>）均无法脱水生成烯烃！</li>
        </ul>

        <div class="struct-card">
          <pre class="struct-pre">★ DSE 必考压轴陷阱：丁-2-醇（butan-2-ol）脱水生成 3 种烯烃同分异构体！

        H   OH  H   H
        │   │   │   │
    H — C¹— C²— C³— C⁴— H    ──(excess conc. H₂SO₄, 180 °C 或 Al₂O₃, heat)──►  - H₂O
        │   │   │   │
        H   H   H   H

  · 脱去 C2 的 -OH 与 C1 的 -H  ──►  CH₂=CHCH₂CH₃         ① 丁-1-烯 but-1-ene
  · 脱去 C2 的 -OH 与 C3 的 -H  ──►  CH₃CH=CHCH₃  ──┬──►  ② 顺-丁-2-烯 cis-but-2-ene
                                  （存在顺反异构！）└──►  ③ 反-丁-2-烯 trans-but-2-ene（共 3 种烯烃！）</pre>
          <div class="struct-cap">做题铁律：每当仲醇或长链醇脱水生成内部双键时，立刻检查该双键是否满足顺反异构（cis-trans isomerism）条件，切勿把 3 种算成 2 种！</div>
        </div>
      `,
      textbookFormulas: [
        {
          label: '乙醇与金属钠反应（Reaction of ethanol with sodium）',
          equationHtml: `2CH<sub>3</sub>CH<sub>2</sub>OH(l) + 2Na(s) <span class="chem-arrow"><span class="cond-top"></span><span class="arr-main">⟶</span><span class="cond-bot"></span></span> 2CH<sub>3</sub>CH<sub>2</sub>O<sup>−</sup>Na<sup>+</sup>(alc) + H<sub>2</sub>(g)`,
          note: '生成乙醇钠（sodium ethoxide）与氢气（hydrogen gas）；观察到无色气泡（colourless gas bubbles）。'
        },
        {
          label: '五氯化磷检验羟基反应（Reaction of alcohol with PCl₅ at room temperature）',
          equationHtml: `CH<sub>3</sub>CH<sub>2</sub>OH(l) + PCl<sub>5</sub>(s) <span class="chem-arrow"><span class="cond-top">room temp.</span><span class="arr-main">⟶</span><span class="cond-bot"></span></span> CH<sub>3</sub>CH<sub>2</sub>Cl(l) + POCl<sub>3</sub>(l) + HCl(g)`,
          note: '待测液体必须无水（dry/anhydrous）！放出白雾（steamy fumes of HCl(g)），注意副产物是 POCl₃ + HCl，切勿与 PCl₃ 的 H₃PO₃ 混淆！'
        },
        {
          label: '氯化亚砜制备纯净氯代烷（Reaction of alcohol with thionyl chloride SOCl₂）',
          equationHtml: `CH<sub>3</sub>CH<sub>2</sub>OH(l) + SOCl<sub>2</sub>(l) <span class="chem-arrow"><span class="cond-top"></span><span class="arr-main">⟶</span><span class="cond-bot"></span></span> CH<sub>3</sub>CH<sub>2</sub>Cl(l) + SO<sub>2</sub>(g) + HCl(g)`,
          note: 'SO₂(g) 与 HCl(g) 两种副产物均为气体逸出（escape as gases），使氯代烷产物纯度更高、易于分离。'
        },
        {
          label: '乙醇催化脱水制乙烯（Dehydration of ethanol to ethene）',
          equationHtml: `CH<sub>3</sub>CH<sub>2</sub>OH(l) <span class="chem-arrow"><span class="cond-top">excess conc. H<sub>2</sub>SO<sub>4</sub>, 180 °C</span><span class="arr-main">⟶</span><span class="cond-bot">(or heated Al<sub>2</sub>O<sub>3</sub>, 300 °C)</span></span> CH<sub>2</sub>=CH<sub>2</sub>(g) + H<sub>2</sub>O(l)`,
          note: '消去一分子水生成乙烯（ethene）；若收集乙烯气体后停止加热，必须先把导管移出水面以防倒吸（sucking back）！'
        }
      ],
      examTrap: '三大高频易错点：① 写 PCl₅ 与醇反应方程式时，把副产物 POCl₃ + HCl 错写成 H₃PO₄ 或 H₃PO₃；② 用 PCl₅ 或 Na 检验水相溶液（aqueous solution）中的醇 —— 完全无效！因为水 H₂O 本身就会与 PCl₅ 产生白雾 HCl(g)、与 Na 产生气泡 H₂(g)；③ 丁-2-醇（butan-2-ol）脱水问“生成几种烯烃（how many alkenes）”时漏算顺反异构（cis-but-2-ene 与 trans-but-2-ene），把 3 种错答成 2 种！',
      relations: [
        {
          type: 'buildsOn',
          targetUnitId: 'u30',
          label: '衔接 Unit 30：顺反异构（cis-trans isomerism）判定不对称醇脱水产物数目',
          why: '丁-2-醇（butan-2-ol）脱水生成丁-2-烯（but-2-ene）时，由于两个双键碳各连两个不同基团（-H 和 -CH₃），必须拆分为顺式（cis）和反式（trans）两种异构体。'
        },
        {
          type: 'leadsTo',
          targetUnitId: 'u32',
          label: '通向 Unit 32：由甲基丙-2-醇与浓盐酸制备并提纯 2-氯-2-甲基丙烷',
          why: 'Unit 32 的标准液体提纯四步曲（分液、Na₂CO₃ 洗涤除酸、无水 CaCl₂/Na₂SO₄ 干燥、再蒸馏）正是以本节叔醇加浓盐酸制备卤代烷为原型实验！'
        }
      ],
      questions: [
        {
          id: 'u31-s3-q1',
          level: 1,
          levelTag: 'Level 1 · 中文直觉破冰',
          type: 'mcq',
          stem: '在实验室将丙-1-醇（propan-1-ol）转化为 1-氯丙烷（1-chloropropane）时，化学家常优先选用氯化亚砜（thionyl chloride, SOCl₂）而不是五氯化磷（phosphorus pentachloride, PCl₅）。选用 SOCl₂ 最主要的合成优势是什么？',
          cueWords: [],
          options: [
            'A. SOCl₂ 可以在大量水溶液中直接反应，不需要干燥条件',
            'B. 反应生成的两种无机副产物 SO₂ 和 HCl 都是气体（gases），会自动逸出体系，便于得到较纯的 1-氯丙烷',
            'C. SOCl₂ 能把丙-1-醇同时氧化成丙酸（propanoic acid）',
            'D. 反应完全不产生任何酸性气体，无需在通风橱（fume cupboard）中进行'
          ],
          answerIndex: 1,
          hint: '对比两个反应的副产物：PCl₅ 生成液态 POCl₃(l) + HCl(g)，而 SOCl₂ 生成 SO₂(g) + HCl(g)！液态杂质和气态杂质哪个更容易除掉？',
          explanation: '丙-1-醇（propan-1-ol）与氯化亚砜（SOCl₂）反应的方程式为 CH₃CH₂CH₂OH(l) + SOCl₂(l) ⟶ CH₃CH₂CH₂Cl(l) + SO₂(g) + HCl(g)。因为无机副产物二氧化硫（SO₂）和氯化氢（HCl）在反应条件下都是气体（gases），会直接脱离反应液逸出，无需繁琐分离液态磷酰氯（POCl₃），大幅简化了氯代烷的提纯！注意 SO₂ 和 HCl 有毒且具刺激性，实验仍须在通风橱（fume cupboard）内进行。',
          commonMistake: '误选 D：SO₂(g) 和 HCl(g) 都是有毒/腐蚀性酸性气体，正是因为它们作为气体逸出才好提纯，但必须在通风橱（fume cupboard）里操作！'
        },
        {
          id: 'u31-s3-q2',
          level: 2,
          levelTag: 'Level 2 · 中英过渡实战',
          type: 'mcq',
          stem: '当戊-2-醇（pentan-2-ol, CH₃CH(OH)CH₂CH₂CH₃）的蒸气通过加热的氧化铝催化剂（heated aluminium oxide, Al₂O₃）发生脱水反应（dehydration）时，最多可以生成多少种互为同分异构体的烯烃产物（isomeric alkene products，包含顺反异构体 cis-trans isomers）？',
          cueWords: [
            { phrase: 'pentan-2-ol', zh: '戊-2-醇', concept: '-OH 在 C2 上，相邻碳 C1 与 C3 均有 H 可消去' },
            { phrase: 'heated aluminium oxide', zh: '加热的氧化铝（Al₂O₃）', concept: '醇催化脱水生成烯烃的标准条件' },
            { phrase: 'cis-trans isomers', zh: '顺反异构体', concept: '检查生成的戊-2-烯（pent-2-ene）是否具有顺反异构' }
          ],
          options: [
            'A. 1 种',
            'B. 2 种',
            'C. 3 种',
            'D. 4 种'
          ],
          answerIndex: 2,
          hint: 'C2 上的 -OH 可以和左边 C1 的 -H 脱水，也可以和右边 C3 的 -H 脱水。再仔细看看脱右边 H 得到的 CH₃CH=CHCH₂CH₃ 有没有顺反异构（cis-trans isomerism）！',
          explanation: '戊-2-醇（pentan-2-ol）脱水有两个消去方向：① 消去 C1 上的 H 得到戊-1-烯（pent-1-ene, CH₂=CHCH₂CH₂CH₃），因 C1 连有两个相同的 H 原子，无顺反异构（1 种）；② 消去 C3 上的 H 得到戊-2-烯（pent-2-ene, CH₃CH=CHCH₂CH₃），其中双键两端碳分别连有（-H, -CH₃）和（-H, -CH₂CH₃），满足顺反异构条件，存在顺-戊-2-烯（cis-pent-2-ene）与反-戊-2-烯（trans-pent-2-ene）（2 种）。合计共生成 1 + 2 = 3 种烯烃同分异构体！',
          commonMistake: '只写出 pent-1-ene 和 pent-2-ene 两个结构简式就匆忙选了 B（2 种），忘记把 pent-2-ene 拆成 cis 和 trans 两种立体异构体！'
        },
        {
          id: 'u31-s3-q3',
          level: 3,
          levelTag: 'Level 3 · HKDSE 全英文实战',
          type: 'structured',
          stem: 'Consider two anhydrous isomeric alcohols, butan-1-ol and methylpropan-2-ol. Both anhydrous liquids react with solid phosphorus pentachloride at room temperature, whereas they behave differently when shaken with concentrated hydrochloric acid at room temperature. Write a chemical equation for the reaction of butan-1-ol with solid phosphorus pentachloride, state the observable change, and describe how concentrated hydrochloric acid can distinguish between butan-1-ol and methylpropan-2-ol at room temperature.',
          cueWords: [
            { phrase: 'solid phosphorus pentachloride', zh: '五氯化磷固体（PCl₅(s)）', concept: '与含 -OH 的无水液体反应生成 RCl + POCl₃ + HCl(g) 白雾' },
            { phrase: 'concentrated hydrochloric acid at room temperature', zh: '室温下的浓盐酸', concept: '叔醇（methylpropan-2-ol）迅速生成不溶卤代烷浑浊层，伯醇（butan-1-ol）室温无明显变化' },
            { phrase: 'butan-1-ol and methylpropan-2-ol', zh: '丁-1-醇（1°）与甲基丙-2-醇（3°）', concept: 'C₄H₁₀O 的伯醇与叔醇同分异构体对比' }
          ],
          hint: '① 写 butan-1-ol + PCl₅ 方程式时记得写齐三个产物（1-chlorobutane + POCl₃ + HCl）；② HCl(g) 在空气中的现象叫 steamy fumes / white misty fumes；③ 室温下摇晃 conc. HCl(aq) 时，3° 醇几分钟内浑浊分层，1° 醇无现象！',
          explanation: '无水丁-1-醇（butan-1-ol）与固体五氯化磷（PCl₅(s)）在室温下反应放出氯化氢白雾（steamy fumes of HCl）。室温下与浓盐酸（conc. HCl(aq)）摇晃时，叔醇甲基丙-2-醇（methylpropan-2-ol, (CH₃)₃COH）迅速发生取代生成不溶于水的 2-氯-2-甲基丙烷（2-chloro-2-methylpropane），混合液很快变浑浊并分出两层液体（turns cloudy rapidly / forms two immiscible layers）；而伯醇丁-1-醇（butan-1-ol）在室温下不反应，无明显变化。',
          markingScheme: [
            '1M: Equation: CH3CH2CH2CH2OH(l) + PCl5(s) ⟶ CH3CH2CH2CH2Cl(l) + POCl3(l) + HCl(g)',
            '1M: Observation with PCl5: Steamy fumes / white misty fumes (of HCl) are evolved (and solid PCl5 dissolves).',
            '1M: With conc. HCl(aq) at room temperature: methylpropan-2-ol (3° alcohol) turns cloudy rapidly / forms an insoluble oily layer of 2-chloro-2-methylpropane, whereas butan-1-ol (1° alcohol) shows no observable change (or remains unchanged without cloudiness).'
          ],
          commonMistake: '把 PCl₅ 的现象写成“white smoke（白烟，固体颗粒）”——在 HKDSE 英文规范中，HCl(g) 遇空气水汽液化形成的小液滴必须写“steamy fumes”或“white misty fumes（白雾）”！'
        }
      ]
    },

    // =========================================================================
    // SECTION 4: 31.5 Part B Oxidation of 1°, 2° and 3° Alcohols
    // =========================================================================
    {
      id: 'u31-s4',
      code: '31.5 (Part B)',
      titleEn: 'Reactions of alcohols (Part B): Oxidation of 1°, 2° and 3° alcohols',
      titleZh: '醇的反应（下）：伯醇、仲醇与叔醇的氧化及回流/蒸馏控制',
      analogy: {
        icon: '🍳',
        title: '“边煎边盛出炉”得溏心蛋（醛），“盖着回流死磕”得全熟蛋（羧酸）',
        body: '把伯醇（primary alcohol, 1° 醇，如乙醇 ethanol）放进橙色的酸化重铬酸钾溶液（acidified K₂Cr₂O₇(aq)）这口热锅里，它会经历两级变身：先变成沸点极低的醛（aldehyde，如乙醛 ethanal, 沸点仅 20.2 °C），再变成沸点很高的羧酸（carboxylic acid，如乙酸 ethanoic acid, 沸点 118 °C）。如果你想停在半熟的“醛”，就用过量醇配合蒸馏装置（distillation）——乙醛刚一生成就因为没有分子间氢键、沸点最低而立刻变成蒸气“溜出锅外”被收集！如果你想彻底做成全熟的“羧酸”，就用过量氧化剂配合垂直回流加热（heating under reflux）——蒸气一往上跑就被冷凝管摁回锅里继续氧化，直到全部变成羧酸为止！'
      },
      coreExplanation: `
        <h4>1. 常用氧化剂与颜色变化（Common Oxidizing Agents &amp; Colour Changes）</h4>
        <p>在有机化学方程式中，我们按照《Mastering Chemistry》规范用 <strong><code>[O]</code></strong> 表示来自氧化剂（oxidizing agent）的氧原子。实验室最常用的两种强氧化剂是：</p>
        <ul class="chem-list">
          <li><strong>① <span class="term">酸化重铬酸钾溶液 <span class="en">acidified potassium dichromate solution, Cr₂O₇²⁻(aq)/H⁺(aq)</span></span></strong>（最核心、可控性最好！）：若发生氧化反应，溶液颜色<strong>由橙色变为绿色（<code>from orange to green</code>）</strong>，原因是橙色的重铬酸根离子（<code>Cr<sub>2</sub>O<sub>7</sub><sup>2−</sup>(aq)</code>）被还原为绿色的铬(III)离子（<code>Cr<sup>3+</sup>(aq)</code>）。</li>
          <li><strong>② <span class="term">酸化高锰酸钾溶液 <span class="en">acidified potassium permanganate solution, MnO₄⁻(aq)/H⁺(aq)</span></span></strong>：氧化性<strong>极强</strong>！若发生反应，溶液颜色<strong>由紫色变为无色（<code>from purple to colourless</code>）</strong>（<code>MnO<sub>4</sub><sup>−</sup>(aq)</code> 被还原为近乎无色的 <code>Mn<sup>2+</sup>(aq)</code>）。<strong>⚠️ 注意</strong>：<code>acidified KMnO<sub>4</sub>(aq)</code> 会把伯醇（<code>1° alcohol</code>）直接一路氧化到底生成羧酸（<code>carboxylic acid</code>），<strong>不能用来制备醛（aldehyde）</strong>！</li>
        </ul>

        <h4>2. 伯醇（1°）、仲醇（2°）与叔醇（3°）的氧化命运总览</h4>
        <table class="chem-table">
          <thead>
            <tr>
              <th>醇的级别（Class of Alcohol）</th>
              <th>试剂与实验装置（Reagents &amp; Set-up）</th>
              <th>有机产物（Organic Product）</th>
              <th>溶液现象与结构原因（Observation &amp; Reason）</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>伯醇 <code>1° alcohol</code></strong><br>（如乙醇 <code>ethanol</code>，含 <code>-CH₂OH</code>）<br><em>路线 A：控制氧化</em></td>
              <td><strong>过量伯醇（<code>excess 1° alcohol</code>）</strong> + <code>Cr₂O₇²⁻(aq)/H⁺(aq)</code> + <strong>边反应边蒸馏（<code>distillation</code>）</strong></td>
              <td><span class="term">醛 <span class="en">aldehyde</span></span><br>（如乙醛 <code>ethanal, CH₃CHO</code>）</td>
              <td><strong>橙色变绿色（<code>orange to green</code>）</strong>。<br>原理：醛不含 <code>-OH</code>、<strong>无分子间氢键（no intermolecular H-bonds）</strong>，沸点远低于醇和羧酸，一生成立刻蒸馏逸出，避免继续被氧化！</td>
            </tr>
            <tr>
              <td><strong>伯醇 <code>1° alcohol</code></strong><br><em>路线 B：完全氧化</em></td>
              <td><strong>过量 <code>Cr₂O₇²⁻(aq)/H⁺(aq)</code></strong> + <strong>回流加热（<code>heat under reflux</code>）</strong>（随后再蒸馏分离）</td>
              <td><span class="term">羧酸 <span class="en">carboxylic acid</span></span><br>（如乙酸 <code>ethanoic acid, CH₃COOH</code>）</td>
              <td><strong>橙色变绿色（<code>orange to green</code>）</strong>。<br>原理：挥发的醇和中间体醛蒸气在垂直冷凝管中冷凝流回瓶内，与过量氧化剂充分反应直至完全转化为羧酸。</td>
            </tr>
            <tr>
              <td><strong>仲醇 <code>2° alcohol</code></strong><br>（如丙-2-醇 <code>propan-2-ol</code>，含 <code>-CH(OH)-</code>）</td>
              <td><code>Cr₂O₇²⁻(aq)/H⁺(aq)</code> + <strong>回流加热（<code>heat under reflux</code>）</strong></td>
              <td><span class="term">酮 <span class="en">ketone</span></span><br>（如丙酮 <code>propanone, CH₃COCH₃</code>）</td>
              <td><strong>橙色变绿色（<code>orange to green</code>）</strong>。<br>酮的羰基碳上已无 <code>H</code> 原子，<strong>不能被进一步氧化（cannot be further oxidized）</strong>！</td>
            </tr>
            <tr>
              <td><strong>叔醇 <code>3° alcohol</code></strong><br>（如甲基丙-2-醇 <code>methylpropan-2-ol</code>，含 <code>&gt;C(OH)-</code>）</td>
              <td><code>Cr₂O₇²⁻(aq)/H⁺(aq)</code>，加热</td>
              <td><strong>不反应（No reaction）！</strong></td>
              <td><strong>无明显变化，溶液保持橙色（<code>no observable change / remains orange</code>）</strong>。<br>原因：连有 <code>-OH</code> 的碳原子上<strong>没有直接相连的氢原子（no H atom attached to the C—OH carbon）</strong>！</td>
            </tr>
          </tbody>
        </table>

        <h4>3. 装置安全红线与生活化学联系（Safety Rules &amp; Everyday Chemistry）</h4>
        <ul class="chem-list">
          <li><strong>实验装置三大必考细节（结合下方装置对比图记忆！）</strong>：
            <br>① <strong>回流冷凝管顶部严禁加塞（<code>NEVER stopper the top of the reflux condenser</code>）</strong>！封闭加热液体会导致瓶内气压急剧升高引发爆炸（pressure build-up / explosion）。
            <br>② <strong>冷却水一律“下进上出”（<code>water in at the bottom, water out at the top</code>）</strong>，确保冷凝管水夹套（water jacket）完全充满冷水，达到最高冷凝效率。
            <br>③ 梨形烧瓶（<code>pear-shaped flask</code>）底部必须加入几粒<strong>防暴沸颗粒（<code>anti-bumping granules</code>）</strong>，确保液体平稳沸腾（smooth boiling）。</li>
          <li><strong>生活中的乙醇氧化（Oxidation of Ethanol in Daily Life）</strong>：
            <br>· <strong>呼气酒精测试仪（<span class="term">呼气酒精测试仪 <span class="en">breathalyzer</span></span>）</strong>：传统化学式酒精测试管内装有浸有橙色酸化重铬酸钾（<code>acidified K<sub>2</sub>Cr<sub>2</sub>O<sub>7</sub></code>）晶体的硅胶；酒驾司机呼出的乙醇蒸气将其还原，管内颜色<strong>由橙变绿（orange to green）</strong>，变绿长度可估算血液酒精浓度。
            <br>· <strong>葡萄酒/啤酒敞口变酸（<span class="term">酒变酸 <span class="en">souring of wine</span></span>）</strong>：酒类长期暴露在空气（air）中，空气中的微生物/细菌（microbes / bacteria）会催化氧气（<code>O<sub>2</sub></code>）将乙醇（<code>ethanol</code>）通过空气氧化（aerial oxidation）变成具有酸味的乙酸（<code>ethanoic acid</code>）。</li>
        </ul>
      `,
      svgId: 'svg-reflux-vs-distillation',
      svgCaption: '伯醇（1° alcohol）氧化的实验控制核心：左侧回流加热（heating under reflux，顶部敞口 + 过量氧化剂）将蒸气冷凝流回瓶底彻底氧化为羧酸（carboxylic acid）；右侧蒸馏装置（distillation，过量醇 + 加热温度高于醛沸点但低于醇沸点）让无分子间氢键、沸点最低的醛（aldehyde）一生成即刻蒸出！',
      textbookFormulas: [
        {
          label: '乙醇控制氧化制乙醛（Controlled oxidation of ethanol to ethanal — Distillation）',
          equationHtml: `CH<sub>3</sub>CH<sub>2</sub>OH(l) + [O] <span class="chem-arrow"><span class="cond-top">Cr<sub>2</sub>O<sub>7</sub><sup>2−</sup>(aq)/H<sup>+</sup>(aq)</span><span class="arr-main">⟶</span><span class="cond-bot">heat, distillation (excess ethanol)</span></span> CH<sub>3</sub>CHO(g) + H<sub>2</sub>O(l)`,
          note: '系数为 1 个 [O]，脱去 2 个 H 生成 1 分子 H₂O！乙醛沸点仅 20.2 °C，接收瓶常置于冰水浴（ice-water bath）中防止挥发。'
        },
        {
          label: '乙醇完全氧化制乙酸（Complete oxidation of ethanol to ethanoic acid — Reflux）',
          equationHtml: `CH<sub>3</sub>CH<sub>2</sub>OH(l) + 2[O] <span class="chem-arrow"><span class="cond-top">excess Cr<sub>2</sub>O<sub>7</sub><sup>2−</sup>(aq)/H<sup>+</sup>(aq)</span><span class="arr-main">⟶</span><span class="cond-bot">heat under reflux</span></span> CH<sub>3</sub>COOH(aq) + H<sub>2</sub>O(l)`,
          note: '系数为 2[O]（第一个 [O] 脱氢成 CH₃CHO + H₂O，第二个 [O] 插入成 CH₃COOH），千万别漏写右边的 + H₂O！'
        },
        {
          label: '丙-2-醇氧化制丙酮（Oxidation of propan-2-ol to propanone）',
          equationHtml: `CH<sub>3</sub>CH(OH)CH<sub>3</sub>(l) + [O] <span class="chem-arrow"><span class="cond-top">Cr<sub>2</sub>O<sub>7</sub><sup>2−</sup>(aq)/H<sup>+</sup>(aq)</span><span class="arr-main">⟶</span><span class="cond-bot">heat under reflux</span></span> CH<sub>3</sub>COCH<sub>3</sub>(aq) + H<sub>2</sub>O(l)`,
          note: '仲醇（2° alcohol）氧化只消耗 1 个 [O]，生成酮（ketone）与水（H₂O），溶液由橙色变为绿色（from orange to green）。'
        }
      ],
      examTrap: '写乙醇完全氧化制乙酸方程式时，十个学生有五个写成“CH₃CH₂OH + [O] ⟶ CH₃COOH”（既配不平 H 原子，又漏掉了 H₂O 和系数 2[O]）！随时在草稿纸核对原子守恒：左边 C₂H₆O + 2O（共 6H、3O），右边 CH₃COOH + H₂O（共 6H、3O），严丝合缝！另外解释为什么蒸馏能停在乙醛时，必须点明“乙醛分子间无氢键（ethanal cannot form intermolecular hydrogen bonds），沸点远低于乙醇与乙酸”！',
      relations: [
        {
          type: 'buildsOn',
          targetUnitId: 'u29',
          label: '衔接 Unit 29：分子间氢键（intermolecular hydrogen bonding）决定沸点高低顺序',
          why: '正因为乙醛（CH₃CHO, 20.2 °C）无 -OH 不能形成分子间氢键，沸点远低于能形成氢键的乙醇（78 °C）和乙酸（118 °C），才使“边反应边蒸馏分离出醛”成为可能！'
        },
        {
          type: 'leadsTo',
          targetUnitId: 'u32',
          label: '通向 Unit 32：有机合成实验中的仪器装配与产率（percentage yield）计算',
          why: '如果在制备乙酸时忘记使用回流冷凝管（reflux condenser）或未加足量氧化剂，部分乙醇和乙醛挥发逃逸，就会直接导致乙酸产率偏低！'
        }
      ],
      questions: [
        {
          id: 'u31-s4-q1',
          level: 1,
          levelTag: 'Level 1 · 中文直觉破冰',
          type: 'mcq',
          stem: '现有三种分子式均为 C₄H₁₀O 的醇同分异构体（isomeric alcohols）：① 丁-1-醇（butan-1-ol）、② 丁-2-醇（butan-2-ol）、③ 甲基丙-2-醇（methylpropan-2-ol）。将它们分别与过量酸化重铬酸钾溶液（excess acidified K₂Cr₂O₇(aq)）回流加热，下列实验结果哪一项正确？',
          cueWords: [],
          options: [
            'A. 三种溶液全部由橙色变为绿色（from orange to green）',
            'B. ① 生成丁酸（butanoic acid），② 生成丁酮（butanone），③ 溶液保持橙色（remains orange）不反应',
            'C. ① 生成丁醛（butanal），② 不反应，③ 生成丙酮（propanone）',
            'D. 只有 ① 能使橙色溶液变为绿色，② 和 ③ 均无明显变化'
          ],
          answerIndex: 1,
          hint: '先判断 ①、②、③ 分别属于伯醇（1°）、仲醇（2°）还是叔醇（3°）！再回想在“过量氧化剂 + 回流加热”条件下各自变成什么产物？',
          explanation: '① 丁-1-醇（butan-1-ol）是伯醇（1° alcohol），与过量酸化重铬酸钾回流加热完全氧化生成丁酸（butanoic acid），溶液由橙变绿；② 丁-2-醇（butan-2-ol）是仲醇（2° alcohol），氧化生成丁酮（butanone），溶液也由橙变绿；③ 甲基丙-2-醇（methylpropan-2-ol, (CH₃)₃COH）是叔醇（3° alcohol），连有 -OH 的碳上没有 H 原子，不能被氧化，溶液保持橙色（remains orange）。',
          commonMistake: '误以为在回流加热（heat under reflux）与过量氧化剂条件下 ① 会停在丁醛（butanal），或者误以为仲醇 ② 也不能被氧化！'
        },
        {
          id: 'u31-s4-q2',
          level: 2,
          levelTag: 'Level 2 · 中英过渡实战',
          type: 'mcq',
          stem: '某同学想在实验室将丙-1-醇（propan-1-ol, 沸点 97 °C）氧化制备丙醛（propanal, 沸点 49 °C），避免生成丙酸（propanoic acid, 沸点 141 °C）。下列哪一套试剂、用量与实验装置组合最为恰当？',
          cueWords: [
            { phrase: 'propan-1-ol', zh: '丙-1-醇（1° 醇）', concept: '伯醇两段氧化：先成醛，再成羧酸' },
            { phrase: 'propanal, 沸点 49 °C', zh: '丙醛（沸点最低）', concept: '需在生成瞬间利用蒸馏（distillation）移离氧化剂体系' }
          ],
          options: [
            'A. 过量酸化高锰酸钾溶液（excess acidified KMnO₄(aq)），使用蒸馏装置（distillation set-up）',
            'B. 过量酸化重铬酸钾溶液（excess acidified K₂Cr₂O₇(aq)），使用回流加热装置（reflux set-up）',
            'C. 过量丙-1-醇（excess propan-1-ol）与酸化重铬酸钾溶液（acidified K₂Cr₂O₇(aq)），使用蒸馏装置（distillation set-up）收集约 49 °C 馏分',
            'D. 过量丙-1-醇（excess propan-1-ol）与酸化重铬酸钾溶液，在塞紧橡胶塞的圆底烧瓶中剧烈加热'
          ],
          answerIndex: 2,
          hint: '注意三点：① 酸化 KMnO₄ 太猛不能停在醛；② 回流（reflux）会把醛留下来变成酸；③ 严禁在封闭塞紧的烧瓶里加热！',
          explanation: '制备醛（aldehyde）的黄金三要素是：① 选用温和可控的酸化重铬酸钾溶液（acidified K₂Cr₂O₇(aq)）（不能用强氧化剂 acidified KMnO₄(aq)）；② 使用过量伯醇（excess propan-1-ol）限制氧化剂量；③ 采用蒸馏装置（distillation set-up），控制加热温度略高于丙醛沸点（49 °C）但低于丙-1-醇沸点（97 °C），使丙醛一生成便立即蒸出！D 项封闭加热会导致爆炸，严禁操作。',
          commonMistake: '误选 A：忽略了酸化高锰酸钾（acidified KMnO₄(aq)）氧化性过强，会把伯醇直接氧化为羧酸，无法停留在醛阶段。'
        },
        {
          id: 'u31-s4-q3',
          level: 3,
          levelTag: 'Level 3 · HKDSE 全英文实战',
          type: 'structured',
          stem: 'Ethanol (boiling point 78 °C) can be oxidized by acidified potassium dichromate solution to form either ethanal (boiling point 20.2 °C) or ethanoic acid (boiling point 118 °C). Write a chemical equation (using [O]) for the complete oxidation of ethanol to ethanoic acid, state the observable colour change, and explain in terms of intermolecular forces why distillation allows ethanal to be isolated before further oxidation.',
          cueWords: [
            { phrase: 'complete oxidation of ethanol to ethanoic acid', zh: '乙醇完全氧化制乙酸', concept: '需消耗 2[O] 并生成 + H₂O' },
            { phrase: 'acidified potassium dichromate solution', zh: '酸化重铬酸钾溶液', concept: '颜色由橙色变为绿色（from orange to green）' },
            { phrase: 'in terms of intermolecular forces', zh: '从分子间作用力角度解释', concept: '对比乙醛（仅范德华力）与乙醇/乙酸（有分子间氢键）的沸点差异' }
          ],
          hint: '三步满分法：① 方程式别忘写 2[O] 和 + H₂O；② 颜色变化写 from orange to green；③ 分子间作用力对比：ethanal 没有 -OH 无法形成 intermolecular hydrogen bonds，沸点最低，一生成立刻蒸馏蒸出！',
          explanation: '乙醇（ethanol）完全氧化生成乙酸（ethanoic acid）消耗 2[O] 并产生 1 分子水，溶液由橙色变为绿色。由于乙醛（ethanal）分子不含 -OH 基团，分子间只有较弱的范德华力（van der Waals\' forces），不能形成分子间氢键（intermolecular hydrogen bonds），而乙醇和乙酸分子间均能形成强氢键；因此乙醛沸点（20.2 °C）最低，在蒸馏（distillation）时一生成便立即气化蒸出，脱离氧化剂而不被进一步氧化。',
          markingScheme: [
            '1M: Equation: CH3CH2OH + 2[O] ⟶ CH3COOH + H2O',
            '1M: Colour change: The solution changes from orange to green.',
            '1M: Ethanal molecules are held only by weak van der Waals\' forces (cannot form intermolecular hydrogen bonds), whereas ethanol and ethanoic acid molecules form strong intermolecular hydrogen bonds.',
            '1M: Thus ethanal has the lowest boiling point and distils off immediately from the oxidizing mixture as soon as it is formed, preventing further oxidation.'
          ],
          commonMistake: '只答“ethanal has a lower boiling point”而没有按题目要求“in terms of intermolecular forces”对比 hydrogen bonds 与 van der Waals\' forces，直接痛失 1 分结构分！'
        }
      ]
    },

    // =========================================================================
    // SECTION 5: 31.6 - 31.7 Reactions of Aldehydes, Ketones & Carboxylic Acids
    // =========================================================================
    {
      id: 'u31-s5',
      code: '31.6–31.7',
      titleEn: 'Reactions of aldehydes, ketones & carboxylic acids',
      titleZh: '醛、酮的氧化还原与羧酸的四大典型反应',
      analogy: {
        icon: '⚖️',
        title: '还原剂两兄弟：温和水性“小绵羊” NaBH₄ vs 狂暴恐水“霸王龙” LiAlH₄',
        body: '把氧化过程倒过来走就是还原反应（reduction，方程式写 [H]）！在 HKDSE 里你有两位还原剂帮手：弟弟硼氢化钠（NaBH₄(aq)）性格温和，能在水溶液里安全工作，但它力气有限——只能还原醛（aldehyde → 1° alcohol）和酮（ketone → 2° alcohol），遇到顽固的羧酸（carboxylic acid, -COOH）和酯（ester, -COOR\'）完全推不动！哥哥氢化铝锂（LiAlH₄）则是力大无穷的“霸王龙”，醛、酮、羧酸甚至酯它统统能还原成醇，但它极其恐水（遇水剧烈反应爆炸！），所以第一步必须关在无水乙醚（1. LiAlH₄, dry ether）里反应，反应完第二步再加稀酸（2. H⁺(aq)）释放出醇！'
      },
      coreExplanation: `
        <h4>1. 醛与酮的鉴别与反应（Reactions of Aldehydes &amp; Ketones, 31.6）</h4>
        <ul class="chem-list">
          <li><strong>① 氧化反应 —— 鉴别醛（Aldehyde）与酮（Ketone）的核心化学测试</strong>：
            <br>将待测液与 <span class="term">酸化重铬酸钾溶液 <span class="en">acidified K₂Cr₂O₇(aq)</span></span> 共热（<code>warm / heat</code>）：
            <br>· <span class="term">醛 <span class="en">aldehyde, RCHO</span></span>：被氧化为 <span class="term">羧酸 <span class="en">carboxylic acid, RCOOH</span></span>（<code>RCHO + [O] ⟶ RCOOH</code>），溶液<strong>由橙色变为绿色（<code>from orange to green</code>）</strong>！
            <br>· <span class="term">酮 <span class="en">ketone, RCOR'</span></span>：<strong>不发生氧化反应（no reaction）</strong>，无明显变化（溶液保持橙色 <code>remains orange</code>）！
            <br><em>（拓展视野提示：学校补充讲义有时会提及 <span class="term">托伦斯试剂 <span class="en">Tollens' reagent</span></span> 银镜测试——醛在试管内壁生成银镜 <code>silver mirror</code> 而酮不反应；以及 <code>2,4-DNP</code> 检验羰基 <code>C=O</code>。但在 HKDSE 标准课程考卷中，鉴别醛与酮首选 <strong>温热 <code>acidified K₂Cr₂O₇(aq)</code></strong>！）</em></li>
          <li><strong>② 还原反应（Reduction of Aldehydes &amp; Ketones，方程式中用 <code>[H]</code> 表示来自还原剂的氢原子）</strong>：
            <br>· <strong>醛 + <code>2[H]</code> ⟶ 伯醇（<code>1° alcohol</code>）</strong>：<code>RCHO + 2[H] ⟶ RCH<sub>2</sub>OH</code>
            <br>· <strong>酮 + <code>2[H]</code> ⟶ 仲醇（<code>2° alcohol</code>）</strong>：<code>RCOR' + 2[H] ⟶ RCH(OH)R'</code>
            <br>· <strong>可选用的两种还原剂（任选一种即可还原醛和酮！）</strong>：
              <br>&nbsp;&nbsp;(a) <strong><code>NaBH<sub>4</sub>(aq)</code></strong>（<span class="term">硼氢化钠水溶液 <span class="en">aqueous sodium borohydride</span></span>，温和安全，可直接在水中进行！）；<strong>或</strong>
              <br>&nbsp;&nbsp;(b) <strong><code>1. LiAlH<sub>4</sub>, dry ether</code></strong> 紧接 <strong><code>2. H<sup>+</sup>(aq)</code></strong>（<span class="term">氢化铝锂 <span class="en">lithium aluminium hydride</span></span> 溶于无水乙醚 <code>dry ether / dry ethoxyethane</code>，第二步加稀酸水解。因 <code>LiAlH<sub>4</sub></code> 与水剧烈反应，<strong>绝对严禁把 1、2 两步混写在一起！</strong>）</li>
        </ul>

        <h4>2. 羧酸的四大核心反应（Four Key Reactions of Carboxylic Acids, <code>-COOH</code>, 31.7）</h4>
        <p><span class="term">羧酸 <span class="en">carboxylic acids, RCOOH</span></span> 在水中部分电离（<code>RCOOH(aq) ⇌ RCOO<sup>−</sup>(aq) + H<sup>+</sup>(aq)</code>），属于<strong>弱酸（weak acids）</strong>，兼具无机酸通性与有机官能团转化特性：</p>

        <table class="chem-table">
          <thead>
            <tr>
              <th>反应类型（Reaction Type）</th>
              <th>试剂与条件（Reagents &amp; Conditions）</th>
              <th>产物与必背考点（Products &amp; Core Exam Points）</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>① 弱酸通性反应（Weak Acid Reactions）</strong><br>（特别是与 <code>Na₂CO₃</code> / <code>NaHCO₃</code> 反应！）</td>
              <td>· <code>Mg(s)</code> / <code>Zn(s)</code><br>· <code>NaOH(aq)</code> / <code>KOH(aq)</code><br>· <strong><code>Na₂CO₃(aq)</code> 或 <code>NaHCO₃(aq)</code></strong></td>
              <td>· <strong>★ 鉴别 <code>-COOH</code> 的王牌反应</strong>：加入碳酸钠或碳酸氢钠溶液产生<strong>无色气泡（<code>colourless gas bubbles / effervescence</code>，即 <code>CO₂(g)</code>，能使石灰水变浑浊 turns limewater milky）</strong>！<br>· <strong>注意</strong>：醇（<code>R—OH</code>）、酯、醛、酮<strong>均不与 <code>NaHCO₃(aq)</code> 反应</strong>！（而 <code>Na(s)</code> 和 <code>PCl₅(s)</code> 对醇和羧酸都会反应，不能区分醇与羧酸！）</td>
            </tr>
            <tr>
              <td><strong>② 酯化反应（Esterification）</strong></td>
              <td>醇 <code>R'OH</code> + <strong><code>conc. H₂SO₄</code>（浓硫酸），<code>heat under reflux</code>（回流加热）</strong></td>
              <td>· <strong>必须画可逆号 <code>⇌</code></strong>：<code>RCOOH + R'OH ⇌ RCOOR' + H₂O</code>（酸脱 <code>-OH</code>、醇脱 <code>-H</code>）。<br>· <strong>浓硫酸双重作用</strong>：① 作<strong>催化剂（<code>catalyst</code>）</strong>加快反应；② 作<strong>吸水剂（<code>dehydrating agent</code> / removes water）</strong>使平衡向右移动以提高酯产率。<br>· <strong>倒入 <code>Na₂CO₃(aq)</code> 后现象</strong>：闻到<strong>甜美果香味（<code>sweet / pleasant fruity smell</code>）</strong> + 液面上浮现<strong>不溶于水的无色油状液体层（<code>insoluble colourless oily layer</code>）</strong>（且中和残酸冒泡）。</td>
            </tr>
            <tr>
              <td><strong>③ 还原为伯醇（Reduction to 1° Alcohol）</strong></td>
              <td><strong>仅限</strong>：<br><code>1. LiAlH₄, dry ether</code><br><code>2. H⁺(aq)</code></td>
              <td>· 方程式：<code>RCOOH + 4[H] ⟶ RCH₂OH + H₂O</code>（注意配平是 <strong><code>4[H]</code></strong> 且生成 <strong><code>+ H₂O</code></strong>！）。<br>· <strong>⚠️ 铁律</strong>：<strong><code>NaBH₄(aq)</code> 绝不能还原羧酸（<code>-COOH</code>）或酯（<code>-COOR'</code>）！</strong></td>
            </tr>
            <tr>
              <td><strong>④ 转化为未取代酰胺（Conversion to Unsubstituted Amide, <code>RCONH₂</code>）</strong></td>
              <td><strong>两步法（室温高效合成）</strong>：<br>Step 1: <code>PCl₅(s)</code> 或 <code>SOCl₂(l)</code><br>Step 2: 浓氨水 / 过量 <code>NH₃</code></td>
              <td>· Step 1 先将 <code>-COOH</code> 转化为高活性的 <span class="term">酰氯 <span class="en">acyl chloride, RCOCl</span></span>（如 <code>CH₃COCl</code> 乙酰氯 ethanoyl chloride）；<br>· Step 2 加 <code>NH₃</code> 立即生成 <span class="term">未取代酰胺 <span class="en">unsubstituted amide, RCONH₂</span></span>。<br>· <strong>为什么不直接把 <code>RCOOH + NH₃(aq)</code> 混合？</strong>室温直接混合只发生酸碱中和生成离子盐<strong>羧酸铵（<code>ammonium carboxylate, RCOO⁻NH₄⁺</code>）</strong>，需高温强热脱水且产率很低！</td>
            </tr>
          </tbody>
        </table>

        <div class="callout callout-tip">
          <strong>💡 双官能团选择性还原秒杀技（Selective Reduction of Bifunctional Compounds）：</strong><br>
          如果遇到一个同时含有<strong>酮羰基（<code>C=O</code>）</strong>和<strong>羧基（<code>-COOH</code>）</strong>的分子，例如 <code>CH₃COCH₂COOH</code>（3-oxobutanoic acid）：<br>
          · 加入 <strong><code>NaBH₄(aq)</code></strong> ➔ 只还原酮 <code>C=O</code>，保留 <code>-COOH</code> 不变，生成羟基酸 <strong><code>CH₃CH(OH)CH₂COOH</code></strong>！<br>
          · 加入 <strong><code>1. LiAlH₄, dry ether / 2. H⁺(aq)</code></strong> ➔ 酮和羧酸<strong>全部被还原</strong>，生成二元醇 <strong><code>CH₃CH(OH)CH₂CH₂OH</code></strong>（butane-1,3-diol）！（同理，碳碳双键 <code>C=C</code> 既不被 <code>NaBH₄</code> 还原，也不被 <code>LiAlH₄</code> 还原，<code>C=C</code> 只被 <code>H₂ / Pt</code> 还原！）
        </div>
      `,
      textbookFormulas: [
        {
          label: '醛的氧化与酮的还原（Oxidation of aldehyde & Reduction of ketone）',
          equationHtml: `CH<sub>3</sub>CHO + [O] <span class="chem-arrow"><span class="cond-top">Cr<sub>2</sub>O<sub>7</sub><sup>2−</sup>(aq)/H<sup>+</sup>(aq), warm</span><span class="arr-main">⟶</span><span class="cond-bot"></span></span> CH<sub>3</sub>COOH &nbsp;&nbsp;|&nbsp;&nbsp; CH<sub>3</sub>COCH<sub>3</sub> + 2[H] <span class="chem-arrow"><span class="cond-top">NaBH<sub>4</sub>(aq)</span><span class="arr-main">⟶</span><span class="cond-bot"></span></span> CH<sub>3</sub>CH(OH)CH<sub>3</sub>`,
          note: '醛温热使酸化重铬酸钾由橙变绿（orange to green），酮不反应；醛还原得伯醇（1° alcohol），酮还原得仲醇（2° alcohol）。'
        },
        {
          label: '羧酸与碳酸氢钠反应检验（Reaction of carboxylic acid with NaHCO₃(aq)）',
          equationHtml: `CH<sub>3</sub>COOH(aq) + NaHCO<sub>3</sub>(aq) <span class="chem-arrow"><span class="cond-top"></span><span class="arr-main">⟶</span><span class="cond-bot"></span></span> CH<sub>3</sub>COO<sup>−</sup>Na<sup>+</sup>(aq) + H<sub>2</sub>O(l) + CO<sub>2</sub>(g)`,
          note: '产生无色气泡 CO₂(g)（effervescence），是把羧酸（-COOH）与醇（-OH）、酯、醛区分开来的首选鉴别反应！'
        },
        {
          label: '酯化反应标准方程式（Esterification — MUST use reversible arrow ⇌）',
          equationHtml: `CH<sub>3</sub>COOH(l) + CH<sub>3</sub>CH<sub>2</sub>OH(l) <span class="chem-arrow"><span class="cond-top">conc. H<sub>2</sub>SO<sub>4</sub></span><span class="arr-main">⇌</span><span class="cond-bot">heat under reflux</span></span> CH<sub>3</sub>COOCH<sub>2</sub>CH<sub>3</sub>(l) + H<sub>2</sub>O(l)`,
          note: '乙酸（ethanoic acid）与乙醇（ethanol）生成乙酸乙酯（ethyl ethanoate）与水；漏写可逆箭头 ⇌ 或漏写 + H₂O 均会扣分！'
        },
        {
          label: '羧酸经 LiAlH₄ 还原为伯醇（Reduction of carboxylic acid to 1° alcohol）',
          equationHtml: `CH<sub>3</sub>COOH + 4[H] <span class="chem-arrow"><span class="cond-top">1. LiAlH<sub>4</sub>, dry ether</span><span class="arr-main">⟶</span><span class="cond-bot">2. H<sup>+</sup>(aq)</span></span> CH<sub>3</sub>CH<sub>2</sub>OH + H<sub>2</sub>O`,
          note: '必须分 1、2 两步书写！系数为 4[H] 并生成 1 分子 H₂O；绝不可改用 NaBH₄(aq)！'
        },
        {
          label: '羧酸经酰氯两步转化为未取代酰胺（Two-step conversion of carboxylic acid to amide）',
          equationHtml: `RCOOH <span class="chem-arrow"><span class="cond-top">SOCl<sub>2</sub> (or PCl<sub>5</sub>)</span><span class="arr-main">⟶</span><span class="cond-bot"></span></span> RCOCl <span class="chem-arrow"><span class="cond-top">NH<sub>3</sub></span><span class="arr-main">⟶</span><span class="cond-bot"></span></span> RCONH<sub>2</sub>`,
          note: 'Step 1：RCOOH + SOCl₂ ⟶ RCOCl + SO₂(g) + HCl(g)；Step 2：RCOCl + NH₃ ⟶ RCONH₂ + HCl（过量氨吸收 HCl 生成 NH₄Cl）。'
        }
      ],
      examTrap: '四大必防失分雷区：① 写酯化反应（esterification）方程式把可逆号“⇌”写成了单向箭头“⟶”；② 还原羧酸时随手写了 NaBH₄(aq)，或者把“LiAlH₄, H⁺(aq)”写在同一行不分 1、2 两步（LiAlH₄ 遇水爆炸，直接判 0 分！）；③ 误以为直接向丙酸加氨水（NH₃(aq)）就能在室温一步得到丙酰胺（propanamide）——室温下只生成丙酸铵盐 CH₃CH₂COO⁻NH₄⁺；④ 酯命名搞反醇与酸的顺序：丙酸（propanoic acid）+ 甲醇（methanol）生成的是丙酸甲酯 methyl propanoate（醇变甲基 methyl 在前，酸变丙酸酯 propanoate 在后）！',
      relations: [
        {
          type: 'buildsOn',
          targetUnitId: 'u29',
          label: '衔接 Unit 29：酯（esters）的双词命名规则（alkyl alkanoate）与水溶性',
          why: '准确写出酯化反应产物的结构与名称，依赖 Unit 29“来自醇的烃基 alkyl 在前、来自酸的羧酸根 alkanoate 在后”的命名基本功。'
        },
        {
          type: 'leadsTo',
          targetUnitId: 'u32',
          label: '通向 Unit 32：乙酸乙酯制备后的碳酸钠洗涤与分液提纯（washing with Na₂CO₃(aq)）',
          why: '因为酯化反应可逆（⇌），反应液中必定残留未反应的乙醇、乙酸及浓硫酸催化剂，需倒入 Na₂CO₃(aq) 中和除酸并降低酯在水中的溶解度！'
        }
      ],
      questions: [
        {
          id: 'u31-s5-q1',
          level: 1,
          levelTag: 'Level 1 · 中文直觉破冰',
          type: 'mcq',
          stem: '实验室桌上有两瓶未贴标签的无水无色液体，已知分别是丙-1-醇（propan-1-ol）和丙酸（propanoic acid）。下列哪一种试剂最适合用来一步鉴别它们？',
          cueWords: [],
          options: [
            'A. 金属钠颗粒（sodium granules, Na(s)）',
            'B. 五氯化磷固体（solid phosphorus pentachloride, PCl₅(s)）',
            'C. 碳酸氢钠水溶液（aqueous sodium hydrogencarbonate, NaHCO₃(aq)）',
            'D. 溴的有机溶液（bromine dissolved in organic solvent）'
          ],
          answerIndex: 2,
          hint: '醇（R—OH）和羧酸（R—COOH）分子里都含有 -OH 基团！想一想哪个试剂只认“酸性 -COOH”而不理会中性的醇？',
          explanation: '丙-1-醇（propan-1-ol）和丙酸（propanoic acid）都含有羟基（-OH），因此两者与金属钠 Na(s) 都会放出无色气泡 H₂(g)，与固体 PCl₅(s) 都会产生白雾 HCl(g)（A、B 不能鉴别）；两者均无 C=C 双键，都不与 Br₂ 反应（D 不能鉴别）。只有碳酸氢钠溶液（NaHCO₃(aq)）仅与具弱酸性的丙酸反应放出无色气泡 CO₂(g)（effervescence），而与丙-1-醇无明显变化！',
          commonMistake: '不假思索选了 PCl₅(s) 或 Na(s) —— 忘记羧基 -COOH 里面也有一个 -OH，同样会跟 PCl₅ 冒白雾、跟 Na 冒氢气！'
        },
        {
          id: 'u31-s5-q2',
          level: 2,
          levelTag: 'Level 2 · 中英过渡实战',
          type: 'mcq',
          stem: '双官能团有机化合物 M 的结构简式为 OHC—CH₂—CH₂—COOH（同时含有醛基 aldehyde group -CHO 与羧基 carboxyl group -COOH）。若将化合物 M 分别与 (1) NaBH₄(aq) 及 (2) 1. LiAlH₄, dry ether / 2. H⁺(aq) 完全反应，所得有机产物的结构简式分别是什么？',
          cueWords: [
            { phrase: 'OHC—CH₂—CH₂—COOH', zh: '含 -CHO 与 -COOH 的双官能团分子', concept: '考察还原剂对醛基与羧基的选择性差异' },
            { phrase: 'NaBH₄(aq)', zh: '硼氢化钠水溶液', concept: '只还原 -CHO 为 -CH₂OH，不能还原 -COOH' },
            { phrase: '1. LiAlH₄, dry ether / 2. H⁺(aq)', zh: '氢化铝锂（无水乙醚）后加酸', concept: '强还原剂，将 -CHO 与 -COOH 全部还原为 -CH₂OH' }
          ],
          options: [
            'A. (1) HOCH₂CH₂CH₂COOH ； (2) HOCH₂CH₂CH₂CH₂OH',
            'B. (1) HOCH₂CH₂CH₂CH₂OH ； (2) HOCH₂CH₂CH₂COOH',
            'C. (1) HOOCCH₂CH₂COOH ； (2) HOCH₂CH₂CH₂CH₂OH',
            'D. (1) HOCH₂CH₂CH₂COOH ； (2) HOCH₂CH₂CH₂CHO'
          ],
          answerIndex: 0,
          hint: '口诀：温和的 NaBH₄(aq) 只推得动醛/酮，推不动羧酸；强悍的 LiAlH₄ 把醛和羧酸统统还原成伯醇 -CH₂OH！',
          explanation: '(1) 硼氢化钠水溶液（NaBH₄(aq)）是温和还原剂，只能将左端的醛基（-CHO）还原为伯醇羟基（-CH₂OH），而右端的羧基（-COOH）保持不变，产物为 HOCH₂CH₂CH₂COOH（4-hydroxybutanoic acid）。(2) 氢化铝锂（1. LiAlH₄, dry ether / 2. H⁺(aq)）是强还原剂，同时将 -CHO 和 -COOH 全部还原为 -CH₂OH，生成丁-1,4-二醇（butane-1,4-diol, HOCH₂CH₂CH₂CH₂OH）。',
          commonMistake: '混淆两种还原剂强弱而选了 B，或把 NaBH₄ 当成氧化剂选了 C。'
        },
        {
          id: 'u31-s5-q3',
          level: 3,
          levelTag: 'Level 3 · HKDSE 全英文实战',
          type: 'structured',
          stem: 'Propanoic acid is heated under reflux with methanol in the presence of concentrated sulphuric acid to form an ester. Write a chemical equation for this esterification reaction, name the ester formed, state TWO roles of concentrated sulphuric acid, and state TWO observable changes when the reaction mixture is poured into aqueous sodium carbonate.',
          cueWords: [
            { phrase: 'Propanoic acid', zh: '丙酸（CH₃CH₂COOH）', concept: '提供 alkanoate 部分（propanoate）' },
            { phrase: 'methanol', zh: '甲醇（CH₃OH）', concept: '提供 alkyl 部分（methyl）' },
            { phrase: 'concentrated sulphuric acid', zh: '浓硫酸', concept: '双重作用：催化剂（catalyst）+ 吸水剂促平衡右移' },
            { phrase: 'poured into aqueous sodium carbonate', zh: '倒入碳酸钠溶液', concept: '现象：甜果香味 + 不溶油状液层浮于水面 + 无色气泡' }
          ],
          hint: '四步全拿分：① 方程式必须用可逆号 ⇌ 且写 + H₂O；② 醇在前酸在后命名：methyl propanoate；③ 浓硫酸两个作用（catalyst + dehydrating agent shifting equilibrium right）；④ 现象答果香味、油状分层或气泡中的任意两个！',
          explanation: '丙酸（propanoic acid）与甲醇（methanol）在浓硫酸催化回流下发生可逆酯化反应（esterification），生成丙酸甲酯（methyl propanoate）和水。浓硫酸既作催化剂加快反应速率，又吸收生成的水使可逆平衡向右移动以提高产率。倒入碳酸钠溶液后，未反应的酸与 Na₂CO₃ 反应产生无色气泡（effervescence），同时闻到甜美果香味（sweet fruity smell），且水面上出现一层不溶于水的无色油状液体（insoluble oily layer）。',
          markingScheme: [
            '1M: Equation: CH3CH2COOH(l) + CH3OH(l) ⇌ CH3CH2COOCH3(l) + H2O(l) (must show reversible sign ⇌)',
            '1M: Name of ester: methyl propanoate',
            '1M: Two roles of conc. H2SO4: acts as a catalyst to speed up the reaction, AND removes water / acts as a dehydrating agent to shift the equilibrium position to the right (increasing yield of ester).',
            '1M: Any TWO observations: sweet / pleasant fruity smell is detected; an insoluble / immiscible colourless oily liquid layer floats on top; colourless gas bubbles / effervescence evolved.'
          ],
          commonMistake: '把酯命名反写成 propyl methanoate，或者方程式漏掉了可逆号“⇌”写成单向箭头“⟶”！'
        }
      ]
    },

    // =========================================================================
    // SECTION 6: 31.8 - 31.9 Hydrolysis of Esters & Unsubstituted Amides
    // =========================================================================
    {
      id: 'u31-s6',
      code: '31.8–31.9',
      titleEn: 'Hydrolysis of esters & unsubstituted amides',
      titleZh: '酯与未取代酰胺的水解反应（酸碱介质产物铁律）',
      analogy: {
        icon: '✂️',
        title: '“酸里留不住氨气，碱里留不住游离酸”—— 水解产物的变装铁律',
        body: '把酯（ester, RCOOR\'）和未取代酰胺（unsubstituted amide, RCONH₂）的水解想象成用剪刀剪断中间的羰基—杂原子单键（C—O 或 C—N），补上水分子的 -OH 和 -H，原本应该拆出羧酸（RCOOH，酸性）、醇（R\'OH，中性）或氨气（NH₃，碱性）。但千万别忘了它们泡在什么汤里！如果在稀酸汤（H⁺(aq)）里剪断，碱性的氨气 NH₃ 一露头就会被酸抓住质子变成铵离子（NH₄⁺）；如果在烧碱汤（OH⁻(aq)）里剪断，酸性的羧酸 RCOOH 一露头就会被碱中和变成羧酸根盐（RCOO⁻Na⁺），而碱性的氨气 NH₃ 则不受阻拦地变成刺激性气体冒出来，把湿润红色石蕊试纸熏成蓝色！记住这句“酸中无氨气、碱中无游离酸”，DSE 水解题永远百发百中！'
      },
      coreExplanation: `
        <h4>1. 酯的水解反应（Hydrolysis of Esters, <code>RCOOR'</code>, 31.8）</h4>
        <p><span class="term">酯的水解 <span class="en">hydrolysis of esters</span></span> 是酯化反应（esterification）的逆过程，可在稀酸或强碱催化并 <span class="term">回流加热 <span class="en">heating under reflux</span></span> 下把酯基（<code>-COO-</code>）剪开。<strong>酸性水解与碱性水解在可逆性与产物形态上有本质区别</strong>：</p>

        <table class="chem-table">
          <thead>
            <tr>
              <th>对比维度</th>
              <th>酸性水解（Acid Hydrolysis of Ester）</th>
              <th>碱性水解 / 皂化反应（Alkaline Hydrolysis / Saponification）</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>试剂与条件</strong></td>
              <td><code>dilute H₂SO₄(aq)</code> 或 <code>dilute HCl(aq)</code>，<code>heat under reflux</code></td>
              <td><code>NaOH(aq)</code> 或 <code>KOH(aq)</code>，<code>heat under reflux</code></td>
            </tr>
            <tr>
              <td><strong>可逆性与箭头</strong></td>
              <td><strong>可逆反应（Reversible, 必须写 <code>⇌</code>）</strong>，反应不完全（does NOT go to completion），产率较低。</td>
              <td><strong>不可逆反应（Irreversible, 写 <code>⟶</code>）</strong>，反应进行到底（goes to completion），产率高！</td>
            </tr>
            <tr>
              <td><strong>直接产物</strong></td>
              <td>游离羧酸 <strong><code>RCOOH</code></strong> + 醇 <strong><code>R'OH</code></strong></td>
              <td><strong>羧酸盐（carboxylate salt, <code>RCOO⁻Na⁺</code>，绝非游离酸！）</strong> + 醇 <strong><code>R'OH</code></strong></td>
            </tr>
            <tr>
              <td><strong>如何拿到游离羧酸 <code>RCOOH</code>？</strong></td>
              <td>已直接生成（但与未反应的酯混在一起）。</td>
              <td>回流结束后，向混合液<strong>加入过量稀酸（<code>add excess dilute HCl(aq) / H₂SO₄(aq)</code>）</strong>酸化：<code>RCOO⁻(aq) + H⁺(aq) ⟶ RCOOH</code>！</td>
            </tr>
          </tbody>
        </table>

        <h4>2. 未取代酰胺的水解反应（Hydrolysis of Unsubstituted Amides, <code>RCONH₂</code>, 31.9）</h4>
        <p><span class="term">未取代酰胺 <span class="en">unsubstituted amides, RCONH₂</span></span>（如乙酰胺 <code>ethanamide, CH₃CONH₂</code>）含有酰胺键（amide group, <code>-CONH₂</code>）。与酯不同的是，由于水解拆出的 <code>RCOOH</code> 显酸性而 <code>NH₃</code> 显碱性，<strong>无论在酸中还是碱中，都有其中一方产物与酸/碱介质彻底反应，因此未取代酰胺的酸水解与碱水解全都是不可逆反应（<code>⟶</code>）！</strong></p>

        <div class="struct-card">
          <pre class="struct-pre">★ HKDSE 考卷头号失分陷阱：未取代酰胺（RCONH₂）酸碱水解产物对照

  ┌─ [酸性水解 Acid hydrolysis]：dilute HCl(aq) 或 dilute H₂SO₄(aq), heat under reflux
  │   RCONH₂ + H₂O + H⁺(aq) ⟶ RCOOH + NH₄⁺(aq)   （若用 HCl 则写 + NH₄Cl）
  │   👉 现象：无气体放出！（NH₃ 呈碱性，在酸中全部质子化变成铵离子 NH₄⁺ 留在溶液里！）
  │
  └─ [碱性水解 Alkaline hydrolysis]：NaOH(aq) 或 KOH(aq), heat under reflux
      RCONH₂ + OH⁻(aq) ⟶ RCOO⁻(aq) + NH₃(g)      （若写化学方程式则为 RCOO⁻Na⁺ + NH₃(g)）
      👉 现象：放出具有刺激性气味的无色气体 NH₃(g)（pungent gas），能使湿润红色石蕊试纸变蓝
              （turns moist red litmus paper blue）！—— 检验未取代酰胺（-CONH₂）的经典化学测试！</pre>
          <div class="struct-cap">口诀锁死：“酸中得游离酸 RCOOH + 铵盐 NH₄⁺；碱中得羧酸盐 RCOO⁻ + 氨气 NH₃(g)；醇羟基 R'OH 无论酸碱始终保持中性原貌！”</div>
        </div>

        <h4>3. 终极通关速查表：酯、酰胺与多官能团分子的酸/碱水解全景</h4>
        <table class="chem-table">
          <thead>
            <tr>
              <th>被水解官能团</th>
              <th>与过量 <code>dilute HCl(aq)</code> 回流产物</th>
              <th>与过量 <code>NaOH(aq)</code> 回流产物</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>酯 <code>R—COO—R'</code></td>
              <td><code>RCOOH</code> + <code>R'OH</code>（可逆 <code>⇌</code>）</td>
              <td><code>RCOO⁻Na⁺</code> + <code>R'OH</code>（不可逆 <code>⟶</code>）</td>
            </tr>
            <tr>
              <td>未取代酰胺 <code>R—CONH₂</code></td>
              <td><code>RCOOH</code> + <code>NH₄Cl</code>（不可逆 <code>⟶</code>，无气体）</td>
              <td><code>RCOO⁻Na⁺</code> + <code>NH₃(g)↑</code>（不可逆 <code>⟶</code>，红石蕊变蓝）</td>
            </tr>
            <tr>
              <td>双官能团实例：<br><code>H₂NCO—CH₂—COOCH₃</code></td>
              <td><code>HOOC—CH₂—COOH</code> + <code>CH₃OH</code> + <code>NH₄Cl</code></td>
              <td><code>⁻OOC—CH₂—COO⁻ (2Na⁺)</code> + <code>CH₃OH</code> + <code>NH₃(g)↑</code></td>
            </tr>
          </tbody>
        </table>

        <div class="callout callout-warn">
          <strong>⚠️ 课本规范警示（区分未取代酰胺 <code>RCONH₂</code> 与铵盐 <code>RCOO⁻NH₄⁺</code>）：</strong><br>
          虽然两者与 <code>NaOH(aq)</code> 作用都能放出氨气 <code>NH₃(g)</code>，但<strong>铵盐（如乙酸铵 <code>CH₃COO⁻NH₄⁺</code>）在室温或微热下与 <code>NaOH(aq)</code> 混合即刻迅速放出 <code>NH₃(g)</code></strong>（离子交换 <code>NH₄⁺ + OH⁻ ⟶ NH₃ + H₂O</code>），而共价的<strong>未取代酰胺（如乙酰胺 <code>CH₃CONH₂</code>）必须与 <code>NaOH(aq)</code> 持续加热煮沸 / 回流（boiling / heating under reflux）</strong>才能打断共价 <code>C—N</code> 键释放 <code>NH₃(g)</code>！
        </div>
      `,
      textbookFormulas: [
        {
          label: '乙酸乙酯的酸性水解（Acid hydrolysis of ethyl ethanoate — Reversible ⇌）',
          equationHtml: `CH<sub>3</sub>COOCH<sub>2</sub>CH<sub>3</sub>(l) + H<sub>2</sub>O(l) <span class="chem-arrow"><span class="cond-top">dilute H<sub>2</sub>SO<sub>4</sub>(aq) (or dilute HCl(aq))</span><span class="arr-main">⇌</span><span class="cond-bot">heat under reflux</span></span> CH<sub>3</sub>COOH(aq) + CH<sub>3</sub>CH<sub>2</sub>OH(aq)`,
          note: '稀酸仅作催化剂（catalyst），反应可逆（⇌），不能进行到底。'
        },
        {
          label: '乙酸乙酯的碱性水解 / 皂化反应（Alkaline hydrolysis / Saponification — Irreversible ⟶）',
          equationHtml: `CH<sub>3</sub>COOCH<sub>2</sub>CH<sub>3</sub>(l) + NaOH(aq) <span class="chem-arrow"><span class="cond-top">heat under reflux</span><span class="arr-main">⟶</span><span class="cond-bot"></span></span> CH<sub>3</sub>COO<sup>−</sup>Na<sup>+</sup>(aq) + CH<sub>3</sub>CH<sub>2</sub>OH(aq)`,
          note: 'NaOH 是反应物而非催化剂！生成乙酸钠（sodium ethanoate）与乙醇；若要获得游离乙酸，需随后加过量稀盐酸 HCl(aq) 酸化。'
        },
        {
          label: '乙酰胺的酸性水解（Acid hydrolysis of ethanamide）',
          equationHtml: `CH<sub>3</sub>CONH<sub>2</sub>(s) + H<sub>2</sub>O(l) + H<sup>+</sup>(aq) <span class="chem-arrow"><span class="cond-top">heat under reflux</span><span class="arr-main">⟶</span><span class="cond-bot"></span></span> CH<sub>3</sub>COOH(aq) + NH<sub>4</sub><sup>+</sup>(aq)`,
          note: '若题目指定稀盐酸 dilute HCl(aq)，化学方程式写 + HCl(aq) ⟶ CH₃COOH(aq) + NH₄Cl(aq)；绝不可写成 + NH₃！'
        },
        {
          label: '乙酰胺的碱性水解与氨气释放（Alkaline hydrolysis of ethanamide）',
          equationHtml: `CH<sub>3</sub>CONH<sub>2</sub>(s) + OH<sup>−</sup>(aq) <span class="chem-arrow"><span class="cond-top">heat under reflux</span><span class="arr-main">⟶</span><span class="cond-bot"></span></span> CH<sub>3</sub>COO<sup>−</sup>(aq) + NH<sub>3</sub>(g)`,
          note: '放出刺激性氨气 NH₃(g)，使湿润的红色石蕊试纸变蓝（turns moist red litmus paper blue）！绝不可把产物写成游离酸 CH₃COOH！'
        }
      ],
      examTrap: 'HKEAA 阅卷报告年年点名批评的头号重灾区：① 把酯碱性水解产物写成游离酸 RCOOH（应为羧酸盐 RCOO⁻Na⁺！）或把乙醇错写成乙醇钠 CH₃CH₂O⁻Na⁺（切记：醇羟基 R\'OH 极弱，根本不与 NaOH(aq) 反应，只有金属钠 Na(s) 才能把醇变成醇钠！）；② 把酰胺酸性水解产物写成 RCOOH + NH₃（应为 NH₄⁺！）；③ 把酰胺碱性水解产物写成 RCOOH + NH₃（应为 RCOO⁻ + NH₃！）。动笔前默念三遍：“酸中无氨气，碱中无游离酸，醇见 NaOH 不变盐！”',
      relations: [
        {
          type: 'leadsTo',
          targetUnitId: 'u33',
          label: '直接奠基 Unit 33：油脂皂化制造肥皂（soaps）及缩聚物（PET 聚酯 / 尼龙聚酰胺）耐酸碱性分析',
          why: '动植物油脂本质是高级脂肪酸甘油三酯（triesters），与 NaOH(aq) 回流碱性水解正是制肥皂的皂化反应（saponification）；而涤纶（polyester）和尼龙（nylon）遇强酸强碱损坏腐蚀，原理正是酯键与酰胺键的水解！'
        },
        {
          type: 'leadsTo',
          targetUnitId: 'u32',
          label: '通向 Unit 32：结合水解反应破解未知分子结构推断题（structural deduction）',
          why: 'DSE 长题常给未知物 X（如 C₅H₁₀O₂），告诉你碱性水解再酸化后得到产物 A 和 B，而 B 氧化后竟变成 A —— 利用本节水解逆推即可秒破碳链对称结构！'
        }
      ],
      questions: [
        {
          id: 'u31-s6-q1',
          level: 1,
          levelTag: 'Level 1 · 中文直觉破冰',
          type: 'mcq',
          stem: '将丙酸乙酯（ethyl propanoate, CH₃CH₂COOCH₂CH₃）与过量氢氧化钠水溶液（excess NaOH(aq)）回流加热（heat under reflux）直至反应完全。此时烧瓶溶液中存在的两种有机产物是什么？',
          cueWords: [],
          options: [
            'A. 丙酸（propanoic acid）与乙醇（ethanol）',
            'B. 丙酸钠（sodium propanoate, CH₃CH₂COO⁻Na⁺）与乙醇（ethanol, CH₃CH₂OH）',
            'C. 丙酸钠（sodium propanoate, CH₃CH₂COO⁻Na⁺）与乙醇钠（sodium ethoxide, CH₃CH₂O⁻Na⁺）',
            'D. 乙酸钠（sodium ethanoate, CH₃COO⁻Na⁺）与丙-1-醇（propan-1-ol, CH₃CH₂CH₂OH）'
          ],
          answerIndex: 1,
          hint: '先找准剪刀剪哪里：CH₃CH₂CO—OCH₂CH₃！左边是 3 个碳的羧酸部分，右边是 2 个碳的醇部分。再想：在过量 NaOH(aq) 中，羧酸变盐，那醇会不会跟 NaOH(aq) 变盐？',
          explanation: '丙酸乙酯（ethyl propanoate, CH₃CH₂COOCH₂CH₃）在过量 NaOH(aq) 中回流发生不可逆碱性水解（alkaline hydrolysis / saponification）：3 碳酰基部分生成丙酸钠（sodium propanoate, CH₃CH₂COO⁻Na⁺），2 碳烷氧基部分生成中性的乙醇（ethanol, CH₃CH₂OH）。注意醇羟基不会与 NaOH(aq) 发生中和反应，绝不会生成乙醇钠！',
          commonMistake: '两个经典错选：选 A（忘了碱性介质中羧酸变成羧酸钠盐）或选 C（误以为乙醇也会跟 NaOH(aq) 反应变成乙醇钠 CH₃CH₂O⁻Na⁺）！'
        },
        {
          id: 'u31-s6-q2',
          level: 2,
          levelTag: 'Level 2 · 中英过渡实战',
          type: 'mcq',
          stem: '有关丙酰胺（propanamide, CH₃CH₂CONH₂）分别在过量稀盐酸（excess dilute HCl(aq)）和过量氢氧化钠溶液（excess NaOH(aq)）中回流加热水解（hydrolysis under reflux）的说法，下列哪一项完全正确？',
          cueWords: [
            { phrase: 'propanamide, CH₃CH₂CONH₂', zh: '丙酰胺', concept: '未取代酰胺 RCONH₂ 的酸碱水解' },
            { phrase: 'excess dilute HCl(aq)', zh: '过量稀盐酸', concept: '酸性水解：生成游离酸 CH₃CH₂COOH + 氯化铵 NH₄Cl' },
            { phrase: 'excess NaOH(aq)', zh: '过量氢氧化钠溶液', concept: '碱性水解：生成羧酸盐 CH₃CH₂COO⁻Na⁺ + 氨气 NH₃(g)' }
          ],
          options: [
            'A. 与 dilute HCl(aq) 回流生成 CH₃CH₂COOH 和刺激性气体 NH₃(g)',
            'B. 与 NaOH(aq) 回流生成游离 CH₃CH₂COOH 和 NH₃(g)',
            'C. 与 dilute HCl(aq) 回流生成 CH₃CH₂COOH 和 NH₄Cl(aq)；与 NaOH(aq) 回流生成 CH₃CH₂COO⁻Na⁺(aq) 和能使湿润红色石蕊试纸变蓝的 NH₃(g)',
            'D. 酸性水解是可逆反应（reversible），而碱性水解是不可逆反应（irreversible）'
          ],
          answerIndex: 2,
          hint: '套用铁律“酸中无氨气（变 NH₄Cl），碱中无游离酸（变 RCOO⁻Na⁺）”！另外想一想：酰胺酸水解时因为 NH₃ 被 H⁺ 锁成 NH₄⁺，反应还是可逆的吗？',
          explanation: '丙酰胺（propanamide）与过量稀盐酸回流时，生成的氨立即被质子化为 NH₄⁺，产物为丙酸（CH₃CH₂COOH）与氯化铵（NH₄Cl(aq)），无气体放出且反应进行到底（不可逆！）；与过量 NaOH(aq) 回流时，羧酸被中和为丙酸钠（CH₃CH₂COO⁻Na⁺(aq)），同时放出刺激性氨气 NH₃(g)，使湿润红色石蕊试纸变蓝（turns moist red litmus paper blue）。',
          commonMistake: '误以为酰胺的酸性水解跟酯一样是可逆的而选 D，或在酸水解中写出游离 NH₃(g) 选 A。'
        },
        {
          id: 'u31-s6-q3',
          level: 3,
          levelTag: 'Level 3 · HKDSE 全英文实战',
          type: 'structured',
          stem: 'Explain why alkaline hydrolysis of methyl propanoate using aqueous sodium hydroxide gives a higher yield of alcohol than acid hydrolysis using dilute sulphuric acid. Outline how pure propanoic acid can subsequently be regenerated from the alkaline reaction mixture, and write chemical equations for both the alkaline hydrolysis and the acidification step.',
          cueWords: [
            { phrase: 'alkaline hydrolysis of methyl propanoate', zh: '丙酸甲酯的碱性水解', concept: '不可逆反应（⟶），生成 CH₃CH₂COO⁻Na⁺ + CH₃OH' },
            { phrase: 'higher yield', zh: '更高产率', concept: '对比酸水解可逆不完全 vs 碱水解生成羧酸根离子使反应进行到底' },
            { phrase: 'acidification step', zh: '酸化再生游离羧酸步骤', concept: '加入过量稀盐酸/稀硫酸将 CH₃CH₂COO⁻ 质子化变回 CH₃CH₂COOH' }
          ],
          hint: '三段得分链：① 对比 acid hydrolysis 是 reversible（不完全），而 alkaline hydrolysis 是 irreversible / goes to completion（因为酸立即变盐）；② 写碱性水解方程式（单向箭头 ⟶）；③ 加 excess dilute HCl(aq)/H₂SO₄(aq) 并写出质子化方程式！',
          explanation: '酯的酸性水解是可逆反应（reversible reaction），不能进行到底；而在碱性水解中，生成的丙酸立即与 OH⁻ 不可逆反应生成丙酸根离子（propanoate ion, CH₃CH₂COO⁻），推动水解进行到底（goes to completion），因此甲醇产率更高。回流后加入过量稀盐酸（excess dilute HCl(aq)）或稀硫酸酸化，即可将丙酸钠转回丙酸（propanoic acid），再经分液/蒸馏提纯。',
          markingScheme: [
            '1M: Acid hydrolysis of ester is reversible and incomplete, whereas alkaline hydrolysis is irreversible and goes to completion (because the acid formed reacts with OH− to form resonance-stabilized carboxylate ion).',
            '1M: Alkaline hydrolysis equation: CH3CH2COOCH3(l) + NaOH(aq) ⟶ CH3CH2COO−Na+(aq) + CH3OH(aq)',
            '1M: Add excess dilute HCl(aq) (or dilute H2SO4(aq)) to the reaction mixture after reflux (followed by fractional distillation); Acidification equation: CH3CH2COO−Na+(aq) + HCl(aq) ⟶ CH3CH2COOH(aq) + NaCl(aq) (or CH3CH2COO−(aq) + H+(aq) ⟶ CH3CH2COOH(aq)).'
          ],
          commonMistake: '写碱性水解方程式时误用了可逆号“⇌”，或者酸化时漏写“excess（过量）”（若酸不足量，只能先中和剩余的 NaOH 而无法把丙酸钠变回丙酸！）。'
        }
      ]
    }
  ],

  // ===========================================================================
  // 3 COMPREHENSIVE HKDSE-STYLE MULTI-PART LONG QUESTIONS FOR UNIT 31
  // ===========================================================================
  unitExamLongQuestions: [
    {
      id: 'u31-long-1',
      title: 'Long Question 1 · 脱水、马氏规则加成与卤代烷水解检验全链路（Dehydration, Markovnikov\'s Rule & Halide Test）',
      totalMarks: 8,
      scenarioEn: 'When vapour of propan-1-ol is passed over heated aluminium oxide, an unsymmetrical alkene X is formed. Alkene X reacts with hydrogen bromide at room temperature to yield two isomeric bromoalkanes, Y (major product) and Z (minor product). Subsequently, compound Y is heated under reflux with aqueous sodium hydroxide to form an alcohol W, and the resulting aqueous mixture is tested to confirm that bromide ions have been released.',
      scenarioZhSummary: '将丙-1-醇（propan-1-ol）蒸气通过加热的氧化铝（heated aluminium oxide, Al₂O₃）脱水得到不对称烯烃 X（丙烯 propene）。X 在室温下与溴化氢（hydrogen bromide, HBr）加成得到两种同分异构溴代烷：主产物 Y（2-溴丙烷 2-bromopropane）和副产物 Z（1-溴丙烷 1-bromopropane）。随后将 Y 与氢氧化钠溶液（NaOH(aq)）回流加热转化为醇 W（丙-2-醇 propan-2-ol），并对反应后水层进行溴离子（Br⁻）化学检验。',
      cueWords: [
        { phrase: 'passed over heated aluminium oxide', zh: '通过加热的氧化铝（Al₂O₃）', concept: '醇的催化脱水反应（dehydration），消去 H₂O 生成烯烃' },
        { phrase: 'unsymmetrical alkene X', zh: '不对称烯烃 X', concept: '丙-1-醇脱水生成丙烯 propene (CH₃CH=CH₂)' },
        { phrase: 'Y (major product) and Z (minor product)', zh: '主产物 Y 与副产物 Z', concept: '应用 Markovnikov\'s rule（氢多加氢）锁定 Y 为 2-bromopropane' },
        { phrase: 'heated under reflux with aqueous sodium hydroxide', zh: '与氢氧化钠溶液回流加热', concept: '卤代烷碱性水解（取代反应）把 -Br 换成 -OH，将伯醇成功移位为仲醇 W' },
        { phrase: 'confirm that bromide ions have been released', zh: '确认释放出溴离子', concept: '必须先加过量稀硝酸 dilute HNO₃(aq) 酸化，再加 AgNO₃(aq) 观察乳黄色沉淀' }
      ],
      subQuestions: [
        {
          part: '(a)',
          marks: 2,
          promptEn: 'Name alkene X and write a chemical equation for the conversion of propan-1-ol into X.',
          commandWord: { word: 'Name & Write', tip: '系统命名必须拼写精准（propene）；脱水方程式务必注明箭头上方的条件 Al₂O₃, heat，并写出副产物 H₂O！' },
          hint: '3 个碳的醇脱水后只有一种烯烃，名称是 propene；方程式右边别漏掉 + H₂O！',
          markingScheme: [
            '1M: propene',
            '1M: CH3CH2CH2OH ──(Al2O3, heat)──► CH3CH=CH2 + H2O'
          ],
          explanationZh: '丙-1-醇（propan-1-ol）通过加热的氧化铝（heated Al₂O₃）发生消去脱水生成丙烯（propene, CH₃CH=CH₂）与水（H₂O）。'
        },
        {
          part: '(b)',
          marks: 3,
          promptEn: 'Draw the structural formulae of Y and Z, and account for the formation of Y as the major product using Markovnikov\'s rule.',
          commandWord: { word: 'Account for', tip: 'Account for 等同于 Explain why：必须先完整背出 Markovnikov\'s rule 的定义，再结合丙烯 C1（2H）与 C2（1H）的具体氢原子数目对号入座！' },
          hint: 'Y 是 2-bromopropane（CH₃CHBrCH₃），Z 是 1-bromopropane（CH₃CH₂CH₂Br）。然后引用 Markovnikov\'s rule 指出 =CH₂ 碳带 2 个 H 而 -CH= 碳只带 1 个 H。',
          markingScheme: [
            '1M: Y: CH3CHBrCH3 ; Z: CH3CH2CH2Br (both correct structural formulae for 1 mark)',
            '1M: According to Markovnikov\'s rule, when HBr adds to an unsymmetrical alkene, the H atom attaches mainly to the carbon atom of the C=C double bond that already carries a greater number of H atoms.',
            '1M: In propene (CH3CH=CH2), C1 (=CH2) carries 2 H atoms while C2 (-CH=) carries only 1 H atom, so H attaches mainly to C1 and Br attaches to C2 to give CH3CHBrCH3 (Y) as the major product.'
          ],
          explanationZh: '只背出马氏规则通则得 1 分，结合丙烯双键碳 C1（2 个 H）与 C2（1 个 H）具体分析为什么 H 加在 C1、Br 加在 C2 再得 1 分，加上 Y 和 Z 结构式共 3 分。'
        },
        {
          part: '(c)',
          marks: 3,
          promptEn: 'Give the systematic name of alcohol W, and describe how you would carry out a chemical test on the resulting reaction mixture to confirm the presence of bromide ions, stating the expected observation.',
          commandWord: { word: 'Describe', tip: '描述离子检验步骤题：试剂先后顺序 + “过量（excess）”关键词 + 准确沉淀颜色（creamy precipitate）缺一不可！' },
          hint: '2-bromopropane 里的 -Br 换成 -OH 就变成 propan-2-ol（W）！检验 Br⁻ 千万记住先加 excess dilute HNO₃(aq)，再加 AgNO₃(aq)！',
          markingScheme: [
            '1M: W: propan-2-ol',
            '1M: First acidify the cooled reaction mixture with excess dilute nitric acid (HNO3(aq)), and then add aqueous silver nitrate (AgNO3(aq)).',
            '1M: Expected observation: A creamy (or pale yellow) precipitate (of AgBr) is formed.'
          ],
          explanationZh: '通过“propan-1-ol → propene → 2-bromopropane → propan-2-ol”，羟基成功从 1 号碳搬移到了 2 号碳！检验 Br⁻ 时必须先加过量稀硝酸（excess dilute HNO₃(aq)）除去剩余 OH⁻，再加硝酸银溶液（AgNO₃(aq)）产生乳黄色沉淀（creamy precipitate）。'
        }
      ]
    },
    {
      id: 'u31-long-2',
      title: 'Long Question 2 · 醇的可控氧化、酯化平衡与双官能团选择性还原（Controlled Oxidation, Esterification & Selective Reduction）',
      totalMarks: 9,
      scenarioEn: 'Two isomeric alcohols, P and Q, share the molecular formula C3H8O. When warmed with acidified potassium dichromate solution, both P and Q cause a colour change in the mixture. Using excess P in a distillation set-up yields a volatile compound R (C3H6O), whereas heating P under reflux with excess acidified potassium dichromate solution yields compound S (C3H6O2). Under reflux with the same oxidizing agent, Q yields only compound T (C3H6O).',
      scenarioZhSummary: 'P 和 Q 是分子式均为 C₃H₈O 的两种同分异构醇（propan-1-ol 与 propan-2-ol）。两者与酸化重铬酸钾溶液（acidified K₂Cr₂O₇(aq)）共热均发生变色。用过量 P 在蒸馏装置（distillation set-up）中反应得到易挥发化合物 R（丙醛 propanal, C₃H₆O），而将 P 与过量酸化重铬酸钾回流加热（heating under reflux）则得到化合物 S（丙酸 propanoic acid, C₃H₆O₂）；Q 在相同氧化剂下回流加热只生成化合物 T（丙酮 propanone, C₃H₆O）。',
      cueWords: [
        { phrase: 'molecular formula C3H8O', zh: '分子式 C₃H₈O 的醇', concept: '只有两种醇异构体：伯醇 propan-1-ol 与仲醇 propan-2-ol' },
        { phrase: 'excess P in a distillation set-up', zh: '过量 P 配合蒸馏装置', concept: '伯醇控制氧化停留在醛 R（propanal）' },
        { phrase: 'heating P under reflux with excess acidified potassium dichromate solution', zh: '过量酸化重铬酸钾配合回流加热', concept: '伯醇完全氧化生成羧酸 S（propanoic acid）' },
        { phrase: 'Q yields only compound T (C3H6O)', zh: 'Q 回流仅生成 T（C₃H₆O）', concept: '仲醇 propan-2-ol 氧化生成酮 propanone，且酮不能继续氧化' }
      ],
      subQuestions: [
        {
          part: '(a)',
          marks: 3,
          promptEn: 'State the observable colour change when P and Q react with acidified potassium dichromate solution, and deduce the systematic names of P, Q, R, S, and T.',
          commandWord: { word: 'State & Deduce', tip: '颜色变化必须写清起始色与终止色（from orange to green）；五个系统名称逐一核对后缀（-ol, -al, -oic acid, -one）避免拼写笔误！' },
          hint: 'C₃H₈O 只有 propan-1-ol 和 propan-2-ol 两种醇：能给出两个氧化产物（R 和 S）的是伯醇 P！只能给出一个氧化产物 T 的是仲醇 Q！',
          markingScheme: [
            '1M: Colour change: from orange to green.',
            '1M: P: propan-1-ol ; R: propanal ; S: propanoic acid',
            '1M: Q: propan-2-ol ; T: propanone'
          ],
          explanationZh: '橙色的 Cr₂O₇²⁻(aq) 被还原为绿色的 Cr³⁺(aq)。P 能分两步氧化成醛 R（propanal）与羧酸 S（propanoic acid），故 P 为伯醇 propan-1-ol；Q 只氧化成酮 T（propanone），故 Q 为仲醇 propan-2-ol。'
        },
        {
          part: '(b)',
          marks: 2,
          promptEn: 'Explain why cooling water must enter the condenser from the lower inlet during heating under reflux, and why the top of the reflux condenser must NOT be stoppered.',
          commandWord: { word: 'Explain', tip: '仪器操作原因题（Experimental rationale）：紧扣“充满冷凝水套提高冷凝效率”与“密闭加热气压升高导致爆炸”两个核心物理原因！' },
          hint: '水从下口进才能填满整个冷凝管夹套（water jacket full of water）；顶部若加塞子就变成密闭容器（closed system），受热膨胀会炸裂！',
          markingScheme: [
            '1M: Water entering from the lower inlet ensures the condenser jacket is completely filled with cold water for efficient/maximum cooling and condensation of vapours.',
            '1M: Stoppering the top creates a closed system; heating causes pressure build-up inside the apparatus which may blow off the stopper or cause an explosion.'
          ],
          explanationZh: '这是 Unit 31 与 Unit 32 衔接的实验必考题：下口进水保证冷凝套充满冷水（efficient cooling），顶部敞口防止密闭受热增压爆炸（prevent pressure build-up / explosion）。'
        },
        {
          part: '(c)',
          marks: 2,
          promptEn: 'Write a chemical equation for the reaction when compound S is heated under reflux with propan-2-ol (Q) in the presence of concentrated sulphuric acid, and give the systematic name of the organic product.',
          commandWord: { word: 'Write & Give', tip: '支链醇（propan-2-ol）形成的酯基叫做 1-methylethyl（或接受 isopropyl 习惯名，但 HKDSE 最推荐系统名 1-methylethyl propanoate 或 propan-2-yl / 1-methylethyl）——按《Mastering Chemistry》标准写 1-methylethyl propanoate，且方程式务必用可逆号 ⇌！' },
          hint: 'S 是 CH₃CH₂COOH，Q 是 CH₃CH(OH)CH₃，脱去 H₂O 后结构为 CH₃CH₂COOCH(CH₃)₂，千万别忘写 ⇌ 和 + H₂O！',
          markingScheme: [
            '1M: CH3CH2COOH(l) + CH3CH(OH)CH3(l) ⇌ CH3CH2COOCH(CH3)2(l) + H2O(l) (must show ⇌)',
            '1M: 1-methylethyl propanoate (also accept isopropyl propanoate)'
          ],
          explanationZh: '丙酸（propanoic acid）与丙-2-醇（propan-2-ol）发生可逆酯化反应（⇌），醇提供的 -CH(CH₃)₂ 支链烷基按《Mastering Chemistry》IUPAC 规则命名为 1-methylethyl，故酯名为 1-methylethyl propanoate。'
        },
        {
          part: '(d)',
          marks: 2,
          promptEn: 'Consider a keto-acid K with the structural formula CH3COCH2CH2COOH. Draw the structural formula of the organic product formed when K reacts completely with (i) NaBH4(aq), and (ii) 1. LiAlH4, dry ether followed by 2. H+(aq).',
          commandWord: { word: 'Draw', tip: '看准两端的官能团：左端是酮羰基 CH₃CO-，右端是羧基 -COOH。用选择性还原铁律分别写出结构简式！' },
          hint: '(i) NaBH₄(aq) 只还原左边的 CH₃CO- 变成 CH₃CH(OH)-，右边的 -COOH 不动；(ii) LiAlH₄ 把两头都还原成醇（右边 -COOH 变成 -CH₂OH）！',
          markingScheme: [
            '1M: (i) CH3CH(OH)CH2CH2COOH',
            '1M: (ii) CH3CH(OH)CH2CH2CH2OH'
          ],
          explanationZh: 'NaBH₄(aq) 选择性还原酮羰基生成仲醇羟基而保留羧基不变；LiAlH₄（无水乙醚，后加稀酸）同时将酮基还原为 -CH(OH)-、将羧基还原为伯醇 -CH₂OH，生成戊-1,4-二醇（pentane-1,4-diol）。'
        }
      ]
    },
    {
      id: 'u31-long-3',
      title: 'Long Question 3 · 酯—酰胺双官能团分子的酸碱水解与未知液体鉴别（Bifunctional Hydrolysis & Chemical Tests）',
      totalMarks: 9,
      scenarioEn: 'Compound M has the structural formula H2NCOCH2CH2COOCH2CH3 and contains two different functional groups. In Experiment I, a sample of M is heated under reflux with excess dilute hydrochloric acid. In Experiment II, another sample of M is heated under reflux with excess aqueous sodium hydroxide, liberating a pungent gas G. Separately, three unlabelled bottles contain anhydrous liquids ethanoic acid, ethanol, and ethyl ethanoate respectively.',
      scenarioZhSummary: '化合物 M（H₂NCOCH₂CH₂COOCH₂CH₃）同时含有未取代酰胺基（unsubstituted amide group, -CONH₂）和酯基（ester group, -COOCH₂CH₃）。实验 I 将 M 与过量稀盐酸（excess dilute HCl(aq)）回流加热；实验 II 将 M 与过量氢氧化钠溶液（excess NaOH(aq)）回流加热，放出刺激性气体 G（氨气 NH₃）。另外，有三个未贴标签的试剂瓶分别装有无水乙酸（ethanoic acid）、乙醇（ethanol）和乙酸乙酯（ethyl ethanoate）。',
      cueWords: [
        { phrase: 'H2NCOCH2CH2COOCH2CH3', zh: '含酰胺键与乙酯键的双官能团分子', concept: '左端 C—N 键与右端 C—O 酯键在酸/碱回流下同时断裂' },
        { phrase: 'excess dilute hydrochloric acid', zh: '过量稀盐酸（实验 I）', concept: '酸性水解：羧基保持游离 -COOH，乙醇保持 CH₃CH₂OH，氨质子化为 NH₄Cl' },
        { phrase: 'excess aqueous sodium hydroxide, liberating a pungent gas G', zh: '过量氢氧化钠回流放出刺激性气体 G（实验 II）', concept: '碱性水解：两个羧基均变 -COO⁻Na⁺，乙醇不变，放出氨气 NH₃(g)' },
        { phrase: 'anhydrous liquids ethanoic acid, ethanol, and ethyl ethanoate', zh: '无水乙酸、乙醇与乙酸乙酯三瓶未知液', concept: '分步化学鉴别：先用 NaHCO₃(aq) 检出羧酸，再用 PCl₅(s) 或酸化重铬酸钾检出醇' }
      ],
      subQuestions: [
        {
          part: '(a)',
          marks: 3,
          promptEn: 'Name the TWO functional groups present in compound M, and write the structural formulae of ALL organic products and the chemical formula of the nitrogen-containing inorganic product formed in Experiment I.',
          commandWord: { word: 'Name & Write', tip: '注意 -CONH₂ 必须准确写 unsubstituted amide group（或 amide group），-COO- 写 ester group；酸性水解别漏掉乙醇 CH₃CH₂OH 和氯化铵 NH₄Cl！' },
          hint: '把 H₂N—COCH₂CH₂CO—OCH₂CH₃ 左右两刀剪开：在稀盐酸里，中间变成丁二酸 HOOCCH₂CH₂COOH，右边变成 CH₃CH₂OH，左边的 -NH₂ 变成 NH₄Cl！',
          markingScheme: [
            '1M: (Unsubstituted) amide group and ester group.',
            '1M: Organic products: HOOCCH2CH2COOH and CH3CH2OH',
            '1M: Nitrogen-containing inorganic product: NH4Cl (accept NH4+)'
          ],
          explanationZh: 'M 含酰胺基（amide group）和酯基（ester group）。在过量稀盐酸中，两端同时水解生成丁二酸（butanedioic acid, HOOCCH₂CH₂COOH）、乙醇（CH₃CH₂OH），而碱性氨与 HCl 结合成氯化铵（NH₄Cl）。'
        },
        {
          part: '(b)',
          marks: 3,
          promptEn: 'Write an ionic equation for the complete alkaline hydrolysis of M in Experiment II, identify gas G, and state a chemical test (with expected observation) for gas G.',
          commandWord: { word: 'Write & State', tip: '写离子方程式时注意 M 两端（酰胺基与酯基）水解各消耗 1 mol OH⁻ 且不额外残留 H₂O，故 1 mol M 恰好与 2 mol OH⁻ 反应生成二元羧酸根离子 ⁻OOCCH₂CH₂COO⁻！检验氨气务必写清 moist red litmus paper！' },
          hint: '左右两端各消耗 1 个 OH⁻：左边 H₂NCO- + OH⁻ 变成 ⁻OOC- + NH₃(g)，右边 -COOCH₂CH₃ + OH⁻ 变成 -COO⁻ + CH₃CH₂OH！核对两边 O 原子（共 5 个 O）和电荷（2-）完全守恒！',
          markingScheme: [
            '1M: Ionic equation: H2NCOCH2CH2COOCH2CH3 + 2OH−(aq) ⟶ −OOCCH2CH2COO−(aq) + CH3CH2OH(aq) + NH3(g)',
            '1M: Gas G is ammonia (NH3).',
            '1M: Test for G: Test the gas with a piece of moist red litmus paper; it turns from red to blue.'
          ],
          explanationZh: '配平神细节：酰胺碱性水解（RCONH₂ + OH⁻ ⟶ RCOO⁻ + NH₃）和酯碱性水解（R\'COOR\'\' + OH⁻ ⟶ R\'COO⁻ + R\'\'OH）各消耗 1 个 OH⁻ 且不额外消耗 H₂O！相加得总离子方程式消耗 2OH⁻ 生成二元羧酸根离子 ⁻OOCCH₂CH₂COO⁻、CH₃CH₂OH 与 NH₃(g)（两边 C₆H₁₃NO₅²⁻ 原子电荷百分百守恒！）。检验 NH₃ 必须写“湿润的（moist）”红色石蕊试纸变蓝！'
        },
        {
          part: '(c)',
          marks: 3,
          promptEn: 'Describe chemical tests to distinguish among the three unlabelled anhydrous liquids: ethanoic acid, ethanol, and ethyl ethanoate. State all reagents, conditions, and expected observable changes.',
          commandWord: { word: 'Describe', tip: '三瓶未知物鉴别标准拿分模板：Step 1 加试剂 A 检出第一个（说明它有什么现象、其余两个无明显变化）；Step 2 对剩余两瓶加试剂 B 区分第二个和第三个！' },
          hint: '第一步加 NaHCO₃(aq) 挑出冒泡的 ethanoic acid；第二步对剩下的 ethanol 和 ethyl ethanoate 温热酸化重铬酸钾（或室温加固体 PCl₅），挑出变色/冒白雾的 ethanol！',
          markingScheme: [
            '1M: Add aqueous sodium hydrogencarbonate (NaHCO3(aq)) (or Na2CO3(aq)) to samples of the three liquids separately: only ethanoic acid gives colourless gas bubbles / effervescence, while ethanol and ethyl ethanoate show no observable change.',
            '1M: Warm samples of the remaining two liquids separately with acidified potassium dichromate solution (or add solid PCl5 at room temperature to the dry liquids).',
            '1M: Ethanol turns the acidified potassium dichromate solution from orange to green (or gives steamy fumes with solid PCl5), whereas ethyl ethanoate shows no observable change.'
          ],
          explanationZh: '鉴别三瓶未知有机物的黄金逻辑：① 用 NaHCO₃(aq) 锁定唯一冒泡的羧酸（ethanoic acid）；② 对剩余的醇（ethanol）和酯（ethyl ethanoate），既可以温热酸化重铬酸钾溶液（醇由橙变绿，酯无变化），也可以利用题干“anhydrous liquids（无水液体）”条件在室温加固体 PCl₅（醇冒白雾 steamy fumes，酯无变化），两套方案在 HKDSE 评分标准中均获满分！'
        }
      ]
    }
  ]
});
