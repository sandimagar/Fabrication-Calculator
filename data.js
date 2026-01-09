

export const fabricationRules = [
  {
    title: "Sliding Window",
    defaultH: 0,
    defaultW: 0,
    conversions: [
     
      { from: "Height", to: "PKJ", operation: "add", conversionRate: 3 },
      { from: "Width", to: "PKJ", operation: "add", conversionRate: 0 },
   
      { from: "Height", to: "S1", operation: "subtract", conversionRate: 83 },
      { from: "Width", to: "S1", operation: "divide", conversionRate: 2 },
   
      { from: "Height", to: "DSS", operation: "subtract", conversionRate: 83 },
      { from: "Width", to: "DSS", operation: "divide", conversionRate: 2 },
    ],
  },
  {
    title: "Toilet Door",
    defaultH: 0,
    defaultW: 0,
    conversions: [
      
      { from: "Height", to: "P60K", operation: "add", conversionRate: 3 },
      { from: "Width", to: "P60K", operation: "add", conversionRate: 0 }, 
   
      { from: "Height", to: "NKMS", operation: "subtract", conversionRate: 35 },
      { from: "Width", to: "NKMS", operation: "subtract", conversionRate: 65 },
     
      { from: "Width", to: "ZT", operation: "subtract", conversionRate: 70 },
    ],
  },
  {
    title: "Ventilation",
    defaultH: 0,
    defaultW: 0,
    conversions: [
     
      { from: "Height", to: "P60K", operation: "add", conversionRate: 3 },
      { from: "Width", to: "P60K", operation: "add", conversionRate: 0 },
    ],
  },
  {
    title: "Heavy Door",
    defaultH: 0,
    defaultW: 0,
    conversions: [
     
      { from: "Height", to: "P60K", operation: "add", conversionRate: 3 },
      { from: "Width", to: "P60K", operation: "add", conversionRate: 0 },
      
    
      { from: "Height", to: "NKMS", operation: "subtract", conversionRate: 32 },
      { from: "Width", to: "NKMS", operation: "subtract", conversionRate: 65 },

    
      { from: "Width", to: "ZT", operation: "subtract", conversionRate: 125 },
    ],
  },
];