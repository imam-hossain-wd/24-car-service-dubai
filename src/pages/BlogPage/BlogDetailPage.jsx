"use client";

import Image from "next/image";
import { Calendar, User, Tag, Phone, MessageCircle } from "lucide-react";
import { SiteConfig } from "@/config/site";

export default function BlogDetailPage({ blog }) {

  if (!blog) {
    return (
      <div className="py-40 text-center text-lg">
        Blog not found
      </div>
    );
  }

  // Convert line breaks to paragraphs
  const paragraphs = blog.content.split("\n\n");

  return (
    <article className="w-full">

      {/* HERO SECTION */}

      <section className="relative w-full h-[380px] md:h-[480px] overflow-hidden">

        <Image
          src={blog.image}
          alt={blog.title}
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/50" />

        <div className="absolute bottom-0 w-full">
          <div className="max-w-6xl mx-auto px-6 pb-12 text-white">

            <h1 className="text-3xl md:text-5xl font-bold leading-tight max-w-4xl">
              {blog.title}
            </h1>

            <div className="flex flex-wrap gap-6 mt-4 text-sm">

              <span className="flex items-center gap-2">
                <User size={16} />
                {blog.author}
              </span>

              <span className="flex items-center gap-2">
                <Calendar size={16} />
                {blog.date}
              </span>

            </div>

          </div>
        </div>
      </section>


      {/* CONTENT SECTION */}

      <section className="max-w-6xl mx-auto px-6 py-12 grid lg:grid-cols-[1fr_320px] gap-12">

        {/* BLOG CONTENT */}

        <div>

          <p className="text-lg text-muted-foreground mb-8 font-medium">
            {blog.excerpt}
          </p>

          <div className="space-y-6 text-[17px] leading-relaxed text-muted-foreground">

            {paragraphs.map((para, index) => {

              // heading detection
              if (para.startsWith("###")) {
                return (
                  <h3
                    key={index}
                    className="text-xl font-semibold text-foreground mt-10"
                  >
                    {para.replace("###", "")}
                  </h3>
                );
              }

              // list detection
              if (para.includes("- ")) {
                const items = para.split("\n").filter(i => i.startsWith("-"));

                return (
                  <ul key={index} className="space-y-2 list-disc pl-5">
                    {items.map((item, i) => (
                      <li key={i}>{item.replace("- ", "")}</li>
                    ))}
                  </ul>
                );
              }

              return (
                <p key={index}>
                  {para.replace(/\*\*/g, "")}
                </p>
              );
            })}

          </div>


          {/* TAGS */}

          <div className="flex flex-wrap gap-3 mt-12">

            {blog.tags?.map((tag, index) => (
              <span
                key={index}
                className="flex items-center gap-2 text-sm bg-muted px-4 py-2 rounded-full"
              >
                <Tag size={14} />
                {tag}
              </span>
            ))}

          </div>

        </div>


        {/* SIDEBAR */}

        <aside className="space-y-6">

          {/* CALL BOX */}

          <div className="bg-card border rounded-xl p-6 shadow-sm">

            <h3 className="text-xl font-semibold mb-3">
              Need Car Repair in Dubai?
            </h3>

            <p className="text-muted-foreground text-sm mb-6">
              Our mobile mechanics can reach you anywhere in Dubai quickly.
            </p>

            <div className="space-y-3">

              <a
                href={SiteConfig.numberCallLink}
                className="flex items-center justify-center gap-2 w-full bg-emerald-600 text-white py-3 rounded-lg font-medium hover:opacity-90 transition"
              >
                <Phone size={18} />
                Call Now
              </a>

              <a
                href={SiteConfig.whatsappCall}
                target="_blank"
                className="flex items-center justify-center gap-2 w-full border py-3 rounded-lg font-medium hover:bg-muted transition"
              >
                <MessageCircle size={18} />
                WhatsApp
              </a>

            </div>

          </div>


          {/* POPULAR SERVICES */}

          <div className="bg-card border rounded-xl p-6 shadow-sm">

            <h3 className="text-lg font-semibold mb-4">
              Popular Services
            </h3>

            <ul className="space-y-3 text-sm text-muted-foreground">

              <li>• Car Battery Replacement</li>
              <li>• Car AC Repair</li>
              <li>• Engine Diagnostics</li>
              <li>• Radiator Repair</li>
              <li>• Brake Pad Replacement</li>

            </ul>

          </div>

        </aside>

      </section>

    </article>
  );
}