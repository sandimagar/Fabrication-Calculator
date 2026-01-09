
import { fabricationRules } from "../data";
import FabricationModule from "../components/FabricationModule";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-extrabold mb-8 text-center text-gray-900">
          Fabrication Calculator
        </h1>
        
       
        {fabricationRules.map((categoryData, index) => (
          <FabricationModule key={index} data={categoryData} />
        ))}
        
      </div>
    </main>
  );
}