"use client";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import { assetPath } from "@/lib/assetPath";
import styles from "./Prose.module.css";

interface ProseProps {
  content: string;
}

export function Prose({ content }: ProseProps) {
  return (
    <div className={styles.prose}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw]}
        components={{
          img: ({ src, alt, ...props }) => (
            <img src={typeof src === "string" ? assetPath(src) : undefined} alt={alt ?? ""} {...props} />
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
