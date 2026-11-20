/**
 * Mastering Chemistry (HKDSE Topic 7 & Topic 8) — Core Learning Engine
 * Zero external runtime dependencies; works offline via file:// double-click on Mac & iPad.
 */
(function () {
  'use strict';

  const STORAGE_KEY = 'hkdse_mastering_chem_t7_t8_v1';
  const UNIT_ORDER = ['u25', 'u26', 'u27', 'u28', 'bridge', 'u29', 'u30', 'u31', 'u32', 'u33'];

  const AUDIO_COURSES = {
    u25: {
      num: 25, unitNum: 'Unit 25', book: 'Book 3A · Topic 7', topicId: 'topic7',
      span: '25.1 – 25.8', epCount: 4, duration: '25:46', accent: '#c2410c',
      titleZh: '化石燃料', titleEn: 'Fossil fuels',
      highlights: '三大化石燃料成因 · 烃三大家族 · 工业分馏塔八大馏分 SVG · 六大性质递变因果链 · 催化转化器与脱硫洗涤器方程式'
    },
    u26: {
      num: 26, unitNum: 'Unit 26', book: 'Book 3A · Topic 7', topicId: 'topic7',
      span: '26.1 – 26.10', epCount: 4, duration: '24:00', accent: '#0d9488',
      titleZh: '同系物、结构式及碳化合物的命名', titleEn: 'Homologous series, structural formulae & naming',
      highlights: '碳四价成链能力 · 四大化学式与最外层电子图 SVG · 同系物四大黄金特征 · 拐弯最长主链排雷 · 支链沸点效应与油水密度'
    },
    u27: {
      num: 27, unitNum: 'Unit 27', book: 'Book 3A · Topic 7', topicId: 'topic7',
      span: '27.1 – 27.5', epCount: 4, duration: '28:54', accent: '#059669',
      titleZh: '烷烃与烯烃', titleEn: 'Alkanes and alkenes',
      highlights: 'UV light 自由基取代三步机理与点叉电子图 SVG · 石蜡油催化裂化先撤导管防倒吸 · Br₂(aq) 生 2-溴乙醇头号陷阱 · 鉴别禁区'
    },
    u28: {
      num: 28, unitNum: 'Unit 28', book: 'Book 3A · Topic 7', topicId: 'topic7',
      span: '28.1 – 28.7', epCount: 4, duration: '24:26', accent: '#7c3aed',
      titleZh: '加成聚合物与塑料', titleEn: 'Addition polymers',
      highlights: '热塑性塑料无交联滑移原理 · H 字法画重复单位（禁写 n！）· 七大经典加聚物 · LDPE vs HDPE 与 PVC 增塑剂 SVG · 四大废塑处理'
    },
    u29: {
      num: 29, unitNum: 'Unit 29', book: 'Book 3B · Topic 8', topicId: 'topic8',
      span: '29.1 – 29.11', epCount: 6, duration: '33:18', accent: '#4f46e5',
      titleZh: '碳化合物的命名及物理性质', titleEn: 'Naming and physical properties of carbon compounds',
      highlights: '多官能团优先序总榜 · 留 a / 留 e 拼写红线 · 1°/2°/3° 醇分级 SVG · 反写酯一刀切拆键法 · 氢键与羧酸二聚体沸点水溶性规律'
    },
    u30: {
      num: 30, unitNum: 'Unit 30', book: 'Book 3B · Topic 8', topicId: 'topic8',
      span: '30.1 – 30.7', epCount: 5, duration: '24:45', accent: '#0891b2',
      titleZh: '同分异构现象', titleEn: 'Isomerism',
      highlights: '结构与立体异构全景树 · 官能团异构穷举法 · 顺反异构双条件与熔沸点倒挂 · 手性碳绕环秒判 · 三维对映体与旋光仪 SVG'
    },
    u31: {
      num: 31, unitNum: 'Unit 31', book: 'Book 3B · Topic 8', topicId: 'topic8',
      span: '31.1 – 31.9', epCount: 6, duration: '23:21', accent: '#e11d48',
      titleZh: '各官能团的典型反应', titleEn: 'Typical reactions of selected functional groups',
      highlights: '马氏规则加成 · 卤代烷水解验卤三步曲 · PCl₅/SOCl₂ 与脱水 · 醇可控氧化（回流 vs 蒸馏 SVG）· NaBH₄/LiAlH₄ 还原 · 酯酰胺酸碱水解'
    },
    u32: {
      num: 32, unitNum: 'Unit 32', book: 'Book 3B · Topic 8', topicId: 'topic8',
      span: '32.1 – 32.4', epCount: 5, duration: '23:20', accent: '#0d9488',
      titleZh: '碳化合物的合成', titleEn: 'Synthesis of carbon compounds',
      highlights: '双向逆推思维与醇中央换乘总图 · 官能团移位模型 · 百分产率零失误计算 · 分液漏斗洗涤干燥蒸馏与重结晶四步提纯 SVG'
    },
    u33: {
      num: 33, unitNum: 'Unit 33', book: 'Book 3B · Topic 8', topicId: 'topic8',
      span: '33.1 – 33.10', epCount: 5, duration: '25:14', accent: '#c026d3',
      titleZh: '重要的有机物质', titleEn: 'Important organic substances',
      highlights: '阿司匹林结构与 1:2 返滴定 · 肥皂与无皂清洁剂两亲乳化机理 SVG · 皂化盐析与硬水浮渣 · 缩聚原理与 PET / PLA / Nylon-6,6 氢键'
    }
  };

  function getAudioPreviewUrl(num) {
    if (/\.github\.io$/i.test(window.location.hostname) || /^https?:/i.test(window.location.protocol)) {
      return `https://kenlin666bot.github.io/unit${num}-audio-preview/`;
    }
    if (/\/mastering-organic-chem\//i.test(decodeURIComponent(window.location.pathname))) {
      return `../Unit${num}_有声互动预习课/Unit${num}_有声互动预习课.html`;
    }
    return `./Unit${num}_有声互动预习课/Unit${num}_有声互动预习课.html`;
  }

  const THEME_COLORS = {
    amber: '#d97706',
    teal: '#0d9488',
    emerald: '#059669',
    violet: '#7c3aed',
    indigo: '#4f46e5',
    cyan: '#0891b2',
    rose: '#e11d48',
    orange: '#ea580c',
    fuchsia: '#c026d3'
  };

  const NODE_GROUP_STYLES = {
    hydrocarbon: { fill: '#fffbeb', stroke: '#d97706', text: '#92400e' },
    polymer: { fill: '#f5f3ff', stroke: '#7c3aed', text: '#5b21b6' },
    halo: { fill: '#ecfdf5', stroke: '#059669', text: '#065f46' },
    alcohol: { fill: '#eff6ff', stroke: '#2563eb', text: '#1e40af' },
    carbonyl: { fill: '#fff7ed', stroke: '#ea580c', text: '#9a3412' },
    acid: { fill: '#fff1f2', stroke: '#e11d48', text: '#9f1239' },
    ester: { fill: '#fdf2f8', stroke: '#db2777', text: '#9d174d' },
    nitrogen: { fill: '#eef2ff', stroke: '#4f46e5', text: '#3730a3' }
  };

  const state = {
    view: 'learn', // 'learn' | 'map' | 'synthesis' | 'decoder' | 'glossary'
    currentUnitId: 'u25',
    sidebarSearch: '',
    cueHighlightOn: true,
    activeQuizLevel: {}, // sectionId -> 1 | 2 | 3
    revealedHints: {},   // qId -> bool
    revealedAnswers: {}, // qId -> bool
    selectedMcq: {},     // qId -> index
    draftTexts: {},      // qId -> string
    mapSelectedNode: 'alc',
    mapSelectedEdge: null,
    synProgress: {},     // synId -> { stepIdx: choiceIdx }
    decoderSearch: '',
    glossarySearch: '',
    persisted: {
      masteredQuestions: {}, // qId -> true
      starredQuestions: {},  // qId -> true
      wrongOnceQuestions: {} // qId -> true
    }
  };

  function loadPersisted() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (parsed && typeof parsed === 'object') {
          state.persisted.masteredQuestions = parsed.masteredQuestions || {};
          state.persisted.starredQuestions = parsed.starredQuestions || {};
          state.persisted.wrongOnceQuestions = parsed.wrongOnceQuestions || {};
          if (parsed.currentUnitId) state.currentUnitId = parsed.currentUnitId;
          if (typeof parsed.cueHighlightOn === 'boolean') state.cueHighlightOn = parsed.cueHighlightOn;
        }
      }
    } catch (e) {
      // Ignore localStorage restrictions if private mode
    }
  }

  function savePersisted() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({
        ...state.persisted,
        currentUnitId: state.currentUnitId,
        cueHighlightOn: state.cueHighlightOn
      }));
    } catch (e) {
      // Ignore
    }
    updateHeaderStats();
  }

  function getOrderedUnits() {
    const raw = window.CHEM_UNITS || [];
    return raw.slice().sort((a, b) => {
      const ia = UNIT_ORDER.indexOf(a.id);
      const ib = UNIT_ORDER.indexOf(b.id);
      return (ia === -1 ? 999 : ia) - (ib === -1 ? 999 : ib);
    });
  }

  function escapeHtml(str) {
    return String(str == null ? '' : str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  /**
   * Highlights non-overlapping occurrences of cueWords inside plain text safely.
   */
  function renderStemWithCueWords(text, cueWords, prefixId) {
    const raw = String(text || '');
    if (!state.cueHighlightOn || !Array.isArray(cueWords) || cueWords.length === 0) {
      return escapeHtml(raw);
    }

    const matches = [];
    const lowerRaw = raw.toLowerCase();

    cueWords.forEach((cw, idx) => {
      if (!cw || !cw.phrase) return;
      const needle = cw.phrase.toLowerCase();
      if (!needle) return;
      let pos = lowerRaw.indexOf(needle);
      if (pos !== -1) {
        matches.push({
          start: pos,
          end: pos + cw.phrase.length,
          idx
        });
      }
    });

    if (matches.length === 0) return escapeHtml(raw);

    // Sort by start position, prefer longer match if tied
    matches.sort((a, b) => a.start - b.start || (b.end - b.start) - (a.end - a.start));
    const filtered = [];
    let cursor = 0;
    for (const m of matches) {
      if (m.start >= cursor) {
        filtered.push(m);
        cursor = m.end;
      }
    }

    let out = '';
    let last = 0;
    for (const m of filtered) {
      if (m.start > last) {
        out += escapeHtml(raw.slice(last, m.start));
      }
      const matchedStr = escapeHtml(raw.slice(m.start, m.end));
      out += `<mark class="cue-mark" data-cue-row="${prefixId}-cue-${m.idx}" title="点击定位下方考点解析">${matchedStr}<span class="cue-idx">题眼 ${m.idx + 1}</span></mark>`;
      last = m.end;
    }
    if (last < raw.length) {
      out += escapeHtml(raw.slice(last));
    }
    return out;
  }

  function renderCueDecoderPanel(cueWords, prefixId) {
    if (!state.cueHighlightOn || !Array.isArray(cueWords) || cueWords.length === 0) {
      return '';
    }
    const rows = cueWords.map((cw, idx) => `
      <div class="cue-decoder-row" id="${prefixId}-cue-${idx}">
        <span class="cue-en">【题眼 ${idx + 1}】"${escapeHtml(cw.phrase)}"</span>
        <span class="cue-zh">➔ ${escapeHtml(cw.zh)}</span>
        <div class="cue-concept">🎯 锁定考点：${escapeHtml(cw.concept)}</div>
      </div>
    `).join('');

    return `
      <div class="cue-decoder-panel">
        <div class="cue-decoder-title">🔍 关键考点词解码（读题时抓住这些英文词，立刻明白考哪章知识点）：</div>
        <div class="cue-decoder-list">${rows}</div>
      </div>
    `;
  }

  function getUnitMasteryStats(unit) {
    let total = 0;
    let done = 0;
    (unit.sections || []).forEach(sec => {
      (sec.questions || []).forEach(q => {
        total++;
        if (state.persisted.masteredQuestions[q.id]) done++;
      });
    });
    (unit.unitExamLongQuestions || []).forEach(lq => {
      (lq.subQuestions || []).forEach((sq, i) => {
        total++;
        if (state.persisted.masteredQuestions[`${lq.id}-sub-${i}`]) done++;
      });
    });
    return { total, done, pct: total ? Math.round((done / total) * 100) : 0 };
  }

  function getAllMasteryStats() {
    const units = getOrderedUnits();
    let total = 0;
    let done = 0;
    units.forEach(u => {
      const st = getUnitMasteryStats(u);
      total += st.total;
      done += st.done;
    });
    return { total, done, pct: total ? Math.round((done / total) * 100) : 0 };
  }

  function updateHeaderStats() {
    const pill = document.getElementById('global-progress-pill');
    if (pill) {
      const st = getAllMasteryStats();
      pill.textContent = `已掌握 ${st.done}/${st.total} 题 (${st.pct}%)`;
    }
    const cueBtn = document.getElementById('cue-toggle-btn');
    if (cueBtn) {
      cueBtn.textContent = state.cueHighlightOn
        ? '🔍 标出关键考点词：开启'
        : '🔍 标出关键考点词：关闭';
      cueBtn.classList.toggle('off', !state.cueHighlightOn);
    }
  }

  /* ========================================================================
     SIDEBAR RENDERING
     ======================================================================== */
  function renderSidebar() {
    const sidebar = document.getElementById('app-sidebar');
    const shell = document.getElementById('app-shell');
    if (!sidebar || !shell) return;

    if (state.view !== 'learn') {
      sidebar.style.display = 'none';
      shell.classList.add('full-mode');
      return;
    }
    sidebar.style.display = '';
    shell.classList.remove('full-mode');

    const units = getOrderedUnits();
    const q = state.sidebarSearch.trim().toLowerCase();

    const filterUnit = (u) => {
      if (!q) return true;
      const hay = [
        u.unitNum, u.titleEn, u.titleZh, u.summary,
        ...(u.keyTerms || []).map(t => `${t.en} ${t.zh}`),
        ...(u.sections || []).map(s => `${s.code} ${s.titleEn} ${s.titleZh}`)
      ].join(' ').toLowerCase();
      return hay.includes(q);
    };

    const t7 = units.filter(u => u.topicId === 'topic7' && filterUnit(u));
    const br = units.filter(u => u.topicId === 'bridge' && filterUnit(u));
    const t8 = units.filter(u => u.topicId === 'topic8' && filterUnit(u));

    const renderUnitBtn = (u) => {
      const st = getUnitMasteryStats(u);
      const active = u.id === state.currentUnitId ? 'active' : '';
      const audioMeta = AUDIO_COURSES[u.id];
      const audioLinkHtml = audioMeta
        ? `<a class="unit-audio-mini" href="${getAudioPreviewUrl(audioMeta.num)}" data-audio-link="1" title="打开 ${escapeHtml(u.unitNum)} 双语有声互动预习课 (${audioMeta.duration})">🎧 有声</a>`
        : '';
      return `
        <div class="unit-nav-card ${active}" role="button" tabindex="0" data-unit-nav="${u.id}">
          <div class="unit-nav-top">
            <span>${escapeHtml(u.unitNum)}</span>
            <span style="display:inline-flex;align-items:center;gap:6px;">
              ${audioLinkHtml}
              <span>${st.pct}% (${st.done}/${st.total})</span>
            </span>
          </div>
          <div class="unit-nav-zh">${escapeHtml(u.titleZh)}</div>
          <div class="unit-nav-en">${escapeHtml(u.titleEn)}</div>
        </div>
      `;
    };

    sidebar.innerHTML = `
      <div class="sidebar-search-box">
        <span class="sidebar-search-icon">🔎</span>
        <input id="sidebar-search-input" class="sidebar-search-input" type="text"
          placeholder="搜单元 / 英文术语 (如 alkene, ester)..."
          value="${escapeHtml(state.sidebarSearch)}" />
      </div>

      ${t7.length ? `<div class="book-group-label t7"><span>📘 Book 3A · Topic 7</span><span>基础烃与塑料</span></div>${t7.map(renderUnitBtn).join('')}` : ''}
      ${br.length ? `<div class="book-group-label br"><span>🌉 两册衔接枢纽</span><span>必看导览</span></div>${br.map(renderUnitBtn).join('')}` : ''}
      ${t8.length ? `<div class="book-group-label t8"><span>📗 Book 3B · Topic 8</span><span>官能团与合成</span></div>${t8.map(renderUnitBtn).join('')}` : ''}
    `;

    const input = document.getElementById('sidebar-search-input');
    if (input) {
      input.addEventListener('input', (e) => {
        state.sidebarSearch = e.target.value;
        const pos = e.target.selectionStart;
        renderSidebar();
        const nextInput = document.getElementById('sidebar-search-input');
        if (nextInput) {
          nextInput.focus();
          nextInput.setSelectionRange(pos, pos);
        }
      });
    }
  }

  /* ========================================================================
     SECTION & QUESTION RENDERING (LEARN VIEW)
     ======================================================================== */
  function renderSectionQuestion(sec, q) {
    const isStarred = !!state.persisted.starredQuestions[q.id];
    const isMastered = !!state.persisted.masteredQuestions[q.id];
    const hintOpen = !!state.revealedHints[q.id];
    const ansOpen = !!state.revealedAnswers[q.id];
    const chosen = state.selectedMcq[q.id];

    const stemHtml = renderStemWithCueWords(q.stem, q.cueWords, q.id);
    const cuePanelHtml = renderCueDecoderPanel(q.cueWords, q.id);

    let bodyHtml = '';
    if (q.type === 'mcq' && Array.isArray(q.options)) {
      bodyHtml = `
        <div class="mcq-options">
          ${q.options.map((opt, idx) => {
            let cls = '';
            if (chosen !== undefined) {
              if (idx === q.answerIndex) cls = 'correct';
              else if (idx === chosen && chosen !== q.answerIndex) cls = 'wrong';
            }
            return `<button class="mcq-opt ${cls}" data-mcq-qid="${q.id}" data-mcq-idx="${idx}">${escapeHtml(opt)}</button>`;
          }).join('')}
        </div>
      `;
    } else {
      const draft = state.draftTexts[q.id] || '';
      bodyHtml = `
        <textarea class="structured-input" data-draft-qid="${q.id}"
          placeholder="✍️ 英文实战演练区：可先在此尝试用英文写出试剂、反应条件、化学方程式或现象描述，再点击下方按钮核对 HKEAA 采分点（Marking Scheme）...">${escapeHtml(draft)}</textarea>
      `;
    }

    const msHtml = Array.isArray(q.markingScheme) && q.markingScheme.length
      ? `<div style="margin-top:6px;"><strong>📋 HKEAA 标准采分点 (Marking Scheme)：</strong><ul class="ms-list">${q.markingScheme.map(m => `<li>${escapeHtml(m)}</li>`).join('')}</ul></div>`
      : '';

    return `
      <div class="q-card">
        <div class="q-top-meta">
          <span class="badge badge-unit">${escapeHtml(q.levelTag || `Level ${q.level}`)}</span>
          <div style="display:flex;gap:8px;align-items:center;">
            ${isMastered ? '<span style="color:#059669;font-size:12.5px;font-weight:700;">✅ 已掌握</span>' : ''}
            <button class="btn-sm btn-star ${isStarred ? 'starred' : ''}" data-star-qid="${q.id}">
              ${isStarred ? '⭐ 已收藏重点' : '☆ 收藏到复习本'}
            </button>
          </div>
        </div>

        <div class="q-stem">${stemHtml}</div>
        ${cuePanelHtml}
        ${bodyHtml}

        <div class="q-actions">
          ${q.hint ? `<button class="btn-sm" data-hint-qid="${q.id}">💡 ${hintOpen ? '收起提示' : '给我一点提示 (Hint)'}</button>` : ''}
          <button class="btn-sm btn-primary-sm" data-ans-qid="${q.id}">
            ${ansOpen ? '收起答案与解析' : '📖 查看标准答案与采分点'}
          </button>
          ${q.type !== 'mcq' ? `
            <button class="btn-sm" data-master-qid="${q.id}">
              ${isMastered ? '↺ 取消掌握标记' : '✅ 我已答对/掌握本题'}
            </button>
          ` : ''}
        </div>

        ${hintOpen && q.hint ? `<div class="hint-box"><strong>💡 思考脚手架：</strong>${escapeHtml(q.hint)}</div>` : ''}

        ${ansOpen ? `
          <div class="answer-box">
            ${msHtml}
            <div><strong>📝 透彻解析：</strong>${escapeHtml(q.explanation || '')}</div>
            ${q.commonMistake ? `<div class="mistake-note"><strong>⚠️ 考场高频扣分坑：</strong>${escapeHtml(q.commonMistake)}</div>` : ''}
          </div>
        ` : ''}
      </div>
    `;
  }

  function renderLongQuestion(lq) {
    const scenarioHtml = renderStemWithCueWords(lq.scenarioEn, lq.cueWords, lq.id);
    const cuePanelHtml = renderCueDecoderPanel(lq.cueWords, lq.id);
    const zhOpen = !!state.revealedHints[`${lq.id}-zh`];

    const subsHtml = (lq.subQuestions || []).map((sq, idx) => {
      const subId = `${lq.id}-sub-${idx}`;
      const hintOpen = !!state.revealedHints[subId];
      const ansOpen = !!state.revealedAnswers[subId];
      const isMastered = !!state.persisted.masteredQuestions[subId];
      const isStarred = !!state.persisted.starredQuestions[subId];
      const draft = state.draftTexts[subId] || '';

      return `
        <div class="sub-q-item">
          <div style="display:flex;justify-content:space-between;align-items:center;gap:8px;flex-wrap:wrap;margin-bottom:6px;">
            <div>
              <strong>${escapeHtml(sq.part)}</strong>
              <span class="badge badge-unit" style="margin-left:6px;">${sq.marks} mark${sq.marks > 1 ? 's' : ''}</span>
              ${sq.commandWord ? `<span class="cmd-badge" style="margin-left:6px;">审题指令词 ${escapeHtml(sq.commandWord.word)}：${escapeHtml(sq.commandWord.tip)}</span>` : ''}
            </div>
            <div style="display:flex;gap:6px;align-items:center;">
              ${isMastered ? '<span style="color:#059669;font-size:12px;font-weight:700;">✅ 已掌握</span>' : ''}
              <button class="btn-sm btn-star ${isStarred ? 'starred' : ''}" data-star-qid="${subId}">
                ${isStarred ? '⭐ 已收藏' : '☆ 收藏'}
              </button>
            </div>
          </div>

          <div style="font-weight:600;color:#0f172a;margin-bottom:10px;">${escapeHtml(sq.promptEn)}</div>

          <textarea class="structured-input" data-draft-qid="${subId}"
            placeholder="Write your English answer for ${escapeHtml(sq.part)} here...">${escapeHtml(draft)}</textarea>

          <div class="q-actions">
            ${sq.hint ? `<button class="btn-sm" data-hint-qid="${subId}">💡 ${hintOpen ? '收起提示' : '中文审题提示'}</button>` : ''}
            <button class="btn-sm btn-primary-sm" data-ans-qid="${subId}">
              ${ansOpen ? '收起采分点' : '📋 核对 Marking Scheme'}
            </button>
            <button class="btn-sm" data-master-qid="${subId}">
              ${isMastered ? '↺ 取消掌握' : '✅ 标记已掌握'}
            </button>
          </div>

          ${hintOpen && sq.hint ? `<div class="hint-box"><strong>💡 思路提示：</strong>${escapeHtml(sq.hint)}</div>` : ''}
          ${ansOpen ? `
            <div class="answer-box">
              <strong>📋 HKEAA Marking Scheme：</strong>
              <ul class="ms-list">${(sq.markingScheme || []).map(m => `<li>${escapeHtml(m)}</li>`).join('')}</ul>
              <div><strong>📝 中文精讲：</strong>${escapeHtml(sq.explanationZh || '')}</div>
            </div>
          ` : ''}
        </div>
      `;
    }).join('');

    return `
      <div class="long-q-card" id="${lq.id}">
        <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px;">
          <h3 style="margin:0;font-size:17.5px;color:#1e1b4b;">🏆 ${escapeHtml(lq.title)}</h3>
          <span class="badge badge-book">Total: ${lq.totalMarks} marks</span>
        </div>

        <div class="scenario-en">${scenarioHtml}</div>
        ${cuePanelHtml}

        ${lq.scenarioZhSummary ? `
          <div style="margin-bottom:10px;">
            <button class="btn-sm" data-hint-qid="${lq.id}-zh">
              🌐 ${zhOpen ? '隐藏中文题干大意' : '读英文卡壳？点此核对中文题干大意'}
            </button>
            ${zhOpen ? `<div class="hint-box" style="margin-top:8px;"><strong>中文题干梳理：</strong>${escapeHtml(lq.scenarioZhSummary)}</div>` : ''}
          </div>
        ` : ''}

        ${subsHtml}
      </div>
    `;
  }

  function renderLearnView() {
    const units = getOrderedUnits();
    let unit = units.find(u => u.id === state.currentUnitId) || units[0];
    if (!unit) {
      return `<div class="unit-hero"><h1>课程数据加载中...</h1></div>`;
    }
    state.currentUnitId = unit.id;
    const accent = THEME_COLORS[unit.colorTheme] || '#2563eb';
    const unitIdx = units.findIndex(u => u.id === unit.id);
    const prevUnit = unitIdx > 0 ? units[unitIdx - 1] : null;
    const nextUnit = unitIdx >= 0 && unitIdx < units.length - 1 ? units[unitIdx + 1] : null;

    const termsHtml = (unit.keyTerms || []).map(t => `
      <span class="term-pill"><strong>${escapeHtml(t.en)}</strong> · ${escapeHtml(t.zh)}</span>
    `).join('');

    const jumpBarHtml = (unit.sections || []).map(sec => `
      <button class="sec-jump-btn" data-scroll-sec="${sec.id}">${escapeHtml(sec.code)} ${escapeHtml(sec.titleZh)}</button>
    `).join('') + ((unit.unitExamLongQuestions && unit.unitExamLongQuestions.length)
      ? `<button class="sec-jump-btn" style="border-color:#818cf8;color:#4338ca;" data-scroll-sec="unit-long-q-anchor">🏆 本章英文长题实战 (${unit.unitExamLongQuestions.length})</button>`
      : '');

    const sectionsHtml = (unit.sections || []).map(sec => {
      const svgMarkup = sec.svgId && window.CHEM_SVGS && window.CHEM_SVGS[sec.svgId]
        ? `<div class="svg-figure">${window.CHEM_SVGS[sec.svgId]}${sec.svgCaption ? `<div class="svg-caption">${escapeHtml(sec.svgCaption)}</div>` : ''}</div>`
        : '';

      const formulasHtml = Array.isArray(sec.textbookFormulas) && sec.textbookFormulas.length
        ? `
          <div class="formulas-panel">
            <div class="formulas-panel-title">🧪 精工版《Mastering Chemistry》标准化学方程式与结构公式</div>
            ${sec.textbookFormulas.map(f => `
              <div class="formula-item">
                <div class="formula-label">${escapeHtml(f.label)}</div>
                <div class="formula-eq">${f.equationHtml}</div>
                ${f.note ? `<div class="formula-note">${escapeHtml(f.note)}</div>` : ''}
              </div>
            `).join('')}
          </div>
        `
        : '';

      const relationsHtml = Array.isArray(sec.relations) && sec.relations.length
        ? `
          <div class="relations-box">
            <div class="relations-title">🔗 知识点前后串联（看清它在 Topic 7 &amp; Topic 8 知识网中的位置）：</div>
            ${sec.relations.map(rel => `
              <div class="relation-item">
                <div>
                  <div style="font-weight:700;font-size:13.5px;color:#0f172a;">
                    ${rel.type === 'buildsOn' ? '⬅️ 前序地基 · ' : rel.type === 'compareWith' ? '⚖️ 横向对比 · ' : '➡️ 后续延伸 · '}
                    ${escapeHtml(rel.label)}
                  </div>
                  <div style="font-size:13px;color:#475569;margin-top:2px;">${escapeHtml(rel.why)}</div>
                </div>
                ${rel.targetUnitId ? `<button class="rel-jump-btn" data-jump-unit="${rel.targetUnitId}" data-jump-sec="${rel.targetSectionId || ''}">前往查看 →</button>` : ''}
              </div>
            `).join('')}
          </div>
        `
        : '';

      const questions = sec.questions || [];
      const activeLv = state.activeQuizLevel[sec.id] || 1;
      const activeQ = questions.find(q => q.level === activeLv) || questions[0];

      const lvTabsHtml = questions.map(q => {
        const done = state.persisted.masteredQuestions[q.id] ? '✓ ' : '';
        const isAct = activeQ && activeQ.id === q.id ? 'active' : '';
        return `<button class="level-tab lv-${q.level} ${isAct}" data-sec-lv="${sec.id}" data-lv="${q.level}">${done}Level ${q.level}${q.level === 1 ? ' 直觉' : q.level === 2 ? ' 进阶' : ' DSE实战'}</button>`;
      }).join('');

      return `
        <article class="section-card" id="${sec.id}">
          <div class="section-header">
            <span class="section-code">${escapeHtml(sec.code)}</span>
            <h2>${escapeHtml(sec.titleZh)}</h2>
            <div class="sec-en">${escapeHtml(sec.titleEn)}</div>
          </div>

          ${sec.analogy ? `
            <div class="analogy-box">
              <div class="analogy-title"><span>${sec.analogy.icon || '💡'}</span><span>${escapeHtml(sec.analogy.title)}</span></div>
              <p class="analogy-body">${escapeHtml(sec.analogy.body)}</p>
            </div>
          ` : ''}

          <div class="core-content">${sec.coreExplanation || ''}</div>

          ${svgMarkup}
          ${formulasHtml}

          ${sec.examTrap ? `<div class="trap-banner"><strong>🚨 DSE 考场防丢分警示：</strong>${escapeHtml(sec.examTrap)}</div>` : ''}

          ${relationsHtml}

          ${activeQ ? `
            <div class="quiz-zone">
              <div class="quiz-zone-header">
                <div class="quiz-zone-title">🎯 循序渐进闯关提问（先搭中文直觉梯子，再战全英文考题）</div>
                <div class="level-tabs">${lvTabsHtml}</div>
              </div>
              ${renderSectionQuestion(sec, activeQ)}
            </div>
          ` : ''}
        </article>
      `;
    }).join('');

    const longQsHtml = Array.isArray(unit.unitExamLongQuestions) && unit.unitExamLongQuestions.length
      ? `
        <section class="long-q-section" id="unit-long-q-anchor">
          <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:10px;">
            <div>
              <h2 style="margin:0;font-size:21px;color:#1e1b4b;">🏆 ${escapeHtml(unit.unitNum)} 英文长问题“题眼拆解”实战专区</h2>
              <div style="font-size:13.5px;color:#475569;margin-top:4px;">
                已自动为您女儿标出英文长题干中的<strong>关键考点词（题眼）</strong>，帮她一眼看穿考官在考哪个反应与概念！（可随时在右上角开关高亮）
              </div>
            </div>
          </div>
          ${unit.unitExamLongQuestions.map(renderLongQuestion).join('')}
        </section>
      `
      : '';

    const audioMeta = AUDIO_COURSES[unit.id];
    const audioBannerHtml = audioMeta
      ? `
        <div class="audio-cta-banner">
          <div class="audio-cta-info">
            <div class="audio-cta-title">
              <span>🎧 课前先听：${escapeHtml(unit.unitNum)} 双语有声互动预习课</span>
              <span class="audio-dur-pill">${audioMeta.epCount} 讲微课 · 合集 ${audioMeta.duration}</span>
            </div>
            <div class="audio-cta-sub">
              陈老师单人沉稳主讲（中文建立底层直觉 + 英文专有名词对标）+ 动态声画同步黑板，听完再刷下方三阶闯关题与英文长题效率翻倍！
            </div>
          </div>
          <div class="audio-cta-actions">
            <a class="audio-cta-btn" href="${getAudioPreviewUrl(audioMeta.num)}">🎧 打开 ${escapeHtml(unit.unitNum)} 有声预习课堂 →</a>
            <button class="btn-sm" data-switch-view="audio">📚 全九章有声课目录</button>
          </div>
        </div>
      `
      : `
        <div class="audio-cta-banner">
          <div class="audio-cta-info">
            <div class="audio-cta-title">🎧 两册有声互动预习课全线贯通（Unit 25 – Unit 33）</div>
            <div class="audio-cta-sub">已配齐 Topic 7（U25–U28）与 Topic 8（U29–U33）全部 9 个单元共 43 讲声画同步预习微课！</div>
          </div>
          <div class="audio-cta-actions">
            <a class="btn-sm" style="text-decoration:none;" href="${getAudioPreviewUrl(28)}">🎧 回顾 U28 有声课</a>
            <a class="audio-cta-btn" href="${getAudioPreviewUrl(29)}">🎧 开启 Topic 8 · U29 有声课 →</a>
            <button class="btn-sm" data-switch-view="audio">📚 全九章目录</button>
          </div>
        </div>
      `;

    return `
      <div class="unit-hero" style="border-top-color:${accent};">
        <div class="unit-hero-badges">
          <span class="badge badge-book">${escapeHtml(unit.book)}</span>
          <span class="badge badge-unit">${escapeHtml(unit.unitNum)}</span>
        </div>
        <h1>${escapeHtml(unit.titleZh)}</h1>
        <div class="unit-hero-en">${escapeHtml(unit.titleEn)}</div>
        <p class="unit-summary">${escapeHtml(unit.summary)}</p>

        ${audioBannerHtml}

        <div class="terms-drawer">
          <div class="terms-drawer-title">🔤 本单元核心必背中英化学词汇（考试作答标准拼写）：</div>
          <div class="term-pills">${termsHtml}</div>
        </div>
      </div>

      <div class="section-jump-bar">${jumpBarHtml}</div>

      ${sectionsHtml}
      ${longQsHtml}

      <div style="display:flex;justify-content:space-between;gap:12px;margin-top:32px;flex-wrap:wrap;">
        ${prevUnit
          ? `<button class="btn-sm" style="padding:12px 18px;font-size:14px;" data-unit-nav="${prevUnit.id}">← 上一单元：${escapeHtml(prevUnit.unitNum)} ${escapeHtml(prevUnit.titleZh)}</button>`
          : '<span></span>'}
        ${nextUnit
          ? `<button class="btn-sm btn-primary-sm" style="padding:12px 18px;font-size:14px;" data-unit-nav="${nextUnit.id}">下一单元：${escapeHtml(nextUnit.unitNum)} ${escapeHtml(nextUnit.titleZh)} →</button>`
          : `<button class="btn-sm btn-primary-sm" style="padding:12px 18px;font-size:14px;" data-switch-view="map">🗺️ 学完通关！去探索全局官能团转化地图 →</button>`}
      </div>
    `;
  }

  /* ========================================================================
     INTERACTIVE GLOBAL REACTION MAP VIEW
     ======================================================================== */
  function renderMapView() {
    const mapData = window.CHEM_REACTION_MAP;
    if (!mapData) return `<div class="unit-hero"><h1>地图加载中...</h1></div>`;

    const nodeMap = {};
    mapData.nodes.forEach(n => { nodeMap[n.id] = n; });

    const selNodeId = state.mapSelectedNode;
    const selEdgeId = state.mapSelectedEdge;

    // Pair offset calculation for bidirectional edges (like halo<->alc, alc<->acid/ald, acid<->ester, acid<->amide)
    const pairCounts = {};
    mapData.edges.forEach(e => {
      const key = [e.from, e.to].sort().join('::');
      pairCounts[key] = (pairCounts[key] || 0) + 1;
    });
    const pairSeen = {};

    const edgesSvg = mapData.edges.map(e => {
      const n1 = nodeMap[e.from];
      const n2 = nodeMap[e.to];
      if (!n1 || !n2) return '';

      const key = [e.from, e.to].sort().join('::');
      const idxInPair = pairSeen[key] || 0;
      pairSeen[key] = idxInPair + 1;

      const dx = n2.x - n1.x;
      const dy = n2.y - n1.y;
      const len = Math.hypot(dx, dy) || 1;
      const ux = dx / len;
      const uy = dy / len;

      // Start & end padded outside node boxes
      const startX = n1.x + ux * 66;
      const startY = n1.y + uy * 28;
      const endX = n2.x - ux * 68;
      const endY = n2.y - uy * 30;

      // Normal vector for curve offset when bidirectional
      const nx = -uy;
      const ny = ux;
      let curveOffset = 0;
      if (pairCounts[key] > 1) {
        curveOffset = idxInPair === 0 ? 28 : -28;
      }
      const midX = (startX + endX) / 2 + nx * curveOffset;
      const midY = (startY + endY) / 2 + ny * curveOffset;

      let edgeClass = '';
      let marker = 'url(#mapArrDefault)';
      if (selEdgeId) {
        if (e.id === selEdgeId) {
          edgeClass = 'selected';
          marker = 'url(#mapArrOut)';
        } else {
          edgeClass = 'map-dimmed';
        }
      } else if (selNodeId) {
        if (e.from === selNodeId) {
          edgeClass = 'out-edge';
          marker = 'url(#mapArrOut)';
        } else if (e.to === selNodeId) {
          edgeClass = 'in-edge';
          marker = 'url(#mapArrIn)';
        } else {
          edgeClass = 'map-dimmed';
        }
      }

      const labelX = (startX + 2 * midX + endX) / 4;
      const labelY = (startY + 2 * midY + endY) / 4;

      return `
        <g class="map-edge-group ${edgeClass}" data-map-edge="${e.id}">
          <path class="map-edge-path" d="M ${startX.toFixed(1)},${startY.toFixed(1)} Q ${midX.toFixed(1)},${midY.toFixed(1)} ${endX.toFixed(1)},${endY.toFixed(1)}" marker-end="${marker}"/>
          <rect x="${(labelX - 56).toFixed(1)}" y="${(labelY - 10).toFixed(1)}" width="112" height="19" rx="5" fill="#ffffff" fill-opacity="0.92" stroke="#cbd5e1" stroke-width="1"/>
          <text x="${labelX.toFixed(1)}" y="${(labelY + 3.5).toFixed(1)}" text-anchor="middle" font-size="10" font-weight="700" fill="#1e293b">${escapeHtml(e.shortLabel)}</text>
        </g>
      `;
    }).join('');

    const nodesSvg = mapData.nodes.map(n => {
      const st = NODE_GROUP_STYLES[n.group] || NODE_GROUP_STYLES.hydrocarbon;
      let isConnected = true;
      if (selEdgeId) {
        const edge = mapData.edges.find(ed => ed.id === selEdgeId);
        isConnected = edge && (edge.from === n.id || edge.to === n.id);
      } else if (selNodeId) {
        isConnected = n.id === selNodeId || mapData.edges.some(ed =>
          (ed.from === selNodeId && ed.to === n.id) || (ed.to === selNodeId && ed.from === n.id)
        );
      }
      const cls = `${selNodeId === n.id ? 'selected' : ''} ${!isConnected ? 'map-dimmed' : ''}`;
      return `
        <g class="map-node ${cls}" data-map-node="${n.id}" transform="translate(${n.x - 68}, ${n.y - 29})">
          <rect width="136" height="58" rx="11" fill="${st.fill}" stroke="${st.stroke}" stroke-width="2"/>
          <text x="68" y="20" text-anchor="middle" font-size="11.5" font-weight="800" fill="${st.text}">${escapeHtml(n.en)}</text>
          <text x="68" y="36" text-anchor="middle" font-size="11" font-weight="700" fill="#0f172a">${escapeHtml(n.zh)}</text>
          <text x="68" y="50" text-anchor="middle" font-size="9.5" fill="#475569">${escapeHtml(n.formula)}</text>
        </g>
      `;
    }).join('');

    // Inspector Panel Content
    let inspectorHtml = '';
    if (selEdgeId) {
      const edge = mapData.edges.find(e => e.id === selEdgeId);
      if (edge) {
        const fromN = nodeMap[edge.from];
        const toN = nodeMap[edge.to];
        inspectorHtml = `
          <div style="font-size:12px;font-weight:800;color:#2563eb;margin-bottom:4px;">⚡ 反应转化详情卡 (Reaction Recipe)</div>
          <h3 style="margin:0 0 8px;font-size:18px;">${escapeHtml(fromN.zh)} (${escapeHtml(fromN.en)}) ➔ ${escapeHtml(toN.zh)} (${escapeHtml(toN.en)})</h3>
          <div class="badge badge-book" style="margin-bottom:12px;">${escapeHtml(edge.rxnType)}</div>
          <div style="font-size:14px;display:grid;gap:9px;">
            <div><strong>🧪 所需试剂 (Reagents)：</strong><br>${escapeHtml(edge.reagents)}</div>
            <div><strong>🔥 反应条件 (Conditions)：</strong><br>${escapeHtml(edge.conditions)}</div>
            <div><strong>👀 实验现象 (Observable Change)：</strong><br>${escapeHtml(edge.obs)}</div>
            <div class="callout callout-tip" style="margin:4px 0;"><strong>📌 考点精要：</strong>${escapeHtml(edge.note)}</div>
          </div>
          <div style="display:flex;gap:8px;margin-top:14px;flex-wrap:wrap;">
            <button class="btn-sm btn-primary-sm" data-jump-unit="${edge.unitId}">📖 前往 ${edge.unitId.toUpperCase()} 章节精讲</button>
            ${AUDIO_COURSES[edge.unitId] ? `<a class="btn-sm" style="text-decoration:none;background:#eef2ff;color:#3730a3;border-color:#c7d2fe;" href="${getAudioPreviewUrl(AUDIO_COURSES[edge.unitId].num)}">🎧 听 ${edge.unitId.toUpperCase()} 有声预习</a>` : ''}
            <button class="btn-sm" data-map-reset="1">显示全图</button>
          </div>
        `;
      }
    } else if (selNodeId && nodeMap[selNodeId]) {
      const n = nodeMap[selNodeId];
      const incoming = mapData.edges.filter(e => e.to === n.id);
      const outgoing = mapData.edges.filter(e => e.from === n.id);
      inspectorHtml = `
        <div style="display:flex;justify-content:space-between;align-items:center;">
          <span class="badge badge-unit">${escapeHtml(n.formula)}</span>
          <button class="btn-sm" data-map-reset="1" style="padding:3px 9px;font-size:12px;">重置高亮</button>
        </div>
        <h3 style="margin:8px 0 2px;font-size:19px;">${escapeHtml(n.zh)} · ${escapeHtml(n.en)}</h3>
        <p style="font-size:13px;color:#475569;margin:0 0 12px;">点击下方任一转化路径即可查看精确试剂、反应条件与现象：</p>

        <div style="margin-bottom:12px;">
          <div style="font-size:12.5px;font-weight:800;color:#2563eb;margin-bottom:6px;">🔵 它能转化为 (Outgoing — ${outgoing.length} 条)：</div>
          ${outgoing.length ? outgoing.map(e => `
            <button class="mcq-opt" style="width:100%;padding:7px 10px;font-size:13px;margin-bottom:5px;" data-map-edge="${e.id}">
              ➔ <strong>${escapeHtml(nodeMap[e.to].zh)} (${escapeHtml(nodeMap[e.to].en)})</strong><br>
              <span style="font-size:11.5px;color:#475569;">试剂/条件：${escapeHtml(e.shortLabel)}</span>
            </button>
          `).join('') : '<div style="font-size:12.5px;color:#64748b;">终端产物（无后续转化）</div>'}
        </div>

        <div>
          <div style="font-size:12.5px;font-weight:800;color:#059669;margin-bottom:6px;">🟢 它可由谁制得 (Incoming — ${incoming.length} 条)：</div>
          ${incoming.length ? incoming.map(e => `
            <button class="mcq-opt" style="width:100%;padding:7px 10px;font-size:13px;margin-bottom:5px;" data-map-edge="${e.id}">
              ⬅ 由 <strong>${escapeHtml(nodeMap[e.from].zh)} (${escapeHtml(nodeMap[e.from].en)})</strong> 制得<br>
              <span style="font-size:11.5px;color:#475569;">试剂/条件：${escapeHtml(e.shortLabel)}</span>
            </button>
          `).join('') : '<div style="font-size:12.5px;color:#64748b;">源头原料（石油原油分馏）</div>'}
        </div>

        <div style="display:flex;gap:8px;margin-top:10px;flex-wrap:wrap;">
          <button class="btn-sm btn-primary-sm" style="flex:1;" data-jump-unit="${n.unit}">📖 跳转到课本单元学习</button>
          ${AUDIO_COURSES[n.unit] ? `<a class="btn-sm" style="text-decoration:none;background:#eef2ff;color:#3730a3;border-color:#c7d2fe;" href="${getAudioPreviewUrl(AUDIO_COURSES[n.unit].num)}">🎧 听有声课</a>` : ''}
        </div>
      `;
    } else {
      inspectorHtml = `
        <h3 style="margin:0 0 8px;">👆 点击左侧地图中的物质或箭头！</h3>
        <p style="font-size:14px;color:#475569;">
          • <strong>点击任意物质方块</strong>（如 <code>Alcohol 醇</code>）：自动用<span style="color:#059669;font-weight:700;">绿色</span>标出“怎么制得它”，用<span style="color:#2563eb;font-weight:700;">蓝色</span>标出“它能变成什么”！<br><br>
          • <strong>点击任意转化标签/箭头</strong>：立即查看 HKDSE 标准试剂、反应条件（如 <code>UV light</code> / <code>heat under reflux</code> / <code>distillation</code>）与实验现象。
        </p>
      `;
    }

    return `
      <div class="unit-hero" style="border-top-color:#0d9488;">
        <div class="unit-hero-badges">
          <span class="badge badge-book">Topic 7 + Topic 8 全景串联</span>
        </div>
        <h1>🗺️ 全局官能团转化交互地图 (Interactive Functional Group Reaction Map)</h1>
        <p class="unit-summary">把两本书 9 个单元里所有孤立的化学方程式织成一张网！左边是 Topic 7 的石油、烷烃（alkane）、烯烃（alkene），中间经卤代烷（haloalkane）与醇（alcohol）枢纽，右边展开整个 Topic 8 的醛、酮、羧酸、酯、肥皂与缩聚物。</p>
      </div>

      <div class="map-layout">
        <div class="map-canvas-card">
          <svg viewBox="0 0 1060 565" class="rxn-map-svg">
            <defs>
              <marker id="mapArrDefault" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                <path d="M0,1 L9,5 L0,9 z" fill="#94a3b8"/>
              </marker>
              <marker id="mapArrOut" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                <path d="M0,1 L9,5 L0,9 z" fill="#2563eb"/>
              </marker>
              <marker id="mapArrIn" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                <path d="M0,1 L9,5 L0,9 z" fill="#059669"/>
              </marker>
            </defs>
            <!-- Subtle Zone Backgrounds -->
            <rect x="12" y="10" width="380" height="545" rx="14" fill="#fffbeb" opacity="0.55" stroke="#fde68a" stroke-dasharray="6,4"/>
            <text x="26" y="32" font-size="12" font-weight="800" fill="#b45309">📘 Book 3A · Topic 7 烃与加成聚合物区</text>

            <rect x="404" y="10" width="644" height="545" rx="14" fill="#f0fdfa" opacity="0.55" stroke="#99f6e4" stroke-dasharray="6,4"/>
            <text x="420" y="32" font-size="12" font-weight="800" fill="#0f766e">📗 Book 3B · Topic 8 含氧/含氮官能团、合成与重要有机物区</text>

            ${edgesSvg}
            ${nodesSvg}
          </svg>
        </div>

        <aside class="map-inspector">${inspectorHtml}</aside>
      </div>
    `;
  }

  /* ========================================================================
     SYNTHESIS PATHFINDER VIEW
     ======================================================================== */
  function renderSynthesisView() {
    const list = window.SYNTHESIS_CHALLENGES || [];
    const cards = list.map(ch => {
      const prog = state.synProgress[ch.id] || {};
      let allCorrect = true;
      const stepsHtml = ch.steps.map((st, sIdx) => {
        const picked = prog[sIdx];
        if (picked !== st.correct) allCorrect = false;
        return `
          <div style="background:#f8fafc;border:1px solid #cbd5e1;border-radius:10px;padding:14px 16px;margin-top:12px;">
            <div style="font-weight:700;color:#0f172a;margin-bottom:8px;">${escapeHtml(st.prompt)}</div>
            <div class="mcq-options" style="margin-bottom:6px;">
              ${st.options.map((opt, oIdx) => {
                let cls = '';
                if (picked !== undefined) {
                  if (oIdx === st.correct) cls = 'correct';
                  else if (oIdx === picked) cls = 'wrong';
                }
                return `<button class="mcq-opt ${cls}" data-syn-id="${ch.id}" data-syn-step="${sIdx}" data-syn-opt="${oIdx}">${escapeHtml(opt)}</button>`;
              }).join('')}
            </div>
            ${picked !== undefined ? `<div style="font-size:13.5px;color:#065f46;background:#ecfdf5;padding:8px 11px;border-radius:6px;"><strong>解析：</strong>${escapeHtml(st.explain)}</div>` : ''}
          </div>
        `;
      }).join('');

      return `
        <div class="section-card">
          <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px;">
            <span class="badge badge-book">${escapeHtml(ch.difficulty)}</span>
            <span class="badge badge-unit">${ch.stepsCount} Steps 合成挑战</span>
          </div>
          <h2 style="margin:10px 0 6px;">${escapeHtml(ch.title)}</h2>
          <div style="font-size:15px;font-weight:700;color:#1d4ed8;margin-bottom:8px;">
            🎯 起点：<code>${escapeHtml(ch.start)}</code>  ➔  目标产物：<code>${escapeHtml(ch.target)}</code>
          </div>
          <p style="margin:0;color:#334155;">${escapeHtml(ch.briefZh)}</p>
          ${stepsHtml}
          ${allCorrect ? `
            <div class="answer-box" style="margin-top:14px;">
              <strong>🎉 恭喜通关完整合成路线（可直接作为 DSE 标准答案模板）：</strong>
              <div style="font-family:Menlo,monospace;font-weight:700;margin-top:6px;font-size:14px;color:#0f172a;">${escapeHtml(ch.summaryRoute)}</div>
            </div>
          ` : ''}
        </div>
      `;
    }).join('');

    return `
      <div class="unit-hero" style="border-top-color:#ea580c;">
        <h1>🧭 多步有机合成寻路闯关 (Multi-Step Organic Synthesis Pathfinder)</h1>
        <p class="unit-summary">Unit 32 的有机合成路线设计题（"Outline a synthetic route in NOT MORE THAN 3 steps..."）是 Topic 8 的拉分王牌。通过下面的一步步搭桥闯关，把马氏规则、卤代烷中转、氧化/还原剂选择练成肌肉记忆！</p>
      </div>
      ${cards}
    `;
  }

  /* ========================================================================
     DSE LONG-QUESTION CUE-WORD DECODER VIEW
     ======================================================================== */
  function renderDecoderView() {
    const dict = window.DSE_CUE_DICTIONARY || [];
    const q = state.decoderSearch.trim().toLowerCase();
    const units = getOrderedUnits();

    const dictHtml = dict.map(cat => {
      const items = cat.items.filter(it => {
        if (!q) return true;
        return (`${it.cueEn} ${it.zh} ${it.testedConcept} ${it.answerKeywords}`).toLowerCase().includes(q);
      });
      if (!items.length) return '';
      return `
        <div class="section-card">
          <h2 style="margin-top:0;font-size:18.5px;color:#1e3a8a;">📌 ${escapeHtml(cat.category)}</h2>
          <table class="chem-table">
            <thead>
              <tr>
                <th style="width:28%;">考卷英文题眼词 (English Cue in Exam)</th>
                <th style="width:20%;">中文直译</th>
                <th style="width:32%;">🎯 锁定核心考点与章节</th>
                <th style="width:20%;">英文标准答题词</th>
              </tr>
            </thead>
            <tbody>
              ${items.map(it => `
                <tr>
                  <td><mark class="cue-mark" style="cursor:default;">${escapeHtml(it.cueEn)}</mark></td>
                  <td>${escapeHtml(it.zh)}</td>
                  <td><strong>${escapeHtml(it.testedConcept)}</strong></td>
                  <td><code>${escapeHtml(it.answerKeywords)}</code></td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      `;
    }).join('');

    // Aggregate all long questions across all units for quick access
    const allLongCards = units.flatMap(u =>
      (u.unitExamLongQuestions || []).map(lq => ({ unit: u, lq }))
    ).filter(({ unit, lq }) => {
      if (!q) return true;
      return (`${unit.unitNum} ${lq.title} ${lq.scenarioEn}`).toLowerCase().includes(q);
    });

    return `
      <div class="unit-hero" style="border-top-color:#ca8a04;">
        <h1>🎯 HKDSE 英文长问题“题眼解码”宝典 (Exam Cue-Word Decoder)</h1>
        <p class="unit-summary">英文化学长题往往一段话五六行，很多同学不是不会化学，而是没抓准英文题干里的“暗号词（Cue Words）”。熟记下表中的高频英文题眼，一读到对应词组就能条件反射锁定考点！下方还汇总了全站所有单元的长题实战。</p>
        <div style="margin-top:14px;max-width:480px;">
          <input id="decoder-search-input" class="sidebar-search-input" style="background:#fff;" type="text"
            placeholder="🔍 搜索英文题眼或中文考点 (如 orange to green, misty fumes, optically active)..."
            value="${escapeHtml(state.decoderSearch)}"/>
        </div>
      </div>

      ${dictHtml}

      <div class="long-q-section">
        <h2 style="margin-top:0;">📚 全站 9 大单元英文长问题总题库（共 ${allLongCards.length} 道综合大题，均配题眼高亮）</h2>
        ${allLongCards.map(({ unit, lq }) => `
          <div style="margin-top:20px;">
            <div style="display:flex;justify-content:space-between;align-items:center;">
              <span class="badge badge-book">${escapeHtml(unit.book)} · ${escapeHtml(unit.unitNum)}</span>
              <button class="btn-sm" data-jump-unit="${unit.id}">复习 ${escapeHtml(unit.unitNum)} 讲义 →</button>
            </div>
            ${renderLongQuestion(lq)}
          </div>
        `).join('')}
      </div>
    `;
  }

  /* ========================================================================
     BILINGUAL GLOSSARY & MISTAKE / STARRED REVIEW VIEW
     ======================================================================== */
  function renderGlossaryView() {
    const units = getOrderedUnits();
    const q = state.glossarySearch.trim().toLowerCase();

    // Collect starred or wrong-once questions
    const savedItems = [];
    units.forEach(u => {
      (u.sections || []).forEach(sec => {
        (sec.questions || []).forEach(qu => {
          if (state.persisted.starredQuestions[qu.id] || state.persisted.wrongOnceQuestions[qu.id]) {
            savedItems.push({ unit: u, sec, qu });
          }
        });
      });
    });

    const allTerms = [];
    units.forEach(u => {
      (u.keyTerms || []).forEach(t => {
        if (!q || (`${t.en} ${t.zh} ${u.unitNum}`).toLowerCase().includes(q)) {
          allTerms.push({ ...t, unitId: u.id, unitNum: u.unitNum });
        }
      });
    });

    return `
      <div class="unit-hero" style="border-top-color:#4f46e5;">
        <h1>🔤 中英化学术语总词典 &amp; 重点错题复习本</h1>
        <p class="unit-summary">汇总 Topic 7（Book 3A）与 Topic 8（Book 3B）全部核心中英对照术语，以及学习过程中收藏（⭐）或曾答错过的题目。所有学习进度均自动保存在当前设备浏览器中。</p>
        <div style="display:flex;gap:10px;flex-wrap:wrap;margin-top:14px;">
          <button class="btn-sm" id="export-progress-btn">💾 导出学习进度备份 (.json)</button>
          <label class="btn-sm" style="cursor:pointer;">
            📂 导入学习进度备份
            <input type="file" id="import-progress-input" accept=".json" style="display:none;"/>
          </label>
        </div>
      </div>

      <div class="section-card">
        <h2 style="margin-top:0;">⭐ 重点收藏与错题本 (${savedItems.length} 题)</h2>
        ${savedItems.length ? savedItems.map(({ unit, sec, qu }) => `
          <div style="margin-bottom:16px;">
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px;">
              <span class="badge badge-book">${escapeHtml(unit.unitNum)} · ${escapeHtml(sec.code)} ${escapeHtml(sec.titleZh)}</span>
              <button class="btn-sm" data-jump-unit="${unit.id}" data-jump-sec="${sec.id}">回到原章节 →</button>
            </div>
            ${renderSectionQuestion(sec, qu)}
          </div>
        `).join('') : '<p style="color:#64748b;">暂未收藏题目或出现错题。在各章节练习题右上角点击「☆ 收藏到复习本」，或做错选择题时会自动收录到这里方便考前突击！</p>'}
      </div>

      <div class="section-card">
        <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:10px;margin-bottom:12px;">
          <h2 style="margin:0;">📖 Topic 7 &amp; Topic 8 中英化学术语速查表 (${allTerms.length} 条)</h2>
          <input id="glossary-search-input" class="sidebar-search-input" style="max-width:340px;background:#fff;" type="text"
            placeholder="搜中文或英文 (如 烷烃, alkene, reflux, chiral)..."
            value="${escapeHtml(state.glossarySearch)}"/>
        </div>
        <table class="chem-table">
          <thead>
            <tr>
              <th>英文标准术语 (English Exam Term)</th>
              <th>中文名称</th>
              <th>所属单元</th>
              <th>跳转</th>
            </tr>
          </thead>
          <tbody>
            ${allTerms.map(t => `
              <tr>
                <td><strong>${escapeHtml(t.en)}</strong></td>
                <td>${escapeHtml(t.zh)}</td>
                <td>${escapeHtml(t.unitNum)}</td>
                <td><button class="btn-sm" style="padding:3px 9px;font-size:12px;" data-jump-unit="${t.unitId}">查看</button></td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    `;
  }

  /* ========================================================================
     BILINGUAL AUDIO-INTERACTIVE PREVIEW HUB VIEW (U25 - U33)
     ======================================================================== */
  function renderAudioHubView() {
    const t7Keys = ['u25', 'u26', 'u27', 'u28'];
    const t8Keys = ['u29', 'u30', 'u31', 'u32', 'u33'];

    const renderCard = (key) => {
      const c = AUDIO_COURSES[key];
      const url = getAudioPreviewUrl(c.num);
      return `
        <article class="audio-hub-card" style="border-top-color:${c.accent};">
          <div>
            <div class="audio-hub-meta">
              <span style="color:${c.accent};">${escapeHtml(c.book)} · ${escapeHtml(c.unitNum)} (${escapeHtml(c.span)})</span>
              <span class="audio-dur-pill">🎧 ${c.epCount} 讲 · ${c.duration}</span>
            </div>
            <h3 style="margin:8px 0 3px;font-size:18px;color:#0f172a;">${escapeHtml(c.titleZh)}</h3>
            <div style="font-size:12.5px;color:#64748b;font-weight:600;margin-bottom:8px;">${escapeHtml(c.titleEn)}</div>
            <p style="margin:0;font-size:13.2px;color:#334155;line-height:1.58;">${escapeHtml(c.highlights)}</p>
          </div>
          <div class="audio-hub-btns">
            <a class="audio-cta-btn" style="padding:7px 14px;font-size:13px;" href="${url}">▶ 进入有声互动预习课</a>
            <button class="btn-sm" data-jump-unit="${key}">📖 本章三阶闯关刷题</button>
          </div>
        </article>
      `;
    };

    return `
      <div class="unit-hero" style="border-top-color:#4f46e5;">
        <div class="unit-hero-badges">
          <span class="badge badge-book">Topic 7 + Topic 8 全系列有声课堂</span>
          <span class="badge badge-unit">共 9 大单元 · 43 讲分节微课 · 总长 3 小时 53 分钟</span>
        </div>
        <h1>🎧 双语有声互动预习课总站（Unit 25 – Unit 33 全贯通）</h1>
        <p class="unit-summary">
          推荐高效学习闭环：<strong>第一步</strong>先点开对应单元的「有声互动预习课」，跟随陈老师双语推导与动态声画同步黑板建立底层直觉（支持 0.85x–1.5x 倍速与随身盲听）；<strong>第二步</strong>点击课堂右上角「本章闯关刷题」一键跳回本站对应单元，完成 Level 1–3 阶梯训练与 HKDSE 英文长题“题眼解码”！
        </p>
      </div>

      <h2 class="audio-hub-section-title">📘 Book 3A · Topic 7：化石燃料与碳化合物基础（Unit 25 – Unit 28）</h2>
      <div class="audio-hub-grid">
        ${t7Keys.map(renderCard).join('')}
      </div>

      <h2 class="audio-hub-section-title">📗 Book 3B · Topic 8：碳化合物的化学（Unit 29 – Unit 33）</h2>
      <div class="audio-hub-grid">
        ${t8Keys.map(renderCard).join('')}
      </div>
    `;
  }

  /* ========================================================================
     URL HASH / QUERY DEEP-LINK ROUTING (#u25..#u33, #audio, #map, etc.)
     ======================================================================== */
  function syncUrlHash() {
    try {
      const desired = state.view === 'learn' ? `#${state.currentUnitId}` : `#${state.view}`;
      if (window.location.hash !== desired) {
        history.replaceState(null, '', desired);
      }
    } catch (e) {}
  }

  function applyUrlRoute() {
    try {
      const params = new URLSearchParams(window.location.search || '');
      const qUnit = (params.get('unit') || '').trim().toLowerCase();
      const rawHash = decodeURIComponent((window.location.hash || '').replace(/^#/, '')).trim().toLowerCase();
      const token = rawHash || qUnit;
      if (!token) return false;

      if (UNIT_ORDER.includes(token)) {
        state.view = 'learn';
        state.currentUnitId = token;
        savePersisted();
        return true;
      }
      if (['audio', 'map', 'synthesis', 'decoder', 'glossary', 'learn'].includes(token)) {
        state.view = token;
        return true;
      }
    } catch (e) {}
    return false;
  }

  /* ========================================================================
     MAIN RENDER & DELEGATED EVENT LISTENERS
     ======================================================================== */
  function renderApp(keepScroll) {
    updateHeaderStats();

    document.querySelectorAll('[data-top-view]').forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-top-view') === state.view);
    });

    renderSidebar();

    const main = document.getElementById('app-main');
    if (!main) return;

    const prevScroll = window.scrollY;
    if (state.view === 'learn') main.innerHTML = renderLearnView();
    else if (state.view === 'audio') main.innerHTML = renderAudioHubView();
    else if (state.view === 'map') main.innerHTML = renderMapView();
    else if (state.view === 'synthesis') main.innerHTML = renderSynthesisView();
    else if (state.view === 'decoder') main.innerHTML = renderDecoderView();
    else if (state.view === 'glossary') main.innerHTML = renderGlossaryView();

    if (keepScroll) {
      window.scrollTo(0, prevScroll);
    } else {
      window.scrollTo(0, 0);
    }

    // Bind live search inputs in decoder / glossary views
    const decInput = document.getElementById('decoder-search-input');
    if (decInput) {
      decInput.addEventListener('input', (e) => {
        state.decoderSearch = e.target.value;
        const pos = e.target.selectionStart;
        renderApp(true);
        const ni = document.getElementById('decoder-search-input');
        if (ni) { ni.focus(); ni.setSelectionRange(pos, pos); }
      });
    }

    const glInput = document.getElementById('glossary-search-input');
    if (glInput) {
      glInput.addEventListener('input', (e) => {
        state.glossarySearch = e.target.value;
        const pos = e.target.selectionStart;
        renderApp(true);
        const ni = document.getElementById('glossary-search-input');
        if (ni) { ni.focus(); ni.setSelectionRange(pos, pos); }
      });
    }

    const expBtn = document.getElementById('export-progress-btn');
    if (expBtn) {
      expBtn.addEventListener('click', () => {
        const blob = new Blob([JSON.stringify(state.persisted, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'mastering-chemistry-progress.json';
        a.click();
        URL.revokeObjectURL(url);
      });
    }

    const impInput = document.getElementById('import-progress-input');
    if (impInput) {
      impInput.addEventListener('change', (e) => {
        const file = e.target.files && e.target.files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = () => {
          try {
            const data = JSON.parse(reader.result);
            if (data && typeof data === 'object') {
              state.persisted.masteredQuestions = data.masteredQuestions || {};
              state.persisted.starredQuestions = data.starredQuestions || {};
              state.persisted.wrongOnceQuestions = data.wrongOnceQuestions || {};
              savePersisted();
              renderApp(true);
            }
          } catch (err) {
            alert('备份文件格式不正确，请选择有效的 JSON 备份文件。');
          }
        };
        reader.readAsText(file);
      });
    }
  }

  function setupGlobalEvents() {
    document.addEventListener('click', (e) => {
      const target = e.target;

      // Allow direct clicks on audio course links inside sidebar cards without hijacking
      if (target.closest('[data-audio-link]')) {
        return;
      }

      // Mobile sidebar toggle
      if (target.closest('#mobile-menu-btn')) {
        const sb = document.getElementById('app-sidebar');
        if (sb) sb.classList.toggle('open');
        return;
      }

      // Global cue-word highlighter toggle
      if (target.closest('#cue-toggle-btn')) {
        state.cueHighlightOn = !state.cueHighlightOn;
        savePersisted();
        renderApp(true);
        return;
      }

      // Top navigation view switch
      const topBtn = target.closest('[data-top-view]');
      if (topBtn) {
        state.view = topBtn.getAttribute('data-top-view');
        const sb = document.getElementById('app-sidebar');
        if (sb) sb.classList.remove('open');
        syncUrlHash();
        renderApp(false);
        return;
      }

      const swBtn = target.closest('[data-switch-view]');
      if (swBtn) {
        state.view = swBtn.getAttribute('data-switch-view');
        syncUrlHash();
        renderApp(false);
        return;
      }

      // Unit selection in sidebar or footer
      const unitBtn = target.closest('[data-unit-nav]');
      if (unitBtn) {
        state.currentUnitId = unitBtn.getAttribute('data-unit-nav');
        state.view = 'learn';
        savePersisted();
        syncUrlHash();
        const sb = document.getElementById('app-sidebar');
        if (sb) sb.classList.remove('open');
        renderApp(false);
        return;
      }

      // Cross-unit relation jump
      const jumpBtn = target.closest('[data-jump-unit]');
      if (jumpBtn) {
        state.currentUnitId = jumpBtn.getAttribute('data-jump-unit');
        const secId = jumpBtn.getAttribute('data-jump-sec');
        state.view = 'learn';
        savePersisted();
        syncUrlHash();
        renderApp(false);
        if (secId) {
          setTimeout(() => {
            const el = document.getElementById(secId);
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }, 60);
        }
        return;
      }

      // Smooth scroll to section within unit
      const secJump = target.closest('[data-scroll-sec]');
      if (secJump) {
        const el = document.getElementById(secJump.getAttribute('data-scroll-sec'));
        if (el) el.scrollIntoView({ behavior: 'smooth' });
        return;
      }

      // Highlighted cue-word click -> flash corresponding decoder row
      const cueMark = target.closest('[data-cue-row]');
      if (cueMark) {
        const rowId = cueMark.getAttribute('data-cue-row');
        const rowEl = rowId && document.getElementById(rowId);
        if (rowEl) {
          rowEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
          rowEl.classList.add('flash');
          setTimeout(() => rowEl.classList.remove('flash'), 1400);
        }
        return;
      }

      // Quiz Level tab switch
      const lvTab = target.closest('[data-sec-lv]');
      if (lvTab) {
        const secId = lvTab.getAttribute('data-sec-lv');
        state.activeQuizLevel[secId] = Number(lvTab.getAttribute('data-lv'));
        renderApp(true);
        return;
      }

      // MCQ option click
      const mcqBtn = target.closest('[data-mcq-qid]');
      if (mcqBtn) {
        const qId = mcqBtn.getAttribute('data-mcq-qid');
        const idx = Number(mcqBtn.getAttribute('data-mcq-idx'));
        state.selectedMcq[qId] = idx;
        state.revealedAnswers[qId] = true;

        // Locate question to check correctness
        const units = getOrderedUnits();
        for (const u of units) {
          for (const s of (u.sections || [])) {
            for (const q of (s.questions || [])) {
              if (q.id === qId) {
                if (idx === q.answerIndex) {
                  state.persisted.masteredQuestions[qId] = true;
                } else {
                  state.persisted.wrongOnceQuestions[qId] = true;
                }
              }
            }
          }
        }
        savePersisted();
        renderApp(true);
        return;
      }

      // Hint toggle
      const hintBtn = target.closest('[data-hint-qid]');
      if (hintBtn) {
        const qId = hintBtn.getAttribute('data-hint-qid');
        state.revealedHints[qId] = !state.revealedHints[qId];
        renderApp(true);
        return;
      }

      // Answer / Marking Scheme toggle
      const ansBtn = target.closest('[data-ans-qid]');
      if (ansBtn) {
        const qId = ansBtn.getAttribute('data-ans-qid');
        state.revealedAnswers[qId] = !state.revealedAnswers[qId];
        renderApp(true);
        return;
      }

      // Mastered toggle for structured questions
      const masterBtn = target.closest('[data-master-qid]');
      if (masterBtn) {
        const qId = masterBtn.getAttribute('data-master-qid');
        if (state.persisted.masteredQuestions[qId]) {
          delete state.persisted.masteredQuestions[qId];
        } else {
          state.persisted.masteredQuestions[qId] = true;
        }
        savePersisted();
        renderApp(true);
        return;
      }

      // Star / bookmark toggle
      const starBtn = target.closest('[data-star-qid]');
      if (starBtn) {
        const qId = starBtn.getAttribute('data-star-qid');
        if (state.persisted.starredQuestions[qId]) {
          delete state.persisted.starredQuestions[qId];
        } else {
          state.persisted.starredQuestions[qId] = true;
        }
        savePersisted();
        renderApp(true);
        return;
      }

      // Reaction Map Node click
      const mapNode = target.closest('[data-map-node]');
      if (mapNode) {
        state.mapSelectedNode = mapNode.getAttribute('data-map-node');
        state.mapSelectedEdge = null;
        renderApp(true);
        return;
      }

      // Reaction Map Edge click
      const mapEdge = target.closest('[data-map-edge]');
      if (mapEdge) {
        state.mapSelectedEdge = mapEdge.getAttribute('data-map-edge');
        renderApp(true);
        return;
      }

      if (target.closest('[data-map-reset]')) {
        state.mapSelectedNode = null;
        state.mapSelectedEdge = null;
        renderApp(true);
        return;
      }

      // Synthesis Pathfinder option click
      const synBtn = target.closest('[data-syn-id]');
      if (synBtn) {
        const synId = synBtn.getAttribute('data-syn-id');
        const stepIdx = Number(synBtn.getAttribute('data-syn-step'));
        const optIdx = Number(synBtn.getAttribute('data-syn-opt'));
        state.synProgress[synId] = state.synProgress[synId] || {};
        state.synProgress[synId][stepIdx] = optIdx;
        renderApp(true);
      }
    });

    // Preserve structured draft text without re-rendering on keystroke
    document.addEventListener('input', (e) => {
      const ta = e.target.closest('[data-draft-qid]');
      if (ta) {
        state.draftTexts[ta.getAttribute('data-draft-qid')] = ta.value;
      }
    });
  }

  function initApp() {
    loadPersisted();
    applyUrlRoute();
    setupGlobalEvents();
    window.addEventListener('hashchange', () => {
      if (applyUrlRoute()) {
        renderApp(false);
      }
    });
    renderApp(false);
  }

  if (document.readyState === 'loading') {
    window.addEventListener('DOMContentLoaded', initApp);
  } else {
    initApp();
  }
})();
