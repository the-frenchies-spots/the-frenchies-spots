export const mockUser = {
  accessToken:
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NTA2YWZiMWIyNWQ4ZmE3MDNmMjdmMTMiLCJlbWFpbCI6Imxhbm9uQG1haWwuZnIiLCJwcm9maWxlSWQiOiI2NTA2YWZiMWIyNWQ4ZmE3MDNmMjdmMTQiLCJyb2xlIjoiU0lNUExFX1VTRVIiLCJpYXQiOjE2OTQ5NDU5NDAsImV4cCI6MTY5NDk0OTU0MH0.0zBJrxT4PytncwcwFAxsFeBBn2kuhSpkm5iPI4qymaI',
  refreshToken:
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NTA2YWZiMWIyNWQ4ZmE3MDNmMjdmMTMiLCJlbWFpbCI6Imxhbm9uQG1haWwuZnIiLCJwcm9maWxlSWQiOiI2NTA2YWZiMWIyNWQ4ZmE3MDNmMjdmMTQiLCJyb2xlIjoiU0lNUExFX1VTRVIiLCJhY2Nlc3NUb2tlbiI6ImV5SmhiR2NpT2lKSVV6STFOaUlzSW5SNWNDSTZJa3BYVkNKOS5leUoxYzJWeVNXUWlPaUkyTlRBMllXWmlNV0l5TldRNFptRTNNRE5tTWpkbU1UTWlMQ0psYldGcGJDSTZJbXhoYm05dVFHMWhhV3d1Wm5JaUxDSndjbTltYVd4bFNXUWlPaUkyTlRBMllXWmlNV0l5TldRNFptRTNNRE5tTWpkbU1UUWlMQ0p5YjJ4bElqb2lVMGxOVUV4RlgxVlRSVklpTENKcFlYUWlPakUyT1RRNU5EVTVOREFzSW1WNGNDSTZNVFk1TkRrME9UVTBNSDAuMHpCSnJ4VDRQeXRuY3djd0ZBeHNGZUJCbjJrdWhTcGttNWlQSTRxeW1hSSIsImlhdCI6MTY5NDk0NTk0MCwiZXhwIjoxNjk1NTUwNzQwfQ.hLj8o0Mi81gbVm2orfTErI_IYzD-1beF1M77f7U2-Os',
  user: {
    email: 'lanon@mail.fr',
    hashedPassword:
      '$2a$10$8gfpYvGthns7JGSYsAOtJOLBUGtHVIBSqEdOglcVSdT3u6TGMvSu6',
    hashedRefreshToken:
      '$2a$10$5P/3Uu6zvPXbUJx3rHbt0O81w1UTca40cZ7h2vBRgfjGYCwovxxSu',
    id: '6506afb1b25d8fa703f27f13',
    profile: {
      id: '6506afb1b25d8fa703f27f14',
      gamePoint: 0,
      photoUrl: null,
      pseudo: 'lalalalaaalalalalala',
      userId: '6506afb1b25d8fa703f27f13',
    },
    role: 'SIMPLE_USER',
  },
};

export const mockAuthRepository = {
  getOneByEmail: jest.fn().mockResolvedValue(mockUser),
  getOneById: jest.fn().mockResolvedValue(mockUser),
};
