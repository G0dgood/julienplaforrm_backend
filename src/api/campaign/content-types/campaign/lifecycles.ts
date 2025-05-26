module.exports = {
    async afterCreate(event) {
      const { result } = event;
      console.log("🚀 result:", result)
      const campaignId = result.documentId;
  
      // Fetch the campaign with the client and its users populated
      const campaignWithClient = await strapi.documents('api::campaign.campaign').findOne({
        documentId: campaignId,
        populate: {
          client: {
            populate: ['users'],
          },
        },
      });

      console.log("🚀 campaignWithClient:", campaignWithClient)
  
      const client = campaignWithClient.client;
      if (!client || !client.users || client.users.length === 0) return;
  
      const userIds = client.users.map((user) => user.documentId);
  
      console.log("🚀 client:", client)
      // For each user, attach the campaign
      await Promise.all(
        userIds.map((userId) =>
          strapi.documents('plugin::users-permissions.user').update({
            documentId: userId,
            data: {
              campaigns: {
                connect: [campaignId],
              },
            },
          })
        )
      );
    },
  };