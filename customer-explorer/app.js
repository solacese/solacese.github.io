(function() {
  'use strict';

  // ---- Language state ----
  var LANG = 'en'; // 'en' or 'ja'

  // ---- Bilingual UI strings ----
  var STRINGS = {
    en: {
      back: 'Back',
      roleHeader: "What's your role?",
      roleSubtitle: "We'll tailor everything you see to what matters most to you.",
      industryHeader: 'What industry are you in?',
      industrySubtitle: "We'll show you stories and possibilities from your world.",
      welcomeEyebrow: 'Solace Explorer',
      welcomeTitle: 'Discover what <em>real-time</em> looks like in your world',
      welcomeSubtitle: "See how organisations like yours use event-driven architecture to move faster, integrate smarter, and unlock what's next.",
      welcomeCta: 'Start exploring',
      fromOrgs: 'From organisations like yours',
      whySolace: 'Why Solace',
      logoSectionTitle: 'Solace customers in this space',
      refArch: 'Reference architecture',
      eventMeshLabel: 'Solace event mesh',
      opTech: 'Operational technology',
      enterprise: 'Enterprise & consumer',
      deployFootnote: 'All managed through <span>Solace Cloud</span> — single pane of glass across every deployment',
      goDeeper: 'Go deeper',
      exploreFurther: 'Explore further',
      ctaSubtitle: 'No pitch, no pressure. Just a conversation with someone who understands your world.',
      ctaPrimary: 'Start a conversation',
      ctaSecondary: 'Not ready yet? Browse resources →',
      readMore: 'Read more',
      showLess: 'Show less',
      comingSoon: 'Coming soon',
      contentSoon: 'Content coming soon',
      contentSoonSub: 'We are building stories for this combination.',
      readStory: 'Read story \u2197',
      or: 'or',
      moreCustomers: '+ {n} more transportation & logistics customers worldwide',
      trustedBy: 'Trusted by leaders in {industry}',
      storyTitles: {
        technology: 'What leaders like you are doing',
        integration: 'How teams like yours are delivering',
        business: 'The results that matter',
        architect: 'Patterns in production'
      },
      resultTitles: {
        technology: 'What technology leaders in <em>{i}</em> are doing',
        integration: 'How integration teams in <em>{i}</em> are modernising',
        business: 'The business impact of real-time in <em>{i}</em>',
        architect: 'Architecture patterns transforming <em>{i}</em>'
      },
      resultSubtitles: {
        technology: 'See how organisations like yours are using event-driven architecture to reduce risk, consolidate vendors, and accelerate digital transformation in {i}.',
        integration: 'See how integration and middleware teams in {i} are consolidating platforms, replacing legacy middleware, and delivering faster.',
        business: 'See how real-time, event-driven operations are driving revenue, improving customer experience, and transforming how {i} organisations compete.',
        architect: 'See the architectural patterns, deployment models, and protocol strategies that {i} organisations are using with Solace.'
      },
      valuesTitlePrefix: 'Why Solace for <em>{i}</em>',
      ctaTitle: 'Talk to someone who knows <em>{i}</em>'
    },
    ja: {
      back: '戻る',
      roleHeader: 'あなたの役割は何ですか？',
      roleSubtitle: 'あなたにとって最も重要なことに合わせて、すべてをカスタマイズします。',
      industryHeader: 'あなたの業界はどちらですか？',
      industrySubtitle: 'あなたの業界のストーリーと可能性をご紹介します。',
      welcomeEyebrow: 'Solace Explorer',
      welcomeTitle: 'あなたの世界で<em>リアルタイム</em>がどう見えるかを発見する',
      welcomeSubtitle: 'あなたと同じような組織が、イベント駆動型アーキテクチャを活用して、より速く動き、よりスマートに統合し、次のステージを切り開く方法をご覧ください。',
      welcomeCta: '探索を始める',
      fromOrgs: '同じような組織の事例',
      whySolace: 'Solace を選ぶ理由',
      logoSectionTitle: 'この分野の Solace 導入企業',
      refArch: 'リファレンスアーキテクチャ',
      eventMeshLabel: 'Solace イベントメッシュ',
      opTech: 'オペレーショナルテクノロジー',
      enterprise: 'エンタープライズ・コンシューマー',
      deployFootnote: 'すべて <span>Solace Cloud</span> で管理 — あらゆるデプロイ環境を一元的に可視化',
      goDeeper: 'さらに深掘りする',
      exploreFurther: '詳細を探索する',
      ctaSubtitle: 'セールストークも押し売りもありません。あなたの業界を理解した担当者との率直な会話です。',
      ctaPrimary: '会話を始める',
      ctaSecondary: 'まだ準備ができていない方はリソースをご覧ください →',
      readMore: '続きを読む',
      showLess: '折りたたむ',
      comingSoon: '近日公開',
      contentSoon: 'コンテンツを準備中です',
      contentSoonSub: 'この組み合わせのストーリーを作成しています。',
      readStory: '事例を読む \u2197',
      or: 'または',
      moreCustomers: '+ {n} 社以上の交通・物流分野のお客様が世界中で導入しています',
      trustedBy: '{industry}のリーダー企業に信頼されています',
      storyTitles: {
        technology: 'あなたと同じリーダーたちの取り組み',
        integration: 'あなたと同じチームの実績',
        business: '重要な成果',
        architect: '本番環境で実証されたパターン'
      },
      resultTitles: {
        technology: '<em>{i}</em>のテクノロジーリーダーが取り組んでいること',
        integration: '<em>{i}</em>の統合チームがモダナイゼーションを進める方法',
        business: '<em>{i}</em>におけるリアルタイム活用のビジネスインパクト',
        architect: '<em>{i}</em>を変革するアーキテクチャパターン'
      },
      resultSubtitles: {
        technology: 'あなたと同じような組織が、イベント駆動型アーキテクチャを活用してリスクを低減し、ベンダーを集約し、{i}のデジタルトランスフォーメーションを加速する方法をご覧ください。',
        integration: '{i}の統合・ミドルウェアチームが、プラットフォームの集約、レガシーミドルウェアの刷新、そして迅速なデリバリーを実現する方法をご覧ください。',
        business: 'リアルタイムのイベント駆動型オペレーションが、{i}の組織において収益を向上させ、顧客体験を改善し、競争力を変革している方法をご覧ください。',
        architect: '{i}の組織が Solace を活用して実践しているアーキテクチャパターン、デプロイモデル、プロトコル戦略をご覧ください。'
      },
      valuesTitlePrefix: '<em>{i}</em>に Solace が選ばれる理由',
      ctaTitle: '<em>{i}</em>業界を熟知した担当者と話す'
    }
  };

  function t(key) { return STRINGS[LANG][key] || STRINGS.en[key] || key; }
  function tpl(key, vars) {
    var s = t(key);
    if (vars) Object.keys(vars).forEach(function(k) { s = s.replace(new RegExp('{' + k + '}', 'g'), vars[k]); });
    return s;
  }

  // ---- Label maps ----
  var roleLabels = {
    en: {
      technology: 'Technology Leader',
      integration: 'Integration & Middleware',
      business: 'Business & Operations',
      architect: 'Architecture & Engineering'
    },
    ja: {
      technology: 'テクノロジーリーダー',
      integration: '統合・ミドルウェア',
      business: 'ビジネス・オペレーション',
      architect: 'アーキテクチャ・エンジニアリング'
    }
  };

  var industryLabels = {
    en: {
      aviation: 'Aviation & Airports',
      logistics: 'Logistics & Shipping',
      rail: 'Rail & Transit',
      automotive: 'Automotive & Mobility',
      financial: 'Financial Services',
      retail: 'Retail & eCommerce',
      manufacturing: 'Manufacturing',
      "manufacturing-cpg": 'Manufacturing & CPG',
      energy: 'Energy & Utilities',
      telecom: 'Telecommunications',
      cpg: 'Consumer Goods',
      lifesciences: 'Healthcare & Life Sciences',
      "public-sector": "Public Sector",
      exploring: 'General'
    },
    ja: {
      aviation: '航空・空港',
      logistics: '物流・海運',
      rail: '鉄道・交通',
      automotive: '自動車・モビリティ',
      financial: '金融サービス',
      retail: '小売・eコマース',
      manufacturing: '製造',
      "manufacturing-cpg": '製造・CPG',
      energy: 'エネルギー・公共インフラ',
      telecom: '通信',
      cpg: '消費財',
      lifesciences: 'ヘルスケア・ライフサイエンス',
      "public-sector": "公共セクター",
      exploring: '一般'
    }
  };

  var industryShortLabels = {
    en: {
      aviation: 'aviation',
      logistics: 'logistics & shipping',
      rail: 'rail & transit',
      automotive: 'automotive',
      financial: 'financial services',
      retail: 'retail',
      manufacturing: 'manufacturing',
      "manufacturing-cpg": 'manufacturing & CPG',
      energy: 'energy',
      telecom: 'telecom',
      cpg: 'consumer goods',
      lifesciences: 'healthcare & life sciences',
      "public-sector": "public sector",
      exploring: 'your industry'
    },
    ja: {
      aviation: '航空',
      logistics: '物流・海運',
      rail: '鉄道・交通',
      automotive: '自動車',
      financial: '金融サービス',
      retail: '小売',
      manufacturing: '製造',
      "manufacturing-cpg": '製造・CPG',
      energy: 'エネルギー',
      telecom: '通信',
      cpg: '消費財',
      lifesciences: 'ヘルスケア',
      "public-sector": "公共セクター",
      exploring: 'あなたの業界'
    }
  };

  function getRoleLabel(role) { return (roleLabels[LANG] || roleLabels.en)[role] || role; }
  function getIndustryLabel(ind) { return (industryLabels[LANG] || industryLabels.en)[ind] || ind; }
  function getIndustryShort(ind) { return (industryShortLabels[LANG] || industryShortLabels.en)[ind] || ind; }

  // ---- State ----
  var currentScreen = 'welcome';
  var selectedRole = null;
  var selectedIndustry = null;
  var history = [];

  // ---- Language toggle ----
  function setLang(lang) {
    LANG = lang;
    // Update toggle button states
    var btnEn = document.getElementById('langBtnEn');
    var btnJa = document.getElementById('langBtnJa');
    if (btnEn) btnEn.classList.toggle('active', lang === 'en');
    if (btnJa) btnJa.classList.toggle('active', lang === 'ja');

    // Re-render current screen static text
    renderStaticStrings();

    // If on result screen, re-render the dynamic content too
    if (currentScreen === 'result' && selectedRole && selectedIndustry) {
      populateResult();
    }

    // Update breadcrumb
    updateNav();
  }

  function renderStaticStrings() {
    var s = STRINGS[LANG];

    // Nav back button
    var backBtn = document.getElementById('backBtn');
    if (backBtn) {
      backBtn.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H5"/><path d="M12 19l-7-7 7-7"/></svg> ' + s.back;
    }

    // Welcome screen
    setHTML('welcome-title-el', s.welcomeTitle);
    setText('welcome-subtitle-el', s.welcomeSubtitle);
    setHTML('welcome-cta-el', s.welcomeCta + ' <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="M12 5l7 7-7 7"/></svg>');

    // Role screen
    setText('role-header-el', s.roleHeader);
    setText('role-subtitle-el', s.roleSubtitle);

    // Role cards
    var roleData = {
      technology: {
        en: { h: 'Technology Leader', p: "CTO, CIO, VP Engineering — you're driving the technology strategy and making build-vs-buy decisions." },
        ja: { h: 'テクノロジーリーダー', p: 'CTO、CIO、VP Engineering — テクノロジー戦略を推進し、自社開発か外部調達かの意思決定を行う立場です。' }
      },
      integration: {
        en: { h: 'Integration & Middleware', p: "Head of Integration, Middleware Lead — you're responsible for connecting systems and modernising the integration layer." },
        ja: { h: '統合・ミドルウェア', p: '統合担当責任者、ミドルウェアリード — システム間の連携と統合レイヤーのモダナイゼーションを担っています。' }
      },
      business: {
        en: { h: 'Business & Operations', p: "VP Operations, Head of Digital — you care about speed, customer experience, and operational results." },
        ja: { h: 'ビジネス・オペレーション', p: 'VP Operations、デジタル責任者 — スピード、顧客体験、そして業務成果を重視する立場です。' }
      },
      architect: {
        en: { h: 'Architecture & Engineering', p: "Enterprise Architect, Solutions Architect, Principal Engineer — you design the systems and choose the patterns." },
        ja: { h: 'アーキテクチャ・エンジニアリング', p: 'エンタープライズアーキテクト、ソリューションアーキテクト、プリンシパルエンジニア — システムを設計し、パターンを選定する立場です。' }
      }
    };
    ['technology','integration','business','architect'].forEach(function(r) {
      var d = roleData[r][LANG];
      setText('role-card-h-' + r, d.h);
      setText('role-card-p-' + r, d.p);
    });

    // Industry screen
    setText('industry-header-el', s.industryHeader);
    setText('industry-subtitle-el', s.industrySubtitle);

    // Industry cards
    var indData = {
      aviation:           { en: { h: 'Aviation & Airports', p: 'Airlines, air traffic, airport operations' }, ja: { h: '航空・空港', p: '航空会社、航空管制、空港運営' } },
      logistics:          { en: { h: 'Logistics & Shipping', p: 'Ports, freight, postal, supply chain' }, ja: { h: '物流・海運', p: '港湾、貨物、郵便、サプライチェーン' } },
      rail:               { en: { h: 'Rail & Transit', p: 'Railways, transit operators, passenger systems' }, ja: { h: '鉄道・交通', p: '鉄道事業者、交通機関、旅客システム' } },
      automotive:         { en: { h: 'Automotive & Mobility', p: 'Connected vehicles, manufacturing, fleet' }, ja: { h: '自動車・モビリティ', p: 'コネクテッドカー、製造、フリート管理' } },
      financial:          { en: { h: 'Financial Services', p: 'Capital markets, banking, payments, insurance' }, ja: { h: '金融サービス', p: '資本市場、銀行、決済、保険' } },
      retail:             { en: { h: 'Retail & eCommerce', p: 'Omnichannel, store connectivity, supply chain' }, ja: { h: '小売・eコマース', p: 'オムニチャネル、店舗接続、サプライチェーン' } },
      'manufacturing-cpg':{ en: { h: 'Manufacturing & CPG', p: 'Factory automation, supply chain, SAP integration' }, ja: { h: '製造・CPG', p: '工場自動化、サプライチェーン、SAP 統合' } },
      energy:             { en: { h: 'Energy & Utilities', p: 'Grid operations, renewables, oil & gas, mining' }, ja: { h: 'エネルギー・公共インフラ', p: 'グリッド運用、再生可能エネルギー、石油・ガス、鉱業' } },
      telecom:            { en: { h: 'Telecommunications', p: 'Network operators, 5G, IoT connectivity' }, ja: { h: '通信', p: 'ネットワーク事業者、5G、IoT 接続' } },
      lifesciences:       { en: { h: 'Healthcare & Life Sciences', p: 'Pharma, medical devices, clinical operations' }, ja: { h: 'ヘルスケア・ライフサイエンス', p: '製薬、医療機器、臨床業務' } },
      'public-sector':    { en: { h: 'Public Sector', p: 'Government, defence, education' }, ja: { h: '公共セクター', p: '政府、防衛、教育' } },
      exploring:          { en: { h: 'Just Exploring', p: "Not in a specific industry? See a general overview of what Solace makes possible." }, ja: { h: 'まずは見てみる', p: '特定の業界に属さない方も、Solaceが実現できることの概要をご覧いただけます。' } }
    };
    Object.keys(indData).forEach(function(k) {
      var d = indData[k][LANG];
      if (d) {
        setText('ind-card-h-' + k, d.h);
        setText('ind-card-p-' + k, d.p);
      }
    });

    // Grid divider or/または
    setText('grid-divider-el', s.or);

    // Result screen static labels
    setText('stories-label-el', s.fromOrgs);
    setText('why-solace-label-el', s.whySolace);
    setText('logo-section-title-el', s.logoSectionTitle);
    setText('ref-arch-label-el', s.refArch);
    setText('arch-mesh-label-el', s.eventMeshLabel);
    setHTML('deploy-footnote-el', s.deployFootnote);
    setText('go-deeper-label-el', s.goDeeper);
    setText('explore-further-title-el', s.exploreFurther);
    setText('cta-subtitle-el', s.ctaSubtitle);
    setText('cta-secondary-el', s.ctaSecondary);
    setHTML('cta-primary-el', s.ctaPrimary + ' <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="16" height="16"><path d="M5 12h14"/><path d="M12 5l7 7-7 7"/></svg>');
  }

  function setText(id, val) { var el = document.getElementById(id); if (el && val !== undefined) el.textContent = val; }
  function setHTML(id, val) { var el = document.getElementById(id); if (el && val !== undefined) el.innerHTML = val; }

  // ---- Navigation ----
  function goToScreen(screenId) {
    if (screenId === currentScreen) return;
    var current = document.getElementById('screen-' + currentScreen);
    var next = document.getElementById('screen-' + screenId);
    if (!next) return;
    if (currentScreen !== screenId) history.push(currentScreen);
    current.classList.add('exiting');
    current.classList.remove('active');
    setTimeout(function() {
      current.classList.remove('exiting');
      next.classList.add('active');
      currentScreen = screenId;
      animateCards(next);
      updateNav();
      if (screenId === 'result') next.scrollTop = 0;
    }, 300);
  }

  function goBack() {
    if (history.length === 0) return;
    var prev = history.pop();
    if (prev === 'welcome') { selectedRole = null; selectedIndustry = null; }
    else if (prev === 'role') { selectedIndustry = null; }
    var current = document.getElementById('screen-' + currentScreen);
    var next = document.getElementById('screen-' + prev);
    current.classList.add('exiting');
    current.classList.remove('active');
    setTimeout(function() {
      current.classList.remove('exiting');
      next.classList.add('active');
      currentScreen = prev;
      animateCards(next);
      updateNav();
    }, 300);
  }

  function animateCards(screen) {
    var cards = screen.querySelectorAll('.card:not([style*="opacity: 0.4"])');
    cards.forEach(function(card, i) {
      card.classList.remove('animate');
      card.style.animationDelay = (i * 0.07 + 0.15) + 's';
      void card.offsetWidth;
      card.classList.add('animate');
    });
  }

  function updateNav() {
    var nav = document.getElementById('navbar');
    var backBtn = document.getElementById('backBtn');
    var breadcrumb = document.getElementById('breadcrumb');

    if (currentScreen !== 'welcome') {
      nav.classList.add('visible');
      backBtn.classList.add('visible');
    } else {
      nav.classList.add('visible');
      backBtn.classList.remove('visible');
    }

    var crumbs = [];
    if (selectedRole) crumbs.push({ label: getRoleLabel(selectedRole), screen: 'role' });
    if (selectedIndustry) crumbs.push({ label: getIndustryLabel(selectedIndustry), screen: 'industry' });

    if (crumbs.length > 0) {
      breadcrumb.classList.add('visible');
      breadcrumb.innerHTML = crumbs.map(function(c, i) {
        var isLast = i === crumbs.length - 1;
        var sep = i < crumbs.length - 1 ? '<span class="separator">\u203a</span>' : '';
        var cls = isLast ? 'crumb current' : 'crumb';
        return '<span class="' + cls + '" onclick="window._goToScreen(\'' + c.screen + '\')">' + c.label + '</span>' + sep;
      }).join('');
    } else {
      breadcrumb.classList.remove('visible');
      breadcrumb.innerHTML = '';
    }
  }

  // ---- Selection handlers ----
  function selectRole(role) { selectedRole = role; goToScreen('industry'); }
  function selectIndustry(industry) { selectedIndustry = industry; populateResult(); goToScreen('result'); }

  // ---- Populate result screen ----
  function populateResult() {
    var role = selectedRole;
    var industry = selectedIndustry;
    var roleLabel = getRoleLabel(role);
    var industryLabel = getIndustryLabel(industry);
    var iShort = getIndustryShort(industry);
    var s = STRINGS[LANG];

    document.getElementById('resultTag').textContent = roleLabel + ' \u00B7 ' + industryLabel;

    // Update persona switcher
    var switcher = document.getElementById('personaSwitcher');
    if (switcher) {
      var btns = switcher.querySelectorAll('.persona-btn');
      btns.forEach(function(btn) {
        var btnRole = btn.getAttribute('data-role');
        btn.classList.toggle('active', btnRole === role);
      });
      // Update labels for current language
      var roleKeys = ['technology', 'integration', 'business', 'architect'];
      roleKeys.forEach(function(rk) {
        var labelEl = document.getElementById('persona-btn-' + rk);
        if (labelEl) labelEl.textContent = getRoleLabel(rk);
      });
    }
    document.getElementById('resultTitle').innerHTML = tpl('resultTitles.' + role, { i: iShort }).replace('resultTitles.' + role, '') || s.resultTitles[role].replace(/{i}/g, iShort);
    document.getElementById('resultSubtitle').textContent = s.resultSubtitles[role].replace(/{i}/g, iShort);
    document.getElementById('storiesTitle').textContent = s.storyTitles[role];
    document.getElementById('valuesTitle').innerHTML = s.valuesTitlePrefix.replace(/{i}/g, iShort);
    document.getElementById('ctaIndustry').textContent = iShort;

    // Fix resultTitle with proper template
    document.getElementById('resultTitle').innerHTML = s.resultTitles[role].replace(/{i}/g, iShort);

    var content = (typeof getContent === 'function') ? getContent(role, industry, LANG) : null;

    var sc = document.getElementById('storiesContainer');
    if (sc && content && content.stories) {
      sc.innerHTML = content.stories.map(function(story) {
        return '<div class="story-card">' +
          '<div class="story-headline">' + story.headline + '</div>' +
          '<div class="story-outcome">' + story.outcome + '</div>' +
          '<button class="story-expand" onclick="toggleStory(this)">' +
            s.readMore + ' <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg>' +
          '</button>' +
          '<div class="story-detail"><div class="story-detail-inner">' + story.detail + '</div></div>' +
        '</div>';
      }).join('');
    } else if (sc) {
      sc.innerHTML = '<div class="story-card"><div class="story-headline">' + s.contentSoon + '</div><div class="story-outcome">' + s.contentSoonSub + '</div></div>';
    }

    var vg = document.getElementById('valuesGrid');
    if (vg && content && content.values) {
      vg.innerHTML = content.values.map(function(v) {
        return '<div class="value-card"><h4>' + v.title + '</h4><p>' + v.text + '</p></div>';
      }).join('');
    }

    var el = document.getElementById('exploreLinks');
    if (el && content && content.links) {
      var icons = {
        doc: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><path d="M14 2v6h6"/><path d="M16 13H8"/><path d="M16 17H8"/><path d="M10 9H8"/></svg>',
        video: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/></svg>',
        globe: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg>'
      };
      var arrow = '<svg class="arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="M12 5l7 7-7 7"/></svg>';
      var genericUrls = ['https://solace.com/resources/', 'https://solace.com/company/customers/'];
      el.innerHTML = content.links.map(function(l) {
        var isGeneric = genericUrls.indexOf(l.url) > -1;
        if (isGeneric) {
          return '<div class="explore-link explore-link-soon">' +
            (icons[l.icon] || icons.doc) + ' ' + l.text +
            '<span class="soon-badge">' + s.comingSoon + '</span></div>';
        } else {
          return '<a class="explore-link" href="' + l.url + '" target="_blank" rel="noopener">' +
            (icons[l.icon] || icons.doc) + ' ' + l.text + ' ' + arrow + '</a>';
        }
      }).join('');
    }

    renderArchitecture(industry);
    renderLogos(industry);
  }

  // ---- Architecture diagram rendering ----
  var archActiveKey = null;

  function renderArchitecture(industry) {
    var ARCH = (LANG === 'ja') ?
      (typeof ARCHITECTURE_JA !== 'undefined' ? ARCHITECTURE_JA : null) :
      (typeof ARCHITECTURE_EN !== 'undefined' ? ARCHITECTURE_EN : null);
    var arch = ARCH ? ARCH[industry] : null;
    var section = document.getElementById('archSection');
    if (!section) return;
    if (!arch) { section.style.display = 'none'; return; }
    section.style.display = '';

    document.getElementById('archTitle').textContent = arch.title;
    document.getElementById('archDesc').textContent = arch.description;

    archActiveKey = null;
    var panel = document.getElementById('detailPanel');
    if (panel) panel.classList.remove('open');

    var s = STRINGS[LANG];
    var leftEl = document.getElementById('archLeft');
    leftEl.innerHTML = '<div class="col-label">' + s.opTech + '</div><div class="col-nodes">' +
      arch.left.map(function(n) {
        return '<div class="sys-node" onclick="showArchDetail(\'' + n.id + '\')">' +
          '<div class="sn-name">' + n.name + '</div>' +
          '<div class="sn-proto">' + n.proto + '</div>' +
          '<div class="sn-flows">' + n.flows + '</div></div>';
      }).join('') + '</div>';

    var rightEl = document.getElementById('archRight');
    rightEl.innerHTML = '<div class="col-label">' + s.enterprise + '</div><div class="col-nodes">' +
      arch.right.map(function(n) {
        return '<div class="sys-node" onclick="showArchDetail(\'' + n.id + '\')">' +
          '<div class="sn-name">' + n.name + '</div>' +
          '<div class="sn-proto">' + n.proto + '</div>' +
          '<div class="sn-flows">' + n.flows + '</div></div>';
      }).join('') + '</div>';

    var deployEl = document.getElementById('archDeploy');
    deployEl.innerHTML = arch.deploy.map(function(d) {
      return '<div class="deploy-tag" onclick="showArchDetail(\'' + d.id + '\')">' +
        '<div class="dt-label">' + d.label + '</div><div class="dt-sub">' + d.sub + '</div></div>';
    }).join('');
  }

  function showArchDetail(key) {
    var ARCH = (LANG === 'ja') ?
      (typeof ARCHITECTURE_JA !== 'undefined' ? ARCHITECTURE_JA : null) :
      (typeof ARCHITECTURE_EN !== 'undefined' ? ARCHITECTURE_EN : null);
    var arch = ARCH ? ARCH[selectedIndustry] : null;
    if (!arch) return;

    var panel = document.getElementById('detailPanel');
    document.querySelectorAll('.sys-node.on, .deploy-tag.on').forEach(function(el) { el.classList.remove('on'); });

    if (archActiveKey === key) {
      panel.classList.remove('open');
      archActiveKey = null;
      return;
    }

    var tipData = null;
    var allNodes = arch.left.concat(arch.right);
    for (var i = 0; i < allNodes.length; i++) {
      if (allNodes[i].id === key) { tipData = allNodes[i].tip; break; }
    }
    if (!tipData) {
      for (var j = 0; j < arch.deploy.length; j++) {
        if (arch.deploy[j].id === key) { tipData = { t: arch.deploy[j].label, d: arch.deploy[j].tip, f: '' }; break; }
      }
    }
    if (!tipData) return;

    var allClickables = document.querySelectorAll('.sys-node, .deploy-tag');
    allClickables.forEach(function(el) {
      var handler = el.getAttribute('onclick') || '';
      if (handler.indexOf("'" + key + "'") > -1) el.classList.add('on');
    });

    archActiveKey = key;
    document.getElementById('dpTitle').textContent = tipData.t;
    var flowEl = document.getElementById('dpFlow');
    flowEl.textContent = tipData.f;
    flowEl.style.display = tipData.f ? '' : 'none';
    document.getElementById('dpDesc').textContent = tipData.d;
    panel.classList.add('open');
  }

  window.showArchDetail = showArchDetail;

  // ---- Logo bar rendering ----
  function renderLogos(industry) {
    var LOGOS = (LANG === 'ja') ?
      (typeof LOGOS_JA !== 'undefined' ? LOGOS_JA : null) :
      (typeof LOGOS_EN !== 'undefined' ? LOGOS_EN : null);
    var EXTRA = (LANG === 'ja') ?
      (typeof LOGO_EXTRA_COUNT_JA !== 'undefined' ? LOGO_EXTRA_COUNT_JA : {}) :
      (typeof LOGO_EXTRA_COUNT_EN !== 'undefined' ? LOGO_EXTRA_COUNT_EN : {});

    var logos = LOGOS ? LOGOS[industry] : null;
    var section = document.getElementById('logoSection');
    if (!section) return;
    if (!logos || logos.length === 0) { section.style.display = 'none'; return; }
    section.style.display = '';

    var iShort = getIndustryShort(industry);
    document.getElementById('logoLabel').textContent = STRINGS[LANG].trustedBy.replace('{industry}', iShort);

    var band = document.getElementById('logoBand');
    band.innerHTML = logos.map(function(l) {
      return '<a class="logo-item" href="' + l.url + '" target="_blank" rel="noopener">' +
        '<div class="logo-mark" style="' + (l.style || '') + '">' + l.name + '</div>' +
        '<span class="logo-link">' + STRINGS[LANG].readStory + '</span></a>';
    }).join('');

    var extra = EXTRA[industry] || 0;
    var countEl = document.getElementById('logoCount');
    if (extra > 0) {
      countEl.textContent = STRINGS[LANG].moreCustomers.replace('{n}', extra);
      countEl.style.display = '';
    } else {
      countEl.style.display = 'none';
    }
  }

  // ---- Story expand/collapse ----
  function toggleStory(btn) {
    var detail = btn.nextElementSibling;
    btn.classList.toggle('open');
    detail.classList.toggle('open');
    var s = STRINGS[LANG];
    btn.innerHTML = btn.classList.contains('open')
      ? s.showLess + ' <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg>'
      : s.readMore + ' <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg>';
  }

  // ---- Expose to global ----
  window.goToScreen = goToScreen;
  window._goToScreen = function(screen) {
    if (screen === 'role') { selectedRole = null; selectedIndustry = null; history.length = 0; }
    else if (screen === 'industry') { selectedIndustry = null; while (history.length > 1) history.pop(); }
    goToScreen(screen);
  };
  window.goBack = goBack;
  window.selectRole = selectRole;
  window.selectIndustry = selectIndustry;
  window.toggleStory = toggleStory;
  window.setLang = setLang;

  function switchPersona(role) {
    selectedRole = role;
    populateResult();
    updateNav();
    // Scroll to top of result container
    var container = document.getElementById('screen-result');
    if (container) container.scrollTo(0, 0);
  }
  window.switchPersona = switchPersona;

  // ---- Init ----
  var welcomeScreen = document.getElementById('screen-welcome');
  if (welcomeScreen) {
    renderStaticStrings();
    updateNav();
  }

  // Handle URL params
  var params = new URLSearchParams(window.location.search);
  var urlRole = params.get('role');
  var urlIndustry = params.get('industry');
  var urlLang = params.get('lang');
  if (urlLang === 'ja') { LANG = 'ja'; renderStaticStrings(); }

  if (urlRole && (roleLabels.en[urlRole] || roleLabels.ja[urlRole])) {
    selectedRole = urlRole;
    if (urlIndustry && (industryLabels.en[urlIndustry] || industryLabels.ja[urlIndustry])) {
      selectedIndustry = urlIndustry;
      populateResult();
      document.getElementById('screen-welcome').classList.remove('active');
      document.getElementById('screen-result').classList.add('active');
      currentScreen = 'result';
      history.push('welcome', 'role', 'industry');
    } else {
      document.getElementById('screen-welcome').classList.remove('active');
      document.getElementById('screen-industry').classList.add('active');
      currentScreen = 'industry';
      history.push('welcome', 'role');
      animateCards(document.getElementById('screen-industry'));
    }
    updateNav();
  }

  // Init lang toggle button states
  setLang(LANG);

})();
