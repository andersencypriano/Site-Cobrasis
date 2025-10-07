import { useState } from "react";
import { faqs } from "@/seeds/Faq";
import { ChevronDown } from "lucide-react";

export default function Faq() {

  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <>
      <div className="max-w-3xl mx-auto space-y-4 px-6">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="p-4 bg-white rounded-xl shadow-md cursor-pointer border border-gray-200 hover:shadow-lg transition "
            onClick={() => toggleFAQ(index)}
          >
            <div className="flex justify-between items-center">
              <h3 className="font-semibold text-gray-800">{faq.question}</h3>
              <ChevronDown className={`w-5 h-5 transform transition-transform ${openFAQ === index ? "rotate-180 text-purple-600" : "text-gray-500"}`} />
            </div>
            {openFAQ === index && (
              <p className="mt-3 text-gray-700 text-sm">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </>
  )
}