import { ChartNoAxesColumnIncreasing, Star } from "lucide-react";
import type { Course } from "../data/courses";
export function Avatars() {
  return (
    <span className="avatars" aria-label="More than 26 learners">
      {[2, 14, 15, 16].map((i) => (
        <img
          key={i}
          src={`/assets/image-${i}.webp`}
          alt=""
          width="32"
          height="32"
          loading="lazy"
        />
      ))}
      <span>26+</span>
    </span>
  );
}
export function CourseCard({
  course,
  onSelect,
}: {
  course: Course;
  onSelect?: (course: Course) => void;
}) {
  return (
    <article className="course-card">
      <div className="course-image">
        <img
          src={`/assets/image-${course.image}.webp`}
          alt={course.title}
          width="682"
          height="390"
          loading="lazy"
        />
        <div className="course-meta">
          <span>17 Lessons</span>
          <span>2 hours 16 mins</span>
          <span>59 Comments</span>
        </div>
      </div>
      <div className="course-title">
        <h3>
          {onSelect ? (
            <button onClick={() => onSelect(course)}>{course.title}</button>
          ) : (
            course.title
          )}
        </h3>
        <span className="rating">
          4.5 <Star size={16} fill="currentColor" />
        </span>
      </div>
      <p className="course-author">
        by <span>purepearl studio</span>
      </p>
      <div className="course-learners">
        <span className="level">
          <ChartNoAxesColumnIncreasing size={17} /> Beginner
        </span>
        <Avatars />
      </div>
      <p className="price">
        <strong>$25</strong>
        <span>/lifetime</span>
      </p>
    </article>
  );
}
