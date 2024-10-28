import { Address, getAddress } from "viem";

export const ZERO_ADDRESS = getAddress(
  "0x0000000000000000000000000000000000000000"
);

/**
 * Typed as a number, but set to a constant negative one (-1).
 * This constant is used as a placeholder or default value in scenarios where a number is required
 * but a valid or actual value is not yet set or applicable. It is considered unsafe because it
 * might lead to unexpected behavior if not properly handled in logic that expects a real value.
 */
export const UNSAFE_UNSET_NUMBER = -1;
export const ZERO_TOKEN_ID = UNSAFE_UNSET_NUMBER;

/**
 * This mint fee must be added to the value sent to mint NFTs from the Drop market
 */
export const MINT_FEE_AMOUNT = BigInt(10000000);

/**
 * Amount paid to creator for free mints
 */
export const MINT_FEE_CREATOR_REWARD_AMOUNT = MINT_FEE_AMOUNT / BigInt(2);

export const NOT_FOUND = {
  notFound: true as const,
  revalidate: 5,
};

export const POST_TITLE_MAX_LENGTH = 40;
export const POST_CAPTION_MAX_LENGTH = 200;
export const POST_PROJECT_TITLE_MAX_LENGTH = 40;

export const SALE_DURATION_IN_HOURS = 24;

export const TERMS_AND_CONDITIONS_URL = `https://help.rodeo.club/hc/en-us/articles/27871512952475`;
export const PRIVACY_POLICY_URL = `https://foundation.app/privacy`;

/**
 * If you are testing via ngrok, update this to your ngrok URL.
 * */
export const DEVELOPMENT_DOMAIN = "localhost:3000";

export const GLOBAL_NAV_HEIGHT = 64;

export const REMIX_EARNINGS_SPLIT = {
  MINTER: 0.75,
  CREATOR: 0.25,
};

export const COMMENT_MAX_LENGTH = 1000;
export const COMMENT_MAX_MENTIONS = 10;
export const COMMENTS_MAX_INITIAL_REPLIES = 2;

export const DEFAULT_AVATAR_PATH = "/images/resources/default-avatar.svg";

export const PROD_ORIGIN = "https://rodeo.club";

export const LANDSCAPE_FARCASTER_FRAME_ASPECT_RATIO = 1.91;
export const FARCASTER_FRAME_IMAGE_WIDTH = 1260;
export const SQUARE_FARCASTER_FRAME_IMAGE_HEIGHT = FARCASTER_FRAME_IMAGE_WIDTH;
export const LANDSCAPE_FARCASTER_FRAME_IMAGE_HEIGHT =
  FARCASTER_FRAME_IMAGE_WIDTH / LANDSCAPE_FARCASTER_FRAME_ASPECT_RATIO;

export const DEFAULT_FEED_VERSION = 8;

export const RODEO_FARCASTER_FID = 645771;

export const INPUT_DEBOUNCE_MS = 200;

/** Our team's wallet address that receives referral rewards from other platforms, e.g. Highlight */
export const RODEO_REFERRER = "0x21037Cf5f02D006F60b7826f0Ae926860700AC8e";

export const SMART_ACCOUNT_ENTRYPOINT_ADDRESS = "0x";

export const BASE_COLLECTION_ADDRESS: Address =
  "0x96c2E93Aa994D0A467f377c77075B00421EFB046";

export const MOBILE_INSTALL_APP_BANNER_HEIGHT = "52px";
