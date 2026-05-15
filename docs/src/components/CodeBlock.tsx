type CodeBlockProps = {
  code: string;
  language?: string;
};

export function CodeBlock({ code, language = 'bash' }: CodeBlockProps) {
  return (
    <pre className="code-block" data-language={language}>
      <code>{code}</code>
    </pre>
  );
}
