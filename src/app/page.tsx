import { Logo } from '@/components/shared/Logo';
import { ArrowRight, ShieldCheck, Truck, Clock, MapPin } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="border-b bg-white sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Logo />
          <nav className="hidden md:flex gap-8 items-center">
            <a href="#" className="text-sm font-medium hover:text-primary">How it works</a>
            <a href="#" className="text-sm font-medium hover:text-primary">For Providers</a>
            <button className="text-sm font-medium text-primary border border-primary px-4 py-2 rounded-lg hover:bg-primary/5 transition-colors">
              Login
            </button>
            <button className="text-sm font-medium bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors">
              Get Started
            </button>
          </nav>
        </div>
      </header>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-white py-20 overflow-hidden">
          <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-5xl md:text-6xl font-display font-extrabold text-primary leading-tight">
                Move with <span className="text-accent underline decoration-4 underline-offset-8">Trust</span> across Kenya.
              </h1>
              <p className="text-lg text-foreground/80 max-w-lg leading-relaxed">
                The first marketplace for relocation services with escrow-protected M-Pesa payments and verified professionals. Your peace of mind is our priority.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button className="bg-primary text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:translate-y-[-2px] transition-all shadow-lg shadow-primary/20">
                  Plan my move <ArrowRight className="w-5 h-5" />
                </button>
                <button className="bg-white text-primary border-2 border-primary/10 px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-primary/5 transition-all">
                  Browse services
                </button>
              </div>
              <div className="flex items-center gap-6 pt-4 grayscale opacity-60">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-verified" />
                  <span className="text-sm font-semibold">Verified Providers</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-semibold">M-Pesa Escrow</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-primary/5 rounded-3xl relative overflow-hidden flex items-center justify-center">
                 <Truck className="w-32 h-32 text-primary/20" />
                 {/* Placeholder for an illustration/image */}
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-primary/5 max-w-xs animate-bounce-subtle">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-verified/20 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-verified" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-foreground/50">LATEST MOVE</p>
                    <p className="font-bold text-primary">Nairobi → Mombasa</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Value Proposition */}
        <section className="bg-background py-24">
          <div className="container mx-auto px-4 text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-4">Why SmartMoveKE?</h2>
            <p className="text-foreground/60 max-w-2xl mx-auto">We're changing how Kenyans relocate by building trust into every step of the process.</p>
          </div>
          <div className="container mx-auto px-4 grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl border border-primary/5 hover:shadow-xl transition-all group">
              <div className="w-14 h-14 bg-primary/5 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all">
                <ShieldCheck className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Escrow Protected</h3>
              <p className="text-foreground/70">Payment is held securely and only released when you confirm the job is done with your unique PIN.</p>
            </div>
            <div className="bg-white p-8 rounded-3xl border border-primary/5 hover:shadow-xl transition-all group">
              <div className="w-14 h-14 bg-accent/5 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-primary transition-all">
                <Truck className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Verified Pros</h3>
              <p className="text-foreground/70">Every provider undergoes rigorous business, vehicle, and crew verification before joining the platform.</p>
            </div>
            <div className="bg-white p-8 rounded-3xl border border-primary/5 hover:shadow-xl transition-all group">
              <div className="w-14 h-14 bg-verified/5 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-verified group-hover:text-white transition-all">
                <Clock className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Real-time Bidding</h3>
              <p className="text-foreground/70">Compare multiple quotes from different movers within minutes and choose the one that fits your budget.</p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-primary text-white/80 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 border-b border-white/10 pb-12 mb-12">
            <Logo />
            <div className="flex gap-8 text-sm">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Contact Us</a>
            </div>
          </div>
          <div className="text-center text-xs opacity-50">
            &copy; {new Date().getFullYear()} SmartMoveKE. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
