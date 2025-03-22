export const formatAddress = (addr: string): string => {
  if (!addr) return "";
  return `${addr.slice(0, 5)}...${addr.slice(-5)}`;
};
