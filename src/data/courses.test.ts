import { describe, expect, it } from "vitest";
import { courses, filterCourses } from "./courses";
describe("course discovery", () => {
  it("shows every featured course with an empty search", () => {
    expect(filterCourses("", "Featured")).toEqual(courses);
  });
  it("normalizes whitespace and casing in search queries", () => {
    expect(filterCourses("  FIGMA  ", "Featured").map((c) => c.id)).toEqual([
      "figma",
    ]);
  });
  it("finds courses through topics and creator names", () => {
    expect(filterCourses("data science", "Featured").map((c) => c.id)).toEqual([
      "data",
    ]);
    expect(filterCourses("purepearl", "Featured")).toHaveLength(6);
  });
  it("applies the category and search together", () => {
    expect(filterCourses("startup", "Business").map((c) => c.id)).toEqual([
      "startup",
    ]);
    expect(filterCourses("startup", "Design")).toEqual([]);
  });
  it("returns an empty result for categories without a course", () => {
    expect(filterCourses("", "Music")).toEqual([]);
  });
});
