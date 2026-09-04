import oracledevMedia from "../assets/projects/oracledev.webm";
import codelensaMedia from "../assets/projects/codelensa.webp";
import triggMedia from "../assets/projects/trigg.webp";
import mt from "../assets/projects/mt.webp";
import sa from "../assets/projects/sa.webp";
import fa from "../assets/projects/fa.webp";
import ip from "../assets/projects/ip.webp";
import ba from "../assets/projects/ba.webp";
import ms from "../assets/projects/ms.webp";
import cc from "../assets/projects/cc.webp";
import mu from "../assets/projects/mu.webp";
import ck from "../assets/projects/ck.webp";
import lo from "../assets/projects/lo.webp";
import ss from "../assets/projects/ss.webp";
import vg from "../assets/projects/vg.webp";
import ri from "../assets/projects/ri.webp";
import de from "../assets/projects/de.webp";

export const featuredProjects = [
  {
    id: "oracledev", rank: "01", name: "OracleDev", eyebrow: "AUTONOMOUS SOFTWARE ENGINEERING",
    website: "https://oracledev.vercel.app",
    tagline: "A multi-agent engineer you can watch think in systems.",
    description: "An open-source engineering environment where specialized AI agents plan, implement, test and review scoped software tasks while a live fantasy office mirrors the runtime event stream.",
    media: oracledevMedia, mediaType: "video", accent: "lab(49.9355% 55.1776 -81.8963)",
    stack: ["Next.js", "TypeScript", "Hono", "Cloudflare Workers", "D1", "OpenAI Agents SDK", "Docker", "WebContainers"],
    highlights: ["Provider-neutral agent runtime with public, local and deterministic demo profiles.", "Browser WebContainer execution for public JavaScript and TypeScript repositories.", "Docker-backed, non-root disposable workspaces for full local engineering mode.", "Resumable SSE events make planning, implementation, tests and review observable."],
    architecture: ["Next.js control room + fantasy office", "Hono orchestration runtime", "Specialist agent graph + bounded review loop", "WebContainer or isolated Docker execution", "D1 persistence + resumable event stream"],
    links: [{ label: "Live app", url: "https://oracledev.vercel.app" }, { label: "Frontend repo", url: "https://github.com/muhdlubega/oracledev-frontend" }, { label: "Runtime repo", url: "https://github.com/muhdlubega/oracledev-runtime" }, { label: "Sandbox repo", url: "https://github.com/muhdlubega/oracledev-sandbox" }, { label: "Demo repo", url: "https://github.com/muhdlubega/oracledev-demo-repo" }],
  },
  {
    id: "codelensa", rank: "02", name: "CodeLensa", eyebrow: "CODE INTELLIGENCE / RAG",
    website: "https://codelensa.pages.dev",
    tagline: "Repository answers that can show their work.",
    description: "A Cloudflare-native code intelligence workspace that indexes public repositories, understands symbols and dependencies, and answers questions with server-verified file and line citations.",
    media: codelensaMedia, mediaType: "image", accent: "#39e8ff",
    stack: ["Next.js", "TypeScript", "Hono", "Workers AI", "Vectorize", "D1 FTS5", "R2", "Queues", "LangGraph", "Tree-sitter"],
    highlights: ["Hybrid lexical, semantic and dependency-graph retrieval with reciprocal rank fusion.", "AST-aware chunks preserve symbols, parents and exact source line ranges.", "Normal Ask and bounded Investigate modes share server-owned citation validation.", "An IDE-style client combines Monaco navigation, graphs, retrieval inspection and evals."],
    architecture: ["Next.js IDE-style workspace", "Hono Worker API + Firebase identity", "Queue-based repository ingestion", "R2 source + D1 lexical/graph + Vectorize semantic index", "LangGraph retrieval + verified citations"],
    links: [{ label: "Live app", url: "https://codelensa.pages.dev" }, { label: "Core repository", url: "https://github.com/muhdlubega/codelensa-core" }, { label: "Web repository", url: "https://github.com/muhdlubega/codelensa-web" }],
  },
  {
    id: "trigg", rank: "03", name: "Trigg", eyebrow: "AI AUTOMATION INFRASTRUCTURE",
    website: "https://trigg.pages.dev",
    tagline: "Automate what happens next.",
    description: "An open-source visual automation platform that composes triggers, processing, safe logic and actions into observable, versioned workflows for developer teams.",
    media: triggMedia, mediaType: "image", accent: "#ff5a1f",
    stack: ["React", "TypeScript", "React Flow", "Hono", "Cloudflare Workers", "D1", "Queues", "Workers AI", "Firebase"],
    highlights: ["A registry-driven DAG engine with immutable workflow versions and cycle validation.", "GitHub App webhooks are verified, deduplicated and queued before execution.", "Every node exposes its inputs, outputs, retries, latency, model and token usage.", "Safe interpolation and comparisons avoid runtime eval while keeping workflows flexible."],
    architecture: ["React Flow visual builder", "Hono Worker + authenticated API", "D1 workflow/event persistence", "Cloudflare Queue + workflow engine", "AI, GitHub, email and guarded HTTPS actions"],
    links: [{ label: "Live app", url: "https://trigg.pages.dev" }, { label: "GitHub", url: "https://github.com/muhdlubega/trigg" }],
  },
];

export const aiProjects = [
  { name: "Defentrium", kicker: "AI-assisted application security", description: "Deterministic-first web security scanning across headers, TLS, CSP, cookies and exposure signals, with AI reserved for explaining verified findings.", stack: ["Next.js 15", "TypeScript", "Security Engine", "AI"], image: de, link: "https://defentrium.vercel.app", source: "https://github.com/muhdlubega/defentrium", accent: "security" },
  { name: "Beg.AI", kicker: "Multi-model AI workspace", description: "A focused interface for comparing different AI models across text and image understanding tasks, with benchmarking and visualization features.", stack: ["React", "TypeScript", "Gemini", "Mistral", "Supabase"], image: ba, link: "https://beg-ai.vercel.app/", source: "https://github.com/muhdlubega/beg-ai" },
  { name: "MyTransit", kicker: "Intelligent transit companion", description: "Live Malaysian transit positions, routes and schedules with Mistral-powered conversational routing support, showing live bus locations and estimated arrival times.", stack: ["React", "TypeScript", "Mapbox", "Mistral", "Supabase"], image: mt, link: "https://mytransit.vercel.app/", source: "https://github.com/muhdlubega/mytransit" },
  { name: "Saksama", kicker: "Document intelligence for SMEs", description: "AI document processing for halal compliance, accounting automation and customs verification, focusing on data extraction, verification and automation.", stack: ["Next.js", "Pixtral", "OCR", "Supabase"], image: sa, link: "https://saksama.live/" },
  { name: "IMG.prcess", kicker: "Structured OCR pipeline", description: "Extracts confidence-scored fields from documents and images, keeps searchable history and exports clean Excel or PDF output.", stack: ["Next.js", "Pixtral", "Supabase", "xlsx", "jsPDF"], image: ip, link: "https://img-prcess.vercel.app/", source: "https://github.com/muhdlubega/img.prcess" },
  { name: "Facial Analyzer", kicker: "Vision-language analysis", description: "A visual-analysis experiment that uses a multimodal model to interpret facial expression, emotional cues and perceived ancestry signals.", stack: ["Next.js", "Pixtral", "TypeScript", "shadcn/ui"], image: fa, link: "https://ai-facial-analyzer.vercel.app/", source: "https://github.com/muhdlubega/facial-analyzer" },
];

export const frontendProjects = [
  { name: "MgmtSys", description: "A data-rich management dashboard with secure CRUD flows, API integration and Firebase-backed identity.", image: ms, stack: ["React", "SCSS", "Firebase"], link: "https://mgmtsys.vercel.app/", source: "https://github.com/muhdlubega/mgmt-sys-dashboard" },
  { name: "CommonCents", description: "A gamified trading education hub with live market context, simulated options and a shared web/mobile account.", image: cc, stack: ["React", "TypeScript", "Firebase"], link: "https://commoncents.vercel.app/", source: "https://github.com/muhdlubega/DRC-CommonCents-WebApp" },
  { name: "Muizzle.me", description: "A daily visual movie puzzle with persistent player statistics, analytics and an R2-backed image library.", image: mu, stack: ["React", "TypeScript", "Cloudflare R2"], link: "https://muizzle.pages.dev/", source: "https://github.com/muhdlubega/muizzle" },
  { name: "Lib.Org", description: "A Flutter library organizer with Google Books search, ISBN scanning, favorites and custom collections.", image: lo, stack: ["Flutter", "Dart", "Firebase", "BLoC"], source: "https://github.com/muhdlubega/library-organizer" },
  { name: "ShopShwift", description: "A vivid storefront prototype with catalog sorting, cart state and responsive product flows.", image: ss, stack: ["React", "SCSS", "Context API"], link: "https://shopshwift.vercel.app/", source: "https://github.com/muhdlubega/e-commerce" },
  { name: "Visual Gamer", description: "A collaborative game-discovery experience built around the RAWG catalog API during a one-week hackathon.", image: vg, stack: ["React", "TypeScript", "Firebase"], link: "https://visualgamer.vercel.app/", source: "https://github.com/muhdlubega/ctrlc-ctrlv-hackathon" },
  { name: "CryptoKing", description: "A crypto market watcher built to explore charting, REST data flows and Firebase application patterns.", image: ck, stack: ["React", "Chart.js", "CoinGecko"], link: "https://thecryptoking.vercel.app/", source: "https://github.com/muhdlubega/crypto-king" },
  { name: "Recommend.me", description: "A TV discovery interface built with TMDB and React, the project that started the frontend journey.", image: ri, stack: ["React", "JavaScript", "TMDB API"], link: "https://recommendme-livid.vercel.app/", source: "https://github.com/muhdlubega/recommendme" },
];
