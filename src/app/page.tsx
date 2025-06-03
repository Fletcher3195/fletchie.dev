/* eslint-disable react/jsx-no-comment-textnodes */
import { useMemo } from "react";
import Image from "next/image";
import Head from "next/head";

export default function Home() {
  const randomQuote = useMemo(() => {
    const quotes = [
      {
        quote:
          "Science is what we understand well enough to explain to a computer. Art is everything else we do.",
        author: "Donald Knuth",
      },
      {
        quote:
          "Good judgement comes from experience, and experience comes from bad judgement.",
        author: "Frederick P. Brooks",
      },
      {
        quote: "Experience is what you get when you didn't get what you wanted",
        author: "Randy Pausch",
      },
    ];
    return quotes[Math.floor(Math.random() * quotes.length)];
  }, []);

  const jobs = [
    {
      company: "Thoropass Inc.",
      roles: [
        {
          title: "Technical Product Manager",
          duration: "2023 — Present",
          summary:
            "Leveraged integrations to produce audit centric automations, reducing time in audit by 56% (42 → 19 days).",
          bullets: [
            "Launched unified integration pipeline adopted by 80% of customers.",
            "Reduced auditor turnaround time by 40% through fetch-based workflows.",
          ],
        },
        {
          title: "Associate Product Manager",
          duration: "2021 — 2023",
          summary:
            "Drove roadmap and delivery for third-party integrations, contributing to SOC 2 and ISO automation success.",
          bullets: [
            "Launched unified integration pipeline adopted by 80% of customers.",
            "Reduced auditor turnaround time by 40% through fetch-based workflows.",
          ],
        },
      ],
    },
    {
      company: "Unisys Corporation",
      roles: [
        {
          title: "Software Engineer",
          duration: "2019 — 2021",
          summary:
            "Built enterprise-grade access control and authentication tools using Java and Angular for Fortune 500 clients.",
          bullets: [
            "Launched unified integration pipeline adopted by 80% of customers.",
            "Reduced auditor turnaround time by 40% through fetch-based workflows.",
          ],
        },
        {
          title: "Associate Software Engineer",
          duration: "2017 — 2019",
          summary:
            "Built enterprise-grade access control and authentication tools using Java and Angular for Fortune 500 clients.",
          bullets: [
            "Launched unified integration pipeline adopted by 80% of customers.",
            "Reduced auditor turnaround time by 40% through fetch-based workflows.",
          ],
        },
        {
          title: "Software Engineering Intern",
          duration: "Summer 2016",
          summary:
            "Built enterprise-grade access control and authentication tools using Java and Angular for Fortune 500 clients.",
          bullets: [
            "Launched unified integration pipeline adopted by 80% of customers.",
            "Reduced auditor turnaround time by 40% through fetch-based workflows.",
          ],
        },
      ],
    },
    {
      company: "Moyer Auto Group",
      roles: [
        {
          title: "Software Engineering Intern",
          duration: "Summer 2015",
          summary:
            "Built enterprise-grade access control and authentication tools using Java and Angular for Fortune 500 clients.",
          bullets: [
            "Launched unified integration pipeline adopted by 80% of customers.",
            "Reduced auditor turnaround time by 40% through fetch-based workflows.",
          ],
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 font-sans">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap"
          rel="stylesheet"
        />
      </Head>
      <main className="max-w-4xl mx-auto px-6 py-20">
        <section className="flex items-center mb-16">
          <div className="mr-8">
            <Image
              q
              src="https://avatars.githubusercontent.com/u/40469512?v=4"
              alt="James Fletcher"
              width={128}
              height={128}
              className="rounded-full object-cover"
            />
          </div>
          <div>
            <h1 className="text-5xl font-bold mb-2">Hi, I’m James Fletcher</h1>
            <p className="text-lg italic text-gray-600 dark:text-gray-300">
              “{randomQuote.quote}” —{" "}
              <span className="not-italic">{randomQuote.author}</span>
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6">Employment</h2>
          <ul className="space-y-6">
            {jobs.map((job, idx) => (
              <li
                key={idx}
                className="border p-4 rounded-lg hover:shadow-md transition font-mono text-sm sm:text-base"
              >
                {/* Company */}
                <div
                  className="uppercase pb-2 underline text-xl font-semibold tracking-wide text-gray-700 dark:text-gray-100 mb-1"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  {job.company}
                </div>
                {/* Roles */}
                <ul className="space-y-6">
                  {job.roles.map((role, rIdx) => (
                    <li key={rIdx}>
                      <div className="flex justify-between flex-col sm:flex-row sm:items-start mb-2">
                        <p className="text-green-500 dark:text-green-650">
                          // {role.title}
                        </p>
                        <p className="text-gray-500 dark:text-gray-400 whitespace-nowrap mt-1 sm:mt-0">
                          {role.duration}
                        </p>
                      </div>
                      {/* Summary (outside blockquote) */}
                      <p className="text-gray-600 dark:text-gray-300 font-sans mb-2">
                        {role.summary}
                      </p>

                      {/* Bullets (blockquote style) */}
                      <div className="border-l-4 border-gray-300 dark:border-gray-600 pl-4 text-gray-700 dark:text-gray-300 font-sans space-y-2">
                        {role.bullets.map((point, pIdx) => (
                          <p key={pIdx}>&gt; {point}</p>
                        ))}
                      </div>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6">Projects</h2>
          <ul className="space-y-4">
            <li className="border p-4 rounded-lg hover:shadow-lg transition">
              <a
                href="#"
                className="text-blue-600 hover:underline font-semibold"
              >
                Project One
              </a>
              <p className="mt-1 text-gray-700 dark:text-gray-300">
                Description of Project One.
              </p>
            </li>
            <li className="border p-4 rounded-lg hover:shadow-lg transition">
              <a
                href="#"
                className="text-blue-600 hover:underline font-semibold"
              >
                Project Two
              </a>
              <p className="mt-1 text-gray-700 dark:text-gray-300">
                Description of Project Two.
              </p>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-semibold mb-6">Contact</h2>
          <p>
            You can find me on{" "}
            <a
              href="https://github.com/Fletcher3195"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              GitHub
            </a>{" "}
            or{" "}
            <a
              href="https://linkedin.com/in/fletcher3195"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              LinkedIn
            </a>
            .
          </p>
          <p className="mt-2">
            Or email me at{" "}
            <a href="mailto:fletcher.3195@gmail.com" className="underline">
              fletcher.3195@gmail.com
            </a>
            .
          </p>
        </section>
      </main>
    </div>
  );
}
