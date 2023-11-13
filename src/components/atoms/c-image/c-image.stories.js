/**
 * イメージコンポーネントです。
 * `picture`タグを使い、Retina（@2x）とWebPの切り替えを行います。
 */
export default {
  title: 'Atoms/c-image',
  tags: ['autodocs'],
};

/**
 * デフォルト。サイズはimgタグの`width`と`height`に応じて表示します。
 */
export const Default = {
  render: () => {
    return `
      <picture>
        <source srcset="../assets/images/sample/600x400.webp 2x, ../assets/images/sample/300x200.webp" type="image/webp">
        <img class="c-image" src="../assets/images/sample/300x200.jpg" srcset="../assets/images/sample/600x400.jpg 2x" alt="" width="300" height="200" loading="lazy">
      </picture>
    `;
  }
};

/**
 * フルサイズ。`c-image--fill`クラスを付与します。
 */
export const Fill = {
  render: () => {
    return `
      <picture>
      <source srcset="../assets/images/sample/600x400.webp 2x, ../assets/images/sample/300x200.webp" type="image/webp">
        <img class="c-image c-image--fill" src="../assets/images/sample/300x200.jpg" srcset="../assets/images/sample/600x400.jpg 2x" alt="" width="300" height="200" loading="lazy">
      </picture>
    `;
  }
};