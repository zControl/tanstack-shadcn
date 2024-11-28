/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as IndexImport } from './routes/index'
import { Route as testTestImport } from './routes/(test)/test_'
import { Route as authLoginImport } from './routes/(auth)/login'
import { Route as authAuthImport } from './routes/(auth)/_auth'
import { Route as appExamplesImport } from './routes/(app)/_examples'
import { Route as testTestAImport } from './routes/(test)/test.a_'
import { Route as authAuthDashboardImport } from './routes/(auth)/_auth.dashboard'
import { Route as testTestASomethingImport } from './routes/(test)/test.a.something'
import { Route as testTestABImport } from './routes/(test)/test.a.b_'
import { Route as testTestABCImport } from './routes/(test)/test.a.b.c'

// Create Virtual Routes

const authImport = createFileRoute('/(auth)')()
const appImport = createFileRoute('/(app)')()
const appTermsLazyImport = createFileRoute('/(app)/terms')()
const appStatusLazyImport = createFileRoute('/(app)/status')()
const appPrivacyLazyImport = createFileRoute('/(app)/privacy')()
const appExamplesQueryLazyImport = createFileRoute('/(app)/_examples/query')()
const appExamplesFormLazyImport = createFileRoute('/(app)/_examples/form')()
const appExamplesDemoLazyImport = createFileRoute('/(app)/_examples/demo_')()
const appExamplesDemoColorsLazyImport = createFileRoute(
  '/(app)/_examples/demo/colors',
)()
const appExamplesDemoBasicLazyImport = createFileRoute(
  '/(app)/_examples/demo/basic',
)()

// Create/Update Routes

const authRoute = authImport.update({
  id: '/(auth)',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const appRoute = appImport.update({
  id: '/(app)',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const appTermsLazyRoute = appTermsLazyImport
  .update({
    id: '/terms',
    path: '/terms',
    getParentRoute: () => appRoute,
  } as any)
  .lazy(() => import('./routes/(app)/terms.lazy').then((d) => d.Route))

const appStatusLazyRoute = appStatusLazyImport
  .update({
    id: '/status',
    path: '/status',
    getParentRoute: () => appRoute,
  } as any)
  .lazy(() => import('./routes/(app)/status.lazy').then((d) => d.Route))

const appPrivacyLazyRoute = appPrivacyLazyImport
  .update({
    id: '/privacy',
    path: '/privacy',
    getParentRoute: () => appRoute,
  } as any)
  .lazy(() => import('./routes/(app)/privacy.lazy').then((d) => d.Route))

const testTestRoute = testTestImport.update({
  id: '/(test)/test_',
  path: '/test',
  getParentRoute: () => rootRoute,
} as any)

const authLoginRoute = authLoginImport.update({
  id: '/login',
  path: '/login',
  getParentRoute: () => authRoute,
} as any)

const authAuthRoute = authAuthImport.update({
  id: '/_auth',
  getParentRoute: () => authRoute,
} as any)

const appExamplesRoute = appExamplesImport.update({
  id: '/_examples',
  getParentRoute: () => appRoute,
} as any)

const appExamplesQueryLazyRoute = appExamplesQueryLazyImport
  .update({
    id: '/query',
    path: '/query',
    getParentRoute: () => appExamplesRoute,
  } as any)
  .lazy(() =>
    import('./routes/(app)/_examples/query.lazy').then((d) => d.Route),
  )

const appExamplesFormLazyRoute = appExamplesFormLazyImport
  .update({
    id: '/form',
    path: '/form',
    getParentRoute: () => appExamplesRoute,
  } as any)
  .lazy(() => import('./routes/(app)/_examples/form.lazy').then((d) => d.Route))

const appExamplesDemoLazyRoute = appExamplesDemoLazyImport
  .update({
    id: '/demo_',
    path: '/demo',
    getParentRoute: () => appExamplesRoute,
  } as any)
  .lazy(() =>
    import('./routes/(app)/_examples/demo_.lazy').then((d) => d.Route),
  )

const testTestARoute = testTestAImport.update({
  id: '/(test)/test/a_',
  path: '/test/a',
  getParentRoute: () => rootRoute,
} as any)

const authAuthDashboardRoute = authAuthDashboardImport.update({
  id: '/dashboard',
  path: '/dashboard',
  getParentRoute: () => authAuthRoute,
} as any)

const appExamplesDemoColorsLazyRoute = appExamplesDemoColorsLazyImport
  .update({
    id: '/demo/colors',
    path: '/demo/colors',
    getParentRoute: () => appExamplesRoute,
  } as any)
  .lazy(() =>
    import('./routes/(app)/_examples/demo.colors.lazy').then((d) => d.Route),
  )

const appExamplesDemoBasicLazyRoute = appExamplesDemoBasicLazyImport
  .update({
    id: '/demo/basic',
    path: '/demo/basic',
    getParentRoute: () => appExamplesRoute,
  } as any)
  .lazy(() =>
    import('./routes/(app)/_examples/demo.basic.lazy').then((d) => d.Route),
  )

const testTestASomethingRoute = testTestASomethingImport.update({
  id: '/(test)/test/a/something',
  path: '/test/a/something',
  getParentRoute: () => rootRoute,
} as any)

const testTestABRoute = testTestABImport.update({
  id: '/(test)/test/a/b_',
  path: '/test/a/b',
  getParentRoute: () => rootRoute,
} as any)

const testTestABCRoute = testTestABCImport.update({
  id: '/(test)/test/a/b/c',
  path: '/test/a/b/c',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/(app)': {
      id: '/(app)'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof appImport
      parentRoute: typeof rootRoute
    }
    '/(app)/_examples': {
      id: '/(app)/_examples'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof appExamplesImport
      parentRoute: typeof appRoute
    }
    '/(auth)': {
      id: '/(auth)'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof authImport
      parentRoute: typeof rootRoute
    }
    '/(auth)/_auth': {
      id: '/(auth)/_auth'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof authAuthImport
      parentRoute: typeof authRoute
    }
    '/(auth)/login': {
      id: '/(auth)/login'
      path: '/login'
      fullPath: '/login'
      preLoaderRoute: typeof authLoginImport
      parentRoute: typeof authImport
    }
    '/(test)/test_': {
      id: '/(test)/test_'
      path: '/test'
      fullPath: '/test'
      preLoaderRoute: typeof testTestImport
      parentRoute: typeof rootRoute
    }
    '/(app)/privacy': {
      id: '/(app)/privacy'
      path: '/privacy'
      fullPath: '/privacy'
      preLoaderRoute: typeof appPrivacyLazyImport
      parentRoute: typeof appImport
    }
    '/(app)/status': {
      id: '/(app)/status'
      path: '/status'
      fullPath: '/status'
      preLoaderRoute: typeof appStatusLazyImport
      parentRoute: typeof appImport
    }
    '/(app)/terms': {
      id: '/(app)/terms'
      path: '/terms'
      fullPath: '/terms'
      preLoaderRoute: typeof appTermsLazyImport
      parentRoute: typeof appImport
    }
    '/(auth)/_auth/dashboard': {
      id: '/(auth)/_auth/dashboard'
      path: '/dashboard'
      fullPath: '/dashboard'
      preLoaderRoute: typeof authAuthDashboardImport
      parentRoute: typeof authAuthImport
    }
    '/(test)/test/a_': {
      id: '/(test)/test/a_'
      path: '/test/a'
      fullPath: '/test/a'
      preLoaderRoute: typeof testTestAImport
      parentRoute: typeof rootRoute
    }
    '/(app)/_examples/demo_': {
      id: '/(app)/_examples/demo_'
      path: '/demo'
      fullPath: '/demo'
      preLoaderRoute: typeof appExamplesDemoLazyImport
      parentRoute: typeof appExamplesImport
    }
    '/(app)/_examples/form': {
      id: '/(app)/_examples/form'
      path: '/form'
      fullPath: '/form'
      preLoaderRoute: typeof appExamplesFormLazyImport
      parentRoute: typeof appExamplesImport
    }
    '/(app)/_examples/query': {
      id: '/(app)/_examples/query'
      path: '/query'
      fullPath: '/query'
      preLoaderRoute: typeof appExamplesQueryLazyImport
      parentRoute: typeof appExamplesImport
    }
    '/(test)/test/a/b_': {
      id: '/(test)/test/a/b_'
      path: '/test/a/b'
      fullPath: '/test/a/b'
      preLoaderRoute: typeof testTestABImport
      parentRoute: typeof rootRoute
    }
    '/(test)/test/a/something': {
      id: '/(test)/test/a/something'
      path: '/test/a/something'
      fullPath: '/test/a/something'
      preLoaderRoute: typeof testTestASomethingImport
      parentRoute: typeof rootRoute
    }
    '/(app)/_examples/demo/basic': {
      id: '/(app)/_examples/demo/basic'
      path: '/demo/basic'
      fullPath: '/demo/basic'
      preLoaderRoute: typeof appExamplesDemoBasicLazyImport
      parentRoute: typeof appExamplesImport
    }
    '/(app)/_examples/demo/colors': {
      id: '/(app)/_examples/demo/colors'
      path: '/demo/colors'
      fullPath: '/demo/colors'
      preLoaderRoute: typeof appExamplesDemoColorsLazyImport
      parentRoute: typeof appExamplesImport
    }
    '/(test)/test/a/b/c': {
      id: '/(test)/test/a/b/c'
      path: '/test/a/b/c'
      fullPath: '/test/a/b/c'
      preLoaderRoute: typeof testTestABCImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

interface appExamplesRouteChildren {
  appExamplesDemoLazyRoute: typeof appExamplesDemoLazyRoute
  appExamplesFormLazyRoute: typeof appExamplesFormLazyRoute
  appExamplesQueryLazyRoute: typeof appExamplesQueryLazyRoute
  appExamplesDemoBasicLazyRoute: typeof appExamplesDemoBasicLazyRoute
  appExamplesDemoColorsLazyRoute: typeof appExamplesDemoColorsLazyRoute
}

const appExamplesRouteChildren: appExamplesRouteChildren = {
  appExamplesDemoLazyRoute: appExamplesDemoLazyRoute,
  appExamplesFormLazyRoute: appExamplesFormLazyRoute,
  appExamplesQueryLazyRoute: appExamplesQueryLazyRoute,
  appExamplesDemoBasicLazyRoute: appExamplesDemoBasicLazyRoute,
  appExamplesDemoColorsLazyRoute: appExamplesDemoColorsLazyRoute,
}

const appExamplesRouteWithChildren = appExamplesRoute._addFileChildren(
  appExamplesRouteChildren,
)

interface appRouteChildren {
  appExamplesRoute: typeof appExamplesRouteWithChildren
  appPrivacyLazyRoute: typeof appPrivacyLazyRoute
  appStatusLazyRoute: typeof appStatusLazyRoute
  appTermsLazyRoute: typeof appTermsLazyRoute
}

const appRouteChildren: appRouteChildren = {
  appExamplesRoute: appExamplesRouteWithChildren,
  appPrivacyLazyRoute: appPrivacyLazyRoute,
  appStatusLazyRoute: appStatusLazyRoute,
  appTermsLazyRoute: appTermsLazyRoute,
}

const appRouteWithChildren = appRoute._addFileChildren(appRouteChildren)

interface authAuthRouteChildren {
  authAuthDashboardRoute: typeof authAuthDashboardRoute
}

const authAuthRouteChildren: authAuthRouteChildren = {
  authAuthDashboardRoute: authAuthDashboardRoute,
}

const authAuthRouteWithChildren = authAuthRoute._addFileChildren(
  authAuthRouteChildren,
)

interface authRouteChildren {
  authAuthRoute: typeof authAuthRouteWithChildren
  authLoginRoute: typeof authLoginRoute
}

const authRouteChildren: authRouteChildren = {
  authAuthRoute: authAuthRouteWithChildren,
  authLoginRoute: authLoginRoute,
}

const authRouteWithChildren = authRoute._addFileChildren(authRouteChildren)

export interface FileRoutesByFullPath {
  '/': typeof authAuthRouteWithChildren
  '/login': typeof authLoginRoute
  '/test': typeof testTestRoute
  '/privacy': typeof appPrivacyLazyRoute
  '/status': typeof appStatusLazyRoute
  '/terms': typeof appTermsLazyRoute
  '/dashboard': typeof authAuthDashboardRoute
  '/test/a': typeof testTestARoute
  '/demo': typeof appExamplesDemoLazyRoute
  '/form': typeof appExamplesFormLazyRoute
  '/query': typeof appExamplesQueryLazyRoute
  '/test/a/b': typeof testTestABRoute
  '/test/a/something': typeof testTestASomethingRoute
  '/demo/basic': typeof appExamplesDemoBasicLazyRoute
  '/demo/colors': typeof appExamplesDemoColorsLazyRoute
  '/test/a/b/c': typeof testTestABCRoute
}

export interface FileRoutesByTo {
  '/': typeof authAuthRouteWithChildren
  '/login': typeof authLoginRoute
  '/test': typeof testTestRoute
  '/privacy': typeof appPrivacyLazyRoute
  '/status': typeof appStatusLazyRoute
  '/terms': typeof appTermsLazyRoute
  '/dashboard': typeof authAuthDashboardRoute
  '/test/a': typeof testTestARoute
  '/demo': typeof appExamplesDemoLazyRoute
  '/form': typeof appExamplesFormLazyRoute
  '/query': typeof appExamplesQueryLazyRoute
  '/test/a/b': typeof testTestABRoute
  '/test/a/something': typeof testTestASomethingRoute
  '/demo/basic': typeof appExamplesDemoBasicLazyRoute
  '/demo/colors': typeof appExamplesDemoColorsLazyRoute
  '/test/a/b/c': typeof testTestABCRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/(app)': typeof appRouteWithChildren
  '/(app)/_examples': typeof appExamplesRouteWithChildren
  '/(auth)': typeof authRouteWithChildren
  '/(auth)/_auth': typeof authAuthRouteWithChildren
  '/(auth)/login': typeof authLoginRoute
  '/(test)/test_': typeof testTestRoute
  '/(app)/privacy': typeof appPrivacyLazyRoute
  '/(app)/status': typeof appStatusLazyRoute
  '/(app)/terms': typeof appTermsLazyRoute
  '/(auth)/_auth/dashboard': typeof authAuthDashboardRoute
  '/(test)/test/a_': typeof testTestARoute
  '/(app)/_examples/demo_': typeof appExamplesDemoLazyRoute
  '/(app)/_examples/form': typeof appExamplesFormLazyRoute
  '/(app)/_examples/query': typeof appExamplesQueryLazyRoute
  '/(test)/test/a/b_': typeof testTestABRoute
  '/(test)/test/a/something': typeof testTestASomethingRoute
  '/(app)/_examples/demo/basic': typeof appExamplesDemoBasicLazyRoute
  '/(app)/_examples/demo/colors': typeof appExamplesDemoColorsLazyRoute
  '/(test)/test/a/b/c': typeof testTestABCRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | '/login'
    | '/test'
    | '/privacy'
    | '/status'
    | '/terms'
    | '/dashboard'
    | '/test/a'
    | '/demo'
    | '/form'
    | '/query'
    | '/test/a/b'
    | '/test/a/something'
    | '/demo/basic'
    | '/demo/colors'
    | '/test/a/b/c'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | '/login'
    | '/test'
    | '/privacy'
    | '/status'
    | '/terms'
    | '/dashboard'
    | '/test/a'
    | '/demo'
    | '/form'
    | '/query'
    | '/test/a/b'
    | '/test/a/something'
    | '/demo/basic'
    | '/demo/colors'
    | '/test/a/b/c'
  id:
    | '__root__'
    | '/'
    | '/(app)'
    | '/(app)/_examples'
    | '/(auth)'
    | '/(auth)/_auth'
    | '/(auth)/login'
    | '/(test)/test_'
    | '/(app)/privacy'
    | '/(app)/status'
    | '/(app)/terms'
    | '/(auth)/_auth/dashboard'
    | '/(test)/test/a_'
    | '/(app)/_examples/demo_'
    | '/(app)/_examples/form'
    | '/(app)/_examples/query'
    | '/(test)/test/a/b_'
    | '/(test)/test/a/something'
    | '/(app)/_examples/demo/basic'
    | '/(app)/_examples/demo/colors'
    | '/(test)/test/a/b/c'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  appRoute: typeof appRouteWithChildren
  authRoute: typeof authRouteWithChildren
  testTestRoute: typeof testTestRoute
  testTestARoute: typeof testTestARoute
  testTestABRoute: typeof testTestABRoute
  testTestASomethingRoute: typeof testTestASomethingRoute
  testTestABCRoute: typeof testTestABCRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  appRoute: appRouteWithChildren,
  authRoute: authRouteWithChildren,
  testTestRoute: testTestRoute,
  testTestARoute: testTestARoute,
  testTestABRoute: testTestABRoute,
  testTestASomethingRoute: testTestASomethingRoute,
  testTestABCRoute: testTestABCRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/(app)",
        "/(auth)",
        "/(test)/test_",
        "/(test)/test/a_",
        "/(test)/test/a/b_",
        "/(test)/test/a/something",
        "/(test)/test/a/b/c"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/(app)": {
      "filePath": "(app)",
      "children": [
        "/(app)/_examples",
        "/(app)/privacy",
        "/(app)/status",
        "/(app)/terms"
      ]
    },
    "/(app)/_examples": {
      "filePath": "(app)/_examples.tsx",
      "parent": "/(app)",
      "children": [
        "/(app)/_examples/demo_",
        "/(app)/_examples/form",
        "/(app)/_examples/query",
        "/(app)/_examples/demo/basic",
        "/(app)/_examples/demo/colors"
      ]
    },
    "/(auth)": {
      "filePath": "(auth)",
      "children": [
        "/(auth)/_auth",
        "/(auth)/login"
      ]
    },
    "/(auth)/_auth": {
      "filePath": "(auth)/_auth.tsx",
      "parent": "/(auth)",
      "children": [
        "/(auth)/_auth/dashboard"
      ]
    },
    "/(auth)/login": {
      "filePath": "(auth)/login.tsx",
      "parent": "/(auth)"
    },
    "/(test)/test_": {
      "filePath": "(test)/test_.tsx"
    },
    "/(app)/privacy": {
      "filePath": "(app)/privacy.lazy.tsx",
      "parent": "/(app)"
    },
    "/(app)/status": {
      "filePath": "(app)/status.lazy.tsx",
      "parent": "/(app)"
    },
    "/(app)/terms": {
      "filePath": "(app)/terms.lazy.tsx",
      "parent": "/(app)"
    },
    "/(auth)/_auth/dashboard": {
      "filePath": "(auth)/_auth.dashboard.tsx",
      "parent": "/(auth)/_auth"
    },
    "/(test)/test/a_": {
      "filePath": "(test)/test.a_.tsx"
    },
    "/(app)/_examples/demo_": {
      "filePath": "(app)/_examples/demo_.lazy.tsx",
      "parent": "/(app)/_examples"
    },
    "/(app)/_examples/form": {
      "filePath": "(app)/_examples/form.lazy.tsx",
      "parent": "/(app)/_examples"
    },
    "/(app)/_examples/query": {
      "filePath": "(app)/_examples/query.lazy.tsx",
      "parent": "/(app)/_examples"
    },
    "/(test)/test/a/b_": {
      "filePath": "(test)/test.a.b_.tsx"
    },
    "/(test)/test/a/something": {
      "filePath": "(test)/test.a.something.tsx"
    },
    "/(app)/_examples/demo/basic": {
      "filePath": "(app)/_examples/demo.basic.lazy.tsx",
      "parent": "/(app)/_examples"
    },
    "/(app)/_examples/demo/colors": {
      "filePath": "(app)/_examples/demo.colors.lazy.tsx",
      "parent": "/(app)/_examples"
    },
    "/(test)/test/a/b/c": {
      "filePath": "(test)/test.a.b.c.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
