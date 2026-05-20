import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Coffee,
  Heart,
  Send,
  ChevronRight,
  Copy,
  Check,
  Menu,
  X,
  Github,
  Twitter,
  Globe,
  FacebookIcon,
  Instagram,
} from "lucide-react";
import { cn } from "./lib/utils";
import * as Content from "./content";
import {
  // Marquee,
  ShimmerButton,
  BorderBeam,
  NumberTicker,
  // Particles,
  // BentoGrid,
  // BentoCard,
} from "./components/MagicUI";
import { Marquee } from "./components/ui/marquee";
import { BentoGrid, BentoCard } from "./components/ui/bento-grid";
import { Particles } from "./components/ui/particles";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./components/ui/accordion";
import { KineticText } from "./components/ui/kinetic-text";
import { ShineBorder } from "./components/ui/shine-border";
import { MagicCard } from "./components/ui/magic-card";
import { AuroraText } from "./components/ui/aurora-text";
import { AnimatedShinyText } from "./components/ui/animated-shiny-text";
import { InteractiveGridPattern } from "./components/ui/interactive-grid-pattern";
import { LightRays } from "./components/ui/light-rays";
import { AnimatedGridPattern } from "./components/ui/animated-grid-pattern";
import { FlickeringGrid } from "./components/ui/flickering-grid";
import { ShinyButton } from "./components/ui/shiny-button";
import { ScrollProgress } from "./components/ui/scroll-progress";
import {
  Confetti,
  ConfettiButton,
  type ConfettiRef,
} from "./components/ui/confetti";
import { InstagramLogoIcon } from "@radix-ui/react-icons";

export default function App() {
  const [amount, setAmount] = useState("");
  const [note, setNote] = useState("");
  const [qrUrl, setQrUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [congratulations, setCongratulations] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleGenerateQR = () => {
    if (!amount) return;
    setLoading(true);

    // VietQR format: https://img.vietqr.io/image/{BANK_ID}-{ACCOUNT_NO}-{TEMPLATE}.png?amount={amount}&addInfo={addInfo}&accountName={accountName}
    const info = encodeURIComponent(note || "Nuoi An Donation");
    const name = encodeURIComponent(Content.BANK_CONFIG.ACCOUNT_NAME);
    const url = `https://img.vietqr.io/image/${Content.BANK_CONFIG.BANK_ID}-${Content.BANK_CONFIG.ACCOUNT_NO}-${Content.BANK_CONFIG.TEMPLATE}.png?amount=${amount}&addInfo=${info}&accountName=${name}`;

    // Simulate loading for better UX
    setTimeout(() => {
      setQrUrl(url);
      setLoading(false);
      setCongratulations(true);
    }, 800);
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const scrollToDonate = () => {
    const element = document.getElementById("donate");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen font-sans selection:bg-brand-coral/30">
      {/* Background Decorations */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand-peach/20 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-brand-coral/10 blur-[140px] rounded-full" />
        <div
          className="absolute top-[20%] right-[5%] w-[30%] h-[30%] bg-purple-200/20 blur-[100px] rounded-full animate-pulse"
          style={{ animationDelay: "2s" }}
        />
      </div>

      {/* Navbar */}
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
          isScrolled ? "glass border-b border-white/20 py-3" : "bg-transparent",
        )}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2 text-xl font-bold gradient-text tracking-tighter">
            <span>{Content.NAVBAR.logo}</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a
              href="#about"
              className="text-sm font-medium text-slate-600 hover:text-brand-coral transition-colors"
            >
              Về Nuôi An
            </a>
            <a
              href="#why"
              className="text-sm font-medium text-slate-600 hover:text-brand-coral transition-colors"
            >
              Lý do
            </a>
            <a
              href="#faq"
              className="text-sm font-medium text-slate-600 hover:text-brand-coral transition-colors"
            >
              Hỏi đáp
            </a>
            <ShimmerButton
              onClick={scrollToDonate}
              className="px-6 h-10 text-sm bg-brand-coral border-none text-white shadow-lg hover:shadow-brand-coral/20"
            >
              {Content.NAVBAR.cta}
            </ShimmerButton>
          </div>

          <button
            className="md:hidden p-2 text-slate-600"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 glass pt-24 px-6 md:hidden"
          >
            <div className="flex flex-col gap-6 items-center">
              <a
                href="#about"
                onClick={() => setMobileMenuOpen(false)}
                className="text-xl font-medium"
              >
                Về Nuôi An
              </a>
              <a
                href="#why"
                onClick={() => setMobileMenuOpen(false)}
                className="text-xl font-medium"
              >
                Lý do
              </a>
              <a
                href="#faq"
                onClick={() => setMobileMenuOpen(false)}
                className="text-xl font-medium"
              >
                Hỏi đáp
              </a>
              <button
                onClick={() => {
                  scrollToDonate();
                  setMobileMenuOpen(false);
                }}
                className="w-full h-14 rounded-2xl bg-brand-coral text-white font-bold text-lg"
              >
                Ủng hộ ngay
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <ScrollProgress className="top-[65px]" />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden">
        <Particles
          quantity={100}
          className="absolute inset-0"
          color="#ff6a88"
        />
        <InteractiveGridPattern
          className={cn(
            "opacity-50",
            "[mask-image:radial-gradient(800px_circle_at_center,white,transparent)]",
            " inset-y-[-4%] h-[200%] w-[105%] skew-y-6",
          )}
          width={40}
          height={40}
          squares={[80, 80]}
          squaresClassName="hover:fill-orange-500"
        />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border-white/40 mb-8"
          >
            <div
              className={cn(
                "py-1 px-2 rounded-full border border-black/5 bg-neutral-50 transition-all ease-in hover:cursor-pointer hover:bg-neutral-100 ",
              )}
            >
              <AnimatedShinyText className="text-brand-coral">
                {Content.HERO.badge}
              </AnimatedShinyText>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8"
          >
            <KineticText
              class="font-medium cursor-default"
              text={Content.HERO.heading1}
            />
            <AuroraText>{Content.HERO.heading2}</AuroraText>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-slate-600 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            {Content.HERO.subheading}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <ShimmerButton
              onClick={scrollToDonate}
              className="w-full sm:w-auto h-14 px-10 text-lg bg-brand-coral border-none text-white shadow-xl"
            >
              {Content.HERO.ctaPrimary}
            </ShimmerButton>
            <button
              onClick={() =>
                document
                  .getElementById("about")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="w-full sm:w-auto h-14 px-10 text-lg font-medium text-slate-600 hover:text-brand-coral transition-colors flex items-center justify-center gap-2"
            >
              {Content.HERO.ctaSecondary}
              <ChevronRight className="w-5 h-5" />
            </button>
          </motion.div>
        </div>

        {/* Floating Emojis */}
        <div
          className="absolute top-1/4 left-10 text-4xl animate-bounce hidden lg:block"
          style={{ animationDuration: "3s" }}
        >
          ☕
        </div>
        <div
          className="absolute top-1/3 right-10 text-4xl animate-bounce hidden lg:block"
          style={{ animationDuration: "4s", animationDelay: "1s" }}
        >
          🌱
        </div>
        <div
          className="absolute bottom-1/4 left-20 text-4xl animate-bounce hidden lg:block"
          style={{ animationDuration: "2.5s", animationDelay: "0.5s" }}
        >
          💛
        </div>
        <div
          className="absolute bottom-1/3 right-20 text-4xl animate-bounce hidden lg:block"
          style={{ animationDuration: "3.5s", animationDelay: "1.5s" }}
        >
          ✨
        </div>
      </section>

      {/* Marquee Strip */}
      <section className="py-4 glass border-y border-white/20 relative z-10">
        <Marquee pauseOnHover className="[--duration:20s]">
          {Content.MARQUEE_ITEMS.map((item, idx) => (
            <div key={idx} className="flex items-center gap-2 mx-4">
              <span className="text-lg font-bold text-slate-800 uppercase tracking-tighter whitespace-nowrap">
                {item}
              </span>
              <span className="w-2 h-2 rounded-full bg-brand-coral" />
            </div>
          ))}
        </Marquee>
      </section>

      {/* What is Nuôi An Section */}
      <section id="about" className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-8 tracking-tight">
              {Content.ABOUT.title}
            </h2>
            <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
              {Content.ABOUT.description.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <div className="relative w-80 h-96">
              <div className="absolute inset-0 -rotate-6 rounded-3xl bg-brand-peach/10 border-2 border-dashed border-brand-coral" />
              <div className="absolute inset-0 glass rounded-3xl p-8 flex flex-col items-center justify-center text-center shadow-2xl">
                <div className="w-40 h-40 z-10 bg-gradient-to-tr from-brand-peach to-brand-coral rounded-full flex items-center justify-center text-8xl mb-8 shadow-xl">
                  👨‍💻
                </div>
                <h3 className="text-2xl z-10 font-bold text-slate-900 mb-2">
                  An là ai?
                </h3>
                <p className="text-slate-600 z-10">
                  Một con người bằng xương bằng thịt, đang gõ code và mỉm cười
                  với bạn.
                </p>
                <div className="mt-8 flex gap-3 z-10">
                  <div className="w-8 h-8 rounded-lg glass flex items-center justify-center text-brand-coral border-brand-coral/20 border">
                    <Coffee className="w-4 h-4" />
                  </div>
                  <div className="w-8 h-8 rounded-lg glass flex items-center justify-center text-brand-coral border-brand-coral/20 border">
                    <Send className="w-4 h-4" />
                  </div>
                  <div className="w-8 h-8 rounded-lg glass flex items-center justify-center text-brand-coral border-brand-coral/20 border">
                    <Heart className="w-4 h-4" />
                  </div>
                </div>
                <LightRays color="#faa9a3" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Support Section */}
      <section id="why" className="py-24 px-6 bg-slate-50/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-slate-900 mb-4 tracking-tight uppercase tracking-[0.1em]">
              Tại sao lại ủng hộ?
            </h2>
            <p className="text-slate-600 text-lg">
              Những lý do hoàn toàn thật lòng (và hơi thực tế).
            </p>
          </div>

          <BentoGrid>
            {Content.FEATURES.map((feature, idx) => (
              <BentoCard
                key={idx}
                name={feature.title}
                description={feature.description}
                Icon={feature.icon}
                className={feature.classname}
                background={
                  <AnimatedGridPattern
                    numSquares={30}
                    maxOpacity={0.1}
                    duration={idx === 1 || idx === 4 ? 0.8 : 1.5}
                    repeatDelay={1}
                    squareColor={
                      idx === 0
                        ? "orange"
                        : idx === 2
                          ? "red"
                          : idx === 3
                            ? "amber"
                            : "yellow"
                    }
                    className={cn(
                      "mask-[radial-gradient(500px_circle_at_center,white,transparent)]",
                      "inset-x-0 inset-y-[-30%] h-[200%]",
                      idx === 1 || idx === 4 ? " skew-y-12" : "-skew-y-12",
                    )}
                  />
                }
              />
            ))}
          </BentoGrid>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {Content.STATS.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <div className="text-5xl md:text-6xl font-black text-brand-coral mb-4 font-mono">
                <NumberTicker value={stat.value} />
                <span className="text-3xl ml-1">{stat.suffix}</span>
              </div>
              <p className="text-xl font-medium text-slate-600">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Donate Section */}
      <section id="donate" className="py-24 px-6 relative">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-slate-900 mb-4 tracking-tight uppercase tracking-[0.1em]">
              {Content.DONATE_SECTION.title}
            </h2>
            <p className="text-slate-600 text-lg">
              Sự tử tế của bạn bắt đầu từ đây.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="glass rounded-xl overflow-hidden p-8 md:p-12 shadow-2xl relative border-white/40">
              <ShineBorder shineColor={["#ff8000", "#FE8FB5", "#FFBE7B"]} />
              <div className="grid md:grid-cols-2 gap-12 items-start">
                {/* Inputs */}
                <div className="space-y-8">
                  <div className="space-y-3">
                    <label className="text-sm font-bold text-slate-700 uppercase tracking-wider block ml-2">
                      {Content.DONATE_SECTION.inputLabel}
                    </label>
                    <input
                      type="number"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      placeholder={Content.DONATE_SECTION.inputPlaceholder}
                      className="w-full h-16 px-6 rounded-2xl bg-white border-2 border-slate-100 focus:border-brand-coral outline-none text-xl font-bold transition-all placeholder:text-slate-300"
                    />
                  </div>

                  <div className="space-y-3">
                    <label className="text-sm font-bold text-slate-700 uppercase tracking-wider block ml-2">
                      {Content.DONATE_SECTION.noteLabel}
                    </label>
                    <textarea
                      value={note}
                      onChange={(e) => setNote(e.target.value)}
                      placeholder={Content.DONATE_SECTION.notePlaceholder}
                      className="w-full h-32 p-6 rounded-2xl bg-white border-2 border-slate-100 focus:border-brand-coral outline-none text-lg transition-all placeholder:text-slate-300 resize-none"
                    />
                  </div>
                  <ShimmerButton
                    onClick={handleGenerateQR}
                    className="w-full h-16 text-xl bg-brand-coral border-none text-white shadow-xl shadow-brand-coral/20"
                  >
                    {Content.DONATE_SECTION.ctaButton}
                  </ShimmerButton>
                  {congratulations && (
                    <ConfettiButton className="w-full h-14 rounded-xl text-xl bg-brand-coral border-none text-white shadow-xl">
                      Thankiu Sô mớt 🎉
                    </ConfettiButton>
                  )}

                  <p className="text-center text-sm text-slate-500 flex items-center justify-center gap-2 italic">
                    {Content.DONATE_SECTION.helperText}
                  </p>
                </div>

                {/* QR Display */}
                <div className="flex flex-col items-center justify-center min-h-[400px] gap-6">
                  <MagicCard
                    mode="orb"
                    glowFrom={"#ff6b6bc4"}
                    glowTo={"#ff8000cb"}
                    className="rounded-3xl"
                  >
                    <div className="relative w-full aspect-square max-w-[320px] glass rounded-3xl border-slate-200 border-2 overflow-hidden flex items-center justify-center">
                      {loading ? (
                        <div className="flex flex-col items-center gap-4">
                          <div className="w-12 h-12 border-4 border-brand-coral/20 border-t-brand-coral rounded-full animate-spin" />
                          <p className="text-slate-400 font-medium">
                            Đang tạo mã...
                          </p>
                        </div>
                      ) : qrUrl ? (
                        <motion.img
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          src={qrUrl}
                          alt="VietQR code"
                          className="w-full h-full object-contain p-4"
                        />
                      ) : (
                        <div className="text-center p-8 space-y-4">
                          <div className="text-6xl animate-bounce">☕</div>
                          <p className="text-slate-400 font-medium leading-relaxed">
                            {Content.DONATE_SECTION.defaultText}
                          </p>
                        </div>
                      )}
                    </div>
                  </MagicCard>

                  {qrUrl && !loading && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="w-full space-y-4"
                    >
                      <MagicCard
                        mode="orb"
                        glowFrom={"#ff6b6bc4"}
                        glowTo={"#ff8000cb"}
                        className="rounded-3xl"
                      >
                        <div className="glass rounded-xl p-4 flex items-center justify-between border-slate-100 border bg-white">
                          <div className="space-y-1">
                            <p className="text-xs font-bold text-slate-400 uppercase">
                              Số tiền
                            </p>
                            <p className="text-xl font-bold text-brand-coral">
                              {Number(amount).toLocaleString("vi-VN")} đ
                            </p>
                          </div>
                          <div className="space-y-1 text-right">
                            <p className="text-xs font-bold text-slate-400 uppercase">
                              Ngân hàng
                            </p>
                            <p className="text-lg font-bold text-slate-700">
                              {Content.BANK_CONFIG.BANK_ID}
                            </p>
                          </div>
                        </div>
                      </MagicCard>
                      {note && (
                        <div className="group relative">
                          <button
                            onClick={() => copyToClipboard(note)}
                            className="w-full h-12 rounded-xl border border-slate-100 bg-white flex items-center justify-between px-4 hover:border-brand-coral transition-colors"
                          >
                            <span className="text-slate-600 truncate mr-4">
                              ND: {note}
                            </span>
                            {copied ? (
                              <Check className="w-4 h-4 text-green-500" />
                            ) : (
                              <Copy className="w-4 h-4 text-slate-400" />
                            )}
                          </button>
                        </div>
                      )}
                    </motion.div>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Personal Note Section */}
      <section className="py-24 px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <div className="bg-[#fffdf7] rounded-[2rem] p-10 md:p-16 shadow-xl border border-amber-100 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-brand-coral opacity-20" />
            <div className="font-serif italic text-xl md:text-2xl text-slate-700 leading-relaxed space-y-6">
              {Content.LETTER.content.split("\n\n").map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            <div className="mt-12 font-serif italic text-3xl md:text-4xl text-slate-900 border-t border-amber-100 pt-8">
              {Content.LETTER.signature}
            </div>

            {/* Subtle paper texture effect */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/old-paper.png')]" />
          </div>
        </motion.div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">
              Câu hỏi thường gặp
            </h2>
            <p className="text-slate-600">Mọi thứ bạn cần biết về Nuôi An.</p>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-4">
            {Content.FAQ_DATA.map((faq, idx) => (
              <AccordionItem
                key={idx}
                value={`item-${idx}`}
                className="border-b border-slate-100 px-4"
              >
                <AccordionTrigger className="text-lg font-bold text-slate-800 py-6 hover:no-underline hover:text-brand-coral group">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 text-lg leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Footer Banner */}
      <section className="px-6 py-12">
        <div className="max-w-7xl mx-auto">
          {/* <div className="rounded-[3rem] bg-gradient-to-r from-brand-coral to-brand-peach p-12 md:p-24 text-center text-white relative overflow-hidden shadow-2xl"> */}
          <div className="rounded-[3rem] bg-gradient-to-r from-brand-coral to-brand-peach">
            <MagicCard
              mode="orb"
              glowFrom={"#ff6b6b7a"}
              glowTo={"#ff800063"}
              className="rounded-3xl relative overflow-hidden text-center shadow-2xl py-16 px-8 md:px-24"
            >
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-[-20%] left-[-10%] w-64 h-64 bg-white rounded-full blur-3xl" />
                <div className="absolute bottom-[-20%] right-[-10%] w-96 h-96 bg-white rounded-full blur-3xl" />
              </div>

              <div className="relative z-10">
                <h2 className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-brand-coral to-brand-peach  mb-6">
                  Cảm ơn bạn đã ghé thăm 💛
                </h2>
                <p className="text-xl md:text-2xl mb-12 opacity-90 max-w-2xl mx-auto leading-relaxed">
                  Dù bạn có ủng hộ hay không — việc bạn đến đây đã là điều tuyệt
                  vời rồi.
                </p>
                <button
                  onClick={scrollToDonate}
                  className="inline-flex cursor-pointer items-center justify-center h-16 px-12 rounded-2xl bg-white text-brand-coral text-xl font-bold hover:scale-105 transition-transform shadow-xl"
                >
                  Ủng hộ An ngay
                </button>
              </div>
            </MagicCard>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-slate-100">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left space-y-2">
            <p className="text-xl font-bold gradient-text">
              {Content.NAVBAR.logo}
            </p>
            <p className="text-slate-400 font-medium">
              {Content.FOOTER.tagline}
            </p>
          </div>

          <div className="flex gap-6">
            {Content.FOOTER.links.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                className="text-slate-400 hover:text-brand-coral transition-colors"
                target={link.href.startsWith("http") ? "_blank" : undefined}
              >
                {link.label === "GitHub" && <Github />}
                {link.label === "Twitter" && <FacebookIcon />}
                {link.label === "Blog" && <Instagram />}
              </a>
            ))}
          </div>

          <div className="flex flex-col items-center md:items-end text-center md:text-right gap-2">
            <div className="text-slate-400 font-medium text-sm">
              {Content.FOOTER.copyright}
            </div>
            <span className="font-serif italic text-xl md:text-2xl text-black leading-relaxe  d">
              {Content.FOOTER.signature}
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
