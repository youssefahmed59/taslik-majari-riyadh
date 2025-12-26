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

      {/* Equipment Image */}
      <section className="max-w-6xl mx-auto px-6 py-16 text-center">
        <img
          src="/images/bee3f4c2-413c-4665-83ef-989ef7640f14.jfif"
          alt="أحد معداتنا لتسليك المجاري"
          className="mx-auto rounded-xl shadow-lg mb-4"
        />
        <p className="text-gray-700 font-semibold text-lg">أحد معداتنا لتسليك المجاري</p>
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
     {/* صورة معدات إضافية */}
     <section className="max-w-6xl mx-auto px-6 py-16 text-center">
      <img
    src="/images/bee3f4c2-413c-4665-83ef-989ef7640f14.jfif"
    alt="معدات تسليك مجاري متطورة بالرياض"
    className="mx-auto rounded-2xl shadow-lg max-w-3xl"
  />

</section>
      {/* محتوى تعريفي */}
<section className="max-w-6xl mx-auto px-6 py-16 leading-relaxed text-gray-800">
  <h2 className="text-3xl font-bold mb-6 text-center">
    شركة تسليك مجاري بالرياض
  </h2>

  <p className="mb-6 text-lg">
    تُعد شركتنا من أفضل شركات تسليك المجاري بالرياض، حيث نقدم خدمات متكاملة
    باستخدام أحدث الأجهزة والمعدات الحديثة التي تضمن حل المشكلة من جذورها
    دون أي أضرار على شبكة الصرف الصحي.
  </p>

  <p className="mb-6 text-lg">
    نمتلك فريق عمل متخصص ومدرب على أعلى مستوى للتعامل مع جميع أنواع انسداد
    المجاري سواء في المنازل أو الفلل أو المباني التجارية، مع سرعة في الوصول
    إلى جميع أحياء شمال وجنوب الرياض.
  </p>

  <p className="text-lg">
    هدفنا هو تقديم خدمة موثوقة وسريعة مع الحفاظ على أعلى معايير الجودة
    والسلامة، مما جعلنا الخيار الأول للكثير من العملاء في الرياض.
  </p>
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
{/* Work Description */}
<section className="max-w-6xl mx-auto px-6 py-16">
  <h2 className="text-3xl font-bold text-center mb-8">وصف العمل</h2>
  <ul className="space-y-4 text-gray-700 text-lg leading-relaxed">
    <li>• تنفيذ موقع إلكتروني تعريفي لشركة خدمات صرف صحي</li>
    <li>• عرض خدمات الشركة بشكل واضح وسهل</li>
    <li>• توضيح مناطق التغطية داخل مدينة الرياض</li>
    <li>• إضافة وسائل تواصل مباشرة مع العملاء</li>
  </ul>
</section>

{/* Implementation Details */}
<section className="bg-white py-16">
  <div className="max-w-6xl mx-auto px-6">
    <h2 className="text-3xl font-bold text-center mb-8">تفاصيل التنفيذ</h2>
    <ul className="space-y-4 text-gray-700 text-lg leading-relaxed">
      <li>• تصميم وتنفيذ موقع من صفحة واحدة (One Page Website)</li>
      <li>• تصميم متجاوب يعمل على الجوال والكمبيوتر</li>
      <li>• محتوى عربي مخصص لخدمات الصرف الصحي في الرياض</li>
      <li>• أزرار اتصال مباشر وواتساب</li>
      <li>• تحسين أساسي لمحركات البحث (SEO)</li>
      <li>• إنشاء خريطة الموقع (Sitemap)</li>
    </ul>
  </div>
</section>

{/* Delivery & Notes */}
<section className="max-w-6xl mx-auto px-6 py-16">
  <h2 className="text-3xl font-bold text-center mb-8">التسليم والملاحظات</h2>
  <ul className="space-y-4 text-gray-700 text-lg leading-relaxed">
    <li>• تسليم موقع جاهز للعمل والنشر</li>
    <li>• سرعة تحميل عالية ومتوافق مع جميع الأجهزة</li>
    <li>• ربط الموقع بأدوات جوجل الأساسية</li>
    <li>• لا يشمل إدارة إعلانات مدفوعة</li>
    <li>• أي إضافات مستقبلية يتم الاتفاق عليها لاحقًا</li>
  </ul>
</section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white text-center py-10">
        <p className="mb-2">📞 0551316892 – 0546596882</p>
        <p>تسليك مجاري بالرياض – نخدم شمال وجنوب الرياض</p>
      </footer>
    </main>
  );
}


