"use client";

import { useState } from "react";
import { site } from "@/content/site";
import { Check, Copy } from "./icons";

export function CopyEmail({ className }: { className?: string }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(site.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${site.email}`;
    }
  }

  return (
    <button
      type="button"
      onClick={copy}
      className={
        "inline-flex items-center gap-2 rounded-full border border-line px-3.5 py-2 text-sm text-fg-2 transition-colors hover:border-line-strong hover:text-fg " +
        (className ?? "")
      }
    >
      {copied ? <Check className="text-ok" /> : <Copy />}
      <span aria-live="polite">{copied ? "Copied" : "Copy email"}</span>
    </button>
  );
}
