"use client";

import {
  ReactNode,
  forwardRef,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import styles from "./Carousel.module.css";

/* ─── Carousel ───────────────────────────────────────────────────────────── */

export function Carousel({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const [count, setCount] = useState(0);

  /* Count items once after mount */
  useEffect(() => {
    const el = scrollRef.current;
    if (el) setCount(el.children.length);
  }, [children]);

  const scrollTo = useCallback(
    (i: number) => {
      const el = scrollRef.current;
      if (!el || count === 0) return;
      const wrapped = ((i % count) + count) % count;
      el.scrollTo({ left: wrapped * el.offsetWidth, behavior: "smooth" });
    },
    [count]
  );

  const handleScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el || el.offsetWidth === 0) return;
    setIndex(Math.round(el.scrollLeft / el.offsetWidth));
  }, []);

  return (
    <div className={cn(styles.root, className)}>
      <div className={styles.viewport}>
        <div ref={scrollRef} className={styles.scroller} onScroll={handleScroll}>
          {children}
        </div>
      </div>

      {count > 1 && (
        <div className={styles.controls}>
          <button
            type="button"
            aria-label="Previous"
            className={styles.btn}
            onClick={() => scrollTo(index - 1)}
          >
            <ChevronLeft size={16} strokeWidth={1.5} />
          </button>

          <div className={styles.dots}>
            {Array.from({ length: count }, (_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Slide ${i + 1}`}
                className={cn(styles.dot, i === index && styles.dotActive)}
                onClick={() => scrollTo(i)}
              />
            ))}
          </div>

          <button
            type="button"
            aria-label="Next"
            className={styles.btn}
            onClick={() => scrollTo(index + 1)}
          >
            <ChevronRight size={16} strokeWidth={1.5} />
          </button>
        </div>
      )}
    </div>
  );
}

/* ─── Item ───────────────────────────────────────────────────────────────── */

export function CarouselItem({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={cn(styles.item, className)}>{children}</div>;
}
