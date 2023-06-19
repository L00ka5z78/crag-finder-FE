export const dataTestId = (testId: string) => `[data-testid="${testId}"]`;
export const getSelector = (type: string, value: string) =>
  `[${type}="${value}"]`;
