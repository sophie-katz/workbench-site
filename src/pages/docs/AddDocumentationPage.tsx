import { Box, Code, Flex, Heading, Link } from '@radix-ui/themes';
import CodeSnippet from '../../components/CodeSnippet';

export default function DocsPage() {
  return (
    <>
      <p>
        <Heading as="h1" size="7">
          Add documentation
        </Heading>
      </p>
      <p>
        Self-documenting tasks means that you do not have to document them in a
        separate file that may get stale over time. There are a few properties
        you can add.
      </p>
      <p>
        <Heading as="h2" size="5">
          Descriptions
        </Heading>
      </p>
      <p>You can add a description to a task like this:</p>
      <p>
        <CodeSnippet
          text={
            'tasks:\n  build:\n    description: Build the project.\n    run: npx tsc'
          }
        >
          <span className="ultima-fg-yellow">tasks:</span>
          <br />
          &nbsp;&nbsp;
          <span className="ultima-fg-yellow">build:</span>
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;
          <span className="ultima-fg-yellow">description:</span> Build the
          project.
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;
          <span className="ultima-fg-yellow">run:</span> npx tsc
        </CodeSnippet>
      </p>
      <p>Now you can run this command:</p>
      <p>
        <CodeSnippet text="wb build.help">
          <span className="ultima-fg-yellow">$</span>{' '}
          <b className="ultima-fg-bright-green">wb</b> build.help
          <br />
          <span className="ultima-fg-bright-black">usage:</span>{' '}
          <b className="ultima-fg-bright-green">wb</b> ...
          <br />
          <br />
          Build the project.
        </CodeSnippet>
      </p>
      <p>
        <Heading as="h2" size="5">
          Examples
        </Heading>
      </p>
      <p>
        You can also add examples for a task to make it easy for others to see
        how to use it:
      </p>
      <p>
        <CodeSnippet
          text={
            'tasks:\n  build:\n    description: Build the project.\n    run: npx tsc\n    examples:\n      - run:\n      - run: --watch\n      - description: Watch for changes'
          }
        >
          <span className="ultima-fg-yellow">tasks:</span>
          <br />
          &nbsp;&nbsp;
          <span className="ultima-fg-yellow">build:</span>
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;
          <span className="ultima-fg-yellow">description:</span> Build the
          project.
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;
          <span className="ultima-fg-yellow">run:</span> npx tsc
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;
          <span className="ultima-fg-yellow">examples:</span>
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-{' '}
          <span className="ultima-fg-yellow">run:</span>
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-{' '}
          <span className="ultima-fg-yellow">run:</span> --watch
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <span className="ultima-fg-yellow">description:</span> Watch for
          changes
        </CodeSnippet>
      </p>
      <p>Now you can run this command:</p>
      <p>
        <CodeSnippet text="wb build.help">
          <span className="ultima-fg-yellow">$</span>{' '}
          <b className="ultima-fg-bright-green">wb</b> build.help
          <br />
          <span className="ultima-fg-bright-black">usage:</span>{' '}
          <b className="ultima-fg-bright-green">wb</b> build ...
          <br />
          <br />
          Build the project.
          <br />
          <br />
          <span className="ultima-fg-bright-black">examples:</span>
          <br />
          <span className="ultima-fg-bright-black">&nbsp;&nbsp;$</span>{' '}
          <b className="ultima-fg-bright-green">wb</b> build
          <br />
          <br />
          <span className="ultima-fg-magenta">
            &nbsp;&nbsp;# Watch for changes
          </span>
          <br />
          <span className="ultima-fg-bright-black">&nbsp;&nbsp;$</span>{' '}
          <b className="ultima-fg-bright-green">wb</b> build --watch
        </CodeSnippet>
      </p>
      <p>
        <Heading as="h2" size="5">
          Custom usage
        </Heading>
      </p>
      <p>
        You can also specify custom usage for a task. This is useful if you want
        to show how to use a task with different options:
      </p>
      <p>
        <CodeSnippet
          text={'tasks:\n  build:\n    run: npx tsc\n    usage: "[options]"'}
        >
          <span className="ultima-fg-yellow">tasks:</span>
          <br />
          &nbsp;&nbsp;
          <span className="ultima-fg-yellow">build:</span>
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;
          <span className="ultima-fg-yellow">run:</span> npx tsc
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;
          <span className="ultima-fg-yellow">usage:</span>{' '}
          <span className="ultima-fg-magenta">"[options]"</span>
        </CodeSnippet>
      </p>
      <p>Now you can run this command:</p>
      <p>
        <CodeSnippet text="wb build.help">
          <span className="ultima-fg-yellow">$</span>{' '}
          <b className="ultima-fg-bright-green">wb</b> build.help
          <br />
          <span className="ultima-fg-bright-black">usage:</span>{' '}
          <b className="ultima-fg-bright-green">wb</b> build [options]
        </CodeSnippet>
      </p>
    </>
  );
}
