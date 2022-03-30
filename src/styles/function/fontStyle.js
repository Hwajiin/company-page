const fontStyle = (fontSize = 16, font = "Noto Sans KR") => {
  switch (fontSize) {
    case 12:
      return `
        font-family: ${font};
        font-size: 12px;
        line-height: 16px;
        letter-spacing: -0.05px;
      `;
    case 13:
      return `
        font-family: ${font};
        font-size: 13px;
        line-height: 20px;
        letter-spacing: -0.01px;
      `;
    case 14:
      return `
        font-family: ${font};
        font-size: 14px;
        line-height: 24px;
        letter-spacing: -0.01px;
      `;
    case 16:
      return `
        font-family: ${font};
        font-size: 16px;
        line-height: 20px;
        letter-spacing: -0.01px;
      `;
    case 18:
      return `
        font-family: ${font};
        font-size: 18px;
        line-height: 28px;
        letter-spacing: -0.01px;
      `;
    case 24:
      return `
        font-family: ${font};
        font-size: 24px;
        line-height: 34px;
        letter-spacing: -0.01px;
      `;
    case 36:
      return `
        font-family: ${font};
        font-size: 36px;
        line-height: 40px;
        letter-spacing: -0.01px;
      `;
    case 44:
      return `
        font-family: ${font};
        font-size: 44px;
        line-height: 46px;
        letter-spacing: -0.01px;
      `;
    default:
      throw new Error("폰트 크기 및 폰트 스타일을 다시 확인해주세요");
  }
};

export default fontStyle;
