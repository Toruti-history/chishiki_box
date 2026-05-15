import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"
import Random01Page from "./quartz/components/Random01Page"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [],
  footer: Component.Footer({
    links: {
      GitHub: "https://github.com/jackyzha0/quartz",
      "Discord Community": "https://discord.gg/cRFFHYye7t",
    },
  }),
}

// components for pages that display a single page
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.ConditionalRender({
      component: Component.Breadcrumbs(),
      condition: (page) => page.fileData.slug !== "index",
    }),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
  ],

  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),

    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
        { Component: Component.ReaderMode() },
      ],
    }),

    Component.Explorer(),
  ],

  right: [
    Random01Page(),
    Component.Graph(),
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),
  ], 
}

// components for pages that display lists of pages
export const defaultListPageLayout: PageLayout = {
  beforeBody: [
  ],

  left: [],

  right: [],
}
