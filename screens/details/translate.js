import Generate from './toGeneration/Generate';
import React from 'react';

export const useTranslate = text => {
  const array = text.split('\n');
  return array.map(row => {
    const isH3 = /(### )/y;
    const isH2 = /(## )/y;
    const isH1 = /(# )/y;
    const isText = /[^<>]/gy;
    const isLink = /\[(.*?)\]\(.*?\)/;
    const isImg = /\{(.*?)\}\(.*?\)/;
    const imgSizeReGexp = /((?<=\)\()\d*?(?=\)))/g;
    const imgNameReGexp = /(?<=\{).*?(?=\})/;
    const linkReGexp = /(?<=\[).*?(?=\])/;
    const urlReGexp = /(?<=\().*?(?=\))/;
    if (isImg.test(row)) {
      const imgName = row.match(imgNameReGexp);
      const url = row.match(urlReGexp);
      const imgSize = row.match(imgSizeReGexp) ?? 0;
      const imgWidth = imgSize ? imgSize[0] : 150;
      const imgHeight = imgSize ? imgSize[1] : 150;
      return <Generate.Img url={url} widht={imgWidth} height={imgHeight} alt={imgName} />;
    }
    if (isLink.test(row)) {
      const link = row.match(linkReGexp);
      const url = row.match(urlReGexp);
      return <Generate.Anchor url={url}>{link}</Generate.Anchor>;
    }
    if (isH3.test(row)) {
      row = row.replace('### ', ``);
      return <Generate.Head3>{row}</Generate.Head3>;
    }
    if (isH2.test(row)) {
      row = row.replace('## ', ``);
      return <Generate.Head2>{row}</Generate.Head2>;
    }
    if (isH1.test(row)) {
      row = row.replace('# ', ``);
      return <Generate.Head1>{row}</Generate.Head1>;
    }
    if (row === '') {
      return <Generate.Br />;
    }
    if (isText.test(row)) {
      return <Generate.Paragraph>{row}</Generate.Paragraph>;
    }
    return row;
  });
};
