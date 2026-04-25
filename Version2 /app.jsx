// app.jsx — Navbar, Footer, App router

const { useState: useAppState } = React;

// ─── Navbar ───────────────────────────────────────────────────────────────────
function Navbar({ page, navigate }) {
  return (
    <nav style={{
      position:'sticky', top:0, zIndex:200,
      background:'rgba(255,255,255,0.96)', backdropFilter:'blur(14px)',
      borderBottom:'1px solid oklch(0.92 0.03 278)',
    }}>
      <div className="container" style={{ display:'flex', alignItems:'center', height:66, gap:8 }}>
        {/* Logo */}
        <button onClick={() => navigate('home')} style={{
          display:'flex', alignItems:'center', gap:11,
          border:'none', background:'none', cursor:'pointer', fontFamily:'inherit',
          marginRight:12, flexShrink:0, whiteSpace:'nowrap',
        }}>
          <div style={{
            width:38, height:38, borderRadius:12,
            background:'linear-gradient(135deg, oklch(0.42 0.28 278), oklch(0.58 0.24 308))',
            display:'flex', alignItems:'center', justifyContent:'center',
            color:'white', fontWeight:900, fontSize:17, flexShrink:0,
          }}>P</div>
          <span style={{ fontWeight:900, fontSize:20, color:'oklch(0.16 0.08 278)', letterSpacing:'-0.02em', whiteSpace:'nowrap' }}>Pass Me</span>
        </button>

        {/* Nav links */}
        <div style={{ display:'flex', gap:2, flex:1 }}>
          {[
            { key:'find-tutors', label:'Find Tutors' },
            { key:'become-tutor', label:'Become a Tutor' },
          ].map(item => (
            <button key={item.key} onClick={() => navigate(item.key)} style={{
              padding:'8px 15px', borderRadius:11, border:'none',
              background: page === item.key ? 'oklch(0.95 0.05 278)' : 'transparent',
              color: page === item.key ? 'oklch(0.42 0.26 278)' : 'oklch(0.42 0.05 278)',
              fontWeight: page === item.key ? 700 : 500,
              cursor:'pointer', fontFamily:'inherit', fontSize:14,
              transition:'all 0.15s',
            }}
              onMouseEnter={e => { if(page !== item.key) e.target.style.background='oklch(0.97 0.02 278)'; }}
              onMouseLeave={e => { if(page !== item.key) e.target.style.background='transparent'; }}
            >{item.label}</button>
          ))}
        </div>

        {/* Right */}
        <div style={{ display:'flex', gap:8, alignItems:'center' }}>
          <button onClick={() => navigate('admin')} style={{
            padding:'7px 14px', borderRadius:10,
            border:'1.5px solid oklch(0.88 0.04 278)', background:'white',
            color:'oklch(0.55 0.06 278)', fontWeight:600,
            cursor:'pointer', fontFamily:'inherit', fontSize:13,
            transition:'border-color 0.15s', whiteSpace:'nowrap', flexShrink:0,
          }}
            onMouseEnter={e => e.target.style.borderColor='oklch(0.72 0.10 278)'}
            onMouseLeave={e => e.target.style.borderColor='oklch(0.88 0.04 278)'}
          >Admin ⚙</button>
          <button onClick={() => navigate('find-tutors')} style={{
            padding:'9px 22px', borderRadius:12, border:'none',
            background:'oklch(0.48 0.26 278)', color:'white',
            fontWeight:700, cursor:'pointer', fontFamily:'inherit', fontSize:14,
            transition:'filter 0.15s', whiteSpace:'nowrap', flexShrink:0,
          }}
            onMouseEnter={e => e.target.style.filter='brightness(1.12)'}
            onMouseLeave={e => e.target.style.filter='none'}
          >Find a Tutor</button>
        </div>
      </div>
    </nav>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────
function Footer({ navigate }) {
  return (
    <footer style={{ background:'oklch(0.11 0.04 278)', color:'oklch(0.68 0.05 278)', padding:'52px 0 32px' }}>
      <div className="container">
        <div style={{ display:'flex', justifyContent:'space-between', flexWrap:'wrap', gap:36, marginBottom:44 }}>
          <div style={{ maxWidth:280 }}>
            <div style={{ display:'flex', alignItems:'center', gap:10, marginBottom:14 }}>
              <div style={{
                width:34, height:34, borderRadius:10,
                background:'linear-gradient(135deg, oklch(0.42 0.28 278), oklch(0.58 0.24 308))',
                display:'flex', alignItems:'center', justifyContent:'center',
                color:'white', fontWeight:900, fontSize:15,
              }}>P</div>
              <span style={{ fontWeight:900, fontSize:18, color:'white', letterSpacing:'-0.01em' }}>Pass Me</span>
            </div>
            <p style={{ fontSize:14, lineHeight:1.75, color:'oklch(0.62 0.05 278)' }}>
              Peer tutoring marketplace for Central Asian University students. Find help, share knowledge, succeed together.
            </p>
          </div>
          <div style={{ display:'flex', gap:52, flexWrap:'wrap' }}>
            <div>
              <div style={{ fontWeight:700, color:'white', fontSize:13, marginBottom:16, textTransform:'uppercase', letterSpacing:'0.08em' }}>Students</div>
              {[['Find Tutors','find-tutors'],['How it Works','home']].map(([l,k]) => (
                <div key={l} style={{ marginBottom:12 }}>
                  <button onClick={() => navigate(k)} style={{
                    background:'none', border:'none', color:'oklch(0.62 0.05 278)',
                    cursor:'pointer', fontSize:14, padding:0, fontFamily:'inherit',
                    transition:'color 0.15s',
                  }}
                    onMouseEnter={e => e.target.style.color='white'}
                    onMouseLeave={e => e.target.style.color='oklch(0.62 0.05 278)'}
                  >{l}</button>
                </div>
              ))}
            </div>
            <div>
              <div style={{ fontWeight:700, color:'white', fontSize:13, marginBottom:16, textTransform:'uppercase', letterSpacing:'0.08em' }}>Tutors</div>
              {[['Become a Tutor','become-tutor'],['Apply Now','register']].map(([l,k]) => (
                <div key={l} style={{ marginBottom:12 }}>
                  <button onClick={() => navigate(k)} style={{
                    background:'none', border:'none', color:'oklch(0.62 0.05 278)',
                    cursor:'pointer', fontSize:14, padding:0, fontFamily:'inherit',
                    transition:'color 0.15s',
                  }}
                    onMouseEnter={e => e.target.style.color='white'}
                    onMouseLeave={e => e.target.style.color='oklch(0.62 0.05 278)'}
                  >{l}</button>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div style={{
          borderTop:'1px solid oklch(0.20 0.04 278)', paddingTop:24,
          fontSize:13, textAlign:'center', color:'oklch(0.50 0.04 278)',
        }}>
          © 2026 Pass Me · Central Asian University · Built for students, by students
        </div>
      </div>
    </footer>
  );
}

// ─── App ──────────────────────────────────────────────────────────────────────
function App() {
  const [page, setPage] = useAppState('home');
  const [params, setParams] = useAppState({});

  const navigate = (p, ps = {}) => {
    setPage(p);
    setParams(ps);
    window.scrollTo({ top: 0 });
  };

  const renderPage = () => {
    switch (page) {
      case 'home':         return <HomePage />;
      case 'find-tutors':  return <FindTutors />;
      case 'tutor-profile': return <TutorProfile tutorId={params.tutorId} />;
      case 'become-tutor': return <BecomeATutor />;
      case 'register':     return <TutorRegistration />;
      case 'admin':        return <AdminPanel />;
      default:             return <HomePage />;
    }
  };

  const hideFooter = page === 'admin';

  return (
    <RouterCtx.Provider value={{ page, params, navigate }}>
      <Navbar page={page} navigate={navigate} />
      <main>{renderPage()}</main>
      {!hideFooter && <Footer navigate={navigate} />}
    </RouterCtx.Provider>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
