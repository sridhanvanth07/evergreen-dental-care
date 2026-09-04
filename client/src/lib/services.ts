export type DentalService = {
  slug: string;
  number: string;
  title: string;
  shortTitle: string;
  cardCopy: string;
  image: string;
  color: "mint" | "sand" | "blue";
  intro: string;
  typicalTime: string;
  causes: string[];
  signs: string[];
  benefits: string[];
  untreated: string;
};

export const dentalServices: DentalService[] = [
  {
    slug: "root-canal-care",
    number: "01",
    title: "Root canal care",
    shortTitle: "Root canal",
    cardCopy: "Care for tooth pain and infection, with a clear explanation of each step before treatment begins.",
    image: "/manus-storage/evergreen-root-canal_17298cf3.jpg",
    color: "mint",
    intro: "Root canal treatment removes infection from inside a tooth so the natural tooth can be cleaned, sealed, and preserved.",
    typicalTime: "Usually 60–90 minutes per visit; some cases need more than one visit.",
    causes: ["Deep tooth decay", "A crack or dental injury", "Repeated work on the same tooth", "Bacteria reaching the tooth’s inner pulp"],
    signs: ["Persistent toothache or sensitivity", "Pain when biting or chewing", "Swelling or tenderness near the tooth", "A darkening tooth"],
    benefits: ["Helps remove the source of infection", "Can preserve the natural tooth", "Supports comfortable chewing after recovery", "Provides a planned alternative to extraction when suitable"],
    untreated: "An untreated infection can become more painful and may affect the surrounding bone or gum. A dental assessment is the safest way to understand what is happening.",
  },
  {
    slug: "bleeding-gums",
    number: "02",
    title: "Bleeding gums",
    shortTitle: "Gum care",
    cardCopy: "Support for gum health, from early assessment through practical guidance for everyday care.",
    image: "/manus-storage/evergreen-gum-care_e407514a.jpg",
    color: "sand",
    intro: "Bleeding gums are a sign worth checking. Early gum care focuses on finding the cause and making daily care easier to keep up.",
    typicalTime: "An initial assessment is often around 30–45 minutes; follow-up depends on the cause.",
    causes: ["Plaque buildup along the gumline", "Gingivitis or gum inflammation", "A change in brushing or flossing routine", "Certain health conditions or medicines"],
    signs: ["Blood when brushing or flossing", "Red, swollen, or tender gums", "Persistent bad breath", "Gums that feel sensitive or recede"],
    benefits: ["Identifies the source of bleeding", "Supports healthier gums and fresher breath", "Creates a realistic home-care routine", "Can help prevent inflammation from progressing"],
    untreated: "Ongoing bleeding should not be ignored. Inflammation can become more difficult to manage over time and may affect the tissues supporting the teeth.",
  },
  {
    slug: "oral-maxillofacial-care",
    number: "03",
    title: "Oral & maxillofacial care",
    shortTitle: "Oral & facial",
    cardCopy: "Thoughtful assessment for concerns involving the mouth, jaw, face, and related oral structures.",
    image: "/manus-storage/evergreen-oral-maxillofacial_c34c43ed.jpg",
    color: "blue",
    intro: "Oral and maxillofacial care covers a wide range of concerns affecting the mouth, jaw, face, and supporting structures.",
    typicalTime: "The first visit varies by concern; allow time for a careful history and examination.",
    causes: ["Jaw or facial injury", "Impacted teeth", "Persistent jaw discomfort", "Changes in oral tissue that need assessment"],
    signs: ["Jaw pain or limited movement", "Facial swelling", "Difficulty opening the mouth", "A lump, sore, or change that does not settle"],
    benefits: ["A structured assessment of the concern", "Clear next steps or referral when needed", "Better understanding of symptoms and options", "Care planned around the whole person"],
    untreated: "Persistent pain, swelling, or tissue changes deserve timely professional assessment. The right next step depends on the underlying cause.",
  },
  {
    slug: "laser-dentistry",
    number: "04",
    title: "Laser dentistry",
    shortTitle: "Laser dentistry",
    cardCopy: "Modern laser-assisted options considered when they can make treatment more precise and comfortable.",
    image: "/manus-storage/evergreen-laser-dentistry_6aedc731.jpg",
    color: "mint",
    intro: "Laser dentistry uses focused light in selected dental procedures. Whether it is appropriate depends on the treatment and your clinical needs.",
    typicalTime: "Often 30–90 minutes, depending on the procedure and the area being treated.",
    causes: ["Gum tissue that needs reshaping or treatment", "A need for focused soft-tissue care", "A procedure where laser assistance may improve precision", "A clinician-recommended treatment plan"],
    signs: ["Gum discomfort or uneven tissue", "A soft-tissue concern requiring review", "Sensitivity or irritation that needs assessment", "A treatment plan where laser support is suitable"],
    benefits: ["Can support precise soft-tissue work", "May make selected procedures more comfortable", "Can be used as part of a tailored treatment plan", "Offers a modern option when clinically appropriate"],
    untreated: "The effects of delaying care depend on the underlying concern. An assessment helps determine whether laser dentistry or another approach is the better fit.",
  },
  {
    slug: "fixed-prosthodontics",
    number: "05",
    title: "Fixed prosthodontics",
    shortTitle: "Fixed prosthodontics",
    cardCopy: "Crowns and fixed tooth replacements planned to support function, comfort, and a natural-looking smile.",
    image: "/manus-storage/evergreen-prosthodontics_5d641f83.jpg",
    color: "sand",
    intro: "Fixed prosthodontics includes restorations such as crowns and bridges that are designed to stay in place and support everyday function.",
    typicalTime: "Often 2–3 visits spread across about 1–2 weeks, depending on the restoration.",
    causes: ["A heavily damaged or weakened tooth", "A missing tooth or gap", "A large filling that needs additional support", "Wear or fracture affecting function"],
    signs: ["Difficulty chewing comfortably", "A cracked or badly worn tooth", "A gap after tooth loss", "A restoration that no longer fits or feels secure"],
    benefits: ["Restores support for chewing", "Can protect a weakened tooth", "Helps maintain the shape of the smile", "Provides a fixed alternative when suitable"],
    untreated: "A damaged or missing tooth can change how you chew and place extra strain on neighboring teeth. A consultation clarifies the available options.",
  },
];

export function getDentalService(slug: string) {
  return dentalServices.find((service) => service.slug === slug);
}
