import Breadcrumbs from "@/components/ui/Breadcrumbs";
import {
  Check,
  CheckCircle,
  Link,
  Search,
  LineChart,
  PieChart,
  Eye,
} from "lucide-react";
import Image from "next/image";

export const metadata = {
  title: "Link Building SEO Company in Chennai | Link Building SEO Services",
  description:
    "Syscorp trusted Link Building SEO company in Chennai helping businesses improve domain authority, keyword rankings, Organic traffic through high-quality backlinks. Our link building strategies ethical, Google-approved, focused on long-term SEO growth.",
};

export default function TechnicalSEOPage() {
  return (
    <>
      {/* PAGE HEADER */}
      <section className="bg-[#011146] py-16 md:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6">
            Link Building SEO
          </h1>

          <div className="flex justify-center">
            <div className="inline-flex sm:bg-white/10 sm:backdrop-blur-md sm:px-6 sm:py-2 sm:rounded-full sm:border sm:border-white/20">
              <Breadcrumbs />
            </div>
          </div>
        </div>
      </section>

      {/* HERO SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          {/* LEFT CONTENT */}
          <div>
            <h2 className="text-3xl font-bold mb-4">
              Link Building SEO Company in Chennai
            </h2>

            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              Syscorp trusted Link Building SEO company in Chennai helping
              businesses improve domain authority, keyword rankings, Organic
              traffic through high-quality backlinks. Our link building
              strategies ethical, Google-approved, focused on long-term SEO
              growth. As a professional Link Building SEO company in Chennai, we
              build strong backlink profiles increase trust and visibility in
              search engines.
            </p>

            <div className="mt-8 flex gap-4 flex-wrap">
              <button className="bg-[#00A3FF] text-white px-6 py-3 rounded-full font-semibold shadow hover:bg-blue-600 transition">
                Get Free SEO Audit
              </button>

              <button className="border border-gray-300 px-6 py-3 rounded-full font-semibold text-gray-800 hover:bg-gray-100 transition">
                Contact Us
              </button>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center">
            <Image
              src="/images/services_images/link_building_01.png"
              alt="On Page SEO Service"
              width={500}
              height={700}
              className="w-full max-w-2xl object-contain"
            />
          </div>
        </div>
      </section>

      {/* WHY CHOOSE SECTION */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Why Choose Syscorp as Your Link Building SEO Company in Chennai?
            </h2>
            <p className="mt-4 text-lg text-gray-600 leading-relaxed">
              Choosing right Link Building SEO company in Chennai is essential
              sustainable SEO success. At Syscorp, quality always comes before
              quantity.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* LEFT IMAGE */}
            <div className="flex justify-center">
              <Image
                src="/images/services_images/link_building_03.png"
                alt="On Page SEO Service"
                width={500}
                height={400}
                className="w-full max-w-md object-cover"
              />
            </div>

            {/* RIGHT CONTENT */}
            <div className="space-y-6">
              {[
                "White-hat link building practices",
                "High-authority and niche-relevant backlinks",
                "Natural anchor text strategy",
                "Competitor backlink analysis",
                "Transparent reporting",
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-4">
                  <CheckCircle className="w-5 h-5 text-[#00A3FF] flex-shrink-0" />
                  <p className="text-lg text-gray-700 leading-relaxed m-0">
                    {item}
                  </p>
                </div>
              ))}

              <p className="text-lg text-gray-600 leading-relaxed">
                This makes Syscorp a reliable Link Building SEO company in
                Chennai for businesses across industries.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Our Link Building SEO Services Include
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {[
              {
                title: "High-Quality Backlink Building",
                desc: "As an experienced Link Building SEO company in Chennai, we build:",
                points: [
                  "Editorial backlinks",
                  "Contextual links",
                  "Authority website links",
                ],
              },
              {
                title: "Guest Posting & Outreach",
                desc: "Our Link Building SEO company in Chennai secures:",
                points: [
                  "Guest posts on relevant sites",
                  "Branded and keyword-rich backlinks",
                  "Content-driven link placements",
                ],
              },
              {
                title: "Local Link Building",
                desc: "We improve local authority through:",
                points: [
                  "Chennai-based business directories",
                  "Local citations and listings",
                  "Geo-relevant backlinks",
                ],
              },
              {
                title: "Backlink Audit & Toxic Link Removal",
                desc: "Professional Link Building SEO company in Chennai, we:",
                points: [
                  "Identify spam or toxic links",
                  "Disavow harmful backlinks",
                  "Protect websites from penalties",
                ],
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-gray-50 border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>

                {service.desc && (
                  <p className="text-gray-600 text-lg mb-5 leading-relaxed">
                    {service.desc}
                  </p>
                )}

                <ul className="space-y-3">
                  {service.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="mt-1" size={18} />
                      <span className="text-gray-700 text-lg">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IMPORTANCE SECTION */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Importance of Link Building SEO
            </h2>
            <p className="mt-4 text-lg text-gray-600 leading-relaxed">
              Link building is a core ranking factor. As a skilled Link Building
              SEO company in Chennai, Syscorp helps websites trust and
              authority.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* LEFT SIDE CONTENT */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Why Link Building Matters:
              </h3>

              <ul className="space-y-4">
                {[
                  "Improves domain authority",
                  "Boosts keyword rankings",
                  "Increases organic traffic",
                  "Builds brand credibility",
                  "Supports long-term SEO success",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-4">
                    <CheckCircle className="w-5 h-5 text-[#00A3FF] flex-shrink-0" />
                    <span className="text-lg text-gray-700 font-medium">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* RIGHT SIDE IMAGE */}
            <div className="flex justify-center">
              <Image
                src="/images/services_images/link_building_002.png"
                alt="Local SEO Importance"
                width={500}
                height={400}
                className="object-contain rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Our Link Building SEO Process
            </h2>
            <p className="mt-4 text-lg text-gray-600 leading-relaxed">
              Professional Link Building SEO company in Chennai, we follow a
              proven process:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* LEFT SIDE IMAGE */}
            <div className="flex justify-center">
              <Image
                src="/images/services_images/link_building_06.png"
                alt="Local SEO Process"
                width={500}
                height={400}
                className="object-contain rounded-2xl"
              />
            </div>

            {/* RIGHT SIDE PROCESS */}
            <div>
              <div className="space-y-5">
                {[
                  "Backlink profile and competitor analysis",
                  "Link building strategy planning",
                  "High-quality content creation",
                  "Outreach and link acquisition",
                  "Link monitoring and optimization",
                  "Monthly reporting and insights",
                ].map((step, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#00A3FF] text-white font-bold text-lg shadow-md flex-shrink-0">
                      {index + 1}
                    </div>

                    <p className="text-lg text-gray-700 leading-relaxed m-0">
                      {step}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TOOLS SECTION */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Tools We Use for Link Building SEO
            </h2>
            <p className="mt-4 text-lg text-gray-600 leading-relaxed">
              Syscorp advanced SEO tools deliver measurable results as a Link
              Building SEO company in Chennai:
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "Ahrefs", icon: <Link size={22} strokeWidth={1.5} /> },
              { name: "SEMrush", icon: <Search size={22} strokeWidth={1.5} /> },
              {
                name: "Google Search Console",
                icon: <LineChart size={22} strokeWidth={1.5} />,
              },
              {
                name: "Google Analytics (GA4)",
                icon: <PieChart size={22} strokeWidth={1.5} />,
              },
              {
                name: "Link monitoring tools",
                icon: <Eye size={22} strokeWidth={1.5} />,
              },
            ].map((tool, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-lg transition flex items-center gap-4"
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#00A3FF]/10 text-[#00A3FF]">
                  {tool.icon}
                </div>

                <p className="text-lg text-gray-800 font-semibold m-0">
                  {tool.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHO NEEDS SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Who Needs Link Building SEO Services?
            </h2>
            <p className="mt-4 text-lg text-gray-600 leading-relaxed">
              Our Link Building SEO company in Chennai services ideal for:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* LEFT IMAGE */}
            <div className="flex justify-center">
              <Image
                src="/images/services_images/link_building_05.png"
                alt="On Page SEO Service"
                width={500}
                height={400}
                className="w-full max-w-md object-cover"
              />
            </div>

            {/* RIGHT CONTENT */}
            <div className="space-y-6">
              {[
                "Business websites",
                "E-commerce platforms",
                "Local businesses",
                "Competitive industries",
                "Websites with low authority",
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-4">
                  <CheckCircle className="w-5 h-5 text-[#00A3FF] flex-shrink-0" />

                  <p className="text-lg text-gray-700 m-0">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-20 bg-[#00A3FF] text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl max-w-4xl mx-auto md:text-4xl font-bold mb-6">
            Get Started with the Best Link Building SEO Company in Chennai
          </h2>

          <p className="text-lg max-w-3xl mx-auto leading-relaxed mb-10">
            If looking for a dependable Link Building SEO company in Chennai,
            Syscorp delivers ethical that improve rankings, traffic & online
            authority.
          </p>

          <a
            href="/contact"
            className="bg-white text-[#00a3ff] px-6 py-3 rounded-lg font-semibold transition"
          >
            Contact Us
          </a>
        </div>
      </section>
    </>
  );
}
