import { useState, useEffect } from "react";

interface FAQItem {
  question: string;
  answer: string;
  category: string;
  keywords: string[];
}

const FAQ = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [openItems, setOpenItems] = useState<number[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  // Add structured data for SEO
  useEffect(() => {
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqData.map((item, index) => ({
        "@type": "Question",
        "name": item.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": item.answer
        }
      }))
    };

    // Add structured data to page head
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);

    return () => {
      // Cleanup script on component unmount
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  const faqData: FAQItem[] = [
    // Ordering & Delivery
    {
      question: "How do I order fresh vegetables online from VegHigh?",
      answer: "Ordering fresh vegetables online from VegHigh is simple and convenient. Browse our extensive vegetable catalog on our website, select your desired fresh vegetables, add them to your cart, and proceed to checkout. You can also place orders via phone call or WhatsApp for added convenience. Our user-friendly platform ensures a smooth ordering experience for fresh vegetable delivery.",
      category: "ordering",
      keywords: ["order vegetables online", "fresh vegetables delivery", "vegetable ordering", "online vegetable store", "fresh produce delivery"]
    },
    {
      question: "What are VegHigh's vegetable delivery timings and schedule?",
      answer: "VegHigh offers flexible vegetable delivery timings from 7:00 AM to 9:00 PM daily. You can choose your preferred delivery slot during checkout. We provide same-day vegetable delivery for orders placed before 2:00 PM. Our delivery schedule is designed to ensure you receive fresh vegetables at your convenience, whether it's early morning for breakfast preparation or evening for dinner cooking.",
      category: "delivery",
      keywords: ["vegetable delivery timings", "fresh vegetable delivery schedule", "same day vegetable delivery", "vegetable delivery slots", "fresh produce delivery time"]
    },
    {
      question: "What is the minimum order amount for vegetable delivery?",
      answer: "VegHigh has a minimum order amount of ₹100 for vegetable delivery. However, we offer free delivery on orders above ₹250. For orders below ₹250, a nominal delivery fee of ₹30 applies. This ensures cost-effective vegetable delivery while maintaining our commitment to providing fresh vegetables at competitive prices.",
      category: "ordering",
      keywords: ["minimum order vegetables", "vegetable delivery charges", "free vegetable delivery", "vegetable delivery fees", "fresh vegetable minimum order"]
    },
    {
      question: "Does VegHigh deliver fresh vegetables to my area?",
      answer: "VegHigh currently delivers fresh vegetables to most areas within the city limits. You can check vegetable delivery availability by entering your pincode on our website. If your area is not covered, please contact our customer support and we'll try to accommodate your fresh vegetable delivery request. We're constantly expanding our delivery network to serve more customers.",
      category: "delivery",
      keywords: ["vegetable delivery areas", "fresh vegetable delivery zones", "vegetable delivery pincode", "fresh produce delivery areas", "vegetable delivery coverage"]
    },
    {
      question: "Can I schedule vegetable delivery for a specific time?",
      answer: "Yes, VegHigh allows you to schedule fresh vegetable delivery for a specific time slot. We offer 2-hour delivery windows throughout the day, ensuring you receive your fresh vegetables when it's most convenient for you. You can select your preferred delivery time during checkout, making it easy to plan your meal preparation around our fresh vegetable delivery schedule.",
      category: "delivery",
      keywords: ["schedule vegetable delivery", "fresh vegetable delivery time", "vegetable delivery appointment", "fresh produce delivery schedule", "vegetable delivery booking"]
    },

    // Product Quality
    {
      question: "How fresh are the vegetables from VegHigh?",
      answer: "VegHigh guarantees the freshest vegetables by sourcing directly from local farmers and markets daily. All our vegetables are harvested fresh and delivered within 24 hours to ensure maximum freshness and nutritional value. Our farm-to-table approach ensures you receive the freshest vegetables possible, maintaining their taste, texture, and nutritional benefits.",
      category: "quality",
      keywords: ["fresh vegetables", "farm fresh vegetables", "fresh produce quality", "fresh vegetable delivery", "farm to table vegetables"]
    },
    {
      question: "Does VegHigh offer organic vegetables?",
      answer: "Yes, VegHigh offers both organic and conventionally grown vegetables. Our organic vegetables are clearly marked in our catalog and sourced from certified organic farms. All our vegetables, whether organic or conventional, are sourced from trusted farmers who follow good agricultural practices. We provide transparency about our vegetable sourcing to help you make informed choices.",
      category: "quality",
      keywords: ["organic vegetables", "organic vegetable delivery", "fresh organic vegetables", "organic produce", "certified organic vegetables"]
    },
    {
      question: "What if I receive damaged or spoiled vegetables from VegHigh?",
      answer: "VegHigh guarantees the quality of all our vegetables. If you receive any damaged or spoiled vegetables, please contact us within 2 hours of delivery. We'll immediately replace the damaged vegetables or provide a full refund. Our quality assurance ensures you always receive fresh, high-quality vegetables, and we stand behind our fresh vegetable delivery service.",
      category: "quality",
      keywords: ["damaged vegetables", "spoiled vegetables", "vegetable quality guarantee", "fresh vegetable replacement", "vegetable refund policy"]
    },
    {
      question: "Does VegHigh wash and clean vegetables before delivery?",
      answer: "Yes, VegHigh thoroughly washes and cleans all vegetables before delivery to ensure they meet our hygiene standards. However, we recommend washing vegetables again at home before consumption for maximum hygiene and food safety. Our cleaning process removes dirt and surface contaminants while preserving the freshness and quality of your vegetables.",
      category: "quality",
      keywords: ["washed vegetables", "clean vegetables", "vegetable hygiene", "fresh vegetable cleaning", "vegetable food safety"]
    },

    // Pricing & Payment
    {
      question: "Are VegHigh's vegetable prices competitive with local markets?",
      answer: "Yes, VegHigh's vegetable prices are very competitive with local markets. We often offer better prices due to direct sourcing from farmers, eliminating middlemen costs. Plus, you save time and effort by getting fresh vegetables delivered to your doorstep. Our competitive pricing, combined with the convenience of fresh vegetable delivery, provides excellent value for money.",
      category: "pricing",
      keywords: ["vegetable prices", "competitive vegetable prices", "fresh vegetable cost", "vegetable market prices", "affordable vegetables"]
    },
    {
      question: "What payment methods does VegHigh accept for vegetable orders?",
      answer: "VegHigh accepts multiple payment methods for vegetable orders including cash on delivery, online payments (credit/debit cards, UPI, net banking), and digital wallets (Paytm, PhonePe, Google Pay). Our flexible payment options ensure convenient vegetable ordering and payment, making fresh vegetable delivery accessible to everyone.",
      category: "payment",
      keywords: ["vegetable payment methods", "cash on delivery vegetables", "online vegetable payment", "vegetable delivery payment", "fresh vegetable payment options"]
    },
    {
      question: "Does VegHigh offer discounts and loyalty programs for vegetable orders?",
      answer: "Yes, VegHigh offers various discounts including first-time user discounts, bulk vegetable order discounts, and seasonal offers. We also have a loyalty program where regular customers earn points on every vegetable purchase. Our discount programs make fresh vegetable delivery more affordable while rewarding our loyal customers.",
      category: "pricing",
      keywords: ["vegetable discounts", "fresh vegetable offers", "vegetable loyalty program", "bulk vegetable discounts", "vegetable delivery offers"]
    },
    {
      question: "Are there any hidden charges for vegetable delivery from VegHigh?",
      answer: "No, VegHigh has no hidden charges for vegetable delivery. All vegetable prices shown include taxes. The only additional cost is the delivery fee (₹30) for orders below ₹250, which is clearly mentioned during checkout. Our transparent pricing ensures you know exactly what you're paying for fresh vegetable delivery.",
      category: "pricing",
      keywords: ["vegetable delivery charges", "hidden vegetable costs", "fresh vegetable pricing", "vegetable delivery fees", "transparent vegetable pricing"]
    },

    // Customer Service
    {
      question: "How can I contact VegHigh customer support for vegetable delivery issues?",
      answer: "You can reach VegHigh's customer support team through multiple channels: Phone: +91-XXXXXXXXXX, WhatsApp: +91-XXXXXXXXXX, Email: support@veghigh.com, or through the contact form on our website. We're available from 7:00 AM to 10:00 PM daily to assist with any vegetable delivery queries or issues.",
      category: "support",
      keywords: ["vegetable delivery support", "fresh vegetable customer service", "vegetable delivery contact", "fresh produce support", "vegetable delivery help"]
    },
    {
      question: "What is VegHigh's cancellation policy for vegetable orders?",
      answer: "VegHigh allows you to cancel your vegetable order up to 2 hours before the scheduled delivery time. Cancellations made after this time may incur a small cancellation fee. For immediate vegetable order cancellations, please call our customer support. Our flexible cancellation policy ensures customer satisfaction with our fresh vegetable delivery service.",
      category: "support",
      keywords: ["vegetable order cancellation", "fresh vegetable cancellation", "vegetable delivery cancellation", "cancel vegetable order", "vegetable order refund"]
    },
    {
      question: "Does VegHigh offer refunds for vegetable delivery issues?",
      answer: "Yes, VegHigh offers full refunds for quality issues, wrong vegetables delivered, or if you're not satisfied with the fresh vegetables received. Refunds are processed within 3-5 business days to your original payment method. Our refund policy ensures complete customer satisfaction with our fresh vegetable delivery service.",
      category: "support",
      keywords: ["vegetable delivery refund", "fresh vegetable refund", "vegetable quality refund", "vegetable order refund", "fresh produce refund"]
    },
    {
      question: "Can I modify my vegetable order after placing it with VegHigh?",
      answer: "Yes, you can modify your vegetable order up to 2 hours before delivery. You can add or remove vegetables, change delivery time, or update delivery address. Please contact our customer support for vegetable order modifications. Our flexible ordering system ensures you can adjust your fresh vegetable delivery as needed.",
      category: "support",
      keywords: ["modify vegetable order", "change vegetable order", "edit vegetable delivery", "fresh vegetable order changes", "vegetable order modification"]
    },

    // Business Information
    {
      question: "Where does VegHigh source fresh vegetables from?",
      answer: "VegHigh sources fresh vegetables directly from local farmers, agricultural cooperatives, and trusted wholesale markets. We maintain strong relationships with farmers to ensure consistent quality and fair pricing. Our direct sourcing approach guarantees fresh vegetables while supporting local agriculture and providing better prices to our customers.",
      category: "business",
      keywords: ["fresh vegetable sourcing", "farm fresh vegetables", "local vegetable farmers", "fresh produce sourcing", "vegetable supply chain"]
    },
    {
      question: "Does VegHigh have physical vegetable stores?",
      answer: "Currently, VegHigh operates primarily as an online fresh vegetable delivery platform with a central warehouse. However, we're planning to open physical vegetable stores in the near future to provide an even better customer experience. Our online platform currently offers the convenience of fresh vegetable delivery to your doorstep.",
      category: "business",
      keywords: ["vegetable stores", "fresh vegetable shops", "physical vegetable stores", "vegetable retail stores", "fresh produce stores"]
    },
    {
      question: "What makes VegHigh different from other vegetable delivery services?",
      answer: "VegHigh stands out for our commitment to freshness, competitive pricing, reliable vegetable delivery, and excellent customer service. We source fresh vegetables directly from farmers, offer flexible delivery options, and maintain strict quality standards. Our focus on fresh vegetable delivery with superior customer experience sets us apart in the market.",
      category: "business",
      keywords: ["best vegetable delivery", "fresh vegetable delivery service", "vegetable delivery comparison", "fresh produce delivery", "vegetable delivery benefits"]
    }
  ];

  const categories = [
    { id: "all", name: "All Questions", count: faqData.length },
    { id: "ordering", name: "Ordering", count: faqData.filter(item => item.category === "ordering").length },
    { id: "delivery", name: "Delivery", count: faqData.filter(item => item.category === "delivery").length },
    { id: "quality", name: "Product Quality", count: faqData.filter(item => item.category === "quality").length },
    { id: "pricing", name: "Pricing & Payment", count: faqData.filter(item => item.category === "pricing").length },
    { id: "support", name: "Customer Support", count: faqData.filter(item => item.category === "support").length },
    { id: "business", name: "About Us", count: faqData.filter(item => item.category === "business").length }
  ];

  const filteredFAQs = faqData
    .filter(item => activeCategory === "all" || item.category === activeCategory)
    .filter(item => 
      searchTerm === "" || 
      item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.keywords.some(keyword => keyword.toLowerCase().includes(searchTerm.toLowerCase()))
    );

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <section className="py-20 bg-secondary/30">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Frequently Asked Questions - Fresh Vegetable Delivery
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Find answers to common questions about VegHigh's fresh vegetable delivery service, 
            online vegetable ordering, delivery timings, and customer support. Get all your 
            vegetable delivery queries answered here.
          </p>
          <div className="mt-4 text-sm text-gray-600">
            <p>Popular searches: fresh vegetable delivery, online vegetable store, vegetable delivery near me, organic vegetables, same day vegetable delivery</p>
          </div>
        </div>

        {/* Search and Category Filter */}
        <div className="mb-12">
          {/* Search Bar */}
          <div className="mb-8">
            <div className="max-w-2xl mx-auto">
              <input
                type="text"
                placeholder="Search for vegetable delivery questions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-6 py-4 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-fresh-green focus:border-transparent text-lg"
              />
            </div>
          </div>
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? "bg-gradient-to-r from-fresh-green to-fresh-orange text-white shadow-lg shadow-fresh-green/30"
                    : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-200"
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>

        {/* FAQ Items */}
        <div className="max-w-4xl mx-auto">
          {filteredFAQs.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-gray-500 text-lg mb-4">
                No questions found matching your search.
              </div>
              <button
                onClick={() => {
                  setSearchTerm("");
                  setActiveCategory("all");
                }}
                className="text-fresh-green hover:text-fresh-orange font-medium"
              >
                View all questions
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {filteredFAQs.map((item, index) => (
                <article
                  key={index}
                  className="bg-white rounded-2xl shadow-card overflow-hidden transition-all duration-300 hover:shadow-lg"
                  itemScope
                  itemType="https://schema.org/Question"
                >
                  <button
                    onClick={() => toggleItem(index)}
                    className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                  >
                    <h3 
                      className="text-lg font-semibold text-gray-900 pr-4"
                      itemProp="name"
                    >
                      {item.question}
                    </h3>
                    <div className="flex-shrink-0">
                      <svg
                        className={`w-6 h-6 text-gray-500 transition-transform duration-300 ${
                          openItems.includes(index) ? "rotate-180" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                  </button>
                  
                  {openItems.includes(index) && (
                    <div 
                      className="px-6 pb-5"
                      itemScope
                      itemType="https://schema.org/Answer"
                    >
                      <div className="border-t border-gray-100 pt-4">
                        <p 
                          className="text-gray-700 leading-relaxed"
                          itemProp="text"
                        >
                          {item.answer}
                        </p>
                        {/* Keywords for SEO */}
                        <div className="mt-3 flex flex-wrap gap-2">
                          {item.keywords.slice(0, 3).map((keyword, keywordIndex) => (
                            <span
                              key={keywordIndex}
                              className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full"
                            >
                              {keyword}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </article>
              ))}
            </div>
          )}
        </div>

        {/* Contact Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-fresh-green to-fresh-orange rounded-3xl p-8 md:p-12 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Still Have Questions About Vegetable Delivery?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Can't find what you're looking for? Our customer support team is here to help with all your fresh vegetable delivery queries!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-primary px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-colors duration-300">
                Contact Support
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-primary transition-all duration-300">
                Call Us Now
              </button>
            </div>
          </div>
        </div>

        {/* SEO Content Section */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-card">
          <h2 className="text-2xl font-bold text-primary mb-6">
            About VegHigh Fresh Vegetable Delivery
          </h2>
          <div className="grid md:grid-cols-2 gap-8 text-gray-700">
            <div>
              <h3 className="text-lg font-semibold mb-3">Fresh Vegetable Delivery Service</h3>
              <p className="leading-relaxed mb-4">
                VegHigh is your trusted partner for fresh vegetable delivery. We specialize in delivering farm-fresh vegetables 
                directly to your doorstep, ensuring you get the highest quality produce at competitive prices. Our vegetable 
                delivery service covers most areas within the city, with flexible delivery timings to suit your schedule.
              </p>
              <p className="leading-relaxed">
                Whether you need fresh vegetables for daily cooking or bulk orders for special occasions, our online vegetable 
                store offers a wide variety of fresh produce including organic vegetables, seasonal vegetables, and exotic vegetables.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3">Why Choose VegHigh for Vegetable Delivery?</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-fresh-green mr-2">✓</span>
                  <span>Same-day vegetable delivery for orders placed before 2 PM</span>
                </li>
                <li className="flex items-start">
                  <span className="text-fresh-green mr-2">✓</span>
                  <span>Fresh vegetables sourced directly from local farmers</span>
                </li>
                <li className="flex items-start">
                  <span className="text-fresh-green mr-2">✓</span>
                  <span>Competitive vegetable prices with no hidden charges</span>
                </li>
                <li className="flex items-start">
                  <span className="text-fresh-green mr-2">✓</span>
                  <span>Quality guarantee with replacement or refund policy</span>
                </li>
                <li className="flex items-start">
                  <span className="text-fresh-green mr-2">✓</span>
                  <span>Multiple payment options including cash on delivery</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ; 