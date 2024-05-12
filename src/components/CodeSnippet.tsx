import {
  Box,
  Card,
  Code,
  Flex,
  IconButton,
  ScrollArea,
} from '@radix-ui/themes';
import { CopyIcon, CheckIcon } from '@radix-ui/react-icons';
import './CodeSnippet.css';
import { useState } from 'react';

export interface CodeSnippetProps {
  children: React.ReactNode;
  text?: string;
}

export default function CodeSnippet({ children, text }: CodeSnippetProps) {
  const [copied, setCopied] = useState(false);

  async function handleClick() {
    setCopied(true);

    if (text) {
      await navigator.clipboard.writeText(text);
    }
  }

  return (
    <Card>
      <Flex direction="row" style={{ justifyContent: 'space-between' }}>
        <ScrollArea style={{ width: 'calc(100% - 3rem)' }}>
          <Code variant="ghost" size="2" wrap="nowrap">
            {children}
          </Code>
        </ScrollArea>
        {text && (
          <Flex direction="column" justify="start" height="100%">
            <IconButton
              variant="soft"
              color={copied ? 'green' : 'blue'}
              onClick={handleClick}
            >
              <CopyIcon opacity={copied ? 0 : 1} />
              <CheckIcon
                color="green"
                className="wb-code-snippet-code-check-icon"
                opacity={copied ? 1 : 0}
              />
            </IconButton>
          </Flex>
        )}
      </Flex>
    </Card>
  );
}
