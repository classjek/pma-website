import React from 'react'

const CircularProgressBar = ( {value} ) => {
    const radius = 30;
    const strokeWidth = 6;
    const circumference = 2 * Math.PI * radius;

    const progressOffset = ((1-value) * circumference);
    const percentage = Math.round(value * 100);

  return (
    <div className="p-4">
      <svg width={radius * 2 + strokeWidth} height={radius * 2 + strokeWidth} className="mx-auto">
        {/* Background circle */}
        <circle
          cx={radius + strokeWidth / 2}
          cy={radius + strokeWidth / 2}
          r={radius}
          strokeWidth={strokeWidth}
          className="text-gray-200 stroke-current"
          fill="none"
        />
        {/* Progress circle */}
        <circle
          cx={radius + strokeWidth / 2}
          cy={radius + strokeWidth / 2}
          r={radius}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={progressOffset}
          className="text-blue-500 stroke-current"
          fill="none"
          strokeLinecap="round"
          // Start progress at 12 o'clock
          transform={`rotate(-90, ${radius + strokeWidth / 2 }, ${radius + strokeWidth/2})`}
        />
        {/* Display the number */}
        <text 
            x="50%" 
            y="50%" 
            dy=".3em" 
            textAnchor="middle" 
            className="text-black font-bold font-avenir text-lg"
        >
            {percentage}%
        </text>
      </svg>
    </div>
  );
}

export default CircularProgressBar;
