import { useState, useMemo, useEffect } from "react";
import { motion } from "framer-motion";
import Landing from "./assets/Landing.png";
import "./App.css";
import ThreeBackground from "./components/ThreeBackground.jsx";
import GlassButton from "./components/GlassButton";
import MouseShine from "./components/MouseShine.jsx";

// کامپوننت ذرات
function Particles() {
  const particles = useMemo(() => {
    return [...Array(20)].map((_, i) => ({
      id: i,
      size: Math.random() * 5 + 1,
      top: Math.random() * 100,
      left: Math.random() * 100,
      duration: Math.random() * 10 + 5,
    }));
  }, []);

  return (
    <>
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full bg-white"
          style={{
            width: `${p.size}px`,
            height: `${p.size}px`,
            top: `${p.top}%`,
            left: `${p.left}%`,
            animation: `float ${p.duration}s infinite ease-in-out`,
          }}
        />
      ))}
    </>
  );
}

// انیمیشن fadeIn
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

function App() {
  const [parallax, setParallax] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX - innerWidth / 2) / 50;
      const y = (e.clientY - innerHeight / 2) / 50;
      setParallax({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="animated-bg relative min-h-screen overflow-hidden bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e]">
      <ThreeBackground />
      <MouseShine />

      {/* لایه خیلی دور */}
      <div
        className="absolute inset-0 pointer-events-none transition-transform duration-200"
        style={{ transform: `translate(${parallax.x / 6}px, ${parallax.y / 6}px)` }}
      >
        <Particles />
      </div>

      {/* لایه متوسط */}
      <div
        className="absolute inset-0 pointer-events-none transition-transform duration-200"
        style={{ transform: `translate(${parallax.x / 3}px, ${parallax.y / 3}px)` }}
      >
        <Particles />
      </div>

      {/* لایه نزدیک */}
      <div
        className="absolute inset-0 pointer-events-none transition-transform duration-200"
        style={{ transform: `translate(${parallax.x}px, ${parallax.y}px)` }}
      >
        <Particles />
      </div>

      {/* افکت نوری دنبال‌کننده ماوس */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(circle at ${parallax.x * 5 + window.innerWidth / 2}px ${parallax.y * 5 + window.innerHeight / 2}px, rgba(255, 255, 255, 0.1), transparent 40%)`,
          mixBlendMode: "overlay",
          transition: "background 0.3s ease-out",
          zIndex: 1,
        }}
      />

      {/* لایه محتوای اصلی */}
      <div className="relative z-10 text-white font-sans">
        {/* بخش هدر */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="relative flex flex-col-reverse md:flex-row items-center justify-center text-center pt-10 pb-20 px-4 md:px-8 gap-6 md:gap-10 max-w-7xl mx-auto"
        >
          {/* متن */}
          <div className="w-full md:w-1/2 space-y-6 px-4 bg-gradient-to-br from-[#0f0c29]/80 via-[#302b63]/80 to-[#24243e]/80 rounded-xl p-6 backdrop-blur-sm">
            <h2
              dir="rtl"
              className="text-3xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#a18cd1] to-[#fbc2eb] mb-4 md:mb-6 leading-tight"
            >
              آینده‌ات را با ما <span className="text-white">به تصویر بکش!</span>
            </h2>
            <p className="text-base md:text-lg text-gray-300 max-w-xl mb-6 md:mb-8 leading-relaxed">
              در کمتر از ۲ دقیقه، با پاسخ به این نظرسنجی به ما کمک کن تا مسیر شغلی دانشجویان مهندسی کامپیوتر را بهتر تحلیل کنیم.
            </p>
            <GlassButton
              text="شروع نظرسنجی"
              onClick={() => console.log("نظرسنجی شروع شد!")}
            />
          </div>

          {/* تصویر */}
          <div className="w-full md:w-1/2 flex justify-center px-4">
            <div className="relative group w-full max-w-xs md:max-w-none">
              <img
                src={Landing}
                alt="Landing"
                className="w-full h-auto rounded-2xl shadow-xl border-2 border-[#ffffff20] transform group-hover:-translate-y-2 transition-all duration-500"
              />
              <div className="absolute -inset-2 md:-inset-4 rounded-2xl border-2 border-[#a18cd150] pointer-events-none group-hover:opacity-70 transition-opacity duration-500" />
              <div className="absolute -inset-3 md:-inset-6 rounded-2xl border border-[#fbc2eb50] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            </div>
          </div>
        </motion.section>

        {/* بخش چرا */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="relative py-12 md:py-16 px-4 md:px-8 border-[#ffffff10] z-10 mt-16"
        >
          <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
            {[
              {
                icon: "🎯",
                title: "برنامه‌ریزی بهتر",
                text: "کمک به بهبود مسیر شغلی و تحصیلی دانشجویان",
                color: "from-[#ff9a9e] to-[#fad0c4]",
              },
              {
                icon: "📊",
                title: "تحلیل روندها",
                text: "دریافت آمار دقیق از انتخاب‌های دانشجویان",
                color: "from-[#a18cd1] to-[#fbc2eb]",
              },
              {
                icon: "🚀",
                title: "تصمیم‌گیری هوشمند",
                text: "کمک به دانشگاه‌ها و شرکت‌ها برای برنامه‌ریزی بهتر",
                color: "from-[#84fab0] to-[#8fd3f4]",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="p-4 md:p-6 rounded-xl bg-[#ffffff08] border border-[#ffffff15] hover:bg-[#ffffff15] backdrop-blur-sm transition-all duration-300 shadow-lg"
                whileHover={{ scale: 1.05, rotateX: 10, rotateY: -10 }}
                whileTap={{ scale: 0.98 }}
                style={{ transformStyle: "preserve-3d" }}
              >
                <div
                  className={`w-12 h-12 md:w-16 md:h-16 mx-auto mb-3 md:mb-4 rounded-full flex items-center justify-center text-2xl md:text-3xl bg-gradient-to-r ${item.color}`}
                >
                  {item.icon}
                </div>
                <h4 className="text-lg md:text-xl font-semibold text-center mb-2 md:mb-3">
                  {item.title}
                </h4>
                <p className="text-sm md:text-base text-gray-300 text-center">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* فوتر */}
        <motion.footer
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="text-center py-6 md:py-8 bg-[#0f0c29] border-t border-[#302b63] relative z-10 mt-12"
        >
          <div className="max-w-7xl mx-auto px-4">
            <p className="mb-1 md:mb-2 text-sm md:text-base font-medium text-gray-300">
              ساخته شده با ❤️ توسط تیم پالس وب
            </p>
            <p className="text-xs md:text-sm text-gray-500">
              © {new Date().getFullYear()} - تمام حقوق محفوظ است
            </p>
          </div>
        </motion.footer>
      </div>
    </div>
  );
}

export default App;

