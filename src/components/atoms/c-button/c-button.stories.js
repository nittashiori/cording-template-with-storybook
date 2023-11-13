/**
 * ボタンコンポーネントです。
 */
export default {
  title: 'Atoms/c-button',
  tags: ['autodocs'],
};

/**
 * デフォルトボタン
 */
export const Default = {
  render: () => {
    return `
      <button class="c-button">button</button>
    `;
  }
};

/**
 * リンクボタン
 */
export const Link = {
  render: () => {
    return `
      <a href="#" class="c-button">Link</a
    `
  }
}