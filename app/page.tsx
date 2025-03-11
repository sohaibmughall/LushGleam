"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Droplets, Leaf, ShieldCheck, Upload } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      {/* Hero Section */}
      <section className="relative h-[90vh] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://img.freepik.com/free-vector/sakura-cosmetics-bottles-banner-serum-primer_33099-1764.jpg?t=st=1741677391~exp=1741680991~hmac=7e8e8e657a89311f39e471e19287eccd04276d45ed889cd7d26c3dab5810e821&w=826')",
            filter: "brightness(0.9)",
          }}
        />
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative container mx-auto h-full flex items-center">
          <div className="max-w-2xl text-white">
            <motion.h1
              className="text-6xl font-light mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Glow Naturally,
              <br />
              <span className="font-medium">Shine Sustainably 123</span>
            </motion.h1>
            <motion.p
              className="text-xl mb-8 text-white/90"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Experience luxury skincare that's kind to your skin and the
              planet.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Button
                size="lg"
                className="bg-white text-black hover:bg-white/90"
              >
                Take Skin Quiz
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* AI Skin Analysis Section */}
      <section className="py-24 container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light mb-4">AI-Powered Skin Analysis</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Upload a selfie and let our advanced AI analyze your skin type,
            concerns, and recommend the perfect products for your unique needs.
          </p>
        </div>

        <Card className="p-8 max-w-3xl mx-auto bg-white/50 backdrop-blur-sm">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <div className="border-2 border-dashed border-primary/20 rounded-lg p-8 text-center">
                <Upload className="h-12 w-12 mx-auto mb-4 text-primary/60" />
                <p className="text-sm text-muted-foreground">
                  Drag and drop your selfie here or click to upload
                </p>
              </div>
              <Button className="w-full">Analyze My Skin</Button>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-medium">How it works</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center">
                    1
                  </span>
                  Upload a clear selfie in natural lighting
                </li>
                <li className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center">
                    2
                  </span>
                  Our AI analyzes your skin characteristics
                </li>
                <li className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center">
                    3
                  </span>
                  Get personalized product recommendations
                </li>
              </ul>
            </div>
          </div>
        </Card>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light mb-4">Why Choose LushGleam</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Experience the perfect blend of luxury and sustainability with our
              innovative beauty solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 bg-white/50 backdrop-blur-sm">
              <Leaf className="h-12 w-12 mb-4 text-primary" />
              <h3 className="text-xl font-medium mb-2">100% Organic</h3>
              <p className="text-muted-foreground">
                All our products are made with certified organic ingredients,
                ensuring the purest form of skincare.
              </p>
            </Card>
            <Card className="p-6 bg-white/50 backdrop-blur-sm">
              <ShieldCheck className="h-12 w-12 mb-4 text-primary" />
              <h3 className="text-xl font-medium mb-2">Cruelty-Free</h3>
              <p className="text-muted-foreground">
                We never test on animals and ensure all our ingredients are
                ethically sourced.
              </p>
            </Card>
            <Card className="p-6 bg-white/50 backdrop-blur-sm">
              <Droplets className="h-12 w-12 mb-4 text-primary" />
              <h3 className="text-xl font-medium mb-2">Clean Formula</h3>
              <p className="text-muted-foreground">
                Free from harmful chemicals, our products are safe for you and
                the environment.
              </p>
            </Card>
          </div>
        </div>
      </section>
    </main>
  );
}
