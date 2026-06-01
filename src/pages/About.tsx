import { ArrowUpRight, Play, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import storyMain from "@/assets/story-1.jpg";
import storySide1 from "@/assets/story-2.jpg";
import storySide2 from "@/assets/story-3.jpg";
import gatewayImg from "@/assets/who-we-are.jpg";
import turbineBg from "@/assets/turbine-background.png";
import heroHallAsset from "@/assets/about-hero-hall.jpeg.asset.json";
import gatewayTeamAsset from "@/assets/gateway-team.jpeg.asset.json";

const stats = [
  { value: "12+", label: "Years of Operation" },
  { value: "200+", label: "Engineers & Experts" },
  { value: "10GW", label: "Installed Capacity" },
  { value: "50+", label: "Projects Delivered" },
];

const timeline = [
  { year: "2012", label: "Joint Venture Founded" },
  { year: "2015", label: "First Turbine Module" },
  { year: "2018", label: "Capacity Expansion" },
  { year: "2021", label: "Digital Solutions Launch" },
  { year: "2024", label: "Regional Hub" },
];

const strategies = [
  { kicker: "Manufacturing", title: "Turbine Modules & Auxiliaries", highlight: true },
  { kicker: "Assembly", title: "Gas & Steam Turbines Systems" },
  { kicker: "Services", title: "24/7 Maintenance & Repair" },
  { kicker: "Innovation", title: "Digital Energy Solutions" },
];

const partners = [
  "SONELGAZ", "GE VERNOVA", "BAKER HUGHES", "SIEMENS", "ABB",
  "SCHNEIDER", "ENEDIS", "ALSTOM", "MITSUBISHI", "HONEYWELL",
];

const About = () => {
  return (
    <div className="min-h-screen bg-geat-dark text-primary-foreground">
      <Navbar />

      {/* HERO */}
      <section className="relative pt-28 pb-20 overflow-hidden bg-geat-dark">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${heroHallAsset.url})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-geat-dark/70 via-geat-dark/75 to-geat-dark" />
        <div className="relative z-10 section-container text-center">
          <h1 className="font-heading font-bold text-5xl lg:text-7xl text-primary-foreground mb-4">
            About Us
          </h1>
          <div className="flex items-center justify-center gap-2 text-sm text-primary-foreground/70">
            <a href="/" className="hover:text-geat-orange transition-colors">Home</a>
            <span className="text-geat-orange">/</span>
            <span>About Us</span>
          </div>
        </div>
      </section>

      {/* OUR STORY */}
      <section className="py-20 bg-geat-dark">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="text-xs font-semibold tracking-[0.3em] text-primary-foreground/60 uppercase">Our Story</span>
                <span className="h-px w-10 bg-geat-orange" />
              </div>
              <h2 className="font-heading font-bold text-3xl lg:text-5xl leading-tight mb-8 border-l-4 border-geat-orange pl-6">
                Powering Algeria's <span className="text-geat-orange">Energy Future</span> Through World-Class Engineering.
              </h2>
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img src={storyMain} alt="GEAT team collaborating" className="w-full h-[340px] object-cover" />
              </div>
            </div>

            {/* Right */}
            <div>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="relative rounded-2xl overflow-hidden h-44">
                  <img src={storySide1} alt="" className="w-full h-full object-cover" />
                  <span className="absolute top-3 left-3 bg-geat-orange text-primary-foreground text-[10px] font-semibold px-2 py-1 rounded">Tech Hub</span>
                  <span className="absolute top-3 right-3 bg-geat-blue text-primary-foreground text-[10px] font-semibold px-2 py-1 rounded">Trends</span>
                </div>
                <div className="relative rounded-2xl overflow-hidden h-44">
                  <img src={storySide2} alt="" className="w-full h-full object-cover" />
                  <span className="absolute top-3 left-3 bg-geat-orange text-primary-foreground text-[10px] font-semibold px-2 py-1 rounded">Insights</span>
                  <span className="absolute top-3 right-3 bg-geat-blue text-primary-foreground text-[10px] font-semibold px-2 py-1 rounded">News</span>
                </div>
              </div>

              <p className="text-primary-foreground/70 leading-relaxed mb-8">
                GEAT is a joint venture between Sonelgaz and GE, located in Aïn Yagout, Batna. We manufacture turbine modules and auxiliaries, assemble gas and steam turbines, develop digital solutions, and deliver world-class maintenance for Algeria's electricity generation infrastructure.
              </p>

              <div className="grid grid-cols-4 gap-4 mb-8">
                {stats.map((s) => (
                  <div key={s.label}>
                    <p className="font-heading font-bold text-2xl lg:text-3xl text-geat-orange">{s.value}</p>
                    <p className="text-[11px] text-primary-foreground/60 mt-1 leading-tight">{s.label}</p>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-4">
                <div className="flex -space-x-2">
                  {[storySide1, storySide2, storyMain].map((src, i) => (
                    <img key={i} src={src} alt="" className="w-9 h-9 rounded-full border-2 border-geat-dark object-cover" />
                  ))}
                </div>
                <button className="w-12 h-12 rounded-full border-2 border-geat-orange flex items-center justify-center text-geat-orange hover:bg-geat-orange hover:text-primary-foreground transition-colors">
                  <Play className="w-4 h-4 fill-current ml-0.5" />
                </button>
                <span className="text-xs font-semibold tracking-[0.2em] uppercase text-primary-foreground/70">Watch Intro</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GATEWAY + TIMELINE */}
      <section className="relative py-20">
        <div
          className="absolute inset-0 opacity-25 grayscale"
          style={{ backgroundImage: `url(${gatewayTeamAsset.url})`, backgroundSize: "cover", backgroundPosition: "center" }}
        />
        <div className="absolute inset-0 bg-geat-dark/80" />
        <div className="relative z-10 section-container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="text-xs font-semibold tracking-[0.3em] text-primary-foreground/60 uppercase">Our Journey</span>
                <span className="h-px w-10 bg-geat-orange" />
              </div>
              <h2 className="font-heading font-bold text-3xl lg:text-5xl leading-tight mb-6">
                Your Gateway To <span className="text-geat-orange">Industrial</span> <span className="text-geat-blue">Excellence</span> In Algeria.
              </h2>
              <p className="text-primary-foreground/70 leading-relaxed mb-8">
                From our founding as a strategic Sonelgaz-GE venture to becoming a regional benchmark for power generation engineering, every milestone reflects our commitment to localized expertise and global standards.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 bg-geat-orange text-primary-foreground px-6 py-3 rounded-full font-semibold text-sm hover:bg-geat-orange/90 transition-colors"
              >
                Know More <ArrowRight className="w-4 h-4" />
              </a>

              {/* Timeline */}
              <div className="mt-12 relative">
                <div className="absolute top-3 left-0 right-0 h-px bg-primary-foreground/20" />
                <div className="grid grid-cols-5 gap-2 relative">
                  {timeline.map((t, i) => (
                    <div key={t.year} className="flex flex-col items-center">
                      <span className={`w-3 h-3 rounded-full mb-3 ${i === 0 ? "bg-geat-orange ring-4 ring-geat-orange/20" : "bg-primary-foreground/40"}`} />
                      <p className="font-heading font-bold text-sm text-primary-foreground">{t.year}</p>
                      <p className="text-[10px] text-primary-foreground/60 mt-1 text-center leading-tight">{t.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-2xl overflow-hidden grayscale">
                <img src={gatewayTeamAsset.url} alt="GEAT team in front of turbine" className="w-full h-[500px] object-cover" />
              </div>
              <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-geat-orange flex items-center justify-center shadow-2xl hover:scale-110 transition-transform">
                <ArrowUpRight className="w-8 h-8 text-primary-foreground" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* THOUGHTFUL STRATEGIES */}
      <section className="py-20 bg-geat-dark">
        <div className="section-container">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold tracking-[0.3em] text-primary-foreground/60 uppercase mb-3">Our Portfolio</p>
            <h2 className="font-heading font-bold text-3xl lg:text-5xl">
              Thoughtful Energy <span className="text-geat-orange">Strategies</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {strategies.map((s, i) => (
              <div
                key={s.title}
                className={`group relative rounded-[140px] aspect-[3/4] flex flex-col items-center justify-between px-6 py-10 text-center transition-all hover:-translate-y-2 ${
                  s.highlight
                    ? "bg-geat-orange text-primary-foreground"
                    : "bg-primary-foreground text-geat-dark"
                }`}
              >
                <div className="w-16 h-16 rounded-full flex items-center justify-center bg-geat-dark/10">
                  <div className={`w-8 h-8 rounded-md ${s.highlight ? "bg-primary-foreground/30" : "bg-geat-dark/80"}`} />
                </div>
                <div>
                  <p className={`text-[10px] font-semibold tracking-[0.3em] uppercase mb-3 ${s.highlight ? "text-primary-foreground/80" : "text-geat-orange"}`}>
                    {s.kicker}
                  </p>
                  <h3 className="font-heading font-semibold text-base leading-snug">
                    {s.title}
                  </h3>
                </div>
                <ArrowUpRight className="w-5 h-5" />
                <span className="absolute -bottom-0 left-1/2 -translate-x-1/2 w-2/3 h-1 bg-current opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            ))}
          </div>
        </div>
      </section>


      <Footer />
    </div>
  );
};

export default About;
