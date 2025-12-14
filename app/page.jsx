export default function Home() {
  return (
    <main className="bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-l from-green-600 to-blue-600 text-white">
        <div className="max-w-6xl mx-auto px-6 py-20 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
            تسليك مجاري بالرياض – خدمة 24 ساعة
          </h1>
          <p className="text-lg md:text-xl mb-8 leading-relaxed">
            خدمة تسليك مجاري احترافية في جميع أحياء شمال وجنوب الرياض، نصل إليك بسرعة ونستخدم أحدث المعدات.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <a
              href="tel:0551316892"
              className="bg-white text-green-700 font-bold px-8 py-4 rounded-2xl shadow-lg"
            >
              📞 اتصال مباشر
            </a>
            <a
              href="https://wa.me/966551316892"
              className="bg-black/20 text-white font-bold px-8 py-4 rounded-2xl border border-white"
            >
              💬 واتساب
            </a>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">خدمات تسليك المجاري</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            "تسليك مجاري المنازل",
            "تسليك مجاري المطابخ",
            "تسليك الحمامات",
            "شفط وتنظيف البيارات",
          ].map((service) => (
            <div
              key={service}
              className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-xl transition"
            >
              <div className="text-green-600 text-4xl mb-4">✔</div>
              <h3 className="font-bold text-lg">{service}</h3>
              <p className="text-gray-600 mt-2">خدمة سريعة وآمنة باستخدام معدات حديثة</p>
            </div>
          ))}
        </div>
      </section>

      {/* Trust */}
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

      {/* Areas */}
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
