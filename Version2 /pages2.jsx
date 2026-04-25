// pages2.jsx — BecomeATutor, TutorRegistration, AdminPanel

const { useState: useStateP2 } = React;

// ─── BecomeATutor ─────────────────────────────────────────────────────────────
function BecomeATutor() {
  const { navigate } = useRouter();

  return (
    <div>
      {/* Hero */}
      <section style={{
        background:'linear-gradient(140deg, oklch(0.56 0.20 35) 0%, oklch(0.64 0.22 55) 100%)',
        padding:'80px 0 92px', textAlign:'center', position:'relative', overflow:'hidden',
      }}>
        <div style={{ position:'absolute', top:-60, right:-60, width:380, height:380, borderRadius:'50%', background:'rgba(255,255,255,0.06)' }} />
        <div style={{ position:'absolute', bottom:-80, left:'15%', width:300, height:300, borderRadius:'50%', background:'rgba(255,255,255,0.04)' }} />
        <div className="container" style={{ position:'relative', zIndex:1 }}>
          <div style={{
            display:'inline-flex', alignItems:'center', gap:8,
            background:'rgba(255,255,255,0.16)', borderRadius:100,
            padding:'7px 18px', marginBottom:24,
            color:'rgba(255,255,255,0.92)', fontSize:13, fontWeight:600,
            border:'1px solid rgba(255,255,255,0.25)',
          }}>
            ✨ 47 tutors earning on Pass Me
          </div>
          <h1 style={{ color:'white', fontWeight:900, fontSize:'clamp(30px,5vw,54px)', marginBottom:18, letterSpacing:'-0.02em' }}>
            Earn while you help<br />others succeed
          </h1>
          <p style={{ color:'rgba(255,255,255,0.80)', fontSize:17, maxWidth:500, margin:'0 auto 36px', lineHeight:1.75 }}>
            Join Pass Me as a tutor. Set your own prices, schedule, and subjects. Help your peers — and build real teaching experience along the way.
          </p>
          <button onClick={() => navigate('register')} style={{
            padding:'16px 40px', borderRadius:16, border:'none',
            background:'white', color:'oklch(0.52 0.20 35)',
            fontWeight:800, fontSize:16, cursor:'pointer', fontFamily:'inherit',
            boxShadow:'0 6px 24px rgba(0,0,0,0.16)',
          }}
            onMouseEnter={e => e.target.style.transform='translateY(-2px)'}
            onMouseLeave={e => e.target.style.transform=''}
          >Apply Now — It's Free →</button>
        </div>
      </section>

      {/* Benefits */}
      <section style={{ padding:'80px 0', background:'white' }}>
        <div className="container">
          <h2 style={{ textAlign:'center', fontWeight:900, fontSize:'clamp(24px,3.5vw,38px)', marginBottom:50, letterSpacing:'-0.02em' }}>Why tutor on Pass Me?</h2>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(240px,1fr))', gap:22 }}>
            {[
              { icon:'💰', color:'oklch(0.56 0.20 35)', bg:'oklch(0.95 0.04 35)', t:'Set your own prices', d:'You decide what you charge — no platform cut, ever. Keep 100% of what students pay you.' },
              { icon:'📅', color:'oklch(0.48 0.26 278)', bg:'oklch(0.95 0.05 278)', t:'Flexible schedule', d:'Mark your available days. Teach around your own classes — morning, evening, weekend, your call.' },
              { icon:'🎓', color:'oklch(0.48 0.16 168)', bg:'oklch(0.93 0.05 168)', t:'Build experience', d:'Strengthen your own understanding and add real teaching experience to your CV or portfolio.' },
              { icon:'🤝', color:'oklch(0.44 0.20 250)', bg:'oklch(0.94 0.05 250)', t:'Direct connection', d:'Students contact you directly via Telegram, phone, or email. No middleman, no complexity.' },
            ].map(b => (
              <div key={b.t} style={{ padding:28, borderRadius:22, background:b.bg, border:`1px solid ${b.color}20` }}>
                <div style={{
                  width:50, height:50, borderRadius:15, background:b.color,
                  display:'flex', alignItems:'center', justifyContent:'center',
                  fontSize:22, marginBottom:18,
                }}>{b.icon}</div>
                <h3 style={{ fontWeight:800, fontSize:17, marginBottom:9 }}>{b.t}</h3>
                <p style={{ color:'oklch(0.44 0.05 278)', fontSize:14, lineHeight:1.75 }}>{b.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section style={{ padding:'72px 0', background:'oklch(0.985 0.01 278)' }}>
        <div className="container">
          <h2 style={{ textAlign:'center', fontWeight:900, fontSize:'clamp(24px,3.5vw,38px)', marginBottom:48, letterSpacing:'-0.02em' }}>How the application works</h2>
          <div style={{ display:'flex', flexDirection:'column', gap:14, maxWidth:620, margin:'0 auto' }}>
            {[
              { s:1, t:'Submit your application', d:'Fill out a short form with your details, subjects, prices, and contact info. Takes about 5 minutes.' },
              { s:2, t:'Admin review', d:'Our team reviews your profile within 24–48 hours to verify you\'re a current CAU student.' },
              { s:3, t:'Go live!', d:'Once approved, your profile appears on Pass Me and students can reach out to you directly.' },
            ].map(item => (
              <div key={item.s} style={{
                display:'flex', gap:20, alignItems:'flex-start',
                background:'white', borderRadius:20, padding:'22px 26px',
                border:'1px solid oklch(0.91 0.04 278)',
                boxShadow:'0 2px 10px rgba(80,40,200,0.05)',
              }}>
                <div style={{
                  width:42, height:42, borderRadius:13, flexShrink:0,
                  background:'oklch(0.48 0.26 278)', color:'white',
                  display:'flex', alignItems:'center', justifyContent:'center',
                  fontWeight:900, fontSize:17,
                }}>{item.s}</div>
                <div>
                  <div style={{ fontWeight:800, fontSize:16, marginBottom:5 }}>{item.t}</div>
                  <div style={{ color:'oklch(0.50 0.05 278)', fontSize:14, lineHeight:1.70 }}>{item.d}</div>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign:'center', marginTop:40 }}>
            <button onClick={() => navigate('register')} style={{
              padding:'16px 44px', borderRadius:16, border:'none',
              background:'oklch(0.48 0.26 278)', color:'white',
              fontWeight:800, fontSize:16, cursor:'pointer', fontFamily:'inherit',
            }}
              onMouseEnter={e => e.target.style.filter='brightness(1.12)'}
              onMouseLeave={e => e.target.style.filter='none'}
            >Start Your Application →</button>
          </div>
        </div>
      </section>
    </div>
  );
}

// ─── TutorRegistration ────────────────────────────────────────────────────────
function TutorRegistration() {
  const { navigate } = useRouter();
  const [done, setDone] = useStateP2(false);
  const [avail, setAvail] = useStateP2([]);
  const [form, setForm] = useStateP2({
    fullName:'', school:'', program:'', year:'', subjects:'',
    individual:'', group:'', bio:'', experience:'',
    telegram:'', phone:'', email:'',
  });

  const set = (k, v) => setForm(f => ({...f, [k]:v}));
  const toggleDay = day => setAvail(a => a.includes(day) ? a.filter(d => d!==day) : [...a, day]);
  const availablePrograms = PROGRAMS[form.school] || [];

  if (done) return (
    <div style={{ minHeight:'80vh', display:'flex', alignItems:'center', justifyContent:'center', padding:'0 24px' }}>
      <div style={{ textAlign:'center', maxWidth:440 }}>
        <div style={{
          width:80, height:80, borderRadius:'50%',
          background:'oklch(0.93 0.07 168)', margin:'0 auto 26px',
          display:'flex', alignItems:'center', justifyContent:'center',
          fontSize:32, color:'oklch(0.40 0.16 168)',
        }}>✓</div>
        <h2 style={{ fontWeight:900, fontSize:30, marginBottom:14, letterSpacing:'-0.02em' }}>Application submitted!</h2>
        <p style={{ color:'oklch(0.50 0.05 278)', fontSize:16, lineHeight:1.75, marginBottom:30 }}>
          Thanks for applying to Pass Me! Our team will review your profile within 24–48 hours and get back to you via email.
        </p>
        <button onClick={() => navigate('home')} style={{
          padding:'14px 36px', borderRadius:14, border:'none',
          background:'oklch(0.48 0.26 278)', color:'white',
          fontWeight:700, fontSize:15, cursor:'pointer', fontFamily:'inherit',
        }}>Back to Home</button>
      </div>
    </div>
  );

  const inp = {
    width:'100%', padding:'12px 16px', borderRadius:13,
    border:'1.5px solid oklch(0.90 0.04 278)', fontSize:14,
    fontFamily:'inherit', outline:'none', background:'white',
    color:'oklch(0.20 0.03 278)', boxSizing:'border-box',
  };
  const lbl = { fontWeight:600, fontSize:13, color:'oklch(0.40 0.06 278)', marginBottom:6, display:'block' };
  const card = {
    background:'white', borderRadius:22, padding:28, marginBottom:20,
    border:'1px solid oklch(0.93 0.03 278)',
    boxShadow:'0 2px 12px rgba(80,40,200,0.05)',
  };
  const shead = { fontWeight:800, fontSize:17, marginBottom:20, color:'oklch(0.48 0.26 278)', paddingBottom:12, borderBottom:'1.5px solid oklch(0.93 0.04 278)' };

  return (
    <div style={{ paddingBottom:80 }}>
      <div style={{ background:'linear-gradient(135deg, oklch(0.42 0.28 278), oklch(0.54 0.24 308))', padding:'50px 0 72px' }}>
        <div className="container">
          <button onClick={() => navigate('become-tutor')} style={{
            display:'inline-flex', alignItems:'center', gap:7,
            color:'rgba(255,255,255,0.80)', background:'rgba(255,255,255,0.14)',
            border:'none', padding:'9px 18px', borderRadius:11,
            cursor:'pointer', fontFamily:'inherit', fontSize:13, fontWeight:600, marginBottom:26,
            whiteSpace:'nowrap',
          }}>← Back</button>
          <h1 style={{ color:'white', fontWeight:900, fontSize:38, letterSpacing:'-0.02em' }}>Tutor Application</h1>
          <p style={{ color:'rgba(255,255,255,0.72)', marginTop:8, fontSize:15 }}>Central Asian University · Pass Me</p>
        </div>
      </div>

      <div className="container" style={{ maxWidth:720, marginTop:-24 }}>
        <form onSubmit={e => { e.preventDefault(); setDone(true); }}>

          {/* Personal */}
          <div style={card}>
            <div style={shead}>Personal Information</div>
            <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:16 }}>
              <div style={{ gridColumn:'1/-1' }}>
                <label style={lbl}>Full Name *</label>
                <input style={inp} placeholder="e.g. Dilnoza Yusupova" required value={form.fullName} onChange={e => set('fullName', e.target.value)} />
              </div>
              <div style={{ gridColumn:'1/-1' }}>
                <label style={lbl}>University</label>
                <input style={{ ...inp, background:'oklch(0.97 0.02 278)', color:'oklch(0.50 0.06 278)', cursor:'not-allowed' }}
                  value="Central Asian University" readOnly />
              </div>
              <div>
                <label style={lbl}>School *</label>
                <select style={inp} required value={form.school} onChange={e => set('school', e.target.value)}>
                  <option value="">Select school…</option>
                  {FACULTIES.slice(1).map(s => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>
              <div>
                <label style={lbl}>Program *</label>
                <select style={{ ...inp, opacity: form.school ? 1 : 0.5 }} required value={form.program} onChange={e => set('program', e.target.value)} disabled={!form.school}>
                  <option value="">{form.school ? 'Select program…' : 'Select school first…'}</option>
                  {availablePrograms.map(p => <option key={p} value={p}>{p}</option>)}
                </select>
              </div>
              <div style={{ gridColumn:'1/-1' }}>
                <label style={lbl}>Year of Study *</label>
                <select style={inp} required value={form.year} onChange={e => set('year', e.target.value)}>
                  <option value="">Select year…</option>
                  {[1,2,3,4,5,6].map(y => <option key={y} value={y}>Year {y}</option>)}
                </select>
              </div>
            </div>
          </div>

          {/* Subjects & Pricing */}
          <div style={card}>
            <div style={shead}>Subjects & Pricing</div>
            <div style={{ display:'grid', gap:16 }}>
              <div>
                <label style={lbl}>Subjects you can teach * <span style={{ color:'oklch(0.65 0.04 278)', fontWeight:400 }}>(comma-separated)</span></label>
                <input style={inp} placeholder="e.g. Accounting, Economics, Statistics" required value={form.subjects} onChange={e => set('subjects', e.target.value)} />
              </div>
              <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:16 }}>
                <div>
                  <label style={lbl}>Individual lesson price (UZS/hr) *</label>
                  <input style={inp} type="number" min="10000" placeholder="e.g. 80000" required value={form.individual} onChange={e => set('individual', e.target.value)} />
                </div>
                <div>
                  <label style={lbl}>Group lesson price (UZS/student) *</label>
                  <input style={inp} type="number" min="10000" placeholder="e.g. 45000" required value={form.group} onChange={e => set('group', e.target.value)} />
                </div>
              </div>
              <div style={{
                padding:'12px 16px', borderRadius:13,
                background:'oklch(0.95 0.05 278)', border:'1px solid oklch(0.88 0.07 278)',
                fontSize:13, color:'oklch(0.42 0.14 278)', fontWeight:500,
              }}>
                💡 Typical rates: Individual 60,000 – 120,000 UZS/hr · Group 35,000 – 70,000 UZS/student
              </div>
            </div>
          </div>

          {/* About */}
          <div style={card}>
            <div style={shead}>About You</div>
            <div style={{ display:'grid', gap:16 }}>
              <div>
                <label style={lbl}>Bio * <span style={{ color:'oklch(0.65 0.04 278)', fontWeight:400 }}>(introduce yourself to students)</span></label>
                <textarea style={{ ...inp, resize:'vertical', minHeight:100 }} placeholder="I'm a 3rd-year student who loves…" required value={form.bio} onChange={e => set('bio', e.target.value)} />
              </div>
              <div>
                <label style={lbl}>Teaching Experience <span style={{ color:'oklch(0.65 0.04 278)', fontWeight:400 }}>(optional)</span></label>
                <textarea style={{ ...inp, resize:'vertical', minHeight:80 }} placeholder="Any tutoring, TA work, or mentoring experience…" value={form.experience} onChange={e => set('experience', e.target.value)} />
              </div>
            </div>
          </div>

          {/* Availability */}
          <div style={card}>
            <div style={shead}>Availability</div>
            <label style={lbl}>Which days are you generally available? *</label>
            <div style={{ display:'flex', gap:10, flexWrap:'wrap', marginTop:10 }}>
              {['Mon','Tue','Wed','Thu','Fri','Sat','Sun'].map(day => {
                const active = avail.includes(day);
                return (
                  <button key={day} type="button" onClick={() => toggleDay(day)} style={{
                    padding:'11px 18px', borderRadius:13, border:'none', cursor:'pointer',
                    fontFamily:'inherit', fontWeight:700, fontSize:14,
                    background: active ? 'oklch(0.48 0.26 278)' : 'oklch(0.95 0.03 278)',
                    color: active ? 'white' : 'oklch(0.55 0.06 278)',
                    transition:'all 0.15s',
                  }}>{day}</button>
                );
              })}
            </div>
          </div>

          {/* Contact */}
          <div style={card}>
            <div style={shead}>Contact Details</div>
            <div style={{ display:'grid', gap:16 }}>
              <div>
                <label style={lbl}>Telegram handle *</label>
                <input style={inp} placeholder="@yourusername" required value={form.telegram} onChange={e => set('telegram', e.target.value)} />
              </div>
              <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:16 }}>
                <div>
                  <label style={lbl}>Phone number *</label>
                  <input style={inp} placeholder="+998 90 000 0000" required value={form.phone} onChange={e => set('phone', e.target.value)} />
                </div>
                <div>
                  <label style={lbl}>Email *</label>
                  <input style={inp} type="email" placeholder="you@cau.uz" required value={form.email} onChange={e => set('email', e.target.value)} />
                </div>
              </div>
            </div>
          </div>

          <button type="submit" style={{
            width:'100%', padding:'17px', borderRadius:16, border:'none',
            background:'oklch(0.48 0.26 278)', color:'white',
            fontWeight:800, fontSize:17, cursor:'pointer', fontFamily:'inherit',
            letterSpacing:'0.01em',
          }}
            onMouseEnter={e => e.target.style.filter='brightness(1.12)'}
            onMouseLeave={e => e.target.style.filter='none'}
          >Submit Application →</button>
        </form>
      </div>
    </div>
  );
}

// ─── AdminPanel ───────────────────────────────────────────────────────────────
function AdminPanel() {
  const { navigate } = useRouter();
  const [apps, setApps] = useStateP2(PENDING_APPS.map(a => ({...a})));
  const [filter, setFilter] = useStateP2('pending');
  const [expanded, setExpanded] = useStateP2(null);
  const [toast, setToast] = useStateP2(null);

  const act = (id, status) => {
    setApps(prev => prev.map(a => a.id === id ? {...a, status} : a));
    const name = PENDING_APPS.find(a => a.id === id)?.name || 'Applicant';
    setToast({ msg: `${name} ${status === 'approved' ? 'approved ✓' : 'rejected ✕'}`, status });
    setTimeout(() => setToast(null), 3000);
  };
  const counts = { pending: apps.filter(a=>a.status==='pending').length, approved: apps.filter(a=>a.status==='approved').length, rejected: apps.filter(a=>a.status==='rejected').length };
  const filtered = apps.filter(a => filter === 'all' || a.status === filter);

  return (
    <div style={{ minHeight:'100vh', paddingBottom:60 }}>
      {/* Toast */}
      {toast && (
        <div style={{
          position:'fixed', bottom:32, right:32, zIndex:999,
          padding:'14px 24px', borderRadius:16,
          background: toast.status === 'approved' ? 'oklch(0.30 0.14 168)' : 'oklch(0.30 0.14 32)',
          color:'white', fontWeight:700, fontSize:15,
          boxShadow:'0 8px 32px rgba(0,0,0,0.28)',
          animation:'fadeIn 0.2s ease',
        }}>{toast.msg}</div>
      )}
      {/* Admin header */}
      <div style={{ background:'oklch(0.12 0.05 278)', padding:'42px 0 60px' }}>
        <div className="container">
          <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start', flexWrap:'wrap', gap:20 }}>
            <div>
              <button onClick={() => navigate('home')} style={{
                display:'inline-flex', alignItems:'center', gap:6, marginBottom:16,
                color:'oklch(0.60 0.08 278)', background:'none', border:'none',
                cursor:'pointer', fontFamily:'inherit', fontSize:13, fontWeight:600,
                padding:0, whiteSpace:'nowrap',
              }}>← Back to site</button>
              <div style={{ fontSize:12, fontWeight:700, color:'oklch(0.58 0.12 278)', textTransform:'uppercase', letterSpacing:'0.14em', marginBottom:8 }}>Pass Me Admin</div>
              <h1 style={{ color:'white', fontWeight:900, fontSize:'clamp(24px,4vw,34px)', letterSpacing:'-0.02em' }}>Tutor Applications</h1>
            </div>
            {/* Stats chips */}
            <div style={{ display:'flex', gap:10 }}>
              {[
                { k:'pending', label:'Pending', color:'oklch(0.80 0.14 82)', bg:'oklch(0.28 0.08 82)' },
                { k:'approved', label:'Approved', color:'oklch(0.80 0.14 168)', bg:'oklch(0.24 0.08 168)' },
                { k:'rejected', label:'Rejected', color:'oklch(0.78 0.12 32)', bg:'oklch(0.26 0.08 32)' },
              ].map(s => (
                <div key={s.k} style={{ padding:'10px 18px', borderRadius:14, background:s.bg, textAlign:'center' }}>
                  <div style={{ color:s.color, fontWeight:900, fontSize:22 }}>{counts[s.k]}</div>
                  <div style={{ color:s.color+'aa', fontSize:11, fontWeight:600, marginTop:1 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="container" style={{ marginTop:-24 }}>
        {/* Filter tabs */}
        <div style={{
          background:'white', borderRadius:18, padding:'6px', display:'inline-flex', gap:4,
          boxShadow:'0 4px 18px rgba(80,40,200,0.10)', marginBottom:24, border:'1px solid oklch(0.93 0.03 278)',
        }}>
          {[
            { k:'pending', l:`Pending (${counts.pending})` },
            { k:'approved', l:'Approved' },
            { k:'rejected', l:'Rejected' },
            { k:'all', l:'All' },
          ].map(tab => (
            <button key={tab.k} onClick={() => setFilter(tab.k)} style={{
              padding:'9px 20px', borderRadius:13, border:'none', cursor:'pointer',
              fontFamily:'inherit', fontWeight:700, fontSize:13,
              background: filter === tab.k ? 'oklch(0.48 0.26 278)' : 'transparent',
              color: filter === tab.k ? 'white' : 'oklch(0.55 0.06 278)',
              transition:'all 0.15s',
            }}>{tab.l}</button>
          ))}
        </div>

        <div style={{ display:'flex', flexDirection:'column', gap:14 }}>
          {filtered.length === 0 && (
            <div style={{ textAlign:'center', padding:'60px 0', color:'oklch(0.60 0.04 278)' }}>
              <div style={{ fontSize:40, marginBottom:14 }}>📭</div>
              <p style={{ fontWeight:600, fontSize:16 }}>No {filter} applications</p>
            </div>
          )}
          {filtered.map(app => {
            const fs = FACULTY_STYLES[app.faculty] || { color:'oklch(0.48 0.26 278)', bg:'oklch(0.95 0.05 278)' };
            const isExp = expanded === app.id;
            return (
              <div key={app.id} style={{
                background:'white', borderRadius:20, overflow:'hidden',
                border:'1px solid oklch(0.93 0.03 278)',
                boxShadow:'0 2px 12px rgba(80,40,200,0.06)',
              }}>
                <div style={{ height:4, background:`linear-gradient(90deg, ${fs.color}, ${fs.color}77)` }} />
                <div style={{ padding:'20px 24px', display:'flex', alignItems:'center', gap:18, flexWrap:'wrap' }}>
                  <Avatar name={app.name} faculty={app.faculty} size={52} />

                  <div style={{ flex:1, minWidth:200 }}>
                    <div style={{ display:'flex', alignItems:'center', gap:10, flexWrap:'wrap', marginBottom:5 }}>
                      <span style={{ fontWeight:800, fontSize:16, whiteSpace:'nowrap' }}>{app.name}</span>
                      <FacultyBadge faculty={app.school} />
                      <span style={{ fontSize:12, color:'oklch(0.62 0.04 278)', whiteSpace:'nowrap' }}>Year {app.year}</span>
                    </div>
                    <div style={{ fontSize:12, color:'oklch(0.52 0.06 278)', fontWeight:500, marginBottom:4 }}>{app.program}</div>
                    <div style={{ fontSize:13, color:'oklch(0.55 0.05 278)', marginBottom:4 }}>
                      {app.subjects.join(' · ')} · <strong>{app.individual.toLocaleString()} UZS</strong>/hr · <strong>{app.group.toLocaleString()} UZS</strong>/student
                    </div>
                    <div style={{ fontSize:13, color:'oklch(0.62 0.05 278)' }}>
                      {app.telegram} · {app.email} · Applied {app.appliedAt}
                    </div>
                  </div>

                  <div style={{ display:'flex', alignItems:'center', gap:10, flexShrink:0 }}>
                    <button onClick={() => setExpanded(isExp ? null : app.id)} style={{
                      padding:'8px 14px', borderRadius:10,
                      border:'1.5px solid oklch(0.88 0.04 278)', background:'white',
                      color:'oklch(0.55 0.06 278)', fontWeight:600, cursor:'pointer',
                      fontFamily:'inherit', fontSize:13,
                    }}>{isExp ? 'Collapse' : 'View bio'}</button>

                    {app.status === 'pending' ? (
                      <>
                        <button onClick={() => act(app.id, 'approved')} style={{
                          padding:'9px 20px', borderRadius:11, border:'none',
                          background:'oklch(0.93 0.07 168)', color:'oklch(0.36 0.16 168)',
                          fontWeight:700, cursor:'pointer', fontFamily:'inherit', fontSize:14,
                        }}
                          onMouseEnter={e => e.target.style.filter='brightness(0.93)'}
                          onMouseLeave={e => e.target.style.filter='none'}
                        >✓ Approve</button>
                        <button onClick={() => act(app.id, 'rejected')} style={{
                          padding:'9px 20px', borderRadius:11, border:'none',
                          background:'oklch(0.94 0.05 32)', color:'oklch(0.48 0.16 32)',
                          fontWeight:700, cursor:'pointer', fontFamily:'inherit', fontSize:14,
                        }}
                          onMouseEnter={e => e.target.style.filter='brightness(0.93)'}
                          onMouseLeave={e => e.target.style.filter='none'}
                        >✕ Reject</button>
                      </>
                    ) : (
                      <span style={{
                        padding:'8px 18px', borderRadius:11, fontWeight:700, fontSize:13,
                        background: app.status==='approved' ? 'oklch(0.93 0.07 168)' : 'oklch(0.94 0.05 32)',
                        color: app.status==='approved' ? 'oklch(0.36 0.16 168)' : 'oklch(0.48 0.16 32)',
                      }}>{app.status === 'approved' ? '✓ Approved' : '✕ Rejected'}</span>
                    )}
                  </div>
                </div>

                {/* Expanded bio */}
                {isExp && (
                  <div style={{
                    padding:'0 24px 22px', borderTop:'1px solid oklch(0.95 0.03 278)',
                    paddingTop:18, marginTop:0,
                  }}>
                    <div style={{ fontSize:12, fontWeight:700, color:'oklch(0.58 0.08 278)', textTransform:'uppercase', letterSpacing:'0.08em', marginBottom:8 }}>Bio</div>
                    <p style={{ color:'oklch(0.38 0.04 278)', fontSize:14, lineHeight:1.75 }}>{app.bio}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { BecomeATutor, TutorRegistration, AdminPanel });
