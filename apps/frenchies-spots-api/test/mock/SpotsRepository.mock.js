module.exports = class SpotRepository {
    constructor() {}
    create(data, profilId) {}
    getAll(data) {}
    getByID(spotId, profileId) {}
    update(data, currentProfileId) {}
    delete(data, currentProfileId) {}
    checkCreatedByCurrentUserOrThrow(spotId, currentProfileId) {}
    checkSpotCategoryAndTagCategoryAreTheSame(spotCategory, tagCategory) {}
};