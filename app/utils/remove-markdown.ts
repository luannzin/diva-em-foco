const removeMarkdown = (text: string): string => {
  text = text.replace(/\[.*?\]\(.*?\)/g, "");
  text = text.replace(/#+\s/g, "");
  text = text.replace(/[*_~`]/g, "");
  text = text.replace(/```.*?```/gs, "");
  return text;
};

export default removeMarkdown;
