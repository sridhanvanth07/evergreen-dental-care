import { ArrowLeft, ArrowUpRight, CheckCircle2, Clock3, MapPin, ShieldCheck } from "lucide-react";
import { Link, useRoute } from "wouter";
import { getDentalService } from "@/lib/services";

const brandMark = "/manus-storage/evergreen-mark_62f72f5f.png";

export default function ServiceDetail() {
  const [, params] = useRoute("/services/:slug");
  const service = params?.slug ? getDentalService(params.slug) : undefined;

  if (!service) {
    return <main className="service-not-found"><p>That service page is not available.</p><Link href="/">Return to Ever Green Dental Care <ArrowUpRight size={16} /></Link></main>;
  }

  return (
    <div className="service-detail-page">
      <header className="service-detail-header">
        <Link href="/" className="brand" aria-label="Ever Green Dental Care home"><img src={brandMark} alt="" className="brand-mark" /><span className="brand-copy"><strong>EVER GREEN</strong><small>DENTAL CARE</small></span></Link>
        <Link href="/#contact" className="header-appointment">Make an appointment <ArrowUpRight size={15} /></Link>
      </header>
      <main>
        <section className={`service-detail-hero ${service.color}`}>
          <div className="page-width service-detail-hero-inner"><div className="service-detail-copy"><Link href="/#services" className="back-link"><ArrowLeft size={15} /> Back to all services</Link><p className="eyebrow"><span /> SERVICE {service.number}</p><h1>{service.title}</h1><p className="detail-intro">{service.intro}</p><Link href="/#contact" className="button button-dark">Ask about this service <ArrowUpRight size={16} /></Link></div><div className="service-detail-image"><img src={service.image} alt={service.title} /><div className="image-note"><ShieldCheck size={16} /> Treatment is planned around your needs</div></div></div>
        </section>
        <section className="service-detail-body page-width"><aside className="service-at-a-glance"><p className="eyebrow"><span /> AT A GLANCE</p><div><Clock3 size={20} /><span><strong>Typical time</strong>{service.typicalTime}</span></div><div><MapPin size={20} /><span><strong>Location</strong>Chidambaram Colony, Erode</span></div><div><ShieldCheck size={20} /><span><strong>Good to know</strong>Every plan starts with an assessment and explanation.</span></div></aside><div className="service-detail-content"><p className="detail-kicker">A clear place to start</p><h2>What to know about<br /><em>{service.shortTitle.toLowerCase()}.</em></h2><p className="detail-disclaimer">The information below is a general guide, not a diagnosis. Timing and suitability vary from person to person, so your clinician will confirm the right approach after an examination.</p><div className="detail-columns"><DetailList title="Common causes" items={service.causes} /><DetailList title="Signs worth checking" items={service.signs} /></div><div className="detail-benefits"><div><p className="eyebrow"><span /> WHY IT CAN HELP</p><h3>Good care makes the next step clearer.</h3></div><ul>{service.benefits.map((benefit) => <li key={benefit}><CheckCircle2 size={18} />{benefit}</li>)}</ul></div><div className="untreated-note"><strong>Why not leave it too long?</strong><p>{service.untreated}</p></div></div></section>
        <section className="detail-cta"><div className="page-width detail-cta-inner"><div><p className="eyebrow light"><span /> HAVE A QUESTION?</p><h2>Bring us what<br /><em>you’re noticing.</em></h2></div><div><p>Use our enquiry form or visit the public listing for the clinic’s current contact options.</p><Link href="/#contact" className="button button-light">Start an enquiry <ArrowUpRight size={16} /></Link></div></div></section>
      </main>
      <footer className="footer"><div className="page-width footer-bottom"><span>© Ever Green Dental Care</span><span>Information for patients, not a diagnosis.</span><span>Chidambaram Colony, Erode</span></div></footer>
    </div>
  );
}

function DetailList({ title, items }: { title: string; items: string[] }) {
  return <div className="detail-list"><h3>{title}</h3><ul>{items.map((item) => <li key={item}><span />{item}</li>)}</ul></div>;
}
