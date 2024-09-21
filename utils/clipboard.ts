export const copyToClipboard = (text: string) => {
  navigator.clipboard?.writeText?.(text);

  alert(`Copied the text: ${text}`);
};
