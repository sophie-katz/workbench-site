import { TerminalOutput } from 'react-terminal-ui';
import WorkbenchTerminal from './WorkbenchTerminal';

export default function ExampleTaskHelp() {
  return (
    <WorkbenchTerminal height="20rem">
      <TerminalOutput>
        <>
          <span className="ultima-fg-yellow">$</span>{' '}
          <span
            className="ultima-fg-bright-green"
            style={{ fontWeight: 'bold' }}
          >
            wb
          </span>{' '}
          lint.help
        </>
      </TerminalOutput>
      <TerminalOutput>
        <>
          <span className="ultima-fg-bright-black">usage:</span>{' '}
          <span
            className="ultima-fg-bright-green"
            style={{ fontWeight: 'bold' }}
          >
            wb
          </span>{' '}
          ...
        </>
      </TerminalOutput>
      <TerminalOutput />
      <TerminalOutput>
        Run both ESLint and Prettier to lint codebase.
      </TerminalOutput>
      <TerminalOutput />
      <TerminalOutput>
        <>
          <span className="ultima-fg-bright-black">examples:</span>
        </>
      </TerminalOutput>
      <TerminalOutput>
        <>
          <span className="ultima-fg-bright-black">{'  '}$</span>{' '}
          <span
            className="ultima-fg-bright-green"
            style={{ fontWeight: 'bold' }}
          >
            wb
          </span>{' '}
          lint
        </>
      </TerminalOutput>
      <TerminalOutput />
      <TerminalOutput>
        <>
          <span className="ultima-fg-magenta">
            {'  '}# Also fix style problems if possible
          </span>
        </>
      </TerminalOutput>
      <TerminalOutput>
        <>
          <span className="ultima-fg-bright-black">{'  '}$</span>{' '}
          <span
            className="ultima-fg-bright-green"
            style={{ fontWeight: 'bold' }}
          >
            wb
          </span>{' '}
          lint --fix
        </>
      </TerminalOutput>
    </WorkbenchTerminal>
  );
}
