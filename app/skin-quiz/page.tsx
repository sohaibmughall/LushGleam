"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { motion } from "framer-motion";
import { useState } from "react";

export default function SkinQuiz() {
  const [step, setStep] = useState(1);
  const totalSteps = 3;

  const questions = {
    1: {
      question: "What's your skin type?",
      options: ["Dry", "Oily", "Combination", "Normal"]
    },
    2: {
      question: "What are your main skin concerns?",
      options: ["Acne", "Aging", "Hyperpigmentation", "Sensitivity"]
    },
    3: {
      question: "How would you describe your daily skincare routine?",
      options: ["Basic", "Moderate", "Extensive", "None"]
    }
  };

  return (
    <main className="min-h-screen pt-24 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4 max-w-2xl">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-light mb-4">Personalized <span className="font-medium">Skin Quiz</span></h1>
          <p className="text-muted-foreground">Let's find your perfect skincare routine</p>
        </div>

        <motion.div
          key={step}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
        >
          <Card className="p-6">
            <div className="mb-6">
              <div className="flex justify-between text-sm text-muted-foreground mb-2">
                <span>Question {step} of {totalSteps}</span>
                <span>{Math.round((step / totalSteps) * 100)}% Complete</span>
              </div>
              <div className="h-2 bg-secondary rounded-full">
                <div
                  className="h-full bg-primary rounded-full transition-all duration-300"
                  style={{ width: `${(step / totalSteps) * 100}%` }}
                />
              </div>
            </div>

            <h2 className="text-2xl font-medium mb-6">{questions[step as keyof typeof questions].question}</h2>

            <RadioGroup className="space-y-4 mb-8">
              {questions[step as keyof typeof questions].options.map((option) => (
                <div key={option} className="flex items-center space-x-2">
                  <RadioGroupItem value={option} id={option} />
                  <Label htmlFor={option}>{option}</Label>
                </div>
              ))}
            </RadioGroup>

            <div className="flex justify-between">
              <Button
                variant="outline"
                onClick={() => setStep(step - 1)}
                disabled={step === 1}
              >
                Previous
              </Button>
              <Button
                onClick={() => step === totalSteps ? console.log("Quiz completed") : setStep(step + 1)}
              >
                {step === totalSteps ? "See Results" : "Next"}
              </Button>
            </div>
          </Card>
        </motion.div>
      </div>
    </main>
  );
}