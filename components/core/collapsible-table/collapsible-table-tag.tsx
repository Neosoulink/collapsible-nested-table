'use client';

import Style from './collapsible-table.module.css';

export type CollapsibleTableTagProps = { slug?: string; color?: string };

export function CollapsibleTableTag({ slug, color }: CollapsibleTableTagProps) {
  return (
    <span
      className={Style['t-tag']}
      style={color ? { color, backgroundColor: `${color}22`, borderColor: color } : {}}
    >
      {slug ?? 'T'}
    </span>
  );
}
