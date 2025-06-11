import React from "react";
import { motion } from "framer-motion";
import Landing from "../assets/Landing.png"

function Header({ setIsHovered }) {
  return (
    <section className="relative flex flex-col-reverse md:flex-row items-center justify-center text-center pt-10 pb-20 px-4 md:px-8 gap-6 md:gap-10 max-w-7xl mx-auto">
      <motion.div
        className="w-full md:w-1/2 space-y-6 px-4 bg-gradient-to-br from-[#0f0c29]/80 via-[#302b63]/80 to-[#24243e]/80 rounded-xl p-6"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.h2
          dir="rtl"
          className="text-3xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#a18cd1] to-[#fbc2eb] mb-4 md:mb-6 leading-tight"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          آینده‌ات را با ما <span className="text-white">به تصویر بکش!</span>
        </motion.h2>
        <motion.p
          className="text-base md:text-lg text-gray-300 max-w-xl mb-6 md:mb-8 leading-relaxed"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          در کمتر از ۲ دقیقه، با پاسخ به این نظرسنجی به ما کمک کن تا مسیر شغلی دانشجویان مهندسی کامپیوتر را بهتر تحلیل کنیم.
        </motion.p>
        <motion.button
          className="relative bg-gradient-to-r from-[#8a2be2] to-[#4b00e0] text-white px-6 py-3 md:px-8 md:py-4 rounded-xl text-base md:text-lg font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-[0_0_20px_5px_rgba(138,43,226,0.4)] group overflow-hidden mx-auto md:mx-0"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="relative z-10 flex items-center justify-center gap-2">
            <span>شروع نظرسنجی</span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </span>
        </motion.button>
      </motion.div>

      <motion.div
        className="w-full md:w-1/2 flex justify-center px-4"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="relative group w-full max-w-xs md:max-w-none">
          <img
            src={Landing}
            alt="Landing"
            className="w-full h-auto rounded-2xl shadow-xl border-2 border-[#ffffff20] transform group-hover:-translate-y-2 transition-all duration-500"
          />
          <div className="absolute -inset-2 md:-inset-4 rounded-2xl border-2 border-[#a18cd150] pointer-events-none group-hover:opacity-70 transition-opacity duration-500"></div>
          <div className="absolute -inset-3 md:-inset-6 rounded-2xl border border-[#fbc2eb50] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
        </div>
      </motion.div>
    </section>
  );
}

export default Header;
