"use client";

import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Leaf, Recycle, TreePine, Droplets } from "lucide-react";

export default function Sustainability() {
  const stats = [
    {
      value: "100%",
      label: "Recyclable Packaging",
      icon: Recycle
    },
    {
      value: "50K+",
      label: "Trees Planted",
      icon: TreePine
    },
    {
      value: "0%",
      label: "Plastic Waste",
      icon: Leaf
    },
    {
      value: "95%",
      label: "Natural Ingredients",
      icon: Droplets
    }
  ];

  const initiatives = [
    {
      title: "Zero Waste Packaging",
      description: "All our packaging is made from recycled materials and is 100% recyclable or biodegradable.",
      image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
    },
    {
      title: "Ethical Sourcing",
      description: "We work directly with local farmers to source organic ingredients while ensuring fair wages.",
      image: "https://images.unsplash.com/photo-1586767240180-f99b8524c634?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
    },
    {
      title: "Carbon Neutral",
      description: "Our operations are carbon neutral through renewable energy use and offset programs.",
      image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
    }
  ];

  return (
    <main className="min-h-screen pt-24 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-light mb-4">Our <span className="font-medium">Sustainability</span> Journey</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We're committed to making beauty sustainable. Discover how we're working to protect our planet while delivering exceptional skincare.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="p-6 text-center">
                  <Icon className="h-8 w-8 mx-auto mb-4 text-primary" />
                  <div className="text-3xl font-medium mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </Card>
              </motion.div>
            );
          })}
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {initiatives.map((initiative, index) => (
            <motion.div
              key={initiative.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden">
                <div className="aspect-video">
                  <img
                    src={initiative.image}
                    alt={initiative.title}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-medium mb-2">{initiative.title}</h3>
                  <p className="text-muted-foreground">{initiative.description}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}