import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { useTranslations } from "@i18n/utils";
const t = useTranslations("en");


export async function GET(context) {
	const posts = await getCollection('articles');
	return rss({
		title: t("site.title"),
		description: t("site.description"),
		site: context.site,
		items: posts.map((post) => ({
			...post.data,
			link: `/articles/${post.slug}/`,
		})),
	});
}
