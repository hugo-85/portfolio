import { TagType } from "../../types/tag";

const javascriptQuizTags: TagType[] = [
  "react",
  "nextjs",
  "materialui",
  "typescript",
  "zustand",
  "jest",
  "msw",
];

const arkanoidTags: TagType[] = [
  "react",
  "nextjs",
  "typescript",
  "materialui",
  "mongodb",
];

const billingTags: TagType[] = [
  "react",
  "nextjs",
  "materialui",
  "typescript",
  "jest",
  "msw",
  "mysql",
  "swr",
  "axios",
];

const ticTacToeTags: TagType[] = ["react", "nextjs", "typescript", "jest"];

const virtualOfficeTags: TagType[] = [
  "react",
  "typescript",
  "materialui",
  "axios",
  "firebase",
  "redux",
];

const solidPDFTags: TagType[] = ["react", "materialui"];

const ecommerceTags: TagType[] = [
  "react",
  "nextjs",
  "materialui",
  "styled",
  "graphQL",
  "apollo",
  "stripe",
  "framer",
];

const searchBarTags: TagType[] = ["react", "axios", "spring", "downshift"];

const chefAiTags: TagType[] = [
  "react",
  "nextjs",
  "typescript",
  "zustand",
  "tailwind",
  "zod",
];

const AISocialNetworkTags: TagType[] = [
  "react",
  "expo",
  "typescript",
  "tailwind",
  "appwrite",
  "hookform",
];

export const projectsConfigs = [
  {
    title: "AI Social Network",
    image: "ai_social_network.webp",
    description:
      "A beautiful light weight mobile app to share your AI generated videos with the world. ",
    tags: AISocialNetworkTags,
    projectUrl: "https://github.com/hugo-85/aora",
  },
  {
    title: "Chef AI",
    image: "chef-ai.webp",
    description:
      "A chef assistant made with AI, pick your ingredients and it will generate recipes for you.",
    tags: chefAiTags,
    previewUrl: "https://chef-ai-ten.vercel.app/",
    projectUrl: "https://github.com/hugo-85/chef-ai",
  },
  {
    title: "Javascript Quiz!",
    image: "javascript_quiz.webp",
    description:
      "A simple javascript quiz to test your knowledge, learn something and have some fun!",
    tags: javascriptQuizTags,
    projectUrl: "https://github.com/hugo-85/javascript-quiz",
  },
  {
    title: "Arkanoid: Do It Again!",
    image: "arkanoid.webp",
    description:
      "The old school Arkanoid from the Super Nintendo version, a classic!. Is a WIP, but has all the basic functionality and more.",
    tags: arkanoidTags,
    projectUrl: "https://github.com/hugo-85/arkanoid",
    previewUrl: "https://arkanoid-theta.vercel.app/",
  },
  {
    title: "Billing App",
    image: "billing.webp",
    description:
      "A simple billing app for a create, edit, delete and consults bills. You can even print bills with a custom layout.",
    tags: billingTags,
    projectUrl: "https://github.com/hugo-85/billing2",
  },
  {
    title: "Tic-tac-toe",
    image: "tic-tac-toe.webp",
    description:
      "A simple tic-tac-toe game for test the new features of Next 14 and how integrate with jest for testing.",
    tags: ticTacToeTags,
    projectUrl: "https://github.com/hugo-85/tic-tac-toe",
  },
  {
    title: "E-commerce",
    description:
      "A full e-commerce app where you can buy products, search products, add new ones and edit. Of course its has the cart to manage your products and proceed to the checkout.",
    image: "e-commerce.webp",
    tags: ecommerceTags,
    projectUrl: "https://github.com/hugo-85/nextEcommerceFront",
  },
  {
    title: "Virtual Office",
    description:
      "A virtual office to manage your taxes. Here you can consult your debts, pay your bills, crate and follow task and more.",
    image: "virtual_office.webp",
    tags: virtualOfficeTags,
    previewUrl: "https://oficinavirtual.live/",
  },
  {
    title: "Solid PDF",
    description:
      "A simple PDF editor, to inject signatures or any other image that you need into the PDF.",
    image: "solid_pdf.webp",
    tags: solidPDFTags,
    projectUrl: "https://github.com/hugo-85/solidPdf",
  },
  {
    title: "Search Bar",
    description:
      "If you are searching an animated search bar with a minimalistic style for your web app, search no more!",
    image: "search_bar.webp",
    tags: searchBarTags,
    projectUrl: "https://github.com/hugo-85/animatedSearchBar",
  },
];
