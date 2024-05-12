import { TerminalOutput } from 'react-terminal-ui';
import WorkbenchTerminal from './WorkbenchTerminal';

export default function ExampleRunning() {
  return (
    <WorkbenchTerminal height="16rem" showThemeAttribution={true}>
      <TerminalOutput>
        <>
          <span className="ultima-fg-yellow">$</span>{' '}
          <span
            className="ultima-fg-bright-green"
            style={{ fontWeight: 'bold' }}
          >
            wb
          </span>{' '}
          test
        </>
      </TerminalOutput>
      <TerminalOutput>
        <>
          <span className="ultima-fg-dimmed-green">◆</span>{' '}
          <span className="ultima-fg-yellow">
            'generate-types' skipped (cached)
          </span>
        </>
      </TerminalOutput>
      <TerminalOutput>
        <>
          <span className="ultima-fg-dimmed-green">◆</span>{' '}
          <span className="ultima-fg-green">'build' completed</span>{' '}
          <span className="ultima-fg-bright-black">
            in 0.31s: npm run build
          </span>
        </>
      </TerminalOutput>
      <TerminalOutput>
        <>
          【2/3】
          <span className="ultima-fg-bright-green">
            ████████████████████░░░░░░░░░░
          </span>{' '}
          <span className="ultima-fg-dimmed-green">◆</span>{' '}
          <span className="ultima-fg-green">'test'</span>
          <span className="ultima-fg-bright-black">: npm run test</span>
        </>
      </TerminalOutput>
    </WorkbenchTerminal>
  );
}
