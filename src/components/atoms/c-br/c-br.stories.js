/**
 * デバイスによって改行位置を変更するコンポーネントです。
 */
export default {
  title: 'Atoms/c-br',
  tags: ['autodocs'],
};

/**
 * PCサイズのときのみ改行する場合。改行するテキストをspanタグで囲い`c-br--pc`クラスを付与してください。
 */
export const OnlyPC = {
  render: () => {
    return `
    <p>
      <span class="c-br--pc">PCサイズのときだけ改行します</span>
      <span class="c-br--pc">PCサイズのときだけ改行します</span>
    </p>
    `;
  }
};

/**
 * スマホサイズのときのみ改行する場合。改行するテキストをspanタグで囲い`c-br--sp`クラスを付与してください。
 */
export const OnlySP = {
  render: () => {
    return `
    <p>
      <span class="c-br--sp">SPサイズのときだけ改行します</span>
      <span class="c-br--sp">SPサイズのときだけ改行します</span>
    </p>
    `;
  }
};