/**
 * アイコンコンポーネントです。
 */
export default {
  title: 'Atoms/c-icon',
  tags: ['autodocs'],
};


export const ArrowRight = {
  render: () => {
    return `
    <svg class="c-icon" xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8">
      <path id="多角形_14" data-name="多角形 14" d="M4,0,8,8H0Z" transform="translate(8) rotate(90)"/>
    </svg>
    `;
  }
};

export const ArrowDown = {
  render: () => {
    return `
    <svg class="c-icon" xmlns="http://www.w3.org/2000/svg" width="8" height="7" viewBox="0 0 8 7">
      <path id="多角形_19" data-name="多角形 19" d="M4,0,8,7H0Z" transform="translate(8 7) rotate(180)" />
    </svg>
    `
  }
}

export const ArrowPrev = {
  render: () => {
    return `
      <svg class="c-icon" width="8" height="12" viewBox="0 0 8 12" xmlns="http://www.w3.org/2000/svg">
        <path d="M5.65685 0L0 5.65685L5.65685 11.3137L7.07107 9.8995L2.82843 5.65685L7.07107 1.41421L5.65685 0Z"/>
      </svg>
    `
  }
}

export const ArrowNext = {
  render: () => {
    return `
      <svg class="c-icon" width="8" height="12" viewBox="0 0 8 12" xmlns="http://www.w3.org/2000/svg">
        <path d="M1.41421 11.3137L7.07107 5.65685L1.41421 0L7.41806e-07 1.41421L4.24264 5.65685L0 9.89949L1.41421 11.3137Z"/>
      </svg>
    `
  }
}