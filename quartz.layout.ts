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

    Component.Explorer({
      sortFn: (a, b) => {
        if ((!a.isFolder && !b.isFolder) || (a.isFolder && b.isFolder)) {
          const filePathA = a.data?.filePath ?? ""
          const filePathB = b.data?.filePath ?? ""

          const fileNameA = filePathA.split("/").pop() ?? ""
          const fileNameB = filePathB.split("/").pop() ?? ""

          const matchA = fileNameA.match(/^(\d+)/)
          const matchB = fileNameB.match(/^(\d+)/)

          const keyA = matchA ? matchA[1] : (a.data?.sort ?? a.displayName)
          const keyB = matchB ? matchB[1] : (b.data?.sort ?? b.displayName)

          return keyA.localeCompare(keyB, "ja", {
            numeric: true,
           sensitivity: "base",
          })
       }

        return a.isFolder ? -1 : 1
     },
    }),
  ],

  right: [
    Random01Page(),
    Component.Graph({
      localGraph: {
        depth: 2,
      },
    }),
    Component.Backlinks(),
    Component.DesktopOnly(Component.TableOfContents()),
  ],
}

// components for pages that display lists of pages
export const defaultListPageLayout: PageLayout = {
  beforeBody: [],

  left: [],

  right: [],
}