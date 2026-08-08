import { LESSONS } from "@/data/lessons";
import LessonClient from "./lesson-client";

export function generateStaticParams() {
  return LESSONS.map((l) => ({ slug: l.slug }));
}

export default function LessonPage() {
  return <LessonClient />;
}
