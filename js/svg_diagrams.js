/**
 * Mastering Chemistry (HKDSE Jing Kung / L.H.M. Chung)
 * Custom Textbook-Compliant Vector Diagrams Library (100% Offline SVG)
 * Strictly follows HKEAA & Mastering Chemistry conventions:
 * - Outermost electron shells only, overlapping circles, dot-and-cross, separate Cl• + Cl×
 * - Open-top condenser for heating under reflux vs side-arm distillation
 * - Cracking setup with broken porous pot & anti-sucking-back warning
 */
window.CHEM_SVGS = {
  'svg-fractionating-tower': `
    <svg viewBox="0 0 820 460" class="chem-svg" role="img" aria-label="Industrial Fractionating Tower of Petroleum">
      <defs>
        <linearGradient id="towerGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#fef3c7"/>
          <stop offset="45%" stop-color="#fdba74"/>
          <stop offset="85%" stop-color="#ea580c"/>
          <stop offset="100%" stop-color="#7c2d12"/>
        </linearGradient>
        <marker id="arrDark" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M0,1 L9,5 L0,9 z" fill="#334155"/>
        </marker>
      </defs>
      <rect x="8" y="8" width="804" height="444" rx="14" fill="#fffbeb" stroke="#fde68a"/>
      <text x="24" y="36" font-size="16" font-weight="700" fill="#92400e">工业石油分馏塔 Fractionating Tower of Petroleum (Physical Separation 物理分离)</text>

      <!-- Furnace & Crude Oil Pipe -->
      <rect x="24" y="340" width="110" height="72" rx="8" fill="#fee2e2" stroke="#dc2626" stroke-width="2"/>
      <text x="79" y="366" text-anchor="middle" font-size="13" font-weight="700" fill="#991b1b">Furnace 加热炉</text>
      <text x="79" y="385" text-anchor="middle" font-size="11" fill="#b91c1c">Crude oil 石油</text>
      <text x="79" y="401" text-anchor="middle" font-size="11" font-weight="600" fill="#b91c1c">heated to ~400°C</text>
      <line x1="134" y1="376" x2="196" y2="376" stroke="#dc2626" stroke-width="4" marker-end="url(#arrDark)"/>

      <!-- Tower Body -->
      <rect x="200" y="60" width="145" height="365" rx="12" fill="url(#towerGrad)" stroke="#78350f" stroke-width="2.5"/>
      <text x="272" y="82" text-anchor="middle" font-size="11" font-weight="700" fill="#78350f">Cooler 塔顶较冷 (&lt;40°C)</text>
      <text x="272" y="414" text-anchor="middle" font-size="11" font-weight="700" fill="#ffffff">Hotter 塔底较热 (&gt;350°C)</text>

      <!-- Bubble Caps / Trays & Outlets -->
      <g stroke="#78350f" stroke-width="1.8">
        <line x1="200" y1="108" x2="315" y2="108"/>
        <line x1="230" y1="156" x2="345" y2="156"/>
        <line x1="200" y1="204" x2="315" y2="204"/>
        <line x1="230" y1="252" x2="345" y2="252"/>
        <line x1="200" y1="300" x2="315" y2="300"/>
        <line x1="230" y1="348" x2="345" y2="348"/>
      </g>

      <!-- Fraction Outlet Arrows & Labels -->
      <g font-size="12" fill="#1e293b">
        <line x1="272" y1="60" x2="272" y2="45" stroke="#475569" stroke-width="2.5"/>
        <line x1="272" y1="45" x2="375" y2="45" stroke="#475569" stroke-width="2.5" marker-end="url(#arrDark)"/>
        <text x="385" y="50"><tspan font-weight="700" fill="#0f766e">Refinery gases 炼油气</tspan> (C₁–C₄, &lt;40°C) · LPG 液化石油气</text>

        <line x1="345" y1="95" x2="375" y2="95" stroke="#475569" stroke-width="2.5" marker-end="url(#arrDark)"/>
        <text x="385" y="99"><tspan font-weight="700" fill="#0369a1">Petrol (Gasoline) 汽油</tspan> (C₅–C₁₀, 40–170°C) · 私家车燃料</text>

        <line x1="345" y1="140" x2="375" y2="140" stroke="#475569" stroke-width="2.5" marker-end="url(#arrDark)"/>
        <text x="385" y="144"><tspan font-weight="700" fill="#1d4ed8">Naphtha 石脑油</tspan> (C₆–C₁₀, 70–170°C) · 制煤气/石化原料</text>

        <line x1="345" y1="186" x2="375" y2="186" stroke="#475569" stroke-width="2.5" marker-end="url(#arrDark)"/>
        <text x="385" y="190"><tspan font-weight="700" fill="#4338ca">Kerosene 煤油</tspan> (C₁₀–C₁₄, 170–250°C) · 飞机燃料 aircraft fuel</text>

        <line x1="345" y1="234" x2="375" y2="234" stroke="#475569" stroke-width="2.5" marker-end="url(#arrDark)"/>
        <text x="385" y="238"><tspan font-weight="700" fill="#b45309">Diesel oil 柴油</tspan> (C₁₄–C₂₀, 250–350°C) · 货车/巴士燃料</text>

        <line x1="345" y1="286" x2="375" y2="286" stroke="#475569" stroke-width="2.5" marker-end="url(#arrDark)"/>
        <text x="385" y="290"><tspan font-weight="700" fill="#c2410c">Fuel oil 燃料油</tspan> (&gt;350°C) · 轮船与发电厂燃料</text>

        <line x1="345" y1="338" x2="375" y2="338" stroke="#475569" stroke-width="2.5" marker-end="url(#arrDark)"/>
        <text x="385" y="342"><tspan font-weight="700" fill="#9a3412">Lubricating oil &amp; waxes 润滑油及蜡</tspan> (&gt;350°C)</text>

        <line x1="345" y1="398" x2="375" y2="398" stroke="#475569" stroke-width="2.5" marker-end="url(#arrDark)"/>
        <text x="385" y="402"><tspan font-weight="700" fill="#451a03">Bitumen 沥青</tspan> (C₂₅+, residue 残渣) · 铺设道路 road surfacing</text>
      </g>

      <!-- Right Trend Box -->
      <rect x="678" y="72" width="122" height="345" rx="10" fill="#ffffff" stroke="#f59e0b" stroke-width="1.8"/>
      <text x="739" y="95" text-anchor="middle" font-size="12" font-weight="700" fill="#b45309">自上而下递变规律</text>
      <line x1="696" y1="108" x2="696" y2="395" stroke="#dc2626" stroke-width="3" marker-end="url(#arrDark)"/>
      <g font-size="11" fill="#334155">
        <text x="708" y="132">• 碳数 C atoms ↑</text>
        <text x="708" y="168">• 范德华力 ↑</text>
        <text x="708" y="204">• 沸点 b.p. ↑</text>
        <text x="708" y="240">• 黏度 viscosity ↑</text>
        <text x="708" y="276">• 颜色加深 darker</text>
        <text x="708" y="312" fill="#0369a1">• 挥发性 volatility ↓</text>
        <text x="708" y="348" fill="#0369a1">• 易燃性 flammability ↓</text>
        <text x="708" y="384" fill="#b91c1c">• 黑烟 sootiness ↑</text>
      </g>
    </svg>
  `,

  'svg-lab-fractional-distillation': `
    <svg viewBox="0 0 780 340" class="chem-svg" role="img" aria-label="Laboratory Fractional Distillation of Crude Oil">
      <rect x="8" y="8" width="764" height="324" rx="14" fill="#f8fafc" stroke="#cbd5e1"/>
      <text x="24" y="36" font-size="16" font-weight="700" fill="#0f172a">实验室分馏石油装置 Fractional Distillation of Petroleum in School Lab</text>

      <!-- Boiling tube / Flask tilted or vertical -->
      <rect x="140" y="110" width="56" height="145" rx="26" fill="#fef3c7" stroke="#334155" stroke-width="2.5"/>
      <!-- Mineral wool soaked with crude oil -->
      <rect x="148" y="212" width="40" height="32" rx="10" fill="#92400e" opacity="0.8"/>
      <circle cx="158" cy="238" r="3" fill="#fde68a"/>
      <circle cx="176" cy="236" r="3" fill="#fde68a"/>
      <text x="168" y="280" text-anchor="middle" font-size="12" font-weight="700" fill="#b91c1c">🔥 Heat 加热</text>
      <text x="82" y="226" text-anchor="middle" font-size="11" fill="#78350f">Mineral wool 矿渣棉</text>
      <text x="82" y="241" text-anchor="middle" font-size="11" fill="#78350f">+ petroleum 石油</text>

      <!-- Thermometer -->
      <rect x="163" y="48" width="10" height="105" rx="4" fill="#e2e8f0" stroke="#475569" stroke-width="1.5"/>
      <circle cx="168" cy="154" r="7" fill="#dc2626"/>
      <line x1="168" y1="88" x2="168" y2="150" stroke="#dc2626" stroke-width="2.5"/>
      <text x="275" y="68" font-size="12" font-weight="700" fill="#dc2626">★ 温度计水银球对准支管口！</text>
      <text x="275" y="85" font-size="11" fill="#475569">Thermometer bulb at side-arm level (测蒸气沸程)</text>
      <line x1="268" y1="74" x2="178" y2="148" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="4,3"/>

      <!-- Side arm / Delivery tube to receiver in cold water -->
      <path d="M196,152 L390,152 L465,235" fill="none" stroke="#334155" stroke-width="5"/>
      <path d="M196,152 L390,152 L465,235" fill="none" stroke="#f8fafc" stroke-width="2"/>

      <!-- Cold water beaker & Receiver test tube -->
      <rect x="420" y="195" width="120" height="105" rx="6" fill="#dbeafe" stroke="#2563eb" stroke-width="2"/>
      <rect x="458" y="172" width="36" height="110" rx="14" fill="#ffffff" stroke="#334155" stroke-width="2"/>
      <path d="M460,255 Q476,262 492,255 L492,272 Q476,282 460,272 Z" fill="#fcd34d"/>
      <text x="480" y="318" text-anchor="middle" font-size="12" font-weight="600" fill="#1d4ed8">Cold water 冷水浴冷凝馏分 (Fraction)</text>

      <!-- Exam Checklist Box -->
      <rect x="565" y="102" width="192" height="196" rx="10" fill="#ffffff" stroke="#94a3b8"/>
      <text x="578" y="126" font-size="12" font-weight="700" fill="#0f172a">DSE 实验必考细节：</text>
      <text x="578" y="150" font-size="11" fill="#334155">1. 收集 4 个不同沸程馏分：</text>
      <text x="586" y="167" font-size="11" fill="#0369a1">Room temp–100°C, 100–150°C,</text>
      <text x="586" y="183" font-size="11" fill="#0369a1">150–200°C, 200–250°C</text>
      <text x="578" y="208" font-size="11" fill="#334155">2. 若直接加热液体原油，需加</text>
      <text x="586" y="224" font-size="11" font-weight="700" fill="#b45309">anti-bumping granules 防暴沸颗粒</text>
      <text x="578" y="249" font-size="11" fill="#334155">3. 石油极易燃，切勿用猛火直烧</text>
      <text x="586" y="265" font-size="11" fill="#b91c1c">收集管口，佩戴护目镜 safety</text>
      <text x="586" y="281" font-size="11" fill="#b91c1c">glasses。</text>
    </svg>
  `,

  'svg-formula-representations': `
    <svg viewBox="0 0 820 265" class="chem-svg" role="img" aria-label="Four Types of Chemical Formulae in Mastering Chemistry">
      <rect x="8" y="8" width="804" height="249" rx="14" fill="#f8fafc" stroke="#cbd5e1"/>
      <text x="24" y="35" font-size="15" font-weight="700" fill="#0f172a">精工版课本四大化学式写法对比（以 Butan-1-ol 1-丁醇 为例）</text>

      <!-- Card 1: Molecular -->
      <rect x="22" y="54" width="182" height="186" rx="10" fill="#ffffff" stroke="#94a3b8"/>
      <text x="113" y="78" text-anchor="middle" font-size="12" font-weight="700" fill="#475569">Molecular formula</text>
      <text x="113" y="95" text-anchor="middle" font-size="11" fill="#64748b">分子式（只看原子总数）</text>
      <text x="113" y="152" text-anchor="middle" font-size="22" font-weight="700" fill="#0f172a">C₄H₁₀O</text>
      <text x="113" y="215" text-anchor="middle" font-size="11" fill="#dc2626">⚠️ 无法区分异构体！</text>

      <!-- Card 2: Structural -->
      <rect x="216" y="54" width="218" height="186" rx="10" fill="#ffffff" stroke="#0284c7" stroke-width="2"/>
      <text x="325" y="78" text-anchor="middle" font-size="12" font-weight="700" fill="#0369a1">Structural formula</text>
      <text x="325" y="95" text-anchor="middle" font-size="11" fill="#64748b">结构式（画出原子间连接单双键）</text>
      <g font-family="Menlo, monospace" font-size="13" font-weight="600" fill="#0f172a" text-anchor="middle">
        <text x="325" y="124">H   H   H   H     </text>
        <text x="325" y="141">|   |   |   |     </text>
        <text x="325" y="158">H—C—C—C—C—O—H</text>
        <text x="325" y="175">|   |   |   |     </text>
        <text x="325" y="192">H   H   H   H     </text>
      </g>
      <text x="325" y="222" text-anchor="middle" font-size="11" fill="#0369a1">★ DSE 画结构式最稳妥写法</text>

      <!-- Card 3: Condensed -->
      <rect x="446" y="54" width="184" height="186" rx="10" fill="#ffffff" stroke="#0d9488" stroke-width="2"/>
      <text x="538" y="78" text-anchor="middle" font-size="12" font-weight="700" fill="#0f766e">Condensed structural</text>
      <text x="538" y="95" text-anchor="middle" font-size="11" fill="#64748b">简明结构式（省去单键横竖线）</text>
      <text x="538" y="145" text-anchor="middle" font-size="15" font-weight="700" fill="#0f172a">CH₃CH₂CH₂CH₂OH</text>
      <text x="538" y="172" text-anchor="middle" font-size="13" fill="#475569">或 CH₃(CH₂)₃OH</text>
      <text x="538" y="222" text-anchor="middle" font-size="11" fill="#0f766e">注意支链须括在括号内</text>

      <!-- Card 4: Skeletal -->
      <rect x="642" y="54" width="156" height="186" rx="10" fill="#ffffff" stroke="#7c3aed" stroke-width="2"/>
      <text x="720" y="78" text-anchor="middle" font-size="12" font-weight="700" fill="#6d28d9">Skeletal formula</text>
      <text x="720" y="95" text-anchor="middle" font-size="11" fill="#64748b">骨架式（拐点端点=C）</text>
      <polyline points="665,165 690,142 715,165 740,142 762,158" fill="none" stroke="#1e293b" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round"/>
      <text x="774" y="167" font-size="14" font-weight="700" fill="#dc2626">OH</text>
      <text x="720" y="210" text-anchor="middle" font-size="10.5" fill="#6d28d9">省略 C 及连在 C 上的 H；</text>
      <text x="720" y="225" text-anchor="middle" font-size="10.5" fill="#dc2626">但官能团上的 H (如 -OH) 必写！</text>
    </svg>
  `,

  'svg-electron-diagrams-alkanes-alkenes': `
    <svg viewBox="0 0 800 300" class="chem-svg" role="img" aria-label="Dot and Cross Electron Diagrams of Methane and Ethene">
      <rect x="8" y="8" width="784" height="284" rx="14" fill="#f0fdf4" stroke="#bbf7d0"/>
      <text x="24" y="36" font-size="15" font-weight="700" fill="#14532d">精工版标准电子图 Electron Diagrams (Outermost Shells Only 只画最外层电子 + 重叠圆圈)</text>

      <!-- Methane CH4 -->
      <rect x="24" y="52" width="340" height="224" rx="12" fill="#ffffff" stroke="#86efac"/>
      <text x="194" y="76" text-anchor="middle" font-size="14" font-weight="700" fill="#166534">Methane 甲烷 (CH₄) — 4 个 C—H 单键</text>
      <!-- C outer shell -->
      <circle cx="194" cy="168" r="46" fill="none" stroke="#1e293b" stroke-width="1.8"/>
      <!-- 4 H outer shells overlapping -->
      <circle cx="194" cy="106" r="24" fill="none" stroke="#0284c7" stroke-width="1.6"/>
      <circle cx="194" cy="230" r="24" fill="none" stroke="#0284c7" stroke-width="1.6"/>
      <circle cx="132" cy="168" r="24" fill="none" stroke="#0284c7" stroke-width="1.6"/>
      <circle cx="256" cy="168" r="24" fill="none" stroke="#0284c7" stroke-width="1.6"/>
      <text x="194" y="173" text-anchor="middle" font-size="15" font-weight="700" fill="#1e293b">C</text>
      <text x="194" y="102" text-anchor="middle" font-size="13" font-weight="700" fill="#0369a1">H</text>
      <text x="194" y="244" text-anchor="middle" font-size="13" font-weight="700" fill="#0369a1">H</text>
      <text x="122" y="173" text-anchor="middle" font-size="13" font-weight="700" fill="#0369a1">H</text>
      <text x="266" y="173" text-anchor="middle" font-size="13" font-weight="700" fill="#0369a1">H</text>
      <!-- Shared pairs: dot (C) and cross (H) -->
      <circle cx="188" cy="123" r="3.2" fill="#1e293b"/><text x="200" y="127" text-anchor="middle" font-size="12" font-weight="700" fill="#dc2626">×</text>
      <circle cx="188" cy="213" r="3.2" fill="#1e293b"/><text x="200" y="217" text-anchor="middle" font-size="12" font-weight="700" fill="#dc2626">×</text>
      <circle cx="149" cy="162" r="3.2" fill="#1e293b"/><text x="149" y="178" text-anchor="middle" font-size="12" font-weight="700" fill="#dc2626">×</text>
      <circle cx="239" cy="162" r="3.2" fill="#1e293b"/><text x="239" y="178" text-anchor="middle" font-size="12" font-weight="700" fill="#dc2626">×</text>

      <!-- Ethene C2H4 -->
      <rect x="384" y="52" width="392" height="224" rx="12" fill="#ffffff" stroke="#86efac"/>
      <text x="580" y="76" text-anchor="middle" font-size="14" font-weight="700" fill="#166534">Ethene 乙烯 (C₂H₄) — C=C 双键共用 2 对电子 (4e⁻)</text>
      <!-- Two overlapping C outer shells -->
      <circle cx="546" cy="168" r="48" fill="none" stroke="#1e293b" stroke-width="1.8"/>
      <circle cx="614" cy="168" r="48" fill="none" stroke="#1e293b" stroke-width="1.8"/>
      <text x="528" y="173" text-anchor="middle" font-size="15" font-weight="700" fill="#1e293b">C</text>
      <text x="632" y="173" text-anchor="middle" font-size="15" font-weight="700" fill="#1e293b">C</text>
      <!-- 4 H shells -->
      <circle cx="496" cy="124" r="22" fill="none" stroke="#0284c7" stroke-width="1.6"/>
      <circle cx="496" cy="212" r="22" fill="none" stroke="#0284c7" stroke-width="1.6"/>
      <circle cx="664" cy="124" r="22" fill="none" stroke="#0284c7" stroke-width="1.6"/>
      <circle cx="664" cy="212" r="22" fill="none" stroke="#0284c7" stroke-width="1.6"/>
      <text x="486" y="120" text-anchor="middle" font-size="13" font-weight="700" fill="#0369a1">H</text>
      <text x="486" y="224" text-anchor="middle" font-size="13" font-weight="700" fill="#0369a1">H</text>
      <text x="674" y="120" text-anchor="middle" font-size="13" font-weight="700" fill="#0369a1">H</text>
      <text x="674" y="224" text-anchor="middle" font-size="13" font-weight="700" fill="#0369a1">H</text>
      <!-- Center C=C 4 electrons: 2 dots from left C, 2 dots/crosses -->
      <circle cx="574" cy="156" r="3.2" fill="#1e293b"/>
      <circle cx="586" cy="156" r="3.2" fill="#1e293b"/>
      <circle cx="574" cy="180" r="3.2" fill="#1e293b"/>
      <circle cx="586" cy="180" r="3.2" fill="#1e293b"/>
      <!-- C-H shared pairs -->
      <circle cx="508" cy="139" r="3.2" fill="#1e293b"/><text x="516" y="135" font-size="12" font-weight="700" fill="#dc2626">×</text>
      <circle cx="508" cy="197" r="3.2" fill="#1e293b"/><text x="516" y="209" font-size="12" font-weight="700" fill="#dc2626">×</text>
      <circle cx="652" cy="139" r="3.2" fill="#1e293b"/><text x="641" y="135" font-size="12" font-weight="700" fill="#dc2626">×</text>
      <circle cx="652" cy="197" r="3.2" fill="#1e293b"/><text x="641" y="209" font-size="12" font-weight="700" fill="#dc2626">×</text>
      <text x="580" y="258" text-anchor="middle" font-size="11.5" fill="#15803d">谨记：绝不画碳的内层 2 个电子圈 (show outermost shells ONLY)</text>
    </svg>
  `,

  'svg-free-radical-substitution': `
    <svg viewBox="0 0 820 320" class="chem-svg" role="img" aria-label="Mastering Chemistry Initiation Step Electron Diagram for Chlorine">
      <rect x="8" y="8" width="804" height="304" rx="14" fill="#fefce8" stroke="#fde047"/>
      <text x="24" y="36" font-size="15" font-weight="700" fill="#854d0e">精工版必考电子图：自由基取代反应 Initiation（链引发）阶段 — Cl₂ 均裂</text>
      <text x="24" y="57" font-size="12" fill="#713f12">规范要点：① 箭头上方写 UV light（严禁写 hν，严禁画大学鱼钩箭头）；② 两个 Cl 原子分别用 • 和 × 区分，拆开用 + 号相加！</text>

      <!-- Left: Cl2 molecule overlapping circles -->
      <g transform="translate(30, 80)">
        <circle cx="95" cy="95" r="54" fill="none" stroke="#1e293b" stroke-width="2"/>
        <circle cx="175" cy="95" r="54" fill="none" stroke="#0369a1" stroke-width="2"/>
        <text x="82" y="101" text-anchor="middle" font-size="18" font-weight="700" fill="#1e293b">Cl</text>
        <text x="188" y="101" text-anchor="middle" font-size="18" font-weight="700" fill="#0369a1">Cl</text>
        <!-- Left Cl 6 non-bonding dots -->
        <circle cx="85" cy="52" r="3.5" fill="#1e293b"/><circle cx="100" cy="52" r="3.5" fill="#1e293b"/>
        <circle cx="52" cy="88" r="3.5" fill="#1e293b"/><circle cx="52" cy="103" r="3.5" fill="#1e293b"/>
        <circle cx="85" cy="138" r="3.5" fill="#1e293b"/><circle cx="100" cy="138" r="3.5" fill="#1e293b"/>
        <!-- Shared pair: 1 dot + 1 cross -->
        <circle cx="135" cy="87" r="3.8" fill="#1e293b"/>
        <text x="135" y="111" text-anchor="middle" font-size="15" font-weight="700" fill="#dc2626">×</text>
        <!-- Right Cl 6 non-bonding crosses -->
        <text x="168" y="57" text-anchor="middle" font-size="14" font-weight="700" fill="#dc2626">×</text>
        <text x="184" y="57" text-anchor="middle" font-size="14" font-weight="700" fill="#dc2626">×</text>
        <text x="216" y="93" text-anchor="middle" font-size="14" font-weight="700" fill="#dc2626">×</text>
        <text x="216" y="109" text-anchor="middle" font-size="14" font-weight="700" fill="#dc2626">×</text>
        <text x="168" y="143" text-anchor="middle" font-size="14" font-weight="700" fill="#dc2626">×</text>
        <text x="184" y="143" text-anchor="middle" font-size="14" font-weight="700" fill="#dc2626">×</text>
        <text x="135" y="178" text-anchor="middle" font-size="12.5" font-weight="600" fill="#334155">Chlorine molecule 氯分子 (Cl₂)</text>
      </g>

      <!-- Arrow with UV light -->
      <text x="342" y="160" text-anchor="middle" font-size="14" font-weight="700" fill="#b45309">UV light</text>
      <line x1="292" y1="175" x2="392" y2="175" stroke="#1e293b" stroke-width="2.5"/>
      <polygon points="392,175 382,169 382,181" fill="#1e293b"/>
      <text x="342" y="196" text-anchor="middle" font-size="11" fill="#64748b">homolytic fission</text>

      <!-- Right: First Cl• radical (7 dots) + Second Cl× radical (7 crosses) -->
      <g transform="translate(415, 80)">
        <circle cx="72" cy="95" r="52" fill="none" stroke="#1e293b" stroke-width="2"/>
        <text x="72" y="101" text-anchor="middle" font-size="18" font-weight="700" fill="#1e293b">Cl</text>
        <circle cx="64" cy="53" r="3.5" fill="#1e293b"/><circle cx="80" cy="53" r="3.5" fill="#1e293b"/>
        <circle cx="30" cy="88" r="3.5" fill="#1e293b"/><circle cx="30" cy="103" r="3.5" fill="#1e293b"/>
        <circle cx="64" cy="137" r="3.5" fill="#1e293b"/><circle cx="80" cy="137" r="3.5" fill="#1e293b"/>
        <!-- Unpaired electron highlighted -->
        <circle cx="115" cy="95" r="4.5" fill="#dc2626"/>

        <text x="168" y="103" text-anchor="middle" font-size="24" font-weight="700" fill="#1e293b">+</text>

        <circle cx="264" cy="95" r="52" fill="none" stroke="#0369a1" stroke-width="2"/>
        <text x="264" y="101" text-anchor="middle" font-size="18" font-weight="700" fill="#0369a1">Cl</text>
        <text x="256" y="57" text-anchor="middle" font-size="14" font-weight="700" fill="#dc2626">×</text>
        <text x="272" y="57" text-anchor="middle" font-size="14" font-weight="700" fill="#dc2626">×</text>
        <text x="306" y="93" text-anchor="middle" font-size="14" font-weight="700" fill="#dc2626">×</text>
        <text x="306" y="109" text-anchor="middle" font-size="14" font-weight="700" fill="#dc2626">×</text>
        <text x="256" y="142" text-anchor="middle" font-size="14" font-weight="700" fill="#dc2626">×</text>
        <text x="272" y="142" text-anchor="middle" font-size="14" font-weight="700" fill="#dc2626">×</text>
        <!-- Unpaired cross -->
        <text x="221" y="101" text-anchor="middle" font-size="16" font-weight="700" fill="#dc2626">×</text>

        <text x="168" y="178" text-anchor="middle" font-size="12.5" font-weight="700" fill="#b91c1c">Two chlorine radicals 两个氯自由基 (Cl• + Cl•，各含 1 个未成对电子 unpaired electron)</text>
      </g>
    </svg>
  `,

  'svg-cracking-paraffin': `
    <svg viewBox="0 0 820 340" class="chem-svg" role="img" aria-label="Laboratory Cracking of Medicinal Paraffin">
      <rect x="8" y="8" width="804" height="324" rx="14" fill="#f8fafc" stroke="#cbd5e1"/>
      <text x="24" y="36" font-size="15" font-weight="700" fill="#0f172a">实验室裂化药用石蜡油装置 Cracking of Medicinal Paraffin in the Laboratory</text>

      <!-- Horizontal Boiling Tube -->
      <rect x="55" y="108" width="275" height="46" rx="18" fill="#ffffff" stroke="#334155" stroke-width="2.5"/>
      <!-- Mineral wool soaked with medicinal paraffin at closed end -->
      <rect x="64" y="115" width="56" height="32" rx="12" fill="#fde68a" stroke="#d97706"/>
      <text x="92" y="95" text-anchor="middle" font-size="11.5" font-weight="600" fill="#92400e">Mineral wool 矿渣棉</text>
      <text x="92" y="79" text-anchor="middle" font-size="11" fill="#92400e">+ medicinal paraffin 石蜡油</text>

      <!-- Broken porous pot / Al2O3 in middle -->
      <polygon points="185,146 198,124 214,146" fill="#cbd5e1" stroke="#475569"/>
      <polygon points="210,146 226,120 242,146" fill="#94a3b8" stroke="#475569"/>
      <polygon points="236,146 250,126 265,146" fill="#cbd5e1" stroke="#475569"/>
      <text x="225" y="92" text-anchor="middle" font-size="11.5" font-weight="700" fill="#1e293b">Broken porous pot 碎素瓷片</text>
      <text x="225" y="76" text-anchor="middle" font-size="11" fill="#475569">(或 Al₂O₃ 氧化铝催化剂 catalyst)</text>

      <!-- Strong heat under catalyst -->
      <path d="M210,192 Q225,156 240,192 Z" fill="#ef4444"/>
      <path d="M217,192 Q225,168 233,192 Z" fill="#facc15"/>
      <rect x="218" y="192" width="14" height="52" fill="#64748b"/>
      <text x="225" y="262" text-anchor="middle" font-size="12" font-weight="700" fill="#dc2626">🔥 Strong heat 强热催化剂</text>
      <text x="225" y="278" text-anchor="middle" font-size="10.5" fill="#64748b">(间歇轻热石蜡油使其气化越过热瓷片)</text>

      <!-- Stopper & Delivery Tube -->
      <rect x="322" y="114" width="16" height="34" fill="#475569"/>
      <path d="M338,131 L435,131 L485,255 L535,255" fill="none" stroke="#334155" stroke-width="5"/>
      <path d="M338,131 L435,131 L485,255 L535,255" fill="none" stroke="#ffffff" stroke-width="2"/>

      <!-- Water Trough & Inverted Test Tube -->
      <rect x="445" y="195" width="165" height="92" rx="6" fill="#dbeafe" stroke="#2563eb" stroke-width="2"/>
      <rect x="515" y="88" width="44" height="172" rx="18" fill="#e0f2fe" stroke="#1e293b" stroke-width="2"/>
      <rect x="517" y="90" width="40" height="82" rx="16" fill="#ffffff"/>
      <circle cx="537" cy="238" r="4" fill="#ffffff" stroke="#0284c7"/>
      <circle cx="534" cy="212" r="5" fill="#ffffff" stroke="#0284c7"/>
      <circle cx="540" cy="188" r="4" fill="#ffffff" stroke="#0284c7"/>
      <text x="537" y="128" text-anchor="middle" font-size="11.5" font-weight="700" fill="#0f766e">Gaseous</text>
      <text x="537" y="144" text-anchor="middle" font-size="11.5" font-weight="700" fill="#0f766e">alkenes</text>
      <text x="537" y="160" text-anchor="middle" font-size="10.5" fill="#0f766e">(如 ethene)</text>
      <text x="528" y="306" text-anchor="middle" font-size="11.5" fill="#1d4ed8">Water trough 水槽（排水法收集）</text>

      <!-- Critical Exam Warnings -->
      <rect x="625" y="64" width="174" height="238" rx="10" fill="#fff1f2" stroke="#fda4af" stroke-width="1.8"/>
      <text x="637" y="88" font-size="12.5" font-weight="700" fill="#be123c">⚠️ DSE 三大高频必考题：</text>
      <text x="637" y="114" font-size="11" font-weight="700" fill="#881337">1. 为什么弃去第一管气体？</text>
      <text x="637" y="130" font-size="10.5" fill="#334155">主要是受热膨胀排出的空气</text>
      <text x="637" y="145" font-size="10.5" fill="#334155">(mainly displaced air)。</text>
      <text x="637" y="172" font-size="11" font-weight="700" fill="#881337">2. 停火前必做什么安全操作？</text>
      <text x="637" y="188" font-size="10.5" fill="#be123c" font-weight="600">Remove delivery tube from</text>
      <text x="637" y="203" font-size="10.5" fill="#be123c" font-weight="600">water BEFORE stopping heat!</text>
      <text x="637" y="219" font-size="10.5" fill="#334155">防止冷水倒吸炸裂热试管</text>
      <text x="637" y="234" font-size="10.5" fill="#334155">(prevent sucking back)。</text>
      <text x="637" y="260" font-size="11" font-weight="700" fill="#881337">3. 为什么气体能排水收集？</text>
      <text x="637" y="276" font-size="10.5" fill="#334155">Ethene 不溶于水且不与水反应。</text>
    </svg>
  `,

  'svg-addition-polymerization': `
    <svg viewBox="0 0 820 270" class="chem-svg" role="img" aria-label="Addition Polymerization and Repeating Unit">
      <rect x="8" y="8" width="804" height="254" rx="14" fill="#f5f3ff" stroke="#ddd6fe"/>
      <text x="24" y="36" font-size="15" font-weight="700" fill="#4c1d95">加成聚合“H 字折翼法”：从单体 Monomer 准确写出重复单位 Repeating Unit（以 PVC 为例）</text>

      <!-- Monomer -->
      <rect x="24" y="58" width="220" height="184" rx="10" fill="#ffffff" stroke="#c4b5fd"/>
      <text x="134" y="82" text-anchor="middle" font-size="13" font-weight="700" fill="#5b21b6">① 把单体排成标准 H 字形</text>
      <g font-family="Menlo, monospace" font-size="16" font-weight="700" fill="#0f172a" text-anchor="middle">
        <text x="134" y="122">H     H</text>
        <text x="134" y="144">|     |</text>
        <text x="134" y="166">n  C == C</text>
        <text x="134" y="188">|     |</text>
        <text x="134" y="210">H     Cl</text>
      </g>
      <text x="134" y="232" text-anchor="middle" font-size="11" fill="#64748b">chloroethene 氯乙烯</text>

      <!-- Arrow -->
      <text x="292" y="142" text-anchor="middle" font-size="12" font-weight="700" fill="#6d28d9">C=C 变 C—C</text>
      <line x1="254" y1="152" x2="330" y2="152" stroke="#5b21b6" stroke-width="2.5"/>
      <polygon points="330,152 320,146 320,158" fill="#5b21b6"/>
      <text x="292" y="170" text-anchor="middle" font-size="11" fill="#64748b">向左右伸手牵连</text>

      <!-- Polymer equation form -->
      <rect x="342" y="58" width="225" height="184" rx="10" fill="#ffffff" stroke="#10b981" stroke-width="2"/>
      <text x="454" y="82" text-anchor="middle" font-size="13" font-weight="700" fill="#047857">② 聚合物结构（带下标 n）</text>
      <g font-family="Menlo, monospace" font-size="16" font-weight="700" fill="#0f172a" text-anchor="middle">
        <text x="454" y="122">   H     H   </text>
        <text x="454" y="144">   |     |   </text>
        <text x="454" y="166">—[ C — C ]—</text>
        <text x="454" y="188">   |     |   </text>
        <text x="454" y="210">   H     Cl  </text>
      </g>
      <text x="530" y="196" font-size="15" font-weight="700" fill="#047857">n</text>
      <text x="454" y="232" text-anchor="middle" font-size="11" fill="#047857">poly(chloroethene) / PVC</text>

      <!-- Repeating Unit ONLY -->
      <rect x="582" y="58" width="214" height="184" rx="10" fill="#fff1f2" stroke="#f43f5e" stroke-width="2"/>
      <text x="689" y="82" text-anchor="middle" font-size="13" font-weight="700" fill="#be123c">③ 单独写 Repeating Unit！</text>
      <g font-family="Menlo, monospace" font-size="16" font-weight="700" fill="#0f172a" text-anchor="middle">
        <text x="689" y="120">  H     H  </text>
        <text x="689" y="142">  |     |  </text>
        <text x="689" y="164">— C — C —</text>
        <text x="689" y="186">  |     |  </text>
        <text x="689" y="208">  H     Cl </text>
      </g>
      <text x="689" y="226" text-anchor="middle" font-size="10.5" font-weight="700" fill="#be123c">★ 两端延伸键必画，且绝不可写 n！</text>
    </svg>
  `,

  'svg-hydrogen-bonding-bp': `
    <svg viewBox="0 0 820 285" class="chem-svg" role="img" aria-label="Hydrogen Bonding in Alcohols and Carboxylic Acid Dimers">
      <rect x="8" y="8" width="804" height="269" rx="14" fill="#eff6ff" stroke="#bfdbfe"/>
      <text x="24" y="36" font-size="15" font-weight="700" fill="#1e3a8a">Unit 29 沸点与水溶性核心微观机制：氢键 Hydrogen Bonding vs 范德华力 van der Waals' forces</text>

      <!-- Left: Alcohol H-bond -->
      <rect x="24" y="54" width="372" height="206" rx="10" fill="#ffffff" stroke="#93c5fd"/>
      <text x="210" y="78" text-anchor="middle" font-size="13" font-weight="700" fill="#1d4ed8">醇分子间及与水分子间的氢键 Hydrogen bond</text>
      <text x="95" y="142" font-size="16" font-weight="700" fill="#0f172a">R — O<tspan font-size="11" dy="-7" fill="#2563eb">δ−</tspan></text>
      <text x="155" y="142" font-size="16" font-weight="700" fill="#dc2626">— H<tspan font-size="11" dy="-7">δ+</tspan></text>
      <line x1="204" y1="137" x2="256" y2="137" stroke="#dc2626" stroke-width="2.5" stroke-dasharray="5,4"/>
      <text x="230" y="125" text-anchor="middle" font-size="11" font-weight="700" fill="#dc2626">hydrogen bond</text>
      <text x="264" y="142" font-size="16" font-weight="700" fill="#2563eb">:O<tspan font-size="11" dy="-7">δ−</tspan><tspan dy="7" fill="#0f172a">— H</tspan></text>
      <text x="280" y="168" font-size="14" font-weight="700" fill="#0f172a">|</text>
      <text x="276" y="188" font-size="15" font-weight="700" fill="#0f172a">H (或 R')</text>
      <text x="210" y="226" text-anchor="middle" font-size="11.5" fill="#334155">短链醇（C₁–C₃）与水任意比例互溶 miscible；</text>
      <text x="210" y="244" text-anchor="middle" font-size="11.5" fill="#475569">随碳链增长，非极性烃基阻碍水合 → 水溶性下降。</text>

      <!-- Right: Carboxylic acid dimer -->
      <rect x="414" y="54" width="382" height="206" rx="10" fill="#ffffff" stroke="#fda4af"/>
      <text x="605" y="78" text-anchor="middle" font-size="13" font-weight="700" fill="#be123c">为什么同碳数羧酸 Carboxylic acid 沸点比醇更高？</text>
      <g font-family="Menlo, monospace" font-size="14" font-weight="700" fill="#0f172a">
        <text x="458" y="128">      O<tspan fill="#2563eb">δ−</tspan> ······· <tspan fill="#dc2626">Hδ+</tspan>—O</text>
        <text x="458" y="150">     //                \</text>
        <text x="458" y="170">R — C                   C — R</text>
        <text x="458" y="190">     \                //</text>
        <text x="458" y="212">      O—<tspan fill="#dc2626">Hδ+</tspan> ······· <tspan fill="#2563eb">Oδ−</tspan></text>
      </g>
      <text x="605" y="236" text-anchor="middle" font-size="11.5" font-weight="600" fill="#be123c">形成更广泛的氢键（每对分子形成 2 条氢键构成二聚体 dimer）！</text>
      <text x="605" y="252" text-anchor="middle" font-size="11" fill="#475569">沸点铁律（同近相对分子质量）：Amide &gt; Acid &gt; Alcohol &gt; Ketone/Aldehyde/Ester &gt; Alkane</text>
    </svg>
  `,

  'svg-cis-trans-isomers': `
    <svg viewBox="0 0 820 280" class="chem-svg" role="img" aria-label="Cis-Trans Isomerism Polarity and Packing">
      <rect x="8" y="8" width="804" height="264" rx="14" fill="#ecfeff" stroke="#a5f3fc"/>
      <text x="24" y="36" font-size="15" font-weight="700" fill="#155e75">Unit 30 顺反异构 Cis-trans Isomerism 物理性质经典必考题（以 1,2-dichloroethene 为例）</text>

      <!-- Cis isomer -->
      <rect x="24" y="54" width="374" height="202" rx="10" fill="#ffffff" stroke="#06b6d4" stroke-width="2"/>
      <text x="211" y="78" text-anchor="middle" font-size="13.5" font-weight="700" fill="#0e7490">cis-1,2-dichloroethene 顺-1,2-二氯乙烯</text>
      <g font-family="Menlo, monospace" font-size="15" font-weight="700" fill="#0f172a" text-anchor="middle">
        <text x="211" y="116" fill="#dc2626">Cl        Cl</text>
        <text x="211" y="136"> \      / </text>
        <text x="211" y="154">  C == C  </text>
        <text x="211" y="172"> /      \ </text>
        <text x="211" y="192">H          H</text>
      </g>
      <text x="211" y="218" text-anchor="middle" font-size="11.5" font-weight="700" fill="#0369a1">• 极性键偶极不抵消 → Polar molecule 极性分子 → 沸点较高 (60°C)！</text>
      <text x="211" y="238" text-anchor="middle" font-size="11" fill="#475569">• U 形对称性较差，固体晶格堆积松散 → 熔点较低 (−80°C)</text>

      <!-- Trans isomer -->
      <rect x="418" y="54" width="378" height="202" rx="10" fill="#ffffff" stroke="#0d9488" stroke-width="2"/>
      <text x="607" y="78" text-anchor="middle" font-size="13.5" font-weight="700" fill="#0f766e">trans-1,2-dichloroethene 反-1,2-二氯乙烯</text>
      <g font-family="Menlo, monospace" font-size="15" font-weight="700" fill="#0f172a" text-anchor="middle">
        <text x="607" y="116"><tspan fill="#dc2626">Cl</tspan>         H</text>
        <text x="607" y="136"> \      / </text>
        <text x="607" y="154">  C == C  </text>
        <text x="607" y="172"> /      \ </text>
        <text x="607" y="192">H         <tspan fill="#dc2626">Cl</tspan></text>
      </g>
      <text x="607" y="218" text-anchor="middle" font-size="11.5" font-weight="700" fill="#0f766e">• 两侧偶极完全抵消 → Non-polar 非极性分子 → 沸点较低 (48°C)</text>
      <text x="607" y="238" text-anchor="middle" font-size="11" font-weight="700" fill="#b45309">• 结构更对称 more symmetrical，固体堆积更紧密 pack more closely → 熔点较高 (−50°C)！</text>
    </svg>
  `,

  'svg-chiral-enantiomers-polarimeter': `
    <svg viewBox="0 0 820 305" class="chem-svg" role="img" aria-label="Chiral Carbon Enantiomers and Polarimeter">
      <rect x="8" y="8" width="804" height="289" rx="14" fill="#fdf4ff" stroke="#f5d0fe"/>
      <text x="24" y="36" font-size="15" font-weight="700" fill="#701a75">Unit 30 手性碳 Chiral Carbon (C*)、三维镜像对映异构体 Enantiomers 与旋光仪 Polarimeter</text>

      <!-- Left: 3D Enantiomers of Butan-2-ol -->
      <rect x="24" y="52" width="445" height="228" rx="10" fill="#ffffff" stroke="#e879f9"/>
      <text x="246" y="74" text-anchor="middle" font-size="13" font-weight="700" fill="#86198f">Butan-2-ol (2-丁醇) 的一对对映异构体（互为镜像且不可重叠）</text>

      <!-- Mirror plane -->
      <line x1="246" y1="88" x2="246" y2="245" stroke="#a21caf" stroke-width="2.5" stroke-dasharray="6,4"/>
      <text x="246" y="264" text-anchor="middle" font-size="11.5" font-weight="700" fill="#a21caf">Mirror plane 镜面（分子内部无对称面 no plane of symmetry）</text>

      <!-- Left molecule -->
      <text x="132" y="106" text-anchor="middle" font-size="14" font-weight="700" fill="#dc2626">OH</text>
      <line x1="132" y1="112" x2="132" y2="152" stroke="#1e293b" stroke-width="2.2"/>
      <text x="132" y="170" text-anchor="middle" font-size="15" font-weight="700" fill="#7e22ce">C*</text>
      <!-- in-plane left bond -->
      <line x1="118" y1="168" x2="75" y2="195" stroke="#1e293b" stroke-width="2.2"/>
      <text x="52" y="206" text-anchor="middle" font-size="13" font-weight="700" fill="#0f172a">C₂H₅</text>
      <!-- solid wedge towards viewer -->
      <polygon points="145,172 192,202 182,212" fill="#1e293b"/>
      <text x="206" y="218" text-anchor="middle" font-size="13" font-weight="700" fill="#0369a1">CH₃</text>
      <!-- dashed wedge away -->
      <line x1="146" y1="162" x2="192" y2="152" stroke="#64748b" stroke-width="4" stroke-dasharray="3,3"/>
      <text x="206" y="155" text-anchor="middle" font-size="13" font-weight="700" fill="#475569">H</text>

      <!-- Right mirror molecule -->
      <text x="360" y="106" text-anchor="middle" font-size="14" font-weight="700" fill="#dc2626">OH</text>
      <line x1="360" y1="112" x2="360" y2="152" stroke="#1e293b" stroke-width="2.2"/>
      <text x="360" y="170" text-anchor="middle" font-size="15" font-weight="700" fill="#7e22ce">C*</text>
      <!-- in-plane right bond -->
      <line x1="374" y1="168" x2="417" y2="195" stroke="#1e293b" stroke-width="2.2"/>
      <text x="440" y="206" text-anchor="middle" font-size="13" font-weight="700" fill="#0f172a">C₂H₅</text>
      <!-- solid wedge mirrored -->
      <polygon points="347,172 300,202 310,212" fill="#1e293b"/>
      <text x="286" y="218" text-anchor="middle" font-size="13" font-weight="700" fill="#0369a1">CH₃</text>
      <!-- dashed wedge mirrored -->
      <line x1="346" y1="162" x2="300" y2="152" stroke="#64748b" stroke-width="4" stroke-dasharray="3,3"/>
      <text x="286" y="155" text-anchor="middle" font-size="13" font-weight="700" fill="#475569">H</text>

      <!-- Right: Polarimeter & Optical Activity -->
      <rect x="484" y="52" width="312" height="228" rx="10" fill="#ffffff" stroke="#c084fc"/>
      <text x="640" y="74" text-anchor="middle" font-size="13" font-weight="700" fill="#6b21a8">如何区分一对对映异构体？测旋光性！</text>
      <circle cx="520" cy="138" r="16" fill="#fef08a" stroke="#eab308" stroke-width="2"/>
      <text x="520" y="172" text-anchor="middle" font-size="10" fill="#475569">Light 光源</text>
      <rect x="562" y="114" width="12" height="48" fill="#cbd5e1" stroke="#475569"/>
      <text x="568" y="106" text-anchor="middle" font-size="10" fill="#475569">Polarizer</text>
      <rect x="598" y="122" width="95" height="32" rx="6" fill="#e0e7ff" stroke="#4338ca" stroke-width="1.8"/>
      <text x="645" y="142" text-anchor="middle" font-size="10.5" font-weight="700" fill="#312e81">Sample tube</text>
      <!-- Rotated plane dial -->
      <circle cx="742" cy="138" r="28" fill="#faf5ff" stroke="#7e22ce" stroke-width="2"/>
      <line x1="742" y1="112" x2="742" y2="164" stroke="#94a3b8" stroke-dasharray="3,2"/>
      <line x1="724" y1="156" x2="760" y2="120" stroke="#dc2626" stroke-width="2.5"/>
      <text x="742" y="182" text-anchor="middle" font-size="10" font-weight="700" fill="#dc2626">+θ° / −θ°</text>
      <text x="640" y="210" text-anchor="middle" font-size="11" fill="#1e293b">Rotate plane of polarization of</text>
      <text x="640" y="226" text-anchor="middle" font-size="11" font-weight="700" fill="#7e22ce">plane-polarized light 平面偏振光</text>
      <text x="640" y="244" text-anchor="middle" font-size="11" fill="#334155">角度大小相等，方向相反（一顺时针、一逆时针）！</text>
      <text x="640" y="264" text-anchor="middle" font-size="10.5" fill="#dc2626">等量混合 = Racemic mixture 外消旋混合物（无旋光性）</text>
    </svg>
  `,

  'svg-reflux-vs-distillation': `
    <svg viewBox="0 0 820 355" class="chem-svg" role="img" aria-label="Heating under Reflux versus Distillation Comparison">
      <rect x="8" y="8" width="804" height="339" rx="14" fill="#fff7ed" stroke="#fed7aa"/>
      <text x="24" y="35" font-size="15" font-weight="700" fill="#9a3412">Unit 31 &amp; 32 王牌实验对比：回流加热 Heating under Reflux vs 蒸馏 Distillation（伯醇氧化分水岭）</text>

      <!-- LEFT: Heating under Reflux -->
      <rect x="22" y="52" width="380" height="278" rx="12" fill="#ffffff" stroke="#ea580c" stroke-width="2"/>
      <text x="212" y="76" text-anchor="middle" font-size="13.5" font-weight="700" fill="#c2410c">① Heating under Reflux 回流加热 → 得羧酸 Carboxylic Acid</text>
      <text x="155" y="102" text-anchor="middle" font-size="11.5" font-weight="700" fill="#dc2626">★ Top MUST be open! 顶部敞口（严禁加塞防爆炸）</text>
      <!-- Vertical condenser -->
      <rect x="136" y="112" width="38" height="106" rx="6" fill="#dbeafe" stroke="#2563eb" stroke-width="1.8"/>
      <rect x="148" y="106" width="14" height="122" fill="#ffffff" stroke="#334155" stroke-width="1.8"/>
      <!-- Water in/out -->
      <line x1="174" y1="202" x2="206" y2="202" stroke="#0284c7" stroke-width="2.5"/>
      <text x="248" y="206" font-size="11" font-weight="700" fill="#0369a1">← Water in 下口进水</text>
      <line x1="174" y1="126" x2="206" y2="126" stroke="#0284c7" stroke-width="2.5"/>
      <text x="252" y="130" font-size="11" fill="#0369a1">→ Water out 上口出水</text>
      <!-- Pear-shaped flask -->
      <circle cx="155" cy="256" r="32" fill="#fed7aa" stroke="#334155" stroke-width="2.2"/>
      <circle cx="147" cy="274" r="3" fill="#7c2d12"/><circle cx="163" cy="276" r="3" fill="#7c2d12"/>
      <text x="155" y="306" text-anchor="middle" font-size="11.5" font-weight="700" fill="#dc2626">🔥 Heat + anti-bumping granules</text>
      <text x="212" y="324" text-anchor="middle" font-size="11" fill="#334155">原理：蒸气不断冷凝流回瓶内充分反应：1° alcohol → aldehyde → acid</text>

      <!-- RIGHT: Distillation -->
      <rect x="418" y="52" width="380" height="278" rx="12" fill="#ffffff" stroke="#0284c7" stroke-width="2"/>
      <text x="608" y="76" text-anchor="middle" font-size="13.5" font-weight="700" fill="#0369a1">② Distillation 边反应边蒸馏 → 停在醛 Aldehyde！</text>
      <!-- Still head + thermometer -->
      <rect x="482" y="106" width="8" height="72" fill="#e2e8f0" stroke="#475569"/>
      <circle cx="486" cy="178" r="5" fill="#dc2626"/>
      <rect x="476" y="156" width="20" height="62" fill="#ffffff" stroke="#334155" stroke-width="1.8"/>
      <circle cx="486" cy="246" r="30" fill="#fde68a" stroke="#334155" stroke-width="2.2"/>
      <text x="486" y="294" text-anchor="middle" font-size="11.5" font-weight="700" fill="#dc2626">🔥 Heat (过量醇 + 酸化重铬酸钾)</text>
      <!-- Slanted condenser -->
      <g transform="translate(496, 174) rotate(24)">
        <rect x="18" y="-12" width="128" height="26" rx="5" fill="#dbeafe" stroke="#2563eb" stroke-width="1.6"/>
        <rect x="0" y="-4" width="166" height="10" fill="#ffffff" stroke="#334155" stroke-width="1.6"/>
      </g>
      <!-- Receiver -->
      <rect x="658" y="232" width="38" height="52" rx="8" fill="#dcfce7" stroke="#16a34a" stroke-width="2"/>
      <text x="677" y="262" text-anchor="middle" font-size="10.5" font-weight="700" fill="#15803d">Aldehyde</text>
      <text x="608" y="310" text-anchor="middle" font-size="11" font-weight="600" fill="#0369a1">原理：醛无分子间氢键、沸点最低，一生成立刻蒸出，</text>
      <text x="608" y="325" text-anchor="middle" font-size="11" fill="#334155">避免留在氧化剂中被进一步氧化成羧酸！</text>
    </svg>
  `,

  'svg-separating-funnel-purification': `
    <svg viewBox="0 0 820 290" class="chem-svg" role="img" aria-label="Liquid-Liquid Extraction and Organic Purification SOP">
      <rect x="8" y="8" width="804" height="274" rx="14" fill="#f0fdfa" stroke="#99f6e4"/>
      <text x="24" y="36" font-size="15" font-weight="700" fill="#115e59">Unit 32 有机液体产物分离提纯四步标准流程 Separation &amp; Purification of Liquid Product</text>

      <!-- Separating Funnel Illustration -->
      <rect x="24" y="54" width="250" height="212" rx="10" fill="#ffffff" stroke="#5eead4"/>
      <text x="149" y="76" text-anchor="middle" font-size="13" font-weight="700" fill="#0f766e">Separating funnel 分液漏斗</text>
      <rect x="139" y="86" width="20" height="12" fill="#475569"/>
      <polygon points="104,98 194,98 158,195 140,195" fill="#e0f2fe" stroke="#334155" stroke-width="2"/>
      <!-- Upper organic layer (e.g. ester) -->
      <polygon points="107,106 191,106 177,144 121,144" fill="#fef08a"/>
      <text x="149" y="129" text-anchor="middle" font-size="10.5" font-weight="700" fill="#854d0e">Organic layer</text>
      <text x="149" y="168" text-anchor="middle" font-size="10.5" font-weight="700" fill="#0369a1">Aqueous layer</text>
      <!-- Tap / Stopcock -->
      <rect x="134" y="200" width="30" height="8" rx="3" fill="#dc2626"/>
      <line x1="149" y1="195" x2="149" y2="235" stroke="#334155" stroke-width="4"/>
      <text x="149" y="254" text-anchor="middle" font-size="10.5" fill="#475569">注意：高密度卤代烷可能在底层！</text>

      <!-- 4 Steps Flow -->
      <g font-size="12" fill="#1e293b">
        <rect x="292" y="54" width="504" height="46" rx="8" fill="#ffffff" stroke="#cbd5e1"/>
        <text x="306" y="74" font-weight="700" fill="#0f766e">Step 1 · 粗蒸分离 Distillation of crude product</text>
        <text x="306" y="91" font-size="11" fill="#475569">将粗产物从非挥发性无机盐中蒸出（或直接倒入分液漏斗）。</text>

        <rect x="292" y="109" width="504" height="48" rx="8" fill="#ffffff" stroke="#cbd5e1"/>
        <text x="306" y="129" font-weight="700" fill="#0369a1">Step 2 · 碳酸钠洗涤除酸 Shake with Na₂CO₃(aq) in separating funnel</text>
        <text x="306" y="146" font-size="11" fill="#dc2626">除去残留酸催化剂/羧酸；必须定时打开活塞释放 CO₂ 气体 (open tap to release pressure)！</text>

        <rect x="292" y="166" width="504" height="46" rx="8" fill="#ffffff" stroke="#cbd5e1"/>
        <text x="306" y="186" font-weight="700" fill="#b45309">Step 3 · 无水干燥剂除水 Dry over anhydrous CaCl₂ / Na₂SO₄ / MgSO₄</text>
        <text x="306" y="203" font-size="11" fill="#475569">摇晃静置直至有机液体由浑浊变清澈 (from cloudy to clear)，过滤除去干燥剂固体。</text>

        <rect x="292" y="221" width="504" height="45" rx="8" fill="#ffffff" stroke="#cbd5e1"/>
        <text x="306" y="241" font-weight="700" fill="#6d28d9">Step 4 · 再蒸馏提纯 Redistillation (collect fraction at narrow b.p. range)</text>
        <text x="306" y="258" font-size="11" fill="#475569">收集目标物质标准沸点附近的窄沸程馏分，得到纯净干燥液体产物。</text>
      </g>
    </svg>
  `,

  'svg-detergent-cleansing': `
    <svg viewBox="0 0 820 310" class="chem-svg" role="img" aria-label="Structure of Soap and Soapless Detergent and Emulsifying Action">
      <rect x="8" y="8" width="804" height="294" rx="14" fill="#f0f9ff" stroke="#bae6fd"/>
      <text x="24" y="35" font-size="15" font-weight="700" fill="#0c4a6e">Unit 33 肥皂 Soap vs 无皂清洁剂 Soapless Detergent 结构与乳化去污四步机理 (Emulsifying Action)</text>

      <!-- Top: Tadpole Structure -->
      <rect x="24" y="50" width="772" height="86" rx="10" fill="#ffffff" stroke="#7dd3fc"/>
      <polyline points="48,94 74,78 100,98 126,78 152,98 178,78 204,98 230,78 256,94" fill="none" stroke="#d97706" stroke-width="3.5" stroke-linecap="round"/>
      <circle cx="276" cy="94" r="18" fill="#0284c7"/>
      <text x="276" y="99" text-anchor="middle" font-size="15" font-weight="700" fill="#ffffff">−</text>
      <text x="150" y="122" text-anchor="middle" font-size="11.5" font-weight="700" fill="#b45309">Hydrophobic hydrocarbon tail 疏水烃基尾巴 (溶于油 grease)</text>
      <text x="415" y="76" font-size="12" font-weight="700" fill="#0369a1">Hydrophilic anionic head 亲水阴离子头 (溶于水 water)：</text>
      <text x="415" y="98" font-size="12" fill="#1e293b">• <tspan font-weight="700">Soap 肥皂</tspan>：carboxylate group <tspan font-weight="700" fill="#be123c">—COO⁻</tspan> (遇硬水 Ca²⁺/Mg²⁺ 产生浮渣 scum！)</text>
      <text x="415" y="119" font-size="12" fill="#1e293b">• <tspan font-weight="700">Soapless detergent 无皂清洁剂</tspan>：sulphonate group <tspan font-weight="700" fill="#047857">—SO₃⁻</tspan> (硬水中仍起泡不结渣！)</text>

      <!-- Bottom: 4-step Emulsifying Action -->
      <g transform="translate(24, 150)">
        <rect x="0" y="0" width="182" height="136" rx="10" fill="#ffffff" stroke="#cbd5e1"/>
        <text x="91" y="22" text-anchor="middle" font-size="11.5" font-weight="700" fill="#0f172a">① 疏水尾插入油污</text>
        <line x1="18" y1="108" x2="164" y2="108" stroke="#64748b" stroke-width="3"/>
        <path d="M52,108 Q91,62 130,108 Z" fill="#facc15" stroke="#ca8a04"/>
        <line x1="72" y1="60" x2="80" y2="85" stroke="#d97706" stroke-width="2"/><circle cx="70" cy="56" r="5" fill="#0284c7"/>
        <line x1="91" y1="52" x2="91" y2="80" stroke="#d97706" stroke-width="2"/><circle cx="91" cy="48" r="5" fill="#0284c7"/>
        <line x1="110" y1="60" x2="102" y2="85" stroke="#d97706" stroke-width="2"/><circle cx="112" cy="56" r="5" fill="#0284c7"/>
        <text x="91" y="126" text-anchor="middle" font-size="10.5" fill="#475569">Tails dissolve in grease</text>

        <rect x="196" y="0" width="182" height="136" rx="10" fill="#ffffff" stroke="#cbd5e1"/>
        <text x="287" y="22" text-anchor="middle" font-size="11.5" font-weight="700" fill="#0f172a">② 亲水头拉扯油污脱离表面</text>
        <line x1="214" y1="108" x2="360" y2="108" stroke="#64748b" stroke-width="3"/>
        <circle cx="287" cy="78" r="22" fill="#facc15" stroke="#ca8a04"/>
        <circle cx="287" cy="48" r="5" fill="#0284c7"/><circle cx="258" cy="78" r="5" fill="#0284c7"/><circle cx="316" cy="78" r="5" fill="#0284c7"/>
        <text x="287" y="126" text-anchor="middle" font-size="10.5" fill="#475569">Lifted upon agitation 搅拌剥离</text>

        <rect x="392" y="0" width="182" height="136" rx="10" fill="#ffffff" stroke="#cbd5e1"/>
        <text x="483" y="22" text-anchor="middle" font-size="11.5" font-weight="700" fill="#0f172a">③ 碎裂成微小油滴 Emulsion</text>
        <circle cx="456" cy="76" r="14" fill="#facc15"/><circle cx="456" cy="56" r="4" fill="#0284c7"/><circle cx="436" cy="76" r="4" fill="#0284c7"/><circle cx="456" cy="96" r="4" fill="#0284c7"/><circle cx="476" cy="76" r="4" fill="#0284c7"/>
        <circle cx="514" cy="76" r="14" fill="#facc15"/><circle cx="514" cy="56" r="4" fill="#0284c7"/><circle cx="494" cy="76" r="4" fill="#0284c7"/><circle cx="514" cy="96" r="4" fill="#0284c7"/><circle cx="534" cy="76" r="4" fill="#0284c7"/>
        <text x="483" y="126" text-anchor="middle" font-size="10.5" fill="#475569">Tiny negatively charged droplets</text>

        <rect x="588" y="0" width="184" height="136" rx="10" fill="#fff1f2" stroke="#fda4af"/>
        <text x="680" y="22" text-anchor="middle" font-size="11.5" font-weight="700" fill="#be123c">④ 同种负电荷互相排斥！</text>
        <circle cx="645" cy="74" r="16" fill="#facc15" stroke="#0284c7" stroke-width="3"/>
        <text x="645" y="79" text-anchor="middle" font-size="12" font-weight="700" fill="#0369a1">− −</text>
        <circle cx="715" cy="74" r="16" fill="#facc15" stroke="#0284c7" stroke-width="3"/>
        <text x="715" y="79" text-anchor="middle" font-size="12" font-weight="700" fill="#0369a1">− −</text>
        <text x="680" y="52" text-anchor="middle" font-size="12" font-weight="700" fill="#dc2626">← 排斥 →</text>
        <text x="680" y="114" text-anchor="middle" font-size="10.5" font-weight="700" fill="#be123c">Repel one another — 防止重新凝结</text>
        <text x="680" y="128" text-anchor="middle" font-size="10" fill="#475569">forming stable oil-in-water emulsion</text>
      </g>
    </svg>
  `,

  'svg-condensation-polymers': `
    <svg viewBox="0 0 820 290" class="chem-svg" role="img" aria-label="Polyester PET and Nylon-6,6 Repeating Units">
      <rect x="8" y="8" width="804" height="274" rx="14" fill="#fdf2f8" stroke="#fbcfe8"/>
      <text x="24" y="36" font-size="15" font-weight="700" fill="#831843">Unit 33 两大缩聚物 Condensation Polymers：聚酯 Polyester (PET) 与尼龙 Nylon-6,6 重复单位</text>

      <!-- PET -->
      <rect x="24" y="52" width="380" height="214" rx="10" fill="#ffffff" stroke="#f472b6" stroke-width="1.8"/>
      <text x="214" y="76" text-anchor="middle" font-size="13" font-weight="700" fill="#9d174d">Poly(ethylene terephthalate) 聚对苯二甲酸乙二酯 (PET)</text>
      <text x="214" y="96" text-anchor="middle" font-size="11" fill="#64748b">单体：benzene-1,4-dicarboxylic acid + ethane-1,2-diol (脱去 H₂O)</text>
      <g font-family="Menlo, monospace" font-size="13.5" font-weight="700" fill="#0f172a" text-anchor="middle">
        <text x="214" y="132">    O            O                  </text>
        <text x="214" y="150">   ||           ||                  </text>
        <text x="214" y="168">— C — ⬡ — C — <tspan fill="#dc2626">O</tspan> — CH₂CH₂ — <tspan fill="#dc2626">O</tspan> —</text>
      </g>
      <text x="214" y="206" text-anchor="middle" font-size="11.5" font-weight="700" fill="#be123c">含 Ester linkage 酯键 (—COO—)</text>
      <text x="214" y="226" text-anchor="middle" font-size="11" fill="#334155">用途：矿泉水瓶、涤纶衣物纤维 (Terylene)</text>
      <text x="214" y="246" text-anchor="middle" font-size="11" fill="#dc2626">⚠️ 强酸/强碱会水解酯键使织物破损或瓶体腐蚀泄露！</text>

      <!-- Nylon-6,6 -->
      <rect x="418" y="52" width="380" height="214" rx="10" fill="#ffffff" stroke="#818cf8" stroke-width="1.8"/>
      <text x="608" y="76" text-anchor="middle" font-size="13" font-weight="700" fill="#3730a3">Nylon-6,6 尼龙-6,6 (Polyamide 聚酰胺)</text>
      <text x="608" y="96" text-anchor="middle" font-size="11" fill="#64748b">单体：hexane-1,6-dioic acid (6C) + hexane-1,6-diamine (6C)</text>
      <g font-family="Menlo, monospace" font-size="13" font-weight="700" fill="#0f172a" text-anchor="middle">
        <text x="608" y="132">    O                   O                     </text>
        <text x="608" y="150">   ||                  ||                     </text>
        <text x="608" y="168">— C — (CH₂)₄ — C — <tspan fill="#2563eb">NH</tspan> — (CH₂)₆ — <tspan fill="#2563eb">NH</tspan> —</text>
      </g>
      <text x="608" y="206" text-anchor="middle" font-size="11.5" font-weight="700" fill="#1d4ed8">含 Amide linkage 酰胺键 (—CONH—)</text>
      <text x="608" y="226" text-anchor="middle" font-size="11" font-weight="600" fill="#047857">★ 链间 C=O 与 H—N 形成氢键 → 极高抗拉强度 (绳索/降落伞)！</text>
      <text x="608" y="246" text-anchor="middle" font-size="11" fill="#dc2626">⚠️ 同样不耐强酸强碱（酰胺键发生水解 hydrolysis）！</text>
    </svg>
  `
};
