'use client';

import { IconCopy } from '@tabler/icons-react';
import { ActionIcon, Button } from '@mantine/core';
import { copyToClipboard } from '@/utils';
import classes from './collapsible-table.module.css';

export type CollapsibleTableActionProps = { path: string };

export function CollapsibleTableAction({ path }: CollapsibleTableActionProps) {
  return (
    <div className={`t-action-group ${classes['t-action-group']}`}>
      <ActionIcon
        size="xs"
        color="#1F2020"
        variant="white"
        aria-label="Copy"
        className={classes['t-action']}
        onClick={() => copyToClipboard(path)}
      >
        <IconCopy style={{ width: '70%', height: '70%' }} stroke={1.5} />
      </ActionIcon>

      <Button
        variant="white"
        color="gray"
        size="xs"
        className={`${classes['t-action']}`}
        onClick={() => copyToClipboard(path)}
      >
        Create column
      </Button>
    </div>
  );
}
