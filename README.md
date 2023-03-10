<p align="center">
  <img alt="Astro Theme Cactus logo" src="./public/images/icon.png" width="70" />
</p>
<h1 align="center">
  hewliyang.tech
</h1>

> My blog built with Astro & Astro Theme Cactus

### 💻 [Live Site](https://hewliyang.tech) hosted on Vercel

## Features

Made with Astro, Typescript, and TailwindCSS

- Astro Fast 🚀
- Accessible, semantic HTML markup
- Responsive & SEO-friendly
- [Astro Image Integration](https://docs.astro.build/en/guides/integrations-guide/image/) for optimised images
- [MDX posts](https://docs.astro.build/en/guides/markdown-content/#mdx-only-features)
- Pagination
- Theming colour modes with Tailwind and CSS variables
- Shiki code syntax styling
- Auto-generated sitemap

## Quick start

[Create a new repo](https://github.com/chrismwilliams/astro-theme-cactus/generate) from this template.

[![Deploy with Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/hewliyang/hewliyang.tech) [![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%hewliyang%2Fhewliyang.tech&project-name=hewliyang.tech)

## Commands

| Command        | Action                                       |
| :------------- | :------------------------------------------- |
| `npm install` | Installs dependencies                        |
| `npm dev`     | Starts local dev server at `localhost:3000`  |
| `npm build`   | Build your production site to `./dist/`      |
| `npm preview` | Preview your build locally, before deploying |

## Configure

- Edit the config file `src/site.config.ts` for basic site meta data
- Update file `astro.config.ts` site property with your own domain
- Replace & update files within the `/public` folder:
  - favicon.ico
  - `/images` folder - add your own icon
  - robots.txt - update the Sitemap url to your own domain
  - manifest.webmanifest
- Modify file `src/styles/global.css` with your own light and dark styles
- Create / edit posts for your blog within `src/pages/posts/` with .mdx file(s)

## Adding posts

Adding a post is a simple as adding your .mdx file(s) to the `src/pages/posts/` folder, the name of which will be used as the slug/url. The two posts included with this template are there as an example of how to structure your posts. [Astro docs](https://docs.astro.build/en/guides/markdown-content/) also has a detailed section on markdown pages.

### Frontmatter

| Property (\* required) | Description                                                                                                                                                                                                                                              |
| :--------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| layout                 | This is used to import [Markdown Layouts](https://docs.astro.build/en/core-concepts/layouts/#markdown-layouts), this theme uses `src/layouts/BlogPost.astro` as a wrapper for all blog posts. This isn't required but files without it will be unstyled. |
| title \*               | Self explanatory. Used as the text link to the post, the h1 on the posts' page, and the pages' title property                                                                                                                                            |
| description \*         | Similar to above, used as the seo description property                                                                                                                                                                                                   |
| publishDate \*         | Again pretty simple. To change the date format/locale, currently **en-GB**, update/pass the **locale** arg to function **getFormattedDate**, found in `src/utils/date.ts`.                                                                               |
| tags                   | Tags are optional. Any new tag(s) will be shown in `yourdomain.com/posts` + `yourdomain.com/tags`, and generate the page(s) `yourdomain.com/tags/[yourTag]`                                                                                              |

## Acknowledgment

This site was made with [Astro Theme Cactus](https://github.com/chrismwilliams/astro-theme-cactus)

## License

Licensed under the MIT License, Copyright © 2022
