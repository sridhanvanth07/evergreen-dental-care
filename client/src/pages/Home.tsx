import { FormEvent, useEffect, useState } from "react";
import {
  ArrowUpRight,
  Check,
  ChevronDown,
  Clock3,
  MapPin,
  ExternalLink,
  Menu,
  Play,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  X,
} from "lucide-react";
import { Link } from "wouter";
import { dentalServices } from "@/lib/services";

const heroImage = "/manus-storage/evergreen-hero-doctor_90dacc5f.jpg";
const interiorImage = "/manus-storage/evergreen-clinic-interior_cefc74c7.jpg";
const smileImage = "/manus-storage/evergreen-smile-detail_ba44b9f5.jpg";
const brandMark = "/manus-storage/evergreen-mark_62f72f5f.png";

const doctors = [
  { name: "Dr. Bobby Karthiga", role: "Dental care practitioner", bio: "A calm, attentive approach to helping patients understand their options and choose a comfortable next step.", image: heroImage },
];

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [activeService, setActiveService] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => setActiveService((current) => (current + 1) % dentalServices.length), 4200);
    return () => window.clearInterval(timer);
  }, []);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  const handleNav = (id: string) => {
    setMenuOpen(false);
    scrollToId(id);
  };

  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Evergreen Dental Care home">
          <img src={brandMark} alt="" className="brand-mark" />
          <span className="brand-copy"><strong>EVER GREEN</strong><small>DENTAL CARE</small></span>
        </a>
        <nav className={menuOpen ? "main-nav is-open" : "main-nav"} aria-label="Primary navigation">
          <button onClick={() => handleNav("top")}>Home</button>
          <button onClick={() => handleNav("about")}>About</button>
          <button onClick={() => handleNav("services")}>Services <ChevronDown size={13} /></button>
          <button onClick={() => handleNav("team")}>Our team</button>
          <button onClick={() => handleNav("contact")}>Contact</button>
          <button className="mobile-appointment" onClick={() => handleNav("contact")}>Book a visit <ArrowUpRight size={15} /></button>
        </nav>
        <button className="header-appointment" onClick={() => handleNav("contact")}>Make an appointment <ArrowUpRight size={15} /></button>
        <button className="menu-toggle" aria-label={menuOpen ? "Close menu" : "Open menu"} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-blob hero-blob-one" /><div className="hero-blob hero-blob-two" />
          <div className="hero-inner page-width">
            <div className="hero-copy reveal">
              <p className="eyebrow light"><span /> CARE THAT FEELS DIFFERENT</p>
              <h1>A healthier smile starts with <em>feeling at ease.</em></h1>
              <p className="hero-description">Modern dentistry for real life — warm conversations, clear plans, and thoughtful treatment from people who care about the details.</p>
              <div className="hero-actions"><button className="button button-light" onClick={() => handleNav("contact")}>Make an appointment <ArrowUpRight size={16} /></button><button className="text-button light-text" onClick={() => handleNav("about")}><span className="play-circle"><Play size={12} fill="currentColor" /></span> Take a quick tour</button></div>
              <div className="hero-note"><ShieldCheck size={18} /><span>Transparent care, gentle guidance,<br />no surprises.</span></div>
            </div>
            <div className="hero-visual reveal-delay">
              <div className="hero-image-frame"><img src={heroImage} alt="Dentist in a bright modern clinic" /><div className="image-caption"><span className="caption-dot" /> Meet your care team <ArrowUpRight size={15} /></div></div>
              <div className="hero-stamp"><span>BASED IN</span><strong>ERODE</strong><small>EVER GREEN<br />DENTAL CARE</small></div>
            </div>
          </div>
          <div className="stats-rail page-width">
            <div className="stat"><strong>11<span>yrs</span></strong><p>in healthcare<br />as listed</p></div><div className="stat"><strong>4.8<span>/5</span></strong><p>Justdial listing<br />rating</p></div><div className="stat"><strong>4<span>+</span></strong><p>listed treatment<br />areas</p></div><div className="stat stat-cta"><button onClick={() => handleNav("services")}>Explore our care <ArrowUpRight size={18} /></button></div>
          </div>
        </section>

        <section className="intro section page-width" id="about">
          <div className="intro-kicker"><span className="section-number">01</span><span className="rule" /><p>THE EVERGREEN DIFFERENCE</p></div>
          <div className="intro-grid"><div><h2>Clinical precision.<br /><em>Human warmth.</em></h2></div><div className="intro-copy"><p className="lead">Ever Green Dental Care is a neighborhood dental clinic in Chidambaram Colony, Erode, built around one simple idea: the best care is care that makes room for you.</p><p>From your first hello to your final follow-up, we keep the experience clear, unhurried, and genuinely personal. Our team combines current clinical thinking with the kind of listening that helps you feel confident in every decision.</p><button className="text-button dark-text" onClick={() => handleNav("team")}>Meet the people behind the care <ArrowUpRight size={16} /></button></div></div>
          <div className="intro-foot"><span>GOOD CARE IS<br /><strong>SHARED CARE.</strong></span><div className="line-art"><span /><span /><span /></div><span className="foot-note">Built for calmer<br />dental visits.</span></div>
        </section>

        <section className="why-section section-soft"><div className="page-width why-grid"><div className="why-image"><img src={interiorImage} alt="Evergreen Dental Care interior" /><div className="vertical-label">A CALMER KIND OF CLINIC</div></div><div className="why-copy"><p className="eyebrow"><span /> WHY EVERGREEN</p><h2>Good dentistry is<br /><em>more than a chair.</em></h2><p className="lead">It is a feeling of being listened to. A plan you understand. A team that stays with you, from the first question to the last check-in.</p><div className="benefit-list"><div><div className="benefit-icon"><Stethoscope size={19} /></div><div><h3>Experienced clinicians</h3><p>Deep expertise, explained in language that makes sense.</p></div></div><div><div className="benefit-icon"><Sparkles size={19} /></div><div><h3>Modern, considered care</h3><p>Thoughtful technology used where it genuinely helps.</p></div></div><div><div className="benefit-icon"><ShieldCheck size={19} /></div><div><h3>Clear from day one</h3><p>Transparent options and straightforward treatment plans.</p></div></div></div></div></div></section>

        <section className="services section page-width" id="services"><div className="section-heading"><div><p className="eyebrow"><span /> WHAT WE DO</p><h2>Care for every<br /><em>chapter of life.</em></h2></div><p className="heading-aside">Explore the care areas listed for Ever Green Dental Care. Select a service to understand the usual causes, signs, timing, and treatment considerations.</p></div><div className="service-carousel"><div className="service-carousel-viewport"><div className="service-carousel-track" style={{ transform: `translateX(-${activeService * (100 / dentalServices.length)}%)` }}>{dentalServices.map((service) => <Link href={`/services/${service.slug}`} className={`service-card ${service.color}`} key={service.slug}><div className="service-image"><img src={service.image} alt="" /><span className="service-image-arrow"><ArrowUpRight size={19} /></span></div><div className="service-top"><span>{service.number}</span><span className="service-label">{service.shortTitle}</span></div><h3>{service.title}</h3><p>{service.cardCopy}</p><span className="service-learn">View service guide <ArrowUpRight size={15} /></span></Link>)}</div></div><div className="service-carousel-controls"><div className="service-dots" role="tablist" aria-label="Choose a service">{dentalServices.map((service, index) => <button className={index === activeService ? "is-active" : ""} key={service.slug} onClick={() => setActiveService(index)} aria-label={`Show ${service.title}`} />)}</div><div className="service-arrows"><button onClick={() => setActiveService((activeService - 1 + dentalServices.length) % dentalServices.length)} aria-label="Previous service"><ArrowUpRight size={18} className="rotate-left" /></button><button onClick={() => setActiveService((activeService + 1) % dentalServices.length)} aria-label="Next service"><ArrowUpRight size={18} /></button></div></div></div></section>

        <section className="team section page-width" id="team"><div className="section-heading team-heading"><div><p className="eyebrow"><span /> THE PEOPLE BEHIND THE SMILES</p><h2>Meet your<br /><em>care team.</em></h2></div><p className="heading-aside">A small, experienced team that believes great dentistry begins with a good conversation.</p></div><div className="doctor-grid">{doctors.map((doctor, index) => <article className="doctor-card" key={doctor.name}><div className="doctor-image"><img src={doctor.image} alt={doctor.name} /><span>0{index + 1}</span></div><div className="doctor-meta"><div><h3>{doctor.name}</h3><p className="doctor-role">{doctor.role}</p></div><ArrowUpRight size={18} /></div><p className="doctor-bio">{doctor.bio}</p></article>)}</div></section>

        <section className="pricing-band"><div className="page-width pricing-inner"><div><p className="eyebrow light"><span /> SIMPLE, ALWAYS</p><h2>Know what to expect.<br /><em>Before you begin.</em></h2></div><div className="pricing-copy"><p>We believe financial clarity is part of clinical care. Every recommendation comes with a plain-language explanation and a clear estimate.</p><button className="button button-outline" onClick={() => handleNav("contact")}>View our approach <ArrowUpRight size={16} /></button></div></div></section>

        <section className="contact section page-width" id="contact"><div className="contact-intro"><p className="eyebrow"><span /> LET'S TALK</p><h2>Bring your questions.<br /><em>We'll bring a clear plan.</em></h2><p>Tell us a little about what you need and use the listing link below for the clinic's current contact options.</p><div className="contact-details"><span><MapPin size={17} /> 51 and 51/1, Near Kalaimagal Kalvi Nilayam Opp, Kalaimagal Kalvi Nilayam Road, Chidambaram Colony, Erode–638001, Tamil Nadu</span><a href="https://www.justdial.com/Erode/Ever-Green-Dental-Care-Near-Kalaimagal-Kalvi-Nilayam-Opp-Chidambaram-Colony/9999PX424-X424-150928104223-I5F3_BZDET" target="_blank" rel="noreferrer"><ExternalLink size={17} /> Enquire or view contact options on Justdial</a><span><Clock3 size={17} /> Hours are not listed online — please confirm when enquiring</span></div></div><div className="form-card">{submitted ? <div className="form-success"><div className="success-icon"><Check /></div><h3>We have your note.</h3><p>Thank you for reaching out. Please use the Justdial listing for the clinic's current phone and enquiry options.</p><button className="text-button dark-text" onClick={() => setSubmitted(false)}>Send another note <ArrowUpRight size={16} /></button></div> : <form onSubmit={handleSubmit}><div className="form-top"><p>BOOK A FIRST VISIT</p><span>01 / 03</span></div><label>My name is<input required type="text" placeholder="Your full name" /></label><label>I would like help with<select defaultValue=""><option value="" disabled>Select a service</option><option>Root canal care</option><option>Bleeding gums</option><option>Laser dentistry</option><option>Fixed prosthodontics</option></select></label><label>You can reach me at<input required type="tel" placeholder="Phone number" /></label><button className="button button-dark" type="submit">Send enquiry <ArrowUpRight size={16} /></button></form>}</div></section>
      </main>

      <footer className="footer"><div className="page-width footer-top"><a className="brand footer-brand" href="#top"><img src={brandMark} alt="" className="brand-mark" /><span className="brand-copy"><strong>EVER GREEN</strong><small>DENTAL CARE</small></span></a><p>A calmer kind of dental care,<br />in Chidambaram Colony, Erode.</p><div className="footer-links"><a href="#services">Services</a><a href="#team">Our team</a><a href="#contact">Contact</a></div><div className="socials"><a href="https://www.justdial.com/Erode/Ever-Green-Dental-Care-Near-Kalaimagal-Kalvi-Nilayam-Opp-Chidambaram-Colony/9999PX424-X424-150928104223-I5F3_BZDET" target="_blank" rel="noreferrer" aria-label="Justdial listing"><ExternalLink size={17} /></a><a href="#contact" aria-label="Contact"><MapPin size={17} /></a></div></div><div className="page-width footer-bottom"><span>© Ever Green Dental Care</span><span>Made for better visits.</span><span><Clock3 size={14} /> Hours: confirm on enquiry</span></div></footer>
    </div>
  );
}
