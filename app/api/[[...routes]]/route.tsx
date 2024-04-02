/** @jsxImportSource frog/jsx */

import { Button, Frog } from "frog";
import { devtools } from "frog/dev";
import { serveStatic } from "frog/serve-static";
import { createSystem } from "frog/ui";
import { handle } from "frog/next";

export const { Box, Heading, Text, VStack, vars } = createSystem();

export const app = new Frog({
  basePath: "api",
  ui: { vars },
}).frame("/", (c) => {
  return c.res({
    image: (
      <Box
        grow
        alignVertical="center"
        backgroundColor="background"
        padding="32"
      >
        <VStack gap="4">
          <Heading>FrogUI 🐸</Heading>
          <Text color="text200" size="20">
            Build consistent frame experiences
          </Text>
        </VStack>
      </Box>
    ),
  });
});

devtools(app, { serveStatic });

export const GET = handle(app);
export const POST = handle(app);
