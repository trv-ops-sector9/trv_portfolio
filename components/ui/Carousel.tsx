"use client";

import {
  Children,
  ReactNode,
  cloneElement,
  isValidElement,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { animate } from "motion/react";
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
  const isAnimating = useRef(false);

  const childArray = Children.toArray(children);

  useEffect(() => {
    setCount(childArray.length);
  }, [childArray.length]);

  const scrollTo = useCallback(
    (i: number) => {
      const el = scrollRef.current;
      if (!el || count === 0) return;

      const forwardWrap = i >= count;
      const backWrap = i < 0;

      let scrollTarget: number;
      let nextIndex: number;

      if (forwardWrap) {
        // Animate into the clone appended after the last real slide
        scrollTarget = count * el.offsetWidth;
        nextIndex = 0;
      } else if (backWrap) {
        scrollTarget = (count - 1) * el.offsetWidth;
        nextIndex = count - 1;
      } else {
        scrollTarget = i * el.offsetWidth;
        nextIndex = i;
      }

      isAnimating.current = true;
      el.style.scrollSnapType = "none";
      animate(el.scrollLeft, scrollTarget, {
        duration: 1.1,
        ease: [0.4, 0, 0.2, 1],
        onUpdate: (v) => {
          el.scrollLeft = v;
        },
        onComplete: () => {
          if (forwardWrap) {
            // Silently jump to the real first slide
            el.scrollLeft = 0;
          }
          el.style.scrollSnapType = "";
          setIndex(nextIndex);
          // Keep isAnimating true until queued scroll events from the jump flush
          requestAnimationFrame(() => {
            isAnimating.current = false;
          });
        },
      });
    },
    [count]
  );

  const handleScroll = useCallback(() => {
    if (isAnimating.current) return;
    const el = scrollRef.current;
    if (!el || el.offsetWidth === 0) return;
    setIndex(Math.round(el.scrollLeft / el.offsetWidth));
  }, []);

  // Clone the first slide and append it so the forward wrap animates inline
  const firstChild = childArray[0];
  const cloneOfFirst = isValidElement(firstChild)
    ? cloneElement(firstChild as React.ReactElement, { key: "clone-first" })
    : null;

  return (
    <div className={cn(styles.root, className)}>
      <div className={styles.viewport}>
        <div ref={scrollRef} className={styles.scroller} onScroll={handleScroll}>
          {children}
          {cloneOfFirst}
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
            <ChevronLeft size={20} strokeWidth={1.5} />
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
            <ChevronRight size={20} strokeWidth={1.5} />
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
