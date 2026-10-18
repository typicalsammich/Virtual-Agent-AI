import {SeoContentPage,contentMetadata} from '../../components/SeoContentPage';
const data={
  "path": "/blog/can-ai-receptionist-transfer-calls",
  "title": "Can an AI Receptionist Transfer Calls? How Routing Works",
  "seoTitle": "Can an AI Receptionist Transfer Calls?",
  "description": "Can an AI receptionist transfer calls to a person? Learn how live transfers, escalation rules, and urgent call routing work for businesses.",
  "eyebrow": "LIVE CALL TRANSFERS",
  "lead": "Common triggers include emergencies, existing-customer complaints, complex pricing questions, and callers who explicitly request a person. This guide explains the practical decisions, handoffs, and tests that matter before putting the workflow in front of real callers.",
  "sections": [
    {
      "title": "Define exactly when to transfer",
      "body": "Common triggers include emergencies, existing-customer complaints, complex pricing questions, and callers who explicitly request a person. Transfer rules should reflect the business’s staffing and real availability."
    },
    {
      "title": "Choose warm or direct transfer behavior",
      "body": "A direct transfer immediately connects to a destination. A warm handoff may pass a summary to the employee first, depending on the system. Decide what callers hear while waiting and what happens if nobody answers."
    },
    {
      "title": "Plan for unanswered transfers",
      "body": "A transfer attempt should not end in silence or a dropped call. Configure a fallback: collect a message, schedule a callback, or offer another contact method. Test after-hours and busy-line scenarios."
    },
    {
      "title": "Measure whether transfers help",
      "body": "Review how often transfers connect, how long callers wait, and whether the receiving employee has enough context. More transfers are not automatically better if they interrupt staff unnecessarily."
    }
  ],
  "bullets": [
    "Define exactly when to transfer",
    "Choose warm or direct transfer behavior",
    "Plan for unanswered transfers",
    "Measure whether transfers help"
  ],
  "faqs": [
    {
      "q": "What is the most important setup step?",
      "a": "Write down the actual caller scenarios and the approved outcome for each one, including exceptions that require a person."
    },
    {
      "q": "Can a caller still reach a person?",
      "a": "Yes, if the business configures a working transfer or callback path. Test that fallback during and outside staffed hours."
    },
    {
      "q": "How can we tell whether it works?",
      "a": "Review call outcomes, qualified inquiries, successful handoffs, and errors using your own call data rather than relying on a scripted demo."
    }
  ],
  "related": [
    {
      "href": "/pricing",
      "label": "Pricing"
    },
    {
      "href": "/demo",
      "label": "Listen to demos"
    },
    {
      "href": "/ai-receptionist-for-small-business",
      "label": "AI receptionist for small business"
    }
  ]
};
export const metadata=contentMetadata(data);
export default function Page(){return <SeoContentPage data={data}/>};
