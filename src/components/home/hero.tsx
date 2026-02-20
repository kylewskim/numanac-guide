"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PhoneFrame } from "@/components/guide/phone-frame";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";

export function Hero() {
  return (
    <section className="bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <p className="text-sm text-gray-400 mb-4 tracking-wide">Official Numanac Guide</p>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight leading-tight mb-5">
              A guide for those{" "}
              <span className="text-primary">new to Numanac</span>
            </h1>
            <p className="text-base text-gray-500 leading-relaxed mb-8 max-w-md">
              Follow step-by-step instructions to manage your farm easily.
              Anyone can do it — no technical knowledge needed.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                asChild
                size="lg"
                className="gap-2 bg-gray-900 hover:bg-gray-700 text-white"
              >
                <Link href="/getting-started">
                  Get Started <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="gap-2 border-gray-200 text-gray-700 hover:border-gray-400 hover:text-gray-900">
                <Link href="/ask">
                  <MessageCircle className="w-4 h-4" />
                  Ask Alma
                </Link>
              </Button>
            </div>
          </motion.div>

          {/* Phone Mock */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="flex justify-center"
          >
            <PhoneFrame />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
