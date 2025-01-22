import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import VerbInput from "./VerbInput";
import { TextChallenge } from "../types/french";
import { Eye, SkipForward } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface FrenchGameProps {
  challenge: TextChallenge;
}

const FrenchGame = ({ challenge }: FrenchGameProps) => {
  const [answers, setAnswers] = useState<string[]>(
    new Array(challenge.verbs.length).fill("")
  );
  const [checked, setChecked] = useState(false);
  const [hints, setHints] = useState<boolean[]>(
    new Array(challenge.verbs.length).fill(false)
  );
  const { toast } = useToast();

  const handleInputChange = (index: number, value: string) => {
    const newAnswers = [...answers];
    newAnswers[index] = value;
    setAnswers(newAnswers);
  };

  const showHint = (index: number) => {
    const newHints = [...hints];
    newHints[index] = true;
    setHints(newHints);
    
    const correctForm = challenge.verbs[index].correctForm;
    const hintText = correctForm.substring(0, Math.ceil(correctForm.length / 2));
    
    toast({
      title: "Indice",
      description: `Le mot commence par: ${hintText}...`,
    });
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
    setHints(new Array(challenge.verbs.length).fill(false));
  };

  const skip = () => {
    toast({
      title: "Exercise sauté",
      description: "Voici les réponses correctes:",
    });
    
    const correctAnswers = challenge.verbs.map(verb => verb.correctForm);
    setAnswers(correctAnswers);
    setChecked(true);
  };

  const renderText = () => {
    return challenge.textSegments.map((segment, index) => (
      <React.Fragment key={index}>
        {segment}
        {index < challenge.verbs.length && (
          <div className="inline-flex items-center gap-2">
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
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => showHint(index)}
                  disabled={checked || hints[index]}
                  className="h-8 w-8 hover:bg-slate-100"
                >
                  <Eye className="h-4 w-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Cliquez pour voir un indice</p>
              </TooltipContent>
            </Tooltip>
          </div>
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
          <Button onClick={skip} variant="secondary" disabled={checked}>
            <SkipForward className="mr-2 h-4 w-4" />
            Passer
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default FrenchGame;