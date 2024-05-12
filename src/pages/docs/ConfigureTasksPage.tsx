import { Box, Code, Flex, Heading, Link } from '@radix-ui/themes';
import CodeSnippet from '../../components/CodeSnippet';

export default function DocsPage() {
  return (
    <>
      <p>
        <Heading as="h1" size="7">
          Configure the tasks
        </Heading>
      </p>
      <p>There are many things you can do to configure tasks.</p>
      <p>
        <Heading as="h2" size="5">
          Caching results
        </Heading>
      </p>
      <p>
        Many tasks take in input files and generate output files. If the inputs
        do not change, there is often no reason to re-run the task.
      </p>
      <p>You can specify both like this:</p>
      <p>
        <CodeSnippet
          text={
            'tasks:\n  build:\n    run: ["npx", "tsc"]\n    inputs:\n      - ./src/**/*.ts\n    outputs:\n      - ./dist/**/*.js\n      - ./dist/**/*.d.ts'
          }
        >
          <span className="ultima-fg-yellow">tasks:</span>
          <br />
          &nbsp;&nbsp;
          <span className="ultima-fg-yellow">build:</span>
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;
          <span className="ultima-fg-yellow">run:</span> [
          <span className="ultima-fg-magenta">"npx"</span>,{' '}
          <span className="ultima-fg-magenta">"tsc"</span>]
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;
          <span className="ultima-fg-yellow">inputs:</span>
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- ./src/**/*.ts
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;
          <span className="ultima-fg-yellow">outputs:</span>
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- ./dist/**/*.js
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- ./dist/**/*.d.ts
        </CodeSnippet>
      </p>
      <p>
        Any time a file in the <Code>./src/</Code> directory changes, the task
        will get re-run. If you delete <Code>./dist/</Code>, the task will also
        get re-run.
      </p>
      <p>
        You can also exclude files from lists using <Code>!</Code>:
      </p>
      <p>
        <CodeSnippet
          text={
            'tasks:\n  build:\n    run: ["npx", "tsc"]\n    inputs:\n    - ./**/*\n    - "!./node_modules/**/*"'
          }
        >
          <span className="ultima-fg-yellow">tasks:</span>
          <br />
          &nbsp;&nbsp;
          <span className="ultima-fg-yellow">build:</span>
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;
          <span className="ultima-fg-yellow">run:</span> [
          <span className="ultima-fg-magenta">"npx"</span>,{' '}
          <span className="ultima-fg-magenta">"tsc"</span>]
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;
          <span className="ultima-fg-yellow">inputs:</span>
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- ./**/*
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-{' '}
          <span className="ultima-fg-magenta">"!./node_modules/**/*"</span>
        </CodeSnippet>
      </p>
      <p>
        <Heading as="h2" size="5">
          Run tasks in a shell
        </Heading>
      </p>
      <p>
        By default, when you specify tasks in an array they do not run in a
        shell. And when you specify them in a string, they do.
      </p>
      <p>
        <CodeSnippet
          text={
            'tasks:\n  build:\n    # This will get run in a shell:\n    run: npx tsc\n\n    # And this will not:\n    run: ["npx": "tsc"]'
          }
        >
          <span className="ultima-fg-yellow">tasks:</span>
          <br />
          &nbsp;&nbsp;
          <span className="ultima-fg-yellow">build:</span>
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;
          <span className="ultima-fg-bright-black">
            # This will get run in a shell:
          </span>
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;
          <span className="ultima-fg-yellow">run:</span> npx tsc
          <br />
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;
          <span className="ultima-fg-bright-black">
            # And this will not:
          </span>{' '}
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;
          <span className="ultima-fg-yellow">run:</span> [
          <span className="ultima-fg-magenta">"npx"</span>,{' '}
          <span className="ultima-fg-magenta">"tsc"</span>]
        </CodeSnippet>
      </p>
      <p>
        But you can specify this explicitly with the <Code>shell</Code>{' '}
        property:
      </p>
      <p>
        <CodeSnippet
          text={
            'tasks:\n  build:\n    # This WILL get run in a shell:\n    run: ["npx", "tsc"]\n\n    shell: true'
          }
        >
          <span className="ultima-fg-yellow">tasks:</span>
          <br />
          &nbsp;&nbsp;
          <span className="ultima-fg-yellow">build:</span>
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;
          <span className="ultima-fg-bright-black">
            # This WILL get run in a shell:
          </span>{' '}
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;
          <span className="ultima-fg-yellow">run:</span> [
          <span className="ultima-fg-magenta">"npx"</span>,{' '}
          <span className="ultima-fg-magenta">"tsc"</span>]
          <br />
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;
          <span className="ultima-fg-yellow">shell:</span>{' '}
          <span className="ultima-fg-magenta">true</span>
        </CodeSnippet>
      </p>
      <p>You can also set a custom shell:</p>
      <p>
        <CodeSnippet
          text={
            'tasks:\n  build:\n    # This WILL get run in a shell:\n    run: ["npx", "tsc"]\n\n    shell: /bin/zsh'
          }
        >
          <span className="ultima-fg-yellow">tasks:</span>
          <br />
          &nbsp;&nbsp;
          <span className="ultima-fg-yellow">build:</span>
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;
          <span className="ultima-fg-bright-black">
            # This WILL get run in a shell:
          </span>{' '}
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;
          <span className="ultima-fg-yellow">run:</span> [
          <span className="ultima-fg-magenta">"npx"</span>,{' '}
          <span className="ultima-fg-magenta">"tsc"</span>]
          <br />
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;
          <span className="ultima-fg-yellow">shell:</span> /bin/zsh
        </CodeSnippet>
      </p>
      <p>
        <Heading as="h2" size="5">
          Add dependencies
        </Heading>
      </p>
      <p>
        Make one task dependent on the successful completion of another task
        with the <Code>dependencies</Code> property:
      </p>
      <p>
        <CodeSnippet
          text={
            'tasks:\n  build:\n    ...\n    dependencies:\n      - generate-types'
          }
        >
          <span className="ultima-fg-yellow">tasks:</span>
          <br />
          &nbsp;&nbsp;
          <span className="ultima-fg-yellow">build:</span>
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;
          <span className="ultima-fg-bright-black">...</span>
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;
          <span className="ultima-fg-yellow">dependencies:</span>
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - generate-types
        </CodeSnippet>
      </p>
    </>
  );
}
