import { Group } from '@mantine/core';
import RootStyle from '@/assets/styles/root.module.css';
import { CollapsibleTable, JsonInput } from '@/components/core';
import { ColorSchemeToggle } from '@/components/custom';

export default function HomePage() {
  return (
    <Group justify="center" my="xl" className={RootStyle.mainSection}>
      <ColorSchemeToggle />

      <Group align="start">
        <JsonInput />

        <CollapsibleTable />
      </Group>
    </Group>
  );
}
