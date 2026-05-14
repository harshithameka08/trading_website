import { Badge, Card } from "@/src/components/UI";
import { motion } from "motion/react";

export default function LegalPage({ title }: { title: string }) {
  return (
    <div className="pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <Badge>Legal Infrastructure</Badge>
          <h1 className="text-5xl font-display font-extrabold">{title}</h1>
          <p className="text-gray-500">Last Updated: May 9, 2026</p>
        </div>

        <Card className="p-12 space-y-10 border-white/5 leading-relaxed text-gray-400">
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white">1. Introduction</h2>
            <p>
              Welcome to TEAMUS 369. This document outlines our protocols regarding {title}. By accessing our ecosystem, you agree to these legal standards and operational guidelines.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white">2. Data Security & Risk</h2>
            <p>
              Trading in global financial markets involves significant risk to capital. Our AI tools provide intelligence but not financial advice. Every user is responsible for their own execution and risk management protocols.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white">3. Intellectual Property</h2>
            <p>
              All proprietary strategies, AI models, and neural network outputs remain the exclusive intellectual property of TEAMUS 369. Unauthorized replication or distribution of terminal data is strictly prohibited.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white">4. User Responsibility</h2>
            <p>
              Citizens of the ecosystem must maintain high ethical standards. Market manipulation, shadow trading, or unauthorized bot deployment will result in immediate neural-link termination without refund.
            </p>
          </section>

          <div className="pt-10 border-t border-white/5 text-[10px] font-bold text-gray-500 flex justify-between uppercase tracking-widest">
             <div>Protocol ID: LGL-369-001</div>
             <div>Status: VERIFIED</div>
          </div>
        </Card>
      </div>
    </div>
  );
}
