import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { FAQPageSchema } from "@/components/schema/FAQPageSchema"

interface FAQ {
  question: string
  answer: string
}

interface FAQBlockProps {
  faqs: FAQ[]
  heading?: string
  withSchema?: boolean
}

export function FAQBlock({
  faqs,
  heading = "Frequently Asked Questions",
  withSchema = true,
}: FAQBlockProps) {
  return (
    <section className="section-pad bg-paper">
      <div className="container-site max-w-3xl mx-auto">
        {withSchema && <FAQPageSchema faqs={faqs} />}
        <h2 className="font-heading text-3xl md:text-4xl text-ink mb-8">{heading}</h2>
        <Accordion className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="bg-white border border-cream rounded-lg px-4"
            >
              <AccordionTrigger className="text-left font-sans font-semibold text-base text-ink hover:text-rust py-4 normal-case tracking-normal">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-steel text-sm leading-relaxed pb-4">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
