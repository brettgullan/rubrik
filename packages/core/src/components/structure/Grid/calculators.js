export const calculatePercentage = (span, cols) => `${(span / cols) * 100}%`

export const calculategutters = (cols, gutters) =>
  cols === 1 ? `0px` : `(${cols - 1} * ${gutters} / ${cols})`

export const calculateMargin = (gutters) => {
  const matches = gutters.match(/(\-*)(\d*)(.*)/)
  return matches ? `${matches[1]}${matches[2] / 2}${matches[3]}` : gutters
}

export const calculateItemgutters = (span, cols, gutters) =>
  span === 1 ? `0px` : `(${span - 1} * ${gutters} / ${cols})`

export const calculateItemWidth = (span, columns, gutters) =>
  `calc(${calculatePercentage(span, columns)} - ${calculategutters(
    columns,
    gutters
  )} + ${calculateItemgutters(span, columns, gutters)})`

export const calculateRemainderMargin = (columns, gutters, span) =>
  `calc(${calculatePercentage(span, columns)} - ${calculategutters(
    columns,
    gutters
  )} + (${span} * ${gutters}))`
