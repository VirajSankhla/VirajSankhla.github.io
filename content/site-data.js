// This is the only file you need to edit to keep the portfolio current.
// Site components read this data automatically; do not add portfolio items to HTML.

// ===============================
// TO UPDATE PERSONAL DETAILS, RESUME, SOCIAL LINKS, OR NAVIGATION:
//
// Edit the matching object below. Phone numbers and email addresses are intentionally
// excluded from this public portfolio.
// ===============================
export const siteData = {
  profile: {
    name: 'Viraj Patel Sankhla',
    role: 'MSc Investment & Financial Risk Management',
    image: 'assets/profile.jpg',
    imageAlt: 'Viraj Patel Sankhla',
    summary: 'I enjoy understanding financial markets through evidence, research and analysis, particularly where a clear view can support a better investment decision.',
    cardBio: 'Finance postgraduate with experience in research, operations and client-facing work.',
    cardFocus: 'Interested in equity, investment and market research, with a growing focus on risk analytics.',
    focusAreas: ['Equity Research', 'Investment Research', 'Financial Markets', 'Risk Analytics'],
    linkedin: 'https://www.linkedin.com/in/s-viraj-patel/',
    github: '',
    resume: 'Resume 2.pdf',
  },

  navigation: [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Education', href: '#education' },
    { label: 'Experience', href: '#experience' },
    { label: 'Academic Coursework', href: '#coursework' },
    { label: 'Skills', href: '#skills' },
  ],

  about: {
    heading: 'A thoughtful approach to financial markets',
    lead: 'I am motivated by the questions behind market movements, and the evidence needed to answer them.',
    overview: [
      'I am studying Investment and Financial Risk Management at the University of Westminster. I am particularly interested in equity research, investment research and the way market information shapes investment decisions.',
      'I enjoy approaching a financial question with discipline: understand the context, test the evidence and communicate the conclusion clearly. Coursework has developed the technical side of that process, while operations and client-facing work have taught me to be dependable, attentive and easy to work with. I also use AI responsibly to support research, learning and workflow improvement, while keeping analysis and judgement my own.',
    ],
    strengths: ['Frame questions clearly before analysing data.', 'Test assumptions and explain limitations.', 'Relate results to the market context.', 'Present findings clearly and proportionately.'],
    direction: [
      'Equity research and equity analysis.',
      'Investment research and market research.',
      'Financial markets and asset management.',
      'Financial analysis and valuation.',
      'Risk analytics and market risk.',
      'Investment decision-making supported by evidence.',
    ],
  },

  // ===============================
  // TO EDIT EDUCATION OR CERTIFICATES:
  //
  // Add, remove, or update one object in education or certificates below.
  // The timeline and cards update automatically.
  // ===============================
  education: [
    { date: 'Expected Sept 2026', title: 'MSc Investment & Financial Risk Management', organisation: 'University of Westminster, London' },
    { date: 'Graduated 2024', title: 'Bachelor of Business Administration (Finance)', organisation: 'ICFAI Business School, Hyderabad' },
  ],
  certificates: [
    { year: '2026', title: 'Bloomberg Market Concepts', summary: 'Markets, economics, currencies and fixed income.' },
    { year: '2025', title: 'Bloomberg Finance Fundamentals', summary: 'Core finance, valuation and market concepts.' },
    { year: '2025', title: 'Prompt Engineering for Everyone', summary: 'Practical AI-assisted research workflows.' },
  ],

  // ===============================
  // TO EDIT EXPERIENCE:
  //
  // Add one object below. Use "badge" only when a short label is useful.
  // ===============================
  experience: [
    { date: 'Jun 2026 · 2 weeks · Remote', title: 'Strategy Consultant', organisation: 'Practera / Tiraverse Ltd, University of Westminster micro-internship', badge: 'Consulting', tone: 'blue', bullets: ['Conducted secondary research on the UK B2B SaaS market within a five-person advisory team.', 'Produced financial benchmarks to help frame the client’s market position.'] },
    { date: 'Oct 2025 · Present · White City, London', title: 'Associate', organisation: 'TK Maxx', badge: 'Current', tone: 'gold', bullets: ['Handled transactions and store operations accurately in a fast-paced retail environment.', 'Delivered customer service while balancing postgraduate study.'] },
    { date: 'Aug 2024 · Aug 2025 · Telangana, India', title: 'Business Manager', organisation: 'Godavari Hi-Teak Doors', badge: 'Operations', tone: 'blue', bullets: ['Managed financial records, daily sales tracking and inventory accuracy.', 'Managed client relationships and negotiated pricing to support business targets.'] },
    { date: 'Jul 2023 · 1 month · Remote', title: 'Marketing and Management Intern', organisation: 'Fxmtrack Financials', badge: 'Fintech', tone: 'blue', bullets: ['Supported data-driven client acquisition campaigns.', 'Supported client servicing and gained exposure to financial products in fintech.'] },
    { date: 'Jun 2022 · Jul 2023 · Remote', title: 'Founder', organisation: 'Foreverteen.in', badge: 'Entrepreneurship', tone: 'gold', bullets: ['Built and managed an online retail business, overseeing budgets, cash flow and digital marketing.', 'Made day-to-day operating decisions for the e-commerce venture.'] },
  ],

  // ===============================
  // TO EDIT SKILLS:
  //
  // Add a skill group or update its items below. The cards update automatically.
  // ===============================
  skills: [
    { category: 'Investment & Market Research', title: 'Financial analysis with market context', tone: 'gold', items: ['Equity Research', 'Investment Research', 'Market Research', 'Financial Statement Analysis', 'Fundamental Analysis'] },
    { category: 'Risk & Data Analysis', title: 'Interpreting markets and risk', tone: 'blue', items: ['Risk Analysis', 'Time-Series Analysis', 'Regression Analysis', 'Volatility Modelling', 'Value at Risk'] },
    { category: 'Platforms & Workflow', title: 'Financial data and research tools', items: ['Bloomberg Terminal', 'Microsoft Excel', 'MATLAB Econometrics Toolbox', 'RStudio', 'AI-assisted research'] },
    { category: 'Research & Communication', title: 'Clear, careful analytical work', items: ['Data Interpretation', 'Hypothesis Testing', 'Research Writing', 'Communication'] },
  ],

  // ===============================
  // TO ADD A NEW COURSEWORK REPORT, PROJECT, DISSERTATION, RESEARCH PAPER,
  // PRESENTATION, CASE STUDY, EQUITY REPORT, DASHBOARD, OR FINANCIAL MODEL:
  //
  // 1. Upload the PDF into /public/reports/.
  // 2. (Optional) Upload a thumbnail into /public/thumbnails/.
  // 3. Add one object below. Set "highlighted" to true for only your strongest work.
  // 4. Fill the detail fields from the report. Do not edit any UI component.
  //
  // Required fields: id, title, summary, topic, pdf, software, skills,
  // technologies, researchArea, overview, researchQuestion, objectives,
  // dataset, methodology, modelsUsed, and keyFindings. Optional: thumbnail,
  // highlighted. List fields can be written as ['First item', 'Second item'].
  //
  // The report must exist before it is listed here.
  // ===============================
  coursework: [
    {
      id: 'sp500-volatility-garch-family',
      title: 'Forecasting S&P 500 Volatility Using GARCH-Family Models',
      summary: 'Compares three volatility models on daily S&P 500 returns, then tests their usefulness for measuring tail risk.',
      topic: 'Risk Modelling',
      pdf: 'public/reports/Forecasting_SP500_Volatility_GARCH_Models.pdf',
      software: ['MATLAB Econometrics Toolbox', 'Bloomberg Terminal'],
      skills: ['Volatility Modelling', 'Value at Risk', 'Backtesting'],
      technologies: ['GARCH', 'EGARCH', 'GJR-GARCH'],
      researchArea: 'Equity volatility and market risk',
      overview: 'This report examines a practical risk-management question: whether the model that fits S&P 500 volatility best also provides the most reliable view of losses in stressed markets. It compares three established volatility models and tests their 99% Value at Risk coverage.',
      researchQuestion: 'Does the GARCH specification with the strongest statistical fit provide the most effective measure of S&P 500 tail risk?',
      objectives: ['Estimate GARCH(1,1), EGARCH(1,1) and GJR-GARCH(1,1).', 'Compare fit, crisis-period conditional volatility and 99% VaR coverage.'],
      dataset: '5,331 daily S&P 500 log returns from 3 January 2005 to 13 March 2026, sourced from Bloomberg Terminal.',
      methodology: 'Maximum-likelihood estimation under normality, information-criterion comparison, residual diagnostics and Kupiec probability-of-failure backtesting.',
      modelsUsed: ['GARCH(1,1)', 'EGARCH(1,1)', 'GJR-GARCH(1,1)'],
      keyFindings: ['EGARCH achieved the strongest AIC, BIC and likelihood-based fit.', 'All three models had similar 99% VaR failure rates of about 2.2%.', 'The normal innovation assumption, rather than variance specification, was the main limitation for tail-risk coverage.'],
      highlighted: true,
    },
    {
      id: 'sp500-macro-volatility',
      title: 'Predicting S&P 500 Volatility: Macroeconomic Variables and the VIX',
      summary: 'Tests whether the VIX and macroeconomic data improve forecasts of S&P 500 realised volatility.',
      topic: 'Financial Modelling',
      pdf: 'public/reports/SP500_Market_Volatility_Forecasting.pdf',
      software: ['Bloomberg Terminal'],
      skills: ['Time-Series Analysis', 'Forecast Evaluation', 'Econometric Modelling'],
      technologies: ['OLS', 'GARCH-X', 'VAR', 'Granger Causality'],
      researchArea: 'Macroeconomic volatility forecasting',
      overview: 'This study asks whether information about the economy adds useful forecasting insight beyond what markets already reveal through the VIX and past realised volatility. It compares simple and more complex approaches across a long sample that includes several market shocks.',
      researchQuestion: 'Can lagged macroeconomic variables, including the VIX, predict monthly realised volatility in the S&P 500?',
      objectives: ['Test linear, conditional-variance and system-level macro-volatility relationships.', 'Compare macro-based forecasts with an autoregressive benchmark out of sample.'],
      dataset: '211 monthly observations from May 2001 to December 2025: S&P 500 returns and VIX, US unemployment, CPI inflation, industrial-production growth and the 10-year Treasury yield from Bloomberg Terminal.',
      methodology: 'OLS with Newey-West standard errors, GARCH-X(1,1), VAR(2), Granger-causality tests, impulse responses and a 24-month hold-out forecast evaluation.',
      modelsUsed: ['OLS with Newey-West errors', 'GARCH-X(1,1)', 'VAR(2)', 'Autoregressive benchmark'],
      keyFindings: ['Lagged VIX was the only macro predictor that remained significant after HAC correction.', 'All five macro variables Granger-caused realised volatility in the VAR framework.', 'The autoregressive benchmark outperformed both macro-based OLS specifications out of sample.'],
    },
    {
      id: 'conocophillips-equity-returns',
      title: 'Financial Modelling of ConocoPhillips',
      summary: 'Examines how energy-sector and industrial returns relate to ConocoPhillips monthly returns.',
      topic: 'Equity Analysis',
      pdf: 'public/reports/Equity_Return_Modelling_ConocoPhillips.pdf',
      software: ['RStudio'],
      skills: ['Regression Analysis', 'Correlation Analysis', 'Hypothesis Testing'],
      technologies: ['Simple Linear Regression', 'Multiple Linear Regression'],
      researchArea: 'Energy-sector equity returns',
      overview: 'This project looks at the market forces behind ConocoPhillips returns. It uses related energy and industrial companies to assess the contribution of sector-wide oil exposure, upstream activity and broader capital-investment conditions.',
      researchQuestion: 'How do sector-wide energy shocks, upstream investment activity and broader industrial conditions relate to ConocoPhillips monthly returns?',
      objectives: ['Assess the relationships between COP returns and XOM, HAL and CAT returns.', 'Compare a simple sector proxy with a multiple-regression specification.'],
      dataset: 'Monthly stock returns for ConocoPhillips, Exxon Mobil, Halliburton and Caterpillar.',
      methodology: 'Descriptive statistics, correlation analysis, simple linear regression, multiple linear regression and hypothesis testing.',
      modelsUsed: ['COP ~ XOM', 'COP ~ XOM + HAL + CAT'],
      keyFindings: ['COP was most strongly correlated with XOM (about 0.65) and HAL (about 0.64).', 'The multiple model explained about 54% of variation in COP returns, compared with about 43% for the simple XOM model.', 'All three explanatory variables were positive and statistically significant in the multiple regression.'],
    },
  ],

  // ===============================
  // TO ADD AWARDS:
  //
  // Add one object only when there is a verified award to show publicly.
  // ===============================
  awards: [],

  // ===============================
  // TO ADD OTHER WORK (OPTIONAL):
  //
  // Use this list for non-coursework work if you later want a separate archive.
  // Coursework always belongs in the coursework list above.
  // ===============================
  projects: [],
  research: [],
};
