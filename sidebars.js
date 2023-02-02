module.exports = {
  monoSidebar: [
    "index",
    {
      type: "category",
      label: "Concepts",
      collapsible: true,
      collapsed: true,
      link: {
        type: "doc",
        id: "concepts",
      },
      items: [
        "temporal",
        "workflows",
        "activities",
        "retry-policies",
        "workers",
        "tasks",
        "visibility",
        "clusters",
        "namespaces",
      ],
    },
    {
      type: "category",
      label: "Dev guide",
      collapsible: true,
      collapsed: true,
      link: {
        type: "doc",
        id: "application-development/index",
      },
      items: [
        "application-development/foundations",
        "application-development/features",
        "application-development/observability",
        "application-development/testing",
        "application-development/worker-performance",
      ],
    },
    {
      type: "category",
      label: "Temporal Cloud",
      collapsible: true,
      collapsed: true,
      link: {
        type: "doc",
        id: "cloud/index",
      },
      items: [
        "cloud/how-to-get-started-with-temporal-cloud",
        "cloud/how-to-manage-certificates-in-temporal-cloud",
        "cloud/how-to-manage-namespaces-in-temporal-cloud",
        "cloud/how-to-monitor-temporal-cloud-metrics",
        {
          type: "category",
          label: "CLI - tcld",
          collapsible: true,
          collapsed: true,
          link: {
            type: "doc",
            id: "cloud/tcld/index",
          },
          items: [
            "cloud/tcld/login",
            "cloud/tcld/account",
            "cloud/tcld/namespace",
            "cloud/tcld/request",
            "cloud/tcld/version",
          ],
        },
        "cloud/how-to-create-a-ticket-for-temporal-support",
        {
          type: "link",
          label: "Release notes",
          href: "https://docs.temporal.io/cloud/release-notes",
        },
      ],
    },
    "cluster-deployment-guide",
    "security",
    {
      type: "category",
      label: "CLI - tctl v1.17",
      collapsible: true,
      collapsed: true,
      link: {
        type: "doc",
        id: "tctl-v1/index",
      },
      items: [
        "tctl-v1/activity",
        "tctl-v1/admin",
        "tctl-v1/batch",
        "tctl-v1/cluster",
        "tctl-v1/dataconverter",
        "tctl-v1/namespace",
        "tctl-v1/schedule",
        "tctl-v1/taskqueue",
        "tctl-v1/workflow",
      ],
    },
    {
      type: "category",
      label: "CLI - tctl next",
      collapsible: true,
      collapsed: true,
      link: {
        type: "doc",
        id: "tctl-next/index",
      },
      items: [
        "tctl-next/activity",
        "tctl-next/batch",
        "tctl-next/cluster",
        "tctl-next/config",
        "tctl-next/data-converter",
        "tctl-next/namespace",
        "tctl-next/schedule",
        "tctl-next/search-attribute",
        "tctl-next/task-queue",
        "tctl-next/workflow",
        "tctl-next/modifiers",
      ],
    },
    "web-ui",
    {
      type: "category",
      label: "References",
      collapsed: true,
      collapsible: true,
      link: {
        type: "doc",
        id: "references/index",
      },
      items: [
        "references/sdk-metrics",
        "references/cluster-metrics",
        "references/commands",
        "references/errors",
        "references/events",
        "references/configuration",
        "references/web-ui-configuration",
        "references/web-ui-environment-variables",
        "references/server-options",
        {
          type: "link",
          label: "Go SDK API",
          href: "https://pkg.go.dev/go.temporal.io/sdk",
        },
        {
          type: "link",
          label: "Java SDK API",
          href: "https://www.javadoc.io/doc/io.temporal/temporal-sdk/latest/index.html",
        },
        {
          type: "link",
          label: "Python SDK API",
          href: "https://python.temporal.io/",
        },
        {
          type: "link",
          label: "TypeScript SDK API",
          href: "https://typescript.temporal.io",
        },
      ],
    },
    "glossary",
    {
      type: "link",
      label: "Docs changelog",
      href: "/changelog",
    },
    {
      type: "link",
      label: "Feedback",
      href: "https://github.com/temporalio/documentation/issues",
    },
    //    {
    //      type: "link",
    //      label: "Docs survey",
    //      href: "https://docs.google.com/forms/d/16iIw8p8LSMJDA2a8_3y1pdnFDP5fVg2FLAc6jm__PVc/viewform?edit_requested=true",
    //    },
  ],
  sidebarCluster: [
    {
      type: "category",
      label: "Cluster how-tos",
      collapsible: false,
      collapsed: false,
      items: [
        "server/production-deployment",
      ],
    },
  ],
};
