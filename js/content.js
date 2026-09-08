/**
 * 作品集内容 —— 改这里即可更新页面
 */
window.PORTFOLIO = {
  meta: {
    name: "朱意",
    nameEn: "ZHU YI",
    role: "AI Product Manager · 2027",
    phone: "18037863285",
    wechat: "微信同号",
    email: "2469695150@qq.com",
    resumeHref: "./assets/resume.pdf",
    photo: "./assets/hero-photo.png",
    tagline: "把模糊的治理问题，做成可闭环的 Agent 产品。",
  },

  nav: [
    { href: "#coordinates", label: "我的坐标" },
    { href: "#exp-06", label: "代表项目" },
    { href: "#vibe", label: "Vibe Coding" },
    { href: "#thinking", label: "思考与表达" },
    { href: "#contact", label: "联系我" },
  ],

  hero: {
    kicker: "AI PRODUCT MANAGER · 2027",
    greeting: "你好，我是朱意",
    path: "实习路径：贝斯特斯新媒体 → 高顿用户运营 → 百度产品运营 → 字节 AI 产品 → 携程 AI 产品。",
    personalityLabel: "ESTJ · 天蝎座",
    personalityDesc: "做事干脆、爱较真，做人真诚、有韧劲。",
    quote:
      "我习惯先把问题拆成可评测的链路，再决定哪一段交给 Agent、哪一段必须留人。",
    primaryCta: { label: "先看代表项目", href: "#exp-06" },
    secondaryCta: { label: "看看工作之外的我", href: "#thinking" },
    tags: [
      "Figma",
      "墨刀",
      "Claude code",
      "Cursor",
      "Codex",
      "PE",
      "Agent 编排",
      "SQL / Python",
      "Evals",
      "Vibe Coding",
    ],
    experienceCard: {
      title: "SELECTED EXPERIENCE",
      items: [
        { company: "携程", role: "AI 产品" },
        { company: "字节", role: "AI 产品" },
        { company: "百度", role: "产品运营" },
        { company: "高顿", role: "用户运营" },
        { company: "贝斯特斯", role: "新媒体运营" },
      ],
    },
    stickyNote: "Owner 意识 · 端到端交付 · 能和工程一起把方案跑通",
    quickLinks: [
      {
        label: "EMAIL",
        value: "2469695150@qq.com",
        href: "mailto:2469695150@qq.com",
        action: "外链",
      },
      {
        label: "PHONE / WECHAT",
        value: "18037863285",
        href: "tel:18037863285",
        action: "外链",
      },
      {
        label: "RESUME",
        value: "下载 PDF 简历",
        href: "./assets/resume.pdf",
        action: "下载",
      },
    ],
  },

  coordinates: {
    kicker: "01 · MY COORDINATES",
    title: "我从哪里来，又能走到哪里",
    body: "AI的时代，只要能沉下心思考，不断的学习，就永远不会被淘汰",
    cards: [
      {
        no: "01",
        en: "PRODUCT BUILDER",
        title: "AI 产品构建",
        desc: "从痛点到 Agent 架构、评测与灰度，把治理做成可迭代闭环。",
        href: "#experience",
        tone: "peach",
      },
      {
        no: "02",
        en: "EVAL & STRATEGY",
        title: "评测与策略",
        desc: "维度拆解、黄金集、置信度分层，让模型效果可度量、可归因。",
        href: "#experience",
        tone: "sage",
      },
      {
        no: "03",
        en: "MAKE IDEAS REAL",
        title: "想法实践者",
        desc: "会用 VibeCoding 把灵感做成可运行的 Demo，再在真正用起来的过程中修正自己的判断。",
        href: "#vibe",
        tone: "blue",
      },
      {
        no: "04",
        en: "THINK IN PUBLIC",
        title: "个人创业思考",
        desc: "持续在不同领域进行探索，内容创作、社媒运营与创业实践，训练自己的网感、用户认知与商业思维。",
        href: "#thinking",
        tone: "gold",
      },
    ],
  },

  experience: {
    kicker: "02 · SELECTED EXPERIENCE",
    title: "方向不是突然找到的，是我一段一段试出来的。",
    body: "我不是一开始就决定做产品，也不是天生就有产品 sense 的。我所经历的每一段实习都让我在试错中更加清晰自己的定位和职业规划：从新媒体运营、用户运营，到产品经理、AI 工作流体系，最后锚定 AI 产品这条路。",
    stickyQuote:
      "在一次次的实习中，我从一开始 dirty work 都不懂要怎么做，到沉淀出一套做项目的方法论；从 3 天写一个 PRD 到 30min 手搓 demo；从在会议上发言都紧张到手心冒汗，到作为产品主 R 跟 CEO 汇报项目被夸有逻辑懂产品。我看到了自己的进步，我走的每一步都算数。",
    // 正序：01 → 06
    items: [
      {
        no: "01",
        date: "2024.06 — 2025.01",
        company: "贝斯特斯",
        category: "市场部",
        role: "新媒体运营",
        summary:
          "运营表白墙公众号与社群，参与地推拉新、推文撰写、活动策划与商业闭环，跑通拉新-促活-留存-转化全链路。",
        metrics: [
          { value: "500+", label: "用户拉新" },
          { value: "4 场", label: "活动策划" },
          { value: "2700+", label: "参与人数" },
        ],
        tags: ["用户拉新", "文章撰写", "活动主持", "合作洽谈"],
        links: [],
      },
      {
        no: "02",
        date: "2025.03 — 2025.06",
        company: "高顿教育",
        category: "市场部",
        role: "用户运营",
        summary:
          "通过内容创作、社群运营、用户转化与数据优化的闭环运作，实现 5 单课程转化，总金额 10w+。",
        metrics: [
          { value: "3000+", label: "用户社群" },
          { value: "+13pp", label: "付费转化率" },
          { value: "+20pp", label: "社群日活率" },
        ],
        tags: ["用户分层", "监控数据", "意向转化"],
        links: [],
      },
      {
        no: "03",
        date: "2025.06 — 至今",
        company: "小 q（穿孔版）",
        category: "创业实践",
        role: "自媒体运营",
        summary:
          "锚定「穿孔小众美学」人群，沉淀【痛点挖掘 + 干货输出 + 网感表达】方法论，并完成公域到私域的商业化。",
        metrics: [
          { value: "300w+", label: "总阅读" },
          { value: "8w+", label: "累计变现" },
          { value: "-70pp", label: "产出周期" },
        ],
        tags: ["垂直运营", "Cursor 工作流", "私域转化", "0→1 创业"],
        links: [],
      },
      {
        no: "04",
        date: "2025.07 — 2025.11",
        company: "百度",
        category: "MEG 内容增长",
        role: "AI 产品运营",
        summary:
          "围绕【百度一镜】数字人平台有效线索转化，完成用户调研、需求优先级、内容种草与线索承接闭环。",
        metrics: [
          { value: "2000+", label: "单篇涨粉" },
          { value: "+32pp", label: "阅读率" },
          { value: "+25pp", label: "有效线索率" },
        ],
        tags: ["用户调研", "内容种草", "线索转化", "数据看板"],
        links: [],
      },
      {
        no: "05",
        date: "2025.11 — 2026.04",
        company: "字节跳动",
        category: "电商内容生态",
        role: "AI 产品经理",
        summary:
          "从 0-1 完成抖音电商优质种草内容识别：标准制定、评测集、Prompt 调优与 badcase 归因，降低边界 case 回流人审。",
        metrics: [
          { value: "+15pp", label: "PE 准确率" },
          { value: "-16pp", label: "人工成本" },
          { value: "+38pp", label: "标准一致率" },
        ],
        tags: ["PE 调优", "评测集建设", "置信度分层", "内容生态", "AB 实验"],
        links: [],
      },
      {
        no: "06",
        date: "2026.06 — 2026.09",
        company: "携程",
        category: "信息流策略",
        role: "AI 产品经理",
        summary:
          "针对首页信息流低质内容，主导治理 L3：问题发现 → Embedding 相似召回 → 归因分流 → 策略制定 → 镜像 QA → 灰度上线；搭建 Evals，设置人工审批节点。",
        metrics: [
          { value: "10%→2%", label: "badcase 率" },
          { value: "80%", label: "周期压缩" },
          { value: "40→8天", label: "单 case 闭环" },
        ],
        tags: ["Multi-Agent", "A2A", "Embedding", "Evals", "Agentic workflow", "Human-in-the-loop"],
        links: [
          { label: "完整项目叙述", href: "https://zhuy29.github.io/ai-pm-portfolio/" },
        ],
      },
    ],
  },

  vibe: {
    kicker: "03 · VIBE CODING JOURNEY",
    title: "AI 让想法，更快拥有可使用的形状。",
    body: "我不把 VibeCoding 当成「让 AI 帮我写代码」，而把它当作一种产品验证方式：先把问题想清楚，再尽快做出真实交互，让判断接受使用，而不是只停在 PRD 里。",
    columns: [
      {
        no: "01",
        title: "从真实问题出发",
        desc: "先确认是真需求还是伪需求，深入业务探查现有方案为什么不能解决。",
      },
      {
        no: "02",
        title: "把产品判断写清楚",
        desc: "定义业务目标、核心功能、边界与最小可用链路。",
      },
      {
        no: "03",
        title: "和 AI 一起做 Demo",
        desc: "快速验证产品判断，让架构链路更直观。",
      },
      {
        no: "04",
        title: "在落地过程中思考",
        desc: "不是做出 MVP 就能证明方案可行，而是在卡点处思考问题、重新判断、反复自测。",
      },
    ],
    demos: [
      {
        title: "信息流治理 L2→L3",
        summary: "A2A 编排与 Embedding 召回决策的脱敏完整叙述",
        href: "https://zhuy29.github.io/ai-pm-portfolio/",
        tag: "CASE STUDY",
      },
      {
        title: "清流 · 内容底线检测 Demo",
        summary: "笔记 + 评论样例一键检测，演示版本可直接打开",
        href: "https://qingliu-demo.vercel.app/",
        tag: "LIVE DEMO",
      },
    ],
  },

  thinking: {
    kicker: "04 · THINK IN PUBLIC",
    titleLines: ["我不「知足」", "所以一直在路上"],
    vibeLine: "工作中的女强人，生活中的开心果",
    avatar: "./assets/avatar-photo.png",
    profile: {
      name: "朱意",
      bio: [
        "热情开朗，相处 0 负担",
        "热爱运动、旅行、摄影、剪辑",
        "习惯用数据复盘，也习惯用网感表达",
      ],
      skills: [
        "Claude / Cursor / Codex / Dify",
        "PE 调优 · MAS/A2A · Workflow",
        "SQL · Python · Dashboard",
        "跨团队 Owner 交付",
      ],
    },
    stats: [
      { value: "300w+", label: "穿孔内容阅读" },
      { value: "8w+", label: "创业变现" },
      { value: "3段", label: "大厂 AI 相关实习" },
    ],
    style: {
      title: "我的风格不被定义",
      photos: [
        "./assets/life-01.png",
        "./assets/life-02.png",
        "./assets/life-03.png",
        "./assets/life-04.png",
      ],
    },
    awards:
      "校级一等奖学金 · 全国大学生就业创业大赛一等奖 · 供应链大赛三等奖 · 优秀团员 · CET-4 / CET-6",
  },

  contact: {
    kicker: "NEXT COORDINATE",
    title: "想去一个有挑战、也真正创造价值的地方。",
    body: "简历可直接下载，邮件与微信同号电话均可联系。",
    links: [
      { label: "EMAIL", value: "2469695150@qq.com", href: "mailto:2469695150@qq.com", action: "外链" },
      { label: "PHONE / WECHAT", value: "18037863285", href: "tel:18037863285", action: "外链" },
      { label: "RESUME", value: "下载 PDF 简历", href: "./assets/resume.pdf", action: "下载" },
      {
        label: "GOVERNANCE CASE",
        value: "信息流治理作品集",
        href: "https://zhuy29.github.io/ai-pm-portfolio/",
        action: "外链",
      },
      {
        label: "QINGLIU DEMO",
        value: "清流可交互演示",
        href: "https://qingliu-demo.vercel.app/",
        action: "外链",
      },
    ],
  },
};
