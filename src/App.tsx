/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowRight, 
  BarChart3, 
  CheckCircle2, 
  Globe, 
  Menu, 
  MessageSquare, 
  PhoneCall, 
  Rocket, 
  ShieldCheck, 
  Users, 
  X,
  Mail,
  MapPin,
  Linkedin,
  Twitter,
  Facebook
} from 'lucide-react';
import { useState, useEffect } from 'react';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="w-10 h-10 bg-brand-green flex items-center justify-center rounded-lg group-hover:rotate-12 transition-transform">
            <Rocket className="text-brand-yellow w-6 h-6" />
          </div>
          <span className="font-display font-bold text-2xl tracking-tighter text-brand-green">
            KIMUCO<span className="text-brand-yellow">LTD</span>
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm font-medium hover:text-brand-yellow transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-yellow transition-all group-hover:w-full"></span>
            </a>
          ))}
          <button className="bg-brand-green text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-brand-green/90 transition-all shadow-lg hover:shadow-brand-green/20">
            Get a Quote
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white border-t border-gray-100 p-6 flex flex-col gap-4 md:hidden shadow-xl"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-lg font-semibold py-2" 
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <button className="bg-brand-green text-white w-full py-4 rounded-xl font-bold">
              Get Started
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const SectionHeading = ({ subtitle, title, centered = false }: { subtitle: string, title: string, centered?: boolean }) => (
  <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
    <motion.span 
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-brand-yellow font-display font-bold uppercase tracking-widest text-xs"
    >
      {subtitle}
    </motion.span>
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
      viewport={{ once: true }}
      className="text-3xl md:text-5xl font-display font-bold mt-2 text-brand-green leading-tight"
    >
      {title}
    </motion.h2>
  </div>
);

// --- Main App ---

export default function App() {
  return (
    <div className="min-h-screen bg-neutral-50 selection:bg-brand-yellow selection:text-brand-green">
      <Navbar />

      {/* Hero Section */}
      <header className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-brand-green text-white">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_120%,rgba(250,204,21,0.3),transparent)]"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/20 rounded-full animate-[pulse_8s_infinite]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full mb-6">
              <span className="w-2 h-2 bg-brand-yellow rounded-full animate-pulse"></span>
              <span className="text-xs font-bold tracking-wider uppercase">Trusted by 50+ Enterprises</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-bold leading-[1.1] mb-6">
              Scaling Excellence Through <span className="text-brand-yellow">Strategic</span> Digital Solutions
            </h1>
            <p className="text-lg md:text-xl text-white/80 mb-8 max-w-xl leading-relaxed">
              KIMUCO LTD empowers businesses with elite consultancy, robust technology scaffolding, 
              and results-driven digital strategies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-brand-yellow text-brand-green px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-transform shadow-xl flex items-center justify-center gap-2">
                Launch Your Project <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border border-white/30 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-colors flex items-center justify-center gap-2">
                View Case Studies
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="bg-gradient-to-br from-brand-lime to-brand-green p-1 rounded-3xl shadow-2xl relative">
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1000&auto=format&fit=crop" 
                alt="Digital Strategy" 
                className="rounded-[22px] w-full object-cover aspect-square grayscale-[0.2] contrast-[1.1]"
              />
              <div className="absolute -bottom-10 -left-10 bg-white p-6 rounded-2xl shadow-2xl text-brand-green max-w-[240px]">
                <div className="flex gap-1 text-brand-yellow mb-2">
                  {[...Array(5)].map((_, i) => <CheckCircle2 key={i} className="w-4 h-4 fill-current" />)}
                </div>
                <p className="text-sm font-bold leading-tight">"The most professional transition we've ever automated."</p>
                <p className="text-[10px] uppercase tracking-wider mt-2 opacity-60">— Apex Global CEO</p>
              </div>
            </div>
          </motion.div>
        </div>
      </header>

      {/* Stats Section */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: 'Successful Projects', value: '150+', icon: Rocket },
            { label: 'Client Satisfaction', value: '98%', icon: ShieldCheck },
            { label: 'Expert Consultants', value: '25+', icon: Users },
            { label: 'Countries Served', value: '12', icon: Globe },
          ].map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-display font-bold text-brand-green mb-1">{stat.value}</div>
              <div className="text-xs uppercase tracking-widest text-brand-green/60 font-semibold">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 max-w-7xl mx-auto px-6 text-brand-green">
        <SectionHeading 
          subtitle="Our Expertise" 
          title="Solutions Crafted for Future-Proof Growth" 
          centered 
        />
        <div className="grid md:grid-cols-3 gap-8 text-brand-green">
          {[
            {
              title: "Strategic Consultancy",
              desc: "Tailored business roadmaps that align your operational strengths with market opportunities.",
              icon: BarChart3,
              color: "bg-blue-50 text-blue-600"
            },
            {
              title: "Digital Engineering",
              desc: "Building the custom software and cloud infrastructure that powers your competitive edge.",
              icon: Rocket,
              color: "bg-emerald-50 text-emerald-600"
            },
            {
              title: "Project Management",
              desc: "Agile, transparent execution that ensures milestones are hit on time and under budget.",
              icon: CheckCircle2,
              color: "bg-orange-50 text-orange-600"
            },
            {
              title: "Cyber Resilience",
              desc: "Protecting your most valuable digital assets with military-grade security frameworks.",
              icon: ShieldCheck,
              color: "bg-purple-50 text-purple-600"
            },
            {
              title: "AI Integration",
              desc: "Leveraging large language models and machine learning to automate complex workflows.",
              icon: MessageSquare,
              color: "bg-amber-50 text-amber-600"
            },
            {
              title: "Global Scale",
              desc: "Expanding your digital presence across borders with localized optimization.",
              icon: Globe,
              color: "bg-cyan-50 text-cyan-600"
            },
          ].map((service, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              viewport={{ once: true }}
              className="p-8 bg-white border border-gray-100 rounded-3xl hover:shadow-2xl hover:shadow-brand-green/5 transition-all group"
            >
              <div className={`w-14 h-14 rounded-2xl ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <service.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-display font-bold mb-3 text-brand-green">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed text-sm mb-6">{service.desc}</p>
              <a href="#" className="inline-flex items-center gap-2 text-brand-green font-bold text-xs uppercase tracking-widest hover:text-brand-yellow transition-colors">
                Learn More <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-24 bg-neutral-100">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading 
            subtitle="Case Studies" 
            title="Real Impact, Measured in Results" 
            centered 
          />
          <div className="grid md:grid-cols-2 gap-12">
            {[
              {
                title: "Digital Overhaul for FinTech Giant",
                tag: "Digital Solutions",
                img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop",
                stat: "40% Increase in efficiency"
              },
              {
                title: "Global Supply Chain Automation",
                tag: "Consultancy",
                img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1000&auto=format&fit=crop",
                stat: "$2.4M Saved Annually"
              }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
              >
                <div className="overflow-hidden rounded-3xl mb-6 relative">
                  <img src={item.img} alt={item.title} className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute top-6 left-6 bg-brand-yellow text-brand-green px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                    {item.tag}
                  </div>
                  <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-black/80 to-transparent text-white">
                    <p className="text-brand-yellow font-bold text-2xl">{item.stat}</p>
                  </div>
                </div>
                <h3 className="text-2xl font-display font-bold text-brand-green hover:text-brand-yellow transition-colors">{item.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="why-us" className="py-24 bg-brand-green text-white overflow-hidden relative">
        <div className="absolute right-0 top-0 w-1/2 h-full bg-brand-yellow/5 skew-x-12 translate-x-32"></div>
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <SectionHeading 
              subtitle="Why Choose Us" 
              title="A Partner You Can Rely On for Serious Business" 
            />
            <div className="space-y-6">
              {[
                { title: "24/7 Priority Support", desc: "Our team is always on standby for critical mission updates." },
                { title: "Certified Expert Collective", desc: "Top 1% industry professionals dedicated to your specific vertical." },
                { title: "Transparent Pricing", desc: "No hidden fees. Value-based delivery that respects your bottom line." },
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="flex gap-4"
                >
                  <div className="w-6 h-6 rounded-full bg-brand-yellow/20 flex-shrink-0 flex items-center justify-center mt-1">
                    <CheckCircle2 className="w-4 h-4 text-brand-yellow" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">{item.title}</h4>
                    <p className="text-white/60 text-sm">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            <button className="mt-10 bg-white text-brand-green px-8 py-4 rounded-xl font-bold flex items-center gap-2 hover:bg-brand-yellow hover:text-brand-green transition-all">
              Schedule a Consultation <PhoneCall className="w-5 h-5" />
            </button>
          </div>
          <div className="relative">
             <div className="aspect-square bg-white/5 rounded-full absolute -top-20 -right-20 w-[400px] h-[400px] blur-3xl"></div>
             <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1000&auto=format&fit=crop" 
              alt="Collaboration" 
              className="rounded-3xl shadow-2xl relative z-10"
             />
             <div className="absolute -bottom-6 -right-6 bg-brand-yellow text-brand-green p-6 rounded-2xl z-20 shadow-2xl max-w-[200px]">
                <div className="text-3xl font-bold mb-1">99%</div>
                <p className="text-xs font-bold leading-tight uppercase tracking-widest opacity-80">Retention Rate for Long-term Clients</p>
             </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading subtitle="Success Stories" title="Voices of Transformation" centered />
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                text: "KIMUCO LTD didn't just build our app; they rebuilt our entire business logic. The consulting phase was the most valuable investment we've made in five years.",
                author: "Sarah Jenkins",
                role: "CTO, Stellar Logistics",
                img: "https://i.pravatar.cc/150?u=sarah"
              },
              {
                text: "Professionalism at its peak. Their digital engineering team delivered a complex cloud migration ahead of schedule with zero downtime.",
                author: "David Chen",
                role: "Director of Ops, FinCorp",
                img: "https://i.pravatar.cc/150?u=david"
              },
              {
                text: "The strategic roadmap they provided became our blueprint for a successful Series B round. Their insights are sharp, data-driven, and actionable.",
                author: "Elena Rodriguez",
                role: "Founder, Bloom AI",
                img: "https://i.pravatar.cc/150?u=elena"
              }
            ].map((testimonial, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-8 rounded-3xl bg-neutral-50 border border-gray-100 italic text-gray-600"
              >
                <div className="flex gap-1 text-brand-yellow mb-6">
                  {[...Array(5)].map((_, i) => <CheckCircle2 key={i} className="w-4 h-4 fill-current" />)}
                </div>
                <p className="mb-6 leading-relaxed">"{testimonial.text}"</p>
                <div className="flex items-center gap-4 pt-6 border-t border-gray-200 non-italic">
                  <img src={testimonial.img} alt={testimonial.author} className="w-12 h-12 rounded-full" />
                  <div>
                    <h4 className="font-bold text-brand-green leading-none">{testimonial.author}</h4>
                    <p className="text-[10px] uppercase tracking-wider text-gray-400 mt-1">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact & Form Section */}
      <section id="contact" className="py-24 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20">
        <div>
          <SectionHeading subtitle="Get In Touch" title="Let's Build Something Exceptional" />
          <p className="text-gray-600 mb-8 max-w-md">
            Whether you're looking for a full digital transformation or strategic advice on a specific pillar, our experts are ready to listen.
          </p>
          <div className="space-y-8">
            <div className="flex gap-4 items-start">
              <div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-brand-green">Email Us</h4>
                <p className="text-sm text-gray-500">strategic@kimuco.ltd</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="w-12 h-12 bg-brand-yellow/10 rounded-2xl flex items-center justify-center text-brand-green">
                <PhoneCall className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-brand-green">Direct Line</h4>
                <p className="text-sm text-gray-500">+1 (555) 098-7654</p>
              </div>
            </div>
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-white p-10 rounded-[2.5rem] shadow-2xl shadow-brand-green/10 border border-gray-100"
        >
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 ml-1">Full Name</label>
                <input type="text" className="w-full bg-neutral-50 border border-gray-200 p-4 rounded-xl focus:border-brand-green outline-none transition-colors" placeholder="John Doe" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 ml-1">Company Email</label>
                <input type="email" className="w-full bg-neutral-50 border border-gray-200 p-4 rounded-xl focus:border-brand-green outline-none transition-colors" placeholder="john@company.com" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 ml-1">Service Interest</label>
              <select className="w-full bg-neutral-50 border border-gray-200 p-4 rounded-xl focus:border-brand-green outline-none transition-colors appearance-none">
                <option>Strategic Consultancy</option>
                <option>Digital Engineering</option>
                <option>AI & Automation</option>
                <option>Other</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 ml-1">Project Details</label>
              <textarea className="w-full bg-neutral-50 border border-gray-200 p-4 rounded-xl focus:border-brand-green outline-none transition-colors h-32" placeholder="Tell us about your goals..."></textarea>
            </div>
            <button className="w-full bg-brand-green text-white py-5 rounded-2xl font-black text-lg hover:bg-brand-green/90 transition-all shadow-xl shadow-brand-green/20">
              Submit Request
            </button>
          </form>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-24 max-w-7xl mx-auto px-6">
        <div className="bg-gradient-to-r from-brand-green to-emerald-900 rounded-[3rem] p-12 md:p-20 text-center text-white relative overflow-hidden shadow-2xl">
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-8 max-w-3xl mx-auto leading-tight">
              Ready to Redefine Your <span className="text-brand-yellow">Digital Identity?</span>
            </h2>
            <p className="text-lg text-white/70 mb-10 max-w-xl mx-auto">
              Join the ranks of high-performing enterprises who chose KIMUCO LTD as their strategic partner.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-brand-yellow text-brand-green px-10 py-5 rounded-2xl font-black text-lg hover:scale-110 transition-transform shadow-xl">
                Get Your Free Proposal
              </button>
              <button className="bg-white/10 backdrop-blur-md text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-white/20 transition-all border border-white/10">
                Book a Demo Call
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12 mb-20">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
               <div className="w-8 h-8 bg-brand-green flex items-center justify-center rounded-lg">
                <Rocket className="text-brand-yellow w-5 h-5" />
              </div>
              <span className="font-display font-bold text-xl tracking-tighter text-brand-green">
                KIMUCO<span className="text-brand-yellow">LTD</span>
              </span>
            </div>
            <p className="text-gray-500 max-w-md mb-8 leading-relaxed">
              Global expertise in strategic consultancy and digital scaffolding. 
              Helping organizations transition into the future of automated excellence.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:text-brand-green hover:border-brand-green transition-all">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-display font-bold text-brand-green mb-6 uppercase tracking-widest text-xs">Resources</h4>
            <ul className="space-y-4 text-gray-500 text-sm">
              <li><a href="#" className="hover:text-brand-green transition-colors">Digital Scaffolding</a></li>
              <li><a href="#" className="hover:text-brand-green transition-colors">Case Studies</a></li>
              <li><a href="#" className="hover:text-brand-green transition-colors">Strategy Hub</a></li>
              <li><a href="#" className="hover:text-brand-green transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-display font-bold text-brand-green mb-6 uppercase tracking-widest text-xs">Contact Us</h4>
            <ul className="space-y-4 text-gray-500 text-sm">
              <li className="flex gap-3"><Mail className="w-4 h-4 text-brand-yellow" /> hello@kimuco.ltd</li>
              <li className="flex gap-3"><PhoneCall className="w-4 h-4 text-brand-yellow" /> +1 (555) 234-5678</li>
              <li className="flex gap-3"><MapPin className="w-4 h-4 text-brand-yellow" /> 123 Tech Avenue, Silicon Valley</li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 pt-10 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400 font-medium uppercase tracking-widest">
          <p>© 2026 KIMUCO LTD. Built with strategic precision.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-brand-green transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-brand-green transition-colors">Cookie Policy</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
