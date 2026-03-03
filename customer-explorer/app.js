(function() {
  'use strict';

  // ---- State ----
  let currentScreen = 'welcome';
  let selectedRole = null;
  let selectedIndustry = null;
  const history = [];

  // ---- Label maps ----
  const roleLabels = {
    technology: 'Technology Leader',
    integration: 'Integration & Middleware',
    business: 'Business & Operations',
    architect: 'Architecture & Engineering'
  };

  const industryLabels = {
    aviation: 'Aviation & Airports',
    logistics: 'Logistics & Shipping',
    rail: 'Rail & Transit',
    automotive: 'Automotive & Mobility',
    financial: 'Financial Services',
    retail: 'Retail & eCommerce',
    manufacturing: 'Manufacturing',
    energy: 'Energy & Utilities',
    telecom: 'Telecommunications',
    cpg: 'Consumer Goods',
    healthcare: 'Healthcare & Life Sciences',
    public_sector: 'Public Sector',
    exploring: 'General'
  };

  const industryShortLabels = {
    aviation: 'aviation',
    logistics: 'logistics & shipping',
    rail: 'rail & transit',
    automotive: 'automotive',
    financial: 'financial services',
    retail: 'retail',
    manufacturing: 'manufacturing',
    energy: 'energy',
    telecom: 'telecom',
    cpg: 'consumer goods',
    healthcare: 'healthcare',
    public_sector: 'public sector',
    exploring: 'your industry'
  };

  // ---- Navigation ----
  function goToScreen(screenId) {
    if (screenId === currentScreen) return;

    const current = document.getElementById('screen-' + currentScreen);
    const next = document.getElementById('screen-' + screenId);

    if (!next) return;

    // Push current to history
    if (currentScreen !== screenId) {
      history.push(currentScreen);
    }

    // Animate out
    current.classList.add('exiting');
    current.classList.remove('active');

    setTimeout(() => {
      current.classList.remove('exiting');

      // Animate in
      next.classList.add('active');
      currentScreen = screenId;

      // Animate cards with stagger
      animateCards(next);

      // Update nav
      updateNav();

      // Scroll to top for result screen
      if (screenId === 'result') {
        next.scrollTop = 0;
      }
    }, 300);
  }

  function goBack() {
    if (history.length === 0) return;
    const prev = history.pop();

    // Reset selections if going back past them
    if (prev === 'welcome') {
      selectedRole = null;
      selectedIndustry = null;
    } else if (prev === 'role') {
      selectedIndustry = null;
    }

    const current = document.getElementById('screen-' + currentScreen);
    const next = document.getElementById('screen-' + prev);

    current.classList.add('exiting');
    current.classList.remove('active');

    setTimeout(() => {
      current.classList.remove('exiting');
      next.classList.add('active');
      currentScreen = prev;
      animateCards(next);
      updateNav();
    }, 300);
  }

  function animateCards(screen) {
    const cards = screen.querySelectorAll('.card:not([style*="opacity: 0.4"])');
    cards.forEach((card, i) => {
      card.classList.remove('animate');
      card.style.animationDelay = (i * 0.07 + 0.15) + 's';
      // Force reflow
      void card.offsetWidth;
      card.classList.add('animate');
    });
  }

  function updateNav() {
    const nav = document.getElementById('navbar');
    const backBtn = document.getElementById('backBtn');
    const breadcrumb = document.getElementById('breadcrumb');

    // Show nav after welcome
    if (currentScreen !== 'welcome') {
      nav.classList.add('visible');
      backBtn.classList.add('visible');
    } else {
      nav.classList.remove('visible');
      backBtn.classList.remove('visible');
    }

    // Build breadcrumb
    let crumbs = [];
    if (selectedRole) {
      crumbs.push({ label: roleLabels[selectedRole], screen: 'role' });
    }
    if (selectedIndustry) {
      crumbs.push({ label: industryLabels[selectedIndustry], screen: 'industry' });
    }

    if (crumbs.length > 0) {
      breadcrumb.classList.add('visible');
      breadcrumb.innerHTML = crumbs.map((c, i) => {
        const isLast = i === crumbs.length - 1;
        const sep = i < crumbs.length - 1 ? '<span class="separator">›</span>' : '';
        const cls = isLast ? 'crumb current' : 'crumb';
        return `<span class="${cls}" onclick="window._goToScreen('${c.screen}')">${c.label}</span>${sep}`;
      }).join('');
    } else {
      breadcrumb.classList.remove('visible');
      breadcrumb.innerHTML = '';
    }
  }

  // ---- Selection handlers ----
  function selectRole(role) {
    selectedRole = role;
    goToScreen('industry');
  }

  function selectIndustry(industry) {
    selectedIndustry = industry;
    populateResult();
    goToScreen('result');
  }

  // ---- Populate result screen ----
  function populateResult() {
    var role = selectedRole;
    var industry = selectedIndustry;
    var roleLabel = roleLabels[role];
    var industryLabel = industryLabels[industry];
    var iShort = industryShortLabels[industry];

    document.getElementById('resultTag').textContent = roleLabel + ' \u00B7 ' + industryLabel;

    var titles = {
      technology: 'What technology leaders in <em>' + iShort + '</em> are doing',
      integration: 'How integration teams in <em>' + iShort + '</em> are modernising',
      business: 'The business impact of real-time in <em>' + iShort + '</em>',
      architect: 'Architecture patterns transforming <em>' + iShort + '</em>'
    };
    document.getElementById('resultTitle').innerHTML = titles[role] || titles.technology;

    var subtitles = {
      technology: 'See how organisations like yours are using event-driven architecture to reduce risk, consolidate vendors, and accelerate digital transformation in ' + iShort + '.',
      integration: 'See how integration and middleware teams in ' + iShort + ' are consolidating platforms, replacing legacy middleware, and delivering faster.',
      business: 'See how real-time, event-driven operations are driving revenue, improving customer experience, and transforming how ' + iShort + ' organisations compete.',
      architect: 'See the architectural patterns, deployment models, and protocol strategies that ' + iShort + ' organisations are using with Solace.'
    };
    document.getElementById('resultSubtitle').textContent = subtitles[role] || subtitles.technology;

    var storyTitles = {
      technology: 'What leaders like you are doing',
      integration: 'How teams like yours are delivering',
      business: 'The results that matter',
      architect: 'Patterns in production'
    };
    document.getElementById('storiesTitle').textContent = storyTitles[role] || storyTitles.technology;
    document.getElementById('valuesTitle').innerHTML = 'Why Solace for <em>' + iShort + '</em>';
    document.getElementById('ctaIndustry').textContent = iShort;

    var content = (typeof getContent === 'function') ? getContent(role, industry) : null;

    var sc = document.getElementById('storiesContainer');
    if (sc && content && content.stories) {
      sc.innerHTML = content.stories.map(function(s) {
        return '<div class="story-card">' +
          '<div class="story-headline">' + s.headline + '</div>' +
          '<div class="story-outcome">' + s.outcome + '</div>' +
          '<button class="story-expand" onclick="toggleStory(this)">' +
            'Read more <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg>' +
          '</button>' +
          '<div class="story-detail"><div class="story-detail-inner">' + s.detail + '</div></div>' +
        '</div>';
      }).join('');
    } else if (sc) {
      sc.innerHTML = '<div class="story-card"><div class="story-headline">Content coming soon</div><div class="story-outcome">We are building stories for this combination.</div></div>';
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
      el.innerHTML = content.links.map(function(l) {
        return '<a class="explore-link" href="' + l.url + '" target="_blank" rel="noopener">' +
          (icons[l.icon] || icons.doc) + ' ' + l.text + ' ' + arrow + '</a>';
      }).join('');
    }
  }

  // ---- Story expand/collapse ----
  function toggleStory(btn) {
    const detail = btn.nextElementSibling;
    btn.classList.toggle('open');
    detail.classList.toggle('open');
    btn.textContent = btn.classList.contains('open') ? '' : '';
    btn.innerHTML = btn.classList.contains('open')
      ? 'Show less <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg>'
      : 'Read more <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg>';
  }

  // ---- Expose to global for inline handlers ----
  window.goToScreen = goToScreen;
  window._goToScreen = function(screen) {
    // Reset future selections when clicking breadcrumb
    if (screen === 'role') {
      selectedRole = null;
      selectedIndustry = null;
      history.length = 0;
    } else if (screen === 'industry') {
      selectedIndustry = null;
      // Keep history up to role
      while (history.length > 1) history.pop();
    }
    goToScreen(screen);
  };
  window.goBack = goBack;
  window.selectRole = selectRole;
  window.selectIndustry = selectIndustry;
  window.toggleStory = toggleStory;

  // ---- Init ----
  // Show welcome screen cards
  const welcomeScreen = document.getElementById('screen-welcome');
  if (welcomeScreen) {
    // Welcome has no cards to animate, but navbar starts hidden
    updateNav();
  }

  // Handle URL params for direct linking
  const params = new URLSearchParams(window.location.search);
  const urlRole = params.get('role');
  const urlIndustry = params.get('industry');

  if (urlRole && roleLabels[urlRole]) {
    selectedRole = urlRole;
    if (urlIndustry && industryLabels[urlIndustry]) {
      selectedIndustry = urlIndustry;
      populateResult();
      // Jump directly to result
      document.getElementById('screen-welcome').classList.remove('active');
      document.getElementById('screen-result').classList.add('active');
      currentScreen = 'result';
      history.push('welcome', 'role', 'industry');
    } else {
      // Jump to industry selection
      document.getElementById('screen-welcome').classList.remove('active');
      document.getElementById('screen-industry').classList.add('active');
      currentScreen = 'industry';
      history.push('welcome', 'role');
      animateCards(document.getElementById('screen-industry'));
    }
    updateNav();
  }

})();