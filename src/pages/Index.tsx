import FrenchGame from "@/components/FrenchGame";
import { sampleText } from "@/data/sampleText";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Pratique de Conjugaison Française
        </h1>
        <FrenchGame challenge={sampleText[0]} />
      </div>
    </div>
  );
};

export default Index;