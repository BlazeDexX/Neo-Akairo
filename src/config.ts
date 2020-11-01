require('dotenv').config();

/* Bot Config */
export const token: string = process.env.token;
export const owners: string[] = ["242969117479403520"];

/* Lavalink Credential */
export const HOST: string = process.env.LAVAIP;
export const PORT: any = process.env.LAVAPORT;
export const PASSWORD: string = process.env.LAVAPASS;

/* Spotify Credential */
export const SpotifyClientID = `${process.env.SpotifyClientID}`;
export const SpotifyClientSecret = `${process.env.SpotifyClientSecret}`;