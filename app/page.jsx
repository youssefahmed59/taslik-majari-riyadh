export default function Home() {
  return (
    <main className="bg-gray-50">
      {/* Hero Section with responsive image */}
      <section className="relative w-full h-[70vh] md:h-[80vh] lg:h-[90vh]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/bee3f4c2-413c-4665-83ef-989ef7640f14.jfif')",
          }}
        ></div>
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-center px-6">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6">
            تسليك مجاري بالرياض – خدمة 24 ساعة
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-white mb-8 max-w-3xl">
            خدمة تسليك مجاري احترافية في جميع أحياء شمال وجنوب الرياض، نصل إليك بسرعة ونستخدم أحدث المعدات.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <a
              href="tel:0551316892"
              className="bg-white text-green-700 font-bold px-8 py-4 rounded-2xl shadow-lg hover:bg-gray-100 transition"
            >
              📞 اتصال مباشر
            </a>
            <a
              href="https://wa.me/966551316892"
              className="bg-black/20 text-white font-bold px-8 py-4 rounded-2xl border border-white hover:bg-black/30 transition"
            >
              💬 واتساب
            </a>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
          {["خدمة 24 ساعة", "فنيون متخصصون", "سرعة الوصول", "تغطية شاملة للرياض"].map((item) => (
            <div key={item} className="p-6">
              <div className="text-blue-600 text-3xl mb-3">★</div>
              <p className="font-semibold">{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Areas Section */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-10">نخدم جميع أحياء الرياض</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-gray-700">
          {[
            "حي النرجس", "حي العارض", "حي الياسمين", "حي الملقا",
            "حي الصحافة", "حي التعاون", "حي إشبيليه", "حي الرمال",
            "حي النهضة", "حي الروضة", "حي اليرموك", "حي المونسية",
            "حي طويق", "حي السويدي", "حي الشفا", "حي ظهرة لبن",
            "حي العزيزية", "حي الحمراء"
          ].map((area) => (
            <div key={area} className="bg-white rounded-xl p-3 shadow">
              {area}
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white text-center py-10">
        <p className="mb-2">📞 0551316892 – 0546596882</p>
        <p>تسليك مجاري بالرياض – نخدم شمال وجنوب الرياض</p>
      </footer>
    </main>
  );
}

