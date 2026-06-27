import {
	Gift,
	BookOpen,
	Users,
	Hammer,
	HeartPulse,
	Map,
	Sprout,
	type LucideIcon,
} from 'lucide-react'

export interface NavigationItem {
	key: string // 用于翻译键，如 'codes' -> t('nav.codes')
	path: string // URL 路径，如 '/codes'
	icon: LucideIcon // Lucide 图标组件
	isContentType: boolean // 是否对应 content/ 目录
}

// 100 Days At Sea 内容导航分类（与 content/<locale>/ 目录一一对应）
// 顺序按 SEO 意图排列：兑换码 → 新手攻略 → 职业 → 建造 → 复活救援 → 地点探索 → 地图种子
export const NAVIGATION_CONFIG: NavigationItem[] = [
	{ key: 'codes', path: '/codes', icon: Gift, isContentType: true },
	{ key: 'guide', path: '/guide', icon: BookOpen, isContentType: true },
	{ key: 'classes', path: '/classes', icon: Users, isContentType: true },
	{ key: 'crafting', path: '/crafting', icon: Hammer, isContentType: true },
	{ key: 'revive', path: '/revive', icon: HeartPulse, isContentType: true },
	{ key: 'locations', path: '/locations', icon: Map, isContentType: true },
	{ key: 'seeds', path: '/seeds', icon: Sprout, isContentType: true },
]

// 从配置派生内容类型列表（用于路由和内容加载）
export const CONTENT_TYPES = NAVIGATION_CONFIG.filter((item) => item.isContentType).map(
	(item) => item.path.slice(1),
) // 移除开头的 '/'

export type ContentType = (typeof CONTENT_TYPES)[number]

// 辅助函数：验证内容类型
export function isValidContentType(type: string): type is ContentType {
	return CONTENT_TYPES.includes(type as ContentType)
}
