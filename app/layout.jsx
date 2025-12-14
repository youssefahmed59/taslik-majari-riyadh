export const metadata = {
  title: "تسليك مجاري بالرياض – خدمة 24 ساعة",
  description:
    "أفضل شركة تسليك مجاري بالرياض 24 ساعة. تسليك مجاري، شفط بيارات، تنظيف الصرف الصحي بأحدث المعدات في شمال وجنوب الرياض.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body className="bg-gray-50 text-gray-900">
        {children}
      </body>
    </html>
  );
}
