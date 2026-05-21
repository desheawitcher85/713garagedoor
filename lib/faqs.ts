export interface FAQ {
  question: string
  answer: string
}

export const generalFaqs: FAQ[] = [
  {
    question: "How fast can you get to my house in Houston?",
    answer:
      "Most calls within Greater Houston get same-day service. Emergency calls inside Loop 610 are typically reached within 2 hours. Suburban areas like Katy, Sugar Land, and The Woodlands are usually reached the same day.",
  },
  {
    question: "Are you licensed and insured?",
    answer:
      "Yes. We carry general liability insurance, workers compensation, and are fully bonded. Proof of insurance is available on request before any technician arrives.",
  },
  {
    question: "Do you charge extra for nights, weekends, or holidays?",
    answer:
      "No after-hours surcharge. Same rate 24/7, including weekends and major holidays. We built our pricing that way on purpose.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "Cash, all major credit and debit cards, and ACH for commercial accounts. Payment is collected after the job is complete and you are satisfied.",
  },
  {
    question: "Do you offer warranties on repairs?",
    answer:
      "Yes. Standard repairs come with a 1-year parts and labor warranty. Premium springs include a lifetime warranty. Commercial work is warranted separately. Ask for details when you book.",
  },
  {
    question: "Can you fix all garage door brands?",
    answer:
      "Yes. We service LiftMaster, Chamberlain, Genie, Linear, Sommer, Wayne Dalton, Clopay, Amarr, Raynor, Overhead Door, and more. If it's a garage door, we can work on it.",
  },
  {
    question: "How much does a garage door repair typically cost in Houston?",
    answer:
      "Most repairs land between $185 and $450. What you pay depends on the issue: a simple cable repair is at the low end, a spring replacement is in the middle, and a full opener replacement is at the high end. Quotes are free, and there's no charge for the assessment.",
  },
  {
    question: "Do you service commercial properties?",
    answer:
      "Yes. We handle warehouses, distribution centers, retail, automotive shops, dealerships, and dock equipment. Commercial work is quoted on-site.",
  },
  {
    question: "What ZIP codes do you serve?",
    answer:
      "Greater Houston and all of Harris, Fort Bend, and Montgomery counties. That covers the city proper plus Sugar Land, Katy, The Woodlands, Pearland, Cypress, Spring, Humble, and dozens of other communities.",
  },
  {
    question: "How do I know if my spring is broken or just my opener?",
    answer:
      "Pull the red release cord on your opener to disconnect it, then try to lift the door manually. If the door won't lift or feels extremely heavy, the spring is almost certainly broken. If it lifts fine by hand but the opener won't run it, that's an opener issue. We diagnose for free.",
  },
]

export const repairFaqs: FAQ[] = [
  {
    question: "What are the most common garage door repairs in Houston?",
    answer:
      "Spring replacement tops the list, followed by cable replacement, roller and hinge wear, opener motor failure, and panels damaged by vehicles or storm debris. The humid Gulf climate accelerates corrosion on springs and cables faster than in dry climates.",
  },
  {
    question: "Can a garage door be repaired instead of replaced?",
    answer:
      "Usually yes. Unless structural panels are severely bent or the door is very old, most issues are repairable. A technician can give you an honest repair-vs-replace comparison on site, with costs for both options.",
  },
  {
    question: "Why is my garage door making a grinding noise?",
    answer:
      "Grinding usually points to worn rollers, dry hinges, or debris caught in the tracks. Occasionally it signals a failing opener gear. A quick inspection nails it down. Most grinding issues are a $95-$150 fix.",
  },
  {
    question: "My garage door is uneven or sagging on one side. What's wrong?",
    answer:
      "An uneven door almost always means one spring has broken or a cable has snapped or slipped its drum. Stop operating the door. Running it on one spring or a bad cable can damage the opener, the tracks, and the door itself.",
  },
  {
    question: "How long does a typical repair take?",
    answer:
      "Most residential repairs take 60-90 minutes. Spring replacements and cable jobs are usually done in under an hour. Full opener replacements run 90-120 minutes. We stock common parts on the truck, so most jobs don't require a return visit.",
  },
  {
    question: "My garage door is off track. Is that dangerous?",
    answer:
      "Yes. An off-track door is under tension and can come down unexpectedly. Don't try to force it back yourself. Keep people away from the door and call us. Off-track repairs are same-day and typically $175-$350.",
  },
]

export const springFaqs: FAQ[] = [
  {
    question: "How long do garage door springs last?",
    answer:
      "Standard springs are rated for around 10,000 cycles, roughly 3-7 years of average use. Houston's humidity can shorten that lifespan. Premium high-cycle springs (rated 25,000-50,000 cycles) are worth the upgrade for frequently used doors.",
  },
  {
    question: "Can I replace a garage door spring myself?",
    answer:
      "Technically yes, but it's one of the most dangerous DIY jobs around the house. Torsion springs are under enormous tension. A mistake can cause serious injury. Most hardware stores won't even stock the correct springs. We strongly recommend professional replacement.",
  },
  {
    question: "What's the difference between torsion and extension springs?",
    answer:
      "Torsion springs are mounted horizontally above the door and twist to store energy. Extension springs run alongside the horizontal tracks and stretch. Torsion systems are more common on newer and larger doors, last longer, and are generally safer.",
  },
  {
    question: "Should I replace both springs if only one breaks?",
    answer:
      "Yes. If the springs are the same age, the second one is likely to fail within weeks or months. Replacing both at once costs less than two separate service calls, and you won't wake up to a stuck door again in a month.",
  },
  {
    question: "What does a broken spring sound like?",
    answer:
      "It's usually a loud bang, loud enough that people sometimes think it came from outside the house. After the bang, the door won't open or will feel impossibly heavy. That's the signature of a broken torsion spring.",
  },
  {
    question: "How much does spring replacement cost in Houston?",
    answer:
      "Single torsion spring replacement runs $185-$285. Dual spring replacement (replacing both) is typically $260-$390. Premium high-cycle springs cost $50-$100 more and are worth it if you use the door frequently.",
  },
]

export const openerFaqs: FAQ[] = [
  {
    question: "My opener runs but the door doesn't move. What's wrong?",
    answer:
      "That's almost always a broken spring. The opener sounds like it's working because the motor runs, but there's no way it can lift a door without the spring doing its share of the work. Disconnect the opener and try lifting by hand to confirm.",
  },
  {
    question: "What brands of opener do you service?",
    answer:
      "All of them: LiftMaster (owned by Chamberlain Group), Chamberlain, Genie, Linear, Sommer, Craftsman, Ryobi, Overhead Door, and more. We carry replacement parts for the most common brands on the truck.",
  },
  {
    question: "Should I repair or replace my opener?",
    answer:
      "If the opener is under 10 years old, repair is usually the better call unless the damage is extensive. Over 10-12 years, replacement often makes more sense. Newer models are quieter, smarter, and more energy-efficient. A technician can give you an honest comparison on site.",
  },
  {
    question: "Do you install smart openers?",
    answer:
      "Yes. We install LiftMaster myQ, Chamberlain myQ, and comparable smart systems that let you monitor and control your door from your phone. Installation runs 90-120 minutes for most homes.",
  },
  {
    question: "Why does my remote work sometimes but not others?",
    answer:
      "Intermittent remotes usually point to a dying battery, interference from LED bulbs in the garage (they can jam opener signals), or a failing receiver in the opener itself. Start with a fresh battery. It fixes the problem more than half the time.",
  },
]

export const installationFaqs: FAQ[] = [
  {
    question: "How long does a new garage door installation take?",
    answer:
      "Most single-door replacements are complete in 4-6 hours, including removal of the old door. Two-car doors run 5-8 hours. We typically schedule installations for mornings so the job is done before dinner.",
  },
  {
    question: "Do I need a hurricane-rated garage door in Houston?",
    answer:
      "Not legally required for existing homes in most of Greater Houston, but Harris County wind-load codes apply to new installs. Wind-rated doors and reinforcement kits significantly reduce hurricane damage risk. If you're inside the Houston city limits, ask your installer about current code requirements.",
  },
  {
    question: "What's the best garage door material for Houston?",
    answer:
      "Steel with an insulated polyurethane core. It resists humidity, doesn't rot, handles summer heat well, and holds up to minor impacts. Composite wood-look panels give the wood aesthetic without the rot risk if curb appeal matters.",
  },
  {
    question: "How much does a new garage door cost in Houston?",
    answer:
      "Installed prices start around $1,200 for a basic steel door and run to $4,500 or more for a premium wood-look composite or full-view glass with a smart opener. Most homeowners spend $1,800-$2,800 for a solid mid-range steel door with installation.",
  },
  {
    question: "Can you match my HOA's design requirements?",
    answer:
      "Yes. We work with all the major master-planned communities in Sugar Land, Katy, and The Woodlands. Bring your HOA design guidelines and we'll spec a door that meets them.",
  },
]

export const commercialFaqs: FAQ[] = [
  {
    question: "Do you offer commercial service contracts?",
    answer:
      "Yes. We offer annual preventive maintenance agreements for commercial accounts that include scheduled inspections, lubrication, hardware checks, and priority scheduling for emergency calls.",
  },
  {
    question: "What types of commercial doors do you service?",
    answer:
      "Rolling steel, sectional steel, high-speed roll-up, fire-rated doors, coiling grilles, and dock equipment including dock levelers and dock seals. Most industrial and commercial applications in the Houston area are in scope.",
  },
  {
    question: "How quickly can you respond to a commercial emergency?",
    answer:
      "Same-day for most Greater Houston locations. We prioritize commercial emergency calls because a stuck loading dock door has a direct revenue impact. Most commercial clients inside Loop 610 or near the port see same-hour response.",
  },
]

export const emergencyFaqs: FAQ[] = [
  {
    question: "What counts as a garage door emergency?",
    answer:
      "Anything that leaves your home or business unsecured. Door stuck open, door crashed down, broken cable that has the door hanging at an angle, or a spring failure that prevents the door from closing. We treat these as true emergencies with same-hour response.",
  },
  {
    question: "Do you charge extra for emergency calls?",
    answer:
      "No. Same rate applies at 2am as at 2pm. No after-hours surcharge, no weekend premium, no holiday fee.",
  },
  {
    question: "What if my car is trapped inside the garage?",
    answer:
      "This is a priority call. We can usually get a technician to you within 1-2 hours. In the meantime: pull the red release cord to disconnect the opener, then attempt to lift manually. If the springs are intact, you can usually open the door by hand.",
  },
  {
    question: "My door came off the track during a storm. Is it safe to wait until morning?",
    answer:
      "No. An off-track door is under spring tension and can fall unexpectedly. It also leaves your home unsecured. Call us for same-night service. This is exactly what our emergency line is for.",
  },
]

export const houstonFaqs: FAQ[] = [
  {
    question: "Does Houston humidity really damage garage doors?",
    answer:
      "Yes. Gulf humidity accelerates spring corrosion. Steel springs lose roughly 20-30% of their typical lifespan in coastal climates, and it rots wooden panels faster than in dry climates. Annual maintenance and the right material choices make a real difference.",
  },
  {
    question: "Do I need a hurricane-rated garage door in Houston?",
    answer:
      "Not legally required for existing homes in most of Greater Houston, but Harris County wind-load codes apply to new installs. Wind-rated doors and reinforcement kits significantly reduce hurricane damage risk.",
  },
  {
    question: "What's the best garage door material for Houston's climate?",
    answer:
      "Steel with insulated polyurethane core resists humidity, doesn't rot, and handles heat better than wood. Composite wood-look options give the wood aesthetic without the rot risk.",
  },
  {
    question: "How often should I service my garage door in Houston?",
    answer:
      "Once a year minimum, twice a year ideal: once before hurricane season (May), once before peak summer heat (March-April). Springs, hinges, rollers, and weather seals all wear faster in humid heat.",
  },
  {
    question: "Will my garage door opener last as long in Houston as in a dry climate?",
    answer:
      "Generally no. Houston conditions can shorten typical opener life by 1-3 years. LiftMaster and Chamberlain models with sealed motors tend to hold up best in humid environments.",
  },
]

export const costFaqs: FAQ[] = [
  {
    question: "What's the average cost of garage door repair in Houston?",
    answer:
      "Most repairs land between $185 and $450. The most common job, spring replacement, runs $225-$390. Opener repairs typically cost $150-$350. Full replacement installations start around $1,200.",
  },
  {
    question: "Why is my quote higher than what I saw online?",
    answer:
      "Online estimates are often for basic national averages and don't account for your specific door size, brand, number of springs, or local labor rates. A Houston-area service call includes gas and time to reach you, and that's reflected in the price.",
  },
  {
    question: "Is there a service call fee?",
    answer:
      "We charge a diagnostic fee to come out and assess, which is credited toward the repair if you book the job. No surprise fees after the fact.",
  },
  {
    question: "Are there payment plans available?",
    answer:
      "For larger jobs (over $500), ask about financing options when you book. We work with a third-party provider for approved customers.",
  },
  {
    question: "Does hurricane-rated equipment cost more?",
    answer:
      "Yes. Wind-rated doors typically run 15-25% more than standard doors of the same style. Reinforcement kits are a less expensive option for existing doors and typically cost $75-$200 installed.",
  },
  {
    question: "Why does the same repair cost different amounts at different shops?",
    answer:
      "Parts quality, warranty terms, and labor rates vary significantly. Cheap springs fail sooner. A shop quoting half the price may be using low-grade components with no warranty. Ask specifically: what brand springs are you installing and what warranty do they carry?",
  },
]
