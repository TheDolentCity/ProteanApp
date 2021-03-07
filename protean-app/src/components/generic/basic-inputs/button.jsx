import { useGlobalStore } from '../../stores/global-store';

const TEST_PAGE_1 = {
  uuid: "01",
  type: "PAGE",
  title: "PAGE 1 - Health System",
  props: {

  },
  content:
`
<Button>Presss Me</Button>

# Paragraph

That is a paragraph. A paragraph (from the [Ancient Greek](https://en.wikipedia.org/wiki/Ancient_Greek) παράγραφος, parágraphos, "to write beside") is a self-contained unit of a discourse in writing dealing with a particular point or idea. A paragraph consists of one or more sentences. Though not required by the syntax of any language,paragraphs are usually an expected part of formal writing, used to organize longer prose.

# Paragraph
`
}

const TEST_PAGE_2 = {
  uuid: "02",
  type: "PAGE",
  title: "PAGE 2 - Luck System",
  props: {

  },
  content:
`
<Button>Press Me</Button>

### The Paragraph element

The HTML \`<p>\` element represents a paragraph. Paragraphs are usually represented in visual media as blocks of text separated from adjacent blocks by blank lines and/or first-line indentation, but HTML paragraphs can be any structural grouping of related content, such as images or form fields.
Paragraphs are block-level elements, and notably will automatically close if another block-level element is parsed before the closing \`</p> \` tag.
\`\`\`
< p > An example for the paragraph element </p >
\`\`\`

### The Paragraph element
`
}

export default function Button(props) {
  const { globalState, dispatch } = useGlobalStore();

  function activeFileDispatch(file) {
    if (file.uuid === TEST_PAGE_2.uuid) {
      return {
        type: "setActiveFile",
        payload: {
          activeFile: TEST_PAGE_1
        }
      }
    }
    else if (file.uuid === TEST_PAGE_1.uuid) {
      return {
        type: "setActiveFile",
        payload: {
          activeFile: TEST_PAGE_2
        }
      }
    }
    else {
      return {
        type: "setActiveFile",
        payload: {
          activeFile: TEST_PAGE_1
        }
      }
    }
  }

  return (
    <button onClick={() => dispatch(activeFileDispatch(globalState.activeFile))} className={props.css}>
      {props.children}
    </button>
  );
}