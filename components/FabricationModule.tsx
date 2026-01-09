
"use client";
import { useState } from "react";

export default function FabricationModule({ data }) {
 
  const [height, setHeight] = useState(data.defaultH);
  const [width, setWidth] = useState(data.defaultW);

  
  const calculate = (baseValue, rate, operation) => {
    const val = parseFloat(baseValue);
    const r = parseFloat(rate);
    
    switch (operation) {
      case "add": return val + r;
      case "subtract": return val - r;
      case "divide": return val / r;
      case "multiply": return val * r;
      default: return val;
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 mb-8">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">{data.title}</h2>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-600">Base Height (H)</label>
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            className="mt-1 block w-full p-2 border rounded bg-gray-50"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-600">Base Width (W)</label>
          <input
            type="number"
            value={width}
            onChange={(e) => setWidth(e.target.value)}
            className="mt-1 block w-full p-2 border rounded bg-gray-50"
          />
        </div>
      </div>

      
      <div className="overflow-x-auto">
        <table className="min-w-full text-left text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3">Profile Name (To)</th>
              <th className="p-3">Source (From)</th>
              <th className="p-3">Logic</th>
              <th className="p-3 font-bold text-blue-600">Cut Size</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {data.conversions.map((item, index) => {
             
              const baseValue = item.from === "Height" ? height : width;
              const result = calculate(baseValue, item.conversionRate, item.operation);

              return (
                <tr key={index}>
                  <td className="p-3 font-medium">{item.to}</td>
                  <td className="p-3 text-gray-500">{item.from}</td>
                  <td className="p-3 text-gray-400">
                    {item.operation} {item.conversionRate}
                  </td>
                  <td className="p-3 font-mono font-bold text-gray-800">
                    {result % 1 !== 0 ? result.toFixed(1) : result}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}