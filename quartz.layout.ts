import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"
import Random01Page from "./quartz/components/Random01Page"


// components shared across all pages
export const sharedPageComponents = {
  head: Component.Head(),
  header: [],
  afterBody: [
    `
    <div style="display:flex; gap:10px; align-items:center;">

      <button onclick="window.open('https://twitter.com/intent/tweet?url=' + encodeURIComponent(window.location.href))">
        𝕏
      </button>

      <button onclick="window.location.href='https://line.me/R/msg/text/?' + encodeURIComponent(window.location.href)">
        LINE
      </button>

      <button onclick="navigator.clipboard.writeText(window.location.href); alert('URLをコピーしました');">
        🔗
      </button>

    </div>
    `
  ]
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
    Component.Graph({
      localGraph: {
        depth: 2
      }
    }),
    Component.Backlinks(),
    Component.DesktopOnly(Component.TableOfContents()),
  ], 
}

// components for pages that display lists of pages
export const defaultListPageLayout: PageLayout = {
  beforeBody: [
  ],

  left: [],

  right: [],
}
