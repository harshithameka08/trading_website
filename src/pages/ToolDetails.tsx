import { Badge, Button, Card } from "@/src/components/UI";
import { useParams } from "react-router-dom";
import { Cpu, Zap, Target, Shield, Layers, BarChart2, MessageSquare, Download, Share2, TrendingUp } from "lucide-react";
import { motion } from "motion/react";
import { cn } from "@/src/lib/utils";

export default function ToolDetails() {
  const { toolId } = useParams();

  const toolData = {
    scanner: {
      name: "AI Market Scanner",
      desc: "Instant multi-asset filtering for institutional footprints.",
      features: ["Auto-Pattern Drawing", "Liquidity Zone Detection", "Institutional Volume Filter"],
      icon: <Layers className="w-10 h-10" />,
      color: "text-primary"
    },
    risk: {
      name: "Neural Risk Analyzer",
      desc: "Stop-loss optimization and real-time drawdown protection.",
      features: ["Dynamic Lot Sizing", "Economic Event Awareness", "Emotional Guardrails"],
      icon: <Shield className="w-10 h-10" />,
      color: "text-cyan"
    }
  }[toolId || 'scanner'] || {
    name: "AI Analysis Tool",
    desc: "Advanced neural intelligence for financial markets.",
    features: ["Data Mapping", "Sentiment Tracking", "Edge Detection"],
    icon: <Cpu className="w-10 h-10" />,
    color: "text-primary"
  };

  return (
    <div className="pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center mb-32">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} className="space-y-8">
            <Badge className="bg-primary/5 text-primary border-primary/20 capitalize">Advanced Protocol // {toolId}</Badge>
            <h1 className="text-5xl md:text-7xl font-display font-extrabold tracking-tight">{toolData.name}</h1>
            <p className="text-gray-400 text-xl leading-relaxed">{toolData.desc}</p>
            
            <div className="grid gap-6">
               {toolData.features.map(f => (
                 <div key={f} className="flex gap-4 items-center group">
                    <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center shrink-0 group-hover:border-primary/40 transition-colors">
                       <Zap className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-lg font-bold text-gray-300">{f}</span>
                 </div>
               ))}
            </div>

            <div className="flex flex-wrap gap-6 pt-6">
               <Button size="lg" to="/signup" className="px-12 uppercase tracking-widest text-xs">Deploy Tool</Button>
               <Button variant="secondary" to="/signup" size="lg" className="px-12 uppercase tracking-widest text-xs gap-3"><Download className="w-4 h-4" /> Get Documentation</Button>
            </div>
          </motion.div>

          <div className="relative">
             <div className="absolute inset-0 bg-primary/20 blur-[150px] rounded-full animate-pulse-slow pointer-events-none" />
             <Card className="aspect-square relative z-10 flex items-center justify-center border-white/10 overflow-hidden bg-black/40">
                <div className="text-center space-y-8">
                   <div className={cn("w-32 h-32 bg-white/5 rounded-full flex items-center justify-center mx-auto border border-white/10 animate-float", toolData.color)}>
                      {toolData.icon}
                   </div>
                   <div className="space-y-2">
                      <div className="text-xs font-mono text-gray-500 uppercase tracking-widest">AUTONOMOUS_OPERATING_SYSTEM</div>
                      <div className="text-4xl font-bold font-mono tracking-tighter">01011001 01101111 01110101</div>
                   </div>
                </div>
                {/* Floating Elements */}
                <div className="absolute top-10 left-10 w-24 h-24 glass-card p-4 animate-float delay-75 shadow-lg border-white/10">
                   <BarChart2 className="text-primary w-6 h-6 mb-2" />
                   <div className="text-[10px] font-mono text-gray-500">EDGE_ID</div>
                </div>
                <div className="absolute bottom-10 right-10 w-24 h-24 glass-card p-4 animate-float-slow shadow-lg border-white/10">
                   <TrendingUp className="text-cyan w-6 h-6 mb-2" />
                   <div className="text-[10px] font-mono text-gray-500">PROB_92%</div>
                </div>
             </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
