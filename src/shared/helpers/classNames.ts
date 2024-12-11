type Mode = Record<string, string | boolean>;

export const classNames = (
  cls: string = '',
  clsArr: string[] = [],
  mode: Mode = {},
) => {
  return `${cls} ${clsArr.join(' ')} ${Object.entries(mode)
    .filter(item => item[1] === true)
    .map(item => item[0])
    .join(' ')}`;
};
