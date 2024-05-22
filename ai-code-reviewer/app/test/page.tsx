"use client";
import React from "react";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/ext-language_tools";

const page = () => {
  function onChange(newValue: any) {
    console.log("change", newValue);
  }
  return (
    <div>
      <AceEditor
        placeholder="Placeholder Text"
        mode="javascript"
        theme="textmate"
        name="blah2"
        fontSize={16}
        lineHeight={24}
        showPrintMargin={true}
        showGutter={true}
        highlightActiveLine={true}
        value={``}
        setOptions={{
          enableBasicAutocompletion: true,
          enableLiveAutocompletion: true,
          enableSnippets: true,
          showLineNumbers: true,
          tabSize: 2,
        }}
      />
    </div>
  );
};

export default page;
