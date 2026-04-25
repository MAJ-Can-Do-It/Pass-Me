// pages1.jsx — HomePage, FindTutors, TutorProfile

const { useState: useStateP1, useEffect: useEffectP1 } = React;

// ─── HomePage ─────────────────────────────────────────────────────────────────
function HomePage() {
  const { navigate } = useRouter();

  return (
    <div>
      {/* ── Hero ── */}
      <section style={{
        background: 'linear-gradient(140deg, oklch(0.42 0.28 278) 0%, oklch(0.52 0.26 300) 45%, oklch(0.60 0.22 330) 100%)',
        padding: '88px 0 104px', position: 'relative', overflow: 'hidden',
      }}>
        <div style={{ position:'absolute', top:-80, right:-80, width:480, height:480, borderRadius:'50%', background:'rgba(255,255,255,0.05)' }} />
        <div style={{ position:'absolute', bottom:-100, left:'20%', width:360, height:360, borderRadius:'50%', background:'rgba(255,255,255,0.04)' }} />
        <div style={{ position:'absolute', top:'30%', right:'15%', width:200, height:200, borderRadius:'50%', background:'rgba(255,255,255,0.04)' }} />

        <div className="container" style={{ position:'relative', zIndex:1, textAlign:'center' }}>
          <div style={{
            display:'inline-flex', alignItems:'center', gap:8,
            background:'rgba(255,255,255,0.14)', borderRadius:100,
            padding:'7px 18px', marginBottom:30,
            color:'rgba(255,255,255,0.92)', fontSize:13, fontWeight:600,
            backdropFilter:'blur(8px)', border:'1px solid rgba(255,255,255,0.2)',
          }}>
            🎓 Central Asian University · Peer Tutoring Platform
          </div>

          <h1 style={{
            color:'white', fontSize:'clamp(38px,5.5vw,66px)', fontWeight:900,
            lineHeight:1.12, marginBottom:22, letterSpacing:'-0.02em',
            textShadow:'0 2px 24px rgba(0,0,0,0.18)',
          }}>
            Find your perfect tutor<br />
            <span style={{ color:'oklch(0.92 0.14 82)' }}>at CAU</span>
          </h1>

          <p style={{
            color:'rgba(255,255,255,0.80)', fontSize:18, maxWidth:520,
            margin:'0 auto 40px', lineHeight:1.75,
          }}>
            Connect with verified peer tutors from your own university. Learn from students who aced the same courses — affordably, flexibly, and on your schedule.
          </p>

          <div style={{ display:'flex', gap:14, justifyContent:'center', flexWrap:'wrap' }}>
            <button onClick={() => navigate('find-tutors')} style={{
              padding:'15px 36px', borderRadius:16, border:'none',
              background:'white', color:'oklch(0.42 0.28 278)',
              fontWeight:800, fontSize:16, cursor:'pointer', fontFamily:'inherit',
              boxShadow:'0 6px 24px rgba(0,0,0,0.18)',
              transition:'transform 0.15s, box-shadow 0.15s',
            }}
              onMouseEnter={e => { e.target.style.transform='translateY(-2px)'; e.target.style.boxShadow='0 12px 32px rgba(0,0,0,0.24)'; }}
              onMouseLeave={e => { e.target.style.transform=''; e.target.style.boxShadow='0 6px 24px rgba(0,0,0,0.18)'; }}
            >Find a Tutor →</button>
            <button onClick={() => navigate('become-tutor')} style={{
              padding:'15px 36px', borderRadius:16,
              border:'2px solid rgba(255,255,255,0.45)', background:'transparent',
              color:'white', fontWeight:700, fontSize:16, cursor:'pointer', fontFamily:'inherit',
              transition:'background 0.15s, border-color 0.15s',
            }}
              onMouseEnter={e => { e.target.style.background='rgba(255,255,255,0.14)'; e.target.style.borderColor='rgba(255,255,255,0.85)'; }}
              onMouseLeave={e => { e.target.style.background='transparent'; e.target.style.borderColor='rgba(255,255,255,0.45)'; }}
            >Become a Tutor</button>
          </div>

          {/* Stats strip */}
          <div style={{ display:'flex', justifyContent:'center', gap:'clamp(20px,4vw,52px)', marginTop:56, flexWrap:'wrap' }}>
            {[['47+','Active Tutors'],['300+','Students Helped'],['50+','Subjects'],['1,200+','Sessions Done']].map(([v,l]) => (
              <div key={l} style={{ textAlign:'center' }}>
                <div style={{ color:'oklch(0.92 0.14 82)', fontWeight:900, fontSize:'clamp(22px,3vw,30px)', letterSpacing:'-0.01em' }}>{v}</div>
                <div style={{ color:'rgba(255,255,255,0.65)', fontSize:13, fontWeight:500, marginTop:2 }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How it works ── */}
      <section style={{ padding:'80px 0', background:'white' }}>
        <div className="container">
          <div style={{ textAlign:'center', marginBottom:52 }}>
            <div style={{ fontSize:12, fontWeight:700, color:'oklch(0.48 0.26 278)', textTransform:'uppercase', letterSpacing:'0.12em', marginBottom:10 }}>How it works</div>
            <h2 style={{ fontSize:'clamp(26px,3.5vw,40px)', fontWeight:900, letterSpacing:'-0.02em' }}>Find help in 3 simple steps</h2>
          </div>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(280px,1fr))', gap:24 }}>
            {[
              { n:'01', color:'oklch(0.48 0.26 278)', bg:'oklch(0.95 0.05 278)', t:'Choose your subject', d:'Browse by faculty and subject. Filter by availability, price range, and more to find exactly the right fit.' },
              { n:'02', color:'oklch(0.56 0.20 35)', bg:'oklch(0.95 0.04 35)', t:'View tutor profiles', d:'Read bios, check experience, compare prices, and see verified session counts from real students.' },
              { n:'03', color:'oklch(0.48 0.16 168)', bg:'oklch(0.93 0.05 168)', t:'Connect directly', d:'Reach out via Telegram, phone or email. No booking system, no platform fees — just direct, genuine learning.' },
            ].map(s => (
              <div key={s.n} style={{ padding:32, borderRadius:24, background:s.bg, border:`1px solid ${s.color}20` }}>
                <div style={{ width:52, height:52, borderRadius:16, background:s.color, color:'white', display:'flex', alignItems:'center', justifyContent:'center', fontWeight:900, fontSize:18, marginBottom:22 }}>{s.n}</div>
                <h3 style={{ fontSize:18, fontWeight:800, marginBottom:10 }}>{s.t}</h3>
                <p style={{ color:'oklch(0.44 0.05 278)', lineHeight:1.75, fontSize:15 }}>{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Featured Tutors ── */}
      <section style={{ padding:'72px 0', background:'oklch(0.985 0.01 278)' }}>
        <div className="container">
          <div style={{ display:'flex', alignItems:'flex-end', justifyContent:'space-between', marginBottom:40, flexWrap:'wrap', gap:16 }}>
            <div>
              <div style={{ fontSize:12, fontWeight:700, color:'oklch(0.48 0.26 278)', textTransform:'uppercase', letterSpacing:'0.12em', marginBottom:8 }}>Featured</div>
              <h2 style={{ fontSize:'clamp(24px,3vw,36px)', fontWeight:900, letterSpacing:'-0.02em' }}>Top-rated tutors this week</h2>
            </div>
            <button onClick={() => navigate('find-tutors')} style={{
              padding:'11px 24px', borderRadius:12,
              border:'2px solid oklch(0.48 0.26 278)', background:'transparent',
              color:'oklch(0.48 0.26 278)', fontWeight:700, cursor:'pointer',
              fontFamily:'inherit', fontSize:14,
            }}>Browse all tutors →</button>
          </div>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(300px,1fr))', gap:22 }}>
            {TUTORS.slice(0,3).map(t => <TutorCard key={t.id} tutor={t} />)}
          </div>
        </div>
      </section>

      {/* ── Tutor CTA banner ── */}
      <section style={{ padding:'80px 0', background:'oklch(0.13 0.06 278)' }}>
        <div className="container" style={{ textAlign:'center' }}>
          <div style={{ fontSize:12, fontWeight:700, color:'oklch(0.62 0.14 278)', textTransform:'uppercase', letterSpacing:'0.14em', marginBottom:16 }}>For Tutors</div>
          <h2 style={{ color:'white', fontSize:'clamp(26px,4vw,46px)', fontWeight:900, marginBottom:16, letterSpacing:'-0.02em' }}>
            Share your knowledge,<br />earn while you study
          </h2>
          <p style={{ color:'oklch(0.68 0.05 278)', fontSize:17, maxWidth:480, margin:'0 auto 36px', lineHeight:1.75 }}>
            Join 47+ CAU students already tutoring on Pass Me. Set your own schedule, prices, and subjects. No platform cut — ever.
          </p>
          <button onClick={() => navigate('become-tutor')} style={{
            padding:'16px 40px', borderRadius:16, border:'none',
            background:'oklch(0.48 0.26 278)', color:'white',
            fontWeight:800, fontSize:16, cursor:'pointer', fontFamily:'inherit',
          }}
            onMouseEnter={e => e.target.style.filter='brightness(1.15)'}
            onMouseLeave={e => e.target.style.filter='none'}
          >Apply to Become a Tutor →</button>
        </div>
      </section>
    </div>
  );
}

// ─── FindTutors ───────────────────────────────────────────────────────────────
function FindTutors() {
  const [faculty, setFaculty] = useStateP1('All Faculties');
  const [search, setSearch] = useStateP1('');

  const filtered = TUTORS.filter(t => {
    if (faculty !== 'All Faculties' && t.faculty !== faculty) return false;
    const q = search.toLowerCase();
    if (q && !t.name.toLowerCase().includes(q) && !t.subjects.some(s => s.toLowerCase().includes(q))) return false;
    return true;
  });

  return (
    <div style={{ minHeight:'100vh', paddingBottom:80 }}>
      <div style={{
        background:'linear-gradient(135deg, oklch(0.42 0.28 278), oklch(0.54 0.24 308))',
        padding:'52px 0 72px',
      }}>
        <div className="container">
          <h1 style={{ color:'white', fontWeight:900, fontSize:'clamp(28px,4vw,42px)', marginBottom:8, letterSpacing:'-0.02em' }}>Find a Tutor</h1>
          <p style={{ color:'rgba(255,255,255,0.72)', fontSize:16 }}>Browse verified peer tutors at Central Asian University</p>
        </div>
      </div>

      <div className="container" style={{ marginTop:-32 }}>
        {/* Filter card */}
        <div style={{
          background:'white', borderRadius:22, padding:'22px 24px',
          boxShadow:'0 8px 36px rgba(80,40,200,0.13)',
          marginBottom:32, border:'1px solid oklch(0.93 0.03 278)',
        }}>
          <div style={{ display:'flex', gap:12, flexWrap:'wrap' }}>
            <input
              placeholder="🔍  Search by name or subject…"
              value={search} onChange={e => setSearch(e.target.value)}
              style={{
                flex:'2 1 200px', padding:'12px 16px', borderRadius:13,
                border:'1.5px solid oklch(0.90 0.04 278)', fontSize:14,
                fontFamily:'inherit', outline:'none', background:'oklch(0.985 0.01 278)',
                color:'oklch(0.22 0.04 278)',
              }}
            />
            <select value={faculty} onChange={e => setFaculty(e.target.value)} style={{
              flex:'1 1 180px', padding:'12px 16px', borderRadius:13,
              border:'1.5px solid oklch(0.90 0.04 278)', fontSize:14,
              fontFamily:'inherit', background:'oklch(0.985 0.01 278)', cursor:'pointer', outline:'none',
            }}>
              {FACULTIES.map(f => <option key={f}>{f}</option>)}
            </select>
            <button onClick={() => { setFaculty('All Faculties'); setSearch(''); }} style={{
              padding:'12px 18px', borderRadius:13,
              border:'1.5px solid oklch(0.90 0.04 278)', background:'white',
              color:'oklch(0.55 0.08 278)', fontWeight:600, cursor:'pointer',
              fontFamily:'inherit', fontSize:14,
            }}>Clear</button>
          </div>

          {/* Faculty pill filters */}
          <div style={{ display:'flex', gap:8, flexWrap:'wrap', marginTop:16 }}>
            {FACULTIES.map(f => {
              const fs = FACULTY_STYLES[f];
              const active = faculty === f;
              return (
                <button key={f} onClick={() => setFaculty(f)} style={{
                  padding:'6px 14px', borderRadius:100, border:'none', cursor:'pointer',
                  fontFamily:'inherit', fontWeight:600, fontSize:12,
                  background: active ? (fs ? fs.color : 'oklch(0.48 0.26 278)') : (fs ? fs.bg : 'oklch(0.95 0.03 278)'),
                  color: active ? 'white' : (fs ? fs.color : 'oklch(0.48 0.26 278)'),
                  transition:'all 0.15s',
                }}>{f === 'All Faculties' ? 'All' : (FACULTY_STYLES[f]?.label || f)}</button>
              );
            })}
          </div>
        </div>

        <div style={{ marginBottom:22, color:'oklch(0.55 0.05 278)', fontSize:14, fontWeight:500 }}>
          <strong style={{ color:'oklch(0.26 0.06 278)' }}>{filtered.length}</strong> tutor{filtered.length !== 1 ? 's' : ''} found
          {faculty !== 'All Faculties' && <span> · <span style={{ color:'oklch(0.48 0.26 278)', fontWeight:600 }}>{faculty}</span></span>}
        </div>

        {filtered.length > 0 ? (
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(300px,1fr))', gap:22 }}>
            {filtered.map(t => <TutorCard key={t.id} tutor={t} />)}
          </div>
        ) : (
          <div style={{ textAlign:'center', padding:'72px 20px', color:'oklch(0.60 0.05 278)' }}>
            <div style={{ fontSize:52, marginBottom:16 }}>🔍</div>
            <h3 style={{ fontWeight:800, marginBottom:8, fontSize:20 }}>No tutors found</h3>
            <p style={{ fontSize:15 }}>Try different keywords or change the faculty filter</p>
          </div>
        )}
      </div>
    </div>
  );
}

// ─── TutorProfile ─────────────────────────────────────────────────────────────
function TutorProfile({ tutorId }) {
  const { navigate } = useRouter();
  const tutor = TUTORS.find(t => t.id === tutorId) || TUTORS[0];
  const fs = FACULTY_STYLES[tutor.faculty] || { color:"oklch(0.48 0.26 278)", bg:"oklch(0.95 0.05 278)" };

  return (
    <div style={{ minHeight:'100vh', paddingBottom:80 }}>
      {/* Header */}
      <div style={{
        background:`linear-gradient(140deg, ${fs.color} 0%, ${fs.color}bb 100%)`,
        padding:'44px 0 68px',
      }}>
        <div className="container">
          <button onClick={() => navigate('find-tutors')} style={{
            display:'inline-flex', alignItems:'center', gap:7,
            color:'rgba(255,255,255,0.82)', background:'rgba(255,255,255,0.14)',
            border:'none', padding:'9px 18px', borderRadius:11,
            cursor:'pointer', fontFamily:'inherit', fontSize:13, fontWeight:600,
            marginBottom:30, backdropFilter:'blur(8px)',
            transition:'background 0.15s',
          }}
            onMouseEnter={e => e.target.style.background='rgba(255,255,255,0.22)'}
            onMouseLeave={e => e.target.style.background='rgba(255,255,255,0.14)'}
          >← Back to tutors</button>

          <div style={{ display:'flex', gap:26, alignItems:'flex-start', flexWrap:'wrap' }}>
            <Avatar name={tutor.name} faculty={tutor.faculty} size={92} />
            <div>
              <h1 style={{ color:'white', fontWeight:900, fontSize:'clamp(24px,3.5vw,36px)', marginBottom:10, letterSpacing:'-0.02em' }}>{tutor.name}</h1>
              <div style={{ display:'flex', gap:14, flexWrap:'wrap', alignItems:'center', marginBottom:14 }}>
                <span style={{ color:'rgba(255,255,255,0.88)', fontSize:15, fontWeight:500 }}>{tutor.faculty} · Year {tutor.year}</span>
                <span style={{ color:'oklch(0.92 0.14 82)', fontWeight:700 }}>★ {tutor.rating}</span>
                <span style={{ color:'rgba(255,255,255,0.75)', fontSize:14 }}>{tutor.sessions} sessions completed</span>
              </div>
              <div style={{ display:'flex', gap:7, flexWrap:'wrap' }}>
                {tutor.subjects.map(s => (
                  <span key={s} style={{
                    padding:'5px 13px', borderRadius:100,
                    background:'rgba(255,255,255,0.18)', color:'white',
                    fontSize:13, fontWeight:600, backdropFilter:'blur(6px)',
                    border:'1px solid rgba(255,255,255,0.25)',
                  }}>{s}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container" style={{ marginTop:-24 }}>
        <div style={{ display:'grid', gridTemplateColumns:'1fr 340px', gap:22, alignItems:'start' }}>

          {/* Left column */}
          <div style={{ display:'flex', flexDirection:'column', gap:20 }}>
            {/* About */}
            <div style={{ background:'white', borderRadius:22, padding:30, border:'1px solid oklch(0.93 0.03 278)', boxShadow:'0 2px 14px rgba(80,40,200,0.06)' }}>
              <h3 style={{ fontWeight:800, fontSize:18, marginBottom:16 }}>About</h3>
              <p style={{ color:'oklch(0.36 0.04 278)', lineHeight:1.80, fontSize:15 }}>{tutor.bio}</p>
            </div>
            {/* Experience */}
            <div style={{ background:'white', borderRadius:22, padding:30, border:'1px solid oklch(0.93 0.03 278)', boxShadow:'0 2px 14px rgba(80,40,200,0.06)' }}>
              <h3 style={{ fontWeight:800, fontSize:18, marginBottom:16 }}>Experience</h3>
              <p style={{ color:'oklch(0.36 0.04 278)', lineHeight:1.80, fontSize:15 }}>{tutor.experience}</p>
            </div>
            {/* Availability */}
            <div style={{ background:'white', borderRadius:22, padding:30, border:'1px solid oklch(0.93 0.03 278)', boxShadow:'0 2px 14px rgba(80,40,200,0.06)' }}>
              <h3 style={{ fontWeight:800, fontSize:18, marginBottom:18 }}>Availability</h3>
              <div style={{ display:'flex', gap:10, flexWrap:'wrap' }}>
                {['Mon','Tue','Wed','Thu','Fri','Sat','Sun'].map(day => {
                  const active = tutor.availability.includes(day);
                  return (
                    <div key={day} style={{
                      padding:'11px 18px', borderRadius:13,
                      background: active ? fs.bg : 'oklch(0.96 0.01 278)',
                      color: active ? fs.color : 'oklch(0.68 0.04 278)',
                      fontWeight:700, fontSize:14,
                      border:`1.5px solid ${active ? fs.color + '40' : 'transparent'}`,
                    }}>{day}</div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right sidebar */}
          <div style={{ display:'flex', flexDirection:'column', gap:18 }}>
            {/* Pricing */}
            <div style={{ background:'white', borderRadius:22, padding:26, border:'1px solid oklch(0.93 0.03 278)', boxShadow:'0 2px 14px rgba(80,40,200,0.06)' }}>
              <h3 style={{ fontWeight:800, fontSize:18, marginBottom:18 }}>Pricing</h3>
              <div style={{ display:'flex', flexDirection:'column', gap:12 }}>
                <div style={{
                  padding:'18px 20px', borderRadius:16,
                  background:fs.bg, border:`1.5px solid ${fs.color}30`,
                  display:'flex', justifyContent:'space-between', alignItems:'center',
                }}>
                  <div>
                    <div style={{ fontWeight:700, color:fs.color, fontSize:14 }}>Individual</div>
                    <div style={{ fontSize:12, color:'oklch(0.58 0.05 278)', marginTop:2 }}>1-on-1 session / hr</div>
                  </div>
                  <div style={{ fontWeight:900, fontSize:22, color:fs.color }}>{tutor.individual.toLocaleString()} ₸</div>
                </div>
                <div style={{
                  padding:'18px 20px', borderRadius:16,
                  background:'oklch(0.97 0.02 278)', border:'1.5px solid oklch(0.90 0.04 278)',
                  display:'flex', justifyContent:'space-between', alignItems:'center',
                }}>
                  <div>
                    <div style={{ fontWeight:700, color:'oklch(0.42 0.10 278)', fontSize:14 }}>Group</div>
                    <div style={{ fontSize:12, color:'oklch(0.58 0.05 278)', marginTop:2 }}>2+ students / hr</div>
                  </div>
                  <div style={{ fontWeight:900, fontSize:22, color:'oklch(0.42 0.10 278)' }}>{tutor.group.toLocaleString()} ₸</div>
                </div>
              </div>
            </div>

            {/* Contact */}
            <div style={{ background:'white', borderRadius:22, padding:26, border:'1px solid oklch(0.93 0.03 278)', boxShadow:'0 2px 14px rgba(80,40,200,0.06)' }}>
              <h3 style={{ fontWeight:800, fontSize:18, marginBottom:18 }}>Contact</h3>
              <div style={{ display:'flex', flexDirection:'column', gap:10 }}>
                <a href={`https://t.me/${tutor.telegram.slice(1)}`} target="_blank" rel="noreferrer" style={{
                  display:'flex', alignItems:'center', gap:12, padding:'13px 16px',
                  borderRadius:14, background:'oklch(0.93 0.08 238)',
                  color:'oklch(0.36 0.18 238)', textDecoration:'none', fontWeight:600, fontSize:14,
                  transition:'filter 0.15s',
                }}
                  onMouseEnter={e => e.currentTarget.style.filter='brightness(0.93)'}
                  onMouseLeave={e => e.currentTarget.style.filter='none'}
                >
                  <span style={{ fontSize:18 }}>✈</span> {tutor.telegram}
                </a>
                <a href={`tel:${tutor.phone}`} style={{
                  display:'flex', alignItems:'center', gap:12, padding:'13px 16px',
                  borderRadius:14, background:'oklch(0.93 0.06 168)',
                  color:'oklch(0.36 0.16 168)', textDecoration:'none', fontWeight:600, fontSize:14,
                  transition:'filter 0.15s',
                }}
                  onMouseEnter={e => e.currentTarget.style.filter='brightness(0.93)'}
                  onMouseLeave={e => e.currentTarget.style.filter='none'}
                >
                  <span style={{ fontSize:18 }}>📞</span> {tutor.phone}
                </a>
                <a href={`mailto:${tutor.email}`} style={{
                  display:'flex', alignItems:'center', gap:12, padding:'13px 16px',
                  borderRadius:14, background:'oklch(0.93 0.06 35)',
                  color:'oklch(0.42 0.16 35)', textDecoration:'none', fontWeight:600, fontSize:14,
                  transition:'filter 0.15s',
                }}
                  onMouseEnter={e => e.currentTarget.style.filter='brightness(0.93)'}
                  onMouseLeave={e => e.currentTarget.style.filter='none'}
                >
                  <span style={{ fontSize:18 }}>✉</span> {tutor.email}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { HomePage, FindTutors, TutorProfile });
