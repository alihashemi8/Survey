import { useState } from "react";
import viteLogo from "/vite.svg";
import Landing from "./assets/Landing.png";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="flex flex-col min-h-screen bg-gradient-to-br from-[#fce3e3] to-white text-gray-800">
        {/* Header */}
        <section className="flex flex-col md:flex-row items-center justify-center text-center py-20 px-8 gap-10">  
          {/* Image */}
          <div className="md:w-1/2 flex justify-center animate-fade-in">
            <img
              src={Landing}
              alt="Landing"
              className="w-64 md:w-80 lg:w-[28rem] h-auto rounded-3xl shadow-2xl shadow-[#b23636] m-4"
            />
          </div>

          <div className="md:w-1/2">
            <h2 dir="rtl" className="text-5xl font-extrabold text-[#b23636] mb-6 animate-fade-in-up leading-tight">
              آینده‌ات را با ما به تصویر بکش!
            </h2>
            <p className="text-lg text-gray-700 max-w-xl mb-6 animate-fade-in-up delay-100 leading-relaxed">
              در چند دقیقه، با پاسخ به این نظرسنجی به ما کمک کن تا بهتر بفهمیم دانشجویان مهندسی کامپیوتر پس از فارغ‌التحصیلی چه برنامه‌ای دارند.
            </p>
            <button className="bg-gradient-to-r from-[#b23636] to-[#e75c5c] text-white px-8 py-3 rounded-full text-lg hover:scale-105 transition-transform animate-fade-in-up delay-200 shadow-lg">
              شرکت در نظرسنجی
            </button>
          </div>
        </section>

        {/* Why Section */}
        <section className="py-10 px-8">
          <h3 className="text-3xl font-bold text-center text-[#b23636] mb-10 animate-fade-in-up">
            چرا این نظرسنجی اهمیت دارد؟
          </h3>
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6 bg-gradient-to-r from-[#b23636] to-[#e75c5c] text-white rounded-3xl shadow-xl shadow-[#b23636]">
              🎯 <p className="mt-2">کمک به بهبود برنامه‌ریزی شغلی و تحصیلی</p>
            </div>
            <div className="p-6 bg-gradient-to-r from-[#b23636] to-[#e75c5c] text-white rounded-3xl shadow-xl shadow-[#b23636]">
              📊 <p className="mt-2">دریافت نتایج کلی برای مشاهده روندها</p>
            </div>
            <div className="p-6 bg-gradient-to-r from-[#b23636] to-[#e75c5c] text-white rounded-3xl shadow-xl shadow-[#b23636]">
              🤝 <p className="mt-2">همکاری در ارتقاء تصمیم‌گیری دانشجویان آینده</p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center text-sm text-gray-600 py-6 border-t bg-[#fff7f7] shadow-inner animate-fade-in">
          <div className="max-w-4xl mx-auto px-4">
            <p className="mb-1 font-medium">ساخته شده با ❤️ توسط تیم پالس وب</p>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;
