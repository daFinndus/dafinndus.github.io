export type Writeup = {
  slug: string;
  title: string;
  date: string;
  description: string;
  system: "Linux" | "Windows";
  difficulty: "Easy" | "Medium";
  keywords: string[];
};

const makeWriteup = (
  slug: string,
  title: string,
  date: string,
  description: string,
  system: Writeup["system"],
  difficulty: Writeup["difficulty"],
  keywords: string[],
): Writeup => ({
  slug,
  title,
  date,
  description,
  system,
  difficulty,
  keywords,
});

export const writeups: Writeup[] = [
  [
    "orion",
    "Orion",
    "2026-10-23",
    "Orion is an easy Linux machine that focuses on trivial CVE exploitation.",
    "Linux",
    "Easy",
    ["craftcms", "metasploit", "telnet"],
  ],
  [
    "stream",
    "Stream",
    "2026-10-16",
    "Stream is a medium Linux machine that focuses on directory fuzzing, memory analysis, and process injection.",
    "Linux",
    "Medium",
    ["mysql", "memory analysis", "process injection"],
  ],
  [
    "touch",
    "Touch",
    "2026-10-10",
    "Touch is an easy Windows machine using logical combination and MySQL exploitation.",
    "Windows",
    "Easy",
    ["mysql", "windows"],
  ],
  [
    "enigma",
    "Enigma",
    "2026-06-29",
    "Enigma is an easy Linux machine focusing on company NFS shares, password re-use and OliveTin.",
    "Linux",
    "Easy",
    ["nfs", "olivetin"],
  ],
  [
    "silentium",
    "Silentium",
    "2026-04-16",
    "Silentium is an easy Linux machine centered around a two-stage Flowise exploit chain and credential reuse.",
    "Linux",
    "Easy",
    ["flowise", "gogs"],
  ],
  [
    "devarea",
    "DevArea",
    "2026-04-02",
    "DevArea is a medium Linux machine involving a SOAP service, Apache CXF SSRF, and Hoverfly.",
    "Linux",
    "Medium",
    ["soap", "ssrf", "hoverfly"],
  ],
  [
    "monitorsfour",
    "MonitorsFour",
    "2026-03-30",
    "MonitorsFour is an easy Windows machine running Cacti with an exposed Docker daemon.",
    "Windows",
    "Easy",
    ["cacti", "docker"],
  ],
  [
    "kobold",
    "Kobold",
    "2026-03-26",
    "Kobold is an easy Linux machine involving MCPJam and Docker.",
    "Linux",
    "Easy",
    ["mcpjam", "docker"],
  ],
  [
    "variatype",
    "VariaType",
    "2026-03-19",
    "VariaType is a medium Linux machine involving vulnerabilities in fontTools and setuptools.",
    "Linux",
    "Medium",
    ["fonttools", "setuptools"],
  ],
  [
    "cctv",
    "CCTV",
    "2026-03-13",
    "CCTV is an easy Linux machine built around ZoneMinder and motionEye.",
    "Linux",
    "Easy",
    ["zoneminder", "motioneye"],
  ],
  [
    "interpreter",
    "Interpreter",
    "2025-02-24",
    "Interpreter is a medium Linux machine centered around Mirth Connect.",
    "Linux",
    "Medium",
    ["mirth", "rce"],
  ],
  [
    "wingdata",
    "WingData",
    "2025-02-21",
    "WingData is an easy Linux machine involving Wing FTP and Python tarfile.",
    "Linux",
    "Easy",
    ["ftp", "tarfile"],
  ],
  [
    "facts",
    "Facts",
    "2025-02-17",
    "Facts is an easy Linux machine where fuzzing, AWS CLI, and sudo led to root.",
    "Linux",
    "Easy",
    ["fuzzing", "aws", "sudo"],
  ],
].map(([slug, title, date, description, system, difficulty, keywords]) =>
  makeWriteup(
    String(slug),
    String(title),
    String(date),
    String(description),
    system as Writeup["system"],
    difficulty as Writeup["difficulty"],
    Array.isArray(keywords) ? keywords.map(String) : [String(keywords)],
  ),
);
