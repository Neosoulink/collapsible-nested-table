'use client';

import { Accordion } from '@mantine/core';
import { FormattedData } from '@/utils';
import { CollapsibleTableAction } from './collapsible-table-action';
import { CollapsibleTableTag } from './collapsible-table-tag';
import classes from './collapsible-table.module.css';

export type CollapsibleTableCoreProps = {
  data: FormattedData;
  scopedPath?: string;
};

export function CollapsibleTableCore({ data, scopedPath }: CollapsibleTableCoreProps) {
  return (
    <Accordion
      chevronPosition="left"
      className={classes.core}
      classNames={{
        item: classes['core-item'],
        itemTitle: classes['core-item-title'],
        label: classes['core-label'],
        chevron: classes['core-chevron'],
        control: classes['core-control'],
        content: classes['core-content'],
        panel: classes['core-panel'],
      }}
    >
      {data.tree.map((item, index) => {
        const name = item?.name ?? `${item}`;
        return (
          <Accordion.Item key={`${name}${index}`} value={`${name}${index}`}>
            {item?.value?.tree?.length ? (
              <>
                <Accordion.Control
                  classNames={{
                    chevron: classes['core-chevron-active'],
                    label: classes['core-label-active'],
                  }}
                >
                  <span className={classes['core-label-name']}>{item.name}</span>
                  <span className={classes['core-label-value']}>
                    {`[ ${data.count} item${data.count ? 's' : ''} ]`}
                  </span>
                </Accordion.Control>

                <Accordion.Panel>
                  <CollapsibleTableCore
                    scopedPath={`${scopedPath ?? ''}/${name}`}
                    data={item.value}
                  />
                </Accordion.Panel>
              </>
            ) : (
              <Accordion.Control classNames={{ chevron: classes.hide }}>
                <CollapsibleTableAction path={`${scopedPath ?? ''}/${name}`} />
                {typeof item !== 'object' ? (
                  <>
                    <CollapsibleTableTag color="#990055" slug="v" />
                    <span className={classes['core-label-name']}>{item}</span>
                  </>
                ) : (
                  <>
                    <CollapsibleTableTag />
                    <span className={classes['core-label-name']}>{item.name}</span>
                    <span className={classes['core-label-value']}>{`${item.value}`}</span>
                  </>
                )}
              </Accordion.Control>
            )}
          </Accordion.Item>
        );
      })}
    </Accordion>
  );
}
