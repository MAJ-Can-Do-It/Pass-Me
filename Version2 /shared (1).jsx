// shared.jsx — Data, Router context, shared UI components

const { createContext, useContext, useState } = React;

// ─── Router ─────────────────────────────────────────────────────────────────
const RouterCtx = createContext(null);
const useRouter = () => useContext(RouterCtx);

// ─── School Styles (keyed by school name) ────────────────────────────────────
const FACULTY_STYLES = {
  "Business School":                          { color:"oklch(0.54 0.20 35)",  bg:"oklch(0.95 0.04 35)",  label:"Business",     dark:"oklch(0.34 0.22 32)",  darkEnd:"oklch(0.44 0.18 44)"  },
  "School of Engineering":                    { color:"oklch(0.48 0.26 278)", bg:"oklch(0.95 0.05 278)", label:"Engineering",  dark:"oklch(0.28 0.28 278)", darkEnd:"oklch(0.38 0.24 292)" },
  "Medical School":                           { color:"oklch(0.42 0.20 250)", bg:"oklch(0.94 0.05 250)", label:"Medical",      dark:"oklch(0.26 0.22 250)", darkEnd:"oklch(0.36 0.18 262)" },
  "Dental School":                            { color:"oklch(0.42 0.18 200)", bg:"oklch(0.93 0.05 200)", label:"Dental",       dark:"oklch(0.26 0.20 200)", darkEnd:"oklch(0.36 0.16 212)" },
  "Architecture & Design School":             { color:"oklch(0.46 0.16 168)", bg:"oklch(0.93 0.05 168)", label:"Architecture", dark:"oklch(0.28 0.18 168)", darkEnd:"oklch(0.38 0.14 180)" },
  "Hospitality Management & Tourism School":  { color:"oklch(0.50 0.18 12)",  bg:"oklch(0.95 0.04 12)",  label:"Hospitality",  dark:"oklch(0.30 0.22 12)",  darkEnd:"oklch(0.40 0.18 24)"  },
};

// ─── Programs per school ──────────────────────────────────────────────────────
const PROGRAMS = {
  "Business School":                         ["Accounting and Finance","Management","Economics","International Business","Marketing","English Language Teaching"],
  "School of Engineering":                   ["Computer Science","Biomedical Engineering","Industrial Engineering"],
  "Medical School":                          ["Medicine"],
  "Dental School":                           ["Dental Surgery"],
  "Architecture & Design School":            ["Architecture & Design"],
  "Hospitality Management & Tourism School": ["Hospitality Management & Tourism"],
};

// ─── Tutor Data ───────────────────────────────────────────────────────────────
const TUTORS = [
  {
    id: 1, name: "Dilnoza Yusupova",
    school: "Business School", program: "Accounting and Finance", year: 3,
    subjects: ["Accounting", "Economics", "Statistics"],
    individual: 80000, group: 45000,
    bio: "3rd-year Accounting & Finance student with a strong academic record. I break down complex accounting principles and economic theory into clear, practical lessons. My approach is exam-focused and stress-free — helped 25+ students improve their GPA significantly.",
    experience: "1.5 years tutoring. Peer mentor at CAU's Academic Support Hub. Top student in Financial Accounting. Created revision sheets used by 60+ students across the Business School.",
    telegram: "@dilnoza_tutor", phone: "+998 90 123 4567", email: "d.yusupova@cau.uz",
    availability: ["Mon", "Wed", "Fri", "Sat"], sessions: 34, rating: 4.9
  },
  {
    id: 2, name: "Jasur Toshmatov",
    school: "School of Engineering", program: "Computer Science", year: 3,
    subjects: ["Programming Fundamentals", "Calculus", "Web Development Basics"],
    individual: 90000, group: 50000,
    bio: "CS student who loves making code click for beginners. From your very first 'Hello World' to building real web pages — I teach with patience and real project examples. Sessions are hands-on, not just theory. Active in hackathons and the CAU coding club.",
    experience: "2 years tutoring. Teaching Assistant for Programming Fundamentals lab. Mentored 15+ first-year students. Built 4 production web apps. Runner-up at CAU Hackathon 2025.",
    telegram: "@jasur_code", phone: "+998 91 234 5678", email: "j.toshmatov@cau.uz",
    availability: ["Tue", "Thu", "Sat", "Sun"], sessions: 52, rating: 4.9
  },
  {
    id: 3, name: "Malika Rahimova",
    school: "Medical School", program: "Medicine", year: 4,
    subjects: ["Anatomy", "Biology", "Medical Terminology"],
    individual: 100000, group: 60000,
    bio: "4th-year Medicine student with a passion for helping fellow students navigate the demanding med school curriculum. I use visual aids, mnemonics, and clinical context to make anatomy and biology genuinely memorable. No more rote-memorisation sessions.",
    experience: "2 years tutoring. Dean's List student. Anatomy study group leader for 30+ students. Created illustrated anatomy notes distributed across the Medical School.",
    telegram: "@malika_med", phone: "+998 93 345 6789", email: "m.rahimova@cau.uz",
    availability: ["Mon", "Wed", "Fri"], sessions: 41, rating: 4.8
  },
  {
    id: 4, name: "Bobur Nazarov",
    school: "Dental School", program: "Dental Surgery", year: 3,
    subjects: ["Dental Anatomy", "Chemistry", "Biology"],
    individual: 85000, group: 48000,
    bio: "Dental Surgery student with top marks in Dental Anatomy and Chemistry. I focus on making the science behind dentistry engaging and exam-ready. Small group sessions are my specialty — relaxed atmosphere, real results.",
    experience: "1 year tutoring. Lab demonstrator for Chemistry practicals. Helped peers ace their Dental Anatomy midterms. Active member of the CAU Dental Student Society.",
    telegram: "@bobur_dental", phone: "+998 94 456 7890", email: "b.nazarov@cau.uz",
    availability: ["Mon", "Tue", "Thu", "Sat"], sessions: 19, rating: 4.7
  },
  {
    id: 5, name: "Zulfiya Karimova",
    school: "Architecture & Design School", program: "Architecture & Design", year: 2,
    subjects: ["Architecture Studio Basics", "Design Software"],
    individual: 75000, group: 42000,
    bio: "2nd-year Architecture & Design student with a sharp eye for spatial thinking and digital tools. I guide students through studio projects, technical drawing, AutoCAD, and design software from the ground up with a calm, structured approach.",
    experience: "6 months tutoring. Workshop assistant for Architecture Studio. Proficient in AutoCAD, SketchUp, and Adobe Creative Suite. Won CAU Best Studio Project Award 2025.",
    telegram: "@zulfiya_arch", phone: "+998 95 567 8901", email: "z.karimova@cau.uz",
    availability: ["Wed", "Thu", "Fri", "Sun"], sessions: 14, rating: 4.6
  },
  {
    id: 6, name: "Sarvar Mirzaev",
    school: "Hospitality Management & Tourism School", program: "Hospitality Management & Tourism", year: 4,
    subjects: ["Hospitality Operations", "Tourism Management", "Management"],
    individual: 70000, group: 38000,
    bio: "Final-year Hospitality & Tourism student with real industry internship experience in Tashkent. I connect classroom theory directly to hotel and tourism operations — practical, engaging, and relevant to your future career.",
    experience: "1 year tutoring. Completed internship at a 5-star hotel in Tashkent. Organised CAU Tourism Week 2025. Mentored junior students on dissertation research and industry presentations.",
    telegram: "@sarvar_hosp", phone: "+998 97 678 9012", email: "s.mirzaev@cau.uz",
    availability: ["Tue", "Sat", "Sun"], sessions: 23, rating: 4.8
  }
];

// ─── Filter Data ──────────────────────────────────────────────────────────────
const FACULTIES = [
  "All Schools",
  "Business School",
  "School of Engineering",
  "Medical School",
  "Dental School",
  "Architecture & Design School",
  "Hospitality Management & Tourism School",
];

const ALL_SUBJECTS = [
  "Programming Fundamentals","Web Development Basics","Calculus","Statistics",
  "Academic Writing","Economics","Accounting","Marketing","Management",
  "Business Math","Anatomy","Biology","Chemistry","Medical Terminology",
  "Dental Anatomy","Architecture Studio Basics","Design Software",
  "Hospitality Operations","Tourism Management",
];

// ─── Admin Pending Applications ───────────────────────────────────────────────
const PENDING_APPS = [
  {
    id: 101, name: "Nodira Xasanova",
    school: "Business School", program: "Marketing", year: 2,
    subjects: ["Marketing", "Management"], individual: 65000, group: 36000,
    email: "n.xasanova@cau.uz", telegram: "@nodira_mkt",
    bio: "2nd-year Marketing student. Strong in consumer behaviour and brand strategy. I love making marketing theory practical and relevant for exams and real projects.",
    appliedAt: "Apr 23, 2026", status: "pending"
  },
  {
    id: 102, name: "Akbar Tursunov",
    school: "School of Engineering", program: "Biomedical Engineering", year: 3,
    subjects: ["Biology", "Chemistry", "Statistics"], individual: 80000, group: 45000,
    email: "a.tursunov@cau.uz", telegram: "@akbar_bme",
    bio: "3rd-year Biomedical Engineering student. Bridging biology and engineering is my speciality. I make these subjects approachable and exam-focused for any level.",
    appliedAt: "Apr 22, 2026", status: "pending"
  },
  {
    id: 103, name: "Sevinch Ortiqova",
    school: "Medical School", program: "Medicine", year: 3,
    subjects: ["Anatomy", "Medical Terminology"], individual: 90000, group: 52000,
    email: "s.ortiqova@cau.uz", telegram: "@sevinch_med",
    bio: "3rd-year Medicine student passionate about helping junior students survive and thrive in the early years of medical school. Visual learning methods are my signature.",
    appliedAt: "Apr 21, 2026", status: "pending"
  }
];

// ─── Shared UI Components ─────────────────────────────────────────────────────

function Avatar({ name, faculty, size = 48 }) {
  const initials = name.split(' ').map(n => n[0]).slice(0, 2).join('');
  const fs = FACULTY_STYLES[faculty] || { color: "oklch(0.48 0.26 278)", bg: "oklch(0.95 0.05 278)" };
  return (
    <div style={{
      width: size, height: size, borderRadius: '50%',
      background: fs.bg, color: fs.color,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      fontWeight: 800, fontSize: size * 0.34, flexShrink: 0,
      letterSpacing: '0.02em', border: `2.5px solid ${fs.color}30`,
    }}>{initials}</div>
  );
}

function SubjectTag({ children }) {
  return (
    <span style={{
      display: 'inline-block', padding: '4px 11px', borderRadius: 100,
      background: 'oklch(0.95 0.05 278)', color: 'oklch(0.42 0.14 278)',
      fontSize: 12, fontWeight: 600, whiteSpace: 'nowrap',
      border: '1.5px solid oklch(0.88 0.07 278)',
    }}>{children}</span>
  );
}

function DayBadge({ day, active }) {
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
      width: 34, height: 32, borderRadius: 8,
      background: active ? 'oklch(0.48 0.26 278)' : 'oklch(0.95 0.02 278)',
      color: active ? 'white' : 'oklch(0.68 0.04 278)',
      fontSize: 11, fontWeight: 700,
    }}>{day.slice(0,2)}</span>
  );
}

function StarRating({ rating }) {
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 3 }}>
      <span style={{ color: 'oklch(0.78 0.18 82)', fontSize: 13 }}>★</span>
      <span style={{ fontWeight: 700, fontSize: 13, color: 'oklch(0.26 0.04 278)' }}>{rating}</span>
    </span>
  );
}

function FacultyBadge({ faculty }) {
  const fs = FACULTY_STYLES[faculty] || {};
  return (
    <span style={{
      padding: '3px 10px', borderRadius: 100,
      background: fs.bg, color: fs.color,
      fontSize: 11, fontWeight: 700, letterSpacing: '0.01em',
      whiteSpace: 'nowrap', display: 'inline-block',
    }}>{fs.label || faculty}</span>
  );
}

function TutorCard({ tutor }) {
  const { navigate } = useRouter();
  const fs = FACULTY_STYLES[tutor.school] || { color: "oklch(0.48 0.26 278)", bg: "oklch(0.95 0.05 278)" };
  const [hov, setHov] = useState(false);

  return (
    <div
      onClick={() => navigate('tutor-profile', { tutorId: tutor.id })}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        background: 'white', borderRadius: 22, overflow: 'hidden', cursor: 'pointer',
        boxShadow: hov ? '0 20px 48px rgba(80,40,200,0.16)' : '0 2px 16px rgba(80,40,200,0.07)',
        transform: hov ? 'translateY(-5px)' : 'none',
        transition: 'all 0.22s ease',
        border: '1px solid oklch(0.93 0.03 278)',
      }}
    >
      <div style={{ height: 6, background: `linear-gradient(90deg, ${fs.color}, ${fs.color}99)` }} />
      <div style={{ padding: '20px 20px 18px' }}>
        {/* Header */}
        <div style={{ display: 'flex', gap: 13, alignItems: 'flex-start', marginBottom: 13 }}>
          <Avatar name={tutor.name} faculty={tutor.school} size={50} />
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontWeight: 800, fontSize: 15, marginBottom: 3 }}>{tutor.name}</div>
            <div style={{ fontSize: 11, color: 'oklch(0.55 0.05 278)', fontWeight: 500, marginBottom: 4, lineHeight: 1.4 }}>
              {tutor.program}
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <FacultyBadge faculty={tutor.school} />
              <span style={{ fontSize: 12, color: 'oklch(0.60 0.04 278)', whiteSpace: 'nowrap' }}>Year {tutor.year}</span>
            </div>
            <div style={{ marginTop: 5, display: 'flex', gap: 10 }}>
              <StarRating rating={tutor.rating} />
              <span style={{ fontSize: 12, color: 'oklch(0.62 0.04 278)' }}>{tutor.sessions} sessions</span>
            </div>
          </div>
        </div>
        {/* Subjects */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5, marginBottom: 13 }}>
          {tutor.subjects.map(s => <SubjectTag key={s}>{s}</SubjectTag>)}
        </div>
        {/* Prices */}
        <div style={{ display: 'flex', gap: 8, marginBottom: 13 }}>
          {[{ label: '1-on-1 / hr', price: tutor.individual }, { label: 'Group / student', price: tutor.group }].map(p => (
            <div key={p.label} style={{
              flex: 1, padding: '9px 10px', borderRadius: 12,
              background: 'oklch(0.97 0.02 278)', textAlign: 'center',
            }}>
              <div style={{ fontSize: 10, color: 'oklch(0.58 0.05 278)', fontWeight: 600, marginBottom: 2 }}>{p.label}</div>
              <div style={{ fontWeight: 800, fontSize: 13, color: fs.color }}>{p.price.toLocaleString()} UZS</div>
            </div>
          ))}
        </div>
        {/* Availability */}
        <div style={{ display: 'flex', gap: 4, marginBottom: 16 }}>
          {['Mon','Tue','Wed','Thu','Fri','Sat','Sun'].map(d => (
            <DayBadge key={d} day={d} active={tutor.availability.includes(d)} />
          ))}
        </div>
        {/* CTA */}
        <button
          onClick={e => { e.stopPropagation(); navigate('tutor-profile', { tutorId: tutor.id }); }}
          style={{
            width: '100%', padding: '11px', borderRadius: 13, border: 'none',
            background: fs.color, color: 'white', fontWeight: 700, fontSize: 14,
            cursor: 'pointer', fontFamily: 'inherit', letterSpacing: '0.01em',
          }}
          onMouseEnter={e => e.target.style.filter = 'brightness(1.12)'}
          onMouseLeave={e => e.target.style.filter = 'none'}
        >View Profile →</button>
      </div>
    </div>
  );
}

Object.assign(window, {
  RouterCtx, useRouter,
  FACULTY_STYLES, PROGRAMS, TUTORS, FACULTIES, ALL_SUBJECTS, PENDING_APPS,
  Avatar, SubjectTag, DayBadge, StarRating, FacultyBadge, TutorCard,
});
