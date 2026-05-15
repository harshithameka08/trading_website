import { Badge, Button, Card } from "@/src/components/UI";
import { Check, Star, Zap } from "lucide-react";
import { motion } from "motion/react";
import { cn } from "@/src/lib/utils";

export default function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: "49",
      description: "Ideal for beginner traders starting their wealth journey.",
      features: [
        "Basic Market Scanner",
        "Community Access (10 Rooms)",
        "Daily Market Insights",
        "Recorded Session Library (Core)",
        "Standard Chat Support",
      ],
      badge: "BEST FOR BEGINNERS"
    },
    {
      name: "Pro Trader",
      price: "129",
      description: "For serious traders looking for a professional edge.",
      features: [
        "AI Chart Analysis (Unlimited)",
        "Live Daily Trading Classes",
        "Strategy Library (Pro Access)",
        "Advanced Performance Journal",
        "AI Risk Analyzer Module",
        "Economic Calendar Pro",
        "Priority Discord Support",
      ],
      badge: "MOST POPULAR SYSTEM"
    },
    {
      name: "Elite",
      price: "299",
      description: "The complete ecosystem for professional market dominance.",
      features: [
        "Everything in Pro Trader",
        "1:1 Personal Mentor Coaching",
        "Exclusive Elite Whale Rooms",
        "Custom AI Strategy Development",
        "Direct API Trading Access",
        "Alpha Leak Reports",
        "Lifetime Ecosystem Updates",
      ],
      badge: "PROFESSIONAL CHOICE"
    },
  ];

  return (
    <div className="pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 space-y-6">
          <Badge>Investment Plans</Badge>
          <h1 className="text-5xl md:text-7xl font-display font-extrabold tracking-tight">Invest in Your <span className="text-primary italic">Financial Future</span></h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Choose the plan that fits your trading style. All plans include access to our core global infrastructure.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {plans.map((plan, i) => (
            <motion.div 
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-12 transition-all duration-500 flex flex-col gap-10 border-white/5 group hover:scale-105 hover:border-primary/40 hover:bg-white/8 hover:z-10 relative z-0"
            >
              {plan.badge && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary px-4 py-1.5 rounded-full text-[10px] font-bold text-bg-main shadow-xl transition-opacity duration-300 opacity-0 group-hover:opacity-100 whitespace-nowrap">
                  {plan.badge}
                </div>
              )}
              
              <div className="text-center space-y-4">
                <h3 className="text-2xl font-bold">{plan.name}</h3>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-sm font-semibold text-gray-500 uppercase tracking-widest">$</span>
                  <span className="text-6xl font-extrabold">{plan.price}</span>
                  <span className="text-gray-500 italic">/month</span>
                </div>
                <p className="text-gray-500 text-sm">{plan.description}</p>
              </div>

              <div className="space-y-4 flex-1">
                <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest border-b border-white/5 pb-2">What's included</div>
                {plan.features.map(feature => (
                  <div key={feature} className="flex gap-3 items-center text-sm font-medium">
                    <Check className="w-5 h-5 text-primary shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <Button 
                to="/signup"
                variant="secondary" 
                className={cn(
                  "w-full py-5 text-sm uppercase tracking-widest transition-all duration-300",
                  "group-hover:bg-primary group-hover:text-bg-main group-hover:border-transparent group-hover:shadow-[0_0_20px_rgba(0,229,255,0.4)]"
                )}
              >
                Deploy {plan.name} Plan
              </Button>
            </motion.div>
          ))}
        </div>

        <Card className="max-w-4xl mx-auto p-12 text-center space-y-8 bg-linear-to-r from-bg-secondary to-bg-main">
           <Zap className="w-12 h-12 text-primary mx-auto animate-pulse" />
           <h2 className="text-3xl font-display font-bold">Need a Enterprise Solution?</h2>
           <p className="text-gray-400">We offer custom liquidity solutions, API white-labeling, and institutional trading desks for firms and high-capital traders.</p>
           <Button to="/contact" variant="neon-border" size="lg" className="mx-auto">Contact Institutional Desk</Button>
        </Card>

        <section className="mt-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-display font-bold">Frequently Asked Questions</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              { q: 'Can I switch plans anytime?', a: 'Yes, you can upgrade or downgrade your plan at any time through your dashboard settings. Pro-rated charges will apply.' },
              { q: 'Is there a free trial?', a: 'We offer a 7-day full access demo for a small validation fee, which is fully refundable upon selecting any monthly plan.' },
              { q: 'What payment methods do you accept?', a: 'We accept all major Credit Cards, Stripe, Apple Pay, and most major Cryptocurrencies (USDT, BTC, ETH).' },
              { q: 'Do you offer a refund policy?', a: 'Yes, we have a 14-day "No Edge" guarantee. If you are not satisfied with the platform results, we provide a full refund.' },
            ].map((faq, i) => (
              <div key={i} className="glass-card p-8 border-white/5">
                <h4 className="font-bold mb-4 flex gap-3 text-primary">
                   <div className="w-6 h-6 rounded-lg bg-primary/10 flex items-center justify-center text-[10px]">Q</div>
                   {faq.q}
                </h4>
                <p className="text-gray-500 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
