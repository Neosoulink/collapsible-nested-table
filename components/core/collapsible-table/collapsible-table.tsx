'use client';

import { useContext, useMemo } from 'react';
import { IconListDetails, IconPlus } from '@tabler/icons-react';
import { Accordion, Code, Flex } from '@mantine/core';
import { JsonTextContext } from '@/components/providers';
import { ExpectedData, formatDataToSafeTable } from '@/utils';
import { CollapsibleTableCore } from './collapsible-table-core';
import classes from './collapsible-table.module.css';

export type CollapsibleTableProps = { data: ExpectedData };

export function CollapsibleTable() {
  const { value } = useContext(JsonTextContext);
  const formattedData = useMemo(
    () => formatDataToSafeTable(value ? JSON.parse(value) : []),
    [value]
  );

  return (
    <Flex direction="column" gap="md" style={{ width: 354 }}>
      <Accordion
        defaultValue="item"
        className={classes.wrapper}
        classNames={{
          control: classes['wrapper-control'],
          label: classes['wrapper-label'],
          chevron: classes['wrapper-chevron'],
          panel: classes['wrapper-panel'],
          content: classes['wrapper-content'],
        }}
        chevron={<IconPlus className={classes.icon} />}
      >
        <Accordion.Item value="item">
          <Accordion.Control
            classNames={{ icon: classes['wrapper-label-icon'] }}
            icon={<IconListDetails size={20} />}
          >
            Cell details
          </Accordion.Control>

          <Accordion.Panel>
            <CollapsibleTableCore data={formattedData} />
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>

      <Code color="var(--mantine-color-blue-light)">
        {value}
      </Code>
    </Flex>
  );
}
