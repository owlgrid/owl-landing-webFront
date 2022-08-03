import type { GatsbyNode } from "gatsby"
import { resolve } from "path";

/**
 * 
 * This file generate pages of the website.
 * There are 2 types of pages:
 *  - Static pages -> ex: /about, /courses
 *  - Dynamic pages -> ex: /courses/:courseId
 * 
 */

// export const createPages: GatsbyNode["createPages"] = async ({ actions }) => {
//     const { createPage } = actions

//     ////// 1. Dynamic pages generation //////

//     // Load pages types
//     const pagesTypes = getPagesTypes();

//     // Initialize logs table
//     let logs = [];

//     // Generate page for each page type and content type
//     pagesTypes.forEach((contentType: string) => {

//         // Get content associated to the page type in the repository
//         const content = getContent(contentType);

//         // Generate a page for each content item
//         content.forEach((content: any) => {
//             // Initialize values
//             const pageLocale = getLocaleCode(content.languageId);
//             const pageTypeLocale = pageTypeLocalized(pageLocale, contentType);
//             const slug = `/${pageLocale}/${pageTypeLocale}/${content.slug}`;

//             // Create the page
//             createPage({
//                 path: slug,
//                 component: resolve(`./src/templates/${contentType}/dynamic/index.tsx`),
//                 context: {
//                     slug,
//                     language: pageLocale,
//                     data: content
//                 }
//             });

//             // Add a log to the logs table
//             logs.push({ slug, template: contentType, type: 'dynamic' });
//         });
//     });

//     // Display the logs table
//     console.table(logs);

//     ////// 2. Static pages generation //////

//     // Initialize logs table
//     logs = [];

//     // List languages
//     getLocalesList().forEach((language: string) => {

//         // Get all pages that exists for the current language (all pages that have a translation)
//         const pages = getPages(language);

//         // For each page, create it
//         getPagesList(language).forEach(pageType => {
//             const page = pages[pageType];
//             const slug = `/${language}/${page.meta.slug}`;

//             // If the page contains dynamic content (e.g. courses list), fetch it from the repository
//             let data = {};
//             switch (pageType) {
//                 case 'courses':
//                     data = getCoursesLocalized(language);
//                     break;
//                 case 'articles':
//                     data = getArticlesLocalized(language);
//                     break;
//                 default:
//                     break;
//             }

//             // Create page
//             createPage({
//                 path: slug,
//                 component: resolve(`./src/templates/${pageType}/index.tsx`),
//                 context: {
//                     slug: slug,
//                     language: language,
//                     meta: page.meta,
//                     text: page.text,
//                     components: page.components,
//                     data
//                 },
//             });

//             // Add a log to the logs table
//             logs.push({ slug, template: pageType, type: 'static' });
//         });
//     });

//     // Display the logs table
//     console.table(logs);
// }