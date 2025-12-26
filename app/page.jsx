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
      {/* Why Choose Us - Technology Focus */}
      <section className="bg-gray-100 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            لماذا تختار شركتنا لحل مشاكل الصرف الصحي؟
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-green-700">
                تقنيات حديثة بدون تكسير
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                نحن نعلم أن أكبر مخاوف العملاء هو تكسير الأرضيات والجدران لإصلاح
                السباكة. لذلك، استثمرنا في أحدث تقنيات الكشف والمعالجة التي تتيح
                لنا تحديد مكان الانسداد بدقة وتسليكه دون الحاجة إلى إحداث أي
                أضرار في منزلك.
              </p>
              <ul className="space-y-3">
                {[
                  "كشف التسربات والانسدادات بالكاميرات الحرارية",
                  "معدات شفط قوية للبيارات الرئيسية",
                  "الحفاظ على نظافة المكان بعد الانتهاء",
                ].map((item) => (
                  <li key={item} className="flex items-center">
                    <span className="bg-green-500 text-white rounded-full p-1 ml-3 text-sm">
                      ✔
                    </span>
                    <span className="font-semibold">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-xl">
                <p className="text-xl font-extrabold text-center mb-6">مشاكل نعالجها نهائياً:</p>
                <ul className="text-gray-700 space-y-4">
                    <li className="border-b pb-2">🔹 انسداد بالوعات المطابخ بسبب الدهون المتراكمة.</li>
                    <li className="border-b pb-2">🔹 بطء تصريف المياه في الحمامات والمغاسل.</li>
                    <li className="border-b pb-2">🔹 الروائح الكريهة المنبعثة من فتحات الصرف.</li>
                    <li className="border-b pb-2">🔹 طفح البيارات الرئيسية خارج المنزل.</li>
                </ul>
            </div>
          </div>
        </div>
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

       {/* Work Process Steps */}
      <section className="max-w-6xl mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl font-bold mb-12">خطوات تقديم الخدمة</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            {
              step: "1",
              title: "الاتصال وطلب الخدمة",
              desc: "تواصل معنا عبر الهاتف أو الواتساب، وسنقوم بتسجيل طلبك وتحديد موقعك.",
            },
            {
              step: "2",
              title: "وصول الفريق الفني",
              desc: "يصل إليك فريقنا المجهز بأحدث المعدات في أسرع وقت ممكن.",
            },
            {
              step: "3",
              title: "الكشف والمعالجة",
              desc: "نقوم بتحديد سبب المشكلة بدقة ونبدأ في عملية التسليك باستخدام التقنية المناسبة.",
            },
            {
              step: "4",
              title: "الاختبار والتسليم",
              desc: "نتأكد من سريان المياه بشكل طبيعي وتنظيف المكان قبل المغادرة.",
            },
          ].map((item) => (
            <div key={item.step} className="relative bg-white p-6 rounded-xl shadow-md">
              <div className="absolute -top-5 right-1/2 translate-x-1/2 bg-blue-600 text-white w-12 h-12 flex items-center justify-center rounded-full font-bold text-xl">
                {item.step}
              </div>
              <h3 className="font-bold text-xl mt-6 mb-3">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
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
     
      {/* FAQs Section */}
      <section className="bg-gray-100 py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            أسئلة شائعة يطرحها العملاء
          </h2>
          <div className="space-y-4">
            {[
              {
                q: "هل تقومون بتسليك المجاري بدون تكسير؟",
                a: "نعم، بالتأكيد. نحن نعتمد بشكل أساسي على أجهزة ضغط المياه والهواء وسوست التسليك الكهربائية المتطورة التي تعالج الانسداد من داخل المواسير دون الحاجة لتكسير السيراميك أو الأرضيات.",
              },
              {
                q: "ما هي سرعة وصولكم في حالات الطوارئ؟",
                a: "نحن نعمل على مدار 24 ساعة، ولدينا فرق موزعة في مختلف أحياء الرياض. نسعى للوصول إليك في غضون ساعة واحدة من تلقي البلاغ في معظم الحالات.",
              },
              {
                q: "هل تقدمون ضمان على خدمة التسليك؟",
                a: "نعم، نقدم ضماناً على خدماتنا لضمان عدم عودة المشكلة مرة أخرى في القريب العاجل، وذلك حسب نوع الخدمة المقدمة وحالة التمديدات لديكم.",
              },
              {
                q: "ما هي أسباب انسداد مجاري المطبخ المتكررة؟",
                a: "السبب الرئيسي هو سكب الزيوت والدهون في الحوض، والتي تتجمد داخل المواسير وتسبب ضيقها وانسدادها مع مرور الوقت. ننصح دائماً بالتخلص من الزيوت في القمامة وليس في الصرف.",
              },
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="font-bold text-lg text-blue-800 mb-2">
                  ❓ {item.q}
                </h3>
                <p className="text-gray-700 leading-relaxed">✅ {item.a}</p>
              </div>
            ))}
          </div>
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



