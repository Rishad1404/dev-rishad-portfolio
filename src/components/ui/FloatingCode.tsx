"use client";

import { motion } from "framer-motion";

const codeSnippets = [
  {
    id: 1,
    code: [
      { tokens: [{ type: "keyword", text: "const " }, { type: "variable", text: "developer" }, { type: "plain", text: " = {" }] },
      { tokens: [{ type: "plain", text: "  " }, { type: "type", text: "name" }, { type: "plain", text: ': ' }, { type: "string", text: '"Rishad"' }] },
      { tokens: [{ type: "plain", text: "  " }, { type: "type", text: "role" }, { type: "plain", text: ': ' }, { type: "string", text: '"Full Stack Dev"' }] },
      { tokens: [{ type: "plain", text: "}" }] },
    ],
    x: "5%",
    y: "15%",
    delay: 0,
    duration: 20,
  },
  {
    id: 2,
    code: [
      { tokens: [{ type: "keyword", text: "import " }, { type: "plain", text: "{ " }, { type: "function", text: "useState" }, { type: "plain", text: " }" }] },
      { tokens: [{ type: "keyword", text: "from " }, { type: "string", text: '"react"' }] },
    ],
    x: "75%",
    y: "10%",
    delay: 3,
    duration: 25,
  },
  {
    id: 3,
    code: [
      { tokens: [{ type: "comment", text: "// Building amazing apps" }] },
      { tokens: [{ type: "keyword", text: "async function " }, { type: "function", text: "build" }, { type: "plain", text: "() {" }] },
      { tokens: [{ type: "keyword", text: "  await " }, { type: "function", text: "deploy" }, { type: "plain", text: "()" }] },
      { tokens: [{ type: "plain", text: "}" }] },
    ],
    x: "80%",
    y: "60%",
    delay: 6,
    duration: 22,
  },
  {
    id: 4,
    code: [
      { tokens: [{ type: "keyword", text: "type " }, { type: "type", text: "Stack " }, { type: "plain", text: "= {" }] },
      { tokens: [{ type: "type", text: "  frontend" }, { type: "plain", text: ": " }, { type: "string", text: '"Next.js"' }] },
      { tokens: [{ type: "type", text: "  backend" }, { type: "plain", text: ": " }, { type: "string", text: '"Node.js"' }] },
      { tokens: [{ type: "plain", text: "}" }] },
    ],
    x: "2%",
    y: "65%",
    delay: 9,
    duration: 28,
  },
  {
    id: 5,
    code: [
      { tokens: [{ type: "keyword", text: "SELECT " }, { type: "plain", text: "*" }] },
      { tokens: [{ type: "keyword", text: "FROM " }, { type: "variable", text: "projects" }] },
      { tokens: [{ type: "keyword", text: "WHERE " }, { type: "plain", text: "quality = " }, { type: "string", text: '"high"' }] },
    ],
    x: "60%",
    y: "80%",
    delay: 4,
    duration: 18,
  },
];

interface Token {
  type: string;
  text: string;
}

function TokenText({ type, text }: Token) {
  const classMap: Record<string, string> = {
    keyword: "token-keyword",
    function: "token-function",
    string: "token-string",
    comment: "token-comment",
    variable: "token-variable",
    type: "token-type",
    plain: "token-plain",
  };

  return (
    <span className={classMap[type] || "token-plain"}>
      {text}
    </span>
  );
}

export function FloatingCode() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {codeSnippets.map((snippet) => (
        <motion.div
          key={snippet.id}
          className="absolute"
          style={{ left: snippet.x, top: snippet.y }}
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: [0, 0.12, 0.12, 0],
            y: [20, 0, -20, -40],
          }}
          transition={{
            duration: snippet.duration,
            delay: snippet.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <div className="terminal-window p-3 text-[11px] font-mono leading-5 min-w-max">
            {snippet.code.map((line, lineIndex) => (
              <div key={lineIndex} className="flex items-center">
                <span className="line-number text-[10px] mr-2">
                  {lineIndex + 1}
                </span>
                {line.tokens.map((token, tokenIndex) => (
                  <TokenText
                    key={tokenIndex}
                    type={token.type}
                    text={token.text}
                  />
                ))}
              </div>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
}