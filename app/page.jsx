import React from 'react';

// --- Data Constants (Moved outside for better performance & readability) ---

const FEATURES = [
  "خدمة على مدار 24 ساعة",
  "فنيون متخصصون",
  "سرعة الوصول خلال ساعة",
  "تغطية شاملة لجميع أحياء الرياض",
];

const SERVICES = [
  { title: "تسليك مجاري المنازل", desc: "حل مشاكل الانسداد في الشقق والفلل والقصور." },
  { title: "تسليك مجاري المطابخ", desc: "إزالة الدهون والترسبات الصلبة من مواسير المطبخ." },
  { title: "تسليك الحمامات", desc: "معالجة انسداد الصفايات، الأحواض، والمراحيض." },
  { title: "شفط وتنظيف البيارات", desc: "سيارات شفط حديثة لتنظيف البيارات وغرف التفتيش." },
];

const WORK_STEPS = [
  { step: "1", title: "اتصل بنا", desc: "اتصالك هو الخطوة الأولى. فريق خدمة العملاء جاهز للرد عليك وتحديد موعد فوري." },
  { step: "2", title: "وصول الفني", desc: "يصل فريقنا المتخصص إلى موقعك في الرياض مزوداً بكافة المعدات اللازمة." },
  { step: "3", title: "الفحص والمعالجة", desc: "نقوم بالكشف عن مكان الانسداد بدقة واختيار الطريقة الأنسب لتسليكه بدون تكسير." },
  { step: "4", title: "التأكد والنظافة", desc: "نجري اختبارات لضمان انسياب المياه ونقوم بتنظيف مكان العمل قبل المغادرة." },
];

const FAQS = [
  { q: "هل تقومون بتسليك المجاري فعلاً بدون تكسير؟", a: "نعم، هذه هي ميزتنا الأساسية. نستخدم أجهزة ضغط متطورة وسوست كهربائية تعالج الانسداد من داخل المواسير دون الحاجة لتكسير السيراميك أو تشويه ديكور منزلك في 99% من الحالات." },
  { q: "ما مدى سرعة وصولكم في حالات الطوارئ؟", a: "نحن ندرك أن مشاكل الصرف لا تحتمل التأجيل. لدينا فرق ميدانية موزعة في الرياض، ونسعى دائماً للوصول إليك في غضون 60 دقيقة من اتصالك." },
  { q: "لماذا تنسد بالوعة المطبخ باستمرار؟", a: "السبب الأكثر شيوعاً هو سكب زيوت الطهي والشحوم في الحوض. هذه الدهون تتجمد داخل المواسير وتضيقها تدريجياً حتى يحدث الانسداد الكامل. ننصح دائماً بالتخلص من الزيوت في القمامة." },
  { q: "هل تقدمون خدمات شفط البيارات؟", a: "نعم، لدينا سيارات شفط (وايتات) بأحجام مختلفة مجهزة بمضخات قوية لشفط وتنظيف البيارات الرئيسية وغرف التفتيش بكفاءة عالية." },
  { q: "هل أسعاركم مناسبة؟", a: "نحن نقدم أفضل قيمة مقابل سعر في الرياض. أسعارنا تنافسية جداً وتعتمد على حجم المشكلة ونوع المعدات المستخدمة، ونضمن لك الشفافية التامة في التسعير قبل البدء بالعمل." },
];

const AREAS = [
  "حي النرجس", "حي العارض", "حي الياسمين", "حي الملقا",
  "حي الصحافة", "حي التعاون", "حي الوادي", "حي النفل",
  "حي إشبيليه", "حي الرمال", "حي اليرموك", "حي المونسية",
  "حي النهضة", "حي الروضة", "حي الخليج", "حي الملك فيصل",
  "حي طويق", "حي السويدي", "حي الشفا", "حي العريجاء",
  "حي ظهرة لبن", "حي العزيزية", "حي الحمراء", "حي الدار البيضاء"
];

// --- Main Component ---

export default function Home() {
  return (
    <main className="bg-gray-50 scroll-smooth">

      {/* Hero Section */}
      <section id="hero" className="bg-gradient-to-l from-green-600 to-blue-600 text-white">
        <div className="max-w-6xl mx-auto px-6 py-24 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
            تسليك مجاري بالرياض – خدمة 24 ساعة
          </h1>
          <p className="text-lg md:text-xl mb-10 leading-relaxed max-w-3xl mx-auto">
            شركة متخصصة في تسليك المجاري والبيارات بالرياض باستخدام أحدث المعدات
            وبأيدي فنيين محترفين نصل إليك في أسرع وقت. حلول نهائية لانسداد الصرف بدون تكسير.
          </p>

          <div className="flex justify-center gap-4 flex-wrap">
            <a
              href="tel:0551316892"
              className="bg-white text-green-700 font-bold px-8 py-4 rounded-2xl shadow-lg hover:bg-gray-100 transition duration-300 transform hover:scale-105"
            >
              📞 اتصال مباشر
            </a>
            <a
              href="https://wa.me/966551316892"
              className="bg-black/20 text-white font-bold px-8 py-4 rounded-2xl border border-white hover:bg-black/30 transition duration-300"
            >
              💬 واتساب
            </a>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="bg-white py-12 shadow-sm relative z-10 -mt-8 mx-4 rounded-3xl">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
          {FEATURES.map((item) => (
            <div key={item} className="p-4 border-b md:border-b-0 md:border-l last:border-none border-gray-200">
              <div className="text-blue-600 text-3xl mb-2">★</div>
              <p className="font-semibold text-gray-800">{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services Summary (ID Added for Navigation) */}
      <section id="services" className="max-w-6xl mx-auto px-6 py-20 scroll-mt-20">
        <h2 className="text-3xl font-bold text-center mb-14 text-gray-900">
          خدماتنا المتكاملة في الصرف الصحي
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service) => (
            <div
              key={service.title}
              className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-xl transition duration-300 group border border-gray-100"
            >
              <div className="text-green-600 text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">✔</div>
              <h3 className="font-bold text-lg mb-2 text-gray-800">{service.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Equipment Image */}
      <section className="max-w-6xl mx-auto px-6 py-10 text-center">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">نستخدم أحدث التكنولوجيا لضمان الجودة</h2>
        <img
          src="/images/bee3f4c2-413c-4665-83ef-989ef7640f14.jfif"
          alt="أحد معداتنا الحديثة لتسليك المجاري بالرياض"
          className="w-full block mx-auto rounded-2xl shadow-lg mb-4 max-w-3xl hover:shadow-2xl transition duration-500"
        />
      </section>

      {/* Why Choose Us & Tech */}
      <section className="bg-blue-50 py-20 my-10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-blue-900">
                حلول جذرية بدون تكسير.. لماذا نحن الأفضل؟
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                نحن ندرك حجم القلق الذي يسببه انسداد المجاري، والخوف الأكبر من اضطرار السباكين لتكسير الأرضيات.
                لذلك، تعتمد شركتنا على استراتيجية حديثة تضمن لك الحل النهائي بأقل قدر من الإزعاج.
              </p>
              <ul className="space-y-4">
                {[
                  {t: "سوست كهربائية حديثة", d: "تصل إلى أعماق بعيدة في المواسير لإزالة العوالق الصلبة."},
                  {t: "الحفاظ على الممتلكات", d: "نضمن عدم إحداث فوضى أو تكسير غير ضروري في منزلك."},
                  {t: "ضمان على الخدمة", d: "نقدم ضماناً يمنحك راحة البال بعد انتهاء العمل."},
                ].map((item, i) => (
                  <li key={i} className="flex items-start bg-white p-4 rounded-lg shadow-sm">
                    <span className="bg-blue-500 text-white rounded-full h-6 w-6 flex items-center justify-center ml-3 text-sm flex-shrink-0 mt-1">
                      ✔
                    </span>
                    <div>
                        <span className="font-bold block text-lg text-gray-900">{item.t}</span>
                        <span className="text-gray-600 text-sm">{item.d}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            {/* Box hidden on mobile to save space, shown on PC */}
            <div className="hidden md:block">
                  <div className="bg-white p-8 rounded-3xl shadow-xl border-t-4 border-blue-600">
                    <p className="text-2xl font-extrabold text-center mb-6 text-gray-800">أخطر المشاكل التي نعالجها فوراً:</p>
                    <ul className="text-gray-700 space-y-4 text-lg">
                        <li className="flex items-center"><span className="text-red-500 ml-2 text-xl">⚠</span> انسداد كلي للمطبخ بسبب تراكم الشحوم.</li>
                        <li className="flex items-center"><span className="text-red-500 ml-2 text-xl">⚠</span> طفح مياه الصرف وارتدادها داخل الحمامات.</li>
                        <li className="flex items-center"><span className="text-red-500 ml-2 text-xl">⚠</span> الروائح الكريهة المستمرة.</li>
                        <li className="flex items-center"><span className="text-red-500 ml-2 text-xl">⚠</span> امتلاء البيارات الرئيسية والحاجة لشفط عاجل.</li>
                    </ul>
                    <div className="mt-8 text-center">
                        <a href="tel:0551316892" className="inline-block bg-blue-600 text-white font-bold px-6 py-3 rounded-xl animate-pulse hover:animate-none hover:bg-blue-700 transition">اطلب المساعدة العاجلة الآن</a>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Grid Section */}
      <section className="max-w-6xl mx-auto px-6 py-16 text-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
                <img
                    src="/images/13.jpg"
                    alt="معدات متطورة لتسليك المجاري بالرياض"
                    className="w-full block mx-auto rounded-2xl shadow-lg h-64 object-cover"
                />
                <p className="mt-4 text-gray-700 font-semibold">
                نستخدم أحدث أجهزة التسليك بالضغط
                </p>
            </div>
            <div>
                <img
                    src="/images/12.png"
                    alt="فريق عمل متخصص في تسليك المجاري"
                    className="w-full block mx-auto rounded-2xl shadow-lg h-64 object-cover"
                />
                <p className="mt-4 text-gray-700 font-semibold">
                فريق فني مدرب وجاهز على مدار الساعة
                </p>
            </div>
        </div>
      </section>

      {/* Work Process Steps */}
      <section className="max-w-6xl mx-auto px-6 py-20 text-center bg-white rounded-3xl shadow-sm my-10 border border-gray-100">
        <h2 className="text-3xl font-bold mb-12 text-gray-900">كيف نخدمك؟ (خطوات العمل)</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {WORK_STEPS.map((item) => (
            <div key={item.step} className="relative bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-lg transition pt-12 group">
              <div className="absolute -top-5 right-1/2 translate-x-1/2 bg-gradient-to-br from-green-500 to-blue-500 text-white w-14 h-14 flex items-center justify-center rounded-full font-bold text-2xl shadow-lg border-4 border-white group-hover:scale-110 transition-transform">
                {item.step}
              </div>
              <h3 className="font-bold text-xl mt-4 mb-3 text-gray-800">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About Content */}
      <section className="max-w-4xl mx-auto px-6 py-20 leading-relaxed text-gray-800 text-center md:text-right">
        <h2 className="text-3xl font-bold mb-8 text-center text-blue-800">
          عن شركة تسليك مجاري بالرياض
        </h2>
        <div className="bg-white p-8 rounded-2xl shadow-md leading-loose text-lg border-t-4 border-blue-500">
            <p className="mb-6">
            مرحباً بكم في شركتنا الرائدة في مجال خدمات الصرف الصحي وتسليك المجاري في مدينة الرياض. نحن نفخر بتقديم خدماتنا بخبرة تمتد لسنوات طويلة، اكتسبنا خلالها ثقة الآلاف من العملاء بفضل التزامنا بالجودة، السرعة، والمصداقية في التعامل.
            </p>
            <p className="mb-6">
            مهمتنا الأساسية هي توفير بيئة صحية ونظيفة لعملائنا من خلال حل مشاكل الانسداد المزعجة بأحدث الطرق العلمية. نحن لا نستخدم الطرق التقليدية التي قد تضر بشبكة الصرف لديك، بل نعتمد على التكنولوجيا المتطورة التي توفر الوقت والمال والجهد.
            </p>
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-blue-50 py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">
            أسئلة شائعة يطرحها عملاؤنا
          </h2>
          <div className="space-y-4">
            {FAQS.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm border-r-4 border-green-500 hover:shadow-md transition">
                <h3 className="font-bold text-lg text-gray-900 mb-3 flex items-center">
                  <span className="text-green-600 ml-2 text-2xl">؟</span> {item.q}
                </h3>
                <p className="text-gray-700 leading-relaxed pr-6 border-r-2 border-gray-100">✅ {item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Areas (ID Added for Navigation) */}
      <section id="areas" className="max-w-6xl mx-auto px-6 py-20 scroll-mt-20">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
          نغطي جميع مناطق وأحياء الرياض
        </h2>
        <p className="text-center text-gray-600 mb-8 -mt-6">نتواجد بالقرب منك في شمال، جنوب، شرق، وغرب الرياض لضمان سرعة الاستجابة</p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-gray-700 font-medium">
          {AREAS.map((area) => (
            <div key={area} className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition hover:bg-blue-50 cursor-default border border-gray-100">
              📍 {area}
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA (ID Added for Navigation) */}
      <section id="contact" className="bg-green-600 text-white py-16 text-center px-6 scroll-mt-20">
          <h2 className="text-3xl font-bold mb-6">هل تواجه مشكلة انسداد الآن؟ لا تتردد في الاتصال</h2>
          <p className="text-xl mb-8 opacity-90">فريقنا جاهز لخدمتك على مدار 24 ساعة طوال أيام الأسبوع</p>
          <a
              href="tel:0551316892"
              className="inline-block bg-white text-green-700 font-bold text-xl px-10 py-5 rounded-full shadow-xl hover:bg-gray-100 transition transform hover:-translate-y-1 hover:shadow-2xl"
            >
              📞 اتصل بنا الآن: 0551316892
            </a>
      </section>

      {/* Footer (Links Fixed) */}
      <footer className="bg-gray-900 text-white text-center py-12">
        <div className="max-w-6xl mx-auto px-6 mb-8 grid grid-cols-1 md:grid-cols-3 gap-8 text-right rtl:text-right">
            <div>
                <h3 className="text-xl font-bold mb-4 text-blue-400">عن الشركة</h3>
                <p className="text-gray-400 text-sm leading-loose">شركة رائدة في مجال تسليك المجاري بالرياض، نقدم حلولاً عصرية وسريعة لمشاكل الصرف الصحي بأحدث المعدات وبدون تكسير.</p>
            </div>
            <div>
                <h3 className="text-xl font-bold mb-4 text-blue-400">روابط سريعة</h3>
                <ul className="text-gray-400 text-sm space-y-3">
                    <li><a href="#hero" className="hover:text-white hover:underline transition">الرئيسية</a></li>
                    <li><a href="#services" className="hover:text-white hover:underline transition">خدماتنا</a></li>
                    <li><a href="#areas" className="hover:text-white hover:underline transition">مناطق الخدمة</a></li>
                    <li><a href="#contact" className="hover:text-white hover:underline transition">اتصل بنا</a></li>
                </ul>
            </div>
            <div>
                 <h3 className="text-xl font-bold mb-4 text-blue-400">تواصل معنا</h3>
                <p className="mb-3 text-lg dir-ltr hover:text-green-400 transition"><a href="tel:0551316892">📞 0551316892</a></p>
                <p className="mb-3 text-lg dir-ltr hover:text-green-400 transition"><a href="tel:0546596882">📞 0546596882</a></p>
                <p className="text-gray-400 text-sm mt-4">نعمل على مدار 24 ساعة</p>
            </div>
        </div>
        <div className="border-t border-gray-800 pt-8">
            <p className="text-gray-500 text-sm">
            جميع الحقوق محفوظة © {new Date().getFullYear()} - شركة تسليك مجاري بالرياض
            </p>
        </div>
      </footer>

    </main>
  );
}
