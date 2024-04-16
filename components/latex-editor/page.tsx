import React, { useState } from 'react';
import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/mode-latex';
import 'ace-builds/src-noconflict/theme-github';
import katex from 'katex';
import 'katex/dist/katex.min.css';

const LaTeXEditor: React.FC = () => {
  const [latexCode, setLatexCode] = useState<string>('');
  const [renderedLatex, setRenderedLatex] = useState<string>('');

  const handleLatexChange = (value: string) => {
    setLatexCode(value);
    try {
      const html = katex.renderToString(value, {
        throwOnError: false
      });
      setRenderedLatex(html);
    } catch (e) {
      console.error(e);
      setRenderedLatex('<span style="color: red;">Error in LaTeX code</span>');
    }
  };

  return (
    <div>
      <AceEditor
        mode="latex"
        theme="github"
        onChange={handleLatexChange}
        name="LATEX_EDITOR"
        editorProps={{ $blockScrolling: true }}
        value={latexCode}
        height="200px"
        width="100%"
      />
      <div dangerouslySetInnerHTML={{ __html: renderedLatex }} />
    </div>
  );
};

export default LaTeXEditor;
