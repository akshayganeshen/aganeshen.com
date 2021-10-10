import { createHash } from "crypto";

import IconEmail from "@mui/icons-material/Email";
import IconGitHub from "@mui/icons-material/GitHub";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import * as palette from "@mui/material/colors";
import { useTheme } from "@mui/material/styles";
import type { SxProps } from "@mui/system";
import type { NextPage } from "next";
import React, { useMemo } from "react";

const fullHeight: SxProps = {
  height: "100%",
  minHeight: "100%",
};

const fullWidth: SxProps = {
  width: "100%",
};

const monospaceFont: SxProps = {
  fontFamily: "monospace",
};

const Home: NextPage = () => (
  <MinSmContainer>
    <Grid
      container
      direction="column"
      justifyContent="space-evenly"
      wrap="nowrap"
      sx={fullHeight}
    >
      <HomeHeader cursor />
      <HomeContent />
      <HomeFooter />
    </Grid>
  </MinSmContainer>
);

const MinSmContainer: React.FC = ({ children }) => {
  const theme = useTheme();

  return (
    <Container
      sx={{
        ...fullHeight,
        minWidth: (3 / 4) * theme.breakpoints.values.sm,
      }}
    >
      {children}
    </Container>
  );
};

const HomeHeader: React.FC<{
  lineNumber?: boolean;
  cursor?: boolean;
}> = ({ lineNumber, cursor }) => (
  <Grid
    item
    xs="auto"
    container
    direction="row"
    columnSpacing={1}
    justifyContent="center"
    alignItems="center"
    wrap="nowrap"
  >
    {lineNumber && (
      <Grid item xs="auto">
        <Typography
          variant="caption"
          component="span"
          sx={{
            ...monospaceFont,
            color: "text.disabled",
            verticalAlign: "middle",
          }}
        >
          12
        </Typography>
      </Grid>
    )}
    <Grid item xs="auto">
      <MonospaceTypography>I write code</MonospaceTypography>
    </Grid>
    {cursor && (
      <Grid item xs="auto">
        <MonospaceTypography>
          <PhasingCursor />
        </MonospaceTypography>
      </Grid>
    )}
  </Grid>
);

const PhasingCursor: React.FC = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        backgroundColor: "primary.main",
        width: "0.05em",
        height: "1.2em",
        ["@keyframes phase-opacity"]: {
          from: { opacity: 1.0 },
          to: { opacity: 0.0 },
        },
        animationName: "phase-opacity",
        animationDuration: "1s",
        animationIterationCount: "infinite",
        animationDirection: "alternate",
        animationTimingFunction: theme.transitions.easing.easeInOut,
      }}
    />
  );
};

const MonospaceTypography: React.FC<{
  sx?: SxProps;
}> = ({ children, sx }) => (
  <Typography
    variant="h1"
    component="span"
    noWrap
    gutterBottom
    sx={{ ...monospaceFont, ...sx }}
  >
    {children}
  </Typography>
);

const HomeContent: React.FC = () => (
  <Grid
    item
    xs="auto"
    container
    direction="row"
    justifyContent="center"
    alignItems="center"
  >
    <Grid item xs={12} md={12} lg={12}>
      <Typography variant="h2" component="h1" align="center" gutterBottom>
        Projects
      </Typography>
    </Grid>
    <Grid item xs={12} md={8} lg={6}>
      <Project
        name="aganeshen"
        tags={["next.js", "typescript"]}
        href="https://github.com/akshayganeshen/aganeshen.com"
      />
    </Grid>
    <Grid item xs={12} md={8} lg={6}>
      <Project
        name="beryl"
        tags={["colour-scheme", "sublime-text"]}
        href="https://github.com/akshayganeshen/sublime-beryl"
      />
    </Grid>
  </Grid>
);

const Project: React.FC<{
  name: string;
  tags?: string[];
  href: string;
}> = ({ name, tags, href }) => (
  <Paper sx={{ mx: 4, my: 2 }}>
    <Button
      href={href}
      fullWidth
      sx={{
        p: 2,
        color: "unset",
      }}
    >
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        sx={fullWidth}
      >
        <Typography
          variant="body1"
          component="h2"
          align="center"
          key={name}
          sx={{
            flexGrow: 1,
          }}
        >
          {name}
        </Typography>
        {tags &&
          tags.map((tag, i) => (
            <ProjectTag
              tag={tag}
              key={i}
              sx={{
                flexGrow: 0,
                flexShrink: 1,
              }}
            />
          ))}
      </Stack>
    </Button>
  </Paper>
);

const ButtonBodyTypography: React.FC<React.ComponentProps<typeof Button>> = ({
  children,
  sx,
  ...props
}) => (
  <Button
    {...props}
    sx={{
      p: 2,
      mx: 2,
      color: "unset",
      ...sx,
    }}
  >
    <Typography variant="body1" component="span" noWrap sx={sx}>
      {children}
    </Typography>
  </Button>
);

const ProjectTag: React.FC<{
  tag: string;
  sx?: SxProps;
}> = ({ tag, sx }) => {
  const colour = useMemo(() => selectTagColour(tag), [tag]);

  return (
    <Chip
      label={tag}
      variant="outlined"
      sx={{
        mx: 1,
        borderColor: colour,
        color: colour,
        cursor: "unset",
        ...sx,
      }}
    />
  );
};

const selectByHash =
  (choices: readonly string[]) =>
  (value: string): string => {
    const n = choices.length;
    const hash = createHash("sha256").update(value).digest();
    const i = hash.reduce((acc, byte) => (0xff * acc + byte) % n, 0);
    return choices[i];
  };

const selectTagColour = selectByHash([
  palette.red.A400,
  palette.pink.A400,
  palette.purple.A400,
  palette.deepPurple.A400,
  palette.indigo.A400,
  palette.blue.A400,
  palette.lightBlue.A400,
  palette.cyan.A400,
  palette.teal.A400,
  palette.green.A400,
  palette.lightGreen.A400,
  palette.lime.A400,
  palette.yellow.A400,
  palette.amber.A400,
  palette.orange.A400,
  palette.deepOrange.A400,
]);

const HomeFooter: React.FC = () => (
  <Grid
    item
    xs="auto"
    container
    direction="row"
    columnSpacing={1}
    justifyContent="center"
    alignItems="center"
    wrap="nowrap"
  >
    <Grid item xs="auto">
      <ButtonBodyTypography
        href="https://github.com/akshayganeshen"
        startIcon={<IconGitHub />}
      >
        GitHub
      </ButtonBodyTypography>
    </Grid>
    <Grid item xs="auto">
      <ButtonBodyTypography
        href="mailto:me@aganeshen.com"
        startIcon={<IconEmail />}
      >
        Email
      </ButtonBodyTypography>
    </Grid>
  </Grid>
);

export default Home;
