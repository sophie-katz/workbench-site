import { Box, Button, Flex, Link } from '@radix-ui/themes';
import './DocsLayout.css';
import React from 'react';

export interface DocsLayoutProps {
  children: React.ReactNode;
  links: { title: string; slug: string }[];
  selected: number;
}

export default function DocsLayout({
  children,
  links,
  selected,
}: DocsLayoutProps) {
  return (
    <>
      <Flex
        direction={{
          sm: 'row',
          initial: 'column',
        }}
        p="2"
        gap="2"
      >
        <Flex
          direction="column"
          align="stretch"
          gap={{ md: '3', initial: '1' }}
          p={{ md: '5', sm: '3', initial: '2' }}
          pt={{ md: '7', sm: '6', initial: '4' }}
        >
          {links.map((link, index) => {
            return (
              <Link href={`/#/docs/${link.slug}`}>
                <Button
                  size={{ md: '3', initial: '1' }}
                  variant="ghost"
                  className={`DocsLayout--linkButton ${index == selected ? 'DocsLayout--linkButton--selected' : ''}`}
                  color={index == selected ? 'indigo' : 'gray'}
                >
                  {link.title}
                </Button>
              </Link>
            );
          })}
        </Flex>
        <Flex direction="row" justify="center" flexGrow="1">
          <Box
            className="DocsLayout--containerBox"
            p={{ md: '7', sm: '6', initial: '4' }}
          >
            {children}
          </Box>
        </Flex>
      </Flex>
    </>
  );
}
