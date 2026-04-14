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
import { createPortal } from "react-dom";
import { animate } from "motion/react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { cn } from "@/lib/utils";
import styles from "./Carousel.module.css";

/* ─── Lightbox ───────────────────────────────────────────────────────────── */

function Lightbox({ src, onClose }: { src: string; onClose: () => void }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  return createPortal(
    <div className={styles.lightboxBackdrop} onClick={onClose}>
      <div className={styles.lightboxInner}>
        <img
          src={src}
          alt=""
          className={styles.lightboxImg}
          onClick={onClose}
        />
        <button
          type="button"
          aria-label="Close"
          className={styles.lightboxClose}
          onClick={onClose}
        >
          <X size={18} strokeWidth={1.5} />
        </button>
      </div>
    </div>,
    document.body
  );
}

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
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);
  const isAnimating = useRef(false);

  const childArray = Children.toArray(children);

  useEffect(() => {
    setCount(childArray.length);
  }, [childArray.length]);

  // Position scroller at first real slide (clone-of-last sits at DOM position 0)
  useEffect(() => {
    if (count === 0) return;
    const el = scrollRef.current;
    if (el) el.scrollLeft = el.offsetWidth;
  }, [count]);

  const scrollTo = useCallback(
    (i: number) => {
      const el = scrollRef.current;
      if (!el || count === 0) return;

      const forwardWrap = i >= count;
      const backWrap = i < 0;
      let scrollTarget: number;
      let nextIndex: number;

      if (forwardWrap) {
        scrollTarget = (count + 1) * el.offsetWidth;
        nextIndex = 0;
      } else if (backWrap) {
        scrollTarget = 0;
        nextIndex = count - 1;
      } else {
        scrollTarget = (i + 1) * el.offsetWidth;
        nextIndex = i;
      }

      isAnimating.current = true;
      el.style.scrollSnapType = "none";
      animate(el.scrollLeft, scrollTarget, {
        duration: 1.1,
        ease: [0.4, 0, 0.2, 1],
        onUpdate: (v) => { el.scrollLeft = v; },
        onComplete: () => {
          if (forwardWrap) el.scrollLeft = el.offsetWidth;
          else if (backWrap) el.scrollLeft = count * el.offsetWidth;
          el.style.scrollSnapType = "";
          setIndex(nextIndex);
          requestAnimationFrame(() => { isAnimating.current = false; });
        },
      });
    },
    [count]
  );

  const handleScroll = useCallback(() => {
    if (isAnimating.current) return;
    const el = scrollRef.current;
    if (!el || el.offsetWidth === 0) return;
    const rawIndex = Math.round(el.scrollLeft / el.offsetWidth);
    setIndex(Math.max(0, Math.min(rawIndex - 1, count - 1)));
  }, [count]);

  // Open lightbox on image click — allow even mid-animation
  const handleScrollerClick = useCallback((e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    if (target.tagName === "IMG") {
      setLightboxSrc((target as HTMLImageElement).src);
    }
  }, []);

  const firstChild = childArray[0];
  const lastChild = childArray[childArray.length - 1];

  const cloneOfLast = isValidElement(lastChild)
    ? cloneElement(lastChild as React.ReactElement, { key: "clone-last" })
    : null;

  const cloneOfFirst = isValidElement(firstChild)
    ? cloneElement(firstChild as React.ReactElement, { key: "clone-first" })
    : null;

  return (
    <>
      <div className={cn(styles.root, className)}>
        {count > 1 && (
          <button
            type="button"
            aria-label="Previous"
            className={cn(styles.btn, styles.btnPrev)}
            onClick={() => { if (!isAnimating.current) scrollTo(index - 1); }}
          >
            <ChevronLeft size={22} strokeWidth={1.5} />
          </button>
        )}

        <div className={styles.viewport}>
          <div
            ref={scrollRef}
            className={styles.scroller}
            onScroll={handleScroll}
            onClick={handleScrollerClick}
            onMouseOver={(e) => {
              const el = e.currentTarget;
              el.style.cursor = (e.target as HTMLElement).tagName === "IMG" ? "zoom-in" : "default";
            }}
            onMouseLeave={(e) => { e.currentTarget.style.cursor = "default"; }}
          >
            {cloneOfLast}
            {children}
            {cloneOfFirst}
          </div>
        </div>

        {count > 1 && (
          <button
            type="button"
            aria-label="Next"
            className={cn(styles.btn, styles.btnNext)}
            onClick={() => { if (!isAnimating.current) scrollTo(index + 1); }}
          >
            <ChevronRight size={22} strokeWidth={1.5} />
          </button>
        )}

        {count > 1 && (
          <div className={styles.dots}>
            {Array.from({ length: count }, (_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Slide ${i + 1}`}
                className={cn(styles.dot, i === index && styles.dotActive)}
                onClick={() => { if (!isAnimating.current) scrollTo(i); }}
              />
            ))}
          </div>
        )}
      </div>

      {lightboxSrc && (
        <Lightbox src={lightboxSrc} onClose={() => setLightboxSrc(null)} />
      )}
    </>
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
