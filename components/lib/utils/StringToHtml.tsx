import { useEffect, useState } from 'react';
import parse from 'html-react-parser';

export const StringToHtml = (html: string) => {
  const [content, setContent] = useState<string>('');

  useEffect(() => {
    setContent(html);
  }, [html]);

  return <>{parse(content)}</>;
};