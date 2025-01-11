import Accordions from './components/01_accordion'
import TabMenus from './components/02_tabMenu'
import Tooltips from './components/03_tooltip'
import TextBoxes from './components/04_textBox'
import LineClamps from './components/05_lineClamp'
import LazyLoad1 from './components/06_lazyLoading/1_r'
import LazyLoad2V from './components/06_lazyLoading/2_v'
import LazyLoad3 from './components/06_lazyLoading/3_r'
import InfiniteScrollR from './components/07_infiniteScroll/react'
import InfiniteScrollV from './components/07_infiniteScroll/vanilla'

export const routePaths = [
  '/',
  '/accordion',
  '/tabMenu',
  '/tooltip',
  '/textBox',
  '/lineClamp',
  '/lazyLoading',
  '/lazyLoading/1_r',
  '/lazyLoading/2_v',
  '/lazyLoading/3_r',
  '/infiniteScroll',
  '/infiniteScroll/react',
  '/infiniteScroll/vanilla',
] as const
export type ROUTE_PATH = (typeof routePaths)[number]

type BaseRoute = {
  key: ROUTE_PATH
  link: ROUTE_PATH
  name: string
}
export type ParentRoute = BaseRoute & {
  children: ROUTE_PATH[]
}
export type ChildRoute = BaseRoute & {
  children: ((props: unknown) => JSX.Element) | null
}
export type ROUTE = ParentRoute | ChildRoute

export const routes: Record<ROUTE_PATH, ROUTE> = {
  '/': {
    key: '/',
    link: '/',
    name: 'root',
    children: [
      '/accordion',
      '/tabMenu',
      '/tooltip',
      '/textBox',
      '/lineClamp',
      '/lazyLoading',
      '/infiniteScroll',
    ],
  },
  '/accordion': {
    key: '/accordion',
    link: '/accordion',
    name: '01. 아코디언',
    children: Accordions,
  },
  '/tabMenu': {
    key: '/tabMenu',
    link: '/tabMenu',
    name: '02. 탭메뉴',
    children: TabMenus,
  },
  '/tooltip': {
    key: '/tooltip',
    link: '/tooltip',
    name: '03. 툴팁',
    children: Tooltips,
  },
  '/textBox': {
    key: '/textBox',
    link: '/textBox',
    name: '04. 반응형 텍스트박스',
    children: TextBoxes,
  },
  '/lineClamp': {
    key: '/lineClamp',
    link: '/lineClamp',
    name: '05. 여러줄 말줄임',
    children: LineClamps,
  },
  '/lazyLoading': {
    key: '/lazyLoading',
    link: '/lazyLoading/1_r',
    name: '06. 지연 로딩',
    children: ['/lazyLoading/1_r', '/lazyLoading/2_v', '/lazyLoading/3_r'],
  },
  '/lazyLoading/1_r': {
    key: '/lazyLoading/1_r',
    link: '/lazyLoading/1_r',
    name: 'React1',
    children: LazyLoad1,
  },
  '/lazyLoading/2_v': {
    key: '/lazyLoading/2_v',
    link: '/lazyLoading/2_v',
    name: 'Vanilla',
    children: LazyLoad2V,
  },
  '/lazyLoading/3_r': {
    key: '/lazyLoading/3_r',
    link: '/lazyLoading/3_r',
    name: 'React3',
    children: LazyLoad3,
  },
  '/infiniteScroll': {
    key: '/infiniteScroll',
    link: '/infiniteScroll/react',
    name: '07. 무한 스크롤',
    children: ['/infiniteScroll/react', '/infiniteScroll/vanilla'],
  },
  '/infiniteScroll/react': {
    key: '/infiniteScroll/react',
    link: '/infiniteScroll/react',
    name: 'React#1 - IO',
    children: InfiniteScrollR,
  },
  '/infiniteScroll/vanilla': {
    key: '/infiniteScroll/vanilla',
    link: '/infiniteScroll/vanilla',
    name: 'Vanilla',
    children: InfiniteScrollV,
  },
}

export const isParentRoute = (route: ROUTE): route is ParentRoute => Array.isArray(route.children)

export const gnbRootList = (routes['/'] as ParentRoute).children.map(r => routes[r])
