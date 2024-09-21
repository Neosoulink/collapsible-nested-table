'use client';

import { createContext, PropsWithChildren, useState } from 'react';

export type JsonTextContextType = { value: string; setValue: (value: string) => void };

export const JsonTextContext = createContext<JsonTextContextType>({
  value: '{}',
  setValue: () => {},
});

export function JsonTextProvider({ children }: PropsWithChildren) {
  const [json, setValue] = useState(
    JSON.stringify({
      name: 'John Doe',
      age: 30,
      isActive: true,
      hobbies: ['reading', 'gaming', 'hiking'],
      address: {
        street: '123 Main St',
        city: 'Anytown',
        postalCode: '12345',
      },
      projects: [
        {
          title: 'Project A',
          status: 'completed',
        },
        {
          title: 'Project B',
          status: 'in progress',
        },
      ],
    })
  );

  return (
    <JsonTextContext.Provider
      value={{
        value: json,
        setValue,
      }}
    >
      {children}
    </JsonTextContext.Provider>
  );
}
