import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../../components/ui/accordion";

export const ForArtistsSection = (): JSX.Element => {
  const faqItems = [
    {
      id: "item-1",
      question: "What is VoiceVesta?",
    },
    {
      id: "item-2",
      question: "How can I invest?",
    },
    {
      id: "item-3",
      question: "When will I start receiving returns?",
    },
    {
      id: "item-4",
      question: "What is a Forever Ticket?",
    },
    {
      id: "item-5",
      question: "What is a Lustrum Ticket?",
    },
    {
      id: "item-6",
      question: "I'm an artist—how do I join?",
    },
    {
      id: "item-7",
      question: "Do investors pick which artists to fund?",
    },
    {
      id: "item-8",
      question: "Is my investment guaranteed?",
    },
    {
      id: "item-9",
      question: "Can I upgrade from Class B to Class A later?",
    },
    {
      id: "item-10",
      question: "How do I stay updated?",
    },
  ];

  return (
    <section className="flex flex-col w-full max-w-4xl mx-auto items-start gap-3 relative">
      <Accordion type="single" collapsible className="w-full space-y-3">
        {faqItems.map((item) => (
          <AccordionItem
            key={item.id}
            value={item.id}
            className="bg-[#07041e1a] rounded-xl border-none"
          >
            <AccordionTrigger className="flex justify-between items-center w-full h-16 md:h-20 px-4 md:px-8 py-0 hover:no-underline [&[data-state=open]>svg]:rotate-180">
              <span className="[font-family:'Manrope',Helvetica] font-medium text-dark text-lg md:text-xl lg:text-2xl tracking-[0] leading-tight text-left">
                {item.question}
              </span>
            </AccordionTrigger>
            <AccordionContent className="px-4 md:px-8 pb-4 md:pb-6">
              <div className="[font-family:'Manrope',Helvetica] text-dark text-base">
                {/* Content would be added here when available */}
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};
