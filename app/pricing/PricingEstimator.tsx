"use client";

import { useMemo, useState } from "react";

const BOOKING_URL = "https://calendar.app.google/SDQkfwQwqctAsQd7A";
const coverageOptions = [
  { title: "After-hours", detail: "Evenings and weekends" },
  { title: "24/7 Coverage", detail: "Every call, day or night" },
];
const workflowOptions = [
  { title: "Answer & Route", detail: "Capture details and hand off" },
  { title: "Book + Integrate Included", detail: "Schedule and sync your tools" },
];

function roundToFifty(value: number) {
  return Math.round(value / 50) * 50;
}

export function PricingEstimator() {
  const [calls, setCalls] = useState(300);
  const [coverage, setCoverage] = useState(0);
  const [workflow, setWorkflow] = useState(0);

  const estimate = useMemo(() => {
    const baseline = roundToFifty(250 + calls * 0.55 + [180, 350][coverage] + [0, 430][workflow]);
    return {
      average: baseline + 400,
      low: roundToFifty(baseline * 0.85) + 400,
      high: roundToFifty(baseline * 1.2) + 400,
    };
  }, [calls, coverage, workflow]);

  return <section className="pricingEstimator" aria-label="Monthly pricing estimator">
    <div className="pricingControls">
      <div className="pricingControl">
        <div className="pricingControlHeader"><label htmlFor="monthly-calls">Monthly call volume</label><output>{calls.toLocaleString()} calls</output></div>
        <input id="monthly-calls" type="range" min="100" max="1200" step="100" value={calls} onChange={(event) => setCalls(Number(event.target.value))} />
        <p><span>100</span><span>1,200+</span></p>
      </div>

      <div className="pricingControl pricingChoiceControl">
        <div className="pricingControlHeader"><span className="pricingControlLabel">Coverage</span><output>{coverageOptions[coverage].title}</output></div>
        <div className="pricingChoiceGrid" role="group" aria-label="Choose coverage">
          {coverageOptions.map((option, index) => <button
            className={coverage === index ? "isSelected" : ""}
            type="button"
            aria-pressed={coverage === index}
            onClick={() => setCoverage(index)}
            key={option.title}
          >
            <span>{option.title}</span>
            <small>{option.detail}</small>
          </button>)}
        </div>
      </div>

      <div className="pricingControl pricingChoiceControl">
        <div className="pricingControlHeader"><span className="pricingControlLabel">Call workflow</span><output>{workflowOptions[workflow].title}</output></div>
        <div className="pricingChoiceGrid" role="group" aria-label="Choose call workflow">
          {workflowOptions.map((option, index) => <button
            className={workflow === index ? "isSelected" : ""}
            type="button"
            aria-pressed={workflow === index}
            onClick={() => setWorkflow(index)}
            key={option.title}
          >
            <span>{option.title}</span>
            <small>{option.detail}</small>
          </button>)}
        </div>
      </div>
    </div>

    <aside className="pricingEstimate" aria-live="polite">
      <p className="eyebrow">ESTIMATED AVERAGE</p>
      <strong>${estimate.average.toLocaleString()}<small>/month</small></strong>
      <p>Typical planning range: <b>${estimate.low.toLocaleString()} to ${estimate.high.toLocaleString()}/month</b></p>
      <span>This is an estimate, not a final quote. Your exact price is confirmed after a short review of your real call flow.</span>
      <a className="button" href={BOOKING_URL}>Book a pricing call <b>↗</b></a>
    </aside>
  </section>;
}
