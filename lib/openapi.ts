export const openApiDocument = {
  openapi: "3.1.0",
  info: {
    title: "Hive Automation CMS API",
    version: "1.0.0",
    description: "Machine Blog API for Hive Automation CMS.",
  },
  servers: [{ url: "/" }],
  paths: {
    "/api/blogs": {
      get: {
        tags: ["Machine Blog API"],
        summary: "List blog posts",
        security: [{ ApiKeyAuth: [] }],
      },
      post: {
        tags: ["Machine Blog API"],
        summary: "Create a draft blog post",
        security: [{ ApiKeyAuth: [] }],
      },
    },
    "/api/blogs/{id}": {
      get: {
        tags: ["Machine Blog API"],
        summary: "Get a blog post by ID",
        security: [{ ApiKeyAuth: [] }],
      },
      patch: {
        tags: ["Machine Blog API"],
        summary: "Update a blog post",
        security: [{ ApiKeyAuth: [] }],
      },
      delete: {
        tags: ["Machine Blog API"],
        summary: "Soft delete a blog post",
        security: [{ ApiKeyAuth: [] }],
      },
    },
    "/api/blogs/{id}/publish": {
      post: {
        tags: ["Machine Blog API"],
        summary: "Publish a blog post",
        security: [{ ApiKeyAuth: [] }],
      },
    },
  },
  components: {
    securitySchemes: {
      ApiKeyAuth: {
        type: "apiKey",
        in: "header",
        name: "X-API-Key",
      },
    },
  },
} as const;
