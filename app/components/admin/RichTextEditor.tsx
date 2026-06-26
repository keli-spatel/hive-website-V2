"use client";

import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import Highlight from "@tiptap/extension-highlight";
import Link from "@tiptap/extension-link";
import TextAlign from "@tiptap/extension-text-align";
import Placeholder from "@tiptap/extension-placeholder";
import Image from "@tiptap/extension-image";
import CodeBlockLowlight from "@tiptap/extension-code-block-lowlight";
import { createLowlight, common } from "lowlight";
import {
  AlignCenter,
  AlignLeft,
  AlignRight,
  Bold,
  Code,
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
  Heading6,
  Highlighter,
  ImagePlus,
  Italic,
  Link2,
  List,
  ListOrdered,
  Quote,
  RemoveFormatting,
  Strikethrough,
  Underline as UnderlineIcon,
  Unlink,
} from "lucide-react";
import { cn } from "@/lib/utils";

const lowlight = createLowlight(common);
const highlightColors = ["#FFF59D", "#C4EDFF", "#C8F7C5", "#FFD8B8", "#E0E0FF", "#FFD1DC"];
const codeLanguages = ["plaintext", "javascript", "typescript", "xml", "css", "json", "bash", "python", "sql", "markdown", "yaml", "rust"];

function ToolbarButton({
  active,
  onClick,
  title,
  children,
}: {
  active?: boolean;
  onClick: () => void;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <button
      aria-label={title}
      className={cn(
        "inline-flex h-9 w-9 items-center justify-center rounded-none border border-[#E2E9F3] outline-none transition-colors focus-visible:border-[#00B0FF] focus-visible:ring-2 focus-visible:ring-[#00B0FF]/25",
        active ? "border-black bg-black text-white" : "bg-white text-black hover:bg-[#F8FAFC]",
      )}
      onClick={onClick}
      title={title}
      type="button"
    >
      {children}
    </button>
  );
}

export default function RichTextEditor({
  value,
  onChange,
}: {
  value: string;
  onChange: (value: string) => void;
}) {
  const editor = useEditor({
    immediatelyRender: false,
    extensions: [
      StarterKit.configure({ codeBlock: false }),
      Underline,
      Highlight.configure({ multicolor: true }),
      Link.configure({
        openOnClick: false,
        autolink: true,
        defaultProtocol: "https",
        HTMLAttributes: { target: "_blank", rel: "noopener noreferrer" },
      }),
      TextAlign.configure({ types: ["heading", "paragraph"] }),
      Placeholder.configure({
        placeholder:
          "Write the post here. Markdown shortcuts work: # for H1, ## for H2, * for bullets, 1. for numbered lists, and ``` for code blocks.",
      }),
      Image,
      CodeBlockLowlight.configure({ lowlight }),
    ],
    content: value,
    onUpdate: ({ editor }) => onChange(editor.getHTML()),
    editorProps: {
      attributes: {
        class:
          "min-h-[560px] border border-[#E2E9F3] p-4 outline-none prose prose-neutral max-w-none",
      },
    },
  });

  if (!editor) return null;
  const editorInstance = editor;

  function setLink() {
    const url = window.prompt("Paste the URL", editorInstance.getAttributes("link").href || "");
    if (url === null) return;
    if (!url.trim()) {
      editorInstance.chain().focus().unsetLink().run();
      return;
    }
    editorInstance.chain().focus().setLink({ href: url }).run();
  }

  function insertImage() {
    const url = window.prompt("Paste image URL", "");
    if (!url) return;
    if (!/^https?:\/\//i.test(url) && !url.startsWith("/")) {
      window.alert("Use a valid http, https, or site-relative image URL.");
      return;
    }
    const alt = window.prompt("Add image alt text", "") ?? "";
    editorInstance.chain().focus().setImage({ src: url, alt }).run();
    window.alert("Image URL inserted into the post.");
  }

  return (
    <div className="grid gap-3">
      <div className="sticky top-4 z-10 flex flex-wrap gap-2 bg-white py-2">
        <ToolbarButton active={editorInstance.isActive("paragraph")} onClick={() => editorInstance.chain().focus().setParagraph().run()} title="Paragraph">
          <span className="text-xs">P</span>
        </ToolbarButton>
        {[1, 2, 3, 4, 5, 6].map((level) => (
          <ToolbarButton
            key={level}
            active={editorInstance.isActive("heading", { level })}
            onClick={() => editorInstance.chain().focus().toggleHeading({ level: level as 1 | 2 | 3 | 4 | 5 | 6 }).run()}
            title={`H${level}`}
          >
            {level === 1 ? <Heading1 size={15} /> : level === 2 ? <Heading2 size={15} /> : level === 3 ? <Heading3 size={15} /> : level === 4 ? <Heading4 size={15} /> : level === 5 ? <Heading5 size={15} /> : <Heading6 size={15} />}
          </ToolbarButton>
        ))}
        <ToolbarButton active={editorInstance.isActive("bold")} onClick={() => editorInstance.chain().focus().toggleBold().run()} title="Bold">
          <Bold size={15} />
        </ToolbarButton>
        <ToolbarButton active={editorInstance.isActive("italic")} onClick={() => editorInstance.chain().focus().toggleItalic().run()} title="Italic">
          <Italic size={15} />
        </ToolbarButton>
        <ToolbarButton active={editorInstance.isActive("underline")} onClick={() => editorInstance.chain().focus().toggleUnderline().run()} title="Underline">
          <UnderlineIcon size={15} />
        </ToolbarButton>
        <ToolbarButton active={editorInstance.isActive("strike")} onClick={() => editorInstance.chain().focus().toggleStrike().run()} title="Strikethrough">
          <Strikethrough size={15} />
        </ToolbarButton>
        <ToolbarButton active={editorInstance.isActive("code")} onClick={() => editorInstance.chain().focus().toggleCode().run()} title="Inline code">
          <Code size={15} />
        </ToolbarButton>
        <ToolbarButton active={editorInstance.isActive("bulletList")} onClick={() => editorInstance.chain().focus().toggleBulletList().run()} title="Bullet list">
          <List size={15} />
        </ToolbarButton>
        <ToolbarButton active={editorInstance.isActive("orderedList")} onClick={() => editorInstance.chain().focus().toggleOrderedList().run()} title="Numbered list">
          <ListOrdered size={15} />
        </ToolbarButton>
        <ToolbarButton active={editorInstance.isActive("blockquote")} onClick={() => editorInstance.chain().focus().toggleBlockquote().run()} title="Blockquote">
          <Quote size={15} />
        </ToolbarButton>
        <ToolbarButton active={editorInstance.isActive("codeBlock")} onClick={() => editorInstance.chain().focus().toggleCodeBlock().run()} title="Code block">
          <Code size={15} />
        </ToolbarButton>
        <ToolbarButton active={editorInstance.isActive({ textAlign: "left" })} onClick={() => editorInstance.chain().focus().setTextAlign("left").run()} title="Align left">
          <AlignLeft size={15} />
        </ToolbarButton>
        <ToolbarButton active={editorInstance.isActive({ textAlign: "center" })} onClick={() => editorInstance.chain().focus().setTextAlign("center").run()} title="Align center">
          <AlignCenter size={15} />
        </ToolbarButton>
        <ToolbarButton active={editorInstance.isActive({ textAlign: "right" })} onClick={() => editorInstance.chain().focus().setTextAlign("right").run()} title="Align right">
          <AlignRight size={15} />
        </ToolbarButton>
        <ToolbarButton active={editorInstance.isActive("link")} onClick={setLink} title="Add or edit link">
          <Link2 size={15} />
        </ToolbarButton>
        <ToolbarButton active={false} onClick={() => editorInstance.chain().focus().unsetLink().run()} title="Remove link">
          <Unlink size={15} />
        </ToolbarButton>
        <ToolbarButton active={false} onClick={insertImage} title="Insert image URL">
          <ImagePlus size={15} />
        </ToolbarButton>
        <ToolbarButton active={editorInstance.isActive("highlight")} onClick={() => editorInstance.chain().focus().toggleHighlight().run()} title="Highlight">
          <Highlighter size={15} />
        </ToolbarButton>
        {highlightColors.map((color) => (
          <button
            key={color}
            className="h-9 w-9 rounded-none border border-[#E2E9F3] outline-none transition-colors focus-visible:border-[#00B0FF] focus-visible:ring-2 focus-visible:ring-[#00B0FF]/25"
            onClick={() => editorInstance.chain().focus().setHighlight({ color }).run()}
            style={{ background: color }}
            title={color}
            type="button"
          />
        ))}
        <input
          aria-label="Custom highlight color"
          className="h-9 w-9 rounded-none border border-[#E2E9F3] outline-none transition-colors focus-visible:border-[#00B0FF] focus-visible:ring-2 focus-visible:ring-[#00B0FF]/25"
          onChange={(event) => editorInstance.chain().focus().setHighlight({ color: event.target.value }).run()}
          type="color"
        />
        <ToolbarButton active={false} onClick={() => editorInstance.chain().focus().unsetHighlight().run()} title="Remove highlight">
          <RemoveFormatting size={15} />
        </ToolbarButton>
        <select
          className="h-9 rounded-none border border-[#E2E9F3] px-2 text-sm outline-none focus-visible:border-[#00B0FF] focus-visible:ring-2 focus-visible:ring-[#00B0FF]/25"
          onChange={(event) => editorInstance.chain().focus().updateAttributes("codeBlock", { language: event.target.value }).run()}
          value={editorInstance.getAttributes("codeBlock").language || "plaintext"}
        >
          {codeLanguages.map((language) => (
            <option key={language} value={language}>
              {language}
            </option>
          ))}
        </select>
      </div>
      <EditorContent editor={editorInstance} />
    </div>
  );
}
