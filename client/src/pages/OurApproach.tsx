import { ArrowLeft, ArrowUpRight, Check, ClipboardList, HeartHandshake, MessageCircle, ShieldCheck } from "lucide-react";
import { Link } from "wouter";

const brandMark = "/manus-storage/evergreen-mark_62f72f5f.png";

const steps = [
  { number: "01", icon: MessageCircle, title: "We listen first", copy: "We begin with your concerns, your comfort, and what you want to understand. A good consultation is a conversation, not a rushed checklist." },
  { number: "02", icon: ClipboardList, title: "We examine carefully", copy: "We review your dental history, examine the area, and use additional investigations only when they help clarify the situation." },
  { number: "03", icon: HeartHandshake, title: "We explain your options", copy: "You receive a clear explanation of what we find, the choices available, expected visits, and questions worth considering." },
  { number: "04", icon: ShieldCheck, title: "We plan with you", copy: "Treatment is agreed together. We aim for care that is clinically appropriate, practical for your life, and comfortable to move forward with." },
];

export default function OurApproach() {
  return (
    <div className="approach-page">
      <header className="service-detail-header"><Link href="/" className="brand" aria-label="Ever Green Dental Care home"><img src={brandMark} alt="" className="brand-mark" /><span className="brand-copy"><strong>EVER GREEN</strong><small>DENTAL CARE</small></span></Link><Link href="/#contact" className="header-appointment">Make an appointment <ArrowUpRight size={15} /></Link></header>
      <main>
        <section className="approach-hero"><div className="page-width approach-hero-inner"><Link href="/" className="back-link"><ArrowLeft size={15} /> Back to home</Link><p className="eyebrow light"><span /> OUR APPROACH</p><h1>Care that is<br /><em>clear, calm,</em><br />and shared.</h1><p>Our role is not only to treat a dental problem. It is to help you understand what is happening, why it matters, and which next step is right for you.</p></div></section>
        <section className="approach-intro section page-width"><div><p className="eyebrow"><span /> A PATIENT-FRIENDLY PROMISE</p><h2>Professional care<br /><em>without the fog.</em></h2></div><div className="approach-intro-copy"><p className="lead">Dental decisions can feel complicated. We make them easier by giving you time to ask questions and information you can actually use.</p><p>Every mouth is different. A professional recommendation should take your symptoms, history, examination findings, priorities, and comfort into account. We do not promise a one-size-fits-all answer; we offer a considered plan and explain the reasoning behind it.</p></div></section>
        <section className="approach-steps"><div className="page-width"><div className="approach-section-heading"><p className="eyebrow"><span /> HOW A VISIT FLOWS</p><h2>From first question<br /><em>to clear next step.</em></h2></div><div className="approach-step-grid">{steps.map(({ number, icon: Icon, title, copy }) => <article key={number} className="approach-step"><span className="approach-number">{number}</span><div className="approach-icon"><Icon size={20} /></div><h3>{title}</h3><p>{copy}</p></article>)}</div></div></section>
        <section className="approach-principles section page-width"><div className="principle-card"><div><p className="eyebrow"><span /> WHAT YOU CAN EXPECT</p><h2>Honesty is part<br /><em>of treatment.</em></h2></div><div className="principle-list"><p><Check size={17} /> Plain-language explanations before treatment.</p><p><Check size={17} /> Time to discuss alternatives and priorities.</p><p><Check size={17} /> Clear guidance on aftercare and follow-up.</p><p><Check size={17} /> A respectful environment for every question.</p></div></div></section>
        <section className="approach-note"><div className="page-width"><p className="eyebrow light"><span /> A NOTE FROM THE CLINIC</p><blockquote>“Our goal is for you to leave with less uncertainty than you arrived with — whether the right next step is treatment, prevention, or simply a little more time to decide.”</blockquote><p className="note-signoff">Ever Green Dental Care<br /><span>Chidambaram Colony, Erode</span></p></div></section>
        <section className="approach-disclaimer page-width"><p><strong>Important:</strong> This page is general educational information and does not replace a clinical examination or diagnosis. If you have pain, swelling, bleeding, trauma, or a concern that is worsening, please seek professional dental advice.</p><Link href="/#contact" className="button button-dark">Speak with the clinic <ArrowUpRight size={16} /></Link></section>
      </main>
      <footer className="footer"><div className="page-width footer-bottom"><span>© Ever Green Dental Care</span><span>Hours: 10am–2pm and 5pm–8pm</span><span>Chidambaram Colony, Erode</span></div></footer>
    </div>
  );
}
