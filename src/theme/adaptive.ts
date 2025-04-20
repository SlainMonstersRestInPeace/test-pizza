const mobileMax = "833px";
const tabletMin = "834px";
const tabletMax = "1311px";
const desktopMin = "1312px";

export const MEDIA_SCREEN_MOBILE = `screen and (max-width: ${mobileMax})`;
export const MEDIA_SCREEN_TABLET = `screen and (min-width: ${tabletMin}) and (max-width: ${tabletMax})`;
export const MEDIA_SCREEN_DESKTOP = `screen and (min-width: ${desktopMin})`;
