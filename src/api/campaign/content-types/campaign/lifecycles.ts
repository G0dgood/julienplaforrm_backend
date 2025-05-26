module.exports = {
    async afterCreate(event) {
      const { result } = event;
      console.log("🚀 ~ afterCreate ~ result:", result)
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
  
      const client = campaignWithClient.client;
      if (!client || !client.users || client.users.length === 0) return;
  
      const userIds = client.users.map((user) => user.documentId);
  
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