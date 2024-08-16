"use client"

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="w-screen h-screen relative">
      <div
        className="flex items-center w-full h-full bg-cover bg-center"
        style={{ backgroundImage: "url(/main-bg.webp)" }}
      >
        <div className="pl-20 md:pl-40 pb-56 md:pb-20 flex flex-col gap-5 z-[10] max-w-[750px]">
          <h1 className="text-[50px] text-white font-semibold">
            Hi, I&apos;m
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">
              {" "}
              Gaid Yusuf! 👋
            </span>
          </h1>
          <p className="text-gray-200 hidden md:block mb-1">
            Welcome to my portfolio! I&apos;m a passionate computer science graduate with a knack for creating innovative solutions.
          </p>
          <p className="text-gray-200 hidden md:block mb-1">
            When I&apos;m not coding, you&apos;ll find me exploring new tech trends, contributing to open-source projects, or enjoying a good challenge in problem-solving. I&apos;m always eager to take on new projects and collaborate with others who share my enthusiasm for technology.
          </p>
          <p className="text-gray-200 hidden md:block mb-1">
            Feel free to explore my work and connect with me—let&apos;s build something amazing together!
          </p>
          <div className="flex-col md:flex-row hidden md:flex gap-5">
            <Link
              href="/my-skills"
              className="rounded-[20px] group relative bg-transparent px-5 border hover:bg-purple-400 px-5 py-3 text-lg text-white max-w-[200px]"
            >
              Skills
            </Link>
            <Link
              href="/my-projects"
              className="rounded-[20px] group relative bg-trasparent px-5 border hover:bg-purple-400 border-white py-3 text-lg text-white max-w-[200px]"
            >
              <div className="absolute rounded-[20px] z-[1] bg-white inset-0 opacity-0 group-hover:opacity-20" />
              My Projects
            </Link>
            <Link
              href="/contact-me"
              className="rounded-[20px] group relative bg-trasparent px-5 border hover:bg-purple-400 border-white px-5 py-3 text-lg text-white max-w-[200px]"
            >
              <div className="absolute rounded-[20px] z-[1] bg-white inset-0 opacity-0 group-hover:opacity-20" />
              Contact Me
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 right-0 z-[10]">
        <Image
          src="/horse.png"
          alt="horse"
          height={300}
          width={300}
          className="absolute right-55 top-40"
        />

        <Image src="/cliff.webp" alt="cliff" width={480} height={480} />
      </div>

      <div className="absolute bottom-0 z-[5] w-full h-auto">
        <Image
          src="/trees.webp"
          alt="trees"
          width={2000}
          height={2000}
          className="w-full h-full"
        />
      </div>

      <Image
        src="/stars.png"
        alt="stars"
        height={300}
        width={300}
        className="absolute top-0 left-0 z-[10]"
      />
    </main>
  );
}
