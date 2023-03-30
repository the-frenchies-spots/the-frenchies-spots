import Constants from "expo-constants";

// const API_URL = Constants?.expoConfig?.extra?.API_URL;
// const MAPBOX_API_URL = Constants?.expoConfig?.extra?.MAPBOX_API_URL;
// const MAPBOX_API_KEY = Constants?.expoConfig?.extra?.MAPBOX_API_KEY;
// const STRIPE_PUBLIC_KEY = Constants?.expoConfig?.extra?.STRIPE_PUBLIC_KEY;

// import {
//   API_URL,
//   MAPBOX_API_URL,
//   MAPBOX_API_KEY,
//   STRIPE_PUBLIC_KEY,
// } from "@env";

// const API_URL = "https://frenchies-spot-api.vercel.app/api/graphql";
const API_URL = "http://localhost:3000/api/graphql";
const STRIPE_PUBLIC_KEY =
  "pk_test_51MRuLiLJCxgBx3YPbAjM2k3F0OnWshFqdVG0jrmFF8mb7c5zroyvMXpPjuh5Y8P82Jhk3MYIhJ0flCyTqIcKxbE600xjzHKtTU";
const MAPBOX_API_KEY =
  "pk.eyJ1IjoibW9yZ2FuZWR1bHVjIiwiYSI6ImNrdnc1MGRyejA3NDcyb3A0ZDBvZnJoOHIifQ.oKbJN0xnJQvYgfOfcSZzyw";
const MAPBOX_API_URL = "https://api.mapbox.com/geocoding/v5/mapbox.places/";

// const API_URL = process.env.API_URL;
// const MAPBOX_API_URL = process.env.MAPBOX_API_URL;
// const MAPBOX_API_KEY = process.env.MAPBOX_API_KEY;
// const STRIPE_PUBLIC_KEY = process.env.STRIPE_PUBLIC_KEY;

export { API_URL, MAPBOX_API_URL, MAPBOX_API_KEY, STRIPE_PUBLIC_KEY };
