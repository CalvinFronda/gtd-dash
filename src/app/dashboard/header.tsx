"use client";
import { useEffect, useState } from "react";
import {
  Burger,
  Container,
  Switch,
  useMantineColorScheme,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconMoonStars, IconSun } from "@tabler/icons-react";

function Header() {
  const [opened, { toggle }] = useDisclosure(false);
  const { toggleColorScheme, colorScheme } = useMantineColorScheme();

  return (
    <header className="h-16 ">
      <Container size="md" className="flex h-16 items-center ">
        <div className="flex align-baseline justify-end w-full">
          <Switch
            size="md"
            color="dark.4"
            onChange={() => toggleColorScheme()}
            onLabel={
              <IconSun
                size={16}
                stroke={2.5}
                color="var(--mantine-color-yellow-4)"
              />
            }
            offLabel={
              <IconMoonStars
                size={16}
                stroke={2.5}
                color="var(--mantine-color-blue-6)"
              />
            }
          />

          <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
        </div>
      </Container>
    </header>
  );
}

export default Header;
