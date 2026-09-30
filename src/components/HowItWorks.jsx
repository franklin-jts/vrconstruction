import {
  PackageCheck,
  PenTool,
  HardHat,
  KeyRound,
  Check,
} from 'lucide-react'
import SectionHeading from './SectionHeading.jsx'

const steps = [
  {
    icon: PackageCheck,
    num: '01',
    title: 'Select Package & Book',
    desc: 'Choose a construction package, review our completed projects, and make an initial booking to reserve your slot.',
  },
  {
    icon: PenTool,
    num: '02',
    title: 'Design & Agreement',
    desc: 'Finalize floor plans, 3D elevations and Vastu layout. Sign a transparent agreement with clear scope and specifications.',
  },
  {
    icon: HardHat,
    num: '03',
    title: 'Construction & Tracking',
    desc: 'Construction begins with quality material from trusted brands. Track every milestone with regular photo/video updates.',
  },
  {
    icon: KeyRound,
    num: '04',
    title: 'Handover & Warranty',
    desc: 'On-time completion and handover of your dream home with up to 10 years structural warranty.',
  },
]

export default function HowItWorks() {
  return (
    <>
      {/* =====================================================
          INLINE ANIMATION CSS
      ===================================================== */}

      <style>{`
        /* =================================================
           SECTION TITLE
        ================================================= */

        @keyframes howTitleIn {
          from {
            opacity: 0;
            transform: translateY(35px);
            filter: blur(6px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
            filter: blur(0);
          }
        }

        /* =================================================
           TIMELINE DRAW
        ================================================= */

        @keyframes timelineDraw {
          from {
            transform: scaleX(0);
            opacity: 0;
          }

          to {
            transform: scaleX(1);
            opacity: 1;
          }
        }

        /* =================================================
           STEP REVEAL
        ================================================= */

        @keyframes stepReveal {
          from {
            opacity: 0;
            transform: translateY(55px) scale(0.94);
            filter: blur(5px);
          }

          to {
            opacity: 1;
            transform: translateY(0) scale(1);
            filter: blur(0);
          }
        }

        /* =================================================
           ICON POP
        ================================================= */

        @keyframes iconPop {
          0% {
            opacity: 0;
            transform: scale(0.5) rotate(-12deg);
          }

          60% {
            opacity: 1;
            transform: scale(1.12) rotate(3deg);
          }

          100% {
            opacity: 1;
            transform: scale(1) rotate(0deg);
          }
        }

        /* =================================================
           NUMBER POP
        ================================================= */

        @keyframes numberPop {
          0% {
            opacity: 0;
            transform: scale(0) rotate(-20deg);
          }

          70% {
            opacity: 1;
            transform: scale(1.15) rotate(4deg);
          }

          100% {
            opacity: 1;
            transform: scale(1) rotate(0deg);
          }
        }

        /* =================================================
           CHECK LINE
        ================================================= */

        @keyframes checkIn {
          from {
            opacity: 0;
            transform: translateX(-8px);
          }

          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        /* =================================================
           ANIMATION CLASSES
        ================================================= */

        .how-title-animation {
          animation:
            howTitleIn 0.9s
            cubic-bezier(0.22, 1, 0.36, 1)
            both;
        }

        .how-timeline-animation {
          transform-origin: left center;

          animation:
            timelineDraw 1.4s
            cubic-bezier(0.22, 1, 0.36, 1)
            0.35s
            both;
        }

        .how-step-animation {
          animation:
            stepReveal 0.85s
            cubic-bezier(0.22, 1, 0.36, 1)
            both;
        }

        .how-icon-animation {
          animation:
            iconPop 0.7s
            cubic-bezier(0.22, 1, 0.36, 1)
            both;
        }

        .how-number-animation {
          animation:
            numberPop 0.6s
            cubic-bezier(0.22, 1, 0.36, 1)
            both;
        }

        /* =================================================
           STEP CARD
        ================================================= */

        .how-step-card {
          transition:
            transform 0.45s cubic-bezier(0.22, 1, 0.36, 1),
            box-shadow 0.45s ease;
        }

        .how-step-card:hover {
          transform: translateY(-10px);
        }

        /* =================================================
           ICON CONTAINER
        ================================================= */

        .how-icon-box {
          transition:
            background 0.35s ease,
            color 0.35s ease,
            transform 0.4s cubic-bezier(0.22, 1, 0.36, 1),
            box-shadow 0.35s ease;
        }

        .how-step-card:hover .how-icon-box {
          transform: translateY(-4px) scale(1.06);
          background: #8660f8;
          color: white;
          box-shadow:
            0 18px 35px rgba(134, 96, 248, 0.25);
        }

        /* =================================================
           NUMBER
        ================================================= */

        .how-number {
          transition:
            transform 0.35s ease,
            box-shadow 0.35s ease;
        }

        .how-step-card:hover .how-number {
          transform: scale(1.12) rotate(4deg);
          box-shadow:
            0 8px 20px rgba(134, 96, 248, 0.3);
        }

        /* =================================================
           TITLE
        ================================================= */

        .how-step-title {
          transition:
            color 0.3s ease,
            transform 0.3s ease;
        }

        .how-step-card:hover .how-step-title {
          color: #8660f8;
          transform: translateY(-2px);
        }

        /* =================================================
           DESCRIPTION
        ================================================= */

        .how-step-desc {
          transition:
            color 0.3s ease;
        }

        .how-step-card:hover .how-step-desc {
          color: #4b5563;
        }

        /* =================================================
           STEP CONNECTOR DOT
        ================================================= */

        .how-dot {
          transition:
            transform 0.35s ease,
            box-shadow 0.35s ease;
        }

        .how-step-card:hover .how-dot {
          transform: scale(1.4);
          box-shadow:
            0 0 0 7px rgba(134, 96, 248, 0.1);
        }

        /* =================================================
           MOBILE
        ================================================= */

        @media (max-width: 1023px) {
          .how-timeline-animation {
            display: none;
          }
        }

        /* =================================================
           REDUCED MOTION
        ================================================= */

        @media (prefers-reduced-motion: reduce) {
          .how-title-animation,
          .how-timeline-animation,
          .how-step-animation,
          .how-icon-animation,
          .how-number-animation {
            animation: none !important;
          }

          .how-step-card,
          .how-icon-box,
          .how-number,
          .how-step-title,
          .how-step-desc,
          .how-dot {
            transition: none !important;
          }
        }
      `}</style>

      {/* =====================================================
          SECTION
      ===================================================== */}

      <section
        id="how-it-works"
        className="relative overflow-hidden bg-gray-50 py-16 md:py-20"
      >
        {/* =================================================
            BACKGROUND DECORATION
        ================================================= */}

        <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-brand/5 blur-[120px]" />

        <div className="pointer-events-none absolute -right-32 bottom-10 h-80 w-80 rounded-full bg-brand/5 blur-[130px]" />

        <div className="relative mx-auto max-w-7xl px-4">

          {/* =================================================
              SECTION HEADING
          ================================================= */}

          <div className="how-title-animation">
            <SectionHeading
              eyebrow="How It Works"
              title="From Concept to Completion in 4 Simple Steps"
            />
          </div>

          {/* =================================================
              TIMELINE
          ================================================= */}

          <div className="relative mt-14">

            {/* Desktop connecting line */}

            <div
              className="
                how-timeline-animation
                pointer-events-none
                absolute
                left-[12.5%]
                right-[12.5%]
                top-8
                hidden
                h-[2px]
                origin-left
                lg:block
              "
            >
              <div className="h-full bg-gradient-to-r from-transparent via-brand/30 to-transparent" />

              {/* Moving highlight */}

              <div className="absolute left-0 top-0 h-full w-1/3 bg-gradient-to-r from-transparent via-brand/70 to-transparent opacity-70 blur-[1px]" />
            </div>

            {/* =================================================
                STEPS
            ================================================= */}

            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">

              {steps.map(
                ({ icon: Icon, num, title, desc }, index) => (
                  <div
                    key={num}
                    className="relative"
                  >

                    {/* =================================================
                        STEP CARD
                    ================================================= */}

                    <div
                      className="how-step-animation how-step-card relative h-full rounded-3xl border border-gray-100 bg-white p-6 text-center shadow-[0_15px_45px_rgba(15,23,42,0.06)]"
                      style={{
                        animationDelay: `${0.45 + index * 0.18}s`,
                      }}
                    >

                      {/* =================================================
                          TOP CONNECTOR DOT
                      ================================================= */}

                      <div
                        className="
                          how-dot
                          absolute
                          left-1/2
                          top-0
                          hidden
                          h-3
                          w-3
                          -translate-x-1/2
                          -translate-y-1/2
                          rounded-full
                          bg-brand
                          ring-4
                          ring-gray-50
                          lg:block
                        "
                      />

                      {/* =================================================
                          ICON
                      ================================================= */}

                      <div className="relative mx-auto flex w-fit">

                        <div
                          className="how-icon-box how-icon-animation flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-brand shadow-lg shadow-brand/10 ring-1 ring-brand/15"
                          style={{
                            animationDelay: `${0.7 + index * 0.18}s`,
                          }}
                        >
                          <Icon className="h-7 w-7" />
                        </div>

                        {/* =================================================
                            NUMBER BADGE
                        ================================================= */}

                        <span
                          className="how-number how-number-animation absolute -right-3 -top-3 flex h-8 w-8 items-center justify-center rounded-full bg-brand text-[11px] font-bold text-white shadow-lg shadow-brand/20"
                          style={{
                            animationDelay: `${0.85 + index * 0.18}s`,
                          }}
                        >
                          {num}
                        </span>
                      </div>

                      {/* =================================================
                          STEP TITLE
                      ================================================= */}

                      <h3 className="how-step-title mt-5 text-base font-bold text-ink md:text-lg">
                        {title}
                      </h3>

                      {/* Small divider */}

                      <div className="mx-auto mt-3 h-1 w-8 rounded-full bg-brand/30 transition-all duration-300 group-hover:w-12" />

                      {/* =================================================
                          DESCRIPTION
                      ================================================= */}

                      <p className="how-step-desc mx-auto mt-3 max-w-xs text-sm leading-relaxed text-gray-600">
                        {desc}
                      </p>

                      {/* =================================================
                          STEP FOOTER
                      ================================================= */}

                      <div className="mt-5 flex items-center justify-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-brand/60">

                        <Check className="h-3.5 w-3.5" />

                        Step {num}

                      </div>
                    </div>

                  </div>
                ),
              )}

            </div>
          </div>

          {/* =================================================
              BOTTOM MESSAGE
          ================================================= */}

          <div
            className="how-title-animation mx-auto mt-12 max-w-2xl rounded-2xl border border-brand/10 bg-white/70 px-5 py-4 text-center shadow-sm backdrop-blur-sm md:mt-14"
            style={{
              animationDelay: '1.3s',
            }}
          >
            <p className="text-sm leading-relaxed text-gray-600">
              <span className="font-semibold text-brand">
                Simple. Transparent. Reliable.
              </span>{' '}
              From the first consultation to handing over your keys,
              our team keeps you informed at every stage.
            </p>
          </div>

        </div>
      </section>
    </>
  )
}