export default function Home() {
  return (
    <main className="bg-gray-50">

      {/* Hero Section */}
      <section className="bg-gradient-to-l from-green-600 to-blue-600 text-white">
        <div className="max-w-6xl mx-auto px-6 py-24 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
            تسليك مجاري بالرياض – خدمة 24 ساعة
          </h1>
          <p className="text-lg md:text-xl mb-10 leading-relaxed">
            شركة متخصصة في تسليك المجاري والبيارات بالرياض باستخدام أحدث المعدات
            وبأيدي فنيين محترفين نصل إليك في أسرع وقت.
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
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-center mb-14">
          خدمات تسليك المجاري
        </h2>

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
              <h3 className="font-bold text-lg mb-2">{service}</h3>
              <p className="text-gray-600">
                خدمة احترافية باستخدام معدات حديثة بدون تكسير
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Equipment Image 1 */}
      <section className="max-w-6xl mx-auto px-6 py-16 text-center">
        <img
          src="/images/bee3f4c2-413c-4665-83ef-989ef7640f14.jfif"
          alt="أحد معداتنا الحديثة لتسليك المجاري بالرياض"
          className="mx-auto rounded-2xl shadow-lg mb-4 max-w-3xl"
        />
        <p className="text-gray-700 font-semibold text-lg">
          أحد معداتنا الحديثة المستخدمة في تسليك المجاري
        </p>
      </section>

      {/* Trust Section */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
          {[
            "خدمة على مدار 24 ساعة",
            "فنيون متخصصون",
            "سرعة الوصول",
            "تغطية شاملة لجميع أحياء الرياض",
          ].map((item) => (
            <div key={item} className="p-6">
              <div className="text-blue-600 text-3xl mb-3">★</div>
              <p className="font-semibold">{item}</p>
            </div>
          ))}
        </div>
      </section>
    {/* صورة إضافية للخدمة */}
    <section className="max-w-6xl mx-auto px-6 py-16 text-center">
      <img
        src="/images/13.jpg"
        alt="معدات متطورة لتسليك المجاري بالرياض"
        className="mx-auto rounded-2xl shadow-lg max-w-3xl"
      />
     <p className="mt-4 text-gray-700 text-lg">
    نستخدم تقنيات متقدمة ومعدات حديثة لضمان أفضل نتيجة بأسرع وقت
    </p>
</section>


      {/* Equipment Image 2 */}
      <section className="max-w-6xl mx-auto px-6 py-16 text-center">
        <img
          src="/images/12.png"
          alt="معدات متطورة لتسليك المجاري بالرياض"
          className="mx-auto rounded-2xl shadow-lg max-w-3xl"
        />
      </section>

      {/* About Content */}
      <section className="max-w-6xl mx-auto px-6 py-20 leading-relaxed text-gray-800">
        <h2 className="text-3xl font-bold mb-8 text-center">
          شركة تسليك مجاري بالرياض
        </h2>

        <p className="mb-6 text-lg">
          تُعد شركتنا من الشركات الرائدة في مجال تسليك المجاري بالرياض، حيث
          اكتسبنا ثقة عملائنا من خلال تقديم خدمات عالية الجودة تعتمد على
          أحدث المعدات والتقنيات الحديثة.
        </p>

        <p className="mb-6 text-lg">
          نوفر حلولًا متكاملة لمشاكل انسداد المجاري والبيارات دون تكسير،
          مع سرعة استجابة تغطي جميع أحياء شمال وجنوب الرياض على مدار الساعة.
        </p>

        <p className="text-lg">
          نحرص دائمًا على تقديم أسعار تنافسية مع ضمان على الخدمة، مما يجعلنا
          الخيار الأمثل لكل من يبحث عن خدمة موثوقة وسريعة.
        </p>
      </section>

      {/* Areas */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-center mb-12">
          نخدم جميع أحياء الرياض
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-gray-700">
          {[
            "حي النرجس", "حي العارض", "حي الياسمين", "حي الملقا",
            "حي الصحافة", "حي التعاون", "حي إشبيليه", "حي الرمال",
            "حي النهضة", "حي الروضة", "حي اليرموك", "حي المونسية",
            "حي طويق", "حي السويدي", "حي الشفا", "حي ظهرة لبن",
            "حي العزيزية", "حي الحمراء",
          ].map((area) => (
            <div key={area} className="bg-white rounded-xl p-3 shadow">
              {area}
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white text-center py-12">
        <p className="mb-3 text-lg">📞 0551316892 – 0546596882</p>
        <p className="text-gray-300">
          تسليك مجاري بالرياض – خدمة سريعة وموثوقة على مدار 24 ساعة
        </p>
      </footer>

    </main>
  );
}



