import { Code, Heading, Link } from '@radix-ui/themes';

export default function DocsPage() {
  return (
    <>
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
    </>
  );
}
