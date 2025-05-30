module.exports = {
  async afterCreate(event) {
    try {
      const { result } = event;
      const campaignId = result.id;

      // Fetch campaign by ID and populate client and its users
      const campaignWithClient = await strapi.entityService.findOne(
        "api::campaign.campaign",
        campaignId,
        {
          populate: {
            client: {
              populate: ["users"],
            },
          },
        }
      );
      //@ts-ignore
      const client = campaignWithClient.client;
      if (!client || !client.users || client.users.length === 0) return;

      const userIds = client.users.map((user) => user.id);

      // Connect campaign to each user
      await Promise.all(
        userIds.map((userId) =>
          strapi.entityService.update(
            "plugin::users-permissions.user",
            userId,
            {
              data: {
                campaigns: {
                  //@ts-ignore
                  connect: [campaignId],
                },
              },
            }
          )
        )
      );
    } catch (error) {
      console.error("🔥 Lifecycle hook error:", error);
    }
  },
};
