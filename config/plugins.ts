export default ({ env }) => ({
    // upload: {
    //   config: {
    //     provider: "strapi-provider-upload-supabase",
    //     providerOptions: {
    //       apiUrl: env('SUPABASE_API_URL'),
    //       apiKey: env('SUPABASE_API_KEY'),
    //       bucket: env('SUPABASE_BUCKET'),
    //     },
    //     sizeLimit: 250 * 1024 * 1024,
    //   },
    // },
    "users-permissions": {
      config: {
        register: {
          allowedFields: [
            "clients"
          ],
        },
      },
      enabled: true,
    },
    upload: {
      config: {
        provider: 'cloudinary',
        providerOptions: {
          cloud_name: env('CLOUDINARY_NAME'),
          api_key: env('CLOUDINARY_KEY'),
          api_secret: env('CLOUDINARY_SECRET'),
        },
        actionOptions: {
          upload: {},
          delete: {},
        },
      },
    },
  })