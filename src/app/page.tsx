"use client";

import Image from "next/image";

const VCARD_CONTENT = `BEGIN:VCARD
VERSION:3.0
N:Toomey;Shaun;;;
FN:Shaun Toomey
ORG:Blue Sun Ministrees
TEL;TYPE=CELL:+16307283463
END:VCARD`;

export default function Home() {
  const handleSaveContact = () => {
    const blob = new Blob([VCARD_CONTENT], { type: "text/vcard" });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = "blue-sun-ministrees.vcf";
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="noise-bg relative flex min-h-screen items-center justify-center px-6 py-12 font-sans text-white">
      <div className="business-card glass-card w-full max-w-md overflow-hidden rounded-3xl border border-white/10 p-10 text-base backdrop-blur-3xl">
        <div className="flex items-center gap-6">
          <div
            className="flex h-28 w-28 items-center justify-center rounded-[36px]"
            style={{
              background:
                "linear-gradient(145deg, rgba(255, 253, 1, 0.16), rgba(33, 89, 231, 0.25))",
              boxShadow:
                "0 20px 35px rgba(33, 89, 231, 0.55), inset 0 1px 0 rgba(255, 253, 1, 0.3)",
            }}
          >
            <Image
              src="/bluesun.png"
              alt="Blue Sun Ministrees logo"
              width={120}
              height={120}
              className="h-24 w-24 object-contain"
              priority
            />
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-[#FFFD01] opacity-90">
              Blue Sun
            </p>
            <h1 className="text-3xl font-semibold tracking-tight text-white">
              Ministrees
            </h1>
          </div>
        </div>

        <div className="mt-8 space-y-4 text-sm leading-relaxed text-white">
          <p className="font-semibold">
            In the bible it says a man&apos;s life should be 120 years and
 man&apos;s life is as long as the life of a
            tree.
          </p>
          <p className="text-xs font-bold uppercase tracking-[0.35em] text-white">
            Healthcare for Entrepreneurs and Underdogs
          </p>
        </div>

        <div className="mt-8 border-t border-white/10 pt-6 text-sm text-white">
          <p className="text-xs uppercase tracking-[0.45em] text-white/70">
            Contact
          </p>
          <p className="mt-2 text-lg font-semibold text-white">630.728.3463</p>
        </div>

        <div className="mt-6">
          <button
            type="button"
            onClick={handleSaveContact}
            className="jiggle-alert w-full rounded-2xl px-4 py-3 text-center text-sm font-semibold uppercase tracking-wide transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
            style={{
              background:
                "linear-gradient(135deg, rgba(255, 253, 1, 0.95), rgba(255, 253, 1, 0.75))",
              color: "#2159E7",
              boxShadow:
                "0 12px 30px rgba(255, 253, 1, 0.45), inset 0 1px 0 rgba(255, 253, 1, 0.8)",
            }}
          >
            Save contact
          </button>
        </div>
      </div>
    </div>
  );
}
