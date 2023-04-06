const mockSpotService = require("./mock/SpotsRepository.mock");
const { mockRequest} = require("jest-mock-req-res");

const spotBusiness = require("../business/spots/spots-business");
const spotController = require("../controllers/spots/spots-controller");
const business = spotBusiness(mockSpotService);
const controller = spotController(business);

afterEach(() => {
    jest.clearAllMocks();
})

describe("Check Spot Business", () => {
    test("if create spot Ok", async () => {
        const req = mockRequest({
            body: {
                name: "ratatouille2",
                description: "Lorem ipsum dolor is das",
                lat: 47.52383337419195,
                lng: 1.3288326562525015,
                isCanPark: false,
                isHidden: false,
                category: "SPARE_TIME_SPOT",
                region: "40",
                spotPicture: [
                    {url: "https://res.cloudinary.com/db00tntyg/image/upload/v1674834433/travelerSpot/lm52n3x6acu9tuumekm9.webp"}, 
                    {url: "https://res.cloudinary.com/db00tntyg/image/upload/v1674834433/travelerSpot/bpn9yzad5ubxcsi7xtab.jpg"}
                ],
                tags: [
                    {id: "641dad477d3480f05227d8e3"}
                ],
            },
        });
        const profileId = "profileId";
        
        mockSpotService.create.mockReturnValue(true);

        const res = await controller.create(req, profileId);

        expect(res).toBe(true);
    });
});