import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import VerbInput from "./VerbInput";
import { TextChallenge } from "../types/french";

interface FrenchGameProps {
  challenge: TextChallenge;
}

const FrenchGame = ({ challenge }: FrenchGameProps) => {
  const [answers, setAnswers] = useState<string[]>(
    new Array(challenge.verbs.length).fill("")
  );
  const [checked, setChecked] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (index: number, value: string) => {
    const newAnswers = [...answers];
    newAnswers[index] = value;
    setAnswers(newAnswers);
  };

  const checkAnswers = () => {
    const score = challenge.verbs.reduce((acc, verb, index) => {
      return acc + (verb.correctForm === answers[index] ? 1 : 0);
    }, 0);

    setChecked(true);
    toast({
      title: `Score: ${score}/${challenge.verbs.length}`,
      description: score === challenge.verbs.length 
        ? "Parfait ! Excellent travail !" 
        : "Continue à pratiquer !",
      variant: score === challenge.verbs.length ? "default" : "destructive",
    });
  };

  const reset = () => {
    setAnswers(new Array(challenge.verbs.length).fill(""));
    setChecked(false);
  };

  const renderText = () => {
    return challenge.textSegments.map((segment, index) => (
      <React.Fragment key={index}>
        {segment}
        {index < challenge.verbs.length && (
          <VerbInput
            infinitive={challenge.verbs[index].infinitive}
            value={answers[index]}
            onChange={(value) => handleInputChange(index, value)}
            isCorrect={
              checked
                ? challenge.verbs[index].correctForm === answers[index]
                : null
            }
          />
        )}
      </React.Fragment>
    ));
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center">
          {challenge.title}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="text-lg leading-relaxed">{renderText()}</div>
        <div className="flex justify-center space-x-4">
          <Button onClick={checkAnswers} disabled={checked}>
            Vérifier
          </Button>
          <Button onClick={reset} variant="outline">
            Recommencer
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default FrenchGame;