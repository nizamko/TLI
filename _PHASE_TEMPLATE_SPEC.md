# Phase Page Template Specification
# معهد ريادة الغد — Documentation Website

## Required Structure (MUST FOLLOW)

Every phase page must have this EXACT structure:

```html
<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>المرحلة XX — [Arabic Title] | معهد ريادة الغد</title>
<meta name="description" content="...">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Tajawal:wght@300;400;500;700;800;900&family=IBM+Plex+Mono:wght@400;500;700&display=swap" rel="stylesheet">
<link rel="stylesheet" href="assets/css/style.css">
</head>
<body>

<!-- 1. Top Nav (IDENTICAL in every page) -->
<nav class="site-nav">
  <div class="site-nav-inner">
    <a href="index.html" class="nav-logo">🏛️ ريادة الغد <span>| Documentation</span></a>
    <button class="nav-toggle" aria-label="القائمة">☰</button>
    <div class="nav-links">
      <a href="index.html">الرئيسية</a>
      <a href="phase-01-foundation.html">١. الأساس</a>
      <a href="phase-02-master-data.html">٢. البيانات الرئيسية</a>
      <a href="phase-03-registration-intake.html">٣. التسجيل</a>
      <a href="phase-04-trainee-lifecycle.html">٤. دورة المتدرب</a>
      <a href="phase-05-attendance-operations.html">٥. الحضور</a>
      <a href="phase-06-leaves-exceptions.html">٦. الإجازات</a>
      <a href="phase-07-violations-financials.html">٧. المخالفات</a>
      <a href="phase-08-notifications-reports.html">٨. الإشعارات</a>
      <a href="phase-09-portals-admin-ops.html">٩. البوابات</a>
      <a href="phase-10-launch-roadmap.html">١٠. الإطلاق</a>
    </div>
  </div>
</nav>
<div class="scroll-progress"><div class="scroll-progress-bar"></div></div>

<!-- 2. Breadcrumb -->
<div class="breadcrumb">
  <div class="breadcrumb-inner">
    <a href="index.html">🏠 الرئيسية</a>
    <span class="sep">/</span>
    <a href="index.html#timeline">المراحل</a>
    <span class="sep">/</span>
    <span class="current">المرحلة XX — [Title]</span>
  </div>
</div>

<!-- 3. Page Hero -->
<header class="page-hero">
  <div class="page-hero-inner">
    <div class="complexity-badge">⚡ تعقيد: [متوسط|عالي|منخفض] · ⏱ [X] أسبوع</div>
    <div class="hero-label">المرحلة XX من 10 · [English label]</div>
    <h1>[عنوان رئيسي]<br><span>[عنوان فرعي يستخدم gold color]</span></h1>
    <p class="hero-desc">[وصف دسم 3-4 أسطر عن الهدف والأهمية]</p>
    <div class="hero-meta">
      <div class="hero-meta-item"><strong>X</strong><span>جداول قاعدة بيانات</span></div>
      <div class="hero-meta-item"><strong>X</strong><span>صفحة واجهة</span></div>
      <div class="hero-meta-item"><strong>X</strong><span>API Endpoint</span></div>
      <div class="hero-meta-item"><strong>X–X</strong><span>أسبوع تنفيذ</span></div>
    </div>
  </div>
</header>

<!-- 4. Phase Navigator (sticky, shows all 10 phases with current highlighted) -->
<div class="phase-navigator">
  <div class="phase-nav-inner">
    <span class="phase-nav-label">المراحل:</span>
    <a href="phase-01-foundation.html" class="phase-dot done"><span class="pd-num pdn-1">1</span>الأساس</a>
    <a href="phase-02-master-data.html" class="phase-dot done"><span class="pd-num pdn-2">2</span>البيانات</a>
    ...
    <a href="phase-XX-current.html" class="phase-dot current"><span class="pd-num pdn-X">X</span>العنوان</a>
    ...
  </div>
</div>

<!-- 5. Main Body with TOC + Content -->
<div class="page-body">
  <aside class="toc">
    <h4>محتويات الصفحة</h4>
    <ul>
      <li><a href="#summary">ملخص المرحلة</a></li>
      <li><a href="#why">لماذا هذه المرحلة؟</a></li>
      <li><a href="#modules">الوحدات المشمولة</a></li>
      <li><a href="#screens">الصفحات والشاشات</a></li>
      <li><a href="#database">قاعدة البيانات</a></li>
      <li><a href="#apis">الـ APIs</a></li>
      <li><a href="#flows">تدفقات المستخدم</a></li>
      <li><a href="#logic">منطق العمل التفصيلي</a></li>
      <li><a href="#dependencies">خريطة التبعيات</a></li>
      <li><a href="#risks">المخاطر والافتراضات</a></li>
      <li><a href="#checklist">قائمة المخرجات</a></li>
    </ul>
  </aside>

  <main class="content">
    <!-- Section 1: Summary -->
    <section id="summary" class="section">
      <div class="section-label">ملخص المرحلة</div>
      <h2 class="section-title">ما ستُسلِّمه هذه المرحلة</h2>
      <p class="section-desc">...</p>

      <div class="grid grid-2">
        <div class="card card-accent c-teal">
          <h3>🎯 الهدف</h3>
          <p>...</p>
        </div>
        <div class="card card-accent c-gold">
          <h3>📤 المخرجات</h3>
          <ul class="feat-list">...</ul>
        </div>
        <div class="card card-accent c-navy">
          <h3>📥 المتطلبات السابقة</h3>
          <ul class="feat-list">...</ul>
        </div>
        <div class="card card-accent c-rust">
          <h3>🔗 يُسلِّم إلى</h3>
          <p>...</p>
        </div>
      </div>
    </section>

    <!-- Section 2: Why -->
    <section id="why" class="section">
      <div class="section-label">لماذا هذه المرحلة؟</div>
      <h2 class="section-title">[عنوان يوضح الأهمية]</h2>
      ...
      (explain why it's in this order, what breaks without it)
    </section>

    <!-- Section 3: Modules -->
    <section id="modules" class="section">
      <div class="section-label">الوحدات المشمولة</div>
      <h2 class="section-title">...</h2>
      <div class="grid grid-3">
        <div class="card card-accent c-X">
          <div class="card-head">
            <div class="card-icon">🔹</div>
            <div>
              <div class="card-title">...</div>
              <div class="card-sub">...</div>
            </div>
          </div>
          <ul class="feat-list">...</ul>
        </div>
        ...
      </div>
    </section>

    <!-- Section 4: Screens -->
    <section id="screens" class="section">
      <div class="section-label">الصفحات والشاشات</div>
      <h2 class="section-title">...</h2>
      <div class="tbl-wrap">
        <table>
          <thead><tr><th>#</th><th>الصفحة</th><th>الوصف</th><th>الأدوار</th></tr></thead>
          <tbody>...</tbody>
        </table>
      </div>
    </section>

    <!-- Section 5: Database -->
    <section id="database" class="section">
      <div class="section-label">قاعدة البيانات</div>
      <h2 class="section-title">الجداول المرتبطة بهذه المرحلة</h2>
      <div class="grid grid-3">
        <div class="db-card">
          <div class="db-head dh-X">📦 table_name</div>
          <div class="db-body">
            <div class="db-field"><span class="pk">PK</span>id</div>
            <div class="db-field"><span class="fk">FK</span>foreign_id</div>
            <div class="db-field">field_name · field_type</div>
            ...
          </div>
        </div>
        ...
      </div>

      <!-- Relationships -->
      <h3 class="mt-6">العلاقات بين الجداول</h3>
      <div class="code-block">
<span class="c-com"># مثال:</span>
companies <span class="c-key">1:N</span> departments
departments <span class="c-key">1:N</span> training_programs
...
      </div>
    </section>

    <!-- Section 6: APIs -->
    <section id="apis" class="section">
      <div class="section-label">API Endpoints</div>
      <h2 class="section-title">نقاط الاتصال</h2>
      <div class="api-group">
        <div class="api-group-title">📦 مجموعة الموارد — Resource Group</div>
        <div class="api-list">
          <div class="api-item">
            <span class="method m-get">GET</span>
            <span class="api-path">/api/resource</span>
            <span class="api-desc">قائمة مع pagination</span>
          </div>
          <div class="api-item">
            <span class="method m-post">POST</span>
            <span class="api-path">/api/resource</span>
            <span class="api-desc">إنشاء جديد</span>
          </div>
          ...
        </div>
      </div>
    </section>

    <!-- Section 7: User Flows -->
    <section id="flows" class="section">
      <div class="section-label">تدفقات المستخدم</div>
      <h2 class="section-title">كيف يتحرك المستخدم في النظام؟</h2>

      <h3>🔸 تدفق الإدارة</h3>
      <div class="flow">
        <div class="flow-node fn-dark">يبدأ من...</div>
        <span class="flow-arrow">←</span>
        <div class="flow-node fn-gold">يضغط على...</div>
        ...
      </div>

      <h3 class="mt-6">🔸 تدفق المتدرب (إن وُجد)</h3>
      ...

      <h3 class="mt-6">🔸 تدفق المدرب (إن وُجد)</h3>
      ...
    </section>

    <!-- Section 8: Business Logic -->
    <section id="logic" class="section">
      <div class="section-label">منطق العمل</div>
      <h2 class="section-title">قواعد تشغيلية دقيقة</h2>

      <div class="alert al-navy">
        <span class="ico">⚙️</span>
        <div><strong>قاعدة X.X:</strong> [نص قاعدة عمل مهمة]</div>
      </div>

      <!-- Code example when needed -->
      <pre class="code-block">
<span class="c-com">// مثال على منطق الحساب</span>
<span class="c-key">if</span> (absent_days &gt;= <span class="c-num">5</span>) {
  <span class="c-fn">notify</span>(trainee, <span class="c-str">'first_warning'</span>);
}
      </pre>
    </section>

    <!-- Section 9: Dependencies Map -->
    <section id="dependencies" class="section">
      <div class="section-label">خريطة التبعيات</div>
      <h2 class="section-title">قبل وبعد هذه المرحلة</h2>
      <div class="matrix">
        <div class="matrix-cell mc-in">
          <h5>📥 تعتمد على</h5>
          <p>ماذا يجب أن يكون جاهزاً قبل البدء</p>
          <p><strong>Phase 0X:</strong> [ما الذي تورثه]</p>
        </div>
        <div class="matrix-cell mc-out">
          <h5>📤 تُسلِّم إلى</h5>
          <p>المراحل التي تستهلك مُخرجات هذه</p>
          <p><strong>Phase 0X:</strong> [ما الذي تُسلِّمه]</p>
        </div>
      </div>
    </section>

    <!-- Section 10: Risks -->
    <section id="risks" class="section">
      <div class="section-label">المخاطر والافتراضات</div>
      <h2 class="section-title">ما يمكن أن يتأخر أو يفشل</h2>
      <div class="grid grid-2">
        <div class="matrix-cell mc-risk">
          <h5>⚠️ المخاطر</h5>
          <ul class="feat-list">...</ul>
        </div>
        <div class="matrix-cell">
          <h5>📌 الافتراضات</h5>
          <ul class="feat-list">...</ul>
        </div>
      </div>
    </section>

    <!-- Section 11: Checklist -->
    <section id="checklist" class="section">
      <div class="section-label">قائمة المخرجات</div>
      <h2 class="section-title">كيف نعرف أن المرحلة انتهت؟</h2>
      <ol class="num-list">
        <li>Backend: ... ✅</li>
        <li>Frontend: ... ✅</li>
        <li>Database: ... ✅</li>
        <li>Testing: ... ✅</li>
        <li>Documentation: ... ✅</li>
      </ol>
    </section>

    <!-- Prev / Next Navigation -->
    <div class="phase-footer-nav">
      <a href="phase-PREV.html" class="pfn-link prev">
        <span class="pfn-label">← المرحلة السابقة</span>
        <span class="pfn-title">XX. عنوان المرحلة السابقة</span>
      </a>
      <a href="phase-NEXT.html" class="pfn-link next">
        <span class="pfn-label">المرحلة التالية →</span>
        <span class="pfn-title">XX. عنوان المرحلة التالية</span>
      </a>
    </div>
  </main>
</div>

<!-- Footer (IDENTICAL in every page — copy from index.html) -->
<footer class="site-footer">...</footer>

<button class="back-top" aria-label="الرجوع للأعلى">↑</button>
<script src="assets/js/app.js"></script>
</body>
</html>
```

## CRITICAL RULES

1. **NEVER use inline <style> tags** — all styling from style.css
2. **NEVER use inline <script> tags** — all behavior from app.js
3. **Use existing CSS classes only** — do NOT invent new ones
4. **Available card accents:** c-gold, c-teal, c-navy, c-rust, c-p1..c-p10
5. **Available badges:** b-gold, b-teal, b-navy, b-rust, b-gray, b-green, b-purple, b-orange, b-pink
6. **Available alerts:** al-gold, al-teal, al-rust, al-navy, al-info
7. **Available flow nodes:** fn-dark, fn-gold, fn-teal, fn-navy, fn-rust
8. **DB head colors:** dh-gold, dh-teal, dh-navy, dh-rust, dh-dark, dh-green, dh-purple
9. **HTTP methods:** m-get, m-post, m-put, m-patch, m-del
10. **Phase colors (timeline):** pdn-1 through pdn-10 (red, orange, green, blue, purple, pink, cyan, orange, lime, black)

## Content Quality Requirements

- Write REAL content, no placeholders
- Each phase page should be ~600-1200 lines of HTML
- Include actual SQL-like schema details
- Include actual API endpoint paths
- Include real business rules with numbers
- Include concrete edge cases
- Reference other phases by name and link
- Use Arabic primarily, English for technical terms/mono fields

## Project Context (ALWAYS reference)

**Project:** نظام إدارة معهد ريادة الغد (Training Center Management SaaS)
**Hierarchy:** Company → Department → Training Program → Group → Trainee
**Roles:** Super Admin, Manager, Staff, Trainer, Trainee
**Stack Backend:** Express, pg (PostgreSQL), ioredis, jsonwebtoken, bcryptjs, zod, helmet, cors, express-rate-limit, winston, dotenv, BullMQ
**Stack Frontend:** React + Vite, react-router-dom, @tanstack/react-query, axios, zustand, react-hook-form + zod, @radix-ui/react-*, lucide-react, date-fns
**Database:** 23+ tables (12 original + 9 new + 2 updated)
**Screens:** 19 admin + 10 trainee portal
**Notifications:** 14+ types via WhatsApp + Email
**Attendance sources:** Fingerprint (90% priority) + Electronic + Manual + Excel
**Violation degrees:** 5 levels (1=verbal → 5=expulsion+auto-ban)
**Languages:** Arabic (primary, RTL) + English
