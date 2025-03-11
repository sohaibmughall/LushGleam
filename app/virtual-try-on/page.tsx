"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import { Camera, Joystick as Lipstick, Palette, Sparkles } from "lucide-react";

export default function VirtualTryOn() {
  return (
    <main className="min-h-screen pt-24 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-light mb-4">Virtual <span className="font-medium">Try-On</span></h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Experience our products virtually before you buy. Try different shades and see how they look on you in real-time.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <Card className="p-6">
            <div className="aspect-square bg-muted rounded-lg flex items-center justify-center mb-6">
              <Camera className="h-12 w-12 text-muted-foreground" />
            </div>
            <Button className="w-full gap-2">
              <Camera className="h-4 w-4" /> Start Camera
            </Button>
          </Card>

          <div className="space-y-6">
            <Tabs defaultValue="lipstick">
              <TabsList className="w-full">
                <TabsTrigger value="lipstick" className="flex-1">
                  <Lipstick className="h-4 w-4 mr-2" /> Lipstick
                </TabsTrigger>
                <TabsTrigger value="foundation" className="flex-1">
                  <Sparkles className="h-4 w-4 mr-2" /> Foundation
                </TabsTrigger>
                <TabsTrigger value="eyeshadow" className="flex-1">
                  <Palette className="h-4 w-4 mr-2" /> Eyeshadow
                </TabsTrigger>
              </TabsList>

              <TabsContent value="lipstick" className="mt-6">
                <div className="grid grid-cols-4 gap-4">
                  {Array.from({ length: 8 }).map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.2, delay: i * 0.05 }}
                    >
                      <div
                        className="aspect-square rounded-full cursor-pointer hover:ring-2 ring-primary transition-all"
                        style={{
                          backgroundColor: `hsl(${i * 30}, 70%, 60%)`
                        }}
                      />
                    </motion.div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="foundation" className="mt-6">
                <div className="grid grid-cols-4 gap-4">
                  {Array.from({ length: 8 }).map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.2, delay: i * 0.05 }}
                    >
                      <div
                        className="aspect-square rounded-full cursor-pointer hover:ring-2 ring-primary transition-all"
                        style={{
                          backgroundColor: `hsl(30, ${30 + i * 5}%, ${70 + i * 2}%)`
                        }}
                      />
                    </motion.div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="eyeshadow" className="mt-6">
                <div className="grid grid-cols-4 gap-4">
                  {Array.from({ length: 8 }).map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.2, delay: i * 0.05 }}
                    >
                      <div
                        className="aspect-square rounded-full cursor-pointer hover:ring-2 ring-primary transition-all"
                        style={{
                          backgroundColor: `hsl(${180 + i * 30}, 50%, 50%)`
                        }}
                      />
                    </motion.div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>

            <Card className="p-4">
              <h3 className="font-medium mb-2">Currently Trying</h3>
              <p className="text-muted-foreground text-sm">Select a shade to begin virtual try-on</p>
            </Card>
          </div>
        </div>
      </div>
    </main>
  );
}