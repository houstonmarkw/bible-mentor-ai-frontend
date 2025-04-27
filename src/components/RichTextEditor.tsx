'use client';

import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { useEffect } from 'react';

type Props = {
  content: string;
  onChange: (content: string) => void;
};

export default function RichTextEditor({ content, onChange }: Props) {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        paragraph: {
          HTMLAttributes: {
            class: 'mb-4', // Adds margin bottom to paragraphs for clean spacing
          },
        },
      }),
    ],
    content,
    editorProps: {
      attributes: {
        class: 'prose prose-blue max-w-none focus:outline-none', // makes content more readable
      },
    },
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
  });

  useEffect(() => {
    if (editor && content !== editor.getHTML()) {
      editor.commands.setContent(content);
    }
  }, [content, editor]);

  return (
    <div className="border rounded px-3 py-2 text-blue-800 bg-white shadow">
      <EditorContent editor={editor} />
    </div>
  );
}
