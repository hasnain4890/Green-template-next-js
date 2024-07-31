export const handleLinkClick = (link: string) => {
  const isExternalLink = /^(https?:\/\/)|(\.com$)/.test(link);
  if (link) {
    window.open(link, isExternalLink ? '_blank' : '_self');
  }
};
export const handleKeyPress = (event: React.KeyboardEvent<HTMLDivElement>, link: string) => {
  if (event.key === 'Enter') {
    handleLinkClick(link);
  }
};
