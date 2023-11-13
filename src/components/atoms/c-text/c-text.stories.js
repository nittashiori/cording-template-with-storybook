/**
 * テキストのコンポーネントです。
 */
export default {
  title: 'Atoms/c-text',
  tags: ['autodocs'],
};

/**
 * デフォルト
 */
export const Default = {
  render: () => {
    return `
		<p class="c-text">あのイーハトーヴォのすきとおった風、夏でも底に冷たさをもつ青いそら、うつくしい森で飾られたモリーオ市、郊外のぎらぎらひかる草の波。</p>
    `;
  }
};

/**
 * 中央揃え。`c-text--align-center`を付与してください。
 */
export const AlignCenter = {
  render: () => {
    return `
		<p class="c-text c-text--align-center">あのイーハトーヴォのすきとおった風、夏でも底に冷たさをもつ青いそら、うつくしい森で飾られたモリーオ市、郊外のぎらぎらひかる草の波。</p>
    `;
  }
};

/**
 * 右揃え。`c-text--align-right`を付与してください。
 */
export const AlignRight = {
  render: () => {
    return `
		<p class="c-text c-text--align-right">あのイーハトーヴォのすきとおった風、夏でも底に冷たさをもつ青いそら、うつくしい森で飾られたモリーオ市、郊外のぎらぎらひかる草の波。</p>
    `;
  }
};
