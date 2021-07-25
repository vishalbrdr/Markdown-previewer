marked.setOptions({ breaks: true })
const renderer = new marked.Renderer();
function App() {
    const placeholder = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
`;

    const [text, setText] = React.useState(placeholder);

    return (
        <div className="container">
            <div className="left">
                <h2>Editor</h2>
                <textarea className="editor" value={text} onChange={(e) => setText(e.target.value)} name="markdown" id="editor"></textarea>
            </div>
            <div className="right">
                <h2>Output</h2>
                <Preview markdown={text} />
            </div>
        </div>
    )
}


function Preview({ markdown }) {
    return (
        <div id="preview"
            dangerouslySetInnerHTML={{
                __html: marked(markdown, { renderer: renderer })
            }}
            className="preview"
        >
        </div>
    )
}


ReactDOM.render(<App />, document.getElementById("app"))