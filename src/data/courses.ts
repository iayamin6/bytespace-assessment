export type Course = {
  id: string;
  title: string;
  image: number;
  categories: string[];
  description: string;
};
export const categories = [
  "Featured",
  "Music",
  "Drawing & Painting",
  "Marketing",
  "Animation",
  "Social Media",
  "UI/UX Design",
  "Creative Marketing",
  "Digital Illustration",
  "Film & Video",
  "Crafts",
  "Freelance & Entrepreneurship",
  "Graphic Design",
  "Photography",
  "Productivity",
  "Web Development",
  "Data Science",
  "Cooking",
];
export const courses: Course[] = [
  {
    id: "figma",
    title: "Learn Figma from Basic",
    image: 13,
    categories: ["UI/UX Design", "Graphic Design", "Design"],
    description:
      "Get comfortable with Figma, from your first frame to reusable components and interactive prototypes.",
  },
  {
    id: "digital-assets",
    title: "Build Digital Asset",
    image: 17,
    categories: ["Graphic Design", "Digital Illustration", "Design"],
    description:
      "Create a consistent collection of digital assets and learn how to prepare them for your next creative project.",
  },
  {
    id: "data",
    title: "the Power of Big Data",
    image: 18,
    categories: ["Data Science", "Development", "IT & Software"],
    description:
      "Explore how data becomes insight through practical analysis and clear visual storytelling.",
  },
  {
    id: "productivity",
    title: "Balancing Productivity and Wellbeing",
    image: 19,
    categories: ["Productivity", "Business"],
    description:
      "Build sustainable routines, prioritize meaningful work, and make room for the things that matter.",
  },
  {
    id: "money",
    title: "Mastering Money Management",
    image: 20,
    categories: ["Business", "Finance", "Freelance & Entrepreneurship"],
    description:
      "Understand the foundations of budgeting and build a practical plan for your personal finances.",
  },
  {
    id: "startup",
    title: "From Idea to Startup Success",
    image: 21,
    categories: [
      "Business",
      "Marketing",
      "Creative Marketing",
      "Freelance & Entrepreneurship",
    ],
    description:
      "Turn a promising idea into a clear business plan, with lessons on audiences, positioning, and launching.",
  },
];
export function filterCourses(query: string, category: string) {
  const term = query.trim().toLowerCase();
  return courses.filter(
    (course) =>
      (category === "Featured" || course.categories.includes(category)) &&
      `${course.title} ${course.categories.join(" ")} purepearl studio`
        .toLowerCase()
        .includes(term),
  );
}
