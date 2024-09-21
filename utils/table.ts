export type ExpectedData = Record<string, any> | Record<string, any>[];
export type FormattedData = {
  count: number;
  tree: { name: string; value: any }[];
};

export const formatDataToSafeTable = (data: ExpectedData): FormattedData | any => {
  const r: FormattedData = { tree: [], count: 0 };

  if (typeof data !== 'object') return data ?? 'unknown field';

  if (Array.isArray(data)) {
    data.forEach((item) => {
      let __ = { tree: [item], count: 1 };

      if (typeof item === 'object') __ = formatDataToSafeTable(item);

      r.tree = [...r.tree, ...__.tree];
      r.count += __.count;
    });
  }

  if (typeof data === 'object' && !Array.isArray(data)) {
    Object.keys(data).forEach((name) => {
      r.tree.push({
        name,
        value: formatDataToSafeTable(data[name]),
      });
      r.count += 1;
    });
  }

  return r;
};
