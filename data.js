const ALERTS = [
  { time: "09:14:02", level: "info", label: "INFO", msg: "New connection from portfolio visitor" },
  { time: "09:14:03", level: "ok", label: "MATCH", msg: "Skills: SIEM, AppSec, Adversarial ML" },
  { time: "09:14:05", level: "high", label: "RULE 8", msg: "Brute-force chain detected — mapped to T1110" },
  { time: "09:14:07", level: "critical", label: "RULE 15", msg: "Webshell drop flagged on Apache FIM" },
  { time: "09:14:09", level: "ok", label: "HARDENED", msg: "XGBoost model survived HopSkipJump attack" },
  { time: "09:14:11", level: "info", label: "SCAN", msg: "ShieldFlow pipeline: SAST + SCA + secrets clean" },
  { time: "09:14:13", level: "ok", label: "STATUS", msg: "Available for security engineering roles" },
];

const SKILLS = [
  {
    title: "Security Operations",
    items: ["Alert triage", "Incident analysis", "IOC extraction", "Threat detection", "Log correlation", "Threat hunting"],
  },
  {
    title: "Applied ML Security",
    items: ["Adversarial robustness testing (IBM ART)", "HopSkipJump, ZOO, Boundary, Decision Tree, Square attacks", "Model hardening", "Feature ablation", "XGBoost"],
  },
  {
    title: "SIEM & Log Management",
    items: ["Wazuh — deployment + agent config", "Kibana (ELK Stack)", "Sysmon log analysis", "Splunk", "Elasticsearch"],
  },
  {
    title: "Threat Intelligence",
    items: ["VirusTotal", "Shodan", "URLScan.io", "MXToolbox", "WHOIS", "OSINT techniques"],
  },
  {
    title: "Network Analysis",
    items: ["Wireshark", "PCAP analysis", "TCP stream reconstruction", "HTTP / DNS / SMTP traffic analysis"],
  },
  {
    title: "Security Testing",
    items: ["Nmap", "Burp Suite", "Postman (API security testing)", "DVWA", "OWASP Juice Shop"],
  },
  {
    title: "AppSec & DevSecOps",
    items: ["Semgrep (SAST)", "Trivy (SCA)", "Gitleaks (secrets detection)", "OWASP ZAP (DAST)", "GitHub Actions", "SARIF reporting", "Shuffle SOAR"],
  },
  {
    title: "Frameworks",
    items: ["MITRE ATT&CK", "OWASP Top 10", "OWASP API Top 10"],
  },
];

const EXPERIENCE = [
  {
    role: "Security Engineering Intern",
    org: "Expadox Lab",
    date: "2026 — Present",
    points: [
      "Independently architected and delivered SecOpsAI, a production-grade SOC detection platform with an adversarially hardened ML model, secured REST API, and automated response pipeline",
      "Independently architected and delivered ShieldFlow, a production-ready open source AppSec pipeline now publicly available on GitHub",
      "Delivered the FireOps Systems project: full SIEM deployment, multi-agent configuration, AWS CloudTrail integration, and documented attacker simulation",
      "Engaging in weekly applied tasks spanning threat analysis, SIEM engineering, AppSec pipeline security, and collaborative security projects",
    ],
  },
  {
    role: "Cybersecurity Intern",
    org: "Future Interns",
    date: "2026",
    points: [
      "Delivered 5+ structured security investigations covering phishing analysis, malware traffic, VAPT, and API security testing",
      "Performed threat hunting using Sysmon logs in ELK Stack, mapping adversary techniques to MITRE ATT&CK",
      "Earned a Certificate of Completion and a Letter of Recommendation upon successful completion",
    ],
  },
  {
    role: "Self-Directed Training",
    org: "TCM Security Academy",
    date: "2025",
    points: [
      "Completed structured training covering SOC fundamentals, network traffic analysis, and incident response workflows",
    ],
  },
];

const PROJECTS = [
  {
    name: "SecOpsAI",
    tagline: "Adversarial-Resilient SOC Detection Platform",
    stack: ["Python", "FastAPI", "XGBoost", "IBM ART", "PostgreSQL", "Redis", "Docker", "Prometheus", "Grafana"],
    points: [
      "Architected and built SecOpsAI, a production-grade SOC detection platform that ingests raw network flow data, classifies it using an XGBoost model, exposes predictions through a secured REST API, and drives an automated alert and response pipeline",
      "Hardened the detection model against adversarial evasion using IBM's Adversarial Robustness Toolbox, benchmarking HopSkipJump, ZOO, Boundary, Decision Tree, and Square attacks before and after hardening, measuring F1-score degradation under each",
      "Built a FastAPI service with JWT authentication, role-based access control, and Redis-backed rate limiting, instrumented with Prometheus metrics and Grafana dashboards for real-time observability",
      "Designed a SHA-256 hash-chained audit log in PostgreSQL to make detection and containment events tamper-evident",
      "Implemented an automated response pipeline enriching alerts via VirusTotal and Shodan, notifying through Slack, forwarding to Wazuh SIEM over syslog, and auto-triggering containment above a configurable confidence threshold",
      "Containerized the full stack — API, PostgreSQL, Redis, Prometheus, Grafana, and MLflow — with Docker Compose and a Make-based quick-start workflow for reproducible deployment",
    ],
    why: "Most machine learning security solutions focus on detection accuracy but overlook how attackers can manipulate models through adversarial attacks. SecOpsAI was built to bridge that gap by combining adversarially robust machine learning with automated detection, response, and observability — giving SOC teams a platform they can trust even in the presence of sophisticated evasion techniques.",
  },
  {
    name: "ShieldFlow",
    tagline: "Open Source Application Security Pipeline",
    stack: ["Semgrep", "Trivy", "Gitleaks", "OWASP ZAP", "GitHub Actions", "Nuclei", "Python", "Shuffle SOAR"],
    points: [
      "Architected and open-sourced ShieldFlow, a reusable GitHub Actions security pipeline integrating five security tools for SAST, SCA, secrets detection, Nuclei scanning, and DAST",
      "Implemented Semgrep SAST using OWASP Top 10 rulesets with SARIF output for seamless integration with GitHub Security",
      "Deployed OWASP ZAP DAST with Ajax Spider and configurable pipeline break gates",
      "Built a Python SOAR connector with NVD CVE enrichment and SHA-256 fingerprinting to eliminate duplicate findings before forwarding alerts to Shuffle SOAR through webhooks",
      "Implemented conditional execution logic that runs SAST, SCA, and secret scanning on every push while executing DAST only when a target URL is supplied",
    ],
    why: "Security reviews often take days and are frequently delayed until late in the development cycle, letting vulnerabilities sit undiscovered for longer than necessary. ShieldFlow shifts security earlier by automating testing directly within the CI/CD pipeline, so developers get immediate feedback on every commit and security becomes part of the workflow instead of a bottleneck.",
  },
];

const CASE_FILES = [
  {
    title: "FireOps Systems — Centralized Log Management & Threat Detection",
    year: "2026",
    summary: "Deployed Wazuh SIEM across Windows, Kali, and Ubuntu endpoints, integrated AWS CloudTrail, and ran a solo red-team attack chain that Wazuh detected in real time — including a webshell drop flagged at Rule Level 15 (Critical).",
    tags: ["Wazuh", "AWS CloudTrail", "Red Team", "MITRE T1110"],
  },
  {
    title: "Phishing Detection & Threat Analysis",
    year: "2026",
    summary: "Achieved 100% detection accuracy across banking, Microsoft, and crypto-themed phishing lures, traced attacker infrastructure, and mapped activity to 4 MITRE ATT&CK techniques.",
    tags: ["Phishing", "IOC Extraction", "MITRE ATT&CK"],
  },
  {
    title: "Malware Traffic Analysis — Lumma Stealer C2 Investigation",
    year: "2026",
    summary: "Reconstructed a full victim machine profile from raw PCAP data, identified C2 beaconing, and confirmed data exfiltration patterns mapped to MITRE T1027 and T1102.",
    tags: ["PCAP", "C2 Detection", "MITRE T1027"],
  },
  {
    title: "Web Application VAPT — OWASP Juice Shop",
    year: "2026",
    summary: "Identified 8 vulnerabilities including a high-risk CSP misconfiguration, exposed admin endpoints, and an open FTP port; delivered a remediation-focused report aligned with OWASP Top 10.",
    tags: ["OWASP Top 10", "ZAP", "Nmap"],
  },
  {
    title: "API Security Risk Analysis — JSONPlaceholder",
    year: "2025",
    summary: "Assessed REST API endpoints against the OWASP API Top 10, identifying authentication weaknesses and missing rate-limiting controls with risk-classified remediation.",
    tags: ["OWASP API Top 10", "Postman"],
  },
  {
    title: "Windows Threat Hunting — Blue Team Labs Online",
    year: "2025",
    summary: "Hunted adversary techniques across endpoint telemetry using EZTools, YARA rules, Hindsight, and Sysmon logs in Kibana, mapping behaviors to MITRE ATT&CK tactics.",
    tags: ["Sysmon", "YARA", "ELK Stack"],
  },
];
