export const measureLines = (elem: HTMLElement, val: string) => {
  if (!elem || !val) return 0
  const canvas = document.createElement('canvas') as HTMLCanvasElement
  const canvasContext = canvas.getContext('2d') as CanvasRenderingContext2D;
  const style = window.getComputedStyle(elem)
  canvasContext.font = `${style.getPropertyValue('font-size')} ${style.getPropertyValue('font-family')}`
  const measuredLines = val.split('\n').reduce((r, c) => {
    // 1줄로 쭉 나열했을 때의 길이(px) 측정
    return r + Math.max(Math.ceil(canvasContext.measureText(c).width / elem!.offsetWidth), 1)
  }, 0)
  return measuredLines
}


export const randomize = ({
  min = 0,
  max = 0,
  step = 1
}: { min: number; max: number; step: number; }) => {
  if (max < min || max - min < step) throw Error('wrong arguments')
  const num = Math.random() * (max - min) + min
  return Math.floor(num / step) * step;
}

export const pickRandom = <T>({
  data = [],
  length = 1
}: { data: T[]; length: number }) => {
  const shuffled = [...data].sort(() => Math.random() - 0.5 >= 0 ? 1 : -1)
  return shuffled.slice(0, length)
}

export const waitFor = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))
