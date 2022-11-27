import "../styles/global.css"

import { Montserrat } from "@next/font/google"
import { AnimateSharedLayout, motion } from "framer-motion"
import type { AppProps } from "next/app"
import Head from "next/head"
import Link from "next/link"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"

import { HamburgerButton } from "@/components/Hamburger"

const montserrat = Montserrat({ subsets: ["latin"] })

const MyApp = ({ Component, pageProps }: AppProps) => {
  const router = useRouter()
  const [nav, toggleNav] = useState(false)

  const spring = {
    type: "spring",
    stiffness: 300,
    damping: 30
  }

  useEffect(() => {
    setTimeout(() => {
      toggleNav(false)
    }, 100)
  }, [router.pathname])

  return (
    <main className={montserrat.className}>
      <Head>
        <title> Anchaleeporn Apipattarachaiwong</title>
      </Head>
      <AnimateSharedLayout>
        <div className="w-full py-16 px-10 font-medium text-defGray-400">
          <div className="mx-auto w-full max-w-[1238px]">
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-medium">Two Homes</h1>
              <AnimateSharedLayout>
                <div className="hidden w-full max-w-[360px] justify-between space-x-4 sm:flex">
                  <div className="relative">
                    <Link
                      href="/"
                      style={{
                        all: "unset"
                      }}
                    >
                      <span className="cursor-pointer">Gallery</span>
                    </Link>
                    {router.pathname === "/" && (
                      <motion.div
                        layoutId="underline"
                        initial={false}
                        transition={spring}
                        className="w-full border-b border-defGray-400"
                      />
                    )}
                  </div>
                  <div className="relative">
                    <Link
                      href="/concept"
                      style={{
                        all: "unset"
                      }}
                    >
                      <span className="cursor-pointer">Concept</span>
                    </Link>
                    {router.pathname === "/concept" && (
                      <motion.div
                        layoutId="underline"
                        initial={false}
                        transition={spring}
                        className="w-full border-b border-defGray-400"
                      />
                    )}
                  </div>
                  <div className="relative">
                    <Link
                      href="/photos"
                      style={{
                        all: "unset"
                      }}
                    >
                      <span className="cursor-pointer">More Photos</span>
                    </Link>
                    {router.pathname === "/photos" && (
                      <motion.div
                        layoutId="underline"
                        initial={false}
                        transition={spring}
                        className="w-full border-b border-defGray-400"
                      />
                    )}
                  </div>
                </div>
                <div className="relative sm:hidden">
                  <HamburgerButton
                    reveal={nav}
                    toggle={() => {
                      toggleNav((prev) => !prev)
                    }}
                  />
                  <div className="absolute top-0 right-0 rounded-sm">
                    {nav && (
                      <div
                        onClick={() => {
                          toggleNav(false)
                        }}
                        className="fixed top-0 left-0 min-h-screen w-full"
                      />
                    )}
                    <div className="flex min-w-[140px] flex-col items-end">
                      <div className="relative z-20 mb-1 h-8 w-full bg-white">
                        <motion.div
                          initial={{ clipPath: "inset(0 0 0 100%)" }}
                          animate={
                            nav
                              ? { clipPath: "inset(0 0 0 0.01%)" }
                              : { clipPath: "inset(0 0 0 100%)" }
                          }
                          transition={{ duration: 0.4, delay: nav ? 0 : 1 }}
                          className="absolute z-20 mb-1 h-8 w-full border-b border-defGray-400 bg-white"
                        />
                      </div>
                      <motion.div
                        initial={{ y: -25 }}
                        className="z-[15] flex items-center"
                        animate={nav ? { y: 0 } : { y: -25 }}
                        transition={{
                          delay: nav ? 0.4 + 0.4 : 0.4,
                          type: "tween"
                        }}
                      >
                        {router.pathname === "/" && (
                          <motion.div
                            layoutId="dot"
                            initial={false}
                            transition={spring}
                            className="mr-1 h-2 w-2 rounded-full bg-defGray-400"
                          />
                        )}
                        <Link
                          href="/"
                          style={{
                            all: "unset"
                          }}
                        >
                          <span className="cursor-pointer bg-white">
                            Gallery
                          </span>
                        </Link>
                      </motion.div>
                      <motion.div
                        initial={{ y: -50 }}
                        className="z-[15] flex items-center"
                        animate={nav ? { y: 0 } : { y: -50 }}
                        transition={{ delay: 0.6, type: "tween" }}
                      >
                        {router.pathname === "/concept" && (
                          <motion.div
                            layoutId="dot"
                            initial={false}
                            transition={spring}
                            className="mr-1 h-2 w-2 rounded-full bg-defGray-400"
                          />
                        )}
                        <Link
                          href="/concept"
                          style={{
                            all: "unset"
                          }}
                        >
                          <span className="cursor-pointer bg-white">
                            Concept
                          </span>
                        </Link>
                      </motion.div>
                      <motion.div
                        initial={{ y: -75 }}
                        className="z-[15] flex items-center"
                        animate={nav ? { y: 0 } : { y: -75 }}
                        transition={{ delay: nav ? 0.4 : 0.8, type: "tween" }}
                      >
                        {router.pathname === "/photos" && (
                          <motion.div
                            layoutId="dot"
                            initial={false}
                            transition={spring}
                            className="mr-1 h-2 w-2 rounded-full bg-defGray-400"
                          />
                        )}
                        <Link
                          href="/photos"
                          style={{
                            all: "unset"
                          }}
                        >
                          <span className="cursor-pointer bg-white">
                            More Photos
                          </span>
                        </Link>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </AnimateSharedLayout>
            </div>
            <motion.div layout={"position"}>
              <Component {...pageProps} />
            </motion.div>
            <motion.div
              layout
              className="mt-20 w-full border-t border-defGray-400"
            >
              <AnimateSharedLayout>
                <motion.div className="mx-auto my-9 flex w-full max-w-[360px] justify-between space-x-4 sm:my-14">
                  <div className="relative">
                    <Link
                      href="/"
                      style={{
                        all: "unset"
                      }}
                    >
                      <span className="cursor-pointer">Gallery</span>
                    </Link>
                    {router.pathname === "/" && (
                      <motion.div
                        layoutId="underline"
                        initial={false}
                        transition={spring}
                        className="w-full border-b border-defGray-400"
                      />
                    )}
                  </div>
                  <div className="relative">
                    <Link
                      href="/concept"
                      style={{
                        all: "unset"
                      }}
                    >
                      <span className="cursor-pointer">Concept</span>
                    </Link>
                    {router.pathname === "/concept" && (
                      <motion.div
                        layoutId="underline"
                        initial={false}
                        transition={spring}
                        className="w-full border-b border-defGray-400"
                      />
                    )}
                  </div>
                  <div className="relative">
                    <Link
                      href="/photos"
                      style={{
                        all: "unset"
                      }}
                    >
                      <span className="cursor-pointer">More Photos</span>
                    </Link>
                    {router.pathname === "/photos" && (
                      <motion.div
                        layoutId="underline"
                        initial={false}
                        transition={spring}
                        className="w-full border-b border-defGray-400"
                      />
                    )}
                  </div>
                </motion.div>
              </AnimateSharedLayout>
              <motion.h1 className="text-center text-sm">
                Anchaleeporn Apipattarachaiwong
              </motion.h1>
            </motion.div>
          </div>
        </div>
      </AnimateSharedLayout>
    </main>
  )
}

export default MyApp
