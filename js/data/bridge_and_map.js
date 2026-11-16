/**
 * Mastering Chemistry: Topic 7 -> Topic 8 Bridge Module,
 * Global Functional Group Interactive Reaction Map,
 * Multi-Step Synthesis Pathfinder Challenges, and
 * HKDSE English Long-Question Cue-Word Master Decoder.
 */
window.CHEM_UNITS = window.CHEM_UNITS || [];

window.CHEM_UNITS.push({
  id: 'bridge',
  unitNum: '衔接特辑',
  book: 'Topic 7 ➔ Topic 8 知识跃迁桥',
  topicId: 'bridge',
  titleEn: 'Bridging Topic 7 to Topic 8: How Carbon Compounds Evolve',
  titleZh: '从 Topic 7 到 Topic 8：一张地图看懂有机家族如何“开枝散叶”',
  colorTheme: 'indigo',
  summary: '专为刚学完 Topic 7（化石燃料、烷烃 alkane、烯烃 alkene、加成聚合物 addition polymer）准备进军 Topic 8 的同学设计：揭秘卤代烷（haloalkane）如何充当“中转站”，把简单的碳氢化合物（hydrocarbons）一步步变成醇（alcohol）、醛（aldehyde）、酮（ketone）、羧酸（carboxylic acid）、酯（ester）与酰胺（amide）！',
  keyTerms: [
    { en: 'functional group interconversion', zh: '官能团相互转化', cat: 'Synthesis' },
    { en: 'hydrocarbon', zh: '碳氢化合物（烃）', cat: 'Compound Class' },
    { en: 'haloalkane', zh: '卤代烷', cat: 'Compound Class' },
    { en: 'alcohol (alkanol)', zh: '醇（烷醇）', cat: 'Compound Class' },
    { en: 'aldehyde (alkanal)', zh: '醛（烷醛）', cat: 'Compound Class' },
    { en: 'ketone (alkanone)', zh: '酮（烷酮）', cat: 'Compound Class' },
    { en: 'carboxylic acid (alkanoic acid)', zh: '羧酸（烷酸）', cat: 'Compound Class' },
    { en: 'ester', zh: '酯', cat: 'Compound Class' },
    { en: 'unsubstituted amide', zh: '未取代酰胺', cat: 'Compound Class' },
    { en: 'primary amine', zh: '伯胺（一级胺）', cat: 'Compound Class' },
    { en: 'oxidation', zh: '氧化反应（加 O 或去 H）', cat: 'Reaction Type' },
    { en: 'reduction', zh: '还原反应（加 H 或去 O）', cat: 'Reaction Type' }
  ],
  sections: [
    {
      id: 'bridge-s1',
      code: 'Bridge 1',
      titleEn: 'From Inert Hydrocarbons to the "Universal Hub": Haloalkanes & Alcohols',
      titleZh: '第一步破局：从“高冷”的烃（Hydrocarbons）打开缺口，进入卤代烷与醇中转站',
      analogy: {
        icon: '🚇',
        title: '地铁换乘比喻：烷烃是封闭小镇，烯烃和卤代烷是超级换乘枢纽！',
        body: '在 Topic 7 里，我们认识了只含碳和氢的烷烃（alkane）与烯烃（alkene）。烷烃（alkane）就像没有门的封闭车厢，只有靠紫外光（UV light）和氯气/溴（Cl₂ / Br₂）强行发生自由基取代反应（free radical substitution）才能装上一扇门——变成卤代烷（haloalkane）。而通过石油裂化（cracking）得到的烯烃（alkene）自带活泼的碳碳双键（C=C double bond），与卤化氢（HX）加成也能轻松变成卤代烷（haloalkane）。一旦拿到了卤代烷（haloalkane），用氢氧化钠溶液（NaOH(aq)）回流加热把卤素原子（-X）换成羟基（hydroxyl group, -OH），你就抵达了整个 Topic 8 最核心的“中央车站”——醇（alcohol）！'
      },
      coreExplanation: `
        <h4>为什么初入 Topic 8 会觉得“反应突然变多”？</h4>
        <p>在 Topic 7（Book 3A）中，主角只有两类<span class="term">碳氢化合物 / 烃 <span class="en">hydrocarbons</span></span>：<span class="term">烷烃 <span class="en">alkanes</span></span>和<span class="term">烯烃 <span class="en">alkenes</span></span>。进入 Topic 8（Book 3B）后，课本一口气引入了含卤素、含氧、含氮的八大类<span class="term">同系物 <span class="en">homologous series</span></span>。其实它们并不是孤立的碎片，而是沿着<strong>三条清晰的主干道</strong>生长出来的：</p>
        <ul class="chem-list">
          <li><strong>主干道 ①（破冰引入杂原子）：</strong><span class="term">烷烃 <span class="en">alkane</span></span>（经 <span class="term">自由基取代反应 <span class="en">free radical substitution</span></span>）或 <span class="term">烯烃 <span class="en">alkene</span></span>（经 <span class="term">加成反应 <span class="en">addition reaction</span></span>）➔ 生成 <span class="term">卤代烷 <span class="en">haloalkane (R—X)</span></span>。</li>
          <li><strong>主干道 ②（抵达中央枢纽）：</strong><span class="term">卤代烷 <span class="en">haloalkane</span></span> 与 <span class="term">氢氧化钠溶液 <span class="en">NaOH(aq)</span></span> 在 <span class="term">回流加热 <span class="en">heating under reflux</span></span> 下发生取代反应 ➔ 生成 <span class="term">醇 <span class="en">alcohol (R—OH)</span></span>；反过来，<span class="term">醇 <span class="en">alcohol</span></span> 脱水（<span class="term">脱水反应 <span class="en">dehydration</span></span>）又能退回 <span class="term">烯烃 <span class="en">alkene</span></span>！</li>
          <li><strong>主干道 ③（含氧阶梯与衍生物）：</strong>从 <span class="term">醇 <span class="en">alcohol</span></span> 出发向上氧化（<span class="term">氧化反应 <span class="en">oxidation</span></span>），依次解锁 <span class="term">醛 <span class="en">aldehyde</span></span> / <span class="term">酮 <span class="en">ketone</span></span> ➔ <span class="term">羧酸 <span class="en">carboxylic acid</span></span>；再由羧酸衍生出 <span class="term">酯 <span class="en">ester</span></span>（包括油脂与聚酯）和 <span class="term">未取代酰胺 <span class="en">unsubstituted amide</span></span>（以及尼龙聚酰胺）！</li>
        </ul>
        <div class="callout callout-tip">
          <strong>💡 学习秘诀：先认准“官能团长相”（Functional Group Spotter）！</strong>
          做任何 Topic 8 题目时，第一步永远是用眼睛圈出分子里的<span class="term">官能团 <span class="en">functional group</span></span>——因为碳链尾巴（烃基 <span class="term">alkyl group <span class="en">-R</span></span>）通常只是“旁观者”，真正发生化学变化的几乎都在官能团那个小角落！
        </div>
      `,
      textbookFormulas: [
        {
          label: '从 Topic 7 烃通往 Topic 8 醇的黄金三连跳',
          equationHtml: `CH<sub>2</sub>=CH<sub>2</sub> <span class="chem-arrow"><span class="cond-top">HBr</span><span class="arr-main">⟶</span><span class="cond-bot"></span></span> CH<sub>3</sub>CH<sub>2</sub>Br <span class="chem-arrow"><span class="cond-top">NaOH(aq)</span><span class="arr-main">⟶</span><span class="cond-bot">heat under reflux</span></span> CH<sub>3</sub>CH<sub>2</sub>OH`,
          note: 'Ethene 乙烯 (Topic 7) ➔ Bromoethane 溴乙烷 (Haloalkane) ➔ Ethanol 乙醇 (Alcohol, Topic 8 核心枢纽)'
        }
      ],
      examTrap: '切记：烯烃（alkene）不能在实验室一步直接加 NaOH(aq) 变成醇！必须先加 HX 变成卤代烷（haloalkane），再用 NaOH(aq) 回流加热变成醇（alcohol）。',
      relations: [
        {
          type: 'buildsOn',
          targetUnitId: 'u27',
          label: '承接 Topic 7 Unit 27：烷烃取代（Substitution）与烯烃加成（Addition）',
          why: 'Topic 7 学的这两个反应，正是制造卤代烷（haloalkanes）进入 Topic 8 世界的入口。'
        },
        {
          type: 'leadsTo',
          targetUnitId: 'u31',
          label: '直通 Topic 8 Unit 31 & 32：各官能团典型反应与多步有机合成',
          why: '看懂“烃 ➔ 卤代烷 ➔ 醇”这条主轴后，Unit 32 的两步/三步合成题就解决了一半！'
        }
      ],
      questions: [
        {
          id: 'bridge-s1-q1',
          level: 1,
          levelTag: 'Level 1 · 中文直觉破冰',
          type: 'mcq',
          stem: '在实验室里，想把只含碳和氢的乙烯（ethene, CH₂=CH₂）转化为乙醇（ethanol, CH₃CH₂OH），最合理的“中转站”物质属于哪一类同系物（homologous series）？',
          cueWords: [],
          options: [
            'A. 烷烃（Alkane，例如乙烷 ethane）',
            'B. 卤代烷（Haloalkane，例如溴乙烷 bromoethane）',
            'C. 羧酸（Carboxylic acid，例如乙酸 ethanoic acid）',
            'D. 加成聚合物（Addition polymer，例如聚乙烯 polyethene）'
          ],
          answerIndex: 1,
          hint: '想一想：乙烯（ethene）的 C=C 双键可以先和 HBr 发生加成反应变成什么？然后再把 -Br 换成 -OH！',
          explanation: '乙烯（ethene）先与溴化氢（HBr）发生加成反应（addition reaction）生成溴乙烷（bromoethane，属于卤代烷 haloalkane），再与氢氧化钠溶液 NaOH(aq) 回流加热（heat under reflux）发生取代反应即可得到乙醇（ethanol）。',
          markingScheme: ['1M: Haloalkane / bromoethane acts as the synthetic intermediate between ethene and ethanol.'],
          commonMistake: '误以为把乙烯泡进水里就能在室温下直接变成乙醇（工业水合需要 300°C、65 atm 和磷酸催化剂，学校实验室合成路线一律走“烯烃 ➔ 卤代烷 ➔ 醇”）。'
        },
        {
          id: 'bridge-s1-q2',
          level: 2,
          levelTag: 'Level 2 · 中英过渡辨析',
          type: 'mcq',
          stem: '对比由乙烷（ethane）制取氯乙烷（chloroethane）与由乙烯（ethene）制取氯乙烷（chloroethane）的两条路线，为什么有机合成（organic synthesis）更偏爱用乙烯（ethene）与氯化氢（HCl）加成？',
          cueWords: [
            { phrase: 'chloroethane', zh: '氯乙烷', concept: '目标卤代烷（Haloalkane, CH₃CH₂Cl）' },
            { phrase: 'organic synthesis', zh: '有机合成', concept: '评估产率（yield）与副产物纯度（Unit 32）' }
          ],
          options: [
            'A. 因为乙烷（ethane）完全不能与氯气（Cl₂）发生任何反应',
            'B. 因为乙烷与氯气在紫外光（UV light）下的自由基取代反应会生成多氯代混合物，导致目标产物产率（yield）很低',
            'C. 因为乙烯与氯化氢（HCl）反应需要使用昂贵的铂（Pt）作催化剂',
            'D. 因为乙烯发生的是缩合反应（condensation reaction）'
          ],
          answerIndex: 1,
          hint: '回忆 Unit 27：甲烷或乙烷在 UV light 下和 Cl₂ 反应，停得在“一氯代”吗？会不会继续生成二氯、三氯代物？',
          explanation: '烷烃（alkane）的自由基取代反应（free radical substitution）难以停在一取代阶段，会产生二氯乙烷、三氯乙烷等多种副产物混合物（mixture of polychloroethanes），分离困难且产率低；而对称烯烃乙烯（ethene）与 HCl 加成只生成单一产物氯乙烷（chloroethane）！',
          markingScheme: ['1M: Free radical substitution of ethane with Cl2 under UV light produces a mixture of multi-substituted chloroethanes, giving a low yield of chloroethane.'],
          commonMistake: '把反应条件写成 hν（精工版课本必须写 UV light 或 sunlight）。'
        },
        {
          id: 'bridge-s1-q3',
          level: 3,
          levelTag: 'Level 3 · HKDSE 英文实战',
          type: 'structured',
          stem: 'Propene is an unsaturated hydrocarbon obtained from the cracking of heavy petroleum fractions. Outline a two-step synthetic route to convert propene into propan-2-ol, stating clearly the reagents, conditions, and the structural formula of the intermediate compound.',
          cueWords: [
            { phrase: 'unsaturated hydrocarbon', zh: '不饱和碳氢化合物', concept: '含 C=C 碳碳双键（Alkene, Unit 27）' },
            { phrase: 'cracking of heavy petroleum fractions', zh: '重质石油馏分的裂化', concept: 'Topic 7 烯烃工业来源（Unit 27.3）' },
            { phrase: 'two-step synthetic route', zh: '两步合成路线', concept: '需写出 1 个中间体结构式 + 两步箭头上的试剂和条件（Unit 32）' },
            { phrase: 'convert propene into propan-2-ol', zh: '把丙烯转化为 2-丙醇', concept: '不对称烯烃 + HBr（马氏规则主产物 2-bromopropane）➔ NaOH(aq) 回流得仲醇（Unit 31）' }
          ],
          hint: 'Step 1：CH₃CH=CH₂ 加 HBr，根据“氢多加氢”（Markovnikov\'s rule），Br 会连在中间第 2 号碳上生成 2-bromopropane！Step 2：用什么试剂和条件把 -Br 变成 -OH？',
          explanation: '第一步利用丙烯（propene）与 HBr 的加成反应生成主产物 2-溴丙烷（2-bromopropane）；第二步用氢氧化钠水溶液 NaOH(aq) 回流加热（heat under reflux）发生取代反应生成 2-丙醇（propan-2-ol）。',
          markingScheme: [
            '1M: Step 1 reagent: HBr(g) (or HCl), giving intermediate CH3CHBrCH3 (2-bromopropane)',
            '1M: Step 2 reagent & condition: NaOH(aq), heat under reflux'
          ],
          commonMistake: '漏写第二步的反应条件 "heat under reflux"（卤代烷与 NaOH(aq) 在室温下反应极慢，不写回流加热必扣分！）。'
        }
      ]
    },
    {
      id: 'bridge-s2',
      code: 'Bridge 2',
      titleEn: 'The Eight Functional Groups of Topic 8 at a Glance',
      titleZh: '第二步全景认亲：一张表认清 Topic 8 八大官能团家族（中英双语对照）',
      analogy: {
        icon: '🪪',
        title: '化学身份证：碳链是“姓氏”，官能团是“名字与性格”！',
        body: '如果看到分子里有 3 个碳（prop-），它姓“丙”；至于是温和可燃的丙烷（propane）、活泼能加成的丙烯（propene）、能当消毒水的丙醇（propanol）、洗甲水里的丙酮（propanone），还是酸溜溜的丙酸（propanoic acid），全看它挂了哪张“官能团身份证”（functional group）！在英文考试中，只要看懂名称词尾（suffix：-ane, -ene, -ol, -al, -one, -oic acid, -oate, -amide, -amine），你就能一秒画出它的核心骨架。'
      },
      coreExplanation: `
        <h4>Topic 7 &amp; Topic 8 全家福对照总表（考试命名与结构速查）</h4>
        <table class="chem-table">
          <thead>
            <tr>
              <th>同系物（Homologous Series）</th>
              <th>官能团（Functional Group）</th>
              <th>英文词尾 / 前缀</th>
              <th>代表例子（Example）</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><span class="term">烷烃 <span class="en">Alkane</span></span></td>
              <td>全为单键（无特征官能团）</td>
              <td><code>-ane</code></td>
              <td>propane 丙烷 (<code>CH₃CH₂CH₃</code>)</td>
            </tr>
            <tr>
              <td><span class="term">烯烃 <span class="en">Alkene</span></span></td>
              <td><span class="term">碳碳双键 <span class="en">carbon-carbon double bond</span></span> (<code>C=C</code>)</td>
              <td><code>-ene</code></td>
              <td>propene 丙烯 (<code>CH₃CH=CH₂</code>)</td>
            </tr>
            <tr>
              <td><span class="term">卤代烷 <span class="en">Haloalkane</span></span></td>
              <td><span class="term">卤素原子 <span class="en">halo group</span></span> (<code>—F, —Cl, —Br, —I</code>)</td>
              <td>前缀 <code>chloro-, bromo-...</code></td>
              <td>chloroethane 氯乙烷 (<code>CH₃CH₂Cl</code>)</td>
            </tr>
            <tr>
              <td><span class="term">醇 / 烷醇 <span class="en">Alcohol / Alkanol</span></span></td>
              <td><span class="term">羟基 <span class="en">hydroxyl group</span></span> (<code>—OH</code>)</td>
              <td><code>-ol</code></td>
              <td>ethanol 乙醇 (<code>CH₃CH₂OH</code>)</td>
            </tr>
            <tr>
              <td><span class="term">醛 / 烷醛 <span class="en">Aldehyde / Alkanal</span></span></td>
              <td><span class="term">羰基在链端 <span class="en">carbonyl group (terminal)</span></span> (<code>—CHO</code>)</td>
              <td><code>-al</code></td>
              <td>ethanal 乙醛 (<code>CH₃CHO</code>)</td>
            </tr>
            <tr>
              <td><span class="term">酮 / 烷酮 <span class="en">Ketone / Alkanone</span></span></td>
              <td><span class="term">羰基在链中 <span class="en">carbonyl group (internal)</span></span> (<code>—CO—</code>)</td>
              <td><code>-one</code></td>
              <td>propanone 丙酮 (<code>CH₃COCH₃</code>)</td>
            </tr>
            <tr>
              <td><span class="term">羧酸 / 烷酸 <span class="en">Carboxylic acid</span></span></td>
              <td><span class="term">羧基 <span class="en">carboxyl group</span></span> (<code>—COOH</code>)</td>
              <td><code>-oic acid</code></td>
              <td>ethanoic acid 乙酸 (<code>CH₃COOH</code>)</td>
            </tr>
            <tr>
              <td><span class="term">酯 <span class="en">Ester</span></span></td>
              <td><span class="term">酯基 <span class="en">ester group</span></span> (<code>—COO—</code>)</td>
              <td><code>alkyl ...-oate</code></td>
              <td>ethyl ethanoate 乙酸乙酯 (<code>CH₃COOCH₂CH₃</code>)</td>
            </tr>
            <tr>
              <td><span class="term">未取代酰胺 <span class="en">Unsubstituted amide</span></span></td>
              <td><span class="term">酰胺基 <span class="en">amide group</span></span> (<code>—CONH₂</code>)</td>
              <td><code>-amide</code></td>
              <td>ethanamide 乙酰胺 (<code>CH₃CONH₂</code>)</td>
            </tr>
            <tr>
              <td><span class="term">伯胺 <span class="en">Primary amine</span></span></td>
              <td><span class="term">氨基 <span class="en">amino group</span></span> (<code>—NH₂</code>)</td>
              <td><code>-amine</code> 或前缀 <code>amino-</code></td>
              <td>ethanamine 乙胺 (<code>CH₃CH₂NH₂</code>)</td>
            </tr>
          </tbody>
        </table>
        <div class="callout callout-warn">
          <strong>⚠️ 极易混淆拼写警告（Spelling Alert in English Exams）：</strong>
          <br>• <strong>Aldehyde（醛，词尾 <code>-al</code>）</strong> vs <strong>Alcohol（醇，词尾 <code>-ol</code>）</strong>：千万看清倒数第二个字母是 <code>a</code> 还是 <code>o</code>！<code>propanal</code> 是丙醛（<code>CH₃CH₂CHO</code>），<code>propanol</code> 是丙醇（<code>CH₃CH₂CH₂OH</code>）！
          <br>• <strong>Amide（酰胺，含 <code>C=O</code>，即 <code>—CONH₂</code>）</strong> vs <strong>Amine（胺，不含 <code>C=O</code>，即 <code>—NH₂</code>）</strong>：差一个字母 <code>d</code> / <code>n</code>，化学性质天差地别！
        </div>
      `,
      textbookFormulas: [
        {
          label: '氧化阶梯（Oxidation Ladder of Primary Alcohol 伯醇氧化三部曲）',
          equationHtml: `RCH<sub>2</sub>OH <span class="chem-arrow"><span class="cond-top">Cr<sub>2</sub>O<sub>7</sub><sup>2−</sup>/H<sup>+</sup></span><span class="arr-main">⟶</span><span class="cond-bot">distillation</span></span> RCHO <span class="chem-arrow"><span class="cond-top">Cr<sub>2</sub>O<sub>7</sub><sup>2−</sup>/H<sup>+</sup></span><span class="arr-main">⟶</span><span class="cond-bot">heat under reflux</span></span> RCOOH`,
          note: 'Primary alcohol 伯醇 (-ol) ➔ Aldehyde 醛 (-al) ➔ Carboxylic acid 羧酸 (-oic acid)；反过来用还原剂 LiAlH₄ 或 NaBH₄ 则能沿阶梯退回醇！'
        }
      ],
      examTrap: '写醛（aldehyde）的简明结构式时，必须写成 RCHO（例如 CH₃CHO），绝不能写成 CH₃COH（写成 COH 会被判为把羟基连错位置而扣分）！',
      relations: [
        {
          type: 'leadsTo',
          targetUnitId: 'u29',
          label: '进入 Book 3B Unit 29：碳化合物的完整 IUPAC 命名与沸点/水溶性规律',
          why: '带着这张十大家族身份证进入 Unit 29，所有命名和分子间氢键对比都会一目了然！'
        }
      ],
      questions: [
        {
          id: 'bridge-s2-q1',
          level: 1,
          levelTag: 'Level 1 · 中文直觉破冰',
          type: 'mcq',
          stem: '在英文考卷上看到化合物名称 "butanone" 和 "butanal"，它们分别属于哪两类碳化合物（carbon compounds）？',
          cueWords: [],
          options: [
            'A. 醇（alcohol）和羧酸（carboxylic acid）',
            'B. 酮（ketone）和醛（aldehyde）',
            'C. 酯（ester）和酰胺（amide）',
            'D. 烯烃（alkene）和烷烃（alkane）'
          ],
          answerIndex: 1,
          hint: '看词尾（suffix）："-one" 来自 ket-one（酮）；"-al" 来自 al-dehyde（醛）！',
          explanation: '词尾 "-one" 代表酮（ketone / alkanone，含链中羰基 —CO—），故 butanone 是丁酮；词尾 "-al" 代表醛（aldehyde / alkanal，含链端 —CHO），故 butanal 是丁醛。两者分子式同为 C₄H₈O，互为官能团异构体（functional group isomers）。',
          markingScheme: ['1M: butanone is a ketone; butanal is an aldehyde.'],
          commonMistake: '把 "-al" 看花眼当成 "-ol"（醇 alcohol）。'
        },
        {
          id: 'bridge-s2-q2',
          level: 2,
          levelTag: 'Level 2 · 中英过渡辨析',
          type: 'mcq',
          stem: '某有机分子简明结构式为 CH₃CH₂CONH₂，请问它含有的官能团英文名称是什么？属于哪类物质？',
          cueWords: [
            { phrase: 'CH₃CH₂CONH₂', zh: '丙酰胺简明结构式', concept: '注意 C=O 直接连着 -NH₂，整体是酰胺基（amide group），不是单纯的氨基！' }
          ],
          options: [
            'A. Amino group（氨基），属于伯胺（primary amine）',
            'B. Amide group（酰胺基），属于未取代酰胺（unsubstituted amide）',
            'C. Carboxyl group（羧基），属于羧酸（carboxylic acid）',
            'D. Ester group（酯基），属于酯（ester）'
          ],
          answerIndex: 1,
          hint: '仔细看 -NH₂ 旁边是不是紧挨着 CO（即 C=O 羰基）？—CONH₂ 整体是一个官能团！',
          explanation: '当 —NH₂ 直接连接在 C=O 碳上形成 —CONH₂ 时，整个官能团称为酰胺基（amide group），该物质名称为 propanamide（丙酰胺），属于未取代酰胺（unsubstituted amide）。只有当 —NH₂ 直接连在普通烃基碳上（如 CH₃CH₂CH₂NH₂）才叫伯胺（primary amine）。',
          markingScheme: ['1M: Amide group (-CONH2); unsubstituted amide (propanamide).'],
          commonMistake: '只看见右边的 NH₂ 就草率答成 amine（胺），忽略了旁边的 C=O！'
        },
        {
          id: 'bridge-s2-q3',
          level: 3,
          levelTag: 'Level 3 · HKDSE 英文实战',
          type: 'structured',
          stem: 'Compound W is a painkiller molecule whose structure contains a benzene ring attached to both —COOH and —OCOCH₃ groups. Name the two oxygen-containing functional groups present in Compound W, and state the observable change when aqueous sodium hydrogencarbonate is added to W.',
          cueWords: [
            { phrase: '—COOH', zh: '羧基结构', concept: 'Carboxyl group（羧基），具有弱酸性（Unit 29 & 31）' },
            { phrase: '—OCOCH₃', zh: '酯基结构（氧连乙酰基）', concept: 'Ester group（酯基），可在酸或碱中发生水解（Unit 29, 31 & 33 Aspirin）' },
            { phrase: 'observable change', zh: '可观察到的现象', concept: 'DSE 必答肉眼可见变化（如 colourless gas bubbles evolve / effervescence），不可只写生成 CO₂！' },
            { phrase: 'aqueous sodium hydrogencarbonate', zh: '碳酸氢钠水溶液 NaHCO₃(aq)', concept: '检验羧基（-COOH）的标志性试剂：产生无色气泡 CO₂（Unit 31.7）' }
          ],
          hint: 'W 其实就是 Unit 33 要学的阿司匹林（aspirin）！—COOH 叫什么基？—COO— 叫什么基？酸遇到 NaHCO₃(aq) 肉眼能看到什么现象？',
          explanation: '—COOH 是羧基（carboxyl group），—OCOCH₃ 中含有酯基（ester group）。由于含有羧基（carboxyl group），加入碳酸氢钠溶液 NaHCO₃(aq) 时会发生酸碱反应释放二氧化碳，观察到无色气泡产生 / 泡腾（colourless gas bubbles evolve / effervescence occurs）。',
          markingScheme: [
            '1M: Carboxyl group and ester group',
            '1M: Colourless gas bubbles evolve / effervescence occurs'
          ],
          commonMistake: '问 "observable change"（实验现象）时只回答 "carbon dioxide is produced"（二氧化碳本身看不见名字，必须答 effervescence 或 colourless gas bubbles evolve 才能得分！）。'
        }
      ]
    }
  ],
  unitExamLongQuestions: [
    {
      id: 'bridge-long-1',
      title: '跨册串联长题实战：From Petroleum Fraction to Fruity Ester（从石油馏分一路合成水果香精酯）',
      totalMarks: 7,
      scenarioEn: 'Naphtha is a petroleum fraction obtained by fractional distillation of crude oil. Upon catalytic cracking, naphtha produces ethene (C₂H₄), which is then converted into bromoethane (C₂H₅Br), ethanol (C₂H₅OH), ethanoic acid (CH₃COOH), and finally a pleasant fruity-smelling liquid Z when ethanol and ethanoic acid are heated under reflux with concentrated sulphuric acid.',
      scenarioZhSummary: '石脑油（naphtha）由原油分馏（fractional distillation）制得。经催化裂化（catalytic cracking）生成乙烯（ethene），再依次转化为溴乙烷（bromoethane）、乙醇（ethanol）、乙酸（ethanoic acid），最后将乙醇与乙酸在浓硫酸（concentrated sulphuric acid）存在下回流加热（heated under reflux），生成具有宜人果香气味的液体 Z（乙酸乙酯 ethyl ethanoate）。',
      cueWords: [
        { phrase: 'fractional distillation of crude oil', zh: '原油的分馏', concept: '物理分离过程（Physical separation based on different boiling points, Unit 25）' },
        { phrase: 'catalytic cracking', zh: '催化裂化', concept: '长链烷烃断裂为短链烷烃 + 烯烃（Unit 27.3）' },
        { phrase: 'ethanol (C₂H₅OH), ethanoic acid (CH₃COOH)', zh: '乙醇氧化成乙酸', concept: '伯醇完全氧化：过量 Cr₂O₇²⁻(aq)/H⁺(aq) + heat under reflux（Unit 31.5）' },
        { phrase: 'pleasant fruity-smelling liquid Z', zh: '具宜人果香气味的液体 Z', concept: '锁定产物类别：酯（Ester — ethyl ethanoate 乙酸乙酯, Unit 31.7）' },
        { phrase: 'heated under reflux with concentrated sulphuric acid', zh: '与浓硫酸共热回流', concept: '锁定反应：酯化反应（Esterification，可逆反应 ⇌，浓硫酸作催化剂及吸水剂, Unit 31.7）' }
      ],
      subQuestions: [
        {
          part: '(a)',
          marks: 1,
          promptEn: 'Explain why fractional distillation of crude oil is a physical change whereas catalytic cracking of naphtha is a chemical change.',
          commandWord: { word: 'Explain', tip: '对比 Physical vs Chemical change：围绕“有无新物质生成 / 共价键是否断裂”作答。' },
          hint: '分馏只是按沸点把原本就存在的烃分开；裂化则把大分子共价键打断变成了全新的小分子！',
          markingScheme: [
            '1M: Fractional distillation separates existing hydrocarbons by boiling point without forming new substances, whereas cracking breaks covalent bonds in large alkane molecules to form new smaller molecules (shorter alkanes and alkenes).'
          ],
          explanationZh: '分馏（fractional distillation）仅克服分子间范德华力将原油中原本存在的不同烃按沸点分离，无新物质生成；催化裂化（catalytic cracking）断裂大分子内的 C—C / C—H 共价键，生成全新的短链烷烃与烯烃。'
        },
        {
          part: '(b)',
          marks: 2,
          promptEn: 'State the reagent(s), reaction condition, and observable colour change for converting ethanol into ethanoic acid.',
          commandWord: { word: 'State', tip: '注意题目要求 3 件事：Reagent(s) + Condition + Observable colour change，漏一项扣分！' },
          hint: '伯醇（1° alcohol）彻底氧化成羧酸（carboxylic acid）：用过量酸化重铬酸钾溶液，装置必须用回流加热，颜色由橙变什么？',
          markingScheme: [
            '1M: Excess acidified potassium dichromate solution (K2Cr2O7(aq)/H+(aq)), heat under reflux',
            '1M: The reaction mixture turns from orange to green.'
          ],
          explanationZh: '乙醇（ethanol）转化为乙酸（ethanoic acid）需使用过量酸化重铬酸钾溶液（excess acidified K₂Cr₂O₇(aq)）并回流加热（heat under reflux），重铬酸根离子 Cr₂O₇²⁻（橙色 orange）被还原为 Cr³⁺（绿色 green）。'
        },
        {
          part: '(c)',
          marks: 2,
          promptEn: 'Name liquid Z and write a chemical equation for its formation from ethanol and ethanoic acid.',
          commandWord: { word: 'Write a chemical equation', tip: '酯化反应是可逆反应，必须使用可逆号 ⇌，并不要漏掉副产物水 H₂O！' },
          hint: '乙醇（ethanol ➔ ethyl）+ 乙酸（ethanoic acid ➔ ethanoate）= ethyl ethanoate！',
          markingScheme: [
            '1M: Ethyl ethanoate',
            '1M: CH3COOH(l) + CH3CH2OH(l) ⇌ CH3COOCH2CH3(l) + H2O(l) (reversible sign required)'
          ],
          explanationZh: '液体 Z 为乙酸乙酯（ethyl ethanoate）；酯化反应可逆（reversible），方程式必须写 ⇌ 且包含 H₂O。'
        },
        {
          part: '(d)',
          marks: 2,
          promptEn: 'State TWO roles of concentrated sulphuric acid in the preparation of liquid Z.',
          commandWord: { word: 'State TWO roles', tip: '浓硫酸在酯化中的双重角色是 DSE 高频送分题：催化剂 + 脱水/吸水剂移动平衡。' },
          hint: '一个作用是加快反应速率；另一个作用是吸走生成的水 H₂O，让可逆平衡向右移动提高产率！',
          markingScheme: [
            '1M: Acts as a catalyst to speed up the esterification reaction.',
            '1M: Acts as a dehydrating agent to remove water formed, shifting the equilibrium position to the right (increasing yield of ester).'
          ],
          explanationZh: '浓硫酸既作催化剂（catalyst）加快酯化速率，又作吸水/脱水剂（dehydrating agent）吸收生成的水，使可逆平衡向右移动以提高酯的产率。'
        }
      ]
    }
  ]
});

/**
 * GLOBAL INTERACTIVE REACTION MAP DATA (Topic 7 + Topic 8 Unified Graph)
 * Coordinates are designed on a spacious 1060 x 620 SVG canvas for crisp desktop & iPad touch interaction.
 */
window.CHEM_REACTION_MAP = {
  nodes: [
    { id: 'petrol', x: 95, y: 110, en: 'Petroleum Fractions', zh: '石油馏分', formula: 'Long-chain CₙH₂ₙ₊₂', unit: 'u25', group: 'hydrocarbon' },
    { id: 'alkane', x: 95, y: 295, en: 'Alkane', zh: '烷烃', formula: 'R—H (CₙH₂ₙ₊₂)', unit: 'u27', group: 'hydrocarbon' },
    { id: 'alkene', x: 305, y: 165, en: 'Alkene', zh: '烯烃', formula: 'C=C (CₙH₂ₙ)', unit: 'u27', group: 'hydrocarbon' },
    { id: 'addpoly', x: 305, y: 48, en: 'Addition Polymer', zh: '加成聚合物', formula: '—[ CH₂—CHR ]ₙ—', unit: 'u28', group: 'polymer' },
    { id: 'halo', x: 305, y: 365, en: 'Haloalkane', zh: '卤代烷', formula: 'R—X (X = Cl, Br, I)', unit: 'u31', group: 'halo' },
    { id: 'diol', x: 525, y: 65, en: 'Diol', zh: '二醇', formula: 'HO—C—C—OH', unit: 'u27', group: 'alcohol' },
    { id: 'alc', x: 525, y: 270, en: 'Alcohol (1° / 2° / 3°)', zh: '醇（伯/仲/叔醇）', formula: 'R—OH', unit: 'u31', group: 'alcohol' },
    { id: 'ald', x: 745, y: 140, en: 'Aldehyde', zh: '醛（由 1° 醇得）', formula: 'R—CHO', unit: 'u31', group: 'carbonyl' },
    { id: 'ket', x: 525, y: 475, en: 'Ketone', zh: '酮（由 2° 醇得）', formula: 'R—CO—R\'', unit: 'u31', group: 'carbonyl' },
    { id: 'acid', x: 760, y: 310, en: 'Carboxylic Acid', zh: '羧酸', formula: 'R—COOH', unit: 'u31', group: 'acid' },
    { id: 'ester', x: 965, y: 175, en: 'Ester & Fats/Oils', zh: '酯 / 动植物油脂', formula: 'R—COO—R\'', unit: 'u31', group: 'ester' },
    { id: 'amide', x: 965, y: 345, en: 'Unsubstituted Amide', zh: '未取代酰胺', formula: 'R—CONH₂', unit: 'u31', group: 'nitrogen' },
    { id: 'soap', x: 965, y: 505, en: 'Carboxylate Salt / Soap', zh: '羧酸盐 / 肥皂', formula: 'R—COO⁻Na⁺', unit: 'u33', group: 'ester' },
    { id: 'condpoly', x: 760, y: 505, en: 'Polyester & Nylon', zh: '聚酯与尼龙（缩聚物）', formula: 'PET / Nylon-6,6', unit: 'u33', group: 'polymer' }
  ],
  edges: [
    {
      id: 'e-crack-alkene', from: 'petrol', to: 'alkene',
      shortLabel: 'Cracking 裂化',
      rxnType: 'Cracking 催化裂化',
      reagents: 'Broken porous pot (碎素瓷片) or Al₂O₃',
      conditions: 'Strong heat, absence of air (隔绝空气强热)',
      obs: 'Produces colourless gas that decolorizes Br₂ (in organic solvent) immediately in the dark',
      unitId: 'u27',
      note: '同时生成较短链烷烃（shorter-chain alkanes）与烯烃（alkenes）。'
    },
    {
      id: 'e-crack-alkane', from: 'petrol', to: 'alkane',
      shortLabel: 'Cracking 裂化',
      rxnType: 'Cracking 催化裂化',
      reagents: 'Broken porous pot or Al₂O₃',
      conditions: 'Strong heat, absence of air',
      obs: 'Converts surplus heavy fractions into high-demand petrolalkanes',
      unitId: 'u27',
      note: '解决重质馏分过剩与汽油（petrol）供不应求的矛盾。'
    },
    {
      id: 'e-alkene-alkane', from: 'alkene', to: 'alkane',
      shortLabel: '+ H₂ (Pt/Pd/Ni)',
      rxnType: 'Catalytic hydrogenation 催化加氢（加成反应）',
      reagents: 'H₂(g), Pt / Pd / Ni catalyst',
      conditions: 'Room temp (Pt/Pd) or heat (~150°C with Ni)',
      obs: 'Unsaturated alkene becomes saturated alkane',
      unitId: 'u27',
      note: '不饱和 C=C 双键打开加上两个氢原子。'
    },
    {
      id: 'e-alkane-halo', from: 'alkane', to: 'halo',
      shortLabel: 'Cl₂/Br₂, UV light',
      rxnType: 'Free radical substitution 自由基取代反应',
      reagents: 'Cl₂ or Br₂ (in organic solvent)',
      conditions: 'UV light or sunlight (紫外光/日光) or heat',
      obs: 'Reddish-brown Br₂ decolorizes slowly under UV light; misty fumes of HBr/HCl',
      unitId: 'u27',
      note: '机理分 Initiation、Propagation、Termination 三步；会生成多取代混合物，欲主产一取代物需用过量烷烃（excess alkane）。'
    },
    {
      id: 'e-alkene-addpoly', from: 'alkene', to: 'addpoly',
      shortLabel: 'Polymerization 加聚',
      rxnType: 'Addition polymerization 加成聚合反应',
      reagents: 'Alkene monomer(s) + initiator/catalyst',
      conditions: 'High pressure / heat / catalyst (视塑料种类如 LDPE vs HDPE 而定)',
      obs: 'Gaseous/liquid monomers turn into solid plastic polymer without losing small molecules',
      unitId: 'u28',
      note: '常见例子：LDPE, HDPE, PP, PVC, PS, Perspex, PTFE。'
    },
    {
      id: 'e-alkene-diol', from: 'alkene', to: 'diol',
      shortLabel: 'MnO₄⁻/H⁺(aq)',
      rxnType: 'Addition / Oxidation 双键氧化加成制二醇',
      reagents: 'Cold dilute acidified KMnO₄(aq) (MnO₄⁻(aq)/H⁺(aq))',
      conditions: 'Room temperature (室温摇晃)',
      obs: 'Purple acidified KMnO₄(aq) decolorizes rapidly (turns from purple to colourless)!',
      unitId: 'u27',
      note: '鉴别烯烃（alkene）与烷烃（alkane）的经典方法之一（注意：绝不可改用 K₂Cr₂O₇，烯烃不与酸化重铬酸钾反应！）。'
    },
    {
      id: 'e-alkene-halo', from: 'alkene', to: 'halo',
      shortLabel: '+ HX / Br₂',
      rxnType: 'Electrophilic addition 亲电加成反应',
      reagents: 'HX(g) (HCl, HBr, HI) or Br₂/Cl₂ (in organic solvent)',
      conditions: 'Room temperature, in the dark (室温避光即可瞬间反应)',
      obs: 'With Br₂ (in organic solvent): orange/reddish-brown solution decolorizes immediately in the dark',
      unitId: 'u31',
      note: '若不对称烯烃（如 propene）加 HX，遵循马氏规则 Markovnikov\'s rule（“氢多加氢”判断主产物 major product）！'
    },
    {
      id: 'e-halo-alc', from: 'halo', to: 'alc',
      shortLabel: 'NaOH(aq), reflux',
      rxnType: 'Substitution / Alkaline hydrolysis 卤代烷碱性取代反应',
      reagents: 'NaOH(aq) or KOH(aq)',
      conditions: 'Heat under reflux (回流加热)',
      obs: 'Oily haloalkane layer gradually dissolves (for short-chain alcohols)',
      unitId: 'u31',
      note: '有机合成核心桥梁：把 —X 替换为羟基 —OH！'
    },
    {
      id: 'e-alc-halo', from: 'alc', to: 'halo',
      shortLabel: 'HX / PCl₅ / SOCl₂',
      rxnType: 'Substitution 醇的卤代取代反应',
      reagents: 'HX (e.g. NaBr + conc. H₂SO₄) OR PCl₃ / PCl₅ / SOCl₂',
      conditions: 'Room temp for PCl₅ or 3° alcohol + conc. HCl; heat for NaBr/H₂SO₄',
      obs: 'With solid PCl₅: steamy / white misty fumes of HCl(g) evolved (检验 -OH 基！)',
      unitId: 'u31',
      note: '用 SOCl₂ 的最大优点是副产物 SO₂(g) 与 HCl(g) 全为气体逸出，易于提纯氯代烷。'
    },
    {
      id: 'e-alc-alkene', from: 'alc', to: 'alkene',
      shortLabel: 'Dehydration 脱水',
      rxnType: 'Dehydration (Elimination) 醇的脱水消除反应',
      reagents: 'Excess conc. H₂SO₄ OR heated Al₂O₃ / broken porous pot',
      conditions: 'Heat (~180°C for conc. H₂SO₄; ~300°C vapour over Al₂O₃)',
      obs: 'Produces alkene gas that decolorizes bromine solution',
      unitId: 'u31',
      note: '不对称仲醇（如 butan-2-ol）脱水可能生成位置异构体及顺反异构体（but-1-ene, cis-but-2-ene, trans-but-2-ene）！'
    },
    {
      id: 'e-alc-ald', from: 'alc', to: 'ald',
      shortLabel: '1° + Cr₂O₇²⁻/H⁺, distil',
      rxnType: 'Partial oxidation of 1° alcohol 伯醇部分氧化制醛',
      reagents: 'Acidified K₂Cr₂O₇(aq) (with excess 1° alcohol)',
      conditions: 'Heat with immediate distillation (加热并立即蒸馏蒸出醛)',
      obs: 'Solution turns from orange to green; volatile aldehyde collected as distillate',
      unitId: 'u31',
      note: '关键考点：必须用 distillation 而非 reflux，防止生成的醛被继续氧化成羧酸！'
    },
    {
      id: 'e-ald-acid', from: 'ald', to: 'acid',
      shortLabel: 'Cr₂O₇²⁻/H⁺, reflux',
      rxnType: 'Oxidation of aldehyde 醛氧化制羧酸',
      reagents: 'Acidified K₂Cr₂O₇(aq) or acidified KMnO₄(aq)',
      conditions: 'Heat under reflux (回流加热 / 温热)',
      obs: 'Dichromate turns from orange to green (distinguishes aldehyde from ketone!)',
      unitId: 'u31',
      note: '酮（ketone）无此反应，借此可鉴别醛（aldehyde）和酮（ketone）。'
    },
    {
      id: 'e-alc-acid', from: 'alc', to: 'acid',
      shortLabel: '1° + excess Cr₂O₇²⁻/H⁺, reflux',
      rxnType: 'Complete oxidation of 1° alcohol 伯醇完全氧化制羧酸',
      reagents: 'Excess acidified K₂Cr₂O₇(aq) (或 acidified KMnO₄(aq))',
      conditions: 'Heat under reflux (回流加热)',
      obs: 'Mixture turns from orange to green',
      unitId: 'u31',
      note: '1 mol 伯醇与 2[O] 反应生成羧酸（RCH₂OH + 2[O] ⟶ RCOOH + H₂O）。'
    },
    {
      id: 'e-alc-ket', from: 'alc', to: 'ket',
      shortLabel: '2° + Cr₂O₇²⁻/H⁺, reflux',
      rxnType: 'Oxidation of 2° alcohol 仲醇氧化制酮',
      reagents: 'Acidified K₂Cr₂O₇(aq)',
      conditions: 'Heat under reflux (回流加热)',
      obs: 'Mixture turns from orange to green (Note: 3° alcohol shows NO reaction!)',
      unitId: 'u31',
      note: '生成的酮（ketone）不能再被进一步氧化。叔醇（3° alcohol）无 α-H，不能被重铬酸钾氧化。'
    },
    {
      id: 'e-ald-alc', from: 'ald', to: 'alc',
      shortLabel: 'NaBH₄ or LiAlH₄',
      rxnType: 'Reduction of aldehyde 醛还原回伯醇 (1°)',
      reagents: 'NaBH₄(aq) OR (1. LiAlH₄, dry ether  2. H⁺(aq))',
      conditions: 'Room temp / gentle warming',
      obs: 'Aldehyde reduced back to primary (1°) alcohol',
      unitId: 'u31',
      note: 'NaBH₄ 可在水溶液中使用，安全温和；LiAlH₄ 严禁遇水，必须先用 dry ether 再加酸水解。'
    },
    {
      id: 'e-ket-alc', from: 'ket', to: 'alc',
      shortLabel: 'NaBH₄ or LiAlH₄',
      rxnType: 'Reduction of ketone 酮还原回仲醇 (2°)',
      reagents: 'NaBH₄(aq) OR (1. LiAlH₄, dry ether  2. H⁺(aq))',
      conditions: 'Room temp / gentle warming',
      obs: 'Ketone reduced back to secondary (2°) alcohol',
      unitId: 'u31',
      note: 'R—CO—R\' + 2[H] ⟶ R—CH(OH)—R\'。'
    },
    {
      id: 'e-acid-alc', from: 'acid', to: 'alc',
      shortLabel: '1. LiAlH₄  2. H⁺(aq)',
      rxnType: 'Reduction of carboxylic acid 羧酸强还原制伯醇 (1°)',
      reagents: '1. LiAlH₄, dry ether   2. H⁺(aq)',
      conditions: 'Anhydrous dry ether in Step 1, followed by dilute acid in Step 2',
      obs: 'Carboxylic acid reduced straight to primary (1°) alcohol',
      unitId: 'u31',
      note: '⚠️ 必考红线：NaBH₄(aq) 还原力不够，绝对不能还原羧酸（carboxylic acid）或酯（ester）！必须用 LiAlH₄！'
    },
    {
      id: 'e-acid-ester', from: 'acid', to: 'ester',
      shortLabel: '+ R\'OH, conc. H₂SO₄ ⇌',
      rxnType: 'Esterification 酯化反应（可逆平衡）',
      reagents: 'Alcohol (R\'OH) + conc. H₂SO₄',
      conditions: 'Heat under reflux (回流加热), reversible ⇌',
      obs: 'Sweet / pleasant fruity smell; colourless oily layer floats on Na₂CO₃(aq)',
      unitId: 'u31',
      note: '浓硫酸身兼二职：催化剂（catalyst）+ 脱水剂（dehydrating agent）。'
    },
    {
      id: 'e-ester-acid', from: 'ester', to: 'acid',
      shortLabel: 'H⁺(aq), reflux ⇌',
      rxnType: 'Acid hydrolysis of ester 酯的酸催化水解',
      reagents: 'Dilute H₂SO₄(aq) or dilute HCl(aq)',
      conditions: 'Heat under reflux (回流加热), reversible ⇌',
      obs: 'Fruity smell fades partially; incomplete reversible reaction',
      unitId: 'u31',
      note: '酸水解可逆不彻底，生成游离羧酸（RCOOH）和醇（R\'OH）。'
    },
    {
      id: 'e-ester-soap', from: 'ester', to: 'soap',
      shortLabel: 'NaOH(aq), reflux ⟶',
      rxnType: 'Alkaline hydrolysis / Saponification 碱性水解（皂化反应）',
      reagents: 'NaOH(aq)',
      conditions: 'Heat under reflux (不可逆 ⟶，反应彻底！)',
      obs: 'Oily ester/fat dissolves; adding conc. NaCl(aq) salts out solid soap',
      unitId: 'u33',
      note: '产物是羧酸盐（RCOO⁻Na⁺）+ 醇（油脂皂化则生成甘油 glycerol + 肥皂 soap）！欲得游离酸需再加稀酸酸化。'
    },
    {
      id: 'e-acid-amide', from: 'acid', to: 'amide',
      shortLabel: '1. PCl₅/SOCl₂  2. NH₃',
      rxnType: 'Amide formation 制取未取代酰胺',
      reagents: '1. PCl₅ or SOCl₂ (forming RCOCl)   2. NH₃ (conc. NH₃ / NH₃(g))',
      conditions: 'Anhydrous conditions (先制酰氯 acyl chloride 再通氨)',
      obs: 'White solid amide formed',
      unitId: 'u31',
      note: '若直接把羧酸与氨水混合，室温下只发生酸碱中和生成铵盐 RCOO⁻NH₄⁺！'
    },
    {
      id: 'e-amide-acid', from: 'amide', to: 'acid',
      shortLabel: 'H⁺ or OH⁻ hydrolysis',
      rxnType: 'Hydrolysis of amide 酰胺的水解反应',
      reagents: 'Acidic: HCl(aq) reflux ➔ RCOOH + NH₄⁺ | Alkaline: NaOH(aq) reflux ➔ RCOO⁻ + NH₃(g)',
      conditions: 'Heat under reflux',
      obs: 'With NaOH(aq) + heat: pungent NH₃ gas turns moist red litmus paper blue!',
      unitId: 'u31',
      note: 'DSE 最爱考产物酸碱形态：酸水解氨变 NH₄⁺；碱水解酸变 RCOO⁻ 且放出 NH₃(g)！'
    },
    {
      id: 'e-acid-condpoly', from: 'acid', to: 'condpoly',
      shortLabel: '+ Diol / Diamine 缩聚',
      rxnType: 'Condensation polymerization 缩合聚合反应',
      reagents: 'Dicarboxylic acid + Diol (➔ Polyester PET) OR + Diamine (➔ Nylon-6,6)',
      conditions: 'Heat / catalyst (eliminates small molecules H₂O or HCl)',
      obs: 'Forms strong fibres/plastics containing ester (-COO-) or amide (-CONH-) linkages',
      unitId: 'u33',
      note: '因为含酯键或酰胺键，聚酯与尼龙遇到强酸或强碱均会发生水解断裂！'
    }
  ]
};

/**
 * SYNTHESIS PATHFINDER CHALLENGES (Interactive Multi-step Route Builder)
 */
window.SYNTHESIS_CHALLENGES = [
  {
    id: 'syn-1',
    difficulty: '★★☆ 经典两步入门',
    title: 'Challenge 1: Convert Ethene into Ethanol（由乙烯制取乙醇）',
    start: 'CH₂=CH₂ (ethene 乙烯)',
    target: 'CH₃CH₂OH (ethanol 乙醇)',
    stepsCount: 2,
    briefZh: '实验室没有高压水合设备时，如何用两步把 Topic 7 的乙烯（ethene）变成 Topic 8 的乙醇（ethanol）？',
    steps: [
      {
        prompt: 'Step 1：乙烯 CH₂=CH₂ 应该先用什么试剂转化为哪种中间体？',
        options: [
          'HBr(g) ➔ 生成 CH₃CH₂Br (bromoethane 溴乙烷)',
          'NaOH(aq), heat under reflux ➔ 直接生成乙醇',
          'Br₂(l), UV light ➔ 生成 CH₂=CHBr',
          'Cr₂O₇²⁻(aq)/H⁺(aq) ➔ 生成乙醛'
        ],
        correct: 0,
        explain: '烯烃 C=C 双键先与 HBr 发生加成反应（addition reaction）生成溴乙烷 CH₃CH₂Br。'
      },
      {
        prompt: 'Step 2：拿到溴乙烷 CH₃CH₂Br 后，用什么试剂和条件得到乙醇 CH₃CH₂OH？',
        options: [
          'Conc. H₂SO₄, heat at 180°C',
          'NaOH(aq), heat under reflux（氢氧化钠水溶液，回流加热）',
          'NaBH₄(aq), room temperature',
          'PCl₅(s), room temperature'
        ],
        correct: 1,
        explain: '卤代烷与 NaOH(aq) 回流加热（heat under reflux）发生亲核取代反应，—Br 被 —OH 取代生成乙醇！'
      }
    ],
    summaryRoute: 'CH₂=CH₂ ──[HBr]──▶ CH₃CH₂Br ──[NaOH(aq), heat under reflux]──▶ CH₃CH₂OH'
  },
  {
    id: 'syn-2',
    difficulty: '★★☆ 马氏规则应用',
    title: 'Challenge 2: Convert Propene into Propanone（由丙烯三步合成丙酮）',
    start: 'CH₃CH=CH₂ (propene 丙烯)',
    target: 'CH₃COCH₃ (propanone 丙酮)',
    stepsCount: 3,
    briefZh: '丙酮（propanone）的羰基在第 2 号碳上。怎样精准把氧原子装到丙烯中间那个碳上？',
    steps: [
      {
        prompt: 'Step 1：让丙烯 CH₃CH=CH₂ 与 HBr 反应，根据马氏规则（Markovnikov\'s rule）主产物是什么？',
        options: [
          'CH₃CH₂CH₂Br (1-bromopropane)',
          'CH₃CHBrCH₃ (2-bromopropane 2-溴丙烷)',
          'CH₃CBr₂CH₃ (2,2-dibromopropane)',
          'CH₂BrCHBrCH₃ (1,2-dibromopropane)'
        ],
        correct: 1,
        explain: '“氢多加氢”！端碳 =CH₂ 上有 2 个 H，中间碳 =CH— 只有 1 个 H，因此 H 加在端碳、Br 精准落在中间 2 号碳上，主产物是 2-bromopropane！'
      },
      {
        prompt: 'Step 2：将 2-bromopropane 转化为仲醇 propan-2-ol（CH₃CH(OH)CH₃）需要什么？',
        options: [
          'NaOH(aq), heat under reflux',
          'H₂O(l) only at room temperature',
          'Acidified KMnO₄(aq)',
          'LiAlH₄ in dry ether'
        ],
        correct: 0,
        explain: '卤代烷与 NaOH(aq) 回流加热取代得到仲醇 2-丙醇（propan-2-ol）。'
      },
      {
        prompt: 'Step 3：把仲醇 propan-2-ol 氧化为丙酮 propanone（CH₃COCH₃）应选用什么试剂和条件？',
        options: [
          'NaBH₄(aq), room temperature',
          'Cr₂O₇²⁻(aq)/H⁺(aq), heat under reflux',
          'Cl₂(g), UV light',
          'Conc. H₂SO₄, 180°C'
        ],
        correct: 1,
        explain: '酸化重铬酸钾溶液 Cr₂O₇²⁻(aq)/H⁺(aq) 回流加热将仲醇（2° alcohol）氧化成酮（ketone），溶液由橙色变为绿色！'
      }
    ],
    summaryRoute: 'CH₃CH=CH₂ ──[HBr]──▶ CH₃CHBrCH₃ ──[NaOH(aq), reflux]──▶ CH₃CH(OH)CH₃ ──[Cr₂O₇²⁻/H⁺, reflux]──▶ CH₃COCH₃'
  },
  {
    id: 'syn-3',
    difficulty: '★★★ 经典官能团移位',
    title: 'Challenge 3: Shift -OH from C-1 to C-2!（由 1-丙醇搬家制取 2-丙醇）',
    start: 'CH₃CH₂CH₂OH (propan-1-ol 1-丙醇)',
    target: 'CH₃CH(OH)CH₃ (propan-2-ol 2-丙醇)',
    stepsCount: 3,
    briefZh: 'HKDSE 最经典的合成巧思题！怎样把 1 号碳上的 —OH “搬家”到 2 号碳上？秘诀：先消去成双键，再靠马氏规则加回来！',
    steps: [
      {
        prompt: 'Step 1：先把 1-丙醇（propan-1-ol）上的 —OH 脱掉变成丙烯（propene），用什么条件？',
        options: [
          'NaOH(aq), heat under reflux',
          'Excess conc. H₂SO₄, heat (~180°C) 或 Al₂O₃, strong heat（脱水反应 dehydration）',
          'Cr₂O₇²⁻(aq)/H⁺(aq), distillation',
          'PCl₅, room temperature'
        ],
        correct: 1,
        explain: '醇在过量浓硫酸加热或氧化铝催化强热下发生脱水反应（dehydration），生成丙烯 CH₃CH=CH₂。'
      },
      {
        prompt: 'Step 2：有了丙烯 CH₃CH=CH₂，怎样把官能团定位到 2 号碳上？',
        options: [
          '加 H₂, Pt 催化剂',
          '加 HBr(g)（利用马氏规则生成主产物 2-bromopropane）',
          '加冷稀酸化 KMnO₄(aq)',
          '加 Cl₂, UV light'
        ],
        correct: 1,
        explain: '丙烯与 HBr 加成，按马氏规则（Markovnikov\'s rule）生成主产物 2-溴丙烷（CH₃CHBrCH₃）！'
      },
      {
        prompt: 'Step 3：最后一步把 2-bromopropane 变成目标产物 propan-2-ol！',
        options: [
          'NaOH(aq), heat under reflux',
          'Dilute HCl(aq), heat under reflux',
          'SOCl₂',
          'Na₂CO₃(aq)'
        ],
        correct: 0,
        explain: '2-溴丙烷与 NaOH(aq) 回流加热发生取代反应，成功得到 2-丙醇（propan-2-ol）！“脱水 ➔ 加 HX ➔ 水解”是官能团移位万能三板斧！'
      }
    ],
    summaryRoute: 'CH₃CH₂CH₂OH ──[Al₂O₃, heat]──▶ CH₃CH=CH₂ ──[HBr]──▶ CH₃CHBrCH₃ ──[NaOH(aq), reflux]──▶ CH₃CH(OH)CH₃'
  },
  {
    id: 'syn-4',
    difficulty: '★★★ 还原剂精准选择',
    title: 'Challenge 4: Ester Hydrolysis & Selective Reduction（由丙酸甲酯制取 1-丙醇）',
    start: 'CH₃CH₂COOCH₃ (methyl propanoate 丙酸甲酯)',
    target: 'CH₃CH₂CH₂OH (propan-1-ol 1-丙醇)',
    stepsCount: 2,
    briefZh: '怎样把酯拆开拿到丙酸，再把顽固的羧基（-COOH）直接还原回伯醇（1° alcohol）？当心还原剂陷阱！',
    steps: [
      {
        prompt: 'Step 1：由丙酸甲酯得到丙酸（propanoic acid, CH₃CH₂COOH）可用酸水解，条件是什么？',
        options: [
          'Dilute H₂SO₄(aq) / HCl(aq), heat under reflux（分离出丙酸）',
          'NaBH₄(aq) at room temperature',
          'Br₂ in organic solvent',
          'PCl₅ at room temperature'
        ],
        correct: 0,
        explain: '稀硫酸或稀盐酸催化回流加热可将丙酸甲酯水解为丙酸（CH₃CH₂COOH）与甲醇（或先用 NaOH 回流再加稀酸酸化，产率更高！）。'
      },
      {
        prompt: 'Step 2：要把丙酸 CH₃CH₂COOH 还原为 1-丙醇 CH₃CH₂CH₂OH，必须选哪组还原剂？',
        options: [
          'NaBH₄(aq) 水溶液',
          '1. LiAlH₄, dry ether   2. H⁺(aq)（氢化铝锂干醚溶液，再加稀酸）',
          'H₂(g), Pt catalyst',
          'LiAlH₄ dissolved in water 水溶液'
        ],
        correct: 1,
        explain: '满分关键！NaBH₄ 太弱不能还原羧酸；LiAlH₄ 遇水剧烈反应失效，所以必须分两步写：1. LiAlH₄, dry ether；2. H⁺(aq)！'
      }
    ],
    summaryRoute: 'CH₃CH₂COOCH₃ ──[H⁺(aq), reflux]──▶ CH₃CH₂COOH ──[1. LiAlH₄, dry ether / 2. H⁺(aq)]──▶ CH₃CH₂CH₂OH'
  }
];

/**
 * HKDSE ENGLISH LONG-QUESTION CUE-WORD DECODER DICTIONARY
 * Helps English-medium students instantly spot what topic/reaction a long question is testing!
 */
window.DSE_CUE_DICTIONARY = [
  {
    category: 'Observable Changes 现象题眼（看到这些英文现象，秒锁官能团！）',
    items: [
      {
        cueEn: 'decolorizes bromine (dissolved in an organic solvent) immediately in the dark',
        zh: '在黑暗中立即使溴（有机溶液）褪色',
        testedConcept: '含 C=C 碳碳双键（Alkene 烯烃）！发生加成反应（Addition reaction），无需紫外光（Unit 27.4）',
        answerKeywords: 'Carbon-carbon double bond (C=C); addition reaction'
      },
      {
        cueEn: 'decolorizes bromine slowly only in the presence of UV light / sunlight',
        zh: '只有在紫外光/阳光下才缓慢使溴褪色（并产生白雾）',
        testedConcept: '饱和烃/烷烃（Alkane）！发生自由基取代反应（Free radical substitution, Unit 27.2）',
        answerKeywords: 'Free radical substitution; Initiation, Propagation, Termination; misty fumes of HBr'
      },
      {
        cueEn: 'decolorizes cold dilute acidified potassium permanganate solution',
        zh: '使冷稀酸化高锰酸钾溶液褪色（由紫变无色）',
        testedConcept: '烯烃（Alkene）C=C 被氧化加成生成二醇（diol, Unit 27.4）',
        answerKeywords: 'Turns from purple to colourless; forms a diol'
      },
      {
        cueEn: 'turns warm acidified potassium dichromate solution from orange to green',
        zh: '使温热的酸化重铬酸钾溶液由橙色变为绿色',
        testedConcept: '分子可被氧化：必为 1° 醇（伯醇）、2° 醇（仲醇）或 醛（Aldehyde）！排除 3° 醇（叔醇）、酮（Ketone）和羧酸！（Unit 31.5–31.6）',
        answerKeywords: 'Oxidation; Cr₂O₇²⁻(aq) (orange) reduced to Cr³⁺(aq) (green)'
      },
      {
        cueEn: 'effervescence / colourless gas bubbles with Na₂CO₃(aq) or NaHCO₃(aq)',
        zh: '与碳酸钠或碳酸氢钠溶液反应产生泡腾/无色气泡',
        testedConcept: '铁定含有羧基（Carboxyl group, —COOH / Carboxylic acid）！（醇、酯、醛、酮均不与碳酸氢钠反应！Unit 31.7）',
        answerKeywords: 'Carboxyl group (—COOH); neutralisation / acid-carbonate reaction releasing CO₂(g)'
      },
      {
        cueEn: 'steamy / white misty fumes upon adding solid phosphorus pentachloride (PCl₅)',
        zh: '加入五氯化磷固体产生白雾',
        testedConcept: '干燥液体中含有羟基（Hydroxyl group, —OH，如醇 alcohol 或羧酸 carboxylic acid），取代放出 HCl(g) 白雾（Unit 31.5）',
        answerKeywords: 'Hydroxyl group (—OH); misty fumes of HCl(g)'
      },
      {
        cueEn: 'pleasant / sweet fruity smell',
        zh: '宜人的水果香味',
        testedConcept: '生成或含有酯（Ester, —COO—），考酯化反应（Esterification, Unit 31.7）',
        answerKeywords: 'Ester; esterification (reversible reaction ⇌, conc. H₂SO₄, heat under reflux)'
      },
      {
        cueEn: 'alkaline heating releases a pungent gas that turns moist red litmus paper blue',
        zh: '与碱共热放出刺激性气体，使湿润红色石蕊试纸变蓝',
        testedConcept: '含有未取代酰胺（Unsubstituted amide, —CONH₂）（或铵盐），碱性水解放出氨气 NH₃(g)！（Unit 31.9）',
        answerKeywords: 'Unsubstituted amide (—CONH₂); alkaline hydrolysis producing RCOO⁻Na⁺ and NH₃(g)'
      }
    ]
  },
  {
    category: 'Structural & Physical Clues 结构与物理性质题眼',
    items: [
      {
        cueEn: 'optically active / rotates the plane of polarization of plane-polarized light',
        zh: '具旋光性 / 能旋转平面偏振光的偏振面',
        testedConcept: '分子具有手性（Chiral），必含手性碳原子（Chiral carbon C*，连有 4 个不同原子或基团），存在一对对映异构体（Enantiomers, Unit 30.4–30.7）！',
        answerKeywords: 'Chiral carbon attached to four different groups; non-superimposable mirror images; enantiomers'
      },
      {
        cueEn: 'exhibits cis-trans (geometrical) isomerism',
        zh: '具有顺反（几何）异构现象',
        testedConcept: '① 含碳碳双键 C=C（受限旋转 restricted rotation）；② 双键每个碳上连有两个不同的原子或基团！（Unit 30.3）',
        answerKeywords: 'Restricted rotation about C=C bond; each doubly-bonded carbon attached to two different atoms/groups'
      },
      {
        cueEn: 'equimolar mixture of two enantiomers shows zero optical rotation',
        zh: '等摩尔的一对对映异构体混合物旋光度为零',
        testedConcept: '外消旋混合物（Racemic mixture）：两个对映异构体将偏振光向相反方向旋转相同角度，彼此抵消（Unit 30.7）',
        answerKeywords: 'Racemic mixture; opposite directions to the same extent cancel out'
      },
      {
        cueEn: 'higher boiling point than isomer / comparable molecular mass compound',
        zh: '沸点高于同分异构体或相近相对分子质量物质',
        testedConcept: '考分子间作用力（Intermolecular forces, Unit 26 & 29）：先比能否形成氢键（Hydrogen bonds：酰胺 > 羧酸二聚体 > 醇 > 无氢键极性分子 > 非极性烃）；同系物异构体再比直链 vs 支链接触面积（surface area of contact）影响范德华力（van der Waals\' forces）！',
        answerKeywords: 'Intermolecular hydrogen bonds / stronger van der Waals\' forces due to larger area of contact'
      }
    ]
  },
  {
    category: 'Lab Apparatus & Experimental Clues 实验装置与操作题眼',
    items: [
      {
        cueEn: 'heat under reflux (vertical condenser with open top)',
        zh: '回流加热（直立冷凝管，顶部敞口）',
        testedConcept: '防止易挥发有机反应物/中间体蒸气逃逸（condense vapour back to flask），让慢反应充分进行到底（如伯醇完全氧化成羧酸、卤代烷水解、酯化、酯/酰胺水解），绝不可加塞子！（Unit 31 & 32）',
        answerKeywords: 'Condenses volatile vapours back into the reaction flask without loss; prevents build-up of pressure'
      },
      {
        cueEn: 'immediate distillation (heating with excess alcohol)',
        zh: '边反应边蒸馏（配合过量伯醇）',
        testedConcept: '特指伯醇氧化停在醛（Aldehyde）！因为醛无分子间氢键、沸点最低，一生成立刻蒸出，防止进一步氧化为羧酸（Unit 31.5）',
        answerKeywords: 'Distil off aldehyde immediately once formed (lowest b.p., no intermolecular H-bonds) to prevent further oxidation to carboxylic acid'
      },
      {
        cueEn: 'remove delivery tube from water before stopping heating',
        zh: '停止加热前先将导管移出水面',
        testedConcept: '实验室排水收集气体（如裂化石蜡油制乙烯 cracking of medicinal paraffin）：防止试管冷却气压骤降引起冷水倒吸炸裂热试管（prevent sucking back, Unit 27.3）！',
        answerKeywords: 'Prevent sucking back of cold water into the hot boiling tube which would crack the tube'
      },
      {
        cueEn: 'shake with Na₂CO₃(aq) in separating funnel and open tap periodically',
        zh: '在分液漏斗中与碳酸钠溶液摇晃并定时旋开活塞',
        testedConcept: '有机液体提纯（Unit 32.4）：中和除去残留酸杂质（neutralize acidic impurities），并释放生成的 CO₂ 气体防止漏斗内气压过高喷溅！',
        answerKeywords: 'Remove acidic impurities; release pressure built up by CO₂ gas formed'
      },
      {
        cueEn: 'add anhydrous CaCl₂ / Na₂SO₄ until liquid turns from cloudy to clear',
        zh: '加入无水氯化钙/硫酸钠直至液体由浑浊变清澈',
        testedConcept: '干燥剂（Drying agent）除去有机层中残余水分（remove traces of water, Unit 32.4）',
        answerKeywords: 'Act as a drying agent to remove water from the organic product'
      }
    ]
  },
  {
    category: 'DSE Exam Command Words 英文考卷设问指令词审题法',
    items: [
      {
        cueEn: 'Suggest a chemical test to distinguish X and Y',
        zh: '建议一项化学测试以鉴别 X 和 Y',
        testedConcept: '满分四要素缺一不可：① 加入什么试剂（Reagent）+ ② 反应条件（Condition，如 in the dark / warm）+ ③ X 的正现象 + ④ Y 的不同现象或 "no observable change"！（严禁使用物理测试如测沸点！）',
        answerKeywords: 'Add [reagent] under [condition]; X gives [obs 1] while Y gives [no observable change / obs 2]'
      },
      {
        cueEn: 'Draw an electron diagram (showing electrons in the outermost shells only)',
        zh: '画出电子图（只显示最外层电子）',
        testedConcept: '精工版铁律：① 绝不画内层电子圈；② 共价键必须画重叠圆圈（overlapping circles）；③ 用点（•）和叉（×）区分不同原子电子；④ 孤对电子及自由基单电子必须点清！（Unit 26 & 27）',
        answerKeywords: 'Overlapping outermost circles, dot-and-cross pairs, all lone pairs & unpaired electrons shown'
      },
      {
        cueEn: 'Outline a synthetic route in NOT MORE THAN 3 steps',
        zh: '概述不超过三步的合成路线',
        testedConcept: '写出“起点 ➔ 中间体 1 结构式 ➔ 中间体 2 结构式 ➔ 终点”，每个箭头上方/下方写清准确试剂与条件（如 1. LiAlH₄, dry ether  2. H⁺(aq) 算一步转化！Unit 32）',
        answerKeywords: 'Clear structural formulae of all intermediates + exact reagents and conditions on every arrow'
      },
      {
        cueEn: 'Draw the repeating unit of the polymer',
        zh: '画出该聚合物的重复单位',
        testedConcept: '画出最小重复链节，左右两端必须画出向外延伸的共价键（—[ ... ]— 或 — ... —），且单独写 repeating unit 时绝对不要加下标 n！（Unit 28 & 33）',
        answerKeywords: 'Continuation bonds at both ends; NO subscript n for repeating unit alone'
      }
    ]
  }
];
