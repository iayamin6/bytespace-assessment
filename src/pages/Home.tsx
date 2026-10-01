import { useState, useRef, useEffect, type FormEvent } from "react";
import { Link } from "react-router-dom";
import {
  Search,
  PencilRuler,
  CodeXml,
  Laptop,
  Building,
  Radio,
  Camera,
  Check,
  X,
} from "lucide-react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Decorations } from "../components/Decorations";
import { CourseCard } from "../components/CourseCard";
import { categories, filterCourses, type Course } from "../data/courses";
const paths = [
  { label: "Design", icon: PencilRuler },
  { label: "Development", icon: CodeXml },
  { label: "IT & Software", icon: Laptop },
  { label: "Business", icon: Building },
  { label: "Marketing", icon: Radio },
  { label: "Photography", icon: Camera },
];
const reviews = [
  {
    name: "Sarah M.",
    role: "Enthusiastic Learner",
    image: 15,
    quote:
      "ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning.",
  },
  {
    name: "James L.",
    role: "Lifelong Learner",
    image: 24,
    quote:
      "I’ve tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development.",
  },
  {
    name: "Alex B.",
    role: "Inspired Creator",
    image: 25,
    quote:
      "As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It’s fulfilling to see my courses making a positive impact on learners globally.",
  },
];
export function Home() {
  const [query, setQuery] = useState("");
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("Featured");
  const [more, setMore] = useState(false);
  const [selected, setSelected] = useState<Course | null>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  const results = filterCourses(search, category);
  useEffect(() => {
    if (selected) dialog.current?.showModal();
  }, [selected]);
  function submitSearch(e: FormEvent) {
    e.preventDefault();
    setSearch(query);
    setCategory("Featured");
    document.getElementById("courses")?.scrollIntoView({ behavior: "smooth" });
  }
  function selectCategory(value: string) {
    setCategory(value);
    setSearch("");
    setQuery("");
  }
  function closeDialog() {
    dialog.current?.close();
    setSelected(null);
  }
  return (
    <>
      <a className="skip-link" href="#courses">
        Skip to courses
      </a>
      <main>
        <section className="hero blue-grid">
          <Header />
          <Decorations />
          <div className="hero-copy">
            <h1>
              Get Access to Hundreds
              <br className="desktop-break" /> Courses Available
            </h1>
            <p>
              Unlock your creativity, gain valuable knowledge, and grow your
              business with our wide range of courses.
            </p>
            <form className="search-form" onSubmit={submitSearch}>
              <div className="search-field">
                <Search size={20} />
                <label className="sr-only" htmlFor="course-search">
                  Search courses, topics, or creators
                </label>
                <input
                  id="course-search"
                  placeholder="Course, topic, creator"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                />
              </div>
              <button className="button">Search</button>
            </form>
          </div>
          <div className="hero-orbit" />
          <img
            className="hero-art"
            src="/assets/hero-art.svg"
            alt="A smiling learner with a laptop, surrounded by course progress and happy student highlights"
            fetchPriority="high"
            width="830"
            height="494"
          />
        </section>
        <div className="partners" aria-label="Our learning partners">
          <div className="container">
            {Array.from({ length: 5 }, (_, i) => (
              <img
                src={`/assets/partner-${i}.svg`}
                alt={`Logoipsum partner ${i + 1}`}
                width="170"
                height="42"
                key={i}
              />
            ))}
          </div>
        </div>
        <section className="catalog container" id="courses">
          <div className="section-heading">
            <h2>
              Discover Your Passion,
              <br />
              Build Your Skills
            </h2>
            <p>
              At Bytespace Courses, we bring you close to life-changing
              knowledge. Explore a variety of courses across different
              <br className="desktop-break" /> fields, from technology to the
              arts, and make a difference in your career and life.
            </p>
          </div>
          <div
            className="category-filters"
            aria-label="Filter courses by category"
          >
            {[
              ...categories,
              ...(more ? ["Business", "Finance", "IT & Software"] : []),
            ].map((value) => (
              <button
                key={value}
                className={category === value ? "chip active" : "chip"}
                aria-pressed={category === value}
                onClick={() => selectCategory(value)}
              >
                {value}
              </button>
            ))}
            <button
              className="more-categories"
              onClick={() => setMore(!more)}
              aria-expanded={more}
            >
              {more ? "− Less" : "+ More"}
            </button>
          </div>
          <div aria-live="polite" className="results-status">
            {search && (
              <p>
                Results for “{search}”{" "}
                <button
                  className="text-link"
                  onClick={() => {
                    setSearch("");
                    setQuery("");
                  }}
                >
                  Clear search
                </button>
              </p>
            )}
          </div>
          <div className="course-grid">
            {results.map((course) => (
              <CourseCard
                key={course.id}
                course={course}
                onSelect={setSelected}
              />
            ))}
          </div>
          {results.length === 0 && (
            <div className="empty-state">
              <Search size={32} />
              <h3>No courses found</h3>
              <p>Try another topic or explore our featured courses.</p>
              <button
                className="button"
                onClick={() => selectCategory("Featured")}
              >
                View featured courses
              </button>
            </div>
          )}
          <div className="learning-paths">
            <div className="section-heading">
              <h2>Explore Diverse Learning Paths at Bytespace</h2>
              <p>
                At Bytespace, we believe in empowering individuals through
                knowledge. Our diverse range of courses spans various
                <br className="desktop-break" /> fields, ensuring there’s
                something for everyone. Unleash your potential and explore our
                carefully curated categories.
              </p>
            </div>
            <div className="path-grid">
              {paths.map(({ label, icon: Icon }) => (
                <button
                  key={label}
                  onClick={() => {
                    selectCategory(label);
                    document
                      .getElementById("courses")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  <span>
                    <Icon size={30} />
                  </span>
                  {label}
                </button>
              ))}
            </div>
          </div>
        </section>
        <section className="features" id="creators">
          <div className="container">
            <div className="feature-row">
              <div className="feature-copy">
                <h2>
                  Your Path to Professional
                  <br />
                  Growth Starts Here!
                </h2>
                <p>
                  Explore our curated selection of courses tailored to enhance
                  your capabilities and accelerate your career journey. Whether
                  you are looking to sharpen specific skills, gain industry
                  expertise, or embark on a new career path entirely, we have
                  the resources you need.
                </p>
                <dl className="stats">
                  <div>
                    <dt>12K</dt>
                    <dd>Students</dd>
                  </div>
                  <div>
                    <dt>70+</dt>
                    <dd>Courses</dd>
                  </div>
                  <div>
                    <dt>16</dt>
                    <dd>Creators</dd>
                  </div>
                </dl>
              </div>
              <img
                className="feature-art"
                src="/assets/growth-art.svg"
                alt="A ByteSpace learner building skills with a Figma course"
                width="710"
                height="680"
                loading="lazy"
              />
            </div>
            <div className="feature-row reverse">
              <img
                className="feature-art"
                src="/assets/creator-art.svg"
                alt="A course creator with a tablet and growing student community"
                width="640"
                height="700"
                loading="lazy"
              />
              <div className="feature-copy">
                <h2>
                  Create &amp; Manage
                  <br />
                  Courses Easily.
                </h2>
                <p>
                  <strong>ByteSpace</strong> supports individuals or entities in
                  the creation, publication, and administration of educational
                  courses.
                </p>
                <ul className="benefits">
                  {[
                    "Share Your Expertise",
                    "Monetize Your Passion",
                    "Flexibility and Autonomy",
                    "Build a Community",
                  ].map((text) => (
                    <li key={text}>
                      <span>
                        <Check size={13} />
                      </span>
                      {text}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="creator-cta blue-grid">
          <Decorations compact />
          <div className="cta-copy">
            <h2>
              Unlock Your Potential as a<br />
              Creator with ByteSpace
            </h2>
            <p>
              Experience the collaboration of numerous creators and an expanding
              selection of courses. Register now and become a part of a
              community comprising over 10,000 local and international creators.
              Utilize our Course Editor, and showcase your expertise by
              publishing your finest course on the ByteSpace Course Library.
            </p>
            <Link className="button" to="/signup">
              Join as Creator
            </Link>
          </div>
        </section>
        <section className="community" id="community">
          <div className="container">
            <div className="community-heading">
              <h2>
                Discover What Our
                <br />
                Community Is Saying
              </h2>
              <p>
                At ByteSpace, our vibrant community of learners and creators is
                at the heart of what we do. Hear directly from those who have
                experienced the transformative journey of learning and creating
                on our platform. Explore testimonials that reflect the diverse
                perspectives of enthusiastic learners and accomplished creators.
              </p>
            </div>
            <div className="reviews">
              {reviews.map((review) => (
                <figure key={review.name}>
                  <img
                    src={`/assets/image-${review.image}.webp`}
                    alt=""
                    width="80"
                    height="80"
                    loading="lazy"
                  />
                  <figcaption>
                    <strong>{review.name}</strong>
                    <span>{review.role}</span>
                  </figcaption>
                  <blockquote>“{review.quote}”</blockquote>
                </figure>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <dialog
        ref={dialog}
        className="course-dialog"
        aria-labelledby="course-dialog-title"
        onCancel={() => setSelected(null)}
        onClick={(e) => {
          if (e.target === e.currentTarget) closeDialog();
        }}
      >
        {selected && (
          <>
            <button
              className="dialog-close icon-button"
              aria-label="Close course details"
              onClick={closeDialog}
            >
              <X />
            </button>
            <img src={`/assets/image-${selected.image}.webp`} alt="" />
            <div>
              <p className="eyebrow">COURSE PREVIEW</p>
              <h2 id="course-dialog-title">{selected.title}</h2>
              <p>{selected.description}</p>
              <p>17 lessons · 2 hours 16 mins · Beginner</p>
              <p className="price">
                <strong>$25</strong> / lifetime
              </p>
              <Link to="/signup" className="button">
                Join ByteSpace
              </Link>
            </div>
          </>
        )}
      </dialog>
    </>
  );
}
