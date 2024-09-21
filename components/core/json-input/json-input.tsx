'use client';

import { MouseEvent, useContext, useState } from 'react';
import { Button, Flex, JsonInput as NativeJsonInput } from '@mantine/core';
import { JsonTextContext } from '@/components/providers';
import classes from './json-input.module.css';

export function JsonInput() {
  const { value: storedJsonText, setValue: setStoredJsonText } = useContext(JsonTextContext);
  const [jsonText, setJsonText] = useState(storedJsonText);
  const [error, setError] = useState<string | undefined>();

  const handleUpload = async (e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => {
    try {
      setError(undefined);
      e.preventDefault();

      JSON.parse(jsonText);

      setStoredJsonText(jsonText);
    } catch (_) {
      setError('Invalid JSON. Make sure to provide a valid data format and try again.');
    }
  };

  return (
    <Flex direction="column" gap="md" justify="center" mb="md" className={classes.base}>
      <NativeJsonInput
        defaultValue={storedJsonText}
        value={jsonText}
        label="JSON"
        description="Convert JSON to a collapsible table data"
        size="lg"
        error={error}
        placeholder="Input placeholder"
        formatOnBlur
        onChange={setJsonText}
        classNames={{ input: classes.input }}
      />

      <Button type="button" fullWidth onClick={handleUpload}>
        Upload
      </Button>
    </Flex>
  );
}
