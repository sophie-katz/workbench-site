import { Box, Code, Flex, Heading, Link } from '@radix-ui/themes';
import CodeSnippet from '../../components/CodeSnippet';

export default function DocsPage() {
  return (
    <Box
      style={{
        maxWidth: '70rem',
        margin: '0 auto',
      }}
      p="7"
    >
      <Box
        style={{ background: 'var(--gray-3)', borderRadius: 'var(--space-2)' }}
        p="8"
      >
        <p>
          <Heading as="h1" size="7">
            Create a new project
          </Heading>
        </p>
        <p>
          In your project directory, create a new file called{' '}
          <Code>workbench.yml</Code> with this content:
        </p>
        <p>
          <CodeSnippet text={'tasks:\n  build:\n    run: ["npx", "tsc"]'}>
            <span className="ultima-fg-yellow">tasks:</span>
            <br />
            &nbsp;&nbsp;
            <span className="ultima-fg-yellow">build:</span>
            <br />
            <span className="ultima-fg-bright-black"></span>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <span className="ultima-fg-yellow">run:</span> [
            <span className="ultima-fg-magenta">"npx"</span>,{' '}
            <span className="ultima-fg-magenta">"tsc"</span>]
          </CodeSnippet>
        </p>
        <p>
          The <Code>tasks</Code> section is where all of the tasks are defined.
          Our first task is called <Code>build</Code>. You can call it like
          this:
        </p>
        <p>
          <CodeSnippet text="wb build">
            <span
              className="ultima-fg-bright-green"
              style={{ fontWeight: 'bold' }}
            >
              wb
            </span>{' '}
            build
          </CodeSnippet>
        </p>
        <p>
          And it will run <Code>npx tsc</Code>.
        </p>
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
          Many tasks take in input files and generate output files. If the
          inputs do not change, there is often no reason to re-run the task.
        </p>
        <p>You can specify both like this:</p>
        <p>
          <CodeSnippet text={'tasks:\n  build:\n    run: ["npx", "tsc"]'}>
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
          will get re-run. If you delete <Code>./dist/</Code>, the task will
          also get re-run.
        </p>
        <p>
          You can also exclude files from lists using <Code>!</Code>:
        </p>
        <p>
          <CodeSnippet text={'tasks:\n  build:\n    run: ["npx", "tsc"]'}>
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
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- !./node_modules/**/*
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
          <CodeSnippet>
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
          <CodeSnippet>
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
          <CodeSnippet>
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
          <CodeSnippet>
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
        <p>
          <Heading as="h1" size="7">
            Add documentation
          </Heading>
        </p>
        <p>
          Self-documenting tasks means that you do not have to document them in
          a separate file that may get stale over time. There are a few
          properties you can add.
        </p>
        <p>
          <Heading as="h2" size="5">
            Descriptions
          </Heading>
        </p>
        <p>You can add a description to a task like this:</p>
        <p>
          <CodeSnippet>
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
          <CodeSnippet text="wb help build">
            <span
              className="ultima-fg-bright-green"
              style={{ fontWeight: 'bold' }}
            >
              wb
            </span>{' '}
            build.help
          </CodeSnippet>
        </p>
        <p>And it will give you this output:</p>
        <p>
          <CodeSnippet>
            <span className="ultima-fg-bright-black">usage:</span>{' '}
            <span
              className="ultima-fg-bright-green"
              style={{ fontWeight: 'bold' }}
            >
              wb
            </span>{' '}
            ...
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
          <CodeSnippet>
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
          <CodeSnippet text="wb help build">
            <span
              className="ultima-fg-bright-green"
              style={{ fontWeight: 'bold' }}
            >
              wb
            </span>{' '}
            build.help
          </CodeSnippet>
        </p>
        <p>And it will give you this output:</p>
        <p>
          <CodeSnippet>
            <span className="ultima-fg-bright-black">usage:</span>{' '}
            <span
              className="ultima-fg-bright-green"
              style={{ fontWeight: 'bold' }}
            >
              wb
            </span>{' '}
            build ...
            <br />
            <br />
            Build the project.
            <br />
            <br />
            <span className="ultima-fg-bright-black">examples:</span>
            <br />
            <span className="ultima-fg-bright-black">&nbsp;&nbsp;$</span>{' '}
            <span
              className="ultima-fg-bright-green"
              style={{ fontWeight: 'bold' }}
            >
              wb
            </span>{' '}
            build
            <br />
            <br />
            <span className="ultima-fg-magenta">
              &nbsp;&nbsp;# Watch for changes
            </span>
            <br />
            <span className="ultima-fg-bright-black">&nbsp;&nbsp;$</span>{' '}
            <span
              className="ultima-fg-bright-green"
              style={{ fontWeight: 'bold' }}
            >
              wb
            </span>{' '}
            build --watch
          </CodeSnippet>
        </p>
        <p>
          <Heading as="h2" size="5">
            Custom usage
          </Heading>
        </p>
        <p>
          You can also specify custom usage for a task. This is useful if you
          want to show how to use a task with different options:
        </p>
        <p>
          <CodeSnippet>
            <span className="ultima-fg-yellow">tasks:</span>
            <br />
            &nbsp;&nbsp;
            <span className="ultima-fg-yellow">build:</span>
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;
            <span className="ultima-fg-yellow">run:</span> npx tsc
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;
            <span className="ultima-fg-yellow">usage:</span> [options]
          </CodeSnippet>
        </p>
        <p>Now you can run this command:</p>
        <p>
          <CodeSnippet text="wb help build">
            <span
              className="ultima-fg-bright-green"
              style={{ fontWeight: 'bold' }}
            >
              wb
            </span>{' '}
            build.help
          </CodeSnippet>
        </p>
        <p>And it will give you this output:</p>
        <p>
          <CodeSnippet>
            <span className="ultima-fg-bright-black">usage:</span>{' '}
            <span
              className="ultima-fg-bright-green"
              style={{ fontWeight: 'bold' }}
            >
              wb
            </span>{' '}
            build [options]
          </CodeSnippet>
        </p>
        <p>
          <Heading as="h1" size="7">
            <Code>wb</Code> command line
          </Heading>
        </p>
        <p>
          Run this command to get more information on how to use the{' '}
          <Code>wb</Code> command:
        </p>
        <p>
          <CodeSnippet>
            <span
              className="ultima-fg-bright-green"
              style={{ fontWeight: 'bold' }}
            >
              wb
            </span>{' '}
            --help
          </CodeSnippet>
        </p>
        <p>
          <Heading as="h1" size="7">
            <Code>workbench.yml</Code> reference
          </Heading>
        </p>
        <p>
          See{' '}
          <Link
            href="https://github.com/sophie-katz/workbench/blob/main/docs/workbench-config-spec.md"
            target="_blank"
          >
            this page
          </Link>{' '}
          for a full reference of the <Code>workbench.yml</Code> file.
        </p>
      </Box>
    </Box>
  );
}
